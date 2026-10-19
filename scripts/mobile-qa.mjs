import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4330';
const paths = ['/', '/libro/', '/servicios/escrituras-inmuebles/', '/servicios/certificaciones/', '/servicios/sociedades/', '/servicios/familia/', '/servicios/sucesiones-prevision/'];
const sizes = [{width:320,height:720},{width:390,height:844},{width:430,height:932},{width:667,height:375},{width:844,height:390}];
await mkdir('artifacts',{recursive:true});
const browser = await chromium.launch({channel:'chrome',headless:true});
const results=[];
try {
 for(const viewport of sizes){
  const context=await browser.newContext({viewport,isMobile:true,hasTouch:true,deviceScaleFactor:2,reducedMotion:'reduce'});
  for(const path of paths){
   const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   assert.equal((await page.goto(base+path,{waitUntil:'networkidle'})).status(),200);
   await page.evaluate(()=>document.fonts.ready);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Desborde ${path} ${viewport.width}`);
   if(viewport.width<=760){
    const menu=page.locator('.menu-toggle');
    const box=await menu.boundingBox();assert.ok(box.width>=44&&box.height>=44);
    await menu.tap();assert.equal(await menu.getAttribute('aria-expanded'),'true');
    const nav=page.locator('#navigation');
    const navBox=await nav.boundingBox();assert.ok(navBox.y+navBox.height<=viewport.height+1,'Menú dentro de la pantalla');
    await nav.locator('a').last().scrollIntoViewIfNeeded();assert.ok(await nav.locator('a').last().evaluate(e=>{const r=e.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight}));
    await menu.tap();assert.equal(await menu.getAttribute('aria-expanded'),'false');
    const type=await page.locator('.faq-list summary h3').first().count();
    if(type)assert.ok(await page.locator('.faq-list summary h3').first().evaluate(e=>parseFloat(getComputedStyle(e).fontSize)>=14));
   }
   if(path==='/'){
    if(viewport.width<=430){
     assert.ok(!(await page.locator('.floating-wa').isVisible()), 'No tapar la portada con contacto duplicado');
     await page.locator('.service-card').first().scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>document.body.dataset.showContactShortcut==='true');
     assert.ok(await page.locator('.floating-wa').isVisible());
    }
    const faq=page.locator('.faq-list summary').first();await faq.tap();assert.equal(await page.locator('.faq-list details').first().getAttribute('open'),'');
    await page.locator('.faq-service-link').first().tap();await page.waitForURL('**/servicios/escrituras-inmuebles/');
    await page.goto(base,{waitUntil:'networkidle'});
    if(viewport.width<=430){
     await page.locator('.hero-actions a').scrollIntoViewIfNeeded();const action=await page.locator('.hero-actions a').boundingBox();assert.ok(action.height>=48);
     assert.ok(await page.locator('.credentials').evaluate(e=>parseFloat(getComputedStyle(e).fontSize)>=13));
     await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
     await page.screenshot({path:`artifacts/movil-despues-${viewport.width}.png`,fullPage:true});
     if(viewport.width===390){
      await page.screenshot({path:'artifacts/movil-portada-390.png'});
      for(const [name,selector] of [['biografia','#escribana'],['ubicacion','#ubicacion'],['preguntas','#preguntas']])await page.locator(selector).screenshot({path:`artifacts/movil-${name}-390.png`,style:'.header,.floating-wa,.skip-link{visibility:hidden!important}'});
     }
    }
   }
   assert.deepEqual(errors,[]);results.push({path,viewport,overflow:false,touchMenu:true,errors});await page.close();
  }
  await context.close();
 }
 // Without scripting the expanded menu must scroll away, even in landscape.
 const plain=await browser.newContext({viewport:{width:667,height:375},javaScriptEnabled:false,isMobile:true,hasTouch:true});
 const page=await plain.newPage();await page.goto(base);assert.ok(await page.locator('#navigation').isVisible());assert.equal(await page.locator('.header').evaluate(e=>getComputedStyle(e).position),'static');await plain.close();
 await writeFile('artifacts/auditoria-movil.json',JSON.stringify(results,null,2));console.log(`Revisión móvil: ${results.length} vistas y alternativa sin JavaScript correctas.`);
} finally {await browser.close();}
