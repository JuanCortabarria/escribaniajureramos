import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://escribaniajureramos.com.ar', integrations: [sitemap()], output: 'static', devToolbar: { enabled: false } });
