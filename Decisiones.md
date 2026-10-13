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
