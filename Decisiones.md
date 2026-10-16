# Decisiones y cambios

Este archivo registra las decisiones tomadas y los cambios ejecutados desde el 13 de octubre de 2026. Se actualiza con cada tarea y se conserva el historial de entradas. Los cambios anteriores se consultan en el historial de Git y en los informes existentes.

## Cómo mantener el registro

- Agregar una entrada por tarea con fecha, decisiones, motivos, archivos modificados y verificaciones realizadas.
- Distinguir los cambios ejecutados de los pendientes y registrar cualquier bloqueo.
- Actualizar este archivo antes del commit que incluye los cambios. El identificador de ese commit se consulta en Git, para evitar una referencia circular.
- Compartir los avances mediante commits y push al repositorio, dejando constancia de cualquier fallo de publicación.
- No incluir contraseñas, credenciales ni datos confidenciales.

## 2026-10-13 — Registro de decisiones y colaboración

### Decisiones

- Usar `Decisiones.md` como registro continuo de las decisiones y los cambios, por solicitud de la usuaria.
- Guardar las instrucciones de continuidad en `AGENTS.md` para que las futuras sesiones mantengan este registro.
- Realizar commits y push de los avances autorizados para que los compañeros puedan seguirlos en GitHub.
- Usar el repositorio existente `JuanCortabarria/escribaniajureramos`, remoto `origin`, en la rama `main`.
- Conservar la identidad de autor que ya tiene configurada Git.

### Cambios ejecutados

- Creado `Decisiones.md` con las reglas de registro y esta primera entrada.
- Creado `AGENTS.md` con las instrucciones para mantener el registro y compartir los avances.

### Verificaciones

- El repositorio estaba sin cambios locales al comenzar.
- Se pudo consultar el historial local; el último commit era `5c6945b` (`PaginaInicial`).
- Se verificó el acceso de lectura al remoto: `main` en GitHub coincidía con el commit local.
- Git está disponible en el entorno de Codex; la versión del sistema requiere herramientas de desarrollo que no están instaladas.
- No se requieren pruebas de la web para estos cambios de documentación.

### Publicación

- Creado el commit local `9f35284` (`docs: registrar decisiones y flujo de colaboración`) con ambos archivos.
- El push a `origin/main` se intentó y falló: Git no tiene disponible la autenticación de GitHub por HTTPS (`could not read Username`). El acceso de lectura verificado no confirma permiso de escritura.
- Los archivos están guardados localmente; queda pendiente autenticar GitHub con una cuenta con permiso de escritura y volver a ejecutar el push.
- La actualización de este resultado se guarda en un segundo commit de documentación.

## 2026-10-13 — Revisión del código y ejecución local

### Decisiones

- Revisar y ejecutar la versión existente antes de modificar el diseño o el contenido, por solicitud de la usuaria.
- Mantener la vista de desarrollo en `http://127.0.0.1:4321/`, accesible desde esta computadora.
- Consultar el objetivo principal, el público y los servicios prioritarios, las preferencias de diseño, la vigencia de los datos y credenciales, las preguntas frecuentes reales, la autorización de imágenes, el logo, el plazo, la aprobación final y los indicadores de éxito. Las respuestas siguen pendientes.

### Trabajo ejecutado

- Revisados los componentes, la portada, la configuración de contacto y servicios, los estilos, los metadatos y los informes previos.
- Instaladas las dependencias con `npm ci`, usando las versiones del archivo `package-lock.json` y el entorno Node.js disponible en Codex.
- Iniciado el servidor de desarrollo local con la telemetría de Astro desactivada para esta ejecución.
- Abierta la página en el navegador de Codex y dejada disponible para revisión.
- Actualizado únicamente este registro; el diseño y el contenido de la web conservan su versión previa.

### Verificaciones

- Compilación y revisión de Astro correctas: 0 errores, 0 advertencias y 0 observaciones.
- Auditoría técnica existente ejecutada correctamente; informe local en `artifacts/auditoria-tecnica.json`.
- Verificadas la carga de la página en el navegador y la apariencia de la portada.
- La revisión identifica pendientes previos de validación de FAQ, credenciales, derechos de uso de fotos, logo y ubicación en Google Maps.

### Pendientes

- Recibir las respuestas de la usuaria antes de decidir las modificaciones.
- Compartir los commits con GitHub cuando esté disponible la autenticación con permiso de escritura; el bloqueo del push registrado en la entrada anterior sigue sin resolverse.

## 2026-10-13 — Enfoque comercial y contenido suministrado por la profesional

### Decisiones confirmadas

- Objetivo principal: recibir más consultas por WhatsApp.
- Público prioritario: particulares, empresas e inmobiliarias. Dar prioridad a inmuebles, certificaciones por su volumen y movimiento, y reestructuración y asesoramiento societario.
- Conservar el estilo azul, dorado y crema, la tipografía y el tono profesional y cercano.
- Sustituir la portada por una mujer firmando; se incorporó una imagen ilustrativa fotográfica generada, sujeta a revisión de la usuaria.
- Horario confirmado: lunes a jueves de 9 a 17 h; viernes de 9 a 14 h.
- La profesional confirmó el doctorado en Derecho y suministró seis preguntas frecuentes con sus respuestas. Se respetó su contenido con correcciones menores de redacción.
- La usuaria es la profesional responsable y aprobará el resultado final. Quiere tenerlo listo de inmediato para revisión.
- Google Analytics y Google Search Console se configurarán después: la usuaria confirmó que todavía no están configurados.

### Cambios ejecutados

- `src/config/site.ts`: horarios diferenciados, fecha, prioridad de servicios, asesoramiento y reestructuración societaria, doctorado y las seis FAQ reales.
- `src/pages/index.astro`: portada nueva, botón principal explícito de WhatsApp, público prioritario, presentación de servicios y eliminación de la leyenda de FAQ preliminares.
- `src/components/Seo.astro`: horarios coherentes en los datos estructurados y descripción alineada con los servicios prioritarios.
- `src/pages/index.md.ts` y `src/pages/llms.txt.ts`: contenido alternativo coherente con la página.
- `src/styles/global.css`: posición del recuadro de la portada para mantener visible el gesto de firma.
- `public/images/mujer-firmando*`: imagen nueva con variantes JPEG, WebP y AVIF; conservada la imagen anterior.
- `licenses/mujer-firmando-origen.md`: procedencia y prompt completo de la imagen generada con la herramienta integrada.
- `PENDIENTES.md`: actualizado según las respuestas recibidas.

### Verificaciones

- Compilación y revisión de Astro: 0 errores, 0 advertencias y 0 observaciones.
- Auditoría técnica existente: correcta.
- Verificados los horarios de lunes a jueves y viernes en los datos estructurados, la eliminación de FAQ preliminares del HTML y Markdown, y la presencia de las variantes optimizadas en la compilación.
- Navegador: sin desborde a 1440 y 390 px; portada visible con la nueva imagen, menú móvil funcional y FAQ desplegable con la respuesta suministrada. Sin errores ni advertencias de consola registrados en la revisión.
- Captura de revisión local: `artifacts/portada-actualizada.jpg`.

### Pendientes

- Revisión y aprobación de esta versión por la usuaria.
- Logo, autorización de las fotos conservadas, cargos y afiliaciones restantes y pin de Maps, según `PENDIENTES.md`.
- Configurar Analytics y Search Console en una etapa posterior.
- El envío a GitHub continúa bloqueado por la autenticación pendiente. Los cambios se guardan en un commit local.

## 2026-10-13 — Integración de cambios y reanudación local

### Decisiones y cambios ejecutados

- Revisados el historial, las instrucciones y los cambios del compañero en el commit `61c309f`: FAQ reales, horarios diferenciados, servicios prioritarios y contacto por WhatsApp.
- Resueltos cuatro conflictos de aplicación de cambios guardados en `src/components/Seo.astro`, `src/pages/index.astro`, `src/pages/index.md.ts` y `src/pages/llms.txt.ts`.
- Conservados los horarios, credenciales, FAQ y enfoque de servicios del compañero, junto con la portada de oficina, el título «Escribanía en Nueva Córdoba» y el tono informativo solicitados directamente en este chat. La imagen generada de firma se conserva disponible como alternativa.
- Conservados todos los demás cambios existentes, incluido el archivo ajeno a esta tarea en `outputs/`, sin incorporarlo al commit de integración.
- Guardada una copia de los cuatro archivos con conflictos en `/private/tmp/escribania-conflictos-20261013` antes de editarlos. No se descartó el stash.

### Verificaciones y ejecución

- Compilación Astro correcta: 0 errores, 0 advertencias y 0 observaciones. Auditoría técnica existente correcta.
- Servidor de desarrollo activo en `http://127.0.0.1:4321/`, usando Node 24 del runtime disponible, ya que el Node predeterminado es 22.16 y el proyecto requiere 22.19 o superior.
- Navegador: HTTP 200, seis FAQ reales, horarios diferenciados correctos y foto de oficina cargada.
- Commit de integración `53fc08a` enviado correctamente a `origin/main`; la autenticación de escritura ya funciona en esta sesión.
- El archivo ajeno `outputs/vmasport-referencias-y-prospectos-uruguay.md` conserva su estado previo y no se incluyó en el commit.

## 2026-10-13 — Cierre de conflictos y confirmación de portada

- Verificado que el índice Git no presenta archivos sin fusionar y que el código no contiene marcadores de conflicto.
- Ratificada la portada solicitada directamente por el usuario: Nueva Córdoba, descripción informativa, foto de oficina y recuadro con una sola frase. Restaurado el botón «Coordiná tu consulta» para conservar la versión previa solicitada.
- Conservadas las FAQ reales y los horarios y servicios actualizados del compañero.
- Actualizados `PENDIENTES.md` e `INFORME.md` para distinguir los asuntos resueltos de la información externa todavía necesaria; no se dan por confirmados permisos de fotos, cargos ni acceso a servicios que no fueron suministrados.
- El archivo ajeno de `outputs/` permanece fuera de esta tarea.
- Verificaciones finales: Astro sin errores ni advertencias, auditoría técnica correcta, HTTP 200 y portada revisada a 1440 y 390 px sin desbordes. Archivo comprimido del proyecto regenerado con el contenido integrado.

## 2026-10-13 — Titulares institucionales

- Sustituidos los eslóganes de las secciones por títulos descriptivos: «Servicios notariales», «Modalidad de atención», «Preguntas frecuentes», «Ubicación y horarios» y «Contacto con la escribanía».
- Sustituidos los subtítulos publicitarios de las tarjetas por categorías de práctica, y los títulos del proceso por «Consulta inicial», «Documentación» y «Gestión notarial».
- Simplificados los textos complementarios del perfil y contacto; el retrato ahora identifica a la profesional y su registro. Eliminada la pregunta comercial del recuadro de consultas y actualizado el título de la página 404.
- Conservados el título de portada y la frase del recuadro solicitados previamente, los servicios, FAQ suministradas y datos de contacto.
- Archivos: `src/pages/index.astro`, `src/config/site.ts`, `src/pages/404.astro` y este registro.
- Verificaciones: compilación sin errores ni advertencias, auditoría técnica correcta y vista local a 1440 y 390 px sin desbordes; los seis encabezados principales muestran títulos institucionales.

## 2026-10-14 — Actualización del perfil profesional

- Reemplazadas las cuatro credenciales anteriores por las cinco indicadas por el usuario: Doctora en Derecho Societario, Magíster en Derecho Empresario, Gobierno corporativo, Escribana titular por concurso y Académica y docente universitaria.
- Conservada la presentación en lista, con una línea por título o área, sin agregar instituciones ni calificaciones no suministradas.
- La descripción de la persona en JSON-LD utiliza ahora la misma lista de `site.ts`; la versión Markdown también la toma de esa configuración. Actualizada la fecha del contenido al 14/10/2026.
- Archivos modificados: `src/config/site.ts`, `src/components/Seo.astro`, `PENDIENTES.md` y este registro.
- Verificaciones: Astro sin errores ni advertencias, auditoría técnica correcta y cinco credenciales actualizadas visibles en localhost; vista móvil sin desbordes.

## 2026-10-14 — Orden de las secciones

- Reordenadas las cuatro secciones principales: La escribana → Ubicación → Preguntas frecuentes → Servicios.
- Actualizados el menú y la numeración de las secciones para seguir el mismo recorrido.
- Conservadas la portada y la franja de datos de trayectoria; la información complementaria de modalidad de atención queda después de los servicios, antes del cierre de contacto.
- Archivos modificados: `src/pages/index.astro` y este registro.
- Verificaciones: compilación sin errores ni advertencias, auditoría técnica correcta y orden de secciones y menú confirmado en localhost a 1440 y 390 px, sin desbordes.

## 2026-10-14 — Modalidad de atención y distribución de la paleta

- Movida «Modalidad de atención» inmediatamente antes de «Servicios», siguiendo la solicitud del usuario.
- Aplicada una secuencia de fondos acorde al recorrido: perfil blanco, ubicación marfil, preguntas blanco, modalidad azul tinta y servicios marfil con tarjetas blancas. Portada y cierre conservan el azul tinta.
- Conservados los colores de marca confirmados. Centralizados el dorado oscuro para texto legible, la superficie cálida secundaria, los bordes y el texto secundario sobre azul; reducidas las variaciones locales entre secciones.
- Archivos modificados: `src/pages/index.astro`, `src/styles/tokens.css`, `src/styles/global.css` y este registro.
- Verificaciones: Astro sin errores ni advertencias, auditoría técnica correcta, recorrido y fondos confirmados a 1440 y 390 px sin desbordes. Revisada la captura de escritorio. Contrastes de las parejas principales de texto entre 5,36:1 y 15,97:1.

## 2026-10-14 — Planificación de profesionalización, SEO local y GEO

- Creado `PLAN_SEO_GEO.md` con diagnóstico del código actual, estado implementado frente a pendiente, revisión de los tres repositorios locales, arquitectura propuesta, contenidos, SEO local, schema, GEO, migración, medición y mantenimiento.
- Contrastadas las recomendaciones con documentación oficial de Google, Bing y proveedores de rastreadores; incluida la actualización vigente de informes y controles de búsqueda generativa de Google.
- Diferenciadas las mediciones Lighthouse históricas del 12/10 de la auditoría técnica del 14/10, y las hipótesis de palabras clave de una investigación de volumen todavía pendiente.
- Incluidos backlog de 24 acciones, responsables, dependencias, criterios de aceptación, cronograma orientativo y datos necesarios.
- Detectados para planificar la ampliación: revisar `founder`/`foundingDate` y producir schema por página; hoy el componente SEO común incluye FAQ generales. No se modificó la web ni se publicó, configuró Analytics o cambió el dominio.
- Verificación de esta tarea: documento revisado contra el código y fuentes, enlaces de referencia incorporados; no requiere recompilar la web por ser planificación documental.

## 2026-10-15 — Primera selección para implementar el plan SEO/GEO

- El usuario eligió preparar las tres páginas prioritarias: inmuebles, certificaciones y sociedades. Se mantienen en entorno local hasta su revisión.
- Confirmó que algunos trámites requieren turno y otros no; los casos concretos están por precisar.
- Confirmó que los presupuestos se solicitan por WhatsApp: el cliente describe la gestión y recibe indicaciones sobre los datos necesarios.
- Actualizado `PENDIENTES.md` para conservar estas respuestas y evitar volver a preguntar lo ya decidido. Siguiente paso: precisar atención sin turno y datos iniciales de consulta.
- No se modificó contenido público ni se inventaron requisitos, importes o plazos. Verificación documental y `git diff --check`; no corresponde recompilar por estos cambios de registro.

## 2026-10-15 — Borradores locales de inmuebles, certificaciones y sociedades

### Información confirmada

- Certificaciones: consultar por WhatsApp antes de concurrir, según gestión y disponibilidad. No afirmar atención sin turno.
- Inmuebles: la coordinación del presupuesto se realiza por WhatsApp; no se fija una lista obligatoria de datos iniciales no confirmada. La coordinación por ese canal no implica que los actos se realicen íntegramente a distancia.
- Sociedades: descripción por WhatsApp y reunión cuando corresponde.

### Cambios ejecutados

- Creados `src/config/service-pages.ts` y las plantillas dinámicas `src/pages/servicios/[slug].astro` y `[slug].md.ts`: tres páginas y sus equivalentes Markdown, con textos institucionales, actuaciones, modalidad, presupuesto y preguntas pertinentes. Se reutilizan las FAQ técnicas suministradas, sin inventar tarifas ni plazos. Redacción final pendiente de aprobación profesional.
- Extraídos encabezado y pie compartidos en `Header.astro` y `Footer.astro`; mantenidos orden y paleta de portada. Añadidos enlaces de detalle desde las tres primeras tarjetas y enlaces entre servicios.
- Creados estilos de servicio en `src/styles/services.css`. La portada muestra consulta inicial por WhatsApp y la regla de visita actualizada.
- Nuevo constructor `src/lib/structured-data.ts`: `WebPage`, `Service`, `BreadcrumbList` y FAQ correspondientes a cada página. Retirados `founder` y `foundingDate` por falta de confirmación, conservando la trayectoria profesional desde 2002.
- `Seo.astro` y `Layout.astro` aceptan título, descripción y servicio propios. `llms.txt` e `index.md` enlazan el contenido nuevo.
- Ampliada la auditoría técnica para contrastar HTML, JSON-LD, Markdown, sitemap y horarios; creada revisión de navegación de servicios. Documentadas las rutas y las decisiones en README, PENDIENTES y el plan.
- No se publicó, cambió dominio, activó Analytics ni modificó Google Business Profile.

### Verificaciones

- Compilación Astro: 0 errores, 0 advertencias y 0 observaciones. Auditoría técnica ampliada correcta.
- Tres páginas comprobadas a 1440, 390 y 320 px: HTTP 200, sin desbordes ni errores de JavaScript, FAQ desplegables, mensajes WhatsApp con el servicio elegido, versiones Markdown con tipo correcto y menú móvil funcional.
- Navegación desde tarjetas a cada servicio y regreso al inicio comprobada. Revisión existente de la portada correcta a 1440, 390 y 768 px, incluido el mapa por clic.
- Capturas de escritorio y móvil conservadas en `artifacts/`; estado de textos: borradores locales para revisión. No se repitió Lighthouse.
- Ajustado el acceso flotante de WhatsApp a formato compacto en páginas de servicio para reducir la superposición con la columna de contacto.

## 2026-10-15 — Una página por cada área de práctica

- A pedido del usuario, completadas las páginas de las cinco áreas. Conservada la página existente de sociedades y empresa; añadidas `/servicios/familia/` y `/servicios/sucesiones-prevision/`.
- Incorporadas en `src/config/service-pages.ts` las actuaciones familiares y sucesorias que ya constaban en la configuración del sitio. Las FAQ nuevas describen alcance y coordinación, sin inventar requisitos, precios, plazos ni resultados. Redacción final sujeta a aprobación profesional antes de publicar.
- La plantilla compartida incorpora automáticamente enlaces desde las cinco tarjetas, páginas relacionadas, metadatos, schema por página, sitemap, versiones Markdown e índice llms.txt.
- Ampliadas las auditorías existentes a las cinco rutas; actualizados README y PENDIENTES. No se modificaron el orden ni la paleta de la portada.

## 2026-10-15 — Tarjetas completas como enlaces de servicio

- Sustituido el botón «Información del servicio» por un enlace nativo que abarca toda la tarjeta: título, descripción, lista y superficie libre conducen a la página del área correspondiente.
- Retirado también el enlace de WhatsApp interno de esas tarjetas para no crear destinos distintos dentro de la misma superficie ni enlaces anidados. Los contactos de WhatsApp siguen disponibles en la página de detalle, el encabezado y el acceso flotante.
- Conservados los títulos, contenido y paleta de tarjetas. Añadida una flecha discreta, con foco visible y navegación de teclado nativa.
- Adaptada la revisión de navegación a las tarjetas completas. Se completa en esta misma tarea la validación pendiente de Familia y Sucesiones.
- Verificaciones de ambas tareas: compilación sin errores ni advertencias y auditoría técnica correcta para cinco páginas. Navegador a 1440, 390 y 320 px sin desbordes ni errores, FAQ y Markdown correctos, menú móvil funcional y navegación desde las cinco tarjetas comprobada.
- En localhost:4321 se verificaron cinco tarjetas-enlace, cero enlaces anidados y ausencia de «Información del servicio»; un clic en el título de Patrimonio abre su detalle. Captura de tarjetas conservada en `artifacts/`.

## 2026-10-15 — Evaluación profesional de la versión local

- Evaluadas la portada y cinco páginas de servicio, el código, pendientes e informes. Creado `EVALUACION_WEB.md` con nota general cualitativa 7,5/10, puntuación por sección y servicio, fundamentos, evidencia y prioridades.
- Separadas las notas editoriales de las métricas: no se puntúa el posicionamiento real sin Search Console, ficha o datos de usuarios. El Lighthouse del 12/10 se identifica como histórico y no se volvió a ejecutar.
- Navegador actual a 1440 y 390 px: doce respuestas HTTP 200, sin desbordes ni errores de JavaScript observados. Medidos textos funcionales de 8–11 px; recomendada revisión de lectura sin atribuir automáticamente un incumplimiento normativo.
- Áreas principales de mejora: profundidad en sociedades/familia/sucesiones, explicaciones de actas, legibilidad, respaldos profesionales, datos de ubicación y preparación de publicación/medición.
- Guardadas evidencias en `artifacts/evaluacion-actual.json` y capturas. No se modificaron diseño o contenido de la web. Documentación contrastada con fuentes oficiales de Google; evaluación sin comparación sistemática con competidores ni pruebas con clientes.
