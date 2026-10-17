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

## Páginas de servicios

La información se edita en `src/config/service-pages.ts`, incluyendo las reglas de atención y presupuesto. Hay una página por área: `/servicios/escrituras-inmuebles/`, `/servicios/certificaciones/`, `/servicios/sociedades/`, `/servicios/familia/` y `/servicios/sucesiones-prevision/`. La plantilla HTML y las versiones Markdown se generan desde ese mismo contenido.

`src/lib/structured-data.ts` construye el grafo correspondiente a cada página. Las FAQ se incluyen solo en la página que las muestra. Para revisar las cinco páginas con Chrome, iniciar `npm run preview -- --port 4322` y ejecutar `npm run audit:services`. Las páginas están en revisión local y requieren aprobación del texto antes de publicar.

## Libro y movimiento

La miniatura de la biografía abre `/libro/` en una pestaña nueva. El relato y datos se editan en `src/config/book.ts`; `/libro.md` ofrece la misma información en Markdown. La página incluye datos estructurados del libro y aparece en el sitemap.

`src/styles/page-transitions.css` habilita transiciones nativas de 200 ms entre páginas en navegadores compatibles. Los efectos continuos del acceso a servicios y del título de FAQ pueden pausarse con sus controles sincronizados. El dispositivo con movimiento reducido los muestra estáticos. La preferencia de pausa se aplica a la página actual y se reinicia al volver a cargarla.

### Portada animada (React)

La portada incorpora una isla React con renderizado HTML inicial en Astro; no se migra el resto del sitio. El componente del prompt está adaptado en `src/components/ui/animated-hero.tsx`: título fijo y áreas de práctica rotativas en español. La ubicación `src/components/ui` sigue la estructura del proyecto dentro de `src`; el alias `@/components/ui` apunta allí. `components.json` registra esa estructura para componentes shadcn.

`src/components/ui/button.tsx` contiene el botón reutilizable de estilo shadcn, con Radix Slot y variantes. `src/lib/utils.ts` resuelve clases. Tailwind se integra mediante su complemento de Vite y `src/styles/hero-ui.css`, con prefijo `tw:` y sin Preflight para conservar los estilos existentes. TypeScript configura el alias `@/*` y JSX de React.

La instalación habitual (`npm install`) prepara las dependencias; `npm run dev` abre la versión local. No es necesario volver a ejecutar el asistente de shadcn. Para conservar compatibilidad entre sus dependencias, la integración React y su complemento de Vite están fijados en versiones compatibles en `package.json`.

La rotación se detiene al pausar movimiento desde cualquiera de los controles, al ocultar la pestaña o al salir la portada de pantalla. Con movimiento reducido se muestra una palabra estable. Sin JavaScript permanecen visibles el título, descripción, área inicial y enlaces reales. La foto de portada y el acceso a servicios se conservan; no se incorporan imágenes de stock ni textos comerciales del ejemplo.

Verificación específica de esta portada: `npm run audit:hero` (servidor local en 4322; se puede cambiar con `QA_BASE_URL`). Las capturas y resultados quedan en `artifacts/`.
