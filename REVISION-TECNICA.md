# Revisión integral del sitio — 17 de octubre de 2026

## Alcance y estado

Revisado el código propio de Astro/React: configuración, rutas, componentes, estilos, movimiento, contenido compartido, datos estructurados, dependencias y herramientas de verificación. Las bibliotecas de terceros se comprueban por compilación, árbol instalado y avisos de seguridad; no se afirma haber auditado manualmente cada línea de node_modules o de los repositorios de referencia.

La historia comprobada es: entrar en la web, consultar trayectoria/ubicación/FAQ, navegar a cada servicio o al libro e iniciar contacto por un enlace real. Es una web estática: no hay backend, base de datos, pagos ni formulario de envío que probar.

## Correcciones ejecutadas

- Menú móvil con navegación disponible sin JavaScript. El botón solo aparece cuando está preparado; si los módulos descargados fallan, sigue existiendo una navegación utilizable.
- Escape deja de robar el foco cuando el menú está cerrado. Cuando se cierra desde un enlace del menú, el foco vuelve al control.
- Indicador temprano en el encabezado HTML para evitar que la alternativa móvil se despliegue brevemente antes de iniciar el menú. Se comprobó el fallo con Lighthouse, se corrigió y se conserva el informe intermedio.
- El mapa dispone de enlace directo funcional sin JavaScript. Con JavaScript se incorpora el iframe por acción, con coordenadas desde la configuración del sitio. No se carga automáticamente.
- La pausa global también completa los contadores y los efectos nativos activos; se respeta antes de iniciar efectos nuevos. Los efectos continuos solo se habilitan cuando su control está disponible.
- El titular tiene alternativa si falta IntersectionObserver. Conserva ubicación/nombre, pausa, reducción de movimiento, ocultación de pestaña y detención fuera de pantalla.
- Los módulos de movimiento tienen ámbito explícito para evitar colisiones de variables entre archivos TypeScript.
- El pie reutiliza nombre, registro, dirección, ciudad y año de la configuración, evitando mantener copias independientes.

## Optimización ejecutada

- Conservado React en la portada, con animación CSS nativa de entrada/salida. Retirados Framer Motion y sus dos dependencias exclusivas. El enlace de consulta usa HTML/CSS y ya no incorpora las utilidades del botón reutilizable en ese paquete. Se mantiene el componente de botón disponible para futuras interfaces.
- JavaScript generado: de 353.153 a aproximadamente 232.006 bytes sin comprimir; de 114.180 a aproximadamente 73.340 bytes gzip, una reducción del 35,8 %. Son los archivos JS de dist/_astro, no una medición del consumo total de un visitante ni una eliminación de React.
- Ocho variantes nuevas de imágenes: portada de 640 px, retrato de 450/650 px en AVIF/WebP y libro de 160/320 px en WebP. srcset/sizes permite elegir tamaños adecuados. Originales, contenido fotográfico y transparencia conservados; no se utilizó reconstrucción generativa.
- Probada la integración de todos los estilos en HTML con la opción oficial de Astro. No aportó una mejora de puntuación en la medición; descartada para mantener la reutilización de estilos externos entre páginas. La configuración final conserva el comportamiento anterior de entrega de CSS.
- Preparado `public/_headers` para Cloudflare Pages: nosniff, política de referer, base/objetos/marcos y permisos de cámara/micrófono/geolocalización. No impide JavaScript propio ni el mapa. Aplicación HTTP pendiente del alojamiento público.

Referencia de la alternativa CSS evaluada: [configuración oficial de Astro](https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets).

## Verificación reproducible

- Compilación y Astro/TypeScript: cero errores, advertencias o sugerencias; ocho HTML, incluida la página 404.
- Auditoría técnica: JSON-LD, contacto, FAQ, H1, canonical, recursos, robots, sitemap, Markdown y llms.txt.
- `audit:site`: siete páginas, 18 destinos internos y 37 recursos/enlaces auxiliares, incluidas variantes de imágenes. Comprueba estados HTTP, anclas, identificadores únicos, metadatos, libro/prólogo y 404 real con noindex.
- Pruebas de portada en Chrome a 1440/768/390 px; cinco servicios a 1440/390/320 px; titular a 1440/768/390/320 px; libro a 1440/390/320 px; lectura a 1440/390/320 px. Sin desbordes ni errores de JavaScript en los recorridos comprobados.
- Regresiones cubiertas: menú móvil sin JavaScript, módulos descargados bloqueados, Escape, pausa durante la suma real del contador, efectos pausados, libro en pestaña nueva, ausencia de IntersectionObserver, movimiento reducido y texto completo sin JavaScript.
- Corregida una espera frágil de la prueba del titular: ahora espera a que termine la animación antes de medir el diseño. Las pruebas de navegador/servicios admiten QA_BASE_URL; la auditoría crea artifacts al ejecutarse desde un clon nuevo.
- Consulta de avisos de npm y eliminación de dependencia: cero vulnerabilidades conocidas reportadas. No significa garantía permanente de ausencia de vulnerabilidades.

Comandos e instrucciones en README.md. Evidencia local en artifacts/revision-completa-qa.json, hero-titular-qa.json, lectura-qa.json, auditoria-servicios.json y auditoria-navegador.json. Las pruebas de rendimiento se ejecutaron separadas de las demás pruebas de navegador.

## Pendiente del entorno público

No se publicaron sitios ni se modificaron DNS/cuentas. Queda validar redirecciones, cabeceras, HTTPS y correo en Cloudflare/dominio; recuperar/configurar Search Console/medición, comprobar recepción real de consultas y revisión humana en dispositivos físicos. La revisión automática en Chrome no certifica todos los navegadores, la exactitud jurídica ni el posicionamiento. Fotografías/mapa y conservación de textos actuales siguen la aprobación de la usuaria. No se alteraron las imágenes del libro ni sus textos impresos.


## Medición final de producción local

Lighthouse móvil 13.5.0, misma URL local de compilación (puerto 4330), sin otras pruebas de navegador simultáneas:

| Indicador | Antes | Final |
| --- | --- | --- |
| Rendimiento | 95/100 | 96/100 |
| Accesibilidad | 100/100 | 100/100 |
| Buenas prácticas | 100/100 | 100/100 |
| SEO técnico | 100/100 | 100/100 |
| Primera presentación de contenido | 1.5 s | 1.5 s |
| Carga principal (LCP) | 2.9 s | 2.6 s |
| Bloqueo de ejecución (TBT) | 0 ms | 0 ms |
| Desplazamiento visual (CLS) | 0.001 | 0.001 |
| Transferencia medida | Total size was 419 KiB | Total size was 323 KiB |

Sin advertencias de ejecución en la pasada final. La reducción de transferencia medida es de aproximadamente el 23 %. En las imágenes examinadas por Lighthouse ya no aparecen oportunidades por tamaño excesivo. Las puntuaciones varían entre pasadas: estas cifras son evidencia de laboratorio local, no garantías de tiempos reales ni de posicionamiento.

Informes: artifacts/revision-completa-antes.report.html y artifacts/revision-completa-despues.report.html (también JSON). La pasada intermedia documenta el salto del menú corregido; las alternativas de CSS se conservan como evidencia de comparación y no describen la configuración final. El resultado final corresponde al código que se entrega.
