# Declaración RGPD de flujos de datos

Página original: https://www.ironstick.legal/gdpr_es.html

---

Relaciones con modelos de lenguaje de gran tamaño externos

Descripción fáctica, derivada del código, de cada vía por la que los datos salen de
IRONSTICK hacia un LLM externo, de qué se transmite exactamente, en qué forma y
dónde se aplica la capa de seudonimización. Edición de escritorio para Windows. El presente documento
describe únicamente el comportamiento de IRONSTICK — **lo que el proveedor de IA hace con los datos
recibidos se rige exclusivamente por las condiciones propias del proveedor** (las condiciones y
políticas de privacidad de los proveedores que el usuario haya configurado — Google, Alibaba Cloud,
Moonshot AI, OpenAI y/o Anthropic), que el usuario debe revisar por separado.

## 1. Ámbito y endpoints

![API de IA, aplicación de IA de escritorio y servidor MCP a la izquierda, IRONSTICK Client en el centro, caja fuerte de datos con AES-256, IRONSTICK Server y aplicación de escaneo a la derecha](https://www.ironstick.legal/img/65_ai_client_vault.png)
Las llamadas externas de IA dentro de la aplicación se dirigen **al proveedor que la cascada automática
esté utilizando en ese momento**. El usuario puede configurar hasta cuatro proveedores; cada
proveedor configurado se utiliza automáticamente en este orden fijo y orientado al ahorro de costes:
**Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. En cada inicio del programa, IRONSTICK
comprueba cuáles de ellos responden; si una cuota o un crédito se agota a lo largo del día, o
un proveedor deja de responder, la misma solicitud se repite con el siguiente
proveedor, que se utiliza a continuación durante el resto del día. El contenido transmitido
es idéntico con todos los proveedores (a partir de la sección 3: seudonimizado por el
router, consentimiento, registro de auditoría). Los endpoints son:

- **Claude:** `POST https://api.anthropic.com/v1/messages`,
con la propia clave API del usuario.
- **ChatGPT:** `POST https://api.openai.com/v1/chat/completions`,
con la propia clave API del usuario.
- **Qwen:** `POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions`
(Alibaba Cloud Model Studio, región internacional), con la propia clave API del usuario.
- **Kimi:** `POST https://api.moonshot.ai/v1/chat/completions`
(Moonshot AI), con la propia clave API del usuario.

**Proveedores gratuitos para tareas en segundo plano (opcional).** Además, el usuario puede
configurar las ofertas gratuitas de **Groq**, **OpenRouter** y **Mistral**.
IRONSTICK las utiliza exclusivamente para tareas que se ejecutan en segundo plano:
clasificación de correo electrónico, monitor de datos, informe diario, resumen del diálogo,
asignación de interlocutores en las transcripciones, obtención de textos legales y panorama de
situación. Cada uno de estos proveedores tiene en la configuración su propio interruptor
ACTIVADO/DESACTIVADO; solo se utiliza si hay una clave guardada y su interruptor está
ACTIVADO. Para el chat, para los escritos y para la revisión Red/Blue Team **nunca** se
utilizan. Si ninguno de ellos está disponible, se encarga la cascada descrita más arriba.
La seudonimización, el consentimiento y el registro de auditoría se rigen por la tarea
correspondiente (sección 4). Los endpoints son:

- **Groq:** `POST https://api.groq.com/openai/v1/chat/completions`,
con la propia clave API del usuario.
- **OpenRouter:** `POST https://openrouter.ai/api/v1/chat/completions`,
con la propia clave API del usuario.
- **Mistral:** `POST https://api.mistral.ai/v1/chat/completions`,
con la propia clave API del usuario.

**Ofertas gratuitas — aviso en la configuración.** Debajo de
cada uno de estos proveedores figura textualmente: «PRECAUCIÓN: se trata de una oferta
gratuita del proveedor <proveedor>. Si guarda la clave API y pone el interruptor en ON,
IRONSTICK utiliza este proveedor para tareas en segundo plano como resúmenes, clasificación
de correos, etc. Con ello se envían inevitablemente datos a este proveedor. Lea
detenidamente sus condiciones en relación con el RGPD.» Un despacho cuyas normas
profesionales exijan un contrato de encargo del tratamiento para cada encargado debería
activar estos interruptores solo después de revisar las condiciones del proveedor
correspondiente — un proveedor desactivado nunca se utiliza.
Se utilizan tres niveles de modelo configurables por proveedor (pequeño / mediano /
grande). Un canal independiente y opcional es el
**Bridge de IA de escritorio** (sección 4.9): en él, los datos fluyen hacia la IA de escritorio
local propia del usuario (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen
Desktop **o** Kimi Desktop), es decir, hacia el proveedor de esa IA (Anthropic, OpenAI,
Alibaba Cloud/Qwen o Moonshot AI/Kimi), en el marco de la propia suscripción/cuenta del usuario con dicho proveedor. Los
Bridges pueden funcionar en paralelo — el mismo servidor MCP local puede registrarse
simultáneamente en Claude, ChatGPT, Qwen y Kimi, y estos pueden trabajar al mismo tiempo en el mismo
expediente. IRONSTICK no opera ningún servidor
propio; nunca fluyen datos hacia el fabricante del software. El servidor LAN del despacho
opcional (**IRONSTICK SERVER**, sección 9) no altera esta situación: es
operado por el propio despacho, en el hardware propio del despacho, dentro de la
red propia del despacho — nunca contacta con el fabricante ni con ningún proveedor
de IA.

**El interruptor principal es el acceso propio del usuario.** El tratamiento
externo de IA dentro de la aplicación solo existe si el usuario ha abierto su propia cuenta
con un proveedor de IA e introducido su propia clave de acceso en la configuración.
**Sin ningún proveedor configurado no puede producirse en absoluto ninguna llamada externa de IA dentro de la aplicación** — todas
las funciones descritas en la sección 4 permanecen entonces locales o simplemente no están disponibles. Dicha
cuenta constituye un contrato directo entre el usuario y el proveedor; IRONSTICK no
es parte del mismo. Lo mismo se aplica al Bridge de IA de escritorio, que requiere
la propia suscripción/cuenta del usuario con el proveedor de IA de escritorio elegido
(Anthropic, OpenAI, Alibaba Cloud/Qwen o Moonshot AI/Kimi). Los documentos marcados como **secretos** quedan excluidos
de las herramientas del Bridge y del chat, del paquete de instrucciones
de IA y de toda salida generada (anexos, dosieres, exportaciones);
su tratamiento durante el registro sigue la elección deliberada del usuario en el
momento del registro (sección 4.1).
Completamente local (nada sale del equipo): extracción de texto y OCR, la
capa de chat local determinista, la búsqueda global, el radar de relevancia, el análisis de
cadenas de cartas, la generación de dosieres/PDF, la pasada local del buscador de anonimización, el reconocimiento de voz (transcripción de grabaciones) y la elaboración del paquete de instrucciones de IA.

## 2. La capa de seudonimización

Cada ejecución de agente dentro de la aplicación puede llevar un seudonimizador que tokeniza el texto saliente,
retraduce los argumentos de las herramientas para su ejecución local, vuelve a tokenizar los resultados de las herramientas
y destokeniza localmente la respuesta final. La correspondencia existe únicamente en memoria, con una
correspondencia nueva por operación; nunca se almacena de forma persistente.

![Arriba: IRONSTICK Client, figura anonimizada con engranajes, API de IA; abajo: IRONSTICK Client, usuario, aplicación de IA de escritorio](https://www.ironstick.legal/img/66_pseudonymization.png)
### 2.1 Qué se sustituye

| Origen | Campos | Token |
| --- | --- | --- |
| Registros de clientes | nombre, CNP, teléfono, correo electrónico, dirección+localidad | `$PARTEI_A$`, `$CNP_A$`, `$TEL_A$`, `$MAIL_A$`, `$ADRESSE_A$` |
| Personas / entidades | nombre completo (persona o empresa), CNP | `$PARTEI_B$` / `$FIRMA_A$`, `$CNP_B$` |
| Expedientes | número de expediente, parte contraria, demandante | `$FALL_A$`, `$PARTEI_C$`… |
| Capa de patrones (valores desconocidos en texto libre) | números de expediente judicial (n/nnn/yyyy), CNP de 13 dígitos, IBAN, direcciones de correo electrónico, números de teléfono plausibles | las mismas familias de tokens |

### 2.2 Qué permanece real de forma deliberada

- **Fechas, horas e importes monetarios** — se consideró más
peligroso falsearlos que transmitirlos.
- **Nombres de instituciones** (tribunales, autoridades) — no figuran en el
diccionario y son organismos públicos.
- **Terceros desconocidos en texto libre** — los testigos, médicos, abogados,
jueces o empresas que no están almacenados como registros de cliente/persona/expediente no se
reconocen y salen en texto claro. Se trata de un límite documentado del
planteamiento.
- **Direcciones de quienes no son clientes** — no existe ningún patrón de direcciones; solo se
tokeniza la dirección almacenada del cliente.
- La totalidad del **contenido fáctico** de los documentos (alegaciones, diagnósticos,
relato) — solo se sustituyen los identificadores, no la historia.

### 2.3 Excepciones deliberadas con nombre real (en claro)

- **Investigación web de personas (fase 1)** y **autocompletado de formularios** para personas /
instituciones: una búsqueda web de `$PARTEI_A$` carece de sentido, por lo que el
nombre real se envía por diseño.
- **Buscador de IA de anonimización**: recibe texto que ya ha sido anonimizado
localmente y debe responder con los nombres reales de los *terceros desconocidos* que
encuentre — la seudonimización está desactivada para este único fin.
- **Preprocesamiento de lectura en voz alta (TTS)**: véase 4.6 — las frases salen en texto
claro.
- **Bridge de IA de escritorio**: datos sin procesar por diseño (sección 4.9).

## 3. Momentos de consentimiento y registro de auditoría

Las llamadas encaminadas a través del router central están sujetas a consentimiento y se registran: cada
ronda del modelo escribe una fila en la tabla de auditoría local con
la solicitud y la respuesta completas **en la forma tokenizada que realmente salió del
equipo**; los intentos rechazados/bloqueados se registran sin contenido. El cuadro de diálogo de
consentimiento indica el nivel de modelo y el tamaño aproximado de la solicitud, y una aprobación cubre
la sesión de pantalla actual (en el registro de documentos: la ejecución actual del programa).

**Flujos con consentimiento automático (sin cuadro de diálogo):** la clasificación
de correo electrónico en segundo plano (funcionamiento continuo), la ejecución de análisis del monitor de datos
y el buscador de IA de anonimización (activar su interruptor constituye el consentimiento). Estos
siguen estando seudonimizados (salvo las respuestas con nombres reales previstas del buscador de anonimización)
y siguen siendo auditados.
**Flujos que eluden el router:** las funciones de IA del procesador de textos,
el preprocesamiento de lectura en voz alta y la llamada de corrección por IA de File→Markdown
llaman directamente a la API. Están seudonimizados (excepción: lectura en voz alta),
pero **no muestran ningún cuadro de diálogo de consentimiento propio ni escriben filas
en el registro de auditoría**. El manejo de estas funciones por parte del usuario (pulsar el botón de IA,
iniciar una generación, iniciar la lectura en voz alta con el interruptor de IA activado) constituye el
momento del consentimiento.
## 4. Los flujos de datos, caso de uso por caso de uso

### 4.1 Registro de documentos

La extracción de texto y el OCR son locales. Si hay una clave API configurada, IRONSTICK pregunta
una vez por ejecución del programa y, a continuación, se ejecutan hasta cuatro tipos de llamada (todos seudonimizados, todos
auditados):

- **Detección del documento principal** (nivel pequeño): texto OCR sin procesar en fragmentos de
2.000 caracteres como máximo, máximo 8 llamadas — solo para escaneos de baja calidad.
- **Corrección de OCR** (nivel pequeño): texto del documento limitado a 16.000
caracteres.
- **Clasificación** (nivel mediano): texto del documento limitado a 16.000
caracteres, **más listas del sistema**: la lista completa de expedientes (número de expediente,
nombre del cliente, parte contraria — tokenizados), un repertorio de nombres conocidos limitado a 2.000
caracteres (tokenizado) y las listas de códigos de tipo de institución y de tipo de documento
(etiquetas no tokenizadas). Alternativa: nivel pequeño, 8.000 caracteres, sin las
listas.
- **Contextualización al guardar** (nivel pequeño): los metadatos del documento y
el texto completo limitado a 30.000 caracteres, más una línea de índice (ID, fecha, título ≤120
caracteres) de **cada elemento de prueba activo del mismo cliente** — utilizada para fundamentar
las referencias cruzadas. Se ejecuta también para documentos marcados como secretos (decisión deliberada
del usuario).

### 4.2 Monitor de correo (clasificación)

La asignación al expediente se realiza **de forma local y sin IA**. Para evaluar la
urgencia se realiza **una llamada de nivel pequeño por correo electrónico** con exactamente: nombre y
dirección del remitente, asunto y el fragmento de vista previa almacenado como texto sin formato (limitado
estrictamente a 1.500 caracteres) — **nunca el cuerpo completo**, ningún adjunto y
**ninguna lista de expedientes**. Respuesta: prioridad + justificación. Si están activados
proveedores gratuitos para tareas en segundo plano (sección 1), esta llamada puede realizarse a
través de ellos. En la pantalla de correo electrónico está sujeta a consentimiento una vez por sesión; en
**funcionamiento en segundo plano se ejecuta sin cuadro de diálogo** (activar el monitor constituye
el consentimiento). Seudonimizada y auditada en ambos modos.

**Sin píxeles de seguimiento.** Abrir un correo en el monitor nunca contacta con
el servidor del remitente: las imágenes referenciadas mediante una dirección de internet (incluidos
los píxeles de seguimiento invisibles) no se cargan y aparecen como marcadores con un
aviso, de modo que el remitente no puede saber cuándo, con qué frecuencia ni desde qué dirección se
leyó un correo. Solo se muestran las imágenes incrustadas en el propio correo.

### 4.3 Análisis de personas (investigación web)

Tres fases tras un consentimiento único por sesión:

- **Fase 1 — búsqueda:** se consultan directamente los motores locales; adicionalmente, se
invoca la herramienta de búsqueda web del lado del servidor del proveedor con el **nombre real
de la persona en texto claro** (inevitable para una búsqueda; registrado en texto claro).
- **Fase 2 — resúmenes de páginas** (nivel mediano): por página, el nombre de la persona
(tokenizado), la URL y el contenido de la página limitado a 8.000 caracteres.
- **Fase 3 — síntesis del perfil** (nivel grande): nombre y localidad (tokenizados)
más cada texto de página recopilado, limitado a 6.000 caracteres por fuente.

El resultado se almacena localmente con la fiabilidad «no confirmado». Los botones de
**autocompletado** correspondientes en los formularios de persona/institución envían igualmente el
nombre introducido en texto claro (excepción documentada).

### 4.3a Comprobación OSINT de una parte (`osint_entity`)

La comprobación OSINT de una parte es un procedimiento fijo que la propia aplicación
ejecuta cuando una IA conectada la invoca con nombre, localidad, distrito, país y
condición de persona física/jurídica:

- **Expedientes:** una búsqueda de texto completo del nombre en la base de datos
local — **puramente local**, nada sale del equipo.
- **Internet:** se envía una lista fija de consultas de búsqueda a los motores de búsqueda
públicos **Google, DuckDuckGo y Qwant**. Cada consulta consta de un
término de búsqueda en el idioma del país de la parte más el **nombre real
de la parte en texto claro** y, en algunas consultas, la localidad o el distrito
(inevitable para una búsqueda). No se transmite ningún contenido de expedientes, clientes ni
documentos. Los motores ven las consultas como las de cualquier usuario de un navegador.

El resultado se devuelve a la IA que realizó la llamada como perfil preparado y no verificado.
No se escribe nada en los datos maestros: cada hallazgo pasa por el control de revisión
del monitor de datos (sección 4.5) y solo se adopta cuando el
usuario lo acepta. Solo se evalúan fuentes de acceso público.

### 4.4 Protocolo diario

La pantalla en sí es local. La importación de texto libre ejecuta en primer lugar un analizador
**local**; solo cuando no se encuentra ningún marcador de formato de protocolo, una alternativa de IA
normaliza el texto sin procesar: el texto pegado se envía completo (se interrumpe por encima de 200.000
caracteres), nivel pequeño, sujeto a consentimiento, seudonimizado, auditado. Los protocolos
almacenados solo salen del equipo como resultados de herramientas del chat/Bridge
(extractos limitados) o dentro del paquete de instrucciones de IA (sección 5).

### 4.5 Monitor de datos

La fase 1 (correo electrónico ↔ datos maestros) es completamente determinista. La fase 2 envía
**por cada nuevo documento entrante una llamada** de nivel pequeño (seudonimizada, auditada,
**sin cuadro de diálogo**) que contiene: los **fragmentos de zonas de contacto** desduplicados
(±~100 caracteres alrededor de marcadores de dirección/teléfono/datos fiscales) del texto completo de
**ese** documento, los nombres de las partes de ese documento y de su expediente, así como, para
cada parte, los **nombres** de las posibles coincidencias en los datos maestros almacenados
(tokenizados cuando figuran en el diccionario; nombres de instituciones en claro).
**Los datos de contacto y el CNP de los datos maestros almacenados no se transmiten.** Si
están activados proveedores gratuitos para tareas en segundo plano (sección 1), esta llamada
puede realizarse a través de ellos. La respuesta solo llega a ser una sugerencia que el
usuario debe aceptar en el monitor.

### 4.6 Procesador de textos (asistencia de IA en el texto)

- **Revisar la selección:** la frase/el párrafo/la sección seleccionados (con
marcado) **más los primeros 6.000 caracteres de todo el documento como contexto**
y la instrucción del usuario — nivel mediano, seudonimizado.
- **Estructura/índice:** en la práctica, todo el documento como lista de líneas indexada
(las líneas cortas completas, las líneas largas truncadas a 80 caracteres), limitado a 40.000
caracteres — nivel mediano, seudonimizado.
- **Preprocesamiento de lectura en voz alta:** al leer un documento en voz alta, **cada
frase se envía individualmente al nivel pequeño en texto claro** para desarrollar
abreviaturas y números — **sin seudonimización** (los números de identificación
deben volver sin cambios para leerse correctamente). Los sellos de archivo y los marcadores de
referencia se eliminan previamente de forma local. Iniciar la lectura en voz alta constituye el momento del
consentimiento.

Ninguna de las llamadas del procesador de textos muestra un cuadro de diálogo de consentimiento
propio ni escribe filas en el registro de auditoría (elusión del router, véase la sección 3).
### 4.7 Revisión Red/Blue Team y resumen del diálogo (API)

Otros dos flujos de API forman parte de la redacción. **Red/Blue Team:** si el usuario
lo ha activado para el proveedor activo (interruptor junto a la clave API; se requiere una clave
guardada), cada documento formal entregado mediante
`deliver_file` — tanto desde el chat de la aplicación como desde el Bridge
de IA de escritorio — es leído una vez más por el mismo proveedor en el papel de letrado de la parte contraria
(nivel mediano). Se transmite: el texto del borrador, la fecha y la
jurisdicción del expediente; seudonimizado a través del router y auditado como cualquier llamada
del router; sin cuadro de diálogo propio — el interruptor constituye el consentimiento; como máximo dos rondas por
archivo; tras la segunda ronda, el archivo se entrega en cualquier caso, con el
informe del revisor adjunto para el usuario. La revisión Red/Blue Team **nunca** se realiza
a través de los proveedores gratuitos para tareas en segundo plano (sección 1). **Resumen del diálogo:** en sesiones de chat
largas, la parte más antigua del diálogo (solo las preguntas del usuario y las
respuestas finales del modelo, nunca resultados de herramientas) es condensada por el proveedor activo
(nivel pequeño, en segundo plano) en un resumen de 2.000 caracteres que sustituye al historial
sin procesar; se almacena cifrado en el almacén temporal y se sobrescribe cada
vez. Si están activados proveedores gratuitos para tareas en segundo plano (sección 1), el
resumen puede realizarse a través de ellos.

### 4.8 Chat de IA (externo, API)

Consentimiento una vez por sesión de chat; nivel mediano con escalado automático al
nivel grande (en ese caso se vuelve a enviar todo el contexto); seudonimizado; cada ronda
auditada. Cada turno transmite: la instrucción del sistema (reglas estáticas), el **contexto
actual de la interfaz** (pantalla actual, expediente/cliente abierto, incl. el nombre del cliente — tokenizado),
hasta **10 entradas de memoria de IA** del cliente abierto, el diálogo más reciente
limitado a 6.000 caracteres más un resumen de 2.000 caracteres de los turnos anteriores
(4.7) y la lista de archivos temporales del chat. Cada herramienta que invoca el modelo
devuelve su resultado a la conversación de la API — incluidos los textos completos de documentos
(limitados a 10.000 caracteres por elemento; los resultados mayores se escriben en el
almacén temporal cifrado y se leen por partes), los cuerpos de correo electrónico y
los extractos del protocolo diario. Desde septiembre de 2026, el chat utiliza la misma capa de
herramientas y los mismos controles de entrega que el Bridge de IA de escritorio (4.9): verificación
de escritos, Red/Blue Team (4.7) y entrega a través del cuadro de diálogo de exportación —
lo que sale del sistema es una plantilla lista para su presentación. La capa de chat local
responde a las solicitudes rutinarias sin transmisión alguna.

Dos herramientas de conveniencia merecen mención expresa. **`get_weather`**
obtiene datos meteorológicos actuales de un lugar indicado del servicio no LLM
Open-Meteo (sección 7) — a dicho servicio solo se transmite el nombre del lugar / sus coordenadas,
nunca datos de expedientes ni de personas. **`get_my_location`**
responde exclusivamente a partir de la **instantánea de seguridad más reciente almacenada
localmente** (sección 8): la solicitud de la IA **no desencadena ninguna nueva consulta externa** —
solo lee lo que ya está en el disco. Como con cualquier herramienta, lo que estas herramientas
devuelven fluye de vuelta a la conversación de IA, es decir, al proveedor de IA.

### 4.9 Bridge hacia una IA de escritorio local (Claude Desktop / Claude Code / ChatGPT
Desktop / Qwen Desktop / Kimi Desktop) — módulos adicionales OPCIONALES

**Cada acceso a una IA de escritorio es un módulo opcional que se adquiere por separado.**
Solo existe cuando el despacho ha adquirido e instalado el correspondiente
módulo de Bridge; sin ningún módulo, la sección del Bridge permanece bloqueada en la
configuración, el endpoint local nunca se inicia y no puede producirse ninguno de los flujos
descritos en esta sección. El mismo servidor MCP STDIO local puede
registrarse en **Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** y/o **Kimi Desktop** — la mecánica que se describe a continuación es idéntica para todos; solo
difiere el proveedor receptor.

**Este canal transmite datos de expedientes sin procesar y sin
seudonimizar.** Esa es su finalidad: la propia sesión de IA de escritorio del usuario redacta
plantillas listas para su presentación y, por ello, necesita nombres y números reales.
- La IA de escritorio (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop o Kimi Desktop) se conecta a través de un Bridge local con la aplicación en ejecución; la conexión no sale del ordenador.
- **Sitios web con verificación de acceso.** Si un sitio web exige una confirmación antes de
mostrar su contenido, IRONSTICK abre la página en una ventana propia; el usuario
confirma allí él mismo. A continuación, el contenido de la página lo lee la IA de escritorio —
y llega a su proveedor como cualquier otro resultado de herramienta.
- En el primer acceso a datos por ejecución del programa, IRONSTICK muestra un cuadro modal de
consentimiento bloqueante; el rechazo bloquea el canal durante 10 minutos. Tras la aprobación, el canal permanece
abierto durante el resto de la ejecución del programa.
- Más de 200 herramientas — más de 100 de ellas de lectura — dan acceso a crónicas, textos completos, correos electrónicos,
protocolos diarios, plazos, datos maestros, expedientes completos (por partes) y formatos
de salida; los documentos marcados como secretos quedan excluidos. Las vías de escritura están sujetas a control de revisión
(las sugerencias de datos maestros/relaciones llegan al monitor de datos;
los cambios propuestos por la IA a las notas de instrucciones de IA vinculadas a un expediente se presentan como
diff rojo/verde dentro de IRONSTICK y solo se aplican después de que el usuario los acepte
expresamente — la decisión se comunica de vuelta a la IA) o son explícitas (entrega al
procesador de textos, entrega de archivos, navegación solo si se ha
permitido por separado). El mismo patrón de control de revisión cubre las dos vías de escritura más recientes:
la IA nunca escribe entradas de crónica — solo RELLENA PREVIAMENTE el formulario de
registro, que el usuario completa y guarda él mismo; y un texto completo de documento
sanado por la IA (nuevo escaneo OCR, punto siguiente) sustituye al texto completo almacenado solo después de que
el usuario haya visto el texto completo en un cuadro de diálogo de confirmación y lo haya guardado.
- **Sanación mediante nuevo escaneo OCR (local) y entrega del PDF (iniciada por el usuario).**
Cuando un texto completo almacenado está truncado o estropeado por una ejecución de OCR antigua, la IA puede
solicitar un nuevo escaneo: el usuario elige las páginas, el nuevo escaneo se ejecuta **localmente**
(sin nuevo destinatario externo) y ambas versiones del texto se depositan en el espacio temporal
local; lo que la IA lea de ellas fluye hacia su proveedor como cualquier
otro resultado de herramienta. Como último recurso absoluto — solo tras dicho nuevo escaneo y
solo dentro de límites estrictos impuestos por el Bridge (≤ 10 MB, ≤ 90 páginas) —
la IA puede pedir al usuario que le entregue el **archivo PDF original**: IRONSTICK
solo abre la entrada; el propio usuario guarda el PDF mediante el icono del clip
y lo arrastra al chat de la IA de escritorio. Con ello, el documento se transfiere
**como archivo** (incluidos sellos, firmas e imágenes) al proveedor de esa
IA — esto sucede exclusivamente por acción propia y deliberada del usuario, nunca
de forma automática, y los documentos marcados como secretos quedan excluidos desde el principio de todo el
canal de nuevo escaneo.
- **Espacio temporal local de la IA (minimización de datos).** Cualquier llamada a una herramienta puede desviar
su resultado completo a un archivo temporal local y efímero (`to_scratch`);
la IA recibe entonces solo la ruta del archivo y su tamaño — sin vista previa — en lugar del texto completo. Las herramientas de edición locales
(buscar/reemplazar/insertar/diff/normalizar) reelaboran esos archivos en el equipo del
usuario, y las herramientas de entrega/actualización los consumen por su ruta — de este modo, los contenidos extensos pueden
transportarse y reelaborarse **sin transmitirse en absoluto al proveedor
de IA**. Los volcados completos de expedientes (`dump_case_to_scratch`)
y el protocolo de inicio de sesión en una sola llamada se escriben igualmente directamente en esta
zona local; solo las partes que la IA lee posteriormente fluyen hacia su proveedor.
IRONSTICK vigila además la actualidad de estos archivos y los invalida
cuando cambian los datos subyacentes. La carpeta temporal se encuentra dentro de la carpeta
de datos y persiste entre sesiones (es el contexto de trabajo de la IA);
los archivos no utilizados se eliminan al cabo de 180 días, y no se crea ningún nuevo destinatario
externo.
- **El almacén temporal es una caja fuerte cifrada (desde septiembre de 2026).**
Cada archivo del almacén temporal está cifrado en reposo con AES-256, con la misma
derivación de clave que la base de datos y el almacén de documentos. La lectura y la escritura
pasan únicamente por el control de acceso de IRONSTICK; un archivo en texto plano colocado en el almacén por
cualquier otra vía (una herramienta de sistema de archivos de la IA de escritorio, una copia manual) es
rechazado, eliminado y comunicado a la IA como infracción de las reglas; los archivos solo salen del
almacén a través del cuadro de diálogo de exportación de IRONSTICK, nunca hacia una carpeta de descargas.
Junto con la base de datos cifrada, el almacén de documentos y el archivo de configuración,
esto cierra la última brecha en el equipo local: **ningún dato de expedientes se encuentra
sin cifrar en el disco del usuario — ni siquiera los archivos de trabajo de la IA**. Un disco
copiado, un lápiz extraviado o un archivo de copia de seguridad en manos equivocadas solo proporcionan texto
cifrado.
- Los resultados de las herramientas se entregan al cliente de IA de escritorio del usuario y, desde allí,
a **su proveedor**: Anthropic para Claude (en el marco de la suscripción de Claude del usuario
y de las condiciones de Anthropic), OpenAI para ChatGPT (en el marco de la suscripción de
ChatGPT del usuario y de las condiciones de OpenAI), Alibaba Cloud/Qwen para Qwen
Desktop (en el marco de la cuenta de Qwen del usuario y de las condiciones de Qwen) o Moonshot AI para Kimi
Desktop (en el marco de la cuenta de Kimi del usuario y de las condiciones de Moonshot AI). IRONSTICK no escribe
filas en el registro de auditoría para el tráfico del Bridge; la barra superior muestra un logotipo pulsante por cada
IA activa (marca de Claude, marca de ChatGPT, marca de Qwen, marca de Kimi) — el acceso simultáneo es
posible y cada uno se señaliza por separado. El propio Bridge lleva un
**registro de diagnóstico puramente local** de sus llamadas a herramientas — marca de tiempo, nombre de la herramienta,
éxito/fallo y tamaño de la respuesta, **nunca contenido alguno** — en un archivo de texto plano
junto al programa del Bridge. Este registro no se transmite a ninguna parte y sirve
únicamente para la resolución de problemas.
- La memoria de IA compartida almacena localmente conocimientos destilados (≤1.000 caracteres cada uno,
vinculados a un cliente/expediente, con caducidad automática); su contenido es visible para todos los canales
de IA y se transmite siempre que esos canales lo leen.
- La revisión por pares entre las IA de escritorio se realiza a través de IRONSTICK, no directamente
entre los proveedores: una IA deja un producto de trabajo (p. ej., un borrador) en un
**búfer de intercambio local y de corta duración** (archivos de texto plano en el equipo del usuario,
eliminados cuando se cierra la tarea y borrados por completo en cada reinicio de la aplicación) y una
nota de tarea; la otra IA lo lee cuando el usuario se lo indica. Esto no crea
**ningún nuevo destinatario externo** — lo que lee la IA revisora se transmite
a **su propio** proveedor exactamente igual que cualquier otro resultado de herramienta descrito anteriormente, en el marco de las condiciones de ese
proveedor. El contenido nunca pasa de un proveedor al otro.

### 4.10 Transcripción de audio (asignación de interlocutores)

El reconocimiento de voz se ejecuta completamente en local; la grabación en sí nunca
sale del ordenador. Si el usuario ha indicado más de un interlocutor, la IA asigna
después las líneas reconocidas a los interlocutores: por llamada (nivel medio) como
máximo 60 líneas de texto reconocido, más las últimas 12 líneas ya asignadas como
contexto y el número de interlocutores. Las llamadas pasan por el router — seudonimizadas,
sujetas a consentimiento y registradas en el registro de auditoría. La respuesta no puede
alterar el texto: cada línea se comprueba contra el texto reconocido; si falla un bloque,
la transcripción se adopta sin asignación de interlocutores. Con un solo interlocutor no
se produce ninguna llamada a la IA. Si están activados proveedores gratuitos para tareas en
segundo plano (sección 1), estas llamadas pueden realizarse a través de ellos.

## 5. El paquete de instrucciones de IA (ZIP de exportación)

![IRONSTICK Client, usuario con archivos MD y archivo ZIP, aplicación web de IA](https://www.ironstick.legal/img/67_instruction_zip.png)
La elaboración del paquete es local y no implica ninguna llamada de IA. Produce
**Markdown en texto claro** (sin seudonimización) destinado a que el
usuario lo cargue en un LLM externo de su elección. Contenido:

| Archivo | Contenido |
| --- | --- |
| Expedientes | todos los expedientes del cliente seleccionado con partes, estado e índice de ID de pruebas (sin textos completos) |
| Entidades | **todas las personas/entidades de todo el despacho** (no solo de este cliente), incl. CNP/CUI, fecha de nacimiento, datos de contacto completos, profesión, vehículo — más los bloques de análisis almacenados (valoración, vulnerabilidades, domicilios, finanzas, entorno social, fuentes) |
| Instituciones, plazos | todas las instituciones; plazos activos con números de expediente y nombre del cliente |
| Correo | los 100 correos electrónicos más recientes **de todo el despacho**: remitente, destinatario, asunto, nombres de archivos adjuntos, fragmento ≤500 caracteres (sin cuerpos completos) |
| Protocolo diario | últimos 10 días, de todo el despacho, incl. la cronología de expedientes de ese periodo |
| Por expediente | un dosier por expediente: la crónica completa **con los textos completos de los documentos** (presupuesto ~170 KB por archivo, después forma compacta), identificadores del cliente y de las partes, incl. CNP; más todas las notas de antecedentes del expediente sin límite |
| Archivos de instrucciones | cinco documentos de reglas de trabajo — sin datos personales |

**Qué ocurre cuando este ZIP se introduce en un LLM ajeno:**
el usuario transfiere personalmente, en texto claro, partes sustanciales de todo el
despacho — identidades de clientes con números de identificación nacionales, perfiles de terceros
incluidas valoraciones sensibles, metadatos de la correspondencia de todo el despacho y expedientes
— a ese proveedor. A partir de ese momento, los datos se tratan conforme a las condiciones
del proveedor ajeno (uso para entrenamiento, conservación, jurisdicción), completamente
fuera del control de IRONSTICK. IRONSTICK muestra una advertencia de privacidad antes de la
exportación (una vez por ejecución del programa) y ofrece la exportación también a Google Drive, lo que
deposita además los archivos en Google. El usuario actúa como responsable
transmisor en el sentido del RGPD y debe garantizar una base jurídica (p. ej., art. 6, normas de secreto
profesional) antes de la carga.
Los documentos marcados como secretos quedan excluidos de los plazos, los protocolos diarios y los dosieres
de expedientes.

## 6. Matriz resumen

| Flujo | Qué sale (forma) | Seudonimizado | Cuadro de diálogo de consentimiento propio | Registro de auditoría |
| --- | --- | --- | --- | --- |
| Registro de documentos (4 llamadas) | texto OCR/del documento ≤30k, listas de expedientes/nombres | sí | sí — una vez por ejecución del programa | sí |
| Clasificación de correo electrónico (pantalla) | remitente/asunto/fragmento ≤1,5k (sin lista de expedientes) | sí | sí — una vez por sesión | sí |
| Clasificación de correo electrónico (segundo plano) | ídem | sí | no (interruptor del monitor = consentimiento) | sí |
| Investigación de personas fase 1 | nombre real (búsqueda web) | no — por diseño | sí — una vez por sesión | sí (en claro) |
| Investigación de personas fases 2/3 | textos de páginas ≤8k / ≤6k por fuente | sí | mismo consentimiento | sí |
| Autocompletado de persona/institución | nombre introducido (búsqueda web) | no — por diseño | sí — una vez por sesión | sí (en claro) |
| Importación por IA del protocolo diario | texto sin procesar pegado ≤200k | sí | sí | sí |
| Monitor de datos | por cada nuevo documento: sus zonas de contacto + nombres de posibles coincidencias (sin datos de contacto/CNP de los datos maestros) | sí (nombres de instit. en claro) | no (segundo plano limitado) | sí |
| Procesador de textos: revisar / estructura | selección + 6k de contexto / líneas del doc. ≤40k | sí | no (botón = consentimiento) | no |
| Preprocesamiento de lectura en voz alta | cada frase, texto claro | no | no (inicio = consentimiento) | no |
| Revisión Red/Blue Team (API) | texto del borrador + fecha + jurisdicción, por ronda (máx. 2) | sí | no (interruptor = consentimiento) | sí |
| Resumen del diálogo (API) | turnos de diálogo anteriores (solo usuario/asistente) | sí | no (parte del consentimiento del chat) | sí |
| Corrección por IA de File→Markdown | texto convertido | sí | no | no |
| Buscador de IA de anonimización | texto ya anonimizado; las respuestas contienen nombres reales de terceros | desactivado — por diseño | interruptor = consentimiento | sí |
| Chat de IA (externo) | instrucción + contexto de la interfaz + memoria + 6k finales + resumen de 2k + resultados de herramientas ≤10k/elemento | sí | sí — una vez por sesión | sí |
| Bridge de IA de escritorio (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | resultados de herramientas sin procesar (datos completos del expediente) | no — por diseño | sí — una vez por ejecución del programa, bloqueo de 10 min en caso de rechazo | no (lado de la aplicación) |
| Transcripción de audio: asignación de interlocutores | texto reconocido, por llamada ≤60 líneas + 12 líneas de contexto — nunca la grabación | sí | sí | sí |
| Proveedores gratuitos para tareas en segundo plano (Groq, OpenRouter, Mistral) — solo si están activados | los mismos contenidos que la tarea en segundo plano correspondiente; nunca chat, escritos ni Red/Blue Team | según la tarea correspondiente | no (interruptor por proveedor = consentimiento) | sí |
| ZIP de instrucciones de IA | exportación del despacho en texto claro (carga iniciada por el usuario) | no | advertencia una vez por ejecución del programa | n/a |

## 7. Servicios externos no LLM (para mayor exhaustividad)

![IRONSTICK Client, internet, símbolo de ubicación y símbolo del tiempo](https://www.ironstick.legal/img/68_external_services.png)
Con independencia de cualquier LLM, las siguientes funciones contactan con servicios externos con
los datos mínimos necesarios: validación de números (EU VIES, EORI, GLEIF, registros
mercantiles — el número que se comprueba), geocodificación de direcciones (OpenStreetMap
Nominatim — la dirección), las consultas web directas de la búsqueda de personas (el nombre), IMAP (su servidor de correo) y
las exportaciones opcionales a Google Drive (los archivos exportados). Ninguno de ellos implica al
proveedor de IA.

Otros dos servicios reciben datos igualmente mínimos:

- **ipwho.is (consulta de geo-IP)** — una vez por inicio del programa, como parte de la
instantánea de seguridad local (sección 8), IRONSTICK solicita a este servicio la
dirección IP **pública** del equipo y una ubicación aproximada (ciudad, país, ISP).
La solicitud HTTPS saliente **no contiene ningún dato personal de ningún tipo** —
como cualquier servidor web, el servicio solo ve la dirección IP desde la que llega
la solicitud. La respuesta se almacena exclusivamente de forma local y no se transmite
a ninguna otra parte.
- **Open-Meteo (meteorología)** — a petición, la herramienta meteorológica de IA
(`get_weather`, sección 4.8) consulta datos meteorológicos actuales de un
lugar indicado. Solo se transmite el nombre del lugar / sus coordenadas — nunca
datos de expedientes, clientes ni personas.

Ninguno de estos servicios implica al proveedor de IA.

## 8. Almacenamiento local, integridad y control del usuario

![IRONSTICK Client con bloqueo de acceso TOTP; documentos, memoria temporal y base de datos cifrados con AES-256](https://www.ironstick.legal/img/69_local_encryption.png)
Con independencia de los canales de IA mencionados, lo siguiente se aplica a **todos** los
datos que conserva IRONSTICK:

- **Almacenamiento exclusivamente local.** La totalidad del conjunto de datos — base de datos, archivos
de documentos, medios, transcripciones, configuración — reside en un único directorio de datos en
una ruta que define el usuario. IRONSTICK no requiere ninguna cuenta en la nube ni opera ningún
servidor; el fabricante nunca conserva una copia de ningún dato del usuario. Cuando un despacho utiliza
el IRONSTICK SERVER opcional (sección 9), también ese servidor es un dispositivo propio del despacho
en la red propia del despacho — nada cambia en cuanto al acceso del fabricante.
- **Base de datos cifrada en reposo (AES-256).** La base de datos — el registro
de clientes, expedientes, crónica, correos electrónicos, plazos, texto de las transcripciones y la
memoria de las IA — se almacena cifrada con AES-256, cada página por separado y
con un sello de integridad por página. La clave la deriva la aplicación en
tiempo de ejecución y nunca se escribe en el disco ni en la configuración, de modo que un archivo de base de datos
obtenido del soporte o de un archivo de copia de seguridad no proporciona nada sin
IRONSTICK. Se trata de una medida técnica en el sentido del art. 32 RGPD que
se aplica sin configuración alguna por parte del usuario y no puede desactivarse.
- **Documentos cifrados en reposo (AES-256).** El almacén de documentos — los
PDF originales, escaneos, imágenes, archivos de audio y de transcripción — se cifra del
mismo modo, archivo por archivo, con un sello de integridad que detecta cualquier alteración.
La lectura se realiza a través de un único control de acceso que descifra el archivo solicitado
en una copia de trabajo temporal y elimina dichas copias cuando la
aplicación se cierra o se inicia. Las copias de seguridad y los paquetes de expedientes contienen los documentos
en su forma cifrada. Límites, expresados con claridad: las copias de trabajo de la
sesión actual están en texto claro en la carpeta temporal (en Android, dicha
carpeta se encuentra en el almacenamiento compartido); las exportaciones y el correo saliente están en texto claro
por diseño; y el cifrado protege frente a la lectura del soporte fuera de
IRONSTICK, no frente a un usuario autorizado de la aplicación.
- **Control de acceso al inicio (TOTP).** Una vez aceptada la clave de
licencia, la aplicación no muestra más que una solicitud de código hasta que el usuario
introduce el código de un solo uso basado en tiempo de seis dígitos vigente de una
aplicación de autenticación (RFC 6238). El secreto en que se basan los códigos se deriva de
la clave de licencia en tiempo de ejecución y nunca se escribe en el disco; solo se almacena una
huella no secreta de la configuración confirmada, para que el código QR vuelva a
mostrarse tras un cambio de clave. Los códigos erróneos repetidos provocan una espera
creciente. Los Bridges de IA de escritorio no reciben ningún dato de expedientes mientras la aplicación
está bloqueada. La recuperación se realiza mediante la clave de licencia, lo que convierte a la clave de licencia en la
credencial maestra de la instalación — su custodia es responsabilidad del
operador. El archivo de configuración (claves API, credenciales de correo electrónico,
acceso al servidor) se conserva cifrado con AES-256 mediante el mismo mecanismo que los
documentos y solo se descifra en memoria.
- **Ubicación de almacenamiento controlada por el usuario.** La ruta de datos se elige durante
la instalación y puede modificarse en cualquier momento — incluso a un soporte extraíble como
una unidad USB cifrada o un disco externo cifrado. La aplicación simplemente
sigue la ubicación configurada; el cifrado del soporte (p. ej., con el
cifrado de disco del sistema operativo) está en manos del usuario y se
recomienda para soportes portátiles. Una consecuencia que debe sopesarse deliberadamente: si el
directorio de datos elegido se encuentra dentro de una carpeta sincronizada con la nube (p. ej., Google
Drive), la totalidad del conjunto de datos, **incluido el archivo de configuración con la clave de acceso
de IA y las credenciales de correo electrónico**, se sincroniza con ese proveedor de nube
conforme a las condiciones propias del proveedor — ubicar allí el directorio de datos es
decisión y responsabilidad del usuario. Al cambiar la ubicación de almacenamiento en la configuración, IRONSTICK comprueba el destino y rechaza las unidades de red y las carpetas sincronizadas con la nube (OneDrive, Google Drive, Dropbox); la copia se realiza con comparación de sumas de verificación, el cambio solo se produce tras una verificación satisfactoria y la carpeta antigua se conserva con otro nombre.
- **Sincronización de dispositivos sin ninguna nube.** La sincronización
opcional Windows ↔ tableta Android se realiza a través de una conexión directa por cable
USB — no interviene ningún servicio de terceros, las transferencias se
verifican mediante suma de comprobación y se realiza una copia de seguridad obligatoria antes de sustituir la base de datos.
Los documentos marcados como secretos nunca se transfieren a la tableta en
absoluto.
- **Instantánea de seguridad al inicio (registro local de inicios de sesión).** En cada inicio
del programa, IRONSTICK registra en segundo plano una instantánea del equipo en el que
se ejecuta: nombre de host, sistema operativo, RAM/CPU, dirección IP local, navegador
predeterminado, herramientas de acceso remoto en ejecución que detecta y una puntuación de
seguridad derivada — más, una vez por inicio, la dirección IP pública y la ubicación aproximada
(ciudad, país, ISP) obtenidas del servicio de geo-IP ipwho.is (sección 7).
La instantánea se almacena **exclusivamente de forma local** en la base de datos y no se transmite a ninguna parte. La conservación se limita
automáticamente a un máximo de **6 meses** y a un máximo de **1.000
entradas** (mantenimiento diario), y el usuario puede consultar el registro en cualquier
momento en el configurador (tarjeta «Registro de inicios de sesión»).
- **Huellas de integridad en cada archivo registrado.** En el momento del
registro, cada archivo almacenado recibe una huella criptográfica de su contenido
(SHA-256 para documentos y medios; una huella MD5 heredada para los archivos de audio
de transcripción), anotada en la base de datos junto a la entrada. Por tanto, cualquier modificación posterior de un
archivo almacenado es **detectable** comparando el archivo con su
huella registrada, y las exportaciones de e-discovery (EDRM) incluyen estas huellas
para que los destinatarios puedan verificar los archivos de forma independiente. Esto hace evidente
la manipulación; como cualquier mecanismo de huellas, no impide físicamente las modificaciones
de los archivos en el disco — las hace demostrables.
- **Copias de seguridad a discreción del usuario.** Una función de copia de seguridad integrada escribe
una copia completa de los datos (copia de seguridad completa o solo de datos) como un único archivo
ZIP en cualquier destino que el usuario seleccione, y restaura a partir de dicho archivo
cuando se solicita. La frecuencia con que se realizan las copias de seguridad, dónde se guardan, cuánto tiempo se
conservan y si los archivos se cifran adicionalmente es decisión exclusiva del
usuario (la base de datos y los archivos de documentos contenidos en cada archivo están cifrados con AES-256
en todo caso) —
IRONSTICK no impone ningún calendario y no transmite las copias de seguridad a ninguna parte.
- **Los documentos generados pertenecen al usuario.** El usuario puede generar
documentos en cualquier momento — escritos, cartas, dosieres, listas, exportaciones — y
descargarlos: se escriben en la carpeta local Documentos o, cuando el
usuario ha ubicado el directorio de datos en una carpeta de Google Drive o selecciona expresamente
Google Drive como destino, en la propia cuenta de Google Drive del usuario.
**La función de IRONSTICK termina con la generación del archivo.** Lo que ocurra con un
documento generado a continuación — impresión, presentación ante un tribunal, envío por correo electrónico,
carga en cualquier servicio, comunicación a terceros — lo realiza el usuario y
es responsabilidad exclusiva del usuario.

**Atribución de responsabilidades.** Dado que IRONSTICK almacena
todo localmente y transmite datos únicamente por las vías documentadas en las secciones
1–7 — cada una de ellas seudonimizada, sujeta a consentimiento o desencadenada por una
acción deliberada del usuario —, el operador del despacho es el único responsable
del tratamiento: elige el soporte de almacenamiento y su cifrado, gestiona y
conserva las copias de seguridad, decide qué funciones de IA están activadas, otorga o deniega cada
consentimiento y decide por sí solo qué se hace con cada documento, exportación o copia de seguridad
que produce el software. El contenido generado por IA — borradores, resúmenes, valoraciones,
clasificaciones — es siempre una **propuesta** que el usuario debe revisar profesionalmente
antes de basarse en ella o de remitirla. El presente documento existe para que cada
una de esas decisiones pueda adoptarse con pleno conocimiento de los flujos de datos
reales.
## 9. El servidor LAN del despacho opcional (IRONSTICK SERVER)

![IRONSTICK Server e IRONSTICK Client conectados por LAN; el servidor no tiene conexión a internet](https://www.ironstick.legal/img/70_server_lan.png)
Los despachos con varios puestos de trabajo IRONSTICK pueden operar el
**IRONSTICK SERVER** opcional — un servicio de coordinación que se ejecuta en el propio
NAS Synology del despacho, dentro de la red local propia del despacho. A efectos de la presente
declaración, los hechos determinantes son:

- **No interviene ninguna parte externa.** El servidor es un dispositivo propio
del despacho. Solo acepta conexiones desde direcciones de red privadas (locales)
y **nunca inicia ninguna conexión con internet** — sin telemetría, sin
comprobaciones de actualizaciones, sin contacto con el fabricante. El fabricante del software no tiene acceso de ningún
tipo.
- **Sin intervención de IA.** El servidor no transporta tráfico de IA, no almacena ninguna clave
de IA y nunca se comunica con ningún proveedor de modelos de lenguaje. Todos los canales de IA
descritos en las secciones 1–6 permanecen estrictamente vinculados a cada puesto de trabajo; la
capa de seudonimización, los controles de consentimiento y el registro de auditoría no se ven afectados
por la presencia del servidor.
- **Qué almacena el servidor** — todo ello en el NAS, bajo el control
del despacho: (a) **paquetes de expedientes compartidos** — solo los expedientes que un usuario ha
liberado expresamente para sus compañeros; los documentos marcados como secretos quedan excluidos por diseño y
nunca llegan al servidor; (b) la **biblioteca jurídica central** — textos legales
públicos en Markdown, cada uno con el nombre del usuario que lo aportó, el enlace a la fuente
y la fecha de revisión; (c) **registros de control horario** — por usuario, día y
expediente: número de expediente, nombre del cliente y minutos, comunicados por cada puesto de trabajo en
segundo plano; (d) **totales de presencia** por usuario y día, derivados de
las señales de actividad de la sesión; (e) **metadatos de eventos de expedientes** — comparticiones, revocaciones,
inicios/finalizaciones de suscripciones y exportaciones, cada uno con fecha, hora y dirección
IP de la LAN; (f) un **registro de seguridad** con eventos administrativos y de inicio de sesión,
incluidas las direcciones IP de la LAN; (g) **paquetes de traspaso de expedientes** — cuando un usuario
transfiere la titularidad de un expediente a un compañero, el expediente completo viaja como un único
archivo a través de una zona de estacionamiento del servidor («spool»); el paquete se elimina del
servidor después de que el destinatario haya confirmado la importación, y los documentos
marcados como secretos solo viajan tras una confirmación adicional expresa del titular
(en caso contrario, se interrumpe la transferencia); (h) la **recepción central de
escaneos** (Central Scan App opcional): un registro de los
**números de expediente y del nombre visible** de cada usuario (comunicados por los puestos de trabajo como
material de correspondencia — nunca contenidos de expedientes) y una **cola de documentos**
por archivo que conserva el correo entrante escaneado dirigido a un usuario hasta que el
puesto de trabajo de ese usuario lo ha recuperado y confirmado, tras lo cual se elimina la copia del
servidor; el reconocimiento de texto y la asignación del destinatario se realizan localmente en
el puesto de escaneo, sin ninguna IA; (i) **registros de eventos de copia de seguridad** —
cada puesto de trabajo comunica sus eventos de copia de seguridad y restauración de datos (tipo, nombre de
archivo, tamaño, hora, IP de la LAN), de modo que el administrador puede ver por usuario cuándo se realizó la
última copia de seguridad y recordárselo a los usuarios que se retrasen; (j) el **directorio de partes
de todo el despacho** («red de entidades») — los registros maestros de
**personas y empresas, instituciones, las relaciones entre ellas y los
análisis de personas** que llevan los puestos de trabajo, junto con la cola de
propuestas de cambio intercambiadas entre usuarios; (k) las **valoraciones de resoluciones judiciales** — por puesto de trabajo y resolución: tribunal, órgano juzgador y composición, los nombres de los jueces y letrados, número de resolución, fecha, número de procedimiento, los números internos de caso y de cliente del puesto que valora, las proporciones de texto medidas y el análisis en inglés de la resolución y de los escritos de ambas partes redactado por la IA. Véanse los puntos siguientes.
- **El directorio de partes de todo el despacho.** En cuanto un puesto de trabajo se
conecta al servidor, sus datos maestros de partes (quién es quién: nombres,
identificadores, datos de contacto, relaciones, análisis de personas) se **cargan
automáticamente** y se replican en todos los demás puestos de trabajo del mismo despacho,
de modo que cada abogado ve con quién está tratando ya el despacho y el despacho
obtiene una visión de conflictos de intereses de todo el despacho. Cada registro tiene exactamente un
titular — el usuario que lo introdujo primero; todos los demás usuarios tienen una copia
de solo lectura y únicamente pueden enviar una **propuesta de cambio**, que el titular acepta o
rechaza en el monitor de datos. Si no es posible contactar con el titular durante 48 horas,
la titularidad pasa al usuario que formuló la propuesta. **Los contenidos de los expedientes no forman parte de
este directorio** — los documentos, la cronología, la correspondencia y las asignaciones de
expedientes siguen rigiéndose por las acciones expresas de compartición y traspaso
aquí descritas. El intercambio permanece dentro del despacho (un único responsable), nunca
sale de la red local y no implica **a ningún proveedor de IA**: la detección de duplicados
y la comparación de campos se ejecutan como lógica de programa ordinaria en el puesto de trabajo
emisor; el servidor solo almacena y reenvía. Los despachos deberían mencionar esta
compartición interna de datos de partes y de análisis de personas en su registro de
actividades de tratamiento.
- **Las valoraciones de resoluciones judiciales.** Una valoración solo se guarda por orden expresa del usuario; después, al igual que el directorio de partes, se **sube automáticamente** y se replica en cada puesto de trabajo del despacho. Cada puesto lleva su propia valoración por resolución, que solo él puede modificar. El análisis describe el contenido de una resolución y de los escritos correspondientes — en esa medida contiene **contenido del caso** — y nombra a jueces y letrados. No interviene ningún proveedor de IA; el intercambio permanece en la red local del despacho. Los despachos deberían recoger también esta comunicación en su registro de actividades de tratamiento.
- **Solo acciones deliberadas — para el contenido de los expedientes.** El contenido de los expedientes llega
al servidor exclusivamente mediante una acción expresa de compartición o de traspaso
confirmada por el usuario; los textos de la biblioteca jurídica solo después de que el usuario acepte la
entrada en el monitor de datos; el correo entrante escaneado solo después de que el empleado administrativo
haya revisado el documento y haya pulsado enviar a un destinatario elegido. El directorio de partes y las valoraciones guardadas de resoluciones judiciales son las excepciones deliberadas: se sincronizan en segundo plano sin confirmación por registro. Los registros de tiempo, presencia, eventos y
copias de seguridad son metadatos operativos generados por el propio funcionamiento multiusuario
y son visibles para el administrador del despacho en la administración web.
- **Responsabilidad del tratamiento.** El despacho que opera el servidor sigue siendo el único
responsable del tratamiento. El administrador controla la aprobación de registros, puede poner fin a
suscripciones, eliminar entradas de la biblioteca jurídica y desinstalar el paquete —
lo que deja el directorio de datos del servidor bajo el control del administrador en
el NAS.
- **Nombres completos de clientes en los registros de tiempo.** La vista general del control horario
muestra el tiempo de trabajo por expediente y por cliente, lo que significa que los nombres de los clientes se
almacenan en el NAS. Esto permanece dentro de la infraestructura propia del despacho y de su
régimen de confidencialidad existente — pero los despachos deberían incluir el NAS en su
inventario de medidas técnicas y organizativas (control de acceso en DSM,
cifrado del volumen, política de copias de seguridad), exactamente igual que lo harían con cualquier servidor
de archivos de oficina.

## Anexo — Cláusula modelo para su aviso de privacidad para clientes (propuesta)

El siguiente texto es una propuesta de redacción que un despacho que utilice IRONSTICK
puede copiar en su propio aviso de privacidad para clientes. Está redactado para ajustarse con exactitud a los
flujos de datos descritos anteriormente — no promete más protección de la que el software
proporciona realmente. Evita deliberadamente las citas de artículos legales para que
pueda insertarse en avisos de cualquier estructura.

**Antes de insertarla — lista de comprobación para el abogado:**
1. Disponga del contrato de encargo del tratamiento de **cada** proveedor de IA que haya
configurado, mencione en la cláusula únicamente los proveedores que realmente utiliza y
contraste la frase sobre entrenamiento y conservación con las condiciones que realmente
ha firmado. Los proveedores gratuitos para tareas en segundo plano (Groq, OpenRouter, Mistral,
sección 1) solo los cubre la cláusula mediante la frase opcional entre corchetes que figura en
ella — actívelos solo si sus condiciones satisfacen los requisitos de sus normas profesionales,
y elimine la frase si no los utiliza.
2. Mantenga la frase entre corchetes sobre el espacio de trabajo de IA solo si realmente utiliza
el Bridge de IA de escritorio (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop
o Kimi Desktop); en caso contrario, elimínela.
3. Esta cláusula cubre los flujos dentro de la aplicación descritos en el presente documento. **No**
cubre el paquete de instrucciones de IA (sección 5) — cargar esa exportación
en cualquier servicio de IA es una decisión independiente y normalmente requerirá el consentimiento
expreso del cliente.
4. Si ha desactivado funciones de IA concretas en el configurador, acorte
en consecuencia la lista de finalidades — describa exactamente lo que utiliza, nada más.
5. Se trata de una propuesta de redacción, no de asesoramiento jurídico. Hágala revisar conforme a
las normas deontológicas de su colegio de abogados y a la práctica local en materia de protección de datos antes de utilizarla.

### Español

**Tramitación de expedientes asistida por IA.** Nuestro despacho utiliza
el software de gestión IRONSTICK, que incluye funciones asistidas por
inteligencia artificial. Para estas funciones, determinados datos de su
expediente pueden transmitirse a un proveedor externo de servicios de IA
(según disponibilidad: Alibaba Cloud, Moonshot AI, OpenAI o Anthropic, a través de sus interfaces de programación), que los trata
por cuenta nuestra sobre la base de un contrato de encargo de tratamiento.
Utilizamos estas funciones para: la clasificación y el registro de documentos
entrantes, la priorización del correo electrónico entrante, la comprobación de
la coherencia de nuestros datos, la redacción y revisión de documentos
jurídicos, así como para el análisis y la investigación jurídica. [Opcional — eliminar si no se
utiliza: para las tareas que se ejecutan en segundo plano, como la priorización del correo
electrónico entrante, la comprobación de nuestros datos y los resúmenes, pueden utilizarse
además los servicios gratuitos de Groq, OpenRouter o Mistral; hemos revisado sus condiciones
antes de activarlos.]

**Medidas de protección.** Antes de cada transmisión, el software
sustituye en nuestro propio ordenador los identificadores directos almacenados
en el sistema — nombres, números de identificación personal, números de
teléfono, direcciones de correo electrónico, direcciones postales, números de
expediente y datos bancarios — por marcadores neutros. La tabla de
correspondencia entre marcadores y datos reales nunca sale del despacho; las
respuestas del proveedor se retraducen localmente. Solo se transmite lo
necesario para la función concreta, con límites de volumen fijos. Algunas
funciones requieren técnicamente datos reales — por ejemplo, la búsqueda
pública en Internet sobre el nombre de una persona o la función de lectura en
voz alta; las utilizamos únicamente mediante una acción individual deliberada.
[Opcional — suprimir si no se utiliza: Para la redacción de escritos procesales
utilizamos además un espacio de trabajo de IA en el que los datos del
expediente se tratan sin sustitución por marcadores; este canal se emplea
exclusivamente bajo nuestra supervisión directa.]

**El proveedor.** Según las condiciones del proveedor que nos son
aplicables, los contenidos transmitidos a través de la interfaz de programación
no se utilizan para entrenar modelos de IA y solo se conservan durante un
periodo limitado. El tratamiento puede tener lugar fuera del Espacio Económico
Europeo; en tal caso, la transferencia está protegida por las garantías
acordadas en nuestro contrato de encargo. Lo que el proveedor puede hacer con
los datos lo rige dicho contrato, no el criterio de la IA.

**Su elección.** Nuestro secreto profesional permanece intacto: más allá
de lo aquí descrito, ningún dato sale del despacho. El tratamiento se basa en
el mandato que nos ha conferido y en nuestro interés legítimo en una gestión
eficiente y rigurosa de su expediente. Puede oponerse en cualquier momento al
uso de las funciones asistidas por IA; en la medida de lo posible, tramitaremos
entonces su expediente sin ellas. Conserva además todos sus derechos en materia
de protección de datos: acceso, rectificación, supresión y reclamación ante la
autoridad de control.

La presente declaración se ha derivado del código fuente de la aplicación
(seudonimizador, router externo, registro de auditoría y la vía de transmisión de cada
función) y refleja el comportamiento entregado de la versión descrita. El tratamiento por parte
del propio proveedor de IA — conservación, uso para entrenamiento, subencargados, jurisdicción —
se rige exclusivamente por las condiciones del proveedor — los enlaces a las condiciones y a la
política de privacidad de cada proveedor figuran en la sección correspondiente de la configuración
de IA (Groq: groq.com/terms-of-use; OpenRouter: openrouter.ai/terms; Mistral: legal.mistral.ai/terms/commercial-terms-of-service; Alibaba Cloud:
alibabacloud.com/help/en/legal; Moonshot AI: platform.kimi.ai/docs/agreement;
OpenAI: openai.com/policies). Para los servicios de Anthropic, consulte, en
sus versiones vigentes: los Commercial Terms of Service
([anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms)),
la Usage Policy
([anthropic.com/legal/aup](https://www.anthropic.com/legal/aup)) y
la Privacy Policy
([anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy)).

##### Contacto

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Escanee el código para guardar nuestra tarjeta de contacto — teléfono, e-mail y sitio web.

Contacte directamente por WhatsApp o Telegram — también es bienvenida una llamada. Idiomas hablados: alemán, inglés, rumano.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Mensaje

### ¿Le interesa IRONSTICK o una demostración? Escríbanos.
