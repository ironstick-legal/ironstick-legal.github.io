# Download & Licences

> Download IRONSTICK: Client-App, Bridges, Server and Central Scan-App — with installation order, licensing rules and an order template. Licence keys on request, and a free 30-day trial of the Client App.

Original page: https://www.ironstick.legal/download.html

---

Download the software directly, request your licence key from us.

## Client App

### Windows workstation

The Client App and the Bridges run on the same Windows workstation under **a single IRONSTICK licence key**. Each Bridge is licensed separately and unlocked in your Client App licence key, so no separate Bridge key is needed. An AI provider is connected in addition.

### IRONSTICK Client App

The main application for the workstation: cases, clients, deadlines, documents, evidence work and the [AI chat](https://www.ironstick.legal/ki.html) — all stored locally on your Windows workstation.

### Bridges (MCP servers)

Connectors that link AI desktop apps to your Client App through a local MCP server, so the AI can [work directly on the case file](https://www.ironstick.legal/ki.html). Each Bridge requires a Client App licence.

#### Claude Desktop

Connector for the Claude Desktop app.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-claude-setup-2.16.15.exe)

#### ChatGPT Desktop

Connector for the ChatGPT Desktop app.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-chatgpt-setup-2.16.15.exe)

#### Qwen

Connector for the Qwen desktop app.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-qwen-setup-2.16.15.exe)

#### Kimi

Connector for the Kimi desktop app.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-kimi-setup-2.16.15.exe)

## AI connection

![Windows workstation with one IRONSTICK licence covering the Client App and the MCP server, connected to either an AI API key or a subscribed AI desktop app.](https://www.ironstick.legal/img/dl_client.png)

With an **AI API key**, all AI functions of the Client App are available. A top-up of at least 20 dollars/euros per provider is recommended. Billing is usage-based, so an unused key costs nothing. The Client App is designed to avoid costs and calls a paid API only when a task requires it. API keys are entered on the [configuration screen](https://www.ironstick.legal/manualquickstart.html#q3), which links directly to each provider's key and billing pages.

The **AI desktop apps** can also be tried without a subscription. A subscription is the provider's flat monthly fee, and providers offer add-ons for extra capacity. An existing subscription can be used as it is, without changing its configuration. Desktop apps connect in two ways: through the [Bridge (MCP server)](https://www.ironstick.legal/manualbridge.html), or by exporting AI instruction files. The download links are on the [configuration screen](https://www.ironstick.legal/manualironstick.html#s2).

## Server and scan workstation

![IRONSTICK SERVER: your Synology NAS plus an IRONSTICK SERVER licence.](https://www.ironstick.legal/img/dl_server.png)

IRONSTICK SERVER, the office server, is supplied as a ready-made Synology package (SPK) and installs on your NAS in three clicks. All you need is an ordinary Synology NAS, e.g. a DS223j from around €180. Once installed, it runs in the background; administration takes place in a browser.

### IRONSTICK SERVER

Runs on a standard Synology NAS and links several workstations: shared cases, a firm-wide statute library and central scan intake on your own NAS. It rebuilds itself from the workstations and shows every user's last backup. The server works entirely inside your firm's network, without any cloud and without AI traffic. Available from two Client App licences.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-server-synology-1.0.0.spk)

### Central Scan App

The capture workstation at the scanner: incoming post and documents are scanned centrally, assigned to cases and fed in automatically. Requires IRONSTICK SERVER.

[Download](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-centralscan-setup-1.0.3.exe)

## Installation order

1. [Install](https://www.ironstick.legal/manualquickstart.html#q1) the first **Client App** and [activate it with your licence key](https://www.ironstick.legal/manualquickstart.html#q2).
2. Install the [**Bridge(s)**](https://www.ironstick.legal/manualbridge.html) on the same workstation.
3. Install **IRONSTICK SERVER** on the Synology NAS.
4. Install the **Central Scan App** on the scanning workstation.
5. Install and activate the **remaining Client Apps**.

## Licensing rules

- Each licence is issued to **one named user** (one person).
- An **IRONSTICK SERVER licence** requires at least **two Client App licences**.
- A **Central Scan App licence** requires at least **one IRONSTICK SERVER licence**.
- A **Bridge licence** requires a **Client App licence**; it is unlocked in the Client App key.

## Order a licence

Copy the template, fill in the fields and send it, together with a **PDF copy of your passport or national identity card**, through one of our [contact channels](#contact) (WhatsApp / Telegram).

```
Subject: Licence key order – [First name] [Last name]

I hereby order licence keys for IRONSTICK:

Law firm / practice / company (if any): [……]
VAT ID / company registration no. (if applicable): [……]
Salutation / title: [……]
First name: [……]
Last name: [……]
Street and no.: [……]
Postal code / city: [……]
Region / county: [……]
Country: [……]
Phone: [……]
Mobile: [……]
WhatsApp: [ ] yes
E-mail for the key(s): [……]
Correspondence language (EN / DE / FR / IT / ES / RO): [……]
Date of birth (YYYY-MM-DD): [……]
National identification number (if applicable): [……]

Requested licence(s):
[ ] IRONSTICK Client App   (base licence)
[ ] Bridge(s)              (unlocked in the Client App key)
[ ] IRONSTICK SERVER       (requires at least 2 Client App licences)
[ ] Central Scan App       (requires at least 1 IRONSTICK SERVER licence)

Each licence is issued to one named user (the person named above).

As a PDF I am attaching:
• a copy of my passport or national identity card

Please send me the licence keys. For any questions, you can
reach me by phone or e-mail as given in this order.

Kind regards
[First name] [Last name]
```

Each licence key is permanently tied to one named person, so we verify the licensee's identity before issuing it. **Please include an image/PDF of your identity card or passport.**

## Entering the licence key

### Client App

Enter the key in the licence window when the Client App starts; you can change it later in the [configuration](https://www.ironstick.legal/manualquickstart.html#q2). The same key activates your licensed **Bridges**; there is no separate Bridge key.

### IRONSTICK SERVER

The IRONSTICK SERVER key is entered during the server set-up.

### Central Scan App

Enter the key in the licence window when the Central Scan App starts.

## Try it for free

A **free 30-day trial of the Client App** is available on request, so you can evaluate the product at your own pace. Feel free to take an old case, enter it step by step in IRONSTICK and see the difference between your own entries and assessments and those of IRONSTICK. That gives you a direct comparison.

## Licence renewal

About **10 days before** a licence expires, the Client App shows a reminder; with IRONSTICK SERVER, the administration page also shows an overview of every user's Client App licence. Order the renewal by e-mail or WhatsApp. Once your order has been checked against your customer data and payment has been received, you receive the new licence key by e-mail or WhatsApp and paste it into the Client App.
