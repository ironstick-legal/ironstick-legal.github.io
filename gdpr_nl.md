# AVG-verklaring over gegevensstromen

> AVG-verklaring: elke weg waarlangs gegevens IRONSTICK verlaten richting een externe AI-aanbieder, wat wordt doorgegeven en waar pseudonimisering ingrijpt.

Originele pagina: https://www.ironstick.legal/gdpr_nl.html

---

Relaties met externe Large Language Models

Zakelijke, uit de code afgeleide beschrijving van elk pad waarlangs gegevens
IRONSTICK verlaten in de richting van een externe LLM, wat er precies wordt doorgegeven, in welke vorm
en waar de pseudonimiseringslaag ingrijpt. Windows-desktopeditie. Dit document
beschrijft uitsluitend het gedrag van IRONSTICK — **wat de AI-aanbieder met ontvangen
gegevens doet, wordt uitsluitend bepaald door de eigen voorwaarden van de aanbieder** (de
gebruiksvoorwaarden en privacyverklaringen van de door de gebruiker ingestelde aanbieders: Alibaba Cloud (Qwen),
Moonshot AI (Kimi), OpenAI, Anthropic en, indien ingeschakeld, Groq, OpenRouter en
Mistral; Google alleen als Google Drive voor exports wordt gebruikt), die de gebruiker afzonderlijk moet controleren.

Versie 1.0.7 — stand november 2026

**Samenvatting.**

- **Opslag.** Alle gegevens staan in één enkele lokale gegevensmap. De database,
de documentopslag, het configuratiebestand en de AI-tussenopslag zijn in rust
met AES-256 versleuteld. In platte tekst blijven alleen tijdelijke werkkopieën van geopende
documenten, de scaninvoer, exports en uitgaande bestanden, de kortstondige
peer-reviewbuffer en, indien ingeschakeld, het diagnoselogboek (paragraaf 8).
- **Externe AI.** AI-aanroepen binnen de app zijn er alleen met de eigen API-sleutel van de gebruiker.
Aanroepen via de centrale router worden standaard gepseudonimiseerd en in een
lokaal auditlogboek vastgelegd; de bewuste uitzonderingen in platte tekst staan vermeld in 2.3.
- **Toestemming.** De AI-chat, de documentregistratie en het personenonderzoek vragen eenmaal
per sessie resp. programmasessie om toestemming; in de tekstverwerker is het starten van een AI-functie
de toestemming. Meerdere achtergrondfuncties roepen de cloud-AI aan zonder eigen venster:
de e-mailtriage, de monitor voor gegevensconsistentie, de dagbriefing, de gesprekssamenvatting
en de Red/Blue Team-controle (paragraaf 3).
- **Desktop-AI-Bridge.** Een optionele aanvullende module die echte zaakgegevens doorgeeft aan de aanbieder van de eigen desktop-AI van de gebruiker, na
een toestemmingsvenster per programmasessie (paragraaf 4.9).
- **Overige diensten.** Adressen van partijen worden dagelijks met
OpenStreetMap Nominatim gegeocodeerd (alleen het adres, geen namen); een nieuwsbestand wordt na de start en
daarna elke zes uur gedownload van [www.ironstick.legal](https://www.ironstick.legal/index_nl.html); er worden geen zaak- of
persoonsgegevens naar de softwarefabrikant gestuurd (paragrafen 1 en 7).
- **IRONSTICK SERVER.** Optioneel, op de eigen
NAS van het kantoor in het lokale netwerk, zonder internetverbindingen. Documenten bereiken de server alleen als
met AES-256 versleutelde bestanden en staan daar ook alleen zo; de server ziet nooit hun platte tekst. De werktijd per zaak
en de back-upgebeurtenissen van elke werkplek zijn zichtbaar voor de beheerder van het kantoor
(paragraaf 9).

## 1. Toepassingsgebied en eindpunten

![AI-API, AI-desktop-app en MCP-server links, de IRONSTICK Client in het midden, gegevenskluis met AES-256, IRONSTICK Server en scan-app rechts](https://www.ironstick.legal/img/65_ai_client_vault.png)

Externe AI-aanroepen binnen de app gaan naar **de aanbieder die de automatische cascade
op dat moment gebruikt**. De gebruiker kan maximaal vier aanbieders instellen; elke
aanbieder waarvoor een sleutel is vastgelegd, wordt in deze vaste volgorde
gebruikt, waarbij de voordeligste als eerste aan de beurt is: **Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. Bij elke programmastart controleert IRONSTICK
welke daarvan antwoorden. Valt een aanbieder uit, dan gaat hetzelfde verzoek naar de
volgende. De uitgevallen aanbieder wordt na een van de fout afhankelijke wachttijd opnieuw
geprobeerd; voor de rest van de dag
wordt hij alleen overgeslagen als zijn tegoed op is of de oorzaak onbekend is. De doorgegeven inhoud
is bij elke aanbieder identiek (vanaf paragraaf 3: door de router gepseudonimiseerd,
toestemming, auditlogboek). De eindpunten zijn:

- **Claude:** POST https://api.anthropic.com/v1/messages,
de eigen API-sleutel van de gebruiker.
- **ChatGPT:** POST https://api.openai.com/v1/chat/completions,
de eigen API-sleutel van de gebruiker.
- **Qwen:** POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
(Alibaba Cloud Model Studio, internationale regio), de eigen API-sleutel van de gebruiker.
- **Kimi:** POST https://api.moonshot.ai/v1/chat/completions
(Moonshot AI), de eigen API-sleutel van de gebruiker.

**Gratis achtergrondaanbieders (optioneel).** Daarnaast kan de gebruiker
de gratis aanbiedingen van **Groq**, **OpenRouter** en **Mistral**
vastleggen. IRONSTICK gebruikt ze uitsluitend voor taken die op de achtergrond
lopen: e-mailtriage, monitor voor gegevensconsistentie, dagbriefing, gesprekssamenvatting,
sprekertoewijzing bij transcripties, ophalen van wetteksten en situatiebeeld. Elk
van deze aanbieders heeft in de configuratie een eigen aan/uit-schakelaar; gebruikt wordt
hij alleen als er een sleutel is vastgelegd en zijn schakelaar is ingeschakeld. Voor de chat, voor
processtukken en voor de Red/Blue Team-controle worden ze **nooit** gebruikt. Is
geen van hen beschikbaar, dan neemt de hierboven beschreven cascade het over.
Pseudonimisering, toestemming en auditlogboek richten zich naar de betreffende
taak (paragraaf 4). De eindpunten zijn:

- **Groq:** POST https://api.groq.com/openai/v1/chat/completions,
de eigen API-sleutel van de gebruiker.
- **OpenRouter:** POST https://openrouter.ai/api/v1/chat/completions,
de eigen API-sleutel van de gebruiker.
- **Mistral:** POST https://api.mistral.ai/v1/chat/completions,
de eigen API-sleutel van de gebruiker.

**Gratis aanbiedingen — melding in de configuratie.** In de configuratie wijst een melding onder elk van deze aanbieders erop dat IRONSTICK hem — mits de API-sleutel is vastgelegd en de schakelaar is ingeschakeld — gebruikt voor achtergrondtaken zoals samenvattingen en e-mailtriage en daarbij gegevens aan deze aanbieder doorgeeft. Controleer voordat u een van deze aanbieders inschakelt of diens
voorwaarden voorzien in de voor verwerkers vereiste verwerkersovereenkomst
en aan uw beroepsregels voldoen. Een uitgeschakelde aanbieder wordt niet gebruikt.

Per aanbieder worden drie configureerbare modelniveaus gebruikt (klein / middel /
groot). Een afzonderlijk, optioneel kanaal is de
**desktop-AI-Bridge** (paragraaf 4.9): daar stromen gegevens naar de eigen
lokale desktop-AI van de gebruiker (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen
Desktop **of** Kimi Desktop), d.w.z. naar de aanbieder van deze AI (Anthropic, OpenAI,
Alibaba Cloud/Qwen of Moonshot AI/Kimi) in het kader van het eigen abonnement/account van de gebruiker bij deze aanbieder. De
Bridges kunnen parallel draaien: elke desktop-AI heeft een eigen klein Bridge-programma,
alle maken verbinding met hetzelfde lokale eindpunt in de draaiende applicatie, en ze kunnen
tegelijk aan dezelfde zaak werken. Er worden geen zaak- of
persoonsgegevens naar de softwarefabrikant gestuurd. Het enige contact met de fabrikant is een eenvoudige download van een nieuwsbestand
van [www.ironstick.legal](https://www.ironstick.legal/index_nl.html) (na de start en daarna elke zes uur, paragraaf 7), die behalve de
technische verbinding zelf geen gegevens bevat.
**IRONSTICK SERVER** (paragraaf 9) verandert daar niets aan: hij wordt
door het kantoor zelf beheerd, op de eigen hardware van het kantoor, binnen het
eigen netwerk van het kantoor — hij neemt nooit contact op met de fabrikant en nooit met een AI-aanbieder.

**De hoofdschakelaar is de eigen toegang van de gebruiker.** Externe
AI-verwerking binnen de app bestaat alleen als de gebruiker een eigen account
bij een AI-aanbieder heeft geopend en zijn eigen toegangssleutel in de configuratie heeft ingevoerd.
**Zonder ingestelde aanbieder kan er binnen de app helemaal geen externe AI-aanroep plaatsvinden** — elke
in paragraaf 4 beschreven functie blijft dan lokaal of is eenvoudigweg niet beschikbaar. Dit
account is een rechtstreekse overeenkomst tussen de gebruiker en de aanbieder; IRONSTICK is
geen contractpartij. Hetzelfde geldt voor de desktop-AI-Bridge, die
een eigen abonnement/account van de gebruiker bij de gekozen desktop-AI-aanbieder vereist
(Anthropic, OpenAI, Alibaba Cloud/Qwen of Moonshot AI/Kimi). Als **geheim** gemarkeerde documenten zijn
uitgesloten van de tools van de desktop-AI-Bridge en van de chat, van het
AI-instructiepakket en van elke gegenereerde uitvoer (producties, dossiers, exports);
hun verwerking tijdens de registratie volgt de bewuste beslissing van de gebruiker op het
moment van registratie (paragraaf 4.1).

Volledig lokaal (niets verlaat de computer): tekstextractie en OCR, de
deterministische lokale chatlaag, de globale zoekfunctie, de relevantieradar, de analyse van briefketens,
het genereren van dossiers/pdf's, de lokale doorloop van de weglakzoeker, de spraakherkenning
(transcriptie van opnamen) en het aanmaken van het AI-instructiepakket.

## 2. De pseudonimiseringslaag

Elke aanroep binnen de app via de centrale AI-router wordt standaard gepseudonimiseerd:
identificatoren in de uitgaande tekst worden door plaatshouders vervangen, en het antwoord wordt lokaal hersteld. Kan de pseudonimiseerder niet
volledig worden opgebouwd, dan wordt er niets verzonden. De uitzonderingen staan vermeld in 2.3. De koppeltabel
bestaat alleen in het werkgeheugen, een nieuwe koppeltabel per handeling; zij wordt nooit opgeslagen.

![Boven: IRONSTICK Client, geanonimiseerde figuur met tandwielen, AI-API; onder: IRONSTICK Client, gebruiker, AI-desktop-app](https://www.ironstick.legal/img/66_pseudonymization.png)

### 2.1 Wat wordt vervangen

| Bron | Velden | Plaatshoudergroep (interne identificatoren) |
| --- | --- | --- |
| Cliëntrecords | Naam, nationaal identificatienummer uit het identificatieveld (bijv. Roemeense CNP), telefoon, e-mail, adres en woonplaats | $PARTEI_A$ (partij), $CNP_A$ (identificatienummer), $TEL_A$ (telefoon), $MAIL_A$ (e-mail), $ADRESSE_A$ (adres) |
| Personen / entiteiten | volledige naam (persoon of onderneming), nationaal identificatie- of ondernemingsnummer uit het identificatieveld (bijv. Roemeense CNP of CUI) | $PARTEI_B$ (partij) / $FIRMA_A$ (onderneming), $CNP_B$ (identificatienummer) |
| Zaken | Zaaknummer, wederpartij, eiser | $FALL_A$ (zaak), $PARTEI_C$ (partij)… |
| Patroonlaag (onbekende waarden in vrije tekst) | gerechtelijke zaaknummers, persoonsnummers, IBAN's, e-mailadressen en telefoonnummers. Andere nationale identificatienummers worden alleen vervangen als ze in het cliënt- of persoonsrecord zijn opgeslagen. | dezelfde plaatshoudergroepen |

### 2.2 Wat bewust ongewijzigd blijft

- **Datums, tijden en geldbedragen** — deze zijn voor de juridische beoordeling ongewijzigd nodig.
- **Namen van instellingen** (rechtbanken, overheidsinstanties) — deze staan niet in het
woordenboek en zijn openbare instanties.
- **Derden zonder eigen record** — getuigen, artsen, advocaten, rechters of ondernemingen die niet als cliënt-, persoons- of zaakrecord zijn geregistreerd; wie door een plaatshouder moet worden vervangen, wordt eenvoudigweg als persoon geregistreerd.
- **Adressen van niet-cliënten** — door een plaatshouder vervangen wordt het opgeslagen adres van de cliënt.
- De volledige **inhoudelijke strekking** van documenten (beweringen, diagnoses,
weergave van de feiten) — alleen identificatoren worden vervangen, niet het feitencomplex.

### 2.3 Bewuste uitzonderingen met echte namen

- **Webonderzoek naar personen (fase 1)** en **automatisch invullen van formulieren** voor personen /
instellingen: een webzoekopdracht naar $PARTEI_A$ is zinloos, daarom wordt de
echte naam bewust verzonden.
- **AI-zoeker van het weglakken**: deze ontvangt tekst die al lokaal
is weggelakt, en moet antwoorden met de echte namen van de door hem gevonden *onbekende derden*
— de pseudonimisering is voor dit ene doel uitgeschakeld.
- **Voorbewerking van de voorleesfunctie (TTS)**: zie 4.6 — zinnen gaan in platte tekst
naar buiten.
- **Desktop-AI-Bridge**: bewust ruwe gegevens (paragraaf 4.9).

## 3. Momenten van toestemming en het auditlogboek

Aanroepen die via de centrale router worden geleid, zijn gebonden aan toestemming en worden gelogd: elke
modelronde schrijft een regel in de lokale audittabel met
het volledige verzoek en antwoord **in de door plaatshouders vervangen vorm die de computer
daadwerkelijk heeft verlaten**; geweigerde of geblokkeerde pogingen worden zonder inhoud gelogd. Vraagt een
functie om toestemming, dan noemt het venster het modelniveau en de geschatte omvang van het verzoek, en een goedkeuring geldt voor
de huidige schermsessie (bij de documentregistratie: voor de huidige programmasessie).

**Routerstromen zonder eigen toestemmingsvenster:**
de e-mailtriage (zowel in de achtergrondmodus als bij handmatig ophalen op het e-mailscherm,
paragraaf 4.2), de analyserun van de monitor voor gegevensconsistentie (4.5),
de dagbriefing (4.4a), de gesprekssamenvatting van de API-chat en de Red/Blue
Team-controle (4.7) en de AI-zoeker van het weglakken (het inschakelen van zijn schakelaar is de
toestemming). Deze worden toch gepseudonimiseerd (met uitzondering van de beoogde antwoorden met echte namen van de
weglakzoeker) en toch in het auditlogboek vastgelegd.

**Stromen die de router omzeilen:** de
AI-functies van de tekstverwerker, de voorbewerking van de voorleesfunctie en de AI-correctie bestand→Markdown
roepen de API rechtstreeks aan. Ze worden gepseudonimiseerd (uitzondering: voorleesfunctie),
maar tonen **geen eigen toestemmingsvenster en schrijven geen regels in het
auditlogboek**. De bediening van deze functies door de gebruiker (drukken op de AI-knop,
starten van een generatie, starten van de voorleesfunctie bij ingeschakelde AI-schakelaar) is het
moment van toestemming.

## 4. De gegevensstromen, toepassing voor toepassing

### 4.1 Documentregistratie

Tekstextractie en OCR vinden lokaal plaats. Is er een API-sleutel geconfigureerd, dan vraagt IRONSTICK
eenmaal per programmasessie om toestemming; daarna lopen maximaal vier soorten aanroepen (alle gepseudonimiseerd, alle
in het auditlogboek vastgelegd):

- **Herkenning van het hoofddocument** (klein niveau): fragmenten van de ruwe OCR-tekst — alleen bij scans van slechte kwaliteit.
- **OCR-correctie** (klein niveau): een begrensd fragment van de documenttekst.
- **Classificatie** (middelniveau): een begrensd fragment van de documenttekst, **plus systeemlijsten**: de volledige zakenlijst (zaaknummer,
naam van de cliënt, wederpartij — door plaatshouders vervangen), een bestand van bekende namen (door plaatshouders vervangen), en de codelijsten van de instellingstypen en documenttypen
(benamingen zonder plaatshouders). Terugvaloptie: klein niveau, zonder de
lijsten.
- **Contextualisering bij het opslaan** (klein niveau): de metagegevens van het document en
de volledige tekst in begrensde lengte, plus een indexregel (ID, datum, titel) **van elk actief bewijsstuk van dezelfde cliënt** — gebruikt ter onderbouwing
van kruisverwijzingen. Loopt ook voor als geheim gemarkeerde documenten (bewuste beslissing van de
gebruiker).

### 4.2 E-mailmonitor (triage)

De toewijzing aan zaken gebeurt **lokaal en zonder AI**. Nieuwe e-mails worden op de
achtergrond bij de start en daarna elke vijf minuten opgehaald. Een e-mail waarvan de zaak
al door de lokale herkenning wordt bepaald (zaaknummer, briefnummer, cliëntnummer of verwijzing naar een
eigen processtuk), leidt niet tot een AI-aanroep. Voor elke andere
e-mail beoordeelt **een aanroep van het kleine niveau** de urgentie, met precies: naam en
adres van de afzender, onderwerp en het opgeslagen voorbeeldfragment als platte tekst (vast begrensd) — **nooit de volledige berichttekst**, geen
bijlagen en **geen zakenlijst**. Antwoord: prioriteit en motivering. Zijn gratis
achtergrondaanbieders ingeschakeld (paragraaf 1), dan kan deze aanroep via die aanbieders lopen.
**Er wordt geen toestemmingsvenster getoond**, noch in de achtergrondmodus noch bij
handmatig ophalen op het e-mailscherm: de triage loopt automatisch zodra een e-mailaccount
en een AI-aanbieder zijn ingesteld. Gepseudonimiseerd en in het auditlogboek vastgelegd.

**Geen trackingpixels.** Het openen van een e-mail in de monitor neemt nooit contact op met
de server van de afzender: afbeeldingen waarnaar via een internetadres wordt verwezen (inclusief
onzichtbare trackingpixels), worden niet geladen en verschijnen als plaatshouder met een
melding, zodat de afzender niet te weten kan komen wanneer, hoe vaak of vanaf welk adres een
e-mail is gelezen. Alleen afbeeldingen die in de e-mail zelf zijn ingebed, worden weergegeven.

### 4.3 Persoonsanalyse (webonderzoek)

Drie fasen, na een eenmalige toestemming per sessie:

- **Fase 1 — Zoeken:** zoekmachines worden rechtstreeks vanaf de computer van de
gebruiker bevraagd; daarnaast wordt de
serverzijdige webzoektool van de aanbieder aangeroepen met de **echte
naam van de persoon in platte tekst** (onvermijdelijk voor een zoekopdracht; in platte tekst gelogd).
- **Fase 2 — Paginasamenvattingen** (middelniveau): per pagina de naam van de persoon
(door een plaatshouder vervangen), de URL en een begrensd fragment van de pagina-inhoud.
- **Fase 3 — Profielsynthese** (groot niveau): naam en woonplaats (door plaatshouders vervangen)
plus de verzamelde paginateksten in begrensde lengte per bron.

Het resultaat wordt lokaal opgeslagen met de betrouwbaarheid “onbevestigd”. De bijbehorende
**Autofill**-knoppen in de formulieren voor personen/instellingen sturen de ingevoerde
naam eveneens in platte tekst (gedocumenteerde uitzondering).

### 4.3a Controle van partijen uit openbare bronnen

De controle van een partij uit openbare bronnen is een vastgelegde procedure die de applicatie
zelf uitvoert wanneer een verbonden AI haar aanroept met naam, woonplaats, district, land en
het soort partij (natuurlijke persoon of rechtspersoon):

- **Dossiers:** een zoekopdracht in de volledige tekst naar de naam in de lokale
database — **zuiver lokaal**, niets verlaat de computer.
- **Internet:** een vaste lijst van zoekopdrachten wordt naar de openbare
zoekmachines **Google, DuckDuckGo en Qwant** gestuurd. Elke zoekopdracht bestaat uit een
zoekterm in de taal van het land van de partij plus de **echte
naam van de partij in platte tekst** en, bij sommige zoekopdrachten, de woonplaats of het district
(onvermijdelijk voor een zoekopdracht). Er worden geen zaak-, cliënt- of documentinhouden
doorgegeven. De zoekmachines zien de zoekopdrachten zoals die van iedere browsergebruiker.

Het resultaat wordt aan de aanroepende AI teruggegeven als bewerkt, ongecontroleerd profiel.
Niets wordt in de stamgegevens geschreven: elke bevinding doorloopt de controlepoort
van de monitor voor gegevensconsistentie (paragraaf 4.5) en wordt alleen overgenomen als de
gebruiker haar aanvaardt. Uitsluitend openbaar toegankelijke bronnen worden geanalyseerd.

### 4.4 Dagjournaal

Het scherm zelf is lokaal. Bij het importeren van vrije tekst loopt eerst een **lokale**
parser; alleen als er geen formaatmarkering van een dagjournaal wordt gevonden, normaliseert een AI-terugvaloptie
de ruwe tekst: de geplakte tekst wordt volledig verzonden, klein niveau, onder voorbehoud van toestemming, gepseudonimiseerd, in het auditlogboek vastgelegd. Opgeslagen
vermeldingen in het dagjournaal verlaten de computer alleen als toolresultaten van de chat of de desktop-AI-Bridge
(begrensde fragmenten) of binnen het AI-instructiepakket (paragraaf 5).

### 4.4a Dagbriefing

Bij de eerste programmastart van een dag (Windows) bereidt IRONSTICK
op de achtergrond een gesproken dagbriefing voor, al tijdens de start en
voordat het briefingvenster vraagt of de gebruiker deze wil horen. De briefingtekst —
aantallen termijnen, de zittingen van vandaag en morgen met zaaknummer,
naam van de cliënt, plaats en rechtbank, en de titels van de afspraken van vandaag — wordt
eenmaal (klein niveau) naar de cloud-AI gestuurd, die haar herformuleert als gesproken proza in de
systeemtaal. Gepseudonimiseerd via de router, in het auditlogboek vastgelegd, **geen toestemmingsvenster**.
Zijn gratis achtergrondaanbieders ingeschakeld (paragraaf 1), dan kan deze aanroep
via die aanbieders lopen. Is er geen aanbieder beschikbaar, dan wordt in plaats daarvan een lokaal samengestelde tekst gebruikt.

### 4.5 Monitor voor gegevensconsistentie

Fase 1 (e-mail ↔ stamgegevens) is volledig deterministisch. Fase 2 stuurt
**per nieuw inkomend document één aanroep** van het kleine niveau (gepseudonimiseerd, in het
auditlogboek vastgelegd, **geen venster**), die het volgende bevat: de ontdubbelde
**fragmenten uit contactgedeelten** (korte fragmenten rond adres-, telefoon- en fiscale gegevens) uit de
volledige tekst van **dit** document, de namen van de partijen van dit document en van zijn zaak, en bij
elke partij de **namen** van mogelijke overeenkomsten uit de opgeslagen stamgegevens (door
plaatshouders vervangen voor zover ze in het woordenboek staan; namen van instellingen in platte tekst).
**Contactgegevens en identificatienummers uit de opgeslagen stamgegevens worden niet doorgegeven.** Zijn
gratis achtergrondaanbieders ingeschakeld (paragraaf 1), dan kan deze aanroep via die aanbieders
lopen. Het antwoord wordt altijd alleen een voorstel, dat de
gebruiker in de monitor moet aanvaarden.

### 4.6 Tekstverwerker (AI-ondersteuning in de tekst)

- **Selectie herzien:** de geselecteerde zin/alinea/sectie (met
opmaak) **plus een fragment van het document als context**
en de instructie van de gebruiker — middelniveau, gepseudonimiseerd.
- **Indeling/inhoudsopgave:** feitelijk het volledige document als geïndexeerde lijst van regels
(lange regels ingekort), in begrensde lengte — middelniveau, gepseudonimiseerd.
- **Voorbewerking voor de voorleesfunctie:** bij het voorlezen van een document wordt **elke
zin afzonderlijk in platte tekst naar het kleine niveau gestuurd**, om
afkortingen en getallen uit te schrijven — **zonder pseudonimisering** (identificatienummers
moeten ongewijzigd terugkomen om correct te worden voorgelezen). Dossierstempels en verwijsmarkeringen
worden vooraf lokaal verwijderd. Het starten van de voorleesfunctie is het moment van
toestemming.

Geen van de aanroepen van de tekstverwerker toont een afzonderlijk toestemmingsvenster
of schrijft vermeldingen in het auditlogboek (omzeiling van de router, paragraaf 3).

### 4.7 Red/Blue Team-controle en gesprekssamenvatting (API)

Twee verdere API-stromen horen bij het opstellen van concepten. **Red/Blue Team:** heeft de gebruiker
dit voor de actieve aanbieder ingeschakeld (schakelaar naast de API-sleutel; een opgeslagen
sleutel is vereist), dan wordt elk formeel document dat via het
opleveringsvenster wordt overgedragen — uit de chat in de app en uit de desktop-AI-Bridge
evenzeer —, door dezelfde aanbieder in een afzonderlijke controleronde nog een keer gelezen vanuit het perspectief van de
advocaat van de wederpartij
(middelniveau). Doorgegeven worden: de concepttekst, de datum en de jurisdictie
van de zaak; gepseudonimiseerd via de router en in het auditlogboek vastgelegd zoals elke routeraanroep;
**geen toestemmingsvenster** — de schakelaar is de toestemming; het rapport van de controleur wordt aan de gebruiker toegevoegd. De Red/Blue Team-controle loopt
**nooit** via de gratis achtergrondaanbieders (paragraaf 1). **Gesprekssamenvatting:** in lange
API-chatsessies wordt het oudere deel van het gesprek (alleen de vragen van de gebruiker en de
definitieve antwoorden van het model, nooit toolresultaten) door de actieve aanbieder
(klein niveau, op de achtergrond, **geen eigen toestemmingsvenster**) verdicht tot een korte samenvatting die het ruwe verloop
vervangt; deze wordt versleuteld in de tussenopslag geplaatst en telkens
overschreven. Gepseudonimiseerd en in het auditlogboek vastgelegd. Zijn gratis achtergrondaanbieders ingeschakeld (paragraaf 1), dan kan de
samenvatting via die aanbieders lopen.

### 4.8 AI-chat (extern, API)

Toestemming eenmaal per chatsessie; middelniveau met automatische escalatie naar het
grote niveau (de volledige context wordt dan opnieuw verzonden); gepseudonimiseerd; elke ronde
in het auditlogboek vastgelegd. Elke beurt geeft door: de systeemprompt (statische regels), de **actuele GUI-context**
(huidig scherm, geopende zaak/cliënt incl. naam van de cliënt — door plaatshouders vervangen),
maximaal **10 AI-geheugenvermeldingen** van de geopende cliënt, het recentste gesprek plus een samenvatting van oudere beurten
(4.7) en de lijst van bestanden in de tussenopslag van de chat. Elke tool die het model aanroept,
geeft zijn resultaat terug in het API-gesprek — inclusief volledige documentteksten
(grotere resultaten worden in de versleutelde tussenopslag geplaatst), e-mailberichtteksten en
fragmenten uit het dagjournaal. De chat gebruikt dezelfde toollaag
en dezelfde opleveringscontroles als de desktop-AI-Bridge (4.9): controle van
processtukken, Red/Blue Team (4.7) en overdracht via het exportvenster —
wat het systeem verlaat, is een indieningsklaar concept. De lokale chatlaag
beantwoordt routineverzoeken zonder enige doorgifte.

Twee hulpfuncties verdienen uitdrukkelijke vermelding. De **weersopvraging**
haalt actuele weergegevens op voor een genoemde plaats bij de niet-LLM-dienst
Open-Meteo (paragraaf 7) — aan deze dienst worden alleen de plaatsnaam of de coördinaten daarvan doorgegeven,
nooit zaak- of persoonsgegevens. De **locatieopvraging**
antwoordt uitsluitend op basis van de **recentste lokaal opgeslagen**
beveiligingsmomentopname (paragraaf 8): het verzoek van de AI leidt **niet tot een nieuwe externe opvraging** —
zij leest alleen wat al op de gegevensdrager aanwezig is. Zoals bij elke tool stroomt wat deze functies
teruggeven terug in het AI-gesprek, d.w.z. naar de AI-aanbieder.

### 4.9 Desktop-AI-Bridge (optionele aanvullende modules)

**Elke desktop-AI-toegang is een optionele, afzonderlijk aangeschafte module.**
Deze bestaat alleen waar het kantoor de betreffende Bridge-module heeft aangeschaft en
geïnstalleerd; zonder enige module blijft het Bridge-gedeelte in de
configuratie vergrendeld, start het lokale eindpunt nooit, en kan geen van de in
deze paragraaf beschreven gegevensstromen plaatsvinden. Bridges zijn er voor
**Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** en **Kimi Desktop**; elke heeft een eigen klein Bridge-programma,
en alle maken verbinding met hetzelfde lokale eindpunt in de draaiende
applicatie. De hierna beschreven gegevensstromen zijn voor alle identiek; alleen de ontvangende aanbieder verschilt.

**Dit kanaal draagt echte zaakgegevens over.** Dat is het doel ervan: de eigen desktop-AI-sessie van de gebruiker stelt
indieningsklare concepten op en heeft daarom echte namen en nummers nodig.

- De desktop-AI (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop of Kimi Desktop)
maakt via haar Bridge-programma verbinding met de draaiende applicatie; deze verbinding blijft op de
computer. Alleen de tools voor webzoeken, pagina's lezen en registers nemen contact op met het internet.
- **Websites met toegangscontrole.** Vraagt een website om een bevestiging voordat zij
haar inhoud vrijgeeft, dan opent IRONSTICK de pagina in een eigen venster; de
gebruiker bevestigt daar zelf. De inhoud van de pagina leest vervolgens de desktop-AI —
deze stroomt zoals elk ander toolresultaat naar haar aanbieder.
- De eerste gegevenstoegang door welke desktop-AI dan ook in een programmasessie opent een blokkerend
toestemmingsvenster. De goedkeuring opent de toegang voor alle desktop-AI's voor de rest van de
programmasessie; een weigering blokkeert ze allemaal tijdelijk.
- Meer dan 200 tools stellen kronieken, volledige teksten, e-mails,
dagjournaals, termijnen, stamgegevens, volledige zaken (in delen) en uitvoerformaten
beschikbaar; als geheim gemarkeerde documenten zijn uitgezonderd. Wijzigingen aan stamgegevens,
kroniek, agenda, AI-geheugen, volledige teksten en de wettenbibliotheek worden pas van kracht
nadat de gebruiker ze in een IRONSTICK-formulier, -venster
of in de monitor voor gegevensconsistentie heeft goedgekeurd: voorstellen voor stamgegevens en relaties
komen in de monitor terecht; door de AI voorgestelde wijzigingen aan zaakgebonden AI-instructienotities worden als
rood/groen-diff weergegeven en pas overgenomen nadat de gebruiker
uitdrukkelijk heeft ingestemd; kroniekvermeldingen worden nooit door de AI geschreven — zij vult alleen het
registratieformulier vooraf in, dat de gebruiker aanvult en opslaat; en een door de AI herstelde volledige documenttekst
(OCR-herscan) vervangt de opgeslagen volledige tekst pas nadat
de gebruiker de volledige tekst in een bevestigingsvenster heeft gezien en opgeslagen.
Zonder zo'n venster schrijft de AI alleen in haar eigen werkruimten: de versleutelde
tussenopslag, het dagjournaal op verzoek van de gebruiker en haar eigen beoordeling van de zaak na de deterministische controles.
Tags en berichten in de kantoorchat vereisen de bevestiging van de gebruiker in de chat. Bij een zaak waarop een collega is geabonneerd,
kan de AI een notitie vastzetten die via de
IRONSTICK SERVER de eigenaar van de zaak en alle abonnees bereikt
(paragraaf 9). De overdracht naar de tekstverwerker en de levering van bestanden zijn uitdrukkelijke stappen van de gebruiker;
navigatie alleen met afzonderlijke toestemming.
- **Herstel via OCR-herscan (lokaal) en de pdf-overdracht (door de gebruiker geïnitieerd).**
Is een opgeslagen volledige tekst afgekapt of door een oude OCR-run onbruikbaar, dan kan de AI
een nieuwe scan aanvragen: de gebruiker selecteert de pagina's, de herscan loopt **lokaal**
(geen nieuwe externe ontvanger), en beide tekstversies worden in de lokale
tussenopslag beschikbaar gesteld; wat de AI daaruit leest, stroomt zoals elk
ander toolresultaat naar haar aanbieder. Als uiterste laatste middel — alleen na zo'n herscan en
alleen binnen harde, door de Bridge afgedwongen grenzen —
kan de AI de gebruiker vragen haar het **originele pdf-bestand** te geven: IRONSTICK
opent alleen de vermelding; de gebruiker slaat de pdf zelf op via het paperclippictogram
en sleept haar naar de desktop-AI-chat. Daardoor wordt het document
**als bestand** (inclusief stempels, handtekeningen en afbeeldingen) naar de aanbieder van deze AI
overgedragen — dit gebeurt uitsluitend door eigen, bewust handelen van de gebruiker, nooit
automatisch, en als geheim gemarkeerde documenten zijn bij voorbaat uitgesloten van het volledige
herscankanaal.
- **Lokale AI-tussenopslag (gegevensminimalisatie).** Omvangrijke toolresultaten kunnen in een lokaal, versleuteld bestand in de tussenopslag worden geplaatst en daar worden bewerkt, **zonder überhaupt naar de AI-aanbieder
te worden overgedragen**. Volledige zaakexports voor de AI
en het sessiestartoverzicht in één aanroep worden eveneens direct in deze
lokale opslag geschreven; alleen de delen die de AI vervolgens leest, stromen naar haar aanbieder.
De tussenopslag bevindt zich binnen de
gegevensmap en blijft over sessies heen behouden (hij is de werkcontext van de AI);
niet meer gebruikte bestanden worden automatisch verwijderd, en er ontstaat geen nieuwe externe ontvanger.
- **De tussenopslag is versleuteld.**
Elk bestand in de tussenopslag is in rust met AES-256 versleuteld; bestanden verlaten de
opslag uitsluitend via het exportvenster van IRONSTICK, nooit naar een downloadmap.
De database, de documentopslag, het configuratiebestand en de tussenopslag
zijn daarmee allemaal in rust met AES-256 versleuteld. Tijdelijke werkkopieën van geopende
documenten (bij elke start en bij het afsluiten geleegd), de kortstondige peer-reviewbuffer,
de scaninvoer, exports en uitgaande bestanden blijven in platte tekst
(paragraaf 8).
- Toolresultaten worden doorgegeven aan de desktop-AI-client van de gebruiker en van daaruit
aan **diens aanbieder**: Anthropic voor Claude (in het kader van het Claude-abonnement
van de gebruiker en de voorwaarden van Anthropic), OpenAI voor ChatGPT (in het kader van het
ChatGPT-abonnement van de gebruiker en de voorwaarden van OpenAI), Alibaba Cloud/Qwen voor Qwen
Desktop (in het kader van het Qwen-account van de gebruiker en de voorwaarden van Qwen) of Moonshot AI voor Kimi
Desktop (in het kader van het Kimi-account van de gebruiker en de voorwaarden van Moonshot AI). IRONSTICK schrijft geen
regels in het auditlogboek voor het Bridge-verkeer; de bovenste balk toont per
actieve AI een pulserend logo (Claude-teken, ChatGPT-teken, Qwen-teken, Kimi-teken) — gelijktijdige toegang is
mogelijk en wordt telkens afzonderlijk gesignaleerd. Elk Bridge-programma houdt naast zich een
**lokaal logboek** bij met tijd, toolnaam, succes/mislukking en
grootte van het antwoord, **nooit met inhoud**. Een tweede, gedetailleerder
**diagnoselogboek** in de gegevensmap is **standaard uitgeschakeld**; als het
voor foutopsporing wordt ingeschakeld, kan het aanroepparameters (die namen kunnen bevatten) in platte tekst bevatten en wordt het automatisch ingekort. Geen van de logboeken wordt ergens naartoe overgedragen.
- Het gemeenschappelijke AI-geheugen slaat verdichte inzichten (cliënt- of zaakgebonden) lokaal op. De AI kan voorstellen een
vermelding op te slaan, te wijzigen of te verwijderen; elke wijziging wordt pas van kracht nadat de gebruiker heeft ingestemd. Met een zaak gekoppelde vermeldingen
worden nooit automatisch verwijderd; vermeldingen zonder zaak worden na een jaar zonder gebruik verwijderd. De inhoud van het geheugen is voor elk AI-kanaal
zichtbaar en wordt overgedragen zodra deze kanalen hem lezen.
- De peer review tussen de desktop-AI's loopt via IRONSTICK, niet rechtstreeks
tussen de aanbieders: een AI plaatst een werkresultaat (bijv. een concept) in een
**lokale, kortstondige uitwisselingsbuffer** (bestanden in platte tekst op de computer van de gebruiker,
verwijderd wanneer de taak wordt gesloten, en bij elke herstart van de app volledig opgeschoond) samen met een
taaknotitie; de andere AI leest deze wanneer de gebruiker haar daartoe opdracht geeft. Daardoor ontstaat
**geen nieuwe externe ontvanger** — wat de controlerende AI leest, wordt precies zoals elk ander
hierboven beschreven toolresultaat overgedragen aan **haar eigen** aanbieder, volgens diens
voorwaarden. De aanbieders wisselen nooit rechtstreeks gegevens uit; wat de controlerende AI leest, gaat
uitsluitend naar haar eigen aanbieder.

### 4.10 Audiotranscriptie (sprekertoewijzing)

De spraakherkenning loopt volledig lokaal; de opname zelf verlaat de
computer nooit. Heeft de gebruiker meer dan één spreker opgegeven, dan wijst vervolgens
de AI de herkende regels toe aan de sprekers: per gedeelte (middelniveau) de herkende tekst, daarbij al toegewezen regels als context en
het aantal sprekers. De aanroepen lopen via de router — gepseudonimiseerd, onder
voorbehoud van toestemming, in het auditlogboek vastgelegd. Het antwoord mag de tekst niet
veranderen: elke regel wordt gecontroleerd tegen de herkende tekst; mislukt een blok, dan wordt
het transcript zonder sprekertoewijzing overgenomen. Bij slechts één spreker vindt geen
AI-aanroep plaats. Zijn gratis achtergrondaanbieders ingeschakeld (paragraaf 1), dan kunnen
deze aanroepen via die aanbieders lopen.

## 5. Het AI-instructiepakket (export-ZIP)

![IRONSTICK Client, gebruiker met MD-bestanden en ZIP-archief, AI-webapp](https://www.ironstick.legal/img/67_instruction_zip.png)

Het aanmaken van het pakket gebeurt lokaal en omvat geen AI-aanroep. Het levert
**Markdown in platte tekst** op (geen pseudonimisering), bedoeld om door de
gebruiker bij een externe LLM naar keuze te worden geüpload. Inhoud:

| Bestand | Inhoud |
| --- | --- |
| Zaken | alle zaken van de geselecteerde cliënt met partijen, status en index van bewijsstuk-ID's (geen volledige teksten) |
| Entiteiten | **alle personen/entiteiten van het volledige kantoor** (niet alleen van deze cliënt) inclusief nationale persoons- en ondernemingsnummers (bijv. Roemeense CNP/CUI), geboortedatum, volledige contactgegevens, beroep, voertuig — plus de opgeslagen analyseblokken (inschatting, zwakke punten, woonplaatsen, financiën, sociale omgeving, bronnen) |
| Instellingen, termijnen | alle instellingen; actieve termijnen met zaaknummer en naam van de cliënt |
| Mail | de 100 nieuwste e-mails **kantoorbreed**: afzender, ontvanger, onderwerp, bestandsnamen van de bijlagen, kort fragment (geen volledige berichtteksten) |
| Dagjournaal | laatste 10 dagen, kantoorbreed, inclusief de zaakchronologie van deze periode |
| Per zaak | één dossier per zaak: de volledige kroniek **met volledige documentteksten**, identificatoren van cliënt en partijen inclusief identificatienummers; plus alle achtergrondnotities bij de zaak zonder begrenzing |
| Instructiebestanden | vijf documenten met werkregels — geen persoonsgegevens |

**Wat er gebeurt wanneer deze ZIP bij een AI-dienst van een derde wordt geüpload:**
De gebruiker draagt persoonlijk en in platte tekst wezenlijke delen van het volledige
kantoor — identiteiten van cliënten met nationale identificatienummers, profielen van derden
inclusief gevoelige inschattingen, kantoorbrede metagegevens van correspondentie en dossiers
— over aan deze aanbieder. Vanaf dat moment worden de gegevens verwerkt volgens de voorwaarden
van deze aanbieder (gebruik voor training, bewaring, rechtsstelsel). IRONSTICK toont vóór de
export (eenmaal per programmasessie) een privacymelding en biedt de export ook naar Google Drive aan, waardoor
de bestanden daarnaast bij Google worden opgeslagen. De gebruiker handelt als doorgevende
verwerkingsverantwoordelijke in de zin van de AVG en moet vóór het uploaden een rechtsgrondslag waarborgen (bijv. art. 6,
beroepsrechtelijke geheimhoudingsregels).

Als geheim gemarkeerde documenten zijn uitgesloten van termijnen, dagjournaals en
dossiers.

## 6. Overzichtsmatrix

| Gegevensstroom | Wat er wegvloeit (vorm) | Gepseudonimiseerd | Eigen toestemmingsvenster | Auditlogboek |
| --- | --- | --- | --- | --- |
| Documentregistratie (4 aanroepen) | OCR- en documenttekst (begrensd), zaak- en namenlijsten | ja | ja — eenmaal per programmasessie | ja |
| E-mailtriage (handmatig ophalen op het e-mailscherm) | afzender, onderwerp, kort tekstfragment (geen zakenlijst); alleen voor e-mails die niet lokaal zijn toegewezen | ja | nee | ja |
| E-mailtriage (achtergrond, elke vijf minuten) | idem | ja | nee | ja |
| Dagbriefing (API) | briefingtekst: aantallen termijnen, zittingen met zaaknummer, naam van de cliënt, plaats en rechtbank, titels van de afspraken | ja | nee (eerste start van de dag, bij de start voorbereid) | ja |
| Personenonderzoek, fase 1 | echte naam (webzoekopdracht) | nee — inherent aan het ontwerp | ja — eenmaal per sessie | ja (in platte tekst) |
| Personenonderzoek, fasen 2 en 3 | paginateksten (begrensd per bron) | ja | dezelfde toestemming | ja |
| Automatisch invullen persoon/instelling | ingevoerde naam (webzoekopdracht) | nee — inherent aan het ontwerp | ja — eenmaal per sessie | ja (in platte tekst) |
| AI-import dagjournaal | geplakte ruwe tekst | ja | ja | ja |
| Monitor voor gegevensconsistentie | per nieuw document: de contactgedeelten ervan en namen van mogelijke overeenkomsten (geen contactgegevens of identificatienummers uit de stamgegevens) | ja (namen van instellingen in platte tekst) | nee (gedoseerd achtergrondproces) | ja |
| Tekstverwerker: herzien / structureren | selectie met contextfragment / documentregels (begrensd) | ja | nee (knop = toestemming) | nee |
| Voorbewerking voor het voorlezen | elke zin, platte tekst | nee | nee (start = toestemming) | nee |
| Red/Blue Team-controle (API) | concepttekst, datum en jurisdictie | ja | nee (schakelaar = toestemming) | ja |
| Gesprekssamenvatting (API) | oudere gespreksrondes (alleen vragen van de gebruiker en definitieve antwoorden) | ja | nee (achtergrondrun van de API-chat) | ja |
| AI-correctie bestand→Markdown | geconverteerde tekst | ja | nee | nee |
| AI-zoeker van het weglakken | al weggelakte tekst; antwoorden bevatten echte namen van derden | uit — inherent aan het ontwerp | schakelaar = toestemming | ja |
| AI-chat (extern) | prompt, schermcontext, geheugen, recentste gesprek met samenvatting, toolresultaten (begrensd per element) | ja | ja — eenmaal per sessie | ja |
| Desktop-AI-Bridge (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | onbewerkte toolresultaten (volledige zaakgegevens) | nee — inherent aan het ontwerp | ja — eenmaal per programmasessie voor alle desktop-AI's | nee (aan de kant van de app) |
| Audiotranscriptie: sprekertoewijzing | herkende tekst in gedeelten — de opname nooit | ja | ja | ja |
| Gratis achtergrondaanbieders (Groq, OpenRouter, Mistral) — alleen indien ingeschakeld | dezelfde inhoud als de betreffende achtergrondtaak; nooit chat, processtuk of Red/Blue Team | zoals de betreffende taak | nee (schakelaar per aanbieder = toestemming) | ja |
| AI-instructie-ZIP | kantoorexport in platte tekst (door de gebruiker geïnitieerde upload) | nee | waarschuwing eenmaal per programmasessie | n.v.t. |

## 7. Externe diensten zonder LLM (volledigheidshalve)

![IRONSTICK Client, internet, locatiepictogram en weerpictogram](https://www.ironstick.legal/img/68_external_services.png)

Los van elke LLM nemen de volgende functies contact op met externe diensten met
de minimaal vereiste gegevens: nummervalidatie (EU VIES, EORI, GLEIF,
handelsregister — het te controleren nummer), de directe webzoekopdrachten van het personenonderzoek (de naam), IMAP (uw mailserver) en
optionele exports naar Google Drive (de geëxporteerde bestanden). Bij geen van deze handelingen is
de AI-aanbieder betrokken.

De volgende diensten worden op de achtergrond of eveneens met minimale gegevens
benaderd:

- **OpenStreetMap Nominatim (geocodering van adressen)** — eenmaal per dag verwerkt een
achtergrondtaak de personen en ondernemingen in de partijrecords
die een adres of een woonplaats hebben, en stuurt straat, district, woonplaats en land
(nooit de naam) naar Nominatim om ze op de kaart te plaatsen; een al
geplaatst adres wordt alleen opnieuw verzonden als het verandert, en een niet gevonden adres wordt
na een wachttijd opnieuw geprobeerd. De plaatsnaam van de weersopvraging wordt op
dezelfde manier gegeocodeerd. Geen toestemmingsvenster; de coördinaten worden lokaal opgeslagen.
- **ipwho.is (geo-IP-opvraging)** — eenmaal per programmastart vraagt IRONSTICK in het kader van de
lokale beveiligingssnapshot (paragraaf 8) bij deze dienst het
**openbare** IP-adres van de computer en een globale locatie (stad, land, ISP) op.
Het verzoek bevat geen inhoudelijke gegevens; de dienst ontvangt het openbare IP-adres van waaruit het
verzoek binnenkomt. Het antwoord wordt uitsluitend lokaal opgeslagen en
nergens anders naartoe doorgegeven.
- **Open-Meteo (weer)** — op verzoek vraagt de AI-weersopvraging
(paragraaf 4.8) actuele weergegevens op voor een genoemde plaats; de dagbriefing doet
hetzelfde voor de in de configuratie vastgelegde plaats als de optionele modus met
weersinformatie is ingeschakeld. Alleen de coördinaten van de plaats worden doorgegeven — nooit
zaak-, cliënt- of persoonsgegevens.
- **[www.ironstick.legal](https://www.ironstick.legal/index_nl.html) (nieuwsbestand)** — nadat de toegangscode
is ingevoerd, en daarna elke zes uur, downloadt de applicatie van de website van de softwarefabrikant een nieuwsbestand met
mededelingen en waarschuwingen, plus elke daarin gerefereerde afbeelding. Het verzoek bevat geen gegevens; zoals elke webserver
ziet de server van de fabrikant het IP-adres en het tijdstip van het verzoek.

Bij geen van deze diensten is de AI-aanbieder betrokken.

## 8. Lokale opslag, integriteit en controle door de gebruiker

![IRONSTICK Client met TOTP-toegangsvergrendeling; documenten, tussenopslag en database met AES-256 versleuteld](https://www.ironstick.legal/img/69_local_encryption.png)

Los van de hierboven beschreven AI-kanalen geldt voor **alle**
gegevens die IRONSTICK bewaart het volgende:

- **Uitsluitend lokale opslag.** Het volledige gegevensbestand — database, documentbestanden,
media, transcripten, configuratie — bevindt zich in één enkele gegevensmap onder
een door de gebruiker vastgelegd pad. IRONSTICK vereist geen cloudaccount,
en geen enkele functie stuurt gebruikersgegevens naar de fabrikant (het enige contact met de fabrikant is
de download van het nieuwsbestand, paragraaf 7). Gebruikt een kantoor
de optionele IRONSTICK SERVER (paragraaf 9), dan is ook deze server een eigen apparaat van het
kantoor in het eigen netwerk van het kantoor — aan de toegang van de fabrikant verandert daardoor niets.
- **Database in rust versleuteld (AES-256).** De database — het bestand
van cliënten, zaken, kroniek, e-mails, termijnen, transcriptteksten en het
geheugen van de AI's — wordt met AES-256 versleuteld opgeslagen, elke pagina afzonderlijk en
met een integriteitszegel per pagina. De sleutel wordt door de applicatie tijdens de
uitvoering afgeleid en nooit naar een gegevensdrager of de configuratie geschreven, zodat een databasebestand
dat van het opslagapparaat of uit een back-uparchief wordt gekopieerd, zonder
IRONSTICK niet kan worden gelezen. Dit is een technische maatregel in de zin van art. 32 AVG, die
zonder enige configuratie door de gebruiker werkt en niet kan worden uitgeschakeld.
- **Documenten in rust versleuteld (AES-256).** De documentopslag — de
originele pdf's, scans, afbeeldingen, audio- en transcriptbestanden — wordt op dezelfde manier
bestand voor bestand versleuteld, met een integriteitszegel dat wijzigingen detecteert.
Het lezen gebeurt via één enkele poort, die het opgevraagde bestand
ontsleutelt naar een tijdelijke werkkopie en deze kopieën verwijdert wanneer de
applicatie wordt gesloten of gestart. Back-ups en zaakpakketten bevatten de documenten
in hun versleutelde vorm.
- **Wat in platte tekst blijft.** Naast de werkkopieën van de lopende sessie en exports: scans die in de scaninvoer op registratie wachten;
de kortstondige peer-reviewbuffer tussen de desktop-AI's (paragraaf 4.9, verwijderd
wanneer de taak wordt gesloten, en bij elke start opgeschoond); en, alleen indien ingeschakeld,
het gedetailleerde diagnoselogboek van de Bridge (paragraaf 4.9).
- **Toegangscontrole bij de start (TOTP).** Zodra de licentiesleutel
is aanvaard, toont de applicatie niets anders dan een codeverzoek, totdat de gebruiker
de actuele zescijferige tijdgebonden eenmalige code uit een
authenticator-app (RFC 6238) invoert. Het geheim waarop de codes zijn gebaseerd, wordt
nooit naar een gegevensdrager geschreven; opgeslagen wordt alleen een
niet-geheime vingerafdruk van de bevestigde inrichting, zodat de QR-code
na een sleutelwissel opnieuw wordt getoond. Herhaalde foutieve invoer leidt tot een oplopende
wachttijd. De desktop-AI-Bridges ontvangen geen zaakgegevens zolang de applicatie
vergrendeld is. Het configuratiebestand (API-sleutels, e-mailtoegangsgegevens,
servertoegang) is met hetzelfde mechanisme als de
documenten met AES-256 versleuteld en wordt uitsluitend in het werkgeheugen ontsleuteld.
- **Door de gebruiker gecontroleerde opslaglocatie.** Het gegevenspad wordt bij de
inrichting gekozen en kan op elk moment worden gewijzigd — ook naar een verwisselbaar medium zoals
een versleutelde USB-stick of een versleutelde externe harde schijf. De applicatie volgt eenvoudigweg
de geconfigureerde opslaglocatie; de versleuteling van het medium (bijv. met de
schijfversleuteling van het besturingssysteem) ligt in handen van de gebruiker en wordt
aanbevolen voor draagbare media. Netwerkstations en met een cloud gesynchroniseerde mappen
(OneDrive, Google Drive, Dropbox, iCloud, Box, pCloud, MEGA) worden als opslaglocatie voor gegevens
geweigerd. Bij het wijzigen van de opslaglocatie in de configuratie controleert
IRONSTICK het doel aan de hand van deze regels; er wordt gekopieerd met vergelijking van controlesommen, omgeschakeld
pas na geslaagde verificatie, en de oude map blijft hernoemd bewaard.
- **Apparaatsynchronisatie zonder enige cloud.** De optionele
synchronisatie Windows ↔ Android-tablet loopt via een directe
USB-kabelverbinding — er is geen dienst van derden bij betrokken, overdrachten worden
via controlesom geverifieerd, en vóór het vervangen van de database wordt een verplichte back-up
gemaakt. Als geheim gemarkeerde documenten worden helemaal niet naar de tablet
overgedragen.
- **Beveiligingssnapshot bij de start (lokaal aanmeldlogboek).** Bij elke
programmastart legt IRONSTICK op de achtergrond een snapshot vast van de computer waarop het
draait: hostnaam, besturingssysteem, RAM/CPU, lokaal IP-adres, standaardbrowser,
actieve tools voor externe toegang die het herkent, en een daaruit afgeleide beveiligingsbeoordeling
— daarnaast, eenmaal per start, het openbare IP-adres en de globale locatie
(stad, land, ISP), die via de geo-IP-dienst ipwho.is (paragraaf 7) worden bepaald.
De snapshot wordt **uitsluitend lokaal** in het aanmeldlogboek van de database
opgeslagen en nergens naartoe doorgegeven. De bewaring is
automatisch begrensd tot hoogstens **6 maanden** en hoogstens **1.000
vermeldingen** (dagelijkse opschoning), en de gebruiker kan het logboek op elk moment
in de configurator inzien (kaart «Aanmeldlogboek»).
- **Integriteitsvingerafdrukken voor elk geregistreerd bestand.** Op het moment van de
registratie krijgt elk opgeslagen bestand een cryptografische inhoudsvingerafdruk
(SHA-256 voor documenten en media; een oudere MD5-vingerafdruk voor audiobestanden van transcripties),
die in de database naast de vermelding wordt vastgelegd. Elke latere wijziging van een
opgeslagen bestand is daardoor door vergelijking van het bestand met de
vastgelegde vingerafdruk **detecteerbaar**, en e-discovery-exports (EDRM) bevatten deze vingerafdrukken,
zodat ontvangers de bestanden onafhankelijk kunnen verifiëren. Daardoor wordt elke manipulatie zichtbaar en bewijsbaar.
- **Back-ups naar goeddunken van de gebruiker.** Een geïntegreerde back-upfunctie schrijft
een volledige kopie van de gegevens (volledige back-up of back-up van alleen gegevens) als één ZIP-archief
naar een willekeurig door de gebruiker gekozen doel en herstelt op verzoek vanuit zo'n archief.
Hoe vaak back-ups worden gemaakt, waar ze worden bewaard, hoelang ze
worden bewaard en of de archieven daarnaast worden versleuteld, ligt volledig in de
beslissing van de gebruiker. In elk archief zijn de database, de documenten, de
configuratie en de AI-tussenopslag in elk geval met AES-256 versleuteld; alleen
scans die nog in de scaninvoer wachten, zijn ongewijzigd opgenomen —
IRONSTICK schrijft geen schema voor en geeft back-ups nergens naartoe door.
- **Gegenereerde documenten behoren toe aan de gebruiker.** De gebruiker kan op elk moment
documenten genereren — processtukken, brieven, dossiers, lijsten, exports — en
downloaden: ze worden in de lokale map “Documenten” geschreven of, als de
gebruiker uitdrukkelijk Google Drive als doel kiest, in het eigen Google Drive-account van de gebruiker.
Wat daarna met een
gegenereerd document gebeurt — afdrukken, indienen bij een rechtbank, verzenden per e-mail,
uploaden naar een willekeurige dienst, doorgeven aan derden —, beslist uitsluitend de gebruiker.

**Toewijzing van de verantwoordelijkheid.** Omdat IRONSTICK
alles lokaal opslaat en gegevens alleen doorgeeft langs de in de paragrafen
1–7 en 9 gedocumenteerde wegen — inclusief de achtergrondfuncties die zonder eigen
venster lopen (paragrafen 3 en 7) —, is de exploitant van het kantoor de enige
verwerkingsverantwoordelijke: hij kiest het opslagmedium en de versleuteling daarvan, beheert back-ups en
bewaart ze, beslist welke AI-functies zijn geactiveerd, verleent of weigert elke
toestemming en beslist als enige over wat er gebeurt met elk document, elke export of elke back-up
die de software genereert. Door AI gegenereerde inhoud — concepten, samenvattingen, beoordelingen,
classificaties — is altijd een **voorstel**, waarover de gebruiker beslist. Dit document dient ervoor dat elk
van deze beslissingen met volledige kennis van de werkelijke
gegevensstromen kan worden genomen.

## 9. IRONSTICK SERVER (optioneel, in het eigen netwerk van het kantoor)

![IRONSTICK Server en IRONSTICK Client via het LAN verbonden; de server heeft geen verbinding met het internet](https://www.ironstick.legal/img/70_server_lan.png)

Kantoren met meerdere IRONSTICK-werkplekken kunnen de optionele
**IRONSTICK SERVER** gebruiken — een coördinatiedienst die draait op de
eigen Synology NAS van het kantoor in het eigen lokale netwerk van het kantoor. Voor
de doeleinden van deze verklaring zijn de volgende feiten doorslaggevend:

- **Er is geen externe partij bij betrokken.** De server is een eigen
apparaat van het kantoor. Hij aanvaardt verbindingen uitsluitend van private (lokale)
netwerkadressen en **bouwt nooit zelf een verbinding met het internet
op** — geen telemetrie, geen updatecontroles, geen contact met de fabrikant.
De softwarefabrikant heeft geen enkele toegang.
- **Transport en opslag.** Documenten bereiken de server alleen als met AES-256 versleutelde bestanden in hetzelfde kluisformaat als op de
werkplek en staan daar ook alleen zo; de server ziet nooit hun platte tekst.
De server draait op de eigen NAS van het kantoor in het netwerk van het kantoor, zonder internetverbindingen.
- **Geen AI-betrokkenheid.** Via de server loopt geen AI-dataverkeer, hij
slaat geen AI-sleutel op en communiceert nooit met een aanbieder van
taalmodellen. Alle in de paragrafen 1–6 beschreven AI-kanalen blijven
strikt beperkt tot de afzonderlijke werkplek; de pseudonimiseringslaag,
de toestemmingsdrempels en het auditlogboek worden door de aanwezigheid
van de server niet geraakt.
- **Wat de server opslaat** — alles op de NAS, onder controle van het
kantoor: (a) **vrijgegeven zaakpakketten** — uitsluitend zaken die een
gebruiker uitdrukkelijk voor collega's heeft vrijgegeven; als geheim gemarkeerde
documenten zijn door het ontwerp uitgesloten en komen nooit op de
server terecht; (b) de **centrale wettenbibliotheek** — openbare
wetteksten als Markdown, elk met de naam van de bijdragende gebruiker,
de bronlink en de controledatum; (c) **tijdregistratiegegevens** — per gebruiker,
dag en zaak: zaaknummer, naam van de cliënt en minuten, door elke werkplek op de
achtergrond gemeld; (d) **aanwezigheidstotalen** per gebruiker en dag,
afgeleid uit sessie-heartbeats; (e) **metagegevens over zaakgebeurtenissen** —
vrijgaven, intrekkingen, begin en einde van abonnementen en exports, elk met
datum, tijd en LAN-IP-adres; (f) een **beveiligingslogboek** met
administratieve gebeurtenissen en aanmeldgebeurtenissen, inclusief
LAN-IP-adressen; (g) **zaakoverdrachtspakketten** — draagt een gebruiker de
eigendom van een zaak over aan een collega, dan komt de volledige zaak
als één archief via een tijdelijk overdrachtsgebied op de server terecht; het pakket
wordt van de server verwijderd nadat de ontvanger de import heeft bevestigd, en
als geheim gemarkeerde documenten worden alleen na uitdrukkelijke aanvullende
bevestiging door de eigenaar overgedragen (anders wordt de overdracht
afgebroken); (h) de **centrale scaninvoer** (optionele Central Scan
App): een register van de **zaaknummers en de weergavenaam** van elke
gebruiker (door de werkplekken gemeld als vergelijkingsmateriaal — nooit
zaakinhoud) en een **documentspool** per bestand, die gescande, aan
een gebruiker geadresseerde inkomende post vasthoudt totdat de werkplek van deze
gebruiker haar heeft opgehaald en bevestigd, waarna de serverkopie wordt verwijderd;
tekstherkenning en toewijzing aan de ontvanger gebeuren lokaal op de
scanwerkplek, zonder enige AI; (i) **gegevens over back-upgebeurtenissen** — elke
werkplek meldt zijn back-up- en herstelgebeurtenissen
(soort, bestandsnaam, grootte, tijdstip, LAN-IP), zodat de beheerder per gebruiker
kan zien wanneer de laatste back-up is gemaakt, en gebruikers die achterlopen
kan herinneren; (j) het **kantoorbrede partijenregister**
— de stamrecords van **personen en ondernemingen,
instellingen, de relaties daartussen en de persoonsanalyses** die
op de werkplekken worden bijgehouden, samen met de wachtrij van de
tussen de gebruikers uitgewisselde wijzigingsvoorstellen; (k) de
**beoordelingen van rechterlijke beslissingen** — per werkplek en beslissing: rechtbank,
kamer en samenstelling, de namen van de rechters en griffiers,
beslissingsnummer, datum, zaaknummer, de interne zaak- en cliëntnummers van de
beoordelende werkplek, gemeten tekstaandelen en de door de AI opgestelde
Engelstalige analyse van de beslissing en van de stukken van beide partijen; (l) de
**kantoorchat** — berichten tussen de geregistreerde gebruikers (na een jaar verwijderd) —
en aan een gedeelde zaak vastgezette notities, die zichtbaar zijn voor de eigenaar ervan en alle abonnees.
- **Het kantoorbrede partijenregister.** Zodra een werkplek met de
server is verbonden, worden zijn stamgegevens van partijen (wie is wie: namen,
identificatoren, contactgegevens, relaties, persoonsanalyse) **automatisch
geüpload** en naar elke andere werkplek van hetzelfde kantoor gespiegeld,
zodat elke advocaat ziet met wie het kantoor al te maken heeft, en het
kantoor een kantoorbreed zicht op belangenconflicten krijgt. Elk record
heeft precies één eigenaar — de gebruiker die het als eerste heeft ingebracht; alle
andere gebruikers hebben een alleen-lezenkopie en kunnen alleen een
**wijzigingsvoorstel** sturen, dat de eigenaar in de gegevensmonitor aanvaardt of
weigert. Is de eigenaar 48 uur lang niet bereikbaar, dan gaat de
eigendom over op de voorstellende gebruiker. **Zaakinhoud maakt geen
deel uit van dit register** — documenten, chronologie, correspondentie en
zaaktoewijzingen blijven onderworpen aan de hier beschreven uitdrukkelijke
vrijgave- en overdrachtshandelingen. De uitwisseling blijft binnen het kantoor
(één verwerkingsverantwoordelijke), verlaat nooit het lokale netwerk en betrekt
**geen AI-aanbieder** erbij: herkenning van dubbele records en veldvergelijking lopen als
zuivere programmalogica op de verzendende werkplek; de server slaat alleen op en
geeft door. Kantoren moeten deze interne doorgifte van
partijgegevens en persoonsanalyses opnemen in hun register van
verwerkingsactiviteiten.
- **De beoordelingen van rechterlijke beslissingen.** Een beoordeling wordt alleen opgeslagen op
uitdrukkelijk bevel van de gebruiker; daarna wordt zij net als het
partijenregister **automatisch geüpload** en naar elke werkplek van het
kantoor gespiegeld. Elke werkplek houdt per beslissing een eigen beoordeling bij,
die alleen hij kan wijzigen. De analyse beschrijft de inhoud van een beslissing en van de
stukken daarbij — zij bevat in zoverre **zaakinhoud** — en noemt rechters en
griffiers bij naam. Er is geen AI-aanbieder bij betrokken; de uitwisseling blijft in het
lokale netwerk van het kantoor. Kantoren moeten ook deze doorgifte opnemen in hun
register van verwerkingsactiviteiten.
- **Alleen bewuste handelingen — voor zaakinhoud.** Zaakinhoud komt
uitsluitend via een uitdrukkelijke, door de gebruiker bevestigde vrijgave- of
overdrachtshandeling op de server terecht; teksten van de wettenbibliotheek pas nadat de
gebruiker de vermelding in de gegevensmonitor heeft aanvaard; gescande inkomende post
pas nadat de medewerker van het kantoor het document heeft gecontroleerd en op verzenden naar een
geselecteerde ontvanger heeft geklikt. Het partijenregister en de
opgeslagen beoordelingen van rechterlijke beslissingen zijn de bewuste uitzonderingen: zij
synchroniseren op de achtergrond zonder bevestiging per record. Tijd-, aanwezigheids-, gebeurtenis- en back-upgegevens zijn
operationele metagegevens die door het gebruik met meerdere gebruikers zelf ontstaan, en
zijn voor de beheerder van het kantoor zichtbaar in de webbeheeromgeving.
- **Verantwoordelijkheid.** Het kantoor dat de server gebruikt, blijft
de enige verwerkingsverantwoordelijke. De beheerder beslist over het goedkeuren van
registraties, kan abonnementen beëindigen, vermeldingen in de wettenbibliotheek
verwijderen en het pakket verwijderen — waarbij de servergegevensmap onder
controle van de beheerder op de NAS blijft.
- **Werknemersgegevens.** Met de IRONSTICK SERVER meldt elke
werkplek zijn gemeten werktijd per dag en zaak (zaaknummer,
naam van de cliënt) en elke back-up- en herstelgebeurtenis (bestand, grootte, tijd, IP-adres)
aan de server, waar de beheerder van het kantoor ze kan inzien. Het kantoor moet zijn
medewerkers hierover dienovereenkomstig informeren.
- **Volledige cliëntnamen in tijdregistratiegegevens.** Het
tijdregistratieoverzicht toont de werktijd per zaak en per cliënt, wat
betekent dat namen van cliënten op de NAS worden opgeslagen. Dit blijft
binnen de eigen infrastructuur van het kantoor en het bestaande
vertrouwelijkheidsregime — kantoren moeten de NAS echter opnemen in hun overzicht
van technische en organisatorische maatregelen (toegangscontrole
in het besturingssysteem van de NAS, volumeversleuteling, back-upbeleid), net als bij elke andere
bestandsserver van het kantoor.

## Bijlage — modelclausule voor de privacyverklaring voor uw cliënten (voorstel)

De volgende tekst is een formuleringsvoorstel dat een kantoor dat
IRONSTICK gebruikt, in zijn eigen privacyverklaring voor cliënten kan overnemen.
Hij is zo opgesteld dat hij precies overeenkomt met de hierboven beschreven gegevensstromen. Hij ziet bewust af van citaten van wetsartikelen, zodat hij in
verklaringen van elke structuur kan worden ingevoegd.

**Voordat u de tekst invoegt — checklist voor de advocaat:**

1. Houd de verwerkersovereenkomst van **elke** door u
ingestelde AI-aanbieder bij de hand, noem in de clausule alleen de aanbieders
die u werkelijk gebruikt, en controleer de zin over training en
bewaring aan de hand van de voorwaarden die u werkelijk hebt ondertekend.
De gratis achtergrondaanbieders (Groq, OpenRouter, Mistral, paragraaf 1)
dekt de clausule alleen via de daar tussen haken geplaatste optionele zin —
schakel deze alleen in als hun voorwaarden aan uw beroepsrechtelijke
vereisten voldoen, en schrap de zin als u ze niet gebruikt.
2. Behoud de tussen haken geplaatste zin over de AI-werkruimte alleen
als u de desktop-AI-Bridge (Claude Desktop/Code, ChatGPT Desktop, Qwen
Desktop of Kimi Desktop) werkelijk gebruikt; schrap hem anders.
3. Deze clausule dekt de in dit document beschreven gegevensstromen
binnen de app. Zij dekt het AI-instructiepakket (paragraaf 5)
**niet** — het uploaden van deze export naar een AI-dienst is een
afzonderlijke beslissing en vereist in de regel de uitdrukkelijke toestemming
van de cliënt.
4. Hebt u in de configurator afzonderlijke AI-functies uitgeschakeld, kort dan
de lijst van doeleinden dienovereenkomstig in — beschrijf precies wat u
gebruikt, niet meer.
5. Dit is een formuleringsvoorstel, geen juridisch advies. Laat het vóór
gebruik toetsen aan de beroepsregels van uw orde en de plaatselijke
privacypraktijk.

### Nederlands

**AI-ondersteunde behandeling van zaken.** Ons kantoor gebruikt de
kantoorsoftware IRONSTICK, die AI-ondersteunde functies bevat. Voor deze
functies kunnen geselecteerde gegevens uit uw dossier worden doorgegeven aan een externe
AI-dienstverlener (afhankelijk van beschikbaarheid: Alibaba Cloud, Moonshot AI, OpenAI of Anthropic, via hun API's),
die ze in onze opdracht verwerkt op basis van een
verwerkersovereenkomst. Wij gebruiken deze functies voor:
de classificatie en registratie van inkomende documenten, de prioritering van
inkomende e-mails, de controle van onze gegevensbestanden op inconsistenties,
het opstellen en controleren van juridische documenten en voor juridische analyse
en onderzoek. [Optioneel — schrappen indien niet gebruikt: voor taken die op de
achtergrond lopen, zoals de prioritering van inkomende e-mails, de controle van onze
gegevensbestanden en samenvattingen, kunnen daarnaast de gratis diensten van Groq,
OpenRouter of Mistral worden ingezet; de voorwaarden daarvan hebben wij vóór het inschakelen
gecontroleerd.]

**Beschermingsmaatregelen.** Vóór elke doorgifte vervangt de software de in
ons systeem opgeslagen directe identificatoren — namen,
persoonlijke identificatienummers, telefoonnummers, e-mailadressen, postadressen,
zaaknummers en bankgegevens — op onze eigen computer door neutrale
plaatshouders. De koppeltabel tussen plaatshouders en echte gegevens
verlaat ons kantoor nooit; de antwoorden van de dienstverlener worden lokaal
terugvertaald. Er wordt alleen doorgegeven wat de betreffende functie vereist,
met vaste omvangsgrenzen. Afzonderlijke functies hebben om technische redenen
echte gegevens nodig — bijvoorbeeld het openbare internetonderzoek naar een persoonsnaam
of de voorleesfunctie; deze zetten wij alleen in door een bewuste
afzonderlijke handeling. [Optioneel — schrappen indien niet gebruikt: voor het
opstellen van processtukken gebruiken wij daarnaast een AI-werkruimte waarin
dossiergegevens zonder vervanging door plaatshouders worden verwerkt; dit kanaal wordt
alleen onder ons rechtstreeks toezicht gebruikt.] Los van de AI-functies stuurt de software
in onze gegevensbestanden opgeslagen postadressen — zonder namen — naar de openbare kaartdienst
OpenStreetMap, zodat ze op een kaart kunnen worden weergegeven.

**De dienstverlener.** Volgens de voor ons geldende voorwaarden van de
dienstverlener worden via de API doorgegeven inhouden
niet gebruikt voor het trainen van AI-modellen en slechts gedurende beperkte tijd
opgeslagen. De verwerking kan buiten de Europese Economische Ruimte
plaatsvinden; in dat geval is de doorgifte beschermd door de in onze
verwerkersovereenkomst overeengekomen waarborgen. Wat de
dienstverlener met de gegevens mag doen, regelt deze overeenkomst — niet het
oordeel van de AI.

**Uw keuze.** Onze beroepsmatige geheimhoudingsplicht blijft
onverlet: buiten wat hier is beschreven, verlaten geen gegevens ons
kantoor. De verwerking berust op de aan ons verleende opdracht en ons
gerechtvaardigd belang bij een efficiënte en zorgvuldige
behandeling van uw zaak. U kunt op elk moment bezwaar maken tegen het gebruik van de AI-ondersteunde functies;
voor zover mogelijk behandelen wij uw dossier dan zonder
deze functies. Uw wettelijke privacyrechten — inzage, rectificatie,
wissing, klacht bij de toezichthoudende autoriteit — blijven volledig
behouden.

Deze verklaring is afgeleid uit de broncode van de applicatie
(pseudonimiseerder, externe router, auditlogboek en het doorgiftepad
van elke afzonderlijke functie) en geeft het geleverde gedrag van versie 1.0.7 (stand november 2026) weer.
De verwerking door de AI-aanbieder zelf — bewaring,
gebruik voor training, subverwerkers, rechtsstelsel — wordt
uitsluitend bepaald door de voorwaarden van de aanbieder, in de telkens actuele versie daarvan. De
links naar de gebruiksvoorwaarden en privacyverklaringen van elke aanbieder staan ook in het
betreffende gedeelte van de AI-configuratie.

| Aanbieder | Gebruiksvoorwaarden en privacy |
| --- | --- |
| Alibaba Cloud (Qwen) | [alibabacloud.com/help/en/legal](https://www.alibabacloud.com/help/en/legal) |
| Moonshot AI (Kimi) | [platform.kimi.ai/docs/agreement](https://platform.kimi.ai/docs/agreement) |
| OpenAI (ChatGPT) | [openai.com/policies](https://openai.com/policies) |
| Anthropic (Claude) | Commercial Terms of Service: [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms); Usage Policy: [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup); Privacy Policy: [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) |
| Groq | [groq.com/terms-of-use](https://groq.com/terms-of-use) |
| OpenRouter | [openrouter.ai/terms](https://openrouter.ai/terms) |
| Mistral | [legal.mistral.ai/terms/commercial-terms-of-service](https://legal.mistral.ai/terms/commercial-terms-of-service) |
