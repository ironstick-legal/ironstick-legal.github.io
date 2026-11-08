# Download & Licences

> Download IRONSTICK: Client-App, Bridges, Server and Central Scan-App — with installation order, licensing rules and an order template. Licence keys on request, and a free one-month trial of the Client-App.

Original page: https://www.ironstick.legal/download.html

---

Download the software directly, request your licence key from us.

## Client App

### Windows workstation

The Client App and the bridges run on the same Windows machine under **a single IRONSTICK license key** — the bridges need no key of their own. In addition, an AI is connected (see AI connection).

### IRONSTICK Client-App

The main application for the workstation: cases, clients, deadlines, documents, evidence work and the AI chat — all local on your Windows machine.

### Bridges (MCP-Server)

Connectors that securely link external AI desktops to your Client-App through the MCP-Server — the AI works directly on the case file. Each Bridge requires a Client-App licence.

#### Claude Desktop

Connector for the Claude Desktop app.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-bridge-claude-setup-2.16.15.exe)
#### ChatGPT Desktop

Connector for the ChatGPT Desktop app.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-bridge-chatgpt-setup-2.16.15.exe)
#### Qwen

Connector for the Qwen desktop.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-bridge-qwen-setup-2.16.15.exe)
#### Kimi

Connector for the Kimi desktop.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-bridge-kimi-setup-2.16.15.exe)

## AI connection

![The Windows workstation with one IRONSTICK license for the client and the MCP server, plus, externally, either an AI API key or an AI desktop app with a subscription.](https://www.ironstick.legal/img/dl_client.png)

With an **AI API key**, all AI functions of the Client App are available. The amounts to activate API keys differ between providers, but range from a $1 to $5 minimum top-up for the initial activation. We recommend using at least **two API keys** to improve failover reliability. Billing is usage-based anyway, so unused API keys incur no cost. The Client App is designed to avoid costs where possible and to bring in the API keys only when needed. After signing in, the user has access via the configuration screen and can request the API keys there directly from the providers (direct links are included).

The **AI desktop apps** can also be used for testing without a subscription. Monthly subscription costs at the providers start at about $20 per month. If you find that your subscription with one provider is not enough, the providers offer add-ons. If a subscription already exists, it can simply be kept with the existing configuration — the user does not have to change anything. There are two ways to use existing AI desktop apps: a) by exporting AI instruction files (highly lossy) or b) via the bridge (MCP server). Once the user has grown accustomed to their AI desktop app, we recommend installing a second desktop app from a different provider for failover reliability. The download links are available directly in the configuration screen.

## Server and scan workstation

![The IRONSTICK Server consists of a Synology NAS (your hardware) and the IRONSTICK Server license.](https://www.ironstick.legal/img/dl_server.png)
The IRONSTICK Server is a pre-packaged SPK file that installs on your Synology NAS with 3 mouse clicks. All you need is a Synology NAS; the affordable models start at around €180. Here too: no installation effort. Plug it in and let it run.

### IRONSTICK Server

Runs on an ordinary Synology NAS and shares cases, documents and deadlines across several workstations — central, encrypted storage with self-healing and backups. Available from at least two Client-App licences.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-server-synology-1.0.0.spk)
### Central Scan-App

The capture workstation at the scanner: scan mail and documents centrally, assign them to cases and feed them in automatically. Requires a Server.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-centralscan-setup-1.0.3.exe)

## Installation order

1. Install the first **Client-App** and activate it with the licence key.
2. Install the **Bridge(s)** on the same machine.
3. Install the **Server** on the NAS (Synology).
4. Install the **Scan-App** at the scanning workstation.
5. Install and activate the **further Client-Apps**.

## Licensing rules

- Each licence is issued to **exactly one user** (one person).
- A **Server licence** is not available without at least **two Client-App licences**.
- A **Scan-App licence** is not available without at least **one Server licence**.
- A **Bridge licence** is not available without a **Client-App licence**.

## Order a licence

Copy the template below, fill in the fields and send it together with a **PDF copy of your ID** (passport, identity card or Buletin) via the [contact channels shown below](#contact) (WhatsApp / Telegram).

```
Subject: Licence key order – [First name] [Last name]

I hereby order licence keys for IRONSTICK:

Law firm / practice / company (if any): [……]
CUI / USt-IdNr. (if a company): [……]
Salutation / title: [……]
First name: [……]
Last name: [……]
Street and no.: [……]
Postal code / city: [……]
District / county: [……]
Country: [……]
Phone: [……]
Mobile: [……]
WhatsApp: [ ] yes
E-mail for the key(s): [……]
Correspondence language (DE / EN / FR / IT / ES / RO): [……]
Date of birth (YYYY-MM-DD): [……]
CNP (if applicable): [……]

Requested licence(s):
[ ] IRONSTICK Client-App   (base licence)
[ ] Bridge(s)              (unlocked in the Client-App key)
[ ] IRONSTICK Server       (only with at least 2 Client-App licences)
[ ] Central Scan-App       (only with at least 1 Server licence)

There is exactly one licence per user (the person named above).

As a PDF I am attaching:
• a copy of my ID (passport / identity card / Buletin)

Please send me the licence keys in return. For any questions you can
reach me via the contact channels named below (WhatsApp / Telegram).

Kind regards
[First name] [Last name]
```

The ID is required because every licence key is issued permanently to one person.
## Where the licence key is entered

### Client-App

The key is entered at program start in the licence window (and can be changed later in the configuration). It also unlocks the **Bridges** — these need no key of their own.

### IRONSTICK Server

The Server key is stored during the server setup.

### Central Scan-App

The key is entered in the licence window when the Scan-App starts.

## Try it for free

For the **Client-App** there is, on request, a **free one-month licence key** so you can get to know the product at your leisure. There is no trial period for the **Server** and **Scan-App**.

## License renewal

What happens when the license expires? About **10 days before** your license expires, the Client App warns you (if you are running the IRONSTICK Server, you see a license overview of all connected clients). You can then simply order the required license keys by e-mail or WhatsApp. Your request is verified against the existing data and payment is awaited. As soon as payment has been received, you receive the new license key by e-mail / WhatsApp. It is a string of characters that you simply copy into your Client App (copy & paste). Done.

##### Get in touch

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scan the code to save our contact card — phone, e-mail and website.

Feel free to contact directly via WhatsApp or Telegram — calls are welcome too. Spoken languages: German, English, Romanian.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Message

### Interested in IRONSTICK or a demo? Write to us.

### Download the IRONSTICK Client App

Download **ironstick-setup-1.0.6.exe** and run it. The setup downloads the remaining installation files (about 6.7 GB) by itself and shows the progress — an internet connection is required during installation.

ironstick-setup-1.0.6.exe **← run this one**2,8 MB[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.6/ironstick-setup-1.0.6.exe)
