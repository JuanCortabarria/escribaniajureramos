import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[];
const slugs=['escrituras-inmuebles','certificaciones','sociedades'];
try {
 for (const width of [1440,390,320]) {
  for (const slug of slugs) {
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
   const errors=[];page.on('pageerror',error=>errors.push(error.message));
   const response=await page.goto(`http://127.0.0.1:4322/servicios/${slug}/`,{waitUntil:'networkidle'});
   assert.equal(response.status(),200);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert.ok(!overflow,`${slug} a ${width}px`);
   assert.equal(await page.locator('h1').count(),1);
   await page.locator('.faq-list summary').first().click();assert.ok(await page.locator('.faq-list details').first().getAttribute('open')!==null);
   const href=await page.locator('.service-hero .button').getAttribute('href');assert.ok(new URL(href).searchParams.get('text').includes(await page.locator('h1').innerText()));
   const markdown=await page.request.get(`http://127.0.0.1:4322/servicios/${slug}.md`);assert.equal(markdown.status(),200);assert.ok(markdown.headers()['content-type'].includes('text/markdown'));
   if(width===390){await page.locator('.menu-toggle').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');assert.equal(await page.locator('#navigation a').first().getAttribute('href'),'/#escribana');}
   await page.evaluate(()=>{(document.activeElement instanceof HTMLElement)&&document.activeElement.blur();window.scrollTo({top:0,behavior:'instant'});});
   await page.screenshot({path:`artifacts/servicio-${slug}-${width}.png`,fullPage:true});
   assert.deepEqual(errors,[]);results.push({slug,width,status:response.status(),overflow,faq:true,markdown:true,errors});await page.close();
  }
 }
 const home=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 await home.goto('http://127.0.0.1:4322/',{waitUntil:'networkidle'});
 for(const slug of slugs){const link=home.locator(`.service-card a[href="/servicios/${slug}/"]`);await link.click();await home.waitForURL(`**/servicios/${slug}/`);await home.locator('.breadcrumbs a').click();await home.waitForURL('http://127.0.0.1:4322/');}
 await home.close();
 await writeFile('artifacts/auditoria-servicios.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));
} finally { await browser.close(); }
