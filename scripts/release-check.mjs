import assert from 'node:assert/strict';
import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

// Validate the actual deployable output, including machine-readable representations.
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? files(join(directory, entry.name)) : [join(directory, entry.name)]));
  return nested.flat();
}
const generated = await files('dist');
for (const file of generated.filter(file => /\.(html|md|txt|xml|json)$/.test(file))) {
  const text = await readFile(file, 'utf8');
  assert.ok(!text.replace(/\D/g, '').includes('3514604614'), `Teléfono fijo retirado: ${file}`);
  assert.ok(!/href=["']tel:/i.test(text), `No ofrecer llamadas al teléfono retirado: ${file}`);
}
const home = await readFile('dist/index.html', 'utf8');
const nodes = JSON.parse(home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
assert.equal(nodes.find(node => node['@type'] === 'Notary').telephone, '+5493516867532');
const sources = new Set();
const redirects = await readFile('dist/_redirects', 'utf8');
for (const line of redirects.split('\n').filter(line => line.trim() && !line.startsWith('#'))) {
  const [source, destination, status, extra] = line.trim().split(/\s+/);
  assert.ok(!sources.has(source) && source.startsWith('/') && !extra, `Regla única y válida: ${line}`);
  sources.add(source);
  assert.equal(status, '301');
  const target = new URL(destination, 'https://escribaniajureramos.com.ar');
  assert.equal(target.origin, 'https://escribaniajureramos.com.ar');
  const targetHtml = target.pathname === '/' ? home : await readFile(`dist${target.pathname}index.html`, 'utf8');
  if (target.hash) assert.ok(targetHtml.includes(`id="${target.hash.slice(1)}"`));
}
assert.equal(sources.size, 8);
const headers = await readFile('dist/_headers', 'utf8');
assert.ok(/https:\/\/:project\.pages\.dev\/\*\s+X-Robots-Tag: noindex/.test(headers));
assert.ok(/https:\/\/:version\.:project\.pages\.dev\/\*\s+X-Robots-Tag: noindex/.test(headers));
assert.ok(!/^\/\*\s+X-Robots-Tag: noindex/m.test(headers), 'No bloquear el dominio definitivo');
assert.ok(headers.includes('X-Content-Type-Options: nosniff'));
for (const file of ['robots.txt', 'sitemap-index.xml', 'sitemap-0.xml', 'llms.txt', '404.html']) await access('dist/' + file);
assert.equal((await readFile('.node-version', 'utf8')).trim(), '24');
console.log('Preparación para Pages: contacto activo, 8 redirecciones, cabeceras y archivos de publicación correctos.');
