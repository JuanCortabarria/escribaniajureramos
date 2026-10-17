import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
const local = new URL(base);
const origin = 'https://escribaniajureramos.com.ar';
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const sitemapResponse = await context.request.get(`${base}/sitemap-0.xml`);
  assert.equal(sitemapResponse.status(), 200);
  const urls = [...(await sitemapResponse.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
  assert.equal(urls.length, 7);
  const resources = new Set();
  const destinations = new Set();
  for (const path of urls) {
    const page = await context.newPage();
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (new URL(r.url()).origin === local.origin && r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
    const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    const info = await page.evaluate(() => {
      const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
      return {
        h1: document.querySelectorAll('h1').length,
        main: document.querySelectorAll('main').length,
        duplicateIds: ids.filter((id, i) => ids.indexOf(id) !== i),
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
        noindex: document.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex'),
        links: [...document.querySelectorAll('a[href]')].map(e => e.getAttribute('href')),
        resources: [...document.querySelectorAll('[src],link[rel="stylesheet"],link[rel="alternate"],link[rel="describedby"]')].map(e => e.getAttribute('src') || e.getAttribute('href')).filter(Boolean).concat([...document.querySelectorAll('source[srcset]')].flatMap(e => e.getAttribute('srcset').split(',').map(s => s.trim().split(/\s+/)[0]))),
        graph: JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent),
      };
    });
    assert.equal(info.h1, 1); assert.equal(info.main, 1); assert.deepEqual(info.duplicateIds, []);
    assert.ok(info.title && info.description && !info.noindex); assert.equal(info.canonical, origin + path);
    assert.ok(info.graph['@graph'].some(n => n['@type'] === 'WebPage'));
    for (const href of info.links) {
      const target = new URL(href, `${base}${path}`);
      if (target.origin === local.origin || target.origin === origin) destinations.add(target.pathname + target.hash);
      if (target.hostname === 'wa.me') assert.equal(target.pathname, '/5493516867532');
    }
    for (const resource of info.resources) if (resource.startsWith('/')) resources.add(resource);
    if (path === '/libro/') {
      assert.ok((await page.locator('.book-publisher').innerText()).includes('Fernando Pérez Hualde y Juan F. Klaps'));
      for (const width of [1440, 390, 320]) {
        await page.setViewportSize({ width, height: 900 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        await page.screenshot({ path: `artifacts/revision-libro-${width}.png`, fullPage: true });
      }
    }
    assert.deepEqual(errors, []); results.push({ path, status: 200, metadata: true, uniqueIds: true, errors });
    await page.close();
  }
  // Check actual route and fragment targets, not just link strings.
  const probe = await context.newPage();
  for (const destination of destinations) {
    const target = new URL(destination, base);
    const response = await probe.goto(target.href, { waitUntil: 'domcontentloaded' });
    assert.equal((response ?? await context.request.get(`${base}${target.pathname}`)).status(), 200, destination);
    if (target.hash) assert.ok(await probe.evaluate(id => !!document.getElementById(id), decodeURIComponent(target.hash.slice(1))), destination);
  }
  for (const path of resources) assert.equal((await context.request.get(base + path)).status(), 200, path);
  const missing = await probe.goto(`${base}/__qa_pagina_inexistente__/`);
  assert.equal(missing.status(), 404);
  assert.ok((await probe.locator('meta[name="robots"]').getAttribute('content')).includes('noindex'));
  await context.close();
  // Regression: the mobile menu and map link must remain functional without JS.
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 900 } });
  const staticPage = await noJs.newPage();
  for (const path of ['/', '/servicios/certificaciones/', '/libro/']) {
    await staticPage.goto(base + path);
    assert.ok(await staticPage.locator('#navigation').isVisible());
    assert.ok(!(await staticPage.locator('.menu-toggle').isVisible()));
    assert.ok(await staticPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    if (path === '/') assert.equal(await staticPage.locator('#load-map').getAttribute('href'), 'https://maps.app.goo.gl/pffBjQ2gELqhX14o8');
  }
  await staticPage.goto(base + '/');
  await staticPage.locator('#navigation a[href="#servicios"]').click();
  await staticPage.waitForURL('**/#servicios');
  await staticPage.screenshot({ path: 'artifacts/revision-sin-js-320.png', fullPage: true });
  await noJs.close();
  // Navigation must remain usable when downloaded modules cannot load.
  const blocked = await browser.newContext({ viewport: { width: 320, height: 900 } });
  await blocked.route('**/_astro/*.js', route => route.abort());
  const blockedPage = await blocked.newPage();
  await blockedPage.goto(base, { waitUntil: 'networkidle' });
  if (await blockedPage.locator('.menu-toggle').isVisible()) await blockedPage.locator('.menu-toggle').click();
  assert.ok(await blockedPage.locator('#navigation').isVisible());
  assert.equal(await blockedPage.locator('#load-map').getAttribute('href'), 'https://maps.app.goo.gl/pffBjQ2gELqhX14o8');
  await blocked.close();
  // Regression: Escape must not steal focus while the menu is closed.
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.locator('.hero-actions a').focus(); await page.keyboard.press('Escape');
  assert.ok(await page.locator('.hero-actions a').evaluate(e => e === document.activeElement));
  await page.locator('.menu-toggle').click(); await page.locator('#navigation a').first().focus(); await page.keyboard.press('Escape');
  assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
  assert.ok(await page.locator('.menu-toggle').evaluate(e => e === document.activeElement));
  // Pause completes native effects, including a counter already running.
  await page.evaluate(() => document.documentElement.dataset.motionPaused = 'true');
  await page.waitForTimeout(150);
  assert.ok(await page.locator('.year-value').evaluateAll(es => es.every(e => e.textContent === '2002')));
  await page.locator('.service-card').first().scrollIntoViewIfNeeded();
  assert.ok(await page.locator('.service-card').first().evaluate(e => e.getAnimations().every(a => a.playState !== 'running')));
  await page.locator('.book-teaser').scrollIntoViewIfNeeded();
  const popup = page.waitForEvent('popup'); await page.locator('.book-teaser').click();
  const book = await popup; await book.waitForLoadState('domcontentloaded'); assert.equal(new URL(book.url()).pathname, '/libro/'); await book.close();
  assert.deepEqual(errors, []); await page.close();
  // Pause during the actual counter update, rather than after its natural end.
  const counterContext = await browser.newContext();
  await counterContext.addInitScript(() => {
    const observer = new MutationObserver(() => {
      if ([...document.querySelectorAll('.year-value')].some(e => e.textContent === '1000')) {
        window.__qaCounterPaused = true;
        document.documentElement.dataset.motionPaused = 'true';
        observer.disconnect();
      }
    });
    observer.observe(document, { childList: true, subtree: true });
  });
  const counterPage = await counterContext.newPage();
  await counterPage.goto(base, { waitUntil: 'networkidle' });
  await counterPage.waitForFunction(() => window.__qaCounterPaused === true);
  assert.equal(await counterPage.locator('.year-value').first().textContent(), '2002');
  await counterContext.close();
  // Missing optional animation APIs must not break the hero or its contact link.
  const legacy = await browser.newContext();
  await legacy.addInitScript(() => { delete window.IntersectionObserver; });
  const legacyPage = await legacy.newPage(); const legacyErrors=[]; legacyPage.on('pageerror', e => legacyErrors.push(e.message));
  await legacyPage.goto(base, { waitUntil: 'networkidle' });
  await legacyPage.waitForFunction(() => document.querySelector('.hero-title-viewport')?.getAttribute('data-current-title') === 'Solange Jure Ramos');
  assert.deepEqual(legacyErrors, []); await legacy.close();
  results.push({ internalDestinations: destinations.size, resources: resources.size, noJsMobileNavigation: true, blockedModuleFallback: true, mapFallback: true, activeCounterPause: true, escapeFocus: true, globalPause: true, bookPopup: true, missingIntersectionObserver: true, notFound: 404 });
  await mkdir('artifacts', { recursive: true });
  await writeFile('artifacts/revision-completa-qa.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
} finally { await browser.close(); }
