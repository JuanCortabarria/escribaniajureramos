# Escribanía Jure Ramos

Nueva web estática en Astro, preparada para revisión local. No se publicó ni se modificó el sitio actual.

## Uso

Node.js **22.19 o superior** (recomendado: Node 24 LTS).

```bash
npm install
npm run dev
```

Abrir http://localhost:4321. Para verificar la versión final:

```bash
npm run build
npm run audit
npm run preview
```

`dist/` contiene el sitio estático generado. El puerto predeterminado es 4321; Astro indica otro si está ocupado.

## Edición

- `src/config/site.ts`: contacto, servicios, trayectoria, preguntas y fecha de actualización.
- `src/pages/index.astro`: composición y textos editoriales de la portada.
- `src/styles/tokens.css`: paleta exacta solicitada.
- `src/styles/global.css`: diseño, adaptación móvil y movimiento reducido.
- `src/components/Seo.astro`: metadatos y JSON-LD tipado.
- `src/pages/index.md.ts`, `llms.txt.ts` y `robots.txt.ts`: generados desde la misma configuración.

WhatsApp, teléfono, correo y Google Maps funcionan mediante enlaces directos. No hay formulario, analytics, cookies propias ni solicitudes a Google Fonts. El mapa externo carga únicamente tras pulsar su botón. Las FAQ usan elementos nativos de HTML.

## Referencias descargadas

Los tres repositorios están en `references/` (ignorados en Git y excluidos de TypeScript):

- `M4xKey/astro-chalet`, commit `8d55431`: arquitectura de configuración, estructura oscura/clara, tokens, SEO, imágenes prioritarias y navegación accesible. Diseño y contenido adaptados específicamente para la escribanía. Licencia MIT conservada en `licenses/astro-chalet-MIT.txt`.
- `google/schema-dts`, commit `62a5658`: documentación de grafos JSON-LD. La web usa el paquete npm para los tipos `Notary`, `Person`, `WebSite`, `FAQPage` y `Graph`.
- `AnswerDotAI/llms-txt`, commit `3700a0a`: propuesta v2, índice breve, enlace a Markdown y relaciones `alternate`/`describedby`. Esto facilita lectura por agentes; no garantiza posicionamiento ni menciones en IA.

## Revisión antes de publicar

Ver `PENDIENTES.md`. La web se mantiene en local hasta la revisión del usuario. El canonical y los enlaces del sitemap apuntan al dominio final previsto; son intencionales. `robots.txt` permite todos los agentes, incluidos bots de entrenamiento. Si se desea limitar alguno, editar ese endpoint antes de publicar.

La migración del dominio, las redirecciones 301 de las URLs antiguas y el alta o revisión de Google Business Profile, Search Console y Bing Webmaster Tools quedan para una etapa posterior.

## Evidencia y revisión visual

`INFORME.md` registra las verificaciones y los pendientes. Las capturas y los informes originales de Lighthouse se encuentran en `artifacts/`. Para repetir la revisión de navegador, con Google Chrome instalado, iniciar `npm run preview -- --port 4322` y ejecutar `npm run audit:browser` en otra terminal.
