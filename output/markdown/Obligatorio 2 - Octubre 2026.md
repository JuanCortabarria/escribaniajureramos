# Obligatorio 2 - Octubre 2026

Universidad ORT Uruguay · Facultad de Ingeniería

Bernard Wand-Polak

Cuareim 1451 · 11.100 Montevideo, Uruguay

Tel. 2902 15 05 · Fax 2908 13 70

www.ort.edu.uy

Computación - Electrónica - Telecomunicaciones - Sistemas de Información

| Campo | Detalle |
| --- | --- |
| EVALUACIÓN | Obligatorio 2 |
| GRUPO | Todos |
| FECHA | 08/10/2026 |
| MATERIA | Arquitectura de Software en la práctica |
| CARRERA | Ingeniería en Sistemas |

## CONDICIONES

- Puntaje máximo: 30 puntos

- Puntaje mínimo: 6 puntos

- Fecha de entrega: 23/11/2026 hasta las 21:00 horas en gestion.ort.edu.uy (max. 40Mb en formato zip, rar o pdf)

## Uso de material de apoyo y/o consulta

### Inteligencia Artificial Generativa

- Seguir las pautas de los docentes: Se deben seguir las instrucciones específicas de los docentes sobre cómo utilizar la IA en cada curso.

- Citar correctamente las fuentes y usos de IA: Siempre que se utilice una herramienta de IA para generar contenido, se debe citar adecuadamente la fuente y la forma en que se utilizó.

- Se debe indicar:
  - a. la /las herramientas utilizadas y
  - b. el contexto de uso: por ejemplo, generación de ideas, redacción inicial, análisis de datos, corrección de estilo, etc.
- Todo contenido producido por IAG debe ser revisado y verificado; cualquier error presente será responsabilidad del estudiante.

- Ser responsables con el uso de la IA: Conocer los riesgos y desafíos, como la creación de “alucinaciones”, los peligros para la privacidad, las cuestiones de propiedad intelectual, los sesgos inherentes y la producción de contenido falso.

- El uso de herramientas de Inteligencia Artificial Generativa (IAG) puede emplearse como apoyo en el proceso de aprendizaje. Sin embargo, no sustituye el razonamiento crítico ni la elaboración personal. El estudiante es responsable de que el trabajo presentado refleje su propia comprensión, análisis y proceso cognitivo sobre el tema.

- La defensa es obligatoria y eliminatoria.

- La defensa será presencial salvo en casos en que se habilite la defensa oral sincrónica en forma remota.

## Defensa

Fecha de defensa: entre la semana 15 y 17 del curso

La defensa es obligatoria y eliminatoria. El docente es quien definirá y comunicará la modalidad, y mecánica de defensa. La no presentación a la misma implica la pérdida de la totalidad de los puntos del Obligatorio.

## IMPORTANTE:

1. Inscribirse

2. Formar grupos de hasta 3 personas.

3. Subir el trabajo a Gestión antes de la hora indicada (ver hoja al final del documento: “RECORDATORIO”)

Aquellos de ustedes que presenten alguna dificultad con su inscripción o tengan inconvenientes técnicos, por favor contactarse con la Coordinadora de cursos o Coordinación Adjunta antes de las 20:00h del día de la entrega, a través del mail: adjuntos_ei@ort.edu.uy.

## Objetivos del obligatorio

Poner en práctica conceptos relacionados con la tecnología de computación en la nube y el diseño de sistemas orientados a microservicios, trabajando sobre un sistema que ya se encuentra en desarrollo.

El objetivo de esta segunda entrega es evolucionar la solución implementada en el primer obligatorio (SaaS Event Hub), incorporando nuevos requerimientos funcionales y no funcionales, y llevando la arquitectura del sistema hacia un estilo basado en microservicios.

## Introducción

Desde su lanzamiento inicial, la plataforma de Gestión de Eventos Corporativos y Control de Asistencia ha sido adoptada por un número creciente de empresas, que la utilizan para organizar capacitaciones internas, seminarios de integración, conferencias técnicas y eventos con clientes externos.

El crecimiento en el uso de la plataforma ha generado nuevas necesidades funcionales. Las empresas requieren organizar sus eventos por departamento, mantener informados a sus colaboradores ante cambios en la agenda, contar con trazabilidad completa de las acciones críticas y disponer de herramientas más eficientes para buscar y analizar la participación en los eventos.

A su vez, los picos de demanda que se producen al abrirse la inscripción a eventos masivos, y la necesidad de evolucionar distintas partes del sistema de manera independiente, motivan una refactorización de la arquitectura actual. Por este motivo, la solución deberá migrar desde una arquitectura monolítica cloud native hacia una arquitectura basada en microservicios, manteniendo las características de una aplicación SaaS multi-tenant.

## Desarrollo

Dado que la aplicación está teniendo nuevos desafíos de escalabilidad y que el equipo posee ahora mayor conocimiento del dominio del problema, se ha decidido refactorizar el sistema hacia una arquitectura basada en microservicios.

Se debe cumplir con todos los requerimientos funcionales y no funcionales de la primera entrega, incorporando además los nuevos requerimientos y modificaciones indicados en este documento.

## Requerimientos Funcionales

Se debe cumplir con todos los requerimientos funcionales de la primera entrega (RF1 a RF9) y:

### RF10. Departamentos de la empresa cliente

- Actor: Administrador del SaaS (Global Admin)

- Descripción: Un administrador deberá poder definir departamentos para cada empresa cliente. De cada departamento se conoce su nombre (único dentro de la empresa) y su descripción. Por ejemplo: Recursos Humanos, Tecnología, Ventas, Marketing, Operaciones, Finanzas.

- Comportamiento: Al invitar usuarios a la plataforma (RF2) deberá ser posible indicar el departamento al que pertenecen. Cada usuario miembro pertenece a un único departamento dentro de su empresa. Los eventos (RF4) podrán tener asociado un departamento organizador, aunque el dato no es obligatorio.

- Funcionalidades:
  - Crear departamentos para una empresa.
  - Modificar el nombre y la descripción de un departamento.
  - Eliminar departamentos, siempre que la eliminación no deje datos inconsistentes (usuarios o eventos asociados). La política de eliminación será decisión del equipo y debe documentarse.
  - Asociar usuarios miembros a un departamento al momento de la invitación y modificar dicha asociación posteriormente.
  - Asociar opcionalmente un departamento organizador a un evento al crearlo o modificarlo.
  - Visualizar el departamento al que pertenece cada usuario y el departamento organizador de cada evento.
- Aislamiento: La información de departamentos debe mantenerse aislada por Tenant. Bajo ningún concepto una empresa podrá visualizar o utilizar departamentos definidos para otra empresa.

### RF11. Notificaciones automáticas de eventos

- Actor: Usuario Miembro

- Descripción: Cuando un evento sea creado, modificado o dado de baja, el sistema debe enviar automáticamente una notificación por correo electrónico (real, no simulado) a los usuarios de la empresa que pertenezcan al departamento organizador del evento. Si el evento no tiene departamento organizador, la notificación se enviará a todos los usuarios miembros de la empresa.

- Objetivo: Mantener informados a los colaboradores sobre la agenda de eventos de su organización y sobre cambios que puedan afectar su participación.

- Contenido de la notificación:
  - Nombre y descripción del evento.
  - Fecha y hora programada.
  - Modalidad (Presencial, Virtual o Híbrida).
  - Cupo máximo y cupos disponibles al momento de la acción.
  - Acción realizada: creación, modificación o baja.
  - Usuario que realizó la acción.
  - Fecha y hora en que se realizó la acción.
  - En caso de modificación, el detalle de los cambios realizados (valor anterior y valor nuevo).
- Suscripción: Los usuarios deberán poder suscribirse o darse de baja de estas notificaciones desde la aplicación.

- Asincronismo: El envío de notificaciones debe realizarse de forma asíncrona, de modo que no afecte el rendimiento ni la disponibilidad del flujo principal de gestión de eventos. Una falla en el envío de correos no debe impedir la creación, modificación o baja del evento.

### RF12. Auditoría de acciones administrativas y críticas

- Actor: Administrador del SaaS (Global Admin)

- Descripción: El sistema debe registrar las acciones críticas realizadas por administradores y usuarios miembros. Se deberán auditar, al menos, las siguientes acciones:
  - Creación de empresas cliente.
  - Invitación y registro de usuarios.
  - Creación, modificación y eliminación de departamentos, y asignación o modificación del departamento de un usuario.
  - Creación, modificación y baja de eventos.
  - Cambios de estado de los registros de asistencia (Reservado, Confirmado, Cancelado, Asistió).
  - Creación y revocación de API Keys.
  - Cambios relevantes en la configuración del sistema.
- Contenido de cada registro:
  - Fecha y hora de la acción.
  - Usuario que realizó la acción.
  - Empresa a la que pertenece el usuario.
  - Tipo de acción realizada.
  - Detalles de la acción.
  - Valores anteriores y nuevos, cuando corresponda.
- Características adicionales:
  - La auditoría debe almacenarse en un servicio separado para garantizar su integridad y disponibilidad.
  - Los registros de auditoría deben ser inmutables y estar protegidos contra modificaciones no autorizadas.
  - Debe existir una interfaz que permita a los administradores consultar los registros de auditoría, filtrando por rango de fechas, usuario, tipo de acción y empresa. Los resultados deben estar paginados.
  - La auditoría de cambios de estado exigida en RF5 debe seguir cumpliéndose, y el endpoint de consulta histórica (RF8) debe seguir funcionando con el mismo contrato.

### RF13.Búsqueda y filtrado de registros de asistencia

- Actor: Usuario Miembro

- Descripción: Se debe permitir a los usuarios buscar y filtrar los registros de asistencia (RF5) de su empresa de manera eficiente. Los usuarios podrán:
  - Buscar registros por nombre o email del colaborador.
  - Filtrar registros por evento.
  - Filtrar registros por estado (Reservado, Confirmado, Cancelado, Asistió).
  - Filtrar registros por modalidad del evento.
  - Filtrar registros por departamento organizador del evento.
  - Filtrar registros por fecha o rango de fechas del evento.
  - Combinar múltiples criterios de búsqueda y filtrado.
- Objetivo: Mejorar la usabilidad del sistema, facilitando la gestión y localización de registros, especialmente en empresas con gran cantidad de colaboradores y eventos.

- Especificaciones:
  - La interfaz debe proporcionar un campo de búsqueda y opciones de filtrado fácilmente accesibles.
  - Los resultados deben estar paginados y actualizarse según los criterios ingresados.
  - Debe manejar adecuadamente los casos donde no se encuentren resultados, informando al usuario.
  - La búsqueda y el filtrado deben realizarse de forma eficiente, con tiempos de respuesta adecuados para una buena experiencia de usuario.
  - Los usuarios miembros solo podrán visualizar registros pertenecientes a su empresa.

## Requerimientos No Funcionales

Se debe cumplir con todos los requerimientos no funcionales de la primera entrega, con los siguientes agregados o modificaciones:

### RNF3. Observabilidad

Para facilitar el diagnóstico ante eventuales fallas, usted y su equipo deberán poder monitorear las siguientes métricas de todos los servicios del sistema, en un solo lugar:

- Peticiones por minuto (throughput) por microservicio.

- Tiempos de respuesta de los distintos endpoints (latencia).

- Tasa de error HTTP de los distintos endpoints.

- Estado de salud de cada microservicio.

- Cantidad de mensajes pendientes, procesados y fallidos en las colas utilizadas.

- Las dos métricas de negocio definidas en la primera entrega, adaptadas a la nueva arquitectura.

Además, se debe poder seguir el recorrido completo de una operación que involucre más de un microservicio (por ejemplo, la baja de un evento que dispara notificaciones y registros de auditoría), mediante trazas distribuidas o un identificador de correlación propagado entre servicios.

Debe ser posible consultar y visualizar esta información en cualquier momento.

La implementación de observabilidad idealmente debe estar basada en OpenTelemetry. En caso de encontrar algún bloqueo técnico o impedimento para esto,se recomienda utilizar otra herramienta y documentar las dificultades encontradas.

### RNF 6. Integración continua

Para al menos dos de los microservicios, se deberá contar con pruebas unitarias para requerimientos funcionales de su elección.

Estos requerimientos deben tener una cobertura de 100%.

Las pruebas unitarias se deben correr automáticamente cada vez que un nuevo commit se integra a la rama principal del repositorio correspondiente.

La documentación deberá indicar:

- Qué microservicios cuentan con integración continua.

- Qué requerimientos funcionales fueron cubiertos por pruebas unitarias.

- Cómo se ejecutan las pruebas dentro del pipeline.

- Qué sucede si las pruebas fallan.

### RNF8. Identificación de fallas

Para facilitar la detección e identificación de fallas, se deberán centralizar y retener los logs emitidos por todos los microservicios en producción por un período mínimo de 48 horas.

Se debe poder filtrar los logs por:

- Fecha.

- Microservicio.

- Nivel de severidad.

- Texto del mensaje.

- Identificador de request o de correlación.

- Tenant, cuando aplique.

La documentación deberá evidenciar cómo se accede a los logs centralizados y cómo se puede utilizar esta información para diagnosticar fallas en producción.

### RNF10. Estilo de arquitectura

Se deberá llevar el estilo de arquitectura hacia uno basado en microservicios, especificando fronteras bien definidas entre los mismos, así como las interfaces mediante las cuales se comunicarán.

Cada microservicio deberá desarrollarse y desplegarse como una aplicación independiente.

Los microservicios deberán comunicarse exclusivamente mediante:

- Llamadas HTTP en tiempo de ejecución.

- Colas de mensajes.

- Eventos asincrónicos.

Se debe utilizar al menos una comunicación mediante colas de mensajes.

Al menos uno de los microservicios debe estar implementado en un lenguaje de programación diferente al utilizado por los demás.

La documentación de arquitectura deberá justificar:

- Cuáles son los microservicios definidos.

- Qué responsabilidad tiene cada uno.

- Qué datos administra cada servicio.

- Cómo se comunican entre sí.

- Qué decisiones se tomaron para mantener bajo acoplamiento entre servicios.

- Cómo se garantiza la consistencia del control de cupos (RF5) ante reservas concurrentes en la nueva arquitectura.

### RNF12. Desplegabilidad

El equipo puede optar por desplegar el sistema en la plataforma que considere más apropiada, justificando su elección.

Se deberá poder desplegar una nueva versión de cualquier microservicio sin afectar el despliegue de los demás y sin ocasionar downtime en ningún microservicio.

Cada microservicio debe poder levantarse siguiendo instrucciones claras incluidas en el README de su repositorio, utilizando docker-compose. Adicionalmente, debe existir una forma documentada de levantar el sistema completo de manera local.

La documentación deberá describir:

- Plataforma utilizada para el despliegue.

- Estrategia utilizada para desplegar cada microservicio.

- Cómo se evita el downtime al desplegar nuevas versiones.

- Cómo se configuran variables de entorno y secretos.

- Cómo se ejecutan migraciones, si corresponde.

- Cómo se realiza rollback ante un despliegue fallido.

### RNF13. Resiliencia

La falla de un microservicio no crítico no debe impedir el funcionamiento de los flujos principales del sistema. En particular:

- Si el servicio de notificaciones no está disponible, la gestión de eventos y de registros debe continuar funcionando con normalidad, y las notificaciones pendientes deben enviarse una vez que el servicio se recupere.

- Los mensajes que no puedan procesarse luego de un número razonable de reintentos deben derivarse a una cola de mensajes fallidos (dead letter queue) o mecanismo equivalente, para su análisis posterior.

- El procesamiento de mensajes debe ser idempotente: el reprocesamiento de un mismo mensaje no debe generar notificaciones ni registros de auditoría duplicados.

- Las llamadas HTTP entre microservicios deben contemplar timeouts y una estrategia de manejo de fallas (por ejemplo, reintentos con backoff o circuit breaker).

La documentación deberá describir las tácticas aplicadas para cumplir este requerimiento y la evidencia de su funcionamiento.

## Documentación

Además de la solución a implementar, se pide incluir una documentación con los siguientes puntos:

### Descripción de la arquitectura

Deberá mostrar las partes que componen al sistema a través de vistas de módulos, componentes y conectores, y despliegue. Deberá asegurarse de mostrar:

- Distribución de todo el sistema en componentes físicos.

- Flujo de información a través de la infraestructura en tiempo de ejecución.

- Microservicios definidos y sus responsabilidades.

- Comunicación entre microservicios.

- Uso de colas de mensajes.

- Componentes compartidos o infraestructura común.

- Estrategia de autenticación y autorización entre servicios.

### Justificaciones de diseño

Se pide una descripción del razonamiento y las tácticas aplicadas para conseguir cada uno de los RNFs exigidos. Las mismas pueden incluir tanto decisiones explícitamente introducidas en su diseño, como aquellas provistas por la plataforma, herramientas o framework utilizados.

La documentación debe evidenciar el cumplimiento de cada uno de los RNFs en forma explícita. En caso de no hacerlo, no se considerará el RNF como satisfecho.

Se deberá prestar especial atención a:

- RNF3. Observabilidad.

- RNF4. Seguridad, autenticación, autorización y tenancy.

- RNF8. Identificación de fallas.

- RNF10. Estilo de arquitectura.

- RNF12. Desplegabilidad.

### Cumplimiento con 12 factor app

La documentación debe incluir una breve descripción, no siendo necesario más de un párrafo por factor, que evidencie o explique cómo la aplicación cumple con cada uno de los principios propuestos por The Twelve-Factor App.

En esta segunda entrega, el análisis deberá considerar la solución completa basada en microservicios.

### Análisis de costos

Se espera que la documentación incluya una sección describiendo los costos estimados de ejecutar la solución en un ambiente de producción.

Dado que los costos dependen de la carga de trabajo, es necesario que el análisis describa cómo estimar el costo esperado en función de la misma.

Se deberá considerar, al menos:

- Costo de ejecución de cada microservicio.

- Costo de bases de datos.

- Costo de almacenamiento de logs.

- Costo de herramientas de monitoreo u observabilidad.

- Costo asociado al uso de colas de mensajes.

- Costo estimado ante un aumento de carga.

### Descripción del proceso de deployment

Se deberá describir y justificar la plataforma utilizada para desplegar la app, así como los pasos tomados por su equipo para su configuración y/o despliegue manual (en forma de tutorial).

Además, se deberá mencionar brevemente el proceso interno que toma lugar al desplegar bajo el mecanismo descrito. Esto es, los pasos que comprenden el pasaje del sistema en su entorno de desarrollo al entorno de producción (compilación de assets, ejecución de pruebas, migraciones, etc.).

Se debe explicar si el proceso utilizado ocasiona downtime al desplegar una nueva versión de la aplicación.

## Equipos

Los equipos podrán estar conformados por hasta 3 personas, y pueden incluir integrantes de más de un dictado. No se podrá realizar el trabajo en forma individual.

## Entrega

La entrega se realizará exclusivamente a través de gestion.ort.edu.uy y debe incluir:

- Dirección de los repositorios privados en Github.

- Se debe incluir en alguno de los repositorios, el script de pruebas de cargas mencionadas en el RNF6 Integración continua.

- PDF con la documentación requerida para este obligatorio.

- Colección de Postman para los dos endpoints REST públicos.

## Defensa

La defensa se realizará mediante un video que cada equipo deberá enviar a los docentes, mostrando el funcionamiento de la aplicación. En el video se deberán evidenciar todos los requerimientos funcionales implementados, y mencionar, en caso de existir, aquellos que no se hayan podido completar. Se espera que el video sea de buena calidad tanto en audio como imagen, de lo contrario podrían perder puntos de funcionalidad.

Adicionalmente, algunos equipos podrán ser seleccionados de forma aleatoria para realizar una instancia de defensa individual o grupal con el docente, en la cual se validará la autoría y comprensión de lo entregado.

Esta instancia podrá ser obligatoria para los equipos seleccionados y tendrá impacto en la calificación final, pudiendo asignarse notas diferenciadas a cada integrante en función de su desempeño.

Los equipos podrán enviar el video de la defensa hasta una semana exacta después de la fecha de entrega del obligatorio.

### Importante:

- Las funcionalidades que no se muestren en la defensa no se considerarán como implementadas.

- El video deberá contar con voz narrando lo que se va mostrando, puede durar como máximo 20 minutos.

- Durante la defensa se debe demostrar que todos los componentes del sistema está funcionando en un cloud y no en local.

## Rubrica de Corrección

La asignación del puntaje global se detalla en el siguiente esquema de evaluación sobre el proceso y la documentación técnica:

| Aspecto | Ítems a validar | Puntos |
| --- | --- | --- |
| Descripción de la arquitectura | La descripción permite comprender la organización del sistema, con un hilo conductor. Se muestran los microservicios, sus responsabilidades, sus datos y sus formas de comunicación. Se muestra el flujo de información a través de la infraestructura en runtime. | 5 |
| Justificación de diseño | Se evidencia el cumplimiento de todos los RNFs. Se documentan las decisiones de arquitectura con sus trade-offs, en forma estructurada (ADRs). Se describe cómo se resuelven seguridad, multi-tenancy, consistencia de cupos, resiliencia y separación de endpoints de plataforma y clientes. | 5 |
| Observabilidad | Capturas y descripción de las herramientas utilizadas. Métricas de todos los servicios y colas en un solo lugar. Trazabilidad de una operación entre microservicios. Análisis de los valores obtenidos en un contexto cercano a producción (por ejemplo, la prueba de carga). | 4 |
| Herramientas y proceso de desarrollo | Justificación de lenguajes, frameworks y herramientas. Evidencia de pipelines de CI por microservicio, pruebas y resultados de las pruebas de carga. Se valoran los esfuerzos de automatización, documentando el ideal y las restricciones encontradas. | 3 |
| Despliegue | Pasos y decisiones de despliegue explicados con evidencia. Estrategia sin downtime, manejo de secretos, migraciones y rollback por microservicio. | 3 |
| Análisis de costos | Estimación por componente y modelo de costo en función de la carga, incluyendo un escenario de crecimiento. | 3 |
| Utilización de IA | Documentación del uso de IA en el proceso, con reflexión sobre beneficios, riesgos y forma de revisión e integración. | 2 |
| Formalidad y prolijidad del documento | Documento ordenado, con formato adecuado y organizado según los formatos recomendados por la facultad. | 2 |
| Historial de GitHub y distribución equitativa del trabajo | La evolución del trabajo queda reflejada en los repositorios dentro de la organización provista. Para equipos de dos personas, cada integrante debe tener al menos el 40% de los commits; para equipos de tres, el 25%. La nota individual puede variar en función de este punto. | 3 |
| Total |  | 30 |

Se espera que los requerimientos funcionales se cumplan en un 100%. Los mismos no suman puntos al obligatorio; solo restan en caso de no estar presentes, estar incompletos o tener fallas. Las regresiones en los requerimientos de la primera entrega (RF1 a RF9) también restarán puntos.

| Requerimiento funcional | Ítems a validar | Puntos a restar |
| --- | --- | --- |
| RF10. Departamentos de la empresa cliente | Permite crear, editar y eliminar departamentos sin dejar datos inconsistentes. Permite asociar usuarios a un departamento al invitarlos y modificar la asociación. Permite asociar un departamento organizador a un evento. Respeta el aislamiento entre empresas. | 4 |
| RF11. Notificaciones automáticas de eventos | Envía el correo al crear, modificar o dar de baja un evento, a los destinatarios correctos. Incluye los datos pedidos y el detalle de cambios. Permite suscribirse y darse de baja. El envío es asíncrono y no afecta el flujo principal. | 6 |
| RF12. Auditoría de acciones administrativas y críticas | Registra las acciones críticas pedidas con fecha, hora, usuario, empresa, tipo y detalles. Registra valores anteriores y nuevos. Ofrece una interfaz con filtros combinables y paginación. Asegura la integridad e inmutabilidad de los registros. | 6 |
| RF13. Búsqueda y filtrado de registros | Permite buscar por colaborador y filtrar por evento, estado, modalidad, departamento y fecha. Permite combinar criterios. Pagina los resultados. Informa cuando no hay resultados. Solo muestra datos de la empresa del usuario. | 4 |

## RECORDATORIO: IMPORTANTE PARA LA ENTREGA

La entrega de los obligatorios será en formato digital online, a excepción de algunas materias que se entregarán en Bedelía y en ese caso recibirá información específica en el dictado de la misma.

Los principales aspectos a destacar sobre la entrega online de obligatorios son:

1. Ingresá al sistema de Gestión.

2. En el menú, seleccioná el ítem “Evaluaciones” y la instancia de evaluación correspondiente, que figura bajo el título “Inscripto”.

3. Para iniciar la entrega hacé clic en el ícono: [ícono de entrega]

4. Ingresá el número de estudiante de cada uno de los integrantes y hacé clic en “Agregar”. El sistema confirmará que los integrantes estén inscriptos al obligatorio y, de ser así, mostrará el nombre y la fotografía de cada uno de ellos. Una vez agregados todos los integrantes, hacé clic en “Crear equipo”.

   Cualquier integrante podrá:
   - Modificar la integración del equipo.
   - Subir el archivo de la entrega.

5. Seleccioná el archivo que deseás entregar. Verificá el nombre del archivo que aparecerá en la pantalla y hacé clic en “Subir” para iniciar la entrega. Cada equipo (hasta 3 estudiantes) debe entregar un único archivo en formato zip o rar (los documentos de texto deben ser pdf, y deben ir dentro del zip o rar). El archivo a subir debe tener un tamaño máximo de 40mb

   Cuando el archivo quede subido, se mostrará el nombre generado por el sistema (1), el tamaño y la fecha en que fue subido.

6. El sistema enviará un e-mail a todos los integrantes del equipo informando los detalles del archivo entregado y confirmando que la entrega fue realizada correctamente.

7. Podés cerrar la pestaña de entrega y continuar utilizando Gestión o salir del sistema.

8. La hora tope para subir el archivo será las 21:00 del día fijado para la entrega.

9. La entrega se podrá realizar desde cualquier lugar (ej. hogar del estudiante, laboratorios de la Universidad, etc).

10. Aquellos de ustedes que presenten alguna dificultad con su inscripción o tengan inconvenientes técnicos, por favor contactarse con la Coordinadora de Cursos o Coordinación Adjunta antes de las 20:00h del día de la entrega, a través del mail: adjuntos_ei@ort.edu.uy.
