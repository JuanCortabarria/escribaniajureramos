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

WhatsApp, correo y Google Maps funcionan mediante enlaces directos. No hay formulario, analytics, cookies propias ni solicitudes a Google Fonts. El mapa externo carga únicamente tras pulsar su enlace; sin JavaScript, ese enlace abre Maps directamente. Las FAQ usan elementos nativos de HTML.

## Referencias descargadas

Los tres repositorios están en `references/` (ignorados en Git y excluidos de TypeScript):

- `M4xKey/astro-chalet`, commit `8d55431`: arquitectura de configuración, estructura oscura/clara, tokens, SEO, imágenes prioritarias y navegación accesible. Diseño y contenido adaptados específicamente para la escribanía. Licencia MIT conservada en `licenses/astro-chalet-MIT.txt`.
- `google/schema-dts`, commit `62a5658`: documentación de grafos JSON-LD. La web usa el paquete npm para los tipos `Notary`, `Person`, `WebSite`, `FAQPage` y `Graph`.
- `AnswerDotAI/llms-txt`, commit `3700a0a`: propuesta v2, índice breve, enlace a Markdown y relaciones `alternate`/`describedby`. Esto facilita lectura por agentes; no garantiza posicionamiento ni menciones en IA.

## Revisión antes de publicar

Ver `PENDIENTES.md`. La web se mantiene en local hasta la revisión del usuario. El canonical y los enlaces del sitemap apuntan al dominio final previsto; son intencionales. `robots.txt` permite todos los agentes, incluidos bots de entrenamiento. Si se desea limitar alguno, editar ese endpoint antes de publicar.

Las redirecciones antiguas están preparadas en `public/_redirects`. Su aplicación en Cloudflare Pages, la migración del dominio y el alta o revisión de Google Business Profile, Search Console y Bing Webmaster Tools quedan para la publicación.

## Evidencia y revisión visual

`INFORME.md` registra las verificaciones y los pendientes. Las capturas y los informes originales de Lighthouse se encuentran en `artifacts/`. Para repetir la revisión de navegador, con Google Chrome instalado, iniciar `npm run preview -- --port 4322` y ejecutar `npm run audit:browser` en otra terminal.

## Páginas de servicios

La información se edita en `src/config/service-pages.ts`, incluyendo las reglas de atención y presupuesto. Hay una página por área: `/servicios/escrituras-inmuebles/`, `/servicios/certificaciones/`, `/servicios/sociedades/`, `/servicios/familia/` y `/servicios/sucesiones-prevision/`. La plantilla HTML y las versiones Markdown se generan desde ese mismo contenido.

`src/lib/structured-data.ts` construye el grafo correspondiente a cada página. Las FAQ se incluyen solo en la página que las muestra. Para revisar las cinco páginas con Chrome, iniciar `npm run preview -- --port 4322` y ejecutar `npm run audit:services`. Las páginas están en revisión local y requieren aprobación del texto antes de publicar.

## Libro y movimiento

La miniatura de la biografía abre `/libro/` en una pestaña nueva. El relato y datos se editan en `src/config/book.ts`; `/libro.md` ofrece la misma información en Markdown. La página incluye datos estructurados del libro y aparece en el sitemap.

`src/styles/page-transitions.css` habilita transiciones nativas de 200 ms entre páginas en navegadores compatibles. Los efectos continuos del acceso a servicios y del titular de portada pueden pausarse con el control de movimiento. El título de preguntas frecuentes permanece sin giro. El dispositivo con movimiento reducido los muestra estáticos. La preferencia de pausa se aplica a la página actual y se reinicia al volver a cargarla.

### Portada animada (React)

La portada incorpora una isla React con renderizado HTML inicial en Astro; no se migra el resto del sitio. El componente del prompt está adaptado en `src/components/ui/animated-hero.tsx`: titular que alterna «Escribanía en Nueva Córdoba.» y «Solange Jure Ramos», con una sola acción de consulta por WhatsApp y un ícono clásico de teléfono. La ubicación `src/components/ui` sigue la estructura del proyecto dentro de `src`; el alias `@/components/ui` apunta allí. `components.json` registra esa estructura para componentes shadcn.

`src/components/ui/button.tsx` conserva el botón reutilizable de estilo shadcn, con Radix Slot y variantes. El enlace de consulta de portada utiliza HTML y CSS nativos para evitar cargar estas utilidades en la isla. `src/lib/utils.ts` resuelve clases. Tailwind se integra mediante su complemento de Vite y `src/styles/hero-ui.css`, con prefijo `tw:` y sin Preflight para conservar los estilos existentes. TypeScript configura el alias `@/*` y JSX de React.

La instalación habitual (`npm install`) prepara las dependencias; `npm run dev` abre la versión local. No es necesario volver a ejecutar el asistente de shadcn. Para conservar compatibilidad entre sus dependencias, la integración React y su complemento de Vite están fijados en versiones compatibles en `package.json`.

La rotación se detiene al pausar movimiento desde cualquiera de los controles, al ocultar la pestaña o al salir la portada de pantalla. Con movimiento reducido se muestra un titular estable. Sin JavaScript permanecen visibles el titular inicial con la ubicación, descripción y enlace real. La foto de portada y el acceso a servicios se conservan; no se incorporan imágenes de stock ni textos comerciales del ejemplo.

Verificación específica de esta portada: `npm run audit:hero` (servidor local en 4322; se puede cambiar con `QA_BASE_URL`). Las capturas y resultados quedan en `artifacts/`.

La presentación y las cinco credenciales de la escribana se revelan letra por letra al entrar en pantalla, una sola vez y en orden de lectura, con ritmo rápido de 4 ms por carácter. Cada tilde aparece al mismo tiempo que comienza su credencial. `ReadingText.astro` conserva una copia accesible completa; sin JavaScript o con movimiento reducido el texto aparece completo. Pausar movimiento termina el revelado activo y deja visible todo el texto.

Verificación del revelado de biografía y de FAQ sin giro: `npm run audit:reading` (mismo servidor local y variable `QA_BASE_URL`).


## Revisión integral y optimización — 17/10/2026

La animación del titular conserva React y el contenido HTML inicial, pero usa fotogramas CSS nativos en lugar de Framer Motion. Se retiró esa dependencia. El menú móvil permanece disponible sin JavaScript; Escape solo cierra un menú abierto y devuelve el foco cuando corresponde. El control de pausa también completa los contadores y los efectos nativos activos. Los efectos continuos se habilitan cuando su control está disponible.

Las imágenes de portada, retrato y libro tienen variantes adaptativas; se conservan los originales y la transparencia del libro. `public/_headers` prepara políticas de tipo MIME, referer, permisos y prevención de marcos/objetos para Pages. Su aplicación efectiva se debe comprobar en el alojamiento público.

Pruebas sobre una compilación estática, con Chrome instalado:

```bash
npm run build
npm run audit
npm run preview -- --port 4330
# En otra terminal:
QA_BASE_URL=http://127.0.0.1:4330 npm run audit:site
QA_BASE_URL=http://127.0.0.1:4330 npm run audit:browser
QA_BASE_URL=http://127.0.0.1:4330 npm run audit:services
QA_BASE_URL=http://127.0.0.1:4330 npm run audit:hero
QA_BASE_URL=http://127.0.0.1:4330 npm run audit:reading
```

`audit:site` recorre las siete páginas desde el sitemap, comprueba enlaces, anclas, recursos adaptativos, metadatos y 404, y cubre navegación móvil sin JS, foco por Escape, contador pausado durante la suma, apertura del libro y ausencia de IntersectionObserver. Los informes y capturas se guardan en `artifacts/`. Las pruebas de rendimiento deben ejecutarse sin otras pruebas de navegador simultáneas para evitar distorsionar las métricas.


## Preparación para Cloudflare Pages — 19/10/2026

Configuración operativa y pendientes mínimos en `CLOUDFLARE-PAGES.md`. El panel debe usar `npm run check:release` y salida `dist`; `.node-version` fija Node 24. Esa comprobación compila y audita el resultado antes de publicar. `_headers` evita indexar las direcciones pages.dev sin bloquear el dominio definitivo. Comprobar esas cabeceras por HTTP cuando exista el proyecto.

El teléfono fijo retirado ya no forma parte del contenido ni de los datos estructurados: el contacto telefónico del negocio es el WhatsApp activo. No hay enlaces de llamada al fijo.

## Ver y revisar en un celular

1. Conectar el teléfono y la computadora a la misma red Wi-Fi.
2. Ejecutar `npm run check:release` y luego `npm run preview:mobile`.
3. Abrir en Safari o Chrome del teléfono la dirección que aparece en **Network**. Usar la IP de la computadora, no localhost. El puerto solicitado es 4331; si está ocupado, Astro puede indicar otro.
4. Mantener la computadora encendida y el servidor activo. Esta vista sirve la compilación estática y no publica el sitio en Internet. Tras editar, volver a compilar para ver los cambios.

`npm run audit:mobile` verifica las siete páginas en 320/390/430 px y dos vistas horizontales con interacción táctil, navegación y alternativa sin JavaScript. Se puede cambiar el servidor mediante QA_BASE_URL; usa 4330 por defecto. Capturas e informe en artifacts/movil-*.png y artifacts/auditoria-movil.json.

Los ajustes exclusivos de pantallas pequeñas están en src/styles/mobile.css. Las capturas aisladas de secciones ocultan los elementos fijos para que no aparezcan repetidos dentro de una captura larga; la portada conserva la vista normal.

También se puede aproximar la vista desde la computadora con el modo de dispositivos de Chrome: abrir las herramientas de desarrollo, activar el ícono de celular/tablet y elegir un tamaño. Esto no reemplaza probar Safari/Chrome en el teléfono real. [Documentación oficial](https://developer.chrome.com/docs/devtools/device-mode).

En celular, el WhatsApp flotante de inicio aparece al dejar atrás el botón principal de consulta, para no cubrir el acceso a servicios de la fotografía. Sin JavaScript se conservan los contactos del menú y las secciones; no se muestra ese acceso flotante duplicado en inicio. El comportamiento de escritorio se conserva.
