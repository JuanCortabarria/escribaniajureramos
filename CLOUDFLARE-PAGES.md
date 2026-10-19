# Configuración de publicación — 19/10/2026

Estado: código preparado y verificado localmente. No hay un proyecto de Pages creado o vinculado desde esta tarea ni cambios de dominio/DNS.

## Crear el proyecto mientras llega la información del dominio

Desde una cuenta de Cloudflare controlada por la escribanía, elegir **Workers & Pages → Pages → importar repositorio Git**. No elegir el despliegue de Workers con comando wrangler deploy: este proyecto entrega archivos estáticos.

| Campo | Valor |
| --- | --- |
| Repositorio | JuanCortabarria/escribaniajureramos |
| Rama de producción | main |
| Directorio raíz | Raíz del repositorio |
| Comando de compilación | npm run check:release |
| Directorio de salida | dist |
| Node.js | 24, declarado en .node-version |

No requiere base de datos, adaptador de servidor, claves API ni variables secretas. Si el panel ya tiene NODE_VERSION configurado, usar 24 también allí para evitar una versión contradictoria. Conservar el package-lock y no omitir las dependencias de desarrollo durante la compilación: incluyen el comprobador de TypeScript.

El comando compila y audita antes de producir una versión: contacto vigente, redirecciones y sus destinos, cabeceras, sitemap, robots, Markdown y llms. Una comprobación que falla debe impedir la publicación hasta corregirla.

## Revisar la dirección temporal

- Abrir la URL real que asigne Cloudflare; no se presupone un nombre disponible.
- Revisar inicio, cinco servicios, libro, mapa, menú móvil y enlaces a WhatsApp/email. El fijo anterior está retirado; el único número de contacto vigente es el de WhatsApp.
- Comprobar cabecera X-Robots-Tag: noindex en la dirección pages.dev. Las reglas de public/_headers cubren la dirección principal temporal y los alias de versión. Es una instrucción para buscadores, no una contraseña ni una restricción de acceso.
- Probar las ocho redirecciones de public/_redirects y una URL inexistente con estado 404. Comprobar también cabeceras de seguridad. Estas reglas no las ejecuta el servidor de vista previa de Astro.
- Cloudflare añade noindex a sus previews de rama por defecto. Si se necesita revisión privada, configurar Access explícitamente: no asumir que noindex vuelve privada una URL.

## Lo mínimo pendiente del programador anterior

1. Titularidad y administración del dominio en NIC Argentina, con vencimiento conocido.
2. Acceso o colaboración para cambiar los DNS/servidores de nombres.
3. Identificación y conservación de los registros de correo u otros servicios que dependan del dominio.

No hace falta su repositorio o base de datos para poner online la nueva web. El respaldo anterior es independiente del requisito de conectar el dominio.

## Conectar el dominio después de revisar la URL temporal

Añadir escribaniajureramos.com.ar y www al proyecto siguiendo los valores reales del panel. Preservar antes los registros de correo y otros servicios. Elegir la dirección principal sin www y configurar su redirección en Cloudflare. No inventar destinos DNS ni reemplazarlos sin conocer la configuración actual.

Después: validar HTTPS, variantes www/sin www, redirecciones antiguas, 404, correo y recepción humana por WhatsApp. El dominio definitivo debe ser indexable: las reglas noindex nuevas solo afectan a pages.dev. No cancelar el alojamiento anterior hasta comprobar el cambio.

## Google

Los archivos técnicos ya están generados. Search Console necesita acceso a la cuenta y su verificación real de dominio; Analytics requiere su identificador real y configuración de privacidad. No se introducen identificadores ficticios ni etiquetas de seguimiento sin configurar. Se mantiene la ficha de Maps existente.

Fuentes consultadas el 19/10/2026: [versión Node en Pages](https://developers.cloudflare.com/pages/configuration/build-image/), [cabeceras por dominio](https://developers.cloudflare.com/pages/configuration/headers/), [previews y noindex](https://developers.cloudflare.com/pages/configuration/preview-deployments/).
