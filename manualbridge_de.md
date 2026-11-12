# Handbuch - Bridge

> Bridge-Handbuch — arbeiten mit der KI: was im Hintergrund passiert, und acht Arbeitsabläufe vom Tagesstart bis zur Gesetzesrecherche.

Originalseite: https://www.ironstick.legal/manualbridge_de.html

---

Bridge-Handbuch — arbeiten mit der KI: was im Hintergrund passiert, und acht Arbeitsabläufe vom Tagesstart bis zur Gesetzesrecherche.

Grundlagen

## 1. KI-Chat und Bridge — wo liegt der Unterschied?

IRONSTICK bietet Ihnen zwei Wege, mit einer KI an Ihren Akten zu arbeiten.
Der **KI-Chat** ist in das Programm eingebaut: Sie schreiben in einem IRONSTICK-Fenster, und IRONSTICK selbst sendet die Anfrage an einen externen KI-Dienst – mit den API-Schlüsseln, die Ihre Kanzlei in der [KI-Konfiguration](https://www.ironstick.legal/manualquickstart_de.html#q3) hinterlegt hat.
Die **Bridge** arbeitet umgekehrt: Sie schreiben in der Desktop-KI-App, die Sie ohnehin nutzen, und diese App ruft die IRONSTICK-Werkzeuge über einen Konnektor live auf.
In beiden Fällen erreicht die KI Ihre Daten ausschließlich über IRONSTICK, über dieselben Werkzeuge und hinter denselben Toren.

### Der integrierte KI-Chat

- **Zuerst eine lokale Schicht.** Jede Nachricht durchläuft zuerst eine regelbasierte Schicht, die auf Ihrem Computer läuft – ohne KI-Modell und ohne Internet. Einfache Anfragen – einen Bildschirm, einen Mandanten oder einen Fall öffnen, einfache Abfragen – werden dort direkt ausgeführt. Alles, was Überlegung oder Formulierung erfordert, geht weiter an einen externen KI-Dienst.
- **Ihre Schlüssel, Ihre Dienste.** Der Chat nutzt die externen KI-Dienste, für die in der KI-Konfiguration ein API-Schlüssel hinterlegt ist. Sie werden automatisch in einer festen Reihenfolge verwendet. Ist einer nicht erreichbar oder sein Guthaben erschöpft, übernimmt der nächste dieselbe Anfrage.
- **Erst Ihre Zustimmung.** Bevor der Chat irgendetwas an einen externen KI-Dienst sendet, fragt er Sie. Lehnen Sie ab, wird nichts gesendet, und der Chat fragt erst wieder, wenn Sie den Modus wechseln oder den Chat neu öffnen.
- **Pseudonymisiert.** Bevor eine Anfrage Ihren Computer verlässt, werden Namen von Personen und Unternehmen, Fall- und Aktenzeichen, persönliche Identifikationsnummern, IBANs, Telefonnummern, E-Mail-Adressen und Parteiadressen [durch neutrale Platzhalter ersetzt](https://www.ironstick.legal/gdpr_de.html). Die Antwort wird auf Ihrem Computer zurückübersetzt. Daten und Beträge bleiben unverändert. Die Platzhalter werden aus Ihren eigenen Datensätzen gebildet; zusätzlich werden Nummern, E-Mail-Adressen und Telefonnummern im Freitext erkannt.
- **Protokolliert.** Jeder Aufruf eines externen KI-Dienstes wird lokal protokolliert, und zwar in der Platzhalterform, in der er Ihren Computer verlassen hat.
- **Kompaktes Arbeitsgedächtnis.** Mit jedem Zug erhält die KI den jüngsten Teil der Unterhaltung (etwa die letzten 6.000 Zeichen) und eine kurze Zusammenfassung des früheren Teils. Eine Anfrage läuft über bis zu acht Werkzeugrunden.
- **Wo es läuft.** Unter Windows und auf dem Android-Tablet.

### Die Bridge

- **Drei Teile.** Ihre Desktop-KI-App verbindet sich über das Model Context Protocol (MCP) mit einem kleinen Bridge-Programm auf demselben Computer. Die Bridge leitet jeden Aufruf über eine geschützte Verbindung, die nur von diesem Computer aus erreichbar ist, an die laufende IRONSTICK-App weiter. Die App führt das Werkzeug aus und sendet das Ergebnis auf demselben Weg zurück.
- **Das Bridge-Programm kennt keine Daten.** Es öffnet keine Datenbank und enthält keine eigenen Werkzeuge; es reicht Aufrufe nur durch. Auch die Arbeitsanweisungen für die KI kommen aus der laufenden App, wenn sich die Desktop-KI verbindet.
- **Nur solange IRONSTICK läuft.** Ist die App geschlossen, wird jeder Werkzeugaufruf mit dem Hinweis beantwortet, dass IRONSTICK nicht läuft und Sie es starten sollen. Die Werkzeugliste bleibt in der Desktop-KI sichtbar, sodass die Reihenfolge, in der Sie die beiden Programme starten, keine Rolle spielt.
- **Echte Daten.** Werkzeugergebnisse erreichen die Desktop-KI nicht pseudonymisiert – echte Namen, Nummern und Daten machen eine einreichungsfähige Vorlage erst möglich. Was die KI liest, wird unter Ihrem eigenen Konto beim Anbieter der Desktop-KI-App und zu dessen Bedingungen verarbeitet.
- **Von Ihnen eingeschaltet.** Die Bridge arbeitet nur, wenn *Konnektor-Zugriff durch lokale Desktop-KI erlauben* in der KI-Konfiguration eingeschaltet und die Bridge für diese Desktop-KI-App [lizenziert](https://www.ironstick.legal/download_de.html) ist. Die Programmsteuerung – Bildschirme, Fälle und Dokumente öffnen, exportieren – braucht einen zweiten Schalter.
- **Mehrere gleichzeitig.** Die lizenzierten Desktop-KI-Apps – Claude Desktop, ChatGPT Desktop, Qwen Desktop und Kimi Desktop – können gleichzeitig verbunden sein und am selben Fall arbeiten. Jede wird, solange sie arbeitet, mit eigenem Symbol in der Menüleiste angezeigt.
- **Wo es läuft.** Unter Windows.

### Im Vergleich

|  | KI-Chat (integriert) | Bridge (Desktop-KI-App) |
| --- | --- | --- |
| Wo Sie schreiben | Im IRONSTICK-Chatfenster | In Ihrer Desktop-KI-App |
| Wer mit dem KI-Dienst spricht | IRONSTICK, mit Ihren eigenen API-Schlüsseln | Ihre Desktop-KI-App, mit Ihrem eigenen Konto |
| Kosten der KI | Nutzungsabhängig vom KI-Dienst auf Ihren API-Schlüssel abgerechnet | Gedeckt durch das Abonnement, das Sie für die Desktop-KI-App bereits haben |
| IRONSTICK-Lizenz | Inbegriffen, keine zusätzliche Lizenz | [Bridge-Lizenz](https://www.ironstick.legal/download_de.html) je Benutzer / Arbeitsplatz – eine Bridge je Desktop-KI-App oder das Bündel aller Bridges |
| An die KI gesendete Daten | Pseudonymisiert; Daten und Beträge unverändert | Echte Daten, unter Ihrem Konto beim Anbieter verarbeitet |
| Ihre Zustimmung | Vor der ersten externen Anfrage einer Chat-Sitzung | Vor dem ersten Datenzugriff durch irgendeine Desktop-KI in jedem Programmlauf |
| Arbeitsanweisungen | Werden mit jeder Anfrage mitgesendet | Die KI muss sie lesen und vor dem Öffnen eines Werkzeugs eine Regel wörtlich bestätigen |
| Werkzeuge und Tore | Dieselben Werkzeuge und dieselben Tore, dazu eine Suche im eigenen Verlauf des Chats | Dieselben Werkzeuge und dieselben Tore; Programmsteuerung nur mit ihrem Schalter |
| Dauer einer Arbeitssitzung | Jüngste Unterhaltung plus kurze Zusammenfassung; bis zu acht Werkzeugrunden je Anfrage | Die Unterhaltung der Desktop-KI-App |
| Plattformen | Windows und Android-Tablet | Windows |

### Warum sich die Bridge für umfangreiche Fallarbeit eignet

- **Keine Kosten je Aufruf über IRONSTICK.** Ganze Akten lesen, Hunderte Dokumente durcharbeiten und in mehreren Runden entwerfen – all das läuft über das Abonnement, das Sie ohnehin für die Desktop-KI-App zahlen. Dieselbe Arbeit über den integrierten Chat wird nutzungsabhängig auf Ihren API-Schlüssel abgerechnet, was sich bei großen Akten schnell summiert.
- **Längere Arbeitssitzungen.** Die Desktop-KI führt ihre eigene, durchgehende Unterhaltung — ideal für lange Arbeitssitzungen an großen Akten.
- **Größere Antworten je Aufruf.** Claude Desktop und ChatGPT Desktop erhalten Werkzeugantworten von bis zu 40.000 Zeichen direkt; Qwen Desktop, Kimi Desktop und der integrierte Chat erhalten bis zu 10.000. Alles Größere geht vollständig in den verschlüsselten Zwischenspeicher und wird von dort teilweise gelesen.
- **Der volle Werkzeugsatz, der volle Text.** Die Desktop-KI arbeitet mit dem vollständigen Werkzeugsatz und liest Volltexte in ihrer eigenen Unterhaltung, hinter denselben Toren wie der Chat.
- **Der Chat behält seinen Platz.** Der integrierte Chat braucht keine zusätzliche Lizenz, ist immer zur Hand – auch auf dem Tablet – und ist der strenger kontrollierte Kanal: pseudonymisiert, mit Zustimmungsabfrage und protokolliert.

## 2. Ein Werkzeugsatz — in der Client-App

Jede Operation, die eine KI ausführen kann, liegt in der IRONSTICK-Client-App auf Ihrem Computer – nicht in der KI und nicht im Bridge-Programm.
Der KI-Chat und jede verbundene Desktop-KI rufen exakt dieselben Werkzeuge auf. Jeder Aufruf wird von der laufenden App gegen Ihre Live-Datenbank ausgeführt, und nur das Ergebnis geht an die KI zurück.

- **Ein Werkzeugregister.** Der Werkzeugsatz wird von ein und demselben Modul für den KI-Chat und für die Bridge aufgebaut: dieselben Werkzeuge, in derselben Reihenfolge, hinter denselben Toren. Die Werkzeuge sind thematisch in Werkzeugsätze gruppiert – Fall, Beweise, Fristen, Gesetze, Briefe und E-Mails und mehr –, die die KI nach Bedarf öffnet.
- **Ein Weg hindurch.** Jeder Werkzeugaufruf, ob aus dem Chat oder von einer Desktop-KI, läuft durch dieselbe Steuerschicht: das Aktivitätssymbol in der Menüleiste, die Identifikation des Aufrufers, die Tore und die Übergabe großer Ergebnisse an den Zwischenspeicher. Jede Desktop-KI und jeder API-Dienst führt ein eigenes Protokoll darüber, was sie gelesen hat, sodass das Lesen der einen nie für eine andere zählt.
- **Die Daten bleiben in IRONSTICK.** Ihre Akte bleibt in der IRONSTICK-Datenbank auf Ihrem Computer. Eine KI erhält nur das, was ein Werkzeug für den jeweiligen Aufruf zurückgibt; IRONSTICK übergibt ihr weder die Datenbank noch den Datenordner.
- **Live bei jedem Aufruf.** Die Werkzeuge öffnen die Datenbank bei jedem Aufruf. Was Sie speichern, sieht der nächste Werkzeugaufruf.
- **Läuft im Hintergrund.** Die Werkzeuge laufen innerhalb der App im Hintergrund, sodass das Programm auch bei langen Lesevorgängen großer Fallakten reaktionsfähig bleibt.
- **Die App muss laufen.** Ohne die laufende App gibt es keine Werkzeuge: Das Bridge-Programm reicht Aufrufe nur durch und antwortet, dass IRONSTICK nicht läuft.
- **Die App muss entsperrt sein.** Solange der sechsstellige Sicherheitscode auf dem Startbildschirm nicht eingegeben ist, wird jeder Werkzeugaufruf einer Desktop-KI mit dem Hinweis beantwortet, dass die Anwendung gesperrt ist, und es werden keine Daten zurückgegeben. Geben Sie den Code in IRONSTICK ein und wiederholen Sie dann die Anfrage.
- **Der Zugriff wird von Ihnen erteilt.** Die Bridge bedient eine Desktop-KI nur, wenn der Konnektor-Schalter eingeschaltet und diese Desktop-KI lizenziert ist. Der erste Datenzugriff durch irgendeine Desktop-KI nach jedem Programmstart öffnet einen einzigen Bestätigungsdialog. Genehmigen Sie, ist der Zugriff für alle lizenzierten Desktop-KIs für den Rest des Programmlaufs offen. Lehnen Sie ab, wird jeder Aufruf jeder Desktop-KI 10 Minuten lang abgewiesen, und beim nächsten Zugriff danach werden Sie erneut gefragt. Diese Entscheidung wird nicht gespeichert.

## 3. Die Tore — was im Hintergrund geschieht

Zwischen der KI und Ihren Datensätzen liegen Tore, die in die Werkzeugschicht der Client-App eingebaut sind. Es ist schlichte Programmlogik – keine KI prüft eine andere KI.
Weist ein Tor einen Aufruf ab, wird nichts geschrieben oder geliefert; die KI erhält eine Meldung, die nennt, was fehlt und welcher Aufruf das Tor öffnet.
Die meisten Tore arbeiten für den KI-Chat und für jede Desktop-KI gleich; die letzte Spalte zeigt, wo jedes gilt.

| Tor | Wann es auslöst | Was es tut | Gilt für |
| --- | --- | --- | --- |
| **Zustimmung vor externer KI** | Wenn in einer Chat-Sitzung zum ersten Mal eine Anfrage an einen externen KI-Dienst gehen muss | Ein Dialog fragt, ob die externe KI verwendet werden darf. Lehnen Sie ab, wird nichts gesendet, und der Chat fragt in dieser Sitzung nicht erneut. | KI-Chat |
| **Pseudonymisierung** | Jede Anfrage des KI-Chats an einen externen KI-Dienst | Namen, Unternehmen, Fall- und Aktenzeichen, Identifikationsnummern, IBANs, Telefonnummern, E-Mail-Adressen und Parteiadressen verlassen den Computer als Platzhalter und werden auf Ihrem Computer zurückübersetzt. Daten und Beträge bleiben unverändert. Lässt sich die Platzhalterliste nicht vollständig aufbauen, wird die Anfrage nicht gesendet. | KI-Chat |
| **Zustimmung zum Datenzugriff** | Der erste Werkzeugaufruf irgendeiner Desktop-KI nach dem Programmstart | Ein Bestätigungsdialog erscheint für alle Desktop-KIs gemeinsam. Genehmigt: offen für den Rest des Programmlaufs. Abgelehnt: jeder Aufruf wird 10 Minuten lang abgewiesen, danach werden Sie erneut gefragt. | Bridge |
| **Startsperre** | Jeder Werkzeugaufruf, solange der sechsstellige Sicherheitscode nicht eingegeben ist | Der Aufruf wird mit dem Hinweis beantwortet, dass die Anwendung gesperrt ist; es werden keine Daten zurückgegeben. | Bridge |
| **Instruktions-Riegel** | Jeder Werkzeugaufruf einer Desktop-KI | Alle Werkzeuge außer dem Lesen der Instruktionen, ihrer Bestätigung und der Abfrage der Systemsprache bleiben geschlossen, bis die KI die Instruktionen gelesen und die Regel gegen erfundene Tatsachen wörtlich zurückgegeben hat. Die Bestätigung verfällt 60 Minuten nach ihrer Abgabe, nach 2 Stunden ohne Aufruf, um Mitternacht, bei jeder neuen Verbindung und – wo IRONSTICK das Gesprächsprotokoll einsehen kann – wenn die Desktop-KI ihre Unterhaltung verdichtet; dann muss die KI erneut lesen und eine zufällig gewählte Regel wörtlich zurückgeben. Im KI-Chat werden die Instruktionen stattdessen mit jeder Anfrage mitgesendet. | Bridge |
| **Datumstor** | Werkzeuge, die datierte Inhalte schreiben – Chronik, Kalender, Tagesnotizen, Tagesprotokoll, Gedächtnis, Gesetzesmeldungen und weitere | Der Aufruf wird abgewiesen, sofern die KI nicht innerhalb der letzten 30 Minuten das tatsächliche aktuelle Datum und die Uhrzeit abgerufen hat. | Beide |
| **Erst den Fall lesen** | Werkzeuge, die Falldaten lesen (Chronik, Zeitleiste, Suchen, Volltexte und mehr), und Werkzeuge, die in einen Fall schreiben (Notizen, Chronikeinträge, Schriftsatzprüfung, Export, Übergabe an eine andere KI) | Werkzeuge, die den Inhalt eines Falls lesen, werden abgewiesen, bis die KI den Digest dieses Falls gelesen hat. Eine Notiz oder ein Chronikeintrag verlangt zusätzlich das Fallprofil, den Rechtsraum und die neuesten Chronikeinträge. Eine Schriftsatzprüfung, ein Export oder eine Übergabe verlangt außerdem, dass die neuesten Dokumente des Falls vollständig gelesen sind. Die Abweisung listet auf, was noch ungelesen ist. | Beide |
| **Nur aus Gelesenem schreiben** | Gedächtniseinträge, Änderungen an einer Snake, Arbeit an Entwürfen, die Schriftsatzprüfung und die Auslieferung zu einem Fall | Ein Gedächtniseintrag zu einem Fall wird nur angenommen, wenn der Digest gelesen und jedes darin zitierte Dokument in dieser Sitzung vollständig gelesen wurde. Jedes Suchergebnis in einer Zwischenspeicher-Datei trägt den Hinweis, dass Suchtreffer kein Lesen sind, samt den hinter den Treffern liegenden, noch ungelesenen Dokumenten. Hat die KI in einem Fall ein Dokument der Gegenpartei oder einer Behörde geöffnet, wird in diesem Fall nichts mehr geschrieben, bis dieses Dokument vollständig gelesen wurde. | Beide |
| **Nucleu zuerst** | Schriftsatz schreiben, prüfen und ausliefern | Abgewiesen, bis jeder aktuelle Nucleu des Falls – der Fall-Nucleu und der Nucleu jedes Sachverhalts, zu dem der Fall gehört – in seiner aktuellen Fassung gelesen wurde. Die letzte Runde der Schriftsatzprüfung vergleicht das Dokument mit dem Nucleu. | Beide |
| **Snake-Tor** | In der Schriftsatzprüfung, kurz vor der Nucleu-Runde, wenn der Fall oder ein anderer Fall seiner Sachverhalte eine Snake hat | Die KI muss Sie fragen, ob die Snake-Runde laufen soll, und fährt erst nach Ihrer Antwort fort – oder sofort, wenn Sie es bei der Auftragserteilung verlangt haben. Sagen Sie ja, muss jeder Snake-Eintrag mit Begründung als übernommen, verworfen oder nicht relevant erledigt werden. | Beide |
| **Gesetzesbibliothek zuerst** | Eine Websuche oder Webseitenabfrage, die ein Gesetz betrifft (Artikel- oder Paragrafennummern, Gesetzesnamen, Gesetzesnummern, Gesetzesportale) | Abgewiesen, bis die KI Ihre Gesetzesbibliothek nach dieser Norm durchsucht hat. Hat die Bibliothek sie, bleibt das Web für diese Norm geschlossen, und die KI zitiert aus der Bibliothek. Nur wenn die Bibliothek keinen Treffer hat, wird das Web für diese Norm geöffnet – für 15 Minuten. | Beide |
| **Gesetzesquellen melden — geöffnet, nicht Snippets** | Eine gesetzesbezogene Websuche oder eine geöffnete Gesetzesportal-Seite, die eine Gesetzesquelle liefert, und jede Meldung einer neuen Gesetzesquelle | Jede weitere Werkzeugantwort beginnt mit der Erinnerung, die Quelle zu melden, bis sie gemeldet ist (bis zu 15 Minuten). Eine Meldung wird nur für eine Seite angenommen, die die KI innerhalb der letzten 24 Stunden selbst mit dem IRONSTICK-Seitenwerkzeug geöffnet hat. Gemeldete Quellen warten in einem Zustimmungsdialog: angehakte Quellen werden abgerufen, geprüft und in der Bibliothek gespeichert, nicht angehakte werden abgelehnt. | Beide |
| **Gedächtnis nur mit Ihrer Freigabe** | Die KI speichert, ändert oder löscht einen Gedächtniseintrag | Ein Dialog zeigt Ihnen den Eintrag. Er wird nur gespeichert, geändert oder gelöscht, wenn Sie es erlauben; abgelehnte Einträge werden verworfen. Solange der Dialog offen ist, wird jeder andere Aufruf dieser Sitzung abgewiesen. Abgesehen von Übergabeaufgaben zwischen KIs und Ihren eigenen Notizen liest die KI nur die Gedächtniseinträge, die Sie freigegeben haben. | Beide |
| **Vorschläge statt Schreiben** | Die KI will Stammdaten ändern, eine Person oder Institution hinzufügen, eine Beziehung hinzufügen, eine Personenanalyse füllen, Dubletten zusammenführen oder einen Datensatz löschen | Das Werkzeug schreibt nichts in Ihre Datensätze. Es legt einen Vorschlag im Datenkonsistenz-Monitor ab, wo Sie ihn übernehmen oder ablehnen. | Beide |
| **Geheime Dokumente ausgelassen** | Jedes KI-Werkzeug, das Dokumente, Medien, Fristen oder einen ganzen Fall liest, und die Hintergrunddienste, die externe KI nutzen (Datenkonsistenz-Monitor, Lagebericht) | Als geheim markierte Einträge werden aus jedem KI-Werkzeug und jedem Dienst herausgefiltert und nicht an die KI weitergegeben. | Beide |
| **Erfolgsaussichten nur aus der Gerichtsakte** | Die KI-Fallbewertung, in der App oder von einer Desktop-KI gestartet | Die Einschätzung der Erfolgsaussichten stützt sich ausschließlich auf das Fallprofil und die Dokumente des Falls, die an das in der Einleitungsschrift angesprochene Gericht oder die Behörde gingen oder von dort kamen – von beiden Seiten, ohne Beilagen. Ohne Einleitungsschrift oder ohne erkanntes Gericht beziehungsweise erkannte Behörde werden die Erfolgsaussichten als nicht einschätzbar gekennzeichnet, und die Anzeige bleibt leer. | Beide |
| **Prüfung vor Auslieferung** | Auslieferung eines förmlichen Dokuments wie eines Schriftsatzes | Die Auslieferung wird ohne ein frisches positives Ergebnis der deterministischen Schriftsatzprüfung für genau diesen Aktenstand abgewiesen; jede Bearbeitung macht es ungültig. Was das System verlässt, ist eine einreichungsfähige Vorlage zur Prüfung und Unterschrift durch Sie. | Beide |

Arbeitsabläufe

## Arbeitsablauf 1 — Tagesbeginn

Der Tagesbeginn beantwortet drei Fragen, bevor Sie anfangen: was fällig ist, was eingegangen ist und wo Sie aufgehört haben.
Ein Schritt erzeugt die Zusammenfassung zum Sitzungsstart – mit Datum, Erinnerungen, Fristen und Terminen der nächsten drei Tage und offenen Aufgaben. Danach holt die KI die vollständige Fristenliste, die heutigen Termine und das, was heute oder gestern erfasst wurde.
Nutzen Sie ihn jeden Morgen und immer dann, wenn Sie eine neue Unterhaltung mit einer Desktop-KI beginnen.

![Start, Agenda und Heatmap](https://www.ironstick.legal/img/screens/1%20menu.png)

Start, Agenda und Heatmap: Fristen, Termine und neue Einträge des Tages auf einen Blick.

### Schritt 0 — Kontext herstellen

- **IRONSTICK starten und entsperren.** Die Werkzeuge arbeiten nur, solange die App läuft und nachdem der sechsstellige Sicherheitscode eingegeben wurde.
- **Ihr eigenes Briefing in der App.** Unter Windows fragt der erste Start des Tages, ob IRONSTICK Sie über den Tag briefen soll. Sagen Sie ja, wird das Briefing mit anklickbaren Zeilen angezeigt, die zu den Fristen, zum Kalender, zum Postfach, zu den Dokumenten und zum Fall führen, und zusätzlich laut vorgelesen.
- **Desktop-KI: eine neue Unterhaltung.** Beginnen Sie in Ihrer Desktop-KI-App eine neue Unterhaltung. Genehmigen Sie den Datenzugriffsdialog, den IRONSTICK beim ersten Zugriff irgendeiner Desktop-KI nach dem Programmstart zeigt.
- **KI-Chat.** Öffnen Sie den KI-Chat in IRONSTICK; die Arbeitsanweisungen werden mit jeder Anfrage mitgesendet.
- **Kein Fall nötig.** Der Tagesbeginn umfasst alle Mandanten und Fälle. Öffnen Sie einen Fall nur, wenn sich Ihre Frage auf diesen Fall bezieht.

### Was Sie sagen — Schritt für Schritt

Starte die Sitzung.

1. Die KI liest und bestätigt ihre Instruktionen, legt das heutige Datum fest und lädt die Zusammenfassung zum Sitzungsstart: Erinnerungen, Fristen und Termine der nächsten drei Tage, offene Aufgaben.

Was ist heute und in den nächsten drei Tagen fällig?

2. Sie erhalten Fristen, Gerichtsverhandlungen und Termine in Datumsreihenfolge, jeweils mit ihrem Fall.

Was ist seit gestern eingegangen?

3. Neue E-Mails und neu erfasste Dokumente, jeweils mit dem Fall, dem sie zugeordnet wurden.

Lies die neue E-Mail im Fall [Fallnummer] und sag mir, was sie von mir verlangt.

4. Zuerst wird der Volltext gelesen; Sie erhalten den Inhalt, die offenen Punkte und einen Vorschlag für den nächsten Schritt.

Trage das heutige Telefonat mit [Person] zu [Thema] in das Tagesprotokoll ein.

5. Der Eintrag wird mit Datum und Uhrzeit in das heutige Tagesprotokoll aufgenommen.

### Was im Hintergrund geschieht

- **Tore vor dem ersten Werkzeug.** Solange der Sicherheitscode nicht eingegeben ist, wird jeder Werkzeugaufruf einer Desktop-KI mit dem Hinweis beantwortet, dass die Anwendung gesperrt ist. Der erste Datenzugriff irgendeiner Desktop-KI nach dem Programmstart öffnet den Zustimmungsdialog; genehmigt, bleibt der Zugriff für alle Desktop-KIs für den Rest des Programmlaufs offen. Bevor sich ein anderes Werkzeug öffnet, muss die Desktop-KI die Arbeitsanweisungen lesen und eine Regel wörtlich zurückgeben.
- **Sitzungsstart in einem Schritt.** Über die Bridge erzeugt das Öffnen des Werkzeugsatzes für den Sitzungsstart die Zusammenfassung zum Sitzungsstart. Datum und Uhrzeit, die Systemsprache und der geöffnete Bildschirm kommen sofort zurück; die vollständige Zusammenfassung wird im verschlüsselten Zwischenspeicher abgelegt, wo die KI sie liest.
- **Was die Zusammenfassung enthält.** Fällige Gedächtnis-Erinnerungen (heute und überfällig), die die KI zuerst abarbeitet; für welche Mandanten das gemeinsame KI-Gedächtnis Wissen enthält; der eine Datumsanker; die Systemsprache, die zugleich die Gesprächssprache ist; der aktuelle Bildschirm; die Liste der letzten zehn Tagesprotokolle; innerhalb von drei Tagen fällige Fristen und Termine, höchstens zehn Zeilen je Rubrik; offene Aufgaben, die eine andere KI hinterlassen hat. Jeder Abschnitt ist begrenzt, und ein begrenzter Abschnitt sagt der KI, wo sie die vollständige Fassung abruft.
- **Wartende Gerichtsentscheidungen.** Beim ersten Sitzungsstart des Tages, wenn Gerichtsentscheidungen noch nicht bewertet wurden, weist die Zusammenfassung die KI an, Sie sofort zu fragen, ob sie jetzt bewertet werden sollen. Ja: Die KI arbeitet sie einzeln ab. Nein: Sie fährt mit Ihrer Aufgabe fort.
- **Die vollständige Fristenliste.** Die Fristenliste liefert alles, was auf dem Fristenbildschirm von IRONSTICK steht, nach Datum sortiert: Fristen an Dokumenten, anstehende Gerichtsverhandlungen aus den Gerichtsportalen und dem Kalender sowie Fristen, die die KI an ihren eigenen Gedächtnisnotizen gesetzt hat, als solche gekennzeichnet. Die Liste lässt sich auf kritisch (überfällig und heute), bald (bis zu 10 Tage, überfällige eingeschlossen), heute, diese Woche, nächste Woche oder ein Datum eingrenzen. Über die Bridge liefert das Öffnen des Fristen-Werkzeugsatzes dieselbe vollständige Liste plus die heutigen Termine.
- **Termine.** Die Terminliste zeigt die Termine eines Tages oder Zeitraums in dieser Reihenfolge: Gerichtsverhandlungen aus den Gerichtsportalen, Gerichtsverhandlungen aus dem Kalender, dann die übrigen Kalendereinträge.
- **Was eingegangen ist.** Zwei Listen zeigen jeden Eintrag, der heute oder gestern über alle Mandanten und Fälle hinweg erfasst wurde; maßgeblich ist der Tag der Erfassung, nicht das Datum des Ereignisses. Über die Bridge listet das Öffnen des Werkzeugsatzes für Korrespondenz und E-Mail die heute registrierten Dokumente und die heutigen eingehenden E-Mails, jeweils bis zu zehn.
- **Das Tagesbriefing für die KI.** Die KI kann den Inhalt des Tagesbriefings abrufen mit Dokumentnummern und Markierungen: Fristen der nächsten 30 Tage, kritische und heute erledigte, heutige Gerichtstermine und Termine, ungelesene Post, heute erfasste Dokumente, morgige Gerichtstermine, Geburtstage, wieder aufgeflammte Fälle, Wochenstatistik und das jüngste KI-Journal. Eine gesonderte Prüfung hält für jede Desktop-KI getrennt fest, ob sie heute gebrieft wurde; wenn nicht, liefert sie die jüngsten Tagesprotokolle und vermerkt, dass sie gebrieft wurde.
- **Ein neues Dokument lesen.** Der Volltext-Leser liefert den extrahierten Volltext eines Eintrags. Die Arbeitsanweisungen sagen der KI, dass ein Titel oder eine Listenzeile kein Beleg dafür ist, was ein Eintrag dokumentiert: Bevor sie angibt, was ein Eintrag besagt, liest sie den Volltext in der aktuellen Sitzung und hält das, was die Quelle belegt, getrennt von dem, was eine Partei oder ein Rückschluss nahelegt.
- **Fragen zu einem Fall.** Die Chronik eines Falls, seine Fristen und sein Kalender sind Falldaten: Sie werden abgewiesen, bis die KI den Digest dieses Falls und danach sein Fallgedächtnis gelesen hat. Die globalen Listen über alle Fälle hinweg sind ohne das offen. Die Chronik lässt sich nach Datum filtern; ein Datum trifft das Eintragsdatum oder das Datum des Dokuments.
- **Angebot, es in IRONSTICK zu zeigen.** Nach einer Fristen- oder Terminliste kann die KI anbieten, den Eintrag im IRONSTICK-Fenster zu öffnen. Sie navigiert erst, nachdem Sie zugestimmt haben, und nur wenn die Programmsteuerung in der KI-Konfiguration eingeschaltet ist.

## Arbeitsablauf 2 — Allgemeine Gesprächsregeln

Diese Regeln gelten für jede Unterhaltung mit der KI, im integrierten Chat und über die Bridge: wie eine Sitzung beginnt, welche Sprache die KI spricht, woher ihre Fakten stammen dürfen und wie Sie ihre Quellen prüfen.
Zu jeder Regel gehört der Satz, mit dem Sie sie anwenden: gelesene und bestätigte Instruktionen, Antworten, die ihre Quellen nennen, Volltexte, die vor einer Antwort bis zum Ende gelesen wurden.
Lesen Sie dies vor Ihrer ersten echten Arbeitssitzung; dieselben Regeln tragen jeden anderen Arbeitsablauf.

![Geführter Weg: erst lesen, dann antworten](https://www.ironstick.legal/img/73_ironstick_guided_path.png)

Ein fundiertes Gespräch: Die KI liest, was sie lesen muss, bevor sie antwortet — und Sie prüfen die Quellen selbst.

### Schritt 0 — Kontext herstellen

- **IRONSTICK zuerst starten und entsperren.** Ohne die laufende App antwortet die Bridge, dass IRONSTICK nicht läuft; solange der sechsstellige Sicherheitscode nicht eingegeben ist, wird jeder Werkzeugaufruf mit dem Hinweis beantwortet, dass die Anwendung gesperrt ist.
- **Die Sitzung starten.** Beginnen Sie in Ihrer Desktop-KI eine neue Unterhaltung und bitten Sie sie, die Sitzung zu starten. Das Öffnen des Werkzeugsatzes für den Sitzungsstart erzeugt die Zusammenfassung zum Sitzungsstart: das Datum, die Systemsprache, den geöffneten Bildschirm, fällige Erinnerungen, zu bewertende offene Gerichtsentscheidungen, Fristen und Termine der nächsten drei Tage, die letzten zehn Tagesprotokolle und offene Übergabeaufgaben.
- **Achten Sie auf das KI-Symbol in der oberen Leiste.** Sein Aufklappmenü zeigt bei einer Desktop-KI, ob die Instruktionen bestätigt sind (grünes Häkchen oder rotes Kreuz), wie oft sie gelesen wurden und wie viele Regelverstöße vorkamen; für jeden Fall, den die KI berührt hat, zeigt es Profil, Rechtsraum und Digest als gelesen oder nicht gelesen sowie einen Balken der gelesenen Dokumente.
- **Im integrierten Chat** sind die Arbeitsanweisungen Teil jeder Anfrage; es gibt nichts zu bestätigen. Bevor die erste Anfrage an einen externen KI-Dienst geht, bittet IRONSTICK um Ihre Zustimmung.
- **Geben Sie den genauesten Anhaltspunkt, den Sie haben.** Eine Beweisnummer schlägt einen Namen, ein Name schlägt ein Stichwort, und eine Fallnummer sagt der KI, welche Akte sie lesen soll.

Starte die Sitzung. Lies dann den Digest und das Fallgedächtnis von Fall [Aktenzeichen] und sag mir, was offen ist.

### Die Regeln — und was Sie sagen, um sie anzuwenden

Starte die Sitzung.

1. Regel 1 — die KI liest und bestätigt ihre Instruktionen, bevor sie Falldaten berührt, und antwortet in Ihrer Systemsprache.

Zitiere Regel [Nummer] deiner Instruktionen.

2. Regel 2 — jede Regel lässt sich wörtlich anzeigen, sodass Sie die KI darauf festlegen können.

Welches Dokument sagt das? Nenne mir die Beweisnummer.

3. Regel 3 — jede Aussage trägt ihre Quelle; ein Klick auf die Nummer öffnet das Dokument.

Lies [#Beweisnummer] vollständig, bevor du antwortest.

4. Regel 4 — Titel und Kurzbeschreibungen sind keine Fakten; die Antwort stützt sich auf den Volltext.

Trenne, was bewiesen ist, von dem, was nur vermutet wird.

5. Regel 5 — die KI kennzeichnet Einschätzungen und Vermutungen als solche und gibt nur wieder, was die Quellen dokumentieren.

Lies das ganze Dokument, nicht nur die Suchtreffer.

6. Regel 6 — lange Dokumente werden bis zum Ende gelesen; die KI meldet, wenn jede Zeile gelesen wurde.

### Was im Hintergrund geschieht

- **Instruktions-Riegel (Bridge).** Solange die Desktop-KI die Arbeitsanweisungen nicht gelesen und die Regel gegen erfundene Tatsachen wörtlich zurückgegeben hat, wird jedes Werkzeug abgewiesen, außer dem Lesen der Instruktionen, ihrer Bestätigung und der Abfrage der Systemsprache. Die KI, die gelesen hat, muss selbst bestätigen; eine in einer anderen Unterhaltung abgegebene Bestätigung öffnet den Riegel für sie nicht.
- **Erneutes Lesen.** Die Bestätigung verfällt 60 Minuten nach ihrer Abgabe, nach zwei Stunden ohne Aufruf, um Mitternacht und bei jeder neuen Verbindung; wo IRONSTICK das Gesprächsprotokoll der Desktop-KI einsehen kann, auch dann, wenn die Desktop-KI diese Unterhaltung verdichtet. Dann liest die KI erneut und gibt eine zufällig gewählte Regel wörtlich zurück – eine kurze Pause, kein Fehler.
- **Regelsicherungen.** Die Programmlogik achtet auf Abkürzungen, etwa Werkzeugaufrufe vor dem Lesen der Instruktionen oder eine Datei, die am Auslieferungsweg vorbeigeschoben wird. Wird eine erkannt, sind alle Werkzeuge gesperrt, und der Grund wird genannt; je nach Zähler rezitiert die KI die Regel gegen erfundene Tatsachen oder liest die Instruktionen neu und gibt die Regel zurück, die die Abweisung nennt. Der Zähler ist im Aufklappmenü am KI-Symbol sichtbar.
- **Eine Gesprächssprache.** Die KI antwortet die ganze Sitzung über in der IRONSTICK-Systemsprache, gleich in welcher Sprache Sie schreiben. Schriftsätze, Gerichts-E-Mails und Chronikeinträge werden in der Sprache des Rechtsraums des Falls verfasst; das Tagesprotokoll in der Gesprächssprache.
- **Fakten aus Werkzeugen, aus dieser Sitzung.** Die Instruktionen erlauben Falltatsachen nur aus den IRONSTICK-Werkzeugen, in der aktuellen Sitzung abgerufen – nicht aus dem Gedächtnis der KI, früheren Nachrichten, Trainingsdaten, heruntergeladenen Dateien oder einem anderen Konnektor. Was sich nicht abrufen lässt, wird als Lücke benannt und nie durch Rückschluss gefüllt.
- **Erst recherchieren.** Der KI ist aufgetragen, nie zu fragen, was die Werkzeuge beantworten können: Bei einer Fallnummer liest sie, statt zu fragen, welche Akte Sie meinen.
- **Titel und Zusammenfassungen sind keine Fakten.** Bevor die KI behauptet, was ein Eintrag dokumentiert, muss sie den Volltext des Eintrags in der aktuellen Sitzung lesen; was ein Titel, eine Partei oder ein Rückschluss nahelegt, ist als Vermutung zu kennzeichnen. Ein Eintrag ohne extrahierten Text ergibt keine inhaltliche Aussage.
- **Suchtreffer sind kein Lesen.** Jedes Suchergebnis in einer Zwischenspeicher-Datei trägt den Hinweis, dass Treffer kein Lesen sind, samt den hinter den Treffern liegenden, noch ungelesenen Dokumenten. Bei Falldumps nennt eine Lesedeckungs-Warnung jede nicht bis zum Ende gelesene Datei mit ihrem Prozentsatz und den ungelesenen Zeilenbereichen; sie erscheint in späteren Antworten erneut, bis die Lücken gelesen sind.
- **Der Lesestand in den Antworten.** Ändern sich die Lesezahlen, tragen die Werkzeugantworten dieselben Zahlen, die Sie im Aufklappmenü am KI-Symbol sehen, mit der Anweisung, einen Fall, seine Beweise oder sein Gedächtnis nie als vollständig gelesen zu bezeichnen, sofern diese Zahlen es nicht zeigen.
- **Erst Digest und Gedächtnis lesen.** Falldaten sind erst verfügbar, nachdem der Fall-Digest gelesen wurde; für eine Fallaufgabe wird zuerst das vollständige Fallgedächtnis gelesen.
- **Nur das eigene Lesen zählt.** Für die Fallbewertung prüft IRONSTICK jedes Lesen anhand des eigenen Gesprächsprotokolls der Desktop-KI; was Hilfs-Agenten gelesen haben, zählt nicht.
- **Quellen, die Sie prüfen können.** Die KI benennt jedes Dokument mit seiner Beweisnummer. Im integrierten Chat wird eine Nummer nur dann zum Link, wenn dieser Eintrag in Ihren Datensätzen existiert und weder gelöscht noch geheim ist; ein Klick öffnet ihn in der Fallchronik. Eine Nummer ohne einen solchen Eintrag bleibt einfacher Text. Schlagen Sie die Nummer bei einer Desktop-KI in IRONSTICK nach oder bitten Sie die KI, diesen Eintrag vollständig zu lesen.
- **Gesetze aus der Bibliothek.** Gesetze werden zuerst in Ihrer Gesetzesbibliothek geprüft; das Web öffnet sich für eine Norm nur, wenn die Bibliothek keinen Treffer hat, und nur Seiten, die über das IRONSTICK-Seitenwerkzeug geöffnet wurden, gelten als gelesen.
- **Datierte Schreibvorgänge brauchen das heutige Datum.** Werkzeuge, die datierte Inhalte schreiben, werden abgewiesen, sofern die KI nicht innerhalb der letzten 30 Minuten das tatsächliche Datum und die Uhrzeit abgerufen hat. In der Bridge beginnen die Antworten der KI mit diesem Datum.
- **Nach einer langen Unterhaltung.** Gelesenes bleibt für seinen Fall gezählt, wenn die Desktop-KI ihre Unterhaltung verdichtet; der Nucleu eines Falls muss erneut gelesen werden. Um einen Fall wieder aufzunehmen, kann die KI Digest, Nucleu, Fallgedächtnis und Snakes in eine Arbeitsdatei laden.
- **Große Dokumente.** Große Werkzeugantworten gehen vollständig in den verschlüsselten Zwischenspeicher und werden teilweise gelesen, wobei die Lesedeckung zeilengenau verfolgt wird.

## Arbeitsablauf 3 — Fallbewertung

Die Fallbewertung ist die Sicht der KI als Senior-Analyst auf einen Fall, gespeichert in IRONSTICK und angezeigt im Reiter KI-Bewertung des Falls.
Die Erfolgsaussichten werden ausschließlich aus der Gerichtsakte eingeschätzt: aus dem, was an das in der Einleitungsschrift angesprochene Gericht oder die Behörde ging oder von dort kam.
Die beschreibenden Abschnitte stützen sich auf die gesamte IRONSTICK-Akte und auf die Nachbarfälle des Mandanten.
Nutzen Sie sie, wenn ein Fall vorangekommen ist, wenn die letzte Bewertung alt ist oder wenn eine Desktop-KI nach denselben Kriterien wie die App eine neue Bewertung erstellen soll.

![KI-Fallbewertung mit Erfolgsaussicht](https://www.ironstick.legal/img/screens/5%20case%20assesment%20detail.png)

Die Fallbewertung liest die Akte und zeigt die Erfolgsaussicht mit Beweislage, Hauptanspruch und weiteren Ansprüchen.

### Schritt 0 — Kontext herstellen

- **Den Fall öffnen oder nennen.** Öffnen Sie den Fall in IRONSTICK: Die KI kann sehen, welchen Bildschirm und welchen Fall Sie geöffnet haben. Sie können auch die Fallnummer nennen; die KI findet den Fall anhand seiner Nummer.
- **Die Einleitungsschrift muss in der Akte sein.** Die Prognose braucht das Dokument, das das Verfahren eingeleitet hat, zum Beispiel die Klageschrift, gespeichert mit ihrem extrahierten Text. Es kann auch in einem anderen Fall desselben Mandanten liegen, etwa in dem Fall, von dem dieser abgetrennt wurde.
- **Das Gericht muss erfasst sein.** IRONSTICK erkennt das Gericht oder die Behörde nur, wenn es beziehungsweise sie unter Ihren Institutionen erfasst ist und ihr Name in der Adresse der Einleitungsschrift steht. Fehlt sie, bleibt die Erfolgsanzeige leer.
- **In der App oder durch eine Desktop-KI.** Im Reiter KI-Bewertung der App können nur Fälle mit dem Status Aktiv bewertet werden. Eine Desktop-KI kann jeden Fall bewerten, gleich welchen Status er hat und auch dann, wenn nichts Neues eingegangen ist.

### Was Sie sagen — Schritt für Schritt

Öffne Fall [Fallnummer] und nenne mir den Stand der letzten Bewertung.

1. Die KI lädt den Fall und fasst die gespeicherte Bewertung samt ihrem Datum zusammen.

Erstelle eine neue Bewertung von Fall [Fallnummer].

2. Die Gerichtsakte wird zusammengestellt, die Dokumente werden gelesen, und die Bewertung wird in festen Stufen geschrieben; das Ergebnis erscheint im Reiter KI-Bewertung.

Warum sind die Erfolgsaussichten nicht höher?

3. Sie erhalten die Punkte in der Gerichtsakte, die gegen Sie sprechen, jeweils mit ihrer Beweisnummer.

Welche Dokumente in meiner Akte würden helfen, liegen dem Gericht aber noch nicht vor?

4. Die KI vergleicht Ihre gesamte Akte mit der Gerichtsakte und nennt, was dort noch fehlt.

Berücksichtige [#Beweisnummer] und bewerte erneut.

5. Ihr Kommentar wird weitergegeben, und die Bewertung wird damit erneuert.

### Was im Hintergrund geschieht

- **Zuerst die letzte Bewertung.** Der Bewertungsleser liefert die jüngste Bewertung des Falls. Seine erste Zeile nennt das Datum, das Alter und ob es eine vollständige Bewertung oder eine Aktualisierung war, und die KI ist angewiesen, anzugeben, wann die letzte Bewertung erstellt wurde. Wie jedes Werkzeug, das Falldaten liest, wird es abgewiesen, bis die KI den Fall-Digest und danach das Fallgedächtnis gelesen hat.
- **Ein Werkzeug, sechs Stufen.** Eine Desktop-KI erstellt eine neue Bewertung nur mit dem eigenen Bewertungswerkzeug. Jeder Aufruf liefert nur die aktuelle Stufe; die nächste Stufe wird erst herausgegeben, nachdem IRONSTICK die aktuelle geprüft hat. Keine Stufe lässt sich überspringen. Bewertet die App im selben Moment denselben Fall, weist das Werkzeug ab, bis die App fertig ist.
- **Stufe 1 — Einleitungsschrift.** Die KI liest die PDFs des Falls, beginnend mit dem ältesten, und meldet die Einleitungsschrift als sicher, unsicher oder „keine gefunden". Geprüft wird: Jedes gemeldete Dokument gehört zu diesem Mandanten und wurde in dieser Sitzung vollständig gelesen; „keine gefunden" wird nur akzeptiert, wenn jedes PDF des Falls vollständig gelesen wurde. Ein als sicher gemeldetes Dokument wird für spätere Bewertungen gespeichert.
- **Tor: Gerichtsakte.** IRONSTICK sucht ein unter Ihren Institutionen erfasstes Gericht oder eine Behörde in der Adresse am Kopf der ersten Seite der Einleitungsschrift oder als Adressat auf dieser Seite. Die Gerichtsakte besteht dann aus der Einleitungsschrift und jedem eingehenden und ausgehenden Dokument des Falls, dessen Gegenüber dieses Gericht oder diese Behörde ist – von beiden Parteien, ohne Beilagen und ohne geheime oder gelöschte Einträge.
- **Stufe 2 — Stand der Gerichtsakte und Prognose.** Die KI muss jedes Dokument der Gerichtsakte selbst vollständig lesen und dann den Prognoseabschnitt einreichen: einen Prozentsatz, sein Band (klar verloren, eher verloren, offen, eher gewonnen, klar gewonnen), den Stand der Gerichtsakte, den Beweisstand, den Hauptanspruch, die übrigen Ansprüche, die Veränderung gegenüber der vorherigen Prognose und die Begründung. Geprüft wird: jedes Dokument der Gerichtsakte gelesen; der Prozentsatz liegt innerhalb seines Bandes; jede Zeile ist vorhanden; der Stand der Gerichtsakte und die Begründung zitieren nur Dokumente der Gerichtsakte; diese Zeilen sind in der Systemsprache verfasst; eine Veränderung um mehr als 10 Punkte gegenüber der vorherigen Prognose nennt die neuen Dokumente, die sie begründen.
- **Keine Gerichtsakte — was die KI Ihnen mitteilt.** Ohne Einleitungsschrift oder ohne erkanntes Gericht beziehungsweise erkannte Behörde in ihrer Adresse gibt es keine Gerichtsakte. IRONSTICK weist die KI dann an, Sie sofort und vor dem Weitermachen in der Gesprächssprache zu informieren, dass keine Prognose erstellt wird und die Erfolgsanzeige leer bleibt – mit Nennung des Grundes und, falls vorhanden, der Einleitungsschrift. Die Stufe wird dann allein mit dem Fall bestanden, und der Stand der IRONSTICK-Akte tritt an die Stelle der Prognose.
- **Stufen 3 und 4 — Lesen.** Stufe 3 listet die neuesten eingehenden und ausgehenden PDFs des Falls und die gespeicherte Einleitungsschrift; Stufe 4 listet jedes Dokument der übrigen Fälle des Mandanten, das mit diesem Fall verknüpft ist. Jedes muss vollständig gelesen werden; Zusammenfassungen, Titel und Suchtreffer sind kein Lesen. Ein Ergebnis, das in den Zwischenspeicher ging, zählt nur, wenn jeder Teil gelesen wurde.
- **Lesestand.** IRONSTICK führt ein Lesebuch je Fall: wie viele Dokumente des Falls die KI vollständig gelesen hat und ob sie den Digest und das Fallgedächtnis gelesen hat. Das sind dieselben Zahlen, die Sie sehen, und sie kommen mit den Antworten, sobald sie sich ändern. Der KI ist gesagt, dass sie die einzige gültige Grundlage für jede Aussage darüber sind, was sie gelesen hat, und dass sie einen Fall oder seine Dokumente nur dann „vollständig gelesen“ nennen darf, wenn die Zahlen es zeigen.
- **Nur das eigene Lesen der KI zählt.** IRONSTICK prüft jedes Lesen anhand des Gesprächsprotokolls dieser Desktop-KI; was Sub-Agenten oder parallele Agenten gelesen haben, wird nicht gezählt. Wo das Gesprächsprotokoll einer Verbindung nicht einsehbar ist, sagt die Antwort das, und die KI ist angewiesen, Sie zu informieren, dass diese Prüfung nicht möglich war.
- **Stufe 5 — Faktendigest.** Die KI reicht ihren Digest mit den Überschriften Kernfakten, dokumentierte Fakten und Schlüsselzitate, Widersprüche, Lücken und versäumte Fristen, fallübergreifende Bezüge und die Adressaten ein. Geprüft wird: Jede Überschrift ist vorhanden und gefüllt; die Kernfakten zitieren Dokumente; jeder Nachbarfall ist benannt; jedes zitierte Dokument wurde vollständig gelesen.
- **Stufe 6 — Schreiben.** Erst jetzt erhält die KI die Schreibregeln. Die Abschnitte sind Grundlage, Stand der IRONSTICK-Akte, kritischer Hinweis, Stärken, Risiken, fallübergreifende Verzahnung und – wenn IRONSTICK verwandte Fälle anderer Mandanten gefunden hat – diese Fälle als letzter Abschnitt. Der Stand der IRONSTICK-Akte beruht auf dem Digest jedes Dokuments, und die KI liest jedes wichtige Dokument vollständig. Geprüft wird: die Abschnitte und ihre Reihenfolge; die Grundlage nennt die Einleitungsschrift; höchstens sechs Punkte je unter Stärken und Risiken; jedes zitierte Dokument existiert in den Akten dieses Mandanten oder im Material, ist weder geheim noch gelöscht und wurde vollständig gelesen; der fallübergreifende Abschnitt nennt jeden Nachbarfall.
- **Zurückweisung.** Schlägt eine Prüfung fehl, beginnt die Antwort mit REJECTED und einer nummerierten Fehlerliste. Nichts rückt vor, und nichts wird gespeichert; die KI korrigiert genau diese Punkte und ruft erneut auf. Ein auf der falschen Stufe eingereichter Teil wird zurückgewiesen. Die KI kann die Kette mit frischem Material wieder bei Stufe 1 beginnen, und ein Neustart der App beginnt sie ebenfalls von vorn.
- **Speichern.** Wird Stufe 6 akzeptiert, fügt IRONSTICK die Prognose aus Stufe 2 – wo es eine Gerichtsakte gibt – nach der Grundlage ein und speichert die Bewertung als neue vollständige Bewertung. Es zeigt dann den Fall in seinem Reiter KI-Bewertung, und die KI ist angewiesen, Ihnen mitzuteilen, dass die neue Bewertung gespeichert ist.
- **Im Reiter KI-Bewertung.** Der Stand der Gerichtsakte steht neben der Erfolgsanzeige mit dem Band, dem Beweisstand, dem Hauptanspruch und den übrigen Ansprüchen. Ohne Gerichtsakte rückt der Stand der IRONSTICK-Akte an die zweite Stelle, und die Anzeige daneben bleibt leer.
- **Die Bewertung in der App.** Im Reiter selbst fordern Sie eine Bewertung für einen aktiven Fall an. Der Reiter bittet um Zustimmung, bevor er einen externen KI-Dienst nutzt; der Lauf geht dann im Hintergrund weiter, auch wenn Sie Reiter oder Bildschirme wechseln – über die Texterkennung neuer Dokumente, Recherche, Schreiben und die Prognose. Eine bestehende Bewertung kann innerhalb eines Tages nach der letzten vollständigen Neubewertung, höchstens dreimal hintereinander, aktualisiert werden. Ist seit der letzten Bewertung nichts Neues eingegangen, öffnet sich eine Neubewertung erst, nachdem Sie im Einwandfeld einen Kommentar von mindestens drei Wörtern geschrieben haben.

## Arbeitsablauf 4 — Ein Nucleu erstellen

Ein Nucleu ist die verbindliche Stoßrichtung eines Falls: die Kernlinie der Argumentation, die leitenden Tatsachen und Beweise, was gesagt werden muss und was niemals gesagt werden darf.
Er besteht auf zwei Ebenen — einmal für einen ganzen Sachverhalt, gültig für jeden Fall darin, und einmal für den einzelnen Fall — und jedes Dokument, das die KI für den Fall schreibt, ist ihm untergeordnet.
Der beste Zeitpunkt zum Erstellen ist unmittelbar nach einer Fallbewertung, solange der ganze Fall noch im Arbeitskontext der KI steht.
Die KI entwirft ihn, IRONSTICK zeigt Ihnen jede Änderung, und erst Ihre Freigabe speichert ihn als neue Version.

![Fall-Reiter mit Nucleu (Atom-Symbol) und Snake (Schlangen-Symbol)](https://www.ironstick.legal/img/screens/5%20case%20tab2.png)

Der Nucleu im Reiter mit dem Atom-Symbol: Die KI entwirft und schlägt vor, Sie übernehmen; jede übernommene Änderung wird zu einer neuen Version, die jeden späteren Schriftsatz lenkt.

### Schritt 0 — Kontext festlegen

- **Den Zeitpunkt wählen.** Bitten Sie um den Nucleu unmittelbar nach einer Fallbewertung. Bei der Bewertung liest die KI den Digest, die Volltexte, das Fallgedächtnis sowie einen vorhandenen Nucleu und eine vorhandene Snake; solange all das noch in ihrem Arbeitskontext steht, lässt sich die Stoßrichtung aus dem ganzen Fall destillieren statt aus einigen wenigen Dokumenten.
- **Die Ebene wählen.** Ein *Sachverhalts-Nucleu* gehört zu einem Sachverhalt (einer Gruppe von Fällen in der Fall-Liste) und gilt für jeden Fall darin. Ein *Fall-Nucleu* gilt nur für einen Fall und justiert die Stoßrichtung für diesen Fall. Ein Fall wird von seinem eigenen Nucleu und vom Nucleu jedes Sachverhalts geleitet, zu dem er gehört; der Fall-Nucleu sollte daher der Linie des Sachverhalts nicht widersprechen.
- **Wo Sie ihn finden.** Auf dem Fall-Bildschirm enthält der Reiter mit dem Atom-Symbol (*Fall-Nucleu*) oben den bearbeitbaren Fall-Nucleu und darunter, schreibgeschützt, den Nucleu jedes Sachverhalts, zu dem der Fall gehört. In der Fall-Liste öffnet die Atom-Schaltfläche in der Titelleiste eines Sachverhalts deren Sachverhalts-Nucleu. Jeder Nucleu trägt seine Kennung, zum Beispiel *#KI00041 · v3*; ein Klick kopiert sie, sodass Sie sie in den Chat einfügen können.
- **Was hineingehört.** Die Stoßrichtung und nichts anderes: die leitende These, die Stellung des Falls im größeren Streit, die Parteien, die Thesen der Gegenseite und die Antworten darauf, wie künftige Beweise zu gewichten sind, und die Linien, die nicht überschritten werden dürfen. Tatsachen gehen als dokumentierte Historie hinein; der aktuelle Stand des Falls wird jedes Mal aus dem Digest gelesen.
- **Was nicht hineingehört.** Erinnerungen, Notizen, To-dos, Sitzungsverlauf, offene Fragen und Arbeitsgedanken gehören in das Fallgedächtnis. Die Aussagen der Gegenseite, denen die Akte widerspricht, gehören in die Snake.
- **Umfang.** Höchstens 20.000 Zeichen je Nucleu. Der Zähler neben dem Text zeigt die Länge und wird oberhalb der Grenze rot. Braucht die Stoßrichtung mehr Platz, halten Sie die gemeinsame Linie im Sachverhalts-Nucleu und legen Sie das, was für einen Fall spezifisch ist, in den Nucleu dieses Falls, mit derselben Grenze.
- **Selbst schreiben.** Sie können einen Nucleu auch direkt im Reiter oder im Sachverhalts-Fenster tippen oder korrigieren und *Speichern* drücken; jedes Speichern ist eine neue Version.

### Was Sie sagen — Schritt für Schritt

Erstelle den Nucleu für Fall [Aktenzeichen] aus dieser Bewertung.

1. Die KI destilliert die Stoßrichtung aus dem Fall, den sie gerade gelesen hat, und öffnet ihren Vorschlag im Reiter *Fall-Nucleu*, wo Sie ihn übernehmen oder ablehnen.

Erstelle einen Nucleu für Sachverhalt [Sachverhalt]: die Kernlinie, die für jeden Fall darin gilt.

2. Die KI entwirft den Sachverhalts-Nucleu und zeigt ihn im Sachverhalts-Fenster; einmal übernommen, gilt er für jeden Fall des Sachverhalts und erscheint in jedem von ihnen schreibgeschützt.

Wie lang ist jeder Nucleu von Fall [Aktenzeichen], und was könnte in den Sachverhalts-Nucleu wandern?

3. Die KI liest den Fall-Nucleu und jeden Sachverhalts-Nucleu des Falls und misst jeden an der Grenze von 20.000 Zeichen.

Aktualisiere den Nucleu von Fall [Aktenzeichen]: Wir argumentieren nicht mehr mit [Punkt].

4. Die KI erklärt im Chat, was sie ändern will und warum, und schlägt dann nur die geänderten Passagen vor; Sie sehen sie in roter Fettschrift, und eine übernommene Änderung wird zur nächsten Version.

Lies mir den aktuellen Nucleu von Fall [Aktenzeichen] vor, mit dem Nucleu jedes Sachverhalts.

5. Die KI lädt das vollständige Set in den aktuellen Versionen, jeweils mit seiner Kennung, zum Beispiel #KI00041 · v3.

Widerspricht dieser Entwurf dem Nucleu?

6. Die KI vergleicht den Entwurf Punkt für Punkt mit jedem Nucleu, der für den Fall gilt, und benennt jede Abweichung; bei einem Schriftsatz ist dieser Vergleich die Schlussrunde der Prüfkette.

### Was im Hintergrund geschieht

- **Ein Schreibweg, mit Ihrer Freigabe.** Die KI schlägt einen Nucleu über ein eigenes Werkzeug vor: die erste Version eines Fall-Nucleu über den Fall, die erste Version eines Sachverhalts-Nucleu über den Sachverhalt (entnommen aus der Liste der Sachverhalte), jede spätere Änderung über die Nucleu-Nummer. Änderungen im Text gehen als gezielte Ersetzungen ein; der KI ist aufgetragen, den Nucleu nie komplett neu zu tippen und im Chat zu erklären, was sie ändern will und warum, bevor sie vorschlägt.
- **Das Prüffenster.** Für einen Fall-Nucleu öffnet IRONSTICK den Fall im Reiter *Fall-Nucleu*; für einen Sachverhalts-Nucleu erscheint das Fenster über dem aktuellen Bildschirm. Es zeigt den ganzen Text mit jeder Änderung in roter Fettschrift, Löschungen durchgestrichen, und die Schaltflächen *Ablehnen* und *Übernehmen*. Es ist immer nur eine Nucleu-Prüfung offen. Brauchen Sie länger als etwa eine Minute, wird der KI mitgeteilt, dass die Prüfung noch offen ist, und sie sendet sie nicht erneut; Ihre spätere Freigabe speichert die Version trotzdem.
- **Größenprüfung.** Ein Vorschlag über 20.000 Zeichen wird abgewiesen, bevor er Sie erreicht, mit der Anweisung, sich auf den leitenden Kern zu beschränken und fallspezifische Stoßrichtung in den Fall-Nucleu bzw. gemeinsame Stoßrichtung in den Sachverhalts-Nucleu zu legen.
- **Aktuelles Datum.** Wie jeder datierte Schreibvorgang braucht ein Nucleu-Vorschlag das aktuelle Datum, das innerhalb der letzten 30 Minuten abgerufen wurde.
- **Versionen, nie überschrieben.** Jeder übernommene Vorschlag und jedes Speichern im Reiter wird als neue Zeile mit der nächsten Versionsnummer gespeichert; die Nummer *#KIxxxxx* bleibt über alle Versionen gleich, und die höchste Version ist die aktuelle. Unveränderter Text erzeugt keine neue Version. Wird ein Sachverhalt gelöscht, wird ihr Nucleu ausgeblendet und seine Versionen bleiben erhalten.
- **Wie die KI ihn liest.** Ein Aufruf mit dem Fall liefert das ganze Set: den Fall-Nucleu und den Nucleu jedes Sachverhalts des Falls, jeweils mit seiner Kopfzeile *#KIxxxxx · vN*, vollständig, und es nennt die Ebenen, die noch keinen haben. Der Nucleu steht außerdem ganz oben im Fall-Digest, im Fallbriefing und im Wiederaufnahme-Paket. Eine Inventarliste zeigt jeden Nucleu ohne Volltexte; wer das Toolset für KI-Instruktionen öffnet, sieht das Nucleu-Inventar des gerade geöffneten Falls.
- **Nach jeder Änderung neu lesen.** IRONSTICK hält fest, welche Version jedes Nucleu die KI gelesen hat. Eine neue Version oder die Verdichtung der Unterhaltung durch die Desktop-KI macht die frühere Lesung ungültig.
- **Wo er wirkt.** Der Nucleu lenkt jeden Schriftsatz über [Arbeitsablauf 6 — Einen Schriftsatz schreiben](#w6). Dort verweigert das Nucleu-Tor das Schreiben, Prüfen und Ausliefern eines Dokuments des Falls, bis jeder anwendbare Nucleu — der Fall-Nucleu und jeder Sachverhalts-Nucleu — in seiner aktuellen Version gelesen wurde; ebenso wird das verbindliche Dokumentformat erst ausgeliefert, nachdem jeder Nucleu des Falls gelesen wurde. Am Ende der Prüfkette steht die Nucleu-Runde: Das Dokument wird Punkt für Punkt mit dem Nucleu verglichen, jede Abweichung wird korrigiert oder erledigt, ein Widerspruch kann nie verworfen werden, und einer, der sich nicht beseitigen lässt, wird als Konflikt markiert. Ein Konflikt stoppt die Arbeit an diesem Dokument, bis Sie ausführlich gewarnt wurden und entschieden haben, ob das Dokument korrigiert wird oder die Abweichung bleibt.
- **In der Fallbewertung.** Läuft eine Bewertung, ist jeder vorhandene Nucleu des Falls als verbindliche Stoßrichtung Teil ihres Kontexts, zitiert mit seiner Kennung.

## Arbeitsablauf 5 — Die Snake aufbauen

Die Snake ist das interne Arbeitsregister der Aussagen der Gegenseite in einem Fall, denen die Beweise in der Akte widersprechen. Jeder Eintrag legt den Ort der Aussage fest — Dokument, Datum, Fall und Seite — und führt jedes Dokument auf, das sie widerlegt.
Sie bauen sie auf zwei Wegen auf: durch gezielte Recherche in einem oder mehreren Fällen oder in Dokumenten, die Sie benennen; oder mitten in einer beliebigen Unterhaltung, sobald ein Widerspruch der Gegenseite zur Akte auftaucht.
IRONSTICK prüft jede Zeile gegen Ihre Unterlagen, Sie genehmigen jede Version, und in jedem späteren Schriftsatz werden die Snake-Einträge als Argumente gegen die Gegenseite angeboten.

![Nucleu und Snake auf dem Weg zum Schriftsatz](https://www.ironstick.legal/img/76_nucleu_snake_path.png)

Die Snake hält die Widersprüche der Gegenseite zur Akte fest: jede Zeile gegen die Unterlagen geprüft, Ihre Freigabe für jede Version.

### Schritt 0 — Kontext festlegen

- **Gezielte Recherche.** Benennen Sie die Fälle oder die Dokumente, in denen die KI nach Aussagen der Gegenseite suchen soll, die die Unterlagen widerlegen. Ein guter Zeitpunkt ist unmittelbar nach einer Fallbewertung oder einer vollständigen Lesung des Falls, solange die Akten noch im Arbeitskontext der KI stehen. Bitten Sie sie, das Netz weit auszuwerfen; die Snake enthält nur, was die Dokumente beweisen.
- **Während einer beliebigen Unterhaltung.** Taucht ein Widerspruch der Gegenseite zur Akte auf, während Sie an etwas anderem arbeiten, weisen Sie die KI an, ihn in die Snake aufzunehmen, falls er dort noch nicht steht. Sie prüft zuerst die aktuelle Snake und erweitert einen vorhandenen Eintrag, statt den Punkt doppelt zu registrieren.
- **Eine Snake pro Fall.** Eine Snake gehört zu genau einem Fall. Ein Sachverhalt hat keine eigene Snake; sie zeigt die Snakes aller ihrer Fälle.
- **Wo Sie sie finden.** Auf dem Fall-Bildschirm enthält der Reiter mit dem Snake-Symbol rechts vom Nucleu-Reiter (*Fall-Snake*) die Snake dieses Falls mit ihrer Kennung, zum Beispiel *#SN00004 · v2*, und einem Zeichenzähler. In der Fall-Liste öffnet die Snake-Schaltfläche in der Titelleiste eines Sachverhalts die *Snakes des Sachverhalts*: die Snakes aller ihrer Fälle in der Reihenfolge der Liste; ein Klick auf einen Fall öffnet ihn im Reiter *Fall-Snake*.
- **Umfang.** Höchstens 20.000 Zeichen je Fall-Snake. Der Zähler wird oberhalb der Grenze rot. Beschränken Sie jeden Eintrag auf den Ort, eine kurze Beschreibung und seine Verweiszeilen.
- **Was hineingehört.** Nur Aussagen der Gegenseite, denen die Beweise in der Akte widersprechen. Vermutungen, Strategie und Erinnerungen gehören nicht hinein; Erinnerungen kommen in das Fallgedächtnis, und Widersprüche der Gegenseite kommen nur in die Snake, nie in das Gedächtnis.

**Das Eintragsformat.** Einträge sind durch eine Leerzeile getrennt. Die erste Zeile ist der Ort der Aussage; dann die Beschreibung; dann jedes verknüpfte Dokument in einer eigenen Zeile, beginnend mit einem Pfeil:

#0004417 · 12.10.2026 · CaseID 19 · S. 2 oben
Berufungsbeantwortung, Gegner B: Die Gerichte hätten das Eigentum an den Anlagen bereits rechtskräftig entschieden. Dagegen die Akte: Beide Urteile überlassen das Eigentum ausdrücklich dem Hauptverfahren, und Gegner B hat in der früheren Verhandlung dasselbe gesagt.
→ #0003304 · 18.07.2026 · CaseID 19 · S. 5 Mitte
→ #0000586 · 25.04.2026 · CaseID 8 · S. 9 oben
→ #0001127 · 24.06.2026 · CaseID 8 · S. 15 unten

Jede Verweiszeile lautet: Beweismittelnummer mit sieben Ziffern · das Dokumentdatum, wie IRONSTICK es erfasst (TT.MM.JJJJ) · die CaseID dieses Dokuments · die Seite und die Position darauf (oben, Mitte oder unten, in jeder der Systemsprachen) oder ein Strich für Beweismittel ohne Seiten. Erstreckt sich ein Widerspruch über mehrere Dokumente, erhält jedes davon seine eigene Verweiszeile: die Aussage, die Gegenaussage und jedes dazwischenliegende Beweisstück. Sie können Einträge auch selbst im Reiter tippen oder korrigieren und *Speichern* drücken; jedes Speichern ist eine neue Version.

### Was Sie sagen — Schritt für Schritt

Baue die Snake von Fall [Aktenzeichen] aus der vollständigen Akte auf.

1. Die KI liest den Fall und jedes Dokument, das die Gegenseite widerlegt, und schlägt dann die Snake im Reiter *Fall-Snake* vor, jede Zeile gegen Ihre Unterlagen geprüft.

Durchsuche die Dokumente [Beweismittelnummern] nach Aussagen der Gegenseite, denen die Akte widerspricht, und nimm sie in die Snake von Fall [Aktenzeichen] auf.

2. Die KI liest genau diese Dokumente vollständig und trägt nur die Aussagen ein, die Ihre Unterlagen widerlegen, jeweils mit den widerlegenden Dokumenten.

Baue die Snakes aller Fälle in Sachverhalt [Sachverhalt] auf. Wirf das Netz weit aus.

3. Die KI arbeitet Fall für Fall, eine Snake pro Fall; das Sachverhalts-Fenster zeigt dann alle in der Reihenfolge der Fall-Liste.

Steht dieser Widerspruch schon in der Snake von Fall [Aktenzeichen]?

4. Die KI liest die aktuelle Snake und sagt Ihnen, ob der Punkt bereits registriert ist und in welchem Eintrag.

Nimm diesen Widerspruch der Gegenseite in die Snake auf, falls er dort noch nicht steht.

5. Die KI liest die aktuelle Snake, erweitert den vorhandenen Eintrag oder schreibt einen neuen, mit jedem widerlegenden Dokument als eigener Zeile, und zeigt Ihnen die Änderung zur Übernahme.

Welche Snakes haben wir für Mandant [Mandant]?

6. Die KI listet jede Snake der Fälle des Mandanten mit Kennung, Version und Anzahl der Einträge auf.

### Was im Hintergrund geschieht

- **Erst lesen.** Hat der Fall bereits eine Snake, wird eine Änderung erst angenommen, nachdem die KI deren aktuelle Version in dieser Sitzung gelesen hat, und erneut, nachdem die Desktop-KI ihre Unterhaltung verdichtet hat. Ein Fall ohne Snake nimmt seine ersten Einträge direkt an. Der KI ist aufgetragen zu prüfen, dass der Punkt nicht schon registriert ist, und den vorhandenen Eintrag zu erweitern, statt ihn doppelt einzutragen.
- **Nur aus Gelesenem schreiben.** Hat die KI ein Dokument der Gegenpartei oder einer Behörde im Fall geöffnet, wird eine Änderung der Snake abgewiesen, bis dieses Dokument vollständig gelesen wurde.
- **Jedes Mal der ganze Text.** Die KI schlägt die vollständige Snake einschließlich ihrer Ergänzung vor; Teilschreibvorgänge (Anhängen oder gezielte Ersetzungen) werden abgewiesen, sodass jeder Vorschlag mit dem ganzen Register im Blick erfolgt. Ein Vorschlag über 20.000 Zeichen wird abgewiesen, bevor er Sie erreicht.
- **Jede Zeile gegen die Unterlagen geprüft.** Bevor der Vorschlag gezeigt wird, prüft IRONSTICK jeden Eintrag: die erste Zeile in der geforderten Form, eine Beschreibung, mindestens eine Verweiszeile, keine Beschreibung nach den Verweiszeilen; und für jede Verweiszeile, dass das Beweismittel existiert, zur angegebenen CaseID gehört, genau dieses Dokumentdatum trägt, zum selben Mandanten gehört wie der Fall und dass die Seite innerhalb des gespeicherten PDFs liegt. Bei jedem Fehler wird nichts vorgeschlagen; die KI erhält die Fehlerliste, Eintrag für Eintrag, und korrigiert sie.
- **Das Prüffenster.** IRONSTICK öffnet den Fall im Reiter *Fall-Snake* und zeigt den ganzen Text mit jeder Änderung in roter Fettschrift, mit den Schaltflächen *Ablehnen* und *Übernehmen*. Brauchen Sie länger als etwa eine Minute, wird der KI mitgeteilt, dass die Prüfung noch offen ist, und sie sendet sie nicht erneut; Ihre spätere Freigabe speichert die Version trotzdem.
- **Versionen, nie überschrieben.** Jeder übernommene Vorschlag und jedes Speichern im Reiter wird zu einer neuen Version unter derselben Nummer *#SNxxxxx*; unveränderter Text erzeugt keine neue Version.
- **Wie die KI sie liest.** Die KI kann die Snake eines Falls lesen, die Snakes aller Fälle eines Sachverhalts in der Reihenfolge der Fall-Liste, die Snakes aller Fälle eines Mandanten oder eine Snake über ihre Nummer — jeder Block mit der Kopfzeile *#SNxxxxx · vN* samt seinem Fall. Eine Inventarliste zeigt jede Snake mit der Anzahl ihrer Einträge, ohne Volltexte. Das Wiederaufnahme-Paket eines Falls und die Fallbewertung tragen die Snake ebenfalls.
- **Wo sie wirkt.** Die Snake wirkt über das Snake-Tor in [Arbeitsablauf 6 — Einen Schriftsatz schreiben](#w6). Gibt es für den Fall Snakes — seine eigene Snake oder die der anderen Fälle seiner Sachverhalte —, stellt die KI Ihnen die feste Frage *Möchten Sie das Snake-Tor?*, es sei denn, Sie haben bereits *mit Snake-Tor* gesagt oder die Runde mit eigenen Worten erlassen. Nach Ihrem Ja folgt die Snake-Runde der Prüfkette, vor der abschließenden Nucleu-Runde: Die KI liest die Snake des Falls und die Snakes der anderen Fälle seiner Sachverhalte vollständig, liest den Entwurf erneut und erledigt jeden Snake-Eintrag in einer Ergebnisdatei als eingebaut (mit dem Ort im Dokument), verworfen oder nicht relevant, jeweils mit Begründung. Ein Eintrag wird verworfen, wenn er oder seine Formulierung gegen den Mandanten gewendet werden könnte. *Bereits verwendet* oder *dem Gericht bereits bekannt* wird als Begründung nicht akzeptiert: Die Einträge sind Argumente, die in jedem Dokument zu wiederholen sind, in dem sie passen. Die Runde wird nur akzeptiert, wenn jeder Eintrag erledigt ist, die Snakes und der Entwurf nach dem Auftrag gelesen wurden und der Entwurf überall tatsächlich geändert wurde, wo ein Eintrag eingebaut wurde.

## Arbeitsablauf 6 — Einen Schriftsatz schreiben

Dieser Arbeitsablauf führt Sie von einer Anfrage in einfachen Worten zu einer einreichungsfähigen Vorlage in der Textverarbeitung: einem Schriftsatz, einem Antrag an ein Gericht oder eine Behörde oder einem Brief.
Die KI liest den Fall, bevor sie schreibt, baut das Dokument in ihrem verschlüsselten Zwischenspeicher auf, lässt jede Tatsache, jedes Zitat, jede Norm und jede Partei gegen Ihre Unterlagen prüfen, durchläuft eine feste Prüfkette und fragt Sie an jedem Entscheidungspunkt.
Nutzen Sie ihn immer dann, wenn etwas schriftlich Ihre Kanzlei verlassen soll. Was IRONSTICK verlässt, ist immer eine Vorlage, die Sie selbst prüfen, unterschreiben und versenden.

![Geführter Weg mit Prüfungen bis zum fertigen Schriftsatz](https://www.ironstick.legal/img/75_ironstick_coaching_line.png)

Von Ihrem Auftrag zur Vorlage in der Textverarbeitung: Die KI liest, entwirft und verifiziert, geführt von Prüfungen bis zum Häkchen; Sie entscheiden bei jedem Schritt.

### Schritt 0 — Kontext festlegen

- **Den Fall benennen.** Öffnen Sie für den integrierten Chat den Fall und wählen Sie *Text verfassen* › *Mit KI Hilfe*: Der Chat öffnet sich mit diesem Fall; von einem Chronikeintrag aus ist das Dokument bereits benannt. Nennen Sie bei einer Desktop-KI in Ihrer ersten Nachricht das Aktenzeichen — die KI kann auch IRONSTICK fragen, welchen Bildschirm und welchen Fall Sie geöffnet haben.
- **Der Fall braucht sein Land.** Recht, Sprache und Datum des Dokuments stammen aus dem im Fall gesetzten Rechtsraum. Ist kein Rechtsraum gesetzt, wird das Dokumentformat mit der Aufforderung verweigert, ihn zuerst zu setzen.
- **Nutzen Sie das stärkste Modell Ihrer Desktop-KI.** Für das Entwerfen ist die KI angewiesen, vor dem Start die stärkste Modellstufe zu empfehlen und nach der Auslieferung wieder eine leichtere. Die Desktop-KI-App wechselt nur von Ihrer Hand; der integrierte Chat wechselt selbstständig.
- **Bündeln Sie Ihre erste Nachricht.** Fall, Art des Dokuments, was Sie erreichen wollen, die Beweismittelnummern, auf denen es beruht, Ton und Länge sowie ein früherer Schriftsatz, dessen Adressierung funktioniert hat. Dokumente begründen einen Schriftsatz; Adjektive tun es nicht.
- **Sagen Sie vorab, was Sie von den Prüfrunden wollen.** Wörter wie *mit Snake-Tor* oder *ohne Snake und Nucleu* in Ihrer eigenen Nachricht werden von IRONSTICK erkannt; die KI fragt dann für dieses Dokument nicht nach diesen Runden. Eingefügter Text zählt nicht als Ihre Worte.

Entwirf die Erwiderung auf die Klageerwiderung #0004127 im Fall [Aktenzeichen], stütze sie auf #0003310 und #0003318, kurz und sachlich, adressiert wie die Berufung vom 12. Mai, mit Snake-Tor.

### Was Sie sagen — Schritt für Schritt

Schreibe eine Erwiderung auf [#Beweismittelnummer] im Fall [Aktenzeichen]. Ziel: [Ziel].

1. Die KI liest den Fall, den Nucleu des Sachverhalts und des Falls sowie das Dokument, auf das Sie antworten, und entwirft dann in ihrem Zwischenspeicher.

Verwende [#Beweismittelnummern] als Beweis. Ton: [sachlich / bestimmt].

2. Ihre Anweisungen fließen in den Entwurf ein; jedes zitierte Dokument wird vollständig gelesen.

Keine Korrekturen — weiter.

3. Die Prüfkette läuft: erneut gelesen, mit Ihren früheren Schriftsätzen verglichen, von der Gegenseite her angegriffen, Snake-Runde, Nucleu-Prüfung.

Ändere Punkt [Nummer]: [Ihre Korrektur].

4. Der Entwurf wird korrigiert und erneut geprüft, bevor es weitergeht.

Liefere ihn aus.

5. Das Dokument erscheint im Download-Fenster; übernehmen Sie es in die Textverarbeitung, unterschreiben Sie es und versenden Sie es selbst.

### Was im Hintergrund geschieht

- **Rechtsraum und Sprache.** Die KI bestimmt den Rechtsraum aus dem Fall, bevor sie juristisch arbeitet. Sie spricht mit Ihnen in der IRONSTICK-Systemsprache; das Dokument wird in der Amtssprache des Landes des Falls geschrieben, und das Format trägt das Aktenzeichen und das heutige Datum.
- **Den Fall lesen, bevor geschrieben wird.** Werkzeuge, die auf einem Fall schreiben, werden abgewiesen, bis die KI den Fall-Digest gelesen hat; ein Schriftsatz verlangt zudem, dass die neuesten Dokumente des Falls vollständig gelesen wurden. Die Abweisung listet auf, was noch ungelesen ist.
- **Starttor für das Format.** Das verbindliche Dokumentformat (nach Art des Dokuments: Schriftsatz oder Brief, anwaltlich vertreten oder selbst vertreten) wird erst ausgeliefert, nachdem die KI den vollständigen Digest, jedes ausgehende Dokument des Mandanten in diesem Fall vollständig, das Dokument, auf das der Schriftsatz antwortet, vollständig, das Fallgedächtnis und jeden Nucleu des Falls gelesen hat. Alles, was an ein Gericht adressiert ist, ist ein Schriftsatz, nie ein Brief. Für einen Schriftsatz bringt das Format außerdem ein Profil des Gerichts aus Ihren Akten mit.
- **Zuerst Ihre ursprünglichen Anträge.** Antwortet der Schriftsatz auf ein Dokument, muss die KI zuerst im Chat jeden Antrag der ursprünglichen Antragsschrift des Mandanten in dem Fall auflisten, zitiert mit seiner Beweismittelnummer, Sie fragen, ob er noch zutrifft, und ihren Zug beenden. Das Format wird erst nach Ihrer Antwort ausgeliefert. Eröffnet das Dokument selbst das Verfahren, sagt die KI das in einem Satz und fragt nichts.
- **Zuerst der Nucleu.** Schreiben, Prüfen und Ausliefern werden abgewiesen, bis jeder aktuelle Nucleu des Falls — der Fall-Nucleu und der Nucleu jedes Sachverhalts, zu dem er gehört — in seiner aktuellen Version gelesen wurde, erneut nach jeder neuen Version und nachdem die Desktop-KI ihre Unterhaltung verdichtet hat.
- **Nur aus Gelesenem schreiben.** Hat die KI ein Dokument der Gegenpartei oder einer Behörde im Fall geöffnet, wird die Arbeit an einem Dokument dieses Falls abgewiesen, bis dieses Dokument vollständig gelesen wurde. Ein Entwurf, der Dokumente zitiert, die die KI nicht vollständig gelesen hat, ist gegen jede Änderung gesperrt, bis sie gelesen sind; das Löschen der zitierten Passage hebt die Sperre nicht auf.
- **Die deterministische Schriftsatzprüfung.** Sie läuft auf dem aktuellen Stand der Datei, ohne KI, und prüft: jeden Beweismittelverweis und Stempel sowie dass jedes zitierte oder beigelegte Dokument für dieses Dokument gelesen wurde; jede Gesetzeszitierung gegen die verifizierte Gesetzesbibliothek; jedes wörtliche Zitat gegen die Volltexte des Falls, abgerufene Dokumente und die Bibliothek; Aktenzeichen; Beträge, die exakt der erfassten Form entsprechen müssen; Namen von Mandant, Personen und Institutionen Buchstabe für Buchstabe, einschließlich diakritischer Zeichen; IBANs und, als landesspezifische Prüfung, rumänische Personenkennzahlen (CNP) per Prüfsumme und gegen die Unterlagen; dass jede genannte Person oder Firma zusammen mit ihren Verbindungen gelesen wurde; und das verbindliche Format einschließlich des Anlagenverzeichnisses. Jeder Befund ist als VERIFIZIERT, UNVERIFIZIERT oder WIDERSPRÜCHLICH markiert.
- **Lesen, bevor Sie schreiben, nicht danach.** Eine Lesung nach der letzten Änderung des Entwurfs zählt für diese Verifikation nicht: Die KI muss zuerst lesen, es dann in den Text einarbeiten und danach erneut verifizieren.
- **Zitate.** Ein Zitat, das in keiner Quelle gefunden wird, blockiert die Auslieferung; es umzuformulieren oder die Anführungszeichen zu streichen, lässt es blockiert, und die einzige Abhilfe ist der exakte Wortlaut der Quelle. Ein Zitat, das aus dem Text verschwindet, wird Ihnen bei der Auslieferung gemeldet.
- **Anlagen.** Jeder Anlageneintrag muss den Beweismittelverweis, den von IRONSTICK abgerufenen Eingangsstempel und den Seitenplatzhalter tragen. Eine Anlage ohne gespeicherte Datei und ohne Medien wird zur Prüfung markiert. Eine Anlage, die ein ausgehendes Dokument oder ein Schriftstück der Gegenseite ist, wird mit der Anweisung markiert, stattdessen das Originaldokument beizulegen, falls das Schriftstück nur wegen einer Seite darin beigefügt wurde; diese Markierung ist ein Prüfhinweis, keine Sperre.
- **Offene Befunde gehen an die KI zurück.** Jeder Befund der Prüfung wird der KI zur Behebung zurückgegeben, und die Prüfung läuft auf dem neuen Stand erneut. Die Prüfungen werden pro Dokument gezählt, über Versionsnummern hinweg: Sind nach der fünften Prüfung noch Befunde offen, übergibt IRONSTICK die Entscheidung mit einer Systemnachricht an Sie, und die KI legt Ihnen die offenen Punkte vor, damit Sie entscheiden, wie es weitergeht.
- **Zuerst die Zusammenfassung.** Nach dem ersten OK beginnt die Prüfkette mit einer Zusammenfassung des Dokuments für Sie — Adressat und Verfahren, Anträge, Gliederung, Kerntatsachen mit ihren Beweismitteln, zitierte Gesetze. Die KI wartet auf Ihre Antwort; Korrekturen werden eingearbeitet, bevor die Kette weiterläuft.
- **Die Prüfkette.** Jeder Schritt wird an die Schriftsatzprüfung zurückgemeldet und geprüft, bevor der nächste Auftrag kommt: die ganze Datei erneut lesen; die früheren Schriftsätze des Mandanten zu den zitierten Dokumenten, damit der Mandant seinen eigenen früheren Eingaben nicht widerspricht; eine Erwiderungstabelle, die jede Passage des beantworteten Dokuments abdeckt; ein Angriff als Gegenpartei, in eine eigene Datei geschrieben und Punkt für Punkt im Entwurf erledigt; eine Bewertung, auf dieselbe Weise erledigt. Eine Datei gilt nur dann als gelesen, wenn jede Zeile seit dem Auftrag gelesen wurde; eine Runde ohne übernommenen Befund, in der die meisten Befunde als bereits erledigt verworfen werden, wird abgewiesen.
- **Feste Fragen.** Danach kommen bis zu zwei feste Fragen — die Nucleu-Frage, wenn der Fall einen Nucleu hat, die Snake-Frage, wenn es Snakes dafür gibt. Die KI stellt sie wortwörtlich, eine nach der anderen, und akzeptiert nur ein Ja oder ein Nein aus Ihrer eigenen Nachricht. Ein neuer Schriftsatz ohne frühere Version erhält die Nucleu-Runde ohne die Frage. Ihre Antwort wird für alle Versionen des Dokuments gemerkt.
- **Snake-Runde.** Nach Ihrem Ja liest die KI die Snakes des Falls und seiner Sachverhalte und hält für jeden Snake-Eintrag fest, ob er eingebaut, verworfen oder nicht relevant ist, jeweils mit Begründung; ein Eintrag wird verworfen, wenn er gegen den Mandanten gewendet werden könnte.
- **Nucleu-Runde.** Das Dokument wird Punkt für Punkt mit dem Nucleu verglichen. Ein Widerspruch kann nicht verworfen werden: Er wird korrigiert oder als Konflikt markiert. Ein Konflikt stoppt die Arbeit an diesem Dokument; die KI muss Sie ausführlich warnen und erst nach Ihrer Entscheidung, das Dokument zu korrigieren oder die Abweichung zu belassen, fortfahren.
- **Ihre Korrekturen bleiben drin.** Ihre eigenen Nachrichten werden pro Dokument festgehalten. Eine Korrektur von Ihnen, die eingearbeitet und später wieder entfernt wurde, blockiert die Kette und die Auslieferung. Eine Passage, die auf Ihren eigenen Worten beruht, kann nicht gelöscht werden, bevor die KI Sie gefragt hat.
- **Eine Änderung startet die Kette neu.** Jede Bearbeitung macht die letzte Prüfung ungültig. Eine Änderung nach der abgeschlossenen Kette startet die ganze Kette erneut.
- **Eine Auslieferungsfrage.** Am Ende benennt die KI in höchstens drei Zeilen, was die Kette verändert hat, und fragt einmal, ob sie ausliefern darf. Die Auslieferung wird verweigert ohne eine frische positive Prüfung für genau diesen Stand der Datei und ohne Ihr Ja.
- **Offene Gerichtsentscheidungen.** Warten noch Gerichtsentscheidungen auf Bewertung, fragt die KI Sie, ob sie jetzt bewertet werden sollen, damit ihre Ergebnisse in das Dokument einfließen, oder später.
- **Auslieferung in die Textverarbeitung.** Die Datei geht nur über den IRONSTICK-Download-Dialog: speichern Sie sie, oder übergeben Sie das Markdown direkt in die Textverarbeitung. Dort bearbeiten Sie, fügen den Briefkopf hinzu, schließen Seiten aus, setzen Ihre Unterschrift und exportieren ein PDF oder DOCX. Eine unveränderte, bereits ausgelieferte Datei wird nur auf Anfrage wiederholt, ohne neue Versionsnummer.
- **Nach der Auslieferung.** Die KI fragt, ob das Dokument fertig ist oder Korrekturen braucht. Bis Sie antworten, kann die KI nur lesen. Ihre Korrektur wird an die ausgelieferte Version angehängt, die dadurch ungültig wird, und für die Korrektur wird die nächste Version erstellt. Das Drucken in der Textverarbeitung oder das Senden des PDFs zur E-Mail-Prüfung schließt das Dokument ab.
- **Das E-Mail-Paket.** Eine Gerichts-E-Mail wird nur für ein fertiges PDF vorbereitet: Sie ziehen das unterschriebene PDF in den Chat, die KI prüft es gegen die letzte Version, und nur ein passendes PDF öffnet das E-Mail-Format — Betreff, Text mit Absender, Kennung und Aktenzeichen, Paketliste und der Empfänger, als Kopierfelder. Zu große Eingaben werden auf dem Mailversand-Bildschirm in Teile von etwa zehn Megabyte aufgeteilt, jeweils mit eigener Begleitmail. IRONSTICK sendet nichts; Sie senden aus Ihrem eigenen Mailprogramm.

## Arbeitsablauf 7 — OSINT: eine Person oder Firma recherchieren

Nutzen Sie diesen Arbeitsablauf, wenn Sie wissen wollen, wer eine Partei ist: ein Gegner, ein Zeuge, eine Firma hinter einer Adresse, die Personen um ein Unternehmen.
Die KI führt ein festes Rechercheverfahren durch Ihre eigenen Unterlagen und das offene Internet aus, öffnet und liest die Quellen und trägt das, was sie verifizieren kann, als Vorschläge in den Datenkonsistenz-Monitor ein.
Nichts wird Teil Ihrer Unterlagen, bis Sie es dort übernehmen. Die Recherche braucht keinen Fall: Eine Partei kann für sich allein recherchiert werden.

![Personen- und Firmenrecherche über die Bridge](https://www.ironstick.legal/img/60_mcp_network.png)

Eine Partei nach der anderen: suchen, lesen, verifizieren, vorschlagen — und Sie entscheiden im Datenkonsistenz-Monitor.

### Schritt 0 — Kontext festlegen

- **Die wichtigsten Angaben zur Partei bereithalten.** Die OSINT-Prüfung braucht den vollständigen Namen, das Land und ob es sich um eine natürliche Person oder eine Firma handelt; Stadt und Bezirk, soweit bekannt. Das Land bestimmt die Sprache der Suchbegriffe. Stadt, Bezirk und Land sind zudem Pflicht für jede neue Partei, die die KI später vorschlägt.
- **Kein Fall erforderlich.** Die OSINT-Prüfung nimmt kein Aktenzeichen entgegen. Wenn Sie die Partei zusätzlich mit einem Fall verknüpfen wollen, sagen Sie es — die Verknüpfung ist dann ein eigener Vorschlag.
- **Ein vorhandener Datensatz hilft.** Ist die Partei bereits in IRONSTICK, nennen Sie sie oder ihre Nummer (zum Beispiel @E0001234). Die KI liest zuerst den Datensatz; die OSINT-Prüfung listet vorhandene Einträge mit demselben Namen außerdem selbst auf.
- **Mehrere Namen?** Haben Sie eine Liste (eine Freundesliste, eine Teilnehmerliste, ein Impressum) als Dokument erfasst, bitten Sie die KI, die Liste zuerst gegen alle Personen in IRONSTICK abzugleichen und dann nur die Namen zu recherchieren, die zählen.
- **Ohne die KI-Unterhaltung.** In der Personenanalyse einer Person öffnet die Schaltfläche *Web-Recherche* eine geführte eigene Recherche: Kandidatenlinks, Seitenzusammenfassungen, eine Vorschau der Analysefelder und das Speichern in der Analyse der Person.

### Was Sie sagen — Schritt für Schritt

Recherchiere [vollständiger Name], [Stadt], [Land] — natürliche Person.

1. Zuerst werden Ihre eigenen Unterlagen geprüft; dann werden die Quellen im Internet geöffnet und gelesen.

Recherchiere die Firma [Name], [Stadt], [Land].

2. Dasselbe Verfahren für eine Firma, einschließlich ihrer Steuernummer und ihres Sitzes.

Gibt es eine Verbindung zwischen [Person] und [Person]?

3. Vorhandene Beziehungen werden angezeigt; neue werden in Ihren Unterlagen und den Quellen gesucht.

Zeig mir die Quelle für [Fund].

4. Sie erhalten den Link oder die Beweismittelnummer hinter dem Fund.

Trage die verifizierten Funde als Vorschläge ein.

5. Die Funde landen im Datenkonsistenz-Monitor; nichts wird gespeichert, bis Sie es dort übernehmen.

### Was im Hintergrund geschieht

- **Die OSINT-Prüfung.** Die KI startet die Prüfung mit Name, Stadt, Bezirk, Land und der Angabe, ob die Partei eine natürliche oder eine juristische Person ist; jedes Mal läuft dasselbe Verfahren. Intern wird der Name im Volltext über die ganze Datenbank (alle Mandanten) gesucht; je Fall kommen die 10 neuesten Beweismitteleinträge mit dem Absatz jedes Fundes zurück, dazu wie viele weitere es gibt. Im Web läuft eine feste Liste von Suchen: Lebenslauf, Facebook, LinkedIn, Instagram, Bezirk, Stadt, Skandal, Nachrichten, Vermögens- und Interessenerklärungen (soweit veröffentlicht), Steuern, Firmen; für eine Firma ersetzen Handelsregister und Insolvenz die personenbezogenen Suchen. Die Suchbegriffe stehen in der Sprache des Landes der Partei und werden an drei Suchmaschinen gestellt. Links und Titel kommen ohne Duplikate zurück. Die Suche läuft als Hintergrundauftrag; solange sie nicht fertig ist, wiederholt die KI den identischen Aufruf, um weiter zu warten. Die Prüfung selbst schreibt nichts.
- **Vorhandene Einträge zuerst.** Hält IRONSTICK bereits Personen, Firmen oder Institutionen, die zum Namen passen, listet die erste Antwort sie vollständig auf, beste Übereinstimmung zuerst. Die KI benennt den Eintrag, der diese Partei ist, oder „keiner“. Ein gemeldeter Eintrag erhält jeden Fund; bei einer Desktop-KI an der Bridge wird ein Vorschlag, dieselbe Partei neu anzulegen, dann abgewiesen.
- **Ein vorbereitetes Profil.** Die KI prüft es Quelle für Quelle und sortiert Namensvettern aus. Links, deren Suchergebnis den vollständigen Namen zeigt, sind die passenden Links, nach Güte sortiert; die übrigen sind optional; bloße Startseiten werden verworfen. Aufgabe der KI ist es, jeden Beweismittelfund zu lesen, jeden passenden Link zu öffnen und nur zu verwenden, was die geöffnete Seite selbst aussagt — nie einen Titel allein.
- **OSINT-Tor — eine Partei nach der anderen.** Bei einer Desktop-KI an der Bridge endet das Ergebnis mit einer Checkliste, und die nächste OSINT-Prüfung für eine andere Partei wird abgewiesen, bis sie abgearbeitet ist:
   - die ersten 10 passenden Links geöffnet (mindestens 20 % davon, wenn das mehr ist);
   - jeder aufgeführte Beweismitteleintrag gelesen — ein in den Scratch-Tresor umgeleitetes Ergebnis zählt nur, wenn es bis zum Ende gelesen wurde, eine Suche darin zählt nie;
   - bei einer Person jede geöffnete Seite, die die Person nennt und im Scratch-Tresor gelandet ist, an ihren Fundstellen gelesen;
   - dann entweder ein Vorschlag oder die Feststellung, dass nichts Verwertbares gefunden wurde;
   - bei einer Person außerdem jede Verbindung zu anderen Personen vorgeschlagen oder die Feststellung, dass es keine gibt.
- Eine Seite, die den vollständigen Namen der Person zusammen mit Stadt oder Bezirk nennt, kann nicht als „nichts Verwertbares“ abgeschlossen werden, es sei denn, die KI führt sie als bereits erfasst oder als Namensvetter auf. Die Abweisung benennt genau, was fehlt. Lesungen werden pro Sitzung gebucht, sodass die Lesung einer Sitzung nie für eine andere zählt.
- **Neue Person erst nach vollständiger OSINT-Prüfung.** Bei einer Desktop-KI an der Bridge wird ein Vorschlag für eine neue natürliche Person abgewiesen, bis die OSINT-Prüfung für diesen Namen vollständig abgearbeitet wurde. Stadt, Bezirk und Land sind Pflicht für jede neue Partei und jeden Adresseintrag. Eine neue Partei braucht ansonsten mindestens zwei Detailfelder neben ihrem Namen. Die Adresse einer natürlichen Person wird gegen die Adressen von Institutionen geprüft — die Adresse eines Arbeitgebers wird als Privatadresse abgewiesen — und eine neue Firma braucht ihre Steuernummer, Vereine ausgenommen.
- **Geöffnet, keine Snippets.** Webseiten werden mit dem IRONSTICK-Seitenwerkzeug geöffnet und gelesen; Suchergebnisse sind nur Wegweiser. Große Seiten werden vollständig im verschlüsselten Scratch-Tresor aufbewahrt und von dort gelesen. Suchformulare und Datentabellen, die sich erst nach einem Filter füllen, können direkt abgefragt werden. Eine in derselben Sitzung geöffnete Seite wird 30 Minuten lang aus einer Kopie erneut geliefert. Ein gescanntes Dokument, dessen Verarbeitung länger dauert, wird als noch nicht bereit gemeldet; die Verarbeitung läuft weiter, und der nächste Aufruf liefert den Text.
- **Bot-Prüfungen und Logins gehen an Sie.** Zeigt eine Website eine Bot-Prüfung oder sperrt sie automatisierte Zugriffe, öffnet IRONSTICK die Seite in seinem eigenen Browserfenster, und die KI bittet Sie, die Prüfung dort abzuschließen. Danach liest die KI die Seite in diesem Fenster, öffnet weitere Seiten derselben Website und lädt deren Dateien in den verschlüsselten Scratch-Tresor herunter; nichts gelangt in einen Fall, bis Sie es erfassen. Für eine andere Website kehrt die KI zum Seitenwerkzeug zurück; ist sie fertig, meldet sie die Browserarbeit als erledigt, und das Fenster fragt Sie, ob es geschlossen oder offen gehalten werden soll.
- **Versteckte Anweisungen geschwärzt.** Text aus geöffneten Webseiten und aus dem Browserfenster durchläuft eine regelbasierte Prüfung; Passagen, die eine KI ansprechen, Chat- oder IRONSTICK-Steuertext nachahmen oder Text in unsichtbaren Zeichen verbergen, werden mit Sternchen überschrieben, und ein Hinweis steht über dem Inhalt.
- **Namenslisten in einem Durchgang.** Ein Listenabgleich prüft eine erfasste Liste deterministisch gegen jede Person und Firma in IRONSTICK — Akzente gefaltet, Wortreihenfolge ignoriert, tolerant gegenüber OCR-Fehlern. Treffer werden als exakt, umgestellt, Variante oder Einzelwort eingestuft; Einzelwort-Treffer sind immer mehrdeutig und müssen geprüft werden.
- **Vorschläge statt Schreibvorgänge.** Verifizierte Tatsachen gehen als Vorschläge in den Datenkonsistenz-Monitor: Stammdaten, die Personenanalyse, Verbindungen und Dubletten. Für die Personenanalyse muss die KI die Person zuerst lesen; ein Feld, das bereits Inhalt hat, wird nur geändert, wenn die KI diesen Inhalt wortwörtlich übergibt. Ein übernommenes Analysefeld geht in die neueste Analyse der Person. Eine neue Person erhält ihre Nummer erst, nachdem Sie sie übernommen haben, sodass Verbindungen zu ihr eine zweite Übernahme brauchen.
- **Nie in das KI-Gedächtnis.** OSINT-Funde und Fortschritt gehören zur Partei, nicht zum Gedächtnis. Solange eine OSINT-Prüfung einer Desktop-KI offen ist, wird jeder Versuch, einen Gedächtniseintrag zu speichern, mit der Anweisung abgewiesen, die Tatsachen stattdessen bei der Partei einzutragen.
- **Die Personen-Websuche in der App.** Die Schaltfläche *Web-Recherche* in der Personenanalyse durchläuft vier Schritte: Eine Websuche mit Namensvarianten sammelt Kandidatenlinks (eine zusätzliche KI-Websuche läuft nur mit Ihrer Zustimmung); Sie entfernen unerwünschte Treffer; die verbleibenden Seiten werden geladen und von einer externen KI zusammengefasst; Sie haken die Quellen an, und die KI verdichtet sie als bearbeitbare Vorschau zu den Analysefeldern. Das Speichern schreibt die Felder in die Analyse der Person, die nicht an einen Fall gebunden ist, als unbestätigt markiert. Die externe KI wird erst verwendet, nachdem Sie in einem Zustimmungsdialog zugestimmt haben; lehnen Sie ab, wird nichts gesendet.

## Arbeitsablauf 8 — Rechtsrecherche: Gesetze zuerst aus der Bibliothek

Nutzen Sie diesen Arbeitsablauf immer dann, wenn ein Gesetz, ein Kodexartikel oder eine Verordnung zählt: um eine Rechtsfrage zu beantworten, eine Zitierung zu prüfen oder einen Schriftsatz zu begründen.
Die KI liest Normen wortwörtlich aus Ihrer eigenen Gesetzesbibliothek und geht nur dann ins Internet, wenn die Bibliothek zu dieser Norm nichts enthält.
Ein online gefundenes Gesetz wird geöffnet, gelesen, mit seiner URL zitiert und zurückgemeldet, sodass es nach Ihrer Freigabe in die Bibliothek gelangt.
Die Bibliothek ist das, wogegen die Schriftsatzprüfung jeden zitierten Artikel hält.

![Die Gesetzesbibliothek](https://www.ironstick.legal/img/43_statutes.png)

Erst die Bibliothek, das Web nur bei einem Fehltreffer, und jede Webquelle mit Ihrer Freigabe zurück in die Bibliothek.

### Schritt 0 — Kontext festlegen

- **Den Fall öffnen oder benennen.** Das anzuwendende Recht stammt aus dem Fall. Die KI liest den im Fall erfassten Rechtsraum, bevor sie juristisch in der Sache arbeitet.
- **Wenn kein Rechtsraum genannt ist.** Die Bibliothekssuche verwendet dann den Rechtsraum des Falls, an dem die KI in der Sitzung zuletzt gearbeitet hat, und sagt das; ohne bekannten Fall durchsucht sie alle Rechtsräume und fordert die KI auf, den Rechtsraum jedes Treffers zu prüfen.
- **Sehen, was die Bibliothek enthält.** Der Bildschirm *Gesetze* listet jedes Gesetz der Bibliothek mit Titel, Rechtsraum, Gebiet, Quelle und Status auf, hat eine eigene Volltextsuche und eine Hinzufügen-Schaltfläche für einen Link oder eine PDF- oder Markdown-Datei. Fragen Sie die KI „Welche Gesetze enthält die Bibliothek für [Land]?“, um dieselbe Übersicht in der Unterhaltung zu erhalten.
- **Die Lesung bestellen, die Sie brauchen.** Ein kurzer Überblick, der Wortlaut eines Artikels oder eine vollständige Lesung eines Gesetzes. Sagen Sie, welche.

### Was Sie sagen — Schritt für Schritt

Was sagt Art. [Nummer] von [Gesetz]? Zitiere ihn.

1. Der Artikel wird wortwörtlich aus Ihrer Gesetzesbibliothek gelesen und mit seiner Quelle zitiert.

Ist [Frage] in [Gesetz] geregelt? Nenne mir die Artikel.

2. Die Bibliothek wird durchsucht; Sie erhalten die einschlägigen Artikel mit ihrem genauen Wortlaut.

Prüfe die in meinem Entwurf zitierten Normen gegen die Bibliothek.

3. Jeder zitierte Artikel wird mit dem Volltext in der Bibliothek verglichen.

[Gesetz] ist nicht in der Bibliothek — suche es auf dem offiziellen Portal.

4. Das Web wird nur für eine Norm geöffnet, die die Bibliothek nicht enthält; die Seite wird gelesen, mit ihrem Link zitiert und für Ihre Bibliothek vorgeschlagen.

### Was im Hintergrund geschieht

- **Die Bibliothekssuche.** Sie durchsucht alle Gesetzesdateien der Bibliothek auf zwei Arten: nach Bezeichnung („Bürgerliches Gesetzbuch“, „Verordnung (EU) 2016/679“), abgeglichen mit Titel und Beschreibung und zuerst gereiht, oder nach Textstelle, einer unscharfen Suche, bei der etwa 60 % der Wörter genügen. Jeder Treffer nennt die interne Registrierungsnummer (L-Nummer), die Datei, kurze Auszüge mit ihren exakten Zeichenpositionen und einen fertigen Aufruf, um den Wortlaut drumherum abzurufen.
- **Wortwörtlich lesen.** Der Artikelleser liefert einen Artikel über L-Nummer und Artikelnummer; die Wendungssuche liefert einen Zeichenbereich oder jede Stelle, an der eine Wendung vorkommt, mit ihrem umgebenden Wortlaut. Beide registrieren genau das, was sie geliefert haben, als gelesen. Der Gesetzesleser liefert ein ganzes Gesetz; ein Gesetz, das größer ist als die Konnektorgrenze, geht vollständig in den verschlüsselten Arbeitsbereich; als gelesen zählt, was die KI daraus mit dem Artikelleser abruft.
- **Zuerst die Gesetzesbibliothek.** Eine Websuche oder Seitenabfrage, die wie eine Gesetzesabfrage aussieht — Artikel- oder Absatznummern, Kodexnamen, Gesetzesnummern, Gesetzesportale —, wird abgewiesen, bis die KI die Bibliothek nach dieser Norm durchsucht hat. Hat die Bibliothek Treffer, bleibt das Web für diese Norm geschlossen, und die KI wird angewiesen, aus der Bibliothek zu zitieren. Erst wenn die Bibliothek keinen Treffer meldet, wird das Web für diese Norm freigegeben, für 15 Minuten, einschließlich der Gesetzesportal-Links, die diese Suche liefert. Treffer, die die gesuchte Gesetzesnummer oder Bezeichnung nicht im Titel tragen oder die die gesuchte Artikelnummer nicht enthalten, zählen nicht als „die Bibliothek hat es“ — die Erwähnung einer Verordnung innerhalb ihres Stammgesetzes ist ein solcher Fehltreffer. Das Tor gilt für den KI-Chat und für jede Desktop-KI.
- **Geöffnet, keine Snippets.** Eine als Quelle verwendete Seite wird mit dem IRONSTICK-Seitenwerkzeug geöffnet und gelesen; Suchergebnisse sind nur Wegweiser. Jede Internetquelle wird mit ihrer URL zitiert. Der Gesetzeswortlaut wird aus der Bibliotheksdatei zitiert, sobald die Quelle dort ist.
- **Gesetzesquellen melden.** Nach einer gesetzesbezogenen Websuche oder nachdem die KI eine Seite eines Gesetzesportals geöffnet hat, beginnt jede weitere Werkzeugantwort bis zu 15 Minuten lang mit der Erinnerung, die Quelle zu melden. Ein Portal-Link, der nur in einem themenfremden Suchergebnis auftaucht, erhält lediglich einen Hinweis.
- **Von der KI selbst geöffnet.** Eine Quellenmeldung wird nur angenommen, wenn dieselbe KI-Sitzung genau diese Seite innerhalb der letzten 24 Stunden mit dem Seitenwerkzeug geöffnet hat. Andernfalls wird die Meldung mit der Anweisung abgewiesen, die Seite zu öffnen und zu prüfen, dass sie wirklich den Gesetzestext enthält — keine Fehlerseite, keine Login-Seite, kein Suchergebnis, keine Übersicht. Wie jeder datierte Schreibvorgang braucht die Meldung das aktuelle Datum, das innerhalb der letzten 30 Minuten abgerufen wurde.
- **Ihre Zustimmung.** Gemeldete Quellen sammeln sich in einem Dialog, jeweils mit einem Kontrollkästchen. Angehakte Quellen werden von einem Hintergrundprozess abgerufen, konvertiert, geprüft und in der Bibliothek gespeichert; nicht angehakte werden abgelehnt. Schließen Sie den Dialog, bleiben sie gesammelt; er kehrt mit der nächsten Meldung zurück. Ein Link, der bereits in der Bibliothek ist, wird als vorhanden beantwortet; eine andere Quelle für ein Gesetz, das die Bibliothek bereits enthält, wird zu einer Anfrage, die Quelle unter derselben L-Nummer zu ersetzen.
- **Keine Gesetzesportale im Browserfenster.** Das IRONSTICK-Browserfenster, in dem Sie Bot-Prüfungen und Logins für andere Websites abschließen, verweigert Gesetzesportale: Nichts wird dort geöffnet, gelesen oder heruntergeladen. Ein Gesetzesportal, das das Seitenwerkzeug blockiert, wird nicht an dieses Fenster übergeben.
- **Aktualität der Bibliothek.** Verknüpfte Quellen werden etwa alle 14 Tage erneut gegen ihre Quelle geprüft; die KI kann auch ein einzelnes Gesetz sofort erneut prüfen. Weicht ein Gesetz von seiner Quelle ab, schlägt die KI die aktuelle Fassung online nach. Hochgeladene Dateien ohne Quelle sind als solche gekennzeichnet.
- **Zitate in einem Schriftsatz.** Die Schriftsatzprüfung hält jeden zitierten Artikel gegen das Leseprotokoll der Bibliothekswerkzeuge. Ein Artikel, der in der Bibliothek existiert, dort aber vor der letzten Änderung des Entwurfs nicht gelesen wurde, ist ein blockierender Befund, mit der Anweisung, ihn wortwörtlich mit dem Artikelleser zu lesen und in den Text einzuarbeiten. Eine Norm, die nicht in der Bibliothek ist, ist ein blockierender Befund, bis ihre Quelle gemeldet und eingebunden ist. Eine Lesung zählt, wenn sie nach der letzten Änderung des Bibliothekstextes und vor der letzten Änderung des Entwurfs erfolgte.
- **Gefunden ist nicht gelesen.** Eine Artikelnummer in einer Gesetzesdatei zu finden oder sie in einer Übersicht zu nennen, ist keine wortwörtliche Lesung. Für einen Schriftsatz wird jeder zitierte Artikel mit dem Artikelleser gelesen, und die KI prüft, dass der Wortlaut ihren Satz tatsächlich stützt.
- **Ein ganzes Gesetz lesen.** Liegt ein vollständiger Kodex im Scratch-Tresor und liest die KI ihn dort Teil für Teil, hat sie den vollen Text in ihrer Unterhaltung. Für die Schriftsatzprüfung zählt ein Artikel nur dann als gelesen, wenn er über den Artikelleser oder die Wendungssuche kam oder bei einem Gesetz, das klein genug ist, um direkt zurückgeliefert zu werden.

## Arbeiten mit der KI — Ihr Assistent in der Akte

Im Grundsatz ist ein Chat mit einer KI, die über die Bridge mit IRONSTICK verbunden ist, ein enorm mächtiges Werkzeug. Stellen Sie es sich als Paralegal oder als Kollegen vor. Über die Bridge kann die KI nicht nur Dokumente, einzelne Textpassagen oder Beweisstücke durchsuchen — sie kann auch gespeicherte Bilder ansehen, PDF-Dateien auf Wunsch ansehen und prüfen, neue OCR-Scans starten und vieles mehr.

Wenn Sie mit der KI arbeiten, arbeiten Sie mit ihr wie mit einem Paralegal oder einem Anwalt. Geben Sie einfach klare Anweisungen, was genau Sie wollen. Die KI führt die nötigen Abfragen im Hintergrund über die Bridge aus, direkt in IRONSTICK — also in Ihren Akten.

**Als Regel gilt:** Ohne Ihre Zustimmung kann die KI in IRONSTICK kaum mehr als lesen. Änderungen an Stammdaten, Chronik, Kalender, Gedächtnis, Volltexten und der Gesetzesbibliothek wirken erst, nachdem Sie sie genehmigt haben: Entweder erhalten Sie dafür ein Formular oder einen Dialog in IRONSTICK, oder der Änderungswunsch der KI erscheint im Datenkonsistenz-Monitor. Ohne einen solchen Dialog schreibt die KI nur in ihre eigenen Arbeitsbereiche — den verschlüsselten Zwischenspeicher, das Tagesprotokoll auf Ihren Wunsch und ihre eigene Fallbewertung nach den deterministischen Prüfungen. Tags und Büro-Chat-Nachrichten bedürfen Ihrer Bestätigung im Chat.

**Volle Transparenz:** Jede Desktop-KI-App zeigt ihre Werkzeugaufrufe — Sie sehen jederzeit, welche Informationen die KI aus IRONSTICK abgerufen hat.
Seien Sie streng in Ihren Fragen und Anweisungen, und sagen Sie der KI, wo und wie sie recherchieren soll. Sie müssen das Suchwerkzeug nicht nennen — die KI kennt es selbst —, aber sagen Sie ihr deutlich, dass sie die Information aus IRONSTICK holen soll: bei Mandant XY, im Fall XY, im Beweismittel XY. Sie können Mandanten einfach bei ihrem Namen nennen — die KI löst die Mandanten-ID selbst auf — oder die Mandantennummer (*@C0000000*) aus IRONSTICK kopieren und der KI geben. Dasselbe funktioniert zum Beispiel mit einer Beweismittelnummer (*#0000000*).

Die KI deckt ab, was deterministische Programmlogik nicht oder nur mit extremem Aufwand kann — natürliche Sprache verstehen und schreiben. Alles andere — der Zugriff auf Ihre Akten, die Auswahl der Gerichtsakte, die Prüfungen gegen Ihre Unterlagen, die Regel, dass sich Ihre Unterlagen nur mit Ihrer Genehmigung ändern — erledigt IRONSTICK selbst, deterministisch. Die KI wird nie die Quelle der Tatsachen; IRONSTICK ist es. Das unterscheidet den IRONSTICK-Ansatz so grundlegend von der herkömmlichen Nutzung von KI.
Für Sie als Anwender präsentiert sich IRONSTICK jedoch in der vertrauten Form — als grafische Oberfläche oder als Dialog.
