# DSGVO-Datenfluss-Erklärung

Originalseite: https://www.ironstick.legal/gdpr_de.html

---

Beziehungen zu externen Large Language Models

Sachliche, aus dem Code abgeleitete Beschreibung jedes Pfades, auf dem Daten
IRONSTICK in Richtung eines externen LLM verlassen, was genau übermittelt wird, in welcher Form
und wo die Pseudonymisierungsschicht greift. Windows-Desktop-Ausgabe. Dieses Dokument
beschreibt ausschließlich das Verhalten von IRONSTICK — **was der KI-Anbieter mit empfangenen
Daten tut, richtet sich ausschließlich nach den eigenen Bedingungen des Anbieters** (den
Nutzungsbedingungen und Datenschutzerklärungen der vom Benutzer eingerichteten Anbieter — Google, Alibaba Cloud,
Moonshot AI, OpenAI und/oder Anthropic), die der Benutzer gesondert prüfen muss.

## 1. Geltungsbereich und Endpunkte

![KI-API, KI-Desktop-App und MCP-Server links, der IRONSTICK Client in der Mitte, Daten-Tresor mit AES-256, IRONSTICK Server und Scan-App rechts](https://www.ironstick.legal/img/65_ai_client_vault.png)
Externe KI-Aufrufe innerhalb der App gehen an **den Anbieter, den die automatische Kaskade
in diesem Moment verwendet**. Der Benutzer kann bis zu vier Anbieter einrichten; jeder
eingerichtete Anbieter wird automatisch in dieser festen, kostensparenden
Reihenfolge verwendet: **Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. Bei jedem Programmstart prüft IRONSTICK,
welche von ihnen antworten; läuft im Laufe des Tages ein Kontingent oder Guthaben aus oder
antwortet ein Anbieter nicht mehr, wird genau dieselbe Anfrage beim nächsten
Anbieter wiederholt, der dann für den Rest des Tages verwendet wird. Der übermittelte Inhalt
ist bei jedem Anbieter identisch (ab Abschnitt 3: durch den Router pseudonymisiert,
Zustimmung, Audit-Protokoll). Die Endpunkte sind:

- **Claude:** `POST https://api.anthropic.com/v1/messages`,
der eigene API-Schlüssel des Benutzers.
- **ChatGPT:** `POST https://api.openai.com/v1/chat/completions`,
der eigene API-Schlüssel des Benutzers.
- **Qwen:** `POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions`
(Alibaba Cloud Model Studio, internationale Region), der eigene API-Schlüssel des Benutzers.
- **Kimi:** `POST https://api.moonshot.ai/v1/chat/completions`
(Moonshot AI), der eigene API-Schlüssel des Benutzers.

**Kostenlose Hintergrund-Anbieter (optional).** Zusätzlich kann der Benutzer
die kostenlosen Angebote von **Groq**, **OpenRouter** und **Mistral**
hinterlegen. IRONSTICK verwendet sie ausschließlich für Aufgaben, die im Hintergrund
laufen: E-Mail-Triage, Datenmonitor, Tagesbriefing, Dialog-Zusammenfassung,
Sprecherzuordnung bei Transkriptionen, Abruf von Gesetzestexten und Lagebild. Jeder
dieser Anbieter hat in der Konfiguration einen eigenen Schalter EIN/AUS; verwendet wird
er nur, wenn ein Schlüssel hinterlegt und sein Schalter auf EIN steht. Für den Chat, für
Schriftsätze und für die Red/Blue Team-Prüfung werden sie **nie** verwendet. Steht
keiner von ihnen zur Verfügung, übernimmt die oben beschriebene Kaskade.
Pseudonymisierung, Zustimmung und Audit-Protokoll richten sich nach der jeweiligen
Aufgabe (Abschnitt 4). Die Endpunkte sind:

- **Groq:** `POST https://api.groq.com/openai/v1/chat/completions`,
der eigene API-Schlüssel des Benutzers.
- **OpenRouter:** `POST https://openrouter.ai/api/v1/chat/completions`,
der eigene API-Schlüssel des Benutzers.
- **Mistral:** `POST https://api.mistral.ai/v1/chat/completions`,
der eigene API-Schlüssel des Benutzers.

**Kostenlose Angebote — Hinweis in der Konfiguration.** Unter
jedem dieser Anbieter steht wörtlich: „VORSICHT: Es handelt sich hierbei um ein
kostenloses Angebot des Anbieters <Anbieter>. Dieser Anbieter wird, sofern Sie den
API-Key hinterlegen und den Schalter auf ON stellen, von IRONSTICK genutzt, um
Hintergrundaufgaben wie Zusammenfassungen, E-Mail-Triage usw. zu erledigen. Dabei gehen
unweigerlich Daten an diesen Anbieter. Lesen Sie sich deren AGB hinsichtlich DSGVO
gründlich durch." Eine Kanzlei, deren Berufsrecht für jeden Auftragsverarbeiter einen
Auftragsverarbeitungsvertrag verlangt, sollte diese Schalter erst nach Prüfung der
Bedingungen des jeweiligen Anbieters einschalten — ein ausgeschalteter Anbieter wird
niemals verwendet.
Je Anbieter werden drei konfigurierbare Modellstufen verwendet (klein / mittel /
groß). Ein separater, optionaler Kanal ist die
**Desktop-KI-Bridge** (Abschnitt 4.9): Dort fließen Daten in die eigene
lokale Desktop-KI des Benutzers (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen
Desktop **oder** Kimi Desktop), d. h. an den Anbieter dieser KI (Anthropic, OpenAI,
Alibaba Cloud/Qwen oder Moonshot AI/Kimi) im Rahmen des eigenen Abonnements/Kontos des Benutzers bei diesem Anbieter. Die
Bridges können parallel laufen — derselbe lokale MCP-Server kann gleichzeitig
bei Claude, ChatGPT, Qwen und Kimi registriert sein, und sie können gleichzeitig an demselben Fall
arbeiten. IRONSTICK betreibt keinen eigenen
Server; zu keinem Zeitpunkt fließen Daten an den Softwarehersteller. Der optionale Kanzlei-LAN-Server
(**IRONSTICK SERVER**, Abschnitt 9) ändert daran nichts: Er wird
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

Jeder agentische Durchlauf innerhalb der App kann einen Pseudonymisierer mitführen, der ausgehenden Text
durch Platzhalter ersetzt, Werkzeugargumente für die lokale Ausführung zurückübersetzt, Werkzeugergebnisse
erneut durch Platzhalter ersetzt und die Platzhalter in der endgültigen Antwort lokal wieder auflöst. Die Zuordnung
existiert nur im Arbeitsspeicher, eine neue Zuordnung je Vorgang; sie wird niemals dauerhaft gespeichert.

![Oben: IRONSTICK Client, anonymisierte Figur mit Zahnrädern, KI-API; unten: IRONSTICK Client, Benutzer, KI-Desktop-App](https://www.ironstick.legal/img/66_pseudonymization.png)
### 2.1 Was ersetzt wird

| Quelle | Felder | Platzhalter |
| --- | --- | --- |
| Mandantendatensätze | Name, CNP, Telefon, E-Mail, Adresse+Ort | `$PARTEI_A$`, `$CNP_A$`, `$TEL_A$`, `$MAIL_A$`, `$ADRESSE_A$` |
| Personen / Entitäten | vollständiger Name (Person oder Unternehmen), CNP | `$PARTEI_B$` / `$FIRMA_A$`, `$CNP_B$` |
| Fälle | Fallnummer, Gegner, Kläger | `$FALL_A$`, `$PARTEI_C$`… |
| Musterschicht (unbekannte Werte im Freitext) | gerichtliche Aktenzeichen (n/nnn/yyyy), 13-stellige CNPs, IBANs, E-Mail-Adressen, plausible Telefonnummern | dieselben Platzhalter-Familien |

### 2.2 Was bewusst unverändert bleibt

- **Datumsangaben, Uhrzeiten und Geldbeträge** — ihre Verfälschung wurde als gefährlicher
eingestuft als ihre Übermittlung.
- **Namen von Institutionen** (Gerichte, Behörden) — sie sind nicht im
Wörterbuch enthalten und sind öffentliche Stellen.
- **Unbekannte Dritte im Freitext** — Zeugen, Ärzte, Rechtsanwälte,
Richter oder Unternehmen, die nicht als Mandanten-/Personen-/Falldatensätze gespeichert sind, werden nicht
erkannt und gehen im Klartext hinaus. Dies ist eine dokumentierte Grenze des
Ansatzes.
- **Adressen von Nicht-Mandanten** — es gibt kein Adressmuster; nur die
gespeicherte Adresse des Mandanten wird durch einen Platzhalter ersetzt.
- Der gesamte **sachliche Inhalt** von Dokumenten (Behauptungen, Diagnosen,
Schilderung) — nur Identifikatoren werden ersetzt, nicht der Sachverhalt.

### 2.3 Bewusste Klarnamen-Ausnahmen

- **Personen-Webrecherche (Stufe 1)** und **automatisches Ausfüllen von Formularen** für Personen /
Institutionen: Eine Websuche nach `$PARTEI_A$` ist sinnlos, daher wird der
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
tatsächlich verlassen hat**; abgelehnte/blockierte Versuche werden ohne Nutzdaten protokolliert. Der
Zustimmungsdialog nennt Modellstufe und ungefähre Anfragegröße, und eine Freigabe gilt für
die aktuelle Bildschirmsitzung (bei der Dokumentenerfassung: für den aktuellen Programmlauf).

**Flüsse mit automatischer Zustimmung (kein Dialog):** die
E-Mail-Triage im Hintergrund (Dauerbetrieb), der Analyselauf des Datenmonitors
und der KI-Finder der Schwärzung (das Einschalten seines Schalters ist die Zustimmung). Diese werden
dennoch pseudonymisiert (ausgenommen die beabsichtigten Klarnamen-Antworten des Schwärzungs-Finders)
und dennoch im Audit-Protokoll erfasst.
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

- **Erkennung des Hauptdokuments** (kleine Stufe): OCR-Rohtext in Abschnitten von
höchstens 2.000 Zeichen, maximal 8 Aufrufe — nur bei Scans schlechter Qualität.
- **OCR-Korrektur** (kleine Stufe): Dokumenttext, begrenzt auf 16.000
Zeichen.
- **Klassifizierung** (mittlere Stufe): Dokumenttext, begrenzt auf 16.000
Zeichen, **zuzüglich Systemlisten**: die vollständige Fallliste (Fallnummer,
Name des Mandanten, Gegenpartei — durch Platzhalter ersetzt), ein Bestand bekannter Namen, begrenzt auf 2.000
Zeichen (durch Platzhalter ersetzt), sowie die Codelisten der Institutionstypen und Dokumenttypen
(Bezeichnungen ohne Platzhalter). Rückfallebene: kleine Stufe, 8.000 Zeichen, ohne die
Listen.
- **Kontextualisierung beim Speichern** (kleine Stufe): die Metadaten des Dokuments und
der Volltext, begrenzt auf 30.000 Zeichen, zuzüglich einer Indexzeile (ID, Datum, Titel ≤120
Zeichen) **jedes aktiven Beweismittels desselben Mandanten** — verwendet zur Absicherung
von Querverweisen. Läuft auch für als geheim gekennzeichnete Dokumente (bewusste Entscheidung des
Benutzers).

### 4.2 E-Mail-Monitor (Triage)

Die Fallzuordnung erfolgt **lokal und ohne KI**. Für die Einschätzung der
Dringlichkeit erfolgt **ein Aufruf der kleinen Stufe pro E-Mail** mit genau: Name und
Adresse des Absenders, Betreff und dem gespeicherten Vorschau-Auszug als reinem Text (fest
begrenzt auf 1.500 Zeichen) — **niemals dem vollständigen Nachrichtentext**, keinen
Anhängen und **keiner Fallliste**. Antwort: Priorität + Begründung. Sind kostenlose
Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann dieser Aufruf über diese laufen. Im E-Mail-Screen steht dies einmal pro Sitzung unter dem Vorbehalt der Zustimmung; im
**Hintergrundbetrieb läuft es ohne Dialog** (die Aktivierung des Monitors ist
die Zustimmung). In beiden Modi pseudonymisiert und im Audit-Protokoll erfasst.

**Keine Tracking-Pixel.** Das Öffnen einer E-Mail im Monitor kontaktiert niemals
den Server des Absenders: Bilder, die über eine Internetadresse referenziert werden (einschließlich
unsichtbarer Tracking-Pixel), werden nicht geladen und erscheinen als Platzhalter mit einem
Hinweis, sodass der Absender nicht erfahren kann, wann, wie oft oder von welcher Adresse aus eine
E-Mail gelesen wurde. Angezeigt werden ausschließlich Bilder, die in die E-Mail selbst eingebettet sind.

### 4.3 Personenanalyse (Webrecherche)

Drei Stufen nach einer einmaligen Zustimmung pro Sitzung:

- **Stufe 1 — Suche:** lokale Suchmaschinen werden direkt abgefragt; zusätzlich wird das
serverseitige Websuche-Werkzeug des Anbieters mit dem **echten
Namen der Person im Klartext** aufgerufen (für eine Suche unvermeidbar; im Klartext protokolliert).
- **Stufe 2 — Seitenzusammenfassungen** (mittlere Stufe): je Seite der Name der Person
(durch Platzhalter ersetzt), die URL und der Seiteninhalt, begrenzt auf 8.000 Zeichen.
- **Stufe 3 — Profilsynthese** (große Stufe): Name und Ort (durch Platzhalter ersetzt)
zuzüglich sämtlicher gesammelter Seitentexte, begrenzt auf 6.000 Zeichen je Quelle.

Das Ergebnis wird lokal mit der Zuverlässigkeit „unbestätigt" gespeichert. Die zugehörigen
**Autofill**-Schaltflächen in den Personen-/Institutionsformularen senden den eingegebenen
Namen ebenfalls im Klartext (dokumentierte Ausnahme).

### 4.3a OSINT-Parteienprüfung (`osint_entity`)

Die OSINT-Prüfung einer Partei ist ein festgelegtes Verfahren, das die Anwendung
selbst ausführt, wenn eine verbundene KI es mit Name, Ort, Bezirk, Land und
Angabe natürliche/juristische Person aufruft:

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
des Datenmonitors (Abschnitt 4.5) und wird nur übernommen, wenn der
Benutzer ihn annimmt. Ausgewertet werden ausschließlich öffentlich zugängliche Quellen.

### 4.4 Tagesprotokoll

Der Screen selbst ist lokal. Beim Import von Freitext läuft zunächst ein **lokaler**
Parser; nur wenn keine Formatmarkierung eines Protokolls gefunden wird, normalisiert eine KI-Rückfallebene
den Rohtext: Der eingefügte Text wird vollständig gesendet (Abbruch oberhalb von 200.000
Zeichen), kleine Stufe, unter dem Vorbehalt der Zustimmung, pseudonymisiert, im Audit-Protokoll erfasst. Gespeicherte
Protokolle verlassen den Rechner nur als Werkzeugergebnisse des Chats/der Desktop-KI-Bridge
(begrenzte Auszüge) oder innerhalb des KI-Instruktionspakets (Abschnitt 5).

### 4.5 Datenmonitor

Phase 1 (E-Mail ↔ Stammdaten) ist vollständig deterministisch. Phase 2 sendet
**je neuem eingehendem Dokument einen Aufruf** der kleinen Stufe (pseudonymisiert, im
Audit-Protokoll erfasst, **kein Dialog**), der Folgendes enthält: die deduplizierten
**Kontaktbereich-Auszüge** (±~100 Zeichen um Adress-/Telefon-/Steuermerkmale) aus dem
Volltext **dieses** Dokuments, die Parteinamen dieses Dokuments und seines Falls sowie zu
jeder Partei die **Namen** möglicher Treffer aus den gespeicherten Stammdaten (durch
Platzhalter ersetzt, soweit im Wörterbuch vorhanden; Namen von Institutionen im Klartext).
**Kontaktdaten und CNP aus den gespeicherten Stammdaten werden nicht übermittelt.** Sind
kostenlose Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann dieser Aufruf über diese
laufen. Die Antwort wird stets nur zu einem Vorschlag, den der
Benutzer im Monitor annehmen muss.

### 4.6 Textverarbeitung (KI-Unterstützung im Text)

- **Auswahl überarbeiten:** der ausgewählte Satz/Absatz/Abschnitt (mit
Auszeichnung) **zuzüglich der ersten 6.000 Zeichen des gesamten Dokuments als Kontext**
und die Anweisung des Benutzers — mittlere Stufe, pseudonymisiert.
- **Gliederung/Inhaltsverzeichnis:** faktisch das gesamte Dokument als indizierte Zeilenliste
(kurze Zeilen vollständig, lange Zeilen auf 80 Zeichen gekürzt), begrenzt auf 40.000
Zeichen — mittlere Stufe, pseudonymisiert.
- **Vorverarbeitung für die Vorlesefunktion:** beim Vorlesen eines Dokuments wird **jeder
Satz einzeln im Klartext an die kleine Stufe gesendet**, um
Abkürzungen und Zahlen auszuschreiben — **ohne Pseudonymisierung** (Identifikationsnummern
müssen unverändert zurückkommen, um korrekt vorgelesen zu werden). Aktenstempel und Verweismarkierungen
werden zuvor lokal entfernt. Das Starten der Vorlesefunktion ist der Zeitpunkt der
Zustimmung.

Keiner der Aufrufe der Textverarbeitung zeigt einen gesonderten Zustimmungsdialog
an oder schreibt Einträge in das Audit-Protokoll (Umgehung des Routers, siehe Abschnitt 3).
### 4.7 Red/Blue Team-Prüfung und Dialog-Zusammenfassung (API)

Zwei weitere API-Flüsse gehören zur Entwurfserstellung. **Red/Blue Team:** hat der Benutzer
es für den aktiven Anbieter eingeschaltet (Schalter neben dem API-Schlüssel; ein gespeicherter
Schlüssel ist erforderlich), wird jedes förmliche Dokument, das über
`deliver_file` übergeben wird — aus dem In-App-Chat und aus der Desktop-KI-Bridge
gleichermaßen —, von demselben Anbieter ein weiteres Mal aus Sicht des gegnerischen Rechtsvertreters gelesen
(mittlere Stufe). Übermittelt werden: der Entwurfstext, das Datum und der Rechtsraum
des Falls; pseudonymisiert über den Router und im Audit-Protokoll erfasst wie jeder Router-Aufruf;
kein gesonderter Dialog — der Schalter ist die Zustimmung; höchstens zwei Runden je
Datei, nach der zweiten Runde wird die Datei in jedem Fall übergeben, wobei der
Bericht des Prüfers für den Benutzer beigefügt wird. Die Red/Blue Team-Prüfung läuft
**nie** über die kostenlosen Hintergrund-Anbieter (Abschnitt 1). **Dialog-Zusammenfassung:** in langen Chat-Sitzungen
wird der ältere Teil des Dialogs (nur die Fragen des Benutzers und die
endgültigen Antworten des Modells, niemals Werkzeugergebnisse) vom aktiven Anbieter
(kleine Stufe, im Hintergrund) zu einer Zusammenfassung von 2.000 Zeichen verdichtet, die den Rohverlauf
ersetzt; sie wird verschlüsselt im Zwischenspeicher abgelegt und jedes Mal
überschrieben. Sind kostenlose Hintergrund-Anbieter eingeschaltet (Abschnitt 1), kann die
Zusammenfassung über diese laufen.

### 4.8 KI-Chat (extern, API)

Zustimmung einmal pro Chat-Sitzung; mittlere Stufe mit automatischer Eskalation zur
großen Stufe (der gesamte Kontext wird dann erneut gesendet); pseudonymisiert; jede Runde
im Audit-Protokoll erfasst. Jeder Durchgang übermittelt: den System-Prompt (statische Regeln), den **aktuellen GUI-Kontext**
(aktueller Screen, geöffneter Fall/Mandant einschl. Name des Mandanten — durch Platzhalter ersetzt),
bis zu **10 KI-Gedächtniseinträge** des geöffneten Mandanten, den jüngsten Dialog,
begrenzt auf 6.000 Zeichen, zuzüglich einer Zusammenfassung älterer Durchgänge von 2.000 Zeichen
(4.7) sowie die Liste der Zwischenspeicher-Dateien des Chats. Jedes Werkzeug, das das Modell aufruft,
gibt sein Ergebnis in die API-Konversation zurück — einschließlich Dokument-Volltexten
(begrenzt auf 10.000 Zeichen je Element; größere Ergebnisse werden in den
verschlüsselten Zwischenspeicher geschrieben und abschnittsweise gelesen), E-Mail-Nachrichtentexten und
Auszügen aus dem Tagesprotokoll. Seit September 2026 verwendet der Chat dieselbe Werkzeugschicht
und dieselben Auslieferungsprüfungen wie die Desktop-KI-Bridge (4.9): Prüfung von
Schriftsätzen, Red/Blue Team (4.7) und Übergabe über den Export-Dialog —
was das System verlässt, ist eine einreichungsfähige Vorlage. Die lokale Chat-Schicht
beantwortet Routineanfragen ohne jede Übermittlung.

Zwei Komfortwerkzeuge verdienen ausdrückliche Erwähnung. **`get_weather`**
ruft aktuelle Wetterdaten für einen benannten Ort von dem Nicht-LLM-Dienst
Open-Meteo ab (Abschnitt 7) — an diesen Dienst werden nur der Ortsname bzw. dessen Koordinaten übermittelt,
niemals Fall- oder Personendaten. **`get_my_location`**
antwortet ausschließlich aus der **jüngsten lokal gespeicherten**
Sicherheits-Momentaufnahme (Abschnitt 8): Die Anfrage der KI löst **keine neue externe Abfrage** aus —
sie liest lediglich, was bereits auf dem Datenträger vorhanden ist. Wie bei jedem Werkzeug fließt das, was diese Werkzeuge
zurückgeben, in die KI-Konversation zurück, d. h. an den KI-Anbieter.

### 4.9 Bridge zu einer lokalen Desktop-KI (Claude Desktop / Claude Code / ChatGPT
Desktop / Qwen Desktop / Kimi Desktop) — OPTIONALE Zusatzmodule

**Jeder Desktop-KI-Zugang ist ein optionales, gesondert erworbenes Modul.**
Er besteht nur dort, wo die Kanzlei das jeweilige Bridge-Modul erworben und
installiert hat; ohne jedes Modul bleibt der Bridge-Abschnitt in der
Konfiguration gesperrt, der lokale Endpunkt startet nie, und keiner der in
diesem Abschnitt beschriebenen Datenflüsse kann stattfinden. Derselbe lokale
STDIO-MCP-Server kann bei **Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** und/oder **Kimi Desktop** registriert werden — die nachfolgend beschriebene
Funktionsweise ist für alle identisch; lediglich der empfangende Anbieter unterscheidet sich.

**Dieser Kanal überträgt unbearbeitete, nicht pseudonymisierte
Falldaten.** Das ist sein Zweck: Die eigene Desktop-KI-Sitzung des Benutzers erstellt
einreichungsfähige Vorlagen und benötigt daher echte Namen und Nummern.
- Die Desktop-KI (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop oder Kimi Desktop)
verbindet sich über eine lokale Bridge mit der laufenden App; die Verbindung verlässt den
Rechner nicht.
- **Websites mit Zugangsprüfung.** Verlangt eine Website eine Bestätigung, bevor sie
ihre Inhalte freigibt, öffnet IRONSTICK die Seite in einem eigenen Fenster; der
Benutzer bestätigt dort selbst. Den Inhalt der Seite liest anschließend die Desktop-KI —
er fließt wie jedes andere Werkzeugergebnis an ihren Anbieter.
- Beim ersten Datenzugriff je Programmlauf zeigt IRONSTICK ein blockierendes
Zustimmungs-Modal an; eine Ablehnung sperrt den Kanal für 10 Minuten. Nach der Freigabe ist der Kanal
für den Rest des Programmlaufs geöffnet.
- Über 200 Werkzeuge — mehr als 100 davon Lese-Werkzeuge — stellen Chroniken, Volltexte, E-Mails,
Tagesprotokolle, Fristen, Stammdaten, ganze Fälle (in Teilen) und Ausgabeformate
bereit; als geheim markierte Dokumente sind ausgenommen. Schreibpfade unterliegen einem Prüf-Tor
(Vorschläge zu Stammdaten/Beziehungen landen im Konsistenz-Monitor;
von der KI vorgeschlagene Änderungen an fallgebundenen KI-Instruktionsnotizen werden als
Rot/Grün-Diff innerhalb von IRONSTICK angezeigt und erst übernommen, nachdem der Benutzer
ausdrücklich zugestimmt hat — die Entscheidung wird an die KI zurückgemeldet) oder erfolgen ausdrücklich (Übergabe in
die Textverarbeitung, Dateiauslieferung, Navigation nur bei gesonderter
Erlaubnis). Dasselbe Prüf-Tor-Muster gilt für die beiden neueren Schreibpfade:
Chronik-Einträge werden niemals von der KI geschrieben — sie FÜLLT lediglich das Erfassungsformular
VOR, das der Benutzer selbst vervollständigt und speichert; und ein von der KI geheilter Dokument-Volltext
(OCR-Neuscan, nächster Aufzählungspunkt) ersetzt den gespeicherten Volltext erst, nachdem
der Benutzer den vollständigen Text in einem Bestätigungsdialog gesehen und gespeichert hat.
- **Heilung durch OCR-Neuscan (lokal) und die PDF-Übergabe (vom Benutzer veranlasst).**
Ist ein gespeicherter Volltext abgeschnitten oder durch einen alten OCR-Lauf unbrauchbar, kann die KI
einen erneuten Scan anfordern: Der Benutzer wählt die Seiten aus, der Neuscan läuft **lokal**
(kein neuer externer Empfänger), und beide Textfassungen werden im lokalen
Zwischenspeicher bereitgestellt; was die KI daraus liest, fließt wie jedes
andere Werkzeugergebnis an ihren Anbieter. Als äußerstes letztes Mittel — nur nach einem solchen Neuscan und
nur innerhalb harter, von der Bridge durchgesetzter Grenzen (≤ 10 MB, ≤ 90 Seiten) —
kann die KI den Benutzer bitten, ihr die **Original-PDF-Datei** zu übergeben: IRONSTICK
öffnet lediglich den Eintrag; der Benutzer speichert die PDF selbst über das Büroklammer-Symbol
und zieht sie in den Desktop-KI-Chat. Dadurch wird das Dokument
**als Datei** (einschließlich Stempeln, Unterschriften und Bildern) an den Anbieter dieser KI
übertragen — dies geschieht ausschließlich durch eigenes, bewusstes Handeln des Benutzers, niemals
automatisch, und als geheim markierte Dokumente sind von vornherein vom gesamten
Neuscan-Kanal ausgenommen.
- **Lokaler KI-Zwischenspeicher (Datenminimierung).** Jeder Werkzeugaufruf kann
sein vollständiges Ergebnis in eine lokale, flüchtige Zwischenspeicher-Datei umleiten (`to_scratch`);
die KI erhält dann nur den Dateipfad und die Größe — keine Vorschau — anstelle
des Volltexts. Lokale Bearbeitungswerkzeuge
(Suchen/Ersetzen/Einfügen/Diff/Normalisieren) bearbeiten diese Dateien auf dem Rechner des Benutzers,
und Auslieferungs-/Aktualisierungswerkzeuge verarbeiten sie über den Pfad — umfangreiche Inhalte können
so transportiert und bearbeitet werden, **ohne überhaupt an den KI-Anbieter
übertragen zu werden**. Vollständige Fall-Abzüge (`dump_case_to_scratch`)
und das Sitzungsstart-Protokoll in einem Aufruf werden ebenfalls unmittelbar in diesen
lokalen Bereich geschrieben; nur die Teile, welche die KI anschließend liest, fließen an ihren Anbieter.
IRONSTICK überwacht zusätzlich die Aktualität dieser Dateien und macht sie ungültig,
sobald sich die zugrunde liegenden Daten ändern. Der Zwischenspeicher-Ordner befindet sich innerhalb des
Datenverzeichnisses und bleibt über Sitzungen hinweg erhalten (er ist der Arbeitskontext der KI);
unberührte Dateien werden nach 180 Tagen gelöscht, und es entsteht kein neuer externer Empfänger.
- **Der Zwischenspeicher ist ein verschlüsselter Tresor (seit September 2026).**
Jede Datei im Zwischenspeicher ist im Ruhezustand AES-256-verschlüsselt, mit derselben
Schlüsselableitung wie die Datenbank und der Dokumentenspeicher. Lesen und Schreiben
erfolgen ausschließlich über das Tor von IRONSTICK; eine Klartextdatei, die auf
anderem Weg in den Speicher gelangt (ein Dateisystem-Werkzeug der Desktop-KI, eine manuelle Kopie), wird
zurückgewiesen, entfernt und der KI als Regelverstoß gemeldet; Dateien verlassen den
Speicher ausschließlich über den Export-Dialog von IRONSTICK, niemals in einen Download-Ordner.
Zusammen mit der verschlüsselten Datenbank, dem Dokumentenspeicher und der Konfigurationsdatei
schließt dies die letzte Lücke auf dem lokalen Rechner: **Keine Falldaten liegen
unverschlüsselt auf dem Datenträger des Benutzers — nicht einmal die Arbeitsdateien der KI**. Ein kopierter
Datenträger, ein verlorener Stick oder ein Sicherungsarchiv in falschen Händen liefert ausschließlich
Chiffretext.
- Werkzeugergebnisse werden an den Desktop-KI-Client des Benutzers und von dort
an **dessen Anbieter** übermittelt: Anthropic für Claude (im Rahmen des Claude-Abonnements
des Benutzers und der Bedingungen von Anthropic), OpenAI für ChatGPT (im Rahmen des
ChatGPT-Abonnements des Benutzers und der Bedingungen von OpenAI), Alibaba Cloud/Qwen für Qwen
Desktop (im Rahmen des Qwen-Kontos des Benutzers und der Bedingungen von Qwen) oder Moonshot AI für Kimi
Desktop (im Rahmen des Kimi-Kontos des Benutzers und der Bedingungen von Moonshot AI). IRONSTICK schreibt keine
Audit-Protokoll-Zeilen für den Bridge-Verkehr; die obere Leiste zeigt je
aktiver KI ein pulsierendes Logo (Claude-Zeichen, ChatGPT-Zeichen, Qwen-Zeichen, Kimi-Zeichen) — gleichzeitiger Zugriff ist
möglich und wird jeweils gesondert signalisiert. Die Bridge selbst führt ein
**rein lokales Diagnoseprotokoll** ihrer Werkzeugaufrufe — Zeitstempel, Werkzeugname,
Erfolg/Fehlschlag und Antwortgröße, **niemals Inhalte** — in einer Klartextdatei
neben dem Bridge-Programm. Dieses Protokoll wird nirgendwohin übertragen und dient
ausschließlich der Fehlerbehebung.
- Das gemeinsame KI-Gedächtnis speichert verdichtete Erkenntnisse (je ≤1.000 Zeichen,
mandanten-/fallgebunden, automatisch ablaufend) lokal; sein Inhalt ist für jeden KI-Kanal
sichtbar und wird übertragen, sobald diese Kanäle ihn lesen.
- Das Peer-Review zwischen den Desktop-KIs läuft über IRONSTICK, nicht unmittelbar
zwischen den Anbietern: Eine KI hinterlegt ein Arbeitsergebnis (z. B. einen Entwurf) in einem
**lokalen, kurzlebigen Austauschpuffer** (Klartextdateien auf dem Rechner des Benutzers,
gelöscht, wenn die Aufgabe geschlossen wird, und bei jedem Neustart der App vollständig bereinigt) sowie eine
Aufgabennotiz; die andere KI liest diese, wenn der Benutzer sie dazu anweist. Dadurch entsteht
**kein neuer externer Empfänger** — was die prüfende KI liest, wird genau wie jedes andere
oben beschriebene Werkzeugergebnis an **ihren eigenen** Anbieter übertragen, zu dessen
Bedingungen. Inhalte gelangen niemals von einem Anbieter zum anderen.

### 4.10 Audio-Transkription (Sprecherzuordnung)

Die Spracherkennung läuft vollständig lokal; die Aufnahme selbst verlässt den
Rechner nie. Hat der Benutzer mehr als einen Sprecher angegeben, ordnet anschließend
die KI die erkannten Zeilen den Sprechern zu: je Aufruf (mittlere Stufe) höchstens 60
Zeilen erkannter Text, dazu die letzten 12 bereits zugeordneten Zeilen als Kontext und
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
| Entitäten | **alle Personen/Entitäten der gesamten Kanzlei** (nicht nur dieses Mandanten) einschl. CNP/CUI, Geburtsdatum, vollständiger Kontaktdaten, Beruf, Fahrzeug — zuzüglich der gespeicherten Analyseblöcke (Einschätzung, Schwachstellen, Wohnorte, Finanzen, soziales Umfeld, Quellen) |
| Institutionen, Fristen | alle Institutionen; aktive Fristen mit Aktenzeichen und Mandantenname |
| Mail | die 100 neuesten E-Mails **kanzleiweit**: Absender, Empfänger, Betreff, Dateinamen der Anhänge, Auszug ≤500 Zeichen (keine vollständigen Nachrichtentexte) |
| Tagesprotokoll | letzte 10 Tage, kanzleiweit, einschl. der Fallchronologie dieses Zeitraums |
| Je Fall | ein Dossier je Fall: die vollständige Chronik **mit Dokument-Volltexten** (Budget ~170 KB je Datei, danach Kompaktform), Kennungen von Mandant und Parteien einschl. CNP; zuzüglich aller Fall-Hintergrundnotizen ohne Begrenzung |
| Instruktionsdateien | fünf Dokumente mit Arbeitsregeln — keine personenbezogenen Daten |

**Was geschieht, wenn dieses ZIP einem fremden LLM zugeführt wird:**
Der Benutzer überträgt persönlich und im Klartext wesentliche Teile der gesamten
Kanzlei — Mandantenidentitäten mit nationalen Identifikationsnummern, Profile Dritter
einschließlich sensibler Einschätzungen, kanzleiweite Korrespondenz-Metadaten und Akten
— an diesen Anbieter. Ab diesem Zeitpunkt werden die Daten zu den Bedingungen des
fremden Anbieters (Nutzung für Training, Aufbewahrung, Rechtsordnung) vollständig
außerhalb der Kontrolle von IRONSTICK verarbeitet. IRONSTICK zeigt vor dem
Export (einmal je Programmlauf) einen Datenschutzhinweis an und bietet den Export auch zu Google Drive an, wodurch
die Dateien zusätzlich bei Google abgelegt werden. Der Benutzer handelt als übermittelnder
Verantwortlicher im Sinne der DSGVO und muss vor dem Hochladen eine Rechtsgrundlage sicherstellen (z. B. Art. 6,
berufsrechtliche Verschwiegenheitsregeln).
Als geheim markierte Dokumente sind von Fristen, Tagesprotokollen und
Fall-Dossiers ausgenommen.

## 6. Übersichtsmatrix

| Datenfluss | Was abfließt (Form) | Pseudonymisiert | Eigener Zustimmungsdialog | Audit-Protokoll |
| --- | --- | --- | --- | --- |
| Dokumentenerfassung (4 Aufrufe) | OCR-/Dokumenttext ≤30k, Fall-/Namenslisten | ja | ja — einmal pro Programmlauf | ja |
| E-Mail-Triage (Bildschirmansicht) | Absender/Betreff/Textauszug ≤1.5k (keine Fallliste) | ja | ja — einmal pro Sitzung | ja |
| E-Mail-Triage (Hintergrund) | ebenso | ja | nein (Monitor-Schalter = Zustimmung) | ja |
| Personenrecherche Stufe 1 | Klarname (Websuche) | nein — konzeptionsbedingt | ja — einmal pro Sitzung | ja (im Klartext) |
| Personenrecherche Stufe 2/3 | Seitentexte ≤8k / ≤6k pro Quelle | ja | dieselbe Zustimmung | ja |
| Automatisches Ausfüllen Person/Institution | eingegebener Name (Websuche) | nein — konzeptionsbedingt | ja — einmal pro Sitzung | ja (im Klartext) |
| KI-Import Tagesprotokoll | eingefügter Rohtext ≤200k | ja | ja | ja |
| Konsistenzmonitor | je neuem Dokument: dessen Kontaktabschnitte + Namen möglicher Treffer (keine Kontaktdaten/CNP aus den Stammdaten) | ja (Institutionsnamen im Klartext) | nein (gedrosselter Hintergrundprozess) | ja |
| Textverarbeitung: Überarbeiten / Strukturieren | Auswahl + 6k Kontext / Dokumentzeilen ≤40k | ja | nein (Schaltfläche = Zustimmung) | nein |
| Vorverarbeitung für das Vorlesen | jeder Satz, Klartext | nein | nein (Start = Zustimmung) | nein |
| Red-/Blue-Team-Prüfung (API) | Entwurfstext + Datum + Rechtsraum, pro Runde (max. 2) | ja | nein (Schalter = Zustimmung) | ja |
| Dialogzusammenfassung (API) | ältere Dialogrunden (nur Benutzer/Assistent) | ja | nein (Teil der Chat-Zustimmung) | ja |
| KI-Korrektur Datei→Markdown | konvertierter Text | ja | nein | nein |
| KI-Finder der Schwärzung | bereits geschwärzter Text; Antworten enthalten Klarnamen Dritter | aus — konzeptionsbedingt | Umschalter = Zustimmung | ja |
| KI-Chat (extern) | Prompt + GUI-Kontext + Gedächtnis + 6k Verlaufsende + 2k Zusammenfassung + Werkzeugergebnisse ≤10k/Element | ja | ja — einmal pro Sitzung | ja |
| Desktop-KI-Bridge (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | unverarbeitete Werkzeugergebnisse (vollständige Falldaten) | nein — konzeptionsbedingt | ja — einmal pro Programmlauf, 10-minütige Sperre bei Ablehnung | nein (App-seitig) |
| Audio-Transkription: Sprecherzuordnung | erkannter Text, je Aufruf ≤60 Zeilen + 12 Zeilen Kontext — die Aufnahme nie | ja | ja | ja |
| Kostenlose Hintergrund-Anbieter (Groq, OpenRouter, Mistral) — nur wenn eingeschaltet | dieselben Inhalte wie die jeweilige Hintergrundaufgabe; nie Chat, Schriftsatz oder Red/Blue Team | wie die jeweilige Aufgabe | nein (Schalter je Anbieter = Zustimmung) | ja |
| KI-Instruktions-ZIP | Kanzleiexport im Klartext (vom Benutzer veranlasster Upload) | nein | Warnung einmal pro Programmlauf | entfällt |

## 7. Externe Dienste ohne LLM (der Vollständigkeit halber)

![IRONSTICK Client, Internet, Standort-Symbol und Wetter-Symbol](https://www.ironstick.legal/img/68_external_services.png)
Unabhängig von jedem LLM kontaktieren die folgenden Funktionen externe Dienste mit
den minimal erforderlichen Daten: Nummernvalidierung (EU VIES, EORI, GLEIF,
Handelsregister — die zu prüfende Nummer), Geokodierung von Adressen (OpenStreetMap
Nominatim — die Adresse), die direkten Webabfragen der Personensuche (der Name), IMAP (Ihr Mailserver) sowie
optionale Exporte nach Google Drive (die exportierten Dateien). Keiner dieser Vorgänge bezieht
den KI-Anbieter ein.

Zwei weitere Dienste erhalten ebenso minimale Daten:

- **ipwho.is (Geo-IP-Abfrage)** — einmal pro Programmstart fragt IRONSTICK im Rahmen des
lokalen Sicherheits-Snapshots (Abschnitt 8) bei diesem Dienst die
**öffentliche** IP-Adresse des Rechners und einen groben Standort (Stadt, Land, ISP) ab.
Die ausgehende HTTPS-Anfrage enthält **keinerlei personenbezogene Nutzdaten** —
wie jeder Webserver sieht der Dienst lediglich die IP-Adresse, von der die
Anfrage eingeht. Die Antwort wird ausschließlich lokal gespeichert und
nirgendwohin sonst übermittelt.
- **Open-Meteo (Wetter)** — auf Anforderung fragt das KI-Wetterwerkzeug
(`get_weather`, Abschnitt 4.8) aktuelle Wetterdaten für einen
benannten Ort ab. Übermittelt werden nur der Ortsname bzw. dessen Koordinaten — niemals
Fall-, Mandanten- oder Personendaten.

Keiner dieser Dienste bezieht den KI-Anbieter ein.

## 8. Lokale Speicherung, Integrität und Kontrolle durch den Benutzer

![IRONSTICK Client mit TOTP-Zugangssperre; Dokumente, Zwischenspeicher und Datenbank mit AES-256 verschlüsselt](https://www.ironstick.legal/img/69_local_encryption.png)
Unabhängig von den vorstehenden KI-Kanälen gilt für **sämtliche**
Daten, die IRONSTICK vorhält, Folgendes:

- **Ausschließlich lokale Speicherung.** Der gesamte Datenbestand — Datenbank, Dokumentdateien,
Medien, Transkripte, Konfiguration — befindet sich in einem einzigen Datenverzeichnis unter
einem vom Benutzer festgelegten Pfad. IRONSTICK erfordert kein Cloud-Konto und betreibt keinen
Server; der Hersteller besitzt zu keinem Zeitpunkt eine Kopie von Benutzerdaten. Betreibt eine Kanzlei
den optionalen IRONSTICK SERVER (Abschnitt 9), so ist auch dieser Server ein eigenes Gerät der
Kanzlei im eigenen Netzwerk der Kanzlei — am Zugriff des Herstellers ändert sich dadurch nichts.
- **Datenbank im Ruhezustand verschlüsselt (AES-256).** Die Datenbank — der Bestand
an Mandanten, Fällen, Chronik, E-Mails, Fristen, Transkripttexten und dem
Gedächtnis der KIs — wird mit AES-256 verschlüsselt gespeichert, jede Seite einzeln und
mit einem Integritätssiegel je Seite. Der Schlüssel wird von der Anwendung zur
Laufzeit abgeleitet und niemals auf Datenträger oder in die Konfiguration geschrieben, sodass eine Datenbankdatei,
die vom Medium oder aus einem Backup-Archiv entnommen wird, ohne
IRONSTICK nichts preisgibt. Dies ist eine technische Maßnahme im Sinne von Art. 32 DSGVO, die
ohne jede Konfiguration durch den Benutzer greift und nicht abgeschaltet werden kann.
- **Dokumente im Ruhezustand verschlüsselt (AES-256).** Der Dokumentenspeicher — die
Original-PDFs, Scans, Bilder, Audio- und Transkriptdateien — wird auf dieselbe Weise
Datei für Datei verschlüsselt, mit einem Integritätssiegel, das Veränderungen erkennt.
Das Lesen erfolgt über ein einziges Tor, das die angeforderte Datei
in eine temporäre Arbeitskopie entschlüsselt und diese Kopien entfernt, wenn die
Anwendung geschlossen oder gestartet wird. Backups und Fallpakete enthalten die Dokumente
in ihrer verschlüsselten Form. Grenzen, klar benannt: Die Arbeitskopien der
laufenden Sitzung liegen im temporären Ordner im Klartext vor (unter Android liegt dieser
Ordner im gemeinsam genutzten Speicher); Exporte und ausgehende E-Mails sind konzeptionsbedingt
Klartext; und die Verschlüsselung schützt gegen das Auslesen des Mediums außerhalb von
IRONSTICK, nicht gegen einen berechtigten Benutzer der Anwendung.
- **Zugangskontrolle beim Start (TOTP).** Sobald der Lizenzschlüssel
akzeptiert ist, zeigt die Anwendung nichts außer einer Code-Abfrage an, bis der Benutzer
den aktuellen sechsstelligen zeitbasierten Einmalcode aus einer
Authenticator-App (RFC 6238) eingibt. Das den Codes zugrunde liegende Geheimnis wird zur Laufzeit aus
dem Lizenzschlüssel abgeleitet und niemals auf Datenträger geschrieben; gespeichert wird lediglich ein
nicht geheimer Fingerabdruck der bestätigten Einrichtung, damit der QR-Code
nach einem Schlüsselwechsel erneut angezeigt wird. Wiederholte Falscheingaben lösen eine zunehmende
Wartezeit aus. Die Desktop-KI-Konnektoren erhalten keine Falldaten, solange die Anwendung
gesperrt ist. Die Wiederherstellung erfolgt über den Lizenzschlüssel, wodurch der Lizenzschlüssel zum
Hauptzugangsnachweis der Installation wird — seine Verwahrung liegt in der
Verantwortung des Betreibers. Die Konfigurationsdatei (API-Schlüssel, E-Mail-Zugangsdaten,
Serverzugang) liegt mit demselben Mechanismus wie die
Dokumente AES-256-verschlüsselt vor und wird ausschließlich im Arbeitsspeicher entschlüsselt.
- **Vom Benutzer kontrollierter Speicherort.** Der Datenpfad wird bei der
Einrichtung gewählt und kann jederzeit geändert werden — auch auf ein Wechselmedium wie
einen verschlüsselten USB-Stick oder eine verschlüsselte externe Festplatte. Die Anwendung folgt schlicht
dem konfigurierten Speicherort; die Verschlüsselung des Mediums (z. B. mit der
Laufwerksverschlüsselung des Betriebssystems) liegt in der Hand des Benutzers und wird
für tragbare Medien empfohlen. Beim Wechsel des Speicherorts in der Konfiguration prüft
IRONSTICK das Ziel und lehnt Netzlaufwerke und mit einer Cloud synchronisierte Ordner
(OneDrive, Google Drive, Dropbox) ab; kopiert wird mit Prüfsummenvergleich, umgeschaltet
erst nach erfolgreicher Verifikation, und der alte Ordner bleibt umbenannt erhalten. Eine Folge ist bewusst abzuwägen: Liegt das
gewählte Datenverzeichnis in einem mit einer Cloud synchronisierten Ordner (z. B. Google
Drive), wird der gesamte Datenbestand **einschließlich der Konfigurationsdatei mit dem KI-Zugangsschlüssel
und den E-Mail-Zugangsdaten** zu diesem Cloud-Anbieter
nach dessen eigenen Bedingungen synchronisiert — das Datenverzeichnis dort abzulegen, ist
Entscheidung und Verantwortung des Benutzers.
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
sodass Empfänger die Dateien unabhängig verifizieren können. Dadurch wird eine Manipulation
offenkundig; wie jeder Fingerabdruck-Mechanismus verhindert er Änderungen
an Dateien auf dem Datenträger nicht physisch — er macht sie beweisbar.
- **Backups nach Ermessen des Benutzers.** Eine integrierte Backup-Funktion schreibt
eine vollständige Kopie der Daten (vollständiges Backup oder reines Daten-Backup) als einzelnes ZIP-Archiv
an ein beliebiges vom Benutzer gewähltes Ziel und stellt auf Anforderung aus einem solchen Archiv
wieder her. Wie oft Backups erstellt werden, wo sie aufbewahrt werden, wie lange sie
aufbewahrt werden und ob die Archive zusätzlich verschlüsselt werden, liegt vollständig in der
Entscheidung des Benutzers (die Datenbank und die Dokumentdateien in jedem Archiv sind in jedem Fall AES-256-verschlüsselt)
—
IRONSTICK gibt keinen Zeitplan vor und übermittelt Backups nirgendwohin.
- **Erzeugte Dokumente gehören dem Benutzer.** Der Benutzer kann jederzeit
Dokumente erzeugen — Schriftsätze, Briefe, Dossiers, Listen, Exporte — und
herunterladen: Sie werden in den lokalen Ordner „Dokumente“ geschrieben oder, sofern der
Benutzer das Datenverzeichnis in einem Google-Drive-Ordner abgelegt hat oder ausdrücklich
Google Drive als Ziel wählt, in das eigene Google-Drive-Konto des Benutzers.
**Die Rolle von IRONSTICK endet mit der Erzeugung der Datei.** Was danach mit einem
erzeugten Dokument geschieht — Drucken, Einreichen bei einem Gericht, Versand per E-Mail,
Hochladen zu einem beliebigen Dienst, Weitergabe an Dritte —, erfolgt durch den Benutzer und
liegt allein in der Verantwortung des Benutzers.

**Zuweisung der Verantwortung.** Da IRONSTICK
alles lokal speichert und Daten nur auf den in den Abschnitten
1–7 dokumentierten Wegen übermittelt — jeder davon entweder pseudonymisiert, an eine Zustimmung gebunden oder durch eine
bewusste Handlung des Benutzers ausgelöst —, ist der Betreiber der Kanzlei alleiniger
Verantwortlicher: Er wählt das Speichermedium und dessen Verschlüsselung, verwaltet Backups und
bewahrt sie auf, entscheidet, welche KI-Funktionen aktiviert sind, erteilt oder verweigert jede
Zustimmung und entscheidet allein darüber, was mit jedem Dokument, jedem Export oder jedem Backup geschieht,
das die Software erzeugt. KI-generierte Inhalte — Entwürfe, Zusammenfassungen, Bewertungen,
Klassifizierungen — sind stets ein **Vorschlag**, den der Benutzer fachlich
prüfen muss, bevor er sich darauf stützt oder ihn versendet. Dieses Dokument dient dazu, dass jede
dieser Entscheidungen in voller Kenntnis der tatsächlichen
Datenflüsse getroffen werden kann.
## 9. Der optionale Kanzlei-LAN-Server (IRONSTICK SERVER)

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
als ein Archiv über einen Zwischenablagebereich des Servers («Spool»); das Paket
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
(«Entitätennetz») — die Stammdatensätze zu **Personen und Unternehmen,
Institutionen, den Beziehungen zwischen ihnen und den Personenanalysen**, die
auf den Arbeitsplätzen geführt werden, zusammen mit der Warteschlange der
zwischen den Benutzern ausgetauschten Änderungsvorschläge; (k) die
**Bewertungen von Gerichtsentscheiden** — je Arbeitsplatz und Entscheid: Gericht,
Spruchkörper und Besetzung, die Namen der Richter und Gerichtsschreiber,
Entscheidnummer, Datum, Aktenzeichen, die internen Fall- und Mandantennummern des
bewertenden Arbeitsplatzes, gemessene Textanteile und die von der KI verfasste
englische Analyse des Entscheids und der Eingaben beider Seiten. Siehe die nächsten
Punkte.
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
- **Vollständige Mandantennamen in Zeiterfassungsdaten.** Die
Zeiterfassungsübersicht zeigt die Arbeitszeit je Fall und je Mandant, was
bedeutet, dass Mandantennamen auf dem NAS gespeichert werden. Dies verbleibt
innerhalb der eigenen Infrastruktur der Kanzlei und ihres bestehenden
Vertraulichkeitsregimes — Kanzleien sollten das NAS jedoch in ihr Verzeichnis
der technischen und organisatorischen Maßnahmen aufnehmen (Zugriffskontrolle
in DSM, Volume-Verschlüsselung, Backup-Richtlinie), genau wie bei jedem anderen
Datei-Server der Kanzlei.

## Anhang — Musterklausel für Ihre Mandanten-Datenschutzerklärung (Vorschlag)

Der folgende Text ist ein Formulierungsvorschlag, den eine Kanzlei, die
IRONSTICK einsetzt, in ihre eigene Mandanten-Datenschutzerklärung übernehmen kann.
Er ist so verfasst, dass er den oben beschriebenen Datenflüssen genau entspricht
— er verspricht keinen weitergehenden Schutz, als die Software tatsächlich
bietet. Er verzichtet bewusst auf Zitate von Gesetzesartikeln, damit er in
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
KI-Dienstleister (je nach Verfügbarkeit: Alibaba Cloud, Moonshot AI, OpenAI oder Anthropic, über deren Programmierschnittstellen)
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
ausschließlich unter unserer unmittelbaren Aufsicht verwendet.]

**Der Dienstleister.** Nach den für uns geltenden Bedingungen des
Dienstleisters werden über die Programmierschnittstelle übermittelte Inhalte
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
jeder einzelnen Funktion) und gibt das ausgelieferte Verhalten der beschriebenen
Version wieder. Die Verarbeitung durch den KI-Anbieter selbst — Aufbewahrung,
Verwendung für Training, Unterauftragsverarbeiter, Rechtsordnung — richtet sich
ausschließlich nach den Bedingungen des Anbieters; die Links zu den
Nutzungsbedingungen und Datenschutzerklärungen jedes Anbieters stehen im
jeweiligen Abschnitt der KI-Konfiguration (Groq: groq.com/terms-of-use; OpenRouter: openrouter.ai/terms; Mistral: legal.mistral.ai/terms/commercial-terms-of-service; Alibaba Cloud: alibabacloud.com/help/en/legal;
Moonshot AI: platform.kimi.ai/docs/agreement; OpenAI: openai.com/policies).
Für die Dienste von Anthropic sind in ihrer jeweils aktuellen Fassung
maßgeblich: die Commercial Terms of Service
([anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms)),
die Usage Policy
([anthropic.com/legal/aup](https://www.anthropic.com/legal/aup)) und
die Privacy Policy
([anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy)).

##### Kontakt

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Code scannen, um unsere Kontaktkarte zu speichern — Telefon, E-Mail und Website.

Nehmen Sie gerne direkt per WhatsApp oder Telegram Kontakt auf — auch ein Anruf ist willkommen. Gesprochene Sprachen: Deutsch, Englisch, Rumänisch.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Nachricht

### Interesse an IRONSTICK oder einer Demo? Schreiben Sie uns.
