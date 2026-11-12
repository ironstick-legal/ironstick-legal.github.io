# Descarga & Licencias

> Descargar IRONSTICK: Client-App, Bridges, Server y Central Scan-App — con orden de instalación, reglas de licencia y plantilla de pedido. Clave de licencia a petición, prueba de 30 días de la App cliente.

Página original: https://www.ironstick.legal/download_es.html

---

Descargue el software directamente y solicítenos la clave de licencia.

## App cliente

### Puesto de trabajo Windows

La App cliente y los Bridges se ejecutan en el mismo puesto de trabajo Windows con **una única clave de licencia IRONSTICK**. Cada Bridge se licencia por separado y se desbloquea en su clave de licencia de la App cliente, por lo que no existe una clave de Bridge aparte, y funciona mientras esa clave sea válida. Además se conecta un proveedor de IA.

### IRONSTICK App cliente

La aplicación principal para el puesto de trabajo: casos, clientes, plazos, documentos, trabajo probatorio y el [chat con IA](https://www.ironstick.legal/ki_es.html) — todo almacenado en local en su puesto de trabajo Windows.

### Bridges (servidores MCP)

Conectores que enlazan las aplicaciones de escritorio de IA con su App cliente a través de un servidor MCP local, de modo que la IA pueda [trabajar directamente sobre el expediente](https://www.ironstick.legal/ki_es.html). Cada Bridge requiere una licencia de la App cliente.

#### Claude Desktop

Conector para la app Claude Desktop.

[Descargar](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-claude-setup-2.16.15.exe)

#### ChatGPT Desktop

Conector para la app ChatGPT Desktop.

[Descargar](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-chatgpt-setup-2.16.15.exe)

#### Qwen

Conector para la app de escritorio Qwen.

[Descargar](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-qwen-setup-2.16.15.exe)

#### Kimi

Conector para la app de escritorio Kimi.

[Descargar](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-kimi-setup-2.16.15.exe)

## Conexión de la IA

![Puesto de trabajo Windows con una licencia IRONSTICK que cubre la App cliente y el servidor MCP, conectado a una clave de API de IA o a una aplicación de escritorio de IA con suscripción.](https://www.ironstick.legal/img/dl_client.png)

Con una **clave de API de IA** están disponibles todas las funciones de IA de la App cliente. Se recomienda una recarga de al menos 20 dólares/euros por proveedor. La facturación es según el uso, por lo que una clave sin utilizar no cuesta nada. La App cliente está diseñada para evitar costes y solo llama a una API de pago cuando una tarea lo requiere. Las claves de API se introducen en la [pantalla de configuración](https://www.ironstick.legal/manualquickstart_es.html#q3), que enlaza directamente con las páginas de claves y de facturación de cada proveedor.

Las **aplicaciones de escritorio de IA** también pueden probarse sin suscripción. Una suscripción es la tarifa mensual fija del proveedor, y los proveedores ofrecen ampliaciones para disponer de más capacidad. Una suscripción existente puede usarse tal cual, sin cambiar su configuración. Las aplicaciones de escritorio se conectan de dos maneras: a través del [Bridge (servidor MCP)](https://www.ironstick.legal/manualbridge_es.html) o exportando archivos de instrucciones de IA. Los enlaces de descarga están en la [pantalla de configuración](https://www.ironstick.legal/manualironstick_es.html#s2).

## Servidor y puesto de escaneo

![IRONSTICK SERVER: su NAS Synology más una licencia de IRONSTICK SERVER.](https://www.ironstick.legal/img/dl_server.png)

IRONSTICK SERVER, el servidor de despacho, se suministra como un paquete Synology (SPK) listo para usar y se instala en su NAS en tres clics. Todo lo que necesita es un NAS Synology corriente, por ejemplo un DS223j desde unos 180 €. Una vez instalado, funciona en segundo plano; la administración se realiza en un navegador.

### IRONSTICK SERVER

Funciona en un NAS Synology estándar y enlaza varios puestos de trabajo: casos compartidos, una biblioteca de leyes común a todo el despacho y recepción central de escaneos en su propio NAS. Se reconstruye a sí mismo a partir de los puestos de trabajo y muestra la última copia de seguridad de cada usuario. El servidor funciona íntegramente dentro de la red de su despacho, sin nube alguna y sin tráfico de IA. Disponible a partir de dos licencias de la App cliente.

[Descargar](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-server-synology-1.0.0.spk)

### Central Scan App

El puesto de captura junto al escáner: el correo entrante y los documentos se escanean de forma centralizada, se asignan a los casos y se incorporan automáticamente. Requiere IRONSTICK SERVER.

[Descargar](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-centralscan-setup-1.0.3.exe)

## Orden de instalación

1. [Instale](https://www.ironstick.legal/manualquickstart_es.html#q1) la primera **App cliente** y [actívela con su clave de licencia](https://www.ironstick.legal/manualquickstart_es.html#q2).
2. Instale el/los [**Bridge(s)**](https://www.ironstick.legal/manualbridge_es.html) en el mismo puesto de trabajo.
3. Instale **IRONSTICK SERVER** en el NAS Synology.
4. Instale la **Central Scan App** en el puesto de escaneo.
5. Instale y active las **demás App cliente**.

## Reglas de licencia

- Cada licencia se emite a **un usuario nominal** (una persona).
- Una **licencia de IRONSTICK SERVER** requiere al menos **dos licencias de la App cliente**.
- Una **licencia de Central Scan App** requiere al menos **una licencia de IRONSTICK SERVER**.
- Una **licencia de Bridge** requiere una **licencia de la App cliente**; se desbloquea en la clave de la App cliente.

## Pedir una licencia

Copie la plantilla, rellene los campos y envíela, junto con una **copia en PDF de su pasaporte o documento nacional de identidad**, por uno de nuestros [canales de contacto](#contact) (WhatsApp / Telegram).

```
Asunto: Pedido de clave(s) de licencia – [Nombre] [Apellido]

Por la presente pido clave(s) de licencia para IRONSTICK:

Despacho / consulta / empresa (si procede): [……]
NIF-IVA / n.º de registro mercantil (si procede): [……]
Tratamiento / título: [……]
Nombre: [……]
Apellido: [……]
Calle y número: [……]
Código postal / localidad: [……]
Región / provincia: [……]
País: [……]
Teléfono: [……]
Móvil: [……]
WhatsApp: [ ] sí
Correo electrónico para la(s) clave(s): [……]
Idioma de correspondencia (EN / DE / FR / IT / ES / RO): [……]
Fecha de nacimiento (AAAA-MM-DD): [……]
Número nacional de identificación (si procede): [……]

Licencia(s) deseada(s):
[ ] IRONSTICK App cliente   (licencia base)
[ ] Bridge(s)              (desbloqueados en la clave de la App cliente)
[ ] IRONSTICK SERVER       (requiere al menos 2 licencias de la App cliente)
[ ] Central Scan App       (requiere al menos 1 licencia de IRONSTICK SERVER)

Cada licencia se emite a un usuario nominal (la persona indicada arriba).

Como PDF adjunto:
• una copia de mi pasaporte o documento nacional de identidad

Les ruego que me envíen las claves de licencia. Para cualquier consulta, pueden
contactarme por teléfono o por correo electrónico, según figura en este pedido.

Atentamente
[Nombre] [Apellido]
```

Cada clave de licencia está vinculada de forma permanente a una persona nominal, por lo que verificamos la identidad del titular antes de emitirla. **Le rogamos que nos envíe también una imagen/PDF de su documento de identidad/pasaporte.**

## Introducir la clave de licencia

### App cliente

Introduzca la clave en la ventana de licencia al iniciar la App cliente; puede cambiarla más tarde en la [configuración](https://www.ironstick.legal/manualquickstart_es.html#q2). La misma clave activa sus **Bridges** con licencia; no existe una clave de Bridge aparte.

### IRONSTICK SERVER

La clave de IRONSTICK SERVER se introduce durante la configuración del servidor.

### Central Scan App

Introduzca la clave en la ventana de licencia al iniciar la Central Scan App.

## Prueba gratuita

Para la **App cliente** recibirá, a petición, una **licencia de prueba gratuita de 30 días**, para que pueda evaluar el producto con calma. Tome, por ejemplo, un caso antiguo, regístrelo paso a paso en IRONSTICK y observe la diferencia entre sus propias entradas y valoraciones y las de IRONSTICK. Así obtendrá directamente una comparación.

## Renovación de la licencia

Aproximadamente **10 días antes** de que caduque una licencia, la App cliente muestra un aviso; con IRONSTICK SERVER, la página de administración muestra además un resumen de la licencia de la App cliente de cada usuario. Pida la renovación por correo electrónico o WhatsApp. Una vez comprobado su pedido con los datos de cliente y recibido el pago, recibirá la nueva clave de licencia por correo electrónico o WhatsApp y la pegará en la App cliente.
