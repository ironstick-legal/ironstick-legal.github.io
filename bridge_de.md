# Kompendien - Bridge

> Die IRONSTICK Desktop-KI-Bridge: Claude, ChatGPT, Qwen oder Kimi Desktop mit Ihren Akten verbinden — Lizenzierung, Installation, die deterministischen Prüftore und der vollständige Werkzeugkatalog.

Originalseite: https://www.ironstick.legal/bridge_de.html

---

Die IRONSTICK Bridge lässt die Desktop-KI, die Sie ohnehin nutzen — Claude
Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop oder Kimi Desktop —
unmittelbar an Ihren Fallakten arbeiten: lokal auf demselben Rechner und hinter
siebzehn deterministischen Sicherungen. Der erste Datenzugriff in jedem
Programmlauf braucht Ihre Zustimmung, jeder Zugriff wird in der Menüleiste
angezeigt, und Änderungen an Stammdaten, Chronik, Kalender und Instruktionen
werden erst nach Ihrer Freigabe wirksam. Dieses Kompendium behandelt die
Lizenzierung, das Verhältnis zum integrierten IRONSTICK-KI-Chat, die
Installation, die Zugriffsanzeige, die Sicherungen, typische Anfragen und den
vollständigen Werkzeugkatalog. Windows-Ausgabe.

**Auf einen Blick**

- **Für** Anwältinnen und Anwälte sowie Parteien, die ihren Fall selbst
führen — an einem einzelnen Arbeitsplatz oder in einer Kanzlei, die über
IRONSTICK SERVER verbunden ist.
- **Lokal:** Das Bridge-Programm der Desktop-KI und IRONSTICK kommunizieren
über eine tokengeschützte Verbindung auf demselben Rechner; nur die Web- und
Register-Werkzeuge greifen auf das Internet zu.
- **Kontrolliert:** Zustimmung einmal je Programmlauf, ein sichtbares
Symbol bei jedem Zugriff, deterministische Tore vor Schreibvorgängen und
Auslieferungen sowie Vorschläge statt stiller Änderungen.
- **Paneuropäisch:** Suchen und Abgleiche beherrschen die Diakritika aller
elf Oberflächensprachen; nationale Ausweisnummern werden nach neun Schemata in
sieben Ländern validiert.

## 1. Was die Bridge ist

Die Bridge verbindet **Ihre eigene Desktop-KI** — Claude Desktop (oder
Claude Code), ChatGPT Desktop, Qwen Desktop oder Kimi Desktop — mit dem
**laufenden IRONSTICK-Client** auf demselben Rechner. Die KI liest Ihr
Fallmaterial über eigens gebaute Werkzeuge — Chroniken, Dokument-Volltexte,
E-Mails, Fristen, Stammdaten — und arbeitet in voller Tiefe damit: Sie
analysiert, gleicht ab und entwirft. Die Verbindung selbst ist strikt lokal;
ein IRONSTICK-Server ist daran nicht beteiligt. Die Daten, die die KI liest,
werden unter **Ihrem eigenen Abo bei diesem Anbieter und dessen
Bedingungen** verarbeitet, wie in der
[DSGVO-Datenfluss-Erklärung](https://www.ironstick.legal/gdpr_de.html) dargelegt.

- Setzt die jeweilige Desktop-Anwendung mit dem eigenen Konto voraus
(Anthropic, OpenAI, Qwen oder Kimi).
- Sie behalten die Kontrolle: Schließen Sie IRONSTICK, schließt sich die Datenquelle sofort.
- Dieser Kanal überträgt **bewusst echte, nicht pseudonymisierte Daten**;
genau das macht das Entwerfen einreichungsfähiger Vorlagen möglich.
- Als **geheim** markierte Dokumente sind für die Bridge unsichtbar.
- Das chatübergreifende **KI-Gedächtnis ist für lange Verfahren gebaut**:
Einträge, die einem Fall zugeordnet sind, werden nie automatisch gelöscht;
Einträge ohne Fall werden nach einem Jahr ohne Nutzung gelöscht, und jede
Nutzung erneuert dieses Jahr.
- Der Schreibzugriff ist bewusst schmal. Änderungen an Stammdaten, Chronik,
Kalender, Gedächtnis, Volltexten und der Gesetzes-Bibliothek werden erst nach
Ihrer Freigabe wirksam, in einem IRONSTICK-Formular, einem Dialog oder dem
Datenkonsistenz-Monitor. Ohne einen solchen Dialog schreibt die KI nur in ihre
eigenen Arbeitsbereiche (verschlüsselter Zwischenspeicher, Tagesprotokoll auf
Ihre Bitte, die eigene Fallbewertung nach den deterministischen Prüfungen) und
Notizen an die Pinnwand eines über IRONSTICK SERVER geteilten Falls; Tags und
Büro-Chat-Nachrichten bedürfen Ihrer Bestätigung im Chat. Entwürfe gehen in die
Textverarbeitung.

Jede Desktop-KI hat ihr eigenes kleines Bridge-Programm; alle
verbinden sich mit demselben lokalen Endpunkt in der laufenden
IRONSTICK-Anwendung. Alle vier Desktop-KIs erhalten dieselben Werkzeuge und
dieselben Tore. Die KIs dürfen **gleichzeitig** laufen und parallel am selben Fall
arbeiten; jede wird mit ihrem eigenen Logo in der Menüleiste angezeigt.
## 1b. Warum die Bridge?

**Weil die Bridge auf dem Abo arbeitet, das Sie bereits haben.** Eine
Desktop-KI läuft über die Desktop-App des Anbieters und Ihr Konto dort; ein Abo
ist die monatliche Pauschale des Anbieters, und jeder Dialog, jeder
Volltext-Lesevorgang und jede Entwurfsrunde ist davon gedeckt. Dieselbe Arbeit
im integrierten Chat von IRONSTICK läuft auf Ihrem API-Schlüssel, und der
API-Zugang wird vom Anbieter nach Nutzung abgerechnet.

Die Bridge ist deshalb der bevorzugte Weg für lange KI-Dialoge und für jede
Arbeit, bei der Dokumente oder größere Datenbestände über die KI gepflegt
werden: ganze Akten lesen, Chroniken, Tagesprotokolle und Gedächtniseinträge
aktuell halten, Hunderte Beilagen durcharbeiten — Arbeit, deren Umfang von der
Pauschale gedeckt ist, statt nach Nutzung abgerechnet zu werden.

 [Figure: Zwei Wege zur KI: ein nach Nutzung abgerechneter API-Schlüssel oder die Bridge mit der Desktop-App des Anbieters und seinem Abo]
**Nur bei Claude Desktop / Claude Code**

- **Jeder Chat wird gesondert verfolgt.** IRONSTICK hält die Chats Ihres
Claude Desktop auseinander. Instruktions-Riegel, Lese-Deckung,
Vorbereitungsstand, Parteienprüfungen und Auslieferungs-Verfolgung werden
**je Chat** geführt; was ein Chat gelesen hat, zählt nie für einen anderen.
Im Aufklappmenü am Claude-Symbol erscheint jeder Chat unter dem Namen, den Sie
ihm in Claude Desktop gegeben haben. Dazu liest IRONSTICK aus Claudes lokalem
Sitzungsprotokoll nur die strukturierten Werkzeug-Ereignisse (Werkzeugname und
Argumente), nie den Gesprächstext.
- **Kontext-Verdichtung wird erkannt.** Verdichtet Claude ein langes
Gespräch, stehen die früher gelesenen Instruktionen nicht mehr sicher in seinem
Kontext. IRONSTICK sperrt diesen Chat sofort und ohne Strafe, bis er die
Instruktionen neu gelesen und eine zufällig gewählte Regel wörtlich zitiert
hat; danach arbeitet er dort weiter, wo er stand.
- **Zugriff am Konnektor vorbei wird erkannt.** Greift ein Chat mit Claudes
eigenen Datei-Werkzeugen (lesen, suchen, Shell, bearbeiten) statt über den
Konnektor auf den IRONSTICK-Datenordner zu, wird das diesem Chat als
Regelverstoß vermerkt und bei seinem nächsten Konnektor-Aufruf gemeldet.
- **Erweiterte Konnektor-Grenze.** Claude Desktop erhält Ergebnisse bis
40.000 Zeichen direkt in der Antwort, das Vierfache der Standardgrenze (10.000
bei Qwen, Kimi und dem integrierten Chat); alles darüber geht als Ganzes in den
Zwischenspeicher.
- **Antwort innerhalb von 45 Sekunden.** Weil Claude Desktop Werkzeug-Aufrufe
nach 60 Sekunden abbricht, werden Webseiten innerhalb von 45 Sekunden geliefert
(diese Grenze gilt für jede Desktop-KI). Große oder gescannte Dokumente werden
im Hintergrund weiterverarbeitet und beim nächsten Aufruf mit derselben Adresse
geliefert.
- **Parteienprüfung mit Vorgriff.** Während Claude eine Partei abarbeitet,
kann es bis zu zwei weitere Parteien vorab nennen; IRONSTICK sucht sie im
Hintergrund, sodass die nächste Prüfung sofort antwortet. Ergebnisse bleiben 30
Minuten erhalten; die Reihenfolge des Tors bleibt unverändert, und die nächste
Partei wird erst geöffnet, wenn die aktuelle abgeschlossen ist.

**Nur bei ChatGPT Desktop**

- **Erweiterte Konnektor-Grenze.** ChatGPT Desktop erhält Ergebnisse bis
40.000 Zeichen direkt in der Antwort, das Vierfache der Standardgrenze (10.000
bei Qwen, Kimi und dem integrierten Chat); alles darüber geht als Ganzes in den
Zwischenspeicher.
- **Parteienprüfung mit Vorgriff.** Während ChatGPT eine Partei abarbeitet,
kann es bis zu zwei weitere Parteien vorab nennen; IRONSTICK sucht sie im
Hintergrund, sodass die nächste Prüfung sofort antwortet. Ergebnisse bleiben 30
Minuten erhalten; die Reihenfolge des Tors bleibt unverändert.

## 1c. Lizenzierung — vier Bridges oder das Bundle

Jede Desktop-KI-Bridge ist ein **eigenes lizenziertes Zusatzmodul**:

| Bridge | Verbindet | Lizenz |
| --- | --- | --- |
| **Claude Desktop Bridge** | Claude Desktop / Claude Code (Anthropic) | eigenes Modul |
| **ChatGPT Desktop Bridge** | ChatGPT Desktop (OpenAI) | eigenes Modul |
| **Qwen Desktop Bridge** | Qwen Desktop | eigenes Modul |
| **Kimi Desktop Bridge** | Kimi Desktop (Moonshot AI) | eigenes Modul |
| **Bridge-Bundle** | alle vier oben | die vier Module zusammen |

- Jede Bridge wird in Ihrem **signierten Lizenzschlüssel der Client-App**
freigeschaltet; es gibt keinen eigenen Bridge-Schlüssel. Aktiviert werden nur lizenzierte
Bridges; eine nicht lizenzierte Bridge wird nicht installiert und erscheint
nicht in der Konfiguration.
- Sie lizenzieren **eine einzelne Bridge** (nur die Desktop-KI, die Sie
nutzen) oder das **Bundle aller vier** und erweitern später.
- Lizenzierte Bridges dürfen **parallel** laufen; mehrere Desktop-KIs
können gleichzeitig an einem Fall arbeiten.

 [Figure: IRONSTICK-Client-App plus Bridge-Bundle: je Desktop-KI ein eigenes lizenziertes Bridge-Programm]
Die Preise für einzelne Bridges und das Bundle stehen unter
[Preise](https://www.ironstick.legal/pricing_de.html).
## 1d. Der integrierte IRONSTICK-KI-Chat — dasselbe Modell, ohne Extra-Lizenz

IRONSTICK hat auch einen **eigenen KI-Chat integriert**. Er läuft auf
**derselben Arbeitsebene wie die Bridge**: dieselben Werkzeuge, dieselben
Tore, dieselbe Verankerung und dasselbe einreichungsfähige Entwerfen.

- **Keine Extra-Lizenz.** Der integrierte Chat ist Teil von
IRONSTICK; er braucht kein Bridge-Modul.
- **Er läuft über die API der Anbieter** (Ihr eigener API-Schlüssel), die
der Anbieter nach Nutzung abrechnet, während die Bridge über die eigene
Desktop-App des Anbieters auf der monatlichen Pauschale Ihres Abos arbeitet.
- Dafür ist der API-Weg **strenger kontrolliert**: Daten werden vom Router
pseudonymisiert, interaktive Aufrufe fragen nach Ihrer Zustimmung, jeder Aufruf
wird im Audit-Log protokolliert, und Größenkappen gelten — zusätzlich zu
denselben Toren wie bei der Bridge.

 [Figure: Der integrierte KI-Chat: die IRONSTICK-Client-App mit dem API-Schlüssel des Anbieters]
**Kurz gesagt:** Die Bridge (Desktop-App, monatliches Pauschal-Abo)
eignet sich für schwere, dokumentgetriebene Tagesarbeit; der integrierte Chat
(API nach Nutzung abgerechnet, keine Extra-Lizenz) ist immer verfügbar und
strenger kontrolliert.
## 2. Installation (jede der vier)

 [Figure: Konfiguration → KI-Konfiguration: der Abschnitt Claude Desktop mit beiden Schaltern, dem Einrichten-Knopf und dem Knopf für das Skill-Plugin.]

Konfiguration → KI-Konfiguration: der Abschnitt Claude Desktop mit beiden Schaltern, dem Einrichten-Knopf und dem Knopf für das Skill-Plugin.

Der Ablauf ist für jede Desktop-KI gleich; nur Bezugsquelle und
Einrichten-Schaltfläche unterscheiden sich.

1. Die Desktop-Anwendung installieren, mit dem eigenen Konto anmelden und einmal
starten.
2. In IRONSTICK **Konfiguration → KI-Konfiguration → KI mit lokalem
MCP-Server (STDIO)** öffnen.
3. **„Konnektorzugriff durch Claude Desktop erlauben“** einschalten (der
Hauptschalter des ganzen Kanals).
4. Optional **„Navigation durch Claude Desktop erlauben“** einschalten, wenn
die KI die Anwendung auch bedienen darf: Bildschirme, Fälle und Dokumente
öffnen und Dateien exportieren. Lesen geht auch ohne.
5. Die passende Schaltfläche **„… Desktop einrichten“** klicken. Bei Claude,
ChatGPT und Kimi schreibt und registriert ein Klick die Konfiguration. Bei Qwen
Desktop kopiert IRONSTICK den Einrichtungstext in die Zwischenablage, und Sie
fügen ihn in Qwens Dialog „Add MCP“ ein.
6. Eine **neue Unterhaltung** starten oder in derselben Sektion die
**Neustart-Schaltfläche** verwenden, die die lizenzierten Desktop-KI-Apps
schließt und neu startet, damit sie sich wieder mit IRONSTICK verbinden.
IRONSTICK erscheint dann unter den Konnektoren der KI, und seine Werkzeuge
stehen in jeder Unterhaltung bereit.

| Desktop-KI | Bezug / Anmeldung | Einrichten-Schaltfläche |
| --- | --- | --- |
| **Claude Desktop / Claude Code** | claude.ai/download — Anthropic-Konto | „Claude Desktop einrichten“; eine eigene Schaltfläche erstellt das Skill-Plugin, das Sie in Claude Desktop hinzufügen |
| **ChatGPT Desktop** | openai.com/chatgpt/download — OpenAI-Konto | „ChatGPT Desktop einrichten“; eine eigene Schaltfläche erstellt das Skill-Plugin, das Sie in ChatGPT Desktop hinzufügen |
| **Qwen Desktop** | Qwen Desktop (Windows) — Qwen-Konto | „Qwen Desktop einrichten“ (kopiert den Einrichtungstext für Qwens Dialog „Add MCP“) |
| **Kimi Desktop** | kimi.ai — Kimi-Konto | „Kimi Desktop einrichten“ |

Der Konfigurations-Bildschirm trägt die Download-Links und die Links zu
Nutzungsbedingungen und Datenschutzerklärung jedes Anbieters.

**Einrichtung in einem Schritt.** Bei Claude, ChatGPT und Kimi
schreibt und registriert ein einziger Klick auf die Einrichten-Schaltfläche im
Konfigurations-Bildschirm der Client-App die vollständige Konfiguration; keine
Konfigurationsdatei muss von Hand bearbeitet werden. Bei Qwen Desktop genügt
ein Einfügen in Qwens eigenen Dialog. Die **Neustart-Schaltfläche** schließt und startet die
lizenzierten Desktop-KI-Apps neu, damit sie sich wieder mit IRONSTICK
verbinden.
## 3. Wie Zugriffe in der Menüleiste angezeigt werden

 [Figure: Die Menüleiste während eines Bridge-Zugriffs — das Claude-Symbol erscheint neben der CPU/RAM-Anzeige.]

Die Menüleiste während eines Bridge-Zugriffs — das Claude-Symbol erscheint neben der CPU/RAM-Anzeige.

- **Erst Zustimmung.** Der erste Datenzugriff einer beliebigen Desktop-KI in
einem Programmlauf öffnet einen Zustimmungsdialog. Zustimmen öffnet den Zugriff
für alle Desktop-KIs für den Rest des Laufs; Ablehnen sperrt sie alle für 10
Minuten.
- **Ein eigenes Logo je KI** erscheint in der Kopfleiste neben der
CPU/RAM-Anzeige **bei jedem Werkzeugaufruf** und bleibt 3 Sekunden nach
dem letzten Aufruf hell; rasche Aufrufserien halten es durchgehend hell. Ist
das Symbol dunkel, wird gerade nichts gelesen. Jede KI hat ihr eigenes Zeichen:
der orange Claude-Stern, der grüne OpenAI-Knoten, das violette Qwen-Symbol und
das petrolfarbene Kimi-„K“.
 [Figure: Nahaufnahme: das Claude-Symbol leuchtet bei jedem einzelnen Werkzeugaufruf auf und bleibt nach dem letzten Aufruf 3 Sekunden sichtbar.]

Nahaufnahme: das Claude-Symbol leuchtet bei jedem einzelnen Werkzeugaufruf auf und bleibt nach dem letzten Aufruf 3 Sekunden sichtbar.

- **Das Aufklappmenü am KI-Symbol** zeigt, was diese KI in der Sitzung
gelesen hat: die Zeile „Arbeitsanweisung + Halluzinationsverbot“ (grüner Haken,
solange gültig, rotes Kreuz nach Ablauf), dann je Fall die Marken Profil,
Rechtsraum und Digest plus einen Balken „Dokumente gelesen *r* von
*n*“.
- **Das Gehirnsymbol** erscheint, sobald das geteilte KI-Gedächtnis
Einträge hat, und pulsiert 3 Sekunden, wann immer ein KI-Kanal es liest
oder schreibt. Ein Klick öffnet den Verwaltungsdialog. Die KI kann vorschlagen,
einen Gedächtniseintrag zu speichern, zu ändern oder zu löschen; jede Änderung
wird erst nach Ihrer Freigabe wirksam. Ihre eigenen Notizen sind für die KI
schreibgeschützt.
- **Navigation** durch die KI (Bildschirme, Fälle oder Dokumente öffnen)
geschieht nur, wenn ihr Schalter eingeschaltet ist; sonst werden
Navigations-Werkzeuge verweigert.
- **Parallelzugriff:** Arbeiten mehrere lizenzierte KIs gleichzeitig, zeigt
die Kopfleiste **ein Logo je aktiver KI** nebeneinander; jeder Zugriff wird
der KI zugeordnet, die ihn ausgeführt hat.
- **Hintergrundvorgänge:** Die Leistungsanzeige listet alle laufenden
Hintergrundvorgänge, darunter jeden Werkzeugaufruf des integrierten Chats.

## 4. Siebzehn deterministische Sicherungen gegen Halluzinationen und Datenfehler

IRONSTICK setzt seine Arbeitsregeln strukturell durch. Siebzehn deterministische Tore
(reine Logik, keine KI) stehen zwischen dem Modell und Ihren Datensätzen. Im
Werkzeugkatalog nennt eine blaue Marke wie Tor 1 · Datum das
Tor, das ein Werkzeug sichert.

| Tor | Verhindert | Wie es durchsetzt |
| --- | --- | --- |
| **1. Datums-Tor** | Falsche Daten aus dem Trainingszeitraum des Modells statt des tatsächlichen Datums. | Jedes Werkzeug, das in IRONSTICK schreibt, wird verweigert, solange die KI nicht innerhalb der letzten 30 Minuten das tatsächliche, NTP-geprüfte Datum samt Uhrzeit abgerufen hat. Das Zeitfenster wird je KI geführt und ist bewusst kurz. |
| **2. Gesetzes-Tor** | Erfundener oder falsch erinnerter Gesetzestext. | Der Webzugriff für Normen wird verweigert, bis die geprüfte lokale Gesetzes-Bibliothek befragt wurde; online gefundene Gesetzesquellen müssen gemeldet werden und gelangen nur über Ihren Zustimmungsdialog in die Bibliothek. |
| **3. Tor der Schriftsatz-Prüfung** | Erfundene Aktenverweise, abweichende Beträge, falsche Parteinamen, ungeprüfte Zitate in einem Schriftsatz. | Die deterministische Prüfung von Schriftsätzen in acht Klassen: Die Auslieferung eines förmlichen Dokuments ist ohne aktuelle positive Prüfung für genau diesen Dateistand gesperrt; nach fünf gescheiterten Läufen bricht der Vorgang ab, und Sie werden benachrichtigt. |
| **4. Lese-Deckungs-Wächter** | Behauptungen, alles gelesen zu haben, obwohl Dateien nur teilweise gelesen wurden. | Zeilengenaue Verfolgung dessen, was tatsächlich gelesen wurde, über Neustarts hinweg gespeichert; ungelesene Bereiche werden in jeder Antwort aufgeführt, die Auslieferung bleibt gesperrt, solange Lücken bestehen, und das Löschen oder Überschreiben ungelesener Quelldateien wird verweigert. |
| **5. Navigationssperre** | Verlust ungespeicherter Arbeit durch einen von der KI ausgelösten Bildschirmwechsel. | Solange ein Erfassungsformular oder der Texteditor geöffnet ist, wird jeder Navigations- und Exportaufruf verweigert. |
| **6. Human-in-the-Loop-Tor** | Stille Änderungen der KI an Stammdaten, Chronik, Kalender oder Instruktionen. | Änderungen der KI kommen als Vorschläge an: Datenkonsistenz-Monitor, Rot/Grün-Vergleichsdialoge, Bestätigungsdialoge; ohne Ihre Freigabe wird nichts übernommen. |
| **7. Detektor für förmlichen Inhalt** | Förmliche Briefe oder Schriftsätze, die als „formlos“ deklariert werden, um Formatierung und Prüfung zu umgehen. | Ein deterministischer Inhalts-Scan (Anrede- und Schlussformeln in sechs Sprachen, Adressatenblock, juristische Merkmale, Identitätsblock) weist die Deklaration als formlos zurück; für solchen Inhalt gibt es keinen formlosen Auslieferungsweg, und der Versuch wird protokolliert. |
| **8. Wächter der Versionsreihe** | Zurücksetzen des Versionszählers durch Umbenennen der Datei („…\_v05“ wird stillschweigend zu „NeuerName\_v01“). | Eine Erstauslieferung unter neuem Dateinamen wird verweigert, solange eine versionierte Reihe mit derselben Fallnummer existiert; die KI muss die Reihe fortsetzen oder ausdrücklich ein wirklich anderes Dokument erklären, was protokolliert wird. |
| **9. Lese-Herkunft der Gesetze** | Norminhalt aus Presseartikeln, Web-Zusammenfassungen oder dem Gedächtnis des Modells statt aus dem Gesetzestext. | Jeder Lesevorgang in der Bibliothek wird je Programmlauf festgehalten (Quelldatei und tatsächlich zurückgegebene Artikelnummern). Ein zitierter Artikel ohne solchen Lesenachweis fällt durch die Prüfung; zitierte Unterverweise (Absatz, Punkt) werden ebenfalls auf Existenz geprüft. |
| **10. Fall-Anker** | Fallkontext, der aus der Erinnerung an einen *anderen* Fall erfunden wird (fallübergreifende Kontamination). | Jede Werkzeugantwort, die einen Fall berührt, trägt die registrierte Nummer, den Mandanten und den Gegenstand des Falls aus den Datensätzen; erfundener Kontext steht damit neben den registrierten Daten und wird sofort entlarvt. |
| **11. Instruktions-Riegel** | Eine KI, die arbeitet, ohne die Arbeitsregeln gelesen zu haben. | Abgesehen vom Lesen der Instruktionen, deren Bestätigung und dem Lesen der Systemsprache wird jedes Werkzeug verweigert, bis die KI die Instruktionen gelesen und Regel 5 (Halluzinationsverbot) wörtlich zitiert hat. Die Bestätigung verfällt 60 Minuten nach ihrer Abgabe, nach 2 Stunden ohne Aufruf, um Mitternacht, bei jeder Neuverbindung und nachdem die Desktop-KI ihren Kontext verdichtet hat; die KI muss dann die Instruktionen neu lesen und eine zufällig gewählte Regel zitieren. Das Aufklappmenü am KI-Symbol zeigt den Zustand grün oder rot. |
| **12. Vorbereitungs-Tor** | Notizen, Protokolleinträge oder Schriftsätze zu einem Fall, den die KI nicht gelesen hat. | Zwei Stufen, je KI gebucht und über Neustarts hinweg gespeichert: Eine Notiz verlangt, dass Profil, Rechtsraum, der Digest jedes Dokuments (der Digest dient als Chronik) und die fünf neuesten Dokumente gelesen sind; ein Schriftsatz, eine Übergabe oder ein Export zusätzlich, dass jedes Dokument, das er zitiert oder beifügt, vollständig gelesen ist. Ein Lesevorgang bleibt 3 Tage gültig oder bis zum nächsten eingehenden Dokument des Falls. |
| **13. Dokumentgebundener Lesenachweis** | Beilagen und Verweise, die vor Stunden oder für ein anderes Dokument „gelesen“ wurden. | Ein Volltext-Lesevorgang zählt 2 Stunden; jede Auslieferung desselben Dokuments (beliebige Version) verlängert dessen zitierte Dokumente um 2 Stunden; das Prüfen oder Ausliefern eines anderen Dokuments setzt die Beilagen-Lesevorgänge zurück, und die KI liest die Beilagen jenes Dokuments neu. |
| **14. Analyse-Lese-Tor** | Ungeprüfte „Fakten“, die in die Beschreibung oder die Kontaktfelder einer Person eingetragen werden. | Ein Vorschlag, der die Freitextfelder einer Person berührt, wird verweigert, solange die KI das Profil dieser Person nicht innerhalb der letzten 30 Minuten gelesen hat. |
| **15. Digest-Tor** | Fallinhalt, der stückweise zusammengetragen wird (Suchen, Zeitleisten, Volltexte, Fristen) zu einem Fall, dessen Digest die KI nicht gelesen hat. | Jedes Fallinhalts-Werkzeug (Chronik, Zeitleiste, Suchen, Volltexte, Widersprüche, Pflichten, Fristen, Korrespondenz, Medien, Institutionen, Tags, Bewertung, Instruktionsnotizen) wird verweigert, bis der Digest des Falls gelesen ist; die Verweigerung nennt den Vorbereitungsaufruf. Der dritte verweigerte Versuch am selben Fall wird als Regelverstoß gebucht. |
| **16. Tor ähnlicher Parteien** | Doppelte Personen, Firmen oder Institutionen, die entstehen, weil eine abweichende Schreibweise nicht erkannt wurde. | Ein Vorschlag für einen neuen Datensatz wird mit einer Liste ähnlicher bestehender Datensätze beantwortet, und nichts wird gespeichert. Die KI muss entweder bei einem bestehenden Datensatz ablegen oder ausdrücklich bestätigen, dass die Partei wirklich neu ist. Jede gespeicherte neue Partei löst den verpflichtenden Folgeauftrag aus, ihre Verbindungen zu recherchieren und abzulegen, Webrecherche eingeschlossen. |
| **17. Wiederholungs-Sperre** | Wiederholtes Abrufen identischer Daten, das Zeit und Tokens kostet, ohne Information hinzuzufügen. | Ein Aufruf, der exakt denselben Inhalt liefert wie ein früherer, wird abgewiesen. Verglichen wird der Inhalt, nicht der Aufruf; ein anderer Parameter, der dasselbe Ergebnis liefert, wird daher ebenfalls abgewiesen. Die Sperre wird zurückgesetzt, wenn ein anderes Dokument ausgeliefert oder vorgelegt wurde, wenn sich das KI-Programm neu verbindet, wenn die KI zwischendurch eine andere Aufgabe erledigt hat oder wenn die KI ihre Instruktionen neu gelesen und bestätigt hat. |

## 5. Was Sie damit tun — Beispiele

Sprechen Sie mit der Desktop-KI (oder dem integrierten Chat) in normaler
Sprache; sie wählt die passenden Werkzeuge selbst. Typische Anfragen:

**„Was ist in Fall [Aktenzeichen] passiert? Fasse den Stand und das
Nächstfällige zusammen.“**
Die KI löst den Fall auf, liest die ganze Akte
abschnittsweise und liest die Fristen; dann liefert sie eine Zusammenfassung mit
Dokumentverweisen.
**„Entwirf die Antwort auf die Aufforderung des Gerichts von letzter
Woche in unserem Schriftsatzformat und übergib sie in die
Textverarbeitung.“**
Die KI findet die Aufforderung, liest ihren Volltext,
lädt das Ausgabeformat und entwirft; der Entwurf erscheint in der
Textverarbeitung von IRONSTICK, bereit für Ihre Überarbeitung und den Druck auf
Ihrem Briefkopf.
**„Wer hat was zum Ortstermin gesagt, und widersprechen sich die
Aussagen?“**
Aussagensuche und Widerspruchsfinder über die ganze
Akte.
**„Prüfe die USt-IdNr. und die LEI der Gegenseite.“**
Live-Prüfungen
gegen den EU-Dienst VIES und das weltweite LEI-Register.
**„Bau mir eine Zeitleiste des Streits und liste, welche unserer
Beilagen schon bei Gericht eingereicht wurden.“**
Fall-Zeitleiste plus Listen
eingereichter und ausgehender Dokumente mit Registraturnummern.
**„Gab es E-Mails zum Gutachten? Was war angehängt?“**
E-Mail-Suche
mit Absender, Betreff, Anhängen und auf Wunsch dem Nachrichtentext.
**„Öffne mir den Fall und exportiere die zwei Verträge als
PDF.“**
Bei aktivierter Navigation öffnet die KI die Bildschirme und liefert
die Dateien.
**„Merk dir für nächstes Mal: Der Anwalt der Gegenseite reicht
freitags immer spät ein.“**
Als Vorschlag für das geteilte KI-Gedächtnis
(dem Mandanten zugeordnet, größenbegrenzt); nach Ihrer Freigabe steht er jeder
künftigen Sitzung zur Verfügung, und Sie können ihn jederzeit einsehen und
löschen.
**„Der Entwurf ist fertig. Gib ihn einer anderen KI zur Prüfung: lesen,
Schwachstellen und Gegenargumente finden, bewerten.“**
Die KI übergibt den
Schriftsatz über IRONSTICK; ein anderes Modell mit anderem Training prüft ihn
kritisch, und seine Bewertung kommt zu Ihnen zurück. Eine echte Zweitmeinung auf
denselben Falldaten.
**„Protokolliere die heutige Arbeit im Tagesprotokoll.“**
Gesendete
E-Mails, entworfene Schriftsätze, erarbeitete Argumente und Entscheidungen
werden ins heutige Tagesprotokoll geschrieben; bei der nächsten Sitzung brieft
sich die KI aus den letzten Einträgen.
## 6. Der Werkzeugkatalog

Dies sind die Werkzeuge, die die Bridge bereitstellt — dieselben für jede
verbundene Desktop-KI und für den integrierten Chat. Jede Zeile nennt zuerst die
Funktion in verständlichen Worten und danach den technischen Werkzeugnamen, wie
die KI ihn sieht. Einige technische Namen leiten sich von deutschen oder
rumänischen Begriffen ab (zum Beispiel `tagesprotokoll` =
Tagesprotokoll, `fristen` = Fristen, `kalender` =
Kalender, `ki` = KI, `sachverhalte` = Sachverhalte,
`anexe` = Beilagen); die Beschreibung nennt die Funktion.

Alle Werkzeuge sind schreibgeschützt, sofern die Beschreibung nicht sagt, dass
sie schreiben oder ein Formular öffnen. Marken: Tor 1 · Datum
nennt die Sicherung aus der Tabelle der siebzehn Tore; Prüfung
bedeutet, dass sich nichts ändert, bevor Sie es im Datenkonsistenz-Monitor oder in
einem IRONSTICK-Dialog oder -Formular freigeben; Bestätigung
bedeutet, dass das Werkzeug erst nach Ihrer ausdrücklichen Bestätigung handelt.

### Sitzungskontext und Navigation

| Funktion | Technischer Name |
| --- | --- |
| **Kompletter Sitzungsstart.** Führt den gesamten Sitzungsstart in einem Aufruf aus (Datum, Systemsprache, aktueller Kontext, Tagesbriefing, Fristen, Termine, offene Peer-Review-Aufgaben) und schreibt ihn in eine Zwischenspeicher-Datei. Beim ersten Sitzungsstart des Tages fragt die KI zuerst nach noch nicht bewerteten Gerichtsentscheiden. | `session_start_to_scratch` |
| **Aktueller Bildschirm.** Wo der Benutzer gerade ist: Bildschirm, Breadcrumb, geöffneter Mandant oder Fall. | `read_current_context` |
| **Systemsprache** der Installation. | `read_system_language` |
| **Aktuelles Datum und aktuelle Uhrzeit** (NTP-geprüft), für Fristenberechnungen. | `get_datetime` Tor 1 · Datum |
| **Instruktionen.** Liest die vollständigen, aktuellen Konnektor-Instruktionen jederzeit neu. | `read_instructions` |
| **Instruktions-Bestätigung.** Entriegelt den Konnektor, nachdem die KI die Instruktionen gelesen und Regel 5 (Halluzinationsverbot) wörtlich zitiert hat. Die Bestätigung verfällt nach 60 Minuten, nach 2 Stunden ohne Aufruf, um Mitternacht, bei Neuverbindung und nach der Kontext-Verdichtung; die KI liest dann die Instruktionen neu und zitiert eine zufällig gewählte Regel. | `confirm_instructions` Tor 11 · Instruktions-Riegel |
| **Benutzerhandbuch.** Liefert die Handbuchabschnitte, die zu englischen Stichwörtern passen; die KI erklärt sie in der Dialogsprache. Das Handbuch liegt verschlüsselt und schreibgeschützt im Zwischenspeicher, wo die KI es auch durchsuchen kann. Jeder Abschnitt enthält Bedienhinweise, Dialogvorschläge und den Arbeitsablauf. | `user_help_request` |
| **Morgenbriefing.** Das strukturierte Briefing von heute mit Dokument-IDs, Fallnummern und Markierungen: Fristen, Gerichtstermine, ungelesene E-Mails, neu erfasste Dokumente, Fälle mit erhöhter Aktivität. | `get_dailybriefing` |
| **Einen Bildschirm öffnen** in der Anwendung (setzt den Navigationsschalter voraus). | `open_screen` Tor 5 · Navigation |
| **Einen Datensatz öffnen:** einen bestimmten Fall, Mandanten, eine Person, Institution oder ein Dokument (Navigationsschalter). | `open_case` / `open_client` / `open_person` / `open_institution` / `open_evidence` |
| **Einen Arbeitsbereich öffnen:** den Dossier-Assistenten, auf Wunsch vollständig vorbereitet; die globale Suche; den E-Mail-Monitor (Posteingang oder Gesendet-Ordner, auf Wunsch eine bestimmte Nachricht); das Tagesprotokoll (ein bestimmter Tag) oder den Backup-Bildschirm. Das Starten eines Backups erfordert eine Bestätigung (Navigationsschalter). | `open_dossier` / `open_search` / `open_emailmonitor` / `open_tagesprotokoll` / `open_backup` |
| **Eine Frist öffnen** im Fristen-Bildschirm, hervorgehoben (Navigationsschalter). | `open_deadline` |
| **Ein Formular öffnen:** die Erfassungs- oder Bearbeitungsformulare für Mandant, Fall, Person oder Firma und Institution, den Bildschirm der Fallzuordnung oder den Posteingang und das Formular der Dokumentenerfassung. Die KI öffnet und füllt vor; der Benutzer speichert (Navigationsschalter). | `open_new_client` / `open_new_case` / `open_new_person` / `open_new_institution` / `open_assign` / `open_capture` Prüfung |
| **Eine Gesetzesquelle registrieren:** öffnet den Gesetze-Bildschirm mit geöffnetem Registrierungsdialog und vorausgefüllter URL; der Benutzer bestätigt (Navigationsschalter). | `open_new_legal_source` Prüfung |
| **E-Mails jetzt abrufen:** ruft neue E-Mails ab und sortiert sie vor, wie die Abruf-Schaltfläche. | `fetch_mails` |
| **Eine KI-Fallbewertung starten** für einen Fall, nach Bestätigung mit Kostenhinweis. | `request_case_assessment` Bestätigung |
| **Eine Büro-Chat-Nachricht senden** in IRONSTICK SERVER im Namen des Benutzers, nach Bestätigung des genauen Textes. | `send_server_chat` Bestätigung |
| **Tags verwalten:** die farbigen Tags eines Eintrags auflisten, hinzufügen, bearbeiten oder entfernen; jede Änderung erfordert eine Bestätigung. | `manage_tag` Bestätigung |
| **Die Desktop-KIs neu starten** für eine frische Verbindung, nach Ihrer Bestätigung. | `recycle_desktop_ai` Bestätigung |

### Den richtigen Datensatz finden

| Funktion | Technischer Name |
| --- | --- |
| **Mandanten- und Falllisten**, vollständig. | `list_all_clients` / `list_all_cases` |
| **Einen Fall nach Nummer finden** (auch teilweise). | `resolve_case_by_number` |
| **Einen Mandanten, eine Person oder Institution nach Namen finden** (unscharf, diakritika-tolerant). | `resolve_client_by_name` / `resolve_person_by_name` / `resolve_institution_by_name` |
| **Fälle, an denen eine bestimmte Partei beteiligt ist.** | `find_case_by_party` |
| **Parteien nach Stichwort finden:** Personen und Institutionen, deren Name, Notizen oder Analysefelder ein Stichwort enthalten; der Einstieg, wenn nur ein Bruchstück bekannt ist. | `find_party_by_keyword` |
| **Fälle mit erhöhter Aktivität** (Temperatur), mit Mandant und Fallnummer. | `read_hot_cases` |
| **Heute oder gestern erfasst:** alles, was an diesem Tag erfasst wurde, über alle Mandanten und Fälle, als Liste von Dokument-IDs mit Uhrzeit, Mandant, Fall und Titel. | `get_all_fromtoday` / `get_all_fromyesterday` |

### Einen Fall lesen

| Funktion | Technischer Name |
| --- | --- |
| **Vollständige Fallakte:** Chronik mit Volltexten. Bei großen Fällen meldet der erste Aufruf die Größe und bietet gezielte Suchen oder die Lieferung in den Zwischenspeicher an. | `read_full_case` Tor 4 · Lese-Deckung |
| **Falltext in den Zwischenspeicher:** der schnellste vollständige Lesevorgang eines großen Falls. Stellt den vollständigen Falltext ungekürzt zusammen, bereinigt OCR-Artefakte und schreibt ihn direkt in den Zwischenspeicher; die KI erhält nur den Dateiverweis und liest ihn dann abschnittsweise. Umfang: alle, eingehende oder ausgehende Dokumente oder ausgewählte Dokumente; der Weg, ein Dokument mit 300.000 Zeichen vollständig zu lesen. | `dump_case_to_scratch` Tor 4 · Lese-Deckung |
| **Fallvorbereitung:** in einem Aufruf das Fallprofil und der Rechtsraum plus der Digest jedes Dokuments (ID, Datum, Typ, Titel, Erfassungs-Zusammenfassung, Querverweise, Textgröße); der Digest dient als Chronik. Die Antwort nennt, wo Profil und Digest liegen (bei kleinen Fällen in der Antwort, sonst in Zwischenspeicher-Dateien, die vollständig zu lesen sind), und benennt die fünf neuesten Dokumente, die vollständig zu lesen sind. Erfüllt das Vorbereitungs-Tor; gelöschte und geheime Dokumente sind ausgeschlossen. | `prepare_case` Tor 12 · Vorbereitung |
| **Neueste Chronikeinträge:** ein schneller Blick; zählt nicht für die Vorbereitung. | `read_chronik` |
| **Verwandte Fälle und Sachverhalte:** Eltern-, Kind- und Fälle derselben Gruppe; die Sachverhalte eines Mandanten, wie die Universum-Karte sie gruppiert; die am stärksten verbundenen Fälle. | `read_case_links` / `read_case_cliques` / `read_top_connected_cases` |
| **Schnelle Fallorientierung:** jedes Feld des Fall- und des Mandanten-Reiters plus die 15 neuesten Dokument-IDs mit Eingangsdatum. | `short_case_briefing` |
| **Fälle eines Mandanten**; mit dem aktuellen Fall verknüpfte Fälle. | `read_client_cases` / `read_related_cases` |
| **Alle Sachverhalte eines Mandanten** in einem Aufruf, jeweils mit ihren Fällen (Aktenzeichen, Titel, Status, Elternfall); ungruppierte Fälle werden gesondert aufgeführt. | `list_sachverhalte` |
| **Gerichte und Behörden**, die an einem Fall beteiligt sind, mit Adressen. | `read_case_institutions` |
| **Rechtsraum des Falls**, der die Dokumentsprache bestimmt. | `read_case_jurisdiction` |
| **Gespeicherte KI-Fallbewertung.** | `read_assessment` |
| **Fall-Zeitleiste:** alle Fallereignisse in chronologischer Reihenfolge. | `build_case_timeline` |
| **Beilagenliste eines Schriftsatzes:** die darin enthaltenen Beilagen, jeweils mit ihrem Ablagestempel. | `evidence_anexelist` |
| **Briefnummern-Kette:** verfolgt eine Registratur- oder Briefnummer über Dokumente hinweg. | `briefnummer_chain` |
| **Dokumentverwendung:** wo ein Dokument verwendet oder referenziert wurde. | `evidence_usage` |
| **Bei Gericht eingereichte Beweismittel**, mit Nummern. | `list_submitted_evidence` |
| **Korrespondenz:** alle eingehenden oder ausgehenden Dokumente eines Falls (optional ab einem Datum) als Liste von Dokument-IDs. | `list_correspondence` |
| **Ablagestempel** eines Dokuments. | `evidenceidtoisstamp` |
| **Offene prozessuale Pflichten** eines Falls, mit Beschreibungen und Markierungen für überfällig oder dringend. | `list_open_obligations` |

### Dokumente und Passagensuche

| Funktion | Technischer Name |
| --- | --- |
| **Volltext eines Dokuments** (und, wo vorhanden, sein Chat- oder Transkripttext); bis zu 12 Dokumente je Aufruf. Oberhalb der Konnektor-Grenze geht der Text als Ganzes in den Zwischenspeicher und gilt erst als gelesen, wenn die Datei vollständig gelesen wurde. | `evidence_readfull` Tor 4 · Lese-Deckung |
| **Medieneinträge** (Fotos, Aufnahmen): Metadaten, Standort, Transkripte. | `read_media` |
| **Dokumentensuche** nach Stichwort oder Zeitraum. Beim ersten Aufruf fragt die Stichwortsuche, was gesucht wird, den Umfang und die Form der Antwort. | `search_evidence_by_keyword` / `search_evidence_by_time` Tor 15 · Digest |
| **Passagensuche** über die Akte (OCR-tolerant), mit den passenden Passagen als Ergebnis. | `search_passages` |
| **Dokumente einer Partei.** | `find_documents_from_party` |
| **Widerspruchskandidaten** zwischen Dokumenten und Aussagen. | `find_contradictions` |
| **Aussagen je Sprecher** zu einem Thema. | `who_said_what` |
| **Wer mit wem kommuniziert hat**, und wann. | `who_with_whom` |

### Richter und Gerichtsentscheidungen

Fünf deterministische Werkzeuge (keine KI) für eine Frage: Wie entscheidet ein
Richter oder Staatsanwalt — welche Argumente aus den Eingaben greift er auf,
welche übergeht er, und wie berechenbar sind seine Entscheidungen? Die Werkzeuge
finden und messen; die KI liest und beurteilt die Entscheidungen
anhand der Volltexte. Als Entscheidungen zählen nur eingehende Dokumente
eines Gerichts oder einer Staatsanwaltschaft.

| Funktion | Technischer Name |
| --- | --- |
| **Entscheidungen eines Richters:** jede aktenkundige Entscheidung, an der eine Person als Richter (Präsident oder Mitglied) mitgewirkt oder als Staatsanwalt gehandelt hat, über alle Fälle hinweg. Eine Entscheidung zählt nur, wenn die Person im Kopf (Besetzung des Gerichts) oder im Unterschriftenblock genannt ist; ein Name im Fließtext zählt nicht, und Gerichtsschreiber werden nicht aufgeführt. Je Entscheidung: Gericht, Überschrift, Rolle, Spruchkörper und der erste Satz des Tenors, wörtlich. | `list_decisions_by_judge` |
| **Aufbau einer Entscheidung:** Gericht und Abteilung, Aktenzeichen, Art, Nummer und Datum, Sitzung, Spruchkörper, der Satz, der Parteien und Gegenstand nennt, der Tenor wörtlich, Ergebnis-Schlagwörter, Rechtsmittel, Verkündung, Gesetzeszitate mit ihrem Bibliotheksstatus und der Umfang der Begründung, jeweils mit der Zeichenposition im gespeicherten Text. Was im Text fehlt, wird als nicht gefunden gemeldet. | `read_decision_structure` |
| **Eingaben vor einer Entscheidung:** jede im Fall bis zum Datum der Entscheidung eingereichte Eingabe, geschrieben in zwei Zwischenspeicher-Dateien: die des Mandanten (ausgehende Dokumente) und die der Gegenseite (eingehende Dokumente). Es zählen nur Dokumente, die an ein Gericht oder eine Staatsanwaltschaft gerichtet sind; Schreiben an oder von anderen Behörden, Gerichtsdokumente, Beweismittel und Chronikeinträge bleiben außen vor. Jede Eingabe wird nur mit ihrem Hauptdokument übernommen (Begleit-E-Mail und Beilagen entfernt). Dokumente, die sich nicht sicher einordnen lassen, werden als nicht zugeordnet aufgeführt, in keiner der beiden Dateien. | `read_request_and_ruling` Tor 4 · Lese-Deckung |
| **Begründung im Vergleich mit den Eingaben:** misst, wie viel der Begründung einer Entscheidung als Text mit den Eingaben des Mandanten, denen der Gegenseite, beiden, mit Gesetzestext aus der Gesetzes-Bibliothek oder mit keinem davon (eigene Formulierung des Gerichts) übereinstimmt; die Wiedergabe der Standpunkte der Parteien wird gesondert gemessen. Übereinstimmende Passagen werden mit ihrer Übereinstimmungsquote (ab 70 %) aufgeführt, die höchste zuerst, im Originalwortlaut mit Zeichenpositionen. Es zeigt, wo die Begründung Text aus Eingaben wörtlich übernimmt. | `compare_ruling_with_submissions` |
| **Dokumentenvergleich:** vergleicht beliebige zwei Dokumente, über Mandanten und Fälle hinweg, auf identische Textblöcke, zum Beispiel in Schriftsätzen aus verschiedenen Verfahren. Übereinstimmende Passagen werden als Gesetzestext, als gemeinsam zitierte Quelle (ein drittes Dokument der beiden Fälle) oder als nur von diesen beiden Dokumenten geteilt eingestuft. Die Antwort weist die KI an, beide Dokumente vollständig zu lesen, bevor sie etwas über eine Verbindung aussagt. | `compare_documents` |

### Bewertungsliste der Gerichtsentscheide

Gerichtsentscheide werden bei der Erfassung erkannt: Neben Eingang und Ausgang
gibt es ein Häkchen „Gerichtsentscheid“, das Sie jederzeit ändern können, und ein
Hintergrundlauf prüft auch den vorhandenen Bestand. Erkannte Entscheide kommen
auf eine Bewertungsliste. Die KI arbeitet sie Entscheid für Entscheid ab: Sie
liest den Entscheid und, über das Eingaben-Werkzeug, die Eingaben beider Seiten
und beantwortet ein festes Raster von Fragen. Gespeichert wird erst auf Ihre
ausdrückliche Anweisung. Ein Entscheid ändert sich nicht, deshalb wird er einmal
bewertet.

| Funktion | Technischer Name |
| --- | --- |
| **Offene Entscheide der Liste**, neueste zuerst: Gericht, Spruchkörper, Richter und Gerichtsschreiber (jeweils mit ihrer Datensatz-ID oder als noch nicht in den Stammdaten markiert) und der Ausgang. | `list_court_decisions_to_assess` |
| **Einen Entscheid vorbereiten:** Kopfdaten, gemessene Textanteile der Begründung, die Bewertungsfragen mit der Pflichtform der Analyse und die Werkzeuge, mit denen die Eingaben beider Seiten geholt werden. Danach kann die KI den Entscheid lesen, ohne die Übersicht seines Falls laden zu müssen. | `prepare_decision_assessment` |
| **Die Bewertung speichern:** nur auf Ihre ausdrückliche Anweisung, nur wenn der Entscheid vollständig gelesen ist, nur mit einer englischen Analyse unter sieben Pflichtüberschriften (Argumente, Recht, Beweise, Grundlage, Stil, Ergebnis, Charakteristik), jeweils mit Inhalt, und nur, wenn jeder Richter und Gerichtsschreiber einen Stammdatensatz hat. Fehlt einer, recherchiert die KI die Person zuerst in öffentlichen Quellen und schlägt den Datensatz vor. | `record_decision_assessment` Bestätigung |
| **Gespeicherte Bewertungen** nach Richter, Gericht, Aktenzeichen oder Fall, vollständig und ungekürzt: Ihre eigenen und, mit IRONSTICK SERVER, die aller Kolleginnen und Kollegen, jeweils mit Angabe, wer bewertet hat. Die KI ruft sie vor jedem Schriftsatz an ein Gericht auf, für das Gericht und für jeden Richter des Spruchkörpers. | `read_decision_assessments` |

Sind noch Entscheide unbewertet, fragt das Auslieferungswerkzeug vor jeder
förmlichen Ausgabe, ob sie jetzt bewertet werden sollen, damit das Ergebnis noch
einfließen kann, oder später; bei „später“ folgt die Rückfrage direkt nach der
Auslieferung. Auch beim ersten Sitzungsstart des Tages fragt die KI nach.

### OCR-Reparatur mit Verifizierung durch den Anwalt

Stellt sich heraus, dass ein gespeicherter Volltext durch einen früheren
OCR-Lauf abgeschnitten oder beschädigt ist, kann die KI ihn reparieren, mit
Ihnen als letzter Instanz. Sie fordert einen frischen Scan an; Sie wählen die
Seiten in IRONSTICK (dieselbe Seitenauswahl wie bei der Dokumentenerfassung);
der neue Scan wird deterministisch bereinigt (Wasserzeichen entfernt,
OCR-Muster korrigiert, Leerraum vereinheitlicht) und im Zwischenspeicher neben
den aktuellen Datenbanktext gelegt. Die KI vergleicht dann beide Fassungen
Passage für Passage und behält die jeweils richtige. Sie ist angewiesen, nur
mechanische OCR-Fehler zu beheben, ohne umzuformulieren und ohne Zahlen, Namen
oder Beträge zu ändern. IRONSTICK zeigt Ihnen die korrigierte Fassung
vollständig, und sie ersetzt den alten Text erst nach Ihrer Freigabe.

**Gezielte Verifizierung durch den Anwalt.** Wo eine Passage ein
menschliches Auge braucht, bittet die KI Sie, bestimmte Stellen zu
prüfen, statt das ganze Dokument:

- **Große Dateien.** Bei einem PDF über 10 MB oder 90 Seiten nennt die KI die
genaue Stelle zur Prüfung, zum Beispiel „Seite
12, oben“.
- **Einige Stellen, nicht die ganze Datei.** Sie arbeiten keine
200-seitige Akte durch. Sie öffnen den Anhang in dem Eintrag, den IRONSTICK
bereits für Sie geöffnet hat, gehen zur genannten Seite und tippen die
unleserlichen Wörter oder Zahlen ab. Ist eine Passage sowohl im alten Text als
auch im neuen Scan unleserlich, bittet die KI Sie, sie mit eigenen Augen zu
prüfen: höchstens drei Stellen, jeweils mit Seite und Position.
- **Direkte Rückführung in den Volltext.** Ihre Abschrift wird wörtlich in
die korrigierte Fassung übernommen, durchläuft denselben Freigabedialog, und die
Analyse geht weiter.

IRONSTICK isoliert die unleserlichen Stellen und fragt Sie nur dazu.

| Funktion | Technischer Name |
| --- | --- |
| **Einen neuen OCR-Scan anfordern** des gespeicherten Original-PDF, seitenweise, nur für beschädigte Volltexte (Sie wählen die Seiten; geheime Dokumente sind ausgeschlossen). | `request_ocr_rescan` |
| **Scan-Status:** eine einmalige Abfrage, die den vollständigen Arbeitsauftrag liefert, sobald der Scan bereit ist (beide Texte im Zwischenspeicher). | `ocr_rescan_status` |
| **PDF-Übergabe**, die letzte Eskalationsstufe: öffnet den Eintrag, damit Sie das Original-PDF in den Chat geben können (bis 10 MB / 90 Seiten; bei größeren Dateien bittet die KI Sie, die betreffenden Stellen abzutippen, höchstens drei). Setzt einen vorherigen neuen Scan voraus. | `request_pdf_handover` |
| **Den korrigierten Volltext einreichen** bei IRONSTICK; er wird Ihnen vollständig angezeigt, und erst Ihr Speichern ersetzt den gespeicherten Volltext. | `submit_corrected_fulltext` Prüfung |

### E-Mail, Kalender und Fristen

| Funktion | Technischer Name |
| --- | --- |
| **E-Mails, die einen Begriff erwähnen** (Absender, Betreff, Ausschnitt, Anhänge). | `search_emails_mentioning` |
| **Volltext einer E-Mail.** | `read_email_body` |
| **Kalendereinträge**, global oder je Fall. | `read_kalender` |
| **Termine** für einen Tag oder Zeitraum (Verhandlungen, Besprechungen), Gerichtstermine zuerst. | `read_appointments` |
| **Alles im Fristen-Bildschirm**, nach Datum sortiert: Fristen, anstehende Gerichtstermine und Fälligkeiten von KI-Gedächtniseinträgen; filterbar nach Dringlichkeit oder Zeitraum. | `read_deadlines` |
| **Aktive Fristen** als kompakte Liste, global oder je Fall. | `read_fristen` |
| **Neuer Kalendereintrag:** öffnet das Kalenderformular vorausgefüllt (Titel, Datum, Zeiten, Beschreibung, Fall) nach einer verpflichtenden Prüfung auf Einträge am selben Tag; nichts wird automatisch gespeichert, Sie prüfen und speichern selbst. | `add_calendar_entry` Prüfung |

### Personen, Institutionen und Arbeitsaufzeichnungen

| Funktion | Technischer Name |
| --- | --- |
| **Personendatensatz** (jedes Stammdaten- und Analysefeld, vollständig) und das Beziehungsnetz einer Person oder Institution; jede Antwort beginnt mit den Fällen der Partei. | `read_person` / `read_person_relations` / `read_institution_relations` |
| **Verbindungen einer Partei:** alle, die mit einer Person, Firma oder Institution über erfasste Beziehungen und gemeinsame Fälle verbunden sind, die stärksten zuerst, mit den Fällen der Partei an der Spitze. Pflicht für jede in einem Schriftsatz genannte Partei. | `who_is_connected_with` |
| **Cluster im Parteiennetz** (deterministische Community-Erkennung, wie in der Universum-Ansicht), mit hervorgehobenen Gruppen ungewöhnlicher Dichte und optionaler Trennung von Personen und Institutionen; und die am stärksten verbundenen Parteien. | `read_cliques` / `read_top_connected` |
| **Notiz an einem geteilten Fall:** heftet eine Notiz an die Pinnwand eines über IRONSTICK SERVER geteilten Falls; sie wird direkt veröffentlicht und ist für den Fallinhaber und jeden Abonnenten sichtbar. | `send_case_note` Tor 12 · Vorbereitung |
| **Institutionsdatensatz** mit Kontaktdaten. | `read_institution` |
| **Tagesprotokoll:** die letzten Tage lesen oder durchsuchen. | `read_tagesprotokolle` / `search_tagesprotokolle` |
| **Ins Tagesprotokoll schreiben:** hält auf Ihre Bitte die Arbeit des Tages fest (gesendete E-Mails, entworfene Schriftsätze, erarbeitete Argumente, Entscheidungen). An einen bestehenden Tag wird angehängt, nie überschrieben; betroffene Fälle werden verknüpft. Schreibt direkt. | `append_tagesprotokoll` Tor 12 · Vorbereitung |
| **Kurze Notiz** als ein Eintrag im heutigen Tagesprotokoll. Schreibt direkt. | `add_daily_note` Tor 12 · Vorbereitung |
| **Neuer Chronikeintrag:** öffnet das Chronik-Formular im richtigen Fall, von der KI vorausgefüllt (Titel, Beschreibung, Ereignisdatum, Zeiten, Stichwörter); nichts wird automatisch gespeichert, Sie vervollständigen das Formular (fügen auf Wunsch Bilder hinzu) und speichern es selbst. | `add_chronik_entry` Prüfung |
| **Briefing zum Arbeitsbeginn**, je Desktop-KI getrennt verfolgt: Beim ersten Aufruf des Tages liefert es die letzten Tagesprotokoll-Einträge und markiert die KI als gebrieft; danach sagt es das. | `daily_briefing` |
| **Erfasste Arbeitszeit** je Fall und Mandant. | `read_time_tracking` |
| **Mit Tags versehene Einträge** über alle Fälle. | `read_tags` |

### Arbeitsregeln, Formate und Gedächtnis

| Funktion | Technischer Name |
| --- | --- |
| **KI-Instruktionen eines Falls:** auflisten; das Lesen liefert immer den vollen Text. | `list_ki_instructions` / `read_ki_instruction` |
| **Alle aktiven KI-Instruktionen eines Falls** in einem Aufruf (Volltexte). | `read_all_ki_instructions` |
| **Inventar der KI-Instruktionen** über alle Mandanten und Fälle (Mandant, Fall, Instruktions-ID und Dateiname; keine Volltexte). | `list_all_ki_instructions` |
| **Ausgabeformat:** die verbindlichen Formatvorgaben. Für Dokumente nennt die KI den genauen Typ (juristischer Schriftsatz oder einfacher Brief, jeweils mit oder ohne Anwalt) und erhält dieselbe Vorlage, die der integrierte Chat verwendet, an einer Stelle gepflegt. | `read_output_format` |
| **Tagesprotokoll-Format:** das verbindliche Datei- und Eintragsformat. | `read_tagesprotokoll_format` |
| **Gerichtsmail-Format:** das verbindliche Format für Gerichts-E-Mails und PDF-Pakete (Betreff und Text, Paketlisten). | `read_mailversand_format` |
| **Geteiltes KI-Gedächtnis:** frühere Erkenntnisse durchsuchen; neue Einträge vorschlagen (einem Mandanten zugeordnet, bis zu 1.000 Zeichen). Ein neuer Eintrag wird erst nach Ihrer Freigabe wirksam. Einträge, die einem Fall zugeordnet sind, werden nie automatisch gelöscht; Einträge ohne Fall nach einem Jahr ohne Nutzung, und jede Nutzung erneuert dieses Jahr. | `memory_search` / `memory_store` Prüfung |
| **Gedächtniseinträge pflegen:** einen Eintrag umformulieren, sein Fälligkeitsdatum verschieben oder löschen (mit Bericht über belegte und freie Zeichen) oder ihn löschen; jede Änderung wird erst nach Ihrer Freigabe wirksam. | `memory_update` / `memory_delete` Prüfung |
| **Export des KI-Instruktionspakets** eines Mandanten, über den Exportdialog. | `export_ai_instruction` |

### Vorschläge zur Prüfung durch Sie

| Funktion | Technischer Name |
| --- | --- |
| **Stammdatenkorrektur oder neuer Datensatz**, einschließlich einer Umbenennung und der Art (natürliche oder juristische Person); für einen neuen Datensatz muss zuerst die Art entschieden sein. Der Vorschlag geht zur Freigabe in den Datenkonsistenz-Monitor. Ein neuer Datensatz wird zunächst mit einer Liste ähnlicher bestehender Datensätze beantwortet, und nichts wird gespeichert, bis die KI bei einem davon ablegt oder ausdrücklich eine neue Partei bestätigt; jede gespeicherte neue Partei löst den Folgeauftrag aus, ihre Verbindungen zu recherchieren und abzulegen. | `propose_master_data` Prüfung Tor 16 · Ähnliche Partei |
| **Beziehung** zwischen Personen oder die Änderung einer bestehenden; derselbe Prüfweg. | `propose_relation` Prüfung |
| **Eine Partei einem Fall zuordnen:** genau eine Person, Firma oder Institution, mit Pflichtbegründung und optionalen Dokumentverweisen, geht in den Datenkonsistenz-Monitor. Mit Ihrer Annahme wird die Partei Fallbeteiligte und erscheint in den Cluster- und Verbindungsansichten. Eine bestehende Verknüpfung oder eine anhängige Dublette wird gemeldet, statt erneut vorgeschlagen zu werden. | `propose_case_link` Prüfung |
| **Analysetext zu einer Person**; wird verweigert, solange die KI das Profil nicht innerhalb der letzten 30 Minuten gelesen hat. | `propose_person_analysis` Prüfung Tor 14 · Analyse-Lesen |
| **Parteienprüfung aus öffentlichen Quellen** zu einer Person oder Firma — das Standardverfahren zur Prüfung einer Partei. Eingabe: Name, Stadt, Bezirk, Land und Art (natürliche oder juristische Person). IRONSTICK führt dann immer dieselben Schritte aus: eine Volltextsuche nach dem Namen über die gesamte Datenbank (je Fall die zehn neuesten Dokumente mit Absatzpositionen sowie die Zahl weiterer Treffer) und eine feste Liste von Websuchen in der Sprache des Landes der Partei bei Google, DuckDuckGo und Qwant, Dubletten entfernt. Liefert ein vorbereitetes Profil mit jedem verwendeten Suchbegriff; die KI prüft jeden Fund und Link und legt die Daten über den Datenkonsistenz-Monitor ab. | `osint_entity` |
| **Namenslisten-Abgleich:** gleicht ein Dokument, das eine Namensliste enthält — eine Kontaktliste aus sozialen Medien, eine Teilnehmer- oder Unterschriftenliste, ein Impressum —, in einem Aufruf mit allen aktenkundigen Personen und Firmen ab (Wortreihenfolge und Vornamen mit Bindestrich werden berücksichtigt; ein einzelner häufiger Vorname gilt nie als Treffer, und Treffer mit nur einem Namensbestandteil werden als mehrdeutig markiert). Nimmt eine Dokument-ID oder einen Fall, dann wird der neueste Eintrag dieses Falls geprüft und benannt. Keine KI, keine Schreibvorgänge. | `entity_scan_evidence` |
| **Löschung oder Dublette:** schlägt vor, einen falschen Datensatz, einen Tag oder eine erledigte Frist zu entfernen (eine Begründung in der Systemsprache ist Pflicht) oder zwei Datensätze als Dubletten zusammenzuführen. Ohne Ihre Freigabe wird nichts gelöscht oder zusammengeführt. | `propose_deletion` / `propose_duplicate` Prüfung |
| **Geänderte KI-Instruktion:** schlägt eine neue Fassung vor (Ergänzung, Datei oder vollständiger Inhalt). IRONSTICK öffnet den Fall, zeigt Ihnen einen Rot/Grün-Vergleich und übernimmt die Änderung erst nach Ihrer Annahme; die Entscheidung wird der KI zurückgemeldet. | `update_ki_instruction` Prüfung |

### Zwischenspeicher für große Inhalte

Ein lokaler Arbeitsbereich für die KI. Jeder Werkzeugaufruf kann sein
vollständiges Ergebnis in eine Zwischenspeicher-Datei leiten; die KI erhält dann
nur den Pfad und die Größe, ohne Vorschau. Jedes Ergebnis oberhalb der
Konnektor-Grenze (10.000 Zeichen; 40.000 bei Claude Desktop und ChatGPT Desktop)
geht automatisch auf dieselbe Weise dorthin, Toolset-Öffner eingeschlossen. Große
Inhalte laufen daher in keiner Richtung durch die Ausgabe der KI, was schneller
und günstiger ist und Abschreibfehler vermeidet; die KI liest sie abschnittsweise
aus dem Speicher. Zwischenspeicher-Dateien lassen sich direkt an das
Auslieferungswerkzeug und an Instruktions-Aktualisierungen übergeben. Der
Speicher übersteht Neustarts: die Notizen der KI, ihr Zustandsregister und die
Aufzeichnungen der Lese-Deckung bleiben erhalten; Werkzeugausgaben früherer Tage
werden bei jedem Start entfernt, und Dateien, die 180 Tage lang weder gelesen
noch geschrieben wurden, werden automatisch gelöscht (die Endfassung eines
Schriftsatzes nach 360 Tagen).

**Der Zwischenspeicher ist verschlüsselt.** Jede Datei darin ist im
Ruhezustand AES-256-verschlüsselt, mit derselben Schlüsselableitung wie die
Falldatenbank und der Dokumentenspeicher. Lesen und Schreiben laufen nur durch
IRONSTICK; eine Klartextdatei, die auf irgendeinem anderen Weg in den Speicher
gelegt wird (ein Dateisystem-Werkzeug, eine manuelle Kopie), wird verweigert,
entfernt und der KI als Regelverstoß gemeldet. Dateien verlassen den Speicher
nur über den Exportdialog von IRONSTICK. Die Datenbank, der
Dokumentenspeicher, die Konfigurationsdatei und der Zwischenspeicher sind damit
im Ruhezustand alle AES-256-verschlüsselt.

**Kein Werkzeug kürzt sein eigenes Ergebnis.** Die Lese-Werkzeuge für
Dokument-Volltexte, ganze Fälle, E-Mails, Webseiten (vollständige Gesetze und
Urteile), das Tagesprotokoll, Personendatensätze und die Chronik liefern ihren
Inhalt immer vollständig. Eine zentrale Regel entscheidet, wo er ankommt:
unterhalb der Konnektor-Grenze in der Antwort, oberhalb als Ganzes in der
Zwischenspeicher-Datei; die KI muss die Größe eines Ergebnisses nicht im Voraus
raten.

**Frische-Prüfung:** IRONSTICK überwacht jede Zwischenspeicher-Datei. Sobald
sich die zugrunde liegenden Daten ändern — ein neues Dokument oder ein neuer
Chronikeintrag im Fall, ein Kalender- oder Tagesprotokoll-Eintrag — oder eine
Datei verfällt, wird ihr Inhalt durch einen Hinweis ersetzt, der der KI sagt, wie
sie ihn neu abruft. Veraltete Zwischenspeicher-Dateien werden automatisch
ungültig.

| Funktion | Technischer Name |
| --- | --- |
| **Text-Werkzeuge:** schreiben (in Teilen) und zeilennummerierte Bereiche lesen; mit Zeilennummern in einer Datei oder in allen suchen; exakten Text ersetzen; an einer Zeile oder nach einer Marke einfügen; Zeilenbereiche in einem Schritt löschen oder ersetzen. | `scratch_write` / `scratch_read` / `scratch_grep` / `scratch_edit` / `scratch_insert` / `scratch_delete_lines` / `scratch_replace_lines` Tor 4 · Lese-Deckung |
| **Zustandsregister der Sitzung** (Schlüssel und Wert), vor allem um festzuhalten, welche Datei der aktuelle Hauptentwurf ist; übersteht Neustarts. | `scratch_statetracking` |
| **Gliederung, Vergleich und Zählungen:** alle Überschriften mit ihren Zeilenbereichen; Vergleich zweier Dateien; eine Arbeitskopie; Wort-, Buchstaben- und Zeilenzählung. | `scratch_list_titles` / `scratch_diff` / `scratch_copy` / `scratch_countwords` / `scratch_countletters` / `scratch_countlines` |
| **Bereinigung:** Leerraum und Zeilenenden vereinheitlichen und unsichtbare Zeichen entfernen; eine vereinfachte Vergleichskopie (Kleinbuchstaben oder ohne Diakritika) in einer eigenen Datei anlegen. | `scratch_correctspace` / `scratch_correctcrlf` / `scratch_asciskeleton` |
| **Schriftsatzformat:** vor der Auslieferung von Markdown-Dateien erforderlich; wandelt die Markdown-Struktur in das Schriftsatzformat um (Tabellen in Textzeilen, nummerierte Listen in „(1)“, Aufzählungspunkte in „•“, Links in Text). Der Inhalt bleibt erhalten. | `scratch_normalizemd` |
| **Zwischenspeicher-Dateien auflisten und löschen**; Dateien, die 180 Tage lang nicht verwendet wurden, werden automatisch gelöscht, und dauerhafte Erkenntnisse gehören ins KI-Gedächtnis. | `scratch_dirlist` / `scratch_deletefile` Tor 4 · Lese-Deckung |

### Web, Register und Validierung

| Funktion | Technischer Name |
| --- | --- |
| **Websuche und Seitenabruf.** Jede Suche fragt Google, DuckDuckGo und Qwant gleichzeitig ab und liefert eine zusammengeführte Liste ohne Dubletten. Eine Seite wird als vollständiger, lesbarer Text abgerufen: Der Hauptinhalt wird extrahiert (Navigation, Werbung und Cookie-Banner entfernt; auf Artikelseiten auch die Fußzeile). Auf Seiten ohne Artikelkörper, etwa Firmen- und Kontaktseiten, bleibt die Fußzeile, weil dort Adress- und Kontaktdaten stehen; wo die Extraktion fast nichts übrig ließe, wird die ganze Seite geliefert. Eine blockierte oder fehlerhafte Seite wird noch einmal im eingebetteten Browser versucht, und der HTTP-Status wird gemeldet. Ein Aufruf antwortet innerhalb von 45 Sekunden; große oder gescannte Dokumente werden im Hintergrund weiterverarbeitet und beim nächsten Aufruf mit derselben Adresse geliefert. | `web_search` / `open_url` Tor 2 · Gesetz |
| **Einzelner Gesetzesartikel**, wörtlich, nach Bibliotheksnummer und Artikelnummer — der vorgesehene und günstigste Weg, ein Zitat zu belegen; erfasst genau diesen Artikel als gelesen. | `get_legal_article` |
| **Ein Gesetz erneut prüfen** gegen seine Quelle, sofort (unverändert, aktualisiert oder Dublette); eine neuere Fassung ersetzt den Eintrag, auch büroweit auf IRONSTICK SERVER, wo die jüngste Prüfung gilt. | `recheck_legal_source` |
| **Gesetze suchen, abrufen und hinzufügen.** Die Suche ist unscharf, und der Rechtsraum ist ein Pflichtparameter, sodass Rechtsordnungen nie vermischt werden. Der Abruf liefert den gespeicherten Gesetzestext wörtlich als Markdown, die KI zitiert also aus der geprüften Bibliothek, nicht aus dem Gedächtnis des Modells. Die KI muss jede einschlägige online gefundene Quelle registrieren, nur als Link; IRONSTICK lädt, konvertiert und prüft den Text selbst, und Sie geben ihn über die Prüfung im Datenkonsistenz-Monitor frei. | `search_legal_source` / `get_legal_source` / `add_legal_source` Tor 2 · Gesetz Prüfung |
| **Bibliotheksinventar und Auszüge:** durch die Bibliothek blättern (ID, Rechtsraum, Titel, Prüfdatum); einen wörtlichen Auszug eines Gesetzes nach Bibliotheksnummer und Zeichenbereich abrufen (Suchtreffer liefern einen fertigen Aufruf mit vergrößertem Bereich); ein ganzes Gesetz nach Bibliotheksnummer laden. | `list_legal_sources` / `grep_legal` / `get_legal_by_lnumber` |
| **Validierung** von USt-IdNr. (live gegen den EU-Dienst VIES), EORI-Nummern, LEI, IBAN und nationalen Ausweisnummern (neun Schemata in sieben Ländern). | `validate_vat_vies` / `validate_eori` / `validate_lei` / `validate_iban` / `validate_id_number` |
| **Handelsregister:** öffnet die Suche „Unternehmen finden“ des Europäischen E-Justiz-Portals (BRIS) im eingebetteten Browser, damit die KI sie lesen kann. | `check_handelsregister` |

**Bibliothekspflege und büroweite Freigabe.** Jedes Gesetz in der
Gesetzes-Bibliothek trägt seinen Quelllink und sein Prüfdatum; Einträge, die über
einen Monat nicht geprüft wurden, werden gekennzeichnet. Das Ablehnen eines Gesetzes
im Datenkonsistenz-Monitor verlangt zuerst eine Bestätigung. Mit
IRONSTICK SERVER auf einem Synology NAS wird die Bibliothek büroweit geteilt: Ein
Gesetz, das ein Kollege einmal geprüft hat, zitiert die KI an jedem Arbeitsplatz,
mit demselben Text und derselben Fassung.

### Peer-Review durch eine zweite Desktop-KI

| Funktion | Technischer Name |
| --- | --- |
| **Zur Prüfung übergeben:** gibt ein von der KI erarbeitetes Stück (Argument, Strategie, Schriftsatz) einer anderen Desktop-KI zur kritischen Prüfung. Der Volltext wird in einem kurzlebigen Puffer abgelegt, und eine Aufgabe verweist darauf. Typische Anfrage: „Lass das die andere KI prüfen.“ | `handoff_to_peer` |
| **Offene Prüfaufgaben,** die die andere KI an diese gerichtet hat (die eigenen erscheinen nie), mit ihrem vollständigen Inhalt. | `read_open_tasks` |
| **Antwort:** schließt eine eingehende Aufgabe (ihr Inhalt wird gelöscht) und gibt die Bewertung als neue Aufgabe an den Absender zurück, in einem Aufruf. | `reply_to_task` |
| **Ohne Antwort schließen:** beendet die Runde; der kurzlebige Inhalt wird gelöscht. | `complete_task` |

### Übergabe und Auslieferung

| Funktion | Technischer Name |
| --- | --- |
| **Ein Dokument exportieren** der Akte als PDF in Ihren Dokumente-Ordner. | `export_pdf` |
| **Personenblatt:** öffnet den Exportdialog mit dem PDF-Personenblatt einer Partei (Stammdaten, Fallbeteiligungen, Personenanalyse, Beziehungen; nur ausgefüllte Felder). | `export_entity` |
| **Schriftsatz-Prüfung:** die verpflichtende deterministische Prüfung eines fertigen Schriftsatzes — Dokumentverweise mit dokumentgebundenen Lesenachweisen, Gesetzeszitate gegen die geprüfte Bibliothek, Zitate, Aktenzeichen im Format n/nnn/jjjj, Beträge (exakte Übereinstimmung), Partei-Stammdaten, rumänische Personenkennzahlen (CNP) und IBAN (Prüfsumme) sowie jede genannte Partei gelesen und auf Verbindungen geprüft. Die Auslieferung eines förmlichen Dokuments ist ohne aktuelle positive Prüfung für genau diesen Dateistand gesperrt; das Prüfen eines anderen Dokuments setzt die Beilagen-Lesevorgänge zurück. | `verify_pleading` Tor 3 · Schriftsatz-Prüfung |
| **Dateiauslieferung:** übergibt eine fertige Datei über den Exportdialog von IRONSTICK; ein Textentwurf geht mit einem Klick als einreichungsfähige Vorlage in die Textverarbeitung. Akzeptiert nur eine Datei im Zwischenspeicher der Anwendung; Inline-Inhalt und andere Pfade werden verweigert, damit Prüfung, Versionierung und Verfolgung der Neuauslieferung an jeder Auslieferung haften bleiben. Sind auf der Bewertungsliste noch Gerichtsentscheide offen, fragt es vor jedem Schriftsatz und jeder E-Mail an ein Gericht oder eine Behörde, ob sie jetzt oder später bewertet werden sollen. | `deliver_file` Tor 3 · Schriftsatz-Prüfung Tor 7 · Förmlicher Inhalt Tor 8 · Versionsreihe |
| **Auslieferung wiederholen:** öffnet den IRONSTICK-Dialog erneut für eine Datei, die bereits ausgeliefert wurde und seither unverändert ist, wenn Sie dieselbe Datei noch einmal verlangen; keine Tore, keine Prüfung, keine neue Version. Dateien, die noch nicht ausgeliefert oder seit der Auslieferung geändert wurden, werden verweigert und als Regelverstoß protokolliert; sie erfordern eine neue Auslieferung. | `redeliver_file` |

### Hilfsfunktionen

| Funktion | Technischer Name |
| --- | --- |
| **Standort und Wetter:** ungefährer Standort des Benutzers (Land, Stadt) aus dem letzten Anmelde-Eintrag; aktuelles Wetter für einen genannten Ort. | `get_my_location` / `get_weather` |

## 7. Sorgfalts-Wächter: Wie die Bridge die Gründlichkeit der KI prüft

Acht **deterministische Sorgfalts-Wächter** prüfen, wie sorgfältig die
verbundene KI tatsächlich arbeitet. Als reine Buchführung und Textlogik
beteiligen sie keine KI und lassen sich vom Modell nicht aushebeln:

- **Lese-Deckungs-Wächter.** Ruft die KI einen vollständigen Falltext, die
Vorbereitungsdateien eines Falls oder einen Volltext oberhalb der
Konnektor-Grenze ab, hält die Bridge Zeile für Zeile fest, welche Bereiche sie
*tatsächlich* gelesen hat, und führt diese Aufzeichnungen über Neustarts
hinweg. Solange Lücken bleiben, nennt **jede** Werkzeugantwort, auch Suchen,
die genauen ungelesenen Zeilenbereiche mit einer Prozentangabe. Ein vollständiger
Lesevorgang lässt sich erst behaupten, wenn die Aufzeichnungen ihn bestätigen;
erst dann erhält die KI die einmalige Bestätigung *„COMPLETE — alle Zeilen
gelesen“*, und der Lesevorgang wird für die Fallvorbereitung festgehalten.
- **Keine Vorschau.** Jedes Ergebnis oberhalb der Konnektor-Grenze (10.000
Zeichen; 40.000 bei Claude Desktop und ChatGPT Desktop) wird als Ganzes in den
Zwischenspeicher geschrieben; die KI erhält nur einen Hinweis mit dem Dateinamen,
der Größe und den zwei Befehlen zum Fortsetzen. Nichts wird zweimal gezeigt, und
große Inhalte werden im Zwischenspeicher gelesen. Das gilt für jedes Werkzeug,
Toolset-Öffner eingeschlossen; nur der Instruktionsleser und die
Zwischenspeicher-Werkzeuge selbst antworten direkt. Kein Werkzeug kürzt sein
eigenes Ergebnis: unterhalb der Grenze kommt es vollständig in der Antwort an,
oberhalb vollständig im Zwischenspeicher.
- **Wächter der Neuauslieferung.** Korrigiert die KI eine Arbeitsdatei
weiter, *nachdem* sie Ihnen bereits ausgeliefert wurde, wird jede weitere
Bearbeitung mit der Erinnerung beantwortet, dass Sie gerade die veraltete
Fassung in Händen halten und dass die korrigierte Datei erneut ausgeliefert
werden **muss**.
- **Wächter nicht ausgelieferter Entwürfe.** Schreibt die KI ihr
Tagesprotokoll, ihr Signal, dass sie abschließt, führt die Bridge namentlich
jeden in der Sitzung geschriebenen versionierten Entwurf auf, der nie
ausgeliefert wurde. Fertige Arbeit kann nicht unbemerkt im Arbeitsspeicher der
KI liegen bleiben.
- **E-Mail-Format-Wächter.** Jeder Zugriff auf E-Mail-Inhalte trägt einen
Verweis auf die verbindliche Mail-Format-Vorgabe (Betreff, Text, Pflichtinhalt,
Sprachregeln), sodass die KI an den einen richtigen Auslieferungsweg erinnert
wird, *bevor* sie eine E-Mail entwirft.
- **Kopierfeld-Wächter.** Jedes Mal, wenn die KI eine Text-Arbeitsdatei
schreibt oder bearbeitet, erinnert die Antwort sie daran, dass Dokumente den
Benutzer **nur** über das Auslieferungswerkzeug erreichen; einen fertigen
Brief als Text oder Kopierfeld in den Chat einzufügen umgeht Formatierung,
Prüfung und Auslieferungs-Verfolgung und zählt als Regelverstoß. Das einzige
legitime Kopierfeld-Format bleibt die E-Mail, wie in der Mail-Format-Vorgabe
festgelegt.
- **Fall-Anker.** Jede Werkzeugantwort, die einen Fall berührt, trägt die
registrierte Nummer, den Mandanten und den Gegenstand des Falls (Tor 10), sodass
Kontext aus einem anderen Fall im selben Fenster entlarvt wird.
- **Steuerung der Modellklasse.** Die Instruktionen sagen der KI, welche
Modellklasse eine Aufgabe braucht: Vor den Schriftsatz-Werkzeugen
(Ausgabeformat, Prüfung, Auslieferung) bittet sie Sie in einem Satz, den
Desktop-Client auf das Spitzenmodell umzuschalten, und nach der Auslieferung
teilt sie Ihnen mit, dass ein günstigeres Modell wieder genügt. Zeigen die
Vorschlagszähler Pflege des Parteiennetzes (zwei Stammdatenvorschläge und ein
Beziehungs- oder Fallverknüpfungsvorschlag), hängt die Bridge einmal je Sitzung
den Hinweis an, dass diese vollständig torgesicherte Arbeit kein Spitzenmodell
braucht. Sie entscheiden; die KI arbeitet weiter.

Die Werkzeugausführung läuft innerhalb der Anwendung getrennt von der
Benutzeroberfläche, sodass lange KI-Zugriffe auf große Fallakten die
Oberfläche von IRONSTICK nicht blockieren.

## 8. Schriftsatz-Prüfung: Auslieferung nur gegen Nachweis

Schriftsätze und Briefe entstehen im Dialog mit der Desktop-KI an der lebenden
Akte, mit derselben Arbeitsebene und denselben Toren wie der integrierte Chat von
IRONSTICK. Was das System verlässt, ist eine **einreichungsfähige
Vorlage** zu Ihrer Prüfung und Unterschrift. Zwei Prüfungen stehen vor jeder Übergabe: die hier beschriebene
deterministische Prüfung und, wenn Sie es in der Konfiguration für das aktive
API-Modell einschalten, die **Red/Blue-Team**-Prüfung: Ein gesonderter
Prüfdurchgang liest den Entwurf als gegnerischer Anwalt; gewichtige Befunde
schicken ihn zur Überarbeitung zurück, höchstens zwei Runden, und jeder Punkt
wird in der Sache analysiert, nicht automatisch übernommen. Hält die KI die
Befunde für unbegründet, reicht sie die unveränderte Datei mit einer
schriftlichen Antwort auf jeden Befund erneut ein; der Prüfer läuft auf einer
unveränderten Datei nicht ein zweites Mal, und der Prüfbericht erreicht Sie
zusammen mit diesen Antworten. Die Übergabe selbst läuft über den Exportdialog
von IRONSTICK, von wo der Entwurf mit einem Klick in die Textverarbeitung
geht.

**Keine stillen Änderungen nach der Auslieferung.** Ist ein Dokument
ausgeliefert, wird eine Korrektur nie still eingearbeitet: Die alte Fassung wird
sichtbar entwertet, und es entsteht eine neue Version. Ihre Korrekturen fließen
in die Prüfung ein.

Ein förmlicher Schriftsatz kann das System nicht ungeprüft verlassen.
`verify_pleading`, ein deterministischer Prüfer (keine KI), prüft den
fertigen Entwurf gegen Ihre lebenden Datensätze und die geprüfte
Gesetzes-Bibliothek in **acht Klassen**:

- **Dokumentverweise** — Ablagestempel und #-Nummern, in der Beilagenliste
und im Fließtext: Existenz, Zugehörigkeit, Stempelintegrität und der
**dokumentgebundene Lesenachweis**. Jedes zitierte oder beigefügte Stück muss
für dieses Dokument als gelesen gelten, entweder vollständig abgerufen oder mit
vollständig gelesener Zwischenspeicher-Datei; ein Lesevorgang zählt 2 Stunden,
jede Auslieferung desselben Dokuments verlängert ihn, und das Prüfen eines
anderen Dokuments setzt die Beilagen-Lesevorgänge zurück. Zitate aus
Such-Ausschnitten oder aus dem Gedächtnis fallen durch die Prüfung. Eine
Beilagenzeile darf einen Seitenbereich angeben („S. 12–15“); die Lesepflicht
umfasst weiterhin das ganze Dokument.
- **Gesetzeszitate** — der zitierte Artikel muss im geprüften
Bibliothekstext existieren (tolerant gegenüber Tausenderpunkten, exakt an
Wortgrenzen) und einen **Lesenachweis** tragen: Die KI muss diesen Artikel in
diesem Programmlauf aus der Bibliothek abgerufen haben. Presseartikel,
Web-Zusammenfassungen und das Gedächtnis des Modells stützen nie ein
Gesetzeszitat und fallen durch die Prüfung. Zitierte Unterverweise (Absatz,
Punkt) werden ebenfalls auf Existenz geprüft. Eine Quelle, die in der Bibliothek
fehlt, wird nicht übergangen: Die KI muss sie anfordern, und die Anforderung
erscheint in **Ihrem Zustimmungsdialog**. Ausgewählte Quellen werden abgerufen,
geprüft und gespeichert; abgelehnte nicht, und jedes spätere Zitat daraus trägt
einen sichtbaren Vermerk „vom Benutzer abgelehnt“.
- **Wörtliche Zitate** — jedes Zitat muss wörtlich in einem Dokument Ihres
Bestands oder in der Gesetzes-Bibliothek vorkommen (OCR-tolerant). Stammt es aus
dem Dokument eines anderen Falls, nennt der Prüfer dieses Dokument, und die KI
liest dann nur dieses, nicht die Übersicht des anderen Falls. Ein Zitat, das in
keiner Quelle gefunden wird, gilt als widerlegt und sperrt die Auslieferung. Die
Anführungszeichen zu entfernen oder die Passage leicht umzuformulieren hilft
nicht: Das gesperrte Zitat wird für das Dokument gemerkt und bleibt gesperrt. Das
Zitat ganz zu streichen ist zulässig, und die Auslieferung nennt Ihnen, welche
Zitate entfernt wurden, weil keine Quelle sie enthält.
- **Aktenzeichen** im Format n/nnn/jjjj, geprüft gegen Ihre Fälle und
Datensätze.
- **Beträge: exakte Übereinstimmung erforderlich.** Die Zahl muss der
erfassten Form genau entsprechen; „14.500“, wo das Register „14.500,00“ sagt,
sperrt die Auslieferung bis zur Korrektur.
- **Partei-Stammdaten** — jeder verwendete Name muss der registrierten
Schreibweise Buchstabe für Buchstabe entsprechen, Diakritika eingeschlossen.
- **Rumänische Personenkennzahlen (CNP) und IBAN** — Prüfsummenvalidierung
(eine ungültige Prüfziffer deutet auf eine erfundene oder falsch getippte Nummer
hin) plus Abgleich mit den Datensätzen.
- **Genannte Parteien** — jede im Dokument genannte Person oder Firma muss
gelesen (Profil) und auf Verbindungen geprüft worden sein
(`who_is_connected_with`); die Verweigerung nennt beide Aufrufe und
empfiehlt zusätzlich die Cluster-Prüfung (`read_cliques`).

Jeder Befund wird als verifiziert, unverifiziert oder widerlegt eingestuft. Die
Auslieferung eines förmlichen Dokuments wird ohne aktuelle positive Prüfung für
genau diesen Dateistand verweigert; **jede Bearbeitung hebt sie auf**. Nach
fünf gescheiterten Prüfläufen bricht der Vorgang ab, die KI wird angewiesen,
anzuhalten und zu berichten, und **Sie** werden direkt in der Anwendung
benachrichtigt. Auslieferungen laufen ausschließlich über den eigenen
Zwischenspeicher der Anwendung, damit Prüfung, Versionierung und Verfolgung der
Neuauslieferung an jeder Datei haften bleiben; Inline-Auslieferung und andere
Pfade werden verweigert.

## 9. Datenschutz

Die Bridge liefert **Rohfalldaten** in die Sitzung Ihrer
Desktop-KI, bewusst, denn das Entwerfen einer einreichungsfähigen Vorlage braucht
echte Namen, Zahlen und Daten. Alles, was die KI dort liest, wird unter Ihrem
eigenen Konto bei diesem Anbieter (Anthropic, OpenAI, Qwen oder Moonshot AI /
Kimi) und unter dessen Bedingungen verarbeitet. Der integrierte Chat überträgt
dagegen pseudonymisierte Daten über den Router. Die vollständige Offenlegung,
einschließlich der Grenzen, steht in der [*IRONSTICK
DSGVO-Datenfluss-Erklärung*](https://www.ironstick.legal/gdpr_de.html).
**Kostenlose Hintergrund-Anbieter.** Die kostenlosen Anbieter, die
Sie in der Konfiguration für Hintergrundaufgaben zuschalten können (Groq,
OpenRouter, Mistral), werden von der Bridge nicht verwendet.
**Zugangscode.** Die Bridge folgt der Startsperre von
IRONSTICK: Bis der sechsstellige Authenticator-Code auf dem
IRONSTICK-Startbildschirm eingegeben ist, wird jeder Werkzeugaufruf mit
„Anwendung gesperrt — der Sicherheitscode ist noch nicht eingegeben“ beantwortet
und keine Falldaten werden zurückgegeben. Code in IRONSTICK eingeben, dann die
Anfrage wiederholen.
Version 1.0.7 — Stand: November 2026. Die Werkzeugliste entspricht
der mit dieser Version ausgelieferten Bridge; im Lauf der Zeit können Werkzeuge
hinzukommen.

## Anhang — Vollständige technische Beschreibung der Bridge

Geltungsbereich: Version 1.0.7 — Stand: November 2026; mehr als 200 Werkzeuge in 22 Toolsets, Model Context Protocol (MCP). Dieser Anhang ist für die Prüfung durch IT und Datenschutz geschrieben und beschreibt die Architektur, jede Funktionsschicht, die Sicherungen, die Grenzen und die Umleitungen der Bridge.

### 1. Zweck und Einordnung

Die Bridge verbindet kommerzielle Desktop-KI-Anwendungen (Claude Desktop, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) mit einer laufenden IRONSTICK-Anwendung zur juristischen Fallverwaltung auf demselben Rechner. Die Desktop-KI erhält über das Model Context Protocol (MCP) eine kontrollierte, selbstbeschreibende Werkzeugoberfläche; jeder Aufruf wird innerhalb der IRONSTICK-Anwendung gegen die Live-Datenbank ausgeführt, und jedes Ergebnis wird von der Bridge nachbearbeitet, bevor es das Modell erreicht. Die Entwurfsziele sind: minimale dauerhafte Kontextlast für das Modell, strukturelle Durchsetzung von Arbeitsregeln, die bloßer Instruktionstext nicht garantieren kann, Schutz ungespeicherter Arbeit des Benutzers, Schutz der Daten vor übergroßen oder fehlgeleiteten Anfragen und das vollständige Fehlen lesbaren Konfigurationsmaterials im installierten Produkt.

### 2. Prozesstopologie

Die Bridge besteht aus zwei zusammenarbeitenden Prozessen.

Die IRONSTICK-Anwendung betreibt einen lokalen, geschützten Dienst, der nur auf demselben Rechner erreichbar ist. Dieser Dienst besitzt das Werkzeugregister, führt alle Werkzeugaufrufe aus, wendet alle Tore und Nachbearbeiter an und ist die einzige maßgebliche Stelle dafür, was ein verbundenes Modell sehen und tun darf.

Vor jeder Desktop-KI steht eine kleine native ausführbare Datei. Sie spricht das Standard-MCP-Protokoll zur Desktop-KI hin und reicht die Arbeit über die geschützte lokale Verbindung an die Anwendung weiter. Jede Desktop-KI hat ihre eigene Kopie dieser Datei mit einer eigenen Aufruferkennung; eine Instruktionsdatei liegt bei der Bridge nicht. Die Aufruferkennung reist als internes Argument mit jedem Werkzeugaufruf mit und steuert das gesamte Verhalten je KI. Das Front-End sendet außerdem etwa alle drei Sekunden einen Heartbeat an die Anwendung, solange eine Desktop-KI verbunden ist; die Anwendung zeigt dies als Präsenzanzeige „Bridge verbunden“ mit einer Lebensdauer von fünfzehn Sekunden, sodass der Benutzer immer sieht, ob gerade eine externe KI angeschlossen ist.

Beim MCP-Initialize-Handshake gibt das Front-End seine Serveridentität und, eingebettet in das Initialize-Ergebnis, den Instruktionstext für den Sitzungsstart zurück; diesen Text holt es im selben Moment über einen internen Kanal von der laufenden Anwendung. Ist die Anwendung geschlossen, wird keine Instruktion ausgeliefert, und der Instruktions-Riegel der Anwendung erzwingt das Lesen, sobald sie läuft. Das vollständige Regelwerk bleibt dem Modell jederzeit über ein eigenes Werkzeug verfügbar.

### 3. Sicherheit, Lizenzierung und Zustimmung

Der Verkehr zwischen dem Bridge-Programm der Desktop-KI und IRONSTICK bleibt auf diesem Rechner (lokale Loopback-Verbindung, tokengeschützt); nur die Web- und Register-Werkzeuge greifen auf das Internet zu. Die Webzugriffs-Werkzeuge erreichen nur öffentliche Internetadressen, sodass ein Modell nicht dazu gebracht werden kann, über die Bridge den Rechner oder das lokale Netz abzutasten.

Die Bridge und die Desktop-Integrationen je Anbieter sind getrennt lizenzierte Zusatzmodule. Jedes wird als Modul-Bit im signierten Lizenzschlüssel der Client-App freigeschaltet; es gibt keinen eigenen Bridge-Schlüssel. Ein nicht lizenziertes Modul wird weder installiert noch bereitgestellt.

Ein Zustimmungs-Tor schützt bei jeder Desktop-KI-Verbindung den ersten Datenzugriff je Programmlauf: Der erste Werkzeugaufruf einer beliebigen Desktop-KI nach dem Programmstart öffnet einen Warndialog über dem aktuellen Bildschirm. Stimmt der Benutzer zu, ist der Zugriff für alle Desktop-KIs für den Rest des Laufs offen; lehnt der Benutzer ab, sind alle zehn Minuten lang gesperrt, und jeder gesperrte Aufruf gibt eine Meldung zurück, die die Desktop-KI bittet, es später erneut zu versuchen; nach den zehn Minuten öffnet der nächste Zugriff den Dialog erneut. Der Zustand wird nur im Arbeitsspeicher gehalten und nie gespeichert.

Unabhängig von der Zustimmung bewacht ein Instruktions-Riegel jede Desktop-Verbindung: kein Werkzeug, Toolset-Öffner und das Mitglieder-Ausführungswerkzeug eingeschlossen, wird ausgeführt, bis der Aufrufer die Instruktionen gelesen und das Halluzinationsverbot (Regel 5) über das Bestätigungswerkzeug wörtlich zitiert hat; nur der Instruktionsleser, das Bestätigungswerkzeug und das Systemsprache-Werkzeug bleiben offen. Die Bestätigung wird je Desktop-KI geführt und verfällt sechzig Minuten nach ihrer Abgabe, nach zwei Stunden ohne Aufruf, um Mitternacht, bei jeder neuen Verbindung und nachdem die Desktop-KI ihren Kontext verdichtet hat; nach einem Verfall muss der Aufrufer die Instruktionen neu lesen und eine zufällig gewählte Regel zitieren statt derjenigen, die er bereits auswendig kennt. Auf der Claude-Verbindung ist jeder Chat ein eigener Aufrufer (auseinandergehalten über die strukturierten Werkzeug-Ereignisse aus Claudes lokalem Sitzungsprotokoll, nie über den Gesprächstext), ein Chat, dessen Kontext verdichtet wurde, wird sofort und ohne Strafe gesperrt, bis er die Instruktionen neu gelesen hat; und einem Chat, der mit seinen eigenen Datei-Werkzeugen statt über den Konnektor auf den Datenordner zugreift, wird das als Regelverstoß vermerkt. Eine Verweigerung nennt die zwei Aufrufe, die den Riegel öffnen, und das Aufklappmenü am Symbol der KI in der Anwendung zeigt den Zustand als grünen Haken oder rotes Kreuz.

Jede datenlesende und datenschreibende Funktion wird gegen die aus der Lizenz abgeleitete Eigentümeridentität eigentümervalidiert. Als geheim markierte Beweismittel-Datensätze sind ausnahmslos von jeder Lese-, Such-, Dump- und Stempelfunktion ausgeschlossen; als gelöscht markierte Datensätze sind ebenso unsichtbar.

### 4. Instruktionssystem

Die Anleitung des Modells kommt in drei Schichten mit streng zunehmender Spezifität und streng abnehmender Verweildauer.

Die Kerninstruktion wird einmal ausgeliefert, innerhalb des Initialize-Ergebnisses. Sie enthält das Mandat (faktenbasierte juristische Arbeit auf Senior-Associate-Niveau), die universellen Regeln (die Dialogsprache entspricht der IRONSTICK-Systemsprache; der Rechtsraum erzeugter Dokumente kommt aus dem Fall, nie aus dem Dialog; Datumsdisziplin; kein Zitieren aus Such-Ausschnitten — jede Seite, auf die sich die KI stützt, muss über open\_url geöffnet und gelesen werden, gleich welche Suche sie gefunden hat; Zitier- und Verweisdisziplin; die Wiederholungsgrenze von drei Versuchen je fehlschlagendem Werkzeugaufruf; Auslieferungsdisziplin) und die Beschreibung des Toolset-Mechanismus selbst, einschließlich der Erklärung des Heimat-Toolset-Felds.

Die Arbeitsregeln je Bereich sind nicht dauerhaft präsent: sie werden dem Modell wörtlich und aktuell jedes Mal übergeben, wenn es das entsprechende Toolset öffnet, als Teil der Öffnungs-Nutzlast.

Das vollständige Regelwerk — Kern plus alle Toolset-Regeln plus die Anhänge (darunter das Dateiformat des Tagesprotokolls) — kann jederzeit über das Instruktions-Lesewerkzeug neu gelesen werden; die Anwendung liefert es bei jedem Aufruf live aus, sodass Instruktionsänderungen eine laufende Sitzung ohne Neuverbindung erreichen.

Drei dieser Regeln werden zusätzlich strukturell statt textlich durchgesetzt, durch Tore: der Instruktions-Riegel, die Datumsdisziplin und die Disziplin der Gesetzesquellen. Das Lesen der Instruktionen selbst ist die letzte Regel des universellen Blocks: der Weg, den Konnektor zu entriegeln, wird erst nach allen vorangehenden Regeln genannt, sodass ein Modell, das ihn erreicht, sie gelesen hat.

### 5. Die Werkzeugoberfläche und die Toolset-Schicht

Damit die Werkzeugauswahl zuverlässig bleibt, legt die Bridge nicht alle ihre mehr als 200 Werkzeuge auf einmal offen. Sie stellt eine reduzierte Oberfläche von rund dreißig Einträgen bereit: sieben Kernwerkzeuge (aktuelles Datum und Uhrzeit; aktueller GUI-Kontext; Systemsprache; Rechtsraum des Falls; erneutes Lesen der Instruktionen; Bestätigung der Instruktionen; Benutzerhandbuch), das Auslieferungswerkzeug, zweiundzwanzig Toolset-Öffner, das Mitglieder-Ausführungswerkzeug und das Gesamtinventar-Werkzeug. Alles andere existiert nur als Mitglied innerhalb von Toolsets.

Das Öffnen eines Toolsets ist ein gewöhnlicher Werkzeugaufruf ohne Argumente. Die Antwort liefert in einem Zug: erstens, wo das Toolset einen hat, einen deterministisch vorerzeugten Kontextblock, berechnet im Moment des Öffnens (acht Toolsets haben solche Erzeuger — das Sitzungsstart-Protokoll selbst; das aktuelle Inventar der Zwischenspeicher-Dateien; die zehn jüngsten Gedächtniseinträge als Vorschau; die ersten dreißig Gesetze der Gesetzes-Bibliothek; die Liste der heißen Fälle; die heute registrierten Dokumente und eingegangenen E-Mails; das heutige Tagesprotokoll; den aktuellen Schnappschuss der Fristen und Termine); zweitens die wörtlichen Arbeitsregeln des Bereichs; drittens die vollständigen Definitionen der Mitglieds-Werkzeuge mit ihren vollen Parameterschemata; viertens eine Rückfallzeile, die auf das Gesamtinventar verweist. Ein Fehler in einem Vorerzeuger verhindert das Öffnen nie.

Mitglieder werden über das Mitglieder-Ausführungswerkzeug ausgeführt, das den exakten Mitgliedsnamen und ein Argumentobjekt entgegennimmt. Vor der Ausführung läuft eine leichtgewichtige Schemavalidierung: Pflichtfelder müssen vorhanden und nicht leer sein, und Ganzzahl-, Zahl- und Boolesche Parameter müssen sich als solche lesen lassen; ein Verstoß gibt das erwartete Schema zurück, statt auszuführen. Ein unbekannter Mitgliedsname gibt den nach Editierdistanz nächstliegenden vorhandenen Namen als Vorschlag zurück. Die Instruktionsschicht begrenzt Korrekturversuche auf drei je fehlschlagendem Aufruf, danach muss das Modell anhalten und den genauen Fehler melden.

Toolsets sind nicht modal; alle Öffner bleiben jederzeit aufrufbar, und ein Werkzeug darf bewusst Mitglied mehrerer Toolsets sein. Funktionsschalter entfernen ganze Gruppen: ist die GUI-Navigation vom Benutzer nicht aktiviert, fehlen der Öffner des Navigations-Toolsets und alle seine Mitglieder in jeder Liste und jeder Antwort. Das Gesamtinventar-Werkzeug führt jedes Mitglied mit einem einzeiligen Zweck und seinem besitzenden Toolset auf und existiert nur als Rückfall; die Toolset-Beschreibungen sind der primäre Wegweiser. Insgesamt tragen die zweiundzwanzig Toolsets mehr als 340 Mitgliedseinträge über mehr als 200 verschiedene Werkzeuge.

Die gemessenen Kontextkosten dieser Anordnung: die Anfangskonfiguration (Kerninstruktion plus reduzierte Werkzeugliste) liegt bei rund zehntausend Token; ein einzelnes Toolset-Öffnen fügt je nach Toolset zwischen rund neunhundert und siebeneinhalbtausend Token hinzu, vor seinem variablen vorerzeugten Inhalt.

### 6. Format der Werkzeugdefinition

Jede Werkzeugdefinition besteht aus vier Teilen. Die Beschreibung trägt den Zweck des Werkzeugs, seine Verhaltensgebote und seine Querverweise — und sonst nichts. Das Eingabeschema trägt jeden Parameter mit eigener Beschreibung, einschließlich Vorgabewerten, Formaten, Hinweisen zum gegenseitigen Ausschluss und Geboten je Parameter; Anweisungen zur Parameterverwendung stehen ausschließlich hier. Das Ausgabefeld beschreibt vor jedem Aufruf genau, was der Aufruf zurückgibt, einschließlich Reihenfolgen, Markierungen und Fehlerformen, sodass das Modell die Eignung ohne Probeaufrufe beurteilen kann. Das Heimat-Toolset-Feld nennt das Toolset, zu dem das Werkzeug in erster Linie gehört, mit einem reservierten Wert, der Kernwerkzeuge kennzeichnet, die immer in der obersten Liste stehen; ein Mitglied, das in einem anderen Toolset angetroffen wird, zeigt damit an, wo weitere Werkzeuge seiner Familie liegen, und jedes Toolset-Öffnen trägt eine erklärende Zeile, die feststellt, dass das Modell nie in das geöffnete Toolset eingesperrt ist.

Aller modellseitige Text ist englisch. Werkzeugdefinitionen werden aus einer einzigen Quelle erzeugt und automatisch auf Konsistenz geprüft, einschließlich der Übereinstimmung zwischen dem Heimat-Toolset jedes Werkzeugs und den Mitgliederlisten der Toolsets. Erklärte numerische Grenzen in Werkzeugschemata werden in den ausführenden Funktionen durchgesetzt, sodass ein genanntes Maximum ein echtes Maximum ist.

### 7. Universelle Laufzeitmechanismen

Die folgenden Mechanismen gelten über die gesamte Werkzeugoberfläche und sind zentral umgesetzt, nicht je Werkzeug.

Zwischenspeicher-Umleitung auf Wunsch: jedes Werkzeug akzeptiert einen zusätzlichen Parameter, der eine Zwischenspeicher-Datei benennt; ist er gesetzt, wird das vollständige Ergebnis in diese Datei geschrieben, und das Modell erhält nur den Pfad und die Größe — keine Vorschau. Große Inhalte fließen dadurch in keiner Richtung durch den Tokenstrom des Modells, und der Pfad ist überall direkt verwendbar, wo ein Quellpfad akzeptiert wird.

Überlaufschutz: jedes Ergebnis, das die Konnektor-Grenze überschreitet — zehntausend Zeichen, eine zentrale Konstante, angehoben auf vierzigtausend (das Vierfache der Standardgrenze) für Claude Desktop und ChatGPT Desktop —, wird automatisch in eine erzeugte Zwischenspeicher-Datei geschrieben. Das Modell erhält nur einen Hinweis mit der Gesamtgröße und der Zeilenzahl, dem Dateinamen, der ausdrücklichen Zusicherung, dass nichts verloren ist, den zwei Fortsetzungsbefehlen (bereichsweises Lesen; Mustersuche in der Datei) und dem ausdrücklichen Verbot, den Aufruf erneut anzufordern — keine Vorschau, sodass große Inhalte im Zwischenspeicher gelesen werden. Die eine Ausnahme ist der Instruktionsleser, dessen Paket immer vollständig ankommt; Toolset-Öffner werden wie jedes andere Ergebnis umgeleitet. Kein Werkzeug kürzt sein eigenes Ergebnis — die Konnektor-Grenze ist die einzige Stelle, an der über Größe entschieden wird. Ergebnisse über zehn Megabyte werden nicht umgeleitet, sondern mit einer Eingrenzungsanweisung beantwortet, die die anwendbaren Filter nennt, da dort selbst der Zwischenspeicher die Dateigröße begrenzt. Von der Umleitung ausgenommen sind die Zwischenspeicher-Lesewerkzeuge selbst (intern begrenzt; sie umzuleiten würde eine Rekursion erzeugen) und Aufrufe, die die Zwischenspeicher-Umleitung bereits angefordert haben.

Datums-Tor: jedes Werkzeug, das in IRONSTICK schreibt, wird externen Aufrufern verweigert, solange dieser Aufrufer nicht innerhalb der letzten dreißig Minuten das aktuelle Datum samt Uhrzeit abgerufen hat. Die Verweigerung nennt die Abhilfe — die Zeit abrufen, dann den identischen Aufruf wiederholen. Das Fenster wird je Desktop-KI geführt und ist bewusst kurz, damit ein frisches Gespräch keinen alten Abruf erben kann und Mitternachtswechsel erfasst werden. In-App-Aufrufer sind nicht betroffen. Das gibt es, weil externe Modelle Datensätze sonst nach ihrem Trainingszeitraum statt nach dem tatsächlichen Datum datieren.

Gesetzes-Tor: der Webzugriff für Gesetze und Normen wird strukturell verweigert, bis die interne Gesetzes-Bibliothek befragt wurde; die Verweigerung verweist auf das Bibliotheksverfahren. Jede Gesetzesquelle, die dennoch aus dem Web abgerufen wird, muss über das Registrierungswerkzeug in die Bibliothek gemeldet werden — die Instruktionsschicht stuft das Unterlassen als Pflichtverletzung ein, und Ergebnisse, die Rechtsquellen berühren, tragen zur Prüfbarkeit eine Markierung.

Harte Navigationssperre: acht Bildschirme sind als geschützt erklärt — die vier Erfassungsformulare (Dokumentenerfassung, fallgebundene Dokumentenerfassung, Erfassung der Fallchronik, Mandantenerfassung), das Formular zur Fallanlage, das Formular zur Zuordnung von Institutionen/Personen und der Texteditor. Solange das Hauptfenster des Benutzers einen davon zeigt, wird jede GUI-Navigations- und Exportfunktion zentral verweigert, für direkte Aufrufe und Mitgliederausführung gleichermaßen, mit einer Meldung, die den geschützten Bildschirm nennt, die Navigation verbietet und das Modell anweist, mit den vorhandenen Daten zu antworten und das Öffnen erst anzubieten, nachdem der Benutzer fertig ist und gespeichert hat. Ein Modell kann daher nie ungespeicherte Arbeit des Benutzers durch einen Bildschirmwechsel zerstören. Das Werkzeug zum Öffnen von Webseiten ist von dieser Sperre ausgenommen, da es die Anwendung nicht navigiert.

Navigationsangebot: die Ergebnisse der rund vierzig Werkzeuge, deren Ausgabe ein in der GUI öffenbares Objekt beschreibt — einen Fall, eine Person, eine Institution, einen Mandanten, ein bestimmtes Beweismittel, eine E-Mail, Kalendereinträge oder Fristen —, erhalten eine angehängte Zeile, die vorschlägt, dass das Modell dem Benutzer anbietet, das Objekt direkt in IRONSTICK zu öffnen, und den genauen Navigationsaufruf nennt. Enthalten die aufrufenden Argumente die Objektkennung, ist der Vorschlag konkret; bei Such- und Listenergebnissen verweist er auf die Kennung eines Treffers. Die Zeile verlangt ausdrücklich das Einverständnis des Benutzers vor dem Navigieren, es sei denn, die Anfrage des Benutzers war bereits ein Zeigen-/Öffnen-Befehl. Das Angebot wird erst nach der Überlaufbehandlung angehängt und nur, wenn das Ergebnis kein Fehler ist, die Navigation aktiviert ist und die harte Navigationssperre nicht greift — die Sperre gewinnt immer gegen den Vorschlag.

Weitergabe des Aufrufers: die Aufruferidentität begleitet jede Ausführung und steuert den Zustand je KI — das einmal tägliche Arbeitsbriefing wird je Desktop-KI verfolgt, Listen der Peer-Review-Aufgaben schließen die eigenen Aufgaben des Aufrufers aus, und das Aufrufprotokoll ordnet jede Zeile zu.

Aufrufprotokolle: Jedes Bridge-Programm führt neben sich ein lokales Protokoll mit Zeit, Werkzeugname, Erfolg oder Misserfolg und Antwortgröße, nie mit Inhalten. Ein zweites, ausführlicheres Diagnoseprotokoll im Datenordner ist standardmäßig ausgeschaltet. Ist es zur Fehlersuche eingeschaltet (Pfadanalyse, Toolset-Optimierung), zeichnet es eine Zeile je Werkzeugaufruf über alle verbundenen KIs auf — Zeitstempel, Aufrufer, den wirksamen Werkzeugnamen (bei der Mitgliederausführung das innere Mitglied), die Aufrufparameter (je bis zu dreihundert Zeichen), die Ergebnisgröße, gemessen vor jeder Überlaufumleitung, die Ausführungsdauer und ein Fehlerkennzeichen. Es lässt sich ohne Neustart umschalten, wird automatisch gekürzt, sobald es zwei Megabyte überschreitet, und soll danach wieder ausgeschaltet werden.

Diakritika- und Schrift-Faltung: jede Stichwortsuche, Mustersuche und jeder Vergleich in der gesamten Bridge faltet Groß-/Kleinschreibung und Diakritika für alle elf Systemsprachen, einschließlich des türkischen i mit und ohne Punkt (vor der Kleinschreibung ersetzt, da es sonst die Länge ändert), kyrillischer Buchstabenvarianten und lateinischer Ligaturen; die Faltung ist positionsstabil, wo Positionen gemeldet werden.

Ergebniskonventionen: Fehlschläge werden als Text zurückgegeben, der mit einem Fehlerpräfix beginnt, und im MCP-Ergebnis als Fehler gekennzeichnet; das Modell ist angewiesen, höchstens dreimal zu korrigieren und es erneut zu versuchen, dann anzuhalten und zu berichten. Strukturierte, selbstbeschreibende Markierungen, die in Ergebnisse eingebettet sind (für Gedächtnisoperationen, Tore und Ähnliches), sind stabil und in den jeweiligen Ausgabefeldern dokumentiert.

Lese-Deckungs-Wächter: zieht ein Modell einen Gesamtfall-Dump oder die Zwischenspeicher-Lieferung des Gesamtfall-Lesers, hält die Bridge zeilengenau fest, welche Bereiche der Dump-Datei tatsächlich gelesen wurden. Solange ungelesene Bereiche bleiben, trägt jede erfolgreiche Werkzeugantwort — Suchen, Mustertreffer, alles — die exakten ungelesenen Zeilenbereiche zusammen mit einem Leseanteil in Prozent; ein vollständiger Lesevorgang lässt sich daher erst behaupten, wenn die Aufzeichnungen ihn bestätigen. Sobald die Datei vollständig gelesen ist, hören die Mahnungen auf, und der nächste bereichsweise Lesevorgang bestätigt einmalig, dass alle Zeilen gelesen wurden, was die Lesepflicht für diese Datei beendet. Verfolgt werden die Gesamtfall-Dumps, die Kopf- und Digest-Dateien des Fallvorbereitungs-Werkzeugs und jeder Dokument-Volltext, der in den Zwischenspeicher umgeleitet wurde; Teillesungen anderer umgeleiteter Ergebnisse bleiben legitim und still. Der Deckungszustand wird neben dem Speicher abgelegt und übersteht Neustarts der Anwendung, und eine vollständig gelesene Datei wird für die Fallvorbereitung festgehalten — der Lesevorgang bleibt gültig, selbst nachdem die Bereinigung beim Start die Datei entfernt hat.

Wächter der Neuauslieferung: nach einer erfolgreichen Dateiauslieferung, deren Quelle im Zwischenspeicher liegt, hält eine Markierungsdatei neben dem Speicher den ausgelieferten Namen und die Zeit fest (Auslieferungen, die als Inline-Inhalt übergeben wurden, werden ebenfalls unter ihrem Auslieferungsnamen festgehalten). Jede spätere Bearbeitung, jedes Schreiben oder Normalisieren einer dort verzeichneten Datei wird mit der Erinnerung beantwortet, dass der Benutzer die veraltete ausgelieferte Fassung in Händen hält und dass die korrigierte Datei unter einer neuen Versionsnummer erneut ausgeliefert werden muss. Die Auslieferungsantwort selbst ruft zusätzlich den aktuellen Zustand der Lese-Deckung über einen internen Endpunkt, der kein Werkzeug ist, von der Anwendung ab und kennzeichnet eine Auslieferung, die trotz ungelesener Bereiche erfolgt ist.

Wächter nicht ausgelieferter Entwürfe: der Tagesprotokoll-Eintrag — das Signal des Modells, dass es abschließt — führt namentlich jede versionierte Arbeitsdatei auf, die das Modell in der Sitzung geschrieben und nie ausgeliefert hat, mit der Anweisung, das fertige Artefakt jetzt auszuliefern; Arbeit, die nur im Zwischenspeicher existiert, erreicht den Benutzer nie.

E-Mail-Format-Wächter: jede Antwort der Werkzeuge zum Lesen und Abrufen von E-Mails trägt den festen Verweis, dass die verbindliche Instruktion für das Formatieren und Ausliefern von E-Mails — Kopierfeld Betreff, Kopierfeld Text, Empfängerabschnitt, Pflichtinhalt, Sprachregeln — vom Werkzeug der Mail-Format-Spezifikation kommt, vor dem Aufbau jeder E-Mail abzurufen und buchstabengetreu zu befolgen ist.

Ausführung im Hintergrund: Die Daten- und Analysewerkzeuge laufen innerhalb der Anwendung getrennt von der Benutzeroberfläche, mit eigenem Werkzeugregister und eigenen Datenbankverbindungen; der Oberflächenteil leitet nur weiter, wendet Tore an und bearbeitet nach. Lange Zugriffe auf große Fallakten blockieren daher die Benutzeroberfläche nicht. Stoppt der Hintergrundteil, wird die Ausführung im Oberflächenteil fortgesetzt, und der Hintergrundteil wird bei nächster Gelegenheit neu gestartet. Werkzeuge, die die Benutzeroberfläche brauchen — Navigation, Bestätigungsdialoge, der eingebettete Browser, der Mailabruf und die prüfpflichtigen Vorschlags-Werkzeuge —, laufen immer dort.

### 8. Interaktions-Tore

Drei Werkzeuge beantworten ihren ersten Aufruf bewusst mit einer Frage statt mit einem Ergebnis; bei allen ist die wörtliche Antwort „unknown“ immer gültig und wird nie bestraft.

Das Auslieferungs-Tor: das Dateiauslieferungs-Werkzeug liefert, ohne die Förmlichkeitserklärung aufgerufen, nichts aus und fragt, ob die Auslieferung eine der vier förmlichen Artefaktarten ist — juristischer Schriftsatz, Gerichts-E-Mail, Chronikeintrag, Tagesprotokoll-Eintrag — oder keine davon. Die Antwort „no“ liefert sofort aus — aber die Behauptung wird inhaltlich geprüft: ein deterministischer Detektor untersucht die Datei, und Inhalt, der wie ein Brief oder Schriftsatz geformt ist (Anrede- und Schlussformeln in sechs Sprachen, ein Adressatenblock, juristische Merkmale, ein Identitätsblock), weist die Behauptung der Formlosigkeit zurück und protokolliert den Versuch; für solchen Inhalt gibt es keinen formlosen Weg. Die Antwort mit einer förmlichen Art gibt, weiterhin ohne auszuliefern, die verbindliche Formatierungsinstruktion für genau diese Art zurück; erst der wiederholte Aufruf mit dem Bestätigungskennzeichen, dass die Datei gegen diese Instruktion geprüft wurde, liefert tatsächlich aus. Ein Wächter der Versionsreihe verweigert zusätzlich die erste Auslieferung unter einem neuen Dateistamm, solange bereits eine ausgelieferte versionierte Reihe mit derselben Fallnummer existiert — ein Dokument lässt sich nicht umbenennen, um seinen Versionszähler zurückzusetzen; ein wirklich anderes Dokument verlangt eine bewusste, protokollierte Erklärung. Dieses Tor läuft in der Anwendung selbst; das Front-End reicht den Aufruf nur durch. Dokumente und Briefe erreichen den Benutzer nie als Chattext oder Kopierfelder — jeder Schreibzugriff auf eine Text-Arbeitsdatei trägt diese Erinnerung, und das eine legitime Kopierfeld-Artefakt bleibt die E-Mail nach ihrem Format-Werkzeug.

Das Such-Tor: die zentrale Beweismittelsuche sucht bei ihrem ersten Aufruf nichts und fragt drei Dinge — welche Art von Stück gesucht wird (eingehendes Dokument, ausgehendes Dokument, Beweismittel mit angehängtem Dokument, Aussage/Transkript, Chroniknotiz oder unbekannt), den Umfang, wo eine Mandantenkennung vorliegt (nur dieser Fall, alle Fälle des Mandanten oder unbekannt — mit der Fallliste des Mandanten in der Frage), und die gewünschte Antwortform. Die Antwortformen sind: eine saubere Kennungsliste (die empfohlene Vorgabe; Treffer werden dann einzeln über den Beweismittel-Leser geöffnet), kompakte Treffer mit Trefferkontext oder das vollständige Ergebnis, geschrieben in eine einzige Zwischenspeicher-Datei.

Das Gesamtfall-Tor: der Gesamtfall-Leser lädt bei seinem ersten Aufruf nichts und meldet, wie groß der Fall tatsächlich ist — die Zahl der Beweismittel und das ungefähre aufsummierte Inhaltsvolumen über Titel, Beschreibungen, Dokument-Volltexte und Transkripte —, und bittet dann das Modell, zwischen gezielten Suchwerkzeugen und einem wiederholten Aufruf mit dem Argument für die Zwischenspeicher-Lieferung zu entscheiden, der den vollständigen, OCR-normalisierten Fallinhalt in den Zwischenspeicher schreibt und nur das Datei-Handle zurückgibt.

Das Prüf-Tor: für förmliche Schriftsätze verlangt das Auslieferungswerkzeug zusätzlich ein frisches Testat des deterministischen Schriftsatz-Prüfers. Dieser Prüfer scannt die fertige Zwischenspeicher-Datei über acht Behauptungsklassen — Beweismittelverweise in der Beilagenliste und im Fließtext (Stempel und Nummern, einschließlich dokumentgebundener Zitat-Herkunft: jedes zitierte oder beigefügte Stück muss für dieses Dokument als gelesen gelten — vollständig abgerufen oder seine Zwischenspeicher-Datei vollständig gelesen; ein Lesevorgang zählt zwei Stunden, jede Auslieferung desselben Dokuments verlängert dessen zitierte Stücke um zwei Stunden, und das Prüfen oder Ausliefern eines anderen Dokumentstamms setzt die Beilagen-Lesevorgänge zurück; eine Beilagenzeile darf einen Seitenbereich angeben, die Lesepflicht bleibt das ganze Dokument), Gesetzeszitate gegen die geprüfte Bibliothek (ein Artikel, der im geprüften Gesetzestext fehlt, ist ein widersprochener Befund; das Zitat verlangt zusätzlich eine Lese-Herkunft — jeder Lesevorgang in der Bibliothek wird je Programmlauf mit den tatsächlich zurückgegebenen Artikelnummern festgehalten, und ein zitierter Artikel ohne solchen Lesenachweis ist ein widersprochener Befund, sodass Presseartikel, Web-Zusammenfassungen und Modellgedächtnis nie eine Norm begründen können; zitierte Unterverweise wie Absatz und Punkt werden im Textbereich des Artikels auf Existenz geprüft; eine Quelle, die in der Bibliothek fehlt, sperrt, bis sie aufgenommen oder abgelehnt ist), wörtliche Zitate — jedes muss vollständig in den Volltexten des gesamten Bestands oder in der Gesetzes-Bibliothek gefunden werden; stammt es aus dem Dokument eines anderen Falls, nennt der Prüfer dieses Dokument, und nur dieses muss gelesen werden, nicht die Übersicht des anderen Falls; ein Zitat, das in keiner Quelle gefunden wird, ist widersprochen und sperrt die Auslieferung, ein Zitat, dessen Anführungszeichen lediglich entfernt oder dessen Wortlaut leicht geändert wurde, bleibt gesperrt, und ganz gestrichene Zitate werden dem Benutzer bei der Auslieferung gemeldet —, Aktenzeichen im Format n/nnn/jjjj, Beträge unter einer Regel der exakten Übereinstimmung (die exakt aufgezeichnete Form), Partei-Stammdaten Buchstabe für Buchstabe einschließlich Diakritika, rumänische Personenkennzahlen (CNP) und IBAN über die Prüfsummenvalidierung und genannte Parteien — jede im Dokument genannte Person oder Firma aus dem Entitätenregister muss für dieses Dokument gelesen (Profil) und auf Verbindungen geprüft worden sein, wobei die Verweigerung beide Aufrufe nennt und den Cliquen-Test empfiehlt. Befunde werden als verifiziert, unverifiziert oder widersprochen eingestuft; jeder widersprochene Befund oder jedes ungeklärte fehlende Gesetz ergibt ein sperrendes Urteil. Das Testat bindet an den exakten Dateistand — jede Bearbeitung macht es ungültig —, und nach fünf gescheiterten Prüfläufen bricht der Vorgang ab, weist das Modell an, anzuhalten und zu berichten, und benachrichtigt den Benutzer direkt in der Anwendung.

Das Zustimmungs-Tor für Gesetzesquellen: eine vom Modell gemeldete Gesetzesquelle wird nicht mehr stillschweigend aufgenommen. Anforderungen sammeln sich in einem einzigen Zustimmungsdialog in der Anwendung — Quelle, Rechtsraum, anfordernde KI —, wo angehakte Einträge abgerufen, geprüft und sofort gespeichert werden und nicht angehakte Einträge abgelehnt werden; eine abgelehnte Quelle macht spätere Zitate daraus zu sichtbaren Vermerken „auf Entscheidung des Benutzers unverifiziert“ statt zu stillen Sperren. Der Datenmonitor führt Gesetze danach nur noch für den periodischen Prüfzyklus.

Die Regel der Auslieferung nur aus der Ablage: das Auslieferungswerkzeug akzeptiert ausschließlich einen Quellpfad innerhalb der Arbeitsablage der Anwendung; Inline-Inhalt und Pfade außerhalb der Ablage werden für jeden Dateityp verweigert. Das hält das Prüf-Testat, die Verfolgung der Neuauslieferung, die Versionierung und die Lese-Deckung ausnahmslos an jedem ausgelieferten Artefakt.

Die Rückfrage zu offenen Gerichtsentscheiden: stehen auf der Bewertungsliste noch unbewertete Entscheide, liefert das Auslieferungswerkzeug einen Schriftsatz oder eine Gerichts- oder Behörden-E-Mail zunächst nicht aus, sondern nennt die Zahl der offenen Entscheide, die zu diesem Fall oder seinen Gerichten gehörenden mit Kennung, und verlangt die Antwort des Benutzers — jetzt bewerten oder später. „Jetzt" hält die Auslieferung an und gibt den Arbeitsauftrag zurück (bewerten, die Bewertungen von Gericht und Spruchkörper lesen, das Dokument überarbeiten, erneut prüfen und ausliefern); „später" liefert aus und hängt die Pflicht-Rückfrage an das Ergebnis an. Die Frage kommt bei jeder förmlichen Auslieferung erneut, solange die Liste nicht leer ist.

### 9. Sitzungsstart und Rahmung

Das Öffnen des Sitzungsstart-Toolsets führt das gesamte Startprotokoll in einem Zug aus und schreibt es in eine feste, benannte Zwischenspeicher-Datei; die direkte Antwort gibt nur den Datumsanker, die Systemsprache und den aktuellen GUI-Kontext zurück, und das Modell liest den Rest — fällige Gedächtniseinträge, das Tagesbriefing, Fristen, Termine, offene Peer-Aufgaben und das Verzeichnis der letzten zehn Tagesprotokoll-Einträge — mit einem einzigen Zwischenspeicher-Lesevorgang. Die Mitglieder dieses Toolsets führen einzelne Teile auf Wunsch erneut aus.

Das Datum-und-Uhrzeit-Werkzeug antwortet mit einer Zeile (Datum, Uhrzeit, Zeitzone, Wochentag, wo möglich NTP-synchronisiert, sonst Systemuhr) und trägt das ständige Gebot, dass jeder Dialogschritt mit dem aktuellen Datum beginnt und dass Daten nie geraten werden. Das GUI-Kontext-Werkzeug meldet, welcher Bildschirm des Hauptfensters der Anwendung geöffnet ist, mit Breadcrumb und dem geöffneten Mandanten und Fall. Das Systemsprache-Werkzeug gibt die Sprachkennung zurück, die Dialog und fallübergreifende Listen bestimmt; das Rechtsraum-Werkzeug gibt je Fall den Rechtsraum zurück, der erzeugte Dokumente und Terminologie bestimmt, ist vor jeder Dokumentarbeit Pflicht und weist an, den Benutzer zu fragen, wenn er nicht gesetzt ist. Das Morgenbriefing-Werkzeug gibt das strukturierte Briefing von heute mit Kennungen und Markierungen zurück, sodass das Modell auf jeden Punkt hin handeln kann; das Arbeitsbriefing-Werkzeug verfolgt je Desktop-KI, ob diese KI heute bereits gebrieft wurde, und gibt die letzten Tagesprotokoll-Einträge nur beim ersten Kontakt des Tages zurück.

### 10. Der Zwischenspeicher

Der Zwischenspeicher ist der Arbeitsordner des Modells für alles Große. Er bietet Schreiben mit Anhängefähigkeit für den stückweisen Aufbau; zeilennummeriertes bereichsweises Lesen, dessen Nummern direkt auf die zeilenbasierten Editoren abbilden; exakte Textersetzung mit Eindeutigkeitserfordernis, einen gegenüber Leerraum und typografischen Anführungszeichen toleranten Wiederholungsversuch, der weiterhin Eindeutigkeit verlangt, und einen angewiesenen Rückfall auf Auffinden-und-Kopieren bei jeder anderen Abweichung; Einfügen nach Zeilennummer oder nach einer Marke; Löschen eines Zeilenbereichs; atomares Ersetzen eines Zeilenbereichs als sichere Umstrukturierungsoperation; gegenüber Groß-/Kleinschreibung und Diakritika unempfindliche Mustersuche über eine oder alle Dateien mit einer Kappung bei fünfzig Treffern und optionalen Kontextzeilen; eine Markdown-Gliederung, die Überschriften auf Zeilenbereiche abbildet, ohne die Datei zu lesen; eine Verzeichnisliste; Kopieren; einen Zeilen-Diff zwischen zwei Dateien, der gemeinsame Zeilen ausblendet; eine auslieferungsorientierte Normalisierung, die strukturelles Markdown auf die Schriftsatzkonventionen einebnet, Verweise schützt, kurze Beweismittelverweise auf sieben Stellen auffüllt und Zeilenenden normalisiert; die Vereinheitlichung des Leerraums; die Bereinigung von Zeilenenden und unsichtbaren Zeichen; vereinfachte Vergleichskopien (Kleinbuchstaben oder ohne Diakritika) immer in eine getrennte Zieldatei; Wort-, Buchstaben- und Zeilenzähler; und das Löschen.

Ein leichtgewichtiges Zustandsregister merkt sich Schlüssel-Wert-Notizen für die laufende Sitzung — vor allem, welche Datei der aktuelle Hauptentwurf ist — mit der Semantik Abrufen, Setzen und Löschen, und übersteht Neustarts der Anwendung.

Lebenszyklus: der Speicher ist langlebig und übersteht Neustarts; die eigenen Notizen des Modells, das Zustandsregister, die Dateimetadaten und die Buchführung der Lese-Deckung bleiben erhalten, während Werkzeug-Dumps früherer Tage bei jedem Start bereinigt werden und Dateien, die einhundertachtzig Tage unberührt sind, gelöscht werden (die Endfassung eines Schriftsatzes nach dreihundertsechzig Tagen). Jeder Zugriff über irgendein Zwischenspeicher-Werkzeug — auch ein bloßes Lesen — setzt die Löschuhr dieser Datei zurück; ein bloßes Erscheinen in der Verzeichnisliste tut das nicht. Die Instruktionsschicht verpflichtet das Modell, seine Aufgabendateien zu löschen, wenn eine Aufgabe endet, und dauerhafte Erkenntnisse stattdessen ins Gedächtnissystem zu übertragen.

### 11. Das Gedächtnissystem

Das dauerhafte KI-Gedächtnis ist ein chatübergreifendes Notizbuch, das alle verbundenen KIs und der integrierte Assistent teilen. Ein Eintrag fasst höchstens eintausend Zeichen — die Toolset- und Werkzeugbeschreibungen verlangen die Verdichtung auf das absolut Wesentliche und das Aufteilen größeren Materials — und ist mindestens mit einem Mandanten oder einem Fall verknüpft (bei einer Fallverknüpfung wird der Mandant automatisch abgeleitet und korrigiert) sowie optional mit einem Beweismittel, einer E-Mail, einer Entität oder einer Institution, alles validiert. Einträge müssen unabhängig von der Dialogsprache in der IRONSTICK-Systemsprache geschrieben werden, und dem Modell ist es verboten, seine eigenen privaten Gedächtnisdateien für Fallwissen zu verwenden, da diese weder die Peer-KI noch den Benutzer erreichen. Ein optionales Fälligkeitsdatum macht einen Eintrag fristähnlich: fällige und überfällige Einträge erscheinen zuerst im Sitzungsstart-Protokoll und in den Fristenansichten der Anwendung.

Die Suche ist nach jeder der verknüpften Kennungen und nach dem Fälligkeitsdatum filterbar (alles, genau heute oder ein Fenster von zehn Tagen um ein gegebenes Datum), liefert die neuesten zuerst mit einer Vorgabe von zwanzig und einem Maximum von fünfzig Treffern und kennzeichnet vom Benutzer verfasste Notizbucheinträge als für die KI strikt schreibgeschützt. Das Aktualisieren ersetzt Text und/oder verschiebt, setzt oder löscht das Fälligkeitsdatum; alles nicht Übergebene bleibt unverändert. Eine Aktualisierung, deren Text die Grenze überschreitet, wird mit einer Kapazitätsangabe abgewiesen, die die eingereichte Länge, die Grenze, die aktuelle Belegung des Eintrags und den freien Rest nennt; jede erfolgreiche Textaktualisierung meldet ebenso Belegung und Rest; in beiden Fällen hängt die Antwort, sobald weniger als dreihundert Zeichen frei bleiben, die ständige Empfehlung an, entweder den ganzen Eintrag zu überarbeiten oder einen zusätzlichen Eintrag anzulegen und im alten einen Querverweis zu hinterlassen. Das Löschen ist unumkehrbar und verweigert Notizbucheinträge des Benutzers und Aufgabeneinträge. Speichern, Aktualisieren und Löschen eines Eintrags öffnen jeweils ein Freigabefenster in der Anwendung; die Änderung wird erst wirksam, nachdem der Benutzer sie freigegeben hat. Die Pflege ist für lang laufende Verfahren gebaut: Einträge, die mit einem Fall verknüpft sind, werden nie automatisch gelöscht. Einträge ohne Fall werden nach einem Jahr ohne Nutzung gelöscht; jeder Eintrag, den eine Gedächtnissuche zurückgibt, und jede Aktualisierung erneuert dieses Jahr, da die Bereinigung das Alter am jüngsten Zeitpunkt von Anlage und letztem Zugriff misst. Notizbucheinträge des Benutzers verfallen nie automatisch.

Stammdaten, Personen, Beziehungen und Dokumente gehören nicht ins Gedächtnis: die Beschreibungen leiten sie zu den Vorschlagswerkzeugen und zur Dokumentenerfassung.

### 12. Fristen, Termine und der Kalender

Die Fristenwerkzeuge liefern die aktiven Fristen entweder kompakt (Titel, Fälligkeitsdatum, verbleibende Tage, Fall, wobei als geheim markierte Einträge ausgeschlossen sind) oder mit Beschreibungen je Eintrag und ausdrücklichen Kennzeichnungen für überfällig und dringend (dringend heißt zehn Tage oder weniger), sowie eine Vortragsform, nach Dringlichkeit geordnet, mit Zeitraumfiltern (alle nach Kritikalität gruppiert, nur kritische, bald fällig, heute, diese Woche, nächste Woche oder ein bestimmtes Datum). Das Terminwerkzeug trägt einen Tag oder Zeitraum vor, Gerichtstermine zuerst — aus dem Portal importierte Gerichtstermine, dann Gerichtstermine aus dem Kalender, dann die übrigen Kalendereinträge. Der Kalenderleser führt Einträge global oder je Fall mit optionalem Datumsbereich auf.

Das Kalender-Erfassungswerkzeug schreibt nie: es öffnet das Kalenderformular der Anwendung, vorausgefüllt mit Titel, Datum, Zeiten, Beschreibung und optionaler Fallverknüpfung, und der Benutzer vervollständigt und speichert. Seine Beschreibung schreibt vor jedem Aufruf eine verpflichtende Dublettenprüfung vor: zuerst den Kalender desselben Tages lesen, nur nach Datum vergleichen und dabei Zeiten ignorieren, bei jedem ähnlichen Eintrag diesen dem Benutzer zeigen und fragen, ob es dasselbe Ereignis ist, und das Werkzeug erst aufrufen, nachdem der Benutzer einen neuen Eintrag bestätigt hat.

### 13. Das Tagesprotokoll

Die Tagesprotokoll-Werkzeuge schreiben und lesen das fallübergreifende Tagesprotokoll. Das Anhängen zielt auf Anweisung des Benutzers auf einen Tag (Vorgabe heute, wobei das Datum über das Zeitwerkzeug abgerufen wird), hängt an einen bestehenden Tag immer mit einem Trenner an und überschreibt nie, verknüpft betroffene Fälle über eine Fallliste und erwartet den Inhalt als sauberes Markdown in dem Stil, der im Anhang der Instruktion festgelegt ist. Ein Notizwerkzeug fügt eine einzelne Ereigniszeile mit optionalem Fallbezug ins heutige Tagesprotokoll ein. Das Formatwerkzeug gibt das verbindliche Dateiformat des Tagesprotokolls zurück. Das Lesen funktioniert nach Datum, Bereich oder neueste zuerst, mit Volltextoption und Eingrenzung auf einen Fall; das Suchen ist eine diakritika-unempfindliche Stichwortsuche über Titel und Volltexte mit Datum, Titel und Kontextauszug je Treffer. Beide Listenformen haben eine Vorgabe von zehn und eine Kappung bei dreißig Einträgen. Das Öffnen des Toolsets liefert bereits das heutige Tagesprotokoll vollständig, mit einem Hinweis, wie viele weitere Einträge für die letzten zwei Wochen existieren.

### 14. Fallzugriff

Die Fallauflösung funktioniert nach Fallnummer, nach dem Namen einer beteiligten Partei (diakritika-tolerant, über Gegner, Kläger, Titel und Mandant — Pflicht, wann immer der Benutzer eine Partei ohne Nummer nennt, da viele Fälle gar keine Nummer tragen) und über die Fallliste des Mandanten. Verwandte Verfahren kommen aus der Fallhierarchie als Eltern-, Kind- und Gleiche-Gruppe-Einträge.

Jedes Dokument, das die KI liest, trägt eine Herkunftskennzeichnung: Eingänge von der Gegenseite oder einer Behörde sind als kritisch zu prüfen gekennzeichnet, Ausgänge als Sicht des Mandanten. Das gilt für die Bridge und den integrierten Chat gleichermaßen.

Das Schnellübersichts-Werkzeug gibt in einem Aufruf jedes Feld des Fall-Reiters, jedes Feld des Mandanten-Reiters, eine optional verknüpfte Portalakte und die letzten fünfzehn Beweismittelkennungen mit Eingangsdatum zurück — gedacht als Orientierung vor jedem Volltextzugriff. Der Chronikleser gibt die Chronik eines Falls zurück, neueste zuerst, kompakt und ohne Volltexte, mit Datumsfiltern und einer Grenze von bis zu fünfzig Einträgen, und ist die vorgesehene schnelle Antwort auf „was ist zuletzt passiert“ — er zählt nichts für die Fallvorbereitung.

Die Fallvorbereitung ist ein Werkzeug und ein Tor. Das Vorbereitungswerkzeug liefert in einem Aufruf den Kopf (Profil und Rechtsraum) und den Digest jedes Dokuments — Kennung, Datum, Typ, Titel, die Zusammenfassung vom Erfassungszeitpunkt, Querverweise und Volltextgröße —, der als Chronik dient. Die Antwort beginnt immer mit einem Hinweis, wo Kopf und Digest liegen (inline, wenn die ganze Antwort unter der Konnektor-Grenze bleibt, sonst als zwei Zwischenspeicher-Dateien, die vollständig gelesen werden müssen), und nennt die fünf neuesten Dokumente, die vollständig zu lesen sind. Das Vorbereitungs-Tor verweigert externen Aufrufern dann zwei Stufen von Fallausgaben: eine Notiz oder einen Eintrag zu einem Fall (Journal, Tagesnotiz, Chronikeintrag, Fallnotiz), bis Profil, Rechtsraum, Digest und die fünf neuesten Chronikeinträge (Notizen ohne PDF oder Transkript; Bilder erlaubt) vollständig gelesen sind — sodass eine laufende Reihe von Chronikeinträgen die letzten beachtet, ohne dass für eine bloße Notiz schwere Dokumente gelesen werden müssen; ein Urteil über den Fall (Schriftsatz-Prüfung, Übergabe, Export) zusätzlich, bis jedes zitierte oder beigefügte Dokument vollständig gelesen ist. Lesevorgänge werden je Desktop-KI in einem gespeicherten Nachweis festgehalten, gültig drei Tage oder bis zum nächsten eingehenden Dokument des Falls; ausgehende Dokumente und Beweismittel-Datensätze machen einen Lesevorgang nie ungültig. Derselbe Nachweis speist das Aufklappmenü am Symbol der KI. Eine dritte, niedrigere Stufe bewacht den Fallinhalt selbst: jedes Fallinhalts-Werkzeug — Chronik, Zeitleiste, Stichwort-, Passagen- und Zeitraumsuchen, Volltexte, Widersprüche, Aussagen, Pflichten, Fristen, Kalender, Korrespondenz, Verwendung, eingereichte Beilagen, Briefketten, Beilagenlisten, Stempel, Medien, Institutionen, Tags, Bewertung und Instruktionsnotizen — wird für einen Fall verweigert, dessen Digest der Aufrufer nicht gelesen hat, wobei die Verweigerung das Vorbereitungswerkzeug nennt; der dritte verweigerte Versuch am selben Fall wird als Regelverstoß festgehalten. Die Vorbereitungszähler werden bei jedem Lesen der Instruktionen und bei jedem Sitzungsstart zurückgesetzt.

Das vollständige Lesen eines Falls ist durch das Gesamtfall-Tor geschützt. Der Zwischenspeicher-Dump ist der schnellste vollständige Weg: er stellt den gesamten Falltext innerhalb der Anwendung zusammen, ungekürzt, normalisiert OCR-Anomalien (wiederholte Leerzeichen, gemischte Zeilenenden, geschützte Leerzeichen, weiche Trennstriche, Zeichen ohne Breite), schreibt ihn direkt in den Zwischenspeicher und gibt nur das Handle mit Statistik zurück; sehr große Fälle werden in nummerierte Teildateien aufgeteilt. Umfangsfilter beschränken den Dump auf die eingehende, die ausgehende oder beide Richtungen, und eine Liste von Beweismittelkennungen dumpt genau diese Datensätze — der vorgesehene Weg, ein sehr großes Dokument vollständig zu lesen, wobei der Fall aus dem Beweismittel abgeleitet wird.

Der Beweismittel-Leser ist die verpflichtende Grundlage für jede inhaltliche Aussage: er lädt einen Datensatz mit seinem extrahierten Dokument-Volltext (vollständig und ungekürzt; oberhalb der Konnektor-Grenze kommt er als Ganzes im Zwischenspeicher an) und, wo vorhanden, dem Chat- oder Transkript-Volltext (der Messenger-Chats sowie Telefon-, Verhandlungs-, Vernehmungs- und Gerichtsprotokolle abdeckt), dazu die qualifizierte Zusammenfassung, Beschreibung und Metadaten, die ausdrücklich nicht als Ersatz für den Volltext gelten. Erscheint keiner der beiden Volltextabschnitte, existiert kein extrahierter Text, und das Modell darf keine inhaltlichen Behauptungen über den Datensatz aufstellen. Eine Kommaliste von bis zu zwölf Kennungen liest mehrere Datensätze in einem Aufruf. Ein Medieninventar-Werkzeug meldet Existenz, Typ, Datum und Größe von Bild-, Audio- und Videoanhängen eines Datensatzes oder Falls und stellt ausdrücklich fest, dass Medieninhalt nicht als Text lesbar ist und das Werkzeug existiert, damit ein Datensatz, der nur Medien enthält, nicht fälschlich als leer eingestuft wird.

Tags erscheinen als frei formulierte Haftnotizen des Benutzers an Beweismittel-Datensätzen — der Text ist die Information, die Farbe hat keine feste Bedeutung, und ein mit Tag versehener Datensatz gilt als starkes Relevanzmerkmal. Drei Modi liefern eine globale Übersicht mit Zählungen und referenzierten Datensätzen, alle Tags eines Falls oder eine Textsuche in Tag-Texten, mit einem Umfangsfilter, der persönliche von fallgebundenen Tags trennt. Sachverhalte führen die gesamte Falllandschaft eines Mandanten als Gruppen mit verschachtelten Fällen auf, einschließlich der Eltern- und Kindfälle. Die gespeicherte Fallbewertung ist je Fall abrufbar.

### 15. Suche in der Akte

Die zentrale Beweismittelsuche bewertet über alle Beweismittelfelder, die extrahierten Dokument-Volltexte und die Transkriptinhalte, mit konjunktiv verknüpften Mehrwortanfragen, Diakritika-Unabhängigkeit und einem Phrasenbonus; Ergebnisse sind nach Relevanz geordnet, ohne Punktzahlen offenzulegen, jeder Treffer benennt, welches Feld ihn ausgelöst hat, die Vorgabe ist fünfzehn und das Maximum dreißig Treffer, und die Antwortform folgt der am Such-Tor getroffenen Wahl. Die Passagensuche zerlegt Dokumente und Transkripte in Absatz- und Satzfenster und gibt die am besten passenden Passagen mit ihrem Verweis zurück — sie ortet, wo in einem Text etwas steht, nicht bloß in welchem Datensatz —, mit OCR-tolerantem Abgleich, der Erfassungsfehler überbrückt, einem Phrasenbonus und der Eingrenzung auf genau einen Fall oder auf alle Fälle genau eines Mandanten (das vorgesehene Instrument für Fragen der Art „hat X jemals, irgendwo“; nie mandantenübergreifend), mit einer Vorgabe von acht und einer Kappung bei zwanzig Passagen. Ein Datumsbereichs-Werkzeug führt Beweismittel zwischen zwei Daten auf. Der eigene Finder für Korrespondenz einer Partei ist Pflicht, wenn der Benutzer nach Dokumenten von oder an eine bestimmte Partei fragt: er gleicht die Partei diakritika-tolerant gegen die Beteiligungs-Datensätze ab, filtert nach Richtung (an mich, von mir oder beides), schließt Chats und Transkripte aus, blendet selbst erstellte Screenshots standardmäßig aus und nennt dabei ihre Zahl, und ordnet die neuesten zuerst — ausdrücklich unterschieden von der Stichwortsuche, die auch Datensätze zurückgäbe, die die Partei bloß erwähnen.

### 16. Deterministische Analysewerkzeuge

Diese Werkzeuge rechnen aus den Datensätzen ohne jede Beteiligung einer KI. Die Zeitleiste gibt alle Stücke eines Falls zurück, nach Ereignisdatum absteigend geordnet, mit Verweis, Zeitstempel, Datensatztyp und Titel, mit einer Vorgabe von dreihundert und einer Kappung bei fünfhundert Stücken. Der Widerspruchssammler urteilt bewusst nicht: er sammelt bis zu einhundertzwanzig Kandidaten (Vorgabe sechzig), optional auf eine Entität gefiltert, mit Verweis, Datum, Beteiligten und Kurzinhalt, und überlässt das Urteilen und die anschließenden Volltext-Lesevorgänge dem Modell. Das Wer-sagte-was-Werkzeug findet jedes Stück, in dem eine Person vorkommt — als Beteiligter, in Titel oder Text oder im Wortlaut eines Transkripts —, diakritika-unabhängig, kennzeichnet die Quelle jedes Treffers, mit einer Vorgabe von vierzig und einer Kappung bei einhundert. Das Beteiligtennetz-Werkzeug zählt, welche Personen und Entitäten in denselben Stücken gemeinsam vorkommen, global oder je Fall, optional auf eine Entität fokussiert. Das Pflichtenwerkzeug führt offene, mit Frist gekennzeichnete Stücke nach Fälligkeitsdatum auf, mit Tageszählung, Beschreibungen, Verweisen und der Kennzeichnung überfällig/dringend.

Fünf weitere deterministische Werkzeuge dienen der Charakterisierung einzelner Richter und Staatsanwälte; als Entscheidungen zählen nur eingehende Dokumente eines Gerichts oder einer Staatsanwaltschaft. Der Entscheidungslister gibt jede Entscheidung zurück, an der eine Person als Richter mitgewirkt oder als Staatsanwalt gehandelt hat, über alle Fälle hinweg, und zählt nur einen Namen im Kopf (Besetzung des Gerichts) oder im Unterschriftenblock — ein Name im Fließtext zählt nicht, und Gerichtsschreiber werden nie aufgeführt. Der Strukturleser zerlegt eine Entscheidung in Gericht, Abteilung, Fallnummer, Art, Nummer und Datum, Sitzung, Spruchkörper, den Satz, der Parteien und Gegenstand nennt, den Tenor wörtlich, Ergebnis-Schlagwörter, Rechtsmittel, Verkündung, Gesetzeszitate mit ihrem Bibliotheksstatus und den Umfang der Begründung, jeweils mit der Zeichenposition, und meldet Fehlendes als nicht gefunden. Der Eingabensammler schreibt jede Eingabe, die im Fall bis zum Datum der Entscheidung eingereicht wurde, in zwei Zwischenspeicher-Dateien — die ausgehenden Dokumente des Mandanten und die eingehenden der Gegenseite —, beschränkt auf Dokumente, die an ein Gericht oder eine Staatsanwaltschaft gerichtet sind, jede nur mit ihrem Hauptdokument (Begleit-E-Mail und Beilagen abgeschnitten), und führt als nicht zugeordnet auf, was sich nicht einordnen lässt; seine Dateien tragen die Lesepflicht. Der Entscheidungsvergleich misst, welcher Anteil der eigenen Begründung des Gerichts als Text mit den Eingaben des Mandanten, mit denen der Gegenseite, mit beiden, mit Gesetzestext der Bibliothek oder mit nichts (die eigene Formulierung des Gerichts) übereinstimmt, misst die Wiedergabe der Standpunkte der Parteien gesondert und führt die übereinstimmenden Passagen mit ihrer Übereinstimmungsquote ab siebzig Prozent aufwärts auf, die höchste zuerst, im Originalwortlaut mit Zeichenpositionen. Der Dokumentenvergleich hält zwei beliebige Dokumente über Mandanten und Fälle hinweg gegeneinander, stuft übereinstimmende Passagen als Gesetzestext, als gemeinsame zitierte Quelle oder als nur von diesen beiden geteilt ein und beginnt seine Antwort mit der Anweisung, beide Dokumente vollständig zu lesen, bevor irgendetwas über eine Verbindung ausgesagt wird.

Eine Bewertungsliste macht aus diesen Messungen ein dauerhaftes Wissen über Gerichte und Richter. Jeder als Gerichtsentscheid gekennzeichnete Beleg — vom Benutzer bei der Erfassung angehakt, von der Erkennung vorbelegt oder vom Hintergrundlauf im Altbestand gefunden — wird mit deterministisch ermittelten Kopfdaten eingereiht: Gericht, Spruchkörper und Besetzung, Richter und Gerichtsschreiber mit ihren Stammdaten-Kennungen, Nummer, Datum und Ausgang. Die KI arbeitet die Liste einzeln ab; das Vorbereitungswerkzeug liefert die Messwerte, die Bewertungsfragen samt Pflichtform und die Werkzeuge für Entscheid und Eingaben und gibt den Entscheid zum Lesen frei, ohne die Fallübersicht seines Falls zu verlangen. Das Eintragen wird verweigert, solange der Benutzer nicht ausdrücklich zugestimmt hat, der Entscheid nicht vollständig gelesen ist, die englische Analyse nicht genau die sieben Überschriften in der festen Reihenfolge mit Inhalt trägt oder ein Richter oder Gerichtsschreiber keine Stammdaten-Kennung hat. Gespeichert werden die Kopfdaten, die Fall- und Mandantenzuordnung, die Messwerte und die Analyse; eine neue Fassung der Fragen erlaubt ein Neubewerten an Ort und Stelle. Mit dem IRONSTICK SERVER reisen die Bewertungen mit dem Personen- und Firmennetz der Kanzlei: jeder Sitz führt je Entscheid eine eigene Bewertung, die nur er ändert, und das Lesewerkzeug liefert die Bewertungen aller Sitze zu einem Richter, einem Gericht, einem Aktenzeichen oder einem eigenen Fall vollständig zurück, jeweils mit Angabe, wer bewertet hat.

Die Familie der Einreichungsverfolgung arbeitet deterministisch gegen die gespeicherten Schriftsätze: das Verwendungswerkzeug beantwortet für ein Beweismittel, welche Beilagen es physisch enthält und in welchen Schriftsätzen es selbst eingereicht wurde (mit Datum und Aktenzeichen, fallübergreifend), oder für einen Fall den Lückenbericht der nie eingereichten Stücke; der Lister eingereichter Beweismittel gibt je gespeichertem Schriftsatz die beigefügten Kennungen sowie die deduplizierte Gesamtmenge zurück und ist Pflicht, bevor die Beilagenliste eines neuen Schriftsatzes zusammengestellt wird, mit dem dokumentierten Vorbehalt, dass nur strukturell beigefügte Beilagen erfasst sind. Die Registraturnummern-Kette findet, ausgehend von einer Briefnummer oder von allen in einem Dokument vorkommenden Nummern, jedes Dokument, das diese Nummer teilt, in chronologischer Reihenfolge — der dokumentierte Gang eines Verwaltungsverfahrens. Der Beilagenlister löst die physisch enthaltenen Beilagen eines Dokuments auf, einschließlich des deterministischen Einreichungsstempels je Beilage; das Stempelwerkzeug löst jede Beweismittelkennung zu ihrem deterministischen Einreichungsstempel auf (mehrere gespeicherte Dateien ergeben mehrere Stempel; ein Datensatz ohne gespeicherte Datei ergibt eine ausdrückliche Leermarkierung). Beide stempelführenden Werkzeuge verbieten das Erfinden von Stempeln — sie müssen immer abgerufen werden.

### 17. OCR-Reparatur

Ein vierstufiger Eskalationsweg repariert ruinierte gespeicherte Volltexte und ist ausdrücklich von der Verwendung als bequemer Leseersatz ausgeschlossen. Die Rescan-Anforderung bittet die Anwendung, das gespeicherte Original-PDF erneut per OCR zu erfassen; der Benutzer wählt die Seiten in IRONSTICK, und das Modell ist angewiesen, den Benutzer in einem Satz zu informieren und zu warten. Das Statuswerkzeug ist einmal aufzurufen, wenn der Benutzer sagt, dass die Seiten gewählt wurden — Abfrageschleifen sind verboten —, und gibt, wenn der Scan bereit ist, den Arbeitsauftrag zusammen mit zwei Zwischenspeicher-Dateien zurück, die den frischen Scan und den aktuellen Datenbanktext enthalten. Die Vergleichsregel weist das Modell an, nur mechanische OCR-Korrekturen vorzunehmen, nie Umformulierungen, wobei Zahlen, Namen und Beträge exakt bleiben. Wo eine Stelle in beiden Quellen unlesbar ist, darf das Modell den Benutzer vor dem Einreichen um eine Sichtprüfung bitten — höchstens drei Punkte je Dokument, wobei der Datensatz an der genauen Stelle geöffnet und die Stelle präzise benannt wird („Seite 7, zweiter Absatz — der Betrag?“); bei deaktivierter Navigation werden Datensatz und Seite stattdessen im Chat genannt. Das Einreichungswerkzeug übergibt die korrigierte Zwischenspeicher-Datei an die Anwendung, die sie dem Benutzer in einem Modal zeigt; erst das Speichern durch den Benutzer ersetzt den Datenbanktext, und nichts wird automatisch gespeichert. Die letzte Eskalation, die Anforderung der PDF-Übergabe, öffnet den Datensatz und lässt das Modell den Benutzer bitten, das Original-PDF persönlich in den Chat zu ziehen — die Bridge bietet bewusst keine Pfadhilfe, verweigert hart, wenn kein Rescan vorausging, und verweigert PDFs über zehn Megabyte oder über neunzig Seiten; das Modell liest das PDF dann visuell, baut die korrigierte Fassung im Zwischenspeicher auf und reicht sie durch dasselbe Prüf-Tor ein. Bei einer Verweigerung wegen Größe oder Seitenzahl endet der Ablauf nicht: der Abschrift-Ausweichweg öffnet den Datensatz dennoch, und das Modell bittet den Benutzer, das PDF über den Anhang zu öffnen und die maßgeblichen Passagen wörtlich abzutippen („Seite X, oben, dort müsste stehen … — bitte tippen Sie es genau ab“) — höchstens drei Stellen, wörtlich in die korrigierte Fassung übernommen; jede verbleibende Lücke wird offen ausgewiesen. Statt dass das ganze Dokument zur manuellen Bearbeitung zurückgegeben wird, prüft der Anwalt nur die Stellen, die sich nicht automatisch auflösen lassen.

### 18. Personen, Institutionen, Mandanten und Datenvorschläge

Auflösungswerkzeuge finden Mandanten, Personen und Institutionen nach Namensbruchstück, diakritika-tolerant; ein Stichwortfinder durchsucht Namen, Notizen und Analysefelder, wenn nur ein Bruchstück bekannt ist. Ein deterministischer Listen-Abgleich gleicht ein Dokument, das eine Namensliste enthält, gegen alle aktenkundigen Personen und Firmen ab, adressiert über die Beweismittelkennung oder über den Fall — dann wird der neueste Eintrag des Falls gescannt und in der Antwort benannt. Auf den Verbindungen zu Claude und ChatGPT nimmt die Parteienprüfung bis zu zwei weitere Parteien im Voraus entgegen und sucht sie im Hintergrund, während die aktuelle abgearbeitet wird; Ergebnisse bleiben dreißig Minuten erhalten, und die Reihenfolge des Tors bleibt unverändert. Netzwerkwerkzeuge führen alle auf, die mit einer Partei über ausdrückliche Beziehungen und gemeinsame Fälle verbunden sind, die Cliquen des gesamten Parteiennetzes nach deterministischer Community-Erkennung (wie in der Universum-Ansicht des Personen-Bildschirms, mit hervorgehobenen Gruppen ungewöhnlicher Dichte und einer optionalen Trennung von Personen und Institutionen in Ebenen) und die am stärksten verbundenen Parteien; jede parteibezogene Antwort beginnt mit dem Block der Fälle, mit denen die Partei verknüpft ist. Der Profilleser gibt jedes Stammdaten- und Analysefeld vollständig und ungekürzt zurück. Profilleser geben das Entitätsprofil mit Analyse und Beziehungen, alle Beziehungen einer Person in beiden Richtungen über Personen und Institutionen, das Institutionsprofil und die förmlich mit einem Fall verknüpften Institutionen zurück. Der Zeiterfassungsleser meldet passiv gemessene Arbeitszeit (jeder Seitenaufruf dauert bis zum nächsten, begrenzt auf dreißig Minuten, der letzte zählt als eine Minute) als Übersicht der Summen und der Spitzen bei Fällen, Mandanten und Tagen oder als Aufschlüsselung eines Falls je Tag, über einen Datumsbereich oder ein Fenster der zurückliegenden Tage mit der Vorgabe sieben.

Die KI kann Stammdaten nicht direkt schreiben. Zwei Vorschlagswerkzeuge legen Befunde als Prüfposten in den Datenkonsistenz-Monitor der Anwendung: der Stammdatenvorschlag (erst nachdem der Benutzer im Chat bestätigt hat, dass der Befund abgelegt werden soll) zielt auf eine bestehende Entität oder Institution — zuerst nach Namen aufgelöst — oder beschreibt einen neuen Datensatz mit Namen und Feldern, mit einer Liste zulässiger Felder, in der Firmen- und Personen-Identifikationsnummern ein Feld teilen, nur belegte Felder zulässig sind und Beweismittelverweise optional sind; der Beziehungsvorschlag beschreibt eine Beziehung zwischen zwei aufgelösten Personen oder zwischen einer Person und einer Institution, mit genau einem Gegenüber, einer Pflichtkategorie, einer optionalen Begründung und optionalen Fall-, Mandanten- und Beweismittelverweisen. Ein Vorschlag darf auch einen Datensatz umbenennen, seine Art setzen (natürliche oder juristische Person), die Kategorie einer bestehenden Beziehung ändern, eine Löschung vorschlagen (eines Datensatzes, eines Tags oder einer erledigten Frist) mit einer Begründung in der Systemsprache, die Pflicht ist, oder zwei Datensätze als Dubletten vorschlagen; ein neuer Datensatz wird erst angenommen, nachdem die Art im Dialog entschieden wurde, und ein Vorschlag, der die Beschreibung oder die Kontaktdaten einer Person berührt, wird verweigert, solange der Aufrufer dieses Profil nicht innerhalb der letzten dreißig Minuten gelesen hat. In beiden Abläufen ändert sich der Datensatz erst, wenn der Benutzer den Vorschlag im Monitor annimmt. Ein Vorschlag für einen neuen Datensatz wird zunächst mit der Liste ähnlicher bestehender Datensätze beantwortet — locker abgeglichen, nichts gespeichert —, und der Aufrufer muss entweder bei einem davon ablegen oder per Parameter ausdrücklich bestätigen, dass die Partei wirklich neu ist; ein strenger Treffer wird auf den bestehenden Datensatz umgeleitet. Jede gespeicherte neue Partei liefert einen verpflichtenden Folgeauftrag zurück, der den Aufrufer anweist, die Verbindungen der Partei zu recherchieren und abzulegen, Webrecherche eingeschlossen. Ein drittes Vorschlagswerkzeug ordnet eine Partei einem Fall zu: genau eine Entität oder Institution, eine Pflichtbegründung und optionale Beweismittelverweise werden zu einem Fallverknüpfungs-Prüfposten im selben Monitor; die Annahme schreibt die Beteiligtenverknüpfung, auf der die Cliquen- und Verbindungsansichten aufbauen, während eine bestehende Verknüpfung, eine anhängige Dublette oder eine frühere Ablehnung gemeldet statt erneut vorgeschlagen wird. Die Anwendung zählt außerdem Vorschläge je Aufrufer: nach zwei gespeicherten Stammdatenvorschlägen und einem Beziehungs- oder Fallverknüpfungsvorschlag behandelt sie die Sitzung als Pflege des Parteiennetzes, hängt einmal den Hinweis an, dass diese vollständig torgesicherte Arbeit kein Spitzenmodell braucht, und hält — im integrierten Chat — den Lauf auf der mittleren Modellklasse. Unabhängige Hintergrundprozesse speisen denselben Monitor: ein an der Quelle deduplizierter Datenextraktor und ein periodischer Normalisierungsscan, der Zusammenführungen und Umklassifizierungen entlang des Drei-Kategorien-Modells vorschlägt (natürliche Person; juristische Person: jede Körperschaft außer einer einzelnen Person, wobei ein Handelsregistereintrag Vorrang vor staatlichem Eigentum hat; Institution: staatliche Stellen ohne Registereintrag) — nie mit automatischer Zusammenführung.

### 19. Die Gesetzes-Bibliothek

Die Bibliothek hält vollständige Gesetzestexte als Markdown-Dateien mit einer internen Registrierungsnummer je Gesetz. Das Listenwerkzeug blättert durch das Inventar (Kennung, Rechtsraum, Titel, Art, Dateiname, Datum der letzten Prüfung; Vorgabe fünfzig, Maximum fünfhundert) und ist nur lesend. Das Suchwerkzeug ist Pflicht vor jeder Internetsuche nach einer Norm: es gleicht entweder nach Bezeichnung gegen Titel und Beschreibung oder nach zitierter Passage mit unscharfer Toleranz ab (rund sechzig Prozent der Wörter genügen, und Wortendungen werden toleriert), verlangt den aus dem Fall übernommenen Rechtsraum, reiht Titeltreffer weit über Inhaltstreffer (ein Titeltreffer zählt neun Zehntel, jeder Inhaltstreffer ein Zehntel, höchstens drei Ausschnitte je Datei) und gibt je Treffer die Registrierungsnummer, den Dateinamen, kurze Ausschnitte mit ihren exakten Zeichenpositionen und einen fertigen Aufruf für den wörtlichen Auszug zurück, dessen Bereich bereits vergrößert ist — um mindestens fünfhundert Zeichen über den Ausschnitt hinaus —, sodass das Modell den maßgeblichen Wortlaut selbst abruft, statt dem Ausschnitt zu vertrauen. Das Auszugswerkzeug gibt den wörtlichen Inhalt eines Gesetzes zwischen zwei Zeichenpositionen zurück, adressiert über die Registrierungsnummer, auf die Datei begrenzt, mit einem vorangestellten Hinweis, dass der Bereich angepasst werden kann und dass das ganze Gesetz ladbar ist, wobei übergroße Ergebnisse automatisch in den Zwischenspeicher umgeleitet werden; der Ziffernabgleich in Gesetzessuchen verwendet Grenzregeln, die die Tausenderpunkt-Schreibweise amtlicher Portale tolerieren. Ganze Gesetze sind nach Dateiname oder nach Registrierungsnummer ladbar, wobei große Dateien automatisch umgeleitet werden. Das Registrierungswerkzeug ist der verpflichtende Meldeweg für jedes im offenen Web gefundene Gesetz: nur der Link, der Rechtsraum und optional Titel und Satz werden eingereicht; ein Hintergrundprozess ruft die Quelle ab, konvertiert sie, speichert sie und kündigt sie im Datenmonitor an, und das Modell selbst konvertiert nie etwas. Ein Prüfzyklus der Bibliothek verfolgt das Datum der letzten Prüfung jeder Quelle. Das Ablehnen eines Gesetzes im Datenmonitor verlangt eine Bestätigung.

Ein Werkzeug zur erneuten Prüfung prüft ein Gesetz auf Wunsch gegen seine Quelle und meldet unverändert, aktualisiert oder Dublette; ein frischerer Abruf übernimmt den Eintrag, und auf IRONSTICK SERVER gilt die jüngste Prüfung, gleich wer das Gesetz zuerst registriert hat. Ganze Gesetze oberhalb der Konnektor-Grenze landen im Zwischenspeicher und registrieren nichts als gelesen; die Herkunft kommt vom Artikelwerkzeug.

### 20. Validatoren und Register

Deterministische Prüfwerkzeuge decken ab: IBAN (Format, länderspezifische Länge, Prüfsumme); nationale Personen-, Versicherungs- und Steuernummern über neun Schemata in sieben Ländern (Rumänien, Schweiz, Deutschland, Österreich, Frankreich, Italien, Spanien) mittels Prüfziffern, mit einem gezielten Modus je Schema und einem automatischen Modus, der alle Schemata testet und die gültigen meldet; europäische USt-Identifikationsnummern (zuerst Offline-Prüfung des Länderformats, dann der amtliche Live-Dienst der Union, der freigegebene Firmendaten zurückgibt, wo der Mitgliedstaat sie bereitstellt); EORI-Nummern gegen den Live-Validierungsdienst der Union; Rechtsträgerkennungen (zuerst Prüfsumme, dann das globale Register für Status und Namen); und, gesondert, ein Handelsregister-Werkzeug, das die Suche „Unternehmen finden“ des Europäischen E-Justiz-Portals (BRIS) in einem eingebetteten Browser öffnet, damit das Modell sie liest. Jeder Validator gibt ein konkretes, begründetes Ergebnis zurück — gültig mit Einzelheiten, ungültig mit dem fehlschlagenden Aspekt, nicht gefunden oder Dienst nicht erreichbar samt Status —, nie ein bloßes Ja oder Nein, sodass eine wirklich falsche Nummer immer von einem Ausfall unterscheidbar ist. Die Instruktionsschicht macht das Ausführen des passenden Validators zur Pflicht, bevor eine solche Nummer in ein erzeugtes oder geprüftes Dokument gelangt. Dasselbe Toolset führt das grobe Standortwerkzeug des Benutzers (Land, Stadt und öffentliche Adresse aus dem letzten Anmelde-Schnappschuss, ausdrücklich keine Rechtsraum-Quelle) und ein Wetterwerkzeug nach bestem Bemühen.

### 21. Webzugriff

Zwei Werkzeuge erreichen das offene Internet, beide als Ergänzung zu den eigenen Webfähigkeiten der Desktop-KI gefasst, mit der ausdrücklichen Anweisung, sie direkt zu verwenden, wenn die KI keinen eigenen Webzugriff hat, und dem Verbot, sie für fallbezogene Daten zu verwenden. Jede Suche fragt Google, DuckDuckGo und Qwant gleichzeitig ab und gibt eine zusammengeführte Liste betitelter, verlinkter Treffer ohne Dubletten zurück, denen mit dem Seitenöffner nachgegangen werden soll. Der Seitenöffner ruft genau eine öffentliche URL mit einer gestuften Pipeline ab, die die Beschreibung vollständig aufzählt, damit das Modell nie vorzeitig aufgibt: eine Standard-Browseranfrage mit Behandlung von Weiterleitungen und Kompression; Seiten, die JavaScript brauchen oder die Standardanfrage nicht beantworten, werden in einem eingebetteten Browser gerendert, bis Inhalt erscheint; seitengenaue PDF-Konvertierung, die je Seite die Textebene und OCR nur für gescannte Seiten verwendet, sodass gemischte Dokumente funktionieren; und die Konvertierung von Office- und Textformaten in lesbaren Text. Die Ausgabe ist Markdown, vollständig: der Hauptinhalt wird extrahiert (Navigation, Werbung und Cookie-Banner entfernt), Seiten ohne Artikelkörper behalten ihre Fußzeile, weil dort Adress- und Kontaktdaten stehen, und wo die Extraktion so gut wie nichts übrig ließe, wird stattdessen die ganze Seite geliefert. Ein Aufruf antwortet innerhalb von fünfundvierzig Sekunden; ein großes oder gescanntes Dokument wird im Hintergrund weiterverarbeitet und beim nächsten Aufruf mit derselben Adresse sofort geliefert. Gesetzesportale werden nach dem Gesetzes-Tor verweigert, bis die Bibliothek durchsucht wurde. Verlangt eine Website eine Bestätigung, bevor sie ihre Inhalte freigibt, öffnet IRONSTICK die Seite in einem eigenen Fenster; der Benutzer bestätigt dort, und die Arbeit an der Seite geht weiter.

### 22. GUI-Navigation und Exporte

Alle Navigation ist Opt-in über einen Schalter des Benutzers; ohne ihn existiert die gesamte Gruppe nicht. Die Navigationswerkzeuge öffnen im Hauptfenster der Anwendung: einen Fall (optional auf seinem Chronik- oder Bewertungs-Reiter), die Fallliste eines Mandanten, eine Person, eine Institution (beide hervorgehoben mit geöffnetem Detail), einen Beweismitteleintrag (richtige Chronikseite, hervorgehoben), die Dossier-Vorbereitung (mit einer vollautomatischen Variante, die dem ausdrücklichen Wunsch des Benutzers nach einem vollständigen PDF vorbehalten ist), das Tagesprotokoll (optional das Detail eines bestimmten Tages), den E-Mail-Monitor (optional das Detail einer bestimmten Mail), die globale Suche mit ausgelöster Anfrage (dem ausdrücklichen Wunsch vorbehalten; Chat-Antworten verwenden stattdessen die interne Suche), den Backup-Bereich mit sofortigem Backup-Start und jeden benannten Bildschirm aus der kanonischen Bildschirmliste. Exportdialoge decken die Mandantenliste, die Fristenliste, die Fallübersicht eines Mandanten, das Falldossier in zwei Dokumenttypen und die Karte ab, dazu den Bau des KI-Pakets des Mandanten. Alle Navigationswerkzeuge unterliegen der harten Sperre und sind die Ziele der Navigationsangebote.

### 23. Schreiben, Formate und Auslieferung

Das Schreib-Toolset bindet die Dokumenterstellung an abgerufene Spezifikationen. Das Ausgabeformat-Werkzeug gibt die verbindliche Erzeugungsinstruktion für die angeforderte Artefaktart zurück — für Schriftsätze unterschieden in juristischen Schriftsatz und einfachen Brief, jeweils in vertretener und selbst vertretener Form, wobei Rechtsraum, Sprache und Datum des Falls direkt in die Instruktion aufgelöst sind, mit Platzhaltern, die das Modell aus Konnektor-Daten füllt; das Mailversand-Format-Werkzeug gibt die verbindliche Spezifikation für Gerichtssendungen mit aufeinanderfolgender Paketauslieferung zurück. Beide sind buchstabengetreu zu befolgen. Jede Desktop-KI liefert einen fertigen Markdown-Schriftsatz über den Auslieferungsdialog, der ihn direkt in der Textverarbeitung von IRONSTICK öffnen kann; nichts wird gespeichert, bis der Benutzer speichert. Das Chronik-Erfassungswerkzeug öffnet das vorausgefüllte Chronikformular im richtigen Fall und speichert selbst nichts.

Die Auslieferung von Dateien an den Benutzer läuft ausschließlich über das Auslieferungswerkzeug, das die Anwendung selbst ausführt. Es akzeptiert nur einen Quellpfad im Zwischenspeicher — Inline-Inhalt und andere Pfade werden verweigert —, liest die Datei selbst, sodass nichts durch das Modell neu getippt wird, und übergibt sie an den Exportdialog von IRONSTICK; von dort speichert der Benutzer sie oder schickt einen Textentwurf mit einem Klick in die Textverarbeitung. Es gibt keinen Auslieferungsordner und keinen Pfad, den das Modell erfährt. Das Modell versioniert Dateinamen selbst, eine neue Nummer je Auslieferung; das Ergebnis meldet die bisher ausgelieferten Versionen des Namensstamms und die höchste und warnt, wenn die gewählte Nummer nicht die höchste ist. Die Auslieferung erfolgt einmal je Aufgabe, am Ende, nie für Zwischenstände, und durchläuft zuerst die Interaktions- und Prüf-Tore.

### 24. Peer-Review zwischen KIs

Das Übergabewerkzeug reicht ein erarbeitetes Stück an die andere Desktop-KI weiter: der Inhalt geht in einen kurzlebigen Großspeicher, ein Aufgaben-Datensatz verweist darauf, die Anweisung (auf tausend Zeichen begrenzt) sagt, was der Peer tun soll, und das Modell bittet dann den Benutzer, den Peer in der anderen Anwendung anzustoßen. Das Eingangswerkzeug führt offene Aufgaben auf, die an den Aufrufer gerichtet sind — seine eigenen erscheinen nie —, mit Kennung, Auftrag und vollständigem Inhalt, optional nach Mandant oder Fall gefiltert. Das Antwortwerkzeug schließt eine Aufgabe (und löscht ihren kurzlebigen Inhalt) und sendet zugleich die Bewertung als neue Aufgabe an den ursprünglichen Absender zurück; das Abschlusswerkzeug schließt ohne Rückgabe. Lesen und Schreiben im Zwischenspeicher sind Mitglieder dieses Toolsets, um den ausgetauschten Inhalt zu handhaben.

### 25. KI-Instruktionsdateien

Je Fall kann der Benutzer Instruktionsdateien ablegen, die das Modell heranziehen muss. Der Lister zeigt die Instruktionen eines Falls mit Kennung, Dateiname, Größe, Upload-Datum und Auszug, ohne Volltexte; das globale Inventar führt jede Instruktion über alle Mandanten und Fälle auf; der Einzelleser gibt eine Instruktion ungekürzt über ihre numerische Kennung zurück, mit der Option, den Rohinhalt bytegenau zur Durchleitung in den Zwischenspeicher zu lenken; der Sammelleser gibt alle Instruktionen eines Falls in einem Aufruf mit derselben Zwischenspeicher-Option zurück. Beide Listenausgaben werden bei Übergröße automatisch umgeleitet. Das Aktualisierungswerkzeug schlägt eine geänderte Fassung auf genau einem von drei Wegen vor — ein Anhängefragment (der bevorzugte Weg für Ergänzungen, wobei die Anwendung das Ergebnis selbst zusammensetzt und dem Modell verboten ist, den bestehenden Inhalt wiederzugeben), ein Quellpfad zu einer vollständigen neuen Fassung auf der Festplatte oder der vollständige neue Inhalt inline —, und die Anwendung zeigt dem Benutzer die Änderung als Diff; nur die ausdrückliche Zustimmung übernimmt sie, das Ergebnis (angenommen, abgelehnt oder ausstehend) wird zurückgegeben, und ein ausstehender Zustand verbietet das erneute Senden. Der Paketexport baut das vollständige Instruktions-und-Skill-Bündel eines Mandanten und öffnet den Exportdialog.

### 26. Begleitintegrationen außerhalb der Werkzeugoberfläche

Ein clientseitiger Begleiter ergänzt die Bridge, ohne Teil der MCP-Oberfläche zu sein: für Claude Desktop und ChatGPT Desktop erstellt eine eigene Schaltfläche in der Konfiguration ein Skill-Plugin (Skills, die das Arbeitsmodell aus Toolset und Ausführungswerkzeug abbilden, von der Anwendung erzeugt und versioniert), das der Benutzer in der Desktop-App hinzufügt. Die Konfiguration des Bridge-Front-Ends für jede KI wird von den entsprechenden Konfigurator-Schaltflächen geschrieben, die immer die Aufruferidentität schreiben, um vor einer gemeinsamen Nutzung der Konfiguration durch mehrere KIs zu schützen.

### 27. Fehler- und Verweigerungssemantik — Zusammenfassung

Jede Verweigerung im System ist belehrend statt kahl: Schemaverstöße geben das erwartete Schema zurück; unbekannte Namen geben den nächstliegenden Treffer zurück; das Datums-Tor nennt die genaue Abhilfe; das Gesetzes-Tor nennt das Bibliotheksverfahren; die Navigationssperre nennt den geschützten Bildschirm und die aufgeschobene Alternative; die Zustimmungssperre nennt das Fenster für den erneuten Versuch; Antworten bei Übergröße nennen die Datei und die zwei Fortsetzungsbefehle oder die eingrenzenden Filter; Validator-Fehlschläge nennen den fehlschlagenden Aspekt und unterscheiden Ausfälle; Kapazitätsabweisungen im Gedächtnis nennen Belegung und Rest und, nahe der Grenze, die Möglichkeiten zur Umstrukturierung; das Auslieferungs- und das Such-Tor nennen ihre Antwortmöglichkeiten einschließlich des universellen Auswegs „unknown“; der Instruktions-Riegel nennt die zwei Aufrufe, die ihn öffnen; das Vorbereitungs-Tor nennt die ungelesenen Teile mit Kennungen und Prozentwerten; der Schriftsatz-Prüfer nennt je abgelaufenem oder zurückgesetztem Lesevorgang den genauen Aufruf, der ihn wiederherstellt. Der Vertrag gegenüber dem Modell lautet, dass das Modell nach höchstens drei korrigierten Versuchen bei jedem fehlschlagenden Aufruf anhält und dem Benutzer den genauen Fehler meldet.

##### Kontakt

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Code scannen, um unsere Kontaktkarte zu speichern — Telefon, E-Mail und Website.

Nehmen Sie gerne direkt per WhatsApp oder Telegram Kontakt auf — auch ein Anruf ist willkommen. Gesprochene Sprachen: Deutsch, Englisch, Rumänisch.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Nachricht

### Interesse an IRONSTICK oder einer Demo? Schreiben Sie uns.
