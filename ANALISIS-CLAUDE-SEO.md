# Análisis de claude-seo y aplicación a Escribanía Jure Ramos

Fecha: 26 de octubre de 2026.
Repositorio: https://github.com/AgriciDaniel/claude-seo
Copia examinada: `6be93f45064ffbadced572b5d5c95f55fd263af0`, versión declarada 2.5.0.
Ubicación local: `references/claude-seo/`, ignorada por Git.

## Alcance de este trabajo

Clonación completada y revisión del README, licencia, privacidad, instalador, historial de cambios, módulos locales/GEO/contenido/schema y scripts representativos. Comparados con los componentes y controles existentes de esta web. No se instaló el plugin, ejecutaron instaladores ni scripts del tercero, conectaron cuentas o alteró el sitio. No se ejecutó su suite de pruebas. No constituye una auditoría completa de todos sus archivos ni una medición de posicionamiento público.

El árbol examinado contiene 26 módulos de habilidades, 19 agentes principales, 60 scripts Python principales y 76 archivos de pruebas Python. Cantidad de archivos no equivale a calidad ni a pruebas ejecutadas. Se registra la revisión concreta para que futuros cambios del repositorio no se confundan con lo estudiado.

## Qué es y qué ventaja ofrece

Es un conjunto de instrucciones y herramientas de auditoría para Claude Code, con integraciones opcionales. Organiza el análisis por especialidades: rastreo/indexación, contenido, SEO local, datos estructurados, rendimiento, enlaces, presencia en buscadores con IA y medición. Su valor principal es convertir revisiones dispersas en un proceso repetible con evidencias y prioridades.

No es un tema de Astro, una dependencia que deba instalarse en la web ni una modificación automática del algoritmo de Google. Clonarlo no cambia nuestra web. Sus agentes están preparados para el entorno de Claude Code; sus criterios se pueden adaptar a nuestro trabajo sin instalar ese entorno ni trasladar todos los agentes.

La licencia principal es MIT, con obligación de conservar el aviso si reutilizamos partes sustanciales. Algunas referencias FLOW declaran licencia CC BY 4.0; antes de copiar materiales específicos debe revisarse su atribución. Estudiar el método no exige copiarlo dentro de la aplicación.

## Código concreto que aporta

| Archivo del repositorio | Qué hace | Aplicación posible |
| --- | --- | --- |
| `scripts/parse_html.py` | Extrae título, descripción, canonical, robots, encabezados, imágenes, enlaces y JSON-LD. Reconoce varios mecanismos de carga diferida. | Auditar HTML final de cada ruta, complementando nuestros controles. |
| `scripts/metadata_template.py` | Busca patrones de metadatos excesivamente repetidos mediante comparaciones de texto. | Revisar títulos/descripciones parecidos; sus alertas requieren criterio editorial y adaptación al español. |
| `scripts/drift_baseline.py` y `drift_compare.py` | Guardan una referencia y comparan cambios; el comparador declara 17 reglas de distinta severidad. | Detectar pérdida de canonical, aparición de noindex, desaparición de encabezados o schema tras una actualización. |
| `scripts/gsc_query.py` y `gsc_inspect.py` | Consultan datos de rendimiento e inspección con acceso real a Search Console. | Priorizar páginas con impresiones y pocos clics; conocer indexación. No deben inventarse datos cuando falta acceso. |
| `scripts/pagespeed_check.py`, `crux_history.py` y `preload_check.py` | Herramientas para rendimiento, datos de campo y carga anticipada. | Separar medidas de laboratorio de experiencia real. Un sitio pequeño puede no disponer de suficientes datos CrUX. |
| `scripts/agentic_fix.py` | Produce borradores de llms.txt, catálogo y otras adaptaciones para agentes. Declara que no publica automáticamente en el sitio. | Conservar borradores revisables. Nuestra escribanía no necesita incorporar todo ese conjunto de protocolos. |
| `skills/seo-local/` y `skills/seo-geo/` | Guías de revisión de negocio local, información coherente, reputación, contenido y acceso de rastreadores. | Seleccionar criterios pertinentes a una escribanía de Córdoba. |

Estos son cambios y capacidades del proyecto de herramientas. No prueban qué modificación concreta produjo tráfico en el sitio personal del autor. El README muestra resultados declarados por el autor: no son una verificación independiente, un experimento causal ni una promesa para nosotros.

## Ventajas

1. Método organizado: revisar siempre lo mismo reduce olvidos al mantener varias webs.
2. Separación entre problemas técnicos, editoriales, locales y de medición: ayuda a elegir la solución correcta.
3. Scripts inspeccionables y licencia abierta: podemos entender reglas y adaptar solo lo útil.
4. Seguimiento de regresiones: especialmente valioso cuando otras personas cambian la web.
5. Integración con datos reales: Search Console puede reemplazar prioridades basadas solo en intuición.
6. Informes conservables: permiten explicar al cliente qué se encontró, qué se cambió y cómo medirlo.
7. Correcciones documentadas: el changelog registra ajustes de recomendaciones, lo que facilita revisar la versión utilizada.

## Limitaciones y aspectos que no copiaría literalmente

- Los mínimos de 500/800/1500 palabras de `quality-gates.md` son reglas del proyecto. Google declara que no tiene un número de palabras preferido. Ampliaríamos una página para resolver una necesidad, no para cumplir una cuota.
- Las puntuaciones y pesos de sus auditorías no son los pesos del algoritmo de Google. Tampoco una correlación de un estudio comercial demuestra causalidad.
- La guía local mezcla referencias y directorios internacionales, algunos centrados en EE. UU. No trasladaría cifras, categorías o fuentes de citas sin comprobar su utilidad para Córdoba.
- El código es abierto, pero el uso del modelo, ciertas APIs y proveedores puede tener costos. No hace falta contratar todo para empezar.
- Ejecución local no significa funcionamiento totalmente desconectado: Claude Code usa su servicio de modelos y las integraciones consultan proveedores. No deben incluirse documentos de clientes o secretos en los informes.
- Algunos detectores buscan frases en inglés o estructuras predeterminadas. Una alerta puede ser un falso positivo; una auditoría automática tampoco valida la exactitud jurídica de una respuesta.
- Los módulos de comercio electrónico, internacionalización o WebMCP no son prioridades de esta web.
- No copiaríamos páginas casi idénticas por barrio ni generaríamos enlaces masivos. La presencia geográfica y la información deben ser reales.
- Lighthouse, una nota de auditoría o un sitemap correcto no garantizan indexación, consultas ni primeras posiciones.

## Qué ya tiene nuestra web

La comparación corresponde al código local, no a una confirmación de publicación o rendimiento en Google.

| Área | Evidencia existente | Qué falta comprobar o desarrollar |
| --- | --- | --- |
| HTML y acceso | Astro genera páginas estáticas; contenido principal y enlaces están en HTML. | Respuestas HTTP y acceso de rastreadores en el dominio final. |
| Metadatos | `Seo.astro` centraliza títulos, descripciones, canonical y tarjetas sociales; servicios tienen datos propios. | Ajustarlos por intención y resultados reales, sin repetir palabras de forma artificial. |
| Servicios | Cinco rutas específicas, enlazadas desde portada; cada servicio tiene contenido y preguntas. | Respuestas más concretas a necesidades reales, revisadas por la escribana. |
| Entidades | `structured-data.ts` genera Notary, Person, WebSite, WebPage, Service, BreadcrumbList, FAQPage y Book según ruta. | Verificar perfiles profesionales oficiales y añadir solo relaciones comprobadas si aportan valor. |
| Descubrimiento | Sitemap, robots.txt, redirecciones antiguas y enlaces internos preparados. | Aplicación efectiva de redirecciones y cabeceras al publicar; Search Console. |
| Rendimiento | Imágenes adaptativas, fuentes locales, carga del mapa por acción y auditorías existentes. | Medir la web pública y distinguir datos de laboratorio de usuarios reales. |
| Móvil | Ajustes recientes de lectura, ubicación, mapa y orden de secciones. | Revisión en dispositivos reales y regresiones después de nuevas modificaciones. |
| IA | llms.txt y versiones Markdown generadas. | Mantener coherencia con el HTML; no atribuirles una mejora de ranking en Google. |
| Medición | Scripts técnicos y documentación de publicación. | Search Console, Analytics y eventos reales aún pendientes según el registro local. |

## Dos aclaraciones de SEO y GEO confirmadas con Google

1. **llms.txt es opcional para otros sistemas; no mejora la visibilidad en Google.** La documentación actual explica que no se necesitan archivos especiales ni un schema especial para aparecer en sus experiencias de IA. Nuestro archivo puede conservarse por su bajo mantenimiento, pero no es una prioridad de captación.
2. **Las FAQ siguen siendo contenido útil, pero ya no generan el antiguo resultado enriquecido FAQ.** Google anuncia la retirada desde el 7 de mayo de 2026 y la eliminación de su documentación. Conservar preguntas y schema coherente no permite prometer ese formato en resultados. No se retiró código en esta tarea.

SEO local tampoco depende solo de la web: Google describe relevancia, distancia y prominencia como factores principales. Una oficina en Nueva Córdoba no puede garantizar aparecer primera para toda persona que busque desde cualquier punto de Córdoba.

## Plan de aplicación propuesto

### Prioridad 1: publicar y asegurar acceso

- Confirmar dominio, hosting, HTTPS, variante principal con/sin www y redirecciones.
- Confirmar que el dominio final admite indexación y que el noindex de la previsualización no se traslada a producción.
- Verificar Search Console y enviar el sitemap; inspeccionar portada y cinco servicios.
- Guardar una referencia inicial del estado técnico y la fecha de publicación.
- Éxito técnico: páginas accesibles y destinos coherentes. Indexación: verificar lo que Google informe; no presumirla por recibir un HTTP 200.

### Prioridad 2: reforzar búsquedas por servicio

Mapa inicial de intenciones, a validar con búsquedas y datos: portada para escribanía en Nueva Córdoba; inmuebles para escrituras de inmuebles en Córdoba; certificaciones para firmas/copias; sociedades para asesoramiento societario; familia y sucesiones para sus consultas específicas.

- Mejorar cada página existente antes de abrir nuevas URLs.
- Incorporar requisitos iniciales, alcance, modalidad y respuestas útiles que la escribana confirme. No inventar precios, plazos, credenciales ni condiciones legales.
- Crear páginas adicionales solo si existe un servicio y una intención claramente diferentes, con contenido suficiente por utilidad.
- Enlazar desde una respuesta hacia el servicio que resuelve esa necesidad, con texto descriptivo. Más enlaces por sí mismos no constituyen una mejora.
- Éxito: más consultas relevantes e impresiones de búsquedas pertinentes por página, no mayor cantidad de palabras.

### Prioridad 3: confianza y SEO local

- Mantener Perfil de Empresa, web y menciones institucionales con nombre, dirección, WhatsApp y horarios coherentes; revisar el fijo retirado en la ficha pública.
- Confirmar registro, trayectoria, perfiles académicos y publicación mediante fuentes oficiales cuando estén disponibles.
- Pedir reseñas auténticas y responder sin divulgar información de clientes.
- Buscar menciones legítimas en entidades profesionales o académicas pertinentes, no directorios indiscriminados.

### Prioridad 4: medir y mantener

- Analytics: medir clics a WhatsApp y a indicaciones como acciones de contacto. Un clic a WhatsApp no confirma un mensaje enviado ni un nuevo cliente.
- Search Console: separar consultas de marca y de servicio, revisar clics, impresiones, CTR y posición por página. La posición es contextual; no equivale a un puesto fijo.
- Comparar períodos equivalentes con volumen suficiente; un cambio de tráfico no prueba por sí solo el efecto de una modificación.
- Adaptar controles de regresión a nuestro entorno de Astro; reutilizar las auditorías existentes antes de agregar otro entorno completo.
- No se programaron automatizaciones en esta tarea.

## Ruta de aprendizaje para profesionalizarse

1. Rastreo, indexación y resultados: entender por qué una URL accesible puede no estar indexada.
2. Investigación de necesidades: asignar una intención principal a cada página y evitar que varias compitan sin motivo.
3. Contenido y confianza: resolver dudas reales, mostrar evidencia profesional y revisar exactitud.
4. SEO técnico: metadatos, canonical, redirecciones, sitemap, HTML, enlaces y rendimiento.
5. SEO local: Perfil de Empresa, información consistente, reseñas y menciones legítimas.
6. Medición: aprender Search Console y Analytics, formular una hipótesis, registrar un cambio y comprobar resultados.
7. Operación profesional: informes claros, prioridades por impacto/esfuerzo, control de versiones y límites honestos de atribución.

La herramienta ayuda a aplicar este método; una nota automática no reemplaza el aprendizaje ni el criterio profesional.

## Fuentes

- Repositorio y archivos examinados: https://github.com/AgriciDaniel/claude-seo/tree/6be93f45064ffbadced572b5d5c95f55fd263af0
- Licencia: https://github.com/AgriciDaniel/claude-seo/blob/6be93f45064ffbadced572b5d5c95f55fd263af0/LICENSE
- Historial: https://github.com/AgriciDaniel/claude-seo/blob/6be93f45064ffbadced572b5d5c95f55fd263af0/CHANGELOG.md
- Google, contenido útil y ausencia de cuota de palabras: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, funcionalidades de IA: https://developers.google.com/search/docs/appearance/ai-features
- Google, actualizaciones de llms.txt y retirada de FAQ: https://developers.google.com/search/updates
- Google, factores de posicionamiento local: https://support.google.com/business/answer/7091?hl=es
