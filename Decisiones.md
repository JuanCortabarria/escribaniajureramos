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
