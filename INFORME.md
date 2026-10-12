# Revisión de la web local · 12/10/2026

Se construyó una nueva página en Astro con la paleta confirmada, las tres fotos suministradas y contenido basado en los documentos adjuntos y en la portada del sitio actual. No se publicó ni se cambió el dominio.

## Resultado de las verificaciones

| Verificación | Resultado |
|---|---|
| TypeScript / Astro | 0 errores, 0 advertencias |
| Compilación estática | Correcta |
| Navegador · 1440, 768 y 390 px | Sin desbordes ni errores de JavaScript |
| Menú móvil | Abre, cierra al navegar y permite cierre con Escape |
| FAQ | Desplegables nativos funcionales |
| Mapa | No carga inicialmente; se crea al hacer clic |
| Lighthouse móvil · rendimiento | 99/100 |
| Lighthouse móvil · accesibilidad | 100/100 |
| Lighthouse móvil · buenas prácticas | 100/100 |
| Lighthouse móvil · SEO | 100/100 |

Lighthouse 12.6.1 se ejecutó sobre la compilación estática en localhost, con Chrome sin interfaz y la simulación móvil predeterminada. Son mediciones de laboratorio, no datos de usuarios reales ni una garantía para la futura publicación. El puntaje de SEO revisa aspectos técnicos, no asegura posiciones en resultados de búsqueda. Los informes originales se conservaron; la herramienta temporal se retiró de las dependencias del proyecto.

## Mejoras aplicadas

- Título único, descripción, canonical, Open Graph, favicon e imagen para compartir.
- Un único H1 y jerarquía de encabezados.
- Cinco áreas depuradas, enlaces correctos y contacto sin formulario.
- Nombre de la titular, Registro 132, formación y trayectoria visibles.
- JSON-LD tipado con `Notary`, `Person`, `WebSite` y `FAQPage`, conectado por identificadores.
- Dirección, email, preguntas y contenido en Markdown coherentes con el HTML; se verifican automáticamente.
- Sitemap, robots.txt, 404, llms.txt v2 e index.md. La propuesta llms.txt facilita la lectura por agentes, sin promesas de visibilidad en IA.
- Fuentes alojadas localmente; imágenes WebP/AVIF y portada con variantes adaptables.
- Acceso mediante teclado, enlace para saltar al contenido, contraste corregido y respeto por movimiento reducido.
- Sin testimonios, puntuaciones, precios ni plazos inventados. Sin analytics ni scripts de terceros de entrada.

## Hallazgos y acciones pendientes

| Prioridad | Problema | Impacto y evidencia | Acción |
|---|---|---|---|
| Alta · antes de publicar | FAQ provisionales | El usuario enviará preguntas reales mañana; la sección actual se identifica como preliminar | Validar y reemplazar en `src/config/site.ts` |
| Alta · antes de publicar | Autorización de imágenes y vigencia de credenciales | Información tomada de adjuntos, sin verificación independiente de cargos actuales | Confirmar con la escribana |
| Media · publicación | URLs antiguas | El sitio actual usa `/jure-ramos`, `/areas-practica`, `/contacto`, `/sala` | Configurar 301 hacia las secciones equivalentes al migrar |
| Media · publicación | Ficha y pin de Google | Maps utiliza el enlace y coordenadas proporcionados | Confirmar ficha, pin y consistencia de contacto |
| Baja · identidad | Logo original no disponible | Se usa un logotipo tipográfico nítido | Sustituir si se entrega un original de calidad |

## Evidencia local

- `artifacts/portada-1440.png`, `portada-390.png`, `portada-768.png`.
- `artifacts/vista-1440.png`, `vista-390.png`, `vista-768.png` (páginas completas).
- `artifacts/auditoria-tecnica.json` y `auditoria-navegador.json`.
- `artifacts/lighthouse-mobile.report.html` y `.json`.

La auditoría confirma la estructura del JSON-LD y su tipado, pero no sustituye una revisión externa en Schema.org o en herramientas de Google tras la publicación. No se hicieron envíos a servicios externos de validación ni se prometen resultados enriquecidos de FAQ.
