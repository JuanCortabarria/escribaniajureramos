# Revisión de contenido y publicación

## Resuelto en la versión local

- Conflictos Git de los cuatro archivos de contenido resueltos y compartidos.
- Portada restaurada según lo solicitado: «Escribanía en Nueva Córdoba», «Asesoramiento notarial y legal general» y únicamente «Atención personalizada desde el primer encuentro» en el recuadro. Foto de oficina suministrada por el usuario.
- Eliminados «Confianza en cada decisión», «Experiencia que da tranquilidad», la segunda frase de la descripción y el texto vertical de la portada.
- FAQ reales, servicios prioritarios y horarios nuevos del compañero conservados.
- Autenticación de GitHub: push de integración verificado; dejó de ser un bloqueo.

## Decisiones confirmadas el 15/10/2026

- Preparar primero las tres páginas de inmuebles, certificaciones y sociedades, en entorno local para revisión.
- La necesidad de turno depende del trámite. Para certificaciones se debe consultar por WhatsApp antes de concurrir, según gestión y disponibilidad; no se promete atención sin turno.
- Los presupuestos se solicitan y coordinan por WhatsApp: el cliente describe la gestión y la escribanía indica los datos necesarios. Para inmuebles no se publica una lista obligatoria de datos iniciales.
- Sociedades: descripción inicial por WhatsApp y reunión cuando corresponde.
- Preparadas cinco páginas locales, una por área: inmuebles, certificaciones, sociedades, familia y sucesiones/previsión. Las tres primeras reutilizan las FAQ y condiciones suministradas; las dos nuevas describen las actuaciones ya incluidas en el sitio, sin añadir requisitos legales. Pendiente aprobación de la redacción final antes de publicar.

## Información o acciones previas a la publicación


- **RECIBIDO — preguntas frecuentes reales:** la profesional suministró seis preguntas y respuestas el 13/10/2026. Se incorporaron con correcciones menores de redacción; queda su aprobación de la vista final.
- **PENDIENTE — logo:** se usa un logotipo tipográfico. Se puede reemplazar cuando esté disponible el original en SVG, PDF o PNG de alta resolución.
- **PENDIENTE — fotos:** confirmar autorización de uso del retrato y de la imagen de cierre antes de publicar. La portada usa la foto de oficina suministrada en este chat. La imagen ilustrativa generada de una mujer firmando se conserva como alternativa para revisión.
- **ACTUALIZADO — perfil profesional:** el usuario suministró el 14/10/2026: Doctora en Derecho Societario, Magíster en Derecho Empresario, Gobierno corporativo, Escribana titular por concurso y Académica y docente universitaria. Reemplazada la lista anterior, sin añadir universidades ni cargos no incluidos en esta actualización. Las afiliaciones del detalle de trayectoria siguen pendientes de validación.
- **PENDIENTE — Google Maps:** se conserva el enlace suministrado. El mapa por clic apunta a las coordenadas del documento; verificar que coincida con la ubicación exacta y con la ficha del negocio.
- Datos de contacto y paleta: tomados de la planificación suministrada. El usuario confirmó la paleta el 12/10/2026.
- **CONFIRMADO — horarios:** lunes a jueves de 9 a 17 h y viernes de 9 a 14 h; actualizados en la página y los datos estructurados.
- **CONFIRMADO — enfoque:** aumentar consultas por WhatsApp de particulares, empresas e inmobiliarias; prioridad en inmuebles, certificaciones y reestructuración y asesoramiento de sociedades.
- **PENDIENTE — medición:** la usuaria quiere usar Google Analytics y Google Search Console a largo plazo. La usuaria confirmó que todavía no tiene estas herramientas configuradas y que se configurarán más adelante; aún no se activaron.
- **PENDIENTE — aprobación final:** la usuaria es la profesional responsable y aprobará la versión final. Solicitó tenerla lista de inmediato para revisar.

No hay testimonios, calificaciones, precios ni resultados inventados. La página actual y el dominio no se modificaron.

## Libro de la escribana · 16/10/2026

- Incorporadas la primera y tercera imágenes adjuntas por la usuaria: miniatura en la biografía y fotografía en la página independiente `/libro/`, que abre en una pestaña nueva. El relato completo se retiró de la portada. La segunda queda como alternativa y no se publica en la web.
- Texto en primera persona redactado a partir de los motivos aportados por la usuaria: trayectoria, mentor y pasión por el tema. Título, autoría, editorial y prólogo tomados de la cubierta. Pendiente aprobación de la redacción final por Solange; sin inventar nombre del mentor, fechas ni duración de investigación.
- A pedido de la usuaria, sustituida la frase técnica «En sus páginas estudio…» y corregida la editorial visible a «Cátedra Jurídica».

## Cierre de publicación — revisión del 17/10/2026

Este apartado actualiza el estado de publicación; las referencias anteriores a recuadros e imágenes corresponden a etapas previas del diseño. La portada actual tiene el acceso a servicios sobre la foto y el libro recortado junto a las credenciales.

- **COMPROBADO:** los tres repositorios de referencia están clonados y coinciden con su HEAD remoto actual. `schema-dts` está integrado; JSON-LD, sitemap, robots, Markdown y los siete enlaces de llms.txt pasan la revisión local.
- **COMPROBADO:** compilación sin errores y revisión funcional de portada/cinco servicios en navegador. Lighthouse móvil local final: 95 rendimiento, 100 accesibilidad, 100 buenas prácticas y 100 SEO técnico. Se corrigieron etiquetas accesibles de contadores, libro y servicios. La prueba no certifica posicionamiento ni sustituye la validación en producción.
- **P0 — LIBRO:** la miniatura generada contiene un nombre de autora y un segundo prologuista que no coinciden con `src/config/book.ts`. Reemplazar por una cubierta real o recurso bibliográfico verificado y confirmar autoría/prólogo/editorial con Solange. No tomar textos recreados por IA como fuente bibliográfica.
- **P0 — DOMINIO/DNS:** confirmar titular, vencimiento y control de NIC Argentina; obtener inventario y respaldo de DNS/correos/alojamiento anterior. No se verificó aún desde una cuenta autenticada.
- **P0 — CONTENIDO:** aprobación final de textos, trayectoria ampliada, dirección, pin de Maps y permisos de imágenes sigue pendiente.
- **P0 — MIGRACIÓN:** inventariar URLs antiguas e implementar/probar redirecciones de `/areas-practica`, `/jure-ramos` y `/contacto` y otras que aparezcan en el inventario. Las rutas se detectaron en el menú viejo; no se implementaron redirecciones nuevas en esta revisión.
- **P0 — VERSIÓN Y PUBLICACIÓN:** revisar la URL temporal de la versión de `feature-vico`, integrar la versión aprobada a producción y solo entonces conectar el dominio. La rama main no debe suponerse actualizada.
- **P1 — VALIDACIÓN PÚBLICA:** HTTPS, correo, DNS, redirecciones, 404, canonical, robots, sitemap, JSON-LD y velocidad en el dominio real; realizar prueba humana de recepción por WhatsApp. La revisión no envió mensajes.
- **P1 — GOOGLE:** recuperar/configurar Search Console y Perfil de Empresa existente; mantener datos y horarios coherentes. Google Analytics continúa sin activar, según decisión previa.

Guía detallada, costos oficiales y responsabilidades en `PUBLICACION.md`. Recomendación propuesta: conservar escribaniajureramos.com.ar y Cloudflare Pages Free; no se contrató, pagó ni publicó ningún servicio.


## Actualización confirmada por la usuaria — 17/10/2026

Este apartado prevalece sobre los pendientes históricos anteriores.

- **CONFIRMADO:** fotografías y ubicación del mapa correctas. Mantenerlas.
- **CONFIRMADO:** conservar por ahora los textos profesionales actuales; habrá correcciones posteriores.
- **CORREGIDO:** prólogo escrito a Fernando Pérez Hualde y Juan F. Klaps, confirmado expresamente. La configuración alimenta HTML y Markdown. No se modifica la impresión de las imágenes; la diferencia tipográfica de la autoría de la miniatura sigue siendo un detalle de esa recreación.
- **PREPARADO:** ocho redirecciones permanentes en `public/_redirects`, para las cuatro rutas antiguas detectadas y sus variantes con barra final. Aplicación HTTP pendiente de Cloudflare Pages; no la realiza Astro local.
- **EJECUTADO:** enlaces desde las FAQ de portada a sus páginas de inmuebles y certificaciones, también en Markdown. Plan de ampliación de contenido en `SEO-LOCAL.md`; sus nuevas rutas propuestas no se publicaron.
- **CONFIRMADO:** conservar dominio y seguir con Search Console y medición de visitas en Google. Requiere recuperar o configurar las cuentas e identificadores reales; no hay rastreadores añadidos aún.
- **AUTORIZADO:** integrar feature-vico en main al cerrar comprobaciones. La publicación y los cambios DNS se hacen después de revisar una URL temporal y preservar el correo.
- **PENDIENTE ADMINISTRATIVO:** titular/vencimiento/permisos NIC, exportación de DNS, dependencias de correo y respaldo completo del alojamiento anterior. No enviar contraseñas ni guardar secretos en Git.

### Integración de ramas

La integración en main se ejecuta en este cierre, conservando el historial y el archivo académico que estaban únicamente en main. La validación pública y conexión de Cloudflare siguen pendientes; main no equivale a web publicada.

## Revisión técnica integral — 17/10/2026

- **EJECUTADO:** optimización de animación, variantes adaptativas de imágenes y navegación progresiva; corregidos foco por Escape y pausa de efectos/contadores. Se conservan contenidos y diseño acordados.
- **COMPROBADO:** compilación y auditorías funcionales correctas. Revisión de siete páginas, 18 destinos internos y 37 recursos auxiliares/variantes. Lighthouse móvil final local: rendimiento 96, accesibilidad 100, buenas prácticas 100 y SEO técnico 100. LCP 2,6 s, TBT 0 ms, CLS 0,001. JavaScript gzip reducido un 35,8 %. Cero vulnerabilidades conocidas reportadas por npm.
- **PREPARADO:** cabeceras de seguridad de Pages en public/_headers. Falta verificar su aplicación HTTP junto con las redirecciones al desplegar.
- **SIGUE PENDIENTE:** dominio/DNS/correo, previsualización pública, recepción humana de consulta y configuración real de Google. No se publicaron sitios ni cambiaron cuentas.
- Detalle y límites de la evaluación en REVISION-TECNICA.md. Estas métricas actualizan las mediciones históricas de preparación local.
