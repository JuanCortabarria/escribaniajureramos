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

## 2026-10-15 — Imagen de oficina con nombre Jure Ramos

- A pedido del usuario, editada la fotografía adjunta `Portada_ofi.jpeg` con la herramienta integrada de imágenes: reemplazado «SILO STUDIOS» por «Jure Ramos», con Jure en negrita y Ramos en trazo fino.
- Verificada visualmente la escritura y la diferencia de peso tipográfico. Entregada la imagen en el chat; el original se conserva y no se incorporó la imagen a la web.
- Resultado guardado por la herramienta en `/Users/juancortabarria/.codex/generated_images/01a14229-7b34-7873-b55f-b83aeb5058c2/exec-fff118b5-9ed8-45b2-b971-2a2f52b2eedb.png`.
- Único archivo del repositorio modificado: `Decisiones.md`. Sin pruebas de código por tratarse de una entrega gráfica independiente. Sin pendientes de edición.

## 2026-10-15 — Sustitución de imagen principal por Portada_ofi.jpeg

- Incorporada a la portada la imagen suministrada por el usuario en `/Users/juancortabarria/Downloads/Portada_ofi.jpeg`, con el nombre Jure Ramos en la pared.
- Generadas variantes AVIF y WebP de 420/800 px y respaldo JPEG optimizado, conservando la composición y sin alterar el contenido de la imagen. Archivos con nombre nuevo para evitar reutilizar una versión anterior en caché.
- Actualizados la ruta de imagen, dimensiones y texto alternativo descriptivo en `src/pages/index.astro`. La fotografía anterior se conserva entre los recursos.
- No se cambian titulares, paleta, orden ni contenido de servicios.
- Verificaciones: compilación de producción y revisión de Astro sin errores, advertencias ni sugerencias; portada revisada visualmente a 1440 y 390 px, imagen cargada y sin desbordes horizontales. El nombre Jure Ramos queda visible en ambos tamaños. `git diff --check` correcto.
- Sin pendientes para este cambio. La web permanece en entorno local.

## 2026-10-15 — Contador animado en «Desde 2002»

- A pedido del usuario, incorporado un contador ascendente de 0 a 2002 en el indicador de trayectoria. Se activa una sola vez cuando al menos la mitad del indicador entra en pantalla, durante 1,2 segundos y con desaceleración al final.
- Creado `src/components/YearCounter.astro` e integrado en `src/pages/index.astro`, utilizando el año de `site.since`. No se animan las otras menciones del año.
- Conservado 2002 en el HTML inicial y sin JavaScript. Los lectores de pantalla reciben «Desde 2002» sin anunciar cada incremento. Se respeta la preferencia de movimiento reducido, también si cambia durante la animación. Reservado ancho para evitar desplazamientos al cambiar las cifras.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias. Chrome a 1440 y 390 px: comprobado incremento intermedio, final exacto en 2002 y ausencia de repetición al volver a la sección, sin errores de JavaScript. Verificados también movimiento reducido y JavaScript desactivado. El navegador requirió ejecución fuera del sandbox para iniciarse.
- Sin pendientes para este cambio; continúa en entorno local.

## 2026-10-15 — Contador desde 1000 y propuestas de animación

- Ajustado `src/components/YearCounter.astro` para que el contador arranque exactamente en 1000 y termine en 2002. Se mantienen la duración de 1,2 segundos, activación única al entrar en pantalla y alternativas accesibles existentes.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440 y 390 px confirmó primera actualización 1000, valores intermedios dentro del rango y cierre en 2002.
- Investigadas referencias de Motion (Split reveal, Stagger reveal, ejemplos de scroll, Parallax layers) y Webflow (webpage-animation). Se presentan como propuestas para elegir: títulos por líneas, entrada suave de encabezados, revelado de imágenes, zoom de entrada, parallax discreto, tarjetas escalonadas, respuesta de enlaces y apertura de preguntas. No se implementó ninguna de estas propuestas adicionales.
- Referencias: https://motion.dev/ui/components/split-reveal ; https://motion.dev/ui/components/stagger-reveal ; https://motion.dev/examples?category=scroll ; https://motion.dev/ui/components/parallax-layers ; https://webflow.com/blog/webpage-animation . Pendiente: selección del usuario para nuevas animaciones.

## 2026-10-15 — Servicios notariales compactos

- Simplificadas las cinco tarjetas de servicios en `src/pages/index.astro`: se conservan ícono, número, categoría, título y flecha; retiradas del resumen las descripciones y listas. La primera mantiene «Operaciones inmobiliarias» y «Patrimonio e inmuebles». Cada tarjeta sigue enlazando en toda su superficie a su página informativa.
- Retirado el párrafo introductorio de la sección y compactada la tarjeta de consultas, conservando su enlace de WhatsApp. La información detallada de servicios permanece en la configuración y páginas individuales.
- Ajustados espaciados, tamaños de íconos y tipografía en `src/styles/global.css`, con títulos legibles, bordes discretos y paleta existente. No se agregan nuevas animaciones.
- Medidas antes/después: tarjeta inicial a 1440 px de 400 a 215 px; a 390 px de 401 a 190 px. Sección completa de 1163 a 693 px en escritorio y de 2744 a 1442 px en celular.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440, 768, 390 y 320 px sin desbordes ni errores de JavaScript. Confirmados cinco enlaces con respuesta 200 y navegación desde la tarjeta inmobiliaria. Capturas guardadas en `artifacts/servicios-compactos-*.png`, con revisión visual de escritorio y celular. `git diff --check` correcto.
- Sin pendientes para este cambio; continúa en entorno local.

## 2026-10-15 — Línea sobre la flecha de servicios

- Restituido en `src/styles/global.css` el borde superior de 1 px sobre la flecha de las cinco tarjetas de servicios, a pedido del usuario. Se mantiene el formato compacto.
- Verificación en Chrome local: cinco líneas con estilo sólido y grosor de 1 px; `git diff --check` correcto. Sin pendientes.

## 2026-10-15 — Primera combinación de animaciones de la portada

- El usuario autoriza probar varias de las animaciones propuestas. Incorporados títulos por líneas en la portada y el nombre de la escribana (720 ms, desfase de 100 ms), zoom inicial discreto de la fotografía principal (3,5 %, 1100 ms), revelado parcial del retrato (850 ms), entrada suave de otros títulos y tarjetas de servicios (600 ms, desfase de hasta 140 ms).
- Las entradas se activan una sola vez al entrar en pantalla. Se conserva el contador de 1000 a 2002 y el diseño compacto de servicios con línea sobre la flecha. Mejorada la respuesta de las flechas al cursor y al foco del teclado.
- Agregadas apertura y cierre fluidos de las preguntas frecuentes (280 ms), conservando el elemento nativo details, activación por teclado y cambios rápidos de intención.
- Implementación con APIs del navegador, sin nuevas dependencias. Contenido visible sin JavaScript; se respeta movimiento reducido y se finalizan las animaciones activas al cambiar esa preferencia. Retirada la entrada previa del contenedor completo de portada para evitar superponer movimientos.
- Archivos: `src/pages/index.astro`, `src/scripts/home-motion.ts`, `src/styles/motion.css` y `src/styles/global.css`.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440, 768, 390 y 320 px sin desbordes ni errores de JavaScript. Probados FAQ con mouse, Enter y clics rápidos, activación única de tarjetas y navegación al servicio inmobiliario. Probadas alternativas con movimiento reducido, sin JavaScript y cambio de preferencia durante la animación. Se mantienen cinco tarjetas sin listas y líneas de 1 px. Capturas de portada revisadas en escritorio y celular; evidencia en `artifacts/animaciones-qa.json` y `artifacts/animaciones-portada-*.png`. `git diff --check` correcto.
- Pendiente: valoración visual del usuario sobre esta primera combinación en la web local; no se publica la web.

## 2026-10-16 — Contador en el encabezado de portada

- Sustituido el texto estático «CÓRDOBA · DESDE 2002» por «CÓRDOBA · DESDE» y contador de 1000 a 2022, según el año final indicado expresamente por el usuario en esta solicitud. La animación se inicia al abrir la portada, cuando el encabezado está visible, y dura 1,2 segundos.
- Reutilizado `YearCounter.astro` con una propiedad opcional de prefijo para conservar las mayúsculas del encabezado. Archivos modificados: `src/components/YearCounter.astro` y `src/pages/index.astro`.
- El contador de trayectoria, biografía y demás referencias existentes siguen usando el año 2002 previamente confirmado; esta solicitud cambia únicamente el encabezado de portada.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias. Chrome a 1440 y 390 px: comprobados 1000, valores intermedios y final 2022, sin desbordes. Con movimiento reducido o sin JavaScript se muestra directamente 2022. `git diff --check` correcto.
- Sin pendientes de implementación para este cambio; continúa en entorno local.

## 2026-10-16 — Corrección del año final de portada a 2002

- El usuario aclara que el año correcto es 2002. Actualizado `src/pages/index.astro` para que el encabezado use `site.since`, compartiendo el mismo dato confirmado que el contador de trayectoria y evitando duplicarlo. Se mantiene la animación desde 1000.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; HTML de producción confirma los dos contadores con destino 2002. `git diff --check` correcto. Sin pendientes.

## 2026-10-16 — Conversión de PDF académico a Markdown

- Convertido el PDF suministrado «Obligatorio 2 - Octubre 2026» a `output/markdown/Obligatorio 2 - Octubre 2026.md`, con el contenido textual de sus 14 páginas, títulos, listas anidadas y tablas de evaluación reconstruidas.
- Conservado el contenido original, incluidas sus indicaciones e inconsistencias, como texto del documento; las consignas académicas no se ejecutaron como instrucciones de esta tarea. Encabezados y pies repetidos reunidos al inicio; el pequeño ícono de entrega se representa mediante una descripción textual. No se modifica la web.
- Verificaciones: extracción de las 14 páginas, inspección visual de portada, tablas y recordatorio; comparación de frecuencias de palabras sin pérdidas respecto del cuerpo original y revisión de ambas tablas. Sin caracteres de sustitución. Original intacto.
- Archivos de esta tarea: el Markdown indicado y `Decisiones.md`. Sin pendientes de conversión.

## 2026-10-16 — Revisión de avances y propuestas de animación

- Revisados el historial y el código del compañero hasta `5206c96`; la consulta a GitHub confirmó que `origin/main` apunta al mismo commit.
- Revisados los cambios de portada, las cinco páginas de servicio, las tarjetas compactas, los títulos institucionales, los dos contadores y las animaciones existentes en `home-motion.ts` y `motion.css`.
- Confirmado el servidor de desarrollo y abierta la página en el navegador visible de Codex, en `http://127.0.0.1:4321/`. Revisada la portada; observados los contadores y la entrada del título durante la carga.
- Propuestas para elegir: coordinar título, fotografía y botón de portada; animar el menú móvil y el indicador de sección activa; extender un lenguaje de movimiento consistente a las páginas de servicios; afinar las entradas escalonadas de tarjetas. Como alternativa editorial, mantener el año 2002 legible y animar su acento visual en lugar de contar años intermedios.
- Consultadas las preferencias de intensidad, zona prioritaria y valoración de los efectos actuales. Las propuestas no se implementan en esta tarea; queda pendiente la elección de la usuaria.
- Mantener el respeto por movimiento reducido y la disponibilidad del contenido sin JavaScript que ya incorpora el proyecto.
- Referencias consultadas: https://motion.dev/docs/stagger y https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion . Son referencias de interacción; no se agregó ninguna dependencia.
- Único archivo modificado: este registro. No requiere recompilación por tratarse de una revisión y planificación documental.
- El intento de push de esta revisión falló porque esta computadora no tiene disponible la autenticación HTTPS de GitHub (`could not read Username`). El registro queda guardado en un commit local; el acceso de lectura al remoto sí fue verificado.

## 2026-10-16 — Propuesta cálida y animada para el libro

- A pedido de la usuaria, creada una fotografía promocional con un único ejemplar del libro, conservando diseño amarillo y fucsia, autoría, título y prólogo. Ambiente de piedra crema, lino y luz de tarde para acompañar la paleta de la web.
- Utilizada la herramienta integrada de imágenes sobre la foto adjunta. Guardados `artifacts/libro-promocional/libro-luz-calida.jpg` y `ORIGEN.md`, con procedencia, prompt y alcance. La foto original se conserva.
- Creada una vista animada en el chat con acercamiento suave y desplazamiento mínimo, pausa y respeto por movimiento reducido. El fragmento queda en el directorio de visualizaciones de este chat; no es un video exportado ni se incorporó a la web.
- Los dos enlaces de Pinterest se abrieron, pero exigieron iniciar sesión e impidieron examinar las imágenes. Se siguieron las preferencias expresas y la paleta existente; no se afirma haber reproducido las referencias.
- Verificaciones: inspección visual de un solo libro y textos principales, JPEG cargado en navegador, animación activa y pausa/reanudación funcionales. Fragmento de menos de 1 MB. No corresponde recompilar la web porque su código permanece sin cambios.
- Pendiente: valoración de la usuaria e incorporación a la web si la solicita. Consulta del remoto correcta y sin avances nuevos por integrar; propuesta guardada en commit local. El push se intentó y falló por falta de autenticación HTTPS (`could not read Username`), por lo que estos archivos todavía no están compartidos en GitHub.

## 2026-10-16 — Libro en la escena de escritorio y café

- La usuaria suministró la referencia de escritorio y solicitó sustituir el cuaderno abierto por el libro de la escribana, manteniendo la escena. Editada con la herramienta integrada de imágenes y la foto original del libro como referencia de identidad.
- Incorporado un ejemplar cerrado con tapa amarilla y fucsia, autoría, título, prólogo y editorial. Conservados computadora, café, agenda lateral, mesa e iluminación cálida; retirado el lápiz para dejar visible la tapa.
- Resultado guardado en `artifacts/libro-promocional/libro-escritorio-cafe.png`, sin sobrescribir las imágenes anteriores ni modificar la web. Vista previa estática de esta edición; no se exportó un video.
- Verificación visual de composición, cubierta y objetos conservados. No requiere pruebas de código. El envío a GitHub continúa bloqueado por la autenticación HTTPS comprobada en esta sesión; se conserva el avance en un commit local.

## 2026-10-16 — Dos nuevas composiciones del libro

- Sustituidos los libros de las dos fotografías adjuntas por el libro amarillo y rosado de la escribana mediante la herramienta integrada de imágenes, usando la foto original de la cubierta como referencia.
- Guardadas `artifacts/libro-promocional/libro-mesa-clara.png` (mesa crema, café y agua, vertical) y `libro-cafe-vapor.png` (madera, café con vapor, anteojos y papelería, cuadrada). Conservados los ambientes y las versiones anteriores. Actualizado `ORIGEN.md`.
- Verificación visual de ambas imágenes: un ejemplar promocionado por escena, título, autora y prólogo legibles, sin restos del título del libro reemplazado. Son ediciones gráficas para revisión, sin cambios ni publicación de la web; no requieren compilación.
- La usuaria consulta también por edición de imágenes y letras animadas para la web. Explicado el flujo y solicitados referencia, texto y ubicación. Esa animación queda pendiente de dichos datos; no se implementa un efecto elegido arbitrariamente.
- Los avances se guardan localmente; sigue pendiente resolver la autenticación HTTPS de GitHub para compartirlos, según el fallo comprobado en esta sesión.

## 2026-10-16 — Entrada sutil y coordinada de la portada

- La usuaria eligió movimientos breves y discretos, con prioridad en título, fotografía y botón de consulta. Valoró positivamente las animaciones existentes; se conservan el contador y los efectos del resto de la página.
- Ajustado `src/scripts/home-motion.ts`: el título de portada entra con desplazamiento del 28 %, opacidad inicial de 0,65, duración de 560 ms y desfase de 60 ms entre líneas. La foto reduce su acercamiento inicial a 1,8 % y su duración a 800 ms.
- Agregadas entradas de 420 ms y 8 px para la descripción, botón, identificación profesional y recuadro de la foto, con desfases breves de 90 a 200 ms. Cada elemento se activa al entrar en pantalla, también en celular, y una sola vez.
- Sin dependencias nuevas ni cambios en textos, diseño, enlaces o animaciones de otras secciones. Se conserva el contenido visible sin JavaScript y la finalización de efectos al activar movimiento reducido.
- Verificaciones: Astro y compilación sin errores, advertencias ni sugerencias; auditoría técnica correcta. Prueba aislada del script con observadores y animaciones simulados: secuencia y tiempos, destino visible, retirada del observador y ausencia de animaciones con movimiento reducido; finalización de efectos al cambiar la preferencia.
- Navegador a 1440 y 390 px: portada revisada durante la entrada, sin desbordes, imagen cargada y enlace de consulta correcto. Ambos contadores finalizan en 2002; sin errores de consola registrados. Vista local dejada abierta.
- Captura de revisión: `artifacts/portada-movimiento-sutil.jpg`. Archivos del commit: script y este registro.
- Pendiente: valoración visual de la usuaria. El commit queda local mientras siga sin resolverse la autenticación HTTPS de GitHub, cuyo fallo fue comprobado en esta sesión.

## 2026-10-16 — Consulta para reemplazar la web publicada

- La usuaria indica ser titular de `escribaniajureramos.com.ar` y solicita conocer los datos y accesos necesarios para reemplazar la web antigua por la versión local.
- Revisadas la web pública y la configuración del proyecto: la nueva web genera archivos estáticos para el mismo dominio. La web pública contiene un formulario de contacto; la versión nueva utiliza WhatsApp y no incluye ese formulario.
- Explicadas dos alternativas pendientes de evaluar: publicar en el alojamiento existente, si admite el proyecto, o usar otro alojamiento y actualizar los registros del dominio correspondientes a la web.
- Solicitados nombre del proveedor y administrador actual, disponibilidad de acceso al hosting y administración del dominio, existencia de correos bajo el dominio y funcionalidades o contenidos antiguos que deban conservarse. No se solicitan contraseñas en el chat.
- Propuesto preparar copia de seguridad, revisión de la nueva versión en una dirección de prueba, correspondencia y redirecciones de URLs antiguas, verificación de HTTPS y preservación de los registros del correo antes de sustituir la web.
- No se eligió proveedor ni se modificaron hosting, DNS o sitio público. El siguiente paso depende de las respuestas de la usuaria.
- Referencias: https://escribaniajureramos.com.ar/ ; https://docs.astro.build/en/guides/deploy/ ; https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes .
- Único archivo modificado: este registro; no requiere pruebas de código. Se conserva la rama activa `feature-vico`. El commit queda local por el bloqueo de autenticación HTTPS de GitHub ya comprobado.

## 2026-10-16 — Información necesaria para solicitar al administrador

- La usuaria no dispone ahora de los accesos y los solicitará para recibirlos en unos días. Su respuesta no identifica todavía al proveedor del hosting ni al administrador.
- Respondió que no tiene correos bajo el dominio ni contenido o funciones adicionales de la web antigua que deban conservarse.
- Concretada la información a pedir: nombre del proveedor y dirección del panel de hosting; acceso con permisos para publicar archivos; ubicación y acceso al panel que gestiona los registros DNS del dominio; estado de renovación del dominio y alojamiento. NIC Argentina puede ser necesario si hace falta cambiar la delegación, pero no sustituye siempre al panel DNS.
- Solicitar una copia de seguridad completa de la web antigua antes del reemplazo. Si su plataforma utiliza base de datos, incluir también esa base y los archivos de configuración necesarios para restaurarla.
- El panel de edición de la web antigua, por sí solo, puede no permitir publicar la nueva web estática. Los accesos se gestionarán mediante invitación o un canal seguro, sin registrar contraseñas en el chat ni en este archivo.
- Se mantiene pendiente elegir entre alojamiento actual o nuevo una vez identificados el proveedor y los permisos disponibles. No se ejecutaron cambios externos.
- Único cambio: este registro, guardado localmente; continúa pendiente la autenticación de GitHub para enviarlo. Sin pruebas de código por ser una aclaración documental.

## 2026-10-16 — Recuperación de administración y pasos de publicación

- La usuaria confirma que puede contactar al programador anterior y solicita un paso a paso, qué pedirle y cómo avanzar sin su intervención.
- Consulta pública de DNS: el dominio responde con `ns1.onlinenow.com.ar`, `ns3.onlinenow.com.ar` y `ns5.onlinenow.com.ar`. Se presenta como pista sobre la administración DNS, sin afirmar quién contrató el hosting ni que exista deuda. No se pudo consultar el sitio web de ese proveedor con la herramienta web.
- Contrastados con NIC Argentina los mecanismos de ingreso a TAD, consulta pública y transferencia de titularidad. No se verificó quién figura como titular del dominio concreto; la declaración de propiedad de la usuaria no sustituye esa comprobación administrativa.
- Preparada explicación y mensaje para solicitar proveedor, panel y permisos, titularidad y delegación del dominio, vencimientos y estado de pagos, y respaldo completo. Recomendada entrega de administración a cuentas de la usuaria, sin compartir Clave Fiscal.
- Alternativa sin programador: consultar NIC/TAD y los comprobantes propios; solicitar recuperación al proveedor según la titularidad de la cuenta. Si no se dispone del hosting antiguo pero sí del dominio, se puede utilizar un alojamiento nuevo; no es necesario recuperar el hosting anterior para publicar la nueva web.
- Se puede preparar una publicación con URL temporal antes de disponer del dominio. Conectar el dominio existente exige control de su administración o la intervención de quien lo tenga. Si está a nombre de otra persona, corresponde gestionar la transferencia o consultar a NIC; no se promete recuperación automática.
- Plan propuesto: identificar y obtener administración, preservar copia, preparar alojamiento y vista temporal, aprobar, conectar dominio, verificar HTTPS y redirecciones. Sin contratación, publicación ni cambios en DNS ejecutados.
- Fuentes: https://nic.ar/index.php/es/como-ingresar-tad ; https://nic.ar/es/ayuda/instructivos/transferencia-de-dominio ; https://nic.ar/es/ayuda/faq ; https://nic.ar/es/dominios/buscar-dominio .
- Único cambio: este registro. Commit local; continúa el bloqueo de autenticación de GitHub ya registrado. No corresponde ejecutar pruebas de código.

## 2026-10-16 — Libro de la escribana y acceso destacado a servicios

### Decisiones y contenido

- La usuaria solicita una imagen pequeña del libro dentro de la biografía, enlazada a una sección propia, usando la primera foto adjunta como miniatura y alguna de las otras dos en la sección.
- Elegida la tercera fotografía (libro, café y anteojos sobre madera) por su integración con los tonos crema, azul y dorado de la web. La segunda queda como alternativa sin incorporarse.
- Consultada la motivación real; la usuaria aporta trayectoria, mentor y pasión por la materia. Redactado un relato breve en primera persona sobre esos motivos y el derecho societario, sujeto a aprobación final de Solange, sin inventar nombre del mentor, fechas, ISBN, investigación o premios.
- Título, autoría, editorial y prólogo transcritos de la cubierta suministrada.

### Cambios ejecutados

- Nuevos `src/components/BookTeaser.astro` y `BookSection.astro`: miniatura clicable dentro de la biografía, sección `#libro` inmediatamente después del perfil y enlace de regreso.
- Nuevo `src/config/book.ts`: datos del libro y relato centralizados. Incluidos también en `src/pages/index.md.ts` para coherencia con la versión alternativa.
- `src/pages/index.astro`: componentes incorporados y enlace «Ver áreas de práctica» sustituido por «Conocé nuestros servicios», con mención de inmuebles, certificaciones y sociedades.
- Nuevo `src/styles/book.css`: composición adaptable, miniatura de 76 px, sección editorial con fotografía y borde dorado, y acceso a servicios con fondo dorado, mayor tamaño y contraste.
- `src/scripts/home-motion.ts`: reutilizada la entrada suave al aparecer para la miniatura y foto del libro; respuesta breve de imágenes y flechas al cursor o foco mediante CSS. Se conservan movimiento reducido y contenido visible sin JavaScript. No se añadieron dependencias ni movimientos continuos.
- Seis variantes WebP/AVIF de las imágenes usadas en `public/images/`, 214 KB sumando todas las variantes. Sin alterar el contenido de las fotografías; procedencia en `licenses/libro-imagenes.md`.
- Actualizada la fecha de contenido en `src/config/site.ts` y añadido el pendiente de revisión del relato en `PENDIENTES.md`.

### Verificaciones y pendientes

- Compilación y Astro check: 0 errores, 0 advertencias y 0 sugerencias. Auditoría técnica existente correcta para portada y cinco páginas de servicios; `git diff --check` correcto.
- Comprobada coherencia del libro entre HTML y Markdown, destinos `#libro`/`#servicios` y presencia de las seis variantes en la compilación.
- Navegador: escritorio de 1440 px revisado visualmente; 768, 390 y 320 px sin desbordes y con ambas imágenes cargadas. Comprobadas navegación desde la miniatura, regreso a biografía y nuevo enlace de servicios; activación de la miniatura con Enter actualiza el destino. En celular de 390 px, el clic deja la sección debajo del encabezado fijo. Sin errores de consola registrados.
- Evidencias: `artifacts/libro-seccion-escritorio.jpg`, `libro-miniatura-biografia.jpg`, `servicios-acceso-dorado.jpg`, `libro-seccion-movil.jpg` y `libro-servicios-qa.json`.
- Propuestas adicionales, sin implementar: transición breve al abrir páginas de servicios y subrayado que marque la sección activa en el menú. Referencia técnica consultada: https://docs.astro.build/en/guides/view-transitions/ .
- Pendiente aprobación del texto en primera persona. La web permanece local. Comprobación de push con `--dry-run` a `origin/feature-vico` fallida por falta de autenticación HTTPS (`could not read Username`); el avance queda en un commit local.

## 2026-10-16 — Libro independiente, transición de páginas y movimientos continuos

### Decisiones y cambios

- La usuaria aclara que el relato del libro debe quedar fuera de la página principal y abrirse como una página independiente, en una pestaña nueva. Conservada la miniatura de la biografía, ahora enlazada a `/libro/` con aviso accesible de nueva pestaña.
- Creada `src/pages/libro.astro`, con encabezado, pie, fotografías y relato existentes. Retirado `BookSection` de la portada. Creada su versión `/libro.md`; el Markdown de inicio enlaza al libro en lugar de repetir el relato completo.
- Sustituida «En sus páginas estudio la figura del director suplente…» por «Quise transformar esa experiencia en un aporte que acompañe el trabajo y la reflexión de otros profesionales». Corregida la editorial a «Cátedra Jurídica», según indicación expresa de la usuaria.
- Adaptado `BookSection.astro` con un H1 y enlace `/#escribana`; ajustado el espaciado de letras del título bibliográfico en `book.css`.
- `Layout.astro` y `Seo.astro` admiten la versión Markdown específica del libro. Añadidos WebPage y Book en `structured-data.ts`, sin FAQ ajenas a esa página ni datos bibliográficos no suministrados. Enlace agregado a `llms.txt` y ruta incorporada automáticamente al sitemap.
- Añadido `src/styles/page-transitions.css` al layout común: desvanecimiento nativo entre documentos del mismo origen, con salida de 160 ms y entrada de 200 ms. Abarca las páginas de servicios y conserva la navegación normal y los scripts por página. Los navegadores sin soporte mantienen navegación convencional.
- Acceso «Conocé nuestros servicios» con oscilación vertical de 4 px cada 3 segundos, pausada al cursor o foco para facilitar el clic.
- Consultado el tipo de giro del título de preguntas frecuentes; la usuaria eligió expresamente giro completo de 360 grados. Aplicada rotación sobre el eje vertical cada 14 segundos, en repetición continua, sin desplazar el resto de la sección.
- Incorporados dos controles sincronizados «Pausar movimiento»/«Reanudar movimiento», mediante `src/scripts/continuous-motion.ts`. Al pausar, el título se muestra de frente y el acceso queda quieto. Sin JavaScript los controles permanecen ocultos; el contenido sigue visible. Los efectos y las transiciones se desactivan con movimiento reducido.
- Actualizados `README.md`, `PENDIENTES.md` y la auditoría técnica para documentar y comprobar el libro independiente.

### Verificaciones y pendientes

- Astro check y compilación: 0 errores, 0 advertencias y 0 sugerencias; ocho páginas HTML generadas. Auditoría técnica ampliada correcta: libro con un H1, contenido y editorial coherentes, enlace Markdown propio, entidad Book sin FAQ, sitemap y ausencia del relato completo en portada.
- Navegador: clic en la miniatura abre efectivamente una segunda pestaña en `/libro/`; comprobados frase, editorial y enlace de regreso. Libro sin desbordes a 1440, 390 y 320 px, con imagen cargada.
- Navegados los cinco servicios y comprobados sus titulares. Confirmada la URL del servicio inmobiliario tras completar la navegación. La transición está configurada mediante la regla nativa, cuya disponibilidad depende del navegador; no se sustituyó la navegación por un router.
- Confirmados en los estilos computados del navegador `faq-turn`, duración de 14 segundos, repetición infinita y transformación 3D activa, así como `services-float`. Probadas pausa y reanudación con Enter: ambos controles se sincronizan, el título vuelve a su posición legible y la oscilación se pausa.
- Portada móvil de 390 px sin desbordes, menú abre y cierra al navegar a preguntas. Sin errores de consola registrados en esa comprobación. Prueba aislada del controlador y revisión de las alternativas CSS para movimiento reducido correctas. `git diff --check` correcto.
- Capturas y evidencia: `artifacts/libro-pagina-independiente.jpg`, `faq-control-movimiento.jpg` y `libro-movimientos-qa.json`. Ambas páginas quedan abiertas para revisión.
- Referencia técnica: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition .
- Pendiente valoración de la usuaria sobre los efectos y la nueva redacción. Cambios guardados en la rama `feature-vico`; el push sigue pendiente por la falta de autenticación HTTPS comprobada en esta sesión. No se publicó ni se modificó el dominio.

## 2026-10-16 — Acceso al libro únicamente con su imagen

- Confirmada la rama `feature-vico`, con estado limpio al iniciar. La usuaria solicita reabrir la web y mostrar únicamente la imagen del libro como acceso a su página existente.
- Simplificado `src/components/BookTeaser.astro`: retirados rótulo, título, frase y flecha visibles. Conservados enlace nativo a `/libro/`, apertura en pestaña nueva y nombre accesible que informa el destino.
- Actualizado `src/styles/book.css`: eliminados fondo, borde y relleno del recuadro; imagen completa en proporción 4:3, ancho de hasta 240 px y toda su superficie clickeable. Se mantiene el foco visible y el zoom discreto existente, condicionado a la preferencia de movimiento.
- Iniciado el servidor local y abierta la biografía en `http://127.0.0.1:4322/#escribana`; el primer intento de inicio no quedó listo dentro del sandbox y el segundo confirmó el servidor activo. No se publicó la web.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias. Chrome a 1440, 390 y 320 px: imagen cargada, sin texto ni ícono adicional, enlace e imagen de iguales dimensiones (240 × 180 px), cuatro esquinas clickeables y sin desbordes. Confirmadas apertura de `/libro/` con clic y Enter, un H1 en destino y regreso a la biografía. Sin errores de JavaScript. `git diff --check` correcto.
- Evidencias: `artifacts/libro-solo-imagen-qa.json` y `artifacts/libro-solo-imagen-*.png`. Sin pendientes de implementación.

## 2026-10-16 — Libro al costado de las credenciales

- Movido el acceso al libro desde debajo de «Más sobre su trayectoria» hacia el costado derecho del listado de formación y credenciales, según solicitud de la usuaria. Conservado el desplegable de trayectoria debajo del conjunto.
- Agrupados listado e imagen en `src/pages/index.astro`. Ajustada la grilla adaptable en `src/styles/book.css`: imagen de hasta 176 px en escritorio y tamaño reducido en celular para mantenerla al costado sin recortar el libro ni superponer texto. Continúa siendo un enlace íntegramente clickeable a `/libro/` en pestaña nueva.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440, 1024, 768, 390 y 320 px confirmó imagen al costado del listado, cinco credenciales y ausencia de desbordes. Clic en celular abre `/libro/`. Revisadas visualmente capturas de escritorio y celular guardadas en `artifacts/libro-credenciales-*.png`. `git diff --check` correcto.
- Sin pendientes de implementación. Se mantiene la web local en el puerto 4322 y la rama `feature-vico`.

## 2026-10-16 — Libro alineado sobre mesa de madera

- Editada la imagen suministrada `libro-miniatura.avif` con la herramienta integrada de imágenes. Entregada una primera versión para revisión con el libro alineado a los bordes, vista cenital sin giro y fondo de mesa clásica de madera marrón.
- Interpretado «cuadrado» como alineación del libro, conservando su forma rectangular. Indicación de edición: enderezar la cubierta, mantener diseño amarillo y magenta y sus textos, sustituir el entorno por madera marrón profesional, sin añadir objetos.
- Inspeccionados el original y el resultado: libro completo y alineado, fondo de madera y diseño de cubierta conservado visualmente. La fuente original es una miniatura de 320 × 240 px; la edición generativa reconstruye detalles pequeños.
- Resultado de vista previa: `/Users/juancortabarria/.codex/generated_images/01a14620-a61e-7fc3-ba38-65fdb60ef392/exec-ac66bec6-94de-4869-97f6-5e03c4fdf2c8.png`. Original intacto; no se incorpora todavía a la web. Único archivo del repositorio modificado: `Decisiones.md`. Pendiente: valoración de esta primera versión por la usuaria.

## 2026-10-16 — Nueva imagen del libro y título en cursiva

- Incorporada al acceso lateral del libro la nueva imagen adjunta por la usuaria, con el libro alineado sobre madera. Generadas variantes optimizadas AVIF y WebP de 480 px (`public/images/libro-madera-480.*`), sin modificar el contenido de la imagen ni reemplazar la fotografía de la página independiente.
- Actualizado `src/components/BookTeaser.astro` con las nuevas rutas y el título completo desde `book.title`, debajo de la imagen. Añadido estilo en `src/styles/book.css`: cursiva de 11 px, interlineado 1,55 y color secundario. Tanto imagen como título forman parte del mismo enlace a `/libro/`.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440, 390 y 320 px confirma carga de la nueva imagen, título en cursiva y ausencia de desbordes. En celular, clic tanto en imagen como en título abre el libro en pestaña nueva. Revisadas capturas `artifacts/libro-madera-titulo-*.png` en escritorio y celular. `git diff --check` correcto.
- Sin pendientes de implementación; web local y rama `feature-vico`.

## 2026-10-17 — Acceso a servicios en la esquina de la imagen principal

- Retirado el cartel «Atención personalizada desde el primer encuentro.» de la portada. Movido el acceso existente «Conocé nuestros servicios / Inmuebles · Certificaciones · Sociedades» desde la franja inferior hasta la esquina inferior derecha de la fotografía principal, sin duplicarlo.
- Conservados destino `#servicios`, paleta dorada, flecha, oscilación y control para pausar movimiento. Ajustada su entrada animada a la nueva ubicación y adaptado el ancho en celular. El nombre Jure Ramos en la fotografía permanece visible.
- Archivos: `src/pages/index.astro`, `src/styles/book.css` y `src/scripts/home-motion.ts`.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440, 768, 390 y 320 px confirma un único acceso, alineación al borde derecho de la foto, ausencia del cartel retirado y de desbordes, y navegación a `#servicios`. Control de pausa operativo con movimiento habilitado. Sin errores de JavaScript. Capturas de escritorio y celular revisadas en `artifacts/portada-servicios-esquina-*.png`. `git diff --check` correcto.
- Sin pendientes de implementación. Se conserva el entorno local y la rama `feature-vico`.

## 2026-10-17 — Libro recortado sin mesa de madera

- A pedido de la usuaria, editada la imagen del libro con la herramienta integrada `image_gen` (modo incorporado, sin CLI). Retirada la mesa, con fondo transparente y contorno blanco fino. Se conserva el título pequeño en cursiva debajo y el enlace existente a la página del libro.
- Resultado original: `/Users/juancortabarria/.codex/generated_images/01a13227-3607-7500-afa4-541f79c78be7/exec-7348b43f-00d1-4bba-b7e2-69224f31017c.png`. Copias finales para la web con alfa preservado: `public/images/libro-sin-fondo-480.png` y `public/images/libro-sin-fondo-480.webp` (480 × 640 px). No se reemplaza la fotografía dentro de `/libro/`.
- Actualizados `src/components/BookTeaser.astro` y `src/styles/book.css`: nuevas imágenes transparentes, proporción vertical natural, ancho visual máximo de 132 px y sombra tenue para separar el contorno del fondo blanco. Conservados originales y versiones anteriores.
- Prompt utilizado: «Use case: background-extraction. Edit the supplied book photograph for a notary website. Remove ONLY the entire brown wooden table background, isolating the existing yellow and magenta rectangular book. Keep the exact front-facing orientation, full book including its thin bottom page edge, cover colors, typography, all existing printed text and small publisher logo unchanged. Do not redesign, reinterpret, correct, add or retypeset any text. Transparent alpha background, no table, no backdrop, no added objects, no large cast shadow. Add only a very fine clean white outline around the outside silhouette of the book, like a subtle 2px white keyline at display size. Frame tightly around the complete book with a small transparent margin on every side, portrait proportions. Preserve crisp readable cover title.»
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; canal alfa confirmado con esquina transparente. Chrome a 1440, 390 y 320 px: recorte cargado, título en cursiva, sin desbordes. Clic en la imagen abre `/libro/`. Capturas `artifacts/libro-sin-fondo-*.png` revisadas en escritorio y celular. `git diff --check` correcto.
- Sin pendientes de implementación; web local y rama `feature-vico`.

## 2026-10-17 — Prueba de portada React con áreas de práctica animadas

### Decisiones y cambios

- Leído el prompt adjunto de `animated-hero.tsx` y adaptado a la portada como isla React con HTML inicial en Astro. Se conserva el H1 «Escribanía en Nueva Córdoba.», la descripción profesional, la fotografía y el acceso a servicios. El texto rotativo muestra «Inmuebles», «Certificaciones» y «Sociedades» con transición vertical cada 2,8 segundos, en dorado y cursiva. No se incorporan las frases comerciales inglesas ni imágenes de stock del ejemplo.
- Creado `src/components/ui/animated-hero.tsx`, con propiedades de WhatsApp, teléfono, persona y registro desde `site`. Conservada la consulta por WhatsApp y añadido acceso telefónico «Llamar», siguiendo la estructura de dos acciones del ejemplo. El contador 1000→2002 permanece fuera de la isla y comparte el dato confirmado.
- Preparados React, TypeScript, Tailwind y estructura shadcn: `src/components/ui/button.tsx` con Radix Slot y variantes; `src/lib/utils.ts`; `components.json`; alias `@/*` y JSX en `tsconfig.json`; integración React y complemento Tailwind de Vite en `astro.config.mjs`. La ruta `src/components/ui` respeta la organización Astro y se usa mediante `@/components/ui`. Documentada la instalación y estructura en `README.md`.
- Tailwind utiliza prefijo `tw:` y omite Preflight; los estilos de esta prueba están en `src/styles/hero-ui.css` y se importan desde la portada para preservar las demás páginas. Añadidas las dependencias y actualizado `package-lock.json`.
- Resuelto conflicto inicial de dependencias fijando `@astrojs/react` 7.0.0 y `@vitejs/plugin-react` 6.1.1, compatibles con `oxc-transform-react` 0.145.0. `npm ls` confirma el árbol sin conflictos. Instalación informó 0 vulnerabilidades.
- La rotación se pausa cuando el componente sale de pantalla o la pestaña se oculta y respeta movimiento reducido, incluso al cambiarlo durante la sesión. Se sincroniza con los controles globales mediante el estado existente; actualizado `src/scripts/continuous-motion.ts`. Los lectores de pantalla disponen de una frase estable con las tres áreas; la rotación visual no usa una región de anuncios continuos. Sin JavaScript, el contenido y los enlaces reales permanecen disponibles.
- Usado `LazyMotion`/`domAnimation` para reducir el código del efecto. La integración añade aproximadamente 110 KiB gzip de JavaScript en tres archivos (componente, cliente React y módulo React). Es un coste nuevo frente a la portada Astro anterior; no se atribuyen mejoras de SEO o velocidad ni se repitió Lighthouse en esta tarea.

### Verificaciones y pendientes

- Compilación y Astro check: 0 errores, 0 advertencias, 0 sugerencias; ocho páginas HTML. Auditoría técnica existente correcta. `git diff --check` correcto.
- Creado `scripts/hero-qa.mjs` y comando `npm run audit:hero`. Chrome a 1440, 768, 390 y 320 px: rotación real, pausa estable durante más de un intervalo, sincronización de controles, ausencia de desbordes y errores de consola/hidratación. H1 único con ubicación, enlaces WhatsApp/teléfono correctos y navegación a servicios con cinco tarjetas.
- Probadas alternativas con movimiento reducido y JavaScript desactivado; pausa externa, reanudación mediante Enter y cambio dinámico a movimiento reducido. Prueba adicional confirma detención fuera de pantalla y texto azul tinta del botón dorado. Se corrigió la suscripción dinámica de movimiento reducido tras detectar que el hook de la biblioteca no actualizaba ese valor durante la sesión.
- Revisión de componentes React: efectos y temporizadores con limpieza, propiedades tipadas, enlaces semánticos, nombres accesibles y altura reservada para las palabras. Capturas revisadas en escritorio, tablet y celular. Evidencia: `artifacts/hero-react-qa.json`, `artifacts/hero-react-*.png` y `artifacts/hero-react-final.png`.
- Referencias técnicas: https://docs.astro.build/en/guides/styling/ ; https://tailwindcss.com/docs/preflight . Compatibilidad de paquetes comprobada con metadatos oficiales de npm y comportamiento del hook contrastado con el código instalado.
- Pendiente: valoración visual de la usuaria sobre esta prueba y futura medición de rendimiento antes de publicar. Continúa en entorno local, rama `feature-vico`; no se modifica el dominio.

## 2026-10-17 — Animación aplicada al titular y consulta única

- La usuaria corrige el alcance de la prueba: la transición vertical debe alternar primero «Escribanía en Nueva Córdoba.» y luego «Jure Ramos». Movida la animación al H1 en `src/components/ui/animated-hero.tsx`; conservadas cursiva y color dorado para Nueva Córdoba y Ramos. Retirado por completo el bloque rotativo de áreas de práctica.
- Eliminados el botón de play/pausa de la isla y el botón «Llamar», junto con la propiedad de teléfono que ya no se usa. Queda una única acción «Coordiná tu consulta» por WhatsApp con emoji 📲 y flecha. Los controles textuales existentes de movimiento siguen pausando el titular a través de la preferencia global, sin añadir un botón nuevo.
- Altura del titular reservada en `src/styles/hero-ui.css` para que ambos textos compartan el espacio sin mover descripción ni botón. H1 con nombre accesible estable que incluye ubicación y nombre; sin JavaScript se muestra primero el titular con la ubicación. Continúa respetando movimiento reducido, también al cambiar la preferencia.
- Archivos adicionales actualizados: `src/pages/index.astro`, `README.md` y `scripts/hero-qa.mjs` para reflejar el nuevo comportamiento solicitado.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; auditoría técnica correcta. Prueba de navegador a 1440, 768, 390 y 320 px confirmó ambos titulares en secuencia, pausa/reanudación desde el control existente, altura estable, un solo enlace de consulta, presencia del emoji y ausencia de play, llamada y bloque de áreas. Sin desbordes ni errores de consola/hidratación. Confirmadas alternativas sin JavaScript, con movimiento reducido y cambio dinámico de preferencia. Capturas de escritorio y celular revisadas; evidencia en `artifacts/hero-titular-qa.json` y `artifacts/hero-titular-*.png`. `git diff --check` correcto.
- Sin pendientes de implementación de esta corrección. Continúa local en `feature-vico`; la medición de rendimiento previa a publicación permanece como pendiente general de la prueba React.

## 2026-10-17 — Teléfono clásico y nombre completo en el titular

- Sustituido el emoji de celular del botón «Coordiná tu consulta» por un ícono vectorial de auricular clásico con ondas de llamada, en azul tinta y 20 px, para mejorar su reconocimiento y consistencia visual.
- El titular animado conserva primero «Escribanía en Nueva Córdoba.» y ahora muestra después «Solange Jure Ramos». El nombre se toma de la configuración existente; se presenta «Solange» en la primera línea y «Jure Ramos» en cursiva dorada debajo, conservando la altura reservada.
- Archivos modificados: `src/components/ui/animated-hero.tsx`, `src/styles/hero-ui.css`, `scripts/hero-qa.mjs` y `README.md`. No se añaden botones nuevos ni se modifica el destino de WhatsApp.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; Chrome a 1440, 768, 390 y 320 px confirma nombre completo, ícono clásico y ausencia del emoji anterior, ambos titulares en secuencia, altura estable, un solo botón de consulta y ausencia de desbordes o errores de consola/hidratación. Pausa, reanudación, movimiento reducido y alternativa sin JavaScript correctos. Revisadas capturas de escritorio y celular; evidencia actualizada en `artifacts/hero-titular-qa.json`. `git diff --check` correcto.
- Sin pendientes de esta corrección; entorno local y rama `feature-vico`.

## 2026-10-17 — FAQ sin giro y lectura progresiva de la biografía

- Retirados el giro continuo de «Preguntas frecuentes», su envoltorio animado y el control de pausa que estaba en esa sección. Eliminadas las reglas y fotogramas `faq-turn` de `src/styles/motion.css`; se conserva la entrada discreta del encabezado y la apertura de respuestas.
- Añadido `src/components/ReadingText.astro` a los dos párrafos indicados de la biografía y a las cinco credenciales. Revelado visual letra por letra al entrar en pantalla, una sola vez y en secuencia. Ritmo base de 14 ms por carácter, con límite de 3 segundos por bloque y una transición de opacidad de 140 ms por letra. Se reserva desde el inicio todo el espacio de los textos.
- El HTML conserva el texto completo y una copia accesible estable; la copia visual está oculta a lectores de pantalla para evitar lectura fragmentada o duplicada. Sin JavaScript o con movimiento reducido se muestra directamente el contenido completo. Pausar movimiento o activar reducción durante el efecto completa inmediatamente los bloques activos.
- Creado `src/scripts/biography-reading.ts` e importado en la portada. Actualizados `src/pages/index.astro`, `src/styles/motion.css`, `src/scripts/continuous-motion.ts` (comentario), `README.md` y `package.json`. Añadido `scripts/reading-qa.mjs` y comando `npm run audit:reading`.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias; auditoría técnica correcta. Chrome a 1440, 390 y 320 px: comprobadas letras parcialmente visibles durante el efecto, finalización de los siete bloques, correspondencia de texto visual/accesible, ausencia de repetición y altura estable. FAQ sin giro ni control redundante y respuestas operativas. Sin desbordes ni errores de JavaScript. Comprobadas alternativas sin JavaScript y con movimiento reducido, así como finalización inmediata por pausa o cambio de preferencia. Capturas de progreso revisadas; evidencia en `artifacts/lectura-qa.json` y `artifacts/lectura-progreso-*.png`. `git diff --check` correcto.
- Sin pendientes de esta modificación. Continúa local en `feature-vico`.

## 2026-10-17 — Lectura acelerada y tildes sincronizadas

- Acelerada la aparición de letras de 14 a 4 ms por carácter, reducida la transición de cada letra de 140 a 70 ms y la separación entre bloques de 80 a 35 ms. Se mantiene la secuencia de lectura y la activación única, con tope de 1 segundo de escritura por bloque.
- Cada tilde de las credenciales comparte ahora el retraso de su texto y aparece cuando comienza la línea. Ya no queda visible mientras la credencial espera su turno. Las alternativas con movimiento reducido y la finalización por pausa conservan visibles texto y tilde completos.
- Archivos modificados: `src/scripts/biography-reading.ts`, `src/styles/motion.css`, `scripts/reading-qa.mjs` y `README.md`.
- Verificaciones: compilación y Astro check sin errores, advertencias ni sugerencias. Auditoría de lectura a 1440, 390 y 320 px correcta: progreso de letras, finalización, sincronización de tildes, altura estable, ausencia de repetición y alternativas accesibles. Prueba específica en escritorio confirmó las cinco tildes ocultas mientras esperan y coincidencia exacta de sus retrasos con los de la primera letra de cada credencial. FAQ permanece sin giro y operativa; sin errores de JavaScript ni desbordes. `git diff --check` correcto.
- Sin pendientes de esta modificación; entorno local y rama `feature-vico`.

## 2026-10-17 — Auditoría de preparación para publicación, costos y guía de migración

- La usuaria solicita pasos de publicación, costos de dominio/alojamiento y revisión de los tres repositorios de referencia. Confirmadas las tres copias en `references/` y coincidencia de HEAD local/remoto el 17/10/2026: astro-chalet `8d55431`, schema-dts `62a5658`, llms-txt `3700a0a`. No se modificaron esas referencias.
- Compilación y Astro check sin errores, advertencias ni sugerencias; auditoría técnica correcta. Verificados JSON-LD y canonical de las siete páginas de contenido, versiones Markdown y los siete destinos de llms.txt. Pruebas de navegador de portada a 1440/768/390 px y cinco servicios a 1440/390/320 px correctas, incluidas navegación, FAQ, WhatsApp, menú y mapa por acción.
- Lighthouse móvil oficial 13.5.0 sobre la compilación estática local (puerto 4330), sin desplegar: primera pasada 95 rendimiento, 96 accesibilidad, 100 buenas prácticas y 100 SEO técnico. Detectados spans de contador con aria-label no admitido y nombres accesibles que omitían etiquetas visibles de libro/tarjetas.
- Corregidos esos hallazgos sin alterar diseño: `src/components/YearCounter.astro` usa texto accesible estático; `src/components/BookTeaser.astro` incluye el título visible en su nombre accesible; tarjetas en `src/pages/index.astro` usan su nombre natural completo. Segunda pasada aislada: 95/100/100/100; LCP 2,9 s, TBT 0 ms y CLS 0,001, sin advertencias. Comprobación posterior de enlaces del libro y servicio inmobiliario en compilación final correcta. Informes inicial/final en `artifacts/publicacion-lighthouse-mobile*.report.*` y auditoría estructural en `artifacts/publicacion-seo-audit.json`. No es una medición de visitantes reales ni una garantía de posicionamiento.
- Creado `PUBLICACION.md` con recomendación, costos, responsables, pasos de previsualización/publicación, DNS/correo, redirecciones, control del dominio, Google y mantenimiento. Actualizado `PENDIENTES.md` con el estado real de salida a producción y comprobaciones pendientes.
- Costos oficiales consultados: NIC Argentina publica ARS 8.500 para renovación anual/alta/transferencia de .com.ar (cada trámite según corresponda); Pages ofrece alojamiento estático gratuito dentro de límites y SSL incluido; alternativa Vercel Pro desde USD 20/mes y Hobby restringido a uso personal no comercial. Fuentes y fecha en la guía. No se compra otro dominio: se propone conservar el existente.
- Detectado contenido bibliográfico inconsistente: la miniatura generada muestra un nombre de autora y prólogo diferentes de la ficha escrita. Marcado como pendiente prioritario confirmar datos con la cubierta real y reemplazar la recreación; no se inventan correcciones. También siguen pendientes permisos de imágenes, aprobación de textos/afiliaciones, pin de Maps y control registral/DNS/correos.
- Detectados enlaces antiguos a `/areas-practica`, `/jure-ramos` y `/contacto` en la web pública. Preparada propuesta de destinos en la guía; no se implementaron redirecciones ni se verificó exhaustivamente el inventario antiguo. La rama `feature-vico` contiene avances que no deben darse por integrados en main.
- Documentada la distinción entre clonar un tema, usar tipos Schema.org y cumplir el formato llms.txt; Google indica que llms.txt no beneficia ni perjudica su visibilidad en Search/funciones generativas. No se promete un resultado SEO/GEO por instalar repositorios.
- `git diff --check` correcto. Pendiente cerrar contenido y migración, aprobar URL temporal y validar el dominio público. No se publicaron sitios, cambiaron DNS, contrataron servicios, enviaron mensajes ni se accedió a cuentas privadas. La web anterior permanece operativa.

## 2026-10-17 — Prólogo confirmado, respaldo público y preparación de SEO local

- La usuaria confirma prólogo «Fernando Pérez Hualde y Juan F. Klaps». Actualizado `src/config/book.ts`; la ficha HTML y Markdown comparten el dato. Fotografías y pin del mapa aprobados; se conservan los textos profesionales actuales hasta nuevas correcciones. No se editaron imágenes: la autoría impresa incorrecta de la miniatura recreada sigue siendo un detalle de ese recurso, no se adopta como fuente de autoría.
- Confirmada medición con Google Search Console y visitas; la frase «sin Google» fue aclarada mediante pregunta. No se agregan rastreadores hasta disponer de cuentas e identificadores reales. Conservación del dominio y posterior conexión GitHub/Pages aceptadas; sin cambios de DNS o cuentas en esta tarea.
- Guardada copia HTTP pública del sitio anterior: 131 archivos, 9.112.487 bytes, páginas principales con estado 200, imágenes y recursos locales disponibles. Cuatro errores 404 registrados (sitemap_index.xml y tres CSS antiguos). Manifiesto con URLs, estados y SHA-256; archivo comprimido `artifacts/respaldo-web-anterior-2026-10-17.tar.gz`, SHA-256 `bd5f3f9b251ab433b22623eed704e00107d1e749c5ab11ad019df5b9ee186811`. Excluido de Git por la regla existente de artifacts. No es un clon navegable sin conexión ni copia de WordPress, base de datos, DNS, correo o contenido privado. Estos respaldos administrativos siguen pendientes del proveedor anterior.
- Inventariados enlaces del HTML de las cuatro páginas antiguas y preparadas ocho reglas 301 en `public/_redirects`: áreas de práctica, Jure Ramos, contacto y sala, con y sin barra final, hacia secciones equivalentes. Sintaxis y anclas verificadas, archivo presente en dist. La respuesta HTTP será comprobada en Pages: Astro no aplica estas reglas localmente. No se redirigen indiscriminadamente los 404.
- Reforzado enlazado contextual de cuatro FAQ de portada: tres a inmuebles y una a certificaciones, con enlaces descriptivos visibles. Añadidos también a Markdown. Respuestas existentes conservadas. Archivos: `src/config/service-pages.ts`, `src/pages/index.astro`, `src/pages/index.md.ts`, `src/styles/global.css`. Actualizada fecha visible en `src/config/site.ts`.
- Creado `SEO-LOCAL.md` con URLs actuales, doce contenidos propuestos por intención de búsqueda, requisitos de revisión profesional, medición y listado de información administrativa a preservar. Las doce rutas son propuestas, no páginas publicadas. No se prometen primeros puestos ni se crean variantes duplicadas por barrio. Contrastado con documentación oficial Google de enlaces y políticas de spam, y documentación Cloudflare Pages de redirecciones.
- Actualizados `PENDIENTES.md` y `PUBLICACION.md`, distinguiendo aprobaciones recibidas, cambios ejecutados y pendientes externos.
- Verificaciones: compilación/TypeScript sin errores, advertencias ni sugerencias; auditoría técnica correcta; prólogo correcto en HTML/Markdown, cuatro enlaces FAQ y ocho reglas verificadas. Chrome a 1440, 390 y 768 px sin desbordes ni errores de JavaScript, menú y FAQ operativos. `git diff --check` correcto.
- La usuaria autoriza integrar feature-vico en main al concluir. Remoto consultado antes de integrar; main incluye un commit ajeno que debe preservarse. La publicación, cuentas Google/Cloudflare y DNS/correo siguen pendientes; no se enviaron mensajes a terceros ni se contrataron servicios.


## 2026-10-17 — Integración de feature-vico en main

- Integradas las mejoras verificadas de feature-vico en main mediante merge, preservando el commit de conversión académica que existía únicamente en main y su archivo de salida.
- Único conflicto en Decisiones.md: ambas ramas añadían entradas al final. Resuelto conservando íntegramente ambas series de entradas, sin descartar decisiones ni cambios ajenos. No hubo conflictos de código.
- Conservados los archivos ya versionados de la rama de origen; el respaldo HTTP nuevo continúa excluido de Git.
- Comprobaciones previas: compilación y auditoría técnica correctas y prueba de navegador satisfactoria. Tras resolver el conflicto se repiten compilación/auditoría y se verifica que main conserve ambos historiales y el archivo académico.
- La integración comparte código y no constituye publicación ni cambio de dominio. Quedan pendientes acceso administrativo, copia completa del hosting, URL temporal de Pages, revisión final, DNS/correo y activación de Google.

## 2026-10-17 — Revisión integral del código, optimización y regresiones

- A solicitud de la usuaria se revisa el código propio del sitio: rutas Astro, isla React, componentes, configuración, datos estructurados, estilos, scripts de movimiento y herramientas de comprobación. Se aplica la guía de verificación de recorridos completos. El sitio es estático: no se inventan pruebas de backend ni envío/recepción de mensajes.
- Corregidos menú móvil inaccesible sin JavaScript y foco robado por Escape con menú cerrado. El menú utiliza mejora progresiva; indicador temprano en Layout evita un despliegue fugaz que Lighthouse detectó durante esta revisión (CLS intermedio 0,293). Tras corregirlo, CLS final 0,001. Verificados navegación sin JS y funcionamiento con módulos descargados bloqueados.
- Mapa: el acceso es un enlace real a Maps como alternativa sin JS. Con JS incorpora el iframe por acción usando las coordenadas de site, sin duplicarlas en el controlador.
- Movimiento: pausa global completa los contadores en ejecución y los efectos nativos, evita iniciar nuevos efectos y habilita la oscilación continua solo cuando existe control funcional. Hero admite ausencia de IntersectionObserver. Scripts aislados explícitamente como módulos TypeScript.
- Optimizados titular y consulta conservando React, ubicación/nombre, íconos y controles existentes: animación CSS nativa en lugar de Framer Motion y enlace HTML/CSS sin utilidades de botón en ese paquete. Eliminados Framer Motion y dos dependencias exclusivas, actualizado lock. Botón reutilizable y estructura de componentes conservados para uso futuro. JavaScript generado de 353.153 a 232.006 bytes, gzip de 114.180 a 73.340 bytes (35,8 % menos). No se afirma eliminar React.
- Añadidas ocho variantes de imágenes sin cambiar su contenido: portada de 640 px en AVIF/WebP, retrato de 450/650 px en AVIF/WebP y libro de 160/320 px en WebP con alfa. Actualizados srcset/sizes; originales conservados. No se usó generación de imágenes.
- Pie de página toma nombre, registro, dirección, ciudad y año desde la configuración. Textos profesionales y servicios actuales permanecen según aprobación anterior; no se agregan las FAQ propuestas.
- Preparado public/_headers con nosniff, política de referer, CSP para base/objetos/marcos y permisos de cámara/micrófono/geolocalización. Su aplicación depende de Pages y no se da por comprobada en la vista local.
- Pruebas: build/Astro check con cero errores, advertencias o sugerencias; auditoría técnica correcta. Portada a 1440/768/390 px, servicios a 1440/390/320, titular a 1440/768/390/320, libro y lectura a 1440/390/320. Sin errores de JS/desbordes en los recorridos comprobados. Pruebas de pausa, reducción de movimiento, texto completo sin JS, teclado, libro en pestaña nueva y ausencia de API opcional correctas.
- Añadido scripts/site-qa.mjs y audit:site: siete páginas desde sitemap, 18 destinos internos, 37 recursos/variantes; estados HTTP/anclas, IDs únicos, metadatos, grafo, prólogo y 404. Regresión de pausa del contador durante la suma real. Pruebas existentes de navegador/servicios admiten QA_BASE_URL. Auditoría crea artifacts en un clon nuevo. Corregida espera fija frágil de hero-qa para esperar la finalización de animaciones. Las comprobaciones de salto de ancla contemplan la navegación en el mismo documento sin respuesta HTTP nueva.
- Npm informa cero vulnerabilidades conocidas en la consulta de producción y en la actualización de dependencias. npm ls no presenta conflictos de versión; un paquete opcional sharp-wasm local figura como extraneous y no se incorpora al código ni al despliegue estático. No es garantía permanente de seguridad.
- Lighthouse móvil 13.5.0: referencia inicial 95/100/100/100, LCP 2,9 s. Final 96/100/100/100, LCP 2,6 s, TBT 0 ms, CLS 0,001 y transferencia de 419 a 323 KiB (~23 % menos), sin advertencias. Durante la comparación se probó integrar CSS en HTML: no mejoró la puntuación y se descartó, conservando CSS externo y su reutilización. Medidas de laboratorio local, no métricas de visitantes ni garantía SEO. Informes previos/intermedios/finales en artifacts/revision-completa-*.report.* y archivos revision-bundles-*.json.
- Documentación: creado REVISION-TECNICA.md y actualizados README.md, PENDIENTES.md y PUBLICACION.md. Cambios de código en Header, Footer, YearCounter, BookTeaser, animated-hero, Layout, index, scripts de movimiento y sus estilos; scripts de auditoría y package/lock. git diff --check correcto.
- Continúan pendientes dominio, DNS/correo, revisión pública de cabeceras/redirecciones, recepción humana de consultas y acceso/configuración Google. No se publicaron sitios, cambiaron DNS/cuentas, enviaron mensajes ni alteraron las imágenes impresas del libro.

## 2026-10-19 — Retiro del teléfono fijo y preparación de Cloudflare Pages

- La usuaria confirma que el fijo ya no se utiliza y solicita retirarlo, además de preparar la publicación mientras se espera información del dominio. Eliminados phone/phoneHref en src/config/site.ts, fila de teléfono en portada, enlace tel en servicios y referencias en Markdown de inicio/cinco servicios. WhatsApp queda como contacto telefónico activo; JSON-LD Notary toma su número normalizado, sin agregar enlaces de llamada. Fecha visible actualizada al 19/10/2026. Los registros históricos y respaldos de la web anterior permanecen intactos.
- Creado .node-version con Node 24, de acuerdo con la configuración soportada de Pages. Añadido npm run check:release (build, auditoría y scripts/release-check.mjs). Este control examina el artefacto real: ausencia del número retirado y enlaces tel, contacto activo en JSON-LD, ocho redirecciones únicas con destinos/anclas existentes, archivos de publicación, versión Node y cabeceras noindex limitadas a Pages.
- Actualizado public/_headers con patrones oficiales para proyecto.pages.dev y version.proyecto.pages.dev. El dominio definitivo conserva indexación habilitada; noindex no implica privacidad. Aplicación efectiva de cabeceras y redirecciones pendiente de Pages.
- Creado CLOUDFLARE-PAGES.md: valores concretos de repositorio/main/Node24/comando/dist, revisión de URL temporal, mínimos de administración de dominio/DNS/conservación de correo y pasos posteriores de Google. Aclarado que el repositorio y base de datos antiguos no son necesarios para publicar nuestra web. No se exige esa información para avanzar con una URL temporal.
- Actualizados README.md, PUBLICACION.md y PENDIENTES.md. Referencias contrastadas el 19/10/2026 con documentación oficial Cloudflare de build image, headers y preview deployments; enlaces en la guía.
- Verificaciones: npm run check:release correcto, compilación/Astro sin errores, advertencias ni sugerencias, auditoría técnica correcta y ocho redirecciones verificadas. Audit:site en producción local a 4330: siete páginas, 18 destinos internos, 37 recursos, metadatos/404/navegación sin JS/pausa/libro correctos. Audit:browser a 1440/390/768 px sin desbordes ni errores; FAQ, menú y mapa correctos. Búsqueda de referencias en src confirma ausencia del fijo y de phone/phoneHref. git diff --check correcto. No se repitió Lighthouse al no modificar arquitectura ni animaciones; la medición histórica no se presenta como una nueva prueba.
- No se creó ni vinculó un proyecto de Cloudflare desde esta tarea, no se conoce una URL temporal nueva y no se cambiaron dominio/DNS/correo. Pendientes: acceso a cuenta Cloudflare/GitHub para vincular Pages, revisión pública y datos mínimos del dominio. No se enviaron mensajes ni se activó seguimiento con identificadores ficticios.

## 2026-10-19 — Recuperación de fotografías de los espacios

- Revisados el HTML y la carpeta de recursos aportados por el usuario para localizar las fotografías de mesa, escritorio y recepción. El HTML conserva enlaces remotos del carrusel que no estaban descargados en la carpeta.
- Descargados los JPEG originales referenciados en `/wp-content/uploads/2024/01/`: `6.jpg` (mesa de reuniones), `5.jpg` (escritorio cuadrado) y `1.jpg` (recepción).
- Verificada visualmente la correspondencia de las tres fotos. Guardadas copias sin edición con nombres descriptivos y un ZIP en `artifacts/imagenes-web-original/`, carpeta de entregas locales ignorada por Git. No se incorporaron a la web.
- Único archivo versionado modificado: este registro. Sin pruebas de código por tratarse de recuperación de imágenes. Sin pendientes ni bloqueos de entrega.

## 2026-10-19 — Conversión de portada a JPEG

- Convertido el archivo adjunto `portada-jure-ramos.avif` a `artifacts/portada-jure-ramos.jpg`, conservando el original y sin modificar la web.
- Verificado el formato JPEG y sus dimensiones de 800 × 1000 píxeles. Entrega local en artifacts, ignorado por Git; único archivo versionado modificado: este registro. Sin pendientes ni pruebas de código necesarias.

## 2026-10-19 — Entrega de imagen adjunta en PNG y JPEG

- Copiada la nueva imagen PNG adjunta sin alteraciones y generada una versión JPEG con calidad 95 en `artifacts/portada-formatos/jure-ramos.png` y `jure-ramos.jpeg`. Se conserva el original y no se modifica la web.
- Comprobados ambos formatos y dimensiones de 800 × 1000 píxeles. Archivos de entrega locales ignorados por Git; único cambio versionado: este registro. Sin pendientes ni pruebas de código necesarias.

## 2026-10-19 — Ajustes móviles y vista previa para un teléfono real

- La usuaria pide revisar la versión para celular, realizar ajustes y poder visualizarla. Estado inicial sin cambios ajenos pendientes. Revisadas capturas y tamaños reales: varios textos móviles estaban en 11–12 px y el control de menú era menor que el objetivo de 44 px.
- Creado src/styles/mobile.css, importado desde Layout, con cambios limitados a pantallas de hasta 760 px: biografía y relato del libro a 15 px, FAQ/contacto/atención a 14 px, credenciales a 13 px, controles de menú de 48 px y enlaces principales con área táctil mínima de 44 px. CTA de portada ocupa el ancho disponible. Conservados paleta, orden, contenido, tarjetas compactas y libro al lado de las credenciales; título pequeño del libro permanece en 11 px como se había pedido.
- Menú con altura máxima basada en viewport y scroll interno para orientación horizontal. Sin JavaScript, el encabezado móvil deja de ser pegajoso para que el menú desplegado no ocupe permanentemente toda una pantalla baja. Ajustada posición del acceso flotante con safe-area.
- Detectado en captura que el WhatsApp flotante tapaba parte del acceso a servicios de la foto. Añadido src/scripts/home-contact.ts e importación en index: en inicio móvil aparece cuando el CTA principal deja de estar visible, con IntersectionObserver. Clase home-page en Layout. Sin JS/API opcional se mantienen contactos de menú/secciones; escritorio conserva el acceso flotante habitual. Prueba táctil confirma ocultación inicial y reaparición al desplazarse a servicios.
- Añadidos comandos preview:mobile y audit:mobile. El primero sirve únicamente dist en la red local (host 0.0.0.0, puerto solicitado 4331). Ese puerto ya estaba ocupado por un proceso ajeno; no se interrumpió. El servidor administrado asignó 4333. Verificada respuesta HTTP 200 desde la dirección LAN, fuente nueva de credenciales y ausencia de desborde. Servidor disponible para la revisión del teléfono mientras la computadora siga encendida; no se publicaron dominios ni túneles.
- Creado scripts/mobile-qa.mjs: siete páginas por cinco tamaños (320/390/430 px y horizontales 667×375 y 844×390), interacción táctil, menú/scroll interno, enlaces FAQ, WhatsApp y alternativa sin JS. Pasaron las 35 vistas. Audit:site también pasó: siete páginas, 18 destinos y 37 recursos; sin errores de JavaScript. Compilación/Astro y check:release sin errores, advertencias ni sugerencias.
- Revisadas capturas antes/después, portada y secciones aisladas. En capturas de secciones se ocultan los elementos fijos solo durante la toma para no repetir el encabezado dentro de una imagen larga; la captura de portada muestra la interfaz normal. Evidencia: artifacts/auditoria-movil.json y artifacts/movil-*.png. Comprobación adicional en escritorio a 1440 px sin desbordes y con tipografía de escritorio; estilos nuevos sujetos a media query.
- Documentado en README cómo abrir Network desde Safari/Chrome del teléfono en la misma Wi-Fi, mantener la computadora activa y reconstruir dist después de cambios. Referencia oficial para la alternativa de simulación: https://developer.chrome.com/docs/devtools/device-mode . La simulación no se presenta como prueba ejecutada en un iPhone/Android físico; queda la revisión visual de la usuaria en su teléfono. No se repitió Lighthouse ni se atribuyen nuevas puntuaciones.
- Archivos: README.md, package.json, Layout.astro, index.astro, nuevos mobile.css, home-contact.ts y mobile-qa.mjs, y este registro. git diff --check correcto. No se tocaron datos del dominio, Cloudflare, fotografías ni conversiones ya entregadas en otras tareas.

## 2026-10-19 — Alineación móvil de ubicación y horarios

- A partir de la captura del teléfono, corregida la presentación de contacto: horarios en dos renglones derivados del mismo dato de configuración y rangos horarios sin salto interno, evitando una «h» aislada. WhatsApp y su número se muestran en renglones separados.
- Ajustados íconos a la primera línea del texto en celular, correo a 14 px, separación uniforme y divisores sutiles entre los datos. Conservados los enlaces y sus áreas táctiles mínimas, información de atención, dirección y mapa. Archivos: src/pages/index.astro, src/styles/global.css y src/styles/mobile.css.
- Compilación, Astro check y check:release correctos, sin errores ni advertencias. Verificación de ubicación a 320/390/430/1440 px: sin desborde, horarios en dos líneas y alineación de íconos móvil dentro de 1 px. Capturas revisadas en artifacts/ubicacion-ajustada-*.png. Audit:browser correcto a 1440/390/768 px, sin errores de JavaScript; menú, preguntas frecuentes y carga del mapa funcionan.
- Reconstruido dist para que la vista previa existente en la red local muestre los cambios al actualizar el teléfono. La prueba automatizada utiliza Chrome; queda disponible la comprobación visual en Safari físico por la usuaria. Sin cambios de publicación ni dominio. git diff --check correcto; remoto consultado sin novedades antes del commit.

## 2026-10-19 — Retiro del control visible de movimiento

- La usuaria solicita que nunca se muestre «Pausar movimiento». Eliminado el botón del HTML de portada, su script continuous-motion.ts y los estilos exclusivos del control en motion.css, book.css y mobile.css. No se oculta mediante CSS: ya no forma parte de la página ni puede reaparecer al iniciar JavaScript.
- Conservadas las animaciones y el respeto por la preferencia del sistema de reducir movimiento. Ajustado el selector de la animación de acceso a servicios para no depender del script eliminado.
- Actualizada scripts/hero-qa.mjs para exigir ausencia del control y comprobar la pausa interna mediante el estado del documento, sin simular un botón que ya no existe. Pruebas a 1440/768/390/320 px correctas: ambos titulares, enlace a servicios, diseño estable, sin desbordes ni errores. También correctas las alternativas sin JavaScript, con movimiento reducido y con cambio de preferencia durante la visita.
- check:release y Astro correctos, sin errores, advertencias ni sugerencias. Búsqueda en HTML/JavaScript compilado confirma ausencia del texto y del control. Reconstruido dist para la vista previa local existente. git diff --check correcto; remoto sin novedades. Sin cambios de dominio ni publicación externa.

## 2026-10-19 — Franja de datos más compacta en celular

- La usuaria solicita reducir a la mitad la altura de la franja «Desde 2002 / Registro Notarial / Atención directa» y ocultar únicamente en celular «Trayectoria en el ejercicio notarial». Aplicados estilos exclusivos de hasta 760 px en src/styles/mobile.css: menor espaciado, contador a 22 px, íconos de 20 px con trazo más fino y textos sin seminegrita. Conservados año animado, registro y atención directa.
- Altura móvil medida a 390 px: antes 150 px, después 77,19 px (reducción aproximada del 49 %). Comprobados 320/390/430/760 px sin desbordes y con todos los datos solicitados visibles; leyenda oculta en móvil y visible en escritorio a 1440 px. Capturas en artifacts/franja-compacta-*.png; revisión visual de la franja a 390 px correcta. Se confirma también ausencia del botón de pausa eliminado en la tarea anterior.
- check:release y Astro correctos, sin errores, advertencias ni sugerencias; git diff --check correcto. Reconstruida la vista previa para el teléfono. Sin cambios de contenido en escritorio, dominio ni publicación externa; remoto sin novedades antes de guardar.

## 2026-10-19 — Orden de presentación de la escribana en celular

- La usuaria pide que la foto aparezca después de «01 / La escribana», nombre y registro, y antes de «Escribana titular del Registro…». Ajustada la distribución exclusivamente hasta 760 px en src/styles/mobile.css, usando el contenido existente sin duplicar imágenes ni encabezados: encabezado, registro, retrato, introducción y resto de la biografía. Espaciado añadido alrededor de la foto y conservación del libro junto a las credenciales.
- Comprobados los límites y el orden visual a 320/390/430/760 px, sin superposiciones ni desbordes. A 1440 px se mantiene foto a la izquierda y texto a la derecha. Una sola fotografía en el documento y sin errores de JavaScript. Capturas artifacts/escribana-orden-*.png; revisada visualmente la de 390 px (la herramienta de captura puede mostrar el enlace de salto enfocado al desplazar la sección).
- check:release y Astro correctos, sin errores, advertencias ni sugerencias; git diff --check correcto. Reconstruido dist para la vista previa del teléfono. Remoto sin novedades; sin cambios de contenido, imágenes, animaciones ni publicación externa.

## 2026-10-19 — Mapa antes de Cómo llegar en celular

- La usuaria solicita el orden correo, mapa y enlace «Cómo llegar». Añadidas clases de presentación location-details/location-directions en src/pages/index.astro y distribución móvil en src/styles/mobile.css para colocar el mapa tras los contactos y el enlace debajo. Se conserva el diseño de escritorio y un solo enlace existente, sin modificar destinos ni datos.
- Verificación a 320/390/430/760 px: orden correcto antes y después de cargar Google Maps, sin desbordes. A 1440 px se conserva la distribución de escritorio. Comprobados el destino de «Cómo llegar» y la creación del iframe al pulsar «Ver mapa de Google». Capturas artifacts/ubicacion-mapa-orden-*.png; revisada visualmente la de 390 px.
- check:release y Astro correctos, sin errores, advertencias ni sugerencias; git diff --check correcto. Reconstruida la vista previa existente para el teléfono. Remoto consultado sin novedades; sin publicación externa ni cambios de dominio.
