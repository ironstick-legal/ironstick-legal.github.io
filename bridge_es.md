# Compendios - Bridge

> El Bridge de IRONSTICK para la IA de escritorio: conecte Claude, ChatGPT, Qwen o Kimi Desktop con sus expedientes — licencias, instalación, los controles deterministas y el catálogo completo de herramientas.

Página original: https://www.ironstick.legal/bridge_es.html

---

El Bridge de IRONSTICK permite que la IA de escritorio que usted ya utiliza — Claude
Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop o Kimi Desktop — trabaje
directamente sobre los expedientes de sus casos, en local, en el mismo ordenador y
bajo diecisiete salvaguardas deterministas. El primer acceso a datos de cada
ejecución del programa requiere su consentimiento, cada acceso se muestra en la
barra de menús, y los cambios en datos maestros, crónica, calendario e
instrucciones solo surten efecto tras su aprobación. Este compendio abarca las
licencias, la relación con el chat de IA integrado de IRONSTICK, la instalación, la
visualización de los accesos, las salvaguardas, las peticiones habituales y el
catálogo completo de herramientas. Edición para Windows.

**De un vistazo**

- **Para** abogados y partes que se representan a sí mismas, en un único
puesto de trabajo o en un despacho conectado a través de IRONSTICK SERVER, el servidor
de la oficina.
- **Local:** el programa Bridge de la IA de escritorio e IRONSTICK se comunican
a través de una conexión protegida por token en el mismo ordenador; solo las
herramientas web y de registros acceden a internet.
- **Controlado:** consentimiento una vez por ejecución del programa, un
símbolo visible en cada acceso, compuertas deterministas antes de las escrituras
y las entregas, y propuestas en lugar de cambios silenciosos.
- **Paneuropeo:** las búsquedas y las comparaciones tratan los signos
diacríticos de los once idiomas de la interfaz; los números nacionales de
identificación se validan en nueve esquemas de siete países.

## 1. Qué es el Bridge

El Bridge conecta **su propia IA de escritorio** — Claude Desktop (o
Claude Code), ChatGPT Desktop, Qwen Desktop o Kimi Desktop — con la
**App cliente de IRONSTICK en ejecución** en el mismo ordenador. La IA lee
el material de sus casos mediante herramientas creadas a tal efecto — crónicas,
textos completos de documentos, correos electrónicos, plazos, datos maestros — y
trabaja con él en profundidad: analiza, contrasta y redacta. La conexión en sí es
estrictamente local; no interviene ningún servidor de IRONSTICK. Los datos que lee
la IA se tratan bajo **su propia suscripción con ese proveedor y las condiciones
de este**, tal como se expone en la [declaración de flujos de datos conforme al
RGPD](https://www.ironstick.legal/gdpr_es.html).

- Requiere la aplicación de escritorio correspondiente con su propia cuenta
(Anthropic, OpenAI, Qwen o Kimi).
- Usted mantiene el control: al cerrar IRONSTICK, la fuente de datos se cierra de inmediato.
- Este canal transmite **deliberadamente datos reales, no seudonimizados**;
precisamente eso hace posible redactar plantillas listas para presentar.
- Los documentos marcados como **secretos** son invisibles para el Bridge.
- La **memoria de IA compartida entre chats está construida para
procedimientos largos**: las entradas vinculadas a un caso no se borran nunca de
forma automática; las entradas sin caso se borran tras un año sin uso, y cada uso
renueva ese año.
- El acceso de escritura es deliberadamente estrecho. Los cambios en datos
maestros, crónica, calendario, memoria, textos completos y biblioteca jurídica
solo surten efecto tras su aprobación, en un formulario o diálogo de IRONSTICK o en
el Monitor de Coherencia de Datos. Sin un diálogo de ese tipo, la IA solo escribe
en sus propias áreas de trabajo (almacén temporal cifrado, diario de trabajo a
petición suya, su propia valoración del caso tras las comprobaciones
deterministas) y notas en el tablón de un caso compartido a través de
IRONSTICK SERVER; las etiquetas y los mensajes del chat del despacho requieren su
confirmación en el chat. Los borradores se entregan al procesador de textos.

Cada IA de escritorio tiene su propio programa Bridge pequeño; todos
se conectan al mismo punto de acceso local de la aplicación IRONSTICK en
ejecución. Las cuatro IA de escritorio reciben las mismas herramientas y las
mismas compuertas. Las IA pueden ejecutarse **al mismo tiempo** y
trabajar en paralelo sobre el mismo caso; cada una se muestra con su propio
logotipo en la barra de menús.
## 1b. ¿Por qué el Bridge?

**Porque el Bridge trabaja con la suscripción que usted ya tiene.** Una IA de
escritorio funciona a través de la aplicación de escritorio del proveedor y de su
cuenta en ella; una suscripción es la tarifa plana mensual del proveedor, y cada
diálogo, cada lectura de texto completo y cada ronda de redacción queda cubierta
por ella. El mismo trabajo en el chat integrado de IRONSTICK funciona con su clave de
API, y el acceso por API lo factura el proveedor según el uso.

Por eso el Bridge es la vía preferida para los diálogos largos con IA y para
todo trabajo en el que la IA gestione documentos o conjuntos de datos de cierto
volumen: leer expedientes enteros, mantener al día crónicas, diarios de trabajo y
entradas de memoria, trabajar cientos de anexos — un trabajo cuyo volumen queda
cubierto por la tarifa plana en lugar de facturarse según el uso.

 [Figure: Dos vías hacia la IA: una clave de API facturada según el uso, o el Bridge con la aplicación de escritorio del proveedor y su suscripción]
**Solo con Claude Desktop / Claude Code**

- **Cada chat se sigue por separado.** IRONSTICK distingue los chats de su
Claude Desktop. El cerrojo de instrucciones, los registros de lectura, el estado
de preparación, las comprobaciones de partes y el seguimiento de entregas se
llevan **por chat**; lo que un chat ha leído no cuenta nunca para otro. En el
menú desplegable del símbolo de Claude, cada chat aparece con el nombre que usted
le ha dado en Claude Desktop. Para ello IRONSTICK lee, del registro local de sesión
de Claude, únicamente los eventos estructurados de herramientas (nombre de la
herramienta y argumentos), nunca el texto de la conversación.
- **Se detecta la compactación del contexto.** Cuando Claude compacta una
conversación larga, las instrucciones leídas anteriormente ya no están con
seguridad en su contexto. IRONSTICK bloquea ese chat de inmediato, sin penalización,
hasta que haya releído las instrucciones y citado literalmente una regla elegida
al azar; después continúa donde lo había dejado.
- **Se detecta el acceso al margen del conector.** Si un chat accede a la
carpeta de datos de IRONSTICK con las herramientas de archivos propias de Claude
(leer, buscar, shell, editar) en lugar de hacerlo a través del conector, se anota
a ese chat como infracción de las reglas y se le comunica en su siguiente llamada
al conector.
- **Límite de conector ampliado.** Claude Desktop recibe resultados de hasta
40.000 caracteres directamente en la respuesta, cuatro veces el límite estándar
(10.000 para Qwen, Kimi y el chat integrado); todo lo que lo supere va íntegro al
almacén temporal.
- **Respuesta en un máximo de 45 segundos.** Como Claude Desktop cancela las
llamadas a herramientas a los 60 segundos, las páginas web se devuelven en un
máximo de 45 segundos (este límite rige para todas las IA de escritorio). Un
documento grande o escaneado se sigue procesando en segundo plano y se entrega de
inmediato en la siguiente llamada con la misma dirección.
- **Comprobación de partes con anticipación.** Mientras Claude trabaja una
parte, puede nombrar por adelantado hasta dos más; IRONSTICK las busca en segundo
plano y la siguiente comprobación responde entonces de inmediato. Los resultados
se conservan 30 minutos; el orden de la compuerta no cambia, y la siguiente parte
solo se abre cuando la actual está terminada.

**Solo con ChatGPT Desktop**

- **Límite de conector ampliado.** ChatGPT Desktop recibe resultados de hasta
40.000 caracteres directamente en la respuesta, cuatro veces el límite estándar
(10.000 para Qwen, Kimi y el chat integrado); todo lo que lo supere va íntegro al
almacén temporal.
- **Comprobación de partes con anticipación.** Mientras ChatGPT trabaja una
parte, puede nombrar por adelantado hasta dos más; IRONSTICK las busca en segundo
plano y la siguiente comprobación responde entonces de inmediato. Los resultados
se conservan 30 minutos; el orden de la compuerta no cambia.

## 1c. Licencias — cuatro Bridges o el paquete

Cada Bridge de IA de escritorio es un **módulo adicional con licencia
propia**:

| Bridge | Conecta | Licencia |
| --- | --- | --- |
| **Bridge de Claude Desktop** | Claude Desktop / Claude Code (Anthropic) | Módulo propio |
| **Bridge de ChatGPT Desktop** | ChatGPT Desktop (OpenAI) | Módulo propio |
| **Bridge de Qwen Desktop** | Qwen Desktop | Módulo propio |
| **Bridge de Kimi Desktop** | Kimi Desktop (Moonshot AI) | Módulo propio |
| **Paquete de Bridges** | Los cuatro anteriores | Los cuatro módulos juntos |

- Cada Bridge se desbloquea en su **clave de licencia firmada de la aplicación
cliente**; no existe una clave de Bridge aparte.
Solo se activan los Bridges licenciados; uno no licenciado no
se instala y no aparece en la configuración.
- Usted puede licenciar **un único Bridge** (solo la IA de escritorio que
utiliza) o el **paquete de los cuatro**, y ampliarlo más adelante.
- Los Bridges licenciados pueden ejecutarse **en paralelo**; varias IA de
escritorio pueden trabajar a la vez sobre un mismo caso.

 [Figure: App cliente de IRONSTICK más el paquete de Bridges: un programa Bridge con licencia por cada IA de escritorio]
Precios de cada Bridge y del paquete:
[Precios](https://www.ironstick.legal/pricing_es.html).
## 1d. El chat de IA integrado de IRONSTICK — el mismo modelo, sin licencia adicional

IRONSTICK tiene también **su propio chat de IA integrado**. Funciona en
**el mismo plano de trabajo que el Bridge**: las mismas herramientas, las mismas
compuertas, el mismo anclaje y la misma redacción de plantillas listas para
presentar.

- **Sin licencia adicional.** El chat integrado forma parte de
IRONSTICK; no necesita ningún módulo de Bridge.
- **Funciona a través de la API de los proveedores** (su propia clave de
API), que el proveedor factura según el uso, mientras que el Bridge trabaja a
través de la aplicación de escritorio del propio proveedor con la tarifa plana
mensual de su suscripción.
- A cambio, la vía de la API está **más estrictamente controlada**: los datos
se seudonimizan en el enrutador, las llamadas interactivas piden su
consentimiento, cada llamada queda registrada en el registro de auditoría y se
aplican topes de tamaño, además de las mismas compuertas que en el Bridge.

 [Figure: El chat de IA integrado: la App cliente de IRONSTICK con la clave de API del proveedor]
**En resumen:** el Bridge (aplicación de escritorio, suscripción
mensual de tarifa plana) es adecuado para el trabajo diario intenso y centrado en
documentos; el chat integrado (API facturada según el uso, sin licencia adicional)
está siempre disponible y más estrictamente controlado.
## 2. Instalación (cualquiera de las cuatro)

 [Figure: Configuración → Configuración de IA: la sección Claude Desktop con ambos interruptores, el botón de configuración y el botón del plugin de skills.]

Configuración → Configuración de IA: la sección Claude Desktop con ambos interruptores, el botón de configuración y el botón del plugin de skills.

El procedimiento es el mismo para cada IA de escritorio; solo difieren la
fuente de descarga y el botón de configuración.

1. Instale la aplicación de escritorio, inicie sesión con su propia cuenta y
ejecútela una vez.
2. En IRONSTICK, abra **Configuración → Configuración de IA → IA con servidor
MCP local (STDIO)**.
3. Active **«Permitir el acceso al conector desde Claude Desktop»** (el
interruptor principal de todo el canal).
4. Opcionalmente, active **«Permitir la navegación desde Claude Desktop»** si
la IA puede además manejar la aplicación: abrir pantallas, casos y documentos, y
exportar archivos. La lectura funciona también sin ello.
5. Haga clic en el botón **«Configurar … Desktop»** correspondiente. Para
Claude, ChatGPT y Kimi, un clic escribe y registra la configuración. Para Qwen
Desktop, IRONSTICK copia el texto de configuración al portapapeles y usted lo pega
en el diálogo «Añadir MCP» de Qwen.
6. Inicie una **conversación nueva**, o utilice el **botón de reinicio** de
la misma sección, que cierra y vuelve a iniciar las aplicaciones de IA de
escritorio con licencia para que se reconecten a IRONSTICK. IRONSTICK aparece
entonces entre los conectores de la IA, y sus herramientas están disponibles en
cada conversación.

| IA de escritorio | Descarga / inicio de sesión | Botón de configuración |
| --- | --- | --- |
| **Claude Desktop / Claude Code** | claude.ai/download — cuenta de Anthropic | «Configurar Claude Desktop»; un botón aparte crea el plugin de skills, que usted añade en Claude Desktop |
| **ChatGPT Desktop** | openai.com/chatgpt/download — cuenta de OpenAI | «Configurar ChatGPT Desktop»; un botón aparte crea el plugin de skills, que usted añade en ChatGPT Desktop |
| **Qwen Desktop** | Qwen Desktop (Windows) — cuenta de Qwen | «Configurar Qwen Desktop» (copia el texto de configuración para el diálogo «Añadir MCP» de Qwen) |
| **Kimi Desktop** | kimi.ai — cuenta de Kimi | «Configurar Kimi Desktop» |

La pantalla de configuración contiene los enlaces de descarga y los enlaces a
las condiciones de uso y a la política de privacidad de cada proveedor.

**Configuración en un solo paso.** Para Claude, ChatGPT y Kimi, un
único clic en el botón de configuración de la pantalla de configuración de la
App cliente escribe y registra la configuración completa; no hace falta
editar a mano ningún archivo de configuración. Para Qwen Desktop, basta pegar una
vez en el diálogo propio de Qwen. El **botón de reinicio** cierra y vuelve a iniciar las
aplicaciones de IA de escritorio con licencia para que se reconecten a
IRONSTICK.
## 3. Cómo se muestran los accesos de la IA en la barra de menús

 [Figure: La barra de menús durante un acceso del Bridge — el símbolo de Claude aparece junto al indicador de CPU/RAM.]

La barra de menús durante un acceso del Bridge — el símbolo de Claude aparece junto al indicador de CPU/RAM.

- **Primero, el consentimiento.** El primer acceso a datos de cualquier IA de
escritorio en una ejecución del programa abre un único diálogo de consentimiento.
Aceptar abre el acceso para todas las IA de escritorio durante el resto de la
ejecución; rechazar las bloquea a todas durante 10 minutos.
- **Un logotipo por cada IA** aparece en la barra superior, junto al
indicador de CPU/RAM, **durante cada llamada a una herramienta** y permanece
iluminado 3 segundos tras la última llamada; las series rápidas de llamadas
lo mantienen iluminado de forma continua. Si el símbolo está apagado, en ese
momento no se está leyendo nada. Cada IA tiene su propio signo: la estrella
naranja de Claude, el nudo verde de OpenAI, el símbolo violeta de Qwen y la «K»
de color petróleo de Kimi.
 [Figure: Primer plano: el símbolo de Claude se ilumina en cada llamada individual a una herramienta y permanece visible 3 segundos tras la última llamada.]

Primer plano: el símbolo de Claude se ilumina en cada llamada individual a una herramienta y permanece visible 3 segundos tras la última llamada.

- **El menú desplegable del símbolo de la IA** muestra lo que esa IA ha leído
en la sesión: la línea «instrucción de trabajo + prohibición de alucinación»
(marca verde mientras sea válida, cruz roja tras la caducidad) y, a continuación,
por cada caso, las marcas de perfil, ordenamiento jurídico y compendio, más una
barra «documentos leídos *r* de *n*».
- **El símbolo del cerebro** aparece en cuanto la memoria de IA compartida
tiene entradas y palpita 3 segundos cada vez que cualquier canal de IA la lee
o escribe en ella. Un clic abre el diálogo de administración. La IA puede
proponer guardar, modificar o borrar una entrada de la memoria; cada cambio solo
surte efecto tras su aprobación. Sus propias notas son de solo lectura para la
IA.
- **La navegación** por parte de la IA (abrir pantallas, casos o documentos)
solo tiene lugar si su interruptor está activado; de lo contrario, las
herramientas de navegación se rechazan.
- **Acceso en paralelo:** cuando varias IA licenciadas trabajan a la vez, la
barra superior muestra **un logotipo por cada IA activa**, uno junto a otro;
cada acceso se atribuye a la IA que lo ha realizado.
- **Procesos en segundo plano:** el indicador de rendimiento enumera todos los
procesos en segundo plano en curso, incluida cada llamada a herramientas del chat
integrado.

## 4. Diecisiete salvaguardas deterministas contra alucinaciones y errores de datos

IRONSTICK impone sus reglas de trabajo de forma estructural. Diecisiete compuertas
deterministas (lógica pura, ninguna IA) se interponen entre el modelo y sus
registros. En el catálogo de herramientas, una insignia azul como
Compuerta 1 · Fecha nombra la compuerta que protege una
herramienta.

| Compuerta | Impide | Cómo funciona |
| --- | --- | --- |
| **1. Compuerta de fecha** | Fechas erróneas tomadas del periodo de entrenamiento del modelo en lugar de la fecha real. | Toda herramienta que escribe en IRONSTICK se rechaza salvo que la IA haya obtenido la fecha y hora reales, comprobadas por NTP, en los últimos 30 minutos. La ventana se lleva por cada IA y es deliberadamente breve. |
| **2. Compuerta de normas** | Texto legal inventado o mal recordado. | El acceso web para normas se rechaza hasta que se haya consultado la biblioteca jurídica local verificada; las fuentes normativas halladas en línea deben notificarse y solo entran en la biblioteca a través de su diálogo de consentimiento. |
| **3. Compuerta de verificación de escritos** | Referencias de expediente inventadas, importes divergentes, nombres de partes erróneos, citas no comprobadas en un escrito. | La verificación determinista de escritos en ocho clases: la entrega de un documento formal queda bloqueada sin una verificación positiva reciente para el estado exacto del archivo; tras cinco pasadas fallidas, el proceso se detiene y se le notifica a usted. |
| **4. Guardián de cobertura de lectura** | Afirmaciones de haberlo leído todo cuando los archivos se leyeron solo en parte. | Seguimiento, con exactitud de línea, de lo que realmente se ha leído, conservado entre reinicios; los tramos no leídos se enumeran en cada respuesta, la entrega permanece bloqueada mientras existan lagunas, y se rechaza borrar o sobrescribir archivos fuente no leídos. |
| **5. Bloqueo de navegación** | Pérdida de trabajo no guardado por un cambio de pantalla provocado por la IA. | Mientras esté abierto un formulario de registro o el editor de textos, toda llamada de navegación y de exportación se rechaza. |
| **6. Compuerta Human-in-the-Loop** | Cambios silenciosos de la IA en datos maestros, crónica, calendario o instrucciones. | Los cambios de la IA llegan como propuestas: Monitor de Coherencia de Datos, diálogos de diferencias en rojo/verde, diálogos de confirmación; nada se aplica sin su aprobación. |
| **7. Detector de contenido formal** | Cartas formales o escritos declarados “informales” para eludir el formato y la verificación. | Un escaneo determinista del contenido (fórmulas de saludo y despedida en seis idiomas, bloque de destinatario, marcadores jurídicos, bloque de identidad) rechaza la declaración de informalidad; tal contenido no tiene vía de entrega informal, y el intento queda registrado. |
| **8. Guardián de series de versiones** | Reiniciar el contador de versiones renombrando el archivo (“…\_v05” se convierte discretamente en “NewName\_v01”). | Se rechaza una primera entrega bajo un nombre de archivo nuevo mientras exista una serie versionada con el mismo número de caso; la IA debe continuar la serie o declarar expresamente un documento realmente distinto, lo cual queda registrado. |
| **9. Registro de lectura de normas** | Contenido normativo tomado de artículos de prensa, resúmenes web o la memoria del modelo en lugar del texto de la ley. | Cada lectura de la biblioteca se registra por ejecución del programa (archivo fuente y números de artículo realmente devueltos). Un artículo citado sin tal registro de lectura no supera la verificación; las subreferencias citadas (apartado, punto) también se comprueban en cuanto a su existencia. |
| **10. Ancla del caso** | Contexto de un caso inventado a partir del recuerdo de un caso *distinto* (contaminación entre casos). | Toda respuesta de herramienta que concierne a un caso lleva el número registrado, el cliente y el objeto del caso tomados de los registros, de modo que cualquier contexto inventado aparece junto a los datos registrados y queda expuesto de inmediato. |
| **11. Bloqueo de acceso por instrucciones** | Una IA que trabaja sin haber leído las reglas de trabajo. | Salvo leer las instrucciones, confirmarlas y leer el idioma del sistema, toda herramienta se rechaza hasta que la IA haya leído las instrucciones y citado literalmente la regla 5 (prohibición de alucinación). La confirmación caduca 60 minutos después de haberse dado, tras 2 horas sin ninguna llamada, a medianoche, en cada reconexión y cuando la IA de escritorio compacta su contexto; la IA debe entonces releer las instrucciones y citar una regla elegida al azar. El menú desplegable del símbolo de la IA muestra el estado en verde o en rojo. |
| **12. Compuerta de preparación** | Notas, entradas de diario o escritos sobre un caso que la IA no ha leído. | Dos niveles, contabilizados por cada IA y conservados entre reinicios: una nota requiere haber leído el perfil, el ordenamiento jurídico, el compendio de cada documento (el compendio hace las veces de crónica) y los cinco documentos más recientes; un escrito, una entrega o una exportación requieren además haber leído íntegramente cada documento que citan o adjuntan. Una lectura sigue siendo válida 3 días, o hasta el siguiente documento entrante del caso. |
| **13. Registro de lectura vinculado al documento** | Anexos y referencias “leídos” hace horas, o para otro documento. | Una lectura de texto completo cuenta durante 2 horas; cada entrega del mismo documento (cualquier versión) prorroga 2 horas sus documentos citados; verificar o entregar un documento distinto reinicia las lecturas de anexos, y la IA vuelve a leer los anexos de ese documento. |
| **14. Compuerta de lectura de análisis** | “Hechos” no verificados introducidos en la descripción o en los campos de contacto de una persona. | Una propuesta que toca los campos de texto libre de una persona se rechaza salvo que la IA haya leído el perfil de esa persona en los últimos 30 minutos. |
| **15. Compuerta de compendio** | Contenido de un caso reunido a retazos (búsquedas, líneas de tiempo, textos completos, plazos) en un caso cuyo compendio la IA no ha leído. | Toda herramienta de contenido de casos (crónica, cronología, búsquedas, textos completos, contradicciones, obligaciones, plazos, correspondencia, medios, instituciones, etiquetas, valoración, notas de instrucción) se rechaza hasta que se haya leído el compendio del caso; el rechazo nombra la llamada de preparación. El tercer intento rechazado en el mismo caso se anota como infracción de las reglas. |
| **16. Compuerta de partes similares** | Personas, empresas o instituciones duplicadas, creadas porque no se reconoció una variante ortográfica. | Una propuesta de registro nuevo se responde con una lista de registros existentes similares, y no se guarda nada. La IA debe archivar contra un registro existente o confirmar expresamente que la parte es realmente nueva. Cada parte nueva guardada devuelve la tarea de seguimiento obligatoria: investigar y archivar sus conexiones, incluida la investigación en la web. |
| **17. Bloqueo de repeticiones** | La obtención repetida de datos idénticos, que cuesta tiempo y tokens sin aportar información. | Una llamada que devuelve exactamente el mismo contenido que una anterior se rechaza. Se compara el contenido, no la llamada, de modo que también se rechaza un parámetro distinto que da el mismo resultado. El bloqueo se restablece cuando se ha entregado o presentado otro documento, cuando el programa de IA se vuelve a conectar, cuando la IA ha realizado entretanto otra tarea o cuando ha vuelto a leer y confirmar sus instrucciones. |

## 5. Qué puede hacer con él — ejemplos

Hable con la IA de escritorio (o con el chat integrado) en lenguaje natural; ella
elige por sí misma las herramientas adecuadas. Peticiones típicas:

**«¿Qué ha ocurrido en el caso [número de caso]? Resume la situación
actual y lo próximo que vence.»**
La IA identifica el caso, lee el expediente
completo por partes y lee los plazos; después entrega un resumen con referencias a
los documentos.
**«Redacta la respuesta al requerimiento del tribunal de la semana
pasada en nuestro formato de escrito y entrégala al procesador de
textos.»**
La IA encuentra el requerimiento, lee su texto completo, carga el
formato de salida y redacta; el borrador aparece en el procesador de textos de
IRONSTICK, listo para su revisión y para la impresión con membrete.
**«¿Quién dijo qué sobre la inspección ocular, y se contradicen las
declaraciones?»**
Búsqueda de declaraciones y buscador de contradicciones
sobre todo el expediente.
**«Comprueba el NIF-IVA y el LEI de la parte contraria.»**
Comprobaciones
en vivo contra el servicio VIES de la UE y el registro mundial de LEI.
**«Construye una cronología del litigio y enumera cuáles de
nuestros anexos ya se han presentado ante el tribunal.»**
Cronología del
caso más listas de documentos presentados y salientes con números de registro.
**«¿Hubo correos sobre el dictamen pericial? ¿Qué llevaban
adjunto?»**
Búsqueda de correos con remitente, asunto, adjuntos y, si se
desea, el texto del mensaje.
**«Ábreme el caso y exporta los dos contratos como
PDF.»**
Con la navegación activada, la IA abre las pantallas y entrega los
archivos.
**«Recuerda para la próxima vez: el abogado de la parte contraria
siempre presenta tarde los viernes.»**
Se propone para la memoria de IA
compartida (vinculada al cliente, de tamaño limitado); una vez que usted lo
aprueba, queda disponible para toda sesión futura, y usted puede revisarlo y
borrarlo en cualquier momento.
**«El borrador está terminado. Pásaselo a otra IA para que lo
compruebe: leer, encontrar puntos débiles y contraargumentos, y valorar.»**
La
IA entrega el escrito a través de IRONSTICK; otro modelo, con otro entrenamiento, lo
examina críticamente, y su valoración vuelve a usted. Una auténtica segunda opinión
sobre los mismos datos del caso.
**«Registra el trabajo de hoy en el diario de trabajo.»**
Los
correos enviados, los escritos redactados, los argumentos elaborados y las
decisiones se escriben en el diario de trabajo de hoy; en la siguiente sesión, la
IA se informa a partir de las últimas entradas.
## 6. El catálogo de herramientas

Estas son las herramientas que proporciona el Bridge — las mismas para cada IA de
escritorio conectada y para el chat integrado. Cada fila indica primero la función
en lenguaje llano y, en segundo lugar, el nombre técnico de la herramienta, tal
como lo ve la IA. Algunos nombres técnicos derivan de términos alemanes o rumanos
(por ejemplo `tagesprotokoll` = diario de trabajo, `fristen` =
plazos, `kalender` = calendario, `ki` = IA,
`sachverhalte` = hechos, `anexe` = anexos); la descripción
indica la función.

Todas las herramientas son de solo lectura, salvo que la descripción indique que
escriben o que abren un formulario. Insignias: Compuerta 1 · Fecha
nombra la salvaguarda de la tabla de las diecisiete compuertas; Revisión
significa que nada cambia hasta que usted lo aprueba en el Monitor de Coherencia
de Datos o en un diálogo o formulario de IRONSTICK; Confirmación
significa que la herramienta actúa solo tras su confirmación expresa.

### Contexto y navegación

| Función | Nombre técnico |
| --- | --- |
| **Inicio de sesión completo.** Ejecuta el inicio de sesión completo en una sola llamada (fecha, idioma del sistema, contexto actual, informe matutino, plazos, citas, tareas abiertas de revisión por pares) y lo escribe en un único archivo del almacén temporal. En el primer inicio de sesión del día, la IA pregunta en primer lugar por las resoluciones judiciales aún sin valorar. | `session_start_to_scratch` |
| **Pantalla actual.** Dónde se encuentra el usuario: pantalla, ruta de navegación, cliente o caso abierto. | `read_current_context` |
| **Idioma del sistema** de la instalación. | `read_system_language` |
| **Fecha y hora actuales** (comprobadas por NTP), para el cómputo de plazos. | `get_datetime` Compuerta 1 · Fecha |
| **Instrucciones.** Relee en cualquier momento las instrucciones completas y actuales del conector. | `read_instructions` |
| **Confirmación de las instrucciones.** Desbloquea el conector una vez que la IA ha leído las instrucciones y citado literalmente la regla 5 (prohibición de alucinación). La confirmación caduca a los 60 minutos, tras 2 horas sin ninguna llamada, a medianoche, en cada reconexión y tras la compactación del contexto; la IA relee entonces las instrucciones y cita una regla elegida al azar. | `confirm_instructions` Compuerta 11 · Bloqueo de acceso |
| **Manual de usuario.** Devuelve las secciones del manual que corresponden a palabras clave en inglés; la IA las explica en el idioma del diálogo. El manual reside cifrado y en modo de solo lectura en el almacén temporal, donde la IA también puede buscar en él. Cada sección incluye indicaciones de manejo, sugerencias de peticiones y el flujo de trabajo. | `user_help_request` |
| **Informe matutino.** El informe estructurado de hoy con EvidenceID, números de caso y marcadores: plazos, fechas de audiencia, correo no leído, documentos recién registrados, casos con actividad elevada. | `get_dailybriefing` |
| **Abrir una pantalla** de la aplicación (requiere el interruptor de navegación). | `open_screen` Compuerta 5 · Navegación |
| **Abrir un registro:** un caso, cliente, persona, institución o documento concretos (interruptor de navegación). | `open_case` / `open_client` / `open_person` / `open_institution` / `open_evidence` |
| **Abrir un área de trabajo:** el asistente de dossier, opcionalmente ya preparado por completo; la búsqueda global; el monitor de correo (bandeja de entrada o enviados, opcionalmente un correo concreto); el diario de trabajo (un día concreto); o la pantalla de copias de seguridad. Iniciar una copia de seguridad requiere confirmación (interruptor de navegación). | `open_dossier` / `open_search` / `open_emailmonitor` / `open_tagesprotokoll` / `open_backup` |
| **Abrir un plazo** en la pantalla de plazos, resaltado (interruptor de navegación). | `open_deadline` |
| **Abrir un formulario:** los formularios de registro o edición de cliente, caso, persona o empresa e institución, la pantalla de asignación a casos, o la bandeja y el formulario de registro de documentos. La IA abre y rellena previamente; el usuario guarda (interruptor de navegación). | `open_new_client` / `open_new_case` / `open_new_person` / `open_new_institution` / `open_assign` / `open_capture` Revisión |
| **Registrar una fuente normativa:** abre la pantalla de leyes con el diálogo de registro abierto y la URL rellenada; el usuario confirma (interruptor de navegación). | `open_new_legal_source` Revisión |
| **Recuperar el correo ahora:** recupera y clasifica los correos nuevos, como el botón de recuperar. | `fetch_mails` |
| **Iniciar una valoración de un caso por IA**, tras una confirmación con aviso de costes. | `request_case_assessment` Confirmación |
| **Enviar un mensaje al chat del despacho** en IRONSTICK SERVER en nombre del usuario, tras la confirmación del texto exacto. | `send_server_chat` Confirmación |
| **Gestionar etiquetas:** enumerar, añadir, editar o eliminar las etiquetas de color de una entrada; cada cambio requiere confirmación. | `manage_tag` Confirmación |
| **Reiniciar las IA de escritorio** para una conexión nueva, tras su confirmación. | `recycle_desktop_ai` Confirmación |

### Encontrar el registro correcto

| Función | Nombre técnico |
| --- | --- |
| **Listas de clientes y de casos**, completas. | `list_all_clients` / `list_all_cases` |
| **Encontrar un caso por número** (también parcial). | `resolve_case_by_number` |
| **Encontrar un cliente, una persona o una institución por nombre** (aproximado, tolerante a los signos diacríticos). | `resolve_client_by_name` / `resolve_person_by_name` / `resolve_institution_by_name` |
| **Casos en los que interviene una parte determinada.** | `find_case_by_party` |
| **Encontrar partes por palabra clave:** personas e instituciones cuyo nombre, notas o campos de análisis contienen una palabra clave; el punto de entrada cuando solo se conoce un fragmento. | `find_party_by_keyword` |
| **Casos con actividad elevada** (temperatura), con cliente y número de caso. | `read_hot_cases` |
| **Registrado hoy o ayer:** todo lo registrado ese día en todos los clientes y casos, como lista de EvidenceID con hora, cliente, caso y título. | `get_all_fromtoday` / `get_all_fromyesterday` |

### Leer un caso

| Función | Nombre técnico |
| --- | --- |
| **Expediente completo del caso:** crónica con textos completos. En casos grandes, la primera llamada comunica el tamaño y ofrece búsquedas dirigidas o la entrega al almacén temporal. | `read_full_case` Compuerta 4 · Cobertura de lectura |
| **Texto completo del caso al almacén temporal:** la lectura íntegra más rápida de un caso grande. Ensambla el texto completo del caso sin truncar, normaliza los artefactos de OCR y lo escribe directamente en el almacén temporal; la IA recibe solo la referencia del archivo y después lo lee por partes. Alcance: todos los documentos, los entrantes o los salientes, o documentos seleccionados; es la manera de leer íntegramente un documento de 300.000 caracteres. | `dump_case_to_scratch` Compuerta 4 · Cobertura de lectura |
| **Preparación del caso:** en una sola llamada, el perfil del caso y el ordenamiento jurídico, más el compendio de cada documento (ID, fecha, tipo, título, resumen de registro, referencias cruzadas, tamaño del texto); el compendio hace las veces de crónica. La respuesta indica dónde están el perfil y el compendio (en la respuesta en casos pequeños; de lo contrario, en archivos del almacén temporal que deben leerse por completo) y nombra los cinco documentos más recientes que deben leerse íntegramente. Satisface la compuerta de preparación; se excluyen los documentos borrados y los secretos. | `prepare_case` Compuerta 12 · Preparación |
| **Últimas entradas de la crónica:** un vistazo rápido; no cuenta para la preparación. | `read_chronik` |
| **Casos y hechos relacionados:** casos padre, hijo y del mismo grupo; los hechos de un cliente tal como los agrupa el mapa del Universo; los casos más fuertemente conectados. | `read_case_links` / `read_case_cliques` / `read_top_connected_cases` |
| **Orientación rápida sobre un caso:** todos los campos de las pestañas del caso y del cliente, más los 15 EvidenceID más recientes con fechas de entrada. | `short_case_briefing` |
| **Casos de un cliente**; casos vinculados al actual. | `read_client_cases` / `read_related_cases` |
| **Todos los hechos de un cliente** en una sola llamada, cada uno con sus casos (número de expediente, título, estado, caso padre); los casos sin agrupar se enumeran aparte. | `list_sachverhalte` |
| **Tribunales y autoridades** que intervienen en un caso, con direcciones. | `read_case_institutions` |
| **Ordenamiento jurídico del caso**, que determina el idioma de los documentos. | `read_case_jurisdiction` |
| **Valoración del caso por IA** almacenada. | `read_assessment` |
| **Cronología del caso:** todos los acontecimientos del caso en orden cronológico. | `build_case_timeline` |
| **Lista de anexos de un escrito:** los documentos probatorios que contiene, cada uno con su sello de presentación. | `evidence_anexelist` |
| **Cadena de números de carta:** sigue un número de registro o de carta a través de los documentos. | `briefnummer_chain` |
| **Uso de un documento:** dónde se ha utilizado o referenciado un documento. | `evidence_usage` |
| **Pruebas presentadas ante el tribunal**, con números. | `list_submitted_evidence` |
| **Correspondencia:** todos los documentos entrantes o salientes de un caso (opcionalmente desde una fecha dada), como lista de EvidenceID. | `list_correspondence` |
| **Sello(s) de presentación** de un documento. | `evidenceidtoisstamp` |
| **Obligaciones procesales pendientes** de un caso, con descripciones y marcas de atrasado o urgente. | `list_open_obligations` |

### Documentos y búsqueda de pasajes

| Función | Nombre técnico |
| --- | --- |
| **Texto completo de un documento** (y, cuando existe, su texto de chat o de transcripción); hasta 12 documentos por llamada. Por encima del límite del conector, el texto llega íntegro al almacén temporal y solo cuenta como leído cuando el archivo se ha leído por completo. | `evidence_readfull` Compuerta 4 · Cobertura de lectura |
| **Entradas de medios** (fotos, grabaciones): metadatos, ubicación, transcripciones. | `read_media` |
| **Búsqueda de documentos** por palabra clave o por periodo. En su primera llamada, la búsqueda por palabra clave pregunta qué se busca, el alcance y la forma de la respuesta. | `search_evidence_by_keyword` / `search_evidence_by_time` Compuerta 15 · Compendio |
| **Búsqueda de pasajes** en todo el expediente (tolerante al OCR), que devuelve los pasajes coincidentes. | `search_passages` |
| **Documentos procedentes de una parte.** | `find_documents_from_party` |
| **Candidatos a contradicción** entre documentos y declaraciones. | `find_contradictions` |
| **Declaraciones por interlocutor** sobre un tema. | `who_said_what` |
| **Quién se comunicó con quién**, y cuándo. | `who_with_whom` |

### Jueces y resoluciones judiciales

Cinco herramientas deterministas (sin IA) para una sola pregunta: ¿cómo decide un
juez o un fiscal — qué argumentos de los escritos presentados recoge, cuáles pasa
por alto y hasta qué punto son previsibles sus resoluciones? Las herramientas
localizan y miden; la IA lee y valora las resoluciones sobre la base de los textos
completos. Solo los documentos entrantes procedentes de un
tribunal o de una fiscalía cuentan como resoluciones.

| Función | Nombre técnico |
| --- | --- |
| **Resoluciones por juez:** todas las resoluciones registradas en las que una persona actuó como juez (presidente o miembro) o como fiscal, en todos los casos. Una resolución solo cuenta si la persona figura en el encabezamiento (composición del tribunal) o en el bloque de firmas; un nombre en el texto corrido no cuenta, y los secretarios judiciales no se enumeran. Por cada resolución: tribunal, encabezamiento, función, sala y la primera frase de la parte dispositiva, literalmente. | `list_decisions_by_judge` |
| **Estructura de una resolución:** tribunal y sección, número de caso, clase, número y fecha, sesión, sala, la frase que nombra a las partes y el objeto, la parte dispositiva literalmente, palabras clave de resultado, vía de recurso, pronunciamiento, citas normativas con su estado en la biblioteca y la extensión de la fundamentación, cada elemento con su posición de carácter en el texto almacenado. Los elementos ausentes del texto se comunican como no encontrados. | `read_decision_structure` |
| **Escritos anteriores a una resolución:** todos los escritos presentados en el caso hasta la fecha de la resolución, escritos en dos archivos del almacén temporal: los del cliente (documentos salientes) y los de la parte contraria (documentos entrantes). Solo cuentan los documentos dirigidos a un tribunal o a una fiscalía; las cartas a otras autoridades o procedentes de ellas, los documentos del tribunal, las pruebas y las entradas de la crónica quedan excluidos. Cada escrito se toma solo con su documento principal (sin el correo de remisión ni los anexos). Los documentos que no pueden clasificarse con certeza se enumeran como no asignados, en ninguno de los dos archivos. | `read_request_and_ruling` Compuerta 4 · Cobertura de lectura |
| **Fundamentación comparada con los escritos:** mide qué parte de la fundamentación de una resolución coincide, como texto, con los escritos del cliente, con los de la parte contraria, con ambos, con texto legal de la biblioteca jurídica o con ninguno de ellos (la redacción propia del tribunal); la exposición de las posiciones de las partes se mide por separado. Los pasajes coincidentes se enumeran con su tasa de coincidencia (a partir del 70 %), de mayor a menor, en la redacción original y con posiciones de carácter. Muestra dónde la fundamentación reproduce literalmente el texto de los escritos. | `compare_ruling_with_submissions` |
| **Comparación de documentos:** compara dos documentos cualesquiera, entre clientes y casos distintos, en busca de bloques de texto idénticos, por ejemplo en escritos de procedimientos distintos. Los pasajes coincidentes se clasifican como texto legal, como fuente citada habitualmente (un tercer documento de los dos casos) o como compartidos únicamente por estos dos documentos. La respuesta indica a la IA que lea íntegramente ambos documentos antes de afirmar nada sobre una conexión. | `compare_documents` |

### Lista de valoración de resoluciones judiciales

Las resoluciones judiciales se reconocen al registrarlas: además de entrante y
saliente hay una casilla «resolución judicial» que usted puede cambiar en cualquier
momento, y una ejecución en segundo plano revisa también el archivo existente. Las
resoluciones reconocidas pasan a una lista de valoración. La IA la recorre
resolución por resolución: lee la resolución y, mediante la herramienta de escritos,
los escritos de ambas partes, y responde a un conjunto fijo de preguntas. Nada se
guarda hasta que usted lo ordene expresamente. Una resolución no cambia, de modo
que se valora una sola vez.

| Función | Nombre técnico |
| --- | --- |
| **Resoluciones pendientes de la lista**, las más recientes primero: tribunal, órgano juzgador, jueces y letrados (cada uno con su ID de registro, o marcado como aún no presente en los datos maestros) y el resultado. | `list_court_decisions_to_assess` |
| **Preparar una resolución:** datos de cabecera, proporciones de texto medidas de la fundamentación, las preguntas de valoración con la estructura obligatoria del análisis y las herramientas para obtener los escritos de ambas partes. Después la IA puede leer la resolución sin cargar la vista general de su caso. | `prepare_decision_assessment` |
| **Registrar la valoración:** solo por orden expresa suya, solo cuando la resolución se ha leído por completo, solo con un análisis en inglés bajo siete encabezados obligatorios (argumentos, derecho, pruebas, base, estilo, resultado, caracterización), cada uno con contenido, y solo cuando cada juez y cada letrado tiene un registro en los datos maestros. Si falta alguno, la IA investiga primero a la persona en fuentes públicas y propone el registro. | `record_decision_assessment` Confirmación |
| **Valoraciones almacenadas** por juez, tribunal, número de procedimiento o caso, completas y sin recortes: las propias y, con IRONSTICK SERVER, las de todos los compañeros, indicando siempre quién valoró. La IA las consulta antes de cada escrito a un tribunal, para el tribunal y para cada juez del órgano juzgador. | `read_decision_assessments` |

Si aún quedan resoluciones sin valorar, la herramienta de entrega pregunta antes
de cada salida formal si deben valorarse ahora, para que el resultado todavía se
pueda tener en cuenta, o más tarde; con «más tarde», la pregunta de seguimiento
llega justo después de la entrega. La IA pregunta también en el primer inicio de
sesión del día.

### Reparación de OCR con verificación del abogado

Cuando un texto completo almacenado resulta estar truncado o dañado por una
pasada anterior de OCR, la IA puede repararlo, con usted como autoridad final.
Solicita un escaneo nuevo; usted elige las páginas en IRONSTICK (el mismo selector
de páginas que en el registro de documentos); el escaneo nuevo se normaliza de
forma determinista (marcas de agua eliminadas, patrones de OCR corregidos,
espaciado igualado) y se coloca en el almacén temporal junto al texto actual de la
base de datos. La IA compara entonces ambas versiones pasaje por pasaje y conserva
la que sea correcta. Tiene la instrucción de corregir únicamente errores mecánicos
de OCR, sin reformular y sin cambiar números, nombres ni importes.
IRONSTICK le muestra la versión corregida íntegra, y solo sustituye el texto
anterior tras su aprobación.

**Verificación dirigida por el abogado.** Allí donde un pasaje necesita la
mirada de una persona, la IA le pide que compruebe lugares concretos en
lugar de todo el documento:

- **Archivos grandes.** Para un PDF de más de 10 MB o 90 páginas, la IA
nombra el lugar exacto que debe comprobarse, por ejemplo «página 12, cerca de la
parte superior».
- **Unos pocos lugares, no todo el archivo.** Usted no revisa un expediente de
200 páginas. Abre el adjunto en la entrada que IRONSTICK ya le ha abierto, va a la
página indicada y transcribe las palabras o cifras ilegibles. Cuando un pasaje es
ilegible tanto en el texto anterior como en el escaneo nuevo, la IA le pide que lo
compruebe a simple vista: como máximo tres lugares, cada uno con página y
posición.
- **Retorno directo al texto completo.** Su transcripción se incorpora
literalmente a la versión corregida, pasa por el mismo diálogo de aprobación y el
análisis continúa.

IRONSTICK aísla los lugares
ilegibles y le pregunta únicamente por ellos.

| Función | Nombre técnico |
| --- | --- |
| **Solicitar un escaneo OCR nuevo** del PDF original almacenado, página por página, solo para textos completos dañados (usted elige las páginas; los documentos secretos quedan excluidos). | `request_ocr_rescan` |
| **Estado del escaneo:** una única consulta que devuelve el encargo de trabajo completo cuando el escaneo está listo (ambos textos en el almacén temporal). | `ocr_rescan_status` |
| **Entrega del PDF**, el último paso de la escalada: abre la entrada para que usted añada el PDF original al chat (hasta 10 MB / 90 páginas; para archivos mayores, la IA le pide que transcriba los lugares en cuestión, como máximo tres). Requiere un escaneo nuevo previo. | `request_pdf_handover` |
| **Entregar el texto completo corregido** a IRONSTICK; se le muestra íntegro, y solo su acción de guardar sustituye el texto completo almacenado. | `submit_corrected_fulltext` Revisión |

### Correo electrónico, calendario y plazos

| Función | Nombre técnico |
| --- | --- |
| **Correos que mencionan un término** (remitente, asunto, fragmento, adjuntos). | `search_emails_mentioning` |
| **Texto completo de un correo.** | `read_email_body` |
| **Entradas del calendario**, globales o por caso. | `read_kalender` |
| **Citas** de un día o de un periodo (audiencias, reuniones), con las fechas judiciales primero. | `read_appointments` |
| **Todo lo de la pantalla de plazos**, ordenado por fecha: plazos, próximas audiencias judiciales y vencimientos de entradas de la memoria de IA; filtrable por urgencia o por periodo. | `read_deadlines` |
| **Plazos activos** en forma de lista compacta, globales o por caso. | `read_fristen` |
| **Nueva entrada de calendario:** abre el formulario del calendario ya rellenado (título, fecha, horas, descripción, caso) tras una comprobación obligatoria de las entradas del mismo día; no se guarda nada automáticamente: usted revisa y guarda. | `add_calendar_entry` Revisión |

### Personas, instituciones y registros de trabajo

| Función | Nombre técnico |
| --- | --- |
| **Registro de una persona** (todos los campos de datos maestros y de análisis, completos) y red de relaciones de una persona o institución; cada respuesta empieza con los casos de la parte. | `read_person` / `read_person_relations` / `read_institution_relations` |
| **Conexiones de una parte:** todos los que están conectados con una persona, empresa o institución por relaciones registradas y casos compartidos, los más fuertes primero, con los casos de la parte en cabeza. Obligatorio para cada parte nombrada en un escrito. | `who_is_connected_with` |
| **Clústeres de la red de partes** (detección determinista de comunidades, como en la vista del Universo), con los grupos de densidad inusual resaltados y una separación opcional de personas e instituciones; y las partes más conectadas. | `read_cliques` / `read_top_connected` |
| **Nota en un caso compartido:** fija una nota en el tablón de un caso compartido a través de IRONSTICK SERVER; se publica directamente y es visible para el propietario del caso y para cada suscriptor. | `send_case_note` Compuerta 12 · Preparación |
| **Registro de una institución** con datos de contacto. | `read_institution` |
| **Diario diario:** leer los días recientes o buscar en ellos. | `read_tagesprotokolle` / `search_tagesprotokolle` |
| **Escribir en el diario de trabajo:** registra el trabajo del día (correos enviados, escritos redactados, argumentos elaborados, decisiones) a petición suya. A un día ya existente se le añade, nunca se sobrescribe; los casos afectados quedan vinculados. Escribe directamente. | `append_tagesprotokoll` Compuerta 12 · Preparación |
| **Nota breve** como una entrada en el diario de trabajo de hoy. Escribe directamente. | `add_daily_note` Compuerta 12 · Preparación |
| **Nueva entrada de crónica:** abre el formulario de crónica en el caso correcto, ya rellenado por la IA (título, descripción, fecha del evento, horas, palabras clave); no se guarda nada automáticamente: usted completa el formulario (añada imágenes si lo desea) y lo guarda. | `add_chronik_entry` Revisión |
| **Informe de inicio de jornada**, llevado por separado para cada IA de escritorio: en la primera llamada del día devuelve las últimas entradas del diario de trabajo y marca a la IA como informada; después lo indica así. | `daily_briefing` |
| **Tiempo de trabajo registrado** por caso y cliente. | `read_time_tracking` |
| **Entradas etiquetadas** en todos los casos. | `read_tags` |

### Reglas de trabajo, formatos y memoria

| Función | Nombre técnico |
| --- | --- |
| **Instrucciones de IA de un caso:** enumerarlas; la lectura devuelve siempre el texto completo. | `list_ki_instructions` / `read_ki_instruction` |
| **Todas las instrucciones de IA activas de un caso** en una sola llamada (textos completos). | `read_all_ki_instructions` |
| **Inventario de instrucciones de IA** de todos los clientes y casos (cliente, caso, ID de instrucción y nombre de archivo; sin textos completos). | `list_all_ki_instructions` |
| **Formato de salida:** las especificaciones vinculantes de formato. Para los documentos, la IA nombra el tipo exacto (escrito jurídico o carta sencilla, cada uno con o sin representación letrada) y recibe la misma plantilla que utiliza el chat integrado, mantenida en un único lugar. | `read_output_format` |
| **Formato del diario de trabajo:** el formato vinculante de archivo y de entrada. | `read_tagesprotokoll_format` |
| **Formato de correo al tribunal:** el formato vinculante para correos y paquetes de PDF dirigidos a tribunales (asunto y cuerpo del texto, listas de paquetes). | `read_mailversand_format` |
| **Memoria de IA compartida:** buscar conocimientos anteriores; proponer entradas nuevas (vinculadas a un cliente, hasta 1.000 caracteres). Una entrada nueva solo surte efecto tras su aprobación. Las entradas vinculadas a un caso no se borran nunca de forma automática; las entradas sin caso, tras un año sin uso, y cada uso renueva ese año. | `memory_search` / `memory_store` Revisión |
| **Mantener las entradas de la memoria:** reformular una entrada, mover o eliminar su fecha de vencimiento (con un informe de caracteres usados y libres), o borrarla; cada cambio solo surte efecto tras su aprobación. | `memory_update` / `memory_delete` Revisión |
| **Exportación del paquete de instrucciones de IA** de un cliente, a través del diálogo de exportación. | `export_ai_instruction` |

### Propuestas para su revisión

| Función | Nombre técnico |
| --- | --- |
| **Corrección de datos maestros o registro nuevo**, incluido un cambio de nombre y el tipo (persona física o jurídica); para un registro nuevo debe decidirse primero el tipo. La propuesta llega al Monitor de Coherencia de Datos para su aprobación. Un registro nuevo se responde primero con una lista de registros existentes similares, y no se guarda nada hasta que la IA archive contra uno de ellos o confirme expresamente una parte nueva; cada parte nueva guardada devuelve la tarea de seguimiento de investigar y archivar sus conexiones. | `propose_master_data` Revisión Compuerta 16 · Parte similar |
| **Relación** entre personas, o modificación de una existente; la misma vía de revisión. | `propose_relation` Revisión |
| **Asignar una parte a un caso:** exactamente una persona, empresa o institución, con una motivación obligatoria y referencias opcionales a documentos, llega al Monitor de Coherencia de Datos. Con la aceptación, la parte se convierte en interviniente del caso y aparece en las vistas de clústeres y de conexiones. Un vínculo ya existente o un duplicado pendiente se comunica en lugar de volver a proponerse. | `propose_case_link` Revisión |
| **Texto de análisis de una persona**; se rechaza salvo que la IA haya leído el perfil en los últimos 30 minutos. | `propose_person_analysis` Revisión Compuerta 14 · Lectura de análisis |
| **Comprobación de una parte en fuentes públicas**, sea persona o empresa: el procedimiento estándar para comprobar a una parte. Entran nombre, ciudad, distrito, país y tipo (persona física o jurídica). IRONSTICK ejecuta entonces siempre los mismos pasos: una búsqueda de texto completo del nombre en toda la base de datos (por caso, los diez documentos más recientes con posiciones de párrafo, más el número de otras coincidencias) y una lista fija de búsquedas web en el idioma del país de la parte en Google, DuckDuckGo y Qwant, con los duplicados eliminados. Devuelve un perfil preparado con cada término de búsqueda utilizado; la IA verifica cada hallazgo y cada enlace e introduce los datos a través del Monitor de Coherencia de Datos. | `osint_entity` |
| **Cotejo de listas de nombres:** coteja un documento que contiene una lista de nombres (una lista de contactos de una red social, una lista de asistentes o de firmas, un aviso legal de empresa) con todas las personas y empresas registradas en una sola llamada (se tienen en cuenta el orden de las palabras y los nombres de pila compuestos con guion; un único nombre de pila común nunca se da por coincidencia, y los aciertos de una sola palabra se marcan como ambiguos). Admite un ID de documento o un caso; en ese caso se comprueba y se nombra la entrada más reciente del caso. Sin IA, sin escrituras. | `entity_scan_evidence` |
| **Eliminación o duplicado:** propone eliminar un registro erróneo, una etiqueta o un plazo cumplido (es obligatoria una motivación en el idioma del sistema), o fusionar dos registros como duplicados. Nada se elimina ni se fusiona sin su aprobación. | `propose_deletion` / `propose_duplicate` Revisión |
| **Instrucción de IA modificada:** propone una versión nueva (una adición, un archivo o el contenido completo). IRONSTICK abre el caso, le muestra una comparación en rojo/verde y aplica el cambio solo después de que usted lo acepte; la decisión se comunica de vuelta a la IA. | `update_ki_instruction` Revisión |

### Almacén temporal para contenido voluminoso

Un área de trabajo local para la IA. Cualquier llamada a una herramienta puede
dirigir su resultado completo a un archivo del almacén temporal; la IA recibe
entonces solo la ruta y el tamaño, sin vista previa. Todo resultado por encima del
límite del conector (10.000 caracteres; 40.000 para Claude Desktop y ChatGPT
Desktop) va allí automáticamente de la misma manera, incluidos los abridores de
conjuntos de herramientas. El contenido voluminoso no pasa, por tanto, por la
salida de la IA en ninguna de las dos direcciones, lo que es más rápido, más barato
y evita errores de transcripción; la IA lo lee por partes desde el almacén. Los
archivos del almacén temporal pueden pasarse directamente a la herramienta de
entrega y a las actualizaciones de instrucciones. El almacén sobrevive a los
reinicios: las notas propias de la IA, su registro de estado y los registros de
cobertura de lectura se conservan; los volcados de herramientas de días anteriores
se eliminan en cada arranque, y los archivos que no se han leído ni escrito en 180
días se borran automáticamente (la versión final de un escrito, a los 360
días).

**El almacén temporal está cifrado.** Cada archivo que contiene está cifrado
en reposo con AES-256, con la misma derivación de clave que la base de datos de
casos y el almacén de documentos. La lectura y la escritura pasan únicamente por
IRONSTICK; un archivo en texto claro colocado en el almacén por cualquier otra vía
(una herramienta del sistema de archivos, una copia manual) se rechaza, se elimina
y se comunica a la IA como infracción de las reglas. Los archivos salen del
almacén únicamente a través del diálogo de exportación de IRONSTICK. La base de
datos, el almacén de documentos, el archivo de configuración y el almacén temporal
están, por tanto, cifrados con AES-256 en reposo.

**Ninguna herramienta acorta su propio resultado.** Las herramientas de lectura
de textos completos de documentos, casos enteros, correos, páginas web (leyes y
sentencias completas), diario de trabajo, registros de personas y crónica entregan
siempre su contenido completo. Una única regla central decide dónde llega: por
debajo del límite del conector, en la respuesta; por encima, íntegro en el archivo
del almacén temporal, de modo que la IA no tiene que adivinar el tamaño de un
resultado.

**Comprobación de frescura:** IRONSTICK vigila cada archivo del almacén temporal.
En cuanto cambian los datos subyacentes — un documento o una entrada de crónica
nuevos en el caso, una entrada del calendario o del diario de trabajo — o caduca un
archivo, su contenido se sustituye por un aviso que indica a la IA cómo volver a
obtenerlo. Los archivos del almacén que han quedado obsoletos se invalidan
automáticamente.

| Función | Nombre técnico |
| --- | --- |
| **Herramientas de texto:** escribir (por partes) y leer rangos de líneas numeradas; buscar con números de línea en un archivo o en todos; sustituir texto exacto; insertar en una línea o tras un marcador; eliminar o sustituir rangos de líneas en un solo paso. | `scratch_write` / `scratch_read` / `scratch_grep` / `scratch_edit` / `scratch_insert` / `scratch_delete_lines` / `scratch_replace_lines` Compuerta 4 · Cobertura de lectura |
| **Registro del estado de la sesión** (clave y valor), sobre todo para anotar qué archivo es el borrador principal actual; se conserva entre reinicios. | `scratch_statetracking` |
| **Esquema, comparación y recuentos:** todos los encabezados con sus rangos de líneas; comparación de dos archivos; una copia de trabajo; recuentos de palabras, letras y líneas. | `scratch_list_titles` / `scratch_diff` / `scratch_copy` / `scratch_countwords` / `scratch_countletters` / `scratch_countlines` |
| **Limpieza:** normalizar espacios y finales de línea y eliminar caracteres invisibles; crear en un archivo aparte una copia de comparación simplificada (en minúsculas, o sin signos diacríticos). | `scratch_correctspace` / `scratch_correctcrlf` / `scratch_asciskeleton` |
| **Formato de escrito:** obligatorio antes de entregar archivos Markdown; convierte la estructura Markdown al formato de escritos (tablas a líneas de texto, listas numeradas a «(1)», viñetas a «•», enlaces a texto). El contenido se conserva. | `scratch_normalizemd` |
| **Enumerar y borrar archivos del almacén temporal**; los archivos no utilizados en 180 días se borran automáticamente, y los conocimientos duraderos pertenecen a la memoria de IA. | `scratch_dirlist` / `scratch_deletefile` Compuerta 4 · Cobertura de lectura |

### Web, registros y validación

| Función | Nombre técnico |
| --- | --- |
| **Búsqueda web y obtención de páginas.** Cada búsqueda consulta Google, DuckDuckGo y Qwant al mismo tiempo y devuelve una única lista fusionada sin duplicados. Una página se obtiene como texto completo y legible: se extrae el contenido principal (navegación, publicidad y avisos de cookies eliminados; en las páginas de artículos, también el pie). En las páginas sin cuerpo de artículo, como las de empresa y de contacto, el pie se mantiene, porque allí figuran la dirección y los datos de contacto; cuando la extracción no dejaría prácticamente nada, se entrega la página entera. Una página bloqueada o que da error se intenta una vez más en el navegador incrustado, y se comunica el estado HTTP. Una llamada responde en un máximo de 45 segundos; un documento grande o escaneado se sigue procesando en segundo plano y se entrega de inmediato en la siguiente llamada con la misma dirección. | `web_search` / `open_url` Compuerta 2 · Normas |
| **Un único artículo de una ley**, literalmente, por número de biblioteca y número de artículo: la vía prevista y más económica para fundamentar una cita; registra exactamente ese artículo como leído. | `get_legal_article` |
| **Volver a comprobar una ley** contra su fuente ahora (sin cambios, actualizada o duplicada); una versión más reciente sustituye la entrada, también en todo el despacho en IRONSTICK SERVER, donde prevalece la comprobación más reciente. | `recheck_legal_source` |
| **Buscar, obtener y añadir leyes.** La búsqueda es aproximada y el ordenamiento jurídico es un parámetro obligatorio, de modo que nunca se mezclan ordenamientos. La obtención devuelve el texto legal almacenado literalmente como Markdown, de modo que la IA cita de la biblioteca verificada y no de la memoria del modelo. La IA debe registrar cada fuente pertinente que encuentre en línea, solo como enlace; IRONSTICK descarga, convierte y verifica el texto por sí mismo, y usted lo libera mediante la revisión en el Monitor de Coherencia de Datos. | `search_legal_source` / `get_legal_source` / `add_legal_source` Compuerta 2 · Normas Revisión |
| **Inventario de la biblioteca y extractos:** recorrer la biblioteca por páginas (ID, ordenamiento jurídico, título, fecha de revisión); obtener un extracto literal de una ley por número de biblioteca y rango de caracteres (los resultados de búsqueda aportan una llamada ya preparada con un rango ampliado); cargar una ley entera por número de biblioteca. | `list_legal_sources` / `grep_legal` / `get_legal_by_lnumber` |
| **Validación** de números de IVA (en vivo contra el servicio VIES de la UE), números EORI, LEI, IBAN y números nacionales de identificación (nueve esquemas en siete países). | `validate_vat_vies` / `validate_eori` / `validate_lei` / `validate_iban` / `validate_id_number` |
| **Registro mercantil:** abre la búsqueda «Encontrar una empresa» del portal europeo e-Justice (BRIS) en el navegador incrustado para que la IA la lea. | `check_handelsregister` |

**Mantenimiento de la biblioteca y uso compartido en todo el despacho.** Cada ley
de la biblioteca jurídica lleva su enlace a la fuente y su fecha de revisión; las
entradas no revisadas desde hace más de un mes quedan señaladas. Rechazar una ley
en el Monitor de Coherencia de Datos pide primero confirmación. Con IRONSTICK SERVER en un NAS de Synology, la biblioteca se
comparte en todo el despacho: una ley verificada una vez por un colega es citada
por la IA en todos los puestos de trabajo, con el mismo texto y la misma versión.

### Revisión por pares mediante una segunda IA de escritorio

| Función | Nombre técnico |
| --- | --- |
| **Entregar para revisión:** pasa un trabajo producido por la IA (argumento, estrategia, escrito) a otra IA de escritorio para su revisión crítica. El texto completo se coloca en un búfer de corta duración, y una tarea apunta a él. Petición típica: «Pídele a la otra IA que lo compruebe». | `handoff_to_peer` |
| **Tareas de revisión abiertas** que la otra IA ha dirigido a esta (las propias nunca aparecen), con su contenido completo. | `read_open_tasks` |
| **Responder:** cierra una tarea entrante (su contenido se borra) y devuelve la valoración al remitente como tarea nueva, en una sola llamada. | `reply_to_task` |
| **Cerrar sin respuesta:** termina la ronda; el contenido de corta duración se borra. | `complete_task` |

### Traspaso y entrega

| Función | Nombre técnico |
| --- | --- |
| **Exportar un documento** del expediente como PDF a su carpeta Documentos. | `export_pdf` |
| **Ficha personal:** abre el diálogo de exportación con la ficha personal en PDF de una parte (datos maestros, intervención en casos, análisis de la persona, relaciones; solo los campos rellenados). | `export_entity` |
| **Verificación de escritos:** la comprobación determinista obligatoria de un escrito terminado: referencias a documentos con registros de lectura vinculados al documento, citas normativas contra la biblioteca verificada, citas literales, números de procedimiento en el formato n/nnn/aaaa, importes (coincidencia exacta), datos maestros de las partes, números personales rumanos (CNP) e IBAN (suma de control), y cada parte nombrada leída y comprobada en cuanto a sus conexiones. La entrega de un documento formal queda bloqueada sin una verificación positiva reciente para el estado exacto del archivo; verificar un documento distinto reinicia las lecturas de anexos. | `verify_pleading` Compuerta 3 · Verificación de escritos |
| **Entrega de archivos:** entrega un archivo terminado a través del diálogo de exportación de IRONSTICK; un borrador de texto pasa al procesador de textos con un clic, como plantilla lista para presentar. Acepta únicamente un archivo del almacén temporal de la aplicación; el contenido en línea y otras rutas se rechazan, de modo que la verificación, el versionado y el seguimiento de reentregas permanecen ligados a cada entrega. Si aún quedan abiertas resoluciones judiciales de la lista de valoración, pregunta antes de cada escrito y de cada correo a un tribunal o una autoridad si deben valorarse ahora o más tarde. | `deliver_file` Compuerta 3 · Verificación de escritos Compuerta 7 · Contenido formal Compuerta 8 · Series de versiones |
| **Repetir una entrega:** abre de nuevo el diálogo de IRONSTICK para un archivo que ya se entregó y que no ha cambiado desde entonces, cuando usted pide el mismo archivo otra vez; sin compuertas, sin revisión, sin versión nueva. Los archivos aún no entregados, o modificados tras la entrega, se rechazan y se anotan como infracción de las reglas; requieren una entrega nueva. | `redeliver_file` |

### Utilidades

| Función | Nombre técnico |
| --- | --- |
| **Ubicación y tiempo:** ubicación aproximada del usuario (país, ciudad) según el último registro de inicio de sesión; tiempo meteorológico actual de un lugar indicado. | `get_my_location` / `get_weather` |

## 7. Guardianes de diligencia: cómo comprueba el Bridge el cuidado de la IA

Ocho **guardianes de diligencia deterministas** comprueban con qué cuidado
trabaja realmente la IA conectada. Al ser pura contabilidad y lógica de texto, no
intervienen en ellos ninguna IA y el modelo no puede anularlos:

- **Guardián de cobertura de lectura.** Cuando la IA obtiene el texto completo
de un caso, los archivos de preparación de un caso o un texto completo por encima
del límite del conector, el Bridge registra línea por línea qué tramos ha leído
*realmente* y conserva esos registros entre reinicios. Mientras queden
lagunas, **cada** respuesta de herramienta, incluidas las búsquedas, enumera los
tramos de líneas exactos no leídos con un porcentaje. No puede afirmarse una
lectura completa hasta que los registros la confirmen; solo entonces recibe la IA
la confirmación única *“COMPLETE — todas las líneas leídas”*, y la
lectura se registra para la preparación del caso.
- **Sin vista previa.** Cualquier resultado por encima del límite del conector
(10.000 caracteres; 40.000 para Claude Desktop y ChatGPT Desktop) se escribe
íntegro en el almacén temporal; la IA recibe solo una nota con el nombre del
archivo, su tamaño y los dos comandos para continuar. Nada se muestra dos veces, y
el contenido voluminoso se lee en el almacén temporal. Esto vale para toda
herramienta, incluidos los abridores de conjuntos de herramientas; solo el lector
de instrucciones y las propias herramientas del almacén temporal responden
directamente. Ninguna herramienta acorta su propio resultado: por debajo del
límite llega completo en la respuesta; por encima, completo en el almacén
temporal.
- **Guardián de reentrega.** Si la IA sigue corrigiendo un archivo de trabajo
*después* de habérselo entregado ya a usted, cada edición posterior se
responde con el recordatorio de que usted tiene en este momento la versión
obsoleta y de que el archivo corregido **debe** entregarse de nuevo.
- **Guardián de borradores no entregados.** Cuando la IA escribe su diario de
trabajo, su señal de que está terminando, el Bridge enumera por su nombre cada
borrador versionado escrito en la sesión que nunca se entregó. El trabajo
terminado no puede quedar sin advertir en el almacén de trabajo de la IA.
- **Guardián del formato de correo.** Todo acceso al contenido de correos
lleva una remisión a la especificación vinculante del formato de correo (asunto,
cuerpo del texto, contenido obligatorio, reglas de idioma), de modo que se recuerda
a la IA la única vía de entrega correcta *antes* de que redacte un
correo.
- **Guardián de cajas para copiar.** Cada vez que la IA escribe o edita un
archivo de trabajo de texto, la respuesta le recuerda que los documentos llegan al
usuario **únicamente** a través de la herramienta de entrega; pegar una carta
terminada en el chat como texto o como caja para copiar elude el formato, la
verificación y el seguimiento de entregas, y cuenta como infracción de las reglas.
El único formato legítimo de caja para copiar sigue siendo el correo electrónico,
tal como lo define la especificación del formato de correo.
- **Ancla del caso.** Toda respuesta de herramienta que concierne a un caso
lleva el número registrado, el cliente y el objeto del caso (compuerta 10), de modo
que el contexto tomado de otro caso queda expuesto en la misma ventana.
- **Orientación sobre el nivel de modelo.** Las instrucciones indican a la IA
qué clase de modelo requiere una tarea: antes de las herramientas de escritos
(formato de salida, verificación, entrega) le pide a usted, en una frase, que
cambie el cliente de escritorio al modelo de gama más alta, y tras la entrega le
indica que vuelve a bastar un modelo más económico. Cuando los contadores de
propuestas indican mantenimiento de la red de partes (dos propuestas de datos
maestros y una propuesta de relación o de vínculo con un caso), el Bridge añade,
una vez por sesión, la indicación de que este trabajo, íntegramente protegido por
compuertas, no necesita un modelo de gama más alta. Usted decide; la IA sigue
trabajando.

La ejecución de las herramientas discurre por separado de la interfaz de usuario
dentro de la aplicación, de modo que las lecturas largas de la IA sobre expedientes
grandes no bloquean la interfaz de usuario de IRONSTICK.

## 8. Verificación de escritos: entrega solo tras la prueba

Los escritos y las cartas se redactan en diálogo con la IA de escritorio sobre
el expediente en vivo, con el mismo plano de trabajo y las mismas compuertas que el
chat integrado de IRONSTICK. Lo que sale del sistema es una **plantilla lista para
presentar**, para que usted la revise y la firme.
Dos comprobaciones preceden a cada entrega: la verificación determinista descrita
aquí y — si usted lo activa en la configuración para el modelo de API activo — la
revisión **Red/Blue Team**: una pasada de revisión aparte lee el borrador como
abogado de la parte contraria; los hallazgos sustanciales lo devuelven para su
reelaboración, como máximo dos rondas, y cada punto se analiza en cuanto al fondo y
no se adopta automáticamente. Si la IA considera infundados los hallazgos, vuelve a
presentar el archivo sin cambios con una respuesta escrita a cada hallazgo; el
revisor no se ejecuta por segunda vez sobre un archivo sin cambios, y el informe del
revisor le llega a usted junto con esas respuestas. La entrega propiamente dicha
discurre por el diálogo de exportación de IRONSTICK, desde donde el borrador pasa al
procesador de textos con un clic.

**Sin cambios silenciosos tras la entrega.** Una vez entregado un documento,
una corrección nunca se hace en silencio: la versión anterior se anula de forma
visible y se crea una nueva versión. Sus correcciones se tienen en cuenta en la
revisión.

Un escrito formal no puede salir del sistema sin comprobar.
`verify_pleading`, un verificador determinista (sin IA), coteja el
borrador terminado con sus registros en vivo y con la biblioteca jurídica
verificada en **ocho clases**:

- **Referencias a documentos** — sellos de presentación y números #, en la
lista de anexos y en el texto corrido: existencia, pertenencia, integridad del
sello y **registro de lectura vinculado al documento**. Cada elemento citado o
adjunto debe constar como leído para este documento, bien obtenido íntegramente,
bien con su archivo del almacén temporal leído por completo; una lectura cuenta
durante 2 horas, cada entrega del mismo documento la prorroga, y verificar otro
documento reinicia las lecturas de anexos. Citar a partir de fragmentos de
búsqueda o de memoria no supera la verificación. Una línea de anexo puede indicar
un rango de páginas (“p. 12–15”); el deber de lectura sigue abarcando
el documento entero.
- **Citas normativas** — el artículo citado debe existir en el texto de la
biblioteca verificada (tolerante al punto de millares, exacto en los límites de
palabra) y debe contar con un **registro de lectura**: la IA debe haber obtenido
ese artículo de la biblioteca en esta ejecución del programa. Los artículos de
prensa, los resúmenes web y la memoria del modelo nunca fundamentan una cita
normativa y no superan la verificación. Las subreferencias citadas (apartado,
punto) también se comprueban en cuanto a su existencia. Una fuente que falta en la
biblioteca no se ignora: la IA debe solicitarla, y la solicitud aparece en **su
diálogo de consentimiento**. Las fuentes seleccionadas se obtienen, se verifican
y se almacenan; las rechazadas no, y cada cita posterior de ellas lleva una nota
visible de “rechazado por el usuario”.
- **Citas literales** — toda cita debe aparecer literalmente en un documento
de su archivo o en la biblioteca jurídica (tolerante al OCR). Si procede de un
documento de otro caso, el verificador nombra ese documento, y la IA lee entonces
solo ese documento, no la vista general del otro caso. Una cita que no se
encuentra en ninguna fuente se marca como contradicha y bloquea la entrega. Quitar
las comillas o reformular ligeramente el pasaje no sirve de nada: la cita
bloqueada se recuerda para el documento y sigue bloqueada. Se permite suprimir por
completo la cita, y la entrega le indica qué citas se han eliminado porque ninguna
fuente las contiene.
- **Números de procedimiento** en el formato n/nnn/aaaa, comprobados contra
sus casos y registros.
- **Importes: se exige coincidencia exacta.** La cifra debe coincidir
exactamente con la forma registrada; “14.500” donde el registro dice
“14.500,00” bloquea la entrega hasta que se corrija.
- **Datos maestros de las partes** — cada nombre utilizado debe coincidir con
la grafía registrada letra por letra, incluidos los signos diacríticos.
- **Números personales rumanos (CNP) e IBAN** — validación de la suma de
control (un dígito de control no válido indica un número inventado o mal
transcrito) más la coincidencia con los registros.
- **Partes nombradas** — cada persona o empresa nombrada en el documento debe
haber sido leída (perfil) y comprobada en cuanto a sus conexiones
(`who_is_connected_with`); el rechazo nombra las dos llamadas y
recomienda además la prueba de clústeres (`read_cliques`).

Cada hallazgo se califica como verificado, no verificado o contradicho. La
entrega de un documento formal se rechaza sin una verificación positiva reciente
para el estado exacto del archivo; **cada edición la anula**. Tras cinco pasadas
de verificación fallidas, el proceso se detiene, se ordena a la IA detenerse e
informar, y se le notifica a **usted** directamente en la aplicación. Las
entregas discurren exclusivamente por el almacén temporal propio de la
aplicación, de modo que la verificación, el versionado y el seguimiento de
reentregas permanecen ligados a cada archivo; la entrega en línea y las demás
rutas se rechazan.

## 9. Protección de datos

El Bridge entrega **datos del caso en bruto** a la sesión de
su IA de escritorio, deliberadamente, porque redactar una plantilla lista para
presentar requiere nombres, cifras y fechas reales. Todo lo que la IA lee allí se
trata bajo su propia cuenta con el proveedor (Anthropic, OpenAI, Qwen o Moonshot AI
/ Kimi) y bajo las condiciones de este. El chat integrado, en cambio, transmite
datos seudonimizados a través del enrutador. La exposición completa, incluidos los
límites, figura en la [*IRONSTICK — Declaración de flujos de datos conforme al
RGPD*](https://www.ironstick.legal/gdpr_es.html).
**Proveedores gratuitos para tareas en segundo plano.** El Bridge
no utiliza los proveedores gratuitos que puede activar en la configuración para las
tareas en segundo plano (Groq, OpenRouter, Mistral).
**Código de acceso.** El Bridge respeta el bloqueo de arranque de
IRONSTICK: hasta que se haya introducido el código de seis dígitos del autenticador
en la pantalla de inicio de IRONSTICK, toda llamada a una herramienta se responde
con «aplicación bloqueada: aún no se ha introducido el código de seguridad» y no
se devuelve ningún dato de casos. Introduzca el código en IRONSTICK y, a
continuación, repita la petición.
Versión 1.0.7 — a noviembre de 2026. La lista de herramientas refleja
el Bridge entregado con esta versión; con el tiempo pueden añadirse herramientas.

## Anexo — Descripción técnica completa del Bridge

Alcance: versión 1.0.7 — a noviembre de 2026; más de 200 herramientas en 22 conjuntos de herramientas, Model Context Protocol (MCP). Este anexo está redactado para la revisión por parte de TI y de protección de datos y describe la arquitectura, cada capa funcional, las salvaguardas, los límites y las redirecciones del Bridge.

### 1. Finalidad y posicionamiento

El Bridge conecta aplicaciones comerciales de IA de escritorio (Claude Desktop, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) con una aplicación de gestión de casos jurídicos IRONSTICK en ejecución en el mismo equipo. La IA de escritorio recibe una superficie de herramientas controlada y autodescriptiva a través del Model Context Protocol (MCP); cada llamada se ejecuta dentro de la aplicación IRONSTICK contra la base de datos en vivo, y cada resultado es posprocesado por el Bridge antes de llegar al modelo. Los objetivos de diseño son: una carga de contexto permanente mínima para el modelo, la imposición estructural de reglas de trabajo que el mero texto de instrucciones no puede garantizar, la protección del trabajo no guardado del usuario, la protección de los datos frente a solicitudes sobredimensionadas o mal dirigidas, y la ausencia total de material de configuración legible en el producto instalado.

### 2. Topología de procesos

El Bridge consta de dos procesos que cooperan.

La aplicación IRONSTICK ejecuta un servicio local y protegido al que solo se puede acceder desde el mismo ordenador. Este servicio posee el registro de herramientas, ejecuta todas las llamadas a herramientas, aplica todas las compuertas y posprocesadores y es la única instancia determinante de lo que un modelo conectado puede ver y hacer.

Delante de cada IA de escritorio hay un pequeño ejecutable nativo. Habla el protocolo MCP estándar hacia la IA de escritorio y transmite el trabajo a la aplicación a través de la conexión local protegida. Cada IA de escritorio tiene su propia copia de este archivo con su propio identificador de llamante; junto al Bridge no hay ningún archivo de instrucciones. El identificador de llamante acompaña a cada llamada a herramienta como argumento interno y gobierna todo el comportamiento por IA. Además, mientras haya una IA de escritorio conectada, el front-end envía a la aplicación un latido aproximadamente cada tres segundos; la aplicación lo muestra como indicador de presencia «Bridge conectado» con una vigencia de quince segundos, de modo que el usuario siempre ve si hay una IA externa conectada en ese momento.

En el handshake de inicialización MCP, el front-end devuelve su identidad de servidor y, incrustado en el resultado de initialize, el texto de instrucciones para el inicio de sesión; obtiene ese texto en ese mismo momento a través de un canal interno de la aplicación en ejecución. Si la aplicación está cerrada, no se entrega ninguna instrucción, y el bloqueo de instrucciones de la aplicación impone la lectura en cuanto se ejecuta. El manual de reglas completo sigue disponible para el modelo en cualquier momento mediante una herramienta propia.

### 3. Seguridad, licencias y consentimiento

El tráfico entre el programa Bridge de la IA de escritorio e IRONSTICK permanece en este ordenador (bucle local, protegido por token); solo las herramientas web y de registros acceden a internet. Las herramientas de acceso web solo alcanzan direcciones públicas de Internet, de modo que no es posible dirigir a un modelo a través del Bridge para que explore el ordenador o la red local.

El Bridge y las integraciones de escritorio por proveedor son módulos adicionales con licencia separada. Cada uno se desbloquea como un bit de módulo en la clave de licencia firmada de la App cliente; no existe una clave de Bridge aparte. Un módulo no licenciado no se instala ni se expone.

Una compuerta de consentimiento protege el primer acceso a datos por ejecución del programa para cada conexión de IA de escritorio: la primera llamada a una herramienta de cualquier IA de escritorio tras el arranque del programa abre un único diálogo de advertencia sobre la pantalla actual. Si el usuario aprueba, el acceso queda abierto para todas las IA de escritorio durante el resto de la ejecución; si el usuario rechaza, todas quedan bloqueadas durante diez minutos, y cada llamada bloqueada devuelve a la IA de escritorio un mensaje que le pide volver a intentarlo más tarde; pasados los diez minutos, el siguiente acceso vuelve a abrir el diálogo. El estado se mantiene únicamente en memoria y nunca se almacena.

Con independencia del consentimiento, un bloqueo de acceso por instrucciones protege cada conexión de escritorio: ninguna herramienta, incluidos los abridores de conjuntos de herramientas y la herramienta de ejecución de miembros, se ejecuta hasta que el llamante haya leído las instrucciones y citado literalmente la prohibición de alucinación (regla 5) mediante la herramienta de confirmación; solo el lector de instrucciones, la herramienta de confirmación y la herramienta del idioma del sistema permanecen disponibles. La confirmación se mantiene por cada IA de escritorio y caduca sesenta minutos después de haberse dado, tras dos horas sin ninguna llamada, a medianoche, en cada nueva conexión y cuando la IA de escritorio compacta su contexto; tras una caducidad, el llamante debe releer las instrucciones y citar una regla elegida al azar en lugar de la que ya conoce. En la conexión de Claude cada chat es un llamante aparte (distinguido mediante los eventos estructurados de herramientas del registro local de sesión de Claude, nunca por el texto de la conversación); un chat cuyo contexto se ha compactado se bloquea de inmediato, sin penalización, hasta que haya releído las instrucciones; y a un chat que accede a la carpeta de datos con sus propias herramientas de archivos en lugar de con el conector se le anota esto como infracción de las reglas. Un rechazo nombra las dos llamadas que abren el bloqueo, y el menú desplegable del símbolo de la IA en la aplicación muestra el estado como una marca verde o una cruz roja.

Toda función que lee o escribe datos se valida en cuanto al propietario contra la identidad de propietario derivada de la licencia. Los registros de pruebas marcados como secretos quedan excluidos sin excepción de toda función de lectura, búsqueda, volcado y sellado; los registros marcados como borrados son igualmente invisibles.

### 4. Sistema de instrucciones

Las directrices del modelo llegan en tres capas de especificidad estrictamente creciente y de permanencia estrictamente decreciente.

La instrucción básica se entrega una sola vez, dentro del resultado de initialize. Contiene el mandato (trabajo jurídico basado en hechos con el nivel de un abogado sénior), las reglas universales (el idioma del diálogo es el idioma del sistema de IRONSTICK; el ordenamiento jurídico de los documentos generados procede del caso, nunca del diálogo; disciplina de fechas; no citar a partir de fragmentos de búsqueda — toda página en la que se apoye la IA debe abrirse y leerse mediante open\_url, sea cual sea la búsqueda que la haya encontrado; disciplina de citas y referencias; el límite de tres intentos por cada llamada a herramienta que falla; disciplina de entrega), y la descripción del propio mecanismo de conjuntos de herramientas, incluida la explicación del campo de conjunto de origen.

Las reglas de trabajo por área no son residentes: se entregan al modelo literalmente y en su versión actual cada vez que abre el conjunto de herramientas correspondiente, como parte de la carga de apertura.

El manual de reglas completo — la instrucción básica más todas las reglas de los conjuntos de herramientas más los apéndices (entre ellos el formato de archivo del diario de trabajo) — puede releerse en cualquier momento a través de la herramienta de lectura de instrucciones; la aplicación lo sirve en vivo en cada llamada, de modo que los cambios en las instrucciones llegan a una sesión en curso sin necesidad de reconectar.

Tres de estas reglas se imponen además de forma estructural y no textual, mediante compuertas: el bloqueo de acceso, la disciplina de fechas y la disciplina de fuentes normativas. La propia lectura de las instrucciones es la última regla del bloque universal: la manera de desbloquear el conector solo se enuncia después de todas las reglas precedentes, de modo que un modelo que llega a ella las ha leído.

### 5. La superficie de herramientas y la capa de conjuntos de herramientas

Para que la selección de herramientas siga siendo fiable, el Bridge no expone a la vez todas sus más de 200 herramientas. Expone una superficie reducida de unas treinta entradas: siete herramientas básicas (fecha y hora actuales; contexto actual de la interfaz; idioma del sistema; ordenamiento jurídico del caso; relectura de las instrucciones; confirmación de las instrucciones; manual de usuario), la herramienta de entrega, veintidós aperturas de conjuntos de herramientas, la herramienta de ejecución de miembros y la herramienta de inventario completo. Todo lo demás existe solo como miembro dentro de los conjuntos de herramientas.

Abrir un conjunto de herramientas es una llamada a herramienta ordinaria sin argumentos. La respuesta entrega, de una sola vez: primero, cuando el conjunto lo tiene, un bloque de contexto pregenerado de forma determinista y calculado en el momento de la apertura (ocho conjuntos de herramientas tienen tales productores — el propio protocolo de inicio de sesión; el inventario actual de archivos del almacén temporal; las diez entradas de memoria más recientes como vista previa; las treinta primeras leyes de la biblioteca jurídica; la lista de casos calientes; los documentos registrados hoy y los correos entrantes de hoy; el diario de trabajo de hoy; la instantánea actual de plazos y citas); segundo, las reglas de trabajo literales del área; tercero, las definiciones completas de las herramientas miembro con sus esquemas de parámetros íntegros; cuarto, una línea de reserva que remite al inventario completo. Un fallo dentro de un productor de pregeneración nunca impide la apertura.

Los miembros se ejecutan a través de la herramienta de ejecución de miembros, que recibe el nombre exacto del miembro y un objeto de argumentos. Antes de la ejecución se realiza una validación ligera del esquema: los campos obligatorios deben estar presentes y no vacíos, y los parámetros enteros, numéricos y booleanos deben poder interpretarse como tales; una infracción devuelve el esquema esperado en lugar de ejecutar. Un nombre de miembro desconocido devuelve como sugerencia el nombre existente más cercano por distancia de edición. La capa de instrucciones limita los intentos de corrección a tres por cada llamada que falla, tras lo cual el modelo debe detenerse y comunicar el error exacto.

Los conjuntos de herramientas no son modales; todos los abridores siguen siendo invocables en todo momento y una herramienta puede ser deliberadamente miembro de varios conjuntos. Las compuertas de funcionalidad eliminan grupos enteros: cuando el usuario no ha habilitado la navegación por la interfaz gráfica, el abridor del conjunto de navegación y todos sus miembros están ausentes de toda lista y de toda respuesta. La herramienta de inventario completo enumera cada miembro con una finalidad de una línea y el conjunto al que pertenece, y existe únicamente como alternativa; las descripciones de los conjuntos de herramientas son el enrutador principal. En total, los veintidós conjuntos de herramientas contienen más de 340 entradas de miembro sobre más de 200 herramientas distintas.

El coste de contexto medido de esta disposición: la configuración inicial (instrucción básica más lista reducida de herramientas) es de unos diez mil tokens; la apertura de un solo conjunto de herramientas añade entre unos novecientos y siete mil quinientos tokens según el conjunto, antes de su contenido variable de pregeneración.

### 6. Formato de definición de herramientas

Cada definición de herramienta consta de cuatro partes. La descripción contiene la finalidad de la herramienta, sus mandatos de comportamiento y sus referencias cruzadas — y nada más. El esquema de entrada contiene cada parámetro con su propia descripción, incluidos valores por defecto, formatos, notas de exclusión mutua y mandatos por parámetro; las instrucciones de uso de los parámetros residen exclusivamente aquí. El campo de salida describe, antes de cualquier llamada, exactamente lo que la llamada devuelve, incluidos ordenamientos, marcadores y formas de error, de modo que el modelo pueda juzgar la idoneidad sin llamadas de prueba. El campo de conjunto de origen nombra el conjunto de herramientas al que la herramienta pertenece principalmente, con un valor reservado que marca las herramientas básicas que están siempre en la lista de nivel superior; un miembro encontrado dentro de otro conjunto anuncia así dónde viven más herramientas de su familia, y cada apertura de un conjunto lleva una línea explicativa que indica que el modelo nunca queda encerrado en el conjunto abierto.

Todo el texto dirigido al modelo está en inglés. Las definiciones de las herramientas se generan a partir de una única fuente y se comprueban automáticamente en cuanto a su coherencia, incluida la concordancia entre el conjunto de origen de cada herramienta y las listas de miembros de los conjuntos. Los límites numéricos declarados en los esquemas de las herramientas se imponen en las funciones ejecutoras, de modo que un máximo declarado es un máximo real.

### 7. Mecanismos universales en tiempo de ejecución

Los mecanismos siguientes se aplican a toda la superficie de herramientas y están implementados de forma centralizada, no por herramienta.

Redirección al almacén temporal a petición: toda herramienta acepta un parámetro adicional que nombra un archivo del almacén temporal; cuando se establece, el resultado completo se escribe en ese archivo y el modelo recibe solo la ruta y el tamaño — sin vista previa. El contenido voluminoso no fluye así nunca por el flujo de tokens del modelo en ninguna de las dos direcciones, y la ruta es directamente utilizable allí donde se acepte una ruta de origen.

Protección contra desbordamiento: todo resultado que exceda el límite del conector — diez mil caracteres, una única constante central, elevada a cuarenta mil (cuatro veces el estándar) para Claude Desktop y ChatGPT Desktop — se escribe automáticamente en un archivo generado del almacén temporal. El modelo recibe solo una nota que indica el tamaño total y el número de líneas, el nombre del archivo, la garantía explícita de que no se pierde nada, los dos comandos de continuación (lectura por rangos; búsqueda de patrones en el archivo) y la prohibición expresa de volver a solicitar la llamada — sin vista previa, de modo que el contenido voluminoso se lee en el almacén temporal. La única excepción es el lector de instrucciones, cuyo paquete llega siempre completo; los abridores de conjuntos de herramientas se desvían como cualquier otro resultado. Ninguna herramienta acorta su propio resultado — el límite del conector es el único lugar donde se decide el tamaño. Los resultados de más de diez megabytes no se desvían, sino que se responden con una instrucción de acotación que nombra los filtros aplicables, ya que incluso el almacén temporal limita ahí el tamaño de archivo. Quedan exentas del desvío las propias herramientas de lectura del almacén temporal (limitadas internamente; desviarlas produciría recursión) y las llamadas que ya solicitaron la redirección al almacén temporal.

Compuerta de fecha: toda herramienta que escribe en IRONSTICK se rechaza para los llamantes externos salvo que ese llamante haya obtenido la fecha y la hora actuales en los últimos treinta minutos. El rechazo nombra el remedio — obtener la hora y después repetir la llamada idéntica. La ventana se lleva por cada IA de escritorio y es deliberadamente breve, para que una conversación nueva no pueda heredar una obtención antigua y para que se detecten los cambios de día a medianoche. Los llamantes internos de la aplicación no se ven afectados. Esto existe porque, de lo contrario, los modelos externos fechan los registros con su periodo de entrenamiento en lugar de la fecha real.

Compuerta de normas: el acceso web para leyes y normas se rechaza estructuralmente hasta que se haya consultado la biblioteca jurídica interna; el rechazo remite al procedimiento de la biblioteca. Toda fuente normativa que, pese a ello, se obtenga de la web debe notificarse a la biblioteca mediante la herramienta de registro — la capa de instrucciones califica la omisión de incumplimiento de un deber, y los resultados que tocan fuentes jurídicas llevan un marcador a efectos de auditoría.

Bloqueo duro de navegación: ocho pantallas están declaradas protegidas — los cuatro formularios de registro (registro de documentos, registro de documentos vinculado al caso, registro de la crónica del caso, registro de clientes), el formulario de creación de casos, el formulario de asignación de instituciones/personas y el editor de textos. Mientras la ventana principal del usuario muestre cualquiera de ellas, toda función de navegación por la interfaz gráfica y de exportación se rechaza de forma centralizada, tanto para las llamadas directas como para la ejecución de miembros, con un mensaje que nombra la pantalla protegida, prohíbe la navegación e instruye al modelo para que responda con los datos de que dispone y ofrezca la apertura solo después de que el usuario haya terminado y guardado. Un modelo no puede, por tanto, destruir nunca trabajo no guardado del usuario cambiando de pantalla. La herramienta de apertura de páginas web está exenta de este bloqueo, ya que no navega por la aplicación.

Oferta de navegación: los resultados de las aproximadamente cuarenta herramientas cuya salida describe un objeto que puede abrirse en la interfaz gráfica — un caso, una persona, una institución, un cliente, un elemento de prueba concreto, un correo electrónico, entradas de calendario o plazos — reciben una línea añadida que propone que el modelo ofrezca al usuario abrir el objeto directamente en IRONSTICK, nombrando la llamada de navegación exacta. Cuando los argumentos de la invocación contienen el identificador del objeto, la propuesta es concreta; para los resultados de búsquedas y listados remite al identificador de un resultado. La línea exige expresamente la conformidad del usuario antes de navegar, salvo que la petición del usuario ya fuera una orden de mostrar o abrir. La oferta se añade solo después del tratamiento del desbordamiento, y solo cuando el resultado no es un error, la navegación está habilitada y el bloqueo duro de navegación no está activo — el bloqueo prevalece siempre sobre la propuesta.

Propagación del llamante: la identidad del llamante acompaña cada ejecución y gobierna el estado por IA — el informe de trabajo diario, de una vez al día, se lleva por cada IA de escritorio, los listados de tareas de revisión por pares excluyen las tareas propias del llamante, y el registro de llamadas atribuye cada línea.

Registros de llamadas: cada programa Bridge mantiene junto a sí un registro local con la hora, el nombre de la herramienta, el éxito o el fallo y el tamaño de la respuesta, y nunca el contenido. Un segundo registro de diagnóstico, más detallado, en la carpeta de datos está desactivado por defecto. Cuando se activa para la resolución de problemas (análisis de rutas, optimización de los conjuntos de herramientas), anota una línea por cada llamada a herramienta de todas las IA conectadas — marca de tiempo, llamante, el nombre efectivo de la herramienta (en la ejecución de miembros, el miembro interno), los parámetros de la llamada (hasta trescientos caracteres cada uno), el tamaño del resultado medido antes de cualquier desvío por desbordamiento, la duración de la ejecución y un indicador de error. Puede activarse y desactivarse sin reiniciar, se recorta automáticamente cuando supera los dos megabytes y está pensado para desactivarse después.

Plegado de signos diacríticos y de escrituras: toda búsqueda por palabra clave, búsqueda de patrones y comparación en todo el Bridge pliega mayúsculas y signos diacríticos para los once idiomas del sistema, incluida la i turca con punto y sin punto (sustituida antes de la conversión a minúsculas, ya que de lo contrario cambia de longitud), las variantes de letras cirílicas y las ligaduras latinas; el plegado es estable en cuanto a posiciones allí donde se comunican posiciones.

Convenciones de resultado: los fallos se devuelven como texto que comienza con un prefijo de error y se marcan como errores en el resultado MCP; el modelo tiene la instrucción de corregir y reintentar como máximo tres veces, y después detenerse e informar. Los marcadores estructurados y autodescriptivos incrustados en los resultados (para operaciones de memoria, compuertas y similares) son estables y están documentados en los respectivos campos de salida.

Guardián de cobertura de lectura: cuando un modelo obtiene un volcado de un caso completo o la entrega al almacén temporal del lector de casos completos, el Bridge registra con exactitud de línea qué tramos del archivo de volcado se han leído realmente. Mientras queden tramos no leídos, cada respuesta de herramienta con éxito — búsquedas, coincidencias de patrones, todo — lleva los tramos de líneas exactos no leídos junto con un porcentaje de lectura; no puede afirmarse una lectura completa hasta que los registros la confirmen. Una vez leído por completo el archivo, los recordatorios cesan y la siguiente lectura por rangos confirma una sola vez que se han leído todas las líneas, lo que pone fin al deber de lectura de ese archivo. Se siguen los volcados de casos completos, los archivos de cabecera y de compendio de la herramienta de preparación de casos y todo texto completo de documento que se haya desviado al almacén temporal; las lecturas parciales de otros resultados redirigidos siguen siendo legítimas y silenciosas. El estado de cobertura se almacena junto al almacén y sobrevive a los reinicios de la aplicación, y un archivo leído por completo queda registrado para la preparación del caso — la lectura sigue siendo válida incluso después de que la limpieza de arranque haya eliminado el archivo.

Guardián de reentrega: tras una entrega de archivo con éxito cuyo origen está en el almacén temporal, un archivo marcador junto al almacén registra el nombre y la hora de lo entregado (las entregas pasadas como contenido en línea se registran igualmente bajo su nombre de entrega). Toda edición, escritura o normalización posterior de un archivo allí registrado se responde con el recordatorio de que el usuario tiene en sus manos la versión entregada obsoleta y de que el archivo corregido debe entregarse de nuevo con un número de versión nuevo. La propia respuesta de la entrega obtiene además de la aplicación el estado actual de la cobertura de lectura, a través de un punto de acceso interno que no es una herramienta, y señala una entrega realizada pese a la existencia de tramos no leídos.

Guardián de borradores no entregados: la entrada del diario de trabajo — la señal de cierre del modelo — enumera por su nombre cada archivo de trabajo versionado escrito por el modelo en la sesión que nunca se entregó, con la instrucción de entregar ahora el artefacto terminado; el trabajo que solo existe en el almacén temporal nunca llega al usuario.

Guardián del formato de correo: toda respuesta de las herramientas de lectura y recuperación de correos lleva la remisión fija de que la instrucción vinculante para dar formato a los correos y entregarlos — caja para copiar del asunto, caja para copiar del cuerpo, sección de destinatarios, contenido obligatorio, reglas de idioma — procede de la herramienta de especificación del formato de correo, que debe obtenerse antes de componer cualquier correo y seguirse al pie de la letra.

Ejecución en segundo plano: las herramientas de datos y de análisis se ejecutan por separado de la interfaz de usuario dentro de la aplicación, con su propio registro de herramientas y sus propias conexiones a la base de datos; la parte de la interfaz solo enruta, aplica compuertas y posprocesa. Las lecturas largas de expedientes grandes no bloquean, por tanto, la interfaz de usuario. Si la parte en segundo plano se detiene, la ejecución continúa en la parte de la interfaz y la parte en segundo plano se reinicia en la siguiente oportunidad. Las herramientas que necesitan la interfaz de usuario — navegación, diálogos de confirmación, el navegador incrustado, la recuperación de correo y las herramientas de propuesta sujetas a revisión — se ejecutan siempre allí.

### 8. Compuertas de interacción

Tres herramientas responden deliberadamente a su primera llamada con una pregunta en lugar de un resultado; en todas ellas la respuesta literal «unknown» es siempre válida y nunca se penaliza.

La compuerta de entrega: la herramienta de entrega de archivos, llamada sin la declaración de formalidad, no entrega nada y pregunta si la entrega es una de las cuatro clases de artefacto formal — escrito jurídico, correo al tribunal, entrada de crónica, entrada del diario de trabajo — o ninguna de ellas. Responder «no» entrega de inmediato — pero la declaración se comprueba en cuanto al contenido: un detector determinista inspecciona el archivo, y un contenido con forma de carta o de escrito (fórmulas de saludo y despedida en seis idiomas, un bloque de destinatario, marcadores jurídicos, un bloque de identidad) rechaza la declaración de informalidad y registra el intento; tal contenido no tiene vía informal. Responder con una clase formal devuelve, todavía sin entregar, la instrucción vinculante de formato para exactamente esa clase; solo la llamada repetida que lleva el indicador de confirmación de que el archivo se ha verificado contra esa instrucción entrega realmente. Un guardián de series de versiones rechaza además la primera entrega bajo una raíz de nombre de archivo nueva mientras ya exista una serie versionada entregada con el mismo número de caso — un documento no puede renombrarse para reiniciar su contador de versiones; un documento realmente distinto requiere una declaración consciente y registrada. Esta compuerta se ejecuta dentro de la propia aplicación; el front-end solo transmite la llamada. Los documentos y las cartas nunca llegan al usuario como texto de chat o cajas para copiar — todo acceso de escritura a un archivo de trabajo de texto lleva ese recordatorio, y el único artefacto legítimo en caja para copiar sigue siendo el correo electrónico, conforme a su herramienta de formato.

La compuerta de búsqueda: la búsqueda central de pruebas, en su primera llamada, no busca nada y pregunta tres cosas — qué clase de elemento se busca (documento entrante, documento saliente, prueba con documento adjunto, declaración/transcripción, nota de crónica, o desconocido), el alcance cuando hay un identificador de cliente (solo este caso, todos los casos del cliente, o desconocido — con la lista de casos del cliente incluida en la pregunta), y la forma de respuesta deseada. Las formas de respuesta son: una lista limpia de identificadores (la opción por defecto recomendada; los resultados se abren después individualmente mediante el lector de pruebas), resultados compactos con el contexto de la coincidencia, o el resultado completo escrito en un único archivo del almacén temporal.

La compuerta de caso completo: el lector de casos completos, en su primera llamada, no carga nada y comunica el tamaño real del caso — el número de pruebas y el volumen aproximado de contenido acumulado en títulos, descripciones, textos completos de documentos y transcripciones — y después pide al modelo que decida entre las herramientas de búsqueda dirigida y una llamada repetida con el argumento de entrega al almacén temporal, que escribe en el almacén temporal el contenido completo del caso, normalizado en cuanto al OCR, y devuelve solo el identificador del archivo.

La compuerta de verificación: para los escritos formales, la herramienta de entrega exige además una certificación reciente del verificador determinista de escritos. Ese verificador escanea el archivo terminado del almacén temporal a lo largo de ocho clases de afirmaciones — referencias a pruebas en la lista de anexos y en el texto corrido (sellos y números, incluida la procedencia de cita vinculada al documento: cada elemento citado o adjunto debe constar como leído para este documento — obtenido íntegramente o con su archivo del almacén temporal leído por completo; una lectura cuenta durante dos horas, cada entrega del mismo documento prorroga dos horas sus elementos citados, y verificar o entregar una raíz de documento distinta reinicia las lecturas de anexos; una línea de anexo puede declarar un rango de páginas, el deber de lectura sigue siendo el documento entero), citas normativas contra la biblioteca verificada (un artículo ausente del texto legal verificado es un hallazgo contradicho; la cita requiere además procedencia de lectura — cada lectura de la biblioteca se registra por ejecución de la aplicación con los números de artículo realmente devueltos, y un artículo citado sin tal registro de lectura es un hallazgo contradicho, de modo que los artículos de prensa, los resúmenes web y la memoria del modelo nunca pueden fundamentar una norma; las subreferencias citadas, como apartado y punto, se comprueban en cuanto a su existencia en la zona de texto del artículo; una fuente ausente de la biblioteca bloquea hasta que se integre o se rechace), citas literales — cada una debe encontrarse íntegra en los textos completos de todo el archivo o en la biblioteca jurídica; si procede de un documento de otro caso, el verificador nombra ese documento, y solo ese debe leerse, no la vista general del otro caso; una cita que no se encuentra en ninguna fuente queda contradicha y bloquea la entrega, una cita a la que simplemente se le han quitado las comillas o cuya redacción se ha cambiado ligeramente sigue bloqueada, y las citas suprimidas por completo se comunican al usuario en la entrega —, números de procedimiento en el formato n/nnn/aaaa, importes bajo una regla de coincidencia exacta (la forma registrada exacta), datos maestros de las partes letra por letra, incluidos los signos diacríticos, números personales rumanos (CNP) e IBAN mediante validación de la suma de control, y partes nombradas — cada persona o empresa del registro de entidades que se nombre en el documento debe haber sido leída (perfil) y comprobada en cuanto a sus conexiones para este documento, y el rechazo nombra ambas llamadas y recomienda la prueba de clústeres. Los hallazgos se califican como verificados, no verificados o contradichos; cualquier hallazgo contradicho o cualquier ley ausente no resuelta da lugar a un veredicto bloqueante. La certificación queda vinculada al estado exacto del archivo — cualquier edición la anula — y tras cinco pasadas de verificación fallidas el proceso se detiene, instruye al modelo para que se detenga e informe, y notifica al usuario directamente en la aplicación.

La compuerta de consentimiento para fuentes normativas: una fuente normativa notificada por el modelo ya no se integra en silencio. Las solicitudes se reúnen en un único diálogo de consentimiento en la aplicación — fuente, ordenamiento jurídico, IA solicitante — donde las entradas marcadas se obtienen, se verifican y se almacenan de inmediato y las entradas no marcadas se rechazan; una fuente rechazada convierte las citas posteriores de ella en notas visibles de no verificado por decisión del usuario en lugar de bloqueos silenciosos. A partir de entonces, el Monitor de coherencia de datos contiene leyes únicamente para el ciclo de revisión periódica.

La regla de entrega solo desde el almacén: la herramienta de entrega acepta exclusivamente una ruta de origen dentro del almacén de trabajo de la aplicación; el contenido en línea y las rutas fuera del almacén se rechazan para todo tipo de archivo. Esto mantiene la certificación de la verificación, el seguimiento de reentregas, el versionado y la cobertura de lectura ligados, sin excepción, a cada artefacto entregado.

La pregunta sobre resoluciones judiciales pendientes: si en la lista de valoración quedan resoluciones sin valorar, la herramienta de entrega no entrega de entrada un escrito ni un correo a un tribunal o una autoridad, sino que indica el número de resoluciones pendientes — las que pertenecen a este caso o a sus tribunales, con sus ID — y exige la respuesta del usuario: valorar ahora o más tarde. «Ahora» detiene la entrega y devuelve el encargo de trabajo (valorar, leer las valoraciones del tribunal y del órgano juzgador, revisar el documento, verificarlo de nuevo y entregarlo); «más tarde» entrega y añade al resultado la pregunta de seguimiento obligatoria. La pregunta vuelve con cada entrega formal mientras la lista no esté vacía.

### 9. Inicio de sesión y encuadre

La apertura del conjunto de herramientas de inicio de sesión ejecuta todo el protocolo de inicio de una sola vez y lo escribe en un archivo fijo y con nombre del almacén temporal; la respuesta directa devuelve solo el ancla de fecha, el idioma del sistema y el contexto actual de la interfaz gráfica, y el modelo lee el resto — las entradas de memoria vencidas, el informe diario, los plazos, las citas, las tareas abiertas de pares y el índice de las diez últimas entradas del diario de trabajo — con una sola lectura del almacén temporal. Los miembros de este conjunto vuelven a ejecutar piezas sueltas a petición.

La herramienta de fecha y hora responde con una sola línea (fecha, hora, zona horaria, día de la semana, sincronizada por NTP cuando es posible y, de lo contrario, con el reloj del sistema) y lleva el mandato permanente de que cada turno del diálogo comienza con la fecha actual y de que las fechas nunca se conjeturan. La herramienta de contexto de la interfaz gráfica comunica qué pantalla de la ventana principal de la aplicación está abierta, con la ruta de navegación y el cliente y el caso abiertos. La herramienta del idioma del sistema devuelve el identificador de idioma que rige el diálogo y las listas que abarcan varios casos; la herramienta del ordenamiento jurídico devuelve, por caso, el ordenamiento jurídico que rige los documentos generados y la terminología, es obligatoria antes de cualquier trabajo con documentos e instruye a preguntar al usuario cuando no está definido. La herramienta del informe matutino devuelve el informe estructurado de hoy con identificadores y marcadores, de modo que el modelo pueda actuar sobre cada punto; la herramienta del informe de trabajo lleva, por cada IA de escritorio, si esa IA ya ha sido informada hoy, y devuelve las entradas recientes del diario de trabajo solo en el primer contacto del día.

### 10. El almacén temporal

El almacén temporal es la carpeta de trabajo del modelo para todo lo voluminoso. Ofrece escritura con capacidad de añadir para el ensamblaje por fragmentos; lectura por rangos con líneas numeradas cuyos números se corresponden directamente con los editores basados en líneas; sustitución exacta de texto con requisito de unicidad, un reintento tolerante a los espacios en blanco y a las comillas tipográficas que sigue exigiendo unicidad, y una alternativa prescrita de localizar y copiar ante cualquier otra falta de coincidencia; inserción por número de línea o tras un marcador; eliminación de rangos de líneas; sustitución atómica de rangos de líneas como operación segura de reestructuración; búsqueda de patrones insensible a mayúsculas y a signos diacríticos en uno o en todos los archivos, con un tope de cincuenta resultados y líneas de contexto opcionales; un esquema de markdown que asigna los encabezados a rangos de líneas sin leer el archivo; un listado de directorio; copia; una comparación de líneas entre dos archivos que oculta las líneas comunes; una normalización orientada a la entrega que aplana el markdown estructural a las convenciones de los escritos, protege las referencias, rellena hasta siete dígitos las referencias cortas a pruebas y normaliza los finales de línea; normalización de espacios en blanco; limpieza de finales de línea y de caracteres invisibles; copias de comparación simplificadas (en minúsculas, o sin signos diacríticos) siempre en un archivo de destino separado; contadores de palabras, letras y líneas; y borrado.

Un registro de estado ligero recuerda notas clave-valor para la sesión en curso — ante todo, qué archivo es el borrador principal actual — con semántica de obtener, establecer y borrar, y sobrevive a los reinicios de la aplicación.

Ciclo de vida: el almacén es de larga duración y sobrevive a los reinicios; las notas propias del modelo, el registro de estado, los metadatos de los archivos y la contabilidad de la cobertura de lectura persisten, mientras que los volcados de herramientas de días anteriores se purgan en cada arranque y los archivos no tocados durante ciento ochenta días se borran (la versión final de un escrito, a los trescientos sesenta días). Todo acceso mediante cualquier herramienta del almacén temporal — incluida una simple lectura — reinicia el reloj de borrado de ese archivo; una mera aparición en el listado de directorio no lo hace. La capa de instrucciones obliga al modelo a borrar sus archivos de tarea cuando una tarea termina y a trasladar, en su lugar, los conocimientos duraderos al sistema de memoria.

### 11. El sistema de memoria

La memoria de IA persistente es un cuaderno de notas compartido entre chats por todas las IA conectadas y el asistente de la aplicación. Una entrada contiene como máximo mil caracteres — las descripciones del conjunto de herramientas y de las herramientas exigen comprimir a lo absolutamente esencial y dividir el material más extenso — y está vinculada como mínimo a un cliente o a un caso (con un vínculo a un caso, el cliente se deduce y se corrige automáticamente) y, opcionalmente, a un elemento de prueba, un correo electrónico, una entidad o una institución, todos ellos validados. Las entradas deben escribirse en el idioma del sistema de IRONSTICK con independencia del idioma del diálogo, y al modelo se le prohíbe utilizar sus propios archivos de memoria privados para el conocimiento de los casos, ya que estos no llegan ni a la IA par ni al usuario. Una fecha de vencimiento opcional da a una entrada carácter de plazo: las entradas vencidas y atrasadas afloran en primer lugar en el protocolo de inicio de sesión y en las vistas de plazos de la aplicación.

La búsqueda puede filtrarse por cualquiera de los identificadores vinculados y por fecha de vencimiento (todo, exactamente hoy, o una ventana de diez días en torno a una fecha dada), devuelve primero lo más reciente, con un valor por defecto de veinte y un máximo de cincuenta resultados, y marca las entradas del cuaderno escritas por el usuario como estrictamente de solo lectura para la IA. La actualización sustituye el texto y/o mueve, establece o elimina la fecha de vencimiento; todo lo que no se aporta permanece sin cambios. Una actualización cuyo texto excede el límite se rechaza con una declaración de capacidad que nombra la longitud enviada, el límite, la ocupación actual de la entrada y el resto libre; toda actualización de texto con éxito comunica igualmente la ocupación y el resto; en ambos casos, una vez que quedan libres menos de trescientos caracteres, la respuesta añade la recomendación permanente de reelaborar la entrada entera o de crear una entrada adicional y dejar una referencia cruzada en la antigua. El borrado es irreversible y rechaza las entradas del cuaderno del usuario y las entradas de tareas. Guardar, actualizar y borrar una entrada abren cada uno una ventana de aprobación en la aplicación; el cambio solo surte efecto tras la aprobación del usuario. El mantenimiento está construido para procedimientos de larga duración: las entradas vinculadas a un caso no se borran nunca de forma automática. Las entradas sin caso se borran tras un año sin uso; cada entrada devuelta por una búsqueda en la memoria y cada actualización renuevan ese año, ya que la limpieza mide la antigüedad contra lo más reciente entre la creación y el último acceso. Las entradas del cuaderno del usuario nunca caducan automáticamente.

Los datos maestros, las personas, las relaciones y los documentos no pertenecen a la memoria: las descripciones los encaminan hacia las herramientas de propuesta y hacia el registro de documentos.

### 12. Plazos, citas y el calendario

Las herramientas de plazos entregan los plazos activos bien de forma compacta (título, fecha de vencimiento, días restantes, caso, con exclusión de las entradas marcadas como secretas), bien con descripciones por entrada y marcas explícitas de atrasado y urgente (urgente significa diez días o menos), y una forma de recitado ordenada por urgencia con filtros de periodo (todos agrupados por criticidad, solo críticos, próximos a vencer, hoy, esta semana, la semana próxima, o una fecha concreta). La herramienta de citas recita un día o un periodo con las fechas judiciales en primer lugar — las fechas judiciales importadas del portal, después las fechas judiciales del calendario y después las restantes entradas del calendario. El lector del calendario enumera las entradas de forma global o por caso, con un rango de fechas opcional.

La herramienta de registro en el calendario nunca escribe: abre el formulario del calendario de la aplicación ya rellenado con título, fecha, horas, descripción y vínculo opcional a un caso, y el usuario lo completa y lo guarda. Su descripción impone una comprobación obligatoria de duplicados antes de cada llamada: leer primero el calendario del mismo día, comparar solo por fecha ignorando las horas y, ante cualquier entrada similar, mostrársela al usuario y preguntarle si es el mismo evento, llamando a la herramienta solo después de que el usuario confirme que se trata de una entrada nueva.

### 13. El diario de trabajo

Las herramientas del diario de trabajo escriben y leen el diario de trabajo que abarca todos los casos. La adición, por indicación del usuario, se dirige a un día (por defecto hoy, con la fecha obtenida mediante la herramienta de hora), siempre añade a un día existente con un separador y nunca sobrescribe, vincula los casos afectados mediante una lista de casos, y espera el contenido como markdown limpio en el estilo definido en el apéndice de las instrucciones. Una herramienta de notas añade una única línea de evento al diario de trabajo de hoy con una referencia opcional a un caso. La herramienta de formato devuelve el formato de archivo vinculante del diario de trabajo. La lectura funciona por fecha, por rango o empezando por lo más reciente, con opción de texto completo y acotación por caso; la búsqueda es una búsqueda por palabra clave insensible a los signos diacríticos en títulos y textos completos, con fecha, título y fragmento de contexto por resultado. Ambas formas de listado tienen un valor por defecto de diez y un tope de treinta entradas. La apertura del conjunto de herramientas ya entrega íntegro el diario de trabajo de hoy, con una nota sobre cuántas entradas más existen de las dos últimas semanas.

### 14. Acceso a los casos

La resolución de casos funciona por número de caso, por nombre de una parte interviniente (tolerante a los signos diacríticos, y que abarca a la parte contraria, al demandante, el título y el cliente — obligatoria siempre que el usuario nombre a una parte sin número, ya que muchos casos no tienen número alguno), y a través de la lista de casos del cliente. Los procedimientos relacionados proceden de la jerarquía de casos como entradas padre, hijo y del mismo grupo.

Cada documento que lee la IA lleva una indicación de su origen: los documentos entrantes de la parte contraria o de una autoridad se marcan como pendientes de examen crítico, los salientes como el punto de vista del cliente. Esto se aplica por igual al Bridge y al chat integrado.

La herramienta de visión general rápida devuelve, en una sola llamada, todos los campos de la pestaña del caso, todos los campos de la pestaña del cliente, un expediente del portal vinculado opcional y los últimos quince identificadores de pruebas con fechas de entrada — pensada como orientación antes de cualquier acceso a textos completos. El lector de la crónica devuelve la crónica de un caso empezando por lo más reciente, de forma compacta y sin textos completos, con filtros de fecha y un límite de hasta cincuenta entradas, y es la respuesta rápida designada para «qué ocurrió por último» — no cuenta para nada en la preparación del caso.

La preparación del caso es una herramienta y una compuerta. La herramienta de preparación entrega, en una sola llamada, la cabecera (perfil y ordenamiento jurídico) y el compendio de cada documento — identificador, fecha, tipo, título, el resumen del momento del registro, referencias cruzadas y tamaño del texto completo — que hace las veces de crónica. La respuesta comienza siempre con una nota que indica dónde están la cabecera y el compendio (en línea cuando toda la respuesta queda por debajo del límite del conector; de lo contrario, como dos archivos del almacén temporal que deben leerse por completo) y los cinco documentos más recientes que deben leerse íntegramente. La compuerta de preparación rechaza entonces, para los llamantes externos, dos niveles de salida sobre un caso: una nota o entrada sobre un caso (diario, nota diaria, entrada de crónica, nota del caso) hasta que el perfil, el ordenamiento jurídico, el compendio y las cinco entradas de crónica más recientes (notas sin PDF ni transcripción; se admiten imágenes) se hayan leído íntegramente — de modo que una serie en curso de entradas de crónica respete las últimas, sin obligar a leer documentos pesados para una simple nota; un juicio sobre el caso (verificación de escritos, entrega, exportación) además hasta que cada documento citado o adjunto se haya leído íntegramente. Las lecturas se registran por cada IA de escritorio en un registro almacenado, y son válidas durante tres días o hasta el siguiente documento entrante del caso; los documentos salientes y los registros de pruebas nunca invalidan una lectura. El mismo registro alimenta el menú desplegable del símbolo de la IA. Un tercer nivel, inferior, protege el propio contenido del caso: toda herramienta de contenido de casos — crónica, cronología, búsquedas por palabra clave, por pasaje y por periodo, textos completos, contradicciones, declaraciones, obligaciones, plazos, calendario, correspondencia, uso, documentos probatorios presentados, cadenas de cartas, listas de anexos, sellos, medios, instituciones, etiquetas, valoración y notas de instrucción — se rechaza para un caso cuyo compendio no haya leído el llamante, y el rechazo nombra la herramienta de preparación; el tercer intento rechazado en el mismo caso se contabiliza como infracción de las reglas. Los contadores de preparación se reinician con cada lectura de las instrucciones y con cada inicio de sesión.

La lectura completa de un caso está protegida por la compuerta de caso completo. El volcado al almacén temporal es la vía completa más rápida: ensambla todo el texto del caso dentro de la aplicación, sin recortar, normaliza las anomalías de OCR (espacios repetidos, mezclas de finales de línea, espacios de no separación, guiones blandos, caracteres de anchura cero), lo escribe directamente en el almacén temporal y devuelve solo el identificador del archivo con estadísticas; los casos muy grandes se dividen en archivos parciales numerados. Los filtros de alcance restringen el volcado a la dirección entrante, a la saliente o a ambas, y una lista de identificadores de pruebas vuelca exactamente esos registros — la vía designada para leer por completo un documento muy grande, con el caso deducido de la prueba.

El lector de pruebas es la base obligatoria de toda afirmación sustantiva: carga un registro con el texto completo extraído de su documento (completo y sin truncar; por encima del límite del conector llega íntegro al almacén temporal) y, cuando existe, el texto completo de chat o de transcripción (que abarca los chats de mensajería y las transcripciones de teléfono, de audiencias, de interrogatorios y judiciales), más el resumen cualificado, la descripción y los metadatos, que se declaran no sustitutivos del texto completo. Si no aparece ninguna de las dos secciones de texto completo, no existe texto extraído y el modelo no debe hacer afirmaciones sustantivas sobre el registro. Una lista separada por comas de hasta doce identificadores lee varios registros en una sola llamada. Una herramienta de inventario de medios comunica la existencia, el tipo, la fecha y el tamaño de los adjuntos de imagen, audio y vídeo de un registro o de un caso, indicando expresamente que el contenido de los medios no es legible como texto y que existe para que un registro que solo tiene medios no se clasifique erróneamente como vacío.

Las etiquetas se presentan como notas adhesivas de forma libre del usuario sobre los registros de pruebas — el texto es la información, el color no tiene un significado fijo, y un registro etiquetado se declara un marcador fuerte de relevancia. Tres modos entregan una visión global con recuentos y registros referenciados, todas las etiquetas de un caso, o una búsqueda de texto dentro de los textos de las etiquetas, con un filtro de alcance que separa las etiquetas personales de las vinculadas a casos. Los hechos enumeran todo el panorama de casos de un cliente como grupos con casos anidados, incluidos los casos padre e hijo. La valoración almacenada del caso puede recuperarse por caso.

### 15. Búsqueda dentro del expediente

La búsqueda central de pruebas puntúa en todos los campos de las pruebas, en los textos completos extraídos de los documentos y en los contenidos de las transcripciones, con las consultas de varias palabras combinadas de forma conjuntiva, independencia de los signos diacríticos y una bonificación por frase; los resultados se ordenan por relevancia sin exponer cifras de puntuación, cada resultado indica qué campo lo ha desencadenado, el valor por defecto es quince y el máximo treinta resultados, y la forma de respuesta sigue la elección hecha en la compuerta de búsqueda. La búsqueda de pasajes divide los documentos y las transcripciones en ventanas de párrafo y de frase y devuelve los pasajes que mejor coinciden, con su referencia — localizando dónde figura algo dentro de un texto, y no meramente en qué registro — con una coincidencia tolerante al OCR que salva los errores de captura, una bonificación por frase y una acotación a exactamente un caso o a todos los casos de exactamente un cliente (el instrumento designado para las preguntas de «¿alguna vez, en algún lugar, X…?»; nunca entre clientes distintos), con un valor por defecto de ocho y un tope de veinte pasajes. Una herramienta de rango de fechas enumera las pruebas entre dos fechas. El buscador específico de correspondencia de una parte es obligatorio cuando el usuario pide documentos procedentes de una parte concreta o dirigidos a ella: coteja a la parte, con tolerancia a los signos diacríticos, contra los registros de intervención, filtra por dirección (hacia mí, desde mí, o ambas), excluye chats y transcripciones, oculta por defecto las capturas de pantalla hechas por uno mismo indicando su número, y ordena empezando por lo más reciente — expresamente diferenciado de la búsqueda por palabra clave, que devolvería también registros que meramente mencionan a la parte.

### 16. Herramientas deterministas de análisis

Estas herramientas calculan a partir de los registros sin intervención alguna de la IA. La cronología devuelve todos los elementos de un caso ordenados por fecha del evento de forma descendente, con referencia, marca de tiempo, tipo de registro y título, con un valor por defecto de trescientos y un tope de quinientos elementos. El recopilador de contradicciones deliberadamente no juzga: reúne hasta ciento veinte elementos candidatos (sesenta por defecto), opcionalmente filtrados a una entidad, con referencia, fecha, participantes y contenido breve, y deja al modelo el juicio y las lecturas posteriores de textos completos. La herramienta de quién dijo qué encuentra cada elemento en el que aparece una persona — como participante, en el título o en el texto, o dentro de la redacción de una transcripción — con independencia de los signos diacríticos, marcando la fuente de cada resultado, con un valor por defecto de cuarenta y un tope de cien. La herramienta de la red de participantes cuenta qué personas y entidades coinciden en los mismos elementos, de forma global o por caso, opcionalmente centrada en una entidad. La herramienta de obligaciones enumera los elementos abiertos marcados con plazo por fecha de vencimiento, con recuentos de días, descripciones, referencias y marcas de atrasado/urgente.

Otras cinco herramientas deterministas sirven para caracterizar a jueces y fiscales concretos; solo los documentos entrantes procedentes de un tribunal o de una fiscalía cuentan como resoluciones. El listador de resoluciones devuelve todas las resoluciones en las que una persona actuó como juez o como fiscal, en todos los casos, contando únicamente un nombre en el encabezamiento (composición del tribunal) o en el bloque de firmas — un nombre en el texto corrido no cuenta, y los secretarios judiciales no se enumeran nunca. El lector de estructura descompone una resolución en tribunal, sección, número de caso, clase, número y fecha, sesión, sala, la frase que nombra a las partes y el objeto, la parte dispositiva literalmente, palabras clave de resultado, vía de recurso, pronunciamiento, citas normativas con su estado en la biblioteca y el tamaño de la fundamentación, cada elemento con su posición de carácter, y comunica lo ausente como no encontrado. El recopilador de escritos escribe todos los escritos presentados en el caso hasta la fecha de la resolución en dos archivos del almacén temporal — los documentos salientes del cliente y los entrantes de la parte contraria — restringidos a los documentos dirigidos a un tribunal o a una fiscalía, cada uno solo con su documento principal (el correo de remisión y los anexos se recortan), y enumera como no asignado lo que no puede clasificarse; sus archivos conllevan el deber de lectura. La comparación de resoluciones mide qué proporción de la fundamentación propia del tribunal coincide, como texto, con los escritos del cliente, con los de la parte contraria, con ambos, con texto legal de la biblioteca, o con nada (la redacción propia del tribunal), mide por separado la exposición de las posiciones de las partes, y enumera los pasajes coincidentes con su tasa de coincidencia a partir del setenta por ciento, de mayor a menor, en la redacción original y con posiciones de carácter. La comparación de documentos confronta dos documentos cualesquiera entre clientes y casos distintos, clasifica los pasajes coincidentes como texto legal, fuente citada común o compartidos únicamente por estos dos, y abre su respuesta con la instrucción de leer íntegramente ambos documentos antes de afirmar nada sobre una conexión.

Una lista de valoración convierte estas mediciones en un conocimiento duradero sobre tribunales y jueces. Cada registro marcado como resolución judicial — marcado por el usuario al registrarlo, prerrellenado por el reconocimiento o encontrado por la ejecución en segundo plano en el archivo existente — se pone en cola con datos de cabecera determinados de forma determinista: tribunal, órgano juzgador y composición, jueces y letrados con sus ID de datos maestros, número, fecha y resultado. La IA recorre la lista de una en una; la herramienta de preparación entrega las mediciones, las preguntas de valoración junto con la forma obligatoria y las herramientas para la resolución y los escritos, y libera la resolución para su lectura sin exigir la vista general de su caso. El registro se rechaza mientras el usuario no haya dado su consentimiento expreso, la resolución no se haya leído por completo, el análisis en inglés no lleve exactamente los siete encabezados en el orden fijo y con contenido, o un juez o letrado no tenga ID de datos maestros. Se guardan los datos de cabecera, la asignación al caso y al cliente, las mediciones y el análisis; una nueva versión de las preguntas permite volver a valorar en el mismo registro. Con el IRONSTICK SERVER, las valoraciones viajan con la red de personas y empresas del despacho: cada puesto de trabajo lleva su propia valoración por resolución, que solo él modifica, y la herramienta de lectura devuelve completas las valoraciones de todos los puestos sobre un juez, un tribunal, un número de procedimiento o un caso propio, siempre indicando quién valoró.

La familia de seguimiento de presentaciones es determinista contra los escritos almacenados: la herramienta de uso responde, para un elemento de prueba, qué anexos contiene físicamente y en qué escritos se presentó él mismo (con fecha y número de expediente, en todos los casos) o, para un caso, el informe de lagunas de los elementos nunca presentados; el listador de pruebas presentadas devuelve, por cada escrito almacenado, los identificadores adjuntos más el conjunto total sin duplicados, y es obligatorio antes de componer la lista de anexos de un escrito nuevo, con la salvedad documentada de que solo quedan cubiertos los anexos adjuntados estructuralmente. La cadena de números de registro encuentra, a partir de un número de carta o de todos los números que aparecen en un documento, cada documento que comparte ese número, en orden cronológico — el curso documentado de un procedimiento administrativo. El listador de anexos resuelve los anexos contenidos físicamente en un documento, incluido el sello de archivo determinista de cada anexo; la herramienta de sellos resuelve cualquier identificador de prueba en su sello de archivo determinista (varios archivos almacenados dan varios sellos; un registro sin archivo almacenado da un marcador explícito de vacío). Ambas herramientas portadoras de sellos prohíben inventar sellos — siempre deben obtenerse.

### 17. Reparación de OCR

Una vía de escalada en cuatro pasos repara los textos completos almacenados que están arruinados, y está expresamente vetada como sustituto cómodo de la lectura. La solicitud de reescaneo pide a la aplicación que vuelva a pasar por OCR el PDF original almacenado; el usuario selecciona las páginas en IRONSTICK, y el modelo tiene la instrucción de informar al usuario en una frase y esperar. La herramienta de estado debe llamarse una sola vez cuando el usuario dice que ha elegido las páginas — los bucles de sondeo están prohibidos — y, cuando está listo, devuelve el encargo de trabajo junto con dos archivos del almacén temporal que contienen el escaneo nuevo y el texto actual de la base de datos. La regla de comparación indica al modelo que haga únicamente correcciones mecánicas de OCR, nunca reformulaciones, manteniendo exactos los números, los nombres y los importes. Cuando un lugar es ilegible en ambas fuentes, el modelo puede pedir al usuario una comprobación visual antes de entregar — como máximo tres puntos por documento, con el registro abierto en el lugar exacto y el lugar nombrado con precisión («página 7, segundo párrafo — ¿el importe?»); con la navegación deshabilitada, el registro y la página se nombran en el chat en su lugar. La herramienta de entrega pasa el archivo corregido del almacén temporal a la aplicación, que se lo muestra al usuario en un diálogo; solo la acción de guardar del usuario sustituye el texto de la base de datos, y nada se almacena automáticamente. La última escalada, la solicitud de entrega del PDF, abre el registro y hace que el modelo pida al usuario que arrastre personalmente el PDF original al chat — el Bridge deliberadamente no proporciona ninguna ayuda de ruta, rechaza de forma tajante cuando no ha precedido ningún reescaneo, y rechaza los PDF de más de diez megabytes o de más de noventa páginas; el modelo lee entonces el PDF visualmente, construye la versión corregida en el almacén temporal y la entrega a través de la misma compuerta de revisión. Ante un rechazo por tamaño o por páginas, el flujo no termina: la alternativa de transcripción sigue abriendo el registro, y el modelo pide al usuario que abra el PDF mediante el adjunto y transcriba literalmente los pasajes relevantes («página X, cerca de la parte superior, debería decir … — por favor, transcríbalo exactamente») — como máximo tres lugares, incorporados literalmente a la versión corregida; cualquier laguna restante se declara abiertamente. En lugar de devolver todo el documento para su tratamiento manual, el abogado comprueba únicamente los lugares que no pueden resolverse automáticamente.

### 18. Personas, instituciones, clientes y propuestas de datos

Las herramientas de resolución encuentran clientes, personas e instituciones por fragmento de nombre, con tolerancia a los signos diacríticos; un buscador por palabra clave busca en nombres, notas y campos de análisis cuando solo se conoce un fragmento. Un cotejo determinista de listas coteja un documento que contiene una lista de nombres con todas las personas y empresas registradas, dirigido por identificador de prueba o por caso — entonces se escanea la entrada más reciente del caso y se nombra en la respuesta. En las conexiones de Claude y de ChatGPT, la comprobación de partes acepta por adelantado hasta dos partes más y las busca en segundo plano mientras se trabaja la actual; los resultados se conservan treinta minutos y el orden de la compuerta no cambia. Las herramientas de red enumeran a todos los conectados con una parte por relaciones explícitas y casos compartidos, los clústeres de toda la red de partes mediante detección determinista de comunidades (como en la vista del Universo de la pantalla de personas, con los grupos de densidad inusual resaltados y una separación opcional de personas e instituciones en capas), y las partes más conectadas; toda respuesta relativa a una parte empieza con el bloque de los casos a los que la parte está vinculada. El lector de perfiles devuelve todos los campos de datos maestros y de análisis, completos y sin truncar. Los lectores de perfiles devuelven el perfil de la entidad con análisis y relaciones, todas las relaciones de una persona en ambas direcciones entre personas e instituciones, el perfil de la institución y las instituciones vinculadas formalmente a un caso. El lector del registro de tiempos comunica el tiempo de trabajo medido de forma pasiva (cada vista de página dura hasta la siguiente, con un tope de treinta minutos, y la última se cuenta como un minuto) como visión general de totales y de los principales casos, clientes y días, o como desglose por días de un caso, en un rango de fechas o en una ventana de días anteriores que por defecto es de siete.

La IA no puede escribir directamente en los datos maestros. Dos herramientas de propuesta colocan los hallazgos en el Monitor de Coherencia de Datos de la aplicación como elementos de revisión: la propuesta de datos maestros (solo después de que el usuario haya confirmado en el chat que el hallazgo debe archivarse) se dirige a una entidad o institución existente — resuelta primero por nombre — o describe un registro nuevo por nombre y campos, con una lista de campos permitidos en la que los números de identificación de empresas y de personas comparten un mismo campo, solo se permiten campos fundamentados, y las referencias a pruebas son opcionales; la propuesta de relación describe una relación entre dos personas resueltas o entre una persona y una institución, con exactamente una contraparte, una categoría obligatoria, una fundamentación opcional y referencias opcionales a caso, cliente y pruebas. Una propuesta puede también cambiar el nombre de un registro, fijar su tipo (persona física o jurídica), cambiar la categoría de una relación existente, proponer una eliminación (de un registro, de una etiqueta o de un plazo cumplido) con una motivación en el idioma del sistema que es obligatoria, o proponer dos registros como duplicados; un registro nuevo solo se acepta después de que el tipo se haya decidido en el diálogo, y una propuesta que toca la descripción o los datos de contacto de una persona se rechaza salvo que el llamante haya leído ese perfil en los últimos treinta minutos. En ambos flujos el registro solo cambia cuando el usuario acepta la propuesta en el monitor. Una propuesta de registro nuevo se responde primero con la lista de registros existentes similares — con coincidencia laxa, sin guardar nada — y el llamante debe o bien archivar contra uno de ellos, o bien confirmar expresamente, mediante parámetro, que la parte es realmente nueva; una coincidencia estricta se redirige al registro existente. Cada parte nueva guardada devuelve una tarea de seguimiento obligatoria que ordena al llamante investigar y archivar las conexiones de la parte, incluida la investigación en la web. Una tercera herramienta de propuesta asigna una parte a un caso: exactamente una entidad o institución, una motivación obligatoria y referencias opcionales a pruebas se convierten en un elemento de revisión de vínculo con un caso en el mismo monitor; la aceptación escribe el vínculo de interviniente sobre el que se construyen las vistas de clústeres y de conexiones, mientras que un vínculo ya existente, un duplicado pendiente o un rechazo anterior se comunican en lugar de volver a proponerse. La aplicación cuenta además las propuestas por llamante: tras dos propuestas de datos maestros guardadas y una propuesta de relación o de vínculo con un caso, trata la sesión como mantenimiento de la red de partes, añade una sola vez la indicación de que este trabajo, íntegramente protegido por compuertas, no necesita un modelo de gama más alta y — en el chat integrado — mantiene la ejecución en el nivel de modelo medio. Procesos independientes en segundo plano alimentan el mismo monitor: un extractor de datos con eliminación de duplicados en origen y un escaneo periódico de normalización que propone fusiones y reclasificaciones conforme al modelo de tres categorías (persona física; persona jurídica: cualquier ente corporativo distinto de un individuo, con prevalencia de la inscripción en el registro mercantil sobre la titularidad estatal; institución: órganos estatales sin inscripción registral) — sin fusionar nunca automáticamente.

### 19. La biblioteca jurídica

La biblioteca contiene textos legales completos como archivos markdown, con un número de registro interno por ley. La herramienta de listado recorre por páginas el inventario (identificador, ordenamiento jurídico, título, clase, nombre de archivo, fecha de la última comprobación; cincuenta por defecto, quinientos como máximo) y es de solo lectura. La herramienta de búsqueda es obligatoria antes de cualquier búsqueda en internet de una norma: coteja bien por denominación contra el título y la descripción, bien por pasaje citado con tolerancia aproximada (basta con alrededor del sesenta por ciento de las palabras y se toleran las terminaciones de palabra), exige el ordenamiento jurídico tomado del caso, clasifica las coincidencias en el título muy por encima de las coincidencias en el contenido (una coincidencia en el título cuenta nueve décimas, cada resultado en el contenido una décima, como máximo tres fragmentos por archivo), y devuelve por cada resultado el número de registro, el nombre del archivo, fragmentos breves con sus posiciones de carácter exactas y una llamada ya preparada de extracto literal cuyo rango ya está ampliado — en al menos quinientos caracteres más allá del fragmento — de modo que el modelo obtenga por sí mismo la redacción autorizada en lugar de fiarse del fragmento. La herramienta de extracto devuelve el contenido literal de una ley entre dos posiciones de carácter, dirigida por número de registro, acotada al archivo, precedida de una nota que indica que el rango puede ajustarse y que la ley entera puede cargarse, con los resultados sobredimensionados desviados automáticamente al almacén temporal; la coincidencia de dígitos dentro de las búsquedas de leyes utiliza reglas de límites que toleran la notación con punto de millares de los portales oficiales. Las leyes enteras pueden cargarse por nombre de archivo o por número de registro, con desvío automático de los archivos grandes. La herramienta de registro es el canal de notificación obligatorio para toda ley hallada en la web abierta: solo se envían el enlace, el ordenamiento jurídico y, opcionalmente, el título y una frase; un proceso en segundo plano obtiene, convierte, almacena y anuncia la fuente en el Monitor de coherencia de datos, y el propio modelo nunca convierte nada. Un ciclo de revisión de la biblioteca lleva la fecha de la última comprobación de cada fuente. Rechazar una ley en el Monitor de coherencia de datos requiere una confirmación.

Una herramienta de nueva comprobación verifica a petición una ley contra su fuente y comunica sin cambios, actualizada o duplicada; una obtención más reciente asume la entrada, y en IRONSTICK SERVER prevalece la comprobación más reciente, con independencia de quién registrara primero la ley. Las leyes enteras por encima del límite del conector llegan al almacén temporal y no registran nada como leído; la procedencia proviene de la herramienta de artículos.

### 20. Validadores y registros

Las herramientas deterministas de verificación abarcan: IBAN (formato, longitud específica del país, suma de control); números nacionales personales, de seguro y fiscales en nueve esquemas de siete países (Rumanía, Suiza, Alemania, Austria, Francia, Italia, España) mediante dígitos de control, con un modo dirigido por esquema y un modo automático que prueba todos los esquemas y comunica los válidos; identificadores europeos de IVA (primero una comprobación sin conexión del formato del país, después el servicio oficial en vivo de la Unión, que devuelve los datos de empresa publicados cuando el Estado miembro los facilita); números EORI contra el servicio de validación en vivo de la Unión; identificadores de entidad jurídica (primero la suma de control, después el registro global para el estado y el nombre); y, por separado, una herramienta de registro mercantil que abre la búsqueda «Encontrar una empresa» del portal europeo e-Justice (BRIS) en un navegador incrustado para que el modelo la lea. Cada validador devuelve un resultado concreto y razonado — válido con detalles, no válido con el aspecto que falla, no encontrado, o servicio inaccesible con el estado incluido — nunca un simple sí o no, de modo que un número realmente erróneo siempre pueda distinguirse de una caída del servicio. La capa de instrucciones hace obligatoria la ejecución del validador correspondiente antes de que cualquier número de este tipo entre en un documento producido o revisado. El mismo conjunto de herramientas contiene la herramienta de ubicación aproximada del usuario (país, ciudad y dirección pública según la última instantánea de inicio de sesión, expresamente no una fuente de ordenamiento jurídico) y una herramienta meteorológica de mejor esfuerzo.

### 21. Acceso web

Dos herramientas alcanzan la internet abierta, ambas planteadas como complementos de las capacidades web propias de la IA de escritorio, con la instrucción expresa de utilizarlas directamente cuando la IA no tiene acceso web propio, y la prohibición de utilizarlas para datos relativos a casos. Cada búsqueda consulta Google, DuckDuckGo y Qwant al mismo tiempo y devuelve una única lista fusionada de resultados con título y enlace, sin duplicados, pensados para seguirse con el abridor de páginas. El abridor de páginas obtiene exactamente una URL pública con una canalización por etapas que la descripción enumera íntegramente, para que el modelo nunca se rinda prematuramente: una solicitud estándar de navegador con gestión de redirecciones y compresión; las páginas que requieren JavaScript, o que no responden a la solicitud estándar, se renderizan en un navegador incrustado hasta que aparece contenido; conversión de PDF con exactitud de página, utilizando la capa de texto por página y OCR solo para las páginas escaneadas, de modo que los documentos mixtos funcionan; y conversión de formatos ofimáticos y de texto a texto legible. La salida es markdown, completa: se extrae el contenido principal (navegación, publicidad y avisos de cookies eliminados), las páginas sin cuerpo de artículo conservan su pie porque allí figuran la dirección y los datos de contacto, y cuando la extracción no dejaría prácticamente nada se entrega en su lugar la página entera. Una llamada responde en un máximo de cuarenta y cinco segundos; un documento grande o escaneado se sigue procesando en segundo plano y se entrega de inmediato en la siguiente llamada con la misma dirección. Los portales de leyes se rechazan hasta que se haya buscado en la biblioteca, conforme a la compuerta de normas. Si un sitio web exige una confirmación antes de mostrar su contenido, IRONSTICK abre la página en una ventana propia; el usuario confirma allí, y el trabajo con la página continúa.

### 22. Navegación por la interfaz gráfica y exportaciones

Toda la navegación es de activación voluntaria mediante un interruptor del usuario; sin él, el grupo entero no existe. Las herramientas de navegación abren, en la ventana principal de la aplicación: un caso (opcionalmente en su pestaña de crónica o de valoración), la lista de casos de un cliente, una persona, una institución (ambas resaltadas y con el detalle abierto), una entrada de prueba (en la página correcta de la crónica, resaltada), la preparación del dossier (con una variante totalmente automática reservada al deseo expreso del usuario de obtener un PDF completo), el diario de trabajo (opcionalmente el detalle de un día concreto), el monitor de correo (opcionalmente el detalle de un correo concreto), la búsqueda global con una consulta lanzada (reservada al deseo expreso; las respuestas del chat utilizan en su lugar la búsqueda interna), el área de copias de seguridad con un inicio inmediato de la copia, y cualquier pantalla con nombre de la lista canónica de pantallas. Los diálogos de exportación abarcan la lista de clientes, la lista de plazos, la visión general de casos de un cliente, el dossier del caso en dos tipos de documento y el mapa, más la generación del paquete de IA del cliente. Todas las herramientas de navegación están sujetas al bloqueo duro y son los destinos de las ofertas de navegación.

### 23. Redacción, formatos y entrega

El conjunto de herramientas de redacción vincula la producción de documentos a especificaciones obtenidas. La herramienta de formato de salida devuelve la instrucción vinculante de generación para la clase de artefacto solicitada — para los escritos, diferenciada entre escrito jurídico y carta sencilla, cada uno en forma con representación y sin representación letrada, con el ordenamiento jurídico, el idioma y la fecha del caso resueltos directamente en la instrucción, y con marcadores de posición que el modelo rellena a partir de los datos del conector; la herramienta del formato de envío por correo devuelve la especificación vinculante para los envíos al tribunal con entrega secuencial de paquetes. Ambas deben seguirse al pie de la letra. Cada IA de escritorio entrega un escrito terminado en Markdown a través del diálogo de entrega, que puede abrirlo directamente en el procesador de textos de IRONSTICK; no se almacena nada hasta que el usuario guarda. La herramienta de registro de la crónica abre el formulario de crónica ya rellenado en el caso correcto, sin guardar nada por sí misma.

La entrega de archivos al usuario discurre exclusivamente por la herramienta de entrega, que ejecuta la propia aplicación. Solo acepta una ruta de origen en el almacenamiento temporal — el contenido en línea y las rutas ajenas se rechazan —, lee ella misma el archivo, de modo que el modelo no vuelve a teclear nada, y lo pasa al diálogo de exportación de IRONSTICK; desde allí el usuario lo guarda o envía un borrador de texto al procesador de textos con un clic. No existe ninguna carpeta de entregas ni ninguna ruta que el modelo llegue a conocer. El modelo versiona él mismo los nombres de archivo, un número nuevo por entrega; el resultado informa de las versiones de la raíz del nombre entregadas hasta ahora y de la más alta, y avisa si el número elegido no es el más alto. La entrega se produce una vez por tarea, al final, nunca para estados intermedios, y pasa primero por las compuertas de interacción y de verificación.

### 24. Revisión por pares entre IA

La herramienta de traspaso pasa un trabajo producido a la otra IA de escritorio: el contenido va a un almacén grande de corta duración, un registro de tarea lo referencia, la instrucción (limitada a mil caracteres) indica lo que debe hacer el par, y el modelo pide entonces al usuario que active al par en la otra aplicación. La herramienta de bandeja de entrada enumera las tareas abiertas dirigidas al llamante — las propias nunca aparecen — con identificador, encargo y contenido completo, opcionalmente filtradas por cliente o por caso. La herramienta de respuesta cierra una tarea (borrando su contenido de corta duración) y simultáneamente envía la valoración de vuelta como tarea nueva al remitente original; la herramienta de finalización cierra sin devolver nada. La lectura y la escritura del almacén temporal son miembros de este conjunto de herramientas para manejar el contenido intercambiado.

### 25. Archivos de instrucciones de IA

Por cada caso, el usuario puede almacenar archivos de instrucciones que el modelo debe consultar. El listador muestra las instrucciones de un caso con identificador, nombre de archivo, tamaño, fecha de carga y extracto, sin textos completos; el inventario global enumera todas las instrucciones de todos los clientes y casos; el lector individual devuelve una instrucción sin recortar por su identificador numérico, con una opción para encaminar el contenido en bruto al almacén temporal con exactitud de byte para su paso directo; el lector masivo devuelve todas las instrucciones de un caso en una sola llamada, con la misma opción de almacén temporal. Ambas salidas de listado se desvían automáticamente cuando están sobredimensionadas. La herramienta de actualización propone una versión modificada por exactamente una de tres vías — un fragmento para añadir (la vía preferida para las adiciones, en la que la aplicación ensambla por sí misma el resultado y al modelo se le prohíbe reproducir el contenido existente), una ruta de origen a una versión nueva completa en disco, o el contenido nuevo completo en línea — y la aplicación muestra el cambio al usuario como una comparación de diferencias; solo la aprobación expresa lo adopta, el resultado (aprobado, rechazado o pendiente) se devuelve, y un estado pendiente prohíbe volver a enviar. La exportación del paquete construye el conjunto completo de instrucciones y skills de un cliente y abre el diálogo de exportación.

### 26. Integraciones complementarias fuera de la superficie de herramientas

Un complemento del lado del cliente completa el Bridge sin formar parte de la superficie MCP: para Claude Desktop y ChatGPT Desktop, un botón aparte de la configuración crea un plugin de skills (skills que reflejan el modelo de trabajo de conjunto de herramientas y ejecución de herramienta, generados y versionados por la aplicación), que el usuario añade en la aplicación de escritorio. La configuración del front-end del Bridge para cada IA la escriben los botones correspondientes del configurador, que escriben siempre la identidad del llamante para proteger frente a una configuración compartida entre IA.

### 27. Semántica de fallos y rechazos — resumen

Todo rechazo del sistema es instructivo y no escueto: las infracciones de esquema devuelven el esquema esperado; los nombres desconocidos devuelven la coincidencia más cercana; la compuerta de fecha nombra el remedio exacto; la compuerta de normas nombra el procedimiento de la biblioteca; el bloqueo de navegación nombra la pantalla protegida y la alternativa aplazada; el bloqueo por consentimiento nombra la ventana de reintento; las respuestas sobredimensionadas nombran el archivo y los dos comandos de continuación o los filtros de acotación; los fallos de los validadores nombran el aspecto que falla y distinguen las caídas del servicio; los rechazos por capacidad en la memoria nombran la ocupación y el resto y, cerca del límite, las opciones de reestructuración; las compuertas de entrega y de búsqueda nombran sus opciones de respuesta, incluida la salida universal de desconocido; el bloqueo de acceso nombra las dos llamadas que lo abren; la compuerta de preparación nombra las partes no leídas con identificadores y porcentajes; el verificador de escritos nombra, por cada lectura caducada o reiniciada, la llamada exacta que la restablece. El contrato frente al modelo es que, tras un máximo de tres intentos corregidos en cualquier llamada que falla, el modelo se detiene y comunica el error exacto al usuario.

##### Contacto

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Escanee el código para guardar nuestra tarjeta de contacto — teléfono, e-mail y sitio web.

Contacte directamente por WhatsApp o Telegram — también es bienvenida una llamada. Idiomas hablados: alemán, inglés, rumano.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Mensaje

### ¿Le interesa IRONSTICK o una demostración? Escríbanos.
