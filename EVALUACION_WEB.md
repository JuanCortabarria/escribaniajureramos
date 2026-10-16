# Evaluación profesional de la versión local

**Escribanía Jure Ramos · 15/10/2026 · Código revisado hasta `9e5deda`.**

## Dictamen

**Calidad general actual: 7,5/10.** La identidad visual y la arquitectura técnica están más desarrolladas que la profundidad informativa y la evidencia profesional publicada. Es una versión local sólida para revisar, con contenidos todavía pendientes de aprobación. La siguiente mejora de calidad debería concentrarse en lectura, contenido específico y confianza verificable.

La nota es un juicio editorial profesional, no una puntuación de Google, una certificación ni el promedio automático de herramientas. No se asigna una nota de posicionamiento real: no se accedió a Search Console, Analytics o al panel de la ficha de Google y la nueva versión sigue en local.

### Criterio utilizado

Se valoraron cinco dimensiones: claridad visual y lectura, facilidad para encontrar información y contactar, utilidad del contenido, respaldo de las afirmaciones profesionales y consistencia técnica. Una sección de 9–10 debería estar muy bien resuelta y validada; 7–8 indica una base buena con mejoras concretas; 5–6 indica funcionamiento correcto pero información limitada o demasiado genérica. Las notas de servicios valoran especialmente lo que aprende el visitante, no solo que todos compartan una plantilla cuidada.

### Alcance de la comprobación

- Se visitaron la portada y las cinco páginas de servicio a 1440 y 390 px. Las doce cargas devolvieron HTTP 200, sin desbordes horizontales ni errores de JavaScript observados.
- Se revisaron el código, el registro de decisiones, los pendientes y los informes existentes.
- Las pruebas funcionales anteriores del mismo día incluyen 320 px, menús, FAQ, tarjetas, Markdown y navegación.
- Se conservaron capturas y mediciones actuales en `artifacts/evaluacion-actual.json` y capturas `evaluacion-portada-*`.
- No se realizaron pruebas con clientes, un examen legal de las respuestas, una certificación completa de accesibilidad ni una auditoría de seguridad.
- No se ejecutó Lighthouse de nuevo: el 99/100/100/100 corresponde al 12/10 y no se presenta como resultado actual. Tampoco equivale a posicionamiento orgánico.

## Lo que ya está hecho y cómo funciona

| Elemento | Implementación | Beneficio |
|---|---|---|
| Portada y navegación | Astro genera HTML estático con secciones y anclas | Contenido accesible sin depender de una aplicación pesada |
| Identidad | Tokens CSS para azul tinta, marfil, blanco y dorado; Cormorant Garamond e Inter locales | Consistencia visual y fuentes sin CDN externo |
| Perfil y contacto | Datos comunes en `src/config/site.ts` | Un cambio de horario alimenta varias representaciones |
| Cinco servicios | Configuración en `src/config/service-pages.ts` y una plantilla dinámica compartida | Una página por área, con diseño y estructura consistentes |
| Tarjetas | Cada tarjeta es un enlace HTML completo, sin enlaces anidados | Clic o toque en toda la superficie, teclado y apertura nativa en otra pestaña |
| Menú y pie | Componentes `Header.astro` y `Footer.astro` reutilizados | Mismo acceso al inicio, perfil, servicios y WhatsApp |
| Contacto | Enlaces a WhatsApp con el servicio elegido, teléfono y email | Reduce pasos para consultar; el clic no confirma una conversación |
| Preguntas | Elementos nativos `details` y `summary` | Apertura accesible y poco JavaScript |
| Ubicación | Dirección, horario y mapa externo por clic | La página no carga Google Maps hasta la interacción |
| Imágenes | Variantes AVIF/WebP, tamaños de portada y prioridad de carga | Menor transferencia que usar solo los originales |
| SEO | Títulos/descripciones propios, canonical, Open Graph, sitemap y robots | Base de descubrimiento y presentación preparada para publicar |
| Datos estructurados | Grafo tipado con negocio, persona, sitio, página, servicio, FAQ y breadcrumbs según ruta | Representación más explícita y coherente del contenido |
| Lectura por agentes | Markdown por página e índice llms.txt generado | Representación alternativa del contenido disponible |
| Verificación | Auditoría cruzada de HTML/schema/Markdown, más pruebas de navegador | Detecta incoherencias de contenido y navegación |
| Colaboración | Git y `Decisiones.md` | Cambios rastreables; conflictos anteriores resueltos |

No todo el contenido editorial está centralizado: parte de la portada sigue escrita en `index.astro`. La configuración de los servicios está mejor separada. Es una mejora de mantenimiento pendiente, no una razón para rehacer el sitio.

## Evaluación de cada sección de la portada

| Sección | Nota | Qué está bien | Qué impide una nota mayor |
|---|---:|---|---|
| Encabezado y navegación | 8/10 | Nombre legible, menú corto, orden coherente y acceso a WhatsApp. En servicios vuelve a las anclas correctas de inicio. | Menú de escritorio a 11 px; conviene mejorar lectura y señalar mejor el contexto de página actual. |
| Portada | 8/10 | «Escribanía en Nueva Córdoba» identifica actividad y zona. Mensaje sobrio y botón claro. Paleta e imagen coherentes. | Hay que confirmar que la foto representa el espacio real o tratarla como ilustrativa. La identidad tipográfica aún requiere aprobación definitiva. Los datos pequeños pierden protagonismo. |
| Franja de trayectoria | 7/10 | Registro, año de ejercicio y atención directa aportan contexto. | Parte de esta información se repite enseguida en el perfil. Tipografía pequeña; puede condensarse. |
| La escribana | 7,5/10 | Retrato, nombre, registro, credenciales y detalle de trayectoria. | Faltan enlaces que respalden formación/afiliaciones y aprobación de su vigencia. Conviene distinguir formación, cargo y área de práctica: gobierno corporativo no debería parecer un título académico adicional. |
| Ubicación y horarios | 7/10 | Dirección con piso/oficina, horarios diferenciados, teléfono, email y cómo llegar. | Falta confirmar ficha/pin y acceso físico. El gráfico inicial es orientativo; no sustituye un mapa real o foto de entrada. No hay datos aprobados sobre acceso al edificio. |
| Preguntas frecuentes | 7/10 | Seis preguntas reales, breves y desplegables. Los temas son pertinentes para una primera consulta. | Predominan inmuebles y certificaciones; falta equilibrar temas. Las respuestas técnicas requieren aprobación final. No conviene confundir brevedad con explicar suficientemente cada caso. |
| Modalidad de atención | 6,5/10 | Secuencia clara y consulta inicial por WhatsApp. | «Documentación» y «Gestión notarial» siguen siendo generales. Se necesita explicar mejor qué debe esperar la persona después de escribir, sin inventar tiempos de respuesta ni pasos no confirmados. |
| Tarjetas de servicios | 8,5/10 | Cinco áreas claras, toda la superficie abre el detalle, foco visible y flecha discreta. | Descripciones y listas pequeñas. Algunos textos aún tienen giros promocionales residuales. El recuadro de consultas se parece a un sexto servicio aunque tiene otra función. |
| Cierre de contacto | 8/10 | Título institucional, acción principal y mensaje concreto. | Repite el contacto ya disponible en varios lugares. La foto de fondo aporta poco bajo el velo oscuro; puede revisarse si se mantiene. |
| Pie de página | 6,5/10 | Identidad, registro, dirección y actualización. | Textos de 8–10 px; no reproduce teléfono y correo como accesos directos. Conviene completar enlaces útiles y la información de privacidad que corresponda al tratamiento real de datos, especialmente al activar medición. |

## Evaluación de las cinco páginas de servicio

El diseño y la navegación son coherentes en todas. Las diferencias de nota se deben a la especificidad del contenido disponible.

### Patrimonio e inmuebles — 7,5/10

Ya describe actuaciones, documentación inicial, presupuesto y tres dudas concretas sobre escrituras. Es la página con más material de orientación sustantiva.

Falta una explicación breve de qué consulta corresponde a cada actuación y de cómo se evalúan los antecedentes, con revisión profesional. «Presupuesto por WhatsApp» resuelve el canal, pero no explica por sí solo el alcance del presupuesto. No es necesario publicar tarifas universales.

### Certificaciones y actas — 8/10

La necesidad del visitante es relativamente concreta. La página indica consultar antes de concurrir y reutiliza una respuesta documental suministrada por la profesional.

La lista incluye actas, pero el título y el contenido se concentran en firmas/copias. Falta explicar qué tipo de consultas sobre actas se reciben. También conviene separar las indicaciones de firma y copia para que se identifiquen rápidamente. No se propone añadir requisitos por cuenta del equipo técnico.

### Sociedades y empresa — 6,5/10

Tiene una buena estructura, actuaciones y contacto inicial claro. Su título describe la especialización buscada.

Sin embargo, sus preguntas se concentran en cómo escribir, qué enviar y cómo presupuestar. Explica poco qué abarca el asesoramiento societario, qué consultas se reciben por reestructuración o qué aporta la experiencia profesional en esta área. Es la mayor oportunidad para aprovechar la diferenciación de Solange con contenido propio aprobado.

### Familia — 6/10

Funciona bien como catálogo de actuaciones: vivienda, patrimonio matrimonial, convivencia y autorizaciones.

Todavía no orienta lo suficiente a alguien que no conoce los términos. Necesita breves explicaciones de cada grupo y dudas reales. Las FAQ sobre documentación/presupuesto son correctas como coordinación, pero no desarrollan la materia.

### Sucesiones y previsión — 6/10

Tiene página, metadatos y estructura propios; enumera las actuaciones ya ofrecidas por la escribanía.

Debe aclarar qué comprende su intervención notarial y diferenciar herencias/cesiones, testamentos y previsión personal. Hoy esas necesidades están reunidas sin suficiente explicación. Es importante no dar a entender que se ofrece una gestión judicial u otra actuación no confirmada. Las explicaciones deben redactarse y aprobarse con la profesional.

## Evaluación transversal

| Área | Nota o estado | Juicio |
|---|---|---|
| Diseño y consistencia | 8/10 | Colores, tipografía de títulos y alternancia de fondos bien definidos. Falta afinar la proporción entre títulos grandes y texto informativo pequeño. |
| Navegación y contacto | 8/10 | Rutas y tarjetas funcionan. La acción de WhatsApp es fácil de encontrar. Hay repetición del mismo canal en varios bloques. |
| Lectura y accesibilidad práctica | 7/10 | Foco, menú móvil, elementos nativos y movimiento reducido implementados; textos pequeños pendientes. Una nota de Lighthouse no sustituye pruebas con personas y zoom/lectores de pantalla. |
| Contenido y diferenciación | 6,5/10 | Información ordenada, pero varias páginas repiten coordinación en lugar de resolver preguntas propias del servicio. |
| Respaldo profesional visible | 7/10 | La identidad está identificada; faltan referencias verificables y confirmación de fotos/afiliaciones. |
| Base técnica y mantenibilidad | 8,5/10 | Astro, configuración compartida, componentes y validaciones adecuados. La portada monolítica y algunas listas por índice pueden mejorarse gradualmente. |
| SEO técnico preparado | 8/10 | Páginas específicas, metadatos, grafo por ruta y sitemap. Falta verificar el dominio final, redirecciones, rastreo e indexación. |
| Preparación de contenido para GEO | 7/10 | Información textual, entidades, FAQ y Markdown coherentes. Falta profundidad profesional, respaldos y evidencia de descubrimiento público. |
| Rendimiento actual de producción | Sin nota | No existe una medición de producción del sitio nuevo. Revisar rendimiento tras publicar; no reutilizar el resultado histórico como si fuera actual. |
| Visibilidad orgánica/local y consultas logradas | No evaluable todavía | Sin datos comprobados de Search Console, ficha local, analítica y conversaciones recibidas por esta versión. |

### Hallazgos verificables de lectura

El navegador reporta navegación de escritorio a 11 px, rótulos a 9–10 px, parte de la información lateral a 11 px y datos del pie a 8 px. El cuerpo de servicios está a 14 px, por lo que la lectura es más cómoda allí que en varios detalles de portada. Propuesta editorial: probar cuerpo de 15–16 px y textos funcionales de 12–14 px, ajustando el diseño y verificando con usuarios. Es una recomendación de lectura, no una afirmación de que cualquier texto inferior a esos tamaños viole automáticamente una norma.

### SEO y GEO: qué no puede concluirse

Páginas correctas y archivos técnicos son preparación, no evidencia de posiciones ni citas. Google señala que llms.txt no influye en su visibilidad y que el contenido útil y la estructura técnica siguen siendo relevantes para sus funciones generativas. [Guía oficial](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

La ficha de Google y la coherencia del negocio son trabajos separados. Google explica su relevancia junto con distancia y prominencia para resultados locales. [Documentación local](https://support.google.com/business/answer/7091?hl=es).

Tras publicar, comprobar Core Web Vitals con datos de campo cuando existan; las pruebas de laboratorio son complementarias. [Web Vitals](https://web.dev/articles/vitals).

## Pendientes, ordenados por impacto

### Próxima mejora de producto

1. Aumentar la legibilidad de textos pequeños sin cambiar la identidad visual ni el orden aprobado.
2. Profundizar sociedades, familia y sucesiones con preguntas reales y explicaciones propias de la escribana.
3. Completar la explicación de actas y la diferenciación de actuaciones dentro de inmuebles.
4. Simplificar repeticiones de «consultá por WhatsApp» conservando siempre un contacto claro.
5. Añadir respaldos institucionales del perfil, comprobar fotografías y revisar la denominación de credenciales.

### Antes de publicar

6. Aprobar redacción técnica, derechos de fotos, afiliaciones, dirección y pin de Maps.
7. Confirmar identidad visual definitiva; mantener el logotipo tipográfico si se aprueba. Un logo nuevo no es requisito de SEO.
8. Completar información práctica de visita y enlaces del pie.
9. Inventariar y respaldar el sitio actual, configurar redirecciones equivalentes y comprobar el dominio final.
10. Validar schema y páginas públicas con herramientas externas pertinentes y repetir la evaluación móvil/rendimiento.

### Para conseguir y medir visibilidad

11. Configurar Search Console y Bing Webmaster Tools, comprobar sitemap/indexación y controles de búsqueda generativa.
12. Verificar y completar la ficha de Google, respetando el nombre y ubicación reales.
13. Investigar consultas con datos: las frases elegidas actualmente son hipótesis razonables, no un estudio de volúmenes o competencia.
14. Activar la medición aprobada y registrar consultas efectivas de forma agregada; no tratar un clic en WhatsApp como un cliente conseguido.
15. Revisar contenido y resultados periódicamente. Las reseñas y menciones deben ser auténticas, sin inventarlas o comprarlas.

## Recomendación de dirección

Conservaría Astro, la paleta, el orden y la plantilla de servicios. No empezaría otra remodelación visual. La mejora siguiente es hacer más fácil leer la información y aumentar su precisión y valor profesional. Un nuevo puntaje debería otorgarse después de esas mejoras y su revisión; no se promete un 9/10 ni un crecimiento de búsquedas por el solo hecho de ejecutarlas.

Esta tarea fue una evaluación: no se modificó el sitio, no se publicó ni se emitió una aprobación jurídica o de credenciales.
