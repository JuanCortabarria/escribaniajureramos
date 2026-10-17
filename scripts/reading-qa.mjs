import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
try {
  for (const width of [1440, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = []; page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const roots = page.locator('[data-reading-text]');
    assert.equal(await roots.count(), 7);
    const first = roots.first(); await first.scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
    const progress = await first.locator('.reading-character').evaluateAll(es => es.map(e => Number(getComputedStyle(e).opacity)));
    assert.ok(progress.some(v => v > .1)); assert.ok(progress.some(v => v === 0));
    const ticks = await page.locator('.credentials li').evaluateAll(es => es.filter(e => e.querySelector('[data-reading-state="playing"]')).map(e => ({
      tickDelay: getComputedStyle(e.querySelector('svg')).animationDelay,
      textDelay: getComputedStyle(e.querySelector('.reading-character')).animationDelay,
    })));
    assert.ok(ticks.every(tick => tick.tickDelay === tick.textDelay));
    const before = await first.evaluate(e => e.getBoundingClientRect().height);
    await page.screenshot({ path: `artifacts/lectura-progreso-${width}.png` });
    for (let index = 1; index < 7; index++) { await roots.nth(index).scrollIntoViewIfNeeded(); await page.waitForTimeout(60); }
    await page.waitForFunction(() => [...document.querySelectorAll('[data-reading-text]')].every(e => e.getAttribute('data-reading-state') === 'complete'), null, { timeout: 15000 });
    assert.equal(await first.evaluate(e => e.getBoundingClientRect().height), before);
    assert.ok(await roots.evaluateAll(es => es.every(e => e.querySelector('.reading-accessible').textContent === e.querySelector('.reading-visual').textContent)));
    await first.scrollIntoViewIfNeeded(); await page.waitForTimeout(150);
    assert.equal(await first.getAttribute('data-reading-state'), 'complete');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.locator('#preguntas').scrollIntoViewIfNeeded(); await page.waitForTimeout(700);
    assert.equal(await page.locator('#faq-title').evaluate(e => getComputedStyle(e).animationName), 'none');
    assert.equal(await page.locator('.faq-heading-text').count(), 0);
    assert.equal(await page.locator('#preguntas [data-motion-toggle]').count(), 0);
    await page.locator('.faq-list summary').first().click(); await page.waitForTimeout(400);
    assert.equal(await page.locator('.faq-list details').first().getAttribute('open'), '');
    assert.deepEqual(errors, []);
    results.push({ width, progressiveLetters: true, complete: true, ticksSynchronized: true, noReplay: true, stableLayout: true, faqNoRotation: true, faqWorks: true, errors });
    await page.close();
  }
  for (const options of [{ reducedMotion: 'reduce' }, { javaScriptEnabled: false }]) {
    const page = await browser.newPage(options); await page.goto(base, { waitUntil: 'networkidle' });
    await page.locator('.about-intro').scrollIntoViewIfNeeded();
    assert.ok(await page.locator('.about-intro .reading-character').evaluateAll(es => es.every(e => getComputedStyle(e).opacity === '1')));
    results.push({ options, completeTextVisible: true }); await page.close();
  }
  for (const mode of ['pause', 'reduce']) {
    const page = await browser.newPage(); await page.goto(base, { waitUntil: 'networkidle' });
    await page.locator('.about-intro').scrollIntoViewIfNeeded(); await page.waitForTimeout(100);
    if (mode === 'pause') await page.evaluate(() => document.documentElement.dataset.motionPaused = 'true');
    else await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.waitForTimeout(100);
    assert.equal(await page.locator('.about-intro [data-reading-text]').getAttribute('data-reading-state'), 'complete');
    results.push({ mode, immediateComplete: true }); await page.close();
  }
  await writeFile('artifacts/lectura-qa.json', JSON.stringify(results, null, 2)); console.log(JSON.stringify(results));
} finally { await browser.close(); }
