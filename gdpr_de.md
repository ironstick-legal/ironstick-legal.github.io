# DSGVO-Datenfluss-Erklärung

> IRONSTICK DSGVO-Datenfluss-Erklärung: jeder Weg, auf dem Daten IRONSTICK in Richtung eines externen KI-Anbieters verlassen, was übermittelt wird und wo die Pseudonymisierung greift.

Originalseite: https://www.ironstick.legal/gdpr_de.html

---

Beziehungen zu externen Large Language Models

Sachliche, aus dem Code abgeleitete Beschreibung jedes Pfades, auf dem Daten
IRONSTICK in Richtung eines externen LLM verlassen, was genau übermittelt wird, in welcher Form
und wo die Pseudonymisierungsschicht greift. Windows-Desktop-Ausgabe. Dieses Dokument
beschreibt ausschließlich das Verhalten von IRONSTICK — **was der KI-Anbieter mit empfangenen
Daten tut, richtet sich ausschließlich nach den eigenen Bedingungen des Anbieters** (den
Nutzungsbedingungen und Datenschutzerklärungen der vom Benutzer eingerichteten Anbieter: Alibaba Cloud (Qwen),
Moonshot AI (Kimi), OpenAI, Anthropic und, falls eingeschaltet, Groq, OpenRouter und
Mistral; Google nur, wenn Google Drive für Exporte genutzt wird), die der Benutzer gesondert prüfen muss.

Version 1.0.7 — Stand November 2026

**Zusammenfassung.**

- **Speicherung.** Alle Daten liegen in einem einzigen lokalen Datenverzeichnis. Die Datenbank,
der Dokumentenspeicher, die Konfigurationsdatei und der KI-Zwischenspeicher sind im Ruhezustand
AES-256-verschlüsselt. Im Klartext verbleiben nur temporäre Arbeitskopien geöffneter
Dokumente, der Scan-Eingang, Exporte und ausgehende Dateien, der kurzlebige
Peer-Review-Puffer und, falls eingeschaltet, das Diagnoseprotokoll (Abschnitt 8).
- **Externe KI.** KI-Aufrufe innerhalb der App gibt es nur mit dem eigenen API-Schlüssel des Benutzers.
Aufrufe über den zentralen Router werden standardmäßig pseudonymisiert und in einem
lokalen Audit-Protokoll erfasst; die bewussten Klartext-Ausnahmen sind in 2.3 aufgeführt.
- **Zustimmung.** Der KI-Chat, die Dokumentenerfassung und die Personenrecherche fragen einmal
pro Sitzung bzw. Programmlauf nach; in der Textverarbeitung ist das Starten einer KI-Funktion
die Zustimmung. Mehrere Hintergrundfunktionen rufen die Cloud-KI ohne eigenen Dialog auf:
die E-Mail-Triage, der Datenkonsistenz Monitor, das Tagesbriefing, die Dialog-Zusammenfassung
und die Red/Blue Team-Prüfung (Abschnitt 3).
- **Desktop-KI-Bridge.** Ein optionales Zusatzmodul, das echte Falldaten an den Anbieter der eigenen Desktop-KI des Benutzers weitergibt, nach
einem Zustimmungsdialog je Programmlauf (Abschnitt 4.9).
- **Weitere Dienste.** Parteiadressen werden täglich mit
OpenStreetMap Nominatim geokodiert (nur die Adresse, keine Namen); eine Neuigkeitendatei wird nach dem Start und
danach alle sechs Stunden von [www.ironstick.legal](https://www.ironstick.legal/index_de.html) heruntergeladen; an den Softwarehersteller werden keine Fall- oder
Personendaten gesendet (Abschnitte 1 und 7).
- **IRONSTICK SERVER.** Optional, auf dem eigenen
NAS der Kanzlei im lokalen Netzwerk, ohne Internetverbindungen. Dokumente gelangen nur als
AES-256-verschlüsselte Dateien zum Server und liegen dort auch nur so; der Server sieht ihren Klartext nie. Die Arbeitszeit je Fall
und die Backup-Ereignisse jedes Arbeitsplatzes sind für den Administrator der Kanzlei sichtbar
(Abschnitt 9).

## 1. Geltungsbereich und Endpunkte

![KI-API, KI-Desktop-App und MCP-Server links, der IRONSTICK Client in der Mitte, Daten-Tresor mit AES-256, IRONSTICK Server und Scan-App rechts](https://www.ironstick.legal/img/65_ai_client_vault.png)

Externe KI-Aufrufe innerhalb der App gehen an **den Anbieter, den die automatische Kaskade
in diesem Moment verwendet**. Der Benutzer kann bis zu vier Anbieter einrichten; jeder
Anbieter, für den ein Schlüssel hinterlegt ist, wird in dieser festen Reihenfolge
verwendet, wobei der kostengünstigste zuerst an der Reihe ist: **Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. Bei jedem Programmstart prüft IRONSTICK,
welche von ihnen antworten. Fällt ein Anbieter aus, geht dieselbe Anfrage an den
nächsten. Der ausgefallene Anbieter wird nach einer vom Fehler abhängigen Wartezeit erneut
versucht; für den Rest des Tages
wird er nur übersprungen, wenn sein Guthaben aufgebraucht oder die Ursache unbekannt ist. Der übermittelte Inhalt
ist bei jedem Anbieter identisch (ab Abschnitt 3: durch den Router pseudonymisiert,
Zustimmung, Audit-Protokoll). Die Endpunkte sind:

- **Claude:** POST https://api.anthropic.com/v1/messages,
der eigene API-Schlüssel des Benutzers.
- **ChatGPT:** POST https://api.openai.com/v1/chat/completions,
der eigene API-Schlüssel des Benutzers.
- **Qwen:** POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
(Alibaba Cloud Model Studio, internationale Region), der eigene API-Schlüssel des Benutzers.
- **Kimi:** POST https://api.moonshot.ai/v1/chat/completions
(Moonshot AI), der eigene API-Schlüssel des Benutzers.

**Kostenlose Hintergrund-Anbieter (optional).** Zusätzlich kann der Benutzer
die kostenlosen Angebote von **Groq**, **OpenRouter** und **Mistral**
hinterlegen. IRONSTICK verwendet sie ausschließlich für Aufgaben, die im Hintergrund
laufen: E-Mail-Triage, Datenkonsistenz Monitor, Tagesbriefing, Dialog-Zusammenfassung,
Sprecherzuordnung bei Transkriptionen, Abruf von Gesetzestexten und Lagebild. Jeder
dieser Anbieter hat in der Konfiguration einen eigenen Ein-/Ausschalter; verwendet wird
er nur, wenn ein Schlüssel hinterlegt und sein Schalter eingeschaltet ist. Für den Chat, für
Schriftsätze und für die Red/Blue Team-Prüfung werden sie **nie** verwendet. Steht
keiner von ihnen zur Verfügung, übernimmt die oben beschriebene Kaskade.
Pseudonymisierung, Zustimmung und Audit-Protokoll richten sich nach der jeweiligen
Aufgabe (Abschnitt 4). Die Endpunkte sind:

- **Groq:** POST https://api.groq.com/openai/v1/chat/completions,
der eigene API-Schlüssel des Benutzers.
- **OpenRouter:** POST https://openrouter.ai/api/v1/chat/completions,
der eigene API-Schlüssel des Benutzers.
- **Mistral:** POST https://api.mistral.ai/v1/chat/completions,
der eigene API-Schlüssel des Benutzers.

**Kostenlose Angebote — Hinweis in der Konfiguration.** In der Konfiguration weist ein Hinweis unter jedem dieser Anbieter darauf hin, dass IRONSTICK ihn — sofern der API-Schlüssel hinterlegt und der Schalter eingeschaltet ist — für Hintergrundaufgaben wie Zusammenfassungen und E-Mail-Triage nutzt und dabei Daten an diesen Anbieter übermittelt. Prüfen Sie, bevor Sie einen dieser Anbieter einschalten, ob dessen
Bedingungen den für Auftragsverarbeiter erforderlichen Auftragsverarbeitungsvertrag
vorsehen und Ihrem Berufsrecht genügen. Ein ausgeschalteter Anbieter wird nicht verwendet.

Je Anbieter werden drei konfigurierbare Modellstufen verwendet (klein / mittel /
groß). Ein separater, optionaler Kanal ist die
**Desktop-KI-Bridge** (Abschnitt 4.9): Dort fließen Daten in die eigene
lokale Desktop-KI des Benutzers (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen
Desktop **oder** Kimi Desktop), d. h. an den Anbieter dieser KI (Anthropic, OpenAI,
Alibaba Cloud/Qwen oder Moonshot AI/Kimi) im Rahmen des eigenen Abonnements/Kontos des Benutzers bei diesem Anbieter. Die
Bridges können parallel laufen: Jede Desktop-KI hat ihr eigenes kleines Bridge-Programm,
alle verbinden sich mit demselben lokalen Endpunkt in der laufenden Anwendung, und sie können
gleichzeitig an demselben Fall arbeiten. An den Softwarehersteller werden keine Fall- oder
Personendaten gesendet. Der einzige Kontakt zum Hersteller ist ein einfacher Download einer Neuigkeitendatei
von [www.ironstick.legal](https://www.ironstick.legal/index_de.html) (nach dem Start und danach alle sechs Stunden, Abschnitt 7), der außer der
technischen Verbindung selbst keine Daten enthält.
**IRONSTICK SERVER** (Abschnitt 9) ändert daran nichts: Er wird
von der Kanzlei selbst betrieben, auf der eigenen Hardware der Kanzlei, innerhalb des
eigenen Netzwerks der Kanzlei — er kontaktiert niemals den Hersteller und niemals einen KI-Anbieter.

**Der Hauptschalter ist der eigene Zugang des Benutzers.** Externe
KI-Verarbeitung innerhalb der App gibt es nur, wenn der Benutzer ein eigenes Konto
bei einem KI-Anbieter eröffnet und seinen eigenen Zugangsschlüssel in der Konfiguration eingetragen hat.
**Ohne eingerichteten Anbieter kann überhaupt kein externer KI-Aufruf innerhalb der App erfolgen** — jede
in Abschnitt 4 beschriebene Funktion bleibt dann lokal oder ist schlicht nicht verfügbar. Dieses
Konto ist ein unmittelbarer Vertrag zwischen dem Benutzer und dem Anbieter; IRONSTICK ist
nicht Vertragspartei. Dasselbe gilt für die Desktop-KI-Bridge, die
ein eigenes Abonnement/Konto des Benutzers beim gewählten Desktop-KI-Anbieter voraussetzt
(Anthropic, OpenAI, Alibaba Cloud/Qwen oder Moonshot AI/Kimi). Als **geheim** markierte Dokumente sind
von den Werkzeugen der Desktop-KI-Bridge und des Chats, vom
KI-Instruktionspaket und von jeder erzeugten Ausgabe (Anlagen, Dossiers, Exporte) ausgeschlossen;
ihre Verarbeitung während der Erfassung folgt der bewussten Entscheidung des Benutzers zum
Zeitpunkt der Erfassung (Abschnitt 4.1).

Vollständig lokal (nichts verlässt den Rechner): Textextraktion und OCR, die
deterministische lokale Chat-Schicht, die globale Suche, das Relevanz-Radar, die Briefketten-Analyse,
die Dossier-/PDF-Erzeugung, der lokale Durchlauf des Schwärzungs-Finders, die Spracherkennung
(Transkription von Aufnahmen) und die Erstellung des KI-Instruktionspakets.

## 2. Die Pseudonymisierungsschicht

Jeder Aufruf innerhalb der App über den zentralen KI-Router wird standardmäßig pseudonymisiert:
Kennungen im ausgehenden Text werden durch Platzhalter ersetzt, und die Antwort wird lokal wiederhergestellt. Lässt sich der Pseudonymisierer nicht
vollständig aufbauen, wird nichts gesendet. Die Ausnahmen sind in 2.3 aufgeführt. Die Zuordnung
existiert nur im Arbeitsspeicher, eine neue Zuordnung je Vorgang; sie wird niemals gespeichert.

![Oben: IRONSTICK Client, anonymisierte Figur mit Zahnrädern, KI-API; unten: IRONSTICK Client, Benutzer, KI-Desktop-App](https://www.ironstick.legal/img/66_pseudonymization.png)

### 2.1 Was ersetzt wird

| Quelle | Felder | Platzhalter-Familie (interne Kennungen) |
| --- | --- | --- |
| Mandantendatensätze | Name, nationale Ausweisnummer aus dem Kennungsfeld (z. B. rumänische CNP), Telefon, E-Mail, Adresse und Ort | $PARTEI_A$ (Partei), $CNP_A$ (Ausweisnummer), $TEL_A$ (Telefon), $MAIL_A$ (E-Mail), $ADRESSE_A$ (Adresse) |
| Personen / Entitäten | vollständiger Name (Person oder Unternehmen), nationale Ausweis- oder Unternehmensnummer aus dem Kennungsfeld (z. B. rumänische CNP oder CUI) | $PARTEI_B$ (Partei) / $FIRMA_A$ (Unternehmen), $CNP_B$ (Ausweisnummer) |
| Fälle | Fallnummer, Gegner, Kläger | $FALL_A$ (Fall), $PARTEI_C$ (Partei)… |
| Musterschicht (unbekannte Werte im Freitext) | gerichtliche Aktenzeichen, Personennummern, IBANs, E-Mail-Adressen und Telefonnummern. Andere nationale Ausweisnummern werden nur ersetzt, wenn sie im Mandanten- oder Personendatensatz gespeichert sind. | dieselben Platzhalter-Familien |

### 2.2 Was bewusst unverändert bleibt

- **Datumsangaben, Uhrzeiten und Geldbeträge** — sie werden für die juristische Auswertung unverändert benötigt.
- **Namen von Institutionen** (Gerichte, Behörden) — sie sind nicht im
Wörterbuch enthalten und sind öffentliche Stellen.
- **Dritte ohne eigenen Datensatz** — Zeugen, Ärzte, Rechtsanwälte, Richter oder Unternehmen, die nicht als Mandanten-, Personen- oder Falldatensatz erfasst sind; wer durch einen Platzhalter ersetzt werden soll, wird einfach als Person erfasst.
- **Adressen von Nicht-Mandanten** — durch einen Platzhalter ersetzt wird die gespeicherte Adresse des Mandanten.
- Der gesamte **sachliche Inhalt** von Dokumenten (Behauptungen, Diagnosen,
Schilderung) — nur Identifikatoren werden ersetzt, nicht der Sachverhalt.

### 2.3 Bewusste Klarnamen-Ausnahmen

- **Personen-Webrecherche (Stufe 1)** und **automatisches Ausfüllen von Formularen** für Personen /
Institutionen: Eine Websuche nach $PARTEI_A$ ist sinnlos, daher wird der
echte Name bewusst gesendet.
- **KI-Finder der Schwärzung**: Er erhält Text, der bereits lokal
geschwärzt wurde, und muss mit den Klarnamen der von ihm gefundenen *unbekannten Dritten*
antworten — die Pseudonymisierung ist für diesen einen Zweck ausgeschaltet.
- **Vorverarbeitung der Vorlesefunktion (TTS)**: siehe 4.6 — Sätze gehen im Klartext
hinaus.
- **Desktop-KI-Bridge**: bewusst Rohdaten (Abschnitt 4.9).

## 3. Zeitpunkte der Zustimmung und das Audit-Protokoll

Aufrufe, die über den zentralen Router geleitet werden, sind an eine Zustimmung gebunden und werden protokolliert: Jede
Modellrunde schreibt eine Zeile in die lokale Audit-Tabelle mit
der vollständigen Anfrage und Antwort **in der durch Platzhalter ersetzten Form, die den Rechner
tatsächlich verlassen hat**; abgelehnte oder blockierte Versuche werden ohne Inhalt protokolliert. Fragt eine
Funktion nach Zustimmung, nennt der Dialog Modellstufe und ungefähre Anfragegröße, und eine Freigabe gilt für
die aktuelle Bildschirmsitzung (bei der Dokumentenerfassung: für den aktuellen Programmlauf).

**Router-Flüsse ohne eigenen Zustimmungsdialog:**
die E-Mail-Triage (im Hintergrundbetrieb ebenso wie beim manuellen Abruf im E-Mail-Screen,
Abschnitt 4.2), der Analyselauf des Datenkonsistenz Monitors (4.5),
das Tagesbriefing (4.4a), die Dialog-Zusammenfassung des API-Chats und die Red/Blue
Team-Prüfung (4.7) sowie der KI-Finder der Schwärzung (das Einschalten seines Schalters ist die
Zustimmung). Diese werden dennoch pseudonymisiert (ausgenommen die beabsichtigten Klarnamen-Antworten des
Schwärzungs-Finders) und dennoch im Audit-Protokoll erfasst.

**Flüsse, die den Router umgehen:** die
KI-Funktionen der Textverarbeitung, die Vorverarbeitung der Vorlesefunktion und die KI-Korrektur Datei→Markdown
rufen die API direkt auf. Sie werden pseudonymisiert (Ausnahme: Vorlesefunktion),
zeigen jedoch **keinen eigenen Zustimmungsdialog und schreiben keine Zeilen in das
Audit-Protokoll**. Die Bedienung dieser Funktionen durch den Benutzer (Drücken der KI-Schaltfläche,
Starten einer Erzeugung, Starten der Vorlesefunktion bei eingeschaltetem KI-Schalter) ist der
Zeitpunkt der Zustimmung.

## 4. Die Datenflüsse, Anwendungsfall für Anwendungsfall

### 4.1 Dokumentenerfassung

Textextraktion und OCR erfolgen lokal. Ist ein API-Schlüssel konfiguriert, fragt IRONSTICK
einmal pro Programmlauf nach; anschließend laufen bis zu vier Aufrufarten (alle pseudonymisiert, alle
im Audit-Protokoll erfasst):

- **Erkennung des Hauptdokuments** (kleine Stufe): Auszüge des OCR-Rohtexts — nur bei Scans schlechter Qualität.
- **OCR-Korrektur** (kleine Stufe): ein begrenzter Auszug des Dokumenttexts.
- **Klassifizierung** (mittlere Stufe): ein begrenzter Auszug des Dokumenttexts, **zuzüglich Systemlisten**: die vollständige Fallliste (Fallnummer,
Name des Mandanten, Gegenpartei — durch Platzhalter ersetzt), ein Bestand bekannter Namen (durch Platzhalter ersetzt), sowie die Codelisten der Institutionstypen und Dokumenttypen
(Bezeichnungen ohne Platzhalter). Rückfallebene: kleine Stufe, ohne die
Listen.
- **Kontextualisierung beim Speichern** (kleine Stufe): die Metadaten des Dokuments und
der Volltext in begrenzter Länge, zuzüglich einer Indexzeile (ID, Datum, Titel) **jedes aktiven Beweismittels desselben Mandanten** — verwendet zur Absicherung
von Querverweisen. Läuft auch für als geheim gekennzeichnete Dokumente (bewusste Entscheidung des
Benutzers).

### 4.2 E-Mail-Monitor (Triage)

Die Fallzuordnung erfolgt **lokal und ohne KI**. Neue E-Mails werden im
Hintergrund beim Start und danach alle fünf Minuten abgerufen. Eine E-Mail, deren Fall
die lokale Erkennung bereits bestimmt (Fallnummer, Briefnummer, Mandantennummer oder Bezug auf einen
eigenen Schriftsatz), löst keinen KI-Aufruf aus. Für jede andere
E-Mail beurteilt **ein Aufruf der kleinen Stufe** die Dringlichkeit, mit genau: Name und
Adresse des Absenders, Betreff und dem gespeicherten Vorschau-Auszug als reinem Text (fest begrenzt) — **niemals dem vollständigen Nachrichtentext**, keinen
Anhängen und **keiner Fallliste**. Antwort: Priorität und Begründung. Sind kostenlose
Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann dieser Aufruf über diese laufen.
**Es wird kein Zustimmungsdialog angezeigt**, weder im Hintergrundbetrieb noch beim
manuellen Abruf im E-Mail-Screen: Die Triage läuft automatisch, sobald ein E-Mail-Konto
und ein KI-Anbieter eingerichtet sind. Pseudonymisiert und im Audit-Protokoll erfasst.

**Keine Tracking-Pixel.** Das Öffnen einer E-Mail im Monitor kontaktiert niemals
den Server des Absenders: Bilder, die über eine Internetadresse referenziert werden (einschließlich
unsichtbarer Tracking-Pixel), werden nicht geladen und erscheinen als Platzhalter mit einem
Hinweis, sodass der Absender nicht erfahren kann, wann, wie oft oder von welcher Adresse aus eine
E-Mail gelesen wurde. Angezeigt werden ausschließlich Bilder, die in die E-Mail selbst eingebettet sind.

### 4.3 Personenanalyse (Webrecherche)

Drei Stufen, nach einer einmaligen Zustimmung pro Sitzung:

- **Stufe 1 — Suche:** Suchmaschinen werden direkt vom Rechner des
Benutzers aus abgefragt; zusätzlich wird das
serverseitige Websuche-Werkzeug des Anbieters mit dem **echten
Namen der Person im Klartext** aufgerufen (für eine Suche unvermeidbar; im Klartext protokolliert).
- **Stufe 2 — Seitenzusammenfassungen** (mittlere Stufe): je Seite der Name der Person
(durch Platzhalter ersetzt), die URL und ein begrenzter Auszug des Seiteninhalts.
- **Stufe 3 — Profilsynthese** (große Stufe): Name und Ort (durch Platzhalter ersetzt)
zuzüglich der gesammelten Seitentexte in begrenzter Länge je Quelle.

Das Ergebnis wird lokal mit der Zuverlässigkeit „unbestätigt" gespeichert. Die zugehörigen
**Autofill**-Schaltflächen in den Personen-/Institutionsformularen senden den eingegebenen
Namen ebenfalls im Klartext (dokumentierte Ausnahme).

### 4.3a Parteienprüfung aus öffentlichen Quellen

Die Prüfung einer Partei aus öffentlichen Quellen ist ein festgelegtes Verfahren, das die Anwendung
selbst ausführt, wenn eine verbundene KI es mit Name, Ort, Bezirk, Land und
der Art der Partei (natürliche Person oder juristische Person) aufruft:

- **Akten:** eine Volltextsuche nach dem Namen in der lokalen
Datenbank — **rein lokal**, nichts verlässt den Rechner.
- **Internet:** eine feste Liste von Suchanfragen wird an die öffentlichen
Suchmaschinen **Google, DuckDuckGo und Qwant** gesendet. Jede Anfrage besteht aus einem
Suchbegriff in der Sprache des Landes der Partei zuzüglich des **echten
Namens der Partei im Klartext** und, bei einigen Anfragen, des Ortes oder Bezirks
(für eine Suche unvermeidbar). Es werden keine Fall-, Mandanten- oder Dokumentinhalte
übermittelt. Die Suchmaschinen sehen die Anfragen wie die jedes Browser-Benutzers.

Das Ergebnis wird der aufrufenden KI als aufbereitetes, ungeprüftes Profil zurückgegeben.
Nichts wird in die Stammdaten geschrieben: Jeder Befund durchläuft das Prüftor
des Datenkonsistenz Monitors (Abschnitt 4.5) und wird nur übernommen, wenn der
Benutzer ihn annimmt. Ausgewertet werden ausschließlich öffentlich zugängliche Quellen.

### 4.4 Tagesprotokoll

Der Screen selbst ist lokal. Beim Import von Freitext läuft zunächst ein **lokaler**
Parser; nur wenn keine Formatmarkierung eines Tagesprotokolls gefunden wird, normalisiert eine KI-Rückfallebene
den Rohtext: Der eingefügte Text wird vollständig gesendet, kleine Stufe, unter dem Vorbehalt der Zustimmung, pseudonymisiert, im Audit-Protokoll erfasst. Gespeicherte
Tagesprotokoll-Einträge verlassen den Rechner nur als Werkzeugergebnisse des Chats oder der Desktop-KI-Bridge
(begrenzte Auszüge) oder innerhalb des KI-Instruktionspakets (Abschnitt 5).

### 4.4a Tagesbriefing

Beim ersten Programmstart eines Tages (Windows) bereitet IRONSTICK
im Hintergrund ein gesprochenes Tagesbriefing vor, bereits während des Starts und
bevor das Briefing-Fenster fragt, ob der Benutzer es hören möchte. Der Briefingtext —
Fristenzahlen, die Gerichtstermine von heute und morgen mit Fallnummer,
Mandantenname, Ort und Gericht sowie die Titel der heutigen Termine — wird
einmal (kleine Stufe) an die Cloud-KI gesendet, die ihn als gesprochene Prosa in der
Systemsprache neu formuliert. Pseudonymisiert über den Router, im Audit-Protokoll erfasst, **kein Zustimmungsdialog**.
Sind kostenlose Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann dieser Aufruf
über diese laufen. Steht kein Anbieter zur Verfügung, wird stattdessen ein lokal zusammengesetzter Text verwendet.

### 4.5 Datenkonsistenz Monitor

Phase 1 (E-Mail ↔ Stammdaten) ist vollständig deterministisch. Phase 2 sendet
**je neuem eingehendem Dokument einen Aufruf** der kleinen Stufe (pseudonymisiert, im
Audit-Protokoll erfasst, **kein Dialog**), der Folgendes enthält: die deduplizierten
**Kontaktbereich-Auszüge** (kurze Auszüge um Adress-, Telefon- und Steuerangaben) aus dem
Volltext **dieses** Dokuments, die Parteinamen dieses Dokuments und seines Falls sowie zu
jeder Partei die **Namen** möglicher Treffer aus den gespeicherten Stammdaten (durch
Platzhalter ersetzt, soweit im Wörterbuch vorhanden; Namen von Institutionen im Klartext).
**Kontaktdaten und Ausweisnummern aus den gespeicherten Stammdaten werden nicht übermittelt.** Sind
kostenlose Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann dieser Aufruf über diese
laufen. Die Antwort wird stets nur zu einem Vorschlag, den der
Benutzer im Monitor annehmen muss.

### 4.6 Textverarbeitung (KI-Unterstützung im Text)

- **Auswahl überarbeiten:** der ausgewählte Satz/Absatz/Abschnitt (mit
Auszeichnung) **zuzüglich eines Auszugs des Dokuments als Kontext**
und die Anweisung des Benutzers — mittlere Stufe, pseudonymisiert.
- **Gliederung/Inhaltsverzeichnis:** faktisch das gesamte Dokument als indizierte Zeilenliste
(lange Zeilen gekürzt), in begrenzter Länge — mittlere Stufe, pseudonymisiert.
- **Vorverarbeitung für die Vorlesefunktion:** beim Vorlesen eines Dokuments wird **jeder
Satz einzeln im Klartext an die kleine Stufe gesendet**, um
Abkürzungen und Zahlen auszuschreiben — **ohne Pseudonymisierung** (Identifikationsnummern
müssen unverändert zurückkommen, um korrekt vorgelesen zu werden). Aktenstempel und Verweismarkierungen
werden zuvor lokal entfernt. Das Starten der Vorlesefunktion ist der Zeitpunkt der
Zustimmung.

Keiner der Aufrufe der Textverarbeitung zeigt einen gesonderten Zustimmungsdialog
an oder schreibt Einträge in das Audit-Protokoll (Umgehung des Routers, Abschnitt 3).

### 4.7 Red/Blue Team-Prüfung und Dialog-Zusammenfassung (API)

Zwei weitere API-Flüsse gehören zur Entwurfserstellung. **Red/Blue Team:** hat der Benutzer
es für den aktiven Anbieter eingeschaltet (Schalter neben dem API-Schlüssel; ein gespeicherter
Schlüssel ist erforderlich), wird jedes förmliche Dokument, das über den
Auslieferungsdialog übergeben wird — aus dem In-App-Chat und aus der Desktop-KI-Bridge
gleichermaßen —, von demselben Anbieter in einem gesonderten Prüfdurchlauf ein weiteres Mal aus Sicht des
gegnerischen Rechtsvertreters gelesen
(mittlere Stufe). Übermittelt werden: der Entwurfstext, das Datum und der Rechtsraum
des Falls; pseudonymisiert über den Router und im Audit-Protokoll erfasst wie jeder Router-Aufruf;
**kein Zustimmungsdialog** — der Schalter ist die Zustimmung; der Bericht des Prüfers wird dem Benutzer beigefügt. Die Red/Blue Team-Prüfung läuft
**nie** über die kostenlosen Hintergrund-Anbieter (Abschnitt 1). **Dialog-Zusammenfassung:** in langen
API-Chat-Sitzungen wird der ältere Teil des Dialogs (nur die Fragen des Benutzers und die
endgültigen Antworten des Modells, niemals Werkzeugergebnisse) vom aktiven Anbieter
(kleine Stufe, im Hintergrund, **kein eigener Zustimmungsdialog**) zu einer kurzen Zusammenfassung verdichtet, die den Rohverlauf
ersetzt; sie wird verschlüsselt im Zwischenspeicher abgelegt und jedes Mal
überschrieben. Pseudonymisiert und im Audit-Protokoll erfasst. Sind kostenlose Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann die
Zusammenfassung über diese laufen.

### 4.8 KI-Chat (extern, API)

Zustimmung einmal pro Chat-Sitzung; mittlere Stufe mit automatischer Eskalation zur
großen Stufe (der gesamte Kontext wird dann erneut gesendet); pseudonymisiert; jede Runde
im Audit-Protokoll erfasst. Jeder Durchgang übermittelt: den System-Prompt (statische Regeln), den **aktuellen GUI-Kontext**
(aktueller Screen, geöffneter Fall/Mandant einschl. Name des Mandanten — durch Platzhalter ersetzt),
bis zu **10 KI-Gedächtniseinträge** des geöffneten Mandanten, den jüngsten Dialog zuzüglich einer Zusammenfassung älterer Durchgänge
(4.7) sowie die Liste der Zwischenspeicher-Dateien des Chats. Jedes Werkzeug, das das Modell aufruft,
gibt sein Ergebnis in die API-Konversation zurück — einschließlich Dokument-Volltexten
(größere Ergebnisse werden im verschlüsselten Zwischenspeicher abgelegt), E-Mail-Nachrichtentexten und
Auszügen aus dem Tagesprotokoll. Der Chat verwendet dieselbe Werkzeugschicht
und dieselben Auslieferungsprüfungen wie die Desktop-KI-Bridge (4.9): Prüfung von
Schriftsätzen, Red/Blue Team (4.7) und Übergabe über den Export-Dialog —
was das System verlässt, ist eine einreichungsfähige Vorlage. Die lokale Chat-Schicht
beantwortet Routineanfragen ohne jede Übermittlung.

Zwei Hilfsfunktionen verdienen ausdrückliche Erwähnung. Die **Wetterabfrage**
ruft aktuelle Wetterdaten für einen benannten Ort von dem Nicht-LLM-Dienst
Open-Meteo ab (Abschnitt 7) — an diesen Dienst werden nur der Ortsname bzw. dessen Koordinaten übermittelt,
niemals Fall- oder Personendaten. Die **Standortabfrage**
antwortet ausschließlich aus der **jüngsten lokal gespeicherten**
Sicherheits-Momentaufnahme (Abschnitt 8): Die Anfrage der KI löst **keine neue externe Abfrage** aus —
sie liest lediglich, was bereits auf dem Datenträger vorhanden ist. Wie bei jedem Werkzeug fließt das, was diese Funktionen
zurückgeben, in die KI-Konversation zurück, d. h. an den KI-Anbieter.

### 4.9 Desktop-KI-Bridge (optionale Zusatzmodule)

**Jeder Desktop-KI-Zugang ist ein optionales, gesondert erworbenes Modul.**
Er besteht nur dort, wo die Kanzlei das jeweilige Bridge-Modul erworben und
installiert hat; ohne jedes Modul bleibt der Bridge-Abschnitt in der
Konfiguration gesperrt, der lokale Endpunkt startet nie, und keiner der in
diesem Abschnitt beschriebenen Datenflüsse kann stattfinden. Bridges gibt es für
**Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** und **Kimi Desktop**; jede hat ihr eigenes kleines Bridge-Programm,
und alle verbinden sich mit demselben lokalen Endpunkt in der laufenden
Anwendung. Die nachfolgend beschriebenen Datenflüsse sind für alle identisch; lediglich der empfangende Anbieter unterscheidet sich.

**Dieser Kanal überträgt echte Falldaten.** Das ist sein Zweck: Die eigene Desktop-KI-Sitzung des Benutzers erstellt
einreichungsfähige Vorlagen und benötigt daher echte Namen und Nummern.

- Die Desktop-KI (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop oder Kimi Desktop)
verbindet sich über ihr Bridge-Programm mit der laufenden Anwendung; diese Verbindung bleibt auf dem
Rechner. Nur die Werkzeuge für Websuche, Seitenlesen und Register nehmen Kontakt zum Internet auf.
- **Websites mit Zugangsprüfung.** Verlangt eine Website eine Bestätigung, bevor sie
ihre Inhalte freigibt, öffnet IRONSTICK die Seite in einem eigenen Fenster; der
Benutzer bestätigt dort selbst. Den Inhalt der Seite liest anschließend die Desktop-KI —
er fließt wie jedes andere Werkzeugergebnis an ihren Anbieter.
- Der erste Datenzugriff irgendeiner Desktop-KI in einem Programmlauf öffnet einen blockierenden
Zustimmungsdialog. Die Freigabe öffnet den Zugriff für alle Desktop-KIs für den Rest des
Programmlaufs; eine Ablehnung sperrt sie alle vorübergehend.
- Mehr als 200 Werkzeuge stellen Chroniken, Volltexte, E-Mails,
Tagesprotokolle, Fristen, Stammdaten, ganze Fälle (in Teilen) und Ausgabeformate
bereit; als geheim markierte Dokumente sind ausgenommen. Änderungen an Stammdaten,
Chronik, Kalender, KI-Gedächtnis, Volltexten und der Gesetzesbibliothek werden erst wirksam,
nachdem der Benutzer sie in einem IRONSTICK-Formular, -Dialog
oder im Datenkonsistenz Monitor freigegeben hat: Vorschläge zu Stammdaten und Beziehungen
landen im Monitor; von der KI vorgeschlagene Änderungen an fallgebundenen KI-Instruktionsnotizen werden als
Rot/Grün-Diff angezeigt und erst übernommen, nachdem der Benutzer
ausdrücklich zugestimmt hat; Chronik-Einträge werden niemals von der KI geschrieben — sie füllt lediglich das
Erfassungsformular vor, das der Benutzer vervollständigt und speichert; und ein von der KI geheilter Dokument-Volltext
(OCR-Neuscan) ersetzt den gespeicherten Volltext erst, nachdem
der Benutzer den vollständigen Text in einem Bestätigungsdialog gesehen und gespeichert hat.
Ohne einen solchen Dialog schreibt die KI nur in ihre eigenen Arbeitsbereiche: den verschlüsselten
Zwischenspeicher, das Tagesprotokoll auf Wunsch des Benutzers und ihre eigene Fallbewertung nach den deterministischen Prüfungen.
Tags und Kanzlei-Chat-Nachrichten brauchen die Bestätigung des Benutzers im Chat. Bei einem von einem Kollegen abonnierten Fall
kann die KI eine Notiz anheften, die über den
IRONSTICK SERVER an den Inhaber des Falls und alle Abonnenten gelangt
(Abschnitt 9). Die Übergabe in die Textverarbeitung und die Dateiauslieferung sind ausdrückliche Schritte des Benutzers;
Navigation nur bei gesonderter Erlaubnis.
- **Heilung durch OCR-Neuscan (lokal) und die PDF-Übergabe (vom Benutzer veranlasst).**
Ist ein gespeicherter Volltext abgeschnitten oder durch einen alten OCR-Lauf unbrauchbar, kann die KI
einen erneuten Scan anfordern: Der Benutzer wählt die Seiten aus, der Neuscan läuft **lokal**
(kein neuer externer Empfänger), und beide Textfassungen werden im lokalen
Zwischenspeicher bereitgestellt; was die KI daraus liest, fließt wie jedes
andere Werkzeugergebnis an ihren Anbieter. Als äußerstes letztes Mittel — nur nach einem solchen Neuscan und
nur innerhalb harter, von der Bridge durchgesetzter Grenzen —
kann die KI den Benutzer bitten, ihr die **Original-PDF-Datei** zu übergeben: IRONSTICK
öffnet lediglich den Eintrag; der Benutzer speichert die PDF selbst über das Büroklammer-Symbol
und zieht sie in den Desktop-KI-Chat. Dadurch wird das Dokument
**als Datei** (einschließlich Stempeln, Unterschriften und Bildern) an den Anbieter dieser KI
übertragen — dies geschieht ausschließlich durch eigenes, bewusstes Handeln des Benutzers, niemals
automatisch, und als geheim markierte Dokumente sind von vornherein vom gesamten
Neuscan-Kanal ausgenommen.
- **Lokaler KI-Zwischenspeicher (Datenminimierung).** Umfangreiche Werkzeugergebnisse können in einer lokalen, verschlüsselten Zwischenspeicher-Datei abgelegt und dort bearbeitet werden, **ohne überhaupt an den KI-Anbieter
übertragen zu werden**. Vollständige Fall-Exporte für die KI
und die Sitzungsstart-Übersicht in einem Aufruf werden ebenfalls unmittelbar in diesen
lokalen Speicher geschrieben; nur die Teile, welche die KI anschließend liest, fließen an ihren Anbieter.
Der Zwischenspeicher befindet sich innerhalb des
Datenverzeichnisses und bleibt über Sitzungen hinweg erhalten (er ist der Arbeitskontext der KI);
nicht mehr genutzte Dateien werden automatisch gelöscht, und es entsteht kein neuer externer Empfänger.
- **Der Zwischenspeicher ist verschlüsselt.**
Jede Datei im Zwischenspeicher ist im Ruhezustand AES-256-verschlüsselt; Dateien verlassen den
Speicher ausschließlich über den Export-Dialog von IRONSTICK, niemals in einen Download-Ordner.
Die Datenbank, der Dokumentenspeicher, die Konfigurationsdatei und der Zwischenspeicher
sind damit alle im Ruhezustand AES-256-verschlüsselt. Temporäre Arbeitskopien geöffneter
Dokumente (bei jedem Start und beim Beenden geleert), der kurzlebige Peer-Review-Puffer,
der Scan-Eingang, Exporte und ausgehende Dateien bleiben im Klartext
(Abschnitt 8).
- Werkzeugergebnisse werden an den Desktop-KI-Client des Benutzers und von dort
an **dessen Anbieter** übermittelt: Anthropic für Claude (im Rahmen des Claude-Abonnements
des Benutzers und der Bedingungen von Anthropic), OpenAI für ChatGPT (im Rahmen des
ChatGPT-Abonnements des Benutzers und der Bedingungen von OpenAI), Alibaba Cloud/Qwen für Qwen
Desktop (im Rahmen des Qwen-Kontos des Benutzers und der Bedingungen von Qwen) oder Moonshot AI für Kimi
Desktop (im Rahmen des Kimi-Kontos des Benutzers und der Bedingungen von Moonshot AI). IRONSTICK schreibt keine
Audit-Protokoll-Zeilen für den Bridge-Verkehr; die obere Leiste zeigt je
aktiver KI ein pulsierendes Logo (Claude-Zeichen, ChatGPT-Zeichen, Qwen-Zeichen, Kimi-Zeichen) — gleichzeitiger Zugriff ist
möglich und wird jeweils gesondert signalisiert. Jedes Bridge-Programm führt neben sich ein
**lokales Protokoll** mit Zeit, Werkzeugname, Erfolg/Fehlschlag und
Antwortgröße, **niemals mit Inhalten**. Ein zweites, detaillierteres
**Diagnoseprotokoll** im Datenverzeichnis ist **standardmäßig ausgeschaltet**; wenn es
zur Fehlersuche eingeschaltet wird, kann es Aufrufparameter (die Namen enthalten können) im Klartext enthalten und wird automatisch gekürzt. Keines der Protokolle wird irgendwohin übertragen.
- Das gemeinsame KI-Gedächtnis speichert verdichtete Erkenntnisse (mandanten- oder fallgebunden) lokal. Die KI kann vorschlagen, einen
Eintrag zu speichern, zu ändern oder zu löschen; jede Änderung wird erst wirksam, nachdem der Benutzer zugestimmt hat. Mit einem Fall verknüpfte Einträge
werden nie automatisch gelöscht; Einträge ohne Fall werden nach einem Jahr ohne Nutzung gelöscht. Der Inhalt des Gedächtnisses ist für jeden KI-Kanal
sichtbar und wird übertragen, sobald diese Kanäle ihn lesen.
- Das Peer-Review zwischen den Desktop-KIs läuft über IRONSTICK, nicht unmittelbar
zwischen den Anbietern: Eine KI hinterlegt ein Arbeitsergebnis (z. B. einen Entwurf) in einem
**lokalen, kurzlebigen Austauschpuffer** (Klartextdateien auf dem Rechner des Benutzers,
gelöscht, wenn die Aufgabe geschlossen wird, und bei jedem Neustart der App vollständig bereinigt) sowie eine
Aufgabennotiz; die andere KI liest diese, wenn der Benutzer sie dazu anweist. Dadurch entsteht
**kein neuer externer Empfänger** — was die prüfende KI liest, wird genau wie jedes andere
oben beschriebene Werkzeugergebnis an **ihren eigenen** Anbieter übertragen, zu dessen
Bedingungen. Die Anbieter tauschen niemals unmittelbar Daten aus; was die prüfende KI liest, geht
ausschließlich an ihren eigenen Anbieter.

### 4.10 Audio-Transkription (Sprecherzuordnung)

Die Spracherkennung läuft vollständig lokal; die Aufnahme selbst verlässt den
Rechner nie. Hat der Benutzer mehr als einen Sprecher angegeben, ordnet anschließend
die KI die erkannten Zeilen den Sprechern zu: abschnittsweise (mittlere Stufe) den erkannten Text, dazu bereits zugeordnete Zeilen als Kontext und
die Zahl der Sprecher. Die Aufrufe laufen über den Router — pseudonymisiert, unter dem
Vorbehalt der Zustimmung, im Audit-Protokoll erfasst. Die Antwort darf den Text nicht
verändern: jede Zeile wird gegen den erkannten Text geprüft; scheitert ein Block, wird
das Transkript ohne Sprecherzuordnung übernommen. Bei nur einem Sprecher findet kein
KI-Aufruf statt. Sind kostenlose Hintergrund-Anbieter eingeschaltet (Abschnitt 1), können
diese Aufrufe über diese laufen.

## 5. Das KI-Instruktionspaket (Export-ZIP)

![IRONSTICK Client, Benutzer mit MD-Dateien und ZIP-Archiv, KI-Web-App](https://www.ironstick.legal/img/67_instruction_zip.png)

Die Erstellung des Pakets erfolgt lokal und umfasst keinen KI-Aufruf. Sie erzeugt
**Markdown im Klartext** (keine Pseudonymisierung), das dazu bestimmt ist, vom
Benutzer bei einem externen LLM seiner Wahl hochgeladen zu werden. Inhalt:

| Datei | Inhalt |
| --- | --- |
| Fälle | alle Fälle des ausgewählten Mandanten mit Parteien, Status und Beweismittel-ID-Index (keine Volltexte) |
| Entitäten | **alle Personen/Entitäten der gesamten Kanzlei** (nicht nur dieses Mandanten) einschließlich nationaler Personen- und Unternehmensnummern (z. B. rumänische CNP/CUI), Geburtsdatum, vollständiger Kontaktdaten, Beruf, Fahrzeug — zuzüglich der gespeicherten Analyseblöcke (Einschätzung, Schwachstellen, Wohnorte, Finanzen, soziales Umfeld, Quellen) |
| Institutionen, Fristen | alle Institutionen; aktive Fristen mit Aktenzeichen und Mandantenname |
| Mail | die 100 neuesten E-Mails **kanzleiweit**: Absender, Empfänger, Betreff, Dateinamen der Anhänge, kurzer Auszug (keine vollständigen Nachrichtentexte) |
| Tagesprotokoll | letzte 10 Tage, kanzleiweit, einschließlich der Fallchronologie dieses Zeitraums |
| Je Fall | eine Fallakte je Fall: die vollständige Chronik **mit Dokument-Volltexten**, Kennungen von Mandant und Parteien einschließlich Ausweisnummern; zuzüglich aller Fall-Hintergrundnotizen ohne Begrenzung |
| Instruktionsdateien | fünf Dokumente mit Arbeitsregeln — keine personenbezogenen Daten |

**Was geschieht, wenn dieses ZIP bei einem KI-Dienst eines Dritten hochgeladen wird:**
Der Benutzer überträgt persönlich und im Klartext wesentliche Teile der gesamten
Kanzlei — Mandantenidentitäten mit nationalen Identifikationsnummern, Profile Dritter
einschließlich sensibler Einschätzungen, kanzleiweite Korrespondenz-Metadaten und Akten
— an diesen Anbieter. Ab diesem Zeitpunkt werden die Daten zu den Bedingungen
dieses Anbieters (Nutzung für Training, Aufbewahrung, Rechtsordnung) verarbeitet. IRONSTICK zeigt vor dem
Export (einmal je Programmlauf) einen Datenschutzhinweis an und bietet den Export auch zu Google Drive an, wodurch
die Dateien zusätzlich bei Google abgelegt werden. Der Benutzer handelt als übermittelnder
Verantwortlicher im Sinne der DSGVO und muss vor dem Hochladen eine Rechtsgrundlage sicherstellen (z. B. Art. 6,
berufsrechtliche Verschwiegenheitsregeln).

Als geheim markierte Dokumente sind von Fristen, Tagesprotokollen und
Fallakten ausgenommen.

## 6. Übersichtsmatrix

| Datenfluss | Was abfließt (Form) | Pseudonymisiert | Eigener Zustimmungsdialog | Audit-Protokoll |
| --- | --- | --- | --- | --- |
| Dokumentenerfassung (4 Aufrufe) | OCR- und Dokumenttext (begrenzt), Fall- und Namenslisten | ja | ja — einmal pro Programmlauf | ja |
| E-Mail-Triage (manueller Abruf im E-Mail-Screen) | Absender, Betreff, kurzer Textauszug (keine Fallliste); nur für E-Mails, die nicht lokal zugeordnet wurden | ja | nein | ja |
| E-Mail-Triage (Hintergrund, alle fünf Minuten) | ebenso | ja | nein | ja |
| Tagesbriefing (API) | Briefingtext: Fristenzahlen, Gerichtstermine mit Fallnummer, Mandantenname, Ort und Gericht, Titel der Termine | ja | nein (erster Start des Tages, beim Start vorbereitet) | ja |
| Personenrecherche, Stufe 1 | Klarname (Websuche) | nein — konzeptionsbedingt | ja — einmal pro Sitzung | ja (im Klartext) |
| Personenrecherche, Stufen 2 und 3 | Seitentexte (begrenzt je Quelle) | ja | dieselbe Zustimmung | ja |
| Automatisches Ausfüllen Person/Institution | eingegebener Name (Websuche) | nein — konzeptionsbedingt | ja — einmal pro Sitzung | ja (im Klartext) |
| KI-Import Tagesprotokoll | eingefügter Rohtext | ja | ja | ja |
| Datenkonsistenz Monitor | je neuem Dokument: dessen Kontaktabschnitte und Namen möglicher Treffer (keine Kontaktdaten oder Ausweisnummern aus den Stammdaten) | ja (Institutionsnamen im Klartext) | nein (gedrosselter Hintergrundprozess) | ja |
| Textverarbeitung: Überarbeiten / Strukturieren | Auswahl mit Kontextauszug / Dokumentzeilen (begrenzt) | ja | nein (Schaltfläche = Zustimmung) | nein |
| Vorverarbeitung für das Vorlesen | jeder Satz, Klartext | nein | nein (Start = Zustimmung) | nein |
| Red-/Blue-Team-Prüfung (API) | Entwurfstext, Datum und Rechtsraum | ja | nein (Schalter = Zustimmung) | ja |
| Dialogzusammenfassung (API) | ältere Dialogrunden (nur Fragen des Benutzers und endgültige Antworten) | ja | nein (Hintergrunddurchlauf des API-Chats) | ja |
| KI-Korrektur Datei→Markdown | konvertierter Text | ja | nein | nein |
| KI-Finder der Schwärzung | bereits geschwärzter Text; Antworten enthalten Klarnamen Dritter | aus — konzeptionsbedingt | Umschalter = Zustimmung | ja |
| KI-Chat (extern) | Prompt, Screen-Kontext, Gedächtnis, jüngster Dialog mit Zusammenfassung, Werkzeugergebnisse (begrenzt je Element) | ja | ja — einmal pro Sitzung | ja |
| Desktop-KI-Bridge (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | unverarbeitete Werkzeugergebnisse (vollständige Falldaten) | nein — konzeptionsbedingt | ja — einmal pro Programmlauf für alle Desktop-KIs | nein (App-seitig) |
| Audio-Transkription: Sprecherzuordnung | erkannter Text in Abschnitten — die Aufnahme nie | ja | ja | ja |
| Kostenlose Hintergrund-Anbieter (Groq, OpenRouter, Mistral) — nur wenn eingeschaltet | dieselben Inhalte wie die jeweilige Hintergrundaufgabe; nie Chat, Schriftsatz oder Red/Blue Team | wie die jeweilige Aufgabe | nein (Schalter je Anbieter = Zustimmung) | ja |
| KI-Instruktions-ZIP | Kanzleiexport im Klartext (vom Benutzer veranlasster Upload) | nein | Warnung einmal pro Programmlauf | entfällt |

## 7. Externe Dienste ohne LLM (der Vollständigkeit halber)

![IRONSTICK Client, Internet, Standort-Symbol und Wetter-Symbol](https://www.ironstick.legal/img/68_external_services.png)

Unabhängig von jedem LLM kontaktieren die folgenden Funktionen externe Dienste mit
den minimal erforderlichen Daten: Nummernvalidierung (EU VIES, EORI, GLEIF,
Handelsregister — die zu prüfende Nummer), die direkten Webabfragen der Personensuche (der Name), IMAP (Ihr Mailserver) sowie
optionale Exporte nach Google Drive (die exportierten Dateien). Keiner dieser Vorgänge bezieht
den KI-Anbieter ein.

Die folgenden Dienste werden im Hintergrund oder ebenfalls mit minimalen Daten
kontaktiert:

- **OpenStreetMap Nominatim (Adress-Geokodierung)** — einmal täglich arbeitet ein
Hintergrundauftrag die Personen und Unternehmen in den Parteidatensätzen ab,
die eine Adresse oder einen Ort haben, und sendet Straße, Bezirk, Ort und Land
(niemals den Namen) an Nominatim, um sie auf der Karte zu platzieren; eine bereits
platzierte Adresse wird nur erneut gesendet, wenn sie sich ändert, und eine nicht gefundene wird
nach einer Wartezeit erneut versucht. Der Ortsname der Wetterabfrage wird auf
dieselbe Weise geokodiert. Kein Zustimmungsdialog; die Koordinaten werden lokal gespeichert.
- **ipwho.is (Geo-IP-Abfrage)** — einmal pro Programmstart fragt IRONSTICK im Rahmen des
lokalen Sicherheits-Snapshots (Abschnitt 8) bei diesem Dienst die
**öffentliche** IP-Adresse des Rechners und einen groben Standort (Stadt, Land, ISP) ab.
Die Anfrage enthält keine Nutzdaten; der Dienst erhält die öffentliche IP-Adresse, von der die
Anfrage eingeht. Die Antwort wird ausschließlich lokal gespeichert und
nirgendwohin sonst übermittelt.
- **Open-Meteo (Wetter)** — auf Anforderung fragt die KI-Wetterabfrage
(Abschnitt 4.8) aktuelle Wetterdaten für einen benannten Ort ab; das Tagesbriefing tut
dasselbe für den in der Konfiguration hinterlegten Ort, wenn sein optionaler Modus mit
Wetterbezug eingeschaltet ist. Übermittelt werden nur die Koordinaten des Ortes — niemals
Fall-, Mandanten- oder Personendaten.
- **[www.ironstick.legal](https://www.ironstick.legal/index_de.html) (Neuigkeitendatei)** — nachdem der Zugangscode
eingegeben wurde, und danach alle sechs Stunden, lädt die Anwendung von der Website des Softwareherstellers eine Neuigkeitendatei mit
Hinweisen und Warnungen herunter, dazu jedes darin referenzierte Bild. Die Anfrage enthält keine Daten; wie jeder Webserver
sieht der Server des Herstellers die IP-Adresse und den Zeitpunkt der Anfrage.

Keiner dieser Dienste bezieht den KI-Anbieter ein.

## 8. Lokale Speicherung, Integrität und Kontrolle durch den Benutzer

![IRONSTICK Client mit TOTP-Zugangssperre; Dokumente, Zwischenspeicher und Datenbank mit AES-256 verschlüsselt](https://www.ironstick.legal/img/69_local_encryption.png)

Unabhängig von den vorstehenden KI-Kanälen gilt für **sämtliche**
Daten, die IRONSTICK vorhält, Folgendes:

- **Ausschließlich lokale Speicherung.** Der gesamte Datenbestand — Datenbank, Dokumentdateien,
Medien, Transkripte, Konfiguration — befindet sich in einem einzigen Datenverzeichnis unter
einem vom Benutzer festgelegten Pfad. IRONSTICK erfordert kein Cloud-Konto,
und keine Funktion sendet Benutzerdaten an den Hersteller (der einzige Kontakt zum Hersteller ist
der Download der Neuigkeitendatei, Abschnitt 7). Betreibt eine Kanzlei
den optionalen IRONSTICK SERVER (Abschnitt 9), so ist auch dieser Server ein eigenes Gerät der
Kanzlei im eigenen Netzwerk der Kanzlei — am Zugriff des Herstellers ändert sich dadurch nichts.
- **Datenbank im Ruhezustand verschlüsselt (AES-256).** Die Datenbank — der Bestand
an Mandanten, Fällen, Chronik, E-Mails, Fristen, Transkripttexten und dem
Gedächtnis der KIs — wird mit AES-256 verschlüsselt gespeichert, jede Seite einzeln und
mit einem Integritätssiegel je Seite. Der Schlüssel wird von der Anwendung zur
Laufzeit abgeleitet und niemals auf Datenträger oder in die Konfiguration geschrieben, sodass eine Datenbankdatei,
die vom Speichergerät oder aus einem Backup-Archiv kopiert wird, ohne
IRONSTICK nicht gelesen werden kann. Dies ist eine technische Maßnahme im Sinne von Art. 32 DSGVO, die
ohne jede Konfiguration durch den Benutzer greift und nicht abgeschaltet werden kann.
- **Dokumente im Ruhezustand verschlüsselt (AES-256).** Der Dokumentenspeicher — die
Original-PDFs, Scans, Bilder, Audio- und Transkriptdateien — wird auf dieselbe Weise
Datei für Datei verschlüsselt, mit einem Integritätssiegel, das Veränderungen erkennt.
Das Lesen erfolgt über ein einziges Tor, das die angeforderte Datei
in eine temporäre Arbeitskopie entschlüsselt und diese Kopien entfernt, wenn die
Anwendung geschlossen oder gestartet wird. Backups und Fallpakete enthalten die Dokumente
in ihrer verschlüsselten Form.
- **Was im Klartext bleibt.** Neben den Arbeitskopien der laufenden Sitzung und Exporten: Scans, die im Scan-Eingang auf ihre Erfassung warten;
der kurzlebige Peer-Review-Puffer zwischen den Desktop-KIs (Abschnitt 4.9, gelöscht,
wenn die Aufgabe geschlossen wird, und bei jedem Start bereinigt); und, nur wenn eingeschaltet,
das detaillierte Diagnoseprotokoll der Bridge (Abschnitt 4.9).
- **Zugangskontrolle beim Start (TOTP).** Sobald der Lizenzschlüssel
akzeptiert ist, zeigt die Anwendung nichts außer einer Code-Abfrage an, bis der Benutzer
den aktuellen sechsstelligen zeitbasierten Einmalcode aus einer
Authenticator-App (RFC 6238) eingibt. Das den Codes zugrunde liegende Geheimnis wird
niemals auf Datenträger geschrieben; gespeichert wird lediglich ein
nicht geheimer Fingerabdruck der bestätigten Einrichtung, damit der QR-Code
nach einem Schlüsselwechsel erneut angezeigt wird. Wiederholte Falscheingaben lösen eine zunehmende
Wartezeit aus. Die Desktop-KI-Bridges erhalten keine Falldaten, solange die Anwendung
gesperrt ist. Die Konfigurationsdatei (API-Schlüssel, E-Mail-Zugangsdaten,
Serverzugang) liegt mit demselben Mechanismus wie die
Dokumente AES-256-verschlüsselt vor und wird ausschließlich im Arbeitsspeicher entschlüsselt.
- **Vom Benutzer kontrollierter Speicherort.** Der Datenpfad wird bei der
Einrichtung gewählt und kann jederzeit geändert werden — auch auf ein Wechselmedium wie
einen verschlüsselten USB-Stick oder eine verschlüsselte externe Festplatte. Die Anwendung folgt schlicht
dem konfigurierten Speicherort; die Verschlüsselung des Mediums (z. B. mit der
Laufwerksverschlüsselung des Betriebssystems) liegt in der Hand des Benutzers und wird
für tragbare Medien empfohlen. Netzlaufwerke und mit einer Cloud synchronisierte Ordner
(OneDrive, Google Drive, Dropbox, iCloud, Box, pCloud, MEGA) werden als Datenspeicherort
abgelehnt. Beim Wechsel des Speicherorts in der Konfiguration prüft
IRONSTICK das Ziel anhand dieser Regeln; kopiert wird mit Prüfsummenvergleich, umgeschaltet
erst nach erfolgreicher Verifikation, und der alte Ordner bleibt umbenannt erhalten.
- **Gerätesynchronisation ohne jede Cloud.** Die optionale
Synchronisation Windows ↔ Android-Tablet läuft über eine direkte
USB-Kabelverbindung — kein Drittanbieterdienst ist beteiligt, Übertragungen werden
per Prüfsumme verifiziert, und vor dem Ersetzen der Datenbank wird ein verpflichtendes Backup
erstellt. Als geheim markierte Dokumente werden überhaupt nicht auf das Tablet
übertragen.
- **Sicherheits-Snapshot beim Start (lokales Anmeldeprotokoll).** Bei jedem
Programmstart zeichnet IRONSTICK im Hintergrund einen Snapshot des Rechners auf, auf dem es
läuft: Hostname, Betriebssystem, RAM/CPU, lokale IP-Adresse, Standard-Browser,
laufende Fernzugriffswerkzeuge, die es erkennt, sowie eine daraus abgeleitete Sicherheitsbewertung
— zudem, einmal pro Start, die öffentliche IP-Adresse und den groben Standort
(Stadt, Land, ISP), die über den Geo-IP-Dienst ipwho.is (Abschnitt 7) ermittelt werden.
Der Snapshot wird **ausschließlich lokal** im Anmeldeprotokoll der Datenbank
gespeichert und nirgendwohin übermittelt. Die Aufbewahrung ist
automatisch auf höchstens **6 Monate** und höchstens **1.000
Einträge** begrenzt (tägliche Bereinigung), und der Benutzer kann das Protokoll jederzeit
im Konfigurator einsehen (Karte «Anmeldeprotokoll»).
- **Integritäts-Fingerabdrücke für jede erfasste Datei.** Im Moment der
Erfassung erhält jede gespeicherte Datei einen kryptografischen Inhalts-Fingerabdruck
(SHA-256 für Dokumente und Medien; einen älteren MD5-Fingerabdruck für Transkript-Audiodateien),
der in der Datenbank neben dem Eintrag festgehalten wird. Jede spätere Veränderung einer
gespeicherten Datei ist daher durch Abgleich der Datei mit ihrem
festgehaltenen Fingerabdruck **erkennbar**, und E-Discovery-Exporte (EDRM) enthalten diese Fingerabdrücke,
sodass Empfänger die Dateien unabhängig verifizieren können. Dadurch wird jede Manipulation offenkundig und beweisbar.
- **Backups nach Ermessen des Benutzers.** Eine integrierte Backup-Funktion schreibt
eine vollständige Kopie der Daten (vollständiges Backup oder reines Daten-Backup) als einzelnes ZIP-Archiv
an ein beliebiges vom Benutzer gewähltes Ziel und stellt auf Anforderung aus einem solchen Archiv
wieder her. Wie oft Backups erstellt werden, wo sie aufbewahrt werden, wie lange sie
aufbewahrt werden und ob die Archive zusätzlich verschlüsselt werden, liegt vollständig in der
Entscheidung des Benutzers. In jedem Archiv sind die Datenbank, die Dokumente, die
Konfiguration und der KI-Zwischenspeicher in jedem Fall AES-256-verschlüsselt; nur
Scans, die noch im Scan-Eingang warten, sind unverändert enthalten —
IRONSTICK gibt keinen Zeitplan vor und übermittelt Backups nirgendwohin.
- **Erzeugte Dokumente gehören dem Benutzer.** Der Benutzer kann jederzeit
Dokumente erzeugen — Schriftsätze, Briefe, Dossiers, Listen, Exporte — und
herunterladen: Sie werden in den lokalen Ordner „Dokumente“ geschrieben oder, sofern der
Benutzer ausdrücklich Google Drive als Ziel wählt, in das eigene Google-Drive-Konto des Benutzers.
Was danach mit einem
erzeugten Dokument geschieht — Drucken, Einreichen bei einem Gericht, Versand per E-Mail,
Hochladen zu einem beliebigen Dienst, Weitergabe an Dritte —, entscheidet allein der Benutzer.

**Zuweisung der Verantwortung.** Da IRONSTICK
alles lokal speichert und Daten nur auf den in den Abschnitten
1–7 und 9 dokumentierten Wegen übermittelt — einschließlich der Hintergrundfunktionen, die ohne eigenen
Dialog laufen (Abschnitte 3 und 7) —, ist der Betreiber der Kanzlei alleiniger
Verantwortlicher: Er wählt das Speichermedium und dessen Verschlüsselung, verwaltet Backups und
bewahrt sie auf, entscheidet, welche KI-Funktionen aktiviert sind, erteilt oder verweigert jede
Zustimmung und entscheidet allein darüber, was mit jedem Dokument, jedem Export oder jedem Backup geschieht,
das die Software erzeugt. KI-generierte Inhalte — Entwürfe, Zusammenfassungen, Bewertungen,
Klassifizierungen — sind stets ein **Vorschlag**, über den der Benutzer entscheidet. Dieses Dokument dient dazu, dass jede
dieser Entscheidungen in voller Kenntnis der tatsächlichen
Datenflüsse getroffen werden kann.

## 9. IRONSTICK SERVER (optional, im eigenen Netzwerk der Kanzlei)

![IRONSTICK Server und IRONSTICK Client über das LAN verbunden; der Server hat keine Verbindung zum Internet](https://www.ironstick.legal/img/70_server_lan.png)

Kanzleien mit mehreren IRONSTICK-Arbeitsplätzen können den optionalen
**IRONSTICK SERVER** betreiben — einen Koordinationsdienst, der auf dem
kanzleieigenen Synology NAS im eigenen lokalen Netzwerk der Kanzlei läuft. Für
die Zwecke dieser Erklärung sind folgende Tatsachen entscheidend:

- **Es ist keine externe Partei beteiligt.** Der Server ist ein eigenes
Gerät der Kanzlei. Er nimmt Verbindungen ausschließlich von privaten (lokalen)
Netzwerkadressen an und **baut niemals selbst eine Verbindung ins Internet
auf** — keine Telemetrie, keine Update-Prüfungen, kein Kontakt zum Hersteller.
Der Softwarehersteller hat keinerlei Zugriff.
- **Transport und Speicherung.** Dokumente gelangen nur als AES-256-verschlüsselte Dateien im selben Tresor-Format wie am
Arbeitsplatz zum Server und liegen dort auch nur so; der Server sieht ihren Klartext nie.
Der Server läuft auf dem eigenen NAS der Kanzlei im Netzwerk der Kanzlei, ohne Internetverbindungen.
- **Keine KI-Beteiligung.** Über den Server läuft kein KI-Datenverkehr, er
speichert keinen KI-Schlüssel und kommuniziert niemals mit einem Anbieter von
Sprachmodellen. Alle in den Abschnitten 1–6 beschriebenen KI-Kanäle bleiben
strikt auf den einzelnen Arbeitsplatz beschränkt; die Pseudonymisierungsschicht,
die Zustimmungs-Schranken und das Audit-Protokoll werden durch das Vorhandensein
des Servers nicht berührt.
- **Was der Server speichert** — alles auf dem NAS, unter der Kontrolle der
Kanzlei: (a) **freigegebene Fallpakete** — ausschließlich Fälle, die ein
Benutzer ausdrücklich für Kollegen freigegeben hat; als geheim markierte
Dokumente sind konstruktionsbedingt ausgeschlossen und gelangen niemals auf den
Server; (b) die **zentrale Gesetzesbibliothek** — öffentliche
Gesetzestexte als Markdown, jeweils mit dem Namen des beitragenden Benutzers,
dem Quellenlink und dem Prüfdatum; (c) **Zeiterfassungsdaten** — je Benutzer,
Tag und Fall: Fallnummer, Mandantenname und Minuten, von jedem Arbeitsplatz im
Hintergrund gemeldet; (d) **Anwesenheitssummen** je Benutzer und Tag,
abgeleitet aus Sitzungs-Heartbeats; (e) **Metadaten zu Fallereignissen** —
Freigaben, Widerrufe, Beginn und Ende von Abonnements sowie Exporte, jeweils mit
Datum, Uhrzeit und LAN-IP-Adresse; (f) ein **Sicherheitsprotokoll** mit
administrativen Ereignissen und Anmeldeereignissen, einschließlich
LAN-IP-Adressen; (g) **Fallübergabe-Pakete** — überträgt ein Benutzer die
Inhaberschaft an einem Fall auf einen Kollegen, gelangt der vollständige Fall
als ein Archiv über einen temporären Übergabebereich auf dem Server; das Paket
wird vom Server gelöscht, nachdem der Empfänger den Import bestätigt hat, und
als geheim markierte Dokumente werden nur nach ausdrücklicher zusätzlicher
Bestätigung durch den Inhaber übertragen (andernfalls wird die Übertragung
abgebrochen); (h) der **zentrale Scan-Eingang** (optionale Central Scan
App): ein Verzeichnis der **Fallnummern und des Anzeigenamens** jedes
Benutzers (von den Arbeitsplätzen als Abgleichmaterial gemeldet — niemals
Fallinhalte) sowie ein dateiweiser **Dokumenten-Spool**, der eingescannte, an
einen Benutzer adressierte Eingangspost vorhält, bis der Arbeitsplatz dieses
Benutzers sie abgerufen und bestätigt hat, woraufhin die Serverkopie gelöscht
wird; Texterkennung und Empfängerzuordnung erfolgen lokal auf dem
Scan-Arbeitsplatz, ohne jede KI; (i) **Backup-Ereignisdaten** — jeder
Arbeitsplatz meldet seine Datensicherungs- und Wiederherstellungsereignisse
(Art, Dateiname, Größe, Zeitpunkt, LAN-IP), sodass der Administrator je Benutzer
sehen kann, wann die letzte Sicherung erstellt wurde, und Benutzer erinnern
kann, die im Rückstand sind; (j) das **kanzleiweite Parteienverzeichnis**
— die Stammdatensätze zu **Personen und Unternehmen,
Institutionen, den Beziehungen zwischen ihnen und den Personenanalysen**, die
auf den Arbeitsplätzen geführt werden, zusammen mit der Warteschlange der
zwischen den Benutzern ausgetauschten Änderungsvorschläge; (k) die
**Bewertungen von Gerichtsentscheiden** — je Arbeitsplatz und Entscheid: Gericht,
Spruchkörper und Besetzung, die Namen der Richter und Gerichtsschreiber,
Entscheidnummer, Datum, Aktenzeichen, die internen Fall- und Mandantennummern des
bewertenden Arbeitsplatzes, gemessene Textanteile und die von der KI verfasste
englische Analyse des Entscheids und der Eingaben beider Seiten; (l) der
**Kanzlei-Chat** — Nachrichten zwischen den registrierten Benutzern (nach einem Jahr gelöscht) —
sowie an einen geteilten Fall angeheftete Notizen, die für dessen Inhaber und alle Abonnenten sichtbar sind.
- **Das kanzleiweite Parteienverzeichnis.** Sobald ein Arbeitsplatz mit dem
Server verbunden ist, werden seine Parteien-Stammdaten (wer ist wer: Namen,
Kennungen, Kontaktdaten, Beziehungen, Personenanalyse) **automatisch
hochgeladen** und auf jeden anderen Arbeitsplatz derselben Kanzlei gespiegelt,
sodass jeder Anwalt sieht, mit wem die Kanzlei bereits zu tun hat, und die
Kanzlei eine kanzleiweite Sicht auf Interessenkonflikte erhält. Jeder Datensatz
hat genau einen Inhaber — den Benutzer, der ihn als Erster eingebracht hat; alle
anderen Benutzer halten eine schreibgeschützte Kopie und können lediglich einen
**Änderungsvorschlag** senden, den der Inhaber im Datenmonitor annimmt oder
ablehnt. Ist der Inhaber 48 Stunden lang nicht erreichbar, geht die
Inhaberschaft auf den vorschlagenden Benutzer über. **Fallinhalte sind nicht
Teil dieses Verzeichnisses** — Dokumente, Chronologie, Korrespondenz und
Fallzuordnungen unterliegen weiterhin den hier beschriebenen ausdrücklichen
Freigabe- und Übergabehandlungen. Der Austausch bleibt innerhalb der Kanzlei
(ein Verantwortlicher), verlässt niemals das lokale Netzwerk und bezieht
**keinen KI-Anbieter** ein: Dublettenerkennung und Feldabgleich laufen als
reine Programmlogik auf dem sendenden Arbeitsplatz; der Server speichert und
leitet lediglich weiter. Kanzleien sollten diese interne Weitergabe von
Parteidaten und Personenanalysen in ihrem Verzeichnis von
Verarbeitungstätigkeiten aufführen.
- **Die Bewertungen von Gerichtsentscheiden.** Eine Bewertung wird nur auf
ausdrücklichen Befehl des Benutzers gespeichert; danach wird sie wie das
Parteienverzeichnis **automatisch hochgeladen** und auf jeden Arbeitsplatz der
Kanzlei gespiegelt. Jeder Arbeitsplatz führt je Entscheid seine eigene Bewertung,
die nur er ändern kann. Die Analyse beschreibt den Inhalt eines Entscheids und der
Eingaben dazu — sie enthält insoweit **Fallinhalt** — und nennt Richter und
Gerichtsschreiber namentlich. Kein KI-Anbieter ist beteiligt; der Austausch bleibt im
lokalen Netzwerk der Kanzlei. Kanzleien sollten auch diese Weitergabe in ihrem
Verzeichnis von Verarbeitungstätigkeiten aufführen.
- **Nur bewusste Handlungen — für Fallinhalte.** Fallinhalte gelangen
ausschließlich über eine ausdrückliche, vom Benutzer bestätigte Freigabe- oder
Übergabehandlung auf den Server; Texte der Gesetzesbibliothek erst, nachdem der
Benutzer den Eintrag im Datenmonitor angenommen hat; eingescannte Eingangspost
erst, nachdem die Kanzleikraft das Dokument geprüft und auf Senden an einen
ausgewählten Empfänger geklickt hat. Das Parteienverzeichnis und die
gespeicherten Bewertungen von Gerichtsentscheiden sind die bewussten Ausnahmen: Sie
synchronisieren sich im Hintergrund ohne Bestätigung je Datensatz. Zeit-, Anwesenheits-, Ereignis- und Backup-Daten sind
betriebliche Metadaten, die durch den Mehrbenutzerbetrieb selbst entstehen, und
sind für den Administrator der Kanzlei in der Web-Administration sichtbar.
- **Verantwortlichkeit.** Die Kanzlei, die den Server betreibt, bleibt
alleinige Verantwortliche. Der Administrator entscheidet über die Freigabe von
Registrierungen, kann Abonnements beenden, Einträge der Gesetzesbibliothek
löschen und das Paket deinstallieren — wodurch das Server-Datenverzeichnis unter
der Kontrolle des Administrators auf dem NAS verbleibt.
- **Beschäftigtendaten.** Mit dem IRONSTICK SERVER meldet jeder
Arbeitsplatz seine gemessene Arbeitszeit je Tag und Fall (Fallnummer,
Mandantenname) sowie jedes Backup- und Wiederherstellungsereignis (Datei, Größe, Zeit, IP-Adresse)
an den Server, wo der Administrator der Kanzlei sie einsehen kann. Die Kanzlei muss ihre
Mitarbeitenden entsprechend informieren.
- **Vollständige Mandantennamen in Zeiterfassungsdaten.** Die
Zeiterfassungsübersicht zeigt die Arbeitszeit je Fall und je Mandant, was
bedeutet, dass Mandantennamen auf dem NAS gespeichert werden. Dies verbleibt
innerhalb der eigenen Infrastruktur der Kanzlei und ihres bestehenden
Vertraulichkeitsregimes — Kanzleien sollten das NAS jedoch in ihr Verzeichnis
der technischen und organisatorischen Maßnahmen aufnehmen (Zugriffskontrolle
im Betriebssystem des NAS, Volume-Verschlüsselung, Backup-Richtlinie), genau wie bei jedem anderen
Datei-Server der Kanzlei.

## Anhang — Musterklausel für Ihre Mandanten-Datenschutzerklärung (Vorschlag)

Der folgende Text ist ein Formulierungsvorschlag, den eine Kanzlei, die
IRONSTICK einsetzt, in ihre eigene Mandanten-Datenschutzerklärung übernehmen kann.
Er ist so verfasst, dass er den oben beschriebenen Datenflüssen genau entspricht. Er verzichtet bewusst auf Zitate von Gesetzesartikeln, damit er in
Erklärungen jeder Struktur eingefügt werden kann.

**Bevor Sie den Text einfügen — Checkliste für den Anwalt:**

1. Halten Sie den Auftragsverarbeitungsvertrag **jedes** von Ihnen
eingerichteten KI-Anbieters bereit, nennen Sie in der Klausel nur die Anbieter,
die Sie tatsächlich nutzen, und prüfen Sie den Satz zu Training und
Aufbewahrung anhand der Bedingungen, die Sie tatsächlich unterzeichnet haben.
Die kostenlosen Hintergrund-Anbieter (Groq, OpenRouter, Mistral, Abschnitt 1)
deckt die Klausel nur über den dort in Klammern gesetzten optionalen Satz ab —
schalten Sie diese nur ein, wenn deren Bedingungen Ihren berufsrechtlichen
Anforderungen genügen, und streichen Sie den Satz, wenn Sie sie nicht nutzen.
2. Behalten Sie den in Klammern gesetzten Satz zum KI-Arbeitsbereich nur bei,
wenn Sie die Desktop-KI-Bridge (Claude Desktop/Code, ChatGPT Desktop, Qwen
Desktop oder Kimi Desktop) tatsächlich nutzen; andernfalls streichen Sie ihn.
3. Diese Klausel deckt die in diesem Dokument beschriebenen Datenflüsse
innerhalb der App ab. Sie deckt das KI-Instruktionspaket (Abschnitt 5)
**nicht** ab — das Hochladen dieses Exports zu einem KI-Dienst ist eine
gesonderte Entscheidung und erfordert in der Regel die ausdrückliche Zustimmung
des Mandanten.
4. Wenn Sie im Konfigurator einzelne KI-Funktionen deaktiviert haben, kürzen
Sie die Liste der Zwecke entsprechend — beschreiben Sie genau das, was Sie
nutzen, nicht mehr.
5. Dies ist ein Formulierungsvorschlag, keine Rechtsberatung. Lassen Sie ihn vor
der Verwendung anhand des Berufsrechts Ihrer Kammer und der örtlichen
Datenschutzpraxis prüfen.

### Deutsch

**KI-gestützte Mandatsbearbeitung.** Unsere Kanzlei verwendet die
Kanzleisoftware IRONSTICK, die KI-gestützte Funktionen enthält. Für diese
Funktionen können ausgewählte Daten aus Ihrer Akte an einen externen
KI-Dienstleister (je nach Verfügbarkeit: Alibaba Cloud, Moonshot AI, OpenAI oder Anthropic, über deren APIs)
übermittelt werden, der sie in unserem Auftrag auf Grundlage einer
Auftragsverarbeitungsvereinbarung verarbeitet. Wir nutzen diese Funktionen für:
die Klassifizierung und Erfassung eingehender Dokumente, die Priorisierung
eingehender E-Mails, die Prüfung unserer Datenbestände auf Unstimmigkeiten,
das Entwerfen und Prüfen juristischer Dokumente sowie für juristische Analyse
und Recherche. [Optional — streichen, falls nicht genutzt: Für Aufgaben, die im
Hintergrund laufen, etwa die Priorisierung eingehender E-Mails, die Prüfung unserer
Datenbestände und Zusammenfassungen, können zusätzlich die kostenlosen Dienste von Groq,
OpenRouter oder Mistral eingesetzt werden; deren Bedingungen haben wir vor dem Einschalten
geprüft.]

**Schutzmaßnahmen.** Vor jeder Übermittlung ersetzt die Software die in
unserem System gespeicherten direkten Identifikatoren — Namen,
Personenkennziffern, Telefonnummern, E-Mail-Adressen, Postanschriften,
Aktenzeichen und Bankverbindungen — auf unserem eigenen Rechner durch neutrale
Platzhalter. Die Zuordnungstabelle zwischen Platzhaltern und echten Daten
verlässt unsere Kanzlei nie; die Antworten des Dienstleisters werden lokal
zurückübersetzt. Übermittelt wird nur, was die jeweilige Funktion erfordert,
mit festen Umfangsgrenzen. Einzelne Funktionen benötigen technisch bedingt
echte Daten — etwa die öffentliche Internet-Recherche zu einem Personennamen
oder die Vorlesefunktion; diese setzen wir nur durch eine bewusste
Einzelhandlung ein. [Optional — streichen, falls nicht genutzt: Für die
Erstellung von Schriftsätzen nutzen wir zusätzlich einen KI-Arbeitsbereich, in
dem Aktendaten ohne Platzhalter-Ersetzung verarbeitet werden; dieser Kanal wird
nur unter unserer unmittelbaren Aufsicht verwendet.] Unabhängig von den KI-Funktionen sendet die Software
in unseren Datenbeständen gespeicherte Postanschriften — ohne Namen — an den öffentlichen Kartendienst
OpenStreetMap, damit sie auf einer Karte dargestellt werden können.

**Der Dienstleister.** Nach den für uns geltenden Bedingungen des
Dienstleisters werden über die API übermittelte Inhalte
nicht zum Training von KI-Modellen verwendet und nur für begrenzte Zeit
gespeichert. Die Verarbeitung kann außerhalb des Europäischen Wirtschaftsraums
stattfinden; in diesem Fall ist die Übermittlung durch die in unserer
Auftragsverarbeitungsvereinbarung vereinbarten Garantien geschützt. Was der
Dienstleister mit den Daten tun darf, regelt diese Vereinbarung — nicht das
Ermessen der KI.

**Ihre Wahl.** Unsere berufliche Verschwiegenheitspflicht bleibt
unberührt: Über das hier Beschriebene hinaus verlassen keine Daten unsere
Kanzlei. Die Verarbeitung stützt sich auf das uns erteilte Mandat und unser
berechtigtes Interesse an einer effizienten und sorgfältigen
Mandatsbearbeitung. Sie können dem Einsatz der KI-gestützten Funktionen
jederzeit widersprechen; soweit machbar, bearbeiten wir Ihre Akte dann ohne
diese Funktionen. Ihre gesetzlichen Datenschutzrechte — Auskunft, Berichtigung,
Löschung, Beschwerde bei der Aufsichtsbehörde — bleiben vollständig
erhalten.

Diese Erklärung wurde aus dem Quellcode der Anwendung abgeleitet
(Pseudonymisierer, externer Router, Audit-Protokoll und der Übermittlungspfad
jeder einzelnen Funktion) und gibt das ausgelieferte Verhalten der Version 1.0.7 (Stand November 2026) wieder.
Die Verarbeitung durch den KI-Anbieter selbst — Aufbewahrung,
Verwendung für Training, Unterauftragsverarbeiter, Rechtsordnung — richtet sich
ausschließlich nach den Bedingungen des Anbieters, in deren jeweils aktueller Fassung. Die
Links zu den Nutzungsbedingungen und Datenschutzerklärungen jedes Anbieters stehen auch im
jeweiligen Abschnitt der KI-Konfiguration.

| Anbieter | Nutzungsbedingungen und Datenschutz |
| --- | --- |
| Alibaba Cloud (Qwen) | [alibabacloud.com/help/en/legal](https://www.alibabacloud.com/help/en/legal) |
| Moonshot AI (Kimi) | [platform.kimi.ai/docs/agreement](https://platform.kimi.ai/docs/agreement) |
| OpenAI (ChatGPT) | [openai.com/policies](https://openai.com/policies) |
| Anthropic (Claude) | Commercial Terms of Service: [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms); Usage Policy: [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup); Privacy Policy: [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) |
| Groq | [groq.com/terms-of-use](https://groq.com/terms-of-use) |
| OpenRouter | [openrouter.ai/terms](https://openrouter.ai/terms) |
| Mistral | [legal.mistral.ai/terms/commercial-terms-of-service](https://legal.mistral.ai/terms/commercial-terms-of-service) |
