import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[];
for(const viewport of [{width:1440,height:1000},{width:390,height:844},{width:768,height:1024}]){
 const page=await browser.newPage({viewport});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(`${base}/`,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const sizes=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));assert.ok(sizes.scroll<=sizes.width,`Sin desborde a ${viewport.width}`);
 assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('.service-card').count(),5);assert.equal(await page.locator('iframe').count(),0);
 await page.locator('.faq-list details').first().locator('summary').click();assert.ok(await page.locator('.faq-list details').first().getAttribute('open')!==null);
 if(viewport.width===390){await page.locator('.menu-toggle').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');await page.locator('#navigation a[href="#servicios"]').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');}
 await page.emulateMedia({reducedMotion:'reduce'});await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.screenshot({path:`artifacts/portada-${viewport.width}.png`});await page.screenshot({path:`artifacts/vista-${viewport.width}.png`,fullPage:true});
 if(viewport.width===1440){await page.locator('#load-map').click();assert.equal(await page.locator('iframe').count(),1);assert.ok((await page.locator('iframe').getAttribute('src')).includes('-31.4245341'));}
 assert.equal(errors.length,0);results.push({viewport,overflow:false,errors,faq:true,menu:viewport.width===390?'passed':'n/a'});await page.close();
}
await browser.close();await writeFile('artifacts/auditoria-navegador.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));
