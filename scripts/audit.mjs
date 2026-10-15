import { readFile, access, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('dist/index.html','utf8');
const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal((html.match(/<h1\b/g)||[]).length,1,'Un solo H1');
assert.deepEqual(graph['@graph'].map(n=>n['@type']),['Notary','Person','WebSite','WebPage','FAQPage']);
const business=graph['@graph'][0];
assert.ok(html.includes(business.address.streetAddress),'Dirección consistente');
assert.ok(html.includes(business.email),'Email consistente');
assert.equal(graph['@graph'].find(node=>node['@type']==='FAQPage').mainEntity.length,6);
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const match of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(match[1]),`Ancla válida: ${match[1]}`);
for(const match of html.matchAll(/(?:src|href)="(\/(?:images|_astro)\/[^"]+)"/g)) await access('dist'+match[1]);
for(const file of ['llms.txt','index.md','robots.txt','sitemap-index.xml','404.html']) await access('dist/'+file);
const llms=await readFile('dist/llms.txt','utf8');
assert.ok(llms.startsWith('# Escribanía Jure Ramos\n\n> '));
assert.ok(llms.includes('/index.md)'));
const markdown=await readFile('dist/index.md','utf8');
for(const q of graph['@graph'].find(node=>node['@type']==='FAQPage').mainEntity)assert.ok(markdown.includes(q.name));
assert.ok(html.includes('rel="alternate" type="text/markdown"'));
assert.ok(html.includes('rel="describedby"'));
assert.ok(!/<iframe/.test(html),'No se carga mapa sin acción');
assert.ok(!/fonts\.googleapis|googletagmanager|google-analytics/.test(html));

// Cross-check independent public representations and route-specific FAQ scope.
const sitemap=await readFile('dist/sitemap-0.xml','utf8');
for (const slug of ['escrituras-inmuebles','certificaciones','sociedades']) {
  const path=`/servicios/${slug}/`;
  const page=await readFile(`dist${path}index.html`,'utf8');
  const md=await readFile(`dist/servicios/${slug}.md`,'utf8');
  const data=JSON.parse(page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const entity=data['@graph'].find(node=>node['@type']==='Service');
  const pageFaq=data['@graph'].find(node=>node['@type']==='FAQPage');
  const office=data['@graph'].find(node=>node['@type']==='Notary');
  assert.ok(entity && pageFaq,`Schema del servicio: ${slug}`);
  assert.equal((page.match(/<h1\b/g)||[]).length,1);
  assert.ok(page.includes(entity.name) && md.includes(entity.name));
  assert.ok(page.includes('href="'+entity.url+'"'),`Canonical del servicio: ${slug}`);
  assert.ok(html.includes(`href="${path}"`) && sitemap.includes(entity.url));
  assert.ok(page.includes(`/servicios/${slug}.md`) && llms.includes(`/servicios/${slug}.md`));
  assert.equal(pageFaq.mainEntity.length,(page.match(/<details>/g)||[]).length);
  for(const question of pageFaq.mainEntity){assert.ok(page.includes(question.name));assert.ok(md.includes(question.name));assert.ok(md.includes(question.acceptedAnswer.text));}
  assert.equal(office.openingHoursSpecification[1].closes,'14:00');
  assert.ok(!('founder' in office) && !('foundingDate' in office),'No afirmar fundación no confirmada');
  assert.ok(page.includes('href="/#escribana"') && page.includes('href="/#servicios"'));
}

const report={date:new Date().toISOString(),status:'passed',checks:['H1 único','JSON-LD parseable con cuatro entidades tipadas','Contacto coherente entre HTML y schema','6 FAQ visibles y en Markdown','Anclas internas y recursos presentes','robots, sitemap, llms.txt, Markdown y 404 generados','Sin iframe inicial ni rastreadores externos','Tres páginas enlazadas e incluidas en sitemap','FAQ específicas coinciden entre HTML, JSON-LD y Markdown','Horarios y navegación a la portada coherentes']};
await writeFile('artifacts/auditoria-tecnica.json',JSON.stringify(report,null,2));
console.log('Auditoría técnica: todas las verificaciones pasaron.');
