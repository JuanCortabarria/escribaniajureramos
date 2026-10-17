# Publicación de Escribanía Jure Ramos

Revisión: 17 de octubre de 2026. Rama revisada: `feature-vico`. Estado: preparación local; no se publicó la nueva web ni se cambiaron DNS o cuentas.

## Recomendación y presupuesto

Conservar **escribaniajureramos.com.ar** y alojar la versión estática en **Cloudflare Pages Free**. El dominio es la dirección; el alojamiento es el servicio que entrega los archivos de la página. Cambiar el alojamiento no exige comprar un dominio nuevo ni transferir su registro fuera de NIC Argentina.

| Concepto | Costo de referencia | Observación |
| --- | --- | --- |
| Renovación de `.com.ar` en NIC Argentina | ARS 8.500 por año | Arancel oficial consultado el 17/10/2026. Confirmar el importe al pagar. |
| Alta de un `.com.ar` disponible | ARS 8.500 | No corresponde comprar de nuevo el dominio existente. |
| Transferencia de titularidad `.com.ar` | ARS 8.500 | Solo si hace falta cambiar el titular registral; NIC determinará el trámite aplicable. No sumar automáticamente todos estos conceptos. |
| Cloudflare Pages Free para este sitio estático | USD 0 mensuales | Dentro de los límites del plan; los archivos estáticos no invocan funciones. |
| HTTPS/SSL en Pages | Incluido | No contratar aparte un certificado para esta configuración. |
| Search Console y Perfil de Empresa de Google | Sin cargo de Google | Configuración y mantenimiento profesional pueden tener honorarios si se contratan. |
| Correo con dominio, mantenimiento y trabajo de migración | A cotizar si se contrata | No están incluidos en el arancel de NIC. Se puede conservar el Gmail actual. |
| Alternativa: Vercel Pro | Desde USD 20 mensuales | Impuestos, consumo y configuración del equipo pueden modificar el total. Hobby se limita a uso personal no comercial. |

**Presupuesto mínimo recurrente de infraestructura propuesto: ARS 8.500 anuales de dominio y alojamiento estático gratuito**, si ese es el trámite anual que corresponde y el sitio continúa dentro del plan gratuito. No incluye honorarios, transferencia registral eventual ni servicios opcionales. No hace falta comprar `.ar` o `.com` para reemplazar la web actual.

Fuentes: [aranceles NIC](https://nic.ar/es/dominios/aranceles), [precios de recursos estáticos de Pages](https://developers.cloudflare.com/pages/functions/pricing/), [límites de Pages Free](https://developers.cloudflare.com/pages/platform/limits/), [SSL incluido en Pages](https://www.cloudflare.com/products/pages/), [Vercel Pro](https://vercel.com/pricing), [restricción de Hobby](https://vercel.com/docs/plans/hobby), [Search Console](https://support.google.com/webmasters/answer/9128668?hl=en), [Perfil de Empresa](https://business.google.com/us/business-profile/).

## Qué quedó comprobado

- Compilación estática y revisión de Astro/TypeScript sin errores, advertencias ni sugerencias. Siete páginas de contenido (portada, cinco servicios y libro) y página de error 404.
- Auditoría técnica de H1, anclas, recursos, datos de contacto, JSON-LD, FAQ, sitemap, robots y versiones Markdown correcta.
- Portada comprobada a 1440, 768 y 390 px: menú, preguntas, carga del mapa tras acción y ausencia de desbordes/errores de JavaScript.
- Cinco servicios comprobados a 1440, 390 y 320 px: respuesta 200, un H1, FAQ, WhatsApp, Markdown, navegación y ausencia de desbordes/errores.
- Canonical de las siete páginas apunta al dominio definitivo. Cada página tiene una versión Markdown enlazada y un JSON-LD que se puede interpretar. Los siete destinos de `llms.txt` existen en la compilación.
- Primera pasada Lighthouse móvil local sobre la compilación de producción: rendimiento 95, accesibilidad 96, buenas prácticas 100 y SEO técnico 100. Encontró problemas de etiquetas accesibles que se corrigieron; ver resultado final al pie de este documento.

Estos controles no certifican exactitud jurídica, autorización de imágenes, control del dominio, posicionamiento real ni comportamiento del alojamiento futuro. La revisión de accesibilidad automática tampoco sustituye una evaluación manual completa con personas y tecnologías de asistencia.

## Los tres repositorios pedidos

Las tres copias están en `references/`, excluidas de Git y de la compilación. No hay que volver a clonarlas ni subirlas al alojamiento. El 17/10/2026 se comparó su HEAD local con `git ls-remote origin HEAD`: coinciden.

| Referencia | Revisión coincidente | Aplicación en el proyecto |
| --- | --- | --- |
| [astro-chalet](https://github.com/M4xKey/astro-chalet) | `8d55431` | Referencia para Astro y estructura de negocio local. El sitio tiene diseño e implementación propios; el SEO se comprueba sobre el resultado, no por haber clonado un tema. |
| [schema-dts](https://github.com/google/schema-dts) | `62a5658` | Dependencia real del proyecto. Tipos en `src/lib/structured-data.ts`: Notary, Person, WebSite, WebPage, FAQPage, Service, BreadcrumbList y Book según cada ruta. Compilación y lectura del JSON-LD correctas. No equivale a una certificación de Google. |
| [llms-txt](https://github.com/AnswerDotAI/llms-txt) | `3700a0a` | `/llms.txt`, versiones Markdown y enlaces `alternate`/`describedby`. Formato con H1, resumen y listas de enlaces; destinos comprobados. |

El archivo llms.txt es una ayuda para sistemas que lo consultan. **No garantiza aparecer en asistentes ni mejora por sí mismo el posicionamiento en Google**: la [documentación oficial de Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) indica que Google Search no lo usa para sus resultados, incluidas sus funciones generativas. Mantener SEO útil, contenido profesional verificable y datos locales consistentes tiene prioridad. Un marcado FAQ válido tampoco garantiza una presentación especial en Google.

## Paso a paso para publicar

### 1. Cerrar los datos y materiales

Responsable: Solange, con asistencia técnica.

- Confirmar dirección, piso/oficina, teléfono, WhatsApp, email y horarios (incluido viernes hasta las 14 h).
- Confirmar que el enlace de Maps y el pin correspondan a la oficina y a la ficha existente del negocio.
- Aprobar la redacción final de servicios, preguntas, trayectoria ampliada y relato del libro.
- Confirmar derechos de uso de retrato, cierre e imágenes; dejar claro qué imágenes son ilustrativas si pueden confundirse con el lugar real.
- **Corregir la cubierta pequeña del libro antes de publicar.** La imagen generada recortada muestra «MARÍA SOLANGE AURE BANCHI» y «Juan F. Klaps», mientras que la ficha publicada dice «María Solange Jure Ramos» y «Fernando Pérez Hualde y Laura Filippi». No deducir la autoría ni el prólogo de una recreación generativa: usar una foto/escaneo de la cubierta real y confirmar título, editorial y prólogo. La imagen de la página del libro y la miniatura también deben ser coherentes.

### 2. Recuperar el control administrativo del dominio

Responsable: titular y programador anterior.

Pedir titular registral, vencimiento, acceso o autorización de administración de NIC Argentina, proveedor DNS, alojamiento anterior y servicios asociados. Si el titular es la escribanía y solo lo administra el programador, coordinar la administración/delegación; si figura otro titular, evaluar el trámite de transferencia. Las cuentas de dominio, hosting y Google deben quedar bajo control de la escribanía.

No se comprobó el titular registral ni el vencimiento desde una cuenta NIC; siguen pendientes. No solicitar contraseñas personales: coordinar permisos o trámites con el titular.

### 3. Respaldar la web y la configuración anterior

Responsable: programador anterior y responsable técnico de migración.

- Copia del sitio anterior y de su base de datos si corresponde; inventario de archivos y páginas.
- Copia de DNS, incluidos MX, TXT, SPF, DKIM, DMARC y verificaciones existentes. No borrarlos al cambiar de proveedor.
- Lista de correos que dependan del dominio. El Gmail visible no prueba que no existan otras cuentas.
- Accesos de Search Console, Analytics y Perfil de Empresa si alguien ya los creó. Evitar duplicar la ficha de Maps.
- Guardar la información necesaria para volver al alojamiento anterior si el cambio falla. No cancelarlo antes de validar la nueva web.

### 4. Preparar la versión definitiva del código

Responsable: equipo de desarrollo.

La versión revisada está en `feature-vico`; hay cambios que no están en `main`. Primero revisar y probar esa rama. Después integrar la versión aprobada a la rama elegida para producción, normalmente `main`, sin sobrescribir trabajo ajeno. No conectar por error una `main` anterior al dominio.

Ejecutar compilación y auditorías. Revisar en navegador real de celular además de las pruebas automatizadas. Las animaciones, el contador, el libro y los enlaces deben seguir funcionando con la compilación final. Verificar también que las páginas de contenido no tengan `noindex` al salir a producción.

### 5. Crear una previsualización en Cloudflare Pages

Responsable: responsable técnico, dentro de una cuenta de la escribanía.

- Crear o usar la cuenta y conectar el repositorio GitHub existente.
- Elegir Pages e importar el repositorio.
- Crear primero una versión de revisión de `feature-vico`, sin apuntar todavía el dominio real.
- Configuración del proyecto: directorio raíz del repositorio, **Node 24**, comando **`npm run build`**, carpeta de salida **`dist`**.
- Es un sitio estático con una isla React de cliente; no necesita base de datos, un servidor Node permanente ni añadir un adaptador de ejecución del lado del servidor para Pages.
- Proteger la previsualización y evitar su indexación; comprobar que la versión de producción sí sea indexable al lanzarla.
- Comprobar imágenes, tipografías, enlaces y Markdown en la URL temporal. El acceso de prueba no sustituye la validación posterior del dominio definitivo.

Referencia: [Astro en Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).

### 6. Preparar las redirecciones de la web anterior

Responsable: equipo de desarrollo.

El menú de la web actual enlaza a estas rutas antiguas. Falta completar el inventario con el programador anterior y Search Console; el acceso del navegador de investigación a esas subpáginas no confirmó su estado HTTP, por lo que la lista no es un rastreo exhaustivo.

| Ruta antigua detectada | Destino propuesto |
| --- | --- |
| `/areas-practica` y variante con barra final | `/#servicios` |
| `/jure-ramos` y variante con barra final | `/#escribana` |
| `/contacto` y variante con barra final | `/#ubicacion` |

Implementar redirecciones permanentes 301 en el alojamiento elegido y probar cada URL. Esta tabla es una propuesta: **todavía no hay reglas nuevas implementadas**. No enviar todas las URLs desconocidas a la portada; mantener un 404 real para las que no tengan equivalente. Conservar documentos y URLs útiles que ya reciban visitas o enlaces.

### 7. Aprobar la versión de revisión y conectar el dominio

Responsable: Solange aprueba; responsable técnico ejecuta después.

- Revisar la URL temporal con el checklist anterior y aprobar la versión concreta.
- Incorporar la versión aprobada a producción.
- Añadir `escribaniajureramos.com.ar` y `www.escribaniajureramos.com.ar` como dominios del proyecto.
- Para el dominio raíz en Pages, Cloudflare exige que la zona DNS esté en esa cuenta y que sus servidores de nombres estén delegados a Cloudflare. Se conserva NIC Argentina como registro del dominio: cambiar DNS no es cambiar titular.
- Copiar primero todos los registros necesarios y usar exclusivamente los valores que muestre el panel del proyecto. Confirmar el comportamiento del correo antes y después.
- Elegir la dirección principal sin `www`, que coincide con la configuración actual. Redirigir `www` a esa dirección y verificar HTTPS/certificado.
- La propagación depende de los DNS y la caché; no prometer activación instantánea. Mantener una ventana de revisión y el respaldo anterior.

Referencia: [dominios personalizados en Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/).

### 8. Verificar el sitio ya público

Responsable: equipo técnico y escribanía.

- HTTPS sin advertencias; ambas variantes del dominio y redirecciones antiguas.
- Portada, cinco servicios, libro y una URL inexistente que responda 404.
- WhatsApp abre el número correcto; completar una prueba real de recepción de consulta con la escribanía, sin enviar mensajes automáticamente desde esta revisión.
- Menú móvil, teléfono, email, libro en nueva pestaña, mapa y animaciones.
- Sitemap y robots públicos, canonical correctos, Markdown/llms accesibles y sin bloqueo accidental de rastreo o `noindex` en producción.
- Revisar JSON-LD en Schema Markup Validator y las funciones admitidas por Google en Rich Results Test, usando la URL definitiva. Tipos válidos no garantizan resultados enriquecidos.
- Repetir Lighthouse/PageSpeed sobre el alojamiento público y revisar carga real de imágenes, caché, compresión y dispositivos. La medición local no es Core Web Vitals de visitantes reales.

### 9. Preparar visibilidad y medición en Google

Responsable: cuenta de la escribanía, con asistencia técnica.

- Verificar la propiedad de dominio de Search Console mediante el registro que Google indique y enviar `sitemap-index.xml`.
- Revisar indexación de portada y cinco servicios; atender errores 404/redirecciones. No usar una solicitud de cambio de dominio si se conserva la misma dirección.
- Actualizar el sitio web, horarios, contacto, categoría y fotos de la ficha existente del Perfil de Empresa; no crear otra ficha para el mismo negocio.
- Registrar una referencia inicial de consultas y visitas para comparar cambios. Configurar analítica adicional y medición de clics en WhatsApp si se decide usarla, revisando privacidad según lo que efectivamente se implemente.
- Evaluar la evolución de búsquedas locales, contenido y consultas reales; no prometer primeras posiciones ni un plazo fijo de aparición en asistentes.

### 10. Mantener la web

- Renovación anual del dominio y responsables de cuenta identificados.
- Actualizar datos y horarios cuando cambien, conservar respaldos y revisar enlaces periódicamente.
- Mantener dependencias y pruebas; usar previsualizaciones para revisar cambios antes de pasar a producción.
- Comprobar Search Console y el Perfil de Empresa de forma periódica. Una web publicada no garantiza por sí sola que lleguen consultas.

## Condición de salida

No cambiar el dominio hasta cerrar los datos del libro y contenido, recuperar el control administrativo, preservar correo/DNS, preparar redirecciones y aprobar la URL temporal. Después se hace la validación del dominio público. Esta guía prepara la publicación; no ejecuta altas, compras, cobros, mensajes ni cambios externos.

## Resultado final de Lighthouse y correcciones ejecutadas

Medición aislada local de producción con Lighthouse 13.5.0 del 17/10/2026, después de las correcciones: **rendimiento 95/100, accesibilidad 100/100, buenas prácticas 100/100 y SEO técnico 100/100**. LCP 2,9 s, bloqueo total 0 ms y desplazamiento de diseño 0,001. No hubo advertencias de ejecución. Es una pasada de laboratorio móvil; la red, caché y servidores del dominio público pueden cambiar los resultados. El 100 de SEO no mide posiciones, tráfico ni aparición en IA.

Se corrigieron dos clases de hallazgos, sin cambiar el diseño: (1) etiquetas ARIA no admitidas en spans genéricos de los contadores, sustituidas por texto accesible estable; (2) nombres accesibles que omitían parte de la etiqueta visible en el acceso al libro y en las tarjetas de servicios. El nombre del libro ahora forma parte del nombre accesible y las tarjetas usan el nombre natural de todo su contenido visible.

Informes locales: `artifacts/publicacion-lighthouse-mobile.report.html` y `.report.json`. La primera pasada se conserva como `publicacion-lighthouse-mobile-inicial.report.*`. Los informes detallan oportunidades de mejorar imágenes, CSS y JavaScript; se puede seguir optimizando el LCP. La publicación sigue pendiente de los puntos de contenido, dominio, redirecciones y validación pública descritos arriba.


## Actualización de decisiones — 17/10/2026

La usuaria aprobó las fotografías y el mapa, pidió mantener los textos profesionales actuales y confirmó el prólogo «Fernando Pérez Hualde y Juan F. Klaps», ya corregido en la ficha. Estas decisiones actualizan las solicitudes de aprobación previas del documento. Las imágenes se conservan; la recreación de la miniatura sigue teniendo una autoría impresa diferente.

Ya están preparadas ocho reglas en `public/_redirects`, incluidas `/sala` y las variantes con barra final. Esto sustituye la nota anterior de que no había reglas: falta probarlas por HTTP en Pages. Se sumaron enlaces contextuales desde FAQ a servicios. El plan de futuras páginas y el inventario de información administrativa están en `SEO-LOCAL.md`.

La usuaria autoriza integrar `feature-vico` en `main` al terminar las comprobaciones y elige medición con Google. Aún faltan accesos de dominio/Cloudflare/Google y preservar DNS/correo antes de conectar el dominio. No hay etiquetas de analítica añadidas ni cambios de DNS.
