# Plan de profesionalización, SEO local y GEO — Escribanía Jure Ramos

**Fecha:** 14/10/2026. **Estado:** planificación propuesta, pendiente de selección y aprobación. **Sitio final previsto:** https://escribaniajureramos.com.ar/. **Versión revisada:** proyecto local, con cambios hasta `766ec18`.

Este documento propone el trabajo siguiente. No implica que las acciones pendientes estén realizadas ni autoriza publicar, cambiar el dominio o activar Analytics. El objetivo es aumentar las consultas pertinentes para inmuebles, certificaciones y asesoramiento societario, conservando una web sobria, rápida y fácil de usar.

## 1. Diagnóstico y alcance de la revisión

La web tiene una base técnica sólida y una portada institucional definida. La oportunidad principal ahora es completar la información útil de cada servicio, verificar la identidad profesional, preparar la migración y medir resultados reales.

La revisión se basó en el código, `Decisiones.md`, `PENDIENTES.md`, los informes locales y los repositorios de referencia. Se consultó documentación oficial vigente. No se accedió a Search Console, Analytics ni al panel de Google Business Profile: no tenemos datos comprobados de posiciones, tráfico, volumen de búsquedas, conversiones, enlaces externos o estado de verificación de la ficha. Tampoco se realizó en esta tarea un rastreo completo de todas las URLs del WordPress actual.

**Distinción fundamental:** hay elementos implementados localmente; falta comprobarlos en el dominio publicado. El nuevo diseño en localhost todavía no puede generar visibilidad pública para Google.

### Estado comprobado

| Área | Ya implementado | Evidencia | Lo que falta |
|---|---|---|---|
| Tecnología | Astro estático, poco JavaScript y configuración central de datos | `astro.config.mjs`, `src/config/site.ts` | Validación en alojamiento definitivo |
| Identidad | Azul tinta, marfil, blanco y dorado; tipografías locales; titulares institucionales | `src/styles/`, `src/layouts/Layout.astro` | Logo original y revisión editorial final |
| Recorrido | Portada → La escribana → Ubicación → FAQ → Modalidad → Servicios → Contacto | `src/pages/index.astro` | Mantener este orden al ampliar el sitio |
| Perfil | Registro 132, actividad desde 2002 y las cinco credenciales suministradas | `site.ts`, sección del perfil | Respaldos institucionales y afiliaciones vigentes |
| Servicios | Cinco áreas, priorizadas según las consultas deseadas | `site.ts` | Páginas específicas y requisitos aprobados |
| Contacto | WhatsApp general y por servicio, teléfono, email, ubicación | Enlaces del HTML | Instrucciones de visita y solicitud de presupuesto |
| Horarios | Lunes a jueves 9–17; viernes 9–14 | HTML y JSON-LD desde configuración | Consistencia con Maps y horarios excepcionales |
| FAQ | Seis respuestas suministradas por la profesional | HTML, Markdown y schema | Aprobación final y revisión periódica |
| SEO básico | Título, descripción, canonical, Open Graph, favicon e imagen compartida | `Seo.astro` | Metadatos propios al crear otras páginas |
| Indexación | Sitemap y robots.txt generados | Endpoints y compilación | Alta y seguimiento en buscadores |
| Datos estructurados | `Notary`, `Person`, `WebSite`, `FAQPage`; grafo tipado | `Seo.astro`, schema-dts | Revisión semántica y validadores externos |
| Lectura por agentes | `/llms.txt`, `/index.md`, relaciones `alternate` y `describedby` | Endpoints desde configuración | Extender al contenido nuevo y comprobar acceso público |
| Rendimiento | AVIF/WebP, portada prioritaria, fuentes locales y mapa por clic | HTML, CSS y archivos de imagen | Medir en producción después de ampliar |
| Accesibilidad | Navegación por teclado, foco visible, salto al contenido y movimiento reducido | Componentes y estilos | Revisar el sitio completo, ampliado y publicado |
| Colaboración | Conflictos resueltos, decisiones registradas y avances compartidos | Git y `Decisiones.md` | Continuar mantenimiento y copias de seguridad |
| Medición | No hay Analytics ni Search Console configurados según los datos recibidos | `PENDIENTES.md` | Preparar cuentas y medición antes del lanzamiento |

La auditoría técnica guardada el 14/10 pasó. Lighthouse móvil del **12/10**, antes de varios cambios posteriores, registró rendimiento 99, accesibilidad 100, buenas prácticas 100 y SEO 100. Es una medición histórica de laboratorio: no describe automáticamente el estado final ni predice posiciones en Google. Repetirla sobre la compilación final publicada.

## 2. Uso de los tres repositorios

Los tres repositorios **ya están clonados** en `references/`; no hace falta descargarlos manualmente. Se revisaron estas versiones locales, sin afirmar que sean la última versión remota:

| Repositorio | Commit local | Qué conservar | Mejora propuesta |
|---|---|---|---|
| [Astro Chalet](https://github.com/M4xKey/astro-chalet) | `8d55431` | HTML estático, datos coherentes, tokens, SEO y accesibilidad | Separar secciones en componentes y centralizar también los textos editoriales hoy escritos en `index.astro` |
| [schema-dts](https://github.com/google/schema-dts) | `62a5658` | Tipos de Schema.org y grafo conectado | Crear grafos por tipo de página; verificar significado de propiedades además del tipado |
| [llms-txt](https://github.com/AnswerDotAI/llms-txt) | `3700a0a` | Propuesta v2, índice breve y versiones Markdown | Generar las versiones de cada página desde el mismo contenido y añadirlas al índice |

El estilo comercial del ejemplo de Chalet no se trasladará a la escribanía. Se aprovecha su arquitectura, respetando los titulares sobrios aprobados. La licencia MIT ya se conserva en `licenses/`.

`schema-dts` detecta incompatibilidades de tipos, pero no acredita títulos profesionales ni convierte un dato falso en correcto. `llms.txt` es una propuesta comunitaria y una ayuda para sistemas que decidan utilizarla. Google aclara que no lo necesita ni lo utiliza como mejora de visibilidad. [Guía oficial de optimización para IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## 3. Objetivos y criterios de éxito

1. Que un visitante reconozca quién lo atiende, qué gestiones realiza la escribanía y cómo consultar documentación y presupuesto.
2. Que Google pueda descubrir y comprender páginas útiles para los servicios prioritarios y la ubicación real.
3. Que la información profesional y de contacto sea consistente en la web, la ficha local y fuentes verificables.
4. Que los buscadores y asistentes puedan acceder a contenido claro, actualizado y atribuible a Solange.
5. Que las decisiones de contenido se basen en consultas recibidas y datos de búsqueda, no en llenar la página de palabras clave.

Separar tres canales: resultados orgánicos de Google, resultados locales/Maps y respuestas generativas. Se relacionan, pero no se miden ni se gestionan de la misma manera.

## 4. Fase 0 — Validación profesional y línea de base

**Prioridad P0. Antes de publicar. Responsable: profesional + equipo técnico.**

- Confirmar la denominación exacta de las credenciales nuevas, el registro y las afiliaciones del detalle de trayectoria. Diferenciar título académico de área de práctica: «Gobierno corporativo» no se presentará como una certificación que no fue suministrada.
- Obtener enlaces institucionales o publicaciones que puedan respaldar formación, docencia y trayectoria. Usar `sameAs` solo para perfiles que identifiquen inequívocamente a la persona o entidad correspondiente.
- Confirmar autorización de las fotos e incorporar fotografías reales de fachada y acceso si están disponibles. La foto de oficina suministrada debe representar el espacio que se quiere mostrar; no presentarla como un ambiente real de la escribanía sin esa confirmación.
- Validar las seis FAQ, especialmente documentación, gastos, poderes y copias digitales. La redacción final corresponde a la escribana; no ampliar requisitos ni prometer plazos por inferencia.
- Confirmar dirección, código postal, coordenadas, barrio y ficha de Maps; conservar el texto «Nueva Córdoba» solicitado y verificar la coherencia geográfica antes de publicación.
- Aclarar turno previo, canales, acceso al piso/oficina y facilidades de accesibilidad. No inventar estacionamiento, ascensor ni disponibilidad inmediata.
- Recibir el logo original si existe. El logotipo tipográfico puede mantenerse como identidad definitiva si se aprueba; el archivo original no es un requisito de posicionamiento.
- Confirmar titularidad y acceso del dominio, alojamiento, DNS y WordPress actual. Usar accesos delegados; no copiar contraseñas en archivos.
- Inventariar páginas, imágenes, PDFs, sitemap y enlaces del sitio antiguo. Exportar datos disponibles de búsqueda antes de la migración o iniciar medición cuanto antes si no existe.

**Entrega:** ficha de datos aprobados, inventario de URLs antiguas y línea de base disponible. **Aceptación:** ninguna credencial, ubicación o instrucción relevante se publica sin revisión; las carencias de datos se identifican explícitamente.

## 5. Fase 1 — Información útil y presentación profesional

**Prioridad P1. Mantener el diseño actual y su orden.**

### Perfil y confianza

Mantener el retrato, nombre, registro y credenciales. Agregar respaldo institucional discreto mediante enlaces pertinentes y una trayectoria resumida. Evitar listas extensas de cargos duplicados o elogios como «la mejor escribanía». Revisar el tamaño del texto: hoy existen textos de 8–12 px en detalles, tarjetas y navegación; evaluar ampliarlos para facilitar lectura real, aun cuando una auditoría automática haya pasado.

### Primera consulta y presupuesto

Preparar tres bloques breves, aprobados por Solange:

- **Cómo realizar una consulta:** tipo de trámite y contexto mínimo que conviene indicar.
- **Documentación inicial:** orientación general para iniciar la evaluación, con requisitos concretos donde proceda.
- **Cómo solicitar un presupuesto:** qué datos enviar y cómo se comunica su alcance; evitar importes genéricos si cambian según la operación.

Mantener WhatsApp como canal principal. Los mensajes por servicio ya existen; pulir su redacción y distinguir clic de consulta efectiva. Evitar solicitar documentos sensibles en la primera interacción automática.

### Ubicación

Mostrar dirección completa, horarios diferenciados, cómo coordinar una visita y acceso al edificio. Añadir una foto real de la entrada cuando exista. El gráfico actual es una ilustración de ubicación; debe seguir siendo distinguible del mapa real que se carga por clic.

**Entrega:** textos institucionales aprobados y revisión visual de escritorio/móvil. **Aceptación:** el cliente puede identificar profesional, gestión y canal de consulta sin depender de un eslogan; no se altera el orden de secciones aprobado.

## 6. Fase 2 — Arquitectura SEO y búsquedas prioritarias

### Investigación de demanda

Las siguientes son **hipótesis de consultas**, no palabras con volumen confirmado. Validarlas con Search Console disponible, herramientas de investigación con geografía argentina, búsquedas locales y consultas reales de clientes. Registrar intención, términos alternativos, resultados visibles y qué página debe responder. No extraer una supuesta posición universal de una sola búsqueda personalizada.

| Grupo | Ejemplos de búsqueda a investigar | Página prevista |
|---|---|---|
| Negocio y zona | escribanía Nueva Córdoba; escribano Córdoba capital; Escribanía Jure Ramos | Inicio |
| Inmuebles | escritura de compraventa Córdoba; escribanía para escriturar un departamento | Página de inmuebles |
| Certificaciones | certificar firma Córdoba; certificación de copias Nueva Córdoba | Página de certificaciones |
| Empresa | asesoramiento societario Córdoba; reestructuración de sociedades | Página de sociedades |
| Consultas informativas | documentos para escriturar; boleto y escritura; presupuesto de escritura | Servicio relacionado y guía específica si aporta contenido propio |
| Segunda etapa | poder notarial; autorización de viaje; protección de vivienda; testamentos | Página pertinente según demanda y aprobación |

Google recomienda usar los términos que las personas utilizan en los títulos y lugares descriptivos del contenido, y ofrecer enlaces rastreables. [Search Essentials](https://developers.google.com/search/docs/essentials).

### Arquitectura propuesta

Conservar una portada simple con el orden actual. Añadir profundidad mediante páginas independientes, accesibles desde las tarjetas, sin ampliar innecesariamente el menú principal.

| Prioridad | Ruta propuesta, todavía no creada | Titular informativo | Función |
|---|---|---|---|
| P1 | `/` | Escribanía en Nueva Córdoba | Identidad, zona y acceso al conjunto |
| P1 | `/servicios/escrituras-inmuebles/` | Escrituras y operaciones inmobiliarias en Córdoba | Compraventas, donaciones y orientación documental |
| P1 | `/servicios/certificaciones/` | Certificación de firmas y copias en Córdoba | Diferencias, documentación inicial y consulta |
| P1 | `/servicios/sociedades/` | Asesoramiento y reestructuración societaria | Empresa, sociedades y gestiones correspondientes |
| P2 | `/la-escribana/` | Solange Jure Ramos — trayectoria profesional | Biografía ampliada y respaldos, si hay material suficiente |
| P2 | `/servicios/poderes-autorizaciones/` | Poderes y autorizaciones notariales | Responder demanda validada |
| P2 | `/servicios/familia-sucesiones/` | Familia y planificación patrimonial | Ampliación aprobada de las áreas restantes |

Las rutas se fijarán antes de la migración. No crear páginas casi iguales por cada barrio ni un artículo por cada variante de una palabra. Evitar que varias URLs compitan con contenido prácticamente idéntico.

### Plantilla para cada servicio

1. H1 descriptivo y explicación breve de la actuación ofrecida.
2. Situaciones en las que se consulta por ese servicio.
3. Qué información necesita la escribanía para evaluar el caso.
4. Documentación inicial aprobada y circunstancias que pueden modificarla.
5. Modalidad de atención y cómo solicitar presupuesto.
6. Preguntas reales específicas del servicio.
7. Profesional responsable, fecha de revisión efectiva y fuentes oficiales cuando corresponda.
8. Contacto contextual e información de ubicación.

No fijar un número obligatorio de palabras. Publicar solo si la página aporta información suficiente y distinta. Ejemplo de título propuesto: «Certificación de firmas en Córdoba | Jure Ramos». El encabezado y la descripción deben ser claros, sin repeticiones de keywords; no utilizar una cantidad de caracteres como requisito universal. [Documentación de títulos de Google](https://developers.google.com/search/docs/appearance/title-link).

**Entrega:** mapa de consultas/páginas y tres servicios prioritarios revisados. **Aceptación:** cada página tiene una intención principal, contenido propio, URL estable y enlaces desde la portada; la profesional aprobó requisitos y explicaciones.

## 7. Fase 3 — SEO local y autoridad verificable

**Prioridad P1, en paralelo con los contenidos.**

Google basa principalmente los resultados locales en relevancia, distancia y prominencia. Una mejor web no puede cambiar la distancia física del negocio al usuario. [Ayuda oficial de posicionamiento local](https://support.google.com/business/answer/7091?hl=es).

### Google Business Profile

- Confirmar que el enlace proporcionado sea la ficha real, y quién tiene acceso y capacidad de verificación. No crear una ficha duplicada por desconocer la existente.
- Mantener el nombre real del negocio, sin añadir keywords al nombre para intentar posicionar.
- Seleccionar la categoría principal más fiel dentro de las disponibles para la ficha argentina; no asumir una traducción o categoría sin comprobar el panel.
- Completar teléfono, dirección con piso/oficina, horarios de cada día, servicios, fotografías reales y web final.
- Sincronizar datos visibles, JSON-LD y ficha. Una ficha desactualizada no se corrige solo editando la web.
- Registrar horarios excepcionales y revisar información cuando cambie.
- Usar un enlace de la ficha a la web con parámetros de atribución acordados, por ejemplo `utm_source=google&utm_medium=organic&utm_campaign=business_profile`; mantener el canonical sin esos parámetros.

### Reseñas y referencias externas

Proponer a la escribanía una solicitud neutral de reseñas auténticas, sin incentivos ni selección que descarte clientes insatisfechos. No se enviarán solicitudes o respuestas en nombre de la profesional sin autorización expresa. Las respuestas no deben divulgar datos del asunto atendido. [Política y recomendaciones de reseñas](https://support.google.com/business/answer/3474122?hl=es).

En la web puede haber un enlace discreto a las opiniones existentes. No añadir `AggregateRating` para prometer estrellas sobre la propia escribanía: Google limita las reseñas autocontroladas de negocios/organizaciones. [Reglas de review snippets](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

Revisar menciones legítimas en instituciones, publicaciones, docencia y perfiles profesionales. Solicitar correcciones de información o enlace cuando corresponda. No comprar enlaces ni generar menciones artificiales. No son obligatorias redes sociales nuevas si no se van a mantener.

**Entrega:** ficha comprobada y lista de referencias reales. **Aceptación:** datos consistentes, enlace al dominio correcto, fotos autorizadas y ausencia de fichas duplicadas conocidas.

## 8. Fase 4 — SEO técnico, schema y mantenimiento

### Antes del lanzamiento

- Revisar HTML final, un H1 por página, jerarquía, títulos y descripciones propios, canonical absoluto y `es-AR`.
- Comprobar enlaces internos y recursos, incluyendo archivos de `srcset`: la auditoría actual verifica `src`/`href`, pero no cubre todo el inventario de variantes.
- Ampliar las verificaciones de horarios de viernes, coherencia de datos y páginas nuevas; evitar pruebas que solo repitan la implementación sin detectar riesgos reales.
- Mantener sitemap con URLs finales, indexables y de respuesta 200; excluir 404 y páginas sin contenido válido. No usar `lastmod` como una fecha automática de cada build si el contenido no cambió.
- Mantener el sitio de revisión privado o con control de indexación; robots.txt no debe utilizarse como protección de información privada. Verificar que la versión pública no conserve bloqueos o `noindex` de revisión.
- Confirmar HTTPS, host preferido www/no-www y redirecciones sin cadenas. Mantener el dominio existente salvo que haya una decisión justificada de cambio.
- Revisar compresión, caché de archivos con nombre versionado, peso de imágenes, fuentes y dimensiones reservadas.
- Repetir Lighthouse en la compilación final; investigar problemas concretos en lugar de añadir dependencias para perseguir un puntaje.
- Medir Core Web Vitals en producción cuando exista suficiente tráfico: objetivo LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1, al percentil 75. Si no hay datos de campo suficientes, señalarlo y utilizar pruebas de laboratorio como aproximación. [Web Vitals](https://web.dev/articles/vitals).
- Revisar teclado, apertura/cierre de menú, foco, zoom, tamaños de texto, contraste y enlaces de contacto a 320, 390, 768 y 1440 px. Comprobar que botones flotantes no tapen contenido o controles.

### Datos estructurados

Conservar `Notary`, `Person` y `WebSite` con identificadores estables. Añadir `WebPage`, `Service` y `BreadcrumbList` donde describan información visible de nuevas páginas. No todas las clases de Schema.org producen un resultado enriquecido en Google.

Dos ajustes concretos a planificar:

1. **`founder` y `foundingDate`:** el código los utiliza, pero la información recibida acredita titularidad/ejercicio desde 2002. Confirmar que también acredita fundación de la entidad y fundadora; si no, retirar esas propiedades y mantener la trayectoria en el perfil.
2. **Grafo por página:** `Seo.astro` incluye actualmente las seis FAQ en cualquier página que use el componente sin `noindex`. Al ampliar, generar solo las preguntas visibles en cada página y enlazar al perfil sin replicar contenido que no se muestra.

Validar sintaxis con schema-dts, estructura en Schema.org y propiedades elegibles en la herramienta de Google. Revisar también la coincidencia semántica con los hechos: un grafo correcto en TypeScript puede afirmar algo incorrecto. [Reglas generales de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

Conservar las FAQ por su utilidad real; `FAQPage` puede describirlas, pero no se planifican resultados enriquecidos de preguntas. Google retiró esa función de sus resultados en 2026. [Actualizaciones oficiales](https://developers.google.com/search/updates#june-2026).

### Organización del código

Separar perfil, ubicación, preguntas, modalidad y servicios en componentes para reducir conflictos al trabajar entre compañeros. Mantener las decisiones en Git; extraer contenido editorial compartido a configuración o colecciones de Astro. Preservar el lockfile y Node compatible, revisar actualizaciones y asegurar copias de seguridad y restauración. No incorporar un CMS ni un framework de interfaz adicional sin una necesidad de edición concreta.

**Entrega:** auditoría de la compilación candidata y lista cerrada de problemas técnicos. **Aceptación:** sin enlaces internos rotos, canonicals incoherentes, schema engañoso ni errores de ejecución; móvil y teclado utilizables.

## 9. Fase 5 — GEO y contenido para buscadores con IA

El trabajo GEO se concentrará en información útil y comprobable, acceso técnico y medición. No en escribir textos artificiales para un supuesto algoritmo de IA. Google mantiene la relación entre SEO y sus funciones generativas y no exige formatos especiales ni una extensión de texto ideal. [Guía oficial de búsqueda generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

### Contenido y atribución

- Identificar claramente persona, registro, negocio, ciudad y ámbito de cada servicio.
- Describir trámites con experiencia profesional propia: preguntas reales, documentación inicial, límites y situaciones que ameritan consulta individual.
- Señalar quién revisó cada guía y cuándo se revisó de verdad; citar fuentes oficiales pertinentes sin reemplazar el criterio de la escribana.
- Escribir respuestas directas y comprensibles, con explicaciones y listas cuando ayuden al lector. No imponer bloques de 40 palabras ni densidades de keywords.
- Distinguir precios variables, requisitos sujetos al caso y normas que pueden cambiar. Revisar las guías cuando cambie el procedimiento aplicable.
- Usar ejemplos hipotéticos solo si se identifican como tales; no inventar casos atendidos, testimonios ni logros.

### Acceso para buscadores y agentes

El `robots.txt` actual permite todos los agentes. En producción revisar también alojamiento, CDN y protección contra bots: permitir en robots no garantiza que el servidor atienda la petición.

Planificar acceso a Googlebot, Bingbot y rastreadores de búsqueda como OAI-SearchBot, Claude-SearchBot y PerplexityBot. Distinguir buscadores de rastreadores de entrenamiento; no es necesario habilitar entrenamiento para adoptar una estrategia de visibilidad. Consultar reglas actuales antes de cambios, y verificar IP cuando el proveedor lo recomiende en una protección de red. No confiar solo en el nombre del user-agent. [OpenAI](https://developers.openai.com/api/docs/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).

Mantener `/llms.txt` pequeño y añadir enlaces a las nuevas versiones Markdown. Ambas representaciones deben salir del mismo contenido y conservar contacto, preguntas y fechas coherentes. Revisar enlaces y tipos MIME. No prometer que ChatGPT, Claude o Perplexity usarán esos archivos o citarán la web.

### Google y Bing

En Search Console comprobar que la propiedad no esté excluida de las funciones generativas. Según el control vigente, la inclusión puede heredarse de una propiedad superior y es independiente de decisiones de entrenamiento. [Control oficial](https://support.google.com/webmasters/answer/16908024).

Consultar el informe de rendimiento generativo para impresiones por página y otras dimensiones cuando tenga datos. Su ausencia puede deberse a insuficientes impresiones; no inventar una medición. [Informe oficial](https://support.google.com/webmasters/answer/16984139).

Verificar el dominio y sitemap en Bing Webmaster Tools y revisar rastreo/indexación. IndexNow se evaluará como complemento si se publican cambios frecuentes; no es un requisito inicial ni garantiza indexación o citas en asistentes. [Bing Webmaster Tools](https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/).

**Entrega:** matriz de coherencia HTML/schema/Markdown, acceso público verificado y propiedad de búsqueda lista para medir. **Aceptación:** información principal accesible y coincidente; los resultados generativos se describen como observaciones, no como posiciones garantizadas.

## 10. Fase 6 — Migración y publicación sin perder información

**P0: preparación. Publicación después de revisión expresa.**

1. Respaldar WordPress, medios y configuración anterior; documentar una ruta de recuperación.
2. Completar inventario real de URLs, incluyendo PDFs y páginas que tengan enlaces externos o tráfico.
3. Fijar las rutas definitivas y crear una correspondencia antigua/nueva basada en equivalencia de contenido.
4. Probar la compilación candidata en una vista de revisión sin indexación pública.
5. Configurar redirecciones permanentes en el alojamiento elegido. No publicar todavía un archivo dependiente de Vercel si no se confirmó la plataforma.
6. Comprobar SSL, host preferido, DNS y continuidad del correo del dominio; cambiar solo lo necesario para alojar la web.
7. Obtener revisión de la profesional, publicar y probar el dominio real.
8. Actualizar enlaces de la ficha, enviar sitemap e inspeccionar las páginas importantes.
9. Vigilar errores, redirecciones, recursos y consultas las primeras 48–72 horas; disponer de recuperación si hay un fallo grave.

| URL antigua conocida, a confirmar en inventario | Destino propuesto |
|---|---|
| `/jure-ramos` | `/la-escribana/` si se crea y aporta la biografía; en lanzamiento mínimo, `/#escribana` |
| `/areas-practica` | Página índice de servicios si se crea; en lanzamiento mínimo, `/#servicios` |
| `/contacto` | Página equivalente o `/#ubicacion` según arquitectura aprobada |
| `/sala` | Conservar contenido de oficina útil en una página o en ubicación, y redirigir a su equivalente |

Una redirección hacia un fragmento ayuda a llegar a la sección, pero no crea una página SEO independiente. No enviar indiscriminadamente todas las URLs antiguas a la portada. Conservar las redirecciones durante la transición y, como mínimo orientativo, un año; revisar enlaces internos para que apunten directamente a sus destinos. No usar Change of Address por el mero cambio de diseño si el dominio no cambia. [Guía de migración](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

**Entrega:** tabla de redirecciones comprobadas, respaldo, sitio público y acta de revisión. **Aceptación:** versiones antiguas importantes llevan al contenido correcto, URLs finales responden 200, una URL inexistente devuelve 404 real y correo/dominio funcionan.

## 11. Medición: búsquedas, consultas y resultados reales

Configurar Search Console como propiedad de dominio, con verificación y acceso del equipo. Preparar GA4 si se aprueba su activación, documentando información de privacidad y configuración aplicable antes de incorporarlo. No registrar nombres, documentos, contenido de mensajes ni datos del asunto consultado.

| Indicador | Fuente | Cómo interpretar |
|---|---|---|
| Impresiones y clics por consultas relevantes | Search Console | Separar marca de búsquedas de servicios; segmentar por páginas y dispositivo |
| CTR | Search Console | Clics/impresiones; investigar páginas con demanda y baja respuesta |
| Indexación de URLs prioritarias | Search Console y Bing | Comparar páginas previstas con páginas descubiertas e indexadas |
| Clics en WhatsApp | Evento `click_whatsapp` | Es intención de contacto; no confirma que el mensaje haya sido enviado |
| Clics en teléfono/correo/mapa | `click_phone`, `click_email`, `click_directions` | Señales secundarias de interés, sin confundirlas con clientes |
| Consultas efectivas y pertinentes | Registro sencillo de la escribanía | Servicio, fecha, origen declarado y si corresponde a un asunto atendible; sin contenido confidencial |
| Entrevistas y gestiones iniciadas | Registro de la escribanía | Resultado comercial agregado; no inferirlo de un clic |
| Acciones en ficha local | Business Profile | Evaluar por separado y relacionar con los cambios realizados |
| Impresiones en búsqueda generativa Google | Informe específico de Search Console | Revisar páginas con datos y registrar límites de la medición |
| Referencias/citas en otros asistentes | Analítica de referidos + revisión manual | Señal parcial: algunas visitas no conservan referencia y las respuestas varían |

Parámetros propuestos de eventos: página, servicio y ubicación del botón. No incluir el texto de WhatsApp como parámetro. Medir sin duplicar eventos entre el script del sitio y el gestor de etiquetas que se elija.

En revisión manual GEO mantener una muestra pequeña de consultas reales, por ejemplo «escribanía en Nueva Córdoba», «certificación de firmas en Córdoba» o «documentación inicial para una escritura». Registrar fecha, sistema, consulta, enlace citado y exactitud; no usar un porcentaje de menciones aisladas como garantía de rendimiento.

**Cadencia propuesta:** seguimiento semanal el primer mes; informe mensual después. Comparar ventanas de 28 días y anotar publicación, cambios y estacionalidad. Definir objetivos de crecimiento después de obtener una línea de base; hoy no sería responsable inventar un objetivo porcentual de consultas sin datos.

## 12. Lista priorizada de trabajo y dependencias

**P0:** imprescindible para una publicación correcta. **P1:** primera ronda de mejoras de visibilidad y utilidad. **P2:** ampliación según demanda y datos. Las decisiones de implementación son propuestas; todavía no se ejecutaron por crear este plan.

| ID | Acción | Prioridad | Responsable | Depende de | Resultado que permite cerrarla |
|---|---|---|---|---|---|
| 01 | Aprobar credenciales, afiliaciones y FAQ | P0 | Escribana | Datos y revisión | Texto validado registrado |
| 02 | Confirmar fotos e identidad visual | P0 | Escribana | Autorizaciones y decisión de logo | Archivos aprobados |
| 03 | Confirmar ubicación, pin y acceso físico | P0 | Escribana/equipo | Ficha y dirección | Datos coincidentes y comprobados |
| 04 | Inventariar sitio antiguo y respaldarlo | P0 | Técnico | Acceso a hosting/WordPress | Inventario y recuperación documentados |
| 05 | Preparar línea de base y Search Console | P0 | Técnico/titular | Acceso delegado a dominio | Propiedad verificada y datos disponibles exportados |
| 06 | Definir alojamiento, rutas y migración | P0 | Técnico/usuario | 04 y decisiones de publicación | Plataforma y mapa URL aprobados |
| 07 | Investigar búsquedas locales y servicios | P1 | Equipo SEO/escribana | Línea de base y prioridades | Mapa intención/página sin volúmenes inventados |
| 08 | Redactar primera consulta y presupuesto | P1 | Escribana/equipo | 01 | Instrucciones concretas aprobadas |
| 09 | Página de inmuebles | P1 | Contenido/técnico | 07, 08 | Contenido distinto, validado y enlazado |
| 10 | Página de certificaciones | P1 | Contenido/técnico | 07, 08 | Requisitos y consulta claros |
| 11 | Página de sociedades | P1 | Contenido/técnico | 07, 08 | Servicios societarios explicados con precisión |
| 12 | Ajustar perfiles y grafos por página | P0 | Técnico | Rutas y páginas | Datos visibles coherentes, fundador verificado o retirado |
| 13 | Completar ficha Business Profile | P1 | Titular/equipo | 03 y acceso a ficha | Categoría, NAP, horario, fotos y URL revisados |
| 14 | Revisar lectura, accesibilidad y rendimiento | P0 | Técnico/diseño | Versión candidata | QA de móvil/teclado y problemas críticos cerrados |
| 15 | Configurar redirecciones y dominio | P0 | Técnico | 04, 06 y publicación aprobada | Equivalencias y respuestas HTTP comprobadas |
| 16 | Publicar e inspeccionar URLs | P0 | Técnico/usuario | 01–06, 14, 15 | Dominio público correcto y sitemap enviado |
| 17 | Medición GA4 y contactos agregados | P1 | Técnico/escribanía | Decisión de medición y sitio público | Eventos sin datos sensibles y registro de consultas |
| 18 | Verificar Bing y acceso de buscadores/IA | P1 | Técnico | 16 | Sitemap y acceso público revisados |
| 19 | Extender llms.txt y Markdown | P1 complementario | Técnico | Nuevas páginas | Contenido y enlaces coherentes |
| 20 | Revisar controles/informe generativo Google | P1 | Equipo SEO | Search Console | Configuración y datos revisados sin inferirlos |
| 21 | Añadir respaldos y reseñas auténticas | P2 | Escribana/equipo | Fuentes y autorizaciones | Enlaces verificables y citas auténticas |
| 22 | Ampliar poderes, familia y sucesiones | P2 | Contenido/técnico | Demanda y capacidad de revisión | Páginas útiles y suficientes |
| 23 | Crear guías profesionales de consulta | P2 | Escribana/equipo | Preguntas y fuentes | Guías revisadas con contenido propio |
| 24 | Informe mensual y ajustes | Continuo | Equipo/escribanía | Datos disponibles | Decisiones basadas en consultas y visibilidad |

Dos rutas posibles:

- **Lanzamiento mínimo cuidado:** cerrar P0, publicar portada y preparar ficha/medición; crear páginas de servicios a continuación. Prioriza poner la versión nueva a disposición pública sin publicar textos insuficientes.
- **Lanzamiento ampliado:** cerrar P0 y las tres páginas P1 antes de migrar. Prioriza disponer desde el inicio de contenido específico para las búsquedas de servicios.

La elección depende de la rapidez con que se aprueben contenidos y se entreguen accesos, no de una exigencia automática de tener muchas páginas.

## 13. Cronograma orientativo

Propuesta de organización, no promesa de posicionamiento. El día 1 empieza cuando están disponibles los accesos mínimos y una persona responsable de aprobar contenido.

| Período | Trabajo | Hito de salida |
|---|---|---|
| Días 1–3 | Validación de datos, fotos y FAQ; inventario antiguo; línea de base | Ficha profesional y migración preparadas |
| Días 4–7 | Investigación de consultas, mejora de primera visita/presupuesto y borradores de servicios | Contenido prioritario listo para revisión |
| Semana 2 | Páginas aprobadas, componentes, schema, QA y revisión de Business Profile | Versión candidata revisable |
| Semana 3 o al completar requisitos | Redirecciones, publicación, Search Console/Bing, medición y comprobación real | Lanzamiento técnico verificado |
| Primeros 30 días tras publicar | Indexación, errores, consultas y comportamiento; corregir problemas concretos | Línea de base pública y primer informe |
| Días 31–60 | Ajustar páginas con demanda y contenido adicional aprobado | Segunda ronda basada en datos |
| Días 61–90 | Evaluar resultados, reseñas/referencias y ampliaciones útiles | Plan de mantenimiento trimestral |

Estimación inicial de esfuerzo del equipo: **aproximadamente 35–55 horas** para investigación, preparación de tres páginas, integración, migración y medición básica. No es un presupuesto cerrado: excluye tiempo de aprobación de la profesional, recuperación de accesos, problemas del alojamiento anterior y producción de fotos. Un lanzamiento mínimo puede separarse de las ampliaciones para no depender de todos esos trabajos.

Las ventanas de 30/60/90 días son momentos de revisión. No significan que Google deba posicionar la web dentro de esos plazos.

## 14. Mantenimiento y cierre de cada etapa

- **Cada cambio:** actualizar configuración compartida, revisar compilación y verificaciones pertinentes, registrar decisión y alcance en `Decisiones.md`, guardar cambios en Git.
- **Semanal al principio:** comprobar consultas, errores de indexación y el funcionamiento de contactos; registrar incidentes.
- **Mensual:** revisar Search Console, Business Profile y resultados agregados; decidir una mejora concreta. No modificar títulos semanalmente sin una causa comprobada.
- **Trimestral:** comprobar vigencia de FAQ/guías, trayectoria, fotos, horarios, enlaces institucionales y dependencias. Actualizar fechas solo si hubo una revisión efectiva.
- **Ante cambios legales o de procedimientos:** la escribana revisa el contenido afectado antes de presentarlo como orientación vigente.

Criterios de cierre del proyecto de lanzamiento:

- [ ] Perfil, FAQ, servicios y fotos aprobados.
- [ ] La portada conserva el orden y la paleta solicitados.
- [ ] Accesos, respaldo y recuperación disponibles.
- [ ] Sitio antiguo inventariado y redirecciones comprobadas.
- [ ] Sitio nuevo público, seguro y rastreable; sin bloqueos heredados de revisión.
- [ ] Datos de web, schema y ficha local consistentes.
- [ ] Validación semántica y técnica del schema completada.
- [ ] Páginas prioritarias enlazadas y sitemap correcto.
- [ ] Lectura móvil, teclado, contraste y contactos revisados.
- [ ] Search Console y Bing verificados; medición de contacto definida.
- [ ] Revisión de inclusión en búsqueda generativa realizada.
- [ ] Primer seguimiento público agendado por el equipo, sin crear automatizaciones no solicitadas.

## 15. Decisiones y datos necesarios para comenzar

1. Elegir lanzamiento mínimo o ampliado con tres páginas de servicio.
2. Aprobar el perfil profesional y confirmar las afiliaciones que se mostrarán.
3. Validar las seis FAQ y facilitar documentación inicial y criterios de presupuesto para los tres servicios prioritarios.
4. Confirmar turnos, acceso físico, ubicación y pin de la ficha.
5. Confirmar uso de fotos y si se mantiene el logotipo tipográfico.
6. Identificar responsables de dominio, hosting, WordPress y Business Profile; facilitar accesos delegados cuando se vaya a implementar.
7. Aprobar el momento de configurar Search Console/Bing y Analytics, que se habían dejado para una etapa posterior.
8. Designar responsable de aprobación y mantenimiento.

No se necesita contratar herramientas SEO de pago para empezar. Se evaluará cualquier herramienta adicional por una necesidad de datos concreta. No se proponen compra de enlaces, reseñas ficticias, páginas masivas por barrio ni cambios de marca orientados a palabras clave.

**Próximo paso propuesto:** cerrar la ficha de información y diseñar el mapa de las tres páginas prioritarias antes de añadir contenido o modificar el sitio público.

## Avance del 15/10/2026 — Tres páginas en revisión local

- El usuario eligió avanzar con las tres páginas prioritarias. Se prepararon las rutas propuestas de inmuebles, certificaciones y sociedades, enlazadas desde las tarjetas de la portada.
- Contenido construido con las FAQ y actuaciones suministradas, y las reglas de contacto confirmadas: WhatsApp antes de concurrir para certificaciones, presupuesto por WhatsApp y consulta societaria seguida de reunión cuando corresponda.
- Metadatos y schema propios, navegación compartida y versiones Markdown incorporadas a llms.txt. Retiradas las propiedades de fundador y fundación que no estaban confirmadas.
- Las tareas de contenidos 09–11 están implementadas como borrador local; su aprobación profesional permanece pendiente. No se configura Analytics, no se modifica la ficha y no se publica la web en esta etapa.
