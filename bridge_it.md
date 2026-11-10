# Compendi - Bridge

> Il Bridge IRONSTICK per l’IA desktop: collegare Claude, ChatGPT, Qwen o Kimi Desktop ai propri fascicoli — licenze, installazione, i controlli deterministici e il catalogo completo degli strumenti.

Pagina originale: https://www.ironstick.legal/bridge_it.html

---

Il Bridge di IRONSTICK consente all'IA desktop che Lei già utilizza — Claude
Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop o Kimi Desktop — di lavorare
direttamente sui Suoi fascicoli, in locale sullo stesso computer e dietro
diciassette salvaguardie deterministiche. Il primo accesso ai dati in ogni
esecuzione del programma richiede il Suo consenso, ogni accesso viene mostrato
nella barra dei menu e le modifiche ad anagrafiche, cronaca, calendario e
istruzioni diventano efficaci solo dopo la Sua approvazione. Questo compendio
tratta le licenze, il rapporto con la chat IA integrata di IRONSTICK, l'installazione,
la visualizzazione degli accessi, le salvaguardie, le richieste tipiche e il
catalogo completo degli strumenti. Edizione per Windows.

**In sintesi**

- **Per chi:** avvocati e parti che agiscono in proprio, su una singola
postazione o in uno studio collegato tramite IRONSTICK SERVER, il server dello
studio.
- **In locale:** il programma Bridge dell'IA desktop e IRONSTICK comunicano
tramite una connessione protetta da token sullo stesso computer; solo gli
strumenti per il web e per i registri contattano Internet.
- **Sotto controllo:** consenso una volta per esecuzione del programma, un
simbolo visibile per ogni accesso, gate deterministici prima di scritture e
consegne, e proposte al posto di modifiche silenziose.
- **Paneuropeo:** ricerche e confronti gestiscono i segni diacritici di
tutte e undici le lingue dell'interfaccia; i codici identificativi nazionali
vengono validati per nove schemi in sette paesi.

## 1. Che cos'è il Bridge

Il Bridge collega **la Sua IA desktop** — Claude Desktop (o
Claude Code), ChatGPT Desktop, Qwen Desktop o Kimi Desktop — con
**l'applicazione IRONSTICK in esecuzione** sullo stesso computer. L'IA può
allora leggere il materiale dei Suoi casi tramite strumenti costruiti su misura
— cronache, testi integrali dei documenti, e-mail, scadenze, anagrafiche — e
lavorarci in piena profondità: analizzare, verificare, redigere. Il collegamento
stesso è strettamente locale; nessun server IRONSTICK è
coinvolto. I dati che l'IA legge vengono trattati nell'ambito del **Suo
abbonamento presso quel fornitore e alle condizioni del fornitore**, come
illustrato nella [dichiarazione GDPR sui flussi di dati](https://www.ironstick.legal/gdpr_it.html).

- Presuppone la rispettiva applicazione desktop con il proprio account
(Anthropic, OpenAI, Qwen o Kimi).
- Resta sotto il Suo controllo: chiudendo IRONSTICK si chiude subito
la fonte dei dati.
- Questo canale trasmette **deliberatamente dati reali, non pseudonimizzati**:
è proprio questo che rende possibile la stesura di modelli pronti per il deposito.
- I documenti contrassegnati come **segreti** sono invisibili al Bridge.
- La **memoria IA condivisa tra le chat è costruita per procedimenti lunghi**:
le voci legate a un caso non vengono mai cancellate automaticamente; le voci senza
caso vengono cancellate dopo un anno senza utilizzo, e ogni utilizzo rinnova
quell'anno.
- L'accesso in scrittura è volutamente ristretto. Le modifiche ad anagrafiche,
cronaca, calendario, memoria, testi integrali e biblioteca giuridica diventano
efficaci solo dopo la Sua approvazione, in un modulo o in una finestra di
IRONSTICK oppure nel Monitor di Coerenza dei Dati. Senza una simile finestra,
l'IA scrive soltanto nelle proprie aree di lavoro (spazio di scratch cifrato,
diario giornaliero su Sua richiesta, la propria valutazione del caso dopo i
controlli deterministici) e note sulla bacheca di un caso condiviso tramite
IRONSTICK SERVER; etichette e messaggi della chat dello studio richiedono la Sua
conferma nella chat. Le bozze vanno nel word processor.

Ogni IA desktop ha il proprio piccolo programma Bridge; tutti si
collegano allo stesso endpoint locale nell'applicazione IRONSTICK in esecuzione.
Tutte e quattro le IA desktop ricevono gli stessi strumenti e gli stessi gate.
Le IA possono funzionare **contemporaneamente** e
lavorare in parallelo sullo stesso caso; ognuna è mostrata con il proprio logo
nella barra dei menu.
## 1b. Perché il Bridge?

**Perché il Bridge lavora con l'abbonamento che Lei già possiede.** Un'IA
desktop funziona tramite l'app desktop del fornitore e il Suo account presso di
esso; un abbonamento è la tariffa mensile forfettaria del fornitore, e ogni
dialogo, ogni lettura di testo integrale e ogni round di stesura ne sono
coperti. Lo stesso lavoro svolto con la chat integrata di IRONSTICK gira sulla
Sua chiave API, e l'accesso API viene fatturato dal fornitore a consumo.

Il Bridge è quindi la via preferita per i dialoghi lunghi con l'IA e per ogni
lavoro in cui documenti o grandi quantità di dati vengono gestiti tramite l'IA:
leggere interi fascicoli, tenere aggiornati cronache, diari giornalieri e voci
di memoria, elaborare centinaia di allegati — un lavoro il cui volume è coperto
dalla tariffa forfettaria invece di essere fatturato a consumo.

 [Figure: Due vie verso l'IA: una chiave API fatturata a consumo, oppure il Bridge con l'app desktop del fornitore e il relativo abbonamento]
**Solo con Claude Desktop / Claude Code**

- **Ogni chat è tracciata separatamente.** IRONSTICK distingue le chat
del Suo Claude Desktop. Blocco delle istruzioni, registro di lettura, stato di
preparazione, verifiche delle parti e tracciamento delle
consegne sono gestiti **per singola chat**: ciò che una chat ha letto non vale
mai per un'altra. Nel menu a tendina sul simbolo di Claude ogni chat compare con
il nome che le ha dato in Claude Desktop. A tal fine IRONSTICK legge dal
registro di sessione locale di Claude solo gli eventi strutturati degli strumenti
(nome dello strumento e argomenti) — mai il testo della conversazione.
- **La compattazione del contesto viene riconosciuta.** Quando Claude
compatta una conversazione lunga, le istruzioni lette in precedenza non si
trovano più con certezza nel suo contesto. IRONSTICK blocca subito quella chat,
senza penalità, finché non ha riletto le istruzioni e
restituito alla lettera una regola scelta a caso; poi riprende a lavorare dal
punto in cui era rimasta.
- **L'aggiramento del connettore viene riconosciuto.** Se una chat accede
alla cartella dei dati di IRONSTICK con gli strumenti di file propri di Claude
(lettura, ricerca, shell, modifica) invece che tramite il connettore, ciò viene
annotato a carico di quella chat come violazione delle regole e segnalato alla
sua successiva chiamata al connettore.
- **Limite del connettore esteso.** Claude Desktop riceve risultati fino a
40.000 caratteri direttamente nella risposta, quattro volte il limite standard
(10.000 per Qwen, Kimi e la chat integrata); tutto ciò che supera il limite
finisce per intero nello spazio di scratch.
- **Risposte entro 45 secondi.** Poiché Claude Desktop annulla le chiamate
di strumento dopo 60 secondi, le pagine web vengono restituite entro 45 secondi
(questo limite vale per ogni IA desktop). I documenti grandi o scansionati
continuano a essere elaborati in background e vengono consegnati alla chiamata
successiva con lo stesso indirizzo.
- **Verifica delle parti con anticipo.** Mentre Claude elabora
una parte, può indicare in anticipo fino a due ulteriori parti; IRONSTICK le cerca in
background, così la verifica successiva risponde subito. I risultati
restano disponibili per 30 minuti; l'ordine del gate resta invariato, e la parte
successiva si apre solo quando quella corrente è conclusa.

**Solo con ChatGPT Desktop**

- **Limite del connettore esteso.** ChatGPT Desktop riceve risultati fino a
40.000 caratteri direttamente nella risposta, quattro volte il limite standard
(10.000 per Qwen, Kimi e la chat integrata); tutto ciò che supera il limite
finisce per intero nello spazio di scratch.
- **Verifica delle parti con anticipo.** Mentre ChatGPT elabora una parte,
può indicare in anticipo fino a due ulteriori parti; IRONSTICK le cerca in
background, così la verifica successiva risponde subito. I risultati
restano disponibili per 30 minuti; l'ordine del gate resta invariato.

## 1c. Licenze — quattro Bridge o il bundle

Ogni Bridge per IA desktop è un **modulo aggiuntivo con licenza propria**:

| Bridge | Collega | Licenza |
| --- | --- | --- |
| **Bridge Claude Desktop** | Claude Desktop / Claude Code (Anthropic) | modulo proprio |
| **Bridge ChatGPT Desktop** | ChatGPT Desktop (OpenAI) | modulo proprio |
| **Bridge Qwen Desktop** | Qwen Desktop | modulo proprio |
| **Bridge Kimi Desktop** | Kimi Desktop (Moonshot AI) | modulo proprio |
| **Bundle dei Bridge** | tutti e quattro i precedenti | i quattro moduli insieme |

- Ogni Bridge viene sbloccato nella Sua **chiave di licenza firmata dell'app
client**; non esiste una chiave Bridge separata.
Vengono attivati solo i Bridge con licenza; un Bridge
senza licenza non viene installato e non compare nella configurazione.
- Può acquistare la licenza di **un singolo Bridge** (solo per l'IA desktop che
usa) oppure il **bundle di tutti e quattro** — ampliabile in seguito.
- I Bridge con licenza possono funzionare **in parallelo**; un caso può essere
elaborato contemporaneamente da più IA desktop.

 [Figure: App client IRONSTICK più bundle dei Bridge: per ogni IA desktop un proprio programma Bridge con licenza]
I prezzi dei singoli Bridge e del bundle sono riportati alla pagina
[Prezzi](https://www.ironstick.legal/pricing_it.html).
## 1d. La chat IA integrata di IRONSTICK — lo stesso modello, senza licenza aggiuntiva

IRONSTICK ha anche una **propria chat IA integrata**. Funziona sullo
**stesso livello di lavoro del Bridge**: gli stessi strumenti,
gli stessi gate, lo stesso ancoraggio e la stessa stesura di modelli pronti per il
deposito.

- **Nessuna licenza aggiuntiva.** La chat integrata fa parte di
IRONSTICK; non richiede alcun modulo Bridge.
- **Funziona tramite l'API dei fornitori** (la Sua chiave API personale),
che il fornitore fattura a consumo, mentre il Bridge lavora tramite l'app desktop
del fornitore con la tariffa mensile forfettaria del Suo abbonamento.
- In cambio, la via API è **più strettamente controllata**: i dati vengono
pseudonimizzati dal router, le chiamate interattive chiedono il Suo consenso,
ogni chiamata viene registrata nel registro di audit e valgono limiti di
dimensione, in aggiunta agli stessi gate del Bridge.

 [Figure: La chat IA integrata: l'app client IRONSTICK con la chiave API del fornitore]
**In breve:** il Bridge (app desktop, abbonamento mensile
forfettario) è adatto al lavoro quotidiano intenso e basato sui documenti; la chat
integrata (API fatturata a consumo, senza licenza aggiuntiva) è sempre disponibile
e più strettamente controllata.
## 2. Installazione (per ciascuna delle quattro)

 [Figure: Configurazione → Configurazione IA: la sezione Claude Desktop con entrambi gli interruttori, il pulsante di configurazione e il pulsante per il plugin di skill.]

Configurazione → Configurazione IA: la sezione Claude Desktop con entrambi gli interruttori, il pulsante di configurazione e il pulsante per il plugin di skill.

La procedura è la stessa per ogni IA desktop; cambiano solo la fonte di
download e il pulsante di configurazione.

1. Installare l'applicazione desktop, accedere con il proprio account e avviarla
una volta.
2. In IRONSTICK aprire **Configurazione → Configurazione IA → IA con server
MCP locale (STDIO)**.
3. Attivare **«Consenti l'accesso al connettore da Claude Desktop»**
(l'interruttore principale dell'intero canale).
4. Facoltativamente attivare **«Consenti la navigazione da Claude Desktop»**,
se l'IA deve poter anche comandare l'app: aprire schermate, casi e documenti,
esportare file. La lettura funziona anche senza.
5. Fare clic sul pulsante **«Configura … Desktop»** corrispondente. Per Claude,
ChatGPT e Kimi, un solo clic scrive e registra la configurazione. Per Qwen Desktop,
IRONSTICK copia il testo di configurazione negli appunti e Lei lo incolla nella
finestra «Aggiungi MCP» di Qwen.
6. Avviare una **nuova conversazione**, oppure usare il **pulsante di
riavvio** nella stessa sezione, che chiude e riavvia le app dell'IA desktop con
licenza, in modo che si ricolleghino a IRONSTICK. IRONSTICK compare allora tra i
connettori dell'IA, e i suoi strumenti sono disponibili in ogni conversazione.

| IA desktop | Download / accesso | Pulsante di configurazione |
| --- | --- | --- |
| **Claude Desktop / Claude Code** | claude.ai/download — account Anthropic | «Configura Claude Desktop»; un pulsante separato crea il plugin di skill, che si aggiunge in Claude Desktop |
| **ChatGPT Desktop** | openai.com/chatgpt/download — account OpenAI | «Configura ChatGPT Desktop»; un pulsante separato crea il plugin di skill, che si aggiunge in ChatGPT Desktop |
| **Qwen Desktop** | Qwen Desktop (Windows) — account Qwen | «Configura Qwen Desktop» (copia il testo di configurazione per la finestra «Aggiungi MCP» di Qwen) |
| **Kimi Desktop** | kimi.ai — account Kimi | «Configura Kimi Desktop» |

La schermata di configurazione riporta i link di download e i link ai
termini d'uso e all'informativa sulla privacy di ciascun fornitore.

**Configurazione in un solo passaggio.** Per Claude, ChatGPT e Kimi, un
solo clic sul pulsante di configurazione nella schermata di configurazione
dell'App client scrive e registra la configurazione completa; non occorre
modificare a mano alcun file di configurazione. Per Qwen Desktop basta un
incolla nella finestra di Qwen. Il **pulsante di riavvio** chiude e riavvia le app
dell'IA desktop con licenza, in modo che si ricolleghino a IRONSTICK.
## 3. Come l'accesso dell'IA viene mostrato nella barra dei menu

 [Figure: La barra dei menu durante un accesso tramite il Bridge — il simbolo di Claude compare accanto all'indicatore CPU/RAM.]

La barra dei menu durante un accesso tramite il Bridge — il simbolo di Claude compare accanto all'indicatore CPU/RAM.

- **Prima il consenso.** Il primo accesso ai dati da parte di una qualsiasi IA
desktop in un'esecuzione del programma apre una finestra di consenso. Se Lei
acconsente, l'accesso resta aperto per tutte le IA desktop per il resto
dell'esecuzione; se rifiuta, tutte vengono bloccate per 10 minuti.
- **Un logo proprio di ciascuna IA** compare nella barra superiore accanto
all'indicatore CPU/RAM **a ogni singola chiamata di strumento** e resta acceso
per 3 secondi dopo l'ultima chiamata — serie rapide di chiamate lo mantengono
acceso senza interruzioni. Se il simbolo è spento, in quel momento non viene letto
nulla. Ogni IA ha il proprio segno: la stella arancione di Claude, il nodo verde di
OpenAI, il simbolo di chat viola di Qwen, la «K» color petrolio di Kimi.
 [Figure: Primo piano: il simbolo di Claude si illumina a ogni singola chiamata di strumento e resta visibile per 3 secondi dopo l'ultima chiamata.]

Primo piano: il simbolo di Claude si illumina a ogni singola chiamata di strumento e resta visibile per 3 secondi dopo l'ultima chiamata.

- **Il menu a tendina sul simbolo dell'IA** mostra che cosa quell'IA ha letto
nella sessione: la riga «Istruzioni di lavoro + divieto di allucinazione» (spunta
verde finché è valida, croce rossa dopo la scadenza), poi per ogni caso i
contrassegni Profilo, Giurisdizione e Digest più una barra «Documenti letti
*r* di *n*».
- **Il simbolo del cervello** compare non appena la memoria IA condivisa
contiene voci, e pulsa per 3 secondi ogni volta che un canale IA la legge o
la scrive. Un clic apre la finestra di gestione. L'IA può proporre di salvare,
modificare o cancellare una voce di memoria; ogni modifica diventa efficace solo
dopo la Sua approvazione. Le Sue note personali sono per l'IA di sola lettura.
- La **navigazione** da parte dell'IA (aprire schermate/casi/documenti) avviene
solo se il relativo interruttore è attivo — altrimenti gli strumenti di
navigazione vengono rifiutati.
- **Accesso parallelo:** se più IA con licenza lavorano contemporaneamente,
la barra superiore mostra **un logo pulsante per ogni IA attiva**, uno accanto
all'altro; ogni accesso viene sempre attribuito all'IA che lo ha effettuato.
- **Processi in background:** l'indicatore delle prestazioni elenca tutti i
processi in background in corso — compresa ogni chiamata di strumenti della chat integrata.

## 4. Diciassette salvaguardie deterministiche contro allucinazioni ed errori nei dati

IRONSTICK impone
le proprie regole di lavoro a livello strutturale. Diciassette gate deterministici (pura logica, nessuna IA)
si trovano tra il modello e i Suoi record. Nel catalogo degli strumenti, un contrassegno blu
come Gate 1 · Data indica il gate che protegge
uno strumento.

| Gate | Impedisce | Come funziona |
| --- | --- | --- |
| **1. Gate della data** | Date errate prese dal periodo di addestramento del modello anziché dalla data reale. | Ogni strumento che scrive in IRONSTICK viene rifiutato a meno che l'IA non abbia recuperato la data e l'ora reali, verificate via NTP, negli ultimi 30 minuti. La finestra è gestita per ogni IA ed è volutamente breve. |
| **2. Gate delle norme** | Testi normativi inventati o ricordati male. | L'accesso al web per le norme viene rifiutato finché non è stata consultata la biblioteca giuridica locale verificata; le fonti normative trovate online devono essere segnalate ed entrano nella biblioteca solo attraverso la Sua finestra di consenso. |
| **3. Gate di verifica dell'atto** | Riferimenti al fascicolo inventati, importi divergenti, nomi delle parti errati, citazioni non verificate in un atto. | La verifica deterministica a otto classi degli atti: la consegna di un documento formale è bloccata senza una verifica positiva aggiornata per l'esatto stato del file; dopo cinque esecuzioni fallite il processo si interrompe e Lei viene avvisato. |
| **4. Guardiano della copertura di lettura** | Affermazioni del tipo «ho letto tutto» su file letti solo in parte. | Tracciamento esatto, riga per riga, di ciò che è stato effettivamente letto, conservato anche dopo i riavvii; gli intervalli non letti sono elencati in ogni risposta, la consegna resta bloccata finché esistono lacune, e cancellare o sovrascrivere file sorgente non letti viene rifiutato. |
| **5. Blocco della navigazione** | Perdita del lavoro non salvato a causa di un cambio di schermata provocato dall'IA. | Mentre è aperto un modulo di acquisizione o l'editor di testo, ogni chiamata di navigazione e di esportazione viene rifiutata. |
| **6. Gate human-in-the-loop** | Modifiche silenziose dell'IA ad anagrafiche, cronaca, calendario o istruzioni. | Le modifiche dell'IA arrivano come proposte: Monitor di Coerenza dei Dati, finestre di confronto rosso/verde, finestre di conferma; nulla viene applicato senza la Sua approvazione. |
| **7. Rilevatore di contenuto formale** | Lettere formali o atti dichiarati «informali» per aggirare formattazione e verifica. | Una scansione deterministica del contenuto (formule di saluto e di chiusura in sei lingue, blocco del destinatario, marcatori giuridici, blocco identificativo) respinge la dichiarazione di informalità; un simile contenuto non ha alcuna via di consegna informale, e il tentativo viene registrato. |
| **8. Guardiano della serie di versioni** | Azzeramento del contatore di versione rinominando il file («…\_v05» che diventa in silenzio «NuovoNome\_v01»). | Una prima consegna con un nuovo nome di file viene rifiutata finché esiste una serie versionata con lo stesso numero di caso; l'IA deve proseguire la serie oppure dichiarare esplicitamente un documento realmente diverso, e ciò viene registrato. |
| **9. Registro di lettura delle norme** | Contenuti normativi tratti da articoli di stampa, sintesi web o dalla memoria del modello invece che dal testo della legge. | Ogni lettura dalla biblioteca viene registrata per ogni esecuzione del programma (file sorgente e numeri degli articoli effettivamente restituiti). Un articolo citato senza tale registrazione di lettura non supera la verifica; anche i sotto-riferimenti citati (comma, punto) vengono verificati nella loro esistenza. |
| **10. Ancora del caso** | Contesto del caso inventato ricordando un caso *diverso* (contaminazione tra casi). | Ogni risposta di uno strumento che riguarda un caso reca il numero registrato, il cliente e l'oggetto del caso tratti dai record, così che qualsiasi contesto inventato compaia accanto ai dati registrati e venga subito smascherato. |
| **11. Blocco di accesso alle istruzioni** | Un'IA che lavora senza aver letto le regole di lavoro. | Oltre alla lettura delle istruzioni, alla loro conferma e alla lettura della lingua di sistema, ogni strumento viene rifiutato finché l'IA non ha letto le istruzioni e citato alla lettera la regola 5 (divieto di allucinazione). La conferma scade 60 minuti dopo essere stata data, dopo 2 ore senza chiamate, a mezzanotte, a ogni nuova connessione e dopo che l'IA desktop ha compattato il proprio contesto; l'IA deve allora rileggere le istruzioni e citare una regola scelta a caso. Il menu a tendina sul simbolo dell'IA mostra lo stato in verde o in rosso. |
| **12. Gate di preparazione** | Note, voci di diario o atti su un caso che l'IA non ha letto. | Due livelli, registrati per ogni IA e conservati anche dopo i riavvii: una nota richiede la lettura del profilo, della giurisdizione, del digest di ogni documento (il digest funge da cronaca) e dei cinque documenti più recenti; un atto, una consegna o un'esportazione richiedono inoltre la lettura integrale di ogni documento che citano o allegano. Una lettura resta valida 3 giorni, oppure fino al successivo documento in entrata del caso. |
| **13. Registro di lettura legato al documento** | Allegati e riferimenti «letti» ore prima, o per un altro documento. | Una lettura del testo integrale vale 2 ore; ogni consegna dello stesso documento (qualsiasi versione) proroga di 2 ore i documenti che cita; verificare o consegnare un documento diverso azzera le letture degli allegati, e l'IA rilegge da capo gli allegati di quel documento. |
| **14. Gate di lettura per l'analisi** | «Fatti» non verificati inseriti nella descrizione o nei campi di contatto di una persona. | Una proposta che tocca i campi di testo libero di una persona viene rifiutata a meno che l'IA non abbia letto il profilo di quella persona negli ultimi 30 minuti. |
| **15. Gate del digest** | Contenuti del caso raccolti a pezzi (ricerche, cronologie, testi integrali, scadenze) su un caso di cui l'IA non ha letto il digest. | Ogni strumento sui contenuti del caso (cronaca, cronologia, ricerche, testi integrali, contraddizioni, obblighi, scadenze, corrispondenza, media, istituzioni, etichette, valutazione, note di istruzione) viene rifiutato finché il digest del caso non è stato letto; il rifiuto indica la chiamata di preparazione. Il terzo tentativo rifiutato sullo stesso caso viene registrato come violazione delle regole. |
| **16. Gate delle parti simili** | Persone, società o istituzioni duplicate, create perché una grafia variante non è stata riconosciuta. | A una proposta di nuovo record si risponde con un elenco di record simili già esistenti, e nulla viene salvato. L'IA deve registrare sul record esistente oppure confermare esplicitamente che la parte è realmente nuova. Ogni nuova parte salvata comporta l'obbligo di seguito: ricercare e registrare le sue connessioni, ricerca web compresa. |
| **17. Blocco delle ripetizioni** | Il recupero ripetuto di dati identici, che costa tempo e token senza aggiungere informazioni. | Una chiamata che restituisce esattamente lo stesso contenuto di una precedente viene respinta. Si confronta il contenuto, non la chiamata: anche un parametro diverso che produce lo stesso risultato viene respinto. Il blocco si azzera quando è stato consegnato o presentato un altro documento, quando il programma di IA si riconnette, quando l'IA ha svolto nel frattempo un altro compito o quando l'IA ha riletto e confermato le proprie istruzioni. |

## 5. Che cosa si può fare — esempi

Parli con l'IA desktop (o con la chat integrata) in linguaggio naturale;
l'IA sceglie da sé gli strumenti adatti. Richieste tipiche:

**«Che cosa è successo nel caso [numero del caso]? Riassuma la
situazione attuale e la prossima scadenza.»**
L'IA individua il caso, legge
l'intero fascicolo a sezioni e legge le scadenze, poi fornisce una sintesi con i
riferimenti ai documenti.
**«Rediga la risposta alla richiesta del tribunale della settimana scorsa, nel nostro
formato di atto, e la passi al word processor.»**
L'IA trova la
richiesta, legge il testo integrale, carica il formato di output e redige; la bozza
compare nel word processor di IRONSTICK, pronta per la Sua revisione e per la stampa su
carta intestata.
**«Chi ha detto cosa sul sopralluogo, e le
dichiarazioni si contraddicono?»**
Ricerca delle dichiarazioni e rilevatore di
contraddizioni sull'intero fascicolo.
**«Controlli la partita IVA e il codice LEI della controparte.»**
Verifiche dal vivo
presso il servizio UE VIES e il registro mondiale LEI.
**«Costruisca una cronologia della controversia ed elenchi quali dei
nostri allegati sono già stati depositati in tribunale.»**
Cronologia del caso più
elenchi dei documenti depositati e in uscita con i numeri di registro.
**«Ci sono state e-mail sulla perizia? Che cosa era allegato?»**

Ricerca e-mail con mittente, oggetto, allegati e, su richiesta, il testo del
messaggio.
**«Mi apra il caso ed esporti i due contratti in
PDF.»**
Con la navigazione attivata, l'IA apre le schermate e consegna
i file.
**«Si ricordi per la prossima volta: l'avvocato della controparte
deposita sempre tardi il venerdì.»**
Proposto per la memoria IA condivisa (legato
al cliente, di dimensione limitata); dopo la Sua approvazione è disponibile a
ogni sessione futura, e può verificarlo e cancellarlo in qualsiasi momento.
**«La bozza è pronta. La passi a un'altra IA per il controllo:
la legga, trovi i punti deboli e i controargomenti, e la valuti.»**
L'IA passa
l'atto tramite IRONSTICK; un altro modello, con un addestramento diverso, lo esamina
criticamente, e la sua valutazione torna a Lei. Un vero secondo parere sugli
stessi dati del caso.
**«Registri il lavoro di oggi nel diario giornaliero.»**
E-mail
inviate, atti redatti, tesi elaborate e decisioni vengono scritti nel diario
giornaliero di oggi; alla sessione successiva l'IA si aggiorna leggendo le
voci più recenti.
## 6. Il catalogo degli strumenti

Questi sono gli strumenti messi a disposizione dal Bridge, identici per ogni IA desktop
collegata e per la chat integrata. Ogni riga indica prima la funzione in
italiano corrente e poi il nome tecnico dello strumento, così come lo vede l'IA. Alcuni
nomi tecnici derivano da termini tedeschi o rumeni (per esempio
`tagesprotokoll` = diario giornaliero, `fristen` = scadenze,
`kalender` = calendario, `ki` = IA, `sachverhalte`
= gruppi per materia, `anexe` = allegati); la descrizione indica la funzione.

Tutti gli strumenti sono di sola lettura, salvo che la descrizione indichi che scrivono o aprono un
modulo. Contrassegni: Gate 1 · Data indica la salvaguardia della
tabella dei diciassette gate; Revisione significa che
nulla cambia finché non lo approva nel Monitor di Coerenza dei Dati o in una
finestra o in un modulo di IRONSTICK; Conferma significa che lo
strumento agisce solo dopo la Sua esplicita conferma.

### Contesto della sessione e navigazione

| Funzione | Nome tecnico |
| --- | --- |
| **Avvio completo della sessione.** Esegue l'intero avvio della sessione in una sola chiamata (data, lingua di sistema, contesto attuale, briefing giornaliero, scadenze, appuntamenti, compiti aperti di revisione tra pari) e lo scrive in un unico file di scratch. Al primo avvio di sessione della giornata, l'IA chiede per prima cosa delle decisioni giudiziarie non ancora valutate. | `session_start_to_scratch` |
| **Schermata attuale.** Dove si trova l'utente: schermata, breadcrumb, cliente o caso aperto. | `read_current_context` |
| **Lingua di sistema** dell'installazione. | `read_system_language` |
| **Data e ora attuali** (verificate via NTP), per il calcolo delle scadenze. | `get_datetime` Gate 1 · Data |
| **Istruzioni.** Rilegge in qualsiasi momento le istruzioni del connettore, complete e aggiornate. | `read_instructions` |
| **Conferma delle istruzioni.** Sblocca il connettore dopo che l'IA ha letto le istruzioni e citato alla lettera la regola 5 (divieto di allucinazione). La conferma scade dopo 60 minuti, dopo 2 ore senza chiamate, a mezzanotte, a ogni nuova connessione e dopo la compattazione del contesto; l'IA rilegge allora le istruzioni e cita una regola scelta a caso. | `confirm_instructions` Gate 11 · Blocco istruzioni |
| **Manuale d'uso.** Restituisce le sezioni del manuale corrispondenti a parole chiave in inglese; l'IA le spiega nella lingua del dialogo. Il manuale è conservato cifrato e in sola lettura nello spazio di scratch, dove l'IA può anche cercarvi. Ogni sezione comprende note operative, richieste suggerite e il flusso di lavoro. | `user_help_request` |
| **Briefing del mattino.** Il briefing strutturato di oggi con ID dei documenti, numeri dei casi e contrassegni: scadenze, udienze, e-mail non lette, documenti appena acquisiti, casi con attività elevata. | `get_dailybriefing` |
| **Aprire una schermata** nell'applicazione (richiede l'interruttore della navigazione). | `open_screen` Gate 5 · Navigazione |
| **Aprire un record:** un caso, cliente, persona, istituzione o documento specifico (interruttore della navigazione). | `open_case` / `open_client` / `open_person` / `open_institution` / `open_evidence` |
| **Aprire un'area di lavoro:** l'assistente del fascicolo (dossier), eventualmente già completamente preparato; la ricerca globale; il monitor e-mail (posta in arrivo o inviata, eventualmente un messaggio specifico); il diario giornaliero (un giorno specifico); oppure la schermata di backup. L'avvio di un backup richiede conferma (interruttore della navigazione). | `open_dossier` / `open_search` / `open_emailmonitor` / `open_tagesprotokoll` / `open_backup` |
| **Aprire una scadenza** nella schermata delle scadenze, evidenziata (interruttore della navigazione). | `open_deadline` |
| **Aprire un modulo:** i moduli di acquisizione o modifica di cliente, caso, persona o società e istituzione, la schermata di assegnazione dei casi, oppure la posta in arrivo e il modulo di acquisizione dei documenti. L'IA apre e precompila; l'utente salva (interruttore della navigazione). | `open_new_client` / `open_new_case` / `open_new_person` / `open_new_institution` / `open_assign` / `open_capture` Revisione |
| **Registrare una fonte normativa:** apre la schermata delle leggi con la finestra di registrazione aperta e l'URL precompilato; l'utente conferma (interruttore della navigazione). | `open_new_legal_source` Revisione |
| **Recuperare ora le e-mail:** recupera e smista le nuove e-mail, come il pulsante di recupero. | `fetch_mails` |
| **Avviare una valutazione IA di un caso**, dopo conferma con avviso sui costi. | `request_case_assessment` Conferma |
| **Inviare un messaggio nella chat dello studio** in IRONSTICK SERVER a nome dell'utente, dopo conferma del testo esatto. | `send_server_chat` Conferma |
| **Gestire le etichette:** elencare, aggiungere, modificare o rimuovere le etichette colorate di una voce; ogni modifica richiede conferma. | `manage_tag` Conferma |
| **Riavviare le IA desktop** per una nuova connessione, dopo la Sua conferma. | `recycle_desktop_ai` Conferma |

### Trovare il record giusto

| Funzione | Nome tecnico |
| --- | --- |
| **Elenchi dei clienti e dei casi**, completi. | `list_all_clients` / `list_all_cases` |
| **Trovare un caso per numero** (anche parziale). | `resolve_case_by_number` |
| **Trovare un cliente, una persona o un'istituzione per nome** (ricerca approssimata, tollerante verso i segni diacritici). | `resolve_client_by_name` / `resolve_person_by_name` / `resolve_institution_by_name` |
| **Casi in cui compare una determinata parte.** | `find_case_by_party` |
| **Trovare parti per parola chiave:** persone e istituzioni il cui nome, le cui note o i cui campi di analisi contengono una parola chiave; il punto di partenza quando si conosce solo un frammento. | `find_party_by_keyword` |
| **Casi con attività elevata** (temperatura), con cliente e numero del caso. | `read_hot_cases` |
| **Acquisito oggi o ieri:** tutto ciò che è stato acquisito in quel giorno, per tutti i clienti e casi, come elenco di ID di documenti con ora, cliente, caso e titolo. | `get_all_fromtoday` / `get_all_fromyesterday` |

### Leggere un caso

| Funzione | Nome tecnico |
| --- | --- |
| **Fascicolo completo del caso:** cronaca con testi integrali. Per i casi voluminosi, la prima chiamata indica la dimensione e propone ricerche mirate o la consegna allo spazio di scratch. | `read_full_case` Gate 4 · Copertura di lettura |
| **Testo integrale del caso nello spazio di scratch:** la lettura completa più rapida di un caso voluminoso. Assembla il testo completo del caso senza troncamenti, ripulisce gli artefatti OCR e lo scrive direttamente nello spazio di scratch; l'IA riceve solo il riferimento al file e lo legge poi a sezioni. Ambito: tutti i documenti, quelli in entrata o in uscita, oppure documenti selezionati; è la via per leggere per intero un documento di 300.000 caratteri. | `dump_case_to_scratch` Gate 4 · Copertura di lettura |
| **Preparazione del caso:** in una sola chiamata, il profilo del caso e la giurisdizione più il digest di ogni documento (ID, data, tipo, titolo, sintesi di acquisizione, rimandi, dimensione del testo); il digest funge da cronaca. La risposta indica dove si trovano profilo e digest (nella risposta per i casi piccoli, altrimenti in file di scratch da leggere per intero) e nomina i cinque documenti più recenti da leggere integralmente. Soddisfa il gate di preparazione; i documenti cancellati e quelli segreti sono esclusi. | `prepare_case` Gate 12 · Preparazione |
| **Ultime voci della cronaca:** una rapida occhiata; non conta ai fini della preparazione. | `read_chronik` |
| **Casi e gruppi per materia correlati:** casi superiori, subordinati e dello stesso gruppo; i gruppi per materia di un cliente come raggruppati nella mappa Universo; i casi più fortemente collegati. | `read_case_links` / `read_case_cliques` / `read_top_connected_cases` |
| **Rapido orientamento sul caso:** tutti i campi delle schede del caso e del cliente, più gli ID dei 15 documenti più recenti con le date di inserimento. | `short_case_briefing` |
| **Casi di un cliente**; casi collegati a quello attuale. | `read_client_cases` / `read_related_cases` |
| **Tutti i gruppi per materia di un cliente** in una sola chiamata, ciascuno con i propri casi (numero di fascicolo, titolo, stato, caso superiore); i casi non raggruppati sono elencati a parte. | `list_sachverhalte` |
| **Tribunali e autorità** coinvolti in un caso, con gli indirizzi. | `read_case_institutions` |
| **Giurisdizione del caso**, che determina la lingua dei documenti. | `read_case_jurisdiction` |
| **Valutazione IA del caso** memorizzata. | `read_assessment` |
| **Cronologia del caso:** tutti gli eventi del caso in ordine cronologico. | `build_case_timeline` |
| **Elenco degli allegati di un atto:** i documenti probatori che contiene, ciascuno con il proprio timbro di deposito. | `evidence_anexelist` |
| **Catena dei numeri di lettera:** segue un numero di registro o di lettera attraverso i documenti. | `briefnummer_chain` |
| **Utilizzo di un documento:** dove un documento è stato usato o citato. | `evidence_usage` |
| **Prove depositate in tribunale**, con i numeri. | `list_submitted_evidence` |
| **Corrispondenza:** tutti i documenti in entrata o in uscita di un caso (eventualmente a partire da una data), come elenco di ID di documenti. | `list_correspondence` |
| **Timbro/i di deposito** di un documento. | `evidenceidtoisstamp` |
| **Obblighi procedurali aperti** di un caso, con descrizioni e contrassegni di scaduto o urgente. | `list_open_obligations` |

### Documenti e ricerca di passaggi

| Funzione | Nome tecnico |
| --- | --- |
| **Testo integrale di un documento** (e, se presente, il suo testo di chat o di trascrizione); fino a 12 documenti per chiamata. Oltre il limite del connettore il testo finisce per intero nello spazio di scratch e conta come letto solo quando il file è stato letto per intero. | `evidence_readfull` Gate 4 · Copertura di lettura |
| **Voci multimediali** (foto, registrazioni): metadati, luogo, trascrizioni. | `read_media` |
| **Ricerca di documenti** per parola chiave o periodo. Alla prima chiamata la ricerca per parola chiave chiede che cosa si cerca, l'ambito e la forma della risposta. | `search_evidence_by_keyword` / `search_evidence_by_time` Gate 15 · Digest |
| **Ricerca di passaggi** nell'intero fascicolo (tollerante verso l'OCR), con restituzione dei passaggi corrispondenti. | `search_passages` |
| **Documenti di una parte.** | `find_documents_from_party` |
| **Candidati a contraddizione** tra documenti e dichiarazioni. | `find_contradictions` |
| **Dichiarazioni per interlocutore** su un argomento. | `who_said_what` |
| **Chi ha comunicato con chi**, e quando. | `who_with_whom` |

### Giudici e decisioni giudiziarie

Cinque strumenti deterministici (senza IA) per un'unica domanda: come decide un giudice o
un pubblico ministero — quali argomenti degli atti affronta, quali
trascura, e quanto sono prevedibili le sue decisioni? Gli strumenti individuano e
misurano; l'IA legge e valuta le decisioni sulla base dei
testi integrali. Contano come decisioni solo i documenti in entrata provenienti da un tribunale o da una procura.

| Funzione | Nome tecnico |
| --- | --- |
| **Decisioni per giudice:** ogni decisione agli atti in cui una persona sedeva come giudice (presidente o componente) o agiva come pubblico ministero, in tutti i casi. Una decisione conta solo se la persona è nominata nell'intestazione (composizione del collegio) o nel blocco della firma; un nome nel testo non conta, e i cancellieri non vengono elencati. Per ogni decisione: tribunale, intestazione, ruolo, collegio e la prima frase del dispositivo, alla lettera. | `list_decisions_by_judge` |
| **Struttura di una decisione:** tribunale e sezione, numero del caso, tipo, numero e data, udienza, collegio, la frase che nomina le parti e l'oggetto, il dispositivo alla lettera, parole chiave dell'esito, mezzo di impugnazione, pronuncia, citazioni di leggi con il loro stato nella biblioteca e la lunghezza della motivazione, ciascuna con la posizione dei caratteri nel testo memorizzato. Gli elementi assenti dal testo vengono segnalati come non trovati. | `read_decision_structure` |
| **Atti precedenti a una decisione:** ogni atto depositato nel caso fino alla data della decisione, scritto in due file di scratch: quello del cliente (documenti in uscita) e quello della controparte (documenti in entrata). Contano solo i documenti indirizzati a un tribunale o a una procura; sono esclusi le lettere da o ad altre autorità, i documenti del tribunale, le prove e le voci di cronaca. Ogni atto viene preso con il solo documento principale (e-mail di accompagnamento e allegati rimossi). I documenti che non si possono classificare con certezza sono elencati come non assegnati, in nessuno dei due file. | `read_request_and_ruling` Gate 4 · Copertura di lettura |
| **Motivazione a confronto con gli atti:** misura quanta parte della motivazione di una decisione coincide, come testo, con gli atti del cliente, con quelli della controparte, con entrambi, con il testo di legge della biblioteca giuridica o con nessuno di essi (la formulazione propria del tribunale); l'esposizione delle posizioni delle parti viene misurata a parte. I passaggi corrispondenti sono elencati con il loro tasso di corrispondenza (dal 70 %), dal più alto, nella formulazione originale con la posizione dei caratteri. Mostra dove la motivazione riproduce alla lettera il testo degli atti. | `compare_ruling_with_submissions` |
| **Confronto tra documenti:** confronta due documenti qualsiasi, tra clienti e casi, alla ricerca di blocchi di testo identici, per esempio in atti di procedimenti diversi. I passaggi corrispondenti sono classificati come testo di legge, come fonte citata comunemente (un terzo documento dei due casi) o come condivisi solo da questi due documenti. La risposta indica all'IA di leggere entrambi i documenti per intero prima di affermare alcunché su un collegamento. | `compare_documents` |

### Lista di valutazione delle decisioni giudiziarie

Le decisioni giudiziarie vengono riconosciute all'acquisizione: oltre a «in entrata» e «in uscita» c'è
una casella «decisione giudiziaria» che può modificare in qualsiasi momento, e
un'esecuzione in background controlla anche l'archivio esistente. Le decisioni riconosciute finiscono in una lista di
valutazione. L'IA la elabora una decisione alla volta: legge la decisione e,
tramite lo strumento degli atti, gli atti di entrambe le parti, e risponde a un insieme
fisso di domande. Nulla viene memorizzato finché Lei non lo dispone espressamente. Una decisione
non cambia, perciò viene valutata una volta sola.

| Funzione | Nome tecnico |
| --- | --- |
| **Decisioni aperte nella lista**, dalla più recente: tribunale, collegio, giudici e cancellieri (ciascuno con il proprio ID di record, oppure contrassegnato come non ancora presente nelle anagrafiche) ed esito. | `list_court_decisions_to_assess` |
| **Preparare una decisione:** dati dell'intestazione, quote di testo misurate della motivazione, le domande di valutazione con la struttura richiesta dell'analisi e gli strumenti per recuperare gli atti di entrambe le parti. L'IA può quindi leggere la decisione senza caricare il quadro generale del relativo caso. | `prepare_decision_assessment` |
| **Registrare la valutazione:** solo su Sua espressa istruzione, solo se la decisione è stata letta per intero, solo con un'analisi in inglese sotto sette titoli obbligatori (argomenti, diritto, prove, fondamento, stile, esito, caratterizzazione), ciascuno con contenuto, e solo se ogni giudice e cancelliere ha un record nelle anagrafiche. Se ne manca uno, l'IA ricerca prima la persona in fonti pubbliche e propone il record. | `record_decision_assessment` Conferma |
| **Valutazioni memorizzate** per giudice, tribunale, numero di fascicolo del tribunale o caso, complete e non abbreviate: le Sue e, con IRONSTICK SERVER, quelle di tutti i colleghi, ciascuna con l'indicazione di chi l'ha redatta. L'IA le consulta prima di ogni atto destinato a un tribunale, per il tribunale e per ogni giudice del collegio. | `read_decision_assessments` |

Se vi sono ancora decisioni non valutate, lo strumento di consegna chiede prima di ogni
output formale se debbano essere valutate subito, in modo che il risultato possa ancora essere tenuto
in considerazione, oppure più tardi; con «più tardi», la domanda segue subito dopo
la consegna. L'IA lo chiede anche al primo avvio di sessione della giornata.

### Riparazione OCR con verifica da parte dell'avvocato

Quando un testo integrale memorizzato risulta troncato o danneggiato da una
precedente esecuzione OCR, l'IA può ripararlo, con Lei come istanza finale. L'IA richiede una nuova
scansione; Lei seleziona le pagine in IRONSTICK (lo stesso selettore di pagine dell'acquisizione
dei documenti); la nuova scansione viene ripulita in modo deterministico (filigrane rimosse, schemi
OCR corretti, spaziatura normalizzata) e collocata nello spazio di scratch accanto
al testo attuale del database. L'IA confronta poi le due versioni passaggio per passaggio
e mantiene quella corretta. Ha l'istruzione di riparare soltanto errori OCR meccanici,
senza riformulare e senza modificare numeri, nomi o importi.
IRONSTICK Le mostra la versione corretta per intero, e questa sostituisce il vecchio testo
solo dopo la Sua approvazione.

**Verifica mirata da parte dell'avvocato.** Dove un passaggio richiede
uno sguardo umano, l'IA Le chiede di controllare punti specifici anziché l'intero
documento:

- **File voluminosi.** Per un PDF oltre 10 MB o 90 pagine,
l'IA indica il punto esatto da controllare, per esempio «pagina 12, vicino
all'inizio».
- **Pochi punti, non l'intero file.** Lei non deve elaborare un file di 200 pagine.
Apre l'allegato nella voce che IRONSTICK ha già aperto per Lei,
va alla pagina indicata e trascrive le parole o le cifre illeggibili. Dove un
passaggio è illeggibile sia nel vecchio testo sia nella nuova scansione, l'IA Le chiede di
controllarlo a vista: al massimo tre punti, ciascuno con pagina e posizione.
- **Ritorno diretto nel testo integrale.** La Sua trascrizione viene ripresa
alla lettera nella versione corretta, passa per la stessa finestra di approvazione e
l'analisi prosegue.

IRONSTICK isola i
punti illeggibili e chiede a Lei soltanto di questi.

| Funzione | Nome tecnico |
| --- | --- |
| **Richiedere una nuova scansione OCR** del PDF originale memorizzato, pagina per pagina, solo per testi integrali danneggiati (Lei seleziona le pagine; i documenti segreti sono esclusi). | `request_ocr_rescan` |
| **Stato della scansione:** un unico controllo che restituisce l'intero ordine di lavoro quando la scansione è pronta (entrambi i testi nello spazio di scratch). | `ocr_rescan_status` |
| **Consegna del PDF**, l'ultimo gradino di escalation: apre la voce in modo che Lei possa aggiungere il PDF originale alla chat (fino a 10 MB / 90 pagine; per file più grandi l'IA Le chiede di trascrivere i punti in questione, al massimo tre). Richiede una nuova scansione precedente. | `request_pdf_handover` |
| **Inviare il testo integrale corretto** a IRONSTICK; Le viene mostrato per intero, e solo il Suo salvataggio sostituisce il testo integrale memorizzato. | `submit_corrected_fulltext` Revisione |

### E-mail, calendario e scadenze

| Funzione | Nome tecnico |
| --- | --- |
| **E-mail che menzionano un termine** (mittente, oggetto, estratto, allegati). | `search_emails_mentioning` |
| **Testo integrale di una e-mail.** | `read_email_body` |
| **Voci di calendario**, globali o per caso. | `read_kalender` |
| **Appuntamenti** di un giorno o di un periodo (udienze, riunioni), prima le udienze. | `read_appointments` |
| **Tutto ciò che compare nella schermata delle scadenze**, ordinato per data: scadenze, prossime udienze e scadenze delle voci di memoria IA; filtrabile per urgenza o periodo. | `read_deadlines` |
| **Scadenze attive** come elenco compatto, globale o per caso. | `read_fristen` |
| **Nuova voce di calendario:** apre il modulo del calendario precompilato (titolo, data, orari, descrizione, caso) dopo un controllo obbligatorio delle voci dello stesso giorno; nulla viene salvato automaticamente: Lei verifica e salva. | `add_calendar_entry` Revisione |

### Persone, istituzioni e registri di lavoro

| Funzione | Nome tecnico |
| --- | --- |
| **Scheda di una persona** (ogni campo di anagrafica e di analisi, completo) e la rete di relazioni di una persona o istituzione; ogni risposta inizia con i casi della parte. | `read_person` / `read_person_relations` / `read_institution_relations` |
| **Collegamenti di una parte:** tutti coloro che sono collegati a una persona, società o istituzione tramite relazioni registrate e casi comuni, dai più forti, con i casi della parte in testa. Obbligatorio per ogni parte nominata in un atto. | `who_is_connected_with` |
| **Cluster nella rete delle parti** (rilevamento deterministico di comunità, come nella vista Universo), con evidenza dei gruppi di densità insolita e separazione facoltativa di persone e istituzioni; e le parti con il maggior numero di collegamenti. | `read_cliques` / `read_top_connected` |
| **Nota su un caso condiviso:** fissa una nota sulla bacheca di un caso condiviso tramite IRONSTICK SERVER; viene pubblicata direttamente ed è visibile al titolare del caso e a ogni iscritto. | `send_case_note` Gate 12 · Preparazione |
| **Scheda di un'istituzione** con i dati di contatto. | `read_institution` |
| **Diario giornaliero:** leggere gli ultimi giorni o cercarvi. | `read_tagesprotokolle` / `search_tagesprotokolle` |
| **Scrivere nel diario giornaliero:** registra il lavoro del giorno (e-mail inviate, atti redatti, tesi elaborate, decisioni) su Sua richiesta. Un giorno esistente viene integrato, mai sovrascritto; i casi interessati vengono collegati. Scrive direttamente. | `append_tagesprotokoll` Gate 12 · Preparazione |
| **Breve nota** come voce nel diario giornaliero di oggi. Scrive direttamente. | `add_daily_note` Gate 12 · Preparazione |
| **Nuova voce di cronaca:** apre il modulo della cronaca nel caso giusto, precompilato dall'IA (titolo, descrizione, data dell'evento, orari, parole chiave); nulla viene salvato automaticamente: Lei completa il modulo (aggiungendo, se lo desidera, immagini) e lo salva. | `add_chronik_entry` Revisione |
| **Briefing di inizio giornata**, tracciato separatamente per ogni IA desktop: alla prima chiamata della giornata restituisce le voci più recenti del diario giornaliero e contrassegna l'IA come aggiornata; in seguito lo segnala. | `daily_briefing` |
| **Tempo di lavoro registrato** per caso e cliente. | `read_time_tracking` |
| **Voci con etichetta** in tutti i casi. | `read_tags` |

### Regole di lavoro, formati e memoria

| Funzione | Nome tecnico |
| --- | --- |
| **Istruzioni IA di un caso:** elencarle; la lettura restituisce sempre il testo completo. | `list_ki_instructions` / `read_ki_instruction` |
| **Tutte le istruzioni IA attive di un caso** in una sola chiamata (testi completi). | `read_all_ki_instructions` |
| **Inventario delle istruzioni IA** per tutti i clienti e casi (cliente, caso, ID dell'istruzione e nome del file; senza testi completi). | `list_all_ki_instructions` |
| **Formato di output:** le specifiche di formato vincolanti. Per i documenti l'IA indica il tipo esatto (atto giuridico o semplice lettera, ciascuno con o senza avvocato) e riceve lo stesso modello usato dalla chat integrata, mantenuto in un unico punto. | `read_output_format` |
| **Formato del diario giornaliero:** il formato vincolante di file e voci. | `read_tagesprotokoll_format` |
| **Formato della posta al tribunale:** il formato vincolante per le e-mail al tribunale e i pacchetti PDF (oggetto e testo, elenchi dei pacchetti). | `read_mailversand_format` |
| **Memoria IA condivisa:** cercare conoscenze precedenti; proporre nuove voci (legate a un cliente, fino a 1.000 caratteri). Una nuova voce diventa efficace solo dopo la Sua approvazione. Le voci legate a un caso non vengono mai cancellate automaticamente; quelle senza caso dopo un anno senza utilizzo, e ogni utilizzo rinnova quell'anno. | `memory_search` / `memory_store` Revisione |
| **Gestire le voci di memoria:** riformulare una voce, spostare o cancellare la sua scadenza (con indicazione dei caratteri usati e liberi), oppure cancellarla; ogni modifica diventa efficace solo dopo la Sua approvazione. | `memory_update` / `memory_delete` Revisione |
| **Esportazione del pacchetto di istruzioni IA** di un cliente, tramite la finestra di esportazione. | `export_ai_instruction` |

### Proposte per la Sua verifica

| Funzione | Nome tecnico |
| --- | --- |
| **Correzione di anagrafica o nuovo record**, compresi la ridenominazione e il tipo (persona fisica o giuridica); per un nuovo record il tipo va deciso prima. La proposta va al Monitor di Coerenza dei Dati per l'approvazione. A un nuovo record si risponde prima con un elenco di record simili già esistenti, e nulla viene salvato finché l'IA non registra su uno di essi o non conferma esplicitamente una nuova parte; ogni nuova parte salvata comporta l'obbligo di seguito di ricercare e registrare le sue connessioni. | `propose_master_data` Revisione Gate 16 · Parte simile |
| **Relazione** tra persone, o modifica di una esistente; stesso percorso di verifica. | `propose_relation` Revisione |
| **Assegnare una parte a un caso:** esattamente una persona, società o istituzione, con un motivo obbligatorio e riferimenti facoltativi ai documenti, va al Monitor di Coerenza dei Dati. All'accettazione la parte diventa partecipante al caso e compare nelle viste dei cluster e dei collegamenti. Un collegamento esistente o un duplicato in attesa viene segnalato invece di essere proposto di nuovo. | `propose_case_link` Revisione |
| **Testo di analisi di una persona;** rifiutato a meno che l'IA non abbia letto il profilo negli ultimi 30 minuti. | `propose_person_analysis` Revisione Gate 14 · Lettura per l'analisi |
| **Verifica di una parte in fonti pubbliche** su una persona o società — la procedura standard per controllare una parte. Input: nome, città, distretto, paese e tipo (persona fisica o giuridica). IRONSTICK esegue poi sempre gli stessi passi: una ricerca full-text del nome nell'intero database (per ogni caso i dieci documenti più recenti con le posizioni dei paragrafi, più il numero di ulteriori risultati) e un elenco fisso di ricerche web nella lingua del paese della parte su Google, DuckDuckGo e Qwant, con i duplicati rimossi. Restituisce un profilo preparato con ogni termine di ricerca usato; l'IA controlla ogni risultato e link e registra i dati tramite il Monitor di Coerenza dei Dati. | `osint_entity` |
| **Controllo di un elenco di nomi:** confronta un documento che contiene un elenco di nomi — un elenco di contatti di un social media, un elenco di partecipanti o di firmatari, l'impressum di una società — con tutte le persone e società registrate, in una sola chiamata (l'ordine delle parole e i nomi composti con trattino sono gestiti; un singolo nome di battesimo comune non viene mai trattato come corrispondenza, e i risultati di una sola parola sono contrassegnati come ambigui). Accetta l'ID di un documento oppure un caso, nel qual caso viene controllata e nominata la voce più recente di quel caso. Nessuna IA, nessuna scrittura. | `entity_scan_evidence` |
| **Cancellazione o duplicato:** propone la rimozione di un record errato, di un'etichetta o di una scadenza completata (è richiesto un motivo nella lingua di sistema), oppure l'unione di due record come duplicati. Nulla viene cancellato o unito senza la Sua approvazione. | `propose_deletion` / `propose_duplicate` Revisione |
| **Istruzione IA modificata:** propone una nuova versione (un'aggiunta, un file o il contenuto completo). IRONSTICK apre il caso, Le mostra un confronto rosso/verde e applica la modifica solo dopo la Sua accettazione; la decisione viene comunicata all'IA. | `update_ki_instruction` Revisione |

### Spazio di scratch per i contenuti voluminosi

Un'area di lavoro locale per l'IA. Qualsiasi chiamata di strumento può indirizzare il proprio risultato completo
a un file di scratch; l'IA riceve allora solo il percorso e la dimensione, senza
anteprima. Ogni risultato oltre il limite del connettore (10.000 caratteri; 40.000 per
Claude Desktop e ChatGPT Desktop) finisce lì automaticamente nello stesso modo,
comprese le aperture dei set di strumenti. I contenuti voluminosi non passano quindi attraverso
l'output dell'IA in nessuna delle due direzioni, il che è più rapido, più economico ed evita
errori di trascrizione; l'IA li legge a sezioni dall'archivio. I file di scratch
possono essere passati direttamente allo strumento di consegna e agli aggiornamenti delle istruzioni.
L'archivio sopravvive ai riavvii: le note dell'IA, il suo registro di stato e le
registrazioni della copertura di lettura vengono conservati; l'output degli strumenti dei giorni precedenti viene rimosso a
ogni avvio, e i file non letti né scritti per 180 giorni vengono cancellati
automaticamente (la versione finale di un atto dopo 360 giorni).

**Lo spazio di scratch è cifrato.** Ogni file al suo interno è cifrato AES-256
a riposo, con la stessa derivazione della chiave del database dei casi e dell'archivio
dei documenti. Lettura e scrittura passano solo attraverso IRONSTICK; un file in chiaro collocato
nell'archivio per qualsiasi altra via (uno strumento del file system, una copia manuale) viene rifiutato,
rimosso e segnalato all'IA come violazione delle regole. I file escono dall'archivio solo
attraverso la finestra di esportazione di IRONSTICK. Il database, l'archivio dei documenti, il
file di configurazione e lo spazio di scratch sono quindi tutti cifrati AES-256 a riposo.

**Nessuno strumento accorcia il proprio risultato.** Gli strumenti di lettura dei testi integrali dei
documenti, di interi casi, di e-mail, di pagine web (leggi e sentenze complete), del
diario giornaliero, delle schede delle persone e della cronaca consegnano sempre il proprio contenuto
completo. Una regola centrale decide dove arriva: sotto il limite del connettore
nella risposta, sopra il limite per intero nel file di scratch, così l'IA non deve
prevedere la dimensione di un risultato.

**Controllo di attualità:** IRONSTICK sorveglia ogni file di scratch. Non appena
i dati sottostanti cambiano — un nuovo documento o una nuova voce di cronaca nel caso, una
voce di calendario o del diario giornaliero — oppure un file scade, il suo contenuto viene sostituito da un
avviso che indica all'IA come recuperarlo di nuovo. I file di scratch superati vengono
invalidati automaticamente.

| Funzione | Nome tecnico |
| --- | --- |
| **Strumenti di testo:** scrivere (a porzioni) e leggere intervalli di righe numerate; cercare con numeri di riga in un file o in tutti; sostituire testo esatto; inserire a una riga o dopo un marcatore; cancellare o sostituire intervalli di righe in un solo passaggio. | `scratch_write` / `scratch_read` / `scratch_grep` / `scratch_edit` / `scratch_insert` / `scratch_delete_lines` / `scratch_replace_lines` Gate 4 · Copertura di lettura |
| **Registro di stato della sessione** (chiave e valore), soprattutto per annotare quale file è la bozza principale attuale; conservato anche dopo i riavvii. | `scratch_statetracking` |
| **Struttura, confronto e conteggi:** tutti i titoli con i relativi intervalli di righe; confronto di due file; una copia di lavoro; conteggi di parole, lettere e righe. | `scratch_list_titles` / `scratch_diff` / `scratch_copy` / `scratch_countwords` / `scratch_countletters` / `scratch_countlines` |
| **Pulizia:** normalizzare spaziatura e fine riga e rimuovere i caratteri invisibili; creare in un file separato una copia semplificata per il confronto (minuscolo, oppure senza segni diacritici). | `scratch_correctspace` / `scratch_correctcrlf` / `scratch_asciskeleton` |
| **Formato dell'atto:** richiesto prima della consegna di file Markdown; converte la struttura Markdown nel formato dell'atto (tabelle in righe di testo, elenchi numerati in «(1)», elenchi puntati in «•», link in testo). Il contenuto viene preservato. | `scratch_normalizemd` |
| **Elencare e cancellare i file di scratch;** i file non usati per 180 giorni vengono cancellati automaticamente, e le conoscenze durature appartengono alla memoria IA. | `scratch_dirlist` / `scratch_deletefile` Gate 4 · Copertura di lettura |

### Web, registri e validazione

| Funzione | Nome tecnico |
| --- | --- |
| **Ricerca sul web e recupero di pagine.** Ogni ricerca interroga contemporaneamente Google, DuckDuckGo e Qwant e restituisce un unico elenco unificato senza duplicati. Una pagina viene recuperata come testo completo e leggibile: ne viene estratto il contenuto principale (navigazione, pubblicità e banner dei cookie rimossi; nelle pagine di articolo anche il piè di pagina). Nelle pagine senza corpo di articolo, come le pagine di società e di contatto, il piè di pagina viene conservato, perché lì compaiono indirizzo e dati di contatto; dove l'estrazione lascerebbe quasi nulla, viene consegnata l'intera pagina. Una pagina bloccata o che restituisce un errore viene ritentata una volta nel browser incorporato, e lo stato HTTP viene segnalato. Una chiamata risponde entro 45 secondi; i documenti grandi o scansionati continuano a essere elaborati in background e vengono consegnati alla chiamata successiva con lo stesso indirizzo. | `web_search` / `open_url` Gate 2 · Norme |
| **Singolo articolo di legge**, alla lettera, per numero della biblioteca e numero dell'articolo — la via prevista e più economica per sostenere una citazione; registra esattamente quell'articolo come letto. | `get_legal_article` |
| **Ricontrollare una legge** ora rispetto alla sua fonte (invariata, aggiornata o duplicato); una versione più recente sostituisce la voce, anche a livello di studio su IRONSTICK SERVER, dove prevale il controllo più recente. | `recheck_legal_source` |
| **Cercare, recuperare e aggiungere leggi.** La ricerca è approssimata, e la giurisdizione è un parametro obbligatorio, così gli ordinamenti non vengono mai mescolati. Il recupero restituisce alla lettera il testo di legge memorizzato come Markdown, così l'IA cita dalla biblioteca verificata e non dalla memoria del modello. L'IA deve registrare ogni fonte rilevante che trova online, solo come link; IRONSTICK scarica, converte e verifica da sé il testo, e Lei lo rilascia tramite la verifica nel Monitor di Coerenza dei Dati. | `search_legal_source` / `get_legal_source` / `add_legal_source` Gate 2 · Norme Revisione |
| **Inventario della biblioteca ed estratti:** sfogliare la biblioteca (ID, giurisdizione, titolo, data di verifica); recuperare un estratto alla lettera di una legge per numero della biblioteca e intervallo di caratteri (i risultati della ricerca forniscono una chiamata già pronta con intervallo ampliato); caricare un'intera legge per numero della biblioteca. | `list_legal_sources` / `grep_legal` / `get_legal_by_lnumber` |
| **Validazione** di partite IVA (dal vivo presso il servizio UE VIES), numeri EORI, codici LEI, IBAN e codici identificativi nazionali (nove schemi in sette paesi). | `validate_vat_vies` / `validate_eori` / `validate_lei` / `validate_iban` / `validate_id_number` |
| **Registro delle imprese:** apre nel browser incorporato la ricerca «Trova un'impresa» del portale europeo e-Justice (BRIS), perché l'IA la legga. | `check_handelsregister` |

**Manutenzione della biblioteca e condivisione a livello di studio.** Ogni legge nella biblioteca
giuridica reca il proprio link alla fonte e la data di verifica; le voci non verificate da
più di un mese vengono segnalate. Il rifiuto di una legge nel Monitor di Coerenza dei Dati chiede prima conferma. Con
IRONSTICK SERVER su un NAS Synology la biblioteca è condivisa a livello di studio: una legge
verificata una volta da un collega viene citata dall'IA su ogni postazione, con lo
stesso testo e la stessa versione.

### Revisione tra pari da parte di una seconda IA desktop

| Funzione | Nome tecnico |
| --- | --- |
| **Passare per la revisione:** passa un lavoro prodotto dall'IA (argomentazione, strategia, atto) a un'altra IA desktop per una revisione critica. Il testo integrale viene collocato in un buffer di breve durata, e un compito vi fa riferimento. Richiesta tipica: «Faccia controllare questo all'altra IA.» | `handoff_to_peer` |
| **Compiti di revisione aperti** che l'altra IA ha indirizzato a questa (i propri non compaiono mai), con il loro contenuto completo. | `read_open_tasks` |
| **Risposta:** chiude un compito in arrivo (il suo contenuto viene cancellato) e restituisce la valutazione al mittente come nuovo compito, in una sola chiamata. | `reply_to_task` |
| **Chiudere senza risposta:** conclude il giro; il contenuto di breve durata viene cancellato. | `complete_task` |

### Passaggio e consegna

| Funzione | Nome tecnico |
| --- | --- |
| **Esportare un documento** del fascicolo come PDF nella Sua cartella Documenti. | `export_pdf` |
| **Scheda della persona:** apre la finestra di esportazione con la scheda PDF di una parte (anagrafica, coinvolgimento nei casi, analisi della persona, relazioni; solo i campi compilati). | `export_entity` |
| **Verifica dell'atto:** il controllo deterministico obbligatorio di un atto ultimato — riferimenti ai documenti con registrazioni di lettura legate al documento, citazioni di leggi rispetto alla biblioteca verificata, citazioni testuali, numeri di fascicolo del tribunale nel formato n/nnn/aaaa, importi (corrispondenza esatta), anagrafica delle parti, codici numerici personali rumeni (CNP) e IBAN (somma di controllo), e ogni parte nominata letta e controllata quanto ai collegamenti. La consegna di un documento formale è bloccata senza una verifica positiva aggiornata per l'esatto stato del file; verificare un documento diverso azzera le letture degli allegati. | `verify_pleading` Gate 3 · Verifica dell'atto |
| **Consegna di file:** passa un file ultimato attraverso la finestra di esportazione di IRONSTICK; una bozza di testo va nel word processor con un clic come modello pronto per il deposito. Accetta solo un file nello spazio di scratch dell'applicazione; contenuti in linea e altri percorsi vengono rifiutati, così verifica, versionamento e tracciamento delle riconsegne restano legati a ogni consegna. Se nella lista di valutazione restano aperte decisioni giudiziarie, chiede prima di ogni atto e di ogni e-mail a un tribunale o a un'autorità se debbano essere valutate ora o più tardi. | `deliver_file` Gate 3 · Verifica dell'atto Gate 7 · Contenuto formale Gate 8 · Serie di versioni |
| **Ripetere una consegna:** riapre la finestra di IRONSTICK per un file già consegnato e invariato da allora, quando Lei chiede di nuovo lo stesso file; nessun gate, nessuna verifica, nessuna nuova versione. I file non ancora consegnati, o modificati dopo la consegna, vengono rifiutati e registrati come violazione delle regole; richiedono una nuova consegna. | `redeliver_file` |

### Utilità

| Funzione | Nome tecnico |
| --- | --- |
| **Posizione e meteo:** posizione approssimativa dell'utente (paese, città) dall'ultimo record di accesso; meteo attuale per un luogo indicato. | `get_my_location` / `get_weather` |

## 7. Guardiani della diligenza: come il Bridge controlla la cura dell'IA

Otto **guardiani deterministici della diligenza** controllano con quanta
cura l'IA collegata lavori effettivamente. Trattandosi di pura contabilità e
logica di testo, non coinvolgono alcuna IA
e non possono essere aggirati dal modello:

- **Guardiano della copertura di lettura.** Quando l'IA richiede il testo integrale di un caso, i
file di preparazione di un caso o un testo integrale oltre il limite del connettore, il
Bridge registra riga per riga quali intervalli ha *effettivamente* letto e
conserva queste registrazioni anche dopo i riavvii. Finché restano lacune, **ogni**
risposta degli strumenti, ricerche comprese, elenca gli esatti intervalli di righe non letti
con una percentuale. Non si può dichiarare una lettura completa finché le registrazioni non la
confermano; solo allora l'IA riceve l'unica conferma
*“COMPLETE — tutte le righe lette”*, e la lettura viene registrata per la
preparazione del caso.
- **Nessuna anteprima.** Qualsiasi risultato oltre il limite del connettore (10.000
caratteri; 40.000 per Claude Desktop e ChatGPT Desktop) viene scritto per intero nello
spazio di scratch; l'IA riceve solo una nota che indica il nome del file, la sua
dimensione e i due comandi per proseguire. Nulla viene mostrato due volte, e i
contenuti voluminosi si leggono nello spazio di scratch. Ciò vale per ogni strumento, comprese le
aperture dei set di strumenti; rispondono direttamente solo il lettore delle istruzioni e gli
strumenti di scratch stessi. Nessuno strumento accorcia il proprio risultato: sotto il
limite arriva completo nella risposta, sopra di esso completo nello spazio di scratch.
- **Guardiano della riconsegna.** Se l'IA continua a correggere un file di lavoro
*dopo* che Le è già stato consegnato, a ogni ulteriore modifica si risponde
con il promemoria che in questo momento Lei ha in mano la versione superata e
che il file corretto **deve** essere consegnato di nuovo.
- **Guardiano delle bozze non consegnate.** Quando l'IA scrive il proprio diario giornaliero,
il segnale che sta concludendo, il Bridge elenca per nome ogni
bozza versionata scritta nella sessione che non è mai stata consegnata.
Il lavoro finito non può restare inosservato nell'archivio di lavoro dell'IA.
- **Guardiano del formato e-mail.** Ogni accesso ai contenuti delle e-mail reca
un rimando alla specifica vincolante del formato mail (oggetto, corpo del testo, contenuti
obbligatori, regole linguistiche), così l'IA viene richiamata all'unica via di consegna corretta
*prima* di redigere un'e-mail.
- **Guardiano del riquadro da copiare.** Ogni volta che l'IA scrive o modifica un file di
lavoro testuale, la risposta le ricorda che i documenti raggiungono l'utente **solo**
attraverso lo strumento di consegna; incollare una lettera finita nella chat come testo o in un
riquadro da copiare aggira formattazione, verifica e tracciamento della consegna ed è
una violazione delle regole. L'unico formato legittimo in riquadro da copiare resta l'e-mail, come definita
nella specifica del formato mail.
- **Ancora del caso.** Ogni risposta degli strumenti che riguarda un caso reca il
numero registrato, il cliente e l'oggetto del caso (gate 10), così il contesto preso
da un altro caso viene smascherato nella stessa finestra.
- **Guida del livello di modello.** Le istruzioni indicano all'IA quale classe di
modello richiede un compito: prima degli strumenti per gli atti (formato di output, verifica,
consegna) Le chiede in una frase di passare il client desktop al
modello di punta, e dopo la consegna Le comunica che un modello meno costoso è
di nuovo sufficiente. Quando i contatori delle proposte indicano la cura della rete delle parti
(due proposte anagrafiche e una proposta di relazione o di collegamento al caso), il Bridge
aggiunge, una volta per sessione, l'avviso che questo lavoro interamente protetto da gate non
richiede un modello di punta. Decide Lei; l'IA continua a lavorare.

L'esecuzione degli strumenti avviene separatamente dall'interfaccia utente all'interno
dell'applicazione, perciò le letture lunghe dell'IA su grandi fascicoli non bloccano
l'interfaccia utente di IRONSTICK.

## 8. Verifica dell'atto: consegna solo dopo la prova

Atti e lettere vengono scritti in dialogo con l'IA desktop sul
fascicolo dal vivo, con lo stesso livello di lavoro e gli stessi gate della chat integrata di
IRONSTICK. Ciò che lascia il sistema è un **modello pronto per il deposito** per la Sua
revisione e firma. Due controlli precedono ogni
passaggio: la verifica deterministica qui descritta e — se Lei
lo attiva nella configurazione per il modello API attivo — la revisione
**Red/Blue Team**: una passata di revisione separata legge la bozza come avvocato avversario;
i rilievi sostanziali la rimandano indietro per la rielaborazione, al massimo per due round, e ogni
punto viene analizzato nel merito anziché adottato automaticamente. Se l'IA ritiene i
rilievi infondati, ripresenta il file invariato con una risposta scritta a
ciascun rilievo; il revisore non viene eseguito una seconda volta su un file invariato,
e Lei riceve il rapporto di revisione insieme a quelle risposte. Il passaggio stesso
avviene attraverso la finestra di esportazione di IRONSTICK, da cui la bozza passa al
word processor con un clic.

**Nessuna modifica silenziosa dopo la consegna.** Una volta consegnato un
documento, una correzione non viene mai fatta in silenzio: la vecchia versione
viene invalidata in modo visibile e ne nasce una nuova. Le Sue correzioni
confluiscono nella revisione.

Un atto formale non può lasciare il sistema senza controlli.
`verify_pleading`, un verificatore deterministico (nessuna IA),
controlla la bozza finita rispetto ai Suoi record dal vivo e alla
biblioteca giuridica verificata in **otto classi**:

- **Riferimenti ai documenti** — timbri di deposito e numeri #, nell'elenco degli
allegati e nel corpo del testo: esistenza, appartenenza, integrità del timbro e
**registro di lettura legato al documento**. Ogni elemento citato o allegato
deve risultare letto per questo documento, recuperato per intero oppure con il suo file di scratch
letto per intero; una lettura vale 2 ore, ogni consegna dello
stesso documento la proroga, e verificare un altro documento azzera le letture
degli allegati. Citare da estratti di ricerca o a memoria non supera la verifica.
Una riga di allegato può indicare un intervallo di pagine (“pag. 12–15”); l'obbligo
di lettura riguarda comunque l'intero documento.
- **Citazioni di leggi** — l'articolo citato deve esistere nel
testo della biblioteca verificata (tollerante verso il punto delle migliaia, esatto ai confini di parola) e
avere un **registro di lettura**: l'IA deve aver recuperato
quell'articolo dalla biblioteca in questa esecuzione del programma. Articoli di stampa, sintesi
web e memoria del modello non sostengono mai una citazione di legge e non superano la verifica.
Anche i sotto-riferimenti citati (comma, punto) vengono verificati nella loro esistenza. Una
fonte mancante dalla biblioteca non viene ignorata: l'IA deve
richiederla, e la richiesta compare nella **Sua finestra di consenso**. Le fonti
selezionate vengono recuperate, verificate e memorizzate; quelle rifiutate no, e
ogni loro citazione successiva reca una nota visibile “rifiutata
dall'utente”.
- **Citazioni testuali alla lettera** — ogni citazione deve comparire alla lettera in un
documento del Suo archivio o nella biblioteca giuridica (tollerante verso l'OCR). Se
proviene da un documento di un altro caso, il verificatore indica quel documento, e l'IA
legge allora solo quel documento, non la panoramica dell'altro caso. Una citazione
non trovata in alcuna fonte è contrassegnata come contraddetta e blocca la consegna. Togliere le virgolette
o riformulare leggermente il passaggio non serve: la citazione bloccata viene
ricordata per quel documento e resta bloccata. Eliminare del tutto la
citazione è consentito, e la consegna Le indica quali citazioni sono state
rimosse perché nessuna fonte le contiene.
- **Numeri di fascicolo del tribunale** nel formato n/nnn/aaaa, verificati rispetto ai Suoi
casi e record.
- **Importi: è richiesta la corrispondenza esatta.** La cifra deve corrispondere esattamente alla
forma registrata; “14.500” dove il registro riporta
“14.500,00” blocca la consegna fino alla correzione.
- **Anagrafiche delle parti** — ogni nome usato deve corrispondere alla grafia
registrata lettera per lettera, segni diacritici compresi.
- **Codici numerici personali rumeni (CNP) e IBAN** — validazione della somma di controllo (una cifra di controllo
non valida indica un numero inventato o digitato in modo errato) più corrispondenza con i
record.
- **Parti nominate** — ogni persona o società nominata nel documento
deve essere stata letta (profilo) e verificata nelle sue connessioni
(`who_is_connected_with`); il rifiuto indica entrambe le chiamate e
raccomanda in aggiunta il controllo dei cluster (`read_cliques`).

Ogni rilievo è classificato come verificato, non verificato o contraddetto. La consegna
di un documento formale viene rifiutata senza una verifica positiva aggiornata per l'esatto
stato del file; **ogni modifica la annulla**. Dopo cinque esecuzioni di
verifica fallite il processo si interrompe, l'IA riceve l'istruzione di fermarsi e riferire, e **Lei**
viene avvisato direttamente nell'applicazione. Le consegne passano
esclusivamente per lo spazio di scratch proprio dell'applicazione, così che verifica,
versionamento e tracciamento delle riconsegne restino legati a ogni file; la consegna
in linea e gli altri percorsi vengono rifiutati.

## 9. Protezione dei dati

Il Bridge fornisce **dati grezzi dei casi** alla sessione della
Sua IA desktop, deliberatamente, perché la stesura di un modello pronto per il
deposito richiede nomi, cifre e date reali. Tutto ciò che l'IA vi legge viene
trattato nell'ambito del Suo account presso il fornitore (Anthropic, OpenAI, Qwen o
Moonshot AI / Kimi) e alle sue condizioni. La chat integrata, invece,
trasmette dati pseudonimizzati tramite il router. L'informativa completa, compresi i
limiti, si trova nella [*Dichiarazione GDPR sui flussi di dati di IRONSTICK*](https://www.ironstick.legal/gdpr_it.html).
**Fornitori gratuiti per le attività in background.** I fornitori gratuiti
che può attivare nella configurazione per le attività in background (Groq, OpenRouter,
Mistral) non vengono usati dal Bridge.
**Codice di accesso.** Il Bridge rispetta il blocco di avvio di IRONSTICK:
finché il codice a sei cifre dell'autenticatore non è stato inserito nella
schermata iniziale di IRONSTICK, ogni chiamata di strumento riceve la risposta «applicazione
bloccata — il codice di sicurezza non è ancora stato inserito» e non viene restituito alcun dato dei casi.
Inserisca il codice in IRONSTICK, poi ripeta la richiesta.
Versione 1.0.7 — stato: novembre 2026. L'elenco degli strumenti rispecchia
il Bridge fornito con questa versione; nel tempo possono aggiungersi nuovi strumenti.

## Appendice — Descrizione tecnica completa del Bridge

Ambito: versione 1.0.7 — stato: novembre 2026; oltre 200 strumenti in 22 set di strumenti, Model Context Protocol (MCP). Questa appendice è redatta per la verifica da parte dei responsabili IT e della protezione dei dati e descrive l'architettura, ogni livello funzionale, le salvaguardie, i limiti e i reindirizzamenti del Bridge.

### 1. Scopo e posizionamento

Il Bridge collega applicazioni commerciali di IA desktop (Claude Desktop, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) a un'applicazione di gestione dei casi legali IRONSTICK in esecuzione sullo stesso computer. L'IA desktop riceve una superficie di strumenti controllata e autodescrittiva tramite il Model Context Protocol (MCP); ogni chiamata viene eseguita all'interno dell'applicazione IRONSTICK sulla banca dati dal vivo, e ogni risultato viene post-elaborato dal Bridge prima di raggiungere il modello. Gli obiettivi di progettazione sono: carico di contesto permanente minimo sul modello, imposizione strutturale di regole di lavoro che un semplice testo di istruzioni non può garantire, protezione del lavoro non salvato dell'utente, protezione dei dati da richieste sovradimensionate o mal indirizzate, e completa assenza di materiale di configurazione leggibile nel prodotto installato.

### 2. Topologia dei processi

Il Bridge è composto da due processi che cooperano.

L'applicazione IRONSTICK gestisce un servizio locale e protetto, raggiungibile solo dallo stesso computer. Questo servizio possiede il registro degli strumenti, esegue tutte le chiamate di strumenti, applica tutti i gate e i post-elaboratori ed è l'unica istanza determinante per ciò che un modello collegato può vedere e fare.

Davanti a ogni IA desktop si trova un piccolo eseguibile nativo. Parla il protocollo MCP standard verso l'IA desktop e inoltra il lavoro all'applicazione tramite la connessione locale protetta. Ogni IA desktop ha la propria copia di questo file con un proprio identificativo del chiamante; presso il Bridge non c'è alcun file di istruzioni. L'identificativo del chiamante accompagna ogni chiamata di strumento come argomento interno e governa tutto il comportamento per singola IA. Inoltre, finché un'IA desktop è collegata, il front-end invia all'applicazione un segnale di presenza circa ogni tre secondi; l'applicazione lo mostra come indicatore «Bridge collegato» con una validità di quindici secondi, così l'utente vede sempre se un'IA esterna è attualmente collegata.

Durante l'handshake di inizializzazione MCP il front-end restituisce la propria identità di server e, incorporato nel risultato di initialize, il testo di istruzioni per l'avvio della sessione; recupera tale testo in quello stesso momento tramite un canale interno dall'applicazione in esecuzione. Se l'applicazione è chiusa non viene servita alcuna istruzione, e il blocco delle istruzioni dell'applicazione impone la lettura non appena è in esecuzione. Il playbook completo resta sempre disponibile al modello tramite uno strumento dedicato.

### 3. Sicurezza, licenze e consenso

Il traffico tra il programma Bridge dell'IA desktop e IRONSTICK resta su questo computer (loopback locale, protetto da token); solo gli strumenti per il web e per i registri contattano Internet. Gli strumenti di accesso al web raggiungono solo indirizzi Internet pubblici, così che un modello non possa essere indirizzato tramite il Bridge a scandagliare il computer o la rete locale.

Il Bridge e le integrazioni desktop per i singoli fornitori sono moduli aggiuntivi con licenza separata. Ciascuno viene sbloccato come bit di modulo nella chiave di licenza firmata dell'App client; non esiste una chiave Bridge separata. Un modulo senza licenza non viene né installato né reso disponibile.

Un gate di consenso protegge il primo accesso ai dati per ogni esecuzione del programma per ogni collegamento di IA desktop: la prima chiamata di strumento da parte di una qualsiasi IA desktop dopo l'avvio del programma apre un'unica finestra di avviso sopra la schermata attuale. Se l'utente acconsente, l'accesso resta aperto per tutte le IA desktop per il resto dell'esecuzione; se l'utente rifiuta, tutte vengono bloccate per dieci minuti, e ogni chiamata bloccata restituisce un messaggio che chiede all'IA desktop di riprovare più tardi; trascorsi i dieci minuti, il successivo accesso riapre la finestra. Lo stato è conservato solo in memoria e non viene mai memorizzato.

Indipendentemente dal consenso, un blocco di accesso alle istruzioni protegge ogni collegamento desktop: nessuno strumento, compresi gli apritori dei set di strumenti e lo strumento di esecuzione dei membri, viene eseguito finché il chiamante non ha letto le istruzioni e citato alla lettera il divieto di allucinazione (regola 5) tramite lo strumento di conferma; restano disponibili solo il lettore delle istruzioni, lo strumento di conferma e lo strumento della lingua di sistema. La conferma è mantenuta per ogni IA desktop e scade sessanta minuti dopo essere stata data, dopo due ore senza chiamate, a mezzanotte, a ogni nuova connessione e dopo che l'IA desktop ha compattato il proprio contesto; dopo una scadenza il chiamante deve rileggere le istruzioni e citare una regola scelta a caso anziché quella che già conosce. Nel collegamento con Claude ogni chat è un chiamante distinto (distinto tramite gli eventi strutturati degli strumenti del registro di sessione locale di Claude, mai il testo della conversazione); una chat il cui contesto è stato compattato viene bloccata subito, senza penalità, finché non ha riletto le istruzioni; e una chat che accede alla cartella dei dati con i propri strumenti di file invece che tramite il connettore viene annotata per violazione delle regole. Un rifiuto indica le due chiamate che aprono il blocco, e il menu a tendina sul simbolo dell'IA nell'applicazione mostra lo stato come spunta verde o croce rossa.

Ogni funzione di lettura e di scrittura dei dati viene convalidata rispetto all'identità del titolare derivata dalla licenza. I record di prova contrassegnati come segreti sono esclusi senza eccezione da ogni funzione di lettura, ricerca, dump e timbratura; i record contrassegnati come cancellati sono ugualmente invisibili.

### 4. Sistema delle istruzioni

La guida del modello arriva in tre livelli, con specificità strettamente crescente e permanenza strettamente decrescente.

L'istruzione di base viene consegnata una sola volta, all'interno del risultato dell'inizializzazione. Contiene il mandato (lavoro giuridico basato sui fatti al livello di un senior associate), le regole universali (la lingua del dialogo è la lingua di sistema di IRONSTICK; la giurisdizione dei documenti generati deriva dal caso, mai dal dialogo; disciplina delle date; nessuna citazione da estratti di ricerca — ogni pagina su cui l'IA fa affidamento deve essere aperta e letta tramite open\_url, qualunque ricerca l'abbia trovata; disciplina delle citazioni e dei riferimenti; il limite di tre tentativi per ogni chiamata di strumento che fallisce; disciplina della consegna) e la descrizione del meccanismo dei set di strumenti stesso, compresa la spiegazione del campo del set di strumenti di appartenenza.

Le regole di lavoro per area non sono permanenti: vengono consegnate al modello alla lettera e aggiornate ogni volta che apre il set di strumenti corrispondente, come parte del contenuto di apertura.

Il playbook completo — base più tutte le regole dei set di strumenti più le appendici (tra cui il formato del file del diario giornaliero) — può essere riletto in qualsiasi momento tramite lo strumento di lettura delle istruzioni; l'applicazione lo fornisce dal vivo a ogni chiamata, così che le modifiche alle istruzioni raggiungano una sessione in corso senza riconnessione.

Tre di queste regole sono inoltre imposte a livello strutturale anziché testuale, tramite gate: il blocco di accesso, la disciplina delle date e la disciplina delle fonti normative. La lettura delle istruzioni stessa è l'ultima regola del blocco universale: il modo per sbloccare il connettore è indicato solo dopo tutte le regole precedenti, così che un modello che vi arriva le abbia lette.

### 5. La superficie degli strumenti e il livello dei set di strumenti

Per mantenere affidabile la scelta degli strumenti, il Bridge non espone tutti i suoi oltre 200 strumenti in una sola volta. Espone una superficie ridotta di circa trenta voci: sette strumenti di base (data e ora correnti; contesto GUI attuale; lingua di sistema; giurisdizione del caso; rilettura delle istruzioni; conferma delle istruzioni; manuale d'uso), lo strumento di consegna, ventidue apritori di set di strumenti, lo strumento di esecuzione dei membri e lo strumento dell'inventario completo. Tutto il resto esiste solo come membro all'interno dei set di strumenti.

Aprire un set di strumenti è una normale chiamata di strumento senza argomenti. La risposta fornisce, in un colpo solo: primo, dove il set di strumenti ne ha uno, un blocco di contesto pregenerato in modo deterministico e calcolato al momento dell'apertura (otto set di strumenti hanno tali generatori — il protocollo di avvio della sessione stesso; l'inventario attuale dei file di scratch; le dieci voci di memoria più recenti come anteprima; le prime trenta leggi della biblioteca giuridica; l'elenco dei casi caldi; i documenti registrati e le e-mail in arrivo di oggi; il diario giornaliero di oggi; l'istantanea attuale di scadenze e appuntamenti); secondo, le regole di lavoro dell'area alla lettera; terzo, le definizioni complete degli strumenti membro con i loro schemi di parametri completi; quarto, una riga di ripiego che rimanda all'inventario completo. Un errore all'interno di un generatore di pregenerazione non impedisce mai l'apertura.

I membri vengono eseguiti tramite lo strumento di esecuzione dei membri, che riceve il nome esatto del membro e un oggetto di argomenti. Prima dell'esecuzione viene effettuata una leggera validazione dello schema: i campi obbligatori devono essere presenti e non vuoti, e i parametri interi, numerici e booleani devono poter essere interpretati come tali; una violazione restituisce lo schema atteso invece di eseguire. Un nome di membro sconosciuto restituisce come suggerimento il nome esistente più vicino per distanza di modifica. Il livello delle istruzioni limita i tentativi di correzione a tre per ogni chiamata che fallisce, dopodiché il modello deve fermarsi e riferire l'errore esatto.

I set di strumenti non sono modali; tutti gli apritori restano richiamabili in ogni momento, e uno strumento può deliberatamente essere membro di più set di strumenti. I gate funzionali rimuovono interi gruppi: quando la navigazione GUI non è abilitata dall'utente, l'apritore del set di strumenti di navigazione e tutti i suoi membri sono assenti da ogni elenco e da ogni risposta. Lo strumento dell'inventario completo elenca ogni membro con uno scopo di una riga e il suo set di strumenti di appartenenza ed esiste solo come ripiego; le descrizioni dei set di strumenti sono l'instradatore principale. In totale i ventidue set di strumenti contengono più di 340 voci di membri su oltre 200 strumenti distinti.

Il costo di contesto misurato di questa disposizione: la configurazione iniziale (istruzione di base più elenco ridotto degli strumenti) è di circa diecimila token; una singola apertura di un set di strumenti aggiunge tra circa novecento e settemilacinquecento token a seconda del set di strumenti, prima del suo contenuto variabile di pregenerazione.

### 6. Formato di definizione degli strumenti

Ogni definizione di strumento è composta da quattro parti. La descrizione contiene lo scopo dello strumento, i suoi mandati comportamentali e i suoi rimandi — e nient'altro. Lo schema di input contiene ogni parametro con la propria descrizione, compresi valori predefiniti, formati, note di mutua esclusività e mandati per singolo parametro; le istruzioni d'uso dei parametri risiedono esclusivamente qui. Il campo di output descrive, prima di qualsiasi chiamata, esattamente che cosa restituisce la chiamata, compresi ordinamenti, marcatori e forme di errore, così che il modello possa giudicarne l'idoneità senza chiamate di prova. Il campo del set di strumenti di appartenenza indica il set di strumenti a cui lo strumento appartiene principalmente, con un valore riservato che contrassegna gli strumenti di base sempre presenti nell'elenco di primo livello; un membro incontrato all'interno di un altro set di strumenti indica così dove si trovano altri strumenti della sua famiglia, e ogni apertura di un set di strumenti reca una riga esplicativa che afferma che il modello non è mai vincolato al set di strumenti aperto.

Tutto il testo destinato al modello è in inglese. Le definizioni degli strumenti sono generate da un'unica fonte e controllate automaticamente quanto alla coerenza, compresa la concordanza tra il set di strumenti di appartenenza di ciascuno strumento e gli elenchi dei membri dei set di strumenti. I limiti numerici dichiarati negli schemi degli strumenti vengono applicati nelle funzioni di esecuzione, così che un massimo dichiarato sia un vero massimo.

### 7. Meccanismi universali di runtime

I seguenti meccanismi valgono per l'intera superficie degli strumenti e sono implementati centralmente, non per singolo strumento.

Reindirizzamento su richiesta nello scratch: ogni strumento accetta un parametro aggiuntivo che indica un file di scratch; se impostato, il risultato completo viene scritto in quel file e il modello riceve solo il percorso e la dimensione — nessuna anteprima. I contenuti voluminosi non transitano così mai nel flusso di token del modello in nessuna delle due direzioni, e il percorso è direttamente utilizzabile ovunque sia accettato un percorso sorgente.

Protezione dal superamento: qualsiasi risultato che superi il limite del connettore — diecimila caratteri, un'unica costante centrale, portata a quarantamila (quattro volte lo standard) per Claude Desktop e ChatGPT Desktop — viene scritto automaticamente in un file di scratch generato. Il modello riceve solo una nota che indica la dimensione totale e il numero di righe, il nome del file, l'esplicita garanzia che nulla è andato perso, i due comandi di proseguimento (lettura per intervalli; ricerca per schema nel file) e l'espresso divieto di ripetere la chiamata — nessuna anteprima, così che i contenuti voluminosi vengano letti nell'archivio di scratch. L'unica eccezione è il lettore delle istruzioni, il cui pacchetto arriva sempre completo; gli apritori dei set di strumenti vengono deviati come ogni altro risultato. Nessuno strumento accorcia il proprio risultato — il limite del connettore è l'unico punto in cui si decide sulla dimensione. I risultati oltre i dieci megabyte non vengono deviati, ma ricevono in risposta un'istruzione di restringimento che indica i filtri applicabili, poiché anche l'archivio di scratch limita lì la dimensione dei file. Sono esenti dalla deviazione gli strumenti di lettura dello scratch stessi (limitati internamente; deviarli creerebbe una ricorsione) e le chiamate che hanno già richiesto il reindirizzamento nello scratch.

Gate della data: ogni strumento che scrive in IRONSTICK viene rifiutato ai chiamanti esterni a meno che quel chiamante non abbia recuperato la data e l'ora correnti negli ultimi trenta minuti. Il rifiuto indica il rimedio — recuperare l'ora, poi ripetere la chiamata identica. La finestra è mantenuta per ogni IA desktop, volutamente breve, così che una nuova conversazione non possa ereditare un vecchio recupero e che i passaggi della mezzanotte vengano intercettati. I chiamanti interni all'app non sono interessati. Questo esiste perché altrimenti i modelli esterni datano i record in base al proprio periodo di addestramento anziché alla data effettiva.

Gate delle norme: l'accesso al web per leggi e norme è rifiutato strutturalmente finché non è stata consultata la biblioteca giuridica interna; il rifiuto rimanda alla procedura della biblioteca. Qualsiasi fonte normativa che venga comunque recuperata dal web deve essere segnalata alla biblioteca tramite lo strumento di registrazione — il livello delle istruzioni classifica l'omissione come violazione di un dovere, e i risultati che riguardano fonti giuridiche recano un marcatore ai fini della verificabilità.

Blocco rigido della navigazione: otto schermate sono dichiarate protette — i quattro moduli di acquisizione (acquisizione documenti, acquisizione documenti legata al caso, acquisizione della cronaca del caso, acquisizione cliente), il modulo di creazione del caso, il modulo di assegnazione istituzione/persona e l'editor di testo. Mentre la finestra principale dell'utente mostra una qualsiasi di esse, ogni funzione di navigazione GUI e di esportazione viene rifiutata a livello centrale, sia per le chiamate dirette sia per l'esecuzione dei membri, con un messaggio che indica la schermata protetta, vieta la navigazione e istruisce il modello a rispondere con i dati di cui dispone e a proporre l'apertura solo dopo che l'utente ha terminato e salvato. Un modello non può quindi mai distruggere il lavoro non salvato dell'utente cambiando schermata. Lo strumento di apertura delle pagine web è esente da questo blocco, poiché non naviga nell'applicazione.

Offerta di navigazione: i risultati della quarantina circa di strumenti il cui output descrive un oggetto apribile nella GUI — un caso, una persona, un'istituzione, un cliente, una prova specifica, un'e-mail, voci di calendario o scadenze — ricevono una riga aggiunta che suggerisce al modello di offrire all'utente di aprire l'oggetto direttamente in IRONSTICK, indicando l'esatta chiamata di navigazione. Dove gli argomenti della chiamata contengono l'identificativo dell'oggetto la proposta è concreta; per i risultati di ricerca e di elenco fa riferimento all'identificativo di un risultato. La riga richiede esplicitamente il consenso dell'utente prima di navigare, a meno che la richiesta dell'utente non fosse già un comando di visualizzazione/apertura. L'offerta viene aggiunta solo dopo la gestione del superamento, e solo quando il risultato non è un errore, la navigazione è abilitata e il blocco rigido della navigazione non è attivo — il blocco prevale sempre sulla proposta.

Propagazione del chiamante: l'identità del chiamante accompagna ogni esecuzione e determina lo stato per singola IA — il briefing di lavoro una volta al giorno è tracciato per ogni IA desktop, gli elenchi dei compiti di revisione tra pari escludono i compiti propri del chiamante, e il registro delle chiamate attribuisce ogni riga.

Registri delle chiamate: ogni programma Bridge tiene accanto a sé un registro locale con ora, nome dello strumento, esito (riuscito o fallito) e dimensione della risposta, mai il contenuto. Un secondo registro diagnostico, più dettagliato, nella cartella dei dati è disattivato per impostazione predefinita. Quando viene attivato per la risoluzione di problemi (analisi dei percorsi, ottimizzazione dei set di strumenti), registra una riga per ogni chiamata di strumento di tutte le IA collegate — marca temporale, chiamante, il nome effettivo dello strumento (per l'esecuzione dei membri il membro interno), i parametri della chiamata (fino a trecento caratteri ciascuno), la dimensione del risultato misurata prima di qualsiasi deviazione per superamento, la durata dell'esecuzione e un indicatore di errore. Può essere attivato senza riavvio, viene ridotto automaticamente quando supera i due megabyte ed è pensato per essere disattivato in seguito.

Riduzione di segni diacritici e scritture: ogni ricerca per parola chiave, ricerca per schema e confronto in tutto il Bridge ignora maiuscole/minuscole e segni diacritici per tutte le undici lingue di sistema, compresa la i turca con e senza punto (sostituita prima della conversione in minuscolo, poiché altrimenti cambia la lunghezza), le lettere varianti cirilliche e le legature latine; la riduzione è stabile nelle posizioni laddove vengono riportate posizioni.

Convenzioni sui risultati: gli errori vengono restituiti come testo che inizia con un prefisso di errore e contrassegnati come errori nel risultato MCP; il modello è istruito a correggere e riprovare al massimo tre volte, poi a fermarsi e riferire. I marcatori strutturati e autodescrittivi incorporati nei risultati (per operazioni di memoria, gate e simili) sono stabili e documentati nei rispettivi campi di output.

Guardiano della copertura di lettura: quando un modello richiede un dump dell'intero caso o la consegna nello scratch del lettore dell'intero caso, il Bridge registra con esattezza di riga quali intervalli del file di dump sono stati effettivamente letti. Finché restano intervalli non letti, ogni risposta riuscita di uno strumento — ricerche, corrispondenze di schemi, tutto — reca gli esatti intervalli di righe non letti insieme a una percentuale di lettura; una lettura completa non può quindi essere dichiarata finché le registrazioni non la confermano. Una volta che il file è stato letto per intero, i richiami cessano e la successiva lettura per intervalli conferma una sola volta che tutte le righe sono state lette, il che pone fine all'obbligo di lettura per quel file. Sono tracciati i dump dell'intero caso, i file di intestazione e di digest dello strumento di preparazione del caso e ogni testo integrale di documento deviato nell'archivio di scratch; le letture parziali di altri risultati reindirizzati restano legittime e silenziose. Lo stato della copertura è reso persistente accanto all'archivio e sopravvive ai riavvii dell'applicazione, e un file letto fino in fondo viene registrato per la preparazione del caso — la lettura resta valida anche dopo che la pulizia all'avvio ha rimosso il file.

Guardiano della riconsegna: dopo una consegna di file riuscita la cui sorgente si trova nell'archivio di scratch, un file marcatore accanto all'archivio registra il nome e l'ora della consegna (anche le consegne passate come contenuto in linea vengono registrate con il loro nome di consegna). Ogni successiva modifica, scrittura o normalizzazione di un file lì registrato riceve in risposta il promemoria che l'utente ha in mano la versione consegnata superata e che il file corretto deve essere consegnato di nuovo con un nuovo numero di versione. La risposta alla consegna recupera inoltre dall'applicazione lo stato attuale della copertura di lettura tramite un endpoint interno che non è uno strumento, e segnala una consegna effettuata nonostante intervalli non letti.

Guardiano delle bozze non consegnate: la voce del diario giornaliero — il segnale di chiusura del modello — elenca per nome ogni file di lavoro versionato scritto dal modello nella sessione che non è mai stato consegnato, con l'istruzione di consegnare ora l'artefatto finito; un lavoro che esiste solo nell'archivio di scratch non raggiunge mai l'utente.

Guardiano del formato e-mail: ogni risposta degli strumenti di lettura e di scaricamento delle e-mail reca il rimando fisso secondo cui l'istruzione vincolante per la formattazione e la consegna delle e-mail — riquadro da copiare per l'oggetto, riquadro da copiare per il corpo, sezione dei destinatari, contenuti obbligatori, regole linguistiche — proviene dallo strumento di specifica del formato mail, da recuperare prima di costruire qualsiasi e-mail e da seguire alla lettera.

Esecuzione in background: gli strumenti di dati e di analisi vengono eseguiti separatamente dall'interfaccia utente all'interno dell'applicazione, con il proprio registro degli strumenti e le proprie connessioni alla banca dati; la parte di interfaccia si limita a instradare, applicare i gate e post-elaborare. Gli accessi lunghi a grandi fascicoli non bloccano quindi l'interfaccia utente. Se la parte in background si ferma, l'esecuzione prosegue nella parte di interfaccia e la parte in background viene riavviata alla prima occasione. Gli strumenti che richiedono l'interfaccia utente — navigazione, finestre di conferma, il browser integrato, il recupero della posta e gli strumenti di proposta protetti dal gate di revisione — vengono sempre eseguiti lì.

### 8. Gate di interazione

Tre strumenti rispondono deliberatamente alla loro prima chiamata con una domanda invece che con un risultato; in tutti la risposta letterale "unknown" è sempre valida e mai sanzionata.

Il gate di consegna: lo strumento di consegna dei file, chiamato senza la dichiarazione di formalità, non consegna nulla e chiede se la consegna rientra in uno dei quattro tipi di artefatto formale — atto giuridico, e-mail al tribunale, voce di cronaca, voce del diario giornaliero — o in nessuno di essi. Rispondere «no» consegna immediatamente — ma la dichiarazione viene verificata nel contenuto: un rilevatore deterministico esamina il file, e un contenuto con la forma di una lettera o di un atto (formule di saluto e di chiusura in sei lingue, un blocco del destinatario, marcatori giuridici, un blocco identificativo) respinge la dichiarazione di informalità e registra il tentativo; un simile contenuto non ha alcuna via informale. Rispondere con un tipo formale restituisce, sempre senza consegnare, l'istruzione di formattazione vincolante esattamente per quel tipo; solo la chiamata ripetuta che reca l'indicatore di conferma che il file è stato verificato rispetto a questa istruzione consegna effettivamente. Un guardiano della serie di versioni rifiuta inoltre la prima consegna con una nuova radice del nome file mentre esiste già una serie versionata consegnata con lo stesso numero di caso — un documento non può essere rinominato per azzerarne il contatore di versione; un documento realmente diverso richiede una dichiarazione consapevole e registrata. Questo gate viene eseguito all'interno dell'applicazione stessa; il front-end si limita a inoltrare la chiamata. Documenti e lettere non raggiungono mai l'utente come testo di chat o riquadri da copiare — ogni accesso in scrittura a un file di lavoro testuale reca questo promemoria, e l'unico artefatto legittimo in riquadro da copiare resta l'e-mail secondo il suo strumento di formato.

Il gate di ricerca: la ricerca centrale delle prove, alla sua prima chiamata, non cerca nulla e chiede tre cose — che tipo di elemento si cerca (documento in entrata, documento in uscita, prova con documento allegato, dichiarazione/trascrizione, nota di cronaca, o sconosciuto), l'ambito quando è presente un identificativo del cliente (solo questo caso, tutti i casi del cliente, o sconosciuto — con l'elenco dei casi del cliente incluso nella domanda) e la forma di risposta desiderata. Le forme di risposta sono: un elenco pulito di identificativi (l'impostazione predefinita raccomandata; i risultati vengono poi aperti singolarmente tramite il lettore delle prove), risultati compatti con il contesto della corrispondenza, oppure il risultato completo scritto in un unico file di scratch.

Il gate dell'intero caso: il lettore dell'intero caso, alla sua prima chiamata, non carica nulla e riferisce quanto è effettivamente grande il caso — il numero di prove e il volume complessivo approssimativo dei contenuti tra titoli, descrizioni, testi integrali dei documenti e trascrizioni — poi chiede al modello di decidere tra strumenti di ricerca mirati e una chiamata ripetuta con l'argomento di consegna nello scratch, che scrive il contenuto completo del caso, normalizzato rispetto all'OCR, nell'archivio di scratch e restituisce solo il riferimento al file.

Il gate di verifica: per gli atti formali lo strumento di consegna richiede inoltre una nuova attestazione del verificatore deterministico degli atti. Tale verificatore analizza il file di scratch finito lungo otto classi di affermazioni — riferimenti alle prove nell'elenco degli allegati e nel corpo del testo (timbri e numeri, compresa la provenienza delle citazioni legata al documento: ogni elemento citato o allegato deve risultare letto per questo documento — recuperato per intero o con il suo file di scratch letto fino in fondo; una lettura vale due ore, ogni consegna dello stesso documento proroga di due ore i suoi elementi citati, e verificare o consegnare un documento con una radice diversa azzera le letture degli allegati; una riga di allegato può dichiarare un intervallo di pagine, l'obbligo di lettura resta l'intero documento), citazioni normative rispetto alla biblioteca verificata (un articolo assente dal testo normativo verificato è un rilievo contraddetto; la citazione richiede inoltre la provenienza di lettura — ogni lettura dalla biblioteca viene registrata per ogni esecuzione dell'applicazione con i numeri degli articoli effettivamente restituiti, e un articolo citato senza tale registrazione di lettura è un rilievo contraddetto, così che articoli di stampa, sintesi web e memoria del modello non possano mai fondare una norma; i sotto-riferimenti citati come comma e punto vengono verificati nella loro esistenza nella regione di testo dell'articolo; una fonte assente dalla biblioteca blocca finché non viene integrata o rifiutata), citazioni testuali — ciascuna deve essere trovata per intero nei testi integrali dell'intero archivio o nella biblioteca giuridica; se proviene da un documento di un altro caso, il verificatore indica quel documento, e va letto solo quello, non la panoramica dell'altro caso; una citazione non trovata in alcuna fonte è contraddetta e blocca la consegna, una citazione da cui sono state solo tolte le virgolette o la cui formulazione è stata leggermente modificata resta bloccata, e le citazioni eliminate del tutto vengono segnalate all'utente al momento della consegna —, numeri di fascicolo del tribunale nel formato n/nnn/aaaa, importi secondo una regola di corrispondenza esatta (la forma esatta registrata), anagrafiche delle parti lettera per lettera compresi i segni diacritici, codici numerici personali rumeni (CNP) e IBAN tramite validazione della somma di controllo, e parti nominate — ogni persona o società del registro delle entità nominata nel documento deve essere stata letta (profilo) e verificata nelle connessioni per questo documento, con il rifiuto che indica entrambe le chiamate e raccomanda il test delle cricche. I rilievi sono classificati come verificati, non verificati o contraddetti; qualsiasi rilievo contraddetto o norma mancante non risolta produce un verdetto bloccante. L'attestazione si lega all'esatto stato del file — qualsiasi modifica la annulla — e dopo cinque esecuzioni di verifica fallite il processo si interrompe, istruisce il modello a fermarsi e riferire, e avvisa l'utente direttamente nell'applicazione.

Il gate di consenso per le fonti normative: una fonte normativa segnalata dal modello non viene più integrata in silenzio. Le richieste si raccolgono in un'unica finestra di consenso nell'applicazione — fonte, giurisdizione, IA richiedente — dove le voci spuntate vengono recuperate, verificate e memorizzate subito e quelle non spuntate vengono rifiutate; una fonte rifiutata trasforma le sue citazioni successive in note visibili di mancata verifica per decisione dell'utente, invece che in blocchi silenziosi. Da quel momento il monitor dei dati riporta le leggi solo per il ciclo di revisione periodica.

La regola di consegna solo dall'archivio: lo strumento di consegna accetta esclusivamente un percorso sorgente all'interno dell'archivio di lavoro dell'applicazione; i contenuti in linea e i percorsi esterni all'archivio vengono rifiutati per ogni tipo di file. Ciò mantiene l'attestazione di verifica, il tracciamento delle riconsegne, il versionamento e la copertura di lettura legati senza eccezione a ogni artefatto consegnato.

La domanda sulle decisioni giudiziarie aperte: se nella lista di valutazione restano decisioni non valutate, lo strumento di consegna in un primo momento non consegna un atto né un'e-mail a un tribunale o a un'autorità, ma indica il numero di decisioni aperte — quelle relative a questo caso o ai suoi tribunali, con i loro ID — e richiede la risposta dell'utente: valutare subito o più tardi. «Subito» sospende la consegna e restituisce l'incarico di lavoro (valutare, leggere le valutazioni del tribunale e del collegio, rivedere il documento, verificarlo di nuovo e consegnarlo); «più tardi» consegna e aggiunge al risultato la domanda di richiamo obbligatoria. La domanda ritorna a ogni consegna formale finché la lista non è vuota.

### 9. Avvio della sessione e inquadramento

L'apertura del set di strumenti di avvio della sessione esegue l'intero protocollo di avvio in un colpo solo e lo scrive in un file di scratch fisso e denominato; la risposta diretta restituisce solo l'ancora della data, la lingua di sistema e il contesto GUI attuale, e il modello legge il resto — voci di memoria in scadenza, il briefing giornaliero, scadenze, appuntamenti, compiti aperti tra pari e l'indice delle ultime dieci voci del diario giornaliero — con un'unica lettura dello scratch. I membri di questo set di strumenti rieseguono singoli pezzi su richiesta.

Lo strumento di data e ora risponde con una riga (data, ora, fuso orario, giorno della settimana, sincronizzata via NTP dove possibile, altrimenti orologio di sistema) e reca il mandato permanente secondo cui ogni turno di dialogo inizia con la data corrente e le date non vengono mai indovinate. Lo strumento del contesto GUI riferisce quale schermata della finestra principale dell'applicazione è aperta, con breadcrumb e il cliente e il caso aperti. Lo strumento della lingua di sistema restituisce l'identificativo della lingua che governa il dialogo e gli elenchi trasversali ai casi; lo strumento della giurisdizione restituisce, per ogni caso, la giurisdizione che governa i documenti generati e la terminologia, è obbligatorio prima di qualsiasi lavoro sui documenti e istruisce a chiedere all'utente quando non è impostata. Lo strumento del briefing mattutino restituisce il briefing strutturato di oggi con identificativi e marcatori, così che il modello possa agire su ogni voce; lo strumento del briefing di lavoro tiene traccia, per ogni IA desktop, se quell'IA è già stata aggiornata oggi, restituendo le voci recenti del diario giornaliero solo al primo contatto della giornata.

### 10. L'archivio di scratch

L'archivio di scratch è la cartella di lavoro del modello per tutto ciò che è voluminoso. Offre: scrittura con possibilità di aggiunta in coda per un assemblaggio a blocchi; lettura per intervalli con numeri di riga che corrispondono direttamente agli editor basati sulle righe; sostituzione esatta del testo con requisito di univocità, un nuovo tentativo tollerante a spazi e virgolette tipografiche che richiede comunque l'univocità, e un ripiego prescritto su individuazione e copia in caso di qualsiasi altra mancata corrispondenza; inserimento per numero di riga o dopo un marcatore; cancellazione di intervalli di righe; sostituzione atomica di intervalli di righe come operazione sicura di ristrutturazione; ricerca per schema insensibile a maiuscole/minuscole e segni diacritici in uno o in tutti i file, con un limite di cinquanta risultati e righe di contesto facoltative; una struttura markdown che associa i titoli agli intervalli di righe senza leggere il file; un elenco della directory; la copia; un confronto per righe tra due file che nasconde le righe comuni; una normalizzazione orientata alla consegna che appiattisce il markdown strutturale secondo le convenzioni degli atti, protegge i riferimenti, completa i riferimenti brevi alle prove a sette cifre e normalizza i fine riga; la normalizzazione degli spazi; la pulizia di fine riga e caratteri invisibili; copie semplificate per il confronto (in minuscolo, oppure senza segni diacritici) sempre in un file di destinazione separato; contatori di parole, lettere e righe; e la cancellazione.

Un registro di stato leggero memorizza note chiave-valore per la sessione in corso — soprattutto quale file è l'attuale bozza principale — con semantica di lettura, impostazione e cancellazione, e sopravvive ai riavvii dell'applicazione.

Ciclo di vita: l'archivio è di lunga durata e sopravvive ai riavvii; le note proprie del modello, il registro di stato, i metadati dei file e la contabilità della copertura di lettura persistono, mentre i dump degli strumenti dei giorni precedenti vengono eliminati a ogni avvio e i file non toccati da centottanta giorni vengono cancellati (la versione finale di un atto dopo trecentosessanta giorni). Ogni accesso tramite qualsiasi strumento di scratch — compresa una semplice lettura — azzera il conto alla rovescia per la cancellazione di quel file; la sola comparsa nell'elenco della directory no. Il livello delle istruzioni obbliga il modello a cancellare i propri file di lavoro al termine di un compito e a trasferire invece le intuizioni durature nel sistema di memoria.

### 11. Il sistema di memoria

La memoria IA persistente è un taccuino condiviso tra le chat, comune a tutte le IA collegate e all'assistente integrato. Una voce contiene al massimo mille caratteri — le descrizioni del set di strumenti e degli strumenti esigono una compressione all'essenziale assoluto e la suddivisione del materiale più ampio — ed è collegata almeno a un cliente o a un caso (con un collegamento al caso il cliente viene derivato e corretto automaticamente) e facoltativamente a una prova, un'e-mail, un'entità o un'istituzione, tutti convalidati. Le voci devono essere scritte nella lingua di sistema di IRONSTICK indipendentemente dalla lingua del dialogo, e al modello è vietato usare i propri file di memoria privati per le conoscenze sui casi, poiché questi non raggiungono né l'IA pari né l'utente. Una data di scadenza facoltativa rende una voce simile a una scadenza: le voci in scadenza e scadute compaiono per prime nel protocollo di avvio della sessione e nelle viste delle scadenze dell'applicazione.

La ricerca è filtrabile per ciascuno degli identificativi collegati e per data di scadenza (tutto, esattamente oggi, o una finestra di dieci giorni attorno a una data indicata), restituisce i risultati dai più recenti con un valore predefinito di venti e un massimo di cinquanta, e contrassegna le voci del taccuino scritte dall'utente come rigorosamente in sola lettura per l'IA. L'aggiornamento sostituisce il testo e/o sposta, imposta o cancella la data di scadenza; tutto ciò che non viene fornito resta invariato. Un aggiornamento il cui testo supera il limite viene respinto con una dichiarazione di capacità che indica la lunghezza inviata, il limite, l'occupazione attuale della voce e lo spazio libero residuo; anche ogni aggiornamento di testo riuscito riferisce occupazione e spazio residuo; in entrambi i casi, quando restano liberi meno di trecento caratteri, la risposta aggiunge la raccomandazione permanente di rielaborare l'intera voce oppure di creare una voce aggiuntiva lasciando un rimando in quella vecchia. La cancellazione è irreversibile e rifiuta le voci del taccuino dell'utente e le voci di compito. Salvare, aggiornare e cancellare una voce aprono ciascuna una finestra di approvazione nell'applicazione; la modifica diventa efficace solo dopo l'approvazione dell'utente. La manutenzione è pensata per procedimenti di lunga durata: le voci collegate a un caso non vengono mai cancellate automaticamente. Le voci senza caso vengono cancellate dopo un anno senza utilizzo; ogni voce restituita da una ricerca in memoria e ogni aggiornamento rinnovano quell'anno, poiché la pulizia misura l'età rispetto al momento più recente tra creazione e ultimo accesso. Le voci del taccuino dell'utente non scadono mai automaticamente.

Anagrafiche, persone, relazioni e documenti non appartengono alla memoria: le descrizioni li instradano verso gli strumenti di proposta e l'acquisizione documenti.

### 12. Scadenze, appuntamenti e calendario

Gli strumenti delle scadenze forniscono le scadenze attive o in forma compatta (titolo, data di scadenza, giorni rimanenti, caso, con le voci contrassegnate come segrete escluse) o con descrizioni per voce e contrassegni espliciti di scaduto e urgente (urgente significa dieci giorni o meno), e in una forma di esposizione ordinata per urgenza con filtri di periodo (tutte raggruppate per criticità, solo critiche, in scadenza a breve, oggi, questa settimana, la prossima settimana o una data specifica). Lo strumento degli appuntamenti espone un giorno o un periodo ordinato con le udienze per prime — udienze importate dal portale, poi udienze del calendario, poi le restanti voci di calendario. Il lettore del calendario elenca le voci a livello globale o per caso, con intervallo di date facoltativo.

Lo strumento di acquisizione nel calendario non scrive mai: apre il modulo del calendario dell'applicazione precompilato con titolo, data, orari, descrizione e collegamento facoltativo al caso, e l'utente completa e salva. La sua descrizione impone un controllo obbligatorio dei duplicati prima di ogni chiamata: leggere prima il calendario dello stesso giorno, confrontare solo per data ignorando gli orari e, in presenza di una voce simile, mostrarla all'utente e chiedere se si tratta dello stesso evento, chiamando lo strumento solo dopo che l'utente ha confermato una nuova voce.

### 13. Il diario giornaliero

Gli strumenti del diario giornaliero scrivono e leggono il diario giornaliero trasversale ai casi. L'aggiunta, su istruzione dell'utente, riguarda un giorno (predefinito oggi, con la data recuperata tramite lo strumento dell'ora), aggiunge sempre in coda a un giorno esistente con un separatore e non sovrascrive mai, collega i casi interessati tramite un elenco di casi e si aspetta il contenuto come markdown pulito nello stile definito nell'appendice delle istruzioni. Uno strumento per le note aggiunge una singola riga di evento al diario giornaliero di oggi con un riferimento facoltativo al caso. Lo strumento del formato restituisce il formato vincolante del file del diario giornaliero. La lettura funziona per data, per intervallo o dai più recenti, con opzione di testo integrale e limitazione al caso; la ricerca è una ricerca per parola chiave insensibile ai segni diacritici su titoli e testi integrali, con data, titolo ed estratto di contesto per ogni risultato. Entrambe le forme di elenco hanno come valore predefinito dieci voci e un massimo di trenta. L'apertura del set di strumenti fornisce già per intero il diario giornaliero di oggi, con una nota su quante altre voci esistono per le ultime due settimane.

### 14. Accesso ai casi

L'individuazione del caso avviene per numero di caso, per nome della parte coinvolta (tollerante ai segni diacritici, comprendendo controparte, attore, titolo e cliente — obbligatoria ogni volta che l'utente nomina una parte senza numero, poiché molti casi non hanno alcun numero) e tramite l'elenco dei casi del cliente. I procedimenti correlati derivano dalla gerarchia dei casi come voci padre, figlio e dello stesso gruppo.

Ogni documento che l'IA legge reca un'indicazione di provenienza: i documenti in entrata dalla controparte o da un'autorità sono contrassegnati come da verificare criticamente, quelli in uscita come punto di vista del cliente. Ciò vale allo stesso modo per il Bridge e per la chat integrata.

Lo strumento di panoramica rapida restituisce, in una chiamata, ogni campo della scheda caso, ogni campo della scheda cliente, un fascicolo del portale collegato facoltativo e gli ultimi quindici identificativi di prova con le date di registrazione — pensato come orientamento prima di qualsiasi accesso ai testi integrali. Il lettore della cronaca restituisce la cronaca di un caso dalle voci più recenti, in forma compatta e senza testi integrali, con filtri di data e un limite fino a cinquanta voci, ed è la risposta rapida designata per «che cosa è successo per ultimo» — non conta nulla ai fini della preparazione del caso.

La preparazione del caso è uno strumento e un gate. Lo strumento di preparazione fornisce, in una chiamata, l'intestazione (profilo e giurisdizione) e il digest di ogni documento — identificativo, data, tipo, titolo, la sintesi redatta all'acquisizione, rimandi e dimensione del testo integrale — che funge da cronaca. La risposta inizia sempre con una nota che indica dove si trovano intestazione e digest (in linea quando l'intera risposta resta sotto il limite del connettore, altrimenti come due file di scratch da leggere fino in fondo) e i cinque documenti più recenti da leggere integralmente. Il gate di preparazione rifiuta poi, ai chiamanti esterni, due livelli di output sul caso: una nota o una voce su un caso (diario, nota giornaliera, voce di cronaca, nota del caso) finché profilo, giurisdizione, digest e le cinque voci di cronaca più recenti (note senza PDF né trascrizione; immagini ammesse) non sono stati letti integralmente — così che una serie in corso di voci di cronaca tenga conto delle ultime, senza costringere a leggere documenti pesanti per una semplice nota; un giudizio sul caso (verifica dell'atto, passaggio, esportazione) inoltre finché ogni documento citato o allegato non è stato letto integralmente. Le letture sono registrate per ogni IA desktop in un registro memorizzato, valide per tre giorni o fino al successivo documento in entrata del caso; i documenti in uscita e i record di prova non invalidano mai una lettura. Lo stesso registro alimenta il menu a tendina sul simbolo dell'IA. Un terzo livello, inferiore, protegge i contenuti del caso stessi: ogni strumento sui contenuti del caso — cronaca, cronologia, ricerche per parola chiave, per passaggio e per periodo, testi integrali, contraddizioni, dichiarazioni, obblighi, scadenze, calendario, corrispondenza, utilizzo, prove depositate, catene di lettere, elenchi degli allegati, timbri, media, istituzioni, etichette, valutazione e note di istruzione — viene rifiutato per un caso di cui il chiamante non ha letto il digest, con il rifiuto che indica lo strumento di preparazione; il terzo tentativo rifiutato sullo stesso caso viene registrato come violazione delle regole. I contatori di preparazione si azzerano a ogni lettura delle istruzioni e a ogni avvio della sessione.

La lettura completa del caso è protetta dal gate dell'intero caso. Il dump nello scratch è la via completa più rapida: assembla l'intero testo del caso all'interno dell'applicazione, senza tagli, normalizza le anomalie OCR (spazi ripetuti, fine riga misti, spazi unificatori, trattini morbidi, caratteri a larghezza zero), lo scrive direttamente nell'archivio di scratch e restituisce solo il riferimento con le statistiche; i casi molto grandi vengono suddivisi in file parziali numerati. I filtri di ambito limitano il dump alla direzione in entrata, in uscita o a entrambe, e un elenco di identificativi di prova esegue il dump esattamente di quei record — il modo designato per leggere per intero un singolo documento molto grande, con il caso derivato dalla prova.

Il lettore delle prove è la base obbligatoria di ogni affermazione sostanziale: carica un record con il testo integrale estratto del documento (completo e non troncato; oltre il limite del connettore arriva per intero nell'archivio di scratch) e, se presente, il testo integrale della chat o della trascrizione (comprese chat di messaggistica e trascrizioni telefoniche, di udienza, di interrogatorio e giudiziarie), più la sintesi qualificata, la descrizione e i metadati, che sono dichiarati non sostitutivi del testo integrale. Se non compare nessuna delle due sezioni di testo integrale, non esiste alcun testo estratto e il modello non deve fare affermazioni sostanziali sul record. Un elenco separato da virgole di fino a dodici identificativi legge più record in una chiamata. Uno strumento di inventario dei media riferisce esistenza, tipo, data e dimensione degli allegati immagine, audio e video di un record o di un caso, dichiarando esplicitamente che il contenuto multimediale non è leggibile come testo e che lo strumento esiste affinché un record con soli media non venga erroneamente classificato come vuoto.

Le etichette vengono presentate come post-it liberi dell'utente sui record di prova — il testo è l'informazione, il colore non ha un significato fisso, e un record etichettato è dichiarato un forte indicatore di rilevanza. Tre modalità forniscono una panoramica globale con conteggi e record richiamati, tutte le etichette di un caso, oppure una ricerca testuale nei testi delle etichette, con un filtro di ambito che separa le etichette personali da quelle legate al caso. I gruppi per materia elencano l'intero panorama dei casi di un cliente come gruppi con casi annidati, compresi i casi superiori e subordinati. La valutazione del caso memorizzata è recuperabile per ogni caso.

### 15. Ricerca all'interno del fascicolo

La ricerca centrale delle prove assegna un punteggio su tutti i campi delle prove, sui testi integrali estratti dei documenti e sui contenuti delle trascrizioni, con le query di più parole combinate in modo congiuntivo, indipendenza dai segni diacritici e un incremento per le frasi; i risultati sono ordinati per rilevanza senza esporre i punteggi, ogni risultato indica quale campo lo ha attivato, il valore predefinito è quindici e il massimo trenta risultati, e la forma di risposta segue la scelta fatta al gate di ricerca. La ricerca per passaggi suddivide documenti e trascrizioni in finestre di paragrafo e di frase e restituisce i passaggi più corrispondenti con il loro riferimento — individuando dove si trova qualcosa in un testo, non soltanto in quale record — con una corrispondenza tollerante agli errori OCR che supera gli errori di acquisizione, un bonus per le frasi e la limitazione esattamente a un caso o a tutti i casi di esattamente un cliente (lo strumento designato per le domande del tipo «X ha mai, in qualche punto»; mai trasversalmente tra clienti), con un valore predefinito di otto e un massimo di venti passaggi. Uno strumento per intervallo di date elenca le prove tra due date. Il cercatore dedicato della corrispondenza di una parte è obbligatorio quando l'utente chiede documenti da o verso una parte specifica: confronta la parte, in modo tollerante ai segni diacritici, con i record di coinvolgimento, filtra per direzione (a me, da me, o entrambe), esclude chat e trascrizioni, nasconde per impostazione predefinita le schermate autoprodotte indicandone il numero, e ordina dai più recenti — espressamente distinto dalla ricerca per parola chiave, che restituirebbe anche i record che si limitano a menzionare la parte.

### 16. Strumenti di analisi deterministici

Questi strumenti calcolano a partire dai record senza alcun coinvolgimento dell'IA. La cronologia restituisce tutti gli elementi di un caso ordinati per data dell'evento in ordine decrescente, con riferimento, marca temporale, tipo di record e titolo, con un valore predefinito di trecento e un massimo di cinquecento elementi. Il raccoglitore di contraddizioni volutamente non giudica: raccoglie fino a centoventi elementi candidati (predefinito sessanta), facoltativamente filtrati su un'entità, con riferimento, data, partecipanti e breve contenuto, e lascia al modello il giudizio e le successive letture dei testi integrali. Lo strumento chi-ha-detto-cosa trova ogni elemento in cui compare una persona — come partecipante, nel titolo o nel testo, o all'interno della formulazione di una trascrizione — indipendentemente dai segni diacritici, indicando la fonte di ogni risultato, con un valore predefinito di quaranta e un massimo di cento. Lo strumento della rete dei partecipanti conta quali persone ed entità compaiono insieme negli stessi elementi, a livello globale o per caso, facoltativamente concentrandosi su un'entità. Lo strumento degli obblighi elenca gli elementi aperti contrassegnati con scadenza per data di scadenza, con conteggio dei giorni, descrizioni, riferimenti e contrassegno di scaduto/urgente.

Cinque ulteriori strumenti deterministici servono alla caratterizzazione di singoli giudici e pubblici ministeri; contano come decisioni solo i documenti in entrata provenienti da un tribunale o da una procura. L'elencatore delle decisioni restituisce ogni decisione in cui una persona ha seduto come giudice o ha agito come pubblico ministero, su tutti i casi, contando solo un nome nell'intestazione (composizione del collegio) o nel blocco delle firme — un nome nel corpo del testo non conta, e i cancellieri non vengono mai elencati. Il lettore della struttura scompone una decisione in tribunale, sezione, numero di caso, tipo, numero e data, udienza, collegio, la frase che nomina parti e oggetto, il dispositivo alla lettera, le parole chiave dell'esito, rimedio, pronuncia, citazioni normative con il loro stato nella biblioteca e l'ampiezza della motivazione, ciascuno con la sua posizione in caratteri, segnalando ciò che manca come non trovato. Il raccoglitore delle memorie scrive ogni memoria depositata nel caso fino alla data della decisione in due file di scratch — i documenti in uscita del cliente e quelli in entrata della controparte — limitandosi ai documenti indirizzati a un tribunale o a una procura, ciascuno solo con il suo documento principale (e-mail di accompagnamento e allegati tagliati), ed elencando come non assegnato ciò che non può essere classificato; i suoi file comportano l'obbligo di lettura. Il confronto con la decisione misura quale quota della motivazione propria del tribunale corrisponde, come testo, alle memorie del cliente, a quelle della controparte, a entrambe, al testo normativo della biblioteca, o a nulla (la formulazione propria del tribunale), misura separatamente l'esposizione delle posizioni delle parti ed elenca i passaggi corrispondenti con il loro tasso di corrispondenza dal settanta per cento in su, dal più alto, nella formulazione originale con le posizioni in caratteri. Il confronto tra documenti mette a confronto due documenti qualsiasi tra clienti e casi diversi, classifica i passaggi corrispondenti come testo normativo, fonte citata comune o condivisi solo da questi due, e apre la sua risposta con l'indicazione di leggere per intero entrambi i documenti prima di affermare qualsiasi cosa su un collegamento.

Una lista di valutazione trasforma queste misurazioni in una conoscenza duratura di tribunali e giudici. Ogni scheda contrassegnata come decisione giudiziaria — spuntata dall'utente all'acquisizione, precompilata dal riconoscimento o trovata dall'elaborazione in background nell'archivio esistente — viene messa in coda con dati di intestazione determinati in modo deterministico: tribunale, collegio e composizione, giudici e cancellieri con i loro ID anagrafici, numero, data ed esito. L'IA lavora la lista una alla volta; lo strumento di preparazione fornisce le misurazioni, le domande di valutazione con la forma obbligatoria e gli strumenti per decisione e atti, e libera la decisione per la lettura senza richiedere la panoramica del suo caso. La registrazione viene respinta finché l'utente non ha espressamente acconsentito, la decisione non è stata letta integralmente, l'analisi in inglese non reca esattamente i sette titoli nell'ordine fisso e con contenuto, oppure un giudice o un cancelliere non ha un ID anagrafico. Vengono salvati i dati di intestazione, l'assegnazione a caso e cliente, le misurazioni e l'analisi; una nuova versione delle domande consente una nuova valutazione sul posto. Con l'IRONSTICK SERVER le valutazioni viaggiano con la rete di persone e società dello studio: ogni postazione tiene la propria valutazione per decisione, che solo lei modifica, e lo strumento di lettura restituisce integralmente le valutazioni di tutte le postazioni per un giudice, un tribunale, un numero di ruolo o un proprio caso, sempre con l'indicazione di chi ha valutato.

La famiglia di strumenti per il tracciamento dei depositi opera in modo deterministico sugli atti memorizzati: lo strumento di utilizzo risponde, per una prova, quali allegati contiene fisicamente e in quali atti è stata essa stessa depositata (con data e numero di ruolo, su tutti i casi), oppure, per un caso, fornisce il rapporto delle lacune sugli elementi mai depositati; l'elencatore delle prove depositate restituisce per ogni atto memorizzato gli identificativi allegati più l'insieme totale deduplicato ed è obbligatorio prima di comporre l'elenco degli allegati di un nuovo atto, con l'avvertenza documentata che sono coperti solo gli allegati collegati strutturalmente. La catena dei numeri di registro trova, a partire da un numero di lettera o da tutti i numeri presenti in un documento, ogni documento che condivide quel numero in ordine cronologico — il percorso documentato di un procedimento amministrativo. L'elencatore degli allegati risolve gli allegati fisicamente contenuti in un documento, compreso il timbro di deposito deterministico per ciascun allegato; lo strumento dei timbri risolve qualsiasi identificativo di prova nel suo timbro di deposito deterministico (più file memorizzati producono più timbri; un record senza file memorizzato produce un marcatore esplicito di assenza). Entrambi gli strumenti che forniscono timbri vietano di inventare timbri — devono sempre essere recuperati.

### 17. Riparazione OCR

Un percorso di escalation in quattro passi ripara i testi integrali memorizzati rovinati ed è esplicitamente escluso dall'uso come comodo sostituto della lettura. La richiesta di nuova scansione chiede all'applicazione di rieseguire l'OCR sul PDF originale memorizzato; l'utente seleziona le pagine in IRONSTICK, e il modello è istruito a informare l'utente in una frase e ad attendere. Lo strumento di stato va chiamato una sola volta quando l'utente dice che le pagine sono state scelte — i cicli di interrogazione ripetuta sono vietati — e, quando è pronto, restituisce l'ordine di lavoro insieme a due file di scratch contenenti la nuova scansione e il testo attuale della banca dati. La regola di confronto istruisce il modello a effettuare solo correzioni meccaniche dell'OCR, mai riformulazioni, con numeri, nomi e importi mantenuti esatti. Dove un punto è illeggibile in entrambe le fonti, il modello può chiedere all'utente un controllo visivo prima dell'invio — al massimo tre punti per documento, con il record aperto nel punto esatto e il punto indicato con precisione («pagina 7, secondo paragrafo — l'importo?»); con la navigazione disattivata, record e pagina vengono invece indicati nella chat. Lo strumento di invio consegna all'applicazione il file di scratch corretto, che l'applicazione mostra all'utente in una finestra modale; solo il salvataggio da parte dell'utente sostituisce il testo nella banca dati, e nulla viene memorizzato automaticamente. L'ultima escalation, la richiesta di passaggio del PDF, apre il record e fa sì che il modello chieda all'utente di trascinare personalmente il PDF originale nella chat — il Bridge volutamente non fornisce alcun aiuto sul percorso, rifiuta in modo rigido quando non è stata preceduta da una nuova scansione, e rifiuta i PDF oltre i dieci megabyte o oltre le novanta pagine; il modello legge poi il PDF visivamente, costruisce la versione corretta nell'archivio di scratch e la invia attraverso lo stesso gate di revisione. In caso di rifiuto per dimensione o numero di pagine il flusso non finisce: il ripiego della trascrizione apre comunque il record, e il modello chiede all'utente di aprire il PDF tramite l'allegato e di trascrivere alla lettera i passaggi rilevanti («pagina X, in alto, dovrebbe esserci scritto … — lo trascriva esattamente, per favore») — al massimo tre punti, ripresi alla lettera nella versione corretta; qualsiasi lacuna residua viene dichiarata apertamente. Invece di restituire l'intero documento per l'elaborazione manuale, l'avvocato controlla soltanto i punti che non possono essere risolti automaticamente.

### 18. Persone, istituzioni, clienti e proposte di dati

Gli strumenti di individuazione trovano clienti, persone e istituzioni tramite un frammento di nome, in modo tollerante ai segni diacritici; un cercatore per parola chiave cerca in nomi, note e campi di analisi quando si conosce solo un frammento. Una verifica deterministica di elenchi confronta un documento che contiene un elenco di nomi con tutte le persone e società registrate, indirizzato tramite identificativo della prova o tramite caso — in quel caso viene analizzata la voce più recente del caso, indicata nella risposta. Nei collegamenti con Claude e ChatGPT la verifica delle parti accetta in anticipo fino a due ulteriori parti e le cerca in background mentre quella corrente viene elaborata; i risultati sono conservati per trenta minuti e l'ordine del gate resta invariato. Gli strumenti di rete elencano tutti coloro che sono collegati a una parte tramite relazioni esplicite e casi condivisi, le cricche dell'intera rete delle parti tramite rilevamento deterministico delle comunità (come nella vista Universo della schermata delle persone, con evidenza dei gruppi di densità insolita e una separazione facoltativa di persone e istituzioni in livelli), e le parti più collegate; ogni risposta relativa a una parte inizia con il blocco dei casi a cui la parte è collegata. Il lettore del profilo restituisce ogni campo anagrafico e di analisi completo e non troncato. I lettori dei profili restituiscono il profilo dell'entità con analisi e relazioni, tutte le relazioni di una persona in entrambe le direzioni tra persone e istituzioni, il profilo dell'istituzione e le istituzioni formalmente collegate a un caso. Il lettore del tempo di lavoro riferisce il tempo di lavoro misurato passivamente (ogni visualizzazione di pagina dura fino alla successiva, con un limite di trenta minuti, e l'ultima conta come un minuto) come panoramica dei totali e dei casi, clienti e giorni principali, oppure come ripartizione giornaliera di un caso, su un intervallo di date o su una finestra degli ultimi giorni con valore predefinito di sette.

L'IA non può scrivere direttamente nelle anagrafiche. Due strumenti di proposta collocano i risultati nel Monitor di Coerenza dei Dati dell'applicazione come elementi da revisionare: la proposta anagrafica (solo dopo che l'utente ha confermato nella chat che il risultato deve essere registrato) riguarda un'entità o un'istituzione esistente — individuata prima per nome — oppure descrive un nuovo record per nome e campi, con un elenco di campi ammessi in cui i numeri di identificazione societari e personali condividono un unico campo, solo campi comprovati ammessi, e riferimenti facoltativi alle prove; la proposta di relazione descrive una relazione tra due persone individuate o tra una persona e un'istituzione, con esattamente una controparte, una categoria obbligatoria, una motivazione facoltativa e riferimenti facoltativi a caso, cliente e prove. Una proposta può anche rinominare un record, impostarne il tipo (persona fisica o giuridica), cambiare la categoria di una relazione esistente, proporre una cancellazione (di un record, di un'etichetta o di una scadenza completata) con una motivazione nella lingua di sistema, che è obbligatoria, oppure proporre due record come duplicati; un nuovo record viene accettato solo dopo che il tipo è stato deciso nel dialogo, e una proposta che tocca la descrizione o i dati di contatto di una persona viene rifiutata a meno che il chiamante non abbia letto quel profilo negli ultimi trenta minuti. In entrambi i flussi il record cambia solo quando l'utente accetta la proposta nel monitor. A una proposta di nuovo record si risponde prima con l'elenco dei record simili già esistenti — corrispondenza approssimativa, nulla viene salvato — e il chiamante deve o registrare su uno di essi o confermare esplicitamente, tramite parametro, che la parte è realmente nuova; una corrispondenza rigorosa viene reindirizzata al record esistente. Ogni nuova parte salvata restituisce un obbligo di seguito che impone al chiamante di ricercare e registrare le connessioni della parte, ricerca web compresa. Un terzo strumento di proposta assegna una parte a un caso: esattamente un'entità o un'istituzione, una motivazione obbligatoria e riferimenti facoltativi alle prove diventano un elemento di revisione per il collegamento al caso nello stesso monitor; l'accettazione scrive il collegamento del partecipante su cui si basano le viste delle cricche e delle connessioni, mentre un collegamento esistente, un duplicato in sospeso o un rifiuto precedente vengono segnalati invece di essere riproposti. L'applicazione conta inoltre le proposte per chiamante: dopo due proposte anagrafiche memorizzate e una proposta di relazione o di collegamento al caso considera la sessione come cura della rete delle parti, aggiunge una volta l'indicazione che questo lavoro interamente protetto da gate non richiede un modello di punta e — nella chat integrata — mantiene l'esecuzione sul livello di modello intermedio. Processi in background indipendenti alimentano lo stesso monitor: un estrattore di dati deduplicato alla fonte e una scansione periodica di normalizzazione che propone unioni e riclassificazioni secondo il modello a tre categorie (persona fisica; persona giuridica: qualsiasi ente diverso da un individuo, con un'iscrizione nel registro delle imprese che prevale sulla proprietà statale; istituzione: organi statali senza iscrizione nel registro) — senza mai unire automaticamente.

### 19. La biblioteca giuridica

La biblioteca contiene i testi integrali delle leggi come file markdown con un numero di registrazione interno per ogni legge. Lo strumento di elenco sfoglia l'inventario (identificativo, giurisdizione, titolo, tipo, nome del file, data dell'ultima verifica; predefinito cinquanta, massimo cinquecento) ed è in sola lettura. Lo strumento di ricerca è obbligatorio prima di qualsiasi ricerca su internet di una norma: trova corrispondenze o per denominazione, su titolo e descrizione, o per passaggio citato con tolleranza approssimativa (bastano circa il sessanta per cento delle parole e le desinenze sono tollerate), richiede la giurisdizione ricavata dal caso, colloca le corrispondenze nel titolo molto al di sopra di quelle nel contenuto (una corrispondenza nel titolo vale nove decimi, ogni risultato nel contenuto un decimo, al massimo tre estratti per file) e restituisce per ogni risultato il numero di registrazione, il nome del file, brevi estratti con le loro esatte posizioni in caratteri e una chiamata già pronta per un brano alla lettera il cui intervallo è già ampliato — di almeno cinquecento caratteri oltre l'estratto — così che il modello recuperi da sé la formulazione autorevole invece di fidarsi dell'estratto. Lo strumento dei brani restituisce il contenuto alla lettera di una legge tra due posizioni in caratteri, indirizzato tramite numero di registrazione, limitato al file, preceduto da una nota secondo cui l'intervallo può essere regolato e l'intera legge è caricabile, con i risultati sovradimensionati deviati automaticamente nell'archivio di scratch; la corrispondenza delle cifre nelle ricerche normative usa regole di confine che tollerano la notazione con il punto delle migliaia dei portali ufficiali. Le leggi intere sono caricabili per nome del file o per numero di registrazione, con i file grandi deviati automaticamente. Lo strumento di registrazione è il canale di segnalazione obbligatorio per qualsiasi legge trovata sul web aperto: vengono inviati solo il link, la giurisdizione e, facoltativamente, titolo e frase; un processo in background recupera, converte, memorizza e annuncia la fonte nel monitor dei dati, e il modello stesso non converte mai nulla. Un ciclo di revisione della biblioteca tiene traccia della data dell'ultima verifica di ogni fonte. Il rifiuto di una legge nel monitor dei dati richiede una conferma.

Uno strumento di riverifica controlla su richiesta una legge rispetto alla sua fonte e riferisce se è invariata, aggiornata o duplicata; un recupero più recente prende il posto della voce, e su IRONSTICK SERVER prevale il controllo più recente, indipendentemente da chi abbia registrato la legge per primo. Le leggi intere oltre il limite del connettore finiscono nell'archivio di scratch e non registrano nulla come letto; la provenienza deriva dallo strumento degli articoli.

### 20. Validatori e registri

Strumenti di verifica deterministici coprono: IBAN (formato, lunghezza specifica per paese, somma di controllo); numeri personali, previdenziali e fiscali nazionali secondo nove schemi in sette paesi (Romania, Svizzera, Germania, Austria, Francia, Italia, Spagna) tramite cifre di controllo, con una modalità mirata per schema e una modalità automatica che prova tutti gli schemi e riferisce quelli validi; identificativi IVA europei (prima un controllo offline del formato del paese, poi il servizio ufficiale dal vivo dell'Unione, che restituisce i dati aziendali resi disponibili dove lo Stato membro li fornisce); numeri EORI tramite il servizio di validazione dal vivo dell'Unione; identificativi delle persone giuridiche (prima la somma di controllo, poi il registro globale per stato e nome); e, separatamente, uno strumento per il registro delle imprese che apre la ricerca «Trova un'impresa» del portale europeo e-Justice (BRIS) in un browser incorporato, perché il modello la legga. Ogni validatore restituisce un risultato concreto e motivato — valido con i dettagli, non valido con l'aspetto che non supera il controllo, non trovato, oppure servizio non raggiungibile con lo stato — mai un semplice sì o no, così che un numero realmente errato sia sempre distinguibile da un disservizio. Il livello delle istruzioni rende obbligatoria l'esecuzione del validatore corrispondente prima che un tale numero entri in un documento prodotto o revisionato. Lo stesso set di strumenti contiene lo strumento della posizione approssimativa dell'utente (paese, città e indirizzo pubblico dall'ultima istantanea di accesso, esplicitamente non una fonte per la giurisdizione) e uno strumento meteo fornito al meglio delle possibilità.

### 21. Accesso al web

Due strumenti raggiungono l'internet aperto, entrambi presentati come integrazione delle capacità web proprie dell'IA desktop, con l'istruzione esplicita di usarli direttamente quando l'IA non dispone di un proprio accesso al web, e il divieto di usarli per dati relativi ai casi. Ogni ricerca interroga contemporaneamente Google, DuckDuckGo e Qwant e restituisce un unico elenco unificato di risultati con titolo e link, senza duplicati, destinato a essere seguito con l'apritore di pagine. L'apritore di pagine recupera esattamente un URL pubblico con una pipeline a stadi che la descrizione elenca per intero, così che il modello non si arrenda mai prematuramente: una richiesta standard di browser con gestione dei reindirizzamenti e compressione; le pagine che richiedono JavaScript, o che non rispondono alla richiesta standard, vengono rese in un browser integrato finché non compare il contenuto; conversione dei PDF esatta per pagina, usando il livello di testo per ogni pagina e l'OCR solo per le pagine scansionate, così che i documenti misti funzionino; e conversione dei formati office e di testo in testo leggibile. L'output è markdown, completo: il contenuto principale viene estratto (navigazione, pubblicità e banner dei cookie rimossi), le pagine senza corpo di articolo mantengono il piè di pagina perché lì si trovano indirizzo e dati di contatto, e dove l'estrazione lascerebbe quasi nulla viene consegnata invece l'intera pagina. Una chiamata risponde entro quarantacinque secondi; un documento grande o scansionato continua a essere elaborato in background e viene consegnato subito alla chiamata successiva con lo stesso indirizzo. I portali normativi vengono rifiutati finché non è stata effettuata una ricerca nella biblioteca, secondo il gate delle norme. Se un sito web richiede una conferma prima di rendere disponibili i propri contenuti, IRONSTICK apre la pagina in una finestra propria; l'utente conferma lì, e il lavoro sulla pagina prosegue.

### 22. Navigazione GUI ed esportazioni

Tutta la navigazione è facoltativa e soggetta a un interruttore dell'utente; senza di esso l'intero gruppo non esiste. Gli strumenti di navigazione aprono, nella finestra principale dell'applicazione: un caso (facoltativamente sulla scheda della cronaca o della valutazione), l'elenco dei casi di un cliente, una persona, un'istituzione (entrambe evidenziate con il dettaglio aperto), una voce di prova (pagina di cronaca corretta, evidenziata), la preparazione del dossier (con una variante completamente automatica riservata al desiderio esplicito dell'utente di un PDF completo), il diario giornaliero (facoltativamente il dettaglio di un giorno specifico), il monitor e-mail (facoltativamente il dettaglio di una mail specifica), la ricerca globale con una query avviata (riservata al desiderio esplicito; le risposte in chat usano invece la ricerca interna), l'area di backup con avvio immediato di un backup, e qualsiasi schermata indicata dall'elenco canonico delle schermate. Le finestre di esportazione coprono l'elenco dei clienti, l'elenco delle scadenze, la panoramica dei casi di un cliente, il dossier del caso in due tipi di documento e la mappa, più la creazione del pacchetto IA del cliente. Tutti gli strumenti di navigazione sono soggetti al blocco rigido e sono i destinatari delle offerte di navigazione.

### 23. Scrittura, formati e consegna

Il set di strumenti di scrittura vincola la produzione di documenti a specifiche recuperate. Lo strumento del formato di output restituisce l'istruzione di generazione vincolante per il tipo di artefatto richiesto — per gli atti differenziata tra atto giuridico e lettera semplice, ciascuno in forma con difensore e senza difensore, con la giurisdizione, la lingua e la data del caso risolte direttamente nell'istruzione e segnaposto che il modello compila con i dati del connettore; lo strumento del formato di invio della posta restituisce la specifica vincolante per gli invii al tribunale con consegna sequenziale dei pacchetti. Entrambi vanno seguiti alla lettera. Ogni IA desktop consegna un atto finito in Markdown attraverso la finestra di consegna, che può aprirlo direttamente nel word processor di IRONSTICK; nulla viene memorizzato finché l'utente non salva. Lo strumento di acquisizione della cronaca apre il modulo della cronaca precompilato nel caso corretto, senza salvare nulla da sé.

La consegna dei file all'utente avviene esclusivamente tramite lo strumento di consegna, che l'applicazione esegue da sé. Accetta solo un percorso di origine nello spazio di scratch — i contenuti in linea e gli altri percorsi vengono respinti —, legge da sé il file, così che il modello non riscriva nulla, e lo passa alla finestra di esportazione di IRONSTICK; da lì l'utente lo salva oppure invia con un clic una bozza di testo all'elaboratore di testi. Non esiste alcuna cartella di consegna né alcun percorso di cui il modello venga a conoscenza. Il modello versiona da sé i nomi dei file, un nuovo numero per ogni consegna; il risultato riporta le versioni della radice del nome consegnate finora e la più alta, e avvisa se il numero scelto non è il più alto. La consegna avviene una volta per compito, alla fine, mai per stati intermedi, e supera prima i gate di interazione e di verifica.

### 24. Revisione tra pari tra IA

Lo strumento di passaggio consegna un lavoro prodotto all'altra IA desktop: il contenuto va in un grande archivio a breve termine, un record di compito vi fa riferimento, l'istruzione (limitata a mille caratteri) indica che cosa deve fare la pari, e il modello chiede poi all'utente di attivare la pari nell'altra applicazione. Lo strumento della casella in arrivo elenca i compiti aperti indirizzati al chiamante — i propri non compaiono mai — con identificativo, incarico e contenuto completo, facoltativamente filtrati per cliente o caso. Lo strumento di risposta chiude un compito (cancellandone il contenuto a breve termine) e contemporaneamente rimanda la valutazione come nuovo compito al mittente originale; lo strumento di completamento chiude senza restituire nulla. Lettura e scrittura dello scratch sono membri di questo set di strumenti per gestire i contenuti scambiati.

### 25. File di istruzioni IA

Per ogni caso l'utente può memorizzare file di istruzioni che il modello deve consultare. L'elencatore mostra le istruzioni di un caso con identificativo, nome del file, dimensione, data di caricamento ed estratto, senza testi integrali; l'inventario globale elenca ogni istruzione su tutti i clienti e casi; il lettore singolo restituisce un'istruzione senza tagli tramite il suo identificativo numerico, con l'opzione di instradare il contenuto grezzo nell'archivio di scratch, esatto al byte, per il passaggio diretto; il lettore cumulativo restituisce tutte le istruzioni di un caso in una chiamata con la stessa opzione di scratch. Entrambi gli output di elenco vengono deviati automaticamente quando sono sovradimensionati. Lo strumento di aggiornamento propone una versione modificata attraverso esattamente una di tre vie — un frammento da aggiungere in coda (la via preferita per le aggiunte, con l'applicazione che assembla da sé il risultato e il divieto per il modello di riprodurre il contenuto esistente), un percorso sorgente verso una nuova versione completa sul disco, oppure il nuovo contenuto completo in linea — e l'applicazione mostra la modifica all'utente come confronto; solo un'approvazione esplicita la adotta, l'esito (approvato, rifiutato o in sospeso) viene restituito, e uno stato in sospeso vieta di inviare di nuovo. L'esportazione del pacchetto costruisce il bundle completo di istruzioni e skill di un cliente e apre la finestra di esportazione.

### 26. Integrazioni complementari al di fuori della superficie degli strumenti

Un complemento lato client integra il Bridge senza far parte della superficie MCP: per Claude Desktop e ChatGPT Desktop, un pulsante separato nella configurazione crea un plugin di skill (skill che rispecchiano il modello di lavoro basato su set di strumenti e run-tool, generate e versionate dall'applicazione), che l'utente aggiunge nell'app desktop. La configurazione del front-end del Bridge per ogni IA viene scritta dai corrispondenti pulsanti del configuratore, che scrivono sempre l'identità del chiamante per proteggere dalla condivisione della configurazione tra IA diverse.

### 27. Semantica di errori e rifiuti — riepilogo

Ogni rifiuto nel sistema è istruttivo anziché laconico: le violazioni dello schema restituiscono lo schema atteso; i nomi sconosciuti restituiscono la corrispondenza più vicina; il gate della data indica il rimedio esatto; il gate delle norme indica la procedura della biblioteca; il blocco della navigazione indica la schermata protetta e l'alternativa differita; il blocco del consenso indica la finestra per riprovare; le risposte sovradimensionate indicano il file e i due comandi di proseguimento oppure i filtri di restringimento; i fallimenti dei validatori indicano l'aspetto che non supera il controllo e distinguono i disservizi; i rifiuti per capacità nella memoria indicano occupazione e spazio residuo e, vicino al limite, le opzioni di ristrutturazione; i gate di consegna e di ricerca indicano le loro opzioni di risposta, compresa la via d'uscita universale unknown; il blocco di accesso indica le due chiamate che lo aprono; il gate di preparazione indica le parti non lette con identificativi e percentuali; il verificatore degli atti indica, per ogni lettura scaduta o azzerata, l'esatta chiamata che la ripristina. Il contratto verso il modello prevede che, dopo al massimo tre tentativi corretti su una qualsiasi chiamata che fallisce, il modello si fermi e riferisca all'utente l'errore esatto.

##### Contatti

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scansiona il codice per salvare la nostra scheda contatto — telefono, e-mail e sito.

Contattate direttamente via WhatsApp o Telegram — anche una chiamata è benvenuta. Lingue parlate: tedesco, inglese, rumeno.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Messaggio

### IRONSTICK o una demo ti interessano? Scrivici.
