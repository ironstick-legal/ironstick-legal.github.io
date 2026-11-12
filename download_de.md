# Download & Lizenzen

> IRONSTICK herunterladen: Client-App, Bridges, Server und Central Scan-App, mit Installationsreihenfolge und Lizenzregeln. 30 Tage kostenlos testen.

Originalseite: https://www.ironstick.legal/download_de.html

---

Software direkt herunterladen, Lizenzschlüssel bei uns anfragen.

## Client-App

### Windows-Arbeitsplatz

Client-App und Bridges laufen auf demselben Windows-Arbeitsplatz unter **einem einzigen IRONSTICK-Lizenzschlüssel**. Jede Bridge wird separat lizenziert und in Ihrem Client-App-Lizenzschlüssel freigeschaltet, ein eigener Bridge-Schlüssel ist also nicht nötig. Zusätzlich wird ein KI-Anbieter angebunden.

### IRONSTICK Client-App

Die Hauptanwendung für den Arbeitsplatz: Fälle, Mandanten, Fristen, Dokumente, Beweisarbeit und der [KI-Chat](https://www.ironstick.legal/ki_de.html) — alles lokal auf Ihrem Windows-Arbeitsplatz gespeichert.

### Bridges (MCP-Server)

Konnektoren, die KI-Desktop-Apps über einen lokalen MCP-Server mit Ihrer Client-App verbinden, damit die KI direkt [an der Akte arbeiten](https://www.ironstick.legal/ki_de.html) kann. Jede Bridge setzt eine Client-App-Lizenz voraus.

#### Claude Desktop

Konnektor für die Claude-Desktop-App.

[Herunterladen](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-claude-setup-2.16.15.exe)

#### ChatGPT Desktop

Konnektor für die ChatGPT-Desktop-App.

[Herunterladen](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-chatgpt-setup-2.16.15.exe)

#### Qwen

Konnektor für die Qwen-Desktop-App.

[Herunterladen](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-qwen-setup-2.16.15.exe)

#### Kimi

Konnektor für die Kimi-Desktop-App.

[Herunterladen](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-bridge-kimi-setup-2.16.15.exe)

## KI-Anbindung

![Windows-Arbeitsplatz mit einer IRONSTICK-Lizenz für Client-App und MCP-Server, verbunden mit einem KI-API-Key oder einer KI-Desktop-App mit Abonnement.](https://www.ironstick.legal/img/dl_client.png)

Mit einem **KI-API-Key** stehen in der Client-App alle KI-Funktionen zur Verfügung. Empfohlen wird eine Aufladung von mindestens 20 Dollar/Euro je Anbieter. Die Abrechnung erfolgt nutzungsbasiert, ein ungenutzter Key kostet daher nichts. Die Client-App ist darauf ausgelegt, Kosten zu vermeiden, und ruft eine kostenpflichtige API nur auf, wenn eine Aufgabe es erfordert. Die API-Keys tragen Sie im [Konfigurationsbildschirm](https://www.ironstick.legal/manualquickstart_de.html#q3) ein, der direkt auf die Key- und Abrechnungsseiten der Anbieter verlinkt.

Die **KI-Desktop-Apps** können auch ohne Abonnement ausprobiert werden. Ein Abonnement ist die monatliche Pauschale des Anbieters; für zusätzliche Kapazität bieten die Anbieter Erweiterungen an. Ein bestehendes Abonnement lässt sich unverändert weiter nutzen, ohne seine Konfiguration zu ändern. Desktop-Apps lassen sich auf zwei Wegen anbinden: über die [Bridge (MCP-Server)](https://www.ironstick.legal/manualbridge_de.html) oder durch den Export von KI-Instruktionsdateien. Die Download-Links finden Sie im [Konfigurationsbildschirm](https://www.ironstick.legal/manualironstick_de.html#s2).

## Server und Scan-Arbeitsplatz

![IRONSTICK SERVER: Ihr Synology-NAS plus eine IRONSTICK-SERVER-Lizenz.](https://www.ironstick.legal/img/dl_server.png)

IRONSTICK SERVER wird als fertiges Synology-Paket (SPK) geliefert und lässt sich in drei Klicks auf Ihrem NAS installieren. Sie benötigen lediglich ein handelsübliches Synology-NAS, z. B. ein DS223j ab etwa 180 €. Nach der Installation läuft er im Hintergrund; die Verwaltung erfolgt im Browser.

### IRONSTICK SERVER

Läuft auf einem handelsüblichen Synology-NAS und verbindet mehrere Arbeitsplätze: geteilte Fälle, eine kanzleiweite Gesetzesbibliothek und zentraler Scan-Eingang auf Ihrem eigenen NAS. Er baut sich aus den Arbeitsplätzen selbst wieder auf und zeigt die letzte Sicherung jedes Nutzers. Der Server arbeitet vollständig im Netz Ihrer Kanzlei, ohne Cloud und ohne KI-Verkehr. Ab zwei Client-App-Lizenzen.

[Herunterladen](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-server-synology-1.0.0.spk)

### Central Scan App

Der Erfassungs-Arbeitsplatz am Scanner: Eingehende Post und Dokumente werden zentral eingescannt, den Fällen zugeordnet und automatisch eingespeist. Setzt IRONSTICK SERVER voraus.

[Herunterladen](https://github.com/ironstick-legal/ironstick-legal.github.io/releases/download/v1.0.7/ironstick-centralscan-setup-1.0.3.exe)

## Installationsreihenfolge

1. Erste **Client-App** [installieren](https://www.ironstick.legal/manualquickstart_de.html#q1) und mit Ihrem [Lizenzschlüssel aktivieren](https://www.ironstick.legal/manualquickstart_de.html#q2).
2. Die [**Bridge(s)**](https://www.ironstick.legal/manualbridge_de.html) auf demselben Arbeitsplatz installieren.
3. **IRONSTICK SERVER** auf dem Synology-NAS installieren.
4. Die **Central Scan App** am Scan-Arbeitsplatz installieren.
5. Die **übrigen Client-Apps** installieren und aktivieren.

## Lizenzregeln

- Jede Lizenz wird auf **einen namentlich genannten Nutzer** (eine Person) ausgestellt.
- Eine **IRONSTICK-SERVER-Lizenz** setzt mindestens **zwei Client-App-Lizenzen** voraus.
- Eine **Central-Scan-App-Lizenz** setzt mindestens **eine IRONSTICK-SERVER-Lizenz** voraus.
- Eine **Bridge-Lizenz** setzt eine **Client-App-Lizenz** voraus; sie wird im Client-App-Schlüssel freigeschaltet.

## Lizenz bestellen

Kopieren Sie die folgende Vorlage, füllen Sie die Felder aus und senden Sie sie zusammen mit einer **PDF-Kopie Ihres Reisepasses oder Personalausweises** über einen unserer [Kontaktwege](#contact) (WhatsApp / Telegram).

```
Betreff: Lizenzschlüssel-Bestellung – [Vorname] [Nachname]

Hiermit bestelle ich Lizenzschlüssel für IRONSTICK:

Kanzlei / Praxis / Firma (falls vorhanden): [……]
USt-IdNr. / Handelsregisternummer (falls zutreffend): [……]
Anrede / Titel: [……]
Vorname: [……]
Nachname: [……]
Straße und Nr.: [……]
PLZ / Ort: [……]
Region / Kreis: [……]
Land: [……]
Telefon: [……]
Mobil: [……]
WhatsApp: [ ] ja
E-Mail für den/die Schlüssel: [……]
Korrespondenzsprache (EN / DE / FR / IT / ES / RO): [……]
Geburtsdatum (JJJJ-MM-TT): [……]
Nationale Identifikationsnummer (falls zutreffend): [……]

Gewünschte Lizenz(en):
[ ] IRONSTICK Client-App   (Grundlizenz)
[ ] Bridge(s)              (im Client-App-Schlüssel freigeschaltet)
[ ] IRONSTICK SERVER       (setzt mind. 2 Client-App-Lizenzen voraus)
[ ] Central Scan App       (setzt mind. 1 IRONSTICK-SERVER-Lizenz voraus)

Jede Lizenz wird auf einen namentlich genannten Nutzer ausgestellt (die oben genannte Person).

Als PDF hänge ich an:
• eine Kopie meines Reisepasses oder Personalausweises

Bitte senden Sie mir die Lizenzschlüssel. Für Rückfragen erreichen
Sie mich telefonisch oder per E-Mail unter den in dieser Bestellung angegebenen Daten.

Freundliche Grüße
[Vorname] [Nachname]
```

Jeder Lizenzschlüssel ist dauerhaft an eine namentlich genannte Person gebunden, daher prüfen wir die Identität des Lizenznehmers vor der Ausstellung. **Bitte senden Sie uns ein Bild/PDF Ihres Personalausweises/Passes mit.**

## Lizenzschlüssel eingeben

### Client-App

Geben Sie den Schlüssel beim Start der Client-App im Lizenzfenster ein; später können Sie ihn in der [Konfiguration](https://www.ironstick.legal/manualquickstart_de.html#q2) ändern. Derselbe Schlüssel schaltet Ihre lizenzierten **Bridges** frei.

### IRONSTICK SERVER

Der Schlüssel für IRONSTICK SERVER wird bei der Server-Einrichtung eingegeben.

### Central Scan App

Geben Sie den Schlüssel im Lizenzfenster ein, wenn die Central Scan App startet.

## Kostenlos testen

Für die **Client-App** erhalten Sie auf Anfrage eine **kostenlose 30-Tage-Testlizenz**, um das Produkt in Ruhe zu prüfen. Nehmen Sie ruhig einen alten Fall, legen Sie ihn Stück für Stück in IRONSTICK an und sehen Sie die Differenz zwischen Ihren Eingaben und Beurteilungen und denen von IRONSTICK. So erhalten Sie direkt einen Vergleich.

## Lizenzerneuerung

Etwa **10 Tage vor Ablauf** einer Lizenz zeigt die Client-App eine Erinnerung an; mit IRONSTICK SERVER zeigt die Verwaltungsseite zusätzlich eine Übersicht der Client-App-Lizenz jedes Nutzers. Bestellen Sie die Verlängerung per E-Mail oder WhatsApp. Sobald Ihre Bestellung mit Ihren Kundendaten abgeglichen wurde und die Zahlung eingegangen ist, erhalten Sie den neuen Lizenzschlüssel per E-Mail oder WhatsApp und fügen ihn in die Client-App ein.
