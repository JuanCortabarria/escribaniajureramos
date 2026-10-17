# Visibilidad local y migración — 17/10/2026

## Decisiones confirmadas

- Conservar escribaniajureramos.com.ar y preparar Cloudflare Pages conectado a GitHub.
- Fotografías y ubicación del mapa aprobadas por la usuaria. Mantener los textos profesionales actuales; las futuras correcciones no se consideran ejecutadas.
- Prólogo confirmado: Fernando Pérez Hualde y Juan F. Klaps. Se actualiza la ficha escrita y su versión Markdown. Las fotografías no se alteran.
- Seguimiento solicitado: Google Search Console y medición de visitas. Todavía no hay identificadores ni acceso a esas propiedades; no se incorporan etiquetas ficticias.
- Integrar feature-vico en main al terminar las comprobaciones; esto comparte código, no publica ni modifica DNS.

## URLs activas preparadas

| Página | Dirección | Intención de búsqueda que puede atender |
| --- | --- | --- |
| Inicio | / | Escribanía en Nueva Córdoba, Solange Jure Ramos |
| Inmuebles | /servicios/escrituras-inmuebles/ | Escrituras y compraventa de inmuebles en Córdoba |
| Certificaciones | /servicios/certificaciones/ | Certificación de firmas y copias en Córdoba |
| Sociedades | /servicios/sociedades/ | Constitución y asesoramiento societario en Córdoba |
| Familia | /servicios/familia/ | Actuaciones notariales de familia en Córdoba |
| Sucesiones | /servicios/sucesiones-prevision/ | Testamentos y planificación patrimonial en Córdoba |
| Libro | /libro/ | Publicación y trayectoria de la profesional |

Son rutas reales con contenido, títulos, descripciones, canonical, Markdown, datos estructurados y sitemap. Las tarjetas de inicio y los servicios relacionados ya las enlazan. Se añaden accesos contextuales desde cuatro preguntas frecuentes de inicio: tres de inmuebles y una de certificaciones. Se mantiene el texto de las respuestas.

## Contenidos para ampliar, pendientes de revisión profesional

Estas direcciones son propuestas: no existen aún ni se incluyen en el sitemap. Publicar cada una solo cuando tenga contenido útil y distinto, revisado por la profesional. Si no aporta suficiente información propia, ampliar la página existente.

| Prioridad | Dirección propuesta | Contenido necesario antes de publicar |
| --- | --- | --- |
| 1 | /servicios/certificacion-de-firmas/ | Qué se consulta, documentos admitidos, presencia, atención y límites confirmados |
| 1 | /servicios/certificacion-de-copias/ | Originales, soportes aceptados y consulta previa |
| 1 | /servicios/escritura-compraventa/ | Etapas, antecedentes y presupuesto, sin prometer plazos ni costos fijos |
| 1 | /servicios/constitucion-de-sociedades/ | Alcance profesional, consulta inicial y documentación según sociedad |
| 2 | /servicios/poderes/ | Tipos de gestiones representadas, consulta y antecedentes |
| 2 | /servicios/autorizaciones-de-viaje/ | Alcance, destinatarios y requisitos vigentes confirmados |
| 2 | /servicios/actas-notariales/ | Qué actuaciones presta realmente la escribanía y cómo consultarlas |
| 2 | /servicios/donacion-de-inmuebles/ | Consulta profesional, antecedentes y alcance del trámite |
| 2 | /servicios/testamentos/ | Alcance del asesoramiento y modalidad de consulta |
| 3 | /servicios/proteccion-de-la-vivienda/ | Información y requisitos profesionales revisados |
| 3 | /servicios/cesion-de-derechos-hereditarios/ | Alcance y antecedentes según el caso |
| 3 | /servicios/reestructuracion-societaria/ | Casos atendidos y forma de iniciar el asesoramiento |

No crear variantes repetidas para cada barrio ni repetir palabras clave artificialmente. Córdoba y Nueva Córdoba aparecen cuando describen la ubicación y atención reales. No se compran enlaces ni se ofrecen garantías de primer puesto. Los enlaces externos útiles deben surgir de menciones legítimas: ficha del negocio, directorios profesionales pertinentes, universidades o editorial cuando corresponda y estén autorizados. No se envían mensajes ni se gestionan esas menciones en esta tarea.

Referencias: [enlaces rastreables y textos descriptivos](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [políticas sobre páginas puerta, palabras clave y enlaces](https://developers.google.com/search/docs/essentials/spam-policies).

## Migración preparada

`public/_redirects` contiene ocho reglas permanentes para las rutas antiguas /areas-practica, /jure-ramos, /contacto y /sala, con y sin barra final. Apuntan a secciones equivalentes del nuevo inicio. Las aplica Cloudflare Pages al publicar; Astro local no ejecuta estas reglas. No se redirigen todas las URLs desconocidas al inicio.

La lista procede del HTML público antiguo; completarla con Search Console y el administrador anterior. Mantener las rutas nuevas actuales: cambiarles el nombre solo para añadir palabras clave generaría migraciones innecesarias.

[Formato oficial de redirecciones de Pages](https://developers.cloudflare.com/pages/configuration/redirects/).

## Información administrativa necesaria

Guardar en un gestor de contraseñas y cuentas de la escribanía, fuera del repositorio:

- Titular del dominio, vencimiento y permiso de administración en NIC Argentina.
- Proveedor y exportación de DNS actuales: A, AAAA, CNAME, MX, TXT, SPF, DKIM y DMARC según existan.
- Cuentas de correo vinculadas al dominio y quién las aloja.
- Copia completa de archivos y base de datos del alojamiento anterior, si corresponde, y forma de restaurarla.
- Acceso con permisos al repositorio y a Cloudflare, sin compartir contraseñas personales.
- Propiedades existentes de Search Console, Analytics y Perfil de Empresa. Recuperarlas antes de crear duplicados.

El respaldo HTTP público no permite recuperar base de datos, panel privado, correo ni DNS. No cancelar el alojamiento anterior antes de validar y conservar una alternativa de recuperación.

## Medición después de publicar

1. Verificar la propiedad de dominio de Search Console con el TXT indicado por Google; enviar sitemap-index.xml.
2. Configurar Google Analytics 4 con una cuenta controlada por la escribanía y su identificador real. Revisar la información de privacidad y el consentimiento según la configuración efectiva antes de activarlo.
3. Separar visitas de clics en WhatsApp: un clic no prueba recepción ni contratación. No enviar teléfonos, mensajes ni documentos de clientes como datos de eventos.
4. Medir consultas, impresiones, clics y páginas de entrada para búsquedas de Córdoba. Registrar una referencia inicial y revisar evolución, sin prometer plazos o posiciones.
5. Actualizar la ficha existente de Maps con dominio, horarios y datos coherentes. No crear una segunda ficha.

Estado: planificación y enlaces locales preparados; cuentas, medición real y validación pública pendientes.

## Respaldo público realizado

Copia del 17/10/2026 en `artifacts/respaldo-web-anterior-2026-10-17.tar.gz`, con manifiesto de URLs, estado, archivo y SHA-256. Se guardaron 131 archivos (9.112.487 bytes antes de comprimir). Hubo cuatro 404 del sitio anterior: sitemap_index.xml y tres CSS; constan en el manifiesto. Las páginas principales se descargaron con respuesta 200. No incluye recursos externos, base de datos, correo ni DNS; no reemplaza la copia completa del proveedor. Se conserva fuera del historial Git para no mezclar el sitio antiguo con la nueva web. Mantener otra copia local del archivo antes de retirar el hosting anterior.
