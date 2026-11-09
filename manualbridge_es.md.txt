# Manual - Bridge

> Manual Bridge — trabajar con la IA: qué ocurre en segundo plano y ocho flujos de trabajo, desde el inicio del día hasta la investigación jurídica.

Página original: https://www.ironstick.legal/manualbridge_es.html

---

Manual Bridge — trabajar con la IA: qué ocurre en segundo plano y ocho flujos de trabajo, desde el inicio del día hasta la investigación jurídica.

Fundamentos

## 1. Chat de IA y Bridge: ¿cuál es la diferencia?

IRONSTICK le ofrece dos maneras de trabajar sus expedientes con una IA.
El **chat de IA** está integrado en el programa: usted escribe en una ventana de IRONSTICK y es IRONSTICK mismo quien envía la solicitud a un servicio de IA externo, con las claves de API que su despacho ha guardado en la configuración de IA.
El **Bridge** funciona al revés: usted escribe en la aplicación de IA de escritorio que ya utiliza, y esa aplicación llama en directo a las herramientas de IRONSTICK a través de un conector.
En ambos casos la IA accede a sus datos únicamente a través de IRONSTICK, con las mismas herramientas y tras las mismas compuertas.

### El chat de IA integrado

- **Primero, una capa local.** Cada mensaje pasa primero por una capa basada en reglas que se ejecuta en su ordenador, sin modelo de IA y sin internet. Las solicitudes sencillas —abrir una pantalla, un cliente o un caso, consultas simples— se ejecutan allí directamente. Todo lo que requiere razonar o redactar pasa a un servicio de IA externo.
- **Sus claves, sus servicios.** El chat utiliza los servicios de IA externos para los que hay una clave de API guardada en la configuración de IA. Se emplean automáticamente en un orden fijo. Si uno no está disponible o se ha quedado sin crédito, el siguiente asume la misma solicitud.
- **Primero, su consentimiento.** Antes de que el chat envíe algo a un servicio de IA externo, se lo pregunta a usted. Si lo rechaza, no se envía nada, y el chat no vuelve a preguntar hasta que usted cambie el modo o abra el chat de nuevo.
- **Seudonimizado.** Antes de que una solicitud salga de su ordenador, los nombres de personas y empresas, los números de caso y de autos judiciales, los números de identificación personal, los IBAN, los números de teléfono, las direcciones de correo electrónico y las direcciones de las partes se sustituyen por marcadores neutros. La respuesta se vuelve a traducir en su ordenador. Las fechas y los importes no se modifican. Los marcadores se construyen a partir de sus propios registros; en el caso de terceros desconocidos en texto libre, solo se detectan patrones reconocibles como números, direcciones de correo electrónico y números de teléfono.
- **Registrado.** Cada llamada a un servicio de IA externo se registra localmente, en la forma con marcadores con la que salió de su ordenador.
- **Memoria de trabajo compacta.** En cada turno se entrega a la IA la parte reciente de la conversación (unos 6.000 caracteres) y un breve resumen de la parte anterior. Una solicitud ejecuta hasta ocho rondas de herramientas.
- **Dónde funciona.** En Windows y en la tableta Android.

### El Bridge

- **Tres partes.** Su aplicación de IA de escritorio se conecta mediante el Model Context Protocol (MCP) con un pequeño programa puente en el mismo ordenador. El puente reenvía cada llamada a la aplicación IRONSTICK en ejecución a través de una conexión protegida a la que solo se puede acceder desde este ordenador. La aplicación ejecuta la herramienta y devuelve el resultado por la misma vía.
- **El programa puente no conoce ningún dato.** No abre ninguna base de datos y no contiene herramientas propias; solo transmite las llamadas. Las instrucciones de trabajo para la IA también proceden de la aplicación en ejecución cuando se conecta la IA de escritorio.
- **Solo mientras IRONSTICK está en ejecución.** Si la aplicación está cerrada, cada llamada a una herramienta recibe como respuesta el aviso de que IRONSTICK no se está ejecutando y de que debe iniciarlo. La lista de herramientas sigue visible en la IA de escritorio, de modo que el orden en que inicie los dos programas no importa.
- **Datos reales.** Los resultados de las herramientas llegan a la IA de escritorio sin seudonimizar: los nombres, números y fechas reales son lo que hace posible una plantilla lista para presentar. Lo que la IA lee se procesa bajo su propia cuenta con el proveedor de la aplicación de IA de escritorio, según las condiciones de ese proveedor.
- **Activado por usted.** El Bridge solo funciona cuando *Permitir el acceso del conector desde la IA de escritorio local* está activado en la configuración de IA y el Bridge de esa aplicación de IA de escritorio tiene licencia. El control del programa —abrir pantallas, casos y documentos, exportar— necesita un segundo interruptor.
- **Varias a la vez.** Las aplicaciones de IA de escritorio con licencia —Claude Desktop, ChatGPT Desktop, Qwen Desktop y Kimi Desktop— pueden estar conectadas al mismo tiempo y trabajar en el mismo caso. Cada una se muestra con su propio símbolo en la barra de menús mientras trabaja.
- **Dónde funciona.** En Windows.

### Comparación

|  | Chat de IA (integrado) | Bridge (aplicación de IA de escritorio) |
| --- | --- | --- |
| Dónde escribe usted | En la ventana de chat de IRONSTICK | En su aplicación de IA de escritorio |
| Quién habla con el servicio de IA | IRONSTICK, con sus propias claves de API | Su aplicación de IA de escritorio, con su propia cuenta |
| Costes de la IA | Facturados por uso por el servicio de IA con su clave de API | Cubiertos por la suscripción que ya tiene para la aplicación de IA de escritorio |
| Licencia de IRONSTICK | Incluida, sin licencia adicional | Licencia de Bridge por usuario / puesto de trabajo — un Bridge por aplicación de IA de escritorio, o el paquete con todos los Bridges; cifras en la [página de precios](https://www.ironstick.legal/pricing.html) |
| Datos enviados a la IA | Seudonimizados; fechas e importes sin modificar | Datos reales, procesados bajo su cuenta con el proveedor |
| Su consentimiento | Antes de la primera solicitud externa de una sesión de chat | Antes del primer acceso a datos de cualquier IA de escritorio en cada ejecución del programa |
| Instrucciones de trabajo | Se envían con cada solicitud | La IA debe leerlas y confirmar una regla palabra por palabra antes de que se abra ninguna herramienta |
| Herramientas y compuertas | El mismo conjunto de herramientas y las mismas compuertas, más una búsqueda en el historial propio del chat | El mismo conjunto de herramientas y las mismas compuertas; control del programa solo con su interruptor |
| Duración de una sesión de trabajo | Conversación reciente más un breve resumen; hasta ocho rondas de herramientas por solicitud | La conversación de la aplicación de IA de escritorio |
| Plataformas | Windows y tableta Android | Windows |

### Por qué el Bridge es idóneo para el trabajo extenso en casos

- **Sin coste por llamada a través de IRONSTICK.** Leer expedientes completos, trabajar cientos de documentos y redactar en varias rondas se ejecuta con la suscripción que ya paga por la aplicación de IA de escritorio. El mismo trabajo a través del chat integrado se factura por uso con su clave de API, lo que se acumula rápidamente en expedientes grandes.
- **Sesiones de trabajo más largas.** La IA de escritorio mantiene su propia conversación, mientras que el chat integrado solo arrastra la conversación reciente y un resumen, con un número limitado de rondas de herramientas por solicitud.
- **Respuestas más grandes por llamada.** Claude Desktop y ChatGPT Desktop reciben directamente respuestas de herramientas de hasta 40.000 caracteres; Qwen Desktop, Kimi Desktop y el chat integrado reciben hasta 10.000. Todo lo que sea mayor va, íntegro, al almacén temporal cifrado y se lee desde allí por partes.
- **El conjunto completo de herramientas, el texto completo.** La IA de escritorio trabaja con el conjunto completo de herramientas y lee los textos completos en su propia conversación, tras las mismas compuertas que el chat.
- **El chat conserva su lugar.** El chat integrado no necesita licencia adicional, está siempre a mano —también en la tableta— y es el canal más estrictamente controlado: seudonimizado, con consentimiento previo y registrado.

## 2. Un único conjunto de herramientas — dentro de la App cliente

Cada operación que una IA puede realizar reside en la App cliente de IRONSTICK en su ordenador —no en la IA, ni en el programa puente.
El chat de IA y cada IA de escritorio conectada llaman exactamente a las mismas herramientas. Cada llamada la ejecuta la aplicación en ejecución contra su base de datos en vivo, y a la IA solo vuelve el resultado.

- **Un único registro de herramientas.** El conjunto de herramientas lo construye un mismo módulo para el chat de IA y para el Bridge: las mismas herramientas, en el mismo orden, tras las mismas compuertas. Las herramientas están agrupadas en conjuntos por tema —caso, pruebas, plazos, leyes, cartas y correos electrónicos y más— que la IA abre según los necesita.
- **Una única vía.** Cada llamada a una herramienta, del chat o de una IA de escritorio, pasa por la misma capa de control: el símbolo de actividad en la barra de menús, la identificación de quien llama, las compuertas y la entrega de resultados grandes al almacén temporal. Cada IA de escritorio y cada servicio de API lleva su propio registro de lo que ha leído, de modo que la lectura de una nunca cuenta para otra.
- **Los datos permanecen en IRONSTICK.** Su expediente permanece en la base de datos de IRONSTICK en su ordenador. Una IA recibe solo lo que una herramienta devuelve para la llamada que realiza; IRONSTICK no le entrega ni la base de datos ni la carpeta de datos.
- **En vivo en cada llamada.** Las herramientas abren la base de datos en cada llamada. Un cambio que usted guarda es lo que ve la siguiente llamada a una herramienta.
- **Funciona en segundo plano.** Las herramientas se ejecutan en segundo plano dentro de la aplicación, de modo que el programa sigue respondiendo incluso durante lecturas largas de expedientes grandes.
- **La aplicación debe estar en ejecución.** Sin la aplicación en ejecución no hay herramientas: el programa puente solo transmite las llamadas y responde que IRONSTICK no se está ejecutando.
- **La aplicación debe estar desbloqueada.** Hasta que se haya introducido el código de seguridad de seis dígitos en la pantalla de inicio, cada llamada a una herramienta de una IA de escritorio recibe como respuesta el aviso de que la aplicación está bloqueada, y no se devuelve ningún dato. Introduzca el código en IRONSTICK y repita la solicitud.
- **El acceso lo concede usted.** El Bridge atiende a una IA de escritorio solo cuando el interruptor del conector está activado y esa IA de escritorio tiene licencia. El primer acceso a datos de cualquier IA de escritorio tras cada inicio del programa abre un único cuadro de diálogo de confirmación. Si usted lo aprueba, el acceso queda abierto para todas las IA de escritorio con licencia durante el resto de la ejecución del programa. Si lo rechaza, todas las llamadas de todas las IA de escritorio se rechazan durante 10 minutos, y el siguiente acceso después de ese plazo se lo vuelve a preguntar. Esta decisión no se guarda.

## 3. Las compuertas — qué ocurre en segundo plano

Entre la IA y sus registros hay compuertas integradas en la capa de herramientas de la App cliente. Son simple lógica de programa: ninguna IA comprueba a otra IA.
Cuando una compuerta rechaza una llamada, no se escribe ni se entrega nada; la IA recibe un mensaje que indica qué falta y la llamada que abre la compuerta.
La mayoría de las compuertas funcionan igual para el chat de IA y para cada IA de escritorio; la última columna indica dónde se aplica cada una.

| Compuerta | Cuándo se activa | Qué hace | Se aplica a |
| --- | --- | --- | --- |
| **Consentimiento antes de la IA externa** | La primera vez en una sesión de chat que una solicitud tiene que ir a un servicio de IA externo | Un cuadro de diálogo pregunta si se puede utilizar la IA externa. Si lo rechaza, no se envía nada, y el chat no vuelve a preguntar en esa sesión. | Chat de IA |
| **Seudonimización** | Cada solicitud del chat de IA a un servicio de IA externo | Los nombres, empresas, números de caso y de autos judiciales, números de identificación, IBAN, números de teléfono, direcciones de correo electrónico y direcciones de las partes salen como marcadores y se vuelven a traducir en su ordenador. Las fechas y los importes no se modifican. Si la lista de marcadores no puede construirse por completo, la solicitud no se envía. | Chat de IA |
| **Consentimiento de acceso a datos** | La primera llamada a una herramienta de cualquier IA de escritorio tras el inicio del programa | Aparece un único cuadro de diálogo de confirmación para todas las IA de escritorio. Aprobado: abierto durante el resto de la ejecución del programa. Rechazado: todas las llamadas se rechazan durante 10 minutos y después se le vuelve a preguntar. | Bridge |
| **Bloqueo de inicio** | Cada llamada a una herramienta mientras no se haya introducido el código de seguridad de seis dígitos | La llamada recibe como respuesta el aviso de que la aplicación está bloqueada; no se devuelve ningún dato. | Bridge |
| **Cerrojo de instrucciones** | Cada llamada a una herramienta de una IA de escritorio | Todas las herramientas, excepto leer las instrucciones, confirmarlas y pedir el idioma del sistema, permanecen cerradas hasta que la IA haya leído las instrucciones y devuelto palabra por palabra la regla contra los hechos inventados. La confirmación caduca 60 minutos después de darse, tras 2 horas sin ninguna llamada, a medianoche, en cada nueva conexión y, cuando IRONSTICK puede ver el registro de la conversación, cuando la IA de escritorio condensa su conversación; entonces la IA debe volver a leer y devolver palabra por palabra una regla elegida al azar. En el chat de IA las instrucciones se envían con cada solicitud. | Bridge |
| **Compuerta de fecha** | Herramientas que escriben contenido con fecha: cronología, calendario, notas diarias, diario diario, memoria, informes de normas y otras | La llamada se rechaza a menos que la IA haya obtenido la fecha y hora reales en los últimos 30 minutos. | Ambos |
| **Leer primero el caso** | Herramientas que leen el contenido de un caso (cronología, cronología, búsquedas, textos completos y más) y herramientas que escriben en un caso (notas, entradas de la cronología, comprobación del escrito, exportación, traspaso a otra IA) | Las herramientas que leen el contenido de un caso se rechazan hasta que la IA haya leído el resumen de ese caso. Una nota o una entrada de la cronología necesita además el perfil del caso, la jurisdicción y las entradas más recientes de la cronología. Una comprobación del escrito, una exportación o un traspaso necesita además que los documentos más recientes del caso se hayan leído íntegramente. El rechazo enumera lo que aún no se ha leído. | Ambos |
| **Escribir solo a partir de lo leído** | Entradas de memoria, cambios en un Snake, trabajo en borradores, la comprobación del escrito y la entrega en un caso | Una entrada de memoria para un caso solo se acepta cuando se ha leído el resumen y cada documento citado en ella se ha leído por completo en esta sesión. Cada resultado de búsqueda en un archivo temporal lleva el aviso de que los resultados de búsqueda no son lectura, con los documentos que hay detrás de los resultados y que aún no se han leído. Una vez que la IA ha abierto un documento de la parte contraria o de una autoridad en un caso, no se escribe nada más en ese caso hasta que ese documento se haya leído por completo. | Ambos |
| **Primero el Nucleu** | Redactar, comprobar y entregar un escrito | Rechazado hasta que se haya leído, en su versión actual, cada Nucleu vigente del caso: el Nucleu del caso y el Nucleu de cada hecho al que pertenece el caso. La última ronda de la comprobación del escrito compara el documento con el Nucleu. | Ambos |
| **Compuerta Snake** | En la comprobación del escrito, justo antes de la ronda del Nucleu, cuando el caso u otro caso de sus hechos tiene un Snake | La IA debe preguntarle si se ejecuta la ronda del Snake y continúa solo después de su respuesta —o de inmediato, si usted lo pidió al dar la orden. Si responde que sí, cada entrada del Snake debe resolverse como adoptada, rechazada o no relevante, con un motivo. | Ambos |
| **Primero la biblioteca jurídica** | Una búsqueda web o una solicitud de página web relativa a una ley (números de artículo o de apartado, nombres de códigos, números de ley, portales legislativos) | Rechazada hasta que la IA haya buscado esa norma en su biblioteca jurídica. Si la biblioteca la tiene, la web permanece cerrada para esa norma y la IA cita de la biblioteca. Solo cuando la biblioteca no tiene coincidencia se abre la web para esa norma, durante 15 minutos. | Ambos |
| **Comunicar fuentes legales — abiertas, no fragmentos** | Una búsqueda web relativa a una ley o una página de un portal legislativo abierta que proporciona una fuente legal, y cada comunicación de una nueva fuente legal | Cada respuesta posterior de una herramienta empieza con el recordatorio de comunicar la fuente, hasta que se comunique (hasta 15 minutos). Una comunicación solo se acepta para una página que la propia IA haya abierto con la herramienta de páginas de IRONSTICK en las últimas 24 horas. Las fuentes comunicadas esperan en un único cuadro de diálogo de consentimiento: las marcadas se obtienen, se comprueban y se guardan en la biblioteca; las no marcadas se rechazan. | Ambos |
| **Memoria solo con su aprobación** | La IA guarda, modifica o elimina una entrada de memoria | Un cuadro de diálogo le muestra la entrada. Solo se guarda, modifica o elimina cuando usted lo permite; las entradas rechazadas se descartan. Mientras el cuadro de diálogo está abierto, se rechaza cualquier otra llamada de esa sesión. Aparte de las tareas de traspaso entre IA y de sus propias notas, la IA lee únicamente las entradas de memoria que usted ha aprobado. | Ambos |
| **Propuestas en lugar de escrituras** | La IA quiere cambiar datos maestros, añadir una persona o una institución, añadir una relación, completar un análisis de persona, fusionar duplicados o eliminar un registro | La herramienta no escribe nada en sus registros. Coloca una propuesta en el Monitor de coherencia de datos, donde usted la acepta o la rechaza. | Ambos |
| **Documentos secretos excluidos** | Cada herramienta de IA que lee documentos, medios, plazos o un caso completo, y los servicios en segundo plano que usan IA externa (Monitor de coherencia de datos, informe de situación) | Las entradas marcadas como secretas se filtran de todas las herramientas y servicios de IA y no se pasan a la IA. | Ambos |
| **Perspectivas solo a partir del expediente judicial** | La evaluación del caso por IA, iniciada en la aplicación o por una IA de escritorio | La estimación de las perspectivas de éxito se basa únicamente en el perfil del caso y en los documentos del caso que fueron al tribunal o a la autoridad a la que se dirige el escrito inicial, o que procedían de ellos —de ambas partes, sin anexos. Sin escrito inicial o sin un tribunal o una autoridad reconocidos, las perspectivas se marcan como no estimables y el indicador permanece vacío. | Ambos |
| **Comprobación antes de la entrega** | Entrega de un documento formal, como un escrito | La entrega se rechaza sin un resultado positivo reciente de la comprobación determinista del escrito para exactamente este estado del expediente; cualquier edición lo anula. Lo que sale del sistema es una plantilla lista para presentar que usted revisa y firma. | Ambos |

Flujos de trabajo

## Flujo de trabajo 1 — Inicio del día

El inicio del día responde a tres preguntas antes de empezar: qué vence, qué ha llegado y dónde lo dejó.
Un solo paso genera el resumen de inicio de sesión con la fecha, los recordatorios, los plazos y las citas de los próximos tres días y las tareas abiertas. Después la IA obtiene la lista completa de plazos, las citas de hoy y lo que se registró hoy o ayer.
Úselo cada mañana, y siempre que inicie una nueva conversación con una IA de escritorio.

![Diagrama de flujo del inicio del día: iniciar IRONSTICK, aprobar el acceso a datos, instrucciones confirmadas, resumen de inicio de sesión, pregunta sobre resoluciones judiciales abiertas, y después plazos, citas y nuevas entradas](https://www.ironstick.legal/img/bridge/w1_flow.png)

Un solo paso genera el resumen de inicio de sesión; los plazos, las citas y las nuevas entradas siguen a petición.

### Paso 0 — establecer el contexto

- **Inicie y desbloquee IRONSTICK.** Las herramientas funcionan solo mientras la aplicación está en ejecución y después de haber introducido el código de seguridad de seis dígitos.
- **Su propio resumen en la aplicación.** En Windows, el primer inicio del día pregunta si IRONSTICK debe ponerle al día sobre la jornada. Si responde que sí, el resumen se muestra con filas en las que se puede hacer clic que llevan a los plazos, al calendario, al buzón, a los documentos y al caso, y además se lee en voz alta.
- **IA de escritorio: una conversación nueva.** Inicie una conversación nueva en su aplicación de IA de escritorio. Apruebe el cuadro de diálogo de acceso a datos que IRONSTICK muestra en el primer acceso de cualquier IA de escritorio tras el inicio del programa.
- **Chat de IA.** Abra el chat de IA en IRONSTICK; las instrucciones de trabajo se envían con cada solicitud.
- **No hace falta ningún caso.** El inicio del día abarca todos los clientes y casos. Abra un caso solo cuando su pregunta se refiera a ese caso.

### Qué dice usted — paso a paso

1. Inicia la sesión.

La IA lee y confirma sus instrucciones, fija la fecha de hoy y carga el resumen de inicio de sesión: recordatorios, plazos y citas de los próximos tres días, tareas abiertas.
2. ¿Qué vence hoy y en los próximos tres días?

Obtiene plazos, audiencias judiciales y citas por orden de fecha, cada uno con su caso.
3. ¿Qué ha llegado desde ayer?

Correos electrónicos nuevos y documentos recién registrados, cada uno con el caso al que se asignó.
4. Lee el nuevo correo electrónico del caso [número de caso] y dime qué me solicita.

Primero se lee el texto completo; usted recibe el contenido, los puntos abiertos y una sugerencia para el siguiente paso.
5. Escribe en el diario diario la llamada telefónica de hoy con [persona] sobre [asunto].

La entrada se añade al diario diario de hoy con fecha y hora.

### Qué ocurre en segundo plano

- **Compuertas antes de la primera herramienta.** Hasta que se introduce el código de seguridad, cada llamada a una herramienta de una IA de escritorio recibe como respuesta el aviso de que la aplicación está bloqueada. El primer acceso a datos de cualquier IA de escritorio tras el inicio del programa abre el cuadro de diálogo de consentimiento; si se aprueba, el acceso permanece abierto para todas las IA de escritorio durante el resto de la ejecución del programa. Antes de que se abra cualquier otra herramienta, la IA de escritorio debe leer las instrucciones de trabajo y devolver una regla palabra por palabra.
- **Inicio de sesión en un solo paso.** A través del Bridge, abrir el conjunto de herramientas de inicio de sesión genera el resumen de inicio de sesión. La fecha y la hora, el idioma del sistema y la pantalla que tiene abierta vuelven de inmediato; el resumen completo se deposita en el almacén temporal cifrado, donde la IA lo lee.
- **Qué contiene el resumen.** Recordatorios de memoria vencidos (hoy y atrasados), que la IA trata primero; para qué clientes tiene conocimiento la memoria de IA compartida; la única fecha de referencia; el idioma del sistema, que es el idioma de la conversación; la pantalla actual; la lista de los diez últimos diarios diarios; plazos y citas con vencimiento en tres días, como máximo diez líneas de cada uno; tareas abiertas dejadas por otra IA. Cada sección tiene un límite, y una sección limitada indica a la IA dónde obtener la versión completa.
- **Resoluciones judiciales pendientes.** En el primer inicio de sesión del día, cuando aún hay resoluciones judiciales sin evaluar, el resumen indica a la IA que le pregunte de inmediato si debe evaluarlas ahora. Sí: la IA las trabaja de una en una. No: continúa con su tarea.
- **La lista completa de plazos.** La lista de plazos devuelve todo lo que figura en la pantalla de plazos de IRONSTICK, ordenado por fecha: plazos en documentos, próximas audiencias judiciales de los portales de los tribunales y del calendario, y plazos que la IA fijó en sus propias notas de memoria, marcados como tales. Puede limitarse a críticos (vencidos y de hoy), próximos (hasta 10 días, incluidos los vencidos), hoy, esta semana, la próxima semana o una fecha. A través del Bridge, abrir el conjunto de herramientas de plazos devuelve la misma lista completa más las citas de hoy.
- **Citas.** La lista de citas muestra las citas de un día o periodo en este orden: audiencias judiciales de los portales de los tribunales, audiencias judiciales del calendario y, después, las demás entradas del calendario.
- **Qué ha llegado.** Dos listas muestran cada entrada registrada hoy o ayer en todos los clientes y casos; cuenta el día del registro, no la fecha del acontecimiento. A través del Bridge, abrir el conjunto de herramientas de correspondencia y correo electrónico enumera los documentos registrados hoy y los correos electrónicos recibidos hoy, hasta diez de cada uno.
- **El resumen del día para la IA.** La IA puede obtener el contenido del resumen del día con números de documento y marcas: plazos de los próximos 30 días, los críticos y los completados hoy, las fechas judiciales y citas de hoy, correo sin leer, documentos registrados hoy, las fechas judiciales de mañana, cumpleaños, casos que se han reavivado, estadísticas de la semana y el diario reciente de la IA. Una comprobación aparte registra para cada IA de escritorio si se le ha informado hoy; si no, devuelve los diarios diarios más recientes y registra que se le ha informado.
- **Lectura de un documento nuevo.** El lector de texto completo devuelve el texto completo extraído de una entrada. Las instrucciones de trabajo indican a la IA que un título o una fila de lista no prueba lo que documenta una entrada: antes de afirmar lo que dice una entrada, lee el texto completo en la sesión actual, y mantiene separado lo que documenta la fuente de lo que sugiere una parte o una inferencia.
- **Preguntas sobre un caso.** La cronología de un caso, sus plazos y su calendario son contenido del caso: se rechazan hasta que la IA haya leído el resumen de ese caso y después su memoria del caso. Las listas globales de todos los casos están abiertas sin ello. La cronología puede filtrarse por fecha; una fecha coincide con la fecha de la entrada o con la fecha del documento.
- **Ofrecimiento de mostrarlo en IRONSTICK.** Después de una lista de plazos o de citas, la IA puede ofrecerse a abrir la entrada en la ventana de IRONSTICK. Solo navega después de que usted esté de acuerdo, y solo cuando el control del programa está activado en la configuración de IA.

## Flujo de trabajo 2 — Reglas generales de conversación

Estas reglas se aplican a toda conversación con la IA, en el chat integrado y a través del Bridge: cómo empieza una sesión, qué idioma habla la IA, de dónde pueden proceder sus hechos y cómo comprueba usted sus fuentes.
Cada regla va acompañada de la frase que usted utiliza para aplicarla: instrucciones leídas y confirmadas, respuestas que nombran sus fuentes, textos completos leídos hasta el final antes de una respuesta.
Lea esto antes de su primera sesión de trabajo real; las mismas reglas sustentan todos los demás flujos de trabajo.

![Diagrama de flujo: inicio de sesión, confirmación de instrucciones, indicación del caso, lectura del resumen y de los textos completos hasta el final, respuesta con números de prueba, comprobación de las fuentes](https://www.ironstick.legal/img/bridge/w2_flow.png)

Una conversación fundamentada: la IA confirma sus instrucciones, lee cada documento hasta el final, responde con números de prueba y usted comprueba las fuentes por sí mismo.

### Paso 0 — establecer el contexto

- **Inicie primero IRONSTICK y desbloquéelo.** Sin la aplicación en ejecución, el Bridge responde que IRONSTICK no se está ejecutando; antes de introducir el código de seguridad de seis dígitos, cada llamada a una herramienta recibe como respuesta el aviso de que la aplicación está bloqueada.
- **Inicie la sesión.** En su IA de escritorio, empiece una conversación nueva y pídale que inicie la sesión. Abrir el conjunto de herramientas de inicio de sesión genera el resumen de inicio de sesión: la fecha, el idioma del sistema, la pantalla que tiene abierta, los recordatorios vencidos, las resoluciones judiciales abiertas por evaluar, los plazos y citas de los próximos tres días, los diez últimos diarios diarios y las tareas de traspaso abiertas.
- **Mire el símbolo de IA en la barra superior.** Su menú desplegable muestra, para una IA de escritorio, si las instrucciones están confirmadas (marca verde o cruz roja), cuántas veces se leyeron y cuántas infracciones de reglas se produjeron; para cada caso que la IA tocó muestra el perfil, la jurisdicción y el resumen como leídos o no leídos, y una barra de documentos leídos.
- **En el chat integrado** las instrucciones de trabajo forman parte de cada solicitud; no hay nada que confirmar. Antes de que la primera solicitud vaya a un servicio de IA externo, IRONSTICK pide su consentimiento.
- **Dé el asidero más preciso que tenga.** Un número de prueba vale más que un nombre, un nombre vale más que una palabra clave, y un número de caso indica a la IA qué caso debe leer.

Inicia la sesión. Después lee el resumen y la memoria del caso [número de caso] y dime qué está abierto.

### Las reglas — y qué dice usted para utilizarlas

1. Inicia la sesión.

Regla 1 — la IA lee y confirma sus instrucciones antes de tocar ningún dato del caso, y responde en el idioma de su sistema.
2. Cita la regla [número] de tus instrucciones.

Regla 2 — cada regla puede mostrarse palabra por palabra, de modo que usted puede exigírsela a la IA.
3. ¿Qué documento dice eso? Dame el número de prueba.

Regla 3 — cada afirmación lleva su fuente; un clic en el número abre el documento.
4. Lee [#número de prueba] completo antes de responder.

Regla 4 — los títulos y las descripciones breves no son hechos; la respuesta se basa en el texto completo.
5. Separa lo que está probado de lo que solo se sospecha.

Regla 5 — la IA marca las valoraciones y sospechas como tales y afirma solo lo que documentan las fuentes.
6. Lee el documento entero, no solo los resultados de la búsqueda.

Regla 6 — los documentos largos se leen hasta el final; la IA informa cuando se ha leído cada línea.

### Qué ocurre en segundo plano

- **Cerrojo de instrucciones (Bridge).** Hasta que la IA de escritorio haya leído las instrucciones de trabajo y devuelto palabra por palabra la regla contra los hechos inventados, se rechaza toda herramienta excepto leer las instrucciones, confirmarlas y pedir el idioma del sistema. La IA que leyó debe confirmar por sí misma; una confirmación dada en otra conversación no abre el cerrojo para ella.
- **Relectura.** La confirmación caduca 60 minutos después de darse, tras dos horas sin ninguna llamada, a medianoche y en cada nueva conexión; y, cuando IRONSTICK puede ver el registro de la conversación de la IA de escritorio, también cuando la IA de escritorio condensa esa conversación. Entonces la IA vuelve a leer y devuelve palabra por palabra una regla elegida al azar: una breve pausa, no un fallo.
- **Salvaguardas de las reglas.** La lógica del programa vigila los atajos, por ejemplo llamar a herramientas antes de leer las instrucciones o mover un archivo saltándose la vía de entrega. Cuando se detecta uno, se bloquean todas las herramientas y se indica el motivo; según el recuento, la IA recita la regla contra los hechos inventados o vuelve a leer las instrucciones y devuelve la regla que nombra el rechazo. El recuento es visible en el menú desplegable del símbolo de IA.
- **Un solo idioma de conversación.** La IA responde en el idioma del sistema de IRONSTICK durante toda la sesión, sea cual sea el idioma en que usted escriba. Los escritos, los correos electrónicos judiciales y las entradas de la cronología se redactan en el idioma de la jurisdicción del caso; el diario diario, en el idioma de la conversación.
- **Hechos de las herramientas, de esta sesión.** Las instrucciones permiten hechos del caso solo de las herramientas de IRONSTICK, obtenidos en la sesión actual: no de la memoria de la IA, de mensajes anteriores, de datos de entrenamiento, de archivos descargados ni de otro conector. Lo que no puede obtenerse se nombra como laguna, nunca se rellena por inferencia.
- **Primero investigar.** A la IA se le indica que nunca pregunte lo que las herramientas pueden responder: dado un número de caso, lee en lugar de preguntar a qué caso se refiere.
- **Los títulos y los resúmenes no son hechos.** Antes de que la IA afirme lo que documenta una entrada, debe leer el texto completo de la entrada en la sesión actual; lo que sugiere un título, una parte o una inferencia debe etiquetarse como sospecha. Una entrada sin texto extraído no da lugar a ninguna afirmación sustantiva.
- **Los resultados de búsqueda no son lectura.** Cada resultado de búsqueda dentro de un archivo temporal lleva el aviso de que los resultados no son lectura, con los documentos que hay detrás de los resultados y que aún no se han leído. En los volcados de casos, una advertencia de cobertura de lectura nombra cada archivo no leído hasta el final, con su porcentaje y los rangos de líneas no leídos; reaparece en respuestas posteriores hasta que se lean las lagunas.
- **El estado de lectura en las respuestas.** Cuando cambian las cifras de lectura, las respuestas de las herramientas llevan las mismas cifras que usted ve en el menú desplegable del símbolo de IA, con la instrucción de no llamar nunca a un caso, a sus pruebas o a su memoria plenamente leídos a menos que esas cifras lo muestren.
- **Leer primero el resumen y la memoria.** El contenido del caso está disponible solo después de haber leído el resumen del caso; para una tarea de caso, primero se lee la memoria completa del caso.
- **Solo cuenta la lectura propia.** Para la evaluación del caso, IRONSTICK comprueba cada lectura con el registro de la conversación de la propia IA de escritorio; lo que leen los agentes auxiliares no cuenta.
- **Fuentes que usted puede comprobar.** La IA nombra cada documento con su número de prueba. En el chat integrado, un número se convierte en enlace solo cuando esa entrada existe en sus registros y no está ni eliminada ni marcada como secreta; un clic la abre en la cronología del caso. Un número sin tal entrada permanece como texto simple. En una IA de escritorio, busque el número en IRONSTICK o pida a la IA que lea esa entrada completa.
- **Leyes de la biblioteca.** Las leyes se comprueban primero en su biblioteca jurídica; la web se abre para una norma solo cuando la biblioteca no tiene coincidencia, y solo cuentan como leídas las páginas abiertas con la herramienta de páginas de IRONSTICK.
- **Las escrituras con fecha necesitan la fecha de hoy.** Las herramientas que escriben contenido con fecha se rechazan a menos que la IA haya obtenido la fecha y hora reales en los últimos 30 minutos. En el Bridge las respuestas de la IA empiezan con esa fecha.
- **Tras una conversación larga.** Las lecturas siguen contando para su caso cuando la IA de escritorio condensa su conversación; el Nucleu de un caso debe volver a leerse. Para retomar un caso, la IA puede cargar el resumen, el Nucleu, la memoria del caso y los Snakes en un único archivo de trabajo.
- **Documentos grandes.** Las respuestas grandes de las herramientas van, íntegras, al almacén temporal cifrado y se leen por partes, con la cobertura de lectura registrada línea por línea.

## Flujo de trabajo 3 — Evaluación del caso

La evaluación del caso es la visión de analista sénior de la IA sobre un caso, guardada en IRONSTICK y mostrada en la pestaña de evaluación de IA del caso.
Las perspectivas de éxito se estiman únicamente a partir del expediente judicial: lo que fue al tribunal o a la autoridad a la que se dirige el escrito inicial, o procedía de ellos.
Las secciones descriptivas se basan en todo el archivo de IRONSTICK y en los casos vecinos del cliente.
Úsela cuando un caso ha avanzado, cuando la última evaluación es antigua o cuando quiere que una IA de escritorio haga una nueva evaluación con los mismos criterios que la aplicación.

![Diagrama de flujo de una nueva evaluación del caso por la IA: última evaluación y resumen, después seis etapas comprobadas desde el escrito inicial hasta la evaluación guardada, con la rama para un caso sin tribunal ni autoridad reconocidos](https://www.ironstick.legal/img/bridge/w3_flow.png)

Una nueva evaluación del caso recorre seis etapas, y IRONSTICK comprueba cada etapa antes de entregar la siguiente.

### Paso 0 — establecer el contexto

- **Abra el caso o nómbrelo.** Abra el caso en IRONSTICK: la IA puede ver qué pantalla y qué caso tiene abiertos. También puede dar el número de caso; la IA encuentra el caso por su número.
- **El escrito inicial debe estar en el archivo.** El pronóstico necesita el documento que inició el procedimiento, por ejemplo la demanda, guardado con su texto extraído. También puede estar en otro caso del mismo cliente, como el caso del que se separó este.
- **El tribunal debe estar registrado.** IRONSTICK reconoce el tribunal o la autoridad solo si está registrado entre sus instituciones y su nombre aparece en la dirección del escrito inicial. Si falta, el indicador de éxito permanece vacío.
- **En la aplicación o por una IA de escritorio.** En la pestaña de evaluación de IA de la aplicación, solo pueden evaluarse los casos con el estado Activo. Una IA de escritorio puede evaluar cualquier caso, sea cual sea su estado e incluso cuando no ha llegado nada nuevo.

### Qué dice usted — paso a paso

1. Abre el caso [número de caso] y dame el estado de la última evaluación.

La IA carga el caso y resume la evaluación guardada, incluida su fecha.
2. Haz una nueva evaluación del caso [número de caso].

Se reúne el expediente judicial, se leen los documentos y la evaluación se redacta en etapas fijas; el resultado aparece en la pestaña de evaluación de IA.
3. ¿Por qué las perspectivas de éxito no son mayores?

Obtiene los puntos del expediente judicial que pesan en su contra, cada uno con su número de prueba.
4. ¿Qué documentos de mi archivo ayudarían pero aún no están ante el tribunal?

La IA compara todo su archivo con el expediente judicial y nombra lo que aún falta allí.
5. Ten en cuenta [#número de prueba] y evalúa de nuevo.

Su comentario se transmite y la evaluación se renueva con él.

### Qué ocurre en segundo plano

- **Primero la última evaluación.** El lector de evaluaciones devuelve la evaluación más reciente del caso. Su primera línea es la fecha, la antigüedad y si fue una evaluación completa o una actualización, y se indica a la IA que diga cuándo se hizo la última evaluación. Como toda herramienta que lee contenido de un caso, se rechaza hasta que la IA haya leído el resumen del caso y, después, la memoria del caso.
- **Una herramienta, seis etapas.** Una IA de escritorio hace una nueva evaluación únicamente con la herramienta de evaluación específica. Cada llamada devuelve solo la etapa actual; la siguiente etapa se entrega solo después de que IRONSTICK haya comprobado la actual. No se puede omitir ninguna etapa. Si la aplicación está evaluando ese mismo caso en ese momento, la herramienta rechaza hasta que la aplicación haya terminado.
- **Etapa 1 — escrito inicial.** La IA lee los PDF del caso, empezando por el más antiguo, e informa del escrito inicial como seguro, incierto o «ninguno encontrado». Se comprueba: cada documento comunicado pertenece a este cliente y se leyó por completo en esta sesión; «ninguno encontrado» solo se acepta cuando se han leído por completo todos los PDF del caso. Un documento comunicado como seguro se guarda para evaluaciones posteriores.
- **Compuerta: expediente judicial.** IRONSTICK busca un tribunal o una autoridad registrados entre sus instituciones en la dirección del encabezamiento de la primera página del escrito inicial, o como destinatario en esa página. El expediente judicial consta entonces del escrito inicial y de cada documento entrante y saliente del caso cuya contraparte sea ese tribunal o esa autoridad —de ambas partes, sin anexos y sin entradas secretas o eliminadas.
- **Etapa 2 — estado del expediente judicial y pronóstico.** La IA debe leer por sí misma cada documento del expediente judicial por completo y después entregar la sección de pronóstico: un porcentaje, su banda (claramente perdido, más bien perdido, abierto, más bien ganado, claramente ganado), el estado del expediente judicial, el estado de las pruebas, la pretensión principal, las demás pretensiones, el cambio respecto al pronóstico anterior y el motivo. Se comprueba: cada documento del expediente judicial leído; el porcentaje está dentro de su banda; está presente cada línea; el estado del expediente judicial y el motivo citan solo documentos del expediente judicial; estas líneas están escritas en el idioma del sistema; un cambio de más de 10 puntos respecto al pronóstico anterior nombra los nuevos documentos que lo justifican.
- **Sin expediente judicial — qué le dice la IA.** Sin escrito inicial, o sin un tribunal o una autoridad reconocidos en su dirección, no hay expediente judicial. IRONSTICK indica entonces a la IA que le informe de inmediato, en el idioma de la conversación y antes de continuar, de que no se hace ningún pronóstico y de que el indicador de éxito permanece vacío —nombrando el motivo y, si lo hay, el escrito inicial. La etapa pasa entonces solo con el caso, y el estado del expediente de IRONSTICK ocupa el lugar del pronóstico.
- **Etapas 3 y 4 — lectura.** La etapa 3 enumera los PDF entrantes y salientes más recientes del caso y el escrito inicial guardado; la etapa 4 enumera cada documento de los demás casos del cliente que está vinculado a este caso. Cada uno debe leerse por completo; los resúmenes, los títulos y los resultados de búsqueda no son lectura. Un resultado que fue al almacén temporal cuenta solo cuando se han leído todas sus partes.
- **Estado de lectura.** IRONSTICK lleva un libro de lectura por caso: cuántos documentos del caso ha leído la IA por completo, y si ha leído el resumen y la memoria del caso. Son las mismas cifras que usted ve, y acompañan a las respuestas siempre que cambian. Se indica a la IA que son la única base válida para cualquier afirmación sobre lo que ha leído, y que solo puede llamar «plenamente leído» a un caso o a sus documentos cuando las cifras lo muestran.
- **Solo cuenta la lectura propia de la IA.** IRONSTICK comprueba cada lectura con el registro de la conversación de esa IA de escritorio; lo que leen los subagentes o los agentes paralelos no se cuenta. Cuando el registro de la conversación de una conexión no puede verse, la respuesta lo indica, y se indica a la IA que le informe de que esta comprobación no fue posible.
- **Etapa 5 — resumen de hechos.** La IA entrega su resumen con los encabezados hechos centrales, hechos documentados y citas clave, contradicciones, lagunas y plazos incumplidos, referencias entre casos y los destinatarios. Se comprueba: cada encabezado está presente y completado; los hechos centrales citan documentos; se nombra cada caso vecino; cada documento citado se leyó por completo.
- **Etapa 6 — redacción.** Solo ahora recibe la IA las reglas de redacción. Las secciones son fundamento, estado del expediente de IRONSTICK, nota crítica, fortalezas, riesgos, interconexión entre casos y, cuando IRONSTICK encontró casos relacionados de otros clientes, esos casos como última sección. El estado del expediente de IRONSTICK se apoya en el resumen de cada documento, y la IA lee por completo cualquier documento que importe. Se comprueba: las secciones y su orden; el fundamento nombra el escrito inicial; como máximo seis puntos en cada una de fortalezas y riesgos; cada documento citado existe en los archivos de este cliente o en el material, no es secreto ni está eliminado y se leyó por completo; la sección entre casos nombra cada caso vecino.
- **Rechazo.** Cuando falla una comprobación, la respuesta empieza con REJECTED y una lista numerada de errores. Nada avanza y nada se guarda; la IA corrige exactamente esos puntos y vuelve a llamar. Una parte entregada en la etapa equivocada se rechaza. La IA puede reiniciar la cadena en la etapa 1 con material nuevo, y un reinicio de la aplicación también la reinicia.
- **Guardado.** Cuando se acepta la etapa 6, IRONSTICK inserta el pronóstico de la etapa 2 después del fundamento, donde hay expediente judicial, y guarda la evaluación como una nueva evaluación completa. A continuación muestra el caso en su pestaña de evaluación de IA, y se indica a la IA que le diga que la nueva evaluación está guardada.
- **En la pestaña de evaluación de IA.** El estado del expediente judicial figura junto al indicador de éxito con la banda, el estado de las pruebas, la pretensión principal y las demás pretensiones. Sin expediente judicial, el estado del expediente de IRONSTICK pasa al segundo lugar y el indicador a su lado permanece vacío.
- **La evaluación en la aplicación.** En la propia pestaña usted solicita una evaluación para un caso activo. La pestaña pide consentimiento antes de usar un servicio de IA externo; la ejecución continúa entonces en segundo plano, incluso si usted cambia de pestaña o de pantalla, a través del reconocimiento de texto de los documentos nuevos, la investigación, la redacción y el pronóstico. Una evaluación existente puede actualizarse en el plazo de un día después de la última reevaluación completa, como máximo tres veces seguidas. Cuando no ha llegado nada nuevo desde la última evaluación, la reevaluación solo se abre después de que usted escriba un comentario de al menos tres palabras en el campo de objeciones.

## Flujo de trabajo 4 — Crear un Nucleu

Un Nucleu es la dirección vinculante de un caso: la línea central de argumentación, los hechos y las pruebas rectores, lo que debe decirse y lo que nunca debe decirse.
Existe en dos niveles —una vez para todo un hecho (grupo de casos), que se aplica a todos los casos que contiene, y una vez para el caso individual— y todo documento que la IA redacta para el caso queda subordinado a él.
El mejor momento para crearlo es justo después de una evaluación del caso, mientras todo el caso sigue en el contexto de trabajo de la IA.
La IA lo redacta, IRONSTICK le muestra cada cambio y solo su aprobación lo guarda como una nueva versión.

![Diagrama de flujo: tras la evaluación del caso usted encarga un Nucleu para un hecho o para un caso individual; la IA lo redacta dentro de los 20.000 caracteres y lo propone; usted acepta o rechaza el cambio en la ventana de revisión; un cambio aceptado se guarda como una nueva versión, que la IA debe leer antes de cada escrito y con la que la última ronda de la cadena de revisión contrasta el documento.](https://www.ironstick.legal/img/bridge/w4_flow.png)

La IA redacta y propone, usted acepta; cada cambio aceptado se convierte en una nueva versión que dirige todos los escritos posteriores.

### Paso 0 — fijar el contexto

- **Elija el momento.** Pida el Nucleu justo después de una evaluación del caso. En la evaluación, la IA lee el resumen, los textos completos, la memoria del caso y cualquier Nucleu y snake existentes; mientras todo esto sigue en su contexto de trabajo, la dirección puede destilarse de todo el caso en lugar de unos pocos documentos.
- **Elija el nivel.** Un *Nucleu del hecho* pertenece a un hecho (un grupo de casos en la lista de casos) y se aplica a todos los casos que contiene. Un *Nucleu del caso* se aplica a un solo caso y ajusta la dirección para ese caso. Un caso se rige por su propio Nucleu y por el Nucleu de cada hecho al que pertenece, por lo que el Nucleu del caso no debe contradecir la línea del hecho.
- **Dónde encontrarlo.** En la pantalla del caso, la pestaña con el símbolo del átomo (*Nucleu del caso*) contiene arriba el Nucleu del caso, editable, y debajo, en solo lectura, el Nucleu de cada hecho al que pertenece el caso. En la lista de casos, el botón del átomo en la barra de título de un hecho abre su Nucleu del hecho. Cada Nucleu lleva su identificador, por ejemplo *#KI00041 · v3*; un clic lo copia, de modo que puede pegarlo en el chat.
- **Qué debe contener.** La dirección y nada más: la tesis rectora, el lugar del caso en el conflicto más amplio, las partes, las tesis de la parte contraria y las respuestas a ellas, cómo deben valorarse las pruebas futuras y las líneas que no deben traspasarse. Los hechos entran como historia documentada; el estado actual del caso se lee cada vez del resumen.
- **Qué no debe contener.** Los recordatorios, notas, tareas pendientes, el historial de sesiones, las preguntas abiertas y las reflexiones de trabajo pertenecen a la memoria del caso. Las declaraciones falsas de la parte contraria y sus contradicciones pertenecen al snake.
- **Tamaño.** Como máximo 20.000 caracteres por Nucleu. El contador junto al texto muestra la longitud y se pone en rojo al superar el límite. Si la dirección necesita más espacio, mantenga la línea común en el Nucleu del hecho y ponga lo específico de cada caso en el Nucleu de ese caso, con el mismo límite.
- **Escribirlo usted mismo.** También puede escribir o corregir un Nucleu directamente en la pestaña o en la ventana del hecho y pulsar *Guardar*; cada guardado es una nueva versión.

### Qué dice usted — paso a paso

1. Crea el Nucleu del caso [número de caso] a partir de esta evaluación.

La IA destila la dirección del caso que acaba de leer y abre su propuesta en la pestaña *Nucleu del caso*, donde usted la acepta o la rechaza.
2. Crea un Nucleu para el hecho [hecho]: la línea central que se aplica a todos los casos que contiene.

La IA redacta el Nucleu del hecho y lo muestra en la ventana del hecho; una vez aceptado, se aplica a todos los casos del hecho y aparece en solo lectura en cada uno de ellos.
3. ¿Qué extensión tienen los Nucleu del caso [número de caso] y qué podría pasar al Nucleu del hecho?

La IA lee el Nucleu del caso y cada Nucleu del hecho del caso y mide cada uno frente al límite de 20.000 caracteres.
4. Actualiza el Nucleu del caso [número de caso]: ya no argumentamos [punto].

La IA explica en el chat qué quiere cambiar y por qué, y luego propone solo los pasajes modificados; usted los ve en negrita roja, y un cambio aceptado se convierte en la siguiente versión.
5. Léeme el Nucleu vigente del caso [número de caso], con el Nucleu de cada hecho.

La IA carga el conjunto completo en sus versiones actuales, cada uno con su identificador, por ejemplo #KI00041 · v3.
6. ¿Contradice este borrador el Nucleu?

La IA compara el borrador punto por punto con cada Nucleu aplicable al caso y nombra cada desviación; en un escrito, esta comparación es la última ronda de la cadena de revisión.

### Qué ocurre en segundo plano

- **Una sola vía de escritura, con su aprobación.** La IA propone un Nucleu con una única herramienta específica: la primera versión de un Nucleu del caso por el caso, la primera versión de un Nucleu del hecho por el hecho (tomado de la lista de hechos), cada cambio posterior por el número del Nucleu. Los cambios dentro del texto entran como sustituciones puntuales; a la IA se le indica que nunca vuelva a escribir el Nucleu entero y que explique en el chat qué quiere cambiar y por qué antes de proponerlo.
- **La ventana de revisión.** Para un Nucleu del caso, IRONSTICK abre el caso en la pestaña *Nucleu del caso*; para un Nucleu del hecho, la ventana aparece sobre la pantalla actual. Muestra el texto completo con cada cambio en negrita roja, las supresiones tachadas y los botones *Rechazar* y *Aceptar*. Solo hay una revisión de Nucleu abierta a la vez. Si tarda más de aproximadamente un minuto, se le indica a la IA que la revisión sigue abierta y no la vuelve a enviar; su aprobación posterior sigue guardando la versión.
- **Control de tamaño.** Una propuesta de más de 20.000 caracteres se rechaza antes de llegar a usted, con la instrucción de ceñirse al Nucleu rector y de colocar la dirección específica del caso en el Nucleu del caso o la dirección común en el Nucleu del hecho.
- **Fecha actual.** Como toda escritura con fecha, una propuesta de Nucleu exige la fecha actual obtenida en los últimos 30 minutos.
- **Versiones, nunca sobrescritas.** Cada propuesta aceptada y cada guardado en la pestaña se almacena como una fila nueva con el siguiente número de versión; el número *#KIxxxxx* es el mismo en todas las versiones y la versión más alta es la vigente. Un texto sin cambios no crea una nueva versión. Cuando se elimina un hecho, su Nucleu se oculta y sus versiones se conservan.
- **Cómo lo lee la IA.** Una sola llamada con el caso devuelve el conjunto completo: el Nucleu del caso y el Nucleu de cada hecho del caso, cada uno con su encabezado *#KIxxxxx · vN*, íntegro, y nombra los niveles que aún no tienen ninguno. El Nucleu figura además al principio del todo del resumen del caso, del informe del caso y del paquete de reanudación. Una lista de inventario muestra cada Nucleu sin textos completos; al abrir el conjunto de herramientas de instrucciones de IA se muestra el inventario de Nucleu del caso que tiene abierto.
- **Volver a leer tras cada cambio.** IRONSTICK registra qué versión de cada Nucleu ha leído la IA. Una versión nueva, o que la IA de escritorio condense su conversación, anula la lectura anterior.
- **Dónde surte efecto.** El Nucleu dirige cada escrito a través del [Flujo de trabajo 6 — Redactar un escrito](#w6). Allí, la compuerta del Nucleu rechaza redactar, comprobar y entregar un documento del caso hasta que cada Nucleu aplicable —el Nucleu del caso y cada Nucleu del hecho— se haya leído en su versión actual; el formato de documento vinculante tampoco se sirve hasta que se haya leído cada Nucleu del caso. Al final de la cadena de revisión llega la ronda del Nucleu: el documento se compara con el Nucleu punto por punto, cada desviación se corrige o se resuelve, una contradicción nunca puede rechazarse y la que no pueda eliminarse se marca como conflicto. Un conflicto detiene el trabajo en ese documento hasta que se le haya advertido en detalle y usted haya decidido si se corrige el documento o se mantiene la desviación.
- **En la evaluación del caso.** Cuando se ejecuta una evaluación, los Nucleu existentes del caso forman parte de su contexto como dirección vinculante, citados por su identificador.

## Flujo de trabajo 5 — Construir el snake

El snake es el registro de las declaraciones de la parte contraria probadas como falsas, y de sus contradicciones, en un caso. Cada entrada fija el lugar de la declaración —documento, fecha, caso y página— y enumera todos los documentos que la refutan.
Se construye de dos maneras: mediante una investigación dirigida en uno o varios casos, o en documentos que usted nombre; o en medio de cualquier conversación, en el momento en que aparece una contradicción o una declaración falsa de la parte contraria.
IRONSTICK comprueba cada línea con sus registros, usted aprueba cada versión y en cada escrito posterior las entradas del snake se ofrecen como argumentos contra la parte contraria.

![Diagrama de flujo: un encargo de investigación o una contradicción hallada en una conversación lleva a la IA a leer el caso y el snake vigente; si el punto ya está registrado se amplía la entrada, y si no se escribe una nueva; el texto completo del snake se propone, se comprueba línea por línea con los registros y se le muestra a usted; un cambio aceptado se guarda como una nueva versión, se muestra en el caso y en su hecho y se utiliza en la ronda del snake de la cadena de revisión.](https://www.ironstick.legal/img/bridge/w5_flow.png)

Del hallazgo a la entrada guardada: leer primero, nunca registrar dos veces, cada línea comprobada con los registros, su aprobación para cada versión.

### Paso 0 — fijar el contexto

- **Investigación dirigida.** Nombre los casos, o los documentos, en los que la IA debe buscar declaraciones de la parte contraria que los registros refuten. Un buen momento es justo después de una evaluación del caso o de una lectura completa del caso, mientras los expedientes siguen en el contexto de trabajo de la IA. Pídale que eche la red con amplitud; el snake contiene solo lo que los documentos prueban.
- **Durante cualquier conversación.** Cuando surja una contradicción o una declaración falsa de la parte contraria mientras trabaja en otra cosa, dígale a la IA que la añada al snake si todavía no está. Comprueba primero el snake vigente y amplía una entrada existente en lugar de registrar el punto dos veces.
- **Un snake por caso.** Un snake pertenece a un solo caso. Un hecho no tiene snake propio; muestra los snakes de todos sus casos.
- **Dónde encontrarlo.** En la pantalla del caso, la pestaña con el símbolo de la serpiente a la derecha de la pestaña del Nucleu (*Snake del caso*) contiene el snake de ese caso con su identificador, por ejemplo *#SN00004 · v2*, y un contador de caracteres. En la lista de casos, el botón del snake en la barra de título de un hecho abre *Snakes del hecho*: los snakes de todos sus casos en el orden de la lista; al hacer clic en un caso, este se abre en la pestaña *Snake del caso*.
- **Tamaño.** Como máximo 20.000 caracteres por snake de caso. El contador se pone en rojo al superar el límite. Limite cada entrada al lugar, una breve descripción y sus líneas de referencia.
- **Qué debe contener.** Solo las declaraciones de la parte contraria probadas como falsas, y sus contradicciones. Las sospechas, la estrategia y los recordatorios no pertenecen a él; los recordatorios van a la memoria del caso, y las declaraciones falsas de la parte contraria van solo al snake, nunca a la memoria.

**El formato de las entradas.** Las entradas se separan con una línea vacía. La primera línea es el lugar de la declaración; luego la descripción; luego cada documento conectado en su propia línea, comenzando con una flecha:

`#0004417 · 12.10.2026 · CaseID 19 · p. 2 arriba`

`Escrito de contestación en apelación, parte contraria B: los tribunales ya han decidido con efecto firme la titularidad de las instalaciones. Falso: ambas sentencias dejan expresamente la titularidad al procedimiento principal, y la parte contraria B dijo lo mismo en la vista anterior.`

`→ #0003304 · 18.07.2026 · CaseID 19 · p. 5 centro`

`→ #0000586 · 25.04.2026 · CaseID 8 · p. 9 arriba`

`→ #0001127 · 24.06.2026 · CaseID 8 · p. 15 abajo`

Cada línea de referencia se lee así: número de prueba de siete dígitos · la fecha del documento tal como la registra IRONSTICK (DD.MM.AAAA) · el CaseID de ese documento · la página y la posición en ella (arriba, centro o abajo, en cualquiera de los idiomas del sistema), o un guion para pruebas sin páginas. Cuando una declaración falsa o una contradicción se extiende a varios documentos, cada uno de ellos recibe su propia línea de referencia: la declaración, la contradeclaración y cada prueba intermedia. También puede escribir o corregir entradas usted mismo en la pestaña y pulsar *Guardar*; cada guardado es una nueva versión.

### Qué dice usted — paso a paso

1. Construye el snake del caso [número de caso] a partir del expediente completo.

La IA lee el caso y todos los documentos que refutan a la parte contraria, y luego propone el snake en la pestaña *Snake del caso*, con cada línea comprobada con sus registros.
2. Busca en los documentos [números de prueba] declaraciones falsas de la parte contraria y añádelas al snake del caso [número de caso].

La IA lee exactamente estos documentos en su totalidad e introduce solo las declaraciones que sus registros refutan, cada una con sus documentos refutadores.
3. Construye los snakes de todos los casos del hecho [hecho]. Echa la red con amplitud.

La IA trabaja caso por caso, un snake por caso; la ventana del hecho los muestra después todos en el orden de la lista de casos.
4. ¿Está ya esta contradicción en el snake del caso [número de caso]?

La IA lee el snake vigente y le dice si el punto ya está registrado y en qué entrada.
5. Añade al snake esta contradicción de la parte contraria si todavía no está.

La IA lee el snake vigente, amplía la entrada existente o escribe una nueva con cada documento refutador como línea propia, y le muestra el cambio para que lo acepte.
6. ¿Qué snakes tenemos del cliente [cliente]?

La IA enumera cada snake de los casos del cliente con su identificador, versión y número de entradas.

### Qué ocurre en segundo plano

- **Leer primero.** Si el caso ya tiene un snake, un cambio se acepta solo después de que la IA haya leído su versión actual en esta sesión, y de nuevo cuando la IA de escritorio haya condensado su conversación. Un caso sin snake admite directamente sus primeras entradas. A la IA se le indica que compruebe que el punto no está ya registrado y que amplíe la entrada existente en lugar de introducirlo dos veces.
- **Escribir solo a partir de lo leído.** Una vez que la IA ha abierto un documento de la parte contraria o de una autoridad en el caso, se rechaza un cambio en el snake hasta que ese documento se haya leído por completo.
- **El texto completo, cada vez.** La IA propone el snake completo, incluida su adición; las escrituras parciales (añadir al final o sustituciones puntuales) se rechazan, de modo que cada propuesta se hace con todo el registro a la vista. Una propuesta de más de 20.000 caracteres se rechaza antes de llegar a usted.
- **Cada línea comprobada con los registros.** Antes de mostrar la propuesta, IRONSTICK comprueba cada entrada: la primera línea en la forma exigida, una descripción, al menos una línea de referencia, ninguna descripción después de las líneas de referencia; y, para cada línea de referencia, que la prueba existe, pertenece al CaseID indicado, lleva exactamente esa fecha de documento, pertenece al mismo cliente que el caso y que la página se encuentra dentro del PDF almacenado. Ante cualquier error no se propone nada; la IA recibe la lista de errores, entrada por entrada, y los corrige.
- **La ventana de revisión.** IRONSTICK abre el caso en la pestaña *Snake del caso* y muestra el texto completo con cada cambio en negrita roja, con los botones *Rechazar* y *Aceptar*. Si tarda más de aproximadamente un minuto, se le indica a la IA que la revisión sigue abierta y no la vuelve a enviar; su aprobación posterior sigue guardando la versión.
- **Versiones, nunca sobrescritas.** Cada propuesta aceptada y cada guardado en la pestaña se convierte en una nueva versión bajo el mismo número *#SNxxxxx*; un texto sin cambios no crea una nueva versión.
- **Cómo lo lee la IA.** La IA puede leer el snake de un caso, los snakes de todos los casos de un hecho en el orden de la lista de casos, los snakes de todos los casos de un cliente o un snake por su número —cada bloque encabezado con *#SNxxxxx · vN* y su caso—. Una lista de inventario muestra cada snake con su número de entradas, sin textos completos. El paquete de reanudación de un caso y la evaluación del caso incorporan también el snake.
- **Dónde surte efecto.** El snake actúa a través de la compuerta del snake en el [Flujo de trabajo 6 — Redactar un escrito](#w6). Cuando existen snakes para el caso —el propio o los de los demás casos de sus hechos—, la IA le plantea la pregunta fija *¿Desea la compuerta Snake?*, salvo que usted ya haya dicho *con compuerta snake*, o haya renunciado a la ronda, con sus propias palabras. Tras su sí llega la ronda del snake de la cadena de revisión, antes de la ronda final del Nucleu: la IA lee por completo el snake del caso y los snakes de los demás casos de sus hechos, vuelve a leer el borrador y resuelve cada entrada del snake en un archivo de resultados como incorporada (con el lugar en el documento), rechazada o no pertinente, cada una con un motivo. Una entrada se rechaza si ella, o su redacción, pudiera volverse contra el cliente. *Ya utilizada* o *ya conocida por el tribunal* no se acepta como motivo: las entradas son argumentos que han de repetirse en cada documento en el que encajen. La ronda se acepta solo cuando cada entrada está resuelta, los snakes y el borrador se leyeron después del encargo y el borrador se modificó realmente dondequiera que se incorporó una entrada.

## Flujo de trabajo 6 — Redactar un escrito

Este flujo de trabajo le lleva desde una petición en palabras sencillas hasta una plantilla lista para presentar en el procesador de textos: un escrito, una solicitud a un tribunal o autoridad, o una carta.
La IA lee el caso antes de redactar, construye el documento en su almacén temporal cifrado, hace comprobar con sus registros cada hecho, cita, norma y parte, recorre una cadena de revisión fija y le consulta en cada punto de decisión.
Úselo siempre que algo vaya a salir de su despacho por escrito. Lo que sale de IRONSTICK es siempre una plantilla para que usted la revise, la firme y la envíe por sí mismo.

![Diagrama de flujo: desde el encargo, pasando por la lectura, el formato, el borrador, la verificación, el resumen, la cadena de revisión y las rondas del snake y del Nucleu, hasta la entrega y el cierre](https://www.ironstick.legal/img/bridge/w6_flow.png)

Desde su encargo hasta la plantilla en el procesador de textos: la IA lee, redacta y verifica; usted decide en cada paso dibujado en blanco sobre negro.

### Paso 0 — fijar el contexto

- **Nombre el caso.** En el chat integrado, abra el caso y elija *Redactar texto* › *Con ayuda de la IA*: el chat se abre con ese caso; desde una entrada de la cronología el documento ya está nombrado. Con una IA de escritorio, indique el número de caso en su primer mensaje; la IA también puede preguntar a IRONSTICK qué pantalla y qué caso tiene abiertos.
- **El caso necesita su país.** La ley, el idioma y la fecha del documento proceden de la jurisdicción fijada en el caso. Si no hay jurisdicción fijada, el formato del documento se rechaza con la petición de fijarla primero.
- **Use el modelo más potente de su IA de escritorio.** Para redactar, a la IA se le indica que recomiende el nivel de modelo más potente antes de empezar y uno más ligero de nuevo tras la entrega. La aplicación de IA de escritorio solo cambia por su mano; el chat integrado cambia por sí mismo.
- **Agrupe su primer mensaje.** Caso, tipo de documento, lo que quiere conseguir, los números de prueba en los que se basa, tono y extensión, y un escrito anterior cuyo encabezamiento funcionó. Los documentos fundamentan un escrito; los adjetivos no.
- **Diga de antemano qué quiere de las rondas de revisión.** Expresiones como *con compuerta snake* o *sin snake ni Nucleu* en su propio mensaje son reconocidas por IRONSTICK; la IA entonces no pregunta por esas rondas para este documento. El texto pegado no cuenta como palabras suyas.

Redacta la réplica al escrito de contestación #0004127 en el caso [número de caso], basada en #0003310 y #0003318, breve y objetiva, con el mismo encabezamiento que el recurso del 12 de mayo, con compuerta snake.

### Qué dice usted — paso a paso

1. Redacta una réplica a [#número de prueba] en el caso [número de caso]. Objetivo: [objetivo].

La IA lee el caso, el Nucleu del hecho y del caso, y el documento al que usted responde, y luego redacta en su almacén temporal.
2. Utiliza [#números de prueba] como prueba. Tono: [factual / firme].

Sus instrucciones se incorporan al borrador; cada documento citado se lee por completo.
3. Sin correcciones — continúa.

Se ejecuta la cadena de revisión: nueva lectura, cotejo con sus escritos anteriores, ataque desde la parte contraria, ronda del snake, comprobación del Nucleu.
4. Cambia el punto [número]: [su corrección].

El borrador se corrige y se vuelve a comprobar antes de continuar.
5. Entrégalo.

El documento aparece en la ventana de descarga; llévelo al procesador de textos, fírmelo y envíelo usted mismo.

### Qué ocurre en segundo plano

- **Jurisdicción e idioma.** La IA determina la jurisdicción a partir del caso antes de cualquier trabajo jurídico. Le habla en el idioma del sistema de IRONSTICK; el documento se redacta en el idioma oficial del país del caso, y el formato lleva el número del caso y la fecha de hoy.
- **Leer el caso antes de redactar.** Las herramientas que escriben en un caso se rechazan hasta que la IA haya leído el resumen del caso; un escrito exige además haber leído por completo los documentos más recientes del caso. El rechazo enumera lo que aún no se ha leído.
- **Compuerta de inicio del formato.** El formato de documento vinculante (según el tipo de documento: escrito o carta, con representación de abogado o sin ella) solo se sirve después de que la IA haya leído el resumen completo, cada documento saliente del cliente en ese caso íntegramente, el documento al que responde el escrito íntegramente, la memoria del caso y cada Nucleu del caso. Todo lo dirigido a un tribunal es un escrito, nunca una carta. Para un escrito, el formato aporta además un perfil del tribunal: los jueces y fiscales de ese tribunal hallados en sus expedientes.
- **Primero sus peticiones originales.** Cuando el escrito responde a un documento, la IA debe primero enumerar en el chat cada petición de la solicitud original del cliente en el caso, citada con su número de prueba, preguntarle si sigue siendo correcta y terminar su turno. El formato se sirve solo después de su respuesta. Si el propio documento abre el procedimiento, la IA lo dice en una frase y no pregunta nada.
- **Primero el Nucleu.** Redactar, comprobar y entregar se rechazan hasta que cada Nucleu vigente del caso —el Nucleu del caso y el Nucleu de cada hecho al que pertenece— se haya leído en su versión actual, de nuevo tras cada versión nueva y tras condensar la IA de escritorio su conversación.
- **Escribir solo a partir de lo leído.** Una vez que la IA ha abierto un documento de la parte contraria o de una autoridad en el caso, se rechaza el trabajo en un documento de ese caso hasta que ese documento se haya leído por completo. Un borrador que cita documentos que la IA no ha leído íntegramente queda bloqueado frente a cualquier cambio hasta que se lean; suprimir el pasaje citado no levanta el bloqueo.
- **La comprobación determinista del escrito.** Se ejecuta sobre el estado actual del archivo, sin IA, y comprueba: cada referencia de prueba y cada sello, y que cada documento citado o anexado se leyó para este documento; cada cita legal frente a la biblioteca jurídica verificada; cada cita literal frente a los textos completos del caso, los documentos recuperados y la biblioteca; los números de caso; los importes, que deben coincidir exactamente con la forma registrada; los nombres del cliente, de personas e instituciones letra por letra, incluidos los signos diacríticos; los IBAN y, como comprobación específica de cada país, los números de identificación personal rumanos (CNP) por suma de control y frente a los registros; que cada persona o empresa nombrada se leyó junto con sus conexiones; y el formato vinculante, incluida la lista de anexos. Cada hallazgo se marca como VERIFIED, UNVERIFIED o CONTRADICTED.
- **Leer antes de escribir, no después.** Una lectura hecha después del último cambio del borrador no cuenta para esa verificación: la IA debe leer primero, luego incorporarlo al texto y después verificar de nuevo.
- **Citas.** Una cita que no se encuentra en ninguna fuente bloquea la entrega; reformularla o quitar las comillas la mantiene bloqueada, y la única solución es la redacción exacta de la fuente. Una cita que desaparece del texto se le comunica a usted en la entrega.
- **Anexos.** Cada entrada de anexo debe llevar la referencia de prueba, el sello de presentación obtenido de IRONSTICK y el marcador de posición de la página. Un anexo sin archivo almacenado ni medio se señala para revisión. Un anexo que es un documento saliente o un escrito de la otra parte se señala con la instrucción de anexar en su lugar el documento original, si el escrito se adjuntó solo por una página del mismo; este aviso es una nota de revisión, no un bloqueo.
- **Los hallazgos abiertos vuelven a la IA.** Cada hallazgo de la comprobación se devuelve a la IA para que lo corrija, y la comprobación se ejecuta de nuevo sobre el nuevo estado. Las comprobaciones se cuentan por documento, a través de los números de versión: si siguen abiertos hallazgos tras la quinta comprobación, IRONSTICK le cede la decisión con un mensaje del sistema, y la IA informa de los hallazgos que no pudo fundamentar con sus registros, para que usted decida cómo proceder.
- **Primero el resumen.** Tras el primer OK, la cadena de revisión comienza con un resumen del documento para usted: destinatario y procedimiento, peticiones, estructura, hechos clave con sus pruebas, leyes citadas. La IA espera su respuesta; las correcciones se incorporan antes de que continúe la cadena.
- **La cadena de revisión.** Cada paso se comunica a la comprobación del escrito y se comprueba antes de que llegue el siguiente encargo: leer de nuevo todo el archivo; los escritos anteriores del propio cliente sobre los documentos citados, para que el cliente no contradiga sus propios escritos anteriores; una tabla de réplica que cubre cada pasaje del documento respondido; un ataque como parte contraria, escrito en un archivo aparte y resuelto punto por punto en el borrador; una valoración, resuelta del mismo modo. Un archivo cuenta como leído solo cuando cada línea se ha leído desde el encargo; se rechaza una ronda sin ningún hallazgo adoptado en la que la mayoría de los hallazgos se descartan por ya estar hechos.
- **Preguntas fijas.** Después vienen hasta dos preguntas fijas: la pregunta del Nucleu cuando el caso tiene un Nucleu, la pregunta del snake cuando existen snakes para él. La IA las formula palabra por palabra, una a una, y acepta solo un sí o un no de su propio mensaje. Un escrito nuevo sin versión anterior recibe la ronda del Nucleu sin la pregunta. Su respuesta se recuerda para todas las versiones del documento.
- **Ronda del snake.** Tras su sí, la IA lee los snakes del caso y de su hecho y registra, para cada entrada del snake, si se incorporó, se rechazó o no era pertinente, cada una con un motivo; una entrada se rechaza si pudiera volverse contra el cliente.
- **Ronda del Nucleu.** El documento se compara con el Nucleu punto por punto. Una contradicción no puede rechazarse: se corrige o se marca como conflicto. Un conflicto detiene el trabajo en ese documento; la IA debe advertirle en detalle y continuar solo tras su decisión de corregir el documento o de mantener la desviación.
- **Sus correcciones permanecen.** Sus propios mensajes se registran por documento. Una corrección suya que se incorporó y luego se eliminó de nuevo bloquea la cadena y la entrega. Un pasaje basado en sus propias palabras no puede suprimirse hasta que la IA se lo haya preguntado.
- **Un cambio reinicia la cadena.** Toda edición anula la última comprobación. Un cambio posterior a la cadena completada reinicia toda la cadena.
- **Una pregunta de entrega.** Al final, la IA nombra en tres líneas como máximo lo que la cadena cambió y pregunta una sola vez si puede entregar. La entrega se rechaza sin una comprobación positiva reciente para exactamente este estado del archivo y sin su sí.
- **Resoluciones judiciales abiertas.** Si hay resoluciones judiciales pendientes de evaluación, la IA le pregunta si desea evaluarlas ahora, para que sus resultados pasen al documento, o más tarde.
- **Entrega en el procesador de textos.** El archivo pasa únicamente por el diálogo de descarga de IRONSTICK: guárdelo, o pase el Markdown directamente al procesador de textos. Allí lo edita, añade el membrete, excluye páginas, coloca su firma y exporta un PDF o DOCX. Un archivo sin cambios ya entregado solo se repite a petición, sin un nuevo número de versión.
- **Tras la entrega.** La IA pregunta si el documento está terminado o necesita correcciones. Hasta que usted responda, la IA solo puede leer. Su corrección se adjunta a la versión entregada, que queda anulada, y para la corrección se crea la siguiente versión. Imprimir en el procesador de textos, o enviar el PDF para la comprobación del correo electrónico, cierra el documento.
- **El paquete de correo electrónico.** Un correo judicial se prepara solo para un PDF terminado: usted arrastra el PDF firmado al chat, la IA lo coteja con la última versión y solo un PDF coincidente abre el formato del correo —asunto, cuerpo con remitente, ID y número de expediente, lista de paquete y destinatario, como cuadros de copia—. Los escritos de gran tamaño se dividen en partes de unos diez megabytes en la pantalla de envío de correo, cada una con su correo de portada. IRONSTICK no envía nada; usted envía desde su propio programa de correo.

## Flujo de trabajo 7 — OSINT: investigar usted mismo a una persona o empresa

Use este flujo de trabajo cuando quiera saber quién es una parte: un adversario, un testigo, una empresa tras una dirección, las personas que rodean a una firma.
La IA ejecuta un procedimiento de investigación fijo a través de sus propios registros y de internet abierto, abre y lee las fuentes e introduce lo que pueda verificar como propuestas en el Monitor de coherencia de datos.
Nada pasa a formar parte de sus registros hasta que usted lo acepte allí. La investigación no necesita ningún caso: una parte puede investigarse por sí sola.

![Diagrama de flujo: usted nombra a la parte; la comprobación OSINT busca en sus registros y en la web; la IA lee cada hallazgo de prueba y abre los enlaces coincidentes; las comprobaciones antibot pasan a usted en la ventana del navegador de IRONSTICK; la compuerta OSINT comprueba la lista de verificación; los hallazgos verificados pasan como propuestas al Monitor de coherencia de datos, donde usted los acepta o rechaza; después se libera a la siguiente parte.](https://www.ironstick.legal/img/bridge/w7_flow.png)

Una parte cada vez: buscar, leer, verificar, proponer — y usted decide en el Monitor de coherencia de datos.

### Paso 0 — fijar el contexto

- **Tenga a mano los datos clave de la parte.** La comprobación OSINT necesita el nombre completo, el país y si se trata de una persona física o de una empresa; ciudad y distrito en la medida en que se conozcan. El país determina el idioma de los términos de búsqueda. Ciudad, distrito y país son además obligatorios para cada parte nueva que la IA proponga después.
- **No se requiere ningún caso.** La comprobación OSINT no toma número de caso. Si además quiere que la parte se vincule a un caso, dígalo: el vínculo es entonces una propuesta aparte.
- **Un registro existente ayuda.** Si la parte ya está en IRONSTICK, nómbrela o indique su número (por ejemplo @E0001234). La IA lee primero el registro; la comprobación OSINT también enumera por sí misma las entradas existentes con el mismo nombre.
- **¿Varios nombres?** Si tiene una lista (una lista de amigos, una lista de asistentes, un aviso legal) registrada como documento, pida a la IA que coteje primero la lista con todos los que hay en IRONSTICK y que investigue después solo los nombres que importan.
- **Sin la conversación con la IA.** En el análisis de persona de una persona, el botón *Investigación web* abre una investigación guiada propia: enlaces candidatos, resúmenes de páginas, una vista previa de los campos del análisis y el guardado en el análisis de la persona.

### Qué dice usted — paso a paso

1. Investiga a [nombre completo], [ciudad], [país] — persona física.

Primero se comprueban sus propios registros; después se abren y leen las fuentes de internet.
2. Investiga la empresa [nombre], [ciudad], [país].

El mismo procedimiento para una empresa, incluidos su número fiscal y su domicilio social.
3. ¿Existe una conexión entre [persona] y [persona]?

Se muestran las relaciones existentes; se buscan otras nuevas en sus registros y en las fuentes.
4. Muéstrame la fuente de [hallazgo].

Usted recibe el enlace o el número de prueba que hay detrás del hallazgo.
5. Introduce los hallazgos verificados como propuestas.

Los hallazgos llegan al Monitor de coherencia de datos; nada se guarda hasta que usted lo acepte allí.

### Qué ocurre en segundo plano

- **La comprobación OSINT.** La IA inicia la comprobación con nombre, ciudad, distrito, país y si la parte es una persona física o jurídica, y cada vez se ejecuta el mismo procedimiento. Internamente, el nombre se busca en texto completo en toda la base de datos (todos los clientes); por caso vuelven las 10 entradas de prueba más recientes con el párrafo de cada hallazgo, más cuántas más existen. En la web se ejecuta una lista fija de búsquedas: CV, Facebook, LinkedIn, Instagram, distrito, ciudad, escándalo, noticias, declaraciones de patrimonio y de intereses (cuando se publican), impuestos, empresas; para una empresa, el registro mercantil y la insolvencia sustituyen a las búsquedas personales. Los términos de búsqueda están en el idioma del país de la parte y se ejecutan en tres motores de búsqueda. Los enlaces y títulos vuelven sin duplicados. La búsqueda se ejecuta como un trabajo en segundo plano; mientras no ha terminado, la IA repite la llamada idéntica para seguir esperando. La comprobación en sí no escribe nada.
- **Primero las entradas existentes.** Si IRONSTICK ya contiene personas, empresas o instituciones que coinciden con el nombre, la primera respuesta las enumera íntegramente, la mejor coincidencia primero. La IA nombra la entrada que es esta parte, o "ninguna". Una entrada indicada recibe todos los hallazgos; para una IA de escritorio en el Bridge, una propuesta de crear de nuevo la misma parte se rechaza entonces.
- **Un perfil preparado, no uno verificado.** La respuesta lo dice expresamente: son probables los homónimos. Los enlaces cuyo resultado de búsqueda muestra el nombre completo son los enlaces coincidentes, ordenados de mejor a peor; los demás son opcionales; las páginas de inicio sin más se descartan. La tarea de la IA es leer cada hallazgo de prueba, abrir cada enlace coincidente y usar solo lo que la propia página abierta afirma, nunca solo un título.
- **Compuerta OSINT — una parte cada vez.** Para una IA de escritorio en el Bridge, el resultado termina con una lista de verificación, y la siguiente comprobación OSINT para otra parte se rechaza hasta que se haya completado:
	- abiertos los primeros 10 enlaces coincidentes (al menos el 20 % de ellos si eso es más);
	- leída cada entrada de prueba enumerada —un resultado desviado al almacén temporal cuenta solo si se lee hasta el final, una búsqueda dentro de él nunca cuenta—;
	- para una persona, cada página abierta que nombra a la persona y que acabó en el almacén temporal leída en sus hallazgos;
	- después, o bien una propuesta, o bien la declaración de que no se halló nada utilizable;
	- para una persona, también cada conexión con otras personas propuesta, o la declaración de que no hay ninguna.
Una página que nombra el nombre completo de la persona junto con la ciudad o el distrito no puede cerrarse como "nada utilizable" a menos que la IA la enumere como ya registrada o como homónimo. El rechazo nombra exactamente lo que falta. Las lecturas se contabilizan por sesión, de modo que la lectura de una sesión nunca cuenta para otra.
- **Persona nueva solo tras una comprobación OSINT completa.** Para una IA de escritorio en el Bridge, una propuesta de una nueva persona física se rechaza hasta que la comprobación OSINT de ese nombre se haya completado por entero. Ciudad, distrito y país son obligatorios para cada parte nueva y cada entrada de dirección. Por lo demás, una parte nueva necesita al menos dos campos de detalle además de su nombre. La dirección de una persona física se coteja con las direcciones de instituciones —la dirección de un empleador se rechaza como domicilio particular— y una empresa nueva necesita su número fiscal, salvo las asociaciones.
- **Abiertas, no fragmentos.** Las páginas web se abren y leen con la herramienta de páginas de IRONSTICK; los resultados de búsqueda son solo indicadores. Las páginas grandes se conservan íntegras en el almacén temporal cifrado y se leen desde allí. Los formularios de búsqueda y las tablas de datos que solo se rellenan tras un filtro pueden consultarse directamente. Una página abierta en la misma sesión se sirve de nuevo desde una copia durante 30 minutos. Un documento escaneado cuyo procesamiento tarda más se notifica como todavía no listo; el procesamiento continúa y la siguiente llamada devuelve el texto.
- **Las comprobaciones antibot y los inicios de sesión pasan a usted.** Cuando un sitio web muestra una comprobación antibot o bloquea el acceso automatizado, IRONSTICK abre la página en su propia ventana del navegador y la IA le pide que complete allí la comprobación. Después la IA lee la página en esa ventana, abre otras páginas del mismo sitio web y descarga sus archivos al almacén temporal cifrado; nada entra en un caso hasta que usted lo registre. Para otro sitio web la IA vuelve a la herramienta de páginas; cuando ha terminado, comunica que el trabajo en el navegador ha concluido y la ventana le pregunta si desea cerrarla o mantenerla abierta.
- **Instrucciones ocultas borradas.** El texto de las páginas web abiertas y de la ventana del navegador pasa una inspección basada en reglas; los pasajes que se dirigen a una IA, imitan el texto de chat o de control de IRONSTICK o esconden texto en caracteres invisibles se sobrescriben con asteriscos, y un aviso figura sobre el contenido.
- **Listas de nombres de una sola pasada.** Una comparación de listas coteja de forma determinista una lista registrada con cada persona y empresa de IRONSTICK —acentos neutralizados, orden de las palabras ignorado, tolerante a errores de OCR—. Las coincidencias se clasifican como exactas, reordenadas, variantes o de una sola palabra; las coincidencias de una sola palabra son siempre ambiguas y deben comprobarse.
- **Propuestas en lugar de escrituras.** Los hechos verificados pasan como propuestas al Monitor de coherencia de datos: datos maestros, el análisis de persona, conexiones y duplicados. Para el análisis de persona, la IA debe leer primero a la persona; un campo que ya contiene contenido solo se cambia cuando la IA aporta ese contenido palabra por palabra. Un campo de análisis aceptado pasa al último análisis de la persona. Una persona nueva recibe su número solo después de que usted la acepte, de modo que las conexiones con ella necesitan una segunda aceptación.
- **Nunca a la memoria de la IA.** Los hallazgos OSINT y su progreso pertenecen a la parte, no a la memoria. Mientras está abierta una comprobación OSINT de una IA de escritorio, todo intento de guardar una entrada de memoria se rechaza con la instrucción de introducir los hechos en la parte.
- **La búsqueda web de personas en la aplicación.** El botón *Investigación web* en el análisis de persona ejecuta cuatro pasos: una búsqueda web con variantes del nombre reúne enlaces candidatos (una búsqueda web adicional de IA solo se ejecuta con su consentimiento); usted elimina los resultados no deseados; las páginas restantes se cargan y una IA externa las resume; usted marca las fuentes y la IA las condensa en los campos del análisis como una vista previa editable. Al guardar, los campos se escriben en el análisis de la persona que no está vinculado a ningún caso, marcado como no confirmado. La IA externa se usa solo después de que usted haya dado su conformidad en un diálogo de consentimiento; si lo rechaza, no se envía nada.

## Flujo de trabajo 8 — Investigación jurídica: primero las leyes de la biblioteca

Use este flujo de trabajo siempre que importe una ley, un artículo de un código o un reglamento: para responder a una cuestión jurídica, comprobar una cita o fundamentar un escrito.
La IA lee las normas de su propia biblioteca jurídica, palabra por palabra, y acude a internet solo cuando la biblioteca no tiene nada sobre esa norma.
Una ley hallada en línea se abre, se lee, se cita con su URL y se notifica, de modo que tras su aprobación entra en la biblioteca.
La biblioteca es aquello frente a lo que la comprobación del escrito contrasta cada artículo citado.

![Diagrama de flujo: usted pregunta por una norma con el caso abierto; la IA determina la jurisdicción y busca en la biblioteca jurídica; si la biblioteca tiene la norma, la IA lee el artículo literalmente y responde a partir de la biblioteca; si no, se libera la web para esa norma, la IA abre y lee la página, notifica la fuente, usted la marca en el diálogo de consentimiento y la ley se guarda en la biblioteca y se lee desde allí; en un escrito, la comprobación del escrito verifica que cada artículo citado se leyó en la biblioteca.](https://www.ironstick.legal/img/bridge/w8_flow.png)

Primero la biblioteca, la web solo si no hay resultado, y cada fuente web de vuelta a la biblioteca con su aprobación.

### Paso 0 — fijar el contexto

- **Abra el caso o nómbrelo.** La ley aplicable procede del caso. La IA lee la jurisdicción registrada en el caso antes del trabajo jurídico de fondo.
- **Si no se nombra ninguna jurisdicción.** La búsqueda en la biblioteca usa entonces la jurisdicción del último caso en el que la IA trabajó en la sesión y lo indica; sin un caso conocido, busca en todas las jurisdicciones y pide a la IA que compruebe la jurisdicción de cada resultado.
- **Vea qué contiene la biblioteca.** La pantalla *Leyes* enumera cada ley de la biblioteca con título, jurisdicción, materia, fuente y estado, tiene su propia búsqueda de texto completo y un botón de añadir para un enlace o un archivo PDF o Markdown. Pregunte a la IA "¿qué leyes contiene la biblioteca para [país]?" para obtener la misma vista general en la conversación.
- **Pida la lectura que necesita.** Una vista general rápida, el texto literal de un artículo o una lectura completa de una ley. Diga cuál.

### Qué dice usted — paso a paso

1. ¿Qué dice el art. [número] de [ley]? Cítalo.

El artículo se lee palabra por palabra de su biblioteca jurídica y se cita con su fuente.
2. ¿Está regulado [cuestión] en [ley]? Dame los artículos.

Se busca en la biblioteca; usted recibe los artículos pertinentes con su redacción exacta.
3. Comprueba con la biblioteca las normas citadas en mi borrador.

Cada artículo citado se compara con el texto completo de la biblioteca.
4. [ley] no está en la biblioteca — búscala en el portal oficial.

La web se abre solo para una norma que la biblioteca no contiene; la página se lee, se cita con su enlace y se propone para su biblioteca.

### Qué ocurre en segundo plano

- **La búsqueda en la biblioteca.** Abarca todos los archivos de leyes de la biblioteca de dos maneras: por denominación ("Código Civil", "Reglamento (UE) 2016/679"), cotejada con el título y la descripción y clasificada en primer lugar, o por pasaje, una búsqueda difusa en la que basta aproximadamente el 60 % de las palabras. Cada resultado nombra el número de registro interno (número L), el archivo, breves extractos con sus posiciones exactas de caracteres y una llamada ya preparada para obtener el texto que los rodea.
- **Lectura literal.** El lector de artículos devuelve un artículo por número L y número de artículo; la búsqueda de expresiones devuelve un intervalo de caracteres o cada lugar donde aparece una expresión, con su texto circundante. Ambos registran exactamente lo que devolvieron como leído. El lector de leyes devuelve una ley completa; una ley mayor que el límite del conector pasa íntegra al almacén temporal cifrado, sin vista previa, y entonces no registra nada como leído.
- **Primero la biblioteca jurídica.** Una búsqueda web o una solicitud de página que parece una consulta de ley —números de artículo o de apartado, nombres de códigos, números de ley, portales legislativos— se rechaza hasta que la IA haya buscado esa norma en la biblioteca. Si la biblioteca tiene resultados, la web permanece cerrada para esa norma y se le indica a la IA que cite de la biblioteca. Solo cuando la biblioteca informa de que no hay coincidencia se libera la web para esa norma, durante 15 minutos, incluidos los enlaces de portales legislativos que esa búsqueda devuelve. Los resultados que no llevan en su título el número o la denominación de la ley buscada, o que no contienen el número de artículo buscado, no cuentan como "la biblioteca la tiene" —la mención de un reglamento dentro de su ley matriz es uno de esos falsos resultados—. La compuerta se aplica al chat de IA y a toda IA de escritorio.
- **Abiertas, no fragmentos.** Una página usada como fuente se abre y se lee con la herramienta de páginas de IRONSTICK; los resultados de búsqueda son solo indicadores. Toda fuente de internet se cita con su URL. El texto de la ley se cita del archivo de la biblioteca una vez que la fuente está allí.
- **Notificar fuentes legales.** Tras una búsqueda web relativa a una ley, o tras abrir la IA una página de un portal legislativo, cada respuesta posterior de herramienta comienza con el recordatorio de notificar la fuente, durante un máximo de 15 minutos. Un enlace a un portal que simplemente aparece en un resultado de búsqueda no relacionado solo recibe una nota.
- **Abierta por la propia IA.** Una notificación de fuente se acepta solo cuando la misma sesión de IA abrió exactamente esa página con la herramienta de páginas en las últimas 24 horas. De lo contrario, la notificación se rechaza con la instrucción de abrir la página y comprobar que realmente contiene el texto de la ley —no una página de error, una página de inicio de sesión, un resultado de búsqueda o una vista general—. Como toda escritura con fecha, la notificación exige la fecha actual obtenida en los últimos 30 minutos.
- **Su consentimiento.** Las fuentes notificadas se reúnen en un único diálogo, cada una con una casilla. Las fuentes marcadas las obtiene un proceso en segundo plano, que las convierte, comprueba y guarda en la biblioteca; las no marcadas se rechazan. Cerrar el diálogo deja las fuentes reunidas; vuelve con la siguiente notificación. Un enlace que ya está en la biblioteca se responde como existente; una fuente distinta para una ley que la biblioteca ya contiene se convierte en una solicitud de sustituir la fuente, bajo el mismo número L.
- **Sin portales legislativos en la ventana del navegador.** La ventana del navegador de IRONSTICK, donde usted completa comprobaciones antibot e inicios de sesión de otros sitios web, rechaza los portales legislativos: allí no se abre, lee ni descarga nada. Un portal legislativo que bloquea la herramienta de páginas no se cede a esa ventana.
- **Vigencia de la biblioteca.** Las fuentes vinculadas se vuelven a comprobar con su fuente aproximadamente cada 14 días; la IA también puede volver a comprobar una sola ley de inmediato. Una ley que ya no se pudo verificar con su fuente se marca como "no verificable"; para ella no rige la regla de primero la biblioteca y la versión actual se busca en línea. Un archivo subido sin fuente lleva una advertencia de que no se puede comprobar su vigencia.
- **Citas en un escrito.** La comprobación del escrito contrasta cada artículo citado con el registro de lectura de las herramientas de la biblioteca. Un artículo que existe en la biblioteca pero no se leyó allí antes del último cambio del borrador es un hallazgo bloqueante, con la instrucción de leerlo literalmente con el lector de artículos e incorporarlo al texto. Una norma que no está en la biblioteca es un hallazgo bloqueante hasta que su fuente se notifica e integra; una fuente que usted rechazó deja la cita marcada como no verificada. Una lectura cuenta cuando se hizo después del último cambio del texto de la biblioteca y antes del último cambio del borrador.
- **Localizado no es leído.** Encontrar un número de artículo en un archivo de ley, o nombrarlo en una vista general, no es una lectura literal. Para un escrito, cada artículo citado se lee con el lector de artículos, y la IA comprueba que el texto respalda realmente su frase.
- **Leer una ley entera.** Cuando un código completo se encuentra en el almacén temporal y la IA lo lee allí por partes, tiene el texto completo en su conversación. Para la comprobación del escrito, un artículo solo cuenta como leído cuando llegó a través del lector de artículos o de la búsqueda de expresiones, o con una ley lo bastante pequeña como para devolverse directamente.

## Trabajar con la IA — su asistente en el expediente

En principio, un chat con una IA conectada a IRONSTICK a través del Bridge es una herramienta enormemente potente. Piense en ella como un auxiliar jurídico o un compañero abogado. A través del Bridge, la IA no solo puede buscar documentos, pasajes de texto individuales o pruebas: también puede ver imágenes almacenadas, ver y comprobar archivos PDF a petición, iniciar nuevos escaneos OCR y mucho más.

Cuando trabaje con la IA, hágalo como lo haría con un auxiliar jurídico o con un abogado. Simplemente dé instrucciones claras sobre exactamente lo que quiere. La IA realiza las consultas necesarias en segundo plano a través del Bridge, directamente en IRONSTICK, es decir, en sus expedientes.

**Como regla:** sin su consentimiento, la IA puede hacer poco más en IRONSTICK que leer. Los cambios en datos maestros, cronología, calendario, memoria, textos completos y biblioteca jurídica solo surten efecto después de que usted los apruebe: o bien recibe usted un formulario o un cuadro de diálogo en IRONSTICK para ello, o bien la solicitud de cambio de la IA aparece en el Monitor de coherencia de datos. Sin un cuadro de diálogo así, la IA escribe solo en sus propias áreas de trabajo: el almacén temporal cifrado, el diario diario a petición suya y su propia evaluación del caso tras las comprobaciones deterministas. Las etiquetas y los mensajes del chat de la oficina necesitan su confirmación en el chat.

**Pero tenga cuidado:** toda aplicación de IA de escritorio muestra sus llamadas a herramientas. Si la IA le da una respuesta sin haber hecho ni una sola llamada a una herramienta de IRONSTICK, sea escéptico y pregunte en qué se basa esta información.

Sea estricto en sus preguntas e instrucciones e indique a la IA dónde y cómo investigar. No necesita nombrar la herramienta de búsqueda —la IA la conoce por sí misma—, pero dígale claramente que obtenga la información de IRONSTICK: en el cliente XY, en el caso XY, en la prueba XY. Puede nombrar simplemente a los clientes por su nombre —la IA resuelve por sí misma el ID de cliente— o copiar el número de cliente (*@C0000000*) de IRONSTICK y dárselo a la IA. Lo mismo funciona, por ejemplo, con un número de prueba (*#0000000*).
**Comprenda ante todo una cosa:** la IA no es una inteligencia artificial como tal. Detrás de ella no hay absolutamente ninguna inteligencia. Lo que hoy se llama IA es un modelo matemático para calcular probabilidades. No tiene absolutamente ninguna conciencia, aunque intente transmitir exactamente esa ilusión. En principio, es un compilador matemáticamente potenciado, y exactamente para eso lo utiliza IRONSTICK: IRONSTICK aporta los datos y la IA genera prosa en torno a los datos y hechos dados. La IA no siente el caso; solo calcula las probabilidades de un caso. Para eso está construida, en eso es buena y para eso la utiliza IRONSTICK.

Dicho de otro modo: la IA cubre lo que la lógica determinista de un programa no puede, o solo con un esfuerzo extremo: entender y escribir lenguaje natural. Todo lo demás —el acceso a sus expedientes, la selección del expediente judicial, las comprobaciones con sus registros, la regla de que sus registros solo cambian con su aprobación— lo hace IRONSTICK por sí mismo, de forma determinista. La IA nunca se convierte en la fuente de los hechos; lo es IRONSTICK. Esto es lo que distingue de forma tan fundamental el enfoque de IRONSTICK del uso convencional de la IA.

Para usted como usuario, sin embargo, IRONSTICK se presenta en la forma habitual: como la interfaz gráfica o como un diálogo.
