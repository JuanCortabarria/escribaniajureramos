import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
const headline = '.hero-title-viewport';
const currentTitle = () => document.querySelector('.hero-title-viewport')?.getAttribute('data-current-title');
try {
  for (const width of [1440, 768, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.hero-description').evaluate(e => Promise.all(e.getAnimations().map(a => a.finished.catch(() => {}))));
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('h1').getAttribute('aria-label'), 'Escribanía en Nueva Córdoba. Solange Jure Ramos.');
    const top = await page.locator('.hero-description').evaluate(e => e.getBoundingClientRect().top + window.scrollY);
    await page.waitForFunction(() => document.querySelector('.hero-title-viewport')?.getAttribute('data-current-title') === 'Solange Jure Ramos', null, { timeout: 6000 });
    const pause = page.locator('.hero-visual [data-motion-toggle]');
    await pause.click();
    await page.waitForFunction(() => document.documentElement.dataset.motionPaused === 'true');
    const stable = await page.locator(headline).getAttribute('data-current-title');
    await page.waitForTimeout(3100);
    assert.equal(await page.locator(headline).getAttribute('data-current-title'), stable);
    assert.ok(Math.abs(await page.locator('.hero-description').evaluate(e => e.getBoundingClientRect().top + window.scrollY) - top) < 1);
    assert.equal(await page.locator('.hero-rotation-toggle, .hero-specialties, .hero-call').count(), 0);
    assert.equal(await page.locator('.hero-actions a').count(), 1);
    assert.equal(await page.locator('.hero-phone-icon.lucide-phone-call').count(), 1);
    assert.equal(await page.locator('.hero-phone-emoji').count(), 0);
    assert.ok((await page.locator('.hero-actions a').getAttribute('href')).startsWith('https://wa.me/'));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `artifacts/hero-titular-nombre-${width}.png` });
    await pause.press('Enter');
    await page.waitForFunction(() => document.querySelector('.hero-title-viewport')?.getAttribute('data-current-title') === 'Escribanía en Nueva Córdoba.', null, { timeout: 6000 });
    await pause.click();
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `artifacts/hero-titular-ubicacion-${width}.png` });
    await page.locator('.hero-visual .services-jump').click();
    await page.waitForURL('**/#servicios');
    assert.equal(await page.locator('.service-card').count(), 5);
    assert.deepEqual(errors, []);
    results.push({ width, bothTitles: true, pauseAndResume: true, stableLayout: true, oneWhatsAppAction: true, noPlayOrCall: true, overflow: false, errors });
    await page.close();
  }
  for (const options of [{ reducedMotion: 'reduce' }, { javaScriptEnabled: false }]) {
    const page = await browser.newPage(options);
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3100);
    assert.equal(await page.locator(headline).getAttribute('data-current-title'), 'Escribanía en Nueva Córdoba.');
    assert.ok(await page.locator('h1').isVisible());
    assert.equal(await page.locator('.hero-actions a').count(), 1);
    results.push({ options, staticLocationTitle: true, realLink: true });
    await page.close();
  }
  const page = await browser.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(400);
  const stable = await page.locator(headline).getAttribute('data-current-title');
  await page.waitForTimeout(3100);
  assert.equal(await page.locator(headline).getAttribute('data-current-title'), stable);
  results.push({ dynamicReducedMotion: true });
  await page.close();
  await writeFile('artifacts/hero-titular-qa.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
} finally { await browser.close(); }
