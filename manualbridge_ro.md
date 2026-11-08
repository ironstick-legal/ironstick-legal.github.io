# Manual - Bridge

> Manualul Bridge — lucrul cu IA: ce se întâmplă în fundal și opt fluxuri de lucru, de la începutul zilei până la cercetarea legislativă.

Pagina originală: https://www.ironstick.legal/manualbridge_ro.html

---

Manualul Bridge — lucrul cu IA: ce se întâmplă în fundal și opt fluxuri de lucru, de la începutul zilei până la cercetarea legislativă.

Noțiuni de bază

## 1. Chatul IA și Bridge-ul — care este diferența?

IRONSTICK vă oferă două moduri de a lucra cu o IA la dosarele dumneavoastră.
**Chatul IA** este integrat în program: scrieți într-o fereastră IRONSTICK, iar IRONSTICK însuși trimite cererea către un serviciu IA extern, folosind cheile API pe care firma dumneavoastră le-a stocat în configurarea IA.
**Bridge-ul** funcționează invers: scrieți în aplicația IA de desktop pe care o folosiți deja, iar acea aplicație apelează în direct instrumentele IRONSTICK printr-un conector.
În ambele cazuri, IA ajunge la datele dumneavoastră numai prin IRONSTICK, prin aceleași instrumente și în spatele acelorași porți.

### Chatul IA integrat

- **Mai întâi un strat local.** Fiecare mesaj trece mai întâi printr-un strat bazat pe reguli, care rulează pe calculatorul dumneavoastră, fără model IA și fără internet. Cererile simple — deschiderea unui ecran, a unui client sau a unui dosar, căutări simple — sunt executate direct acolo. Tot ce necesită raționament sau redactare merge mai departe către un serviciu IA extern.
- **Cheile dumneavoastră, serviciile dumneavoastră.** Chatul folosește serviciile IA externe pentru care în configurarea IA este stocată o cheie API. Ele sunt folosite automat într-o ordine fixă. Dacă unul este indisponibil sau nu mai are credit, următorul preia aceeași cerere.
- **Mai întâi consimțământul.** Înainte ca chatul să trimită ceva către un serviciu IA extern, vă întreabă. Dacă refuzați, nu se trimite nimic, iar chatul nu mai întreabă până când schimbați modul sau deschideți chatul din nou.
- **Pseudonimizat.** Înainte ca o cerere să părăsească calculatorul dumneavoastră, numele persoanelor și ale firmelor, numerele de dosar și de dosar de instanță, codurile numerice personale, IBAN-urile, numerele de telefon, adresele de e-mail și adresele părților sunt înlocuite cu substituenți neutri. Răspunsul este retradus pe calculatorul dumneavoastră. Datele calendaristice și sumele rămân neschimbate. Substituenții sunt construiți din propriile dumneavoastră înregistrări; pentru terți necunoscuți din textul liber sunt prinse doar tiparele recognoscibile, precum numerele, adresele de e-mail și numerele de telefon.
- **Consemnat.** Fiecare apel către un serviciu IA extern este consemnat local, în forma cu substituenți în care a părăsit calculatorul dumneavoastră.
- **Memorie de lucru compactă.** La fiecare tur, IA primește partea recentă a dialogului (aproximativ ultimele 6.000 de caractere) și un rezumat scurt al părții anterioare. O cerere rulează până la opt runde de instrumente.
- **Unde rulează.** Pe Windows și pe tableta Android. Pe tabletă sunt omise instrumentele funcțiilor care există numai pe Windows.

### Bridge-ul

- **Trei părți.** Aplicația dumneavoastră IA de desktop vorbește protocolul standard al conectorilor (MCP) cu un mic program Bridge de pe același calculator. Programul Bridge transmite fiecare apel, printr-o conexiune protejată, accesibilă doar pe acest calculator, către aplicația IRONSTICK aflată în funcțiune. Aplicația execută instrumentul și trimite rezultatul înapoi pe aceeași cale.
- **Programul Bridge nu cunoaște date.** Nu deschide nicio bază de date și nu conține instrumente proprii; doar transmite apelurile mai departe. Instrucțiunile de lucru pentru IA provin tot de la aplicația în funcțiune, când se conectează IA de desktop.
- **Doar cât timp rulează IRONSTICK.** Dacă aplicația este închisă, fiecare apel de instrument primește ca răspuns mesajul că IRONSTICK nu rulează și că trebuie să-l porniți. Lista instrumentelor rămâne vizibilă în IA de desktop, astfel că ordinea în care porniți cele două programe nu contează.
- **Date reale.** Rezultatele instrumentelor ajung la IA de desktop nepseudonimizate — numele, numerele și datele reale sunt ceea ce face posibil un șablon gata de depunere. Ce citește IA este prelucrat în contul dumneavoastră propriu la furnizorul aplicației IA de desktop, în termenii acelui furnizor.
- **Pornit de dumneavoastră.** Bridge-ul funcționează numai când *Permite accesul conectorului de la IA desktop locală* este activat în configurarea IA și Bridge-ul pentru acea aplicație IA de desktop este licențiat. Conducerea programului — deschiderea ecranelor, a dosarelor și a documentelor, exportul — necesită un al doilea comutator.
- **Mai multe simultan.** Aplicațiile IA de desktop licențiate pot fi conectate în același timp și pot lucra la același dosar. Fiecare este afișată cu propriul simbol în bara de meniu cât timp lucrează.
- **Unde rulează.** Pe Windows.

### Comparație

|  | Chat IA (integrat) | Bridge (aplicație IA de desktop) |
| --- | --- | --- |
| Unde scrieți | În fereastra de chat IRONSTICK | În aplicația dumneavoastră IA de desktop |
| Cine vorbește cu serviciul IA | IRONSTICK, cu propriile dumneavoastră chei API | Aplicația dumneavoastră IA de desktop, cu contul dumneavoastră propriu |
| Costurile IA | Facturate pe utilizare de serviciul IA, pe cheia dumneavoastră API | Acoperite de abonamentul pe care îl dețineți deja pentru aplicația IA de desktop |
| Licența IRONSTICK | Inclusă, fără licență suplimentară | Licență Bridge per utilizator / stație de lucru — un Bridge per aplicație IA de desktop sau pachetul tuturor Bridge-urilor; sumele se găsesc pe [pagina de prețuri](https://www.ironstick.legal/pricing.html) |
| Date trimise către IA | Pseudonimizate; datele calendaristice și sumele rămân neschimbate | Date reale, prelucrate în contul dumneavoastră la furnizor |
| Consimțământul dumneavoastră | Înainte de prima cerere externă a unei sesiuni de chat | Înainte de primul acces la date al unei IA de desktop în fiecare rulare a programului |
| Instrucțiuni de lucru | Trimise odată cu fiecare cerere | IA trebuie să le citească și să confirme o regulă cuvânt cu cuvânt înainte să se deschidă vreun instrument |
| Instrumente și porți | Același set de instrumente și aceleași porți, plus o căutare în istoricul propriu al chatului | Același set de instrumente și aceleași porți; conducerea programului doar cu comutatorul ei |
| Durata unei sesiuni de lucru | Dialogul recent plus un rezumat scurt; până la opt runde de instrumente per cerere | Conversația aplicației IA de desktop |
| Platforme | Windows și tabletă Android | Windows |

### De ce Bridge-ul este prima alegere pentru munca de volum

- **Fără cost per apel prin IRONSTICK.** Citirea unor dosare întregi, parcurgerea a sute de documente și redactarea în mai multe runde rulează toate pe abonamentul pe care îl plătiți deja pentru aplicația IA de desktop. Aceeași muncă prin chatul integrat este facturată pe utilizare pe cheia dumneavoastră API, ceea ce se adună repede la dosare mari.
- **Sesiuni de lucru mai lungi.** IA de desktop își păstrează propria conversație, în timp ce chatul integrat reportează doar dialogul recent și un rezumat, cu un număr limitat de runde de instrumente per cerere.
- **Răspunsuri mai mari per apel.** Două dintre aplicațiile IA de desktop primesc direct răspunsuri de instrument de până la 40.000 de caractere; celelalte aplicații IA de desktop și chatul integrat primesc până la 10.000. Tot ce este mai mare merge, întreg, în spațiul de lucru criptat și este citit de acolo bucată cu bucată.
- **Setul complet de instrumente, textul complet.** IA de desktop lucrează cu setul complet de instrumente și citește textele integrale în propria conversație, în spatele acelorași porți ca chatul.
- **Chatul își păstrează locul.** Chatul integrat nu necesită licență suplimentară, este mereu la îndemână — inclusiv pe tabletă — și este canalul cel mai strict controlat: pseudonimizat, cu cerere de consimțământ și consemnat.

## 2. Un singur set de instrumente — în interiorul aplicației client

Fiecare operațiune pe care o poate executa o IA se află în aplicația client IRONSTICK de pe calculatorul dumneavoastră — nu în IA și nu în programul Bridge.
Chatul IA și fiecare IA de desktop conectată apelează exact aceleași instrumente. Fiecare apel este executat de aplicația în funcțiune pe baza de date activă a dumneavoastră, iar către IA se întoarce doar rezultatul.

- **Un singur registru de instrumente.** Setul de instrumente este construit de unul și același modul pentru chatul IA și pentru Bridge: aceleași instrumente, în aceeași ordine, în spatele acelorași porți. Instrumentele sunt grupate pe teme în seturi de instrumente — dosar, probe, termene, legi, scrisori și e-mailuri și altele — pe care IA le deschide după nevoie.
- **O singură cale.** Fiecare apel de instrument, din chat sau de la o IA de desktop, trece prin același strat de dispecerizare: simbolul de activitate din bara de meniu, identificarea apelantului, porțile și predarea rezultatelor mari către spațiul de lucru. Fiecare IA de desktop și fiecare serviciu API își ține propria evidență a ceea ce a citit, astfel încât citirea uneia nu contează niciodată pentru alta.
- **Datele rămân în IRONSTICK.** Dosarul dumneavoastră rămâne în baza de date IRONSTICK de pe calculatorul dumneavoastră. O IA primește doar ce returnează un instrument pentru apelul pe care îl face; IRONSTICK nu îi predă nici baza de date, nici dosarul de date.
- **În direct la fiecare apel.** Instrumentele deschid baza de date la fiecare apel. O modificare pe care o salvați este ceea ce vede următorul apel de instrument.
- **Rulează în fundal.** Munca instrumentelor rulează într-un lucrător separat de fundal din interiorul aplicației, astfel încât programul rămâne receptiv chiar și în timpul citirilor lungi ale dosarelor mari.
- **Aplicația trebuie să ruleze.** Fără aplicația în funcțiune nu există instrumente: programul Bridge doar transmite apelurile mai departe și răspunde că IRONSTICK nu rulează.
- **Aplicația trebuie să fie deblocată.** Până când codul de securitate din șase cifre nu a fost introdus pe ecranul de pornire, fiecare apel de instrument al unei IA de desktop primește ca răspuns mesajul că aplicația este blocată și nu se returnează date. Introduceți codul în IRONSTICK, apoi repetați cererea.
- **Accesul îl acordați dumneavoastră.** Bridge-ul servește o IA de desktop numai când comutatorul conectorului este activat și acea IA de desktop este licențiată. Primul acces la date al unei IA de desktop după fiecare pornire a programului deschide un dialog de confirmare. Dacă aprobați, accesul rămâne deschis pe restul rulării programului. Dacă refuzați, fiecare apel este respins timp de 10 minute, iar următorul acces de după aceea vă întreabă din nou. Această decizie nu este salvată.

## 3. Porțile — ce se întâmplă în fundal

Între IA și înregistrările dumneavoastră se află porți integrate în stratul de instrumente al aplicației client. Sunt simplă logică de program — nicio IA nu verifică altă IA.
Când o poartă respinge un apel, nu se scrie și nu se livrează nimic; IA primește un mesaj care spune ce lipsește și apelul care deschide poarta.
Majoritatea porților funcționează la fel pentru chatul IA și pentru fiecare IA de desktop; ultima coloană arată unde se aplică fiecare.

| Poarta | Când se declanșează | Ce face | Se aplică la |
| --- | --- | --- | --- |
| **Consimțământ înaintea IA externe** | Prima dată într-o sesiune de chat când o cerere trebuie să meargă la un serviciu IA extern | Un dialog întreabă dacă IA externă poate fi folosită. Dacă refuzați, nu se trimite nimic, iar chatul nu mai întreabă în acea sesiune. | Chat IA |
| **Pseudonimizare** | Fiecare cerere a chatului IA către un serviciu IA extern | Numele, firmele, numerele de dosar și de dosar de instanță, codurile de identificare, IBAN-urile, numerele de telefon, adresele de e-mail și adresele părților pleacă sub formă de substituenți și sunt retraduse pe calculatorul dumneavoastră. Datele calendaristice și sumele rămân neschimbate. Dacă lista de substituenți nu poate fi construită complet, cererea nu se trimite. | Chat IA |
| **Consimțământ pentru accesul la date** | Primul apel de instrument al unei IA de desktop după pornirea programului | Apare un dialog de confirmare. Aprobat: deschis pe restul rulării programului. Refuzat: fiecare apel este respins timp de 10 minute, apoi vi se cere din nou. | Bridge |
| **Blocare la pornire** | Fiecare apel de instrument cât timp codul de securitate din șase cifre nu a fost introdus | Apelul primește ca răspuns mesajul că aplicația este blocată; nu se returnează date. | Bridge |
| **Blocarea instrucțiunilor** | Fiecare apel de instrument al unei IA de desktop | Toate instrumentele, cu excepția citirii instrucțiunilor, a confirmării lor și a solicitării limbii sistemului, rămân închise până când IA a citit instrucțiunile și a redat cuvânt cu cuvânt interdicția halucinației. Confirmarea expiră la 60 de minute după acordare, după 2 ore fără apel, la miezul nopții și la fiecare conexiune nouă; atunci IA trebuie să citească din nou și să redea cuvânt cu cuvânt o regulă aleasă la întâmplare. În chatul IA, instrucțiunile se trimit în schimb odată cu fiecare cerere. | Bridge |
| **Poarta datei** | Instrumente care scriu conținut datat — cronologie, calendar, note zilnice, jurnal zilnic, memorie, rapoarte de legi și altele | Apelul este respins dacă IA nu a preluat data și ora reale în ultimele 30 de minute. | Ambele |
| **Mai întâi citiți dosarul** | Instrumente care citesc conținutul unui dosar (cronologie, cronologie, căutări, texte integrale și altele) și instrumente care scriu pe un dosar (note, intrări de cronologie, verificarea actului de procedură, export, predare către altă IA) | Instrumentele care citesc conținutul unui dosar sunt respinse până când IA a citit rezumatul acelui dosar. O notă sau o intrare de cronologie necesită în plus profilul dosarului, jurisdicția și cele mai noi intrări de cronologie. O verificare a actului de procedură, un export sau o predare necesită în plus citirea integrală a celor mai noi documente ale dosarului. Respingerea enumeră ce a rămas necitit. | Ambele |
| **Se scrie doar din ce s-a citit** | Intrări de memorie, modificări ale unui snake, lucrul la ciorne, verificarea actului de procedură și livrarea pe un dosar | O intrare de memorie pentru un dosar este acceptată numai dacă rezumatul a fost citit și fiecare document citat în ea a fost citit complet în această sesiune. Fiecare rezultat de căutare dintr-un fișier de lucru poartă mesajul că rezultatele căutării nu înseamnă citire, cu documentele din spatele rezultatelor care sunt încă necitite. Din momentul în care IA a deschis un document al părții adverse sau al unei autorități într-un dosar, nu se mai scrie nimic pe acel dosar până când acel document nu a fost citit complet. | Ambele |
| **Mai întâi nucleul** | Redactarea, verificarea și livrarea unui act de procedură | Respins până când fiecare nucleu actual al dosarului — nucleul cauzei și nucleul fiecărei cauze comune din care face parte dosarul — a fost citit în versiunea sa actuală. Ultima rundă a verificării actului de procedură compară documentul cu nucleul. | Ambele |
| **Poarta snake** | În verificarea actului de procedură, chiar înaintea rundei de nucleu, când dosarul sau un alt dosar din cauzele sale comune are un snake | IA trebuie să vă întrebe dacă să ruleze runda snake și continuă numai după răspunsul dumneavoastră — sau imediat, dacă ați cerut-o când ați dat comanda. Dacă spuneți da, fiecare intrare din snake trebuie soluționată ca preluată, respinsă sau irelevantă, cu motivare. | Ambele |
| **Mai întâi biblioteca de legi** | O căutare web sau o cerere de pagină web care privește o lege (numere de articole sau de paragrafe, denumiri de coduri, numere de legi, portaluri de legislație) | Respinsă până când IA a căutat norma respectivă în biblioteca dumneavoastră de legi. Dacă biblioteca o are, web-ul rămâne închis pentru acea normă, iar IA citează din bibliotecă. Numai când biblioteca nu are nicio potrivire se deschide web-ul pentru acea normă, timp de 15 minute. | Ambele |
| **Raportarea surselor de legi — deschise, nu fragmente** | O căutare web legată de legi sau o pagină de portal de legislație deschisă care oferă o sursă de lege, precum și fiecare raport al unei noi surse de lege | Fiecare răspuns următor de instrument începe cu memento-ul de a raporta sursa, până când este raportată (cel mult 15 minute). Un raport este acceptat numai pentru o pagină pe care IA a deschis-o ea însăși cu instrumentul de pagini IRONSTICK în ultimele 24 de ore. Sursele raportate așteaptă într-un singur dialog de consimțământ: sursele bifate sunt preluate, verificate și stocate în bibliotecă, cele nebifate sunt respinse. | Ambele |
| **Memorie doar cu aprobarea dumneavoastră** | IA stochează, modifică sau șterge o intrare de memorie | Un dialog vă arată intrarea. Ea este stocată, modificată sau ștearsă numai dacă permiteți; intrările refuzate sunt eliminate. Cât timp dialogul este deschis, fiecare alt apel al acelei sesiuni este respins. În afară de sarcinile de predare între IA și de notele dumneavoastră proprii, IA citește numai intrările de memorie pe care le-ați aprobat. | Ambele |
| **Propuneri în loc de scrieri** | IA vrea să modifice date de bază, să adauge o persoană sau o instituție, să adauge o relație, să completeze o analiză de persoană, să unifice dubluri sau să șteargă o înregistrare | Instrumentul nu scrie nimic în înregistrările dumneavoastră. Plasează o propunere în Monitorul de consistență a datelor, unde o acceptați sau o respingeți. | Ambele |
| **Documente secrete excluse** | Fiecare instrument IA care citește documente, media, termene sau un dosar întreg, precum și serviciile de fundal care folosesc IA externă (monitor de date, raport de situație) | Intrările marcate secret sunt filtrate; ele nu ajung niciodată la IA. | Ambele |
| **Șanse doar din dosarul instanței** | Evaluarea dosarului de către IA, pornită în aplicație sau de o IA de desktop | Estimarea șanselor de succes se bazează numai pe profilul dosarului și pe documentele dosarului care au mers către sau au venit de la instanța sau autoritatea căreia i se adresează actul introductiv — din ambele părți, fără anexe. Fără act introductiv sau fără o instanță ori autoritate recunoscută, șansele sunt marcate ca neestimabile, iar indicatorul rămâne gol. | Ambele |
| **Verificare înainte de livrare** | Livrarea unui document formal, precum un act de procedură | Livrarea este respinsă fără un rezultat pozitiv recent al verificării deterministe a actului de procedură pentru exact această stare a dosarului; orice modificare îl anulează. Ceea ce părăsește sistemul este un șablon gata de depunere, pe care îl verificați și îl semnați dumneavoastră. | Ambele |

Fluxuri de lucru

## Flux de lucru 1 — Începutul zilei

Începutul zilei răspunde la trei întrebări înainte să începeți: ce scadează, ce a sosit și unde ați rămas.
Un singur pas rulează protocolul de pornire, cu data, mementourile, termenele și programările din următoarele trei zile și sarcinile deschise. După aceea, IA preia lista completă a termenelor, programările de azi și ce a fost înregistrat azi sau ieri.
Folosiți-l în fiecare dimineață și ori de câte ori începeți o conversație nouă cu o IA de desktop.

![Diagrama de flux a începutului zilei: pornirea IRONSTICK, aprobarea accesului la date, instrucțiuni confirmate, protocolul de pornire a sesiunii, întrebarea despre hotărârile judecătorești deschise, apoi termene, programări și intrări noi](https://www.ironstick.legal/img/bridge/w1_flow.png)

Un singur pas rulează protocolul de pornire; termenele, programările și intrările noi urmează la cerere.

### Pasul 0 — stabiliți contextul

- **Porniți și deblocați IRONSTICK.** Instrumentele funcționează numai cât timp aplicația rulează și după ce a fost introdus codul de securitate din șase cifre.
- **Briefingul propriu din aplicație.** Pe Windows, prima pornire a zilei întreabă dacă IRONSTICK trebuie să vă facă un briefing al zilei. Dacă spuneți da, briefingul este afișat cu rânduri pe care se poate face clic, care duc la termene, calendar, căsuța poștală, documente și dosar, și este citit în același timp cu voce tare.
- **IA de desktop: o conversație nouă.** Începeți o conversație nouă în aplicația dumneavoastră IA de desktop. Aprobați dialogul de acces la date pe care IRONSTICK îl afișează la primul acces după pornirea programului.
- **Chat IA.** Deschideți chatul IA în IRONSTICK; instrucțiunile de lucru se trimit odată cu fiecare cerere.
- **Nu este nevoie de un dosar.** Începutul zilei acoperă toți clienții și toate dosarele. Deschideți un dosar numai când întrebarea dumneavoastră privește acel dosar.

### Ce spuneți — pas cu pas

1. Pornește sesiunea.

IA citește și confirmă instrucțiunile sale, fixează data de azi și încarcă protocolul de pornire: mementouri, termene și programări din următoarele trei zile, sarcini deschise.
2. Ce scadează azi și în următoarele trei zile?

Primiți termenele, ședințele de judecată și programările în ordinea datelor, fiecare cu dosarul său.
3. Ce a sosit de ieri încoace?

E-mailuri noi și documente nou înregistrate, fiecare cu dosarul căruia i-a fost atribuit.
4. Citește noul e-mail din dosarul [număr de dosar] și spune-mi ce îmi cere.

Textul integral este citit mai întâi; primiți conținutul, punctele deschise și o sugestie pentru pasul următor.
5. Scrie în jurnalul zilnic convorbirea telefonică de azi cu [persoană] despre [subiect].

Intrarea este adăugată în jurnalul zilnic de azi, cu data și ora.

### Ce se întâmplă în fundal

- **Porți înaintea primului instrument.** Până la introducerea codului de securitate, fiecare apel de instrument al unei IA de desktop primește ca răspuns mesajul că aplicația este blocată. Primul acces la date al unei IA de desktop după pornirea programului deschide dialogul de consimțământ; dacă este aprobat, accesul rămâne deschis pe restul rulării programului. Înainte de deschiderea oricărui alt instrument, IA de desktop trebuie să citească instrucțiunile de lucru și să redea o regulă cuvânt cu cuvânt.
- **Pornirea sesiunii într-un singur pas.** Prin Bridge, deschiderea setului de instrumente pentru pornirea sesiunii rulează protocolul de pornire. Data și ora, limba sistemului și ecranul deschis se întorc imediat; protocolul complet ajunge în fișierul session\_start.md din spațiul de lucru, pe care îl citește IA.
- **Ce conține protocolul.** Mementourile de memorie scadente (azi și restante), pe care IA le tratează mai întâi; pentru ce clienți deține cunoștințe memoria IA comună; ancora unică de dată; limba sistemului, care este limba dialogului; ecranul curent; lista ultimelor zece protocoale zilnice; termenele și programările scadente în trei zile, cel mult zece rânduri fiecare; sarcinile deschise lăsate de altă IA. Fiecare secțiune este plafonată, iar o secțiune plafonată numește instrumentul care returnează versiunea completă.
- **Hotărâri judecătorești în așteptare.** La prima pornire de sesiune a zilei, când hotărârile judecătorești nu au fost încă evaluate, protocolul îi spune IA să vă întrebe imediat dacă să le evalueze acum. Da: IA le lucrează pe rând. Nu: continuă cu sarcina dumneavoastră.
- **Lista completă a termenelor.** *read\_deadlines* returnează tot ce se află pe ecranul de termene din IRONSTICK, sortat după dată: termene pe documente, ședințe de judecată viitoare din portalurile instanțelor și din calendar și termenele pe care IA le-a stabilit pe propriile notițe de memorie, marcate ca atare. Poate fi restrânsă la critice (restante și azi), apropiate (până la 10 zile, inclusiv restantele), azi, săptămâna aceasta, săptămâna viitoare sau o dată. Prin Bridge, deschiderea setului de instrumente pentru termene returnează aceeași listă completă plus programările de azi.
- **Programări.** *read\_appointments* listează programările unei zile sau ale unei perioade în această ordine: ședințe de judecată din portalurile instanțelor, ședințe de judecată din calendar, apoi celelalte intrări din calendar.
- **Ce a sosit.** *get\_all\_fromtoday* și *get\_all\_fromyesterday* listează fiecare intrare înregistrată azi sau ieri la toți clienții și toate dosarele; contează ziua înregistrării, nu data evenimentului. Prin Bridge, deschiderea setului de instrumente pentru corespondență și e-mail listează documentele înregistrate azi și e-mailurile primite azi, până la zece din fiecare.
- **Briefingul zilei pentru IA.** *get\_dailybriefing* returnează conținutul briefingului zilei, cu numere de documente și marcaje: termenele următoarelor 30 de zile, cele critice și cele finalizate azi, ședințele de judecată și programările de azi, poșta necitită, documentele înregistrate azi, ședințele de judecată de mâine, zilele de naștere, dosarele fierbinți, statisticile săptămânii și jurnalul IA recent. *daily\_briefing* verifică separat pentru fiecare IA de desktop dacă a fost informată azi; dacă nu, returnează cele mai recente protocoale zilnice și consemnează că a fost informată.
- **Citirea unui document nou.** *evidence\_readfull* returnează textul integral extras al unei intrări. Instrucțiunile de lucru îi spun IA că un titlu sau un rând de listă nu dovedește ce documentează o intrare: înainte de a afirma ce spune o intrare, citește textul integral în sesiunea curentă și separă ceea ce documentează sursa de ceea ce sugerează o parte sau o deducție.
- **Întrebări despre un dosar.** Cronologia unui dosar, termenele și calendarul său sunt conținut de dosar: sunt respinse până când IA a citit rezumatul acelui dosar și apoi memoria dosarului. Listele globale de la toate dosarele sunt deschise fără aceasta. Cronologia poate fi filtrată după dată; o dată se potrivește cu data intrării sau cu data documentului.
- **Oferta de a arăta în IRONSTICK.** După o listă de termene sau de programări, IA poate oferi să deschidă intrarea în fereastra IRONSTICK. Navighează numai după ce sunteți de acord și numai când conducerea programului este activată în configurarea IA.

## Flux de lucru 2 — Reguli generale de conversație

Aceste reguli se aplică fiecărei conversații cu IA, în chatul integrat și prin Bridge: cum începe o sesiune, ce limbă vorbește IA, de unde pot proveni faptele ei și cum vă verificați sursele.
Fiecare regulă vine cu propoziția pe care o folosiți pentru a o aplica: instrucțiuni citite și confirmate, răspunsuri care își numesc sursele, texte integrale citite până la capăt înainte de un răspuns.
Citiți aceasta înainte de prima sesiune reală de lucru; aceleași reguli susțin fiecare alt flux de lucru.

![Diagramă de flux: pornirea sesiunii, confirmarea instrucțiunilor, numirea dosarului, citirea rezumatului și a textelor integrale până la capăt, răspuns cu numere de probă, verificarea surselor](https://www.ironstick.legal/img/bridge/w2_flow.png)

O conversație ancorată: IA își confirmă instrucțiunile, citește fiecare document până la capăt, răspunde cu numere de probă, iar dumneavoastră verificați singur sursele.

### Pasul 0 — stabiliți contextul

- **Porniți mai întâi IRONSTICK și deblocați-l.** Fără aplicația în funcțiune, Bridge-ul răspunde că IRONSTICK nu rulează; înainte de introducerea codului de securitate din șase cifre, fiecare apel de instrument primește ca răspuns mesajul că aplicația este blocată.
- **Porniți sesiunea.** În IA dumneavoastră de desktop, începeți o conversație nouă și cereți-i să pornească sesiunea. Deschiderea setului de instrumente pentru pornirea sesiunii rulează protocolul de pornire: data, limba sistemului, ecranul deschis, mementourile scadente, hotărârile judecătorești deschise de evaluat, termenele și programările din următoarele trei zile, ultimele zece protocoale zilnice și sarcinile de predare deschise.
- **Priviți simbolul IA din bara de sus.** Lista sa derulantă arată, pentru o IA de desktop, dacă instrucțiunile sunt confirmate (bifă verde sau cruce roșie), de câte ori au fost citite și câte încălcări de reguli au avut loc; pentru fiecare dosar atins de IA arată profilul, jurisdicția și rezumatul ca citite sau necitite, precum și o bară a documentelor citite.
- **În chatul integrat** instrucțiunile de lucru fac parte din fiecare cerere; nu este nimic de confirmat. Înainte ca prima cerere să meargă la un serviciu IA extern, IRONSTICK cere consimțământul dumneavoastră.
- **Dați cel mai precis reper pe care îl aveți.** Un număr de probă bate un nume, un nume bate un cuvânt-cheie, iar un număr de dosar îi spune IA ce dosar să citească.

Pornește sesiunea. Apoi citește rezumatul și memoria dosarului 5678/222/2026 și spune-mi ce este deschis.

### Regulile — și ce spuneți pentru a le folosi

1. Pornește sesiunea.

Regula 1 — IA își citește și își confirmă instrucțiunile înainte să atingă vreo dată a dosarului și răspunde în limba dumneavoastră de sistem.
2. Citează regula [număr] din instrucțiunile tale.

Regula 2 — fiecare regulă poate fi arătată cuvânt cu cuvânt, astfel încât să puteți ține IA la ea.
3. Ce document spune asta? Dă-mi numărul de probă.

Regula 3 — fiecare afirmație poartă sursa ei; un clic pe număr deschide documentul.
4. Citește [#număr de probă] integral înainte să răspunzi.

Regula 4 — titlurile și descrierile scurte nu sunt fapte; răspunsul se sprijină pe textul integral.
5. Separă ce este dovedit de ce este doar bănuit.

Regula 5 — IA marchează evaluările și bănuielile ca atare și afirmă doar ce documentează sursele.
6. Citește întregul document, nu doar rezultatele căutării.

Regula 6 — documentele lungi sunt citite până la capăt; IA raportează când a fost citit fiecare rând.

### Ce se întâmplă în fundal

- **Blocarea instrucțiunilor (Bridge).** Până când IA de desktop a citit instrucțiunile de lucru și a redat cuvânt cu cuvânt interdicția halucinației, fiecare instrument, cu excepția citirii instrucțiunilor, a confirmării lor și a solicitării limbii sistemului, este respins. IA care a citit trebuie să confirme ea însăși; o confirmare dată într-o altă conversație nu îi deschide blocarea.
- **Recitirea.** Confirmarea expiră la 60 de minute după acordare, după două ore fără apel, la miezul nopții și la fiecare conexiune nouă; acolo unde IRONSTICK poate vedea jurnalul conversației IA de desktop, și atunci când acea conversație este compactată. Apoi IA citește din nou și redă cuvânt cu cuvânt o regulă aleasă la întâmplare — o scurtă pauză, nu o defecțiune.
- **Măsuri de siguranță pentru reguli.** Logica programului urmărește scurtăturile, de exemplu apelarea instrumentelor înainte de citirea instrucțiunilor sau mutarea unui fișier pe lângă calea de livrare. Când este detectată una, fiecare instrument este blocat și motivul este numit; în funcție de număr, IA recită interdicția halucinației sau citește din nou instrucțiunile și redă regula numită de respingere. Numărul este vizibil în lista derulantă de la simbolul IA.
- **O singură limbă de dialog.** IA răspunde în limba de sistem IRONSTICK pe toată sesiunea, indiferent în ce limbă scrieți. Actele de procedură, e-mailurile către instanță și intrările de cronologie se scriu în limba jurisdicției dosarului; protocolul zilnic, în limba dialogului.
- **Fapte din instrumente, din această sesiune.** Instrucțiunile permit fapte de dosar numai din instrumentele IRONSTICK, preluate în sesiunea curentă — nu din memoria IA, din mesaje anterioare, din datele de antrenare, din fișiere descărcate sau din alt conector. Ce nu poate fi preluat este numit lacună, niciodată completat prin deducție.
- **Mai întâi cercetarea.** IA are instrucțiunea să nu întrebe niciodată ce pot răspunde instrumentele: dacă primește un număr de dosar, citește în loc să întrebe ce dosar aveți în vedere.
- **Titlurile și rezumatele nu sunt fapte.** Înainte ca IA să afirme ce documentează o intrare, trebuie să citească textul integral al intrării în sesiunea curentă; ce sugerează un titlu, o parte sau o deducție trebuie etichetat ca bănuială. O intrare fără text extras nu dă nicio afirmație de fond.
- **Rezultatele căutării nu înseamnă citire.** Fiecare rezultat de căutare dintr-un fișier de lucru poartă mesajul că rezultatele nu înseamnă citire, cu documentele din spatele rezultatelor care sunt încă necitite. La descărcările de dosar, un avertisment de acoperire a citirii numește fiecare fișier necitit până la capăt, cu procentul și intervalele de rânduri necitite; reapare în răspunsurile următoare până când lacunele sunt citite.
- **Starea citirii în răspunsuri.** Când numerele de citire se schimbă, răspunsurile instrumentelor poartă aceleași numere pe care le vedeți în lista derulantă de la simbolul IA, cu instrucțiunea de a nu numi niciodată un dosar, probele sau memoria lui complet citite decât dacă aceste numere o arată.
- **Mai întâi rezumatul și memoria.** Conținutul dosarului este disponibil numai după ce rezumatul dosarului a fost citit; pentru o sarcină pe dosar, memoria completă a dosarului este citită mai întâi.
- **Doar propria citire.** Pentru evaluarea dosarului, IRONSTICK verifică fiecare citire față de jurnalul propriei conversații a IA de desktop; ce citesc agenții ajutători nu contează.
- **Surse pe care le puteți verifica.** IA numește fiecare document cu numărul său de probă. În chatul integrat, un număr devine link numai când acea intrare există în înregistrările dumneavoastră și nu este nici ștearsă, nici secretă; un clic o deschide în cronologia dosarului. Un număr fără o asemenea intrare rămâne text simplu. Într-o IA de desktop, căutați numărul în IRONSTICK sau cereți IA să citească integral acea intrare.
- **Legi din bibliotecă.** Legile sunt verificate mai întâi în biblioteca dumneavoastră de legi; web-ul se deschide pentru o normă numai când biblioteca nu are nicio potrivire și numai paginile deschise prin instrumentul de pagini IRONSTICK contează ca citite.
- **Scrierile datate necesită data de azi.** Instrumentele care scriu conținut datat sunt respinse dacă IA nu a preluat data și ora reale în ultimele 30 de minute. În Bridge, răspunsurile IA încep cu acea dată.
- **După o conversație lungă.** Citirile rămân numărate pentru dosarul lor pe parcursul unei compactări a conversației IA; nucleul unui dosar trebuie citit din nou. Pentru a relua un dosar, IA poate încărca rezumatul, nucleul, memoria dosarului și snake-urile într-un singur fișier de lucru.
- **Documente mari.** Răspunsurile mari ale instrumentelor merg, întregi, în spațiul de lucru criptat și sunt citite pe părți, cu acoperirea citirii urmărită rând cu rând.

## Flux de lucru 3 — Evaluarea dosarului

Evaluarea dosarului este punctul de vedere al IA ca analist senior asupra unui dosar, salvat în IRONSTICK și afișat în fila Evaluare IA a dosarului.
Șansele de succes sunt estimate numai din dosarul instanței: ce a mers către sau a venit de la instanța sau autoritatea căreia i se adresează actul introductiv.
Secțiunile descriptive se sprijină pe întregul dosar IRONSTICK și pe dosarele învecinate ale clientului.
Folosiți-o când un dosar a avansat, când ultima evaluare este veche sau când doriți ca o IA de desktop să facă o evaluare nouă după aceleași criterii ca aplicația.

![Diagrama de flux a unei evaluări noi a dosarului de către IA: ultima evaluare și rezumatul, apoi șase etape verificate de la actul introductiv până la evaluarea salvată, cu ramura pentru un dosar fără instanță sau autoritate recunoscută](https://www.ironstick.legal/img/bridge/w3_flow.png)

O evaluare nouă a dosarului parcurge șase etape, iar IRONSTICK verifică fiecare etapă înainte de a o preda pe următoarea.

### Pasul 0 — stabiliți contextul

- **Deschideți dosarul sau numiți-l.** Deschideți dosarul în IRONSTICK: IA poate vedea ce ecran și ce dosar aveți deschis. Puteți da și numărul dosarului; IA găsește dosarul după număr.
- **Actul introductiv trebuie să fie în dosar.** Prognoza necesită documentul care a pornit procedura, de exemplu cererea de chemare în judecată, stocat cu textul său extras. Poate fi și într-un alt dosar al aceluiași client, precum dosarul din care a fost disjuns acesta.
- **Instanța trebuie să fie înregistrată.** IRONSTICK recunoaște instanța sau autoritatea numai dacă este înregistrată printre instituțiile dumneavoastră și numele ei apare în adresa actului introductiv. Dacă lipsește, indicatorul de succes rămâne gol.
- **În aplicație sau de o IA de desktop.** În fila Evaluare IA a aplicației pot fi evaluate numai dosarele cu statusul Activ. O IA de desktop poate evalua orice dosar, indiferent de status și chiar când nu a sosit nimic nou.

### Ce spuneți — pas cu pas

1. Deschide dosarul [număr de dosar] și dă-mi starea ultimei evaluări.

IA încarcă dosarul și rezumă evaluarea salvată, inclusiv data ei.
2. Fă o evaluare nouă a dosarului [număr de dosar].

Dosarul instanței este asamblat, documentele sunt citite, iar evaluarea este scrisă în etape fixe; rezultatul apare în fila Evaluare IA.
3. De ce nu sunt mai mari șansele de succes?

Primiți punctele din dosarul instanței care cântăresc împotriva dumneavoastră, fiecare cu numărul ei de probă.
4. Ce documente din dosarul meu ar ajuta, dar nu se află încă în fața instanței?

IA compară întregul dumneavoastră dosar cu dosarul instanței și numește ce lipsește încă acolo.
5. Ține cont de [#număr de probă] și evaluează din nou.

Observația dumneavoastră este transmisă, iar evaluarea este reînnoită cu ea.

### Ce se întâmplă în fundal

- **Mai întâi ultima evaluare.** Instrumentul *read\_assessment* returnează cea mai recentă evaluare a dosarului. Prima sa linie este data, vechimea și dacă a fost o evaluare completă sau o actualizare, iar IA are instrucțiunea să precizeze când a fost făcută ultima evaluare. Ca orice instrument care citește conținut de dosar, este respins până când IA a citit rezumatul dosarului și, după aceea, memoria dosarului.
- **Un instrument, șase etape.** O IA de desktop face o evaluare nouă numai cu *make\_new\_assessment*. Fiecare apel returnează numai etapa curentă; următoarea etapă este predată numai după ce IRONSTICK a verificat etapa curentă. Nicio etapă nu poate fi sărită. Dacă aplicația evaluează chiar atunci același dosar, instrumentul refuză până când aplicația a terminat.
- **Etapa 1 — actul introductiv.** IA citește PDF-urile dosarului începând de la cel mai vechi și raportează actul introductiv ca sigur, nesigur sau „niciunul găsit". Se verifică: fiecare document raportat aparține acestui client și a fost citit integral în această sesiune; „niciunul găsit" este acceptat numai când fiecare PDF al dosarului a fost citit integral. Un document raportat ca sigur este stocat pentru evaluările ulterioare.
- **Poarta: dosarul instanței.** IRONSTICK caută o instanță sau o autoritate înregistrată printre instituțiile dumneavoastră în adresa din capul primei pagini a actului introductiv sau ca destinatar pe acea pagină. Dosarul instanței constă apoi din actul introductiv și din fiecare document primit și trimis al dosarului a cărui contraparte este acea instanță sau autoritate — de la ambele părți, fără anexe și fără intrări secrete sau șterse.
- **Etapa 2 — starea dosarului instanței și prognoza.** IA trebuie să citească ea însăși integral fiecare document al dosarului instanței și apoi să predea secțiunea [CHANCES]: un procent, intervalul lui (clar pierdut, mai degrabă pierdut, deschis, mai degrabă câștigat, clar câștigat), starea dosarului instanței, starea probelor, pretenția principală, celelalte pretenții, schimbarea față de prognoza anterioară și motivul. Se verifică: fiecare document al dosarului instanței a fost citit; procentul se află în intervalul său; fiecare linie este prezentă; starea dosarului instanței și motivul citează numai documente ale dosarului instanței; aceste linii sunt scrise în limba sistemului; o mutare de peste 10 puncte față de prognoza anterioară numește documentele noi care o justifică.
- **Fără dosarul instanței — ce vă spune IA.** Fără act introductiv sau fără o instanță ori autoritate recunoscută în adresa lui, nu există dosar al instanței. IRONSTICK îi spune atunci IA să vă informeze imediat, în limba dialogului și înainte de a continua, că nu se face nicio prognoză și că indicatorul de succes rămâne gol — numind motivul și, acolo unde există, actul introductiv. Etapa trece atunci doar cu dosarul, iar starea dosarului IRONSTICK ia locul prognozei.
- **Etapele 3 și 4 — citirea.** Etapa 3 listează cele mai noi PDF-uri primite și trimise ale dosarului și actul introductiv stocat; etapa 4 listează fiecare document din celelalte dosare ale clientului care este legat de acest dosar. Fiecare trebuie citit integral; rezumatele, titlurile și rezultatele căutării nu înseamnă citire. Un rezultat care a mers în spațiul de lucru contează numai când fiecare parte a lui a fost citită.
- **Starea citirii.** IRONSTICK ține un registru de citire pe dosar: câte documente ale dosarului a citit IA integral și dacă a citit rezumatul și memoria dosarului. Acestea sunt aceleași numere pe care le vedeți dumneavoastră și vin odată cu răspunsurile ori de câte ori se schimbă. IA are instrucțiunea că ele sunt singura bază validă pentru orice afirmație despre ce a citit și că poate numi un dosar sau documentele lui „citite integral" numai când numerele o arată.
- **Contează doar propria citire a IA.** IRONSTICK verifică fiecare citire față de protocolul de sesiune al acelei IA de desktop; ce citesc subagenții sau agenții paraleli nu este numărat. Acolo unde protocolul de sesiune al unei conexiuni nu poate fi văzut, răspunsul spune acest lucru, iar IA are instrucțiunea să vă informeze că această verificare nu a fost posibilă.
- **Etapa 5 — rezumatul faptelor.** IA predă rezumatul său cu titlurile fapte esențiale, fapte documentate și citate-cheie, contradicții, lacune și termene ratate, trimiteri între dosare și ID-uri ale destinatarilor. Se verifică: fiecare titlu este prezent și completat; faptele esențiale citează documente; fiecare dosar învecinat este numit; fiecare document citat a fost citit integral.
- **Etapa 6 — redactarea.** Abia acum primește IA regulile de redactare. Secțiunile sunt baza, starea dosarului IRONSTICK, nota critică, punctele forte, riscurile, interdependența între dosare și, când IRONSTICK a găsit dosare conexe ale altor clienți, acele dosare ca ultimă secțiune. Starea dosarului IRONSTICK se sprijină pe rezumatul fiecărui document, iar IA citește integral orice document care contează. Se verifică: secțiunile și ordinea lor; baza numește actul introductiv; cel mult șase puncte la fiecare dintre punctele forte și riscuri; fiecare document citat există în dosarele acestui client sau în material, nu este secret sau șters și a fost citit integral; secțiunea între dosare numește fiecare dosar învecinat.
- **Respingerea.** Când o verificare eșuează, răspunsul începe cu REJECTED și o listă numerotată de erori. Nimic nu avansează și nimic nu se salvează; IA corectează exact acele puncte și apelează din nou. O parte predată la etapa greșită este respinsă. IA poate relua lanțul de la etapa 1 cu material proaspăt, iar o repornire a aplicației îl reia, de asemenea, de la capăt.
- **Salvarea.** Când etapa 6 este acceptată, IRONSTICK inserează prognoza din etapa 2 după bază, acolo unde există un dosar al instanței, și salvează evaluarea ca evaluare completă nouă. Apoi arată dosarul în fila sa Evaluare IA, iar IA are instrucțiunea să vă spună că noua evaluare este salvată.
- **În fila Evaluare IA.** Starea dosarului la autoritate stă lângă indicatorul de succes, cu intervalul, starea probelor, pretenția principală și celelalte pretenții. Fără dosar al autorității, starea dosarului IRONSTICK trece pe locul al doilea, iar indicatorul de lângă ea rămâne gol.
- **Evaluarea în aplicație.** În fila însăși solicitați o evaluare pentru un dosar activ. Fila cere consimțământul înainte de a folosi un serviciu IA extern; rularea continuă apoi în fundal, chiar și când schimbați filele sau ecranele, prin recunoașterea textului noilor documente, cercetare, redactare și prognoză. O evaluare existentă poate fi actualizată timp de până la 10 zile după ultima reevaluare completă și de cel mult trei ori la rând. Când nu a sosit nimic nou de la ultima evaluare, reevaluarea se deschide numai după ce scrieți, în câmpul de obiecții, un comentariu de cel puțin trei cuvinte.

## Flux de lucru 4 — Crearea unui nucleu

Nucleul este direcția obligatorie a unui dosar: linia centrală de argumentare, faptele și probele de bază, ce trebuie spus și ce nu trebuie spus niciodată.
Există la două niveluri — o dată pentru o întreagă cauză comună, valabil pentru toate dosarele din el, și o dată pentru dosarul individual — iar fiecare document pe care IA îl redactează pentru dosar îi este subordonat.
Cel mai bun moment pentru a-l crea este imediat după o evaluare a dosarului, cât timp întregul dosar se află încă în contextul de lucru al IA.
IA îl redactează, IRONSTICK vă arată fiecare modificare, iar numai aprobarea dumneavoastră îl stochează ca versiune nouă.

![Schemă logică: după evaluarea dosarului comandați un nucleu pentru o cauză comună sau pentru un singur dosar; IA îl redactează în limita a 20.000 de caractere și îl propune; dumneavoastră acceptați sau respingeți modificarea în fereastra de verificare; o modificare acceptată este stocată ca versiune nouă, pe care IA trebuie să o citească înaintea fiecărui act de procedură și față de care runda finală a lanțului de verificare controlează documentul.](https://www.ironstick.legal/img/bridge/w4_flow.png)

IA redactează și propune, dumneavoastră acceptați; fiecare modificare acceptată devine o versiune nouă care orientează fiecare act de procedură ulterior.

### Pasul 0 — stabiliți contextul

- **Alegeți momentul.** Cereți nucleul imediat după o evaluare a dosarului. Evaluarea face ca IA să citească digestul, textele integrale, memoria dosarului și orice nucleu și snake existent; cât timp toate acestea se află încă în contextul ei de lucru, direcția poate fi distilată din întregul dosar, nu din câteva documente.
- **Alegeți nivelul.** Un *nucleu de cauză comună* aparține unei cauze comune (o cauză comună din lista de dosare) și se aplică tuturor dosarelor din el. Un *nucleu de cauză* se aplică unui singur dosar și ajustează direcția pentru acel dosar. Un dosar este guvernat de propriul nucleu și de nucleul fiecărei cauze comune din care face parte, deci nucleul cauzei nu trebuie să contrazică linia cauzei comune.
- **Unde îl găsiți.** Pe ecranul dosarului, fila cu simbolul atomului (*Nucleul cauzei*) conține sus nucleul editabil al dosarului și, dedesubt, doar pentru citire, nucleul fiecărei cauze comune din care face parte dosarul. În lista de dosare, butonul cu atom din bara de titlu a unei cauze comune deschide nucleul cauzei comune. Fiecare nucleu poartă identificatorul său, de exemplu *#KI00041 · v3*; un clic îl copiază, astfel încât să îl puteți lipi în chat.
- **Ce intră în el.** Direcția și nimic altceva: teza directoare, locul dosarului în litigiul mai larg, părțile, tezele părții adverse și răspunsurile la ele, cum urmează să fie apreciate probele viitoare și liniile care nu trebuie depășite. Faptele intră ca istorie documentată; starea actuală a dosarului se citește de fiecare dată din digest.
- **Ce nu intră în el.** Mementourile, notițele, sarcinile de făcut, istoricul sesiunilor, întrebările deschise și gândurile de lucru aparțin memoriei dosarului. Minciunile și contradicțiile părții adverse aparțin snake-ului.
- **Mărime.** Cel mult 20.000 de caractere pe nucleu. Contorul de lângă text arată lungimea și devine roșu peste limită. Dacă direcția are nevoie de mai mult loc, păstrați linia comună în nucleul cauzei comune și puneți ce este specific unui dosar în nucleul acelui dosar, cu aceeași limită.
- **Redactarea proprie.** Puteți și să tastați sau să corectați un nucleu direct în filă sau în fereastra cauzei comune și să apăsați *Salvează*; fiecare salvare este o versiune nouă.

### Ce spuneți — pas cu pas

1. Creează nucleul pentru dosarul [număr dosar] pornind de la această evaluare.

IA distilează direcția din dosarul pe care tocmai l-a citit și își deschide propunerea în fila *Nucleul cauzei*, unde o acceptați sau o respingeți.
2. Creează un nucleu pentru cauza comună [cauza comună]: linia centrală care se aplică tuturor dosarelor din el.

IA redactează nucleul cauzei comune și îl arată în fereastra cauzei comune; odată acceptat, se aplică tuturor dosarelor cauzei comune și apare, doar pentru citire, în fiecare dintre ele.
3. Cât de lungi sunt nucleele cauzei [număr dosar] și ce ar putea trece în nucleul cauzei comune?

IA citește nucleul cauzei și fiecare nucleu de cauză comună al dosarului și măsoară fiecare nucleu față de limita de 20.000 de caractere.
4. Actualizează nucleul cauzei [număr dosar]: nu mai argumentăm [punct].

IA explică în chat ce vrea să schimbe și de ce, apoi propune doar pasajele modificate; le vedeți cu aldine roșii, iar o modificare acceptată devine versiunea următoare.
5. Citește-mi nucleul actual al dosarului [număr dosar], împreună cu nucleul fiecărei cauze comune.

IA încarcă setul complet în versiunile sale curente, fiecare cu identificatorul său, de exemplu #KI00041 · v3.
6. Contrazice acest proiect nucleul?

IA compară proiectul punct cu punct cu fiecare nucleu care se aplică dosarului și numește fiecare abatere; într-un act de procedură, această comparație este runda finală a lanțului de verificare.

### Ce se întâmplă în fundal

- **O singură cale de scriere, cu aprobarea dumneavoastră.** IA propune un nucleu cu `update_ki_instruction`: prima versiune a unui nucleu de cauză prin dosar, prima versiune a unui nucleu de cauză comună prin cauza comună (preluat din `list_matter_groups`), fiecare modificare ulterioară prin numărul nucleului. Modificările din interiorul textului intră ca înlocuiri țintite; IA este instruită să nu retasteze niciodată întregul nucleu și să explice în chat ce vrea să schimbe și de ce, înainte de a propune.
- **Fereastra de verificare.** Pentru un nucleu de cauză, IRONSTICK deschide dosarul în fila *Nucleul cauzei*; pentru un nucleu de cauză comună, fereastra apare peste ecranul curent. Ea arată întregul text cu fiecare modificare cu aldine roșii, ștergerile tăiate, și butoanele *Respinge* și *Acceptă*. O singură verificare de nucleu este deschisă la un moment dat. Dacă vă ia mai mult de aproximativ un minut, IA este înștiințată că verificarea este încă deschisă și nu o trimite din nou; aprobarea dumneavoastră de mai târziu stochează totuși versiunea.
- **Verificarea mărimii.** O propunere de peste 20.000 de caractere este refuzată înainte de a ajunge la dumneavoastră, cu instrucțiunea de a o limita la nucleul directoriu și de a plasa direcția specifică dosarului în nucleul cauzei sau direcția comună în nucleul cauzei comune.
- **Data curentă.** Ca orice scriere datată, o propunere de nucleu necesită data curentă obținută în ultimele 30 de minute.
- **Versiuni, niciodată suprascrise.** Fiecare propunere acceptată și fiecare salvare din filă este stocată ca un rând nou cu următorul număr de versiune; numărul *#KIxxxxx* rămâne același în toate versiunile, iar versiunea cea mai înaltă este cea curentă. Un text neschimbat nu creează o versiune nouă. Când o cauză comună este ștearsă, nucleul său este ascuns, iar versiunile lui se păstrează.
- **Cum îl citește IA.** `read_ki_instruction` cu dosarul returnează întregul set într-un singur apel: nucleul cauzei și nucleul fiecărei cauze comune al dosarului, fiecare cu antetul său *#KIxxxxx · vN*, complet, și numește nivelurile care nu au încă niciunul. Nucleul stă și în capul digestului dosarului, al briefingului dosarului și al pachetului de reluare. `list_all_ki_instructions` oferă inventarul fără texte integrale; deschiderea setului de instrumente pentru instrucțiunile IA arată inventarul nucleelor dosarului pe care îl aveți deschis.
- **Citire din nou după fiecare modificare.** IRONSTICK înregistrează ce versiune a fiecărui nucleu a citit IA. O versiune nouă sau o compactare a conversației IA anulează citirea anterioară.
- **Unde produce efect.** Nucleul orientează fiecare act de procedură prin [Flux de lucru 6 — Redactarea unui act de procedură](#w6). Acolo, poarta nucleului refuză scrierea, verificarea și livrarea unui document al dosarului până când fiecare nucleu aplicabil — nucleul cauzei și fiecare nucleu de cauză comună — a fost citit în versiunea sa curentă; formatul obligatoriu al documentului este servit, la rândul lui, numai după ce fiecare nucleu al dosarului a fost citit. La capătul lanțului de verificare vine runda nucleului: documentul este comparat cu nucleul punct cu punct, fiecare abatere este corectată sau lămurită, o contradicție nu poate fi niciodată respinsă, iar cea care nu poate fi eliminată este marcată ca conflict. Un conflict oprește lucrul la acel document până când ați fost avertizat în detaliu și ați decis dacă documentul este corectat sau abaterea rămâne.
- **În evaluarea dosarului.** Când rulează o evaluare, nucleele existente ale dosarului fac parte din contextul ei ca direcție obligatorie, citate prin identificatorul lor.

## Flux de lucru 5 — Construirea snake-ului

Snake-ul este registrul minciunilor și contradicțiilor dovedite ale părții adverse într-un dosar. Fiecare intrare fixează locul declarației — document, dată, dosar și pagină — și enumeră fiecare document care o infirmă.
Îl construiți în două moduri: prin cercetare țintită într-unul sau mai multe dosare, sau în documente pe care le numiți; ori în mijlocul oricărei conversații, în clipa în care apare o contradicție sau o neadevăr al părții adverse.
IRONSTICK verifică fiecare rând față de evidențele dumneavoastră, dumneavoastră aprobați fiecare versiune, iar în fiecare act de procedură ulterior intrările snake-ului sunt oferite ca argumente împotriva părții adverse.

![Schemă logică: o comandă de cercetare sau o contradicție găsită într-o conversație determină IA să citească dosarul și snake-ul curent; dacă punctul este deja înregistrat, intrarea este extinsă, altfel se scrie o intrare nouă; textul complet al snake-ului este propus, verificat rând cu rând față de evidențe și arătat dumneavoastră; o modificare acceptată este stocată ca versiune nouă, afișată în dosar și în cauza sa comună și folosită în runda snake a lanțului de verificare.](https://www.ironstick.legal/img/bridge/w5_flow.png)

De la constatare la intrarea stocată: mai întâi citire, niciodată înregistrare dublă, fiecare rând verificat față de evidențe, aprobarea dumneavoastră pentru fiecare versiune.

### Pasul 0 — stabiliți contextul

- **Cercetare țintită.** Numiți dosarele sau documentele în care IA să caute declarații ale părții adverse pe care evidențele le infirmă. Un moment bun este imediat după o evaluare a dosarului sau după o citire completă a dosarului, cât timp actele se află încă în contextul de lucru al IA. Cereți-i să întindă plasa larg; snake-ul conține numai ce dovedesc documentele.
- **În timpul oricărei conversații.** Când iese la iveală o contradicție sau un neadevăr al părții adverse în timp ce lucrați la altceva, spuneți-i IA să îl adauge în snake dacă nu este încă acolo. Ea verifică mai întâi snake-ul curent și extinde o intrare existentă în loc să înregistreze punctul de două ori.
- **Un snake pe dosar.** Un snake aparține unui singur dosar. O cauză comună nu are un snake propriu; el arată snake-urile tuturor dosarelor sale.
- **Unde îl găsiți.** Pe ecranul dosarului, fila cu simbolul șarpelui, la dreapta filei nucleului (*Snake-ul cauzei*), conține snake-ul acelui dosar cu identificatorul său, de exemplu *#SN00004 · v2*, și un contor de caractere. În lista de dosare, butonul snake din bara de titlu a unei cauze comune deschide *Snake-urile cauzei comune*: snake-urile tuturor dosarelor sale în ordinea listei; un clic pe un dosar îl deschide în fila *Snake-ul cauzei*.
- **Mărime.** Cel mult 20.000 de caractere pe snake de dosar. Contorul devine roșu peste limită. Limitați fiecare intrare la loc, o scurtă descriere și legăturile ei.
- **Ce intră în el.** Numai minciuni și contradicții dovedite ale părții adverse. Bănuielile, strategia și mementourile nu intră; mementourile merg în memoria dosarului, iar minciunile părții adverse merg numai în snake, niciodată în memorie.

**Formatul intrării.** Intrările sunt separate printr-un rând gol. Primul rând este locul declarației; apoi descrierea; apoi fiecare document legat, pe rândul său, începând cu o săgeată:

`#0004417 · 12.10.2026 · CaseID 19 · p. 2 sus`

`Întâmpinare în apel, Adversar B: instanțele au hotărât deja definitiv asupra proprietății instalațiilor. Neadevărat: ambele hotărâri lasă expres proprietatea pentru procesul pe fond, iar Adversarul B a spus același lucru la ședința anterioară.`

`→ #0003304 · 18.07.2026 · CaseID 19 · p. 5 mijloc`

`→ #0000586 · 25.04.2026 · CaseID 8 · p. 9 sus`

`→ #0001127 · 24.06.2026 · CaseID 8 · p. 15 jos`

Fiecare rând de trimitere are forma: numărul probei cu șapte cifre · data documentului așa cum o înregistrează IRONSTICK (ZZ.LL.AAAA) · CaseID-ul acelui document · pagina și poziția pe ea (sus, mijloc sau jos, în oricare dintre limbile sistemului) sau o liniuță pentru probe fără pagini. Când o minciună sau o contradicție se întinde pe mai multe documente, fiecare dintre ele primește propriul rând de legătură: declarația, contra-declarația și fiecare probă dintre ele. Puteți și să tastați sau să corectați singur intrările în filă și să apăsați *Salvează*; fiecare salvare este o versiune nouă.

### Ce spuneți — pas cu pas

1. Construiește snake-ul cauzei [număr dosar] din dosarul complet.

IA citește dosarul și fiecare document care infirmă partea adversă, apoi propune snake-ul în fila *Snake-ul cauzei*, cu fiecare rând verificat față de evidențele dumneavoastră.
2. Caută în documentele [numere de probe] neadevăruri ale părții adverse și adaugă-le în snake-ul cauzei [număr dosar].

IA citește integral exact aceste documente și introduce numai declarațiile pe care evidențele dumneavoastră le infirmă, fiecare cu documentele sale infirmatoare.
3. Construiește snake-urile tuturor dosarelor din cauza comună [cauza comună]. Întinde plasa larg.

IA lucrează dosar cu dosar, câte un snake pe dosar; fereastra cauzei comune le arată apoi pe toate în ordinea listei de dosare.
4. Este această contradicție deja în snake-ul cauzei [număr dosar]?

IA citește snake-ul curent și vă spune dacă punctul este deja înregistrat și în ce intrare.
5. Adaugă această contradicție a părții adverse în snake dacă nu este încă acolo.

IA citește snake-ul curent, extinde intrarea existentă sau scrie una nouă cu fiecare document infirmator pe propriul rând și vă arată modificarea spre acceptare.
6. Ce snake-uri avem pentru clientul [client]?

IA listează fiecare snake al dosarelor clientului cu identificatorul, versiunea și numărul de intrări.

### Ce se întâmplă în fundal

- **Mai întâi citirea.** Dacă dosarul are deja un snake, o modificare este acceptată numai după ce IA a citit versiunea lui curentă cu `read_snake` în această sesiune, din nou după o compactare a conversației ei. Un dosar fără snake primește direct primele intrări. IA este instruită să verifice că punctul nu este deja înregistrat și să extindă intrarea existentă în loc să o introducă de două ori.
- **Scriere numai din ce s-a citit.** Odată ce IA a deschis un document al părții adverse sau al unei autorități din dosar, o modificare a snake-ului este refuzată până când acel document a fost citit complet.
- **Tot textul, de fiecare dată.** IA propune snake-ul complet, inclusiv adaosul, cu `update_snake`; scrierile parțiale (adăugare la sfârșit sau înlocuiri țintite) sunt refuzate, astfel că fiecare propunere se face cu întregul registru în vedere. O propunere de peste 20.000 de caractere este refuzată înainte de a ajunge la dumneavoastră.
- **Fiecare rând verificat față de evidențe.** Înainte ca propunerea să fie afișată, IRONSTICK verifică fiecare intrare: primul rând în forma cerută, o descriere, cel puțin un rând de legătură, nicio descriere după rândurile de legătură; iar pentru fiecare rând de trimitere, că proba există, aparține CaseID-ului indicat, poartă exact acea dată a documentului, aparține aceluiași client ca dosarul și că pagina se află în PDF-ul stocat. La orice eroare nu se propune nimic; IA primește lista erorilor, intrare cu intrare, și le corectează.
- **Fereastra de verificare.** IRONSTICK deschide dosarul în fila *Snake-ul cauzei* și arată întregul text cu fiecare modificare cu aldine roșii, cu butoanele *Respinge* și *Acceptă*. Dacă vă ia mai mult de aproximativ un minut, IA este înștiințată că verificarea este încă deschisă și nu o trimite din nou; aprobarea dumneavoastră de mai târziu stochează totuși versiunea.
- **Versiuni, niciodată suprascrise.** Fiecare propunere acceptată și fiecare salvare din filă devine o versiune nouă sub același număr *#SNxxxxx*; un text neschimbat nu creează o versiune nouă.
- **Cum îl citește IA.** `read_snake` returnează snake-ul unui dosar, snake-urile tuturor dosarelor unei cauze comune în ordinea listei de dosare, snake-urile tuturor dosarelor unui client sau un snake după numărul său — fiecare bloc având antetul *#SNxxxxx · vN* cu dosarul său. `list_all_snakes` oferă inventarul cu numărul de intrări, fără texte integrale. Pachetul de reluare al unui dosar și evaluarea dosarului poartă și ele snake-ul.
- **Unde produce efect.** Snake-ul lucrează prin poarta snake din [Flux de lucru 6 — Redactarea unui act de procedură](#w6). Când există snake-uri pentru dosar — propriul snake sau cele ale celorlalte dosare din cauzele sale comune — IA vă pune întrebarea fixă *Doriți Poarta Snake?*, cu excepția cazului în care ați spus deja *cu poarta snake* sau ați renunțat la rundă, cu cuvintele dumneavoastră. După „da”-ul dumneavoastră vine runda snake a lanțului de verificare, înaintea rundei finale a nucleului: IA citește complet snake-ul cauzei și snake-urile celorlalte dosare din cauzele sale comune, citește din nou proiectul și lămurește fiecare intrare a snake-ului într-un fișier de rezultat ca încorporată (cu locul din document), respinsă sau irelevantă, fiecare cu un motiv. O intrare este respinsă dacă ea sau formularea ei ar putea fi întoarsă împotriva clientului. *Deja folosită* sau *deja cunoscută instanței* nu este acceptat ca motiv: intrările sunt argumente de repetat în fiecare document în care se potrivesc. Runda este acceptată numai când fiecare intrare este lămurită, snake-urile și proiectul au fost citite după comandă, iar proiectul a fost într-adevăr modificat oriunde o intrare a fost încorporată.

## Flux de lucru 6 — Redactarea unui act de procedură

Acest flux de lucru vă duce de la o cerere în cuvinte simple la un șablon apt de depunere în procesorul de text: un act de procedură, o cerere către o instanță sau o autoritate, ori o scrisoare.
IA citește dosarul înainte să scrie, construiește documentul în spațiul ei de lucru, face ca fiecare fapt, citat, normă și parte să fie verificate față de evidențele dumneavoastră, parcurge un lanț de verificare fix și vă întreabă la fiecare punct de decizie.
Folosiți-l ori de câte ori ceva trebuie să părăsească biroul dumneavoastră în scris. Ce părăsește IRONSTICK este întotdeauna un șablon pe care să îl verificați, să îl semnați și să îl trimiteți singur.

![Schemă logică: de la comandă prin citire, format, proiect, verificare, rezumat, lanț de verificare, rundele snake și nucleu până la livrare și închidere](https://www.ironstick.legal/img/bridge/w6_flow.png)

De la comanda dumneavoastră la șablonul din procesorul de text: IA citește, redactează și verifică; dumneavoastră decideți la fiecare pas desenat alb pe negru.

### Pasul 0 — stabiliți contextul

- **Numiți dosarul.** În chatul IA, deschideți dosarul și apăsați *Redactează text*, apoi *Cu ajutorul IA*: chatul se deschide cu acel dosar; dintr-o intrare de cronologie, documentul este deja numit. Cu o IA desktop, dați numărul dosarului în primul dumneavoastră mesaj — IA poate întreba și IRONSTICK ce ecran și ce dosar aveți deschis.
- **Dosarul are nevoie de țara sa.** Dreptul, limba și data documentului provin din jurisdicția stabilită în dosar. Dacă nu este stabilită nicio jurisdicție, formatul documentului este refuzat, cu cererea de a o stabili mai întâi.
- **Folosiți cel mai puternic model al IA desktop.** Pentru redactare, IA este instruită să recomande cel mai puternic nivel de model înainte de a începe și unul mai ușor din nou după livrare. Aplicația IA desktop comută numai prin mâna dumneavoastră; chatul încorporat comută singur.
- **Grupați primul mesaj.** Dosarul, tipul de document, ce doriți să obțineți, numerele probelor pe care se întemeiază, tonul și lungimea, și o depunere anterioară a cărei adresare a funcționat. Documentele întemeiază un act de procedură; adjectivele nu.
- **Spuneți de la început ce doriți de la rundele de verificare.** Cuvinte precum *cu poarta snake* sau *fără snake și nucleu* în propriul mesaj sunt recunoscute de IRONSTICK; IA nu mai întreabă atunci despre acele runde pentru acest document. Textul lipit nu contează drept cuvintele dumneavoastră.

Redactează răspunsul la întâmpinarea #0004127 în dosarul 5678/222/2026, întemeiază-l pe #0003310 și #0003318, scurt și sobru, adresat ca apelul din 12 mai, cu poarta snake.

### Ce spuneți — pas cu pas

1. Scrie un răspuns la [#număr probă] în dosarul [număr dosar]. Scop: [scop].

IA citește dosarul, nucleul cauzei comune și al dosarului și documentul la care răspundeți, apoi redactează în spațiul ei de lucru.
2. Folosește [#numere de probe] ca probe. Ton: [obiectiv / ferm].

Instrucțiunile dumneavoastră sunt preluate în proiect; fiecare document citat este citit integral.
3. Fără corecturi — continuă.

Rulează lanțul de verificare: citire din nou, comparare cu depunerile dumneavoastră anterioare, atac din partea adversă, runda snake, verificarea nucleului.
4. Schimbă punctul [număr]: [corectura dumneavoastră].

Proiectul este corectat și verificat din nou înainte de a merge mai departe.
5. Livrează-l.

Documentul apare în fereastra de descărcare; preluați-l în procesorul de text, semnați-l și trimiteți-l singur.

### Ce se întâmplă în fundal

- **Jurisdicție și limbă.** IA stabilește jurisdicția din dosar înainte de orice lucru juridic. Vorbește cu dumneavoastră în limba sistemului IRONSTICK; documentul este scris în limba oficială a țării dosarului, iar formatul poartă numărul dosarului și data de azi.
- **Citirea dosarului înainte de a scrie.** Instrumentele care scriu pe un dosar sunt refuzate până când IA a citit digestul dosarului; un act de procedură necesită și citirea integrală a celor mai noi documente ale dosarului. Refuzul listează ce este încă necitit.
- **Poarta de pornire pentru format.** Formatul obligatoriu (*read\_output\_format*, tipul documentului: act de procedură sau scrisoare, reprezentat de avocat sau fără reprezentare) este servit numai după ce IA a citit digestul complet, fiecare document de ieșire al clientului din acel dosar integral, documentul la care răspunde actul de procedură integral, memoria dosarului și fiecare nucleu al dosarului. Orice este adresat unei instanțe este un act de procedură, niciodată o scrisoare. Pentru un act de procedură, formatul aduce și un profil al instanței: judecătorii și procurorii acelei instanțe găsiți în evidențele dumneavoastră.
- **Mai întâi cererile dumneavoastră originale.** Când actul de procedură răspunde unui document, IA trebuie mai întâi să listeze în chat fiecare cerere din cererea originală a clientului în dosar, citată cu numărul probei, să vă întrebe dacă mai este corectă și să încheie tura. Formatul este servit numai după răspunsul dumneavoastră. Dacă documentul însuși deschide procedura, IA spune asta într-o propoziție și nu întreabă nimic.
- **Mai întâi nucleul.** Scrierea, verificarea și livrarea sunt refuzate până când fiecare nucleu curent al dosarului — nucleul cauzei și nucleul fiecărei cauze comune din care face parte — a fost citit în versiunea sa curentă, din nou după fiecare versiune nouă și după compactarea conversației IA.
- **Scriere numai din ce s-a citit.** Odată ce IA a deschis un document al părții adverse sau al unei autorități din dosar, lucrul la un document al acelui dosar este refuzat până când documentul a fost citit complet. Un proiect care citează documente pe care IA nu le-a citit integral este blocat împotriva oricărei modificări până când ele sunt citite; ștergerea pasajului citat nu ridică blocarea.
- **Verificarea deterministă (verify\_pleading).** Rulează pe starea curentă a fișierului, fără IA, și verifică: fiecare trimitere la probă și fiecare ștampilă, și că fiecare document citat sau anexat a fost citit pentru acest document; fiecare citare de lege față de biblioteca de legi verificată; fiecare citat textual față de textele integrale ale dosarului, documentele regăsite și biblioteca; numerele de dosar; sumele, care trebuie să corespundă exact formei înregistrate; numele clientului, ale persoanelor și instituțiilor literă cu literă, inclusiv diacriticele; codurile numerice personale și IBAN-urile prin sumă de control și față de evidențe; că fiecare persoană sau societate numită a fost citită împreună cu legăturile ei; și formatul obligatoriu, inclusiv lista anexelor. Fiecare constatare este marcată VERIFICAT, NEVERIFICAT sau CONTRAZIS.
- **Citiți înainte de a scrie, nu după.** O citire făcută după ultima modificare a proiectului nu contează pentru acea verificare: IA trebuie să citească mai întâi, apoi să încorporeze în text, apoi să verifice din nou.
- **Citate.** Un citat care nu se găsește în nicio sursă blochează livrarea; reformularea lui sau eliminarea ghilimelelor îl menține blocat, iar singura remediere este formularea exactă a sursei. Un citat care dispare din text vă este raportat la livrare.
- **Anexe.** Fiecare intrare de anexă trebuie să poarte trimiterea la probă, ștampila de depunere preluată din IRONSTICK și substituentul de pagină. O anexă fără fișier stocat și fără media este semnalată pentru verificare. O anexă care este un document de ieșire sau o depunere a părții adverse este semnalată cu instrucțiunea de a anexa în schimb documentul original, dacă depunerea a fost atașată doar pentru o pagină din ea; această semnalare este o notă de verificare, nu un blocaj.
- **Constatările deschise se întorc la IA.** Fiecare constatare a verificării este returnată IA pentru remediere, iar verificarea rulează din nou pe noua stare. Verificările sunt numărate pe document, peste numerele de versiune: dacă după a cincea verificare mai există constatări deschise, IRONSTICK vă predă decizia printr-un mesaj de sistem, iar IA raportează constatările pe care nu le-a putut întemeia din evidențele dumneavoastră, ca să decideți cum se procedează.
- **Mai întâi rezumatul.** După primul OK, lanțul de verificare începe cu un rezumat al documentului pentru dumneavoastră — destinatar și procedură, cereri, structură, fapte-cheie cu probele lor, legi citate. IA așteaptă răspunsul dumneavoastră; corecturile sunt încorporate înainte ca lanțul să continue.
- **Lanțul de verificare.** Fiecare pas este raportat înapoi la verify\_pleading și verificat înainte să vină următoarea comandă: citirea din nou a întregului fișier; depunerile anterioare ale clientului asupra documentelor citate, ca clientul să nu se contrazică niciodată; un tabel de răspuns care acoperă fiecare pasaj al documentului la care se răspunde; un atac din partea părții adverse, scris într-un fișier separat și lămurit punct cu punct în proiect; o evaluare, lămurită la fel. Un fișier contează ca citit numai când fiecare rând a fost citit de la comandă; o rundă fără nicio constatare adoptată, în care majoritatea constatărilor sunt respinse ca deja făcute, este refuzată.
- **Întrebări fixe.** Apoi vin până la două întrebări fixe — întrebarea despre nucleu când dosarul are un nucleu, întrebarea despre snake când există snake-uri pentru el. IA le pune cuvânt cu cuvânt, pe rând, și acceptă numai un da sau un nu din propriul dumneavoastră mesaj. Un act de procedură nou, fără o versiune anterioară, primește runda nucleului fără întrebare. Răspunsul dumneavoastră este reținut pentru toate versiunile documentului.
- **Runda snake.** După „da”-ul dumneavoastră, IA citește snake-urile dosarului și ale cauzei sale comune și înregistrează, pentru fiecare intrare a snake-ului, dacă a fost încorporată, respinsă sau irelevantă, fiecare cu un motiv; o intrare este respinsă dacă ar putea fi întoarsă împotriva clientului.
- **Runda nucleului.** Documentul este comparat cu nucleul punct cu punct. O contradicție nu poate fi respinsă: este corectată sau marcată ca conflict. Un conflict oprește lucrul la acel document; IA trebuie să vă avertizeze în detaliu și să continue numai după decizia dumneavoastră de a corecta documentul sau de a păstra abaterea.
- **Corecturile dumneavoastră rămân.** Propriile dumneavoastră mesaje sunt înregistrate pe document. O corectură a dumneavoastră care a fost încorporată și apoi eliminată din nou blochează lanțul și livrarea. Un pasaj întemeiat pe propriile dumneavoastră cuvinte nu poate fi șters până când IA nu v-a întrebat.
- **O modificare repornește lanțul.** Fiecare editare anulează ultima verificare. O modificare după lanțul încheiat repornește întregul lanț.
- **O singură întrebare de livrare.** La sfârșit, IA numește în cel mult trei rânduri ce a schimbat lanțul și întreabă o singură dată dacă poate livra. Livrarea este refuzată fără o verificare pozitivă proaspătă pentru exact această stare a fișierului și fără „da”-ul dumneavoastră.
- **Hotărâri judecătorești deschise.** Dacă hotărâri judecătorești așteaptă încă evaluarea, IA vă întreabă dacă să le evalueze acum, ca rezultatele lor să curgă în document, sau mai târziu.
- **Livrarea în procesorul de text.** Fișierul trece numai prin dialogul de descărcare IRONSTICK: salvați-l sau predați Markdown-ul direct în procesorul de text. Acolo editați, adăugați antetul, excludeți pagini, plasați semnătura și exportați un PDF sau DOCX. Un fișier neschimbat deja livrat este repetat numai la cerere, fără un nou număr de versiune.
- **După livrare.** IA întreabă dacă documentul este gata sau are nevoie de corecturi. Până răspundeți, IA poate doar să citească. Corectura dumneavoastră este atașată versiunii livrate, care devine nulă, iar următoarea versiune este creată pentru corectură. Tipărirea în procesorul de text sau trimiterea PDF-ului pentru verificarea e-mailului închide documentul.
- **Pachetul de e-mail.** Un e-mail către instanță este pregătit numai pentru un PDF finalizat: trageți PDF-ul semnat în chat, IA îl verifică față de ultima versiune și numai un PDF care corespunde deschide formatul de e-mail — subiect, corp cu expeditor, ID și număr de dosar, lista pachetului și destinatarul, ca casete de copiere. Depunerile prea mari sunt împărțite în părți de aproximativ zece megabyți pe ecranul de expediere a corespondenței, fiecare cu e-mailul său de însoțire. IRONSTICK nu trimite nimic; trimiteți din propriul program de e-mail.

## Flux de lucru 7 — OSINT — cercetarea singur a unei persoane sau societăți

Folosiți acest flux de lucru când vreți să știți cine este o parte: un adversar, un martor, o societate din spatele unei adrese, oamenii din jurul unei firme.
IA rulează o procedură de cercetare fixă prin propriile dumneavoastră evidențe și internetul deschis, deschide și citește sursele și introduce ce poate verifica ca propuneri în Monitorul de consistență a datelor.
Nimic nu devine parte din evidențele dumneavoastră până când nu acceptați acolo. Cercetarea nu necesită un dosar: o parte poate fi cercetată de sine stătătoare.

![Schemă logică: numiți partea; verificarea OSINT caută în evidențele dumneavoastră și pe web; IA citește fiecare rezultat din probe și deschide linkurile potrivite; verificările anti-bot ajung la dumneavoastră în fereastra de browser IRONSTICK; poarta OSINT verifică lista de control; constatările verificate merg ca propuneri în Monitorul de consistență a datelor, unde le acceptați sau le respingeți; apoi este eliberată următoarea parte.](https://www.ironstick.legal/img/bridge/w7_flow.png)

O parte la un moment dat: căutare, citire, verificare, propunere — iar dumneavoastră decideți în Monitorul de consistență a datelor.

### Pasul 0 — stabiliți contextul

- **Cunoașteți coordonatele părții.** Verificarea OSINT are nevoie de numele complet, țară și dacă este persoană fizică sau societate; oraș și district în măsura în care sunt cunoscute. Țara decide limba termenilor de căutare. Orașul, districtul și țara sunt obligatorii și pentru fiecare parte nouă pe care IA o propune ulterior.
- **Nu este necesar un dosar.** Verificarea OSINT nu primește număr de dosar. Dacă doriți ca partea să fie legată și de un dosar, spuneți-o — legătura este atunci o propunere separată.
- **O înregistrare existentă ajută.** Dacă partea se află deja în IRONSTICK, numiți-o sau dați numărul ei (de exemplu @E0001234). IA citește mai întâi înregistrarea; verificarea OSINT listează și singură intrările existente cu același nume.
- **Mai multe nume?** Dacă aveți o listă (o listă de prieteni, o listă de participanți, un impressum) captată ca document, cereți IA să verifice mai întâi lista față de toți cei din IRONSTICK, apoi să cerceteze numai numele care contează.
- **Fără dialogul IA.** În analiza persoanei unei persoane, butonul *Cercetare web* deschide o cercetare ghidată proprie: linkuri candidate, rezumate de pagini, o previzualizare a câmpurilor de analiză și salvarea în analiza persoanei.

### Ce spuneți — pas cu pas

1. Cercetează [nume complet], [oraș], [țară] — persoană fizică.

Mai întâi sunt verificate propriile dumneavoastră evidențe; apoi sursele de pe internet sunt deschise și citite.
2. Cercetează societatea [nume], [oraș], [țară].

Aceeași procedură pentru o societate, inclusiv codul ei fiscal și sediul social.
3. Există o legătură între [persoană] și [persoană]?

Relațiile existente sunt afișate; cele noi sunt căutate în evidențele dumneavoastră și în surse.
4. Arată-mi sursa pentru [constatare].

Primiți linkul sau numărul probei din spatele constatării.
5. Introdu constatările verificate ca propuneri.

Constatările ajung în Monitorul de consistență a datelor; nimic nu se stochează până nu acceptați acolo.

### Ce se întâmplă în fundal

- **Verificarea OSINT.** Un apel al instrumentului `osint_entity` cu nume, oraș, district, țară și persoană fizică sau juridică rulează de fiecare dată aceeași procedură: o căutare full-text a numelui în întreaga bază de date (toți clienții) — pe dosar cele mai noi 10 intrări de probe cu paragraful fiecărui rezultat, plus câte mai există — și o listă fixă de căutări pe internet: CV, Facebook, LinkedIn, Instagram, district, oraș, scandal, știri, declarații de avere și de interese, impozite, societăți; pentru o societate, registrul comerțului și insolvența în locul căutărilor personale. Termenii de căutare sunt în limba țării părții și sunt trimiși la trei motoare de căutare; linkurile și titlurile revin fără duplicate. Căutarea rulează ca lucrare de fundal; cât timp nu s-a terminat, IA repetă apelul identic pentru a aștepta. Instrumentul însuși nu scrie nimic.
- **Mai întâi intrările existente.** Dacă IRONSTICK deține deja persoane, societăți sau instituții care corespund numelui, primul răspuns le listează integral, cea mai bună potrivire prima. IA numește intrarea care este această parte sau „niciuna”. O intrare raportată primește fiecare constatare; pentru o IA desktop la bridge, o propunere de a crea din nou aceeași parte este atunci refuzată.
- **Un profil pregătit, nu unul verificat.** Răspunsul spune asta expres: omonimii sunt probabili. Linkurile al căror rezultat de căutare arată numele complet sunt linkurile potrivite, sortate cele mai bune primele; celelalte sunt opționale; paginile de start goale sunt eliminate. Sarcina IA este să citească fiecare rezultat din probe, să deschidă fiecare link potrivit și să folosească numai ce afirmă pagina deschisă însăși — niciodată doar un titlu.
- **Poarta OSINT — o parte la un moment dat.** Pentru o IA desktop la bridge, rezultatul se încheie cu o listă de control, iar următorul apel `osint_entity` pentru altă parte este refuzat până când aceasta este parcursă: primele 10 linkuri potrivite deschise (cel puțin 20 % dintre ele, dacă este mai mult); fiecare intrare de probă listată citită — un rezultat deviat în spațiul intermediar contează numai când este citit până la capăt, o căutare în el nu contează niciodată; pentru o persoană, fiecare pagină deschisă care numește persoana și a ajuns în spațiul intermediar, citită la rezultatele ei; apoi fie o propunere, fie declarația că nu s-a găsit nimic utilizabil; pentru o persoană, și fiecare legătură cu alte persoane propusă sau declarația că nu există niciuna. O pagină care numește numele complet al persoanei împreună cu orașul sau districtul nu poate fi închisă ca „nimic utilizabil” decât dacă IA o listează ca deja înregistrată sau ca omonim. Refuzul numește exact ce lipsește. Citirile sunt contabilizate pe sesiune, astfel că citirea unei sesiuni nu contează niciodată pentru alta.
- **Persoană nouă numai după o verificare OSINT completă.** Pentru o IA desktop la bridge, o propunere pentru o persoană fizică nouă este refuzată până când verificarea OSINT pentru acel nume a fost parcursă complet. Orașul, districtul și țara sunt obligatorii pentru fiecare parte nouă și fiecare intrare de adresă. O parte nouă necesită în rest cel puțin două câmpuri de detaliu pe lângă nume. Adresa unei persoane fizice este verificată față de adresele instituțiilor — adresa unui angajator este refuzată ca adresă de domiciliu — iar o societate nouă are nevoie de codul ei fiscal, cu excepția asociațiilor.
- **Deschise, nu fragmente.** Paginile web sunt deschise și citite cu `open_url`; rezultatele căutării sunt doar indicatoare. Paginile mari sunt păstrate complete în spațiul intermediar criptat și citite de acolo. Formularele de căutare și tabelele de date care se umplu numai după un filtru pot fi interogate direct. O pagină deschisă în aceeași sesiune este servită din nou dintr-o copie timp de 30 de minute. Un document scanat a cărui prelucrare durează mai mult este raportat ca încă nepregătit; prelucrarea continuă, iar apelul următor returnează textul.
- **Verificările anti-bot și autentificările ajung la dumneavoastră.** Când un site web arată o verificare anti-bot sau refuză programele (HTTP 403 sau 429), IRONSTICK deschide pagina în propria fereastră de browser, iar IA vă cere să finalizați acolo verificarea. Apoi IA citește pagina cu `browser_read`, deschide alte pagini ale aceluiași site și își descarcă fișierele în spațiul de lucru criptat; nimic nu intră într-un dosar până nu captați dumneavoastră. Pentru alt site, IA revine la `open_url`; când a terminat, apelează `browser_done`, iar fereastra vă întreabă dacă să o închidă sau să o țină deschisă.
- **Instrucțiuni ascunse înnegrite.** Textul din paginile web deschise și din fereastra de browser trece printr-o inspecție pe bază de reguli; pasajele care se adresează unei IA, imită textul de control al chatului sau al IRONSTICK ori ascund text în caractere invizibile sunt suprascrise cu asteriscuri, iar o notă stă deasupra conținutului.
- **Liste de nume dintr-o trecere.** `entity_scan_evidence` compară determinist o listă captată cu fiecare persoană și societate din IRONSTICK — accente neglijate, ordinea cuvintelor ignorată, tolerant la erori OCR. Rezultatele sunt clasificate exact, reordonat, variantă sau un singur cuvânt; rezultatele cu un singur cuvânt sunt întotdeauna ambigue și trebuie verificate.
- **Propuneri în loc de scrieri.** Faptele verificate merg ca propuneri în Monitorul de consistență a datelor: date de bază (`propose_master_data`), analiza persoanei (`propose_person_analysis`), legături (`propose_relation`), duplicate (`propose_duplicate`). Pentru analiza persoanei, IA trebuie să citească mai întâi persoana; un câmp care conține deja conținut este schimbat numai când IA transmite acel conținut cuvânt cu cuvânt. Un câmp de analiză acceptat intră în cea mai recentă analiză a persoanei. O persoană nouă primește numărul ei numai după ce acceptați, astfel că legăturile către ea necesită o a doua acceptare.
- **Niciodată în memoria IA.** Constatările și progresul OSINT aparțin părții, nu memoriei. Cât timp o verificare OSINT a unei IA desktop este deschisă, fiecare încercare de a stoca o intrare de memorie este refuzată, cu instrucțiunea de a introduce faptele la parte.
- **Căutarea web a persoanei în aplicație.** Butonul *Cercetare web* din analiza persoanei rulează patru pași: o căutare web cu variante de nume colectează linkuri candidate (o căutare web suplimentară a IA rulează numai cu acordul dumneavoastră); eliminați rezultatele nedorite; paginile rămase sunt încărcate și rezumate de o IA externă; bifați sursele, iar IA le condensează în câmpurile de analiză ca previzualizare editabilă. Salvarea scrie câmpurile în analiza persoanei care nu este legată de un dosar, marcată ca neconfirmată. IA externă este folosită numai după ce ați fost de acord într-un dialog de consimțământ; dacă refuzați, nu se trimite nimic.

## Flux de lucru 8 — Cercetare juridică — mai întâi legile din bibliotecă

Folosiți acest flux de lucru ori de câte ori contează o lege, un articol de cod sau un regulament: pentru a răspunde la o întrebare juridică, pentru a verifica o citare sau pentru a întemeia un act de procedură.
IA citește normele din propria dumneavoastră bibliotecă de legi, cuvânt cu cuvânt, și merge pe internet numai când biblioteca nu are nimic despre acea normă.
O lege găsită online este deschisă, citită, citată cu URL-ul ei și raportată înapoi, ca după aprobarea dumneavoastră să intre în bibliotecă.
Biblioteca este ceea ce verificarea actului de procedură folosește pentru a controla fiecare articol citat.

![Schemă logică: întrebați despre o normă cu dosarul deschis; IA stabilește jurisdicția și caută în biblioteca de legi; dacă biblioteca are norma, IA citește articolul textual și răspunde din bibliotecă; dacă nu, web-ul este eliberat pentru acea normă, IA deschide și citește pagina, raportează sursa, o bifați în dialogul de consimțământ, iar legea este stocată în bibliotecă și citită de acolo; într-un act de procedură, verificarea actului controlează că fiecare articol citat a fost citit în bibliotecă.](https://www.ironstick.legal/img/bridge/w8_flow.png)

Mai întâi biblioteca, web-ul numai la un rezultat gol, iar fiecare sursă web înapoi în bibliotecă cu aprobarea dumneavoastră.

### Pasul 0 — stabiliți contextul

- **Deschideți dosarul sau numiți-l.** Dreptul de aplicat provine din dosar. IA stabilește jurisdicția cu `read_case_jurisdiction` înainte de orice lucru juridic de fond.
- **Dacă nu este numită nicio jurisdicție.** Căutarea în bibliotecă folosește atunci jurisdicția dosarului la care IA a lucrat ultima dată în sesiune și o spune; fără un dosar cunoscut, caută în toate jurisdicțiile și cere IA să verifice jurisdicția fiecărui rezultat.
- **Vedeți ce conține biblioteca.** Ecranul *Legi* listează fiecare lege din bibliotecă cu titlu, jurisdicție, domeniu, sursă și stare, are propria căutare full-text și un buton de adăugare pentru un link sau un fișier PDF ori Markdown. Întrebați IA „ce legi conține biblioteca pentru România?” pentru a obține aceeași prezentare generală în dialog.
- **Cereți citirea de care aveți nevoie.** O privire rapidă de ansamblu, textul literal al unui articol sau o citire completă a unei legi. Spuneți care.

### Ce spuneți — pas cu pas

1. Ce spune art. [număr] din [lege]? Citează-l.

Articolul este citit cuvânt cu cuvânt din biblioteca dumneavoastră de legi și citat cu sursa lui.
2. Este [întrebare] reglementată în [lege]? Dă-mi articolele.

Biblioteca este căutată; primiți articolele relevante cu formularea lor exactă.
3. Verifică normele citate în proiectul meu față de bibliotecă.

Fiecare articol citat este comparat cu textul integral din bibliotecă.
4. [lege] nu este în bibliotecă — caut-o pe portalul oficial.

Web-ul este deschis numai pentru o normă pe care biblioteca nu o conține; pagina este citită, citată cu linkul ei și propusă pentru biblioteca dumneavoastră.

### Ce se întâmplă în fundal

- **Căutarea în bibliotecă.** `search_legal_source` caută în toate fișierele de legi ale bibliotecii în două moduri: după denumire („cod civil”, „ANRE 201/2023”), potrivită cu titlul și descrierea și clasată prima, sau după pasaj, o căutare aproximativă în care sunt suficiente aproximativ 60 % dintre cuvinte. Fiecare rezultat numește numărul intern de înregistrare (numărul L), fișierul, scurte fragmente cu pozițiile lor exacte de caractere și un apel gata făcut pentru a prelua formularea din jurul lor.
- **Citire textuală.** `get_legal_article` returnează un articol după numărul L și numărul articolului; `grep_legal` returnează un interval de caractere sau fiecare loc în care apare o expresie, cu formularea din jur. Ambele înregistrează exact ce au returnat ca citit. `get_legal_source` și `get_legal_by_lnumber` returnează o lege întreagă; o lege mai mare decât limita conectorului merge completă în spațiul intermediar criptat, fără previzualizare, și nu înregistrează atunci nimic ca citit.
- **Mai întâi biblioteca de legi.** O căutare web sau o cerere de pagină care seamănă cu o căutare de lege — numere de articole sau alineate, nume de coduri, numere de legi, portaluri de legislație — este refuzată până când IA a căutat norma în bibliotecă. Dacă biblioteca are rezultate, web-ul rămâne închis pentru acea normă, iar IA este instruită să citeze din bibliotecă. Numai când biblioteca raportează nicio potrivire, web-ul este eliberat pentru acea normă, pentru 15 minute, inclusiv linkurile portalurilor de legislație pe care le returnează căutarea. Rezultatele care nu poartă în titlu numărul actului sau denumirea căutată, sau care nu conțin numărul articolului căutat, nu contează ca „biblioteca o are” — o mențiune a unui act subsidiar în interiorul legii-mamă este un astfel de rezultat fals. Poarta se aplică chatului IA și fiecărei IA desktop.
- **Deschise, nu fragmente.** O pagină folosită ca sursă este deschisă și citită cu `open_url`; rezultatele căutării sunt doar indicatoare. Fiecare sursă de pe internet este citată cu URL-ul ei. Formularea legii este citată din fișierul bibliotecii odată ce sursa se află acolo.
- **Raportați sursele de lege.** După o căutare web legată de o lege, sau după ce IA a deschis o pagină a unui portal de legislație, fiecare răspuns următor al unui instrument începe cu reamintirea de a raporta sursa cu `add_legal_source`, timp de până la 15 minute. Un link de portal care apare doar într-un rezultat de căutare fără legătură primește doar o notă.
- **Deschise chiar de IA.** `add_legal_source` acceptă un link numai când aceeași sesiune IA a deschis exact acea pagină cu `open_url` în ultimele 24 de ore. Altfel raportul este refuzat, cu instrucțiunea de a deschide pagina și de a verifica dacă ea conține într-adevăr textul legii — nu o pagină de eroare, o pagină de autentificare, un rezultat de căutare sau o prezentare generală. Ca orice scriere datată, raportul necesită data curentă obținută în ultimele 30 de minute.
- **Consimțământul dumneavoastră.** Sursele raportate se adună într-un singur dialog, fiecare cu o casetă de bifat. Sursele bifate sunt preluate de un proces în fundal, convertite, verificate și stocate în bibliotecă; cele nebifate sunt refuzate. Închiderea dialogului le lasă adunate; el revine cu următorul raport. Un link deja în bibliotecă primește răspunsul „există”; o altă sursă pentru un act pe care biblioteca îl deține deja devine o cerere de înlocuire a sursei, sub același număr L.
- **Fără portaluri de legislație în fereastra de browser.** Fereastra de browser IRONSTICK, în care finalizați verificările anti-bot și autentificările pentru alte site-uri, refuză portalurile de legislație: nimic nu este deschis, citit sau descărcat acolo. Un portal de legislație care blochează `open_url` nu este predat acelei ferestre.
- **Actualitatea bibliotecii.** Sursele legate sunt reverificate față de sursa lor aproximativ la 14 zile; `recheck_legal_source` verifică o lege imediat. O lege care nu a mai putut fi verificată față de sursa ei este marcată „neverificabilă”; pentru ea regula „mai întâi biblioteca” nu se aplică, iar versiunea curentă este căutată online. Un fișier încărcat fără sursă poartă un avertisment că actualitatea lui nu poate fi verificată.
- **Citări într-un act de procedură.** Verificarea actului controlează fiecare articol citat față de jurnalul de citire al instrumentelor bibliotecii. Un articol care există în bibliotecă, dar nu a fost citit acolo înainte de ultima modificare a proiectului, este o constatare blocantă, cu instrucțiunea de a-l citi textual cu `get_legal_article` și de a-l încorpora în text. O normă care nu se află în bibliotecă este o constatare blocantă până când sursa ei este raportată și integrată; o sursă pe care ați refuzat-o lasă citarea marcată ca neverificată. O citire contează când a venit după ultima modificare a textului din bibliotecă și înainte de ultima modificare a proiectului.
- **Localizat nu înseamnă citit.** Găsirea unui număr de articol într-un fișier de lege sau numirea lui într-o prezentare generală nu este o citire textuală. Pentru un act de procedură, fiecare articol citat este citit cu `get_legal_article`, iar IA verifică dacă formularea susține într-adevăr propoziția ei.
- **Citirea unei legi întregi.** Când un cod complet se află în spațiul intermediar și IA îl citește pe părți cu `scratch_read`, ea are textul integral în conversația ei. Pentru verificarea actului, un articol contează ca citit numai când a venit prin `get_legal_article` sau `grep_legal`, sau cu o lege suficient de mică pentru a fi returnată direct.

## Lucrul cu IA — asistentul dumneavoastră în dosar

În principiu, un chat cu o IA conectată la IRONSTICK prin bridge este un instrument enorm de puternic. Gândiți-vă la el ca la un paralegal sau la un coleg avocat. Prin bridge, IA poate nu numai să caute documente, pasaje individuale de text sau probe — poate și să vadă imagini stocate, să vadă și să verifice fișiere PDF la cerere, să pornească noi scanări OCR și multe altele.

Când lucrați cu IA, lucrați cu ea ca și cu un paralegal sau un avocat. Pur și simplu dați instrucțiuni clare despre ce doriți exact. IA face în fundal interogările necesare prin bridge, direct în IRONSTICK — adică în dosarele dumneavoastră.

**Ca regulă:** singurul lucru pe care IA îl poate face în IRONSTICK fără consimțământul dumneavoastră este să citească. IA nu poate scrie nimic fără consimțământul dumneavoastră — cu excepția locurilor rezervate exclusiv scrierii de către IA; acestea nu pot afecta dosarele dumneavoastră. În toate celelalte domenii, IA poate scrie numai după consimțământul dumneavoastră: fie primiți pentru aceasta un dialog în IRONSTICK, fie cererea de modificare a IA apare în Monitorul de consistență a datelor.

**Dar atenție:** fiecare aplicație IA desktop își arată apelurile de instrumente. Dacă IA vă dă un răspuns fără să fi făcut niciun apel de instrument către IRONSTICK, fiți sceptic și întrebați pe ce se bazează această informație.

Fiți strict în întrebările și instrucțiunile dumneavoastră și spuneți-i IA unde și cum să cerceteze. Nu trebuie să numiți instrumentul de căutare — IA îl cunoaște singură — dar spuneți-i clar să preia informația din IRONSTICK: la clientul XY, în dosarul XY, în proba XY. Puteți numi pur și simplu clienții după nume — IA rezolvă singură ID-ul clientului — sau puteți copia numărul clientului (*@C0000000*) din IRONSTICK și i-l puteți da IA. Același lucru funcționează, de exemplu, cu un număr de probă (*#0000000*).
**Vă rugăm să înțelegeți mai ales un lucru:** IA nu este o inteligență artificială ca atare. În spatele ei nu există absolut nicio inteligență. Ceea ce se numește astăzi IA este un model matematic de calcul al probabilităților. Nu are absolut nicio conștiință — chiar dacă încearcă să transmită exact această iluzie. În principiu, este un compilator îmbunătățit matematic — și exact pentru asta îl folosește IRONSTICK: IRONSTICK livrează datele, iar IA generează proză în jurul datelor și faptelor date. IA nu simte dosarul; ea doar calculează probabilitățile dintr-un dosar. Pentru asta este construită, în asta este bună — și pentru asta o folosește IRONSTICK.

Cu alte cuvinte: IA acoperă ceea ce logica deterministă a unui program nu poate acoperi, sau o poate doar cu efort extrem — înțelegerea și scrierea limbajului natural. Tot restul — accesul la dosarele dumneavoastră, selecția dosarului instanței, verificările față de evidențele dumneavoastră, regula că nimic nu se scrie fără consimțământul dumneavoastră — este făcut de IRONSTICK însuși, determinist. IA nu devine niciodată sursa faptelor; IRONSTICK este. Aceasta deosebește atât de fundamental abordarea IRONSTICK de utilizarea convențională a IA.

Pentru dumneavoastră, ca utilizator, IRONSTICK se prezintă totuși în forma familiară — ca interfață grafică sau ca dialog.
