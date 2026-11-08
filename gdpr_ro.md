# Declarația fluxurilor de date (RGPD)

Pagina originală: https://www.ironstick.legal/gdpr_ro.html

---

Relații cu modele lingvistice de mari dimensiuni externe

Descriere factuală, derivată din cod, a fiecărei căi pe care datele
părăsesc IRONSTICK în direcția unui LLM extern, ce anume este transmis, în ce
formă și unde se aplică stratul de pseudonimizare. Ediția pentru desktop Windows.
Acest document descrie exclusiv comportamentul IRONSTICK — **ceea ce furnizorul
de IA face cu datele primite este guvernat exclusiv de propriile condiții ale
furnizorului** (condițiile și politicile de confidențialitate ale furnizorilor
pe care utilizatorul i-a configurat — Google, Alibaba Cloud, Moonshot AI, OpenAI
și/sau Anthropic), pe care utilizatorul trebuie să le examineze separat.

## 1. Domeniul de aplicare și punctele terminale

![API IA, aplicația IA desktop și serverul MCP în stânga, IRONSTICK Client în mijloc, seiful de date cu AES-256, IRONSTICK Server și aplicația de scanare în dreapta](https://www.ironstick.legal/img/65_ai_client_vault.png)
Apelurile de IA externă din aplicație sunt direcționate către **furnizorul pe
care cascada automată îl folosește în acel moment**. Utilizatorul poate configura
până la patru furnizori; fiecare furnizor configurat este folosit automat în
această ordine fixă, care economisește costuri: **Qwen (Alibaba
Cloud) → Kimi (Moonshot AI) → ChatGPT (OpenAI) → Claude (Anthropic)**. La fiecare
pornire a programului, IRONSTICK verifică care dintre ei răspund; dacă în cursul
zilei se epuizează o cotă sau un credit ori un furnizor încetează să răspundă,
exact aceeași cerere este repetată cu furnizorul următor, care este apoi folosit
pentru restul zilei. Conținutul transmis este identic la fiecare furnizor
(începând cu secțiunea 3: pseudonimizat de router, consimțământ, jurnal de audit).
Punctele terminale sunt:

- **Claude:** `POST https://api.anthropic.com/v1/messages`,
cheia API proprie a utilizatorului.
- **ChatGPT:** `POST https://api.openai.com/v1/chat/completions`,
cheia API proprie a utilizatorului.
- **Qwen:** `POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions`
(Alibaba Cloud Model Studio, regiunea internațională), cheia API proprie a utilizatorului.
- **Kimi:** `POST https://api.moonshot.ai/v1/chat/completions`
(Moonshot AI), cheia API proprie a utilizatorului.

**Furnizori de fundal gratuiți (opțional).** În plus, utilizatorul poate
configura ofertele gratuite ale **Groq**, **OpenRouter** și **Mistral**.
IRONSTICK le folosește exclusiv pentru sarcini care rulează în fundal:
trierea e-mailurilor, monitorul de consistență a datelor, briefingul zilnic,
rezumatul dialogului, atribuirea vorbitorilor la transcrieri, preluarea textelor de
lege și tabloul de situație. Fiecare dintre acești furnizori are în configurație
propriul comutator PORNIT/OPRIT; este folosit numai dacă este salvată o cheie și
comutatorul său este pe PORNIT. Pentru chat, pentru actele de procedură și pentru
verificarea Red/Blue Team nu sunt folosiți **niciodată**. Dacă niciunul dintre ei
nu este disponibil, preia cascada descrisă mai sus. Pseudonimizarea, consimțământul
și jurnalul de audit urmează sarcina respectivă (secțiunea 4). Punctele terminale
sunt:

- **Groq:** `POST https://api.groq.com/openai/v1/chat/completions`,
cheia API proprie a utilizatorului.
- **OpenRouter:** `POST https://openrouter.ai/api/v1/chat/completions`,
cheia API proprie a utilizatorului.
- **Mistral:** `POST https://api.mistral.ai/v1/chat/completions`,
cheia API proprie a utilizatorului.

**Oferte gratuite — avertisment în configurație.** Sub
fiecare dintre acești furnizori scrie textual: „ATENȚIE: este o ofertă gratuită a
furnizorului <furnizor>. Dacă salvați cheia API și treceți comutatorul pe ON,
IRONSTICK folosește acest furnizor pentru sarcini din fundal, precum rezumate,
triajul e-mailurilor etc. Astfel ajung inevitabil date la acest furnizor. Citiți cu
atenție termenii acestuia în privința GDPR." Un cabinet ale cărui reguli
profesionale impun un acord de prelucrare a datelor pentru fiecare persoană
împuternicită ar trebui să activeze aceste comutatoare numai după verificarea
condițiilor furnizorului respectiv — un furnizor dezactivat nu este folosit
niciodată.
Se folosesc trei niveluri de model configurabile per furnizor (mic / mediu /
mare). Un canal separat, opțional, este **conectorul pentru desktop**
(secțiunea 4.9): acolo, datele circulă către IA locală de desktop proprie a
utilizatorului (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop
**sau** Kimi Desktop), adică spre furnizorul acelei IA (Anthropic, OpenAI,
Alibaba Cloud/Qwen sau Moonshot AI/Kimi) în cadrul abonamentului/contului propriu
al utilizatorului la acel furnizor. Bridge-urile pot rula în paralel — același server
MCP local poate fi înregistrat simultan la Claude, ChatGPT, Qwen și Kimi, iar
acestea pot lucra pe același dosar în același timp. IRONSTICK nu operează niciun
server propriu; nicio dată nu circulă vreodată către producătorul software-ului.
Serverul opțional din rețeaua locală a biroului (**IRONSTICK SERVER**,
secțiunea 9) nu schimbă acest lucru: este operat de cabinetul de avocatură însuși,
pe hardware-ul propriu al cabinetului, în interiorul rețelei proprii a cabinetului
— nu contactează niciodată producătorul și nu contactează niciodată vreun furnizor
de IA.

**Comutatorul principal este accesul propriu al utilizatorului.**
Prelucrarea de IA externă din aplicație există numai dacă utilizatorul și-a deschis
propriul cont la un furnizor de IA și și-a introdus propria cheie de acces în
configurație.
**Fără niciun furnizor configurat, niciun apel de IA externă din aplicație nu
poate avea loc** — fiecare funcție descrisă în secțiunea 4 rămâne atunci locală
sau este pur și simplu indisponibilă. Acel cont este un contract direct între
utilizator și furnizor; IRONSTICK nu este parte la el. Același lucru este valabil
pentru conectorul de desktop, care necesită abonamentul/contul propriu al
utilizatorului la furnizorul de IA de desktop ales (Anthropic, OpenAI, Alibaba
Cloud/Qwen sau Moonshot AI/Kimi). Documentele marcate ca **secrete** sunt
excluse de la instrumentele conectorului și ale chatului, din pachetul de
instrucțiuni IA și din fiecare rezultat generat (anexe, dosare, exporturi);
prelucrarea lor în timpul captării urmează alegerea deliberată a utilizatorului în
momentul captării (secțiunea 4.1).
Complet local (nimic nu părăsește mașina): extragerea textului și OCR, stratul
de chat local determinist, căutarea globală, radarul de relevanță, analiza
lanțului de corespondență, generarea dosarului/PDF, trecerea locală a identificatorului de anonimizare, recunoașterea vocală (transcrierea înregistrărilor) și construirea pachetului de instrucțiuni IA.

## 2. Stratul de pseudonimizare

Fiecare execuție de agent din aplicație poate purta un pseudonimizator care
tokenizează textul de ieșire, retraduce argumentele instrumentelor pentru execuția
locală, retokenizează rezultatele instrumentelor și de-tokenizează local răspunsul
final. Tabela de corespondență există numai în memorie, câte o corespondență nouă
per operațiune; ea nu este niciodată păstrată.

![Sus: IRONSTICK Client, figură anonimizată cu roți dințate, API IA; jos: IRONSTICK Client, utilizator, aplicația IA desktop](https://www.ironstick.legal/img/66_pseudonymization.png)
### 2.1 Ce este înlocuit

| Sursă | Câmpuri | Token |
| --- | --- | --- |
| Fișe de client | nume, CNP, telefon, e-mail, adresă+localitate | `$PARTEI_A$`, `$CNP_A$`, `$TEL_A$`, `$MAIL_A$`, `$ADRESSE_A$` |
| Persoane / entități | nume complet (persoană sau societate), CNP | `$PARTEI_B$` / `$FIRMA_A$`, `$CNP_B$` |
| Dosare | număr de dosar, parte adversă, reclamant | `$FALL_A$`, `$PARTEI_C$`… |
| Stratul de tipare (valori necunoscute în text liber) | numere de dosar la instanță (n/nnn/aaaa), CNP-uri de 13 cifre, IBAN-uri, adrese de e-mail, numere de telefon plauzibile | aceleași familii de token-uri |

### 2.2 Ce rămâne în mod deliberat real

- **Datele, orele și sumele bănești** — falsificarea lor a fost considerată
mai periculoasă decât transmiterea lor.
- **Denumirile de instituții** (instanțe, autorități) — nu se află în
dicționar și sunt organisme publice.
- **Terți necunoscuți în text liber** — martori, medici, avocați, judecători
sau societăți care nu sunt stocate ca fișe de client/persoană/dosar nu sunt
recunoscute și sunt transmise în clar. Aceasta este o limită documentată a
abordării.
- **Adresele non-clienților** — nu există un tipar de adresă; numai adresa
stocată a clientului este tokenizată.
- Întregul **conținut factual** al documentelor (alegații, diagnostice,
narațiune) — se înlocuiesc numai identificatorii, nu povestea.

### 2.3 Excepții deliberate cu nume în clar

- **Cercetarea web despre persoane (etapa 1)** și **completarea automată a
formularelor** pentru persoane / instituții: o căutare web pentru
`$PARTEI_A$` este lipsită de sens, așa că numele real este trimis prin
proiectare.
- **Detectorul IA pentru anonimizare**: primește text care a fost deja
anonimizat local și trebuie să răspundă cu numele în clar ale *terților
necunoscuți* pe care îi găsește — pseudonimizarea este dezactivată pentru acest
unic scop.
- **Preprocesarea pentru citire cu voce tare (TTS)**: vezi 4.6 — propozițiile
sunt transmise în clar.
- **Conectorul de desktop**: date brute prin proiectare (secțiunea 4.9).

## 3. Momentele de consimțământ și jurnalul de audit

Apelurile direcționate prin routerul central sunt condiționate de consimțământ
și înregistrate: fiecare rundă de model scrie un rând în tabela locală de audit cu cererea și răspunsul complet **în forma tokenizată
care a părăsit efectiv mașina**; încercările refuzate/blocate sunt înregistrate
fără conținut util. Dialogul de consimțământ indică nivelul modelului și dimensiunea
aproximativă a cererii, iar o singură aprobare acoperă sesiunea curentă a ecranului
(pentru captarea documentelor: execuția curentă a programului).

**Fluxuri cu consimțământ automat (fără dialog):** trierea
de e-mail în fundal (funcționare continuă), execuția de analiză a monitorului de
consistență a datelor și detectorul IA pentru anonimizare (activarea comutatorului
său este consimțământul). Acestea sunt în continuare pseudonimizate (cu excepția
răspunsurilor cu nume în clar intenționate ale detectorului de anonimizare) și în
continuare auditate.
**Fluxuri care ocolesc routerul:** funcțiile IA ale
procesorului de text, preprocesarea pentru citire cu voce tare și corecția IA
Fișier→Markdown apelează API-ul direct. Ele sunt pseudonimizate (excepție: citirea
cu voce tare), dar nu afișează **niciun dialog de consimțământ propriu și nu scriu
rânduri în jurnalul de audit**. Operarea de către utilizator a acestor funcții
(apăsarea butonului IA, pornirea unei generări, pornirea citirii cu voce tare cu
comutatorul IA activat) este momentul de consimțământ.
## 4. Fluxurile de date, caz de utilizare cu caz de utilizare

### 4.1 Captarea documentelor

Extragerea textului și OCR sunt locale. Dacă este configurată o cheie API,
IRONSTICK întreabă o dată per execuție a programului, apoi rulează până la patru
tipuri de apeluri (toate pseudonimizate, toate auditate):

- **Detectarea documentului principal** (nivel mic): text OCR brut în fragmente
de cel mult 2.000 de caractere, maximum 8 apeluri — numai pentru scanări de calitate
slabă.
- **Corecția OCR** (nivel mic): textul documentului limitat la 16.000 de
caractere.
- **Clasificarea** (nivel mediu): textul documentului limitat la 16.000 de
caractere, **plus liste de sistem**: lista completă de dosare (număr de dosar,
nume client, parte adversă — tokenizate), un fond de nume cunoscute limitat la 2.000
de caractere (tokenizat) și listele de coduri pentru tipul de instituție și tipul de
document (etichete netokenizate). Rezervă: nivel mic, 8.000 de caractere, fără
liste.
- **Contextualizarea la salvare** (nivel mic): metadatele documentului și
textul integral limitat la 30.000 de caractere, plus o linie de index (ID, dată,
titlu ≤120 de caractere) a **fiecărui element de probă activ al aceluiași
client** — folosită pentru a fundamenta trimiterile încrucișate. Rulează și pentru
documentele marcate ca secrete (decizie deliberată a utilizatorului).

### 4.2 Monitorul de e-mail (trierea)

Atribuirea dosarului are loc **local și fără IA**. Pentru evaluarea
urgenței are loc **un apel de nivel mic per e-mail** cu exact: numele și adresa
expeditorului, subiectul și fragmentul de previzualizare stocat, ca text simplu
(limitat strict la 1.500 de caractere) — **niciodată corpul integral**, fără
atașamente și **fără lista de dosare**. Răspuns: prioritate + justificare. Dacă
furnizorii de fundal gratuiți sunt activați (secțiunea 1), acest apel poate trece
prin ei. În ecranul de e-mail acest lucru este condiționat de consimțământ o dată per sesiune;
în **funcționarea în fundal rulează fără dialog** (activarea monitorului este
consimțământul). Pseudonimizat și auditat în ambele moduri.

**Fără pixeli de urmărire.** Deschiderea unui e-mail în monitor nu contactează
niciodată serverul expeditorului: imaginile la care se face referire printr-o adresă
de internet (inclusiv pixelii de urmărire invizibili) nu sunt încărcate și apar ca
substituenți cu o notificare, astfel încât expeditorul nu poate afla când, cât de
des sau de la ce adresă a fost citit un e-mail. Sunt afișate doar imaginile
încorporate în e-mailul însuși.

### 4.3 Analiza persoanelor (cercetare web)

Trei etape după un consimțământ o-dată-per-sesiune:

- **Etapa 1 — căutare:** motoarele locale sunt interogate direct; suplimentar,
instrumentul de căutare web de pe partea serverului furnizorului este invocat cu
**numele real în clar** al persoanei (inevitabil pentru o căutare; înregistrat în
clar).
- **Etapa 2 — rezumate de pagini** (nivel mediu): per pagină, numele persoanei
(tokenizat), URL-ul și conținutul paginii limitat la 8.000 de caractere.
- **Etapa 3 — sinteza profilului** (nivel mare): numele și localitatea
(tokenizate) plus fiecare text de pagină colectat, limitat la 6.000 de caractere per
sursă.

Rezultatul este stocat local cu fiabilitatea „neconfirmat". Butoanele conexe de
**completare automată** de pe formularele de persoană/instituție trimit de
asemenea numele tastat în clar (excepție documentată).

### 4.3a Verificarea OSINT a unei părți (`osint_entity`)

Verificarea OSINT a unei părți este o procedură fixă pe care aplicația o
rulează singură atunci când o IA conectată o apelează cu numele, localitatea,
județul, țara și persoană fizică/juridică:

- **Dosare:** o căutare în textul integral după nume în baza de date
locală — **exclusiv local**, nimic nu părăsește calculatorul.
- **Internet:** o listă fixă de interogări este trimisă motoarelor de
căutare publice **Google, DuckDuckGo și Qwant**. Fiecare interogare constă
dintr-un termen de căutare în limba țării părții plus **numele real al părții,
în clar**, iar pentru unele interogări localitatea sau județul (inevitabil
pentru o căutare). Nu se transmite niciun conținut de dosar, de client sau de
document. Motoarele văd interogările ca pe cele ale oricărui utilizator de
browser.

Rezultatul este returnat IA apelante ca profil pregătit, neverificat. Nimic
nu se scrie în datele de bază: fiecare constatare trece prin poarta de
verificare a monitorului de consistență a datelor (secțiunea 4.5) și este
preluată numai când utilizatorul o acceptă. Se evaluează exclusiv surse
accesibile publicului.

### 4.4 Protocolul zilnic

Ecranul în sine este local. Importul de text în format liber rulează mai întâi un
parser **local**; numai atunci când nu se găsește niciun marcator de format de
protocol, o rezervă IA normalizează textul brut: textul lipit este trimis complet
(întrerupere peste 200.000 de caractere), nivel mic, condiționat de consimțământ,
pseudonimizat, auditat. Protocoalele stocate părăsesc mașina numai ca rezultate de
instrumente ale chatului/conectorului (fragmente limitate) sau în interiorul
pachetului de instrucțiuni IA (secțiunea 5).

### 4.5 Monitorul de consistență a datelor

Faza 1 (e-mail ↔ date de bază) este complet deterministă. Faza 2 trimite
**câte un apel per document nou primit**, de nivel mic (pseudonimizat, auditat,
**fără dialog**), care conține: **fragmentele de regiune de contact** dedublate
(±~100 de caractere în jurul marcajelor de adresă/telefon/cod fiscal) din textul
integral al **acestui** document, numele părților din acest document și din
dosarul său, precum și, pentru fiecare parte, **numele** potrivirilor posibile din
datele de bază stocate (tokenizate acolo unde se află în dicționar; denumirile de
instituții în clar). **Datele de contact și CNP-ul din datele de bază stocate nu
sunt transmise.** Dacă furnizorii de fundal gratuiți sunt activați (secțiunea 1),
acest apel poate trece prin ei. Răspunsul devine întotdeauna doar o sugestie pe
care utilizatorul trebuie să o accepte în monitor.

### 4.6 Procesorul de text (asistență IA în text)

- **Revizuirea selecției:** propoziția/paragraful/secțiunea selectată (cu
marcaj) **plus primele 6.000 de caractere ale întregului document drept context**
și instrucțiunea utilizatorului — nivel mediu, pseudonimizat.
- **Structură/Cuprins:** practic întregul document ca o listă de linii indexate
(liniile scurte integral, liniile lungi trunchiate la 80 de caractere), limitat la
40.000 de caractere — nivel mediu, pseudonimizat.
- **Preprocesarea pentru citire cu voce tare:** la citirea cu voce tare a unui
document, **fiecare propoziție este trimisă individual către nivelul mic în
clar** pentru a extinde abrevierile și numerele — **fără pseudonimizare**
(numerele de identificare trebuie să revină neschimbate pentru a fi citite corect).
Ștampilele de fișier și marcajele de referință sunt îndepărtate mai întâi local.
Pornirea citirii cu voce tare este momentul de consimțământ.

Niciunul dintre apelurile procesorului de text nu afișează un
dialog de consimțământ separat și nu scrie rânduri în jurnalul de audit (ocolirea
routerului, vezi secțiunea 3).
### 4.7 Revizuirea Red/Blue Team și rezumatul dialogului (API)

Alte două fluxuri API țin de redactare. **Red/Blue Team:** dacă utilizatorul
l-a activat pentru furnizorul activ (comutator lângă cheia API; este necesară o
cheie salvată), fiecare document formal predat prin `deliver_file` — atât
din chatul din aplicație, cât și din conectorul de desktop — este citit încă o dată
de același furnizor în rol de avocat al părții adverse (nivel mediu). Se transmit:
textul proiectului, data și jurisdicția dosarului; pseudonimizat prin router și
auditat ca fiecare apel de router; fără dialog separat — comutatorul este
consimțământul; cel mult două runde per fișier, după a doua rundă fișierul este
predat oricum, cu raportul examinatorului atașat pentru utilizator. Verificarea
Red/Blue Team nu trece **niciodată** prin furnizorii de fundal gratuiți
(secțiunea 1). **Rezumatul
dialogului:** în sesiunile lungi de chat, partea mai veche a dialogului (numai
întrebările utilizatorului și răspunsurile finale ale modelului, niciodată
rezultatele instrumentelor) este condensată de furnizorul activ (nivel mic, în
fundal) într-un rezumat de 2.000 de caractere care înlocuiește istoricul brut; este
stocat criptat în depozitul de lucru și suprascris de fiecare dată. Dacă furnizorii
de fundal gratuiți sunt activați (secțiunea 1), rezumatul poate trece prin ei.

### 4.8 Chat IA (extern, API)

Consimțământ o dată per sesiune de chat; nivel mediu cu escaladare automată la
nivelul mare (întregul context este atunci trimis din nou); pseudonimizat; fiecare
rundă auditată. Fiecare tură transmite: promptul de sistem (reguli statice),
**contextul GUI live** (ecranul curent, dosarul/clientul deschis inclusiv numele
clientului — tokenizat), până la **10 intrări de memorie IA** ale clientului
deschis, cel mai recent dialog limitat la 6.000 de caractere plus un rezumat de
2.000 de caractere al turelor mai vechi (4.7) și lista fișierelor de lucru ale
chatului. Fiecare instrument pe care modelul îl apelează returnează rezultatul său
în conversația API — inclusiv textele integrale ale documentelor (limitate la 10.000
de caractere per element; rezultatele mai mari sunt scrise în depozitul de lucru
criptat și citite în porțiuni), corpurile de e-mail și fragmentele de protocol
zilnic. Începând cu septembrie 2026, chatul folosește același strat de instrumente
și aceleași porți de livrare ca și conectorul de desktop (4.9): verificarea actelor
de procedură, Red/Blue Team (4.7) și predarea prin dialogul de export — ceea ce
părăsește sistemul este o formă gata pentru depunere. Stratul de chat local răspunde
la cererile de rutină fără nicio transmitere.

Două instrumente de comoditate merită menționate în mod explicit.
**`get_weather`** preia date meteorologice curente pentru un loc numit
de la serviciul non-LLM Open-Meteo (secțiunea 7) — numai numele locului / coordonatele
sale sunt transmise acelui serviciu, niciodată date de dosar sau de persoană.
**`get_my_location`** răspunde exclusiv din cel **mai recent
instantaneu de securitate stocat local** (secțiunea 8): cererea IA nu declanșează
**nicio nouă căutare externă** — citește doar ceea ce se află deja pe disc. Ca și
la fiecare instrument, ceea ce returnează aceste instrumente circulă înapoi în
conversația IA, adică spre furnizorul de IA.

### 4.9 Bridge-ul către o IA locală de desktop (Claude Desktop / Claude Code / ChatGPT
Desktop / Qwen Desktop / Kimi Desktop) — module suplimentare OPȚIONALE

**Fiecare acces la o IA de desktop este un modul opțional, achiziționat
separat.** Există numai acolo unde cabinetul a achiziționat și instalat modulul de
Bridge respectiv; fără vreun modul, secțiunea conectorului rămâne blocată în
configurație, punctul terminal local nu pornește niciodată și niciunul dintre
fluxurile descrise în această secțiune nu poate avea loc. Același server MCP STDIO
local poate fi înregistrat la **Claude Desktop/Claude Code**, **ChatGPT
Desktop**, **Qwen Desktop** și/sau **Kimi Desktop** — mecanismele de mai jos sunt identice pentru
toate; diferă doar furnizorul destinatar.

**Acest canal transmite date brute, nepseudonimizate, ale
dosarului.** Acesta este scopul său: sesiunea de IA de desktop proprie a
utilizatorului redactează forme gata pentru depunere și, prin urmare, are nevoie de
nume și numere reale.
- IA de desktop (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop sau Kimi Desktop) se conectează printr-un Bridge local la aplicația care rulează; conexiunea nu părăsește calculatorul.
- **Site-uri web cu verificare de acces.** Dacă un site web cere o confirmare
înainte de a-și elibera conținutul, IRONSTICK deschide pagina într-o fereastră
proprie; utilizatorul confirmă acolo personal. Conținutul paginii este citit apoi de
IA de desktop — el ajunge la furnizorul acesteia ca orice alt rezultat de
instrument.
- La primul acces la date per execuție a programului, IRONSTICK afișează un modal
de consimțământ blocant; refuzul blochează canalul timp de 10 minute. După aprobare,
canalul este deschis pentru restul execuției programului.
- Peste 200 de instrumente — dintre care peste 100 de citire — expun cronici, texte integrale, e-mailuri,
protocoale zilnice, termene, date de bază, dosare întregi (în părți) și formate de
ieșire; documentele marcate ca secrete sunt excluse. Căile de scriere sunt
condiționate de examinare (sugestiile de date de bază/relații ajung în monitorul de
consistență; modificările propuse de IA la notele de instrucțiuni IA legate de dosar
sunt prezentate ca un diff roșu/verde în interiorul IRONSTICK și aplicate numai după
ce utilizatorul le acceptă explicit — decizia este raportată înapoi IA) sau explicite
(predare în procesorul de text, livrare de fișiere, navigare numai dacă este permisă
separat). Același model de poartă de examinare acoperă cele două căi de scriere mai
noi: intrările de cronică nu sunt niciodată scrise de IA — aceasta doar PRECOMPLETEAZĂ
formularul de captare, pe care utilizatorul îl completează și îl salvează el însuși;
iar un text integral de document vindecat de IA (rescanare OCR, punctul următor)
înlocuiește textul integral stocat numai după ce utilizatorul a văzut textul complet
într-un dialog de confirmare și l-a salvat.
- **Vindecarea prin rescanare OCR (locală) și predarea PDF-ului (inițiată de
utilizator).** Când un text integral stocat este trunchiat sau distrus de o
execuție OCR veche, IA poate solicita o scanare nouă: utilizatorul alege paginile,
rescanarea rulează **local** (niciun destinatar extern nou), iar ambele versiuni
de text sunt pregătite în spațiul de lucru local; orice citește IA din ele circulă
către furnizorul său ca orice alt rezultat de instrument. Ca ultimă soluție absolută
— numai după o astfel de rescanare și numai în cadrul limitelor stricte impuse de
Bridge (≤ 10 MB, ≤ 90 de pagini) — IA poate cere utilizatorului să îi
predea **fișierul PDF original**: IRONSTICK doar deschide intrarea; utilizatorul
însuși salvează PDF-ul prin pictograma agrafei și îl trage în chatul IA de desktop.
Acest lucru transferă documentul **ca fișier** (inclusiv ștampile, semnături și
imagini) către furnizorul acelei IA — se întâmplă exclusiv prin acțiunea deliberată
proprie a utilizatorului, niciodată automat, iar documentele marcate ca secrete sunt
excluse de la bun început din întregul canal de rescanare.
- **Spațiul de lucru IA local (minimizarea datelor).** Orice apel de instrument
își poate devia rezultatul integral într-un fișier de lucru local, efemer
(`to_scratch`); IA primește apoi doar calea fișierului și dimensiunea — fără previzualizare — în loc de textul integral. Instrumentele de
editare locale (căutare/înlocuire/inserare/diff/normalizare) reprelucrează acele
fișiere pe mașina utilizatorului, iar instrumentele de livrare/actualizare le
consumă prin cale — conținutul mare poate fi astfel transportat și reprelucrat
**fără a fi transmis deloc furnizorului de IA**. Descărcările complete de dosar
(`dump_case_to_scratch`) și protocolul de pornire a sesiunii într-un
singur apel sunt de asemenea scrise direct în această zonă locală; numai porțiunile
pe care IA le citește ulterior circulă către furnizorul său. IRONSTICK
supraveghează în plus prospețimea acestor fișiere și le anulează atunci când datele
subiacente se schimbă. Folderul de lucru se află în interiorul folderului de date și
persistă între sesiuni (este contextul de lucru al IA); fișierele neatinse sunt
epurate după 180 de zile și nu se creează niciun destinatar extern nou.
- **Depozitul de lucru este un seif criptat (începând cu septembrie 2026).**
Fiecare fișier din depozitul de lucru este criptat în repaus cu AES-256, cu aceeași
derivare a cheii ca baza de date și depozitul de documente. Citirea și scrierea trec
numai prin poarta IRONSTICK; un fișier în text clar plasat în depozit pe orice altă
cale (un instrument de sistem de fișiere al IA de desktop, o copiere manuală) este
refuzat, eliminat și raportat IA ca o încălcare a regulilor; fișierele părăsesc
depozitul numai prin dialogul de export al IRONSTICK, niciodată către un folder de
descărcări. Împreună cu baza de date criptată, depozitul de documente și fișierul de
configurație, aceasta închide ultima breșă de pe mașina locală: **nicio dată de
dosar nu se află necriptată pe discul utilizatorului — nici măcar fișierele de lucru
ale IA**. Un disc copiat, un stick pierdut sau o arhivă de rezervă ajunsă în mâini
greșite produce doar text cifrat.
- Rezultatele instrumentelor sunt livrate clientului IA de desktop al
utilizatorului și de acolo către **furnizorul său**: Anthropic pentru Claude (în
cadrul abonamentului Claude al utilizatorului și al condițiilor Anthropic), OpenAI
pentru ChatGPT (în cadrul abonamentului ChatGPT al utilizatorului și al condițiilor
OpenAI), Alibaba Cloud/Qwen pentru Qwen Desktop (în cadrul contului Qwen al
utilizatorului și al condițiilor Qwen) sau Moonshot AI pentru Kimi Desktop (în cadrul
contului Kimi al utilizatorului și al condițiilor Moonshot AI). IRONSTICK nu scrie rânduri în jurnalul de
audit pentru traficul Bridge-ului; bara de sus afișează câte un logo pulsant per IA activă
(marca Claude, marca ChatGPT, marca Qwen, marca Kimi) — accesul simultan este posibil și fiecare
este semnalat separat. Bridge-ul însuși păstrează un **jurnal de diagnosticare pur
local** al apelurilor sale de instrumente — marcaj temporal, numele
instrumentului, succes/eșec și dimensiunea răspunsului, **niciodată vreun
conținut** — într-un fișier simplu lângă programul Bridge-ului. Acest jurnal nu este
transmis nicăieri și servește exclusiv depanării.
- Memoria IA partajată stochează local perspective distilate (≤1.000 de caractere
fiecare, legate de client/dosar, cu expirare automată); conținutul său este vizibil
pentru fiecare canal IA și este transmis ori de câte ori aceste canale îl citesc.
- Examinarea reciprocă între IA-urile de desktop se desfășoară prin IRONSTICK, nu
direct între furnizori: o IA lasă un produs de lucru (de exemplu, un proiect) într-un
**buffer de schimb local, de scurtă durată** (fișiere simple pe mașina
utilizatorului, șterse la închiderea sarcinii și șterse complet la fiecare repornire
a aplicației) și o notă de sarcină; cealaltă IA îl citește când utilizatorul o
îndrumă. Aceasta nu creează **niciun destinatar extern nou** — orice citește IA
care examinează este transmis **propriului** său furnizor exact ca orice alt
rezultat de instrument de mai sus, în cadrul condițiilor acelui furnizor. Conținutul
nu trece niciodată de la un furnizor la altul.

### 4.10 Transcrierea audio (atribuirea vorbitorilor)

Recunoașterea vocală rulează complet local; înregistrarea însăși nu părăsește niciodată
calculatorul. Dacă utilizatorul a indicat mai mult de un vorbitor, IA atribuie apoi rândurile
recunoscute vorbitorilor: per apel (nivel mediu) cel mult 60 de rânduri de text recunoscut,
plus ultimele 12 rânduri deja atribuite drept context și numărul de vorbitori. Apelurile trec
prin router — pseudonimizate, sub rezerva acordului, consemnate în jurnalul de audit.
Răspunsul nu are voie să modifice textul: fiecare rând este verificat față de textul
recunoscut; dacă un bloc eșuează, transcrierea este preluată fără atribuirea vorbitorilor.
Cu un singur vorbitor nu are loc niciun apel către IA. Dacă furnizorii de fundal
gratuiți sunt activați (secțiunea 1), aceste apeluri pot trece prin ei.

## 5. Pachetul de instrucțiuni IA (export ZIP)

![IRONSTICK Client, utilizator cu fișiere MD și arhivă ZIP, aplicația IA web](https://www.ironstick.legal/img/67_instruction_zip.png)
Construirea pachetului este locală și nu implică niciun apel de IA. Produce
**Markdown în text clar** (fără pseudonimizare) destinat a fi încărcat de
utilizator la un LLM extern la alegerea sa. Conținut:

| Fișier | Conținut |
| --- | --- |
| Dosare | toate dosarele clientului selectat cu părți, statut și index de ID-uri de probă (fără texte integrale) |
| Entități | **toate persoanele/entitățile întregului cabinet** (nu doar acest client) inclusiv CNP/CUI, data nașterii, date de contact complete, profesie, vehicul — plus blocurile de analiză stocate (evaluare, vulnerabilități, reședințe, finanțe, mediu social, surse) |
| Instituții, Termene | toate instituțiile; termenele active cu numere de dosar și numele clientului |
| Corespondență | cele mai recente 100 de e-mailuri **la nivelul întregului cabinet**: expeditor, destinatar, subiect, numele fișierelor atașate, fragment ≤500 de caractere (fără corpuri integrale) |
| Protocol zilnic | ultimele 10 zile, la nivelul întregului cabinet, inclusiv cronologia dosarelor din acea fereastră |
| Per dosar | câte un dosar per caz: cronica completă **cu texte integrale ale documentelor** (buget ~170 KB per fișier, apoi formă compactă), identificatorii clientului și ai părților inclusiv CNP; plus toate notele de context ale dosarului nelimitate |
| Fișiere de instrucțiuni | cinci documente cu reguli de lucru — fără date cu caracter personal |

**Ce se întâmplă când acest ZIP este furnizat unui LLM
străin:** utilizatorul transferă personal, în text clar, părți substanțiale ale
întregului cabinet — identitățile clienților cu numere de identificare națională,
profiluri de terți inclusiv evaluări sensibile, metadatele de corespondență la
nivelul întregului cabinet și dosarele — către acel furnizor. Din acel moment,
datele sunt prelucrate în cadrul condițiilor furnizorului străin (utilizare pentru
antrenare, păstrare, jurisdicție) complet în afara controlului IRONSTICK. IRONSTICK
afișează un avertisment de confidențialitate înaintea exportului (o dată per execuție
a programului) și oferă exportul și către Google Drive, ceea ce plasează în plus
fișierele la Google. Utilizatorul acționează ca operator care transmite datele în
sensul RGPD și trebuie să asigure un temei legal (de exemplu, art. 6, regulile
privind secretul profesional) înainte de încărcare.
Documentele marcate ca secrete sunt excluse din termene, protocoale zilnice și
dosare de caz.

## 6. Matricea sinoptică

| Flux | Ce părăsește (formă) | Pseudonimizat | Dialog de consimțământ propriu | Jurnal de audit |
| --- | --- | --- | --- | --- |
| Captarea documentelor (4 apeluri) | text OCR/document ≤30k, liste de dosare/nume | da | da — o dată per execuție a programului | da |
| Trierea e-mailurilor (ecran) | Expeditor/Subiect/Fragment ≤1,5k (fără lista de dosare) | da | da — o dată per sesiune | da |
| Trierea e-mailurilor (fundal) | același | da | nu (comutatorul monitorului = consimțământ) | da |
| Cercetarea persoanelor et. 1 | nume real (căutare web) | nu — prin proiectare | da — o dată per sesiune | da (în clar) |
| Cercetarea persoanelor et. 2/3 | texte de pagină ≤8k / ≤6k per sursă | da | același consimțământ | da |
| Completarea automată persoană/instituție | nume tastat (căutare web) | nu — prin proiectare | da — o dată per sesiune | da (în clar) |
| Import IA de protocol zilnic | text brut lipit ≤200k | da | da | da |
| Monitorul de consistență | per document nou: regiunile lui de contact + numele potrivirilor posibile (fără date de contact/CNP din datele de bază) | da (denumiri de instit. în clar) | nu (fundal limitat) | da |
| Procesor de text: revizuire / structură | selecție + context 6k / linii de doc ≤40k | da | nu (buton = consimțământ) | nu |
| Preprocesare citire cu voce tare | fiecare propoziție, text clar | nu | nu (pornire = consimțământ) | nu |
| Revizuire Red/Blue Team (API) | text proiect + dată + jurisdicție, per rundă (max 2) | da | nu (comutator = consimțământ) | da |
| Rezumat de dialog (API) | ture de dialog mai vechi (doar utilizator/asistent) | da | nu (parte a consimțământului de chat) | da |
| Corecție IA Fișier→Markdown | text convertit | da | nu | nu |
| Detector IA de anonimizare | text deja anonimizat; răspunsurile conțin nume de terți în clar | dezactivat — prin proiectare | comutator = consimțământ | da |
| Chat IA (extern) | prompt + context GUI + memorie + coadă 6k + rezumat 2k + rezultate de instrumente ≤10k/element | da | da — o dată per sesiune | da |
| Bridge-ul IA de desktop (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | rezultate brute de instrumente (date complete de dosar) | nu — prin proiectare | da — o dată per execuție a programului, blocare 10 min la refuz | nu (partea aplicației) |
| Transcriere audio: atribuirea vorbitorilor | text recunoscut, per apel ≤60 de rânduri + 12 rânduri de context — niciodată înregistrarea | da | da | da |
| Furnizori de fundal gratuiți (Groq, OpenRouter, Mistral) — numai dacă sunt activați | același conținut ca sarcina de fundal respectivă; niciodată chat, act de procedură sau Red/Blue Team | ca sarcina respectivă | nu (comutatorul per furnizor = consimțământ) | da |
| ZIP de instrucțiuni IA | export în text clar al cabinetului (încărcare inițiată de utilizator) | nu | avertisment o dată per execuție a programului | nu se aplică |

## 7. Servicii externe non-LLM (pentru completitudine)

![IRONSTICK Client, internet, simbol de localizare și simbol meteo](https://www.ironstick.legal/img/68_external_services.png)
Independent de orice LLM, următoarele funcții contactează servicii externe cu
datele minime necesare: validarea numerelor (EU VIES, EORI, GLEIF, registre de
comerț — numărul verificat), geocodarea adreselor (OpenStreetMap Nominatim —
adresa), interogările web directe ale căutării de persoane (numele), IMAP (serverul dvs. de
e-mail) și exporturile opționale către Google Drive (fișierele exportate). Niciunul
dintre acestea nu implică furnizorul de IA.

Alte două servicii primesc date la fel de minime:

- **ipwho.is (căutare geo-IP)** — o dată per pornire a programului, ca parte a
instantaneului de securitate local (secțiunea 8), IRONSTICK cere acestui serviciu
adresa IP **publică** a mașinii și o localizare aproximativă (oraș, țară, ISP).
Cererea HTTPS de ieșire nu poartă **niciun conținut personal de niciun fel** — ca
orice server web, serviciul vede doar adresa IP de la care sosește cererea.
Răspunsul este stocat exclusiv local și nu este transmis nicăieri altundeva.
- **Open-Meteo (vreme)** — la cerere, instrumentul meteorologic IA
(`get_weather`, secțiunea 4.8) interoghează date meteorologice curente
pentru un loc numit. Se transmit numai numele locului / coordonatele sale —
niciodată date de dosar, de client sau de persoană.

Niciunul dintre aceste servicii nu implică furnizorul de IA.

## 8. Stocarea locală, integritatea și controlul utilizatorului

![IRONSTICK Client cu blocare de acces TOTP; documente, memorie temporară și bază de date criptate cu AES-256](https://www.ironstick.legal/img/69_local_encryption.png)
Independent de canalele IA de mai sus, următoarele se aplică **tuturor**
datelor pe care IRONSTICK le deține:

- **Stocare exclusiv locală.** Întregul set de date — baza de date, fișierele
de documente, media, transcrierile, configurația — se află într-un singur director
de date, la o cale definită de utilizator. IRONSTICK nu necesită niciun cont de
cloud și nu operează niciun server; producătorul nu deține niciodată o copie a
vreunei date de utilizator. Acolo unde un cabinet operează serverul opțional
IRONSTICK SERVER (secțiunea 9), și acel server este dispozitivul propriu al
cabinetului, în rețeaua proprie a cabinetului — nimic legat de accesul
producătorului nu se schimbă.
- **Bază de date criptată în repaus (AES-256).** Baza de date — evidența
clienților, dosarelor, cronicii, e-mailurilor, termenelor, textul transcrierilor și
memoria IA-urilor — este stocată criptată cu AES-256, fiecare pagină individual și
cu un sigiliu de integritate per pagină. Cheia este derivată de aplicație la timpul
de execuție și nu este niciodată scrisă pe disc sau în configurație, astfel încât un
fișier de bază de date obținut de pe mediu sau dintr-o arhivă de rezervă nu produce
nimic fără IRONSTICK. Aceasta este o măsură tehnică în sensul art. 32 RGPD care se
aplică fără nicio configurare a utilizatorului și nu poate fi dezactivată.
- **Documente criptate în repaus (AES-256).** Depozitul de documente — PDF-urile
originale, scanările, imaginile, fișierele audio și de transcriere — este criptat în
același mod, fișier cu fișier, cu un sigiliu de integritate care detectează
alterarea. Citirea are loc printr-o singură poartă care decriptează fișierul cerut
într-o copie de lucru temporară și elimină acele copii când aplicația se închide sau
pornește. Copiile de rezervă și pachetele de dosar poartă documentele în forma lor
criptată. Limitele, spuse pe șleau: copiile de lucru ale sesiunii curente sunt în
text clar în folderul temporar (pe Android, acel folder se află în stocarea
partajată); exporturile și e-mailurile trimise sunt în text clar prin proiectare;
iar criptarea protejează împotriva citirii mediului în afara IRONSTICK, nu împotriva
unui utilizator autorizat al aplicației.
- **Control de acces la pornire (TOTP).** Odată ce cheia de licență este
acceptată, aplicația nu afișează nimic în afară de o solicitare de cod până când
utilizatorul introduce codul curent de șase cifre, unic, bazat pe timp, dintr-o
aplicație de autentificare (RFC 6238). Secretul din spatele codurilor este derivat
din cheia de licență la timpul de execuție și nu este niciodată scris pe disc; se
stochează doar o amprentă nesecretă a configurării confirmate, astfel încât codul QR
să fie afișat din nou după o schimbare de cheie. Codurile greșite repetate declanșează
o așteptare crescândă. Conectorii IA de desktop nu primesc date de dosar cât timp
aplicația este blocată. Recuperarea se face prin cheia de licență, ceea ce face din
cheia de licență acreditarea principală a instalării — custodia sa este
responsabilitatea operatorului. Fișierul de configurație (chei API, acreditări de
e-mail, acces la server) se odihnește criptat cu AES-256, cu același mecanism ca
documentele, și este decriptat numai în memorie.
- **Locație de stocare controlată de utilizator.** Calea datelor este aleasă în
timpul configurării și poate fi schimbată oricând — inclusiv către un mediu
detașabil, cum ar fi o unitate USB criptată sau un disc extern criptat. Aplicația
urmează pur și simplu locația configurată; criptarea mediului (de exemplu, cu
criptarea de disc a sistemului de operare) este în mâinile utilizatorului și este
recomandată pentru mediile portabile. O consecință de cântărit în mod deliberat:
dacă directorul de date ales se află în interiorul unui folder sincronizat în cloud
(de exemplu, Google Drive), întregul set de date **inclusiv fișierul de configurație
cu cheia de acces IA și acreditările de e-mail** este sincronizat către acel
furnizor de cloud în cadrul propriilor condiții ale furnizorului — plasarea
directorului de date acolo este decizia și responsabilitatea utilizatorului. La schimbarea locației de stocare în configurație, IRONSTICK verifică ținta și refuză unitățile de rețea și folderele sincronizate cu cloudul (OneDrive, Google Drive, Dropbox); copierea se face cu compararea sumelor de control, comutarea doar după o verificare reușită, iar folderul vechi este păstrat sub alt nume.
- **Sincronizarea dispozitivelor fără niciun cloud.** Sincronizarea opțională
Windows ↔ tabletă Android se desfășoară printr-o conexiune directă prin cablu
USB — niciun serviciu terț nu este implicat, transferurile sunt verificate prin sumă
de control, iar o copie de rezervă obligatorie este realizată înainte de înlocuirea
bazei de date. Documentele marcate ca secrete nu sunt transferate niciodată pe
tabletă.
- **Instantaneu de securitate la pornire (jurnal de conectare local).** La
fiecare pornire a programului, IRONSTICK înregistrează în fundal un instantaneu al
mașinii pe care rulează: numele gazdei, sistemul de operare, RAM/CPU, adresa IP
locală, browserul implicit, instrumentele de acces la distanță care rulează pe care
le detectează și un scor de securitate derivat — plus, o dată per pornire, adresa IP
publică și localizarea aproximativă (oraș, țară, ISP) obținute de la serviciul geo-IP
ipwho.is (secțiunea 7). Instantaneul este stocat **exclusiv local** în baza de
date și nu este transmis nicăieri. Păstrarea este
limitată automat la maximum **6 luni** și maximum **1.000 de intrări**
(întreținere zilnică), iar utilizatorul poate inspecta jurnalul oricând în configurator
(cardul «Jurnal de conectare»).
- **Amprente de integritate pe fiecare fișier captat.** În momentul captării,
fiecare fișier stocat primește o amprentă criptografică de conținut (SHA-256 pentru
documente și media; o amprentă MD5 moștenită pentru fișierele audio de transcriere),
înregistrată în baza de date lângă intrare. Orice modificare ulterioară a unui fișier
stocat este, prin urmare, **detectabilă** prin compararea fișierului cu amprenta
sa înregistrată, iar exporturile de e-discovery (EDRM) poartă aceste amprente, astfel
încât destinatarii să poată verifica fișierele în mod independent. Aceasta face
manipularea evidentă; ca orice mecanism de amprentă, nu previne fizic modificările
aduse fișierelor de pe disc — le face demonstrabile.
- **Copii de rezervă la latitudinea utilizatorului.** O funcție de rezervă
încorporată scrie o copie completă a datelor (copie de rezervă completă sau copie de
rezervă numai a datelor) ca o singură arhivă ZIP către orice destinație aleasă de
utilizator și restaurează dintr-o astfel de arhivă la cerere. Cât de des se fac
copiile de rezervă, unde sunt păstrate, cât timp sunt reținute și dacă arhivele sunt
criptate suplimentar este în întregime decizia utilizatorului (baza de date și
fișierele de documente din fiecare arhivă sunt criptate cu AES-256 în orice caz) —
IRONSTICK nu impune niciun program și nu transmite copiile de rezervă nicăieri.
- **Documentele generate aparțin utilizatorului.** Utilizatorul poate genera
documente oricând — acte de procedură, scrisori, dosare, liste, exporturi — și le
poate descărca: acestea sunt scrise în folderul local Documente sau, acolo unde
utilizatorul a plasat directorul de date pe un folder Google Drive ori selectează
explicit Google Drive ca destinație, în contul Google Drive propriu al
utilizatorului. **Rolul IRONSTICK se încheie cu producerea fișierului.** Orice se
întâmplă cu un document generat ulterior — imprimare, depunere la o instanță,
trimitere prin e-mail, încărcare către orice serviciu, partajare cu terți — este
făcut de utilizator și ține exclusiv de responsabilitatea utilizatorului.

**Repartizarea responsabilității.** Deoarece IRONSTICK stochează
totul local și transmite date numai pe căile documentate în secțiunile 1–7 — fiecare
dintre ele fie pseudonimizată, fie condiționată de consimțământ, fie declanșată de o
acțiune deliberată a utilizatorului — operatorul cabinetului este singurul operator
de date: acesta alege mediul de stocare și criptarea sa, gestionează și reține
copiile de rezervă, decide ce funcții IA sunt activate, acordă sau reține fiecare
consimțământ și decide singur ce se face cu fiecare document, export sau copie de
rezervă pe care software-ul le produce. Conținutul generat de IA — proiecte,
rezumate, evaluări, clasificări — este întotdeauna o **propunere** pe care
utilizatorul trebuie să o examineze profesional înainte de a se baza pe ea sau de a o
trimite. Acest document există pentru ca fiecare dintre aceste decizii să poată fi
luată cunoscând pe deplin fluxurile de date reale.
## 9. Serverul opțional din rețeaua locală a biroului (IRONSTICK SERVER)

![IRONSTICK Server și IRONSTICK Client conectate prin LAN; serverul nu are conexiune la internet](https://www.ironstick.legal/img/70_server_lan.png)
Cabinetele cu mai multe stații de lucru IRONSTICK pot opera serverul opțional
**IRONSTICK SERVER** — un serviciu de coordonare care rulează pe NAS-ul Synology
propriu al cabinetului, în interiorul rețelei locale proprii a cabinetului. Pentru
scopurile acestei declarații, faptele decisive sunt:

- **Nicio parte externă nu este implicată.** Serverul este dispozitivul propriu
al cabinetului. Acceptă conexiuni numai de la adrese de rețea private (locale) și
**nu inițiază niciodată vreo conexiune la internet** — fără telemetrie, fără
verificări de actualizare, fără contact cu producătorul. Producătorul software-ului
nu are niciun fel de acces.
- **Nicio implicare a IA.** Serverul nu poartă niciun trafic IA, nu stochează
nicio cheie IA și nu comunică niciodată cu vreun furnizor de model lingvistic. Toate
canalele IA descrise în secțiunile 1–6 rămân strict per-stație de lucru; stratul de
pseudonimizare, porțile de consimțământ și jurnalul de audit nu sunt afectate de
prezența serverului.
- **Ce stochează serverul** — totul pe NAS, sub controlul cabinetului: (a)
**pachete de dosare partajate** — numai dosarele pe care un utilizator le-a
eliberat explicit pentru colegi; documentele marcate ca secrete sunt excluse prin
proiectare și nu ajung niciodată la server; (b) **biblioteca juridică centrală**
— texte de acte normative publice ca Markdown, fiecare cu numele utilizatorului
contribuitor, link-ul sursei și data examinării; (c) **înregistrări de pontaj**
— per utilizator, zi și dosar: număr de dosar, nume client și minute, raportate de
fiecare stație de lucru în fundal; (d) **totaluri de prezență** per utilizator și
zi, derivate din semnalele de sesiune; (e) **metadate de evenimente de dosar** —
partajări, revocări, începuturi/încheieri de abonament și exporturi, fiecare cu dată,
oră și adresă IP din LAN; (f) un **jurnal de securitate** cu evenimente
administrative și de conectare, inclusiv adrese IP din LAN; (g) **pachete de predare
a dosarelor** — când un utilizator transferă proprietatea unui dosar unui coleg,
dosarul complet călătorește ca o singură arhivă printr-o zonă de parcare a serverului
(«spool»); pachetul este șters de pe server după ce destinatarul a confirmat
importul, iar documentele marcate ca secrete călătoresc numai după confirmarea
suplimentară explicită a titularului (altfel transferul este abandonat); (h)
**preluarea centrală a scanărilor** (aplicația opțională Central Scan): un registru
al **numerelor de dosar și al numelui afișat** al fiecărui utilizator (raportate
de stațiile de lucru drept material de potrivire — niciodată conținutul dosarelor) și
un **spool de documente** per fișier care păstrează corespondența scanată primită,
adresată unui utilizator, până când stația de lucru a acelui utilizator a preluat-o
și confirmat-o, după care copia de pe server este ștearsă; recunoașterea textului și
potrivirea destinatarului au loc local pe stația de scanare, fără nicio IA; (i)
**înregistrări de evenimente de rezervă** — fiecare stație de lucru raportează
evenimentele sale de copiere de rezervă și de restaurare a datelor (tip, nume de
fișier, dimensiune, oră, IP din LAN), astfel încât administratorul să poată vedea per
utilizator când a fost făcută ultima copie de rezervă și să reamintească
utilizatorilor rămași în urmă; (j) **registrul de părți la nivelul întregului
cabinet** («rețeaua de entități») — înregistrările de bază privind **persoanele
și societățile, instituțiile, relațiile dintre ele și analizele de persoană**
ținute de stațiile de lucru, împreună cu coada propunerilor de modificare schimbate
între utilizatori; (k) **evaluările hotărârilor judecătorești** — per stație de lucru și hotărâre: instanța, completul și componența, numele judecătorilor și grefierilor, numărul hotărârii, data, numărul dosarului, numerele interne de dosar și de client ale stației care evaluează, ponderile de text măsurate și analiza în engleză a hotărârii și a actelor ambelor părți, redactată de IA. A se vedea punctele următoare.
- **Registrul de părți la nivelul cabinetului.** De îndată ce o stație de lucru
este conectată la server, datele sale de bază privind părțile (cine este cine: nume,
identificatori, date de contact, relații, analiza de persoană) sunt **încărcate
automat** și oglindite pe toate celelalte stații de lucru ale aceluiași cabinet,
astfel încât fiecare avocat vede cu cine are deja de-a face cabinetul, iar cabinetul
obține o vedere de ansamblu asupra conflictelor de interese. Fiecare înregistrare are
exact un proprietar — utilizatorul care a adus-o primul; toți ceilalți utilizatori
dețin o copie numai pentru citire și pot trimite doar o **propunere de
modificare**, pe care proprietarul o acceptă sau o respinge în monitorul de date.
Dacă proprietarul nu poate fi contactat timp de 48 de ore, proprietatea trece la
utilizatorul care a făcut propunerea. **Conținutul dosarelor nu face parte din acest
registru** — documentele, cronologia, corespondența și atribuirile pe dosare rămân
guvernate de acțiunile explicite de partajare și de predare descrise aici. Schimbul
rămâne în interiorul cabinetului (un singur operator), nu părăsește niciodată rețeaua
locală și nu implică **niciun furnizor de IA**: detectarea dublurilor și
compararea câmpurilor rulează ca simplă logică de program pe stația de lucru
expeditoare; serverul doar stochează și transmite mai departe. Cabinetele ar trebui
să menționeze această partajare internă a datelor despre părți și a analizelor de
persoană în registrul activităților de prelucrare.
- **Evaluările hotărârilor judecătorești.** O evaluare se salvează doar la comanda expresă a utilizatorului; apoi, ca și registrul de părți, este **încărcată automat** și replicată pe fiecare stație de lucru a cabinetului. Fiecare stație ține propria evaluare pe hotărâre, pe care doar ea o poate modifica. Analiza descrie conținutul unei hotărâri și al actelor aferente — în această măsură conține **conținut de dosar** — și îi numește pe judecători și grefieri. Nu este implicat niciun furnizor de IA; schimbul rămâne în rețeaua locală a cabinetului. Cabinetele ar trebui să includă și această comunicare în registrul activităților de prelucrare.
- **Numai acțiuni deliberate — pentru conținutul dosarelor.** Conținutul
dosarelor ajunge la server exclusiv printr-o acțiune explicită de partajare sau de
predare confirmată de utilizator; textele bibliotecii juridice numai după ce
utilizatorul acceptă intrarea în monitorul de date; corespondența scanată primită
numai după ce funcționarul biroului a examinat documentul și a apăsat trimiterea
către un destinatar ales. Registrul de părți și evaluările salvate ale hotărârilor judecătorești sunt excepțiile deliberate: se sincronizează în fundal, fără confirmare pentru fiecare înregistrare.
Înregistrările de timp,
prezență, evenimente și rezervă sunt metadate operaționale create de însăși
funcționarea multi-utilizator și sunt vizibile administratorului cabinetului în
interfața web de administrare.
- **Calitatea de operator.** Cabinetul care operează serverul rămâne singurul
operator de date. Administratorul controlează aprobarea înregistrării, poate încheia
abonamente, șterge intrări din biblioteca juridică și dezinstala pachetul — ceea ce
lasă directorul de date al serverului sub controlul administratorului pe NAS.
- **Numele complete ale clienților în înregistrările de timp.** Prezentarea
generală a pontajului arată timpul de lucru per dosar și per client, ceea ce înseamnă
că numele clienților sunt stocate pe NAS. Acest lucru rămâne în interiorul
infrastructurii proprii a cabinetului și al regimului său de confidențialitate
existent — dar cabinetele ar trebui să includă NAS-ul în inventarul măsurilor lor
tehnice și organizatorice (control de acces pe DSM, criptarea volumului, politică de
rezervă), exact așa cum ar face pentru orice server de fișiere de birou.

## Anexă — Clauză-model pentru nota dvs. de informare a clienților (propunere)

Textul următor este o propunere de redactare pe care un cabinet de avocatură care
utilizează IRONSTICK o poate copia în propria notă de informare a clienților. Este
scris pentru a fi exact în raport cu fluxurile de date descrise mai sus — nu promite
mai multă protecție decât oferă efectiv software-ul. Evită în mod deliberat citările
de articole legale pentru a putea fi lipit în note de orice structură.

**Înainte de a lipi acest text — listă de verificare pentru
avocat:**
1. Asigurați-vă că acordul de prelucrare a datelor al **fiecărui** furnizor de IA
pe care l-ați configurat este în vigoare, numiți în clauză numai furnizorii pe care îi
folosiți efectiv și verificați propoziția despre antrenare și păstrare în raport cu
condițiile pe care le-ați semnat efectiv. Furnizorii de fundal gratuiți (Groq,
OpenRouter, Mistral, secțiunea 1) sunt acoperiți de clauză numai prin propoziția
opțională pusă acolo între paranteze — activați-i numai dacă condițiile lor
satisfac cerințele dvs. profesionale și ștergeți propoziția dacă nu îi
folosiți.
2. Păstrați propoziția din paranteze despre spațiul de lucru IA numai dacă folosiți
efectiv conectorul IA de desktop (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop
sau Kimi Desktop); în caz contrar, ștergeți-o.
3. Această clauză acoperă fluxurile din aplicație descrise în acest document. Ea
**nu** acoperă pachetul de instrucțiuni IA (secțiunea 5) — încărcarea acelui export
către orice serviciu IA este o decizie separată și va necesita în mod normal
consimțământul explicit al clientului.
4. Dacă ați dezactivat funcții IA individuale în configurator, scurtați lista de
scopuri în consecință — descrieți exact ceea ce folosiți, nimic mai mult.
5. Aceasta este o propunere de redactare, nu consiliere juridică. Faceți să fie
examinată în raport cu regulile profesionale ale baroului dvs. și cu practica locală
de protecție a datelor înainte de utilizare.

### Română

**Gestionarea dosarelor asistată de IA.** Cabinetul nostru utilizează
software-ul de gestiune a dosarelor IRONSTICK, care include funcții asistate de
inteligență artificială. Pentru aceste funcții, date selectate din dosarul
dumneavoastră pot fi transmise unui furnizor extern de servicii de IA (în
funcție de disponibilitate: Alibaba Cloud, Moonshot AI, OpenAI sau Anthropic, prin interfețele lor de programare), care le prelucrează în
numele nostru pe baza unui acord de prelucrare a datelor. Utilizăm aceste
funcții pentru: clasificarea și înregistrarea documentelor primite,
prioritizarea corespondenței electronice, verificarea coerenței datelor
noastre, redactarea și verificarea actelor juridice, precum și pentru analiză
și cercetare juridică. [Opțional — a se elimina dacă nu se utilizează: Pentru
sarcinile care rulează în fundal, precum prioritizarea corespondenței electronice,
verificarea datelor noastre și rezumatele, pot fi utilizate suplimentar serviciile
gratuite ale Groq, OpenRouter sau Mistral; condițiile acestora le-am verificat
înainte de activare.]

**Măsuri de protecție.** Înainte de orice transmitere, software-ul
înlocuiește, pe propriul nostru calculator, identificatorii direcți stocați în
sistem — nume, coduri numerice personale, numere de telefon, adrese de e-mail,
adrese poștale, numere de dosar și date bancare — cu marcaje neutre. Tabelul de
corespondență dintre marcaje și datele reale nu părăsește niciodată cabinetul;
răspunsurile furnizorului sunt retraduse local. Se transmite numai ceea ce este
necesar funcției respective, în limite fixe de volum. Câteva funcții necesită,
din motive tehnice, date reale — de exemplu cercetarea publică pe internet
privind numele unei persoane sau funcția de citire cu voce tare; le folosim
numai printr-o acțiune individuală deliberată. [Opțional — a se elimina dacă nu
se utilizează: Pentru redactarea actelor de procedură utilizăm suplimentar un
spațiu de lucru IA în care datele dosarului sunt prelucrate fără înlocuirea cu
marcaje; acest canal este folosit exclusiv sub supravegherea noastră
directă.]

**Furnizorul.** Potrivit condițiilor furnizorului aplicabile nouă,
conținutul transmis prin interfața de programare nu este utilizat pentru
antrenarea modelelor de IA și este păstrat doar pentru o perioadă limitată.
Prelucrarea poate avea loc în afara Spațiului Economic European; în acest caz,
transferul este protejat prin garanțiile convenite în acordul nostru de
prelucrare a datelor. Ceea ce furnizorul poate face cu datele este stabilit de
acest acord — nu de propria apreciere a IA.

**Alegerea dumneavoastră.** Secretul nostru profesional rămâne neatins:
dincolo de cele descrise aici, nicio dată nu părăsește cabinetul. Prelucrarea
se întemeiază pe mandatul pe care ni l-ați încredințat și pe interesul nostru
legitim într-o gestionare eficientă și riguroasă a dosarului. Vă puteți opune
oricând utilizării funcțiilor asistate de IA; în măsura posibilului, vom
gestiona atunci dosarul dumneavoastră fără acestea. Vă păstrați totodată toate
drepturile privind protecția datelor: acces, rectificare, ștergere și plângere
la autoritatea de supraveghere.

Această declarație a fost derivată din codul-sursă al aplicației
(pseudonimizatorul, routerul extern, jurnalul de audit și calea de transmitere a
fiecărei funcții) și reflectă comportamentul livrat al versiunii descrise.
Prelucrarea de către furnizorul de IA însuși — păstrare, utilizare pentru antrenare,
subîmputerniciți, jurisdicție — este guvernată exclusiv de condițiile furnizorului —
link-urile către condițiile și politica de confidențialitate ale fiecărui furnizor se
află în secțiunea corespunzătoare a configurației IA (Groq: groq.com/terms-of-use; OpenRouter: openrouter.ai/terms; Mistral: legal.mistral.ai/terms/commercial-terms-of-service; Alibaba Cloud: alibabacloud.com/help/en/legal; Moonshot AI:
platform.kimi.ai/docs/agreement; OpenAI: openai.com/policies). Pentru serviciile
Anthropic consultați, în versiunile lor curente: Condițiile comerciale de utilizare
a serviciului
([anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms)),
Politica de utilizare
([anthropic.com/legal/aup](https://www.anthropic.com/legal/aup)) și
Politica de confidențialitate
([anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy)).

##### Contact

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scanați codul pentru a salva cartea noastră de contact — telefon, e-mail și site.

Contactați direct prin WhatsApp sau Telegram — și un apel este binevenit. Limbi vorbite: germană, engleză, română.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Mesaj

### Interesat de IRONSTICK sau de o demonstrație? Scrieți-ne.
