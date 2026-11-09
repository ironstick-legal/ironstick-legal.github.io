# Compendii - Bridge

> Bridge-ul IRONSTICK pentru IA de desktop: conectați Claude, ChatGPT, Qwen sau Kimi Desktop la dosarele dumneavoastră — licențiere, instalare, porțile deterministe și catalogul complet de instrumente.

Pagina originală: https://www.ironstick.legal/bridge_ro.html

---

Bridge-ul IRONSTICK permite IA de desktop pe care o folosiți deja — Claude
Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop sau Kimi Desktop — să lucreze
direct pe dosarele dumneavoastră, local, pe același calculator și în spatele a
șaptesprezece măsuri de siguranță deterministe. Primul acces la date din fiecare
rulare a programului necesită consimțământul dumneavoastră, fiecare acces este
afișat în bara de meniu, iar modificările datelor de bază, ale cronicii, ale
calendarului și ale instrucțiunilor intră în vigoare numai după aprobarea
dumneavoastră. Acest compendiu cuprinde licențierea, raportul cu chatul IA
integrat în IRONSTICK, instalarea, afișarea accesului, măsurile de siguranță, cererile
tipice și catalogul complet al instrumentelor. Ediția Windows.

**Pe scurt**

- **Pentru** avocați și părți care se reprezintă singure, la un singur post de
lucru sau într-un cabinet conectat prin IRONSTICK SERVER, serverul de cabinet.
- **Local:** programul Bridge al IA de desktop și IRONSTICK comunică printr-o
conexiune protejată prin token, pe același calculator; doar instrumentele web și
de registre ajung pe internet.
- **Controlat:** consimțământ o dată la fiecare rulare a programului, un simbol
vizibil pentru fiecare acces, porți deterministe înainte de scrieri și livrări,
propuneri în loc de modificări tăcute.
- **Paneuropean:** căutările și comparațiile tratează diacriticele tuturor
celor unsprezece limbi ale interfeței; numerele de identificare naționale sunt
validate pentru nouă scheme din șapte țări.

## 1. Ce este Bridge-ul

Bridge-ul conectează **propria dumneavoastră IA de desktop** — Claude Desktop
(sau Claude Code), ChatGPT Desktop, Qwen Desktop sau Kimi Desktop — la
**aplicația client IRONSTICK în funcțiune** pe același calculator. IA citește
materialul dosarelor prin instrumente construite anume — cronici, texte integrale
de documente, e-mailuri, termene, date de bază — și lucrează cu el în profunzime:
analizează, verifică încrucișat și redactează. Conexiunea în sine este strict
locală; niciun server IRONSTICK nu este implicat în ea. Datele pe care le citește IA
sunt prelucrate sub **propriul dumneavoastră abonament la acel furnizor și sub
termenii lui**, așa cum se arată în [declarația de flux de date GDPR](https://www.ironstick.legal/gdpr_ro.html).

- Necesită aplicația de desktop respectivă, cu contul dumneavoastră propriu
(Anthropic, OpenAI, Qwen sau Kimi).
- Aveți controlul: închiderea IRONSTICK închide imediat sursa de date.
- Acest canal transmite **date reale, nepseudonimizate, în mod deliberat**;
exact asta face posibilă redactarea de șabloane gata de depunere.
- Documentele marcate **secret** sunt invizibile pentru Bridge.
- **Memoria IA** între conversații este construită pentru procese de lungă
durată: intrările legate de un dosar nu se șterg niciodată automat; intrările fără
dosar se șterg după un an fără folosire, iar fiecare folosire reînnoiește acel
an.
- Accesul de scriere este deliberat îngust. Modificările datelor de bază, ale
cronicii, ale calendarului, ale memoriei, ale textelor integrale și ale bibliotecii
de legi intră în vigoare numai după ce le aprobați, într-un formular sau dialog
IRONSTICK ori în Monitorul de consistență a datelor. Fără un asemenea dialog, IA scrie
numai în zonele ei proprii de lucru (spațiul de lucru criptat, jurnalul zilnic la
cererea dumneavoastră, propria evaluare a dosarului după verificările deterministe)
și notițe pe panoul unui dosar partajat prin IRONSTICK SERVER; etichetele și mesajele în
chatul cabinetului necesită confirmarea dumneavoastră în chat. Ciornele ajung în
procesorul de text.

Fiecare IA de desktop are propriul program Bridge mic; toate se
conectează la același punct final local din aplicația IRONSTICK în funcțiune. Toate
cele patru IA de desktop primesc aceleași instrumente și aceleași porți. IA pot
rula **în același timp** și lucra în paralel la același dosar; fiecare este
afișată cu propriul logo în bara de meniu.
## 1b. De ce Bridge-ul?

**Fiindcă Bridge-ul lucrează pe abonamentul pe care îl aveți deja.** O IA de
desktop rulează prin aplicația de desktop a furnizorului și contul dumneavoastră
de acolo; abonamentul este taxa lunară forfetară a furnizorului, iar fiecare
dialog, fiecare citire de text integral și fiecare rundă de ciornă sunt acoperite
de ea. Aceeași muncă în chatul integrat în IRONSTICK rulează pe cheia dumneavoastră
de API, iar accesul prin API este facturat de furnizor în funcție de utilizare.

Bridge-ul este de aceea calea preferată pentru dialogurile lungi cu IA și pentru
orice muncă în care documente sau volume mai mari de date se gestionează prin IA:
citirea unor dosare întregi, menținerea la zi a cronicilor, a jurnalelor zilnice
și a intrărilor de memorie, parcurgerea a sute de anexe — muncă al cărei volum
este acoperit de taxa forfetară, în loc să fie facturat per utilizare.

 [Figure: Două căi către IA: cheie API facturată în funcție de utilizare sau Bridge-ul cu aplicația de desktop a furnizorului și abonamentul ei]
**Numai la Claude Desktop / Claude Code**

- **Fiecare chat este urmărit separat.** IRONSTICK deosebește chaturile din
Claude Desktop. Blocajul instrucțiunilor, evidența citirilor, starea pregătirii,
verificările părților și urmărirea livrărilor se țin **pe fiecare chat**; ce a
citit un chat nu contează niciodată pentru altul. În meniul derulant de la
simbolul Claude, fiecare chat apare sub numele pe care i l-ați dat în Claude
Desktop. Pentru aceasta, IRONSTICK citește din jurnalul local de sesiune al lui Claude
numai evenimentele structurate ale instrumentelor (numele instrumentului și
argumentele), niciodată textul conversației. Un apel care nu poate fi atribuit,
fiindcă două chaturi apelează exact în același moment, este acceptat dacă un chat
al acestui Claude are o confirmare valabilă și nu se înregistrează ca încălcare de
regulă.
- **Compactarea contextului este detectată.** Când Claude compactează o
conversație lungă, instrucțiunile citite anterior nu mai sunt sigur în contextul
său. IRONSTICK blochează imediat acel chat, fără sancțiune, până când recitește
instrucțiunile și redă cuvânt cu cuvânt o regulă aleasă la întâmplare; apoi
continuă de unde rămăsese.
- **Accesul în afara conectorului este detectat.** Dacă un chat accesează
dosarul de date IRONSTICK cu instrumentele proprii de fișiere ale lui Claude (citire,
căutare, shell, editare) în loc de conector, faptul se înregistrează ca încălcare
de regulă pentru acel chat și se raportează la următorul său apel prin
conector.
- **Limită extinsă a conectorului.** Claude Desktop primește rezultate de până
la 40.000 de caractere direct în răspuns, de patru ori limita standard (10.000
pentru Qwen, Kimi și chatul integrat); tot ce depășește merge întreg în spațiul
de lucru.
- **Răspunsuri în 45 de secunde.** Fiindcă Claude Desktop întrerupe apelurile
de instrument după 60 de secunde, paginile web sunt returnate în 45 de secunde
(limita se aplică fiecărei IA de desktop). Documentele mari sau scanate continuă
să fie prelucrate în fundal și sunt livrate la următorul apel cu aceeași
adresă.
- **Verificarea părților cu anticipare.** Cât timp Claude lucrează la o parte,
poate numi dinainte până la alte două părți; IRONSTICK le caută în fundal, iar
următoarea verificare răspunde imediat. Rezultatele se păstrează 30 de minute;
ordinea porții rămâne neschimbată, iar următoarea parte se deschide abia când
cea curentă este încheiată.

**Numai la ChatGPT Desktop**

- **Limită extinsă a conectorului.** ChatGPT Desktop primește rezultate de până
la 40.000 de caractere direct în răspuns, de patru ori limita standard (10.000
pentru Qwen, Kimi și chatul integrat); tot ce depășește merge întreg în spațiul
de lucru.
- **Verificarea părților cu anticipare.** Cât timp ChatGPT lucrează la o parte,
poate numi dinainte până la alte două părți; IRONSTICK le caută în fundal, iar
următoarea verificare răspunde imediat. Rezultatele se păstrează 30 de minute;
ordinea porții rămâne neschimbată.

## 1c. Licențiere — patru Bridge-uri sau pachetul

Fiecare Bridge pentru o IA de desktop este un **modul suplimentar licențiat
separat**:

| Bridge | Conectează | Licență |
| --- | --- | --- |
| **Claude Desktop Bridge** | Claude Desktop / Claude Code (Anthropic) | Modul separat |
| **ChatGPT Desktop Bridge** | ChatGPT Desktop (OpenAI) | Modul separat |
| **Qwen Desktop Bridge** | Qwen Desktop | Modul separat |
| **Kimi Desktop Bridge** | Kimi Desktop (Moonshot AI) | Modul separat |
| **Pachetul de Bridge-uri** | Toate cele patru de mai sus | Cele patru module împreună |

- Fiecare Bridge se deblochează în **cheia de licență semnată a aplicației client**; nu există o cheie separată pentru Bridge. Se activează doar Bridge-urile licențiate; un Bridge
nelicențiat nu se instalează și nu apare în configurare.
- Puteți licenția **un singur Bridge** (doar IA de desktop pe care o folosiți)
sau **pachetul tuturor celor patru**, și puteți adăuga altele ulterior.
- Bridge-urile licențiate pot rula **în paralel**; mai multe IA de desktop pot
lucra deodată la același dosar.

 [Figure: Aplicația client IRONSTICK plus pachetul de Bridge-uri: câte un program Bridge licențiat pentru fiecare IA de desktop]
Prețurile pentru Bridge-urile individuale și pentru pachet:
[Prețuri](https://www.ironstick.legal/pricing_ro.html).
## 1d. Chatul IA integrat în IRONSTICK — același model, fără licență suplimentară

IRONSTICK are și un **chat IA propriu integrat**. El rulează pe **același strat
de lucru ca Bridge-ul**: aceleași instrumente, aceleași porți, aceeași
întemeiere și aceeași redactare gata de depunere.

- **Fără licență suplimentară.** Chatul integrat face parte din IRONSTICK; nu are
nevoie de un modul Bridge.
- **Rulează pe API-ul furnizorilor** (propria cheie de API), pe care furnizorul
îl facturează în funcție de utilizare, în timp ce Bridge-ul lucrează prin
aplicația de desktop proprie a furnizorului, pe taxa lunară forfetară a
abonamentului dumneavoastră.
- În schimb, calea API este **mai strâns controlată**: datele sunt
pseudonimizate de router, apelurile interactive cer consimțământul dumneavoastră,
fiecare apel este înscris în jurnalul de audit și se aplică plafoane de dimensiune,
pe lângă aceleași porți ca la Bridge.

 [Figure: Chatul IA integrat: aplicația client IRONSTICK cu cheia API a furnizorului]
**Pe scurt:** Bridge-ul (aplicație de desktop, abonament lunar
forfetar) se potrivește muncii zilnice grele, conduse de documente; chatul integrat
(API facturat în funcție de utilizare, fără licență suplimentară) este mereu
disponibil și mai strâns controlat.
## 2. Instalare (oricare dintre cele patru)

 [Figure: Configurare → Configurare IA: secțiunea Claude Desktop cu ambele comutatoare, butonul de configurare și butonul pentru pluginul de skill.]

Configurare → Configurare IA: secțiunea Claude Desktop cu ambele comutatoare, butonul de configurare și butonul pentru pluginul de skill.

Procedura este aceeași pentru fiecare IA de desktop; diferă doar sursa de
descărcare și butonul de configurare.

1. Instalați aplicația de desktop, autentificați-vă cu contul dumneavoastră și
porniți-o o dată.
2. În IRONSTICK deschideți **Configurare → Configurare IA → IA cu server MCP
local (STDIO)**.
3. Activați **„Permite accesul conectorului de la Claude Desktop"** (comutatorul
principal al întregului canal).
4. Opțional, activați **„Permite navigarea de către Claude Desktop"**, dacă IA
poate și să dirijeze aplicația: să deschidă ecrane, dosare și documente și să
exporte fișiere. Citirea funcționează și fără.
5. Apăsați butonul potrivit **„Configurează … Desktop"**. Pentru Claude, ChatGPT
și Kimi, un singur clic scrie și înregistrează configurarea. Pentru Qwen Desktop,
IRONSTICK copiază textul de configurare în clipboard, iar dumneavoastră îl lipiți în
dialogul „Add MCP" al lui Qwen.
6. Începeți o **conversație nouă** sau folosiți **butonul de repornire** din
aceeași secțiune, care închide și repornește aplicațiile IA de desktop licențiate,
astfel încât să se reconecteze la IRONSTICK. IRONSTICK apare apoi printre
conectorii IA, iar instrumentele sale sunt disponibile în fiecare conversație.

| IA de desktop | Descărcare / autentificare | Buton de configurare |
| --- | --- | --- |
| **Claude Desktop / Claude Code** | claude.ai/download — cont Anthropic | „Configurează Claude Desktop"; un buton separat creează pluginul de skill, pe care îl adăugați în Claude Desktop |
| **ChatGPT Desktop** | openai.com/chatgpt/download — cont OpenAI | „Configurează ChatGPT Desktop"; un buton separat creează pluginul de skill, pe care îl adăugați în ChatGPT Desktop |
| **Qwen Desktop** | Qwen Desktop (Windows) — cont Qwen | „Configurează Qwen Desktop" (copiază textul de configurare pentru dialogul „Add MCP" al lui Qwen) |
| **Kimi Desktop** | kimi.ai — cont Kimi | „Configurează Kimi Desktop" |

Ecranul de configurare oferă linkurile de descărcare și linkurile către termenii
de utilizare și politica de confidențialitate ale fiecărui furnizor.

**Configurare într-un singur pas.** Pentru Claude, ChatGPT și
Kimi, un singur clic pe butonul de configurare din ecranul de configurare al
aplicației client scrie și înregistrează configurarea completă; niciun fișier de
configurare nu trebuie editat manual. Pentru Qwen Desktop, o singură lipire în
dialogul propriu al lui Qwen o încheie. **Butonul de repornire** închide și repornește
aplicațiile IA de desktop licențiate, astfel încât să se reconecteze la
IRONSTICK.
## 3. Cum se afișează accesul IA în bara de meniu

 [Figure: Bara de meniu în timpul unui acces prin Bridge — simbolul Claude apare lângă afișajul CPU/RAM.]

Bara de meniu în timpul unui acces prin Bridge — simbolul Claude apare lângă afișajul CPU/RAM.

- **Întâi consimțământul.** Primul acces la date al oricărei IA de desktop
într-o rulare a programului deschide un singur dialog de consimțământ. Acceptarea
deschide accesul pentru toate IA de desktop pentru restul rulării; refuzul le
blochează pe toate timp de 10 minute.
- **Un logo pentru fiecare IA** apare în bara de sus lângă afișajul CPU/RAM
**la fiecare apel de instrument** și rămâne aprins 3 secunde după ultimul
apel; seriile rapide de apeluri îl țin aprins continuu. Dacă simbolul e stins, nu
se citește nimic. Fiecare IA are semnul ei: steaua portocalie Claude, nodul verde
OpenAI, simbolul violet Qwen și „K"-ul petrol Kimi.
 [Figure: Prim-plan: simbolul Claude se aprinde la fiecare apel de instrument și rămâne vizibil 3 secunde după ultimul apel.]

Prim-plan: simbolul Claude se aprinde la fiecare apel de instrument și rămâne vizibil 3 secunde după ultimul apel.

- **Meniul derulant de la simbolul IA** arată ce a citit acea IA în sesiune:
linia „instrucțiune de lucru + interdicția halucinației" (bifă verde cât e
valabilă, cruce roșie după expirare), apoi, pentru fiecare dosar, indicatoarele
profil, jurisdicție și digest plus o bară „documente citite *r* din *n*".
- **Simbolul creier** apare imediat ce memoria IA partajată are intrări și
pulsează 3 secunde ori de câte ori un canal IA o citește sau o scrie. Un clic
deschide dialogul de gestionare. IA poate propune stocarea, modificarea sau
ștergerea unei intrări de memorie; fiecare modificare intră în vigoare numai după
aprobarea dumneavoastră. Notițele dumneavoastră proprii sunt doar în citire pentru
IA.
- **Navigarea** de către IA (deschiderea de ecrane, dosare sau documente) are
loc doar dacă comutatorul ei e activat; altfel instrumentele de navigare sunt
refuzate.
- **Acces paralel:** când mai multe IA licențiate lucrează în același timp,
bara de sus arată **un logo pentru fiecare IA activă** unul lângă altul; fiecare
acces este atribuit IA care l-a făcut.
- **Procese de fundal:** indicatorul de performanță listează toate procesele de
fundal în curs, inclusiv fiecare apel de instrument al chatului integrat.

## 4. Șaptesprezece măsuri de siguranță deterministe împotriva halucinației și a erorilor de date

IRONSTICK își impune regulile de lucru structural. Șaptesprezece porți deterministe (logică pură, fără
IA) stau între model și înregistrările dumneavoastră. În catalogul de instrumente,
o insignă albastră precum Poarta 1 · Data numește poarta care asigură un
instrument.

| Poartă | Previne | Cum funcționează |
| --- | --- | --- |
| **1. Poarta datei** | Date greșite luate din perioada de instruire a modelului în loc de data reală. | Orice instrument care scrie în IRONSTICK este refuzat dacă IA nu a preluat data și ora reale, verificate prin NTP, în ultimele 30 de minute. Intervalul se ține separat pentru fiecare IA și este deliberat scurt. |
| **2. Poarta legilor** | Text de lege inventat sau reținut greșit. | Accesul web pentru legi este refuzat până când a fost consultată biblioteca de legi locală verificată; sursele de legi găsite online trebuie raportate și intră în bibliotecă numai prin dialogul dumneavoastră de consimțământ. |
| **3. Poarta de verificare a actului de procedură** | Referințe de dosar inventate, sume care diferă, nume de părți greșite, citări neverificate într-un act de procedură. | Verificarea deterministă pe opt clase a actelor de procedură: livrarea unui document formal este blocată fără o verificare pozitivă curentă pentru starea exactă a fișierului; după cinci rulări eșuate procesul se oprește, iar dumneavoastră sunteți notificat. |
| **4. Garda acoperirii citirii** | Afirmații că s-a citit totul, deși fișierele au fost citite doar în parte. | Urmărire exactă, rând cu rând, a ceea ce s-a citit efectiv, păstrată peste reporniri; intervalele necitite sunt listate în fiecare răspuns, livrarea rămâne blocată cât timp există goluri, iar ștergerea sau suprascrierea fișierelor-sursă necitite este refuzată. |
| **5. Blocajul navigării** | Pierderea lucrului nesalvat printr-o schimbare de ecran declanșată de IA. | Cât timp un formular de înregistrare sau editorul de text este deschis, fiecare apel de navigare și de export este refuzat. |
| **6. Poarta omului în buclă** | Modificări tăcute ale IA în datele de bază, cronică, calendar sau instrucțiuni. | Modificările IA ajung ca propuneri: Monitorul de consistență a datelor, dialoguri de comparare roșu/verde, dialoguri de confirmare; nimic nu se aplică fără aprobarea dumneavoastră. |
| **7. Detectorul de conținut formal** | Scrisori sau acte de procedură formale declarate „informale” pentru a ocoli formatarea și verificarea. | O scanare deterministă a conținutului (formule de adresare și de încheiere în șase limbi, bloc de destinatar, marcatori juridici, bloc de identitate) respinge declarația de caracter informal; un asemenea conținut nu are cale de livrare informală, iar încercarea este înregistrată. |
| **8. Garda seriei de versiuni** | Resetarea contorului de versiuni prin redenumirea fișierului („…\_v05” devenind pe tăcute „NumeNou\_v01”). | O primă livrare sub un nume nou de fișier este refuzată cât timp există o serie versionată cu același număr de dosar; IA trebuie să continue seria sau să declare explicit un document cu adevărat diferit, lucru care se înregistrează. |
| **9. Registrul citirii legilor** | Conținut de lege luat din articole de presă, rezumate web sau din memoria modelului, în loc de textul legii. | Fiecare citire din bibliotecă se înregistrează pe fiecare rulare a programului (fișierul-sursă și numerele de articole returnate efectiv). Un articol citat fără o asemenea înregistrare pică verificarea; și subreferințele citate (alineat, punct) sunt verificate ca existență. |
| **10. Ancora dosarului** | Context de dosar inventat din amintirea unui *alt* dosar (contaminare între dosare). | Fiecare răspuns de instrument care privește un dosar poartă numărul înregistrat al dosarului, clientul și obiectul, din înregistrări, astfel încât orice context inventat apare lângă datele înregistrate și este imediat demascat. |
| **11. Blocajul accesului la instrucțiuni** | O IA care lucrează fără să fi citit regulile de lucru. | În afara citirii instrucțiunilor, a confirmării lor și a citirii limbii sistemului, fiecare instrument este refuzat până când IA a citit instrucțiunile și a redat cuvânt cu cuvânt regula 5 (interdicția halucinației). Confirmarea expiră la 60 de minute după ce a fost dată, după 2 ore fără apel, la miezul nopții, la fiecare reconectare și după ce IA de desktop își compactează contextul; IA trebuie atunci să recitească instrucțiunile și să redea o regulă aleasă la întâmplare. Meniul derulant de la simbolul IA arată starea în verde sau în roșu. |
| **12. Poarta pregătirii** | Notițe, intrări de jurnal sau acte de procedură pe un dosar pe care IA nu l-a citit. | Două niveluri, înregistrate pentru fiecare IA și păstrate peste reporniri: o notiță cere ca profilul, jurisdicția, digestul fiecărui document (digestul slujește drept cronică) și cele cinci documente cele mai noi să fi fost citite; un act de procedură, o predare sau un export cer în plus ca fiecare document pe care îl citează sau îl anexează să fi fost citit integral. O citire rămâne valabilă 3 zile sau până la următorul document primit în dosar. |
| **13. Registrul de citire legat de document** | Anexe și referințe „citite” cu ore în urmă sau pentru un alt document. | O citire a textului integral contează 2 ore; fiecare livrare a aceluiași document (orice versiune) prelungește cu 2 ore documentele sale citate; verificarea sau livrarea unui alt document resetează citirile anexelor, iar IA citește anexele acelui document din nou. |
| **14. Poarta citirii analizei** | „Fapte” neverificate introduse în descrierea sau în câmpurile de contact ale unei persoane. | O propunere care atinge câmpurile de text liber ale unei persoane este refuzată dacă IA nu a citit profilul acelei persoane în ultimele 30 de minute. |
| **15. Poarta digestului** | Conținut de dosar adunat bucată cu bucată (căutări, cronologii, texte integrale, termene) pe un dosar al cărui digest IA nu l-a citit. | Fiecare instrument de conținut de dosar (cronică, cronologie, căutări, texte integrale, contradicții, obligații, termene, corespondență, media, instituții, etichete, evaluare, note de instrucțiuni) este refuzat până când digestul dosarului a fost citit; refuzul numește apelul de pregătire. A treia încercare refuzată pe același dosar se înregistrează ca încălcare de regulă. |
| **16. Poarta părților asemănătoare** | Persoane, societăți sau instituții duplicate, create fiindcă o variantă de scriere nu a fost recunoscută. | O propunere pentru o înregistrare nouă primește ca răspuns o listă de înregistrări existente asemănătoare, și nu se stochează nimic. IA trebuie fie să încadreze propunerea la o înregistrare existentă, fie să confirme explicit că partea este cu adevărat nouă. Fiecare parte nouă stocată declanșează urmarea obligatorie: cercetarea și înregistrarea legăturilor ei, inclusiv cercetare web. |
| **17. Blocajul repetițiilor** | Preluarea repetată a acelorași date, care costă timp și tokeni fără să aducă informație nouă. | Un apel care returnează exact același conținut ca unul anterior este refuzat. Se compară conținutul, nu apelul, deci un parametru diferit care dă același rezultat este refuzat și el. Blocajul se resetează când a fost livrat sau prezentat un alt document, când programul IA se reconectează, când IA a făcut între timp o altă sarcină sau când IA a recitit și a confirmat instrucțiunile. La Claude blocajul se aplică pe fiecare chat; la ChatGPT, Qwen și Kimi, pe toate sesiunile; chatul integrat este exceptat. |

## 5. Ce faceți cu el — exemple

Vorbiți cu IA de desktop (sau cu chatul integrat) în limbaj obișnuit; își alege
singură instrumentele potrivite. Cereri tipice:

**„Ce s-a întâmplat în dosarul [număr de dosar]? Rezumă situația
actuală și ce urmează."**
IA identifică dosarul, citește tot dosarul pe
secțiuni și citește termenele, apoi livrează un rezumat cu referințe la
documente.
**„Redactează răspunsul la solicitarea instanței de săptămâna
trecută, în formatul nostru de act, și predă-l procesorului de text."**
IA
găsește solicitarea, îi citește textul integral, încarcă formatul de ieșire și
redactează; ciorna apare în procesorul de text al IRONSTICK, gata de revizia
dumneavoastră și de tipărirea pe antetul dumneavoastră.
**„Cine ce a spus despre cercetarea la fața locului și se contrazic
declarațiile?"**
Căutare de declarații și detector de contradicții în tot
dosarul.
**„Verifică numerele de TVA și LEI ale adversarului."**
Verificări
live în serviciul UE VIES și în registrul global LEI.
**„Construiește o cronologie a litigiului și enumeră care dintre
anexele noastre au fost deja depuse la instanță."**
Cronologia dosarului plus
liste de documente depuse și expediate, cu numere de înregistrare.
**„Au fost e-mailuri despre expertiză? Ce era atașat?"**
Căutare
de e-mail cu expeditor, subiect, atașamente și, la cerere, textul mesajului.
**„Deschide-mi dosarul și exportă cele două contracte ca
PDF."**
Cu navigarea activată, IA deschide ecranele și livrează
fișierele.
**„Ține minte pentru data viitoare: avocatul adversarului depune
mereu târziu vinerea."**
Propus pentru memoria IA partajată (legată de client,
cu dimensiune limitată); după ce îl aprobați, este disponibil oricărei sesiuni
viitoare, iar dumneavoastră îl puteți revizui și șterge oricând.
**„Ciorna e gata. Dă-o altei IA la verificare: citește-o, găsește
punctele slabe și contraargumentele, evaluează."**
IA predă actul prin
IRONSTICK; un alt model, cu altă instruire, îl verifică critic, iar evaluarea lui
revine la dumneavoastră. O a doua opinie reală pe aceleași date de dosar.
**„Înregistrează munca de azi în jurnalul zilnic."**
E-mailurile
trimise, actele redactate, argumentele elaborate și deciziile se scriu în jurnalul
zilnic de azi; la următoarea sesiune IA se pune la curent din ultimele
intrări.
## 6. Catalogul de instrumente

Acestea sunt instrumentele pe care le oferă Bridge-ul — aceleași pentru fiecare
IA de desktop conectată și pentru chatul integrat. Fiecare rând indică întâi funcția
în limbaj obișnuit, apoi numele tehnic al instrumentului, așa cum îl vede IA. Unele
nume tehnice provin din termeni germani sau românești (de exemplu
`tagesprotokoll` = jurnal zilnic, `fristen` = termene,
`kalender` = calendar, `ki` = IA, `sachverhalte`
= cauze comune, `anexe` = anexe); descrierea indică funcția.

Toate instrumentele sunt doar de citire, în afară de cazul în care descrierea spune
că scriu sau deschid un formular. Insigne: Poarta 1 · Data numește măsura
de siguranță din tabelul celor șaptesprezece porți; Revizie
înseamnă că nimic nu se schimbă până nu aprobați în Monitorul de consistență a
datelor sau într-un dialog ori formular IRONSTICK; Confirmare
înseamnă că instrumentul acționează numai după confirmarea dumneavoastră
explicită.

### Context de sesiune și navigare

| Funcție | Nume tehnic |
| --- | --- |
| **Pornirea completă a sesiunii.** Rulează într-un singur apel pornirea completă a sesiunii (data, limba sistemului, contextul curent, briefingul zilnic, termenele, programările, sarcinile de verificare reciprocă deschise) și o scrie într-un singur fișier din spațiul de lucru. La prima pornire de sesiune a zilei, IA întreabă mai întâi despre hotărârile judecătorești încă neevaluate. | `session_start_to_scratch` |
| **Ecranul curent.** Unde se află utilizatorul: ecran, breadcrumb, client sau dosar deschis. | `read_current_context` |
| **Limba sistemului** instalației. | `read_system_language` |
| **Data și ora curente** (verificate prin NTP), pentru calculul termenelor. | `get_datetime` Poarta 1 · Data |
| **Instrucțiuni.** Recitește în orice moment instrucțiunile complete și actuale ale conectorului. | `read_instructions` |
| **Confirmarea instrucțiunilor.** Deblochează conectorul după ce IA a citit instrucțiunile și a redat cuvânt cu cuvânt regula 5 (interdicția halucinației). Confirmarea expiră după 60 de minute, după 2 ore fără apel, la miezul nopții, la reconectare și după compactarea contextului; IA recitește atunci instrucțiunile și redă o regulă aleasă la întâmplare. | `confirm_instructions` Poarta 11 · Blocajul instrucțiunilor |
| **Manualul utilizatorului.** Returnează secțiunile de manual care corespund unor cuvinte-cheie în engleză; IA le explică în limba dialogului. Manualul se păstrează criptat și doar în citire în spațiul de lucru, unde IA îl poate și căuta. Fiecare secțiune cuprinde indicații de operare, cereri sugerate și fluxul de lucru. | `user_help_request` |
| **Briefingul de dimineață.** Briefingul structurat de azi, cu ID-uri de documente, numere de dosar și marcaje: termene, ședințe de judecată, e-mailuri necitite, documente nou înregistrate, dosare cu activitate sporită. | `get_dailybriefing` |
| **Deschiderea unui ecran** din aplicație (necesită comutatorul de navigare). | `open_screen` Poarta 5 · Navigare |
| **Deschiderea unei înregistrări:** un anumit dosar, client, persoană, instituție sau document (comutatorul de navigare). | `open_case` / `open_client` / `open_person` / `open_institution` / `open_evidence` |
| **Deschiderea unei zone de lucru:** asistentul de dosar (dossier), eventual pregătit complet; căutarea globală; monitorul de e-mail (primite sau trimise, eventual un anumit mesaj); jurnalul zilnic (o anumită zi); sau ecranul de backup. Pornirea unui backup necesită confirmare (comutatorul de navigare). | `open_dossier` / `open_search` / `open_emailmonitor` / `open_tagesprotokoll` / `open_backup` |
| **Deschiderea unui termen** în ecranul de termene, evidențiat (comutatorul de navigare). | `open_deadline` |
| **Deschiderea unui formular:** formularele de înregistrare sau de editare pentru client, dosar, persoană sau societate și instituție, ecranul de atribuire a dosarelor sau căsuța și formularul de înregistrare a documentelor. IA deschide și preia datele; utilizatorul salvează (comutatorul de navigare). | `open_new_client` / `open_new_case` / `open_new_person` / `open_new_institution` / `open_assign` / `open_capture` Revizie |
| **Înregistrarea unei surse de lege:** deschide ecranul de legi cu dialogul de înregistrare deschis și URL-ul completat; utilizatorul confirmă (comutatorul de navigare). | `open_new_legal_source` Revizie |
| **Preluarea imediată a e-mailurilor:** preia și triază e-mailurile noi, ca butonul de preluare. | `fetch_mails` |
| **Pornirea unei evaluări IA a dosarului**, după confirmare cu o notă de cost. | `request_case_assessment` Confirmare |
| **Trimiterea unui mesaj în chatul cabinetului** din IRONSTICK SERVER, în numele utilizatorului, după confirmarea textului exact. | `send_server_chat` Confirmare |
| **Gestionarea etichetelor:** listarea, adăugarea, editarea sau eliminarea etichetelor colorate ale unei intrări; fiecare modificare necesită confirmare. | `manage_tag` Confirmare |
| **Repornirea IA de desktop** pentru o conectare nouă, după confirmarea dumneavoastră. | `recycle_desktop_ai` Confirmare |

### Găsirea înregistrării potrivite

| Funcție | Nume tehnic |
| --- | --- |
| **Listele de clienți și de dosare**, complete. | `list_all_clients` / `list_all_cases` |
| **Găsirea unui dosar după număr** (și parțial). | `resolve_case_by_number` |
| **Găsirea unui client, a unei persoane sau a unei instituții după nume** (aproximativ, tolerant la diacritice). | `resolve_client_by_name` / `resolve_person_by_name` / `resolve_institution_by_name` |
| **Dosarele în care apare o anumită parte.** | `find_case_by_party` |
| **Găsirea părților după cuvânt-cheie:** persoane și instituții al căror nume, notițe sau câmpuri de analiză conțin un cuvânt-cheie; punctul de pornire când se cunoaște doar un fragment. | `find_party_by_keyword` |
| **Dosare cu activitate sporită** (temperatură), cu client și număr de dosar. | `read_hot_cases` |
| **Înregistrat azi sau ieri:** tot ce s-a înregistrat în acea zi la toți clienții și dosarele, ca listă de ID-uri de documente cu ora, clientul, dosarul și titlul. | `get_all_fromtoday` / `get_all_fromyesterday` |

### Citirea unui dosar

| Funcție | Nume tehnic |
| --- | --- |
| **Dosarul complet:** cronica cu texte integrale. La dosarele mari, primul apel raportează mărimea și oferă căutări țintite sau livrarea în spațiul de lucru. | `read_full_case` Poarta 4 · Acoperirea citirii |
| **Textul integral al dosarului în spațiul de lucru:** cea mai rapidă citire completă a unui dosar mare. Asamblează textul complet al dosarului fără trunchiere, curăță artefactele OCR și îl scrie direct în spațiul de lucru; IA primește doar trimiterea la fișier și îl citește apoi pe secțiuni. Domeniu: toate documentele, cele primite sau cele emise, ori documente alese — calea de a citi integral un document de 300.000 de caractere. | `dump_case_to_scratch` Poarta 4 · Acoperirea citirii |
| **Pregătirea dosarului:** într-un singur apel, profilul și jurisdicția dosarului plus digestul fiecărui document (ID, dată, tip, titlu, rezumatul de înregistrare, trimiteri încrucișate, mărimea textului); digestul slujește drept cronică. Răspunsul indică unde se află profilul și digestul (în răspuns la dosarele mici, altfel în fișiere din spațiul de lucru care trebuie citite integral) și numește cele cinci documente cele mai noi de citit integral. Satisface poarta pregătirii; documentele șterse și cele secrete sunt excluse. | `prepare_case` Poarta 12 · Pregătire |
| **Ultimele intrări din cronică:** o privire rapidă; nu contează pentru pregătire. | `read_chronik` |
| **Dosare și cauze comune înrudite:** dosare părinte, copil și din același grup; cauzele comune ale unui client, așa cum le grupează harta Univers; cele mai strâns conectate dosare. | `read_case_links` / `read_case_cliques` / `read_top_connected_cases` |
| **Orientare rapidă în dosar:** toate câmpurile filelor dosarului și clientului, plus ID-urile celor mai recente 15 documente, cu datele de intrare. | `short_case_briefing` |
| **Dosarele unui client**; dosarele legate de cel curent. | `read_client_cases` / `read_related_cases` |
| **Toate cauzele comune ale unui client** într-un singur apel, fiecare cu dosarele sale (număr de dosar, titlu, stare, dosar părinte); dosarele negrupate sunt listate separat. | `list_sachverhalte` |
| **Instanțele și autoritățile** implicate într-un dosar, cu adrese. | `read_case_institutions` |
| **Jurisdicția dosarului**, care determină limba documentelor. | `read_case_jurisdiction` |
| **Evaluarea IA stocată** a dosarului. | `read_assessment` |
| **Cronologia dosarului:** toate evenimentele dosarului în ordine cronologică. | `build_case_timeline` |
| **Lista de anexe a unui act de procedură:** probele pe care le conține, fiecare cu ștampila sa de înregistrare. | `evidence_anexelist` |
| **Lanțul numerelor de înregistrare:** urmărește un număr de registru sau de scrisoare de-a lungul documentelor. | `briefnummer_chain` |
| **Folosirea unui document:** unde a fost folosit sau menționat un document. | `evidence_usage` |
| **Probe depuse la instanță**, cu numere. | `list_submitted_evidence` |
| **Corespondența:** toate documentele primite sau emise ale unui dosar (eventual de la o anumită dată), ca listă de ID-uri de documente. | `list_correspondence` |
| **Ștampila (ștampilele) de înregistrare** ale unui document. | `evidenceidtoisstamp` |
| **Obligațiile procedurale deschise** ale unui dosar, cu descrieri și marcaje de depășire sau urgență. | `list_open_obligations` |

### Documente și căutare de pasaje

| Funcție | Nume tehnic |
| --- | --- |
| **Textul integral al unui document** (și, dacă există, textul de chat sau de transcriere); până la 12 documente per apel. Peste limita conectorului, textul merge întreg în spațiul de lucru și contează ca citit abia după ce fișierul a fost citit complet. | `evidence_readfull` Poarta 4 · Acoperirea citirii |
| **Intrări media** (fotografii, înregistrări): metadate, locație, transcrieri. | `read_media` |
| **Căutarea documentelor** după cuvânt-cheie sau perioadă. La primul apel, căutarea după cuvânt-cheie întreabă ce se caută, domeniul și forma răspunsului. | `search_evidence_by_keyword` / `search_evidence_by_time` Poarta 15 · Digest |
| **Căutarea de pasaje** în tot dosarul (tolerantă la OCR), cu returnarea pasajelor potrivite. | `search_passages` |
| **Documentele provenite de la o parte.** | `find_documents_from_party` |
| **Candidate la contradicții** între documente și declarații. | `find_contradictions` |
| **Declarațiile fiecărui vorbitor** pe o temă. | `who_said_what` |
| **Cine cu cine a comunicat** și când. | `who_with_whom` |

### Judecători și hotărâri judecătorești

Cinci instrumente deterministe (fără IA) pentru o singură întrebare: cum hotărăște
un judecător sau un procuror — la ce argumente din memorii se oprește, pe care le
trece cu vederea și cât de previzibile sunt hotărârile lui? Instrumentele localizează
și măsoară; IA citește și evaluează hotărârile pe baza textelor integrale. Doar documentele primite de la o instanță sau de la un parchet contează ca
hotărâri.

| Funcție | Nume tehnic |
| --- | --- |
| **Hotărâri după judecător:** toate hotărârile înregistrate în care o persoană a făcut parte din complet ca judecător (președinte sau membru) sau a acționat ca procuror, în toate dosarele. O hotărâre contează doar dacă persoana este numită în antet (compunerea instanței) sau în blocul de semnături; un nume din textul curent nu contează, iar grefierii nu sunt listați. Pentru fiecare hotărâre: instanța, titlul, rolul, completul și prima frază a dispozitivului, textual. | `list_decisions_by_judge` |
| **Structura unei hotărâri:** instanța și secția, numărul dosarului, tipul, numărul și data, ședința, completul, fraza care numește părțile și obiectul, dispozitivul textual, cuvintele-cheie ale soluției, calea de atac, pronunțarea, citările de lege cu starea lor în bibliotecă și lungimea considerentelor, fiecare cu poziția sa, în caractere, în textul stocat. Elementele absente din text sunt raportate ca negăsite. | `read_decision_structure` |
| **Memoriile dinaintea unei hotărâri:** fiecare memoriu depus în dosar până la data hotărârii, scris în două fișiere din spațiul de lucru — al clientului (documente emise) și al părții adverse (documente primite). Contează doar documentele adresate unei instanțe sau unui parchet; scrisorile către sau de la alte autorități, documentele instanței, probele și intrările de cronică sunt excluse. Fiecare memoriu se ia doar cu documentul său principal (e-mailul de însoțire și anexele sunt tăiate). Documentele care nu pot fi clasificate cu certitudine sunt listate ca neatribuite, în niciunul dintre fișiere. | `read_request_and_ruling` Poarta 4 · Acoperirea citirii |
| **Considerentele comparate cu memoriile:** măsoară cât din considerentele unei hotărâri coincide, ca text, cu memoriile clientului, cu cele ale părții adverse, cu ambele, cu textul de lege din biblioteca de legi sau cu niciuna (formularea proprie a instanței); reproducerea pozițiilor părților se măsoară separat. Pasajele potrivite sunt listate cu rata de potrivire (de la 70 %), cele mai ridicate întâi, în formularea originală, cu pozițiile în caractere. Arată unde considerentele reproduc textual textul din memorii. | `compare_ruling_with_submissions` |
| **Compararea documentelor:** compară oricare două documente, la clienți și dosare diferite, pentru blocuri de text identice, de exemplu în acte de procedură din procese diferite. Pasajele potrivite sunt clasificate ca text de lege, ca sursă citată în comun (un al treilea document al celor două dosare) sau ca împărtășite doar de aceste două documente. Răspunsul îndrumă IA să citească integral ambele documente înainte de a afirma ceva despre o legătură. | `compare_documents` |

### Lista de evaluare a hotărârilor judecătorești

Hotărârile judecătorești sunt recunoscute la înregistrare: pe lângă primite și
emise există o casetă „hotărâre judecătorească" pe care o puteți modifica oricând,
iar o rulare de fundal verifică și arhiva existentă. Hotărârile recunoscute ajung
pe o listă de evaluare. IA o parcurge o hotărâre pe rând: citește hotărârea și, prin
instrumentul pentru memorii, memoriile ambelor părți, și răspunde la un set fix de
întrebări. Nimic nu se stochează până nu dați o instrucțiune expresă. O hotărâre nu
se schimbă, deci se evaluează o singură dată.

| Funcție | Nume tehnic |
| --- | --- |
| **Hotărârile deschise de pe listă**, cele mai noi întâi: instanța, completul, judecătorii și grefierii (fiecare cu ID-ul înregistrării sau marcat ca neintrodus încă în datele de bază) și soluția. | `list_court_decisions_to_assess` |
| **Pregătirea unei hotărâri:** datele din antet, ponderile de text măsurate ale considerentelor, întrebările de evaluare cu structura cerută a analizei și instrumentele pentru preluarea memoriilor ambelor părți. IA poate citi apoi hotărârea fără să încarce prezentarea de ansamblu a dosarului ei. | `prepare_decision_assessment` |
| **Înregistrarea evaluării:** numai la instrucțiunea dumneavoastră expresă, numai dacă hotărârea a fost citită complet, numai cu o analiză în engleză sub șapte titluri obligatorii (argumente, drept, probe, temei, stil, soluție, caracterizare), fiecare cu conținut, și numai dacă fiecare judecător și grefier are o înregistrare în datele de bază. Dacă lipsește una, IA cercetează întâi persoana în surse publice și propune înregistrarea. | `record_decision_assessment` Confirmare |
| **Evaluările stocate** după judecător, instanță, număr de dosar al instanței sau dosar, complete și neprescurtate: ale dumneavoastră și, cu IRONSTICK SERVER, ale tuturor colegilor, fiecare indicând cine a făcut-o. IA le consultă înaintea fiecărui act de procedură către o instanță, pentru instanță și pentru fiecare judecător din complet. | `read_decision_assessments` |

Dacă mai există hotărâri neevaluate, instrumentul de livrare întreabă înaintea
fiecărei ieșiri formale dacă să fie evaluate acum, pentru ca rezultatul să mai poată fi
luat în considerare, sau mai târziu; cu „mai târziu", întrebarea urmează imediat după
livrare. IA întreabă și la prima pornire de sesiune a zilei.

### Reparare OCR cu verificarea avocatului

Când un text integral stocat se dovedește trunchiat sau deteriorat de o rulare OCR
anterioară, IA îl poate repara, dumneavoastră fiind instanța finală. Cere o nouă
scanare; selectați paginile în IRONSTICK (același selector de pagini ca la înregistrarea
documentelor); noua scanare este curățată determinist (filigrane eliminate, tipare
OCR corectate, spațiere normalizată) și pusă în spațiul de lucru lângă textul actual
din baza de date. IA compară apoi ambele versiuni pasaj cu pasaj și o păstrează pe cea
corectă. I se cere să repare doar erorile OCR mecanice, fără reformulări și fără a
schimba numere, nume sau sume. IRONSTICK vă arată versiunea corectată integral, iar ea
înlocuiește textul vechi numai după aprobarea dumneavoastră.

**Verificare țintită de către avocat.** Acolo unde un pasaj necesită un ochi uman, IA vă cere să verificați anumite locuri în loc de întregul document:

- **Fișiere mari.** Pentru un PDF de peste 10 MB sau 90 de pagini, IA numește locul exact de verificat, de exemplu „pagina 12, aproape de început".
- **Câteva locuri, nu tot fișierul.** Nu parcurgeți un fișier de 200 de pagini.
Deschideți atașamentul în intrarea pe care IRONSTICK v-a deschis-o deja, mergeți la
pagina numită și transcrieți cuvintele sau cifrele ilizibile. Când un pasaj este
ilizibil atât în textul vechi, cât și în noua scanare, IA vă cere să-l verificați cu
ochiul: cel mult trei locuri, fiecare cu pagina și poziția.
- **Revenire directă în textul integral.** Transcrierea dumneavoastră este
preluată cuvânt cu cuvânt în versiunea corectată, trece prin același dialog de
aprobare, iar analiza continuă.

IRONSTICK izolează locurile ilizibile și vă întreabă numai despre ele.

| Funcție | Nume tehnic |
| --- | --- |
| **Cererea unei noi scanări OCR** a PDF-ului original stocat, pagină cu pagină, numai pentru textele integrale deteriorate (dumneavoastră selectați paginile; documentele secrete sunt excluse). | `request_ocr_rescan` |
| **Starea scanării:** o singură verificare care returnează ordinul de lucru complet când scanarea este gata (ambele texte în spațiul de lucru). | `ocr_rescan_status` |
| **Predarea PDF-ului**, ultima treaptă de escaladare: deschide intrarea pentru ca dumneavoastră să adăugați PDF-ul original în chat (până la 10 MB / 90 de pagini; pentru fișiere mai mari, IA vă cere să transcrieți locurile în cauză, cel mult trei). Necesită o scanare nouă anterioară. | `request_pdf_handover` |
| **Trimiterea textului integral corectat** către IRONSTICK; vi se arată integral, iar numai salvarea dumneavoastră înlocuiește textul integral stocat. | `submit_corrected_fulltext` Revizie |

### E-mail, calendar și termene

| Funcție | Nume tehnic |
| --- | --- |
| **E-mailuri care menționează un termen de căutare** (expeditor, subiect, fragment, atașamente). | `search_emails_mentioning` |
| **Textul integral al unui e-mail.** | `read_email_body` |
| **Intrările de calendar**, global sau pe dosar. | `read_kalender` |
| **Programările** pentru o zi sau o perioadă (ședințe, întâlniri), ședințele de judecată întâi. | `read_appointments` |
| **Tot ce este în ecranul de termene**, sortat după dată: termene, ședințe de judecată viitoare și scadențe ale intrărilor de memorie IA; filtrabil după urgență sau perioadă. | `read_deadlines` |
| **Termenele active** ca listă compactă, global sau pe dosar. | `read_fristen` |
| **Intrare nouă în calendar:** deschide formularul de calendar precompletat (titlu, dată, ore, descriere, dosar) după o verificare obligatorie a intrărilor din aceeași zi; nimic nu se salvează automat — dumneavoastră verificați și salvați. | `add_calendar_entry` Revizie |

### Persoane, instituții și evidențe de lucru

| Funcție | Nume tehnic |
| --- | --- |
| **Fișa unei persoane** (fiecare câmp de date de bază și de analiză, complet) și rețeaua de relații a unei persoane sau instituții; fiecare răspuns începe cu dosarele părții. | `read_person` / `read_person_relations` / `read_institution_relations` |
| **Legăturile unei părți:** toți cei conectați cu o persoană, societate sau instituție prin relații înregistrate și dosare comune, cei mai puternici întâi, cu dosarele părții în frunte. Obligatoriu pentru fiecare parte numită într-un act de procedură. | `who_is_connected_with` |
| **Clustere în rețeaua de părți** (detectare deterministă de comunități, ca în vederea Univers), cu grupurile de densitate neobișnuită evidențiate și o separare opțională a persoanelor de instituții; și cele mai conectate părți. | `read_cliques` / `read_top_connected` |
| **Notiță la un dosar partajat:** fixează o notiță pe panoul unui dosar partajat prin IRONSTICK SERVER; se postează direct și este vizibilă proprietarului dosarului și fiecărui abonat. | `send_case_note` Poarta 12 · Pregătire |
| **Fișa unei instituții** cu date de contact. | `read_institution` |
| **Jurnalul zilnic:** citirea zilelor recente sau căutarea în ele. | `read_tagesprotokolle` / `search_tagesprotokolle` |
| **Scrierea în jurnalul zilnic:** consemnează, la cererea dumneavoastră, munca zilei (e-mailuri trimise, acte redactate, argumente elaborate, decizii). O zi existentă se completează, niciodată nu se suprascrie; dosarele vizate sunt legate. Scrie direct. | `append_tagesprotokoll` Poarta 12 · Pregătire |
| **Notiță scurtă** ca o intrare în jurnalul zilnic de azi. Scrie direct. | `add_daily_note` Poarta 12 · Pregătire |
| **Intrare nouă în cronică:** deschide formularul de cronică în dosarul potrivit, precompletat de IA (titlu, descriere, data evenimentului, ore, cuvinte-cheie); nimic nu se salvează automat — completați formularul (adăugând imagini, dacă doriți) și îl salvați. | `add_chronik_entry` Revizie |
| **Briefingul de început de zi**, urmărit separat pentru fiecare IA de desktop: la primul apel al zilei returnează cele mai recente intrări din jurnalul zilnic și marchează IA ca informată; ulterior spune acest lucru. | `daily_briefing` |
| **Timpul de lucru înregistrat** pe dosar și client. | `read_time_tracking` |
| **Intrările etichetate** din toate dosarele. | `read_tags` |

### Reguli de lucru, formate și memorie

| Funcție | Nume tehnic |
| --- | --- |
| **Instrucțiunile IA ale unui dosar:** listarea lor; citirea returnează întotdeauna textul integral. | `list_ki_instructions` / `read_ki_instruction` |
| **Toate instrucțiunile IA active ale unui dosar** într-un singur apel (texte integrale). | `read_all_ki_instructions` |
| **Inventarul instrucțiunilor IA** la toți clienții și dosarele (client, dosar, ID-ul instrucțiunii și numele fișierului; fără texte integrale). | `list_all_ki_instructions` |
| **Formatul de ieșire:** specificațiile obligatorii de format. Pentru documente, IA numește tipul exact (act de procedură juridic sau scrisoare simplă, fiecare cu sau fără avocat) și primește același șablon pe care îl folosește chatul integrat, întreținut într-un singur loc. | `read_output_format` |
| **Formatul jurnalului zilnic:** formatul obligatoriu de fișier și de intrare. | `read_tagesprotokoll_format` |
| **Formatul e-mailului către instanță:** formatul obligatoriu pentru e-mailurile către instanțe și pachetele PDF (subiect și text, liste de pachet). | `read_mailversand_format` |
| **Memoria IA partajată:** căutarea unor constatări anterioare; propunerea de intrări noi (legate de un client, până la 1.000 de caractere). O intrare nouă intră în vigoare numai după aprobarea dumneavoastră. Intrările legate de un dosar nu se șterg niciodată automat; cele fără dosar, după un an fără folosire, iar fiecare folosire reînnoiește acel an. | `memory_search` / `memory_store` Revizie |
| **Întreținerea intrărilor de memorie:** reformularea unei intrări, mutarea sau ștergerea scadenței ei (cu un raport al caracterelor folosite și libere) sau ștergerea ei; fiecare modificare intră în vigoare numai după aprobarea dumneavoastră. | `memory_update` / `memory_delete` Revizie |
| **Exportul pachetului de instrucțiuni IA** al unui client, prin dialogul de export. | `export_ai_instruction` |

### Propuneri pentru verificarea dumneavoastră

| Funcție | Nume tehnic |
| --- | --- |
| **Corectură de date de bază sau înregistrare nouă**, inclusiv o redenumire și tipul (persoană fizică sau juridică); pentru o înregistrare nouă, tipul trebuie stabilit mai întâi. Propunerea ajunge în Monitorul de consistență a datelor spre aprobare. O înregistrare nouă primește mai întâi ca răspuns o listă de înregistrări existente asemănătoare, și nu se stochează nimic până când IA nu încadrează propunerea la una dintre ele sau nu confirmă explicit o parte nouă; fiecare parte nouă stocată declanșează urmarea: cercetarea și înregistrarea legăturilor ei. | `propose_master_data` Revizie Poarta 16 · Părți asemănătoare |
| **Relația** dintre persoane sau modificarea uneia existente; aceeași cale de revizie. | `propose_relation` Revizie |
| **Atribuirea unei părți la un dosar:** exact o persoană, societate sau instituție, cu un motiv obligatoriu și trimiteri opționale la documente, ajunge în Monitorul de consistență a datelor. La acceptare, partea devine participant la dosar și apare în vederile de clustere și de legături. O legătură existentă sau un duplicat în așteptare se raportează în loc să fie propus din nou. | `propose_case_link` Revizie |
| **Textul de analiză al unei persoane**; refuzat dacă IA nu a citit profilul în ultimele 30 de minute. | `propose_person_analysis` Revizie Poarta 14 · Citirea analizei |
| **Verificarea unei părți în surse publice** pentru o persoană sau o societate — procedura standard de verificare a unei părți. Date de intrare: nume, oraș, județ, țară și tip (persoană fizică sau juridică). IRONSTICK rulează apoi mereu aceiași pași: o căutare în text integral a numelui în toată baza de date (pe dosar, cele zece documente cele mai noi cu pozițiile paragrafelor, plus numărul celorlalte rezultate) și o listă fixă de căutări web în limba țării părții, pe Google, DuckDuckGo și Qwant, cu duplicatele eliminate. Returnează un profil pregătit cu fiecare termen de căutare folosit; IA verifică fiecare constatare și fiecare link și înscrie datele prin Monitorul de consistență a datelor. | `osint_entity` |
| **Verificarea unei liste de nume:** confruntă un document care conține o listă de nume — o listă de contacte de pe rețele sociale, o listă de participanți sau de semnături, un impressum de societate — cu toate persoanele și societățile înregistrate, într-un singur apel (ordinea cuvintelor și prenumele compuse sunt tratate; un singur prenume frecvent nu este niciodată socotit potrivire, iar rezultatele dintr-un singur cuvânt sunt marcate ca ambigue). Primește un ID de document sau un dosar, caz în care se verifică și se numește cea mai nouă intrare a dosarului. Fără IA, fără scrieri. | `entity_scan_evidence` |
| **Ștergere sau duplicat:** propune eliminarea unei înregistrări incorecte, a unei etichete sau a unui termen încheiat (se cere un motiv în limba sistemului) ori îmbinarea a două înregistrări ca duplicate. Nimic nu se șterge și nu se îmbină fără aprobarea dumneavoastră. | `propose_deletion` / `propose_duplicate` Revizie |
| **Instrucțiune IA modificată:** propune o versiune nouă (un adaos, un fișier sau conținutul integral). IRONSTICK deschide dosarul, vă arată o comparație roșu/verde și aplică modificarea numai după ce o acceptați; decizia este raportată IA. | `update_ki_instruction` Revizie |

### Spațiul de lucru pentru conținut mare

O zonă locală de lucru pentru IA. Orice apel de instrument își poate direcționa
rezultatul complet către un fișier din spațiul de lucru; IA primește atunci doar
calea și mărimea, fără previzualizare. Orice rezultat peste limita conectorului
(10.000 de caractere; 40.000 pentru Claude Desktop și ChatGPT Desktop) ajunge acolo
automat, în același fel, inclusiv deschiderile de seturi de instrumente. Conținutul
mare nu trece astfel prin rezultatul IA în niciun sens, ceea ce este mai rapid, mai
ieftin și evită erorile de transcriere; IA îl citește pe secțiuni din spațiu.
Fișierele din spațiul de lucru pot fi predate direct instrumentului de livrare și
actualizărilor de instrucțiuni. Spațiul se păstrează peste reporniri: notițele IA, registrul ei
de stare și evidențele acoperirii citirii se păstrează; rezultatele de instrumente din
zilele anterioare se elimină la fiecare pornire, iar fișierele necitite și
nescrise timp de 180 de zile se șterg automat (versiunea finală a unui act de
procedură după 360 de zile).

**Spațiul de lucru este criptat.** Fiecare fișier din el este criptat AES-256 în
repaus, cu aceeași derivare a cheii ca baza de date a dosarelor și depozitul de
documente. Citirea și scrierea trec numai prin IRONSTICK; un fișier în text clar pus în
spațiu pe orice altă cale (un instrument de sistem de fișiere, o copiere manuală)
este refuzat, eliminat și raportat IA ca încălcare de regulă. Fișierele părăsesc
spațiul numai prin dialogul de export al IRONSTICK. Baza de date, depozitul de
documente, fișierul de configurare și spațiul de lucru sunt astfel toate criptate
AES-256 în repaus.

**Niciun instrument nu își scurtează propriul rezultat.** Instrumentele de citire
pentru textele integrale ale documentelor, dosare întregi, e-mailuri, pagini web
(legi și hotărâri complete), jurnalul zilnic, fișele persoanelor și cronică își
livrează întotdeauna conținutul complet. O singură regulă centrală decide unde
ajunge: sub limita conectorului, în răspuns, peste ea, întreg în fișierul din
spațiul de lucru, astfel încât IA nu trebuie să prezică mărimea unui rezultat.

**Verificarea actualității:** IRONSTICK monitorizează fiecare fișier din spațiul de
lucru. De îndată ce datele de bază se schimbă — un document sau o intrare de cronică
nouă în dosar, o intrare de calendar sau de jurnal zilnic — sau un fișier expiră,
conținutul lui este înlocuit cu o notă care îi spune IA cum să-l preia din nou.
Fișierele din spațiul de lucru depășite sunt invalidate automat.

| Funcție | Nume tehnic |
| --- | --- |
| **Instrumente de text:** scriere (pe porțiuni) și citire de intervale de rânduri numerotate; căutare cu numere de rând într-un fișier sau în toate; înlocuirea textului exact; inserare la un rând sau după un marcaj; ștergerea sau înlocuirea intervalelor de rânduri într-un singur pas. | `scratch_write` / `scratch_read` / `scratch_grep` / `scratch_edit` / `scratch_insert` / `scratch_delete_lines` / `scratch_replace_lines` Poarta 4 · Acoperirea citirii |
| **Registrul stării sesiunii** (cheie și valoare), mai ales pentru a consemna care fișier este ciorna principală curentă; păstrat peste reporniri. | `scratch_statetracking` |
| **Structură, comparație și numărători:** toate titlurile cu intervalele lor de rânduri; compararea a două fișiere; o copie de lucru; numărători de cuvinte, litere și rânduri. | `scratch_list_titles` / `scratch_diff` / `scratch_copy` / `scratch_countwords` / `scratch_countletters` / `scratch_countlines` |
| **Curățare:** normalizarea spațierii și a sfârșiturilor de rând și eliminarea caracterelor invizibile; crearea unei copii simplificate pentru comparație (litere mici sau fără diacritice) într-un fișier separat. | `scratch_correctspace` / `scratch_correctcrlf` / `scratch_asciskeleton` |
| **Formatul actului de procedură:** obligatoriu înainte de livrarea fișierelor Markdown; convertește structura Markdown în formatul actului (tabele în rânduri de text, liste numerotate în „(1)", liniuțe în „•", linkuri în text). Conținutul se păstrează. | `scratch_normalizemd` |
| **Listarea și ștergerea fișierelor din spațiul de lucru**; fișierele nefolosite 180 de zile se șterg automat, iar constatările durabile aparțin memoriei IA. | `scratch_dirlist` / `scratch_deletefile` Poarta 4 · Acoperirea citirii |

### Web, registre și validare

| Funcție | Nume tehnic |
| --- | --- |
| **Căutare web și preluare de pagini.** Fiecare căutare interoghează simultan Google, DuckDuckGo și Qwant și returnează o singură listă îmbinată, fără duplicate. O pagină este preluată ca text complet, lizibil: se extrage conținutul principal (navigarea, reclamele și bannerele de cookie-uri sunt eliminate; la paginile de articole, și subsolul). La paginile fără corp de articol, precum paginile de societate și de contact, subsolul se păstrează, fiindcă acolo apar adresa și datele de contact; unde extragerea ar lăsa aproape nimic, se livrează toată pagina. O pagină blocată sau care returnează o eroare este încercată încă o dată în browserul încorporat, iar starea HTTP se raportează. Un apel răspunde în 45 de secunde; documentele mari sau scanate continuă să fie prelucrate în fundal și sunt livrate la următorul apel cu aceeași adresă. | `web_search` / `open_url` Poarta 2 · Legi |
| **Un singur articol de lege**, textual, după numărul din bibliotecă și numărul articolului — calea prevăzută și cea mai economică de a susține o citare; consemnează exact acel articol ca citit. | `get_legal_article` |
| **Reverificarea unei legi** față de sursa ei acum (neschimbată, actualizată sau duplicat); o versiune mai nouă înlocuiește intrarea, și la nivelul întregului cabinet pe IRONSTICK SERVER, unde prevalează cea mai recentă verificare. | `recheck_legal_source` |
| **Căutarea, preluarea și adăugarea de legi.** Căutarea este aproximativă, iar jurisdicția este un parametru obligatoriu, astfel încât sistemele juridice nu se amestecă niciodată. Preluarea returnează textul stocat al legii, textual, ca Markdown, deci IA citează din biblioteca verificată, nu din memoria modelului. IA trebuie să înregistreze fiecare sursă relevantă găsită online, doar ca link; IRONSTICK descarcă, convertește și verifică singur textul, iar dumneavoastră îl eliberați prin revizia din Monitorul de consistență a datelor. | `search_legal_source` / `get_legal_source` / `add_legal_source` Poarta 2 · Legi Revizie |
| **Inventarul bibliotecii și extrase:** parcurgerea bibliotecii pe pagini (ID, jurisdicție, titlu, data verificării); preluarea unui extras textual dintr-o lege după numărul din bibliotecă și intervalul de caractere (rezultatele căutării furnizează un apel gata făcut cu interval mărit); încărcarea unei legi întregi după numărul din bibliotecă. | `list_legal_sources` / `grep_legal` / `get_legal_by_lnumber` |
| **Validarea** numerelor de TVA (live în serviciul UE VIES), a numerelor EORI, a LEI, a IBAN și a numerelor de identificare naționale (nouă scheme din șapte țări). | `validate_vat_vies` / `validate_eori` / `validate_lei` / `validate_iban` / `validate_id_number` |
| **Registrul comerțului:** deschide căutarea „Find a company" a portalului european e-Justice (BRIS) în browserul încorporat, pentru a fi citită de IA. | `check_handelsregister` |

**Întreținerea bibliotecii și partajarea la nivelul cabinetului.** Fiecare lege din
biblioteca de legi poartă linkul sursei și data verificării; intrările neverificate de mai bine de o lună sunt marcate. Respingerea unei legi în Monitorul de consistență a datelor cere mai întâi confirmare. Cu IRONSTICK SERVER pe un
NAS Synology, biblioteca este partajată la nivelul întregului cabinet: o lege
verificată o dată de un coleg este citată de IA la fiecare post de lucru, cu același text și aceeași versiune.

### Verificare reciprocă de către a doua IA de desktop

| Funcție | Nume tehnic |
| --- | --- |
| **Predare spre verificare:** predă o lucrare produsă de IA (argument, strategie, act de procedură) unei alte IA de desktop pentru o verificare critică. Textul integral se pune într-o memorie tampon de scurtă durată, iar o sarcină trimite la ea. Cerere tipică: „Pune cealaltă IA să verifice asta." | `handoff_to_peer` |
| **Sarcini de verificare deschise** pe care cealaltă IA le-a adresat acesteia (cele proprii nu apar niciodată), cu conținutul lor integral. | `read_open_tasks` |
| **Răspuns:** închide o sarcină primită (conținutul ei se șterge) și returnează evaluarea expeditorului ca sarcină nouă, într-un singur apel. | `reply_to_task` |
| **Închidere fără răspuns:** încheie runda; conținutul de scurtă durată se șterge. | `complete_task` |

### Predare și livrare

| Funcție | Nume tehnic |
| --- | --- |
| **Exportul unui document** din dosar ca PDF în folderul Documente. | `export_pdf` |
| **Fișa persoanei:** deschide dialogul de export cu fișa PDF a unei părți (date de bază, implicarea în dosare, analiza persoanei, relații; numai câmpurile completate). | `export_entity` |
| **Verificarea actului de procedură:** controlul determinist obligatoriu al unui act finalizat — referințe la documente cu evidențe de citire legate de document, citări de lege față de biblioteca verificată, citate, numere de dosar în formatul n/nnn/aaaa, sume (potrivire exactă), date de bază ale părților, coduri numerice personale românești (CNP) și IBAN (sumă de control), și fiecare parte numită citită și verificată pentru legături. Livrarea unui document formal este blocată fără o verificare pozitivă curentă pentru starea exactă a fișierului; verificarea unui alt document resetează citirile anexelor. | `verify_pleading` Poarta 3 · Verificarea actului |
| **Livrarea fișierului:** predă un fișier finalizat prin dialogul de export al IRONSTICK; o ciornă de text ajunge în procesorul de text cu un singur clic, ca șablon gata de depunere. Acceptă numai un fișier din spațiul de lucru al aplicației; conținutul inline și alte căi sunt refuzate, astfel încât verificarea, versionarea și urmărirea relivrărilor rămân atașate fiecărei livrări. Dacă hotărâri judecătorești de pe lista de evaluare sunt încă deschise, întreabă înaintea fiecărui act de procedură și a fiecărui e-mail către o instanță sau o autoritate dacă să fie evaluate acum sau mai târziu. | `deliver_file` Poarta 3 · Verificarea actului Poarta 7 · Conținut formal Poarta 8 · Serie de versiuni |
| **Repetarea unei livrări:** deschide din nou dialogul IRONSTICK pentru un fișier deja livrat și nemodificat de atunci, când cereți din nou același fișier; fără porți, fără revizie, fără versiune nouă. Fișierele nelivrate încă sau modificate după livrare sunt refuzate și înregistrate ca încălcare de regulă; ele necesită o livrare nouă. | `redeliver_file` |

### Utilitare

| Funcție | Nume tehnic |
| --- | --- |
| **Locație și vreme:** locația aproximativă a utilizatorului (țară, oraș) din ultima înregistrare de autentificare; vremea curentă pentru un loc numit. | `get_my_location` / `get_weather` |

## 7. Gărzile de diligență: cum verifică Bridge-ul temeinicia lucrului IA

Opt **gărzi de diligență deterministe** verifică cât de atent lucrează efectiv IA
conectată. Fiind pură evidență și logică de text, ele nu implică IA și nu pot fi
trecute cu vederea de model:

- **Garda acoperirii citirii.** Când IA preia un text integral de dosar, fișierele
de pregătire ale unui dosar sau un text integral peste limita conectorului, Bridge-ul
consemnează rând cu rând ce intervale a citit *efectiv* și păstrează această
evidență peste reporniri. Cât timp rămân goluri, **fiecare** răspuns de instrument,
inclusiv căutările, listează intervalele exacte de rânduri necitite, cu un procent. O
citire completă nu poate fi pretinsă până nu o confirmă evidența; abia atunci IA
primește confirmarea unică *„COMPLETE — toate rândurile citite”*, iar
citirea se înscrie pentru pregătirea dosarului.
- **Fără previzualizare.** Orice rezultat peste limita conectorului (10.000 de
caractere; 40.000 pentru Claude Desktop și ChatGPT Desktop) este scris întreg în
spațiul de lucru; IA primește doar o notă cu numele fișierului, mărimea lui și cele
două comenzi de continuare. Nimic nu se arată de două ori, iar conținutul mare se
citește în spațiul de lucru. Aceasta se aplică fiecărui instrument, inclusiv
deschiderilor de seturi de instrumente; numai cititorul de instrucțiuni și
instrumentele spațiului de lucru înseși răspund direct. Niciun instrument nu își
scurtează propriul rezultat: sub limită ajunge complet în răspuns, peste ea complet
în spațiul de lucru.
- **Garda relivrării.** Dacă IA continuă să corecteze un fișier de lucru
*după* ce acesta v-a fost livrat, fiecare editare ulterioară primește ca
răspuns reamintirea că aveți în prezent versiunea depășită și că fișierul corectat
**trebuie** livrat din nou.
- **Garda ciornelor nelivrate.** Când IA își scrie jurnalul zilnic, semnalul ei că
încheie lucrul, Bridge-ul enumeră pe nume fiecare ciornă versionată scrisă în
sesiune care nu a fost livrată deloc. Munca terminată nu poate rămâne neobservată în
spațiul de stocare de lucru al IA.
- **Garda formatului de e-mail.** Fiecare acces la conținut de e-mail poartă o
trimitere la specificația obligatorie a formatului de e-mail (subiect, text, conținut
obligatoriu, reguli de limbă), astfel încât IA este reamintită de singura cale corectă
de livrare *înainte* de a redacta un e-mail.
- **Garda casetei de copiere.** De fiecare dată când IA scrie sau editează un
fișier de lucru text, răspunsul îi reamintește că documentele ajung la utilizator
**numai** prin instrumentul de livrare; lipirea în chat a unei scrisori finalizate,
ca text sau casetă de copiere, ocolește formatarea, verificarea și urmărirea
livrărilor și se socotește încălcare de regulă. Singurul format legitim de casetă de
copiere rămâne e-mailul, așa cum este definit în specificația formatului de
e-mail.
- **Ancora dosarului.** Fiecare răspuns de instrument care privește un dosar
poartă numărul înregistrat al dosarului, clientul și obiectul (poarta 10), astfel
încât contextul luat dintr-un alt dosar este demascat în aceeași fereastră.
- **Dirijarea treptei de model.** Instrucțiunile îi spun IA ce clasă de model cere
o sarcină: înaintea instrumentelor pentru acte de procedură (format de ieșire,
verificare, livrare) vă cere într-o singură frază să comutați clientul de desktop pe
modelul de vârf, iar după livrare vă spune că un model mai puțin costisitor este din
nou suficient. Când contoarele de propuneri indică întreținere a rețelei de părți
(două propuneri de date de bază și o propunere de relație sau de legătură cu dosarul),
Bridge-ul adaugă, o dată pe sesiune, o notă că această muncă, trecută integral prin
porți, nu are nevoie de un model de vârf. Dumneavoastră decideți; IA continuă să
lucreze.

Executarea instrumentelor rulează separat de interfața de utilizator din interiorul
aplicației, astfel încât citirile îndelungate ale IA din dosare mari nu blochează
interfața IRONSTICK.

## 8. Verificarea actelor de procedură: livrare numai după dovadă

Actele de procedură și scrisorile se scriu în dialog cu IA de desktop, pe dosarul
viu, cu același strat de lucru și aceleași porți ca la chatul integrat al
IRONSTICK. Ceea ce părăsește sistemul este un **șablon gata de depunere** pentru verificarea și semnătura dumneavoastră. Două verificări preced fiecare predare: verificarea deterministă prezentată
aici și, dacă o activați în configurare pentru modelul API activ, verificarea
**Red/Blue Team**: o trecere separată de verificare citește ciorna ca avocat al
părții adverse; constatările substanțiale o trimit înapoi la refacere, cel mult două
runde, iar fiecare punct este analizat pe fond, nu preluat automat. Dacă IA
consideră constatările neîntemeiate, redepune fișierul neschimbat cu un răspuns scris
la fiecare constatare; verificatorul nu rulează a doua oară pe un fișier neschimbat,
iar raportul de verificare ajunge la dumneavoastră împreună cu acele răspunsuri.
Predarea însăși trece prin dialogul de export al IRONSTICK, de unde ciorna ajunge în
procesorul de text cu un singur clic.

**Fără modificări tăcute după livrare.** Odată ce un document a fost livrat, o
corectură nu se face niciodată în tăcere: versiunea veche este anulată vizibil și se
creează o versiune nouă. Corecturile dumneavoastră intră totodată în verificare.

Un act de procedură formal nu poate părăsi sistemul nepăzit.
`verify_pleading`, un verificator determinist (fără IA), controlează ciorna
finalizată față de înregistrările dumneavoastră vii și față de biblioteca de legi
verificată, pe **opt clase**:

- **Referințe la documente** — ștampile de înregistrare și numere cu #, în lista de
anexe și în textul curent: existență, apartenență, integritatea ștampilei și
**evidența de citire legată de document**. Fiecare element citat sau anexat trebuie
să conteze ca citit pentru acest document, fie preluat integral, fie cu fișierul său
din spațiul de lucru citit complet; o citire contează 2 ore, fiecare livrare a
aceluiași document o prelungește, iar verificarea unui alt document resetează citirile
anexelor. Citarea din fragmente de căutare sau din memorie pică verificarea. Un rând de
anexă poate indica un interval de pagini („p. 12–15”); cerința de citire
acoperă tot documentul.
- **Citări de legi** — articolul citat trebuie să existe în textul verificat din
bibliotecă (tolerant la separatorul de mii, exact la limita de cuvânt) și să aibă o
**evidență de citire**: IA trebuie să fi preluat acel articol din bibliotecă în
această rulare a programului. Articolele de presă, rezumatele web și memoria modelului
nu susțin niciodată o citare de lege și pică verificarea. Și subreferințele citate
(alineat, punct) sunt verificate ca existență. O sursă care lipsește din bibliotecă nu
este ignorată: IA trebuie să o ceară, iar cererea apare în **dialogul dumneavoastră
de consimțământ**. Sursele alese sunt preluate, verificate și stocate; cele
respinse nu sunt, iar fiecare citare ulterioară a lor poartă o notă vizibilă
„respinsă de utilizator”.
- **Citate textuale** — fiecare citat trebuie să apară textual într-un document din
arhiva dumneavoastră sau în biblioteca de legi (tolerant la OCR). Dacă provine dintr-un
document al altui dosar, verificatorul numește acel document, iar IA citește atunci
numai acel document, nu prezentarea de ansamblu a celuilalt dosar. Un citat negăsit în
nicio sursă este marcat drept contrazis și blochează livrarea. Scoaterea ghilimelelor
sau reformularea ușoară a pasajului nu ajută: citatul blocat este reținut pentru
document și rămâne blocat. Ștergerea completă a citatului este permisă, iar livrarea
vă spune ce citate au fost scoase fiindcă nicio sursă nu le conține.
- **Numere de dosar** în formatul n/nnn/aaaa, verificate față de dosarele și
înregistrările dumneavoastră.
- **Sume: potrivire exactă obligatorie.** Cifra trebuie să coincidă exact cu forma
înregistrată; „14.500” acolo unde înregistrarea spune „14.500,00”
blochează livrarea până la corectare.
- **Datele de bază ale părților** — fiecare nume folosit trebuie să coincidă literă
cu literă cu scrierea înregistrată, inclusiv diacriticele.
- **Coduri numerice personale românești (CNP) și IBAN** — validarea sumei de control
(o cifră de control invalidă indică un număr inventat sau tastat greșit) plus
potrivirea cu înregistrările.
- **Părți numite** — fiecare persoană sau societate numită în document trebuie să
fi fost citită (profil) și să aibă legăturile verificate
(`who_is_connected_with`); refuzul numește ambele apeluri și recomandă în
plus verificarea clusterelor (`read_cliques`).

Fiecare constatare este clasificată drept verificată, neverificată sau contrazisă.
Livrarea unui document formal este refuzată fără o verificare pozitivă curentă pentru
starea exactă a fișierului; **fiecare editare o anulează**. După cinci rulări de
verificare eșuate, procesul se oprește, IA primește ordin să se oprească și să
raporteze, iar **dumneavoastră** sunteți notificat direct în aplicație. Livrările
trec numai prin spațiul de lucru propriu al aplicației, astfel încât verificarea,
versionarea și urmărirea relivrărilor rămân atașate fiecărui fișier; livrarea inline
și alte căi sunt refuzate.

## 9. Protecția datelor

Bridge-ul livrează **date brute de dosar** în sesiunea IA de
desktop a dumneavoastră, în mod deliberat, fiindcă redactarea unui șablon gata de
depunere are nevoie de nume, cifre și date reale. Tot ce citește IA acolo se
prelucrează sub contul dumneavoastră la furnizor (Anthropic, OpenAI, Qwen sau Moonshot
AI / Kimi) și sub termenii lui. Chatul integrat transmite, în schimb, date
pseudonimizate prin router. Dezvăluirea completă, inclusiv unde sunt limitele, este în
[*IRONSTICK — Declarația fluxului de date GDPR*](https://www.ironstick.legal/gdpr_ro.html).
**Furnizori de fundal gratuiți.** Furnizorii gratuiți pe care îi
puteți activa în configurare pentru sarcinile de fundal (Groq, OpenRouter, Mistral) nu
sunt folosiți de Bridge.
**Cod de acces.** Bridge-ul respectă blocajul de pornire al
IRONSTICK: până la introducerea codului de autentificare din șase cifre pe ecranul de
pornire IRONSTICK, fiecare apel de instrument primește răspunsul „aplicație blocată —
codul de securitate nu a fost încă introdus" și nu se returnează date de dosar.
Introduceți codul în IRONSTICK, apoi repetați cererea.
Versiunea 1.0.6 — stare noiembrie 2026. Lista de instrumente reflectă
Bridge-ul livrat cu această versiune; pot fi adăugate instrumente în timp.

## Anexă — Descrierea tehnică completă a Bridge-ului

Domeniu: versiunea 1.0.6 — stare noiembrie 2026; peste 200 de instrumente în 22 de seturi de instrumente, Model Context Protocol (MCP). Această anexă este scrisă pentru verificarea de către IT și protecția datelor și descrie arhitectura, fiecare strat funcțional, măsurile de siguranță, limitele și redirecționările Bridge-ului.

### 1. Scop și poziționare

Bridge-ul conectează aplicații comerciale de IA de desktop (Claude Desktop, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) la o aplicație IRONSTICK de gestionare a dosarelor juridice care rulează pe același calculator. IA de desktop primește o suprafață de instrumente controlată și autodescriptivă prin Model Context Protocol (MCP); fiecare apel este executat în interiorul aplicației IRONSTICK pe baza de date vie, iar fiecare rezultat este post-procesat de Bridge înainte de a ajunge la model. Obiectivele de proiectare sunt: o încărcare permanentă minimă a contextului modelului, impunerea structurală a regulilor de lucru pe care simplul text de instrucțiuni nu le poate garanta, protejarea muncii nesalvate a utilizatorului, protejarea datelor împotriva cererilor supradimensionate sau greșit direcționate și absența completă a oricărui material de configurare lizibil în produsul instalat.

### 2. Topologia proceselor

Bridge-ul constă din două procese care cooperează.

Aplicația IRONSTICK rulează un serviciu local și protejat, accesibil numai de pe același calculator. Acest serviciu deține registrul de instrumente, execută toate apelurile de instrumente, aplică toate porțile și post-procesoarele și este singura instanță determinantă pentru ce poate vedea și face un model conectat.

În fața fiecărei IA de desktop stă un mic executabil nativ. Acesta vorbește protocolul MCP standard către IA de desktop și transmite munca aplicației prin conexiunea locală protejată. Fiecare IA de desktop are propria copie a acestui fișier, cu propriul identificator de apelant; la Bridge nu se află niciun fișier de instrucțiuni. Identificatorul de apelant însoțește fiecare apel de instrument ca argument intern și guvernează tot comportamentul per IA. În plus, cât timp o IA de desktop este conectată, front-end-ul trimite aplicației aproximativ la fiecare trei secunde un semnal de prezență; aplicația îl afișează ca indicator „Bridge conectat” cu o durată de valabilitate de cincisprezece secunde, astfel încât utilizatorul vede mereu dacă o IA externă este conectată în acel moment.

La handshake-ul de inițializare MCP, front-end-ul returnează identitatea sa de server și, încorporat în rezultatul initialize, textul de instrucțiuni pentru pornirea sesiunii; preia acest text în același moment, printr-un canal intern, de la aplicația care rulează. Dacă aplicația este închisă, nu se livrează nicio instrucțiune, iar blocajul instrucțiunilor din aplicație impune citirea de îndată ce aceasta rulează. Manualul de lucru complet rămâne oricând la dispoziția modelului printr-un instrument dedicat.

### 3. Securitate, licențiere și consimțământ

Traficul dintre programul Bridge al IA de desktop și IRONSTICK rămâne pe acest calculator (loopback local, protejat prin token); doar instrumentele web și de registre ajung pe internet. Instrumentele de acces web ajung doar la adrese publice de internet, astfel încât un model nu poate fi îndreptat prin Bridge să scaneze calculatorul sau rețeaua locală.

Bridge-ul și integrările de desktop ale fiecărui furnizor sunt module suplimentare licențiate separat. Fiecare se deblochează ca bit de modul în cheia de licență semnată a aplicației client; nu există o cheie separată pentru Bridge. Un modul nelicențiat nu este nici instalat, nici expus.

O poartă de consimțământ protejează primul acces la date pe fiecare rulare a programului pentru fiecare conexiune cu o IA de desktop: primul apel de instrument al oricărei IA de desktop după pornirea programului deschide un singur dialog de avertizare deasupra ecranului curent. Dacă utilizatorul aprobă, accesul este deschis pentru toate IA de desktop pentru restul rulării; dacă utilizatorul refuză, toate sunt blocate zece minute, iar fiecare apel blocat returnează un mesaj care cere IA de desktop să încerce din nou mai târziu; după cele zece minute, următorul acces deschide din nou dialogul. Starea este ținută numai în memorie și nu este stocată niciodată.

Independent de consimțământ, un blocaj al accesului la instrucțiuni păzește fiecare conexiune de desktop: niciun instrument — deschizătoarele de seturi de instrumente și instrumentul de executare a membrilor incluse — nu se execută până când apelantul nu a citit instrucțiunile și nu a redat cuvânt cu cuvânt interdicția halucinației (regula 5) prin instrumentul de confirmare; rămân disponibile numai cititorul de instrucțiuni, instrumentul de confirmare și instrumentul pentru limba sistemului. Confirmarea este ținută pe fiecare IA de desktop și expiră la șaizeci de minute după ce a fost dată, după două ore fără niciun apel, la miezul nopții, la fiecare conexiune nouă și după ce IA de desktop își compactează contextul; după o expirare apelantul trebuie să recitească instrucțiunile și să redea o regulă aleasă la întâmplare, în locul celei pe care o cunoaște deja. Pe conexiunea Claude fiecare chat este un apelant separat (deosebit prin evenimentele structurate ale instrumentelor din jurnalul local de sesiune al lui Claude, niciodată prin textul conversației); un chat al cărui context a fost compactat este blocat imediat, fără sancțiune, până când a recitit instrucțiunile; iar unui chat care accesează dosarul de date cu instrumentele proprii de fișiere în loc de conector i se înregistrează aceasta ca încălcare de regulă. Un refuz numește cele două apeluri care deschid blocajul, iar meniul derulant de la simbolul IA din aplicație arată starea ca bifă verde sau cruce roșie.

Fiecare funcție de citire și de scriere a datelor este validată pe proprietar față de identitatea de proprietar derivată din licență. Înregistrările de probe marcate ca secrete sunt excluse, fără excepție, din orice funcție de citire, căutare, descărcare și ștampilare; înregistrările marcate ca șterse sunt la fel de invizibile.

### 4. Sistemul de instrucțiuni

Îndrumarea modelului sosește în trei straturi, cu specificitate strict crescătoare și rezidență strict descrescătoare.

Instrucțiunea de nucleu este livrată o singură dată, în interiorul rezultatului initialize. Ea conține mandatul (muncă juridică bazată pe fapte, la standard de Senior Associate), regulile universale (limba dialogului este egală cu limba de sistem IRONSTICK; jurisdicția documentelor generate vine din dosar, niciodată din dialog; disciplina datei; nicio citare din fragmente de căutare — fiecare pagină pe care se sprijină IA trebuie deschisă și citită prin open\_url, oricare ar fi căutarea care a găsit-o; disciplina citărilor și a referințelor; limita de trei încercări pentru fiecare apel de instrument eșuat; disciplina livrării) și descrierea mecanismului seturilor de instrumente însuși, inclusiv explicația câmpului setului de origine.

Regulile de lucru pe fiecare domeniu nu sunt rezidente: ele sunt înmânate modelului cuvânt cu cuvânt și la zi de fiecare dată când deschide setul de instrumente corespunzător, ca parte a încărcăturii de deschidere.

Manualul de lucru complet — nucleul plus toate regulile seturilor de instrumente plus anexele (printre ele formatul de fișier al jurnalului zilnic) — poate fi recitit în orice moment prin instrumentul de citire a instrucțiunilor; aplicația îl livrează în direct la fiecare apel, astfel încât modificările instrucțiunilor ajung la o sesiune în curs fără reconectare.

Trei dintre aceste reguli sunt, în plus, impuse structural și nu textual, prin porți: blocajul instrucțiunilor, disciplina datei și disciplina surselor de legi. Citirea instrucțiunilor însăși este ultima regulă a blocului universal: modul de deblocare a conectorului este enunțat abia după toate regulile precedente, astfel încât un model care ajunge la el le-a citit.

### 5. Suprafața de instrumente și stratul seturilor de instrumente

Pentru ca alegerea instrumentelor să rămână fiabilă, Bridge-ul nu expune deodată toate cele peste 200 de instrumente ale sale. Expune o suprafață redusă de aproximativ treizeci de intrări: șapte instrumente de nucleu (data și ora curente; contextul GUI curent; limba de sistem; jurisdicția dosarului; recitirea instrucțiunilor; confirmarea instrucțiunilor; manualul de utilizare), instrumentul de livrare, douăzeci și doi de deschizători de seturi de instrumente, instrumentul de executare a membrilor și instrumentul de inventar complet. Tot restul există doar ca membri în interiorul seturilor de instrumente.

Deschiderea unui set de instrumente este un apel de instrument obișnuit, fără argumente. Răspunsul livrează, dintr-o singură mișcare: întâi, acolo unde setul are unul, un bloc de context pregenerat determinist, calculat în momentul deschiderii (opt seturi de instrumente au asemenea producători — protocolul de pornire a sesiunii însuși; inventarul curent al fișierelor din spațiul de lucru; cele mai recente zece intrări din memorie ca previzualizare; primele treizeci de legi din biblioteca de legi; lista dosarelor cu activitate sporită; documentele înregistrate azi și e-mailurile primite azi; jurnalul zilnic de azi; instantaneul curent al termenelor și programărilor); în al doilea rând, regulile de lucru ale domeniului, cuvânt cu cuvânt; în al treilea rând, definițiile complete ale instrumentelor membre, cu schemele lor integrale de parametri; în al patrulea rând, un rând de rezervă care trimite la inventarul complet. Un eșec în interiorul unui producător de pregenerare nu împiedică niciodată deschiderea.

Membrii sunt executați prin instrumentul de executare a membrilor, care primește numele exact al membrului și un obiect de argumente. Înaintea executării rulează o validare ușoară a schemei: câmpurile obligatorii trebuie să fie prezente și nevide, iar parametrii de tip întreg, număr și boolean trebuie să poată fi interpretați ca atare; o încălcare returnează schema așteptată în loc să execute. Un nume de membru necunoscut returnează ca sugestie cel mai apropiat nume existent după distanța de editare. Stratul de instrucțiuni plafonează încercările de corectare la trei pentru fiecare apel eșuat, după care modelul trebuie să se oprească și să raporteze eroarea exactă.

Seturile de instrumente nu sunt modale; toate deschizătoarele rămân apelabile în orice moment, iar un instrument poate fi în mod deliberat membru al mai multor seturi de instrumente. Porțile de funcționalitate elimină grupuri întregi: când navigarea GUI nu este activată de utilizator, deschizătorul setului de navigare și toți membrii lui lipsesc din fiecare listă și din fiecare răspuns. Instrumentul de inventar complet listează fiecare membru cu un scop pe un rând și cu setul de instrumente care îl deține și există numai ca soluție de rezervă; descrierile seturilor de instrumente sunt ruterul principal. În total, cele douăzeci și două de seturi de instrumente poartă peste 340 de intrări de membri pentru peste 200 de instrumente distincte.

Costul de context măsurat al acestui aranjament: configurația inițială (instrucțiunea de nucleu plus lista redusă de instrumente) este de aproximativ zece mii de tokeni; o singură deschidere de set de instrumente adaugă între aproximativ nouă sute și șapte mii și jumătate de tokeni, în funcție de set, înaintea conținutului său variabil de pregenerare.

### 6. Formatul definiției instrumentelor

Fiecare definiție de instrument constă din patru părți. Descrierea poartă scopul instrumentului, mandatele sale de comportament și referințele sale încrucișate — și nimic altceva. Schema de intrare poartă fiecare parametru cu propria descriere, inclusiv valori implicite, formate, note de excludere reciprocă și mandate pe parametru; instrucțiunile de folosire a parametrilor trăiesc exclusiv aici. Câmpul de ieșire descrie, înaintea oricărui apel, exact ce returnează apelul, inclusiv ordonări, marcaje și forme de eroare, astfel încât modelul poate judeca potrivirea fără apeluri de probă. Câmpul setului de origine numește setul de instrumente căruia instrumentul îi aparține în primul rând, cu o valoare rezervată care marchează instrumentele de nucleu aflate întotdeauna în lista de nivel superior; un membru întâlnit într-un alt set anunță astfel unde trăiesc mai multe instrumente din familia lui, iar fiecare deschidere de set de instrumente poartă un rând explicativ care afirmă că modelul nu este niciodată închis în setul deschis.

Tot textul adresat modelului este în engleză. Definițiile instrumentelor sunt generate dintr-o singură sursă și verificate automat pentru consecvență, inclusiv concordanța dintre setul de origine al fiecărui instrument și listele de membri ale seturilor. Limitele numerice declarate în schemele instrumentelor sunt impuse în funcțiile executante, astfel încât un maxim declarat este un maxim real.

### 7. Mecanisme universale la rulare

Următoarele mecanisme se aplică pe întreaga suprafață de instrumente și sunt implementate central, nu pe fiecare instrument.

Redirecționarea la cerere în spațiul de lucru: fiecare instrument acceptă un parametru suplimentar care numește un fișier din spațiul de lucru; când este setat, rezultatul complet este scris în acel fișier, iar modelul primește doar calea și mărimea — fără previzualizare. Conținutul mare nu curge astfel niciodată prin fluxul de tokeni al modelului, în nicio direcție, iar calea poate fi folosită direct oriunde se acceptă o cale sursă.

Protecția la depășire: orice rezultat care depășește limita conectorului — zece mii de caractere, o singură constantă centrală, ridicată la patruzeci de mii (de patru ori limita standard) pentru Claude Desktop și ChatGPT Desktop — este scris automat într-un fișier generat din spațiul de lucru. Modelul primește doar o notă care arată mărimea totală și numărul de rânduri, numele fișierului, asigurarea explicită că nimic nu s-a pierdut, cele două comenzi de continuare (citire pe intervale; căutare de tipar în fișier) și interdicția expresă de a cere din nou apelul — fără previzualizare, astfel încât conținutul mare este citit în spațiul de lucru. Singura excepție este cititorul de instrucțiuni, al cărui pachet sosește întotdeauna complet; deschizătoarele de seturi de instrumente sunt deviate ca orice alt rezultat. Niciun instrument nu își scurtează propriul rezultat — limita conectorului este singurul loc în care se decide mărimea. Rezultatele de peste zece megabyți nu sunt deviate, ci primesc ca răspuns o instrucțiune de restrângere care numește filtrele aplicabile, fiindcă și spațiul de lucru plafonează acolo mărimea fișierului. Sunt exceptate de la deviere instrumentele de citire ale spațiului de lucru înseși (plafonate intern; devierea lor ar duce la recursivitate) și apelurile care au cerut deja redirecționarea în spațiul de lucru.

Poarta datei: orice instrument care scrie în IRONSTICK este refuzat apelanților externi dacă acel apelant nu a preluat data și ora curente în ultimele treizeci de minute. Refuzul numește remediul — preluați ora, apoi repetați apelul identic. Fereastra este ținută pe fiecare IA de desktop și este deliberat scurtă, pentru ca o conversație proaspătă să nu poată moșteni o preluare veche și pentru ca trecerile peste miezul nopții să fie prinse. Apelanții din aplicație nu sunt afectați. Aceasta există fiindcă altfel modelele externe datează înregistrările după perioada lor de instruire, în loc de data reală.

Poarta legilor: accesul web pentru legi și norme este refuzat structural până când a fost consultată biblioteca de legi internă; refuzul trimite la procedura bibliotecii. Orice sursă de lege care este totuși preluată de pe web trebuie raportată în bibliotecă prin instrumentul de înregistrare — stratul de instrucțiuni clasifică omisiunea drept încălcare a unei îndatoriri, iar rezultatele care ating surse juridice poartă un marcaj pentru auditabilitate.

Blocajul navigării: opt ecrane sunt declarate protejate — cele patru formulare de captare (captarea documentelor, captarea documentelor legată de dosar, captarea cronicii dosarului, captarea clientului), formularul de creare a dosarului, formularul de atribuire instituție/persoană și editorul de text. Cât timp fereastra principală a utilizatorului arată oricare dintre acestea, fiecare funcție de navigare GUI și de export este refuzată central, atât pentru apelurile directe, cât și pentru executarea membrilor, cu un mesaj care numește ecranul protejat, interzice navigarea și îi cere modelului să răspundă cu datele pe care le are și să ofere deschiderea numai după ce utilizatorul a terminat și a salvat. Un model nu poate, așadar, distruge niciodată munca nesalvată a utilizatorului prin schimbarea ecranelor. Instrumentul de deschidere a paginilor web este exceptat de la acest blocaj, fiindcă nu navighează aplicația.

Oferta de navigare: rezultatele celor aproximativ patruzeci de instrumente a căror ieșire descrie un obiect care poate fi deschis în GUI — un dosar, o persoană, o instituție, un client, un anumit element de probă, un e-mail, intrări de calendar sau termene — primesc un rând adăugat care propune ca modelul să îi ofere utilizatorului deschiderea obiectului direct în IRONSTICK, numind apelul exact de navigare. Acolo unde argumentele de apelare conțin identificatorul obiectului, propunerea este concretă; pentru rezultate de căutare și de listare ea trimite la identificatorul unui rezultat. Rândul cere explicit acordul utilizatorului înainte de navigare, în afară de cazul în care cererea utilizatorului era deja o comandă de afișare/deschidere. Oferta este adăugată numai după tratarea depășirii și numai când rezultatul nu este o eroare, navigarea este activată și blocajul dur al navigării nu este activ — blocajul câștigă întotdeauna în fața propunerii.

Propagarea apelantului: identitatea apelantului însoțește fiecare executare și determină starea pe fiecare IA — briefingul de lucru, o dată pe zi, este urmărit pe fiecare IA de desktop, listările sarcinilor de verificare reciprocă exclud sarcinile proprii ale apelantului, iar jurnalul de apeluri atribuie fiecare rând.

Jurnalele de apeluri: fiecare program Bridge ține lângă el un jurnal local cu ora, numele instrumentului, succesul sau eșecul și mărimea răspunsului, și niciodată conținutul. Un al doilea jurnal de diagnostic, mai detaliat, în dosarul de date, este oprit implicit. Când este pornit pentru depanare (analiza traseelor, optimizarea seturilor de instrumente), înregistrează câte un rând pentru fiecare apel de instrument al tuturor IA conectate — marca de timp, apelantul, numele efectiv al instrumentului (la executarea membrilor, membrul interior), parametrii apelului (până la trei sute de caractere fiecare), mărimea rezultatului măsurată înaintea oricărei devieri la depășire, durata executării și un indicator de eroare. Poate fi comutat fără repornire, este tăiat automat când depășește doi megabyți și este menit să fie oprit ulterior.

Plierea diacriticelor și a scripturilor: fiecare căutare de cuvinte-cheie, căutare de tipar și comparație din tot Bridge-ul pliază majusculele și diacriticele pentru toate cele unsprezece limbi de sistem, inclusiv i-ul turcesc cu și fără punct (înlocuit înaintea trecerii la minuscule, fiindcă altfel schimbă lungimea), literele-variantă chirilice și ligaturile latine; plierea este stabilă ca poziție acolo unde se raportează poziții.

Convențiile rezultatelor: eșecurile sunt returnate ca text care începe cu un prefix de eroare și sunt marcate ca erori în rezultatul MCP; modelul este instruit să corecteze și să reîncerce de cel mult trei ori, apoi să se oprească și să raporteze. Marcajele structurate, autodescriptive, încorporate în rezultate (pentru operații de memorie, porți și altele asemenea) sunt stabile și documentate în câmpurile de ieșire respective.

Garda acoperirii citirii: când un model trage o descărcare integrală de dosar sau livrarea în spațiul de lucru a cititorului de dosar întreg, Bridge-ul consemnează, exact la rând, care intervale ale fișierului de descărcare au fost citite efectiv. Cât timp rămân intervale necitite, fiecare răspuns de instrument reușit — căutări, potriviri de tipar, totul — poartă intervalele exacte de rânduri necitite împreună cu un procent de citire; o citire completă nu poate fi pretinsă până când evidența nu o confirmă. Odată ce fișierul este citit în întregime, reamintirile încetează, iar următoarea citire pe interval confirmă o singură dată că toate rândurile au fost citite, ceea ce încheie obligația de citire pentru acel fișier. Sunt urmărite descărcările integrale de dosar, fișierele de antet și de digest ale instrumentului de pregătire a dosarului și fiecare text integral de document care a fost deviat în spațiul de lucru; citirile parțiale ale altor rezultate redirecționate rămân legitime și tăcute. Starea acoperirii este păstrată lângă spațiu și supraviețuiește repornirilor aplicației, iar un fișier citit până la capăt este înregistrat pentru pregătirea dosarului — citirea rămâne valabilă chiar și după ce curățarea de la pornire a eliminat fișierul.

Garda relivrării: după o livrare reușită de fișier a cărei sursă se află în spațiul de lucru, un fișier-marcaj de lângă spațiu consemnează numele livrat și ora (livrările transmise ca conținut inline sunt consemnate și ele, sub numele lor de livrare). Fiecare editare, scriere sau normalizare ulterioară a unui fișier consemnat acolo primește ca răspuns reamintirea că utilizatorul are în mână versiunea livrată depășită și că fișierul corectat trebuie livrat din nou sub un număr nou de versiune. Răspunsul de livrare însuși preia, în plus, de la aplicație starea curentă a acoperirii citirii printr-un punct de acces intern care nu este instrument și semnalează o livrare făcută în ciuda intervalelor necitite.

Garda ciornelor nelivrate: intrarea în jurnalul zilnic — semnalul modelului că încheie lucrul — enumeră pe nume fiecare fișier de lucru versionat scris de model în sesiune care nu a fost livrat niciodată, cu instrucțiunea de a livra acum artefactul finalizat; munca ce există doar în spațiul de lucru nu ajunge niciodată la utilizator.

Garda formatului de e-mail: fiecare răspuns al instrumentelor de citire și de preluare a e-mailurilor poartă trimiterea fixă potrivit căreia instrucțiunea obligatorie pentru formatarea și livrarea e-mailurilor — casetă de copiere pentru subiect, casetă de copiere pentru corp, secțiunea destinatarilor, conținut obligatoriu, reguli de limbă — vine de la instrumentul de specificație a formatului de e-mail, care trebuie preluat înainte de a construi orice e-mail și urmat întocmai.

Executarea în fundal: instrumentele de date și de analiză rulează separat de interfața de utilizator din interiorul aplicației, cu propriul registru de instrumente și propriile conexiuni la baza de date; partea de interfață doar rutează, aplică porțile și post-procesează. Accesele îndelungate la dosare mari nu blochează, așadar, interfața de utilizator. Dacă partea de fundal se oprește, executarea continuă în partea de interfață, iar partea de fundal este repornită la următoarea ocazie. Instrumentele care au nevoie de interfața de utilizator — navigarea, dialogurile de confirmare, browserul încorporat, preluarea e-mailurilor și instrumentele de propunere trecute prin poarta de revizie — rulează întotdeauna acolo.

### 8. Porți de interacțiune

Trei instrumente răspund în mod deliberat la primul lor apel cu o întrebare în loc de un rezultat; la toate, răspunsul literal "unknown" este întotdeauna valid și niciodată sancționat.

Poarta livrării: instrumentul de livrare a fișierelor, apelat fără declarația de formalitate, nu livrează nimic și întreabă dacă livrarea este unul dintre cele patru feluri de artefacte formale — act de procedură, e-mail către instanță, intrare de cronică, intrare de jurnal zilnic — sau niciunul dintre ele. Răspunsul "no" livrează imediat — dar afirmația este verificată pe conținut: un detector determinist inspectează fișierul, iar conținutul cu formă de scrisoare sau de act de procedură (formule de adresare și de încheiere în șase limbi, un bloc de destinatar, marcaje juridice, un bloc de identitate) refuză pretenția de informal și consemnează încercarea în jurnal; un asemenea conținut nu are cale informală. Răspunsul cu un fel formal returnează, tot fără a livra, instrucțiunea obligatorie de formatare pentru exact acel fel; abia apelul repetat, care poartă indicatorul de confirmare că fișierul a fost verificat față de această instrucțiune, livrează efectiv. O gardă a seriei de versiuni refuză în plus prima livrare sub o rădăcină nouă de nume de fișier cât timp există deja o serie versionată livrată cu același număr de dosar — un document nu poate fi redenumit pentru a-i reseta contorul de versiuni; un document cu adevărat diferit cere o declarație conștientă, consemnată în jurnal. Această poartă rulează în aplicația însăși; front-end-ul doar transmite apelul mai departe. Documentele și scrisorile nu ajung niciodată la utilizator ca text de chat sau casete de copiere — fiecare acces de scriere la un fișier de lucru text poartă această reamintire, iar singurul artefact legitim de tip casetă de copiere rămâne e-mailul, conform instrumentului său de format.

Poarta căutării: căutarea centrală de probe, la primul ei apel, nu caută nimic și întreabă trei lucruri — ce fel de element este căutat (document intrat, document ieșit, probă cu document atașat, declarație/transcriere, notă de cronică sau necunoscut), domeniul, acolo unde este prezent un identificator de client (numai acest dosar, toate dosarele clientului sau necunoscut — cu lista de dosare a clientului inclusă în întrebare) și forma dorită a răspunsului. Formele de răspuns sunt: o listă curată de identificatori (varianta implicită recomandată; rezultatele sunt apoi deschise individual prin cititorul de probe), rezultate compacte cu contextul potrivirii sau rezultatul complet scris într-un singur fișier din spațiul de lucru.

Poarta dosarului întreg: cititorul de dosar întreg, la primul său apel, nu încarcă nimic și raportează cât de mare este de fapt dosarul — numărul de probe și volumul acumulat aproximativ al conținutului din titluri, descrieri, texte integrale de documente și transcrieri — apoi îi cere modelului să decidă între instrumentele de căutare țintită și un apel repetat cu argumentul de livrare în spațiul de lucru, care scrie conținutul complet al dosarului, normalizat OCR, în spațiul de lucru și returnează doar identificatorul fișierului.

Poarta verificării: pentru actele de procedură formale instrumentul de livrare cere în plus o atestare proaspătă de la verificatorul determinist de acte de procedură. Acel verificator scanează fișierul finalizat din spațiul de lucru pe opt clase de afirmații — referințe la probe în lista de anexe și în textul curent (ștampile și numere, inclusiv proveniența citării legată de document: fiecare element citat sau anexat trebuie să conteze ca citit pentru acest document — preluat integral sau cu fișierul său din spațiul de lucru citit până la capăt; o citire contează două ore, fiecare livrare a aceluiași document prelungește cu două ore elementele citate de el, iar verificarea sau livrarea unei alte rădăcini de document resetează citirile anexelor; un rând de anexă poate declara un interval de pagini, obligația de citire rămâne documentul întreg), citări de legi față de biblioteca verificată (un articol absent din textul de lege verificat este o constatare contrazisă; citarea cere în plus proveniența citirii — fiecare citire din bibliotecă este înregistrată pe rulare a aplicației, cu numerele de articol efectiv returnate, iar un articol citat fără o asemenea înregistrare de citire este o constatare contrazisă, astfel încât articolele de presă, rezumatele web și memoria modelului nu pot întemeia niciodată o normă; subreferințele citate, precum alineatul și punctul, sunt verificate ca existență în zona de text a articolului; o sursă absentă din bibliotecă blochează până când este integrată sau respinsă), citate cuvânt cu cuvânt — fiecare trebuie găsit integral în textele integrale ale întregului fond de date sau în biblioteca de legi; dacă provine dintr-un document al altui dosar, verificatorul numește acel document, și doar acela trebuie citit, nu prezentarea de ansamblu a celuilalt dosar; un citat negăsit în nicio sursă este contrazis și blochează livrarea, un citat ale cărui ghilimele au fost doar scoase sau a cărui formulare a fost ușor schimbată rămâne blocat, iar citatele eliminate cu totul sunt raportate utilizatorului la livrare —, numere de dosar în formatul n/nnn/aaaa, sume sub o regulă de potrivire exactă (forma exactă înregistrată), datele de bază ale părților literă cu literă, inclusiv diacriticele, coduri numerice personale românești (CNP) și IBAN prin validarea sumei de control și părți numite — fiecare persoană sau societate din registrul de entități care este numită în document trebuie să fi fost citită (profil) și verificată pe legături pentru acest document, refuzul numind ambele apeluri și recomandând verificarea clusterelor. Constatările sunt clasificate ca verificate, neverificate sau contrazise; orice constatare contrazisă sau lege lipsă nerezolvată duce la un verdict de blocare. Atestarea se leagă de starea exactă a fișierului — orice editare o anulează — iar după cinci rulări de verificare eșuate procesul se oprește, îi cere modelului să se oprească și să raporteze și notifică utilizatorul direct în aplicație.

Poarta de consimțământ pentru sursele de legi: o sursă de lege raportată de model nu mai este integrată pe tăcute. Cererile se adună într-un singur dialog de consimțământ din aplicație — sursă, jurisdicție, IA solicitantă — unde intrările bifate sunt preluate, verificate și stocate imediat, iar intrările nebifate sunt respinse; o sursă respinsă transformă citările ulterioare ale ei în note vizibile de tip neverificat-prin-decizia-utilizatorului, în loc de blocaje tăcute. Monitorul de consistență a datelor poartă apoi legile numai pentru ciclul periodic de revizie.

Regula livrării numai din depozit: instrumentul de livrare acceptă exclusiv o cale sursă din interiorul depozitului de lucru al aplicației; conținutul inline și căile din afara depozitului sunt refuzate pentru orice tip de fișier. Aceasta menține atestarea de verificare, urmărirea relivrărilor, versionarea și acoperirea citirii atașate, fără excepție, fiecărui artefact livrat.

Întrebarea privind hotărârile judecătorești deschise: dacă pe lista de evaluare rămân hotărâri neevaluate, instrumentul de livrare nu livrează deocamdată un act de procedură sau un e-mail către o instanță ori o autoritate, ci indică numărul hotărârilor deschise — pe cele care aparțin acestui dosar sau instanțelor lui, cu ID-urile lor — și cere răspunsul utilizatorului: evaluare acum sau mai târziu. „Acum” oprește livrarea și returnează sarcina de lucru (evaluare, citirea evaluărilor instanței și ale completului, revizuirea documentului, o nouă verificare și livrare); „mai târziu” livrează și adaugă la rezultat întrebarea de revenire obligatorie. Întrebarea revine la fiecare livrare formală cât timp lista nu este goală.

### 9. Pornirea sesiunii și cadrul

Deschiderea setului de instrumente pentru pornirea sesiunii rulează întregul protocol de pornire dintr-o singură mișcare și îl scrie într-un fișier fix, numit, din spațiul de lucru; răspunsul direct returnează doar ancora de dată, limba sistemului și contextul GUI curent, iar modelul citește restul — intrările de memorie scadente, briefingul zilnic, termenele, programările, sarcinile deschise de la cealaltă IA și indexul ultimelor zece intrări din jurnalul zilnic — cu o singură citire din spațiul de lucru. Membrii acestui set de instrumente rulează din nou, la cerere, bucăți individuale.

Instrumentul de dată și oră răspunde cu un singur rând (dată, oră, fus orar, ziua săptămânii, sincronizat prin NTP unde este posibil, altfel ceasul sistemului) și poartă mandatul permanent ca fiecare tură de dialog să înceapă cu data curentă și ca datele să nu fie niciodată ghicite. Instrumentul de context GUI raportează ce ecran al ferestrei principale a aplicației este deschis, cu breadcrumb și cu clientul și dosarul deschise. Instrumentul pentru limba sistemului returnează identificatorul de limbă care guvernează dialogul și listele care traversează dosarele; instrumentul de jurisdicție returnează, pe dosar, jurisdicția care guvernează documentele generate și terminologia, este obligatoriu înaintea oricărei munci pe documente și cere întrebarea utilizatorului când nu este setată. Instrumentul de briefing de dimineață returnează briefingul structurat de azi, cu identificatori și marcaje, astfel încât modelul să poată acționa pe fiecare element; instrumentul de briefing de lucru urmărește, pe fiecare IA de desktop, dacă acea IA a fost deja informată azi, returnând intrările recente din jurnalul zilnic numai la primul contact al zilei.

### 10. Spațiul de lucru

Spațiul de lucru este dosarul de lucru al modelului pentru tot ce este mare. El oferă scriere cu posibilitate de adăugare pentru asamblarea pe bucăți; citire pe intervale cu rânduri numerotate, ale căror numere corespund direct editoarelor bazate pe rânduri; înlocuire exactă de text cu cerință de unicitate, o reîncercare tolerantă la spații și la ghilimele tipografice care cere în continuare unicitate și o soluție de rezervă instruită, de localizare și copiere, la orice altă nepotrivire; inserare după număr de rând sau după un marcaj; ștergerea unui interval de rânduri; înlocuirea atomică a unui interval de rânduri ca operație sigură de restructurare; căutare de tipar insensibilă la majuscule și diacritice într-un fișier sau în toate, cu un plafon de cincizeci de rezultate și rânduri de context opționale; un cuprins markdown care leagă titlurile de intervale de rânduri fără a citi fișierul; o listare a directorului; copiere; o comparație pe rânduri între două fișiere, care ascunde rândurile comune; o normalizare orientată spre livrare, care aplatizează markdown-ul structural la convențiile actelor de procedură, protejează referințele, completează la șapte cifre referințele scurte la probe și normalizează sfârșiturile de rând; uniformizarea spațiilor; curățarea sfârșiturilor de rând și a caracterelor invizibile; copii simplificate pentru comparație (cu litere mici sau fără diacritice), întotdeauna într-un fișier țintă separat; contoare de cuvinte, litere și rânduri; și ștergere.

Un registru ușor de stare reține note cheie-valoare pentru sesiunea în curs — înainte de toate care fișier este ciorna principală curentă — cu semantică de citire, setare și ștergere, supraviețuind repornirilor aplicației.

Ciclul de viață: spațiul este de lungă durată și supraviețuiește repornirilor; notele proprii ale modelului, registrul de stare, metadatele fișierelor și evidența acoperirii citirii se păstrează, în timp ce descărcările de instrumente din zilele anterioare sunt curățate la fiecare pornire, iar fișierele neatinse timp de o sută optzeci de zile sunt șterse (versiunea finală a unui act de procedură după trei sute șaizeci de zile). Fiecare acces prin orice instrument al spațiului de lucru — inclusiv o simplă citire — resetează ceasul de ștergere al acelui fișier; simpla apariție în listarea directorului nu. Stratul de instrucțiuni obligă modelul să își șteargă fișierele de sarcină când o sarcină se încheie și să mute constatările durabile în sistemul de memorie.

### 11. Sistemul de memorie

Memoria IA persistentă este un carnet care traversează chaturile, partajat de toate IA conectate și de asistentul integrat. O intrare conține cel mult o mie de caractere — descrierile setului de instrumente și ale instrumentelor cer comprimarea la strictul esențial și împărțirea materialului mai mare — și este legată cel puțin de un client sau de un dosar (la o legătură cu dosarul clientul este derivat și corectat automat) și, opțional, de un element de probă, un e-mail, o entitate sau o instituție, toate validate. Intrările trebuie scrise în limba de sistem IRONSTICK, indiferent de limba dialogului, iar modelului îi este interzis să își folosească propriile fișiere private de memorie pentru cunoștințe de dosar, fiindcă acelea nu ajung nici la cealaltă IA, nici la utilizator. O dată scadentă opțională face ca o intrare să semene cu un termen: intrările scadente și cele depășite apar primele în protocolul de pornire a sesiunii și în vizualizările de termene ale aplicației.

Căutarea poate fi filtrată după oricare dintre identificatorii legați și după data scadentă (tot, exact azi sau o fereastră de zece zile în jurul unei date date), returnează cele mai noi întâi, cu o valoare implicită de douăzeci și un maxim de cincizeci de rezultate, și marchează intrările de carnet scrise de utilizator ca strict numai pentru citire pentru IA. Actualizarea înlocuiește textul și/sau mută, setează ori șterge data scadentă; tot ce nu este furnizat rămâne neschimbat. O actualizare al cărei text depășește limita este respinsă cu o declarație de capacitate care numește lungimea trimisă, limita, ocuparea curentă a intrării și restul liber; fiecare actualizare de text reușită raportează la fel ocuparea și restul; în ambele cazuri, odată ce rămân libere mai puțin de trei sute de caractere, răspunsul adaugă recomandarea permanentă fie de a reface întreaga intrare, fie de a crea o intrare suplimentară și de a lăsa o trimitere încrucișată în cea veche. Ștergerea este ireversibilă și refuză intrările de carnet ale utilizatorului și intrările de sarcini. Stocarea, actualizarea și ștergerea unei intrări deschid fiecare o fereastră de aprobare în aplicație; modificarea intră în vigoare numai după ce utilizatorul o aprobă. Întreținerea este construită pentru proceduri de lungă durată: intrările legate de un dosar nu se șterg niciodată automat. Intrările fără dosar se șterg după un an fără folosire; fiecare intrare returnată de o căutare în memorie și fiecare actualizare reînnoiește acel an, deoarece curățarea măsoară vârsta față de cel mai recent dintre momentul creării și ultimul acces. Intrările de carnet ale utilizatorului nu expiră niciodată automat.

Datele de bază, persoanele, relațiile și documentele nu își au locul în memorie: descrierile le îndreaptă către instrumentele de propunere și către captarea documentelor.

### 12. Termene, programări și calendar

Instrumentele de termene livrează termenele active fie compact (titlu, dată scadentă, zile rămase, dosar, cu intrările marcate ca secrete excluse), fie cu descrieri pe fiecare intrare și marcaje explicite de depășit și urgent (urgent însemnând zece zile sau mai puțin), precum și o formă de enumerare ordonată după urgență, cu filtre de perioadă (toate grupate după criticitate, numai critice, scadente în curând, azi, săptămâna aceasta, săptămâna viitoare sau o anumită dată). Instrumentul de programări enumeră o zi sau o perioadă, cu termenele de judecată întâi — termenele de judecată importate din portal, apoi termenele de judecată din calendar, apoi restul intrărilor de calendar. Cititorul de calendar listează intrările global sau pe dosar, cu interval de date opțional.

Instrumentul de captare în calendar nu scrie niciodată: deschide formularul de calendar al aplicației precompletat cu titlu, dată, ore, descriere și legătură opțională cu dosarul, iar utilizatorul completează și salvează. Descrierea lui impune o verificare obligatorie a duplicatelor înaintea fiecărui apel: citiți întâi calendarul aceleiași zile, comparați numai după dată, ignorând orele, iar la orice intrare asemănătoare arătați-o utilizatorului și întrebați dacă este același eveniment, apelând instrumentul numai după ce utilizatorul confirmă o intrare nouă.

### 13. Jurnalul zilnic

Instrumentele jurnalului zilnic scriu și citesc jurnalul zilnic care traversează dosarele. Adăugarea, la instrucțiunea utilizatorului, vizează o zi (implicit azi, cu data preluată prin instrumentul de oră), adaugă întotdeauna la o zi existentă cu un separator și nu suprascrie niciodată, leagă dosarele vizate printr-o listă de dosare și așteaptă conținutul ca markdown curat, în stilul definit în anexa instrucțiunilor. Un instrument de notă adaugă un singur rând de eveniment în jurnalul zilnic de azi, cu o referință opțională la dosar. Instrumentul de format returnează formatul obligatoriu al fișierului de jurnal zilnic. Citirea funcționează după dată, interval sau cele mai noi întâi, cu opțiune de text integral și cu restrângere pe dosar; căutarea este o căutare de cuvinte-cheie insensibilă la diacritice în titluri și texte integrale, cu dată, titlu și fragment de context pentru fiecare rezultat. Ambele forme de listare au ca valoare implicită zece și ca plafon treizeci de intrări. Deschiderea setului de instrumente livrează deja integral jurnalul zilnic de azi, cu o notă despre câte alte intrări există pentru ultimele două săptămâni.

### 14. Accesul la dosare

Rezolvarea dosarului funcționează după numărul de dosar, după numele unei părți implicate (tolerant la diacritice, acoperind adversarul, reclamantul, titlul și clientul — obligatoriu ori de câte ori utilizatorul numește o parte fără număr, fiindcă multe dosare nu au deloc număr) și prin lista de dosare a clientului. Procedurile conexe vin din ierarhia dosarelor ca intrări părinte, copil și din același grup.

Fiecare document pe care îl citește IA poartă un marcaj de proveniență: documentele intrate de la partea adversă sau de la o autoritate sunt marcate ca trebuind verificate critic, cele ieșite ca punct de vedere al clientului. Acest lucru este valabil deopotrivă pentru Bridge și pentru chatul integrat.

Instrumentul de prezentare rapidă returnează, într-un singur apel, fiecare câmp din fila dosarului, fiecare câmp din fila clientului, un dosar de portal legat, opțional, și ultimii cincisprezece identificatori de probe cu datele de intrare — gândit ca orientare înaintea oricărui acces la textul integral. Cititorul de cronică returnează cronica unui dosar cu cele mai noi intrări întâi, compact și fără texte integrale, cu filtre de dată și o limită de până la cincizeci de intrări, și este răspunsul rapid desemnat pentru "ce s-a întâmplat ultima dată" — nu contează deloc pentru pregătirea dosarului.

Pregătirea dosarului este un instrument și o poartă. Instrumentul de pregătire livrează, într-un singur apel, antetul (profil și jurisdicție) și digestul fiecărui document — identificator, dată, tip, titlu, rezumatul de la momentul captării, referințe încrucișate și mărimea textului integral — care servește drept cronică. Răspunsul începe întotdeauna cu o notă care spune unde se află antetul și digestul (în răspuns când întregul răspuns rămâne sub limita conectorului, altfel ca două fișiere din spațiul de lucru, care trebuie citite până la capăt) și care sunt cele mai noi cinci documente de citit integral. Poarta pregătirii refuză apoi, pentru apelanții externi, două trepte de ieșiri privind dosarul: o notă sau o intrare într-un dosar (jurnal, notă zilnică, intrare de cronică, notă de dosar) până când profilul, jurisdicția, digestul și cele mai noi cinci intrări de cronică (note fără PDF sau transcriere; imaginile sunt permise) sunt citite integral — astfel încât o serie în curs de intrări de cronică le respectă pe ultimele, fără a impune citirea unor documente grele pentru o simplă notă; o judecată asupra dosarului (verificarea actului de procedură, predare, export) în plus până când fiecare document citat sau anexat este citit integral. Citirile sunt înregistrate pentru fiecare IA de desktop într-o evidență stocată, valabile trei zile sau până la următorul document intrat al dosarului; documentele ieșite și înregistrările de probe nu invalidează niciodată o citire. Aceeași evidență alimentează meniul derulant de la simbolul IA. O a treia treaptă, mai joasă, păzește conținutul dosarului însuși: fiecare instrument de conținut de dosar — cronică, cronologie, căutări după cuvinte-cheie, de pasaje și de perioadă, texte integrale, contradicții, declarații, obligații, termene, calendar, corespondență, utilizare, probe depuse, lanțuri de scrisori, liste de anexe, ștampile, media, instituții, etichete, evaluare și note de instrucțiuni — este refuzat pentru un dosar al cărui digest apelantul nu l-a citit, refuzul numind instrumentul de pregătire; a treia încercare refuzată pe același dosar se înregistrează ca încălcare de regulă. Contoarele de pregătire se resetează la fiecare citire a instrucțiunilor și la fiecare pornire de sesiune.

Citirea completă a dosarului este protejată de poarta dosarului întreg. Descărcarea în spațiul de lucru este cea mai rapidă cale completă: ea asamblează întregul text al dosarului în interiorul aplicației, netrunchiat, normalizează anomaliile OCR (spații repetate, amestecuri de sfârșituri de rând, spații neseparabile, cratime moi, caractere de lățime zero), îl scrie direct în spațiul de lucru și returnează doar identificatorul fișierului, cu statistici; dosarele foarte mari se împart în fișiere-părți numerotate. Filtrele de domeniu restrâng descărcarea la direcția intrări, ieșiri sau ambele, iar o listă de identificatori de probe descarcă exact acele înregistrări — modul desemnat de a citi complet un document foarte mare, cu dosarul derivat din probă.

Cititorul de probe este baza obligatorie pentru orice afirmație de fond: el încarcă o înregistrare cu textul integral extras al documentului (complet și netrunchiat; peste limita conectorului sosește întreg în spațiul de lucru) și, acolo unde există, textul integral al chatului sau al transcrierii (acoperind chaturile de mesagerie și transcrierile de telefon, de ședință, de audiere și de instanță), plus rezumatul calificat, descrierea și metadatele, care sunt declarate a nu fi un înlocuitor al textului integral. Dacă nu apare niciuna dintre secțiunile de text integral, nu există text extras, iar modelul nu are voie să facă afirmații de fond despre înregistrare. O listă separată prin virgule de până la doisprezece identificatori citește mai multe înregistrări într-un singur apel. Un instrument de inventar media raportează existența, tipul, data și mărimea atașamentelor de imagine, audio și video ale unei înregistrări sau ale unui dosar, afirmând explicit că conținutul media nu poate fi citit ca text și că instrumentul există pentru ca o înregistrare care are numai media să nu fie clasificată greșit ca goală.

Etichetele sunt prezentate ca bilețele libere ale utilizatorului pe înregistrările de probe — textul este informația, culoarea nu are un înțeles fix, iar o înregistrare etichetată este declarată un marcaj puternic de relevanță. Trei moduri livrează o privire de ansamblu globală cu numărători și înregistrările la care se face referire, toate etichetele unui dosar sau o căutare de text în textele etichetelor, cu un filtru de domeniu care separă etichetele personale de cele legate de dosar. Cauzele comune listează întregul peisaj de dosare al unui client ca grupuri cu dosare imbricate, inclusiv dosarele părinte și copil. Evaluarea stocată a dosarului poate fi obținută pe fiecare dosar.

### 15. Căutarea în interiorul dosarului

Căutarea centrală de probe punctează peste toate câmpurile probelor, textele integrale extrase ale documentelor și conținuturile transcrierilor, cu interogările din mai multe cuvinte combinate conjunctiv, independență de diacritice și un spor pentru frază; rezultatele sunt ordonate după relevanță fără a expune cifrele punctajului, fiecare rezultat indică ce câmp l-a declanșat, valoarea implicită este de cincisprezece și maximul de treizeci de rezultate, iar forma răspunsului urmează alegerea făcută la poarta de căutare. Căutarea de pasaje împarte documentele și transcrierile în ferestre de paragraf și de propoziție și returnează pasajele care se potrivesc cel mai bine, cu referința lor — localizând unde anume într-un text stă ceva, nu doar în ce înregistrare — cu o potrivire tolerantă la OCR care trece peste erorile de captare, un spor pentru frază și restrângere la exact un dosar sau la toate dosarele exact unui client (instrumentul desemnat pentru întrebările de tipul "a făcut X vreodată, undeva"; niciodată între clienți), cu valoarea implicită de opt și plafonul de douăzeci de pasaje. Un instrument de interval de date listează probele dintre două date. Instrumentul dedicat de găsire a corespondenței de la o parte este obligatoriu când utilizatorul cere documente de la sau către o anumită parte: el potrivește partea, tolerant la diacritice, cu înregistrările de implicare, filtrează după direcție (către mine, de la mine sau ambele), exclude chaturile și transcrierile, ascunde implicit capturile de ecran făcute de utilizator, arătându-le totuși numărul, și ordonează cele mai noi întâi — deosebit expres de căutarea după cuvinte-cheie, care ar returna și înregistrările care doar menționează partea.

### 16. Instrumente deterministe de analiză

Aceste instrumente calculează din înregistrări fără nicio implicare a IA. Cronologia returnează toate elementele unui dosar ordonate descrescător după data evenimentului, cu referință, marcă de timp, tip de înregistrare și titlu, cu valoarea implicită de trei sute și plafonul de cinci sute de elemente. Colectorul de contradicții, în mod deliberat, nu judecă: el adună până la o sută douăzeci de elemente candidate (implicit șaizeci), opțional filtrate la o entitate, cu referință, dată, participanți și conținut scurt, și lasă modelului judecata și citirile ulterioare de text integral. Instrumentul cine-ce-a-spus găsește fiecare element în care apare o persoană — ca participant, în titlu sau în text ori în formularea unei transcrieri — independent de diacritice, marcând sursa fiecărui rezultat, cu valoarea implicită de patruzeci și plafonul de o sută. Instrumentul rețelei de participanți numără ce persoane și entități apar împreună în aceleași elemente, global sau pe dosar, opțional concentrat pe o entitate. Instrumentul de obligații listează elementele deschise marcate cu termen, după data scadentă, cu numărători de zile, descrieri, referințe și marcaj de depășit/urgent.

Alte cinci instrumente deterministe servesc la caracterizarea judecătorilor și procurorilor individuali; drept hotărâri contează numai documentele intrate de la o instanță sau de la un parchet. Instrumentul de listare a hotărârilor returnează fiecare hotărâre în care o persoană a făcut parte din complet ca judecător sau a acționat ca procuror, în toate dosarele, luând în calcul numai un nume din antet (compunerea instanței) sau din blocul de semnături — un nume în textul curent nu contează, iar grefierii nu sunt listați niciodată. Cititorul de structură desface o hotărâre în instanță, secție, număr de dosar, fel, număr și dată, ședință, complet, fraza care numește părțile și obiectul, dispozitivul cuvânt cu cuvânt, cuvintele-cheie de soluție, calea de atac, pronunțarea, citările de legi cu starea lor în bibliotecă și mărimea motivării, fiecare cu poziția sa de caracter, raportând ce lipsește ca negăsit. Colectorul de acte depuse scrie fiecare act depus în dosar până la data hotărârii în două fișiere din spațiul de lucru — documentele ieșite ale clientului și documentele intrate ale părții adverse — restrâns la documentele adresate unei instanțe sau unui parchet, fiecare numai cu documentul său principal (e-mailul de însoțire și anexele tăiate), listând ca neatribuit ceea ce nu poate fi clasificat; fișierele lui poartă obligația de citire. Comparația hotărârii măsoară ce parte din motivarea proprie a instanței coincide, ca text, cu actele depuse de client, cu ale părții adverse, cu ambele, cu text de lege din bibliotecă sau cu nimic (formularea proprie a instanței), măsoară separat redarea pozițiilor părților și listează pasajele care coincid cu rata lor de coincidență de la șaptezeci la sută în sus, cele mai mari întâi, în formularea originală, cu pozițiile de caracter. Comparația de documente pune față în față oricare două documente, între clienți și dosare diferite, clasifică pasajele care coincid ca text de lege, sursă citată comună sau comune numai acestor două și își deschide răspunsul cu îndrumarea de a citi integral ambele documente înainte de a se afirma ceva despre o legătură.

O listă de evaluare transformă aceste măsurători într-o cunoaștere durabilă despre instanțe și judecători. Fiecare înregistrare marcată ca hotărâre judecătorească — bifată de utilizator la înregistrare, precompletată de recunoaștere sau găsită de rularea în fundal în arhiva existentă — este pusă în coadă cu date de antet determinate determinist: instanța, completul și componența, judecătorii și grefierii cu ID-urile lor din datele de bază, numărul, data și rezultatul. IA parcurge lista pe rând; instrumentul de pregătire livrează măsurătorile, întrebările de evaluare împreună cu forma obligatorie și instrumentele pentru hotărâre și acte și eliberează hotărârea pentru citire fără a cere prezentarea de ansamblu a dosarului ei. Înregistrarea este refuzată cât timp utilizatorul nu și-a dat acordul expres, hotărârea nu a fost citită integral, analiza în engleză nu poartă exact cele șapte titluri în ordinea fixă și cu conținut sau un judecător ori grefier nu are ID în datele de bază. Se salvează datele de antet, atribuirea la dosar și client, măsurătorile și analiza; o nouă versiune a întrebărilor permite reevaluarea pe loc. Cu IRONSTICK SERVER, evaluările circulă cu rețeaua de persoane și societăți a cabinetului: fiecare stație de lucru ține propria evaluare pe hotărâre, pe care doar ea o modifică, iar instrumentul de citire returnează integral evaluările tuturor stațiilor pentru un judecător, o instanță, un număr de dosar sau un dosar propriu, de fiecare dată cu indicarea celui care a evaluat.

Familia instrumentelor de urmărire a depunerilor este deterministă față de actele de procedură stocate: instrumentul de utilizare răspunde, pentru un element de probă, ce anexe conține fizic și în ce acte de procedură a fost el însuși depus (cu dată și număr de dosar, în toate dosarele) sau, pentru un dosar, cu raportul de goluri al elementelor nedepuse niciodată; instrumentul de listare a probelor depuse returnează, pentru fiecare act de procedură stocat, identificatorii atașați plus mulțimea totală fără duplicate și este obligatoriu înaintea compunerii listei de anexe a unui nou act de procedură, cu rezerva documentată că sunt acoperite numai anexele atașate structural. Lanțul numerelor de înregistrare găsește, pornind de la un număr de scrisoare sau de la toate numerele care apar într-un document, fiecare document care împarte acel număr, în ordine cronologică — parcursul documentat al unei proceduri administrative. Instrumentul de listare a anexelor rezolvă anexele conținute fizic de un document, inclusiv ștampila deterministă de depunere pe fiecare anexă; instrumentul de ștampilă rezolvă orice identificator de probă la ștampila sa deterministă de depunere (mai multe fișiere stocate dau mai multe ștampile; o înregistrare fără fișier stocat dă un marcaj explicit de gol). Ambele instrumente purtătoare de ștampile interzic inventarea ștampilelor — ele trebuie întotdeauna preluate.

### 17. Repararea OCR

O cale de escaladare în patru pași repară textele integrale stocate care sunt distruse și este explicit interzisă ca înlocuitor comod al citirii. Cererea de rescanare îi cere aplicației să treacă din nou prin OCR PDF-ul original stocat; utilizatorul selectează paginile în IRONSTICK, iar modelul este instruit să informeze utilizatorul într-o singură frază și să aștepte. Instrumentul de stare trebuie apelat o singură dată, când utilizatorul spune că paginile au fost alese — buclele de interogare repetată sunt interzise — și, când scanarea este gata, returnează ordinul de lucru împreună cu două fișiere din spațiul de lucru care conțin scanarea proaspătă și textul actual din baza de date. Regula de comparare instruiește modelul să facă numai corecturi mecanice ale OCR-ului, niciodată reformulări, cu numerele, numele și sumele păstrate exact. Acolo unde un loc este ilizibil în ambele surse, modelul îi poate cere utilizatorului o verificare vizuală înainte de predare — cel mult trei puncte pe document, cu înregistrarea deschisă la locul exact și cu locul numit precis ("pagina 7, al doilea paragraf — suma?"); cu navigarea dezactivată, înregistrarea și pagina sunt numite în chat. Instrumentul de predare înmânează fișierul corectat din spațiul de lucru aplicației, care îl arată utilizatorului într-o fereastră modală; numai salvarea utilizatorului înlocuiește textul din baza de date și nimic nu se stochează automat. Ultima escaladare, cererea de predare a PDF-ului, deschide înregistrarea și face ca modelul să îi ceară utilizatorului să tragă personal PDF-ul original în chat — Bridge-ul, în mod deliberat, nu oferă nicio asistență privind calea, refuză ferm când nu a precedat nicio rescanare și refuză PDF-urile de peste zece megabyți sau de peste nouăzeci de pagini; modelul citește apoi vizual PDF-ul, construiește versiunea corectată în spațiul de lucru și o predă prin aceeași poartă de revizie. La un refuz pentru mărime sau număr de pagini fluxul nu se încheie: soluția de rezervă prin transcriere deschide totuși înregistrarea, iar modelul îi cere utilizatorului să deschidă PDF-ul prin atașament și să transcrie cuvânt cu cuvânt pasajele relevante ("pagina X, aproape de sus, ar trebui să scrie … — vă rog să transcrieți exact") — cel mult trei locuri, preluate cuvânt cu cuvânt în versiunea corectată; orice gol rămas este dezvăluit deschis. În loc ca întregul document să fie returnat spre prelucrare manuală, avocatul verifică numai locurile care nu pot fi rezolvate automat.

### 18. Persoane, instituții, clienți și propuneri de date

Instrumentele de rezolvare găsesc clienți, persoane și instituții după un fragment de nume, tolerant la diacritice; un instrument de găsire după cuvânt-cheie caută în nume, note și câmpuri de analiză când se cunoaște doar un fragment. O verificare deterministă de listă compară un document care conține o listă de nume cu toate persoanele și societățile din evidență, adresat prin identificator de probă sau prin dosar — atunci se scanează cea mai nouă intrare a dosarului, numită în răspuns. Pe conexiunile Claude și ChatGPT verificarea părților acceptă dinainte până la alte două părți și le caută în fundal cât timp se lucrează la cea curentă; rezultatele se păstrează treizeci de minute, iar ordinea porții rămâne neschimbată. Instrumentele de rețea listează pe toți cei conectați cu o parte prin relații explicite și dosare comune, clicile întregii rețele de părți prin detectare deterministă a comunităților (ca în vizualizarea Univers a ecranului de persoane, cu grupurile de densitate neobișnuită evidențiate și o separare opțională a persoanelor și instituțiilor pe straturi) și părțile cele mai conectate; fiecare răspuns privind o parte începe cu blocul dosarelor de care partea este legată. Cititorul de profil returnează fiecare câmp de date de bază și de analiză, complet și netrunchiat. Cititoarele de profil returnează profilul entității cu analiză și relații, toate relațiile unei persoane în ambele direcții, între persoane și instituții, profilul instituției și instituțiile legate formal de un dosar. Cititorul de evidență a timpului raportează timpul de lucru măsurat pasiv (fiecare vizualizare de pagină durând până la următoarea, plafonată la treizeci de minute, ultima fiind socotită un minut) ca privire de ansamblu a totalurilor și a dosarelor, clienților și zilelor din frunte sau ca defalcare pe zile a unui dosar, pe un interval de date sau pe o fereastră a ultimelor zile, cu valoarea implicită de șapte.

IA nu poate scrie direct în datele de bază. Două instrumente de propunere așază constatările în Monitorul de consistență a datelor al aplicației, ca elemente de revizie: propunerea de date de bază (numai după ce utilizatorul a confirmat în chat că respectiva constatare trebuie consemnată) vizează o entitate sau o instituție existentă — rezolvată mai întâi după nume — sau descrie o înregistrare nouă prin nume și câmpuri, cu o listă de câmpuri permise în care numerele de identificare ale societăților și ale persoanelor împart un singur câmp, numai câmpurile fundamentate fiind permise, și cu referințe opționale la probe; propunerea de relație descrie o relație între două persoane rezolvate sau între o persoană și o instituție, cu exact un corespondent, o categorie obligatorie, o fundamentare opțională și referințe opționale la dosar, client și probe. O propunere poate, de asemenea, să redenumească o înregistrare, să îi seteze tipul (persoană fizică sau juridică), să schimbe categoria unei relații existente, să propună o ștergere (a unei înregistrări, a unei etichete sau a unui termen încheiat) cu un motiv în limba sistemului, care este obligatoriu, sau să propună două înregistrări ca duplicate; o înregistrare nouă este acceptată numai după ce tipul a fost decis în dialog, iar o propunere care atinge descrierea sau datele de contact ale unei persoane este refuzată dacă apelantul nu a citit acel profil în ultimele treizeci de minute. În ambele fluxuri înregistrarea se schimbă numai când utilizatorul acceptă propunerea în monitor. O propunere de înregistrare nouă primește mai întâi ca răspuns lista înregistrărilor existente asemănătoare — potrivite larg, nimic nu se stochează — iar apelantul trebuie fie să consemneze pe una dintre ele, fie să confirme explicit, prin parametru, că partea este cu adevărat nouă; o potrivire strictă este redirecționată către înregistrarea existentă. Fiecare parte nouă stocată returnează o sarcină obligatorie ulterioară, care îi ordonă apelantului să cerceteze și să consemneze legăturile părții, inclusiv prin cercetare web. Un al treilea instrument de propunere atribuie o parte unui dosar: exact o entitate sau o instituție, un motiv obligatoriu și referințe opționale la probe devin un element de revizie de legătură cu dosarul în același monitor; acceptarea scrie legătura de participant pe care se construiesc vizualizările de clici și de legături, în timp ce o legătură existentă, un duplicat în așteptare sau o respingere anterioară este raportată în loc să fie propusă din nou. Aplicația numără, de asemenea, propunerile pe apelant: după două propuneri stocate de date de bază și o propunere de relație sau de legătură cu dosarul, tratează sesiunea ca întreținere a rețelei de părți, adaugă o singură dată indicația că această muncă, trecută integral prin porți, nu are nevoie de un model de vârf și — în chatul integrat — menține rularea pe treapta medie de model. Procese independente de fundal alimentează același monitor: un extractor de date, cu duplicatele eliminate la sursă, și o scanare periodică de normalizare care propune contopiri și reclasificări potrivit modelului cu trei categorii (persoană fizică; persoană juridică: orice entitate colectivă, alta decât o persoană fizică, o înscriere în registrul comerțului având prioritate față de proprietatea statului; instituție: organe ale statului fără înscriere în registru) — fără a contopi vreodată automat.

### 19. Biblioteca de legi

Biblioteca ține texte integrale de legi ca fișiere markdown, cu un număr intern de înregistrare pentru fiecare lege. Instrumentul de listare răsfoiește inventarul (identificator, jurisdicție, titlu, fel, nume de fișier, data ultimei verificări; implicit cincizeci, maxim cinci sute) și este numai pentru citire. Instrumentul de căutare este obligatoriu înaintea oricărei căutări pe internet a unei norme: el potrivește fie după denumire, în titlu și descriere, fie după un pasaj citat, cu toleranță aproximativă (ajung circa șaizeci la sută din cuvinte, iar terminațiile cuvintelor sunt tolerate), cere jurisdicția luată din dosar, clasează potrivirile din titlu cu mult deasupra potrivirilor din conținut (o potrivire în titlu contează nouă zecimi, fiecare potrivire în conținut o zecime, cel mult trei fragmente pe fișier) și returnează, pentru fiecare rezultat, numărul de înregistrare, numele fișierului, fragmente scurte cu pozițiile lor exacte de caracter și un apel gata făcut de extragere cuvânt cu cuvânt, al cărui interval este deja lărgit — cu cel puțin cinci sute de caractere dincolo de fragment — astfel încât modelul să preia el însuși formularea cu autoritate, în loc să se încreadă în fragment. Instrumentul de extragere returnează conținutul cuvânt cu cuvânt al unei legi între două poziții de caracter, adresat prin numărul de înregistrare, limitat la fișier, precedat de o notă că intervalul poate fi ajustat și că întreaga lege poate fi încărcată, rezultatele supradimensionate fiind deviate automat în spațiul de lucru; potrivirea cifrelor în căutările de legi folosește reguli de limită care tolerează notația cu punct pentru mii a portalurilor oficiale. Legile întregi pot fi încărcate după numele fișierului sau după numărul de înregistrare, fișierele mari fiind deviate automat. Instrumentul de înregistrare este canalul obligatoriu de raportare pentru orice lege găsită pe webul deschis: se trimit numai linkul, jurisdicția și, opțional, titlul și o frază; un proces de fundal preia, convertește, stochează și anunță sursa în monitorul de date, iar modelul însuși nu convertește niciodată nimic. Un ciclu de revizie a bibliotecii urmărește data ultimei verificări a fiecărei surse. Respingerea unei legi în monitorul de date cere o confirmare.

Un instrument de reverificare verifică la cerere o lege față de sursa ei și raportează neschimbată, actualizată sau duplicat; o preluare mai proaspătă ia locul intrării, iar pe IRONSTICK SERVER prevalează cea mai recentă verificare, indiferent cine a înregistrat primul legea. Legile întregi aflate peste limita conectorului ajung în spațiul de lucru și nu înregistrează nimic ca citit; proveniența vine de la instrumentul de articol.

### 20. Validatoare și registre

Instrumentele deterministe de verificare acoperă: IBAN (format, lungime specifică țării, sumă de control); numere naționale personale, de asigurare și fiscale din nouă scheme în șapte țări (România, Elveția, Germania, Austria, Franța, Italia, Spania), prin cifre de control, cu un mod țintit pe fiecare schemă și un mod automat care testează toate schemele și le raportează pe cele valide; identificatori europeni de TVA (întâi verificarea offline a formatului de țară, apoi serviciul oficial în direct al Uniunii, returnând datele de societate eliberate acolo unde statul membru le furnizează); numere EORI față de serviciul în direct de validare al Uniunii; identificatori de entitate juridică (întâi suma de control, apoi registrul global pentru stare și nume); și, separat, un instrument pentru registrul comerțului care deschide căutarea „Find a company” a portalului european e-Justice (BRIS) într-un browser încorporat, pentru ca modelul să o citească. Fiecare validator returnează un rezultat concret, motivat — valid cu detalii, invalid cu aspectul care nu se verifică, negăsit sau serviciu indisponibil, inclusiv starea — niciodată un simplu da sau nu, astfel încât un număr cu adevărat greșit poate fi întotdeauna deosebit de o întrerupere a serviciului. Stratul de instrucțiuni face obligatorie rularea validatorului potrivit înainte ca un asemenea număr să intre într-un document produs sau verificat. Același set de instrumente poartă instrumentul pentru locația aproximativă a utilizatorului (țară, oraș și adresă publică din cel mai recent instantaneu de autentificare, explicit nu o sursă de jurisdicție) și un instrument meteo fără garanții.

### 21. Accesul web

Două instrumente ajung pe internetul deschis, ambele prezentate ca suplimente la capacitățile web proprii ale IA de desktop, cu instrucțiunea explicită de a le folosi direct când IA nu are acces web propriu și cu interdicția de a le folosi pentru date legate de dosare. Fiecare căutare interoghează simultan Google, DuckDuckGo și Qwant și returnează o singură listă îmbinată de rezultate cu titlu și link, fără duplicate, menite să fie urmate cu instrumentul de deschidere a paginilor. Instrumentul de deschidere a paginilor preia exact un URL public, printr-un lanț de prelucrare în trepte pe care descrierea îl enumeră integral, pentru ca modelul să nu renunțe niciodată prematur: o cerere standard de browser, cu tratarea redirecționărilor și compresie; paginile care cer JavaScript sau care nu răspund cererii standard sunt redate într-un browser încorporat până când apare conținutul; conversie PDF exactă la pagină, folosind stratul de text pe fiecare pagină și OCR numai pentru paginile scanate, astfel încât documentele mixte funcționează; și conversia formatelor de birou și de text în text lizibil. Ieșirea este markdown, completă: conținutul principal este extras (navigarea, reclamele și bannerele de cookie-uri eliminate), paginile fără corp de articol își păstrează subsolul, fiindcă acolo stau adresa și datele de contact, iar acolo unde extragerea nu ar lăsa aproape nimic se livrează în schimb pagina întreagă. Un apel răspunde în patruzeci și cinci de secunde; un document mare sau scanat este prelucrat mai departe în fundal și livrat imediat la următorul apel cu aceeași adresă. Portalurile de legi sunt refuzate până când a fost căutată biblioteca, potrivit porții legilor. Dacă un site web cere o confirmare înainte de a-și elibera conținutul, IRONSTICK deschide pagina într-o fereastră proprie; utilizatorul confirmă acolo, iar lucrul pe pagină continuă.

### 22. Navigarea GUI și exporturile

Toată navigarea este opțională, printr-un comutator al utilizatorului; fără el întregul grup nu există. Instrumentele de navigare deschid, în fereastra principală a aplicației: un dosar (opțional pe fila de cronică sau de evaluare), lista de dosare a unui client, o persoană, o instituție (ambele evidențiate, cu detaliul deschis), o intrare de probă (pagina corectă a cronicii, evidențiată), pregătirea dosarului de export (cu o variantă complet automată rezervată dorinței explicite a utilizatorului de a avea un PDF complet), jurnalul zilnic (opțional detaliul unei anumite zile), monitorul de e-mail (opțional detaliul unui anumit e-mail), căutarea globală cu o interogare lansată (rezervată dorinței explicite; răspunsurile din chat folosesc în schimb căutarea internă), zona de backup cu pornirea imediată a unui backup și orice ecran numit din lista canonică de ecrane. Dialogurile de export acoperă lista de clienți, lista de termene, prezentarea dosarelor unui client, dosarul de export în două tipuri de document și harta, plus construirea pachetului IA al clientului. Toate instrumentele de navigare sunt supuse blocajului dur și sunt țintele ofertelor de navigare.

### 23. Scriere, formate și livrare

Setul de instrumente pentru scriere leagă producerea documentelor de specificații preluate. Instrumentul pentru formatul de ieșire returnează instrucțiunea obligatorie de generare pentru felul de artefact cerut — pentru actele de procedură diferențiată în act de procedură versus scrisoare simplă, fiecare în forma cu reprezentare și în cea fără reprezentare, cu jurisdicția, limba și data dosarului rezolvate direct în instrucțiune și cu substituenți pe care modelul îi completează din datele conectorului; instrumentul pentru formatul de expediere prin e-mail returnează specificația obligatorie pentru trimiterile către instanță, cu livrare secvențială de pachete. Ambele trebuie urmate întocmai. Fiecare IA de desktop livrează un act de procedură Markdown finalizat prin dialogul de livrare, care îl poate deschide direct în procesorul de text IRONSTICK; nimic nu se stochează până când utilizatorul salvează. Instrumentul de captare a cronicii deschide formularul de cronică precompletat în dosarul corect, fără a salva el însuși nimic.

Livrarea fișierelor către utilizator trece exclusiv prin instrumentul de livrare, pe care îl execută aplicația însăși. Acceptă doar o cale sursă în spațiul de lucru temporar — conținutul inline și alte căi sunt refuzate —, citește singur fișierul, astfel încât modelul nu retastează nimic, și îl predă dialogului de export al IRONSTICK; de acolo utilizatorul îl salvează sau trimite cu un clic un proiect de text în procesorul de text. Nu există niciun folder de livrare și nicio cale pe care modelul să o afle. Modelul versionează singur numele fișierelor, un număr nou pentru fiecare livrare; rezultatul raportează versiunile rădăcinii de nume livrate până atunci și pe cea mai mare și avertizează dacă numărul ales nu este cel mai mare. Livrarea are loc o dată pe sarcină, la final, niciodată pentru stări intermediare, și trece mai întâi prin porțile de interacțiune și de verificare.

### 24. Verificarea reciprocă între IA

Instrumentul de predare transmite o lucrare produsă celeilalte IA de desktop: conținutul merge într-un depozit mare de scurtă durată, o înregistrare de sarcină trimite la el, instrucțiunea (plafonată la o mie de caractere) arată ce trebuie să facă cealaltă IA, iar modelul îi cere apoi utilizatorului să declanșeze cealaltă IA în cealaltă aplicație. Instrumentul pentru căsuța de intrare listează sarcinile deschise adresate apelantului — ale sale nu apar niciodată — cu identificator, însărcinare și conținut integral, opțional filtrate după client sau dosar. Instrumentul de răspuns închide o sarcină (ștergându-i conținutul de scurtă durată) și trimite în același timp evaluarea înapoi, ca sarcină nouă, către expeditorul inițial; instrumentul de finalizare închide fără a returna. Citirea și scrierea în spațiul de lucru sunt membri ai acestui set de instrumente, pentru manipularea conținutului schimbat.

### 25. Fișierele de instrucțiuni IA

Pe fiecare dosar utilizatorul poate stoca fișiere de instrucțiuni pe care modelul trebuie să le consulte. Instrumentul de listare arată instrucțiunile unui dosar cu identificator, nume de fișier, mărime, data încărcării și fragment, fără texte integrale; inventarul global listează fiecare instrucțiune a tuturor clienților și dosarelor; cititorul individual returnează o instrucțiune netrunchiată după identificatorul ei numeric, cu opțiunea de a dirija conținutul brut în spațiul de lucru, exact la octet, pentru transmitere mai departe; cititorul în masă returnează toate instrucțiunile unui dosar într-un singur apel, cu aceeași opțiune privind spațiul de lucru. Ambele ieșiri de listare sunt deviate automat când sunt supradimensionate. Instrumentul de actualizare propune o versiune modificată pe exact una dintre trei căi — un fragment de adăugat (calea preferată pentru completări, aplicația asamblând ea însăși rezultatul, iar modelului fiindu-i interzis să reproducă conținutul existent), o cale sursă către o versiune nouă completă de pe disc sau conținutul nou complet inline — iar aplicația îi arată utilizatorului modificarea ca diferență; numai aprobarea explicită o adoptă, rezultatul (aprobat, respins sau în așteptare) este returnat, iar o stare de așteptare interzice retrimiterea. Exportul de pachet construiește pachetul complet de instrucțiuni și skilluri al unui client și deschide dialogul de export.

### 26. Integrări însoțitoare din afara suprafeței de instrumente

Un însoțitor pe partea clientului completează Bridge-ul fără a face parte din suprafața MCP: pentru Claude Desktop și ChatGPT Desktop, un buton separat din configurare creează un plugin de skill (skilluri care oglindesc modelul de lucru cu seturi de instrumente și executarea instrumentelor, generat și versionat de aplicație), pe care utilizatorul îl adaugă în aplicația de desktop. Configurația front-end-ului Bridge-ului pentru fiecare IA este scrisă de butoanele corespunzătoare ale configuratorului, care scriu întotdeauna identitatea apelantului, pentru a proteja împotriva partajării configurației între IA.

### 27. Semantica eșecurilor și a refuzurilor — rezumat

Fiecare refuz din sistem este instructiv, nu sec: încălcările de schemă returnează schema așteptată; numele necunoscute returnează cea mai apropiată potrivire; poarta datei numește remediul exact; poarta legilor numește procedura bibliotecii; blocajul navigării numește ecranul protejat și alternativa amânată; blocajul de consimțământ numește fereastra de reîncercare; răspunsurile supradimensionate numesc fișierul și cele două comenzi de continuare sau filtrele de restrângere; eșecurile validatoarelor numesc aspectul care nu se verifică și deosebesc întreruperile de serviciu; respingerile de capacitate din memorie numesc ocuparea și restul și, aproape de limită, opțiunile de restructurare; porțile de livrare și de căutare își numesc opțiunile de răspuns, inclusiv ieșirea universală unknown; blocajul instrucțiunilor numește cele două apeluri care îl deschid; poarta pregătirii numește părțile necitite, cu identificatori și procente; verificatorul de acte de procedură numește, pentru fiecare citire expirată sau resetată, apelul exact care o restabilește. Contractul față de model este că, după cel mult trei încercări corectate la orice apel eșuat, modelul se oprește și îi raportează utilizatorului eroarea exactă.

##### Contact

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scanați codul pentru a salva cartea noastră de contact — telefon, e-mail și site.

Contactați direct prin WhatsApp sau Telegram — și un apel este binevenit. Limbi vorbite: germană, engleză, română.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Mesaj

### Interesat de IRONSTICK sau de o demonstrație? Scrieți-ne.
