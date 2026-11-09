# Manuale - Bridge

> Manuale Bridge — lavorare con l’IA: cosa succede dietro le quinte e otto flussi di lavoro, dall’inizio della giornata alla ricerca normativa.

Pagina originale: https://www.ironstick.legal/manualbridge_it.html

---

Manuale Bridge — lavorare con l’IA: cosa succede dietro le quinte e otto flussi di lavoro, dall’inizio della giornata alla ricerca normativa.

Nozioni di base

## 1. Chat IA e bridge — qual è la differenza?

IRONSTICK Le offre due modi per lavorare con un'IA sui Suoi fascicoli.
La **chat IA** è integrata nel programma: Lei scrive in una finestra di IRONSTICK e sarà IRONSTICK stesso a inviare la richiesta a un servizio di IA esterno, usando le chiavi API che il Suo studio ha memorizzato nella configurazione IA.
Il **bridge** funziona al contrario: Lei scrive nell'app di IA desktop che già utilizza, e quell'app richiama in tempo reale gli strumenti di IRONSTICK tramite un connettore.
In entrambi i casi l'IA raggiunge i Suoi dati solo attraverso IRONSTICK, con gli stessi strumenti e dietro gli stessi gate.

### La chat IA integrata

- **Prima un livello locale.** Ogni messaggio passa anzitutto per un livello basato su regole che gira sul Suo computer, senza modello di IA e senza internet. Le richieste semplici — aprire una schermata, un cliente o un caso, semplici consultazioni — vengono eseguite direttamente lì. Tutto ciò che richiede ragionamento o scrittura prosegue verso un servizio di IA esterno.
- **Le Sue chiavi, i Suoi servizi.** La chat usa i servizi di IA esterni per i quali nella configurazione IA è memorizzata una chiave API. Vengono utilizzati automaticamente in un ordine fisso. Se uno non è disponibile o ha esaurito il credito, subentra il successivo con la stessa richiesta.
- **Prima il consenso.** Prima di inviare qualsiasi cosa a un servizio di IA esterno, la chat Le chiede il permesso. Se rifiuta, non viene inviato nulla e la chat non lo chiede di nuovo finché non cambi modalità o non apra di nuovo la chat.
- **Pseudonimizzata.** Prima che una richiesta lasci il Suo computer, nomi di persone e di società, numeri di caso e di fascicolo giudiziario, numeri di identificazione personale, IBAN, numeri di telefono, indirizzi e-mail e indirizzi delle parti vengono sostituiti da segnaposto neutri. La risposta viene ritradotta sul Suo computer. Date e importi restano invariati. I segnaposto sono costruiti a partire dai Suoi record; per i terzi sconosciuti nel testo libero vengono individuati solo schemi riconoscibili come numeri, indirizzi e-mail e numeri di telefono.
- **Registrata.** Ogni chiamata a un servizio di IA esterno viene registrata localmente, nella forma con segnaposto con cui ha lasciato il Suo computer.
- **Memoria di lavoro compatta.** A ogni turno all'IA vengono consegnati la parte recente della conversazione (circa gli ultimi 6.000 caratteri) e un breve riassunto della parte precedente. Una richiesta esegue fino a otto round di strumenti.
- **Dove funziona.** Su Windows e sul tablet Android.

### Il bridge

- **Tre parti.** La Sua app di IA desktop si collega tramite il Model Context Protocol (MCP) a un piccolo programma bridge sullo stesso computer. Il bridge inoltra ogni chiamata all'app IRONSTICK in esecuzione tramite una connessione protetta raggiungibile solo da questo computer. L'app esegue lo strumento e rimanda il risultato nello stesso modo.
- **Il programma bridge non conosce alcun dato.** Non apre alcun database e non contiene strumenti propri; si limita a inoltrare le chiamate. Anche le istruzioni di lavoro per l'IA provengono dall'app in esecuzione quando l'IA desktop si connette.
- **Solo mentre IRONSTICK è in esecuzione.** Se l'app è chiusa, a ogni chiamata di strumento viene risposto con l'avviso che IRONSTICK non è in esecuzione e che occorre avviarlo. L'elenco degli strumenti resta visibile nell'IA desktop, quindi l'ordine in cui avvia i due programmi non ha importanza.
- **Dati reali.** I risultati degli strumenti raggiungono l'IA desktop non pseudonimizzati — nomi, numeri e date reali sono ciò che rende possibile un modello pronto per il deposito. Ciò che l'IA legge viene elaborato sotto il Suo account presso il fornitore dell'app di IA desktop, alle condizioni di tale fornitore.
- **Attivato da Lei.** Il bridge funziona solo quando nella configurazione IA è attivata l'opzione *Consenti l'accesso del connettore dall'IA desktop locale* e il bridge per quell'app di IA desktop è concesso in licenza. Per il controllo del programma — aprire schermate, casi e documenti, esportare — serve un secondo interruttore.
- **Più d'uno contemporaneamente.** Le app di IA desktop con licenza — Claude Desktop, ChatGPT Desktop, Qwen Desktop e Kimi Desktop — possono essere connesse contemporaneamente e lavorare sullo stesso caso. Ciascuna viene mostrata con un proprio simbolo nella barra dei menu mentre lavora.
- **Dove funziona.** Su Windows.

### Confronto affiancato

|  | Chat IA (integrata) | Bridge (app di IA desktop) |
| --- | --- | --- |
| Dove si scrive | Nella finestra della chat di IRONSTICK | Nella Sua app di IA desktop |
| Chi parla con il servizio di IA | IRONSTICK, con le Sue chiavi API | La Sua app di IA desktop, con il Suo account |
| Costi dell'IA | Fatturati a consumo dal servizio di IA sulla Sua chiave API | Coperti dall'abbonamento che già possiede per l'app di IA desktop |
| Licenza IRONSTICK | Inclusa, nessuna licenza aggiuntiva | Licenza Bridge per utente / postazione — un bridge per app di IA desktop, oppure il bundle di tutti i bridge; importi nel [listino prezzi](https://www.ironstick.legal/pricing.html) |
| Dati inviati all'IA | Pseudonimizzati; date e importi invariati | Dati reali, elaborati sotto il Suo account presso il fornitore |
| Il Suo consenso | Prima della prima richiesta esterna di una sessione di chat | Prima del primo accesso ai dati da parte di una qualsiasi IA desktop in ogni esecuzione del programma |
| Istruzioni di lavoro | Inviate con ogni richiesta | L'IA deve leggerle e confermare alla lettera una regola prima che si apra qualsiasi strumento |
| Strumenti e gate | Lo stesso set di strumenti e gli stessi gate, più una ricerca nella cronologia propria della chat | Lo stesso set di strumenti e gli stessi gate; il controllo del programma solo con il proprio interruttore |
| Durata di una sessione di lavoro | Conversazione recente più un breve riassunto; fino a otto round di strumenti per richiesta | La conversazione dell'app di IA desktop |
| Piattaforme | Windows e tablet Android | Windows |

### Perché il bridge è adatto al lavoro esteso sui casi

- **Nessun costo per chiamata tramite IRONSTICK.** Leggere interi fascicoli, elaborare centinaia di documenti e redigere in più round avvengono tutti con l'abbonamento che già paga per l'app di IA desktop. Lo stesso lavoro tramite la chat integrata viene fatturato a consumo sulla Sua chiave API, e su fascicoli voluminosi il conto sale rapidamente.
- **Sessioni di lavoro più lunghe.** L'IA desktop conserva una propria conversazione, mentre la chat integrata porta avanti solo la conversazione recente e un riassunto, con un numero limitato di round di strumenti per richiesta.
- **Risposte più grandi per chiamata.** Claude Desktop e ChatGPT Desktop ricevono direttamente risposte degli strumenti fino a 40.000 caratteri; Qwen Desktop, Kimi Desktop e la chat integrata ne ricevono fino a 10.000. Tutto ciò che è più grande finisce, per intero, nello scratch store cifrato e viene letto da lì parte per parte.
- **Il set completo di strumenti, il testo integrale.** L'IA desktop lavora con il set completo di strumenti e legge i testi integrali nella propria conversazione, dietro gli stessi gate della chat.
- **La chat mantiene il suo posto.** La chat integrata non richiede alcuna licenza aggiuntiva, è sempre a portata di mano — anche sul tablet — ed è il canale più strettamente controllato: pseudonimizzato, con richiesta di consenso e registrato.

## 2. Un unico set di strumenti — all'interno dell'App client

Ogni operazione che un'IA può eseguire risiede nell'App client IRONSTICK sul Suo computer — non nell'IA e non nel programma bridge.
La chat IA e ogni IA desktop connessa richiamano esattamente gli stessi strumenti. Ogni chiamata viene eseguita dall'app in esecuzione sul Suo database live, e all'IA torna solo il risultato.

- **Un unico registro degli strumenti.** Il set di strumenti è costruito da un unico e identico modulo per la chat IA e per il bridge: gli stessi strumenti, nello stesso ordine, dietro gli stessi gate. Gli strumenti sono raggruppati per argomento in set di strumenti — caso, prove, scadenze, leggi, lettere ed e-mail e altro — che l'IA apre secondo necessità.
- **Un'unica via.** Ogni chiamata di strumento, dalla chat o da un'IA desktop, passa attraverso lo stesso livello di controllo: il simbolo di attività nella barra dei menu, l'identificazione del chiamante, i gate e il passaggio dei risultati di grandi dimensioni allo scratch store. Ogni IA desktop e ogni servizio API tiene un proprio registro di ciò che ha letto, così la lettura di una non vale mai per un'altra.
- **I dati restano in IRONSTICK.** Il Suo fascicolo rimane nel database IRONSTICK sul Suo computer. Un'IA riceve solo ciò che uno strumento restituisce per la chiamata che effettua; IRONSTICK non le consegna né il database né la cartella dei dati.
- **In tempo reale a ogni chiamata.** Gli strumenti aprono il database a ogni chiamata. Una modifica che salva è ciò che la chiamata di strumento successiva vede.
- **Gira in background.** Gli strumenti vengono eseguiti in background all'interno dell'app, così il programma resta reattivo anche durante letture lunghe di fascicoli voluminosi.
- **L'app deve essere in esecuzione.** Senza l'app in esecuzione non ci sono strumenti: il programma bridge si limita a inoltrare le chiamate e risponde che IRONSTICK non è in esecuzione.
- **L'app deve essere sbloccata.** Finché nella schermata iniziale non è stato inserito il codice di sicurezza a sei cifre, a ogni chiamata di strumento di un'IA desktop viene risposto con l'avviso che l'applicazione è bloccata, e non viene restituito alcun dato. Inserisca il codice in IRONSTICK, poi ripeta la richiesta.
- **L'accesso lo concede Lei.** Il bridge serve un'IA desktop solo quando l'interruttore del connettore è attivo e quell'IA desktop è concessa in licenza. Il primo accesso ai dati da parte di una qualsiasi IA desktop dopo ogni avvio del programma apre un'unica finestra di conferma. Se approva, l'accesso resta aperto per tutte le IA desktop con licenza per il resto dell'esecuzione del programma. Se rifiuta, ogni chiamata di ogni IA desktop viene respinta per 10 minuti, e al successivo accesso dopo tale periodo Le verrà chiesto di nuovo. Questa decisione non viene salvata.

## 3. I gate — che cosa accade in background

Tra l'IA e i Suoi record si trovano dei gate integrati nel livello degli strumenti dell'App client. Sono semplice logica di programma — nessuna IA controlla un'altra IA.
Quando un gate respinge una chiamata, non viene scritto né consegnato nulla; l'IA riceve un messaggio che indica che cosa manca e la chiamata che apre il gate.
La maggior parte dei gate funziona allo stesso modo per la chat IA e per ogni IA desktop; l'ultima colonna indica dove si applica ciascuno.

| Gate | Quando scatta | Che cosa fa | Si applica a |
| --- | --- | --- | --- |
| **Consenso prima dell'IA esterna** | La prima volta in una sessione di chat in cui una richiesta deve andare a un servizio di IA esterno | Una finestra chiede se l'IA esterna può essere utilizzata. Se rifiuta, non viene inviato nulla e la chat non lo chiede di nuovo in quella sessione. | Chat IA |
| **Pseudonimizzazione** | Ogni richiesta della chat IA a un servizio di IA esterno | Nomi, società, numeri di caso e di fascicolo giudiziario, numeri di identificazione, IBAN, numeri di telefono, indirizzi e-mail e indirizzi delle parti partono come segnaposto e vengono ritradotti sul Suo computer. Date e importi restano invariati. Se l'elenco dei segnaposto non può essere costruito completamente, la richiesta non viene inviata. | Chat IA |
| **Consenso all'accesso ai dati** | La prima chiamata di strumento da parte di una qualsiasi IA desktop dopo l'avvio del programma | Compare un'unica finestra di conferma per tutte le IA desktop. Approvato: aperto per il resto dell'esecuzione del programma. Rifiutato: ogni chiamata viene respinta per 10 minuti, poi Le viene chiesto di nuovo. | Bridge |
| **Blocco all'avvio** | Ogni chiamata di strumento finché il codice di sicurezza a sei cifre non è stato inserito | Alla chiamata viene risposto con l'avviso che l'applicazione è bloccata; non viene restituito alcun dato. | Bridge |
| **Blocco delle istruzioni** | Ogni chiamata di strumento di un'IA desktop | Tutti gli strumenti, tranne la lettura delle istruzioni, la loro conferma e la richiesta della lingua di sistema, restano chiusi finché l'IA non ha letto le istruzioni e restituito alla lettera la regola contro i fatti inventati. La conferma decade 60 minuti dopo essere stata data, dopo 2 ore senza chiamate, a mezzanotte, a ogni nuova connessione e, dove IRONSTICK può vedere la registrazione della conversazione, quando l'IA desktop condensa la propria conversazione; poi l'IA deve leggere di nuovo e restituire alla lettera una parola d'ordine scelta a caso tra le regole. Nella chat IA le istruzioni vengono invece inviate con ogni richiesta. | Bridge |
| **Gate della data** | Strumenti che scrivono contenuti datati — cronaca, calendario, note giornaliere, diario giornaliero, memoria, segnalazioni di leggi e altri | La chiamata viene respinta a meno che l'IA non abbia recuperato la data e l'ora reali negli ultimi 30 minuti. | Entrambi |
| **Prima leggere il caso** | Strumenti che leggono il contenuto di un caso (cronaca, cronologia, ricerche, testi integrali e altro) e strumenti che scrivono su un caso (note, voci di cronaca, controllo dell'atto, esportazione, passaggio a un'altra IA) | Gli strumenti che leggono il contenuto di un caso vengono respinti finché l'IA non ha letto il digest di quel caso. Una nota o una voce di cronaca richiede inoltre il profilo del caso, la giurisdizione e le voci di cronaca più recenti. Un controllo dell'atto, un'esportazione o un passaggio richiede inoltre che i documenti più recenti del caso siano stati letti per intero. Il rifiuto elenca ciò che ancora non è stato letto. | Entrambi |
| **Scrivere solo da ciò che è stato letto** | Voci di memoria, modifiche a uno snake, lavoro sulle bozze, controllo dell'atto e consegna su un caso | Una voce di memoria per un caso viene accettata solo quando il digest è stato letto e ogni documento citato in essa è stato letto completamente in questa sessione. Ogni risultato di ricerca in un file di scratch reca l'avviso che i risultati di ricerca non sono lettura, con i documenti dietro i risultati ancora non letti. Una volta che l'IA ha aperto un documento della controparte o di un'autorità in un caso, su quel caso non viene scritto più nulla finché quel documento non è stato letto completamente. | Entrambi |
| **Prima il Nucleu** | Redazione, controllo e consegna di un atto | Respinto finché ogni Nucleu attuale del caso — il Nucleu del caso e il Nucleu di ogni fattispecie a cui il caso appartiene — non è stato letto nella sua versione attuale. L'ultimo round del controllo dell'atto confronta il documento con il Nucleu. | Entrambi |
| **Gate dello snake** | Nel controllo dell'atto, subito prima del round del Nucleu, quando il caso o un altro caso delle sue fattispecie ha uno snake | L'IA deve chiederLe se eseguire il round dello snake e prosegue solo dopo la Sua risposta — oppure subito, se lo ha richiesto quando ha dato l'incarico. Se risponde di sì, ogni voce dello snake deve essere risolta come adottata, respinta o non rilevante, con una motivazione. | Entrambi |
| **Prima la biblioteca giuridica** | Una ricerca web o la richiesta di una pagina web che riguarda una legge (numeri di articoli o paragrafi, nomi di codici, numeri di leggi, portali giuridici) | Respinta finché l'IA non ha cercato quella norma nella Sua biblioteca giuridica. Se la biblioteca la contiene, il web resta chiuso per quella norma e l'IA cita dalla biblioteca. Solo quando la biblioteca non ha alcun riscontro il web viene aperto per quella norma, per 15 minuti. | Entrambi |
| **Segnalare le fonti di legge — aperte, non estratti** | Una ricerca web relativa a una legge o una pagina di un portale giuridico aperta che fornisce una fonte di legge, e ogni segnalazione di una nuova fonte di legge | Ogni ulteriore risposta degli strumenti inizia con il promemoria di segnalare la fonte, finché non viene segnalata (fino a 15 minuti). Una segnalazione viene accettata solo per una pagina che l'IA stessa ha aperto con lo strumento pagine di IRONSTICK nelle ultime 24 ore. Le fonti segnalate attendono in un'unica finestra di consenso: le fonti selezionate vengono recuperate, verificate e salvate nella biblioteca, quelle deselezionate vengono rifiutate. | Entrambi |
| **Memoria solo con la Sua approvazione** | L'IA memorizza, modifica o elimina una voce di memoria | Una finestra Le mostra la voce. Viene memorizzata, modificata o eliminata solo quando Lei lo consente; le voci rifiutate vengono scartate. Finché la finestra è aperta, ogni altra chiamata di quella sessione viene respinta. Fatta eccezione per i compiti di passaggio tra IA e per le Sue note personali, l'IA legge solo le voci di memoria che ha approvato. | Entrambi |
| **Proposte invece di scritture** | L'IA vuole modificare dati anagrafici, aggiungere una persona o un'istituzione, aggiungere una relazione, compilare un'analisi della persona, unire duplicati o eliminare un record | Lo strumento non scrive nulla nei Suoi record. Inserisce una proposta nel Monitor di coerenza dei dati, dove Lei la accetta o la rifiuta. | Entrambi |
| **Documenti segreti esclusi** | Ogni strumento IA che legge documenti, media, scadenze o un intero caso, e i servizi in background che usano IA esterna (Monitor di coerenza dei dati, situazione generale) | Le voci contrassegnate come segrete vengono filtrate da ogni strumento e servizio IA e non vengono trasmesse all'IA. | Entrambi |
| **Prospettive solo dal fascicolo giudiziario** | La valutazione del caso da parte dell'IA, avviata nell'app o da un'IA desktop | La stima delle probabilità di successo si basa solo sul profilo del caso e sui documenti del caso andati al tribunale o all'autorità indicata nell'atto introduttivo, o da essi provenuti — da entrambe le parti, senza allegati. Senza un atto introduttivo o un tribunale o un'autorità riconosciuti, le prospettive sono contrassegnate come non stimabili e l'indicatore resta vuoto. | Entrambi |
| **Controllo prima della consegna** | Consegna di un documento formale come un atto | La consegna viene respinta senza un recente esito positivo del controllo deterministico dell'atto esattamente per questo stato del fascicolo; ogni modifica lo annulla. Ciò che lascia il sistema è un modello pronto per il deposito che deve rivedere e firmare. | Entrambi |

Flussi di lavoro

## Flusso di lavoro 1 — Iniziare la giornata

Iniziare la giornata risponde a tre domande prima che Lei cominci: che cosa scade, che cosa è arrivato e dove si era fermato.
Un solo passaggio produce il riepilogo di avvio della sessione con la data, i promemoria, le scadenze e gli appuntamenti dei prossimi tre giorni e i compiti aperti. Dopodiché l'IA recupera l'elenco completo delle scadenze, gli appuntamenti di oggi e ciò che è stato acquisito oggi o ieri.
Lo usi ogni mattina, e ogni volta che avvia una nuova conversazione con un'IA desktop.

![Diagramma di flusso dell'inizio della giornata: avviare IRONSTICK, approvare l'accesso ai dati, istruzioni confermate, riepilogo di avvio della sessione, domanda sulle decisioni giudiziarie aperte, poi scadenze, appuntamenti e nuove voci](https://www.ironstick.legal/img/bridge/w1_flow.png)

Un solo passaggio produce il riepilogo di avvio della sessione; scadenze, appuntamenti e nuove voci seguono su richiesta.

### Passo 0 — impostare il contesto

- **Avviare e sbloccare IRONSTICK.** Gli strumenti funzionano solo mentre l'app è in esecuzione e dopo che è stato inserito il codice di sicurezza a sei cifre.
- **Il Suo briefing personale nell'app.** Su Windows, al primo avvio della giornata viene chiesto se IRONSTICK debba farLe il briefing sulla giornata. Se risponde di sì, il briefing viene mostrato con righe cliccabili che conducono alle scadenze, al calendario, alla casella di posta, ai documenti e al caso, e viene letto anche ad alta voce.
- **IA desktop: una nuova conversazione.** Avvii una nuova conversazione nella Sua app di IA desktop. Approvi la finestra di accesso ai dati che IRONSTICK mostra al primo accesso da parte di una qualsiasi IA desktop dopo l'avvio del programma.
- **Chat IA.** Apri la chat IA in IRONSTICK; le istruzioni di lavoro vengono inviate con ogni richiesta.
- **Nessun caso necessario.** L'avvio della giornata riguarda tutti i clienti e i casi. Apra un caso solo quando la Sua domanda riguarda quel caso.

### Cosa dice — passo dopo passo

1. Avvia la sessione.

L'IA legge e conferma le proprie istruzioni, fissa la data di oggi e carica il riepilogo di avvio della sessione: promemoria, scadenze e appuntamenti dei prossimi tre giorni, compiti aperti.
2. Che cosa scade oggi e nei prossimi tre giorni?

Ottiene scadenze, udienze e appuntamenti in ordine di data, ciascuno con il proprio caso.
3. Che cosa è arrivato da ieri?

Nuove e-mail e documenti appena acquisiti, ciascuno con il caso a cui è stato assegnato.
4. Leggi la nuova e-mail nel caso [numero del caso] e dimmi che cosa mi chiede.

Prima viene letto il testo integrale; ottiene il contenuto, i punti aperti e un suggerimento per il passo successivo.
5. Scrivi nel diario giornaliero la telefonata di oggi con [persona] su [argomento].

La voce viene aggiunta al diario giornaliero di oggi con data e ora.

### Che cosa accade in background

- **Gate prima del primo strumento.** Finché il codice di sicurezza non è inserito, a ogni chiamata di strumento di un'IA desktop viene risposto con l'avviso che l'applicazione è bloccata. Il primo accesso ai dati da parte di una qualsiasi IA desktop dopo l'avvio del programma apre la finestra di consenso; se approvato, l'accesso resta aperto per tutte le IA desktop per il resto dell'esecuzione del programma. Prima che si apra qualsiasi altro strumento, l'IA desktop deve leggere le istruzioni di lavoro e restituire una regola alla lettera.
- **Avvio della sessione in un solo passaggio.** Tramite il bridge, l'apertura del set di strumenti di avvio della sessione produce il riepilogo di avvio della sessione. Data e ora, la lingua di sistema e la schermata che ha aperto tornano subito; il riepilogo completo viene collocato nello scratch store cifrato, dove l'IA lo legge.
- **Che cosa contiene il riepilogo.** I promemoria di memoria in scadenza (oggi e scaduti), che l'IA tratta per primi; per quali clienti la memoria IA condivisa contiene conoscenze; l'unica ancora di data; la lingua di sistema, che è la lingua della conversazione; la schermata attuale; l'elenco degli ultimi dieci diari giornalieri; scadenze e appuntamenti entro tre giorni, al massimo dieci righe ciascuno; compiti aperti lasciati da un'altra IA. Ogni sezione ha un limite, e una sezione limitata indica all'IA dove recuperare la versione completa.
- **Decisioni giudiziarie in attesa.** Al primo avvio di sessione della giornata, quando vi sono decisioni giudiziarie non ancora valutate, il riepilogo dice all'IA di chiederLe subito se valutarle ora. Sì: l'IA le elabora una alla volta. No: prosegue con il Suo compito.
- **L'elenco completo delle scadenze.** L'elenco delle scadenze restituisce tutto ciò che si trova nella schermata delle scadenze di IRONSTICK, ordinato per data: scadenze sui documenti, prossime udienze dai portali dei tribunali e dal calendario, e scadenze che l'IA ha impostato sulle proprie note di memoria, contrassegnate come tali. Può essere ristretto a critiche (scadute e di oggi), imminenti (fino a 10 giorni, comprese le scadute), oggi, questa settimana, la prossima settimana o una data. Tramite il bridge, l'apertura del set di strumenti delle scadenze restituisce lo stesso elenco completo più gli appuntamenti di oggi.
- **Appuntamenti.** L'elenco degli appuntamenti mostra gli appuntamenti di un giorno o di un periodo in quest'ordine: udienze dai portali dei tribunali, udienze dal calendario, poi le restanti voci del calendario.
- **Che cosa è arrivato.** Due elenchi mostrano ogni voce acquisita oggi o ieri su tutti i clienti e i casi; conta il giorno dell'acquisizione, non la data dell'evento. Tramite il bridge, l'apertura del set di strumenti di corrispondenza ed e-mail elenca i documenti registrati oggi e le e-mail in arrivo di oggi, fino a dieci ciascuno.
- **Il briefing giornaliero per l'IA.** L'IA può richiamare il contenuto del briefing giornaliero con numeri di documento e contrassegni: scadenze dei prossimi 30 giorni, quelle critiche e quelle completate oggi, udienze e appuntamenti di oggi, posta non letta, documenti acquisiti oggi, udienze di domani, compleanni, casi in fase acuta, statistiche della settimana e il diario recente dell'IA. Una verifica separata registra per ogni IA desktop se oggi è stata informata; in caso contrario restituisce i diari giornalieri più recenti e registra che è stata informata.
- **Leggere un nuovo documento.** Il lettore del testo integrale restituisce il testo integrale estratto di una voce. Le istruzioni di lavoro dicono all'IA che un titolo o una riga di elenco non prova ciò che una voce documenta: prima di affermare che cosa dice una voce, legge il testo integrale nella sessione attuale, e tiene distinto ciò che la fonte documenta da ciò che una parte o un'inferenza suggerisce.
- **Domande su un caso.** La cronaca di un caso, le sue scadenze e il suo calendario sono contenuto del caso: vengono respinti finché l'IA non ha letto il digest di quel caso e poi la sua memoria del caso. Gli elenchi globali su tutti i casi sono aperti senza di essi. La cronaca può essere filtrata per data; una data corrisponde alla data della voce o alla data del documento.
- **Proposta di mostrarlo in IRONSTICK.** Dopo un elenco di scadenze o appuntamenti, l'IA può offrirsi di aprire la voce nella finestra di IRONSTICK. Naviga solo dopo il Suo consenso, e solo quando il controllo del programma è attivato nella configurazione IA.

## Flusso di lavoro 2 — Regole generali di conversazione

Queste regole valgono per ogni conversazione con l'IA, nella chat integrata e tramite il bridge: come inizia una sessione, quale lingua parla l'IA, da dove possono provenire i suoi fatti e come verifica le sue fonti.
Ogni regola è accompagnata dalla frase che usa per applicarla: istruzioni lette e confermate, risposte che indicano le proprie fonti, testi integrali letti fino in fondo prima di una risposta.
Lo legga prima della Sua prima vera sessione di lavoro; le stesse regole sorreggono ogni altro flusso di lavoro.

![Diagramma di flusso: avvio della sessione, conferma delle istruzioni, indicazione del caso, lettura del digest e dei testi integrali fino in fondo, risposta con i numeri di prova, verifica delle fonti](https://www.ironstick.legal/img/bridge/w2_flow.png)

Una conversazione fondata: l'IA conferma le proprie istruzioni, legge ogni documento fino in fondo, risponde con numeri di prova, e Lei verifica personalmente le fonti.

### Passo 0 — impostare il contesto

- **Avviare prima IRONSTICK e sbloccarlo.** Senza l'app in esecuzione il bridge risponde che IRONSTICK non è in esecuzione; prima che il codice di sicurezza a sei cifre sia inserito, a ogni chiamata di strumento viene risposto con l'avviso che l'applicazione è bloccata.
- **Avviare la sessione.** Nella Sua IA desktop inizi una nuova conversazione e le chieda di avviare la sessione. L'apertura del set di strumenti di avvio della sessione produce il riepilogo di avvio della sessione: la data, la lingua di sistema, la schermata che ha aperto, i promemoria in scadenza, le decisioni giudiziarie aperte da valutare, scadenze e appuntamenti dei prossimi tre giorni, gli ultimi dieci diari giornalieri e i compiti di passaggio aperti.
- **Guardare il simbolo dell'IA nella barra superiore.** Il suo menu a tendina mostra, per un'IA desktop, se le istruzioni sono confermate (spunta verde o croce rossa), quante volte sono state lette e quante violazioni delle regole sono avvenute; per ogni caso toccato dall'IA mostra profilo, giurisdizione e digest come letti o non letti, e una barra dei documenti letti.
- **Nella chat integrata** le istruzioni di lavoro fanno parte di ogni richiesta; non c'è nulla da confermare. Prima che la prima richiesta vada a un servizio di IA esterno, IRONSTICK chiede il Suo consenso.
- **Fornire il riferimento più preciso che ha.** Un numero di prova vale più di un nome, un nome vale più di una parola chiave, e un numero di caso dice all'IA quale fascicolo leggere.

Avvia la sessione. Poi leggi il digest e la memoria del caso [numero del caso] e dimmi che cosa è aperto.

### Le regole — e che cosa dire per usarle

1. Avvia la sessione.

Regola 1 — l'IA legge e conferma le proprie istruzioni prima di toccare qualsiasi dato del caso, e risponde nella Sua lingua di sistema.
2. Cita la regola [numero] delle tue istruzioni.

Regola 2 — ogni regola può essere mostrata alla lettera, così Lei può farla rispettare all'IA.
3. Quale documento lo dice? Dammi il numero di prova.

Regola 3 — ogni affermazione reca la propria fonte; un clic sul numero apre il documento.
4. Leggi [#numero di prova] per intero prima di rispondere.

Regola 4 — titoli e brevi descrizioni non sono fatti; la risposta poggia sul testo integrale.
5. Separa ciò che è provato da ciò che è solo sospettato.

Regola 5 — l'IA contrassegna come tali valutazioni e sospetti e afferma solo ciò che le fonti documentano.
6. Leggi tutto il documento, non solo i risultati della ricerca.

Regola 6 — i documenti lunghi vengono letti fino in fondo; l'IA segnala quando ogni riga è stata letta.

### Che cosa accade in background

- **Blocco delle istruzioni (bridge).** Finché l'IA desktop non ha letto le istruzioni di lavoro e restituito alla lettera la regola contro i fatti inventati, ogni strumento viene respinto, tranne la lettura delle istruzioni, la loro conferma e la richiesta della lingua di sistema. È l'IA che ha letto a doverle confermare; una conferma data in un'altra conversazione non le apre il blocco.
- **Rilettura.** La conferma decade 60 minuti dopo essere stata data, dopo due ore senza chiamate, a mezzanotte e a ogni nuova connessione; dove IRONSTICK può vedere il registro di conversazione dell'IA desktop, anche quando l'IA desktop condensa quella conversazione. Allora l'IA legge di nuovo e restituisce alla lettera una regola scelta a caso — una breve pausa, non un guasto.
- **Salvaguardie delle regole.** La logica di programma sorveglia le scorciatoie, ad esempio chiamare strumenti prima di leggere le istruzioni o spostare un file aggirando la via di consegna. Quando ne viene rilevata una, ogni strumento viene bloccato e ne viene indicato il motivo; a seconda del conteggio, l'IA recita la regola contro i fatti inventati oppure rilegge le istruzioni e restituisce la regola che il rifiuto indica. Il conteggio è visibile nel menu a tendina sul simbolo dell'IA.
- **Una sola lingua di conversazione.** L'IA risponde nella lingua di sistema di IRONSTICK per tutta la sessione, qualunque sia la lingua in cui scrive. Atti, e-mail giudiziarie e voci di cronaca sono redatti nella lingua della giurisdizione del caso; il diario giornaliero nella lingua della conversazione.
- **Fatti dagli strumenti, da questa sessione.** Le istruzioni ammettono fatti del caso solo dagli strumenti IRONSTICK, recuperati nella sessione attuale — non dalla memoria dell'IA, da messaggi precedenti, dai dati di addestramento, da file scaricati o da un altro connettore. Ciò che non può essere recuperato viene indicato come lacuna, mai riempito per inferenza.
- **Prima la ricerca.** All'IA viene detto di non chiedere mai ciò a cui gli strumenti possono rispondere: dato un numero di caso, legge invece di chiedere quale fascicolo intende.
- **Titoli e riassunti non sono fatti.** Prima che l'IA affermi che cosa documenta una voce, deve leggere il testo integrale della voce nella sessione attuale; ciò che un titolo, una parte o un'inferenza suggerisce va contrassegnato come sospetto. Una voce senza testo estratto non dà luogo ad alcuna affermazione di merito.
- **I risultati di ricerca non sono lettura.** Ogni risultato di ricerca all'interno di un file di scratch reca l'avviso che i risultati non sono lettura, con i documenti dietro i risultati ancora non letti. Per gli estratti completi di un caso, un avviso di copertura di lettura nomina ogni file non letto fino in fondo, con la sua percentuale e gli intervalli di righe non letti; ricompare nelle risposte successive finché le lacune non sono lette.
- **Lo stato di lettura nelle risposte.** Quando i numeri di lettura cambiano, le risposte degli strumenti riportano gli stessi numeri che vede nel menu a tendina sul simbolo dell'IA, con l'istruzione di non definire mai un caso, le sue prove o la sua memoria come completamente letti, a meno che questi numeri non lo mostrino.
- **Prima leggere il digest e la memoria.** Il contenuto del caso è disponibile solo dopo che il digest del caso è stato letto; per un compito su un caso si legge prima la memoria completa del caso.
- **Solo la lettura propria.** Per la valutazione del caso, IRONSTICK verifica ogni lettura rispetto al registro di conversazione dell'IA desktop stessa; ciò che hanno letto gli agenti ausiliari non conta.
- **Fonti verificabili.** L'IA nomina ogni documento con il proprio numero di prova. Nella chat integrata, un numero diventa un link solo quando quella voce esiste nei Suoi record e non è né eliminata né segreta; un clic la apre nella cronaca del caso. Un numero senza una tale voce resta testo semplice. In un'IA desktop, cerchi il numero in IRONSTICK oppure chieda all'IA di leggere quella voce per intero.
- **Le leggi dalla biblioteca.** Le leggi vengono verificate prima nella Sua biblioteca giuridica; il web si apre per una norma solo quando la biblioteca non ha alcun riscontro, e solo le pagine aperte tramite lo strumento pagine di IRONSTICK contano come lette.
- **Le scritture datate richiedono la data di oggi.** Gli strumenti che scrivono contenuti datati vengono respinti a meno che l'IA non abbia recuperato la data e l'ora reali negli ultimi 30 minuti. Nel bridge le risposte dell'IA iniziano con tale data.
- **Dopo una conversazione lunga.** Le letture restano conteggiate per il loro caso quando l'IA desktop condensa la propria conversazione; il Nucleu di un caso deve essere letto di nuovo. Per riprendere un caso, l'IA può caricare digest, Nucleu, memoria del caso e snake in un unico file di lavoro.
- **Documenti di grandi dimensioni.** Le risposte di grandi dimensioni degli strumenti finiscono, per intero, nello scratch store cifrato e vengono lette parte per parte, con la copertura di lettura tracciata riga per riga.

## Flusso di lavoro 3 — Valutazione del caso

La valutazione del caso è la visione dell'IA, da analista senior, di un caso, salvata in IRONSTICK e mostrata nella scheda Valutazione IA del caso.
Le probabilità di successo vengono stimate solo dal fascicolo giudiziario: ciò che è andato al tribunale o all'autorità indicata nell'atto introduttivo, o da essi proviene.
Le sezioni descrittive attingono all'intero fascicolo IRONSTICK e ai casi contigui del cliente.
La usi quando un caso è andato avanti, quando l'ultima valutazione è vecchia, o quando vuole che un'IA desktop faccia una nuova valutazione con gli stessi criteri dell'app.

![Diagramma di flusso di una nuova valutazione del caso da parte dell'IA: ultima valutazione e digest, poi sei fasi verificate dall'atto introduttivo alla valutazione salvata, con il ramo per un caso senza tribunale o autorità riconosciuti](https://www.ironstick.legal/img/bridge/w3_flow.png)

Una nuova valutazione del caso attraversa sei fasi, e IRONSTICK verifica ogni fase prima di consegnare la successiva.

### Passo 0 — impostare il contesto

- **Aprire il caso o nominarlo.** Apra il caso in IRONSTICK: l'IA può vedere quale schermata e quale caso ha aperto. Può anche indicare il numero del caso; l'IA trova il caso dal suo numero.
- **L'atto introduttivo deve essere nel fascicolo.** La previsione richiede il documento che ha dato inizio al procedimento, ad esempio l'atto di citazione, memorizzato con il suo testo estratto. Può trovarsi anche in un altro caso dello stesso cliente, come il caso da cui questo è stato separato.
- **Il tribunale deve essere registrato.** IRONSTICK riconosce il tribunale o l'autorità solo se è registrato tra le Sue istituzioni e il suo nome compare nell'indirizzo dell'atto introduttivo. Se manca, l'indicatore di successo resta vuoto.
- **Nell'app o tramite un'IA desktop.** Nella scheda Valutazione IA dell'app possono essere valutati solo i casi con stato Attivo. Un'IA desktop può valutare qualsiasi caso, qualunque sia il suo stato e anche quando non è arrivato nulla di nuovo.

### Cosa dice — passo dopo passo

1. Apri il caso [numero del caso] e dammi lo stato dell'ultima valutazione.

L'IA carica il caso e riassume la valutazione salvata, compresa la sua data.
2. Fai una nuova valutazione del caso [numero del caso].

Il fascicolo giudiziario viene assemblato, i documenti vengono letti e la valutazione viene scritta in fasi fisse; il risultato compare nella scheda Valutazione IA.
3. Perché le probabilità di successo non sono più alte?

Ottiene i punti del fascicolo giudiziario che pesano contro di Lei, ciascuno con il proprio numero di prova.
4. Quali documenti del mio fascicolo sarebbero utili ma non sono ancora davanti al tribunale?

L'IA confronta tutto il Suo fascicolo con il fascicolo giudiziario e indica che cosa vi manca ancora.
5. Tieni conto di [#numero di prova] e valuta di nuovo.

Il Suo commento viene trasmesso e la valutazione viene rinnovata tenendone conto.

### Che cosa accade in background

- **Prima l'ultima valutazione.** Il lettore delle valutazioni restituisce la valutazione più recente del caso. La sua prima riga è la data, l'età e se si trattava di una valutazione completa o di un aggiornamento, e all'IA viene detto di dichiarare quando è stata fatta l'ultima valutazione. Come ogni strumento che legge il contenuto di un caso, viene respinto finché l'IA non ha letto il digest del caso e, dopo, la memoria del caso.
- **Uno strumento, sei fasi.** Un'IA desktop fa una nuova valutazione solo con lo strumento di valutazione dedicato. Ogni chiamata restituisce solo la fase attuale; la fase successiva viene consegnata solo dopo che IRONSTICK ha verificato quella attuale. Nessuna fase può essere saltata. Se l'app sta valutando lo stesso caso in quel momento, lo strumento rifiuta finché l'app non ha finito.
- **Fase 1 — atto introduttivo.** L'IA legge i PDF del caso, a partire dal più vecchio, e segnala l'atto introduttivo come certo, incerto o «nessuno trovato». Verificato: ogni documento segnalato appartiene a questo cliente ed è stato letto per intero in questa sessione; «nessuno trovato» è accettato solo quando ogni PDF del caso è stato letto per intero. Un documento segnalato come certo viene memorizzato per le valutazioni successive.
- **Gate: fascicolo giudiziario.** IRONSTICK cerca un tribunale o un'autorità registrati tra le Sue istituzioni nell'indirizzo in testa alla prima pagina dell'atto introduttivo, oppure come destinatario su quella pagina. Il fascicolo giudiziario è allora costituito dall'atto introduttivo e da ogni documento in entrata e in uscita del caso la cui controparte è quel tribunale o quell'autorità — da entrambe le parti, senza allegati e senza voci segrete o eliminate.
- **Fase 2 — stato del fascicolo giudiziario e previsione.** L'IA deve leggere personalmente per intero ogni documento del fascicolo giudiziario e poi consegnare la sezione della previsione: una percentuale, la sua fascia (chiaramente perso, piuttosto perso, aperto, piuttosto vinto, chiaramente vinto), lo stato del fascicolo giudiziario, lo stato delle prove, la domanda principale, le altre domande, la variazione rispetto alla previsione precedente e la motivazione. Verificato: ogni documento del fascicolo giudiziario è stato letto; la percentuale rientra nella sua fascia; ogni riga è presente; lo stato del fascicolo giudiziario e la motivazione citano solo documenti del fascicolo giudiziario; queste righe sono scritte nella lingua di sistema; uno scostamento di oltre 10 punti dalla previsione precedente nomina i nuovi documenti che lo giustificano.
- **Nessun fascicolo giudiziario — che cosa dice l'IA a Lei.** Senza un atto introduttivo, o senza un tribunale o un'autorità riconosciuti nel suo indirizzo, non c'è alcun fascicolo giudiziario. IRONSTICK dice allora all'IA di informarLa subito, nella lingua della conversazione e prima di proseguire, che non viene fatta alcuna previsione e che l'indicatore di successo resta vuoto — indicando il motivo e, se esiste, l'atto introduttivo. La fase passa quindi con il solo caso, e lo stato del fascicolo IRONSTICK prende il posto della previsione.
- **Fasi 3 e 4 — lettura.** La fase 3 elenca i PDF in entrata e in uscita più recenti del caso e l'atto introduttivo memorizzato; la fase 4 elenca ogni documento degli altri casi del cliente collegato a questo caso. Ognuno deve essere letto per intero; riassunti, titoli e risultati di ricerca non sono lettura. Un risultato finito nello scratch store conta solo quando ogni sua parte è stata letta.
- **Stato di lettura.** IRONSTICK tiene un registro di lettura per caso: quanti documenti del caso l'IA ha letto per intero e se ha letto il digest e la memoria del caso. Sono gli stessi numeri che vede, e vengono forniti con le risposte ogni volta che cambiano. All'IA viene detto che sono l'unica base valida per qualsiasi affermazione su ciò che ha letto, e che può definire un caso o i suoi documenti «completamente letti» solo quando i numeri lo mostrano.
- **Conta solo la lettura propria dell'IA.** IRONSTICK verifica ogni lettura rispetto al registro di conversazione di quella IA desktop; ciò che hanno letto sub-agenti o agenti paralleli non viene conteggiato. Dove il registro di conversazione di una connessione non può essere visto, la risposta lo dice, e all'IA viene detto di informarLa che questo controllo non è stato possibile.
- **Fase 5 — digest dei fatti.** L'IA consegna il proprio digest con i titoli fatti essenziali, fatti documentati e citazioni chiave, contraddizioni, lacune e scadenze mancate, riferimenti tra casi e destinatari. Verificato: ogni titolo è presente e compilato; i fatti essenziali citano documenti; ogni caso contiguo è nominato; ogni documento citato è stato letto per intero.
- **Fase 6 — redazione.** Solo ora l'IA riceve le regole di redazione. Le sezioni sono base del procedimento, stato del fascicolo IRONSTICK, nota critica, punti di forza, rischi, interconnessione tra casi e, quando IRONSTICK ha trovato casi correlati di altri clienti, tali casi come ultima sezione. Lo stato del fascicolo IRONSTICK poggia sul digest di ogni documento, e l'IA legge per intero ogni documento che conta. Verificato: le sezioni e il loro ordine; la base del procedimento nomina l'atto introduttivo; al massimo sei punti ciascuno sotto punti di forza e rischi; ogni documento citato esiste nei fascicoli di questo cliente o nel materiale, non è segreto né eliminato ed è stato letto per intero; la sezione tra casi nomina ogni caso contiguo.
- **Rifiuto.** Quando una verifica non riesce, la risposta inizia con REJECTED e un elenco numerato di errori. Nulla avanza e nulla viene salvato; l'IA corregge esattamente quei punti e richiama. Una parte consegnata alla fase sbagliata viene respinta. L'IA può riavviare la catena dalla fase 1 con materiale nuovo, e anche un riavvio dell'app la fa ripartire da capo.
- **Salvataggio.** Quando la fase 6 è accettata, IRONSTICK inserisce la previsione della fase 2 dopo la base del procedimento, dove esiste un fascicolo giudiziario, e salva la valutazione come nuova valutazione completa. Mostra poi il caso nella sua scheda Valutazione IA, e all'IA viene detto di dirLe che la nuova valutazione è salvata.
- **Nella scheda Valutazione IA.** Lo stato del fascicolo giudiziario si trova accanto all'indicatore di successo con la fascia, lo stato delle prove, la domanda principale e le altre domande. Senza un fascicolo giudiziario, lo stato del fascicolo IRONSTICK passa al secondo posto e l'indicatore accanto resta vuoto.
- **La valutazione nell'app.** Nella scheda stessa richiede una valutazione per un caso attivo. La scheda chiede il consenso prima di usare un servizio di IA esterno; l'esecuzione prosegue poi in background, anche se cambia scheda o schermata, attraverso il riconoscimento del testo dei nuovi documenti, la ricerca, la redazione e la previsione. Una valutazione esistente può essere aggiornata entro un giorno dall'ultima rivalutazione completa, al massimo tre volte di seguito. Quando dall'ultima valutazione non è arrivato nulla di nuovo, la rivalutazione si apre solo dopo che ha scritto un commento di almeno tre parole nel campo delle obiezioni.

## Flusso di lavoro 4 — Creare un Nucleu

Un Nucleu è l'indirizzo vincolante di un caso: la linea argomentativa di fondo, i fatti e le prove guida, ciò che deve essere detto e ciò che non deve mai essere detto.
Esiste su due livelli — una volta per un'intera fattispecie, valido per ogni caso che ne fa parte, e una volta per il singolo caso — e ogni documento che l'IA redige per il caso è subordinato ad esso.
Il momento migliore per crearlo è subito dopo una valutazione del caso, quando l'intero caso è ancora nel contesto di lavoro dell'IA.
L'IA lo redige, IRONSTICK Le mostra ogni modifica e solo la Sua approvazione lo memorizza come nuova versione.

![Diagramma di flusso: dopo la valutazione del caso ordini un Nucleu per una fattispecie o per un singolo caso; l'IA lo redige entro 20.000 caratteri e lo propone; Lei accetta o rifiuta la modifica nella finestra di revisione; una modifica accettata viene memorizzata come nuova versione, che l'IA deve leggere prima di ogni atto e con cui il round finale della catena di verifica controlla il documento.](https://www.ironstick.legal/img/bridge/w4_flow.png)

L'IA redige e propone, Lei accetta; ogni modifica accettata diventa una nuova versione che guida ogni atto successivo.

### Passo 0 — impostare il contesto

- **Scegliere il momento.** Chieda il Nucleu subito dopo una valutazione del caso. La valutazione fa leggere all'IA il digest, i testi integrali, la memoria del caso ed eventuali Nucleu e snake già esistenti; finché tutto questo è ancora nel suo contesto di lavoro, l'indirizzo può essere ricavato dall'intero caso anziché da pochi documenti.
- **Scegliere il livello.** Un *Nucleu della fattispecie* appartiene a una fattispecie (un gruppo di casi nell'elenco dei casi) e vale per ogni caso che ne fa parte. Un *Nucleu del caso* vale per un solo caso e adatta l'indirizzo a quel caso. Un caso è retto dal proprio Nucleu e dal Nucleu di ogni fattispecie a cui appartiene; il Nucleu del caso non deve quindi contraddire la linea della fattispecie.
- **Dove lo trova.** Nella schermata del caso, la scheda con il simbolo dell'atomo (*Nucleu del caso*) contiene in alto il Nucleu del caso modificabile e, sotto, in sola lettura, il Nucleu di ogni fattispecie a cui il caso appartiene. Nell'elenco dei casi, il pulsante con l'atomo nella barra del titolo di una fattispecie apre il suo Nucleu della fattispecie. Ogni Nucleu reca il proprio identificativo, ad esempio *#KI00041 · v3*; un clic lo copia, così può incollarlo nella chat.
- **Che cosa vi rientra.** L'indirizzo e nient'altro: la tesi guida, il posto del caso nella controversia più ampia, le parti, le tesi della controparte e le risposte ad esse, come valutare le prove future e le linee che non devono essere oltrepassate. I fatti entrano come storia documentata; lo stato attuale del caso viene letto ogni volta dal digest.
- **Che cosa non vi rientra.** Promemoria, note, attività da svolgere, cronologia delle sessioni, questioni aperte e riflessioni di lavoro appartengono alla memoria del caso. Le dichiarazioni non veritiere della controparte e le sue contraddizioni appartengono allo snake.
- **Dimensione.** Al massimo 20.000 caratteri per Nucleu. Il contatore accanto al testo mostra la lunghezza e diventa rosso oltre il limite. Se l'indirizzo richiede più spazio, mantenga la linea comune nel Nucleu della fattispecie e inserisca ciò che è specifico di un solo caso nel Nucleu di quel caso, con lo stesso limite.
- **Scriverlo personalmente.** Può anche digitare o correggere un Nucleu direttamente nella scheda o nella finestra della fattispecie e premere *Salva*; ogni salvataggio è una nuova versione.

### Cosa dici — passo dopo passo

1. Crea il Nucleu per il caso [numero del caso] a partire da questa valutazione.

L'IA ricava l'indirizzo dal caso che ha appena letto e apre la sua proposta nella scheda *Nucleu del caso*, dove Lei la accetta o la rifiuta.
2. Crea un Nucleu per la fattispecie [fattispecie]: la linea di fondo che vale per ogni caso che ne fa parte.

L'IA redige il Nucleu della fattispecie e lo mostra nella finestra della fattispecie; una volta accettato, vale per ogni caso della fattispecie e compare in sola lettura in ciascuno di essi.
3. Quanto è lungo ogni Nucleu del caso [numero del caso] e che cosa potrebbe passare al Nucleu della fattispecie?

L'IA legge il Nucleu del caso e ogni Nucleu della fattispecie del caso e misura ciascuno rispetto al limite di 20.000 caratteri.
4. Aggiorna il Nucleu del caso [numero del caso]: non sosteniamo più [punto].

L'IA spiega nella chat che cosa vuole modificare e perché, poi propone solo i passaggi modificati; Lei li vede in grassetto rosso e una modifica accettata diventa la versione successiva.
5. Leggimi il Nucleu attuale del caso [numero del caso], con il Nucleu di ogni fattispecie.

L'IA carica l'insieme completo nelle sue versioni attuali, ciascuna con il proprio identificativo, ad esempio #KI00041 · v3.
6. Questa bozza contraddice il Nucleu?

L'IA confronta la bozza punto per punto con ogni Nucleu che si applica al caso e nomina ogni scostamento; in un atto, questo confronto è il round finale della catena di verifica.

### Che cosa accade in background

- **Un solo percorso di scrittura, con la Sua approvazione.** L'IA propone un Nucleu tramite un unico strumento dedicato: la prima versione di un Nucleu del caso tramite il caso, la prima versione di un Nucleu della fattispecie tramite la fattispecie (presa dall'elenco delle fattispecie), ogni modifica successiva tramite il numero del Nucleu. Le modifiche all'interno del testo vengono inserite come sostituzioni mirate; all'IA viene detto di non riscrivere mai l'intero Nucleu e di spiegare nella chat che cosa vuole modificare e perché prima di proporlo.
- **La finestra di revisione.** Per un Nucleu del caso IRONSTICK apre il caso sulla scheda *Nucleu del caso*; per un Nucleu della fattispecie la finestra compare sopra la schermata corrente. Mostra l'intero testo con ogni modifica in grassetto rosso, le cancellazioni barrate e i pulsanti *Rifiuta* e *Consenti*. È aperta una sola revisione di Nucleu alla volta. Se impiega più di circa un minuto, all'IA viene comunicato che la revisione è ancora aperta ed essa non la invia di nuovo; la Sua approvazione successiva memorizza comunque la versione.
- **Controllo della dimensione.** Una proposta superiore a 20.000 caratteri viene respinta prima di raggiungerLa, con l'istruzione di limitarsi al Nucleu guida e di collocare l'indirizzo specifico del caso nel Nucleu del caso o l'indirizzo comune nel Nucleu della fattispecie.
- **Data corrente.** Come ogni scrittura datata, una proposta di Nucleu richiede la data corrente rilevata negli ultimi 30 minuti.
- **Versioni, mai sovrascritte.** Ogni proposta accettata e ogni salvataggio nella scheda viene memorizzato come nuova riga con il numero di versione successivo; il numero *#KIxxxxx* resta lo stesso per tutte le versioni e la versione più alta è quella corrente. Un testo invariato non crea una nuova versione. Quando una fattispecie viene eliminata, il suo Nucleu viene nascosto e le sue versioni vengono conservate.
- **Come lo legge l'IA.** Una sola chiamata con il caso restituisce l'intero insieme: il Nucleu del caso e il Nucleu di ogni fattispecie del caso, ciascuno con la propria intestazione *#KIxxxxx · vN*, completo, e indica i livelli che non ne hanno ancora uno. Il Nucleu si trova inoltre in cima al digest del caso, al briefing del caso e al pacchetto di ripresa. Un elenco di inventario mostra ogni Nucleu senza testi integrali; aprendo il toolset delle istruzioni per l'IA si vede l'inventario dei Nucleu del caso aperto.
- **Rileggere dopo ogni modifica.** IRONSTICK registra quale versione di ciascun Nucleu l'IA ha letto. Una nuova versione, o l'IA desktop che condensa la propria conversazione, rende nulla la lettura precedente.
- **Dove produce effetto.** Il Nucleu guida ogni atto attraverso il [Flusso di lavoro 6 — Redigere un atto](#w6). Lì, il gate del Nucleu rifiuta di scrivere, controllare e consegnare un documento del caso finché ogni Nucleu applicabile — il Nucleu del caso e ogni Nucleu della fattispecie — non è stato letto nella sua versione corrente; anche il formato vincolante del documento viene fornito solo dopo che ogni Nucleu del caso è stato letto. Al termine della catena di verifica arriva il round del Nucleu: il documento viene confrontato con il Nucleu punto per punto, ogni scostamento viene corretto o risolto, una contraddizione non può mai essere respinta e quella che non può essere eliminata viene contrassegnata come conflitto. Un conflitto ferma il lavoro su quel documento finché non è stato avvertito in dettaglio e non ha deciso se il documento viene corretto o lo scostamento rimane.
- **Nella valutazione del caso.** Quando viene eseguita una valutazione, ogni Nucleu esistente del caso fa parte del suo contesto come indirizzo vincolante, citato con il proprio identificativo.

## Flusso di lavoro 5 — Costruire lo snake

Lo snake è il registro delle dichiarazioni della controparte provate non veritiere, e delle sue contraddizioni, in un caso. Ogni voce fissa il luogo della dichiarazione — documento, data, caso e pagina — ed elenca ogni documento che la smentisce.
Lo costruisce in due modi: con una ricerca mirata in uno o più casi, o in documenti che indica; oppure nel mezzo di una qualsiasi conversazione, nel momento in cui emerge una contraddizione o una dichiarazione non veritiera della controparte.
IRONSTICK controlla ogni riga rispetto ai Suoi registri, Lei approva ogni versione e in ogni atto successivo le voci dello snake vengono offerte come argomenti contro la controparte.

![Diagramma di flusso: un incarico di ricerca o una contraddizione trovata in una conversazione porta l'IA a leggere il caso e lo snake attuale; se il punto è già registrato la voce viene ampliata, altrimenti viene scritta una nuova voce; il testo completo dello snake viene proposto, controllato riga per riga rispetto ai registri e mostrato a Lei; una modifica accettata viene memorizzata come nuova versione, mostrata nel caso e nella sua fattispecie e utilizzata nel round dello snake della catena di verifica.](https://www.ironstick.legal/img/bridge/w5_flow.png)

Dal reperimento alla voce memorizzata: prima leggere, mai registrare due volte, ogni riga controllata rispetto ai registri, la Sua approvazione per ogni versione.

### Passo 0 — impostare il contesto

- **Ricerca mirata.** Indichi i casi, o i documenti, in cui l'IA deve cercare dichiarazioni della controparte che i registri smentiscono. Un buon momento è subito dopo una valutazione del caso o una lettura completa del caso, quando gli atti sono ancora nel contesto di lavoro dell'IA. Le chieda di gettare la rete in modo ampio; lo snake contiene solo ciò che i documenti provano.
- **Durante una qualsiasi conversazione.** Quando mentre lavora a qualcos'altro emerge una contraddizione o una dichiarazione non veritiera della controparte, dica all'IA di aggiungerla allo snake se non vi è ancora. Essa controlla prima lo snake attuale e amplia una voce esistente anziché registrare il punto due volte.
- **Uno snake per caso.** Uno snake appartiene a un solo caso. Una fattispecie non ha uno snake proprio; mostra gli snake di tutti i suoi casi.
- **Dove lo trova.** Nella schermata del caso, la scheda con il simbolo del serpente a destra della scheda del Nucleu (*Snake del caso*) contiene lo snake di quel caso con il proprio identificativo, ad esempio *#SN00004 · v2*, e un contatore di caratteri. Nell'elenco dei casi, il pulsante dello snake nella barra del titolo di una fattispecie apre *Snake della fattispecie*: gli snake di tutti i suoi casi nell'ordine dell'elenco; un clic su un caso lo apre sulla scheda *Snake del caso*.
- **Dimensione.** Al massimo 20.000 caratteri per snake del caso. Il contatore diventa rosso oltre il limite. Limita ogni voce al luogo, a una breve descrizione e alle sue righe di riferimento.
- **Che cosa vi rientra.** Solo dichiarazioni della controparte provate non veritiere, e le sue contraddizioni. Sospetti, strategia e promemoria non vi rientrano; i promemoria vanno nella memoria del caso e le dichiarazioni non veritiere della controparte vanno solo nello snake, mai nella memoria.

**Il formato delle voci.** Le voci sono separate da una riga vuota. La prima riga è il luogo della dichiarazione; poi la descrizione; poi ogni documento collegato su una riga propria, che inizia con una freccia:

`#0004417 · 12.10.2026 · CaseID 19 · p. 2 top`

`Memoria difensiva in appello, controparte B: i tribunali hanno già deciso con effetto definitivo la proprietà degli impianti. Non veritiero: entrambe le sentenze rimettono espressamente la proprietà al giudizio di merito, e la controparte B ha detto lo stesso nell'udienza precedente.`

`→ #0003304 · 18.07.2026 · CaseID 19 · p. 5 middle`

`→ #0000586 · 25.04.2026 · CaseID 8 · p. 9 top`

`→ #0001127 · 24.06.2026 · CaseID 8 · p. 15 bottom`

Ogni riga di riferimento si legge così: numero di prova a sette cifre · la data del documento come la registra IRONSTICK (GG.MM.AAAA) · il CaseID di quel documento · la pagina e la posizione su di essa (in alto, al centro o in basso, in una qualsiasi delle lingue di sistema), oppure un trattino per le prove senza pagine. Quando una dichiarazione non veritiera o una contraddizione è distribuita su più documenti, ognuno di essi ha la propria riga di riferimento: la dichiarazione, la contro-dichiarazione e ogni prova intermedia. Può anche digitare o correggere voci direttamente nella scheda e premere *Salva*; ogni salvataggio è una nuova versione.

### Cosa dici — passo dopo passo

1. Costruisci lo snake del caso [numero del caso] dall'intero fascicolo.

L'IA legge il caso e ogni documento che smentisce la controparte, poi propone lo snake nella scheda *Snake del caso*, con ogni riga controllata rispetto ai Suoi registri.
2. Cerca nei documenti [numeri di prova] dichiarazioni non veritiere della controparte e aggiungile allo snake del caso [numero del caso].

L'IA legge integralmente proprio questi documenti e inserisce solo le dichiarazioni che i Suoi registri smentiscono, ciascuna con i documenti che la smentiscono.
3. Costruisci gli snake di tutti i casi della fattispecie [fattispecie]. Getta la rete in modo ampio.

L'IA lavora caso per caso, uno snake per caso; la finestra della fattispecie li mostra poi tutti nell'ordine dell'elenco dei casi.
4. Questa contraddizione è già nello snake del caso [numero del caso]?

L'IA legge lo snake attuale e Le dice se il punto è già registrato e in quale voce.
5. Aggiungi questa contraddizione della controparte allo snake se non vi è ancora.

L'IA legge lo snake attuale, amplia la voce esistente o ne scrive una nuova con ogni documento che smentisce su una riga propria, e Le mostra la modifica da accettare.
6. Quali snake abbiamo per il cliente [cliente]?

L'IA elenca ogni snake dei casi del cliente con identificativo, versione e numero di voci.

### Che cosa accade in background

- **Prima leggere.** Se il caso ha già uno snake, una modifica viene accettata solo dopo che l'IA ha letto in questa sessione la sua versione attuale, e di nuovo dopo che l'IA desktop ha condensato la propria conversazione. Un caso senza snake accetta direttamente le prime voci. All'IA viene detto di controllare che il punto non sia già registrato e di ampliare la voce esistente anziché inserirla due volte.
- **Scrivere solo da ciò che è stato letto.** Una volta che l'IA ha aperto un documento della controparte o di un'autorità nel caso, una modifica allo snake viene rifiutata finché quel documento non è stato letto per intero.
- **Ogni volta il testo intero.** L'IA propone lo snake completo, compresa la sua aggiunta; le scritture parziali (aggiunta in coda o sostituzioni mirate) vengono rifiutate, così ogni proposta viene fatta avendo sott'occhio l'intero registro. Una proposta superiore a 20.000 caratteri viene respinta prima di raggiungerLa.
- **Ogni riga controllata rispetto ai registri.** Prima che la proposta venga mostrata, IRONSTICK controlla ogni voce: la prima riga nella forma richiesta, una descrizione, almeno una riga di riferimento, nessuna descrizione dopo le righe di riferimento; e per ogni riga di riferimento che la prova esista, appartenga al CaseID indicato, rechi esattamente quella data del documento, appartenga allo stesso cliente del caso e che la pagina rientri nel PDF memorizzato. In caso di errore non viene proposto nulla; l'IA riceve l'elenco degli errori, voce per voce, e li corregge.
- **La finestra di revisione.** IRONSTICK apre il caso sulla scheda *Snake del caso* e mostra l'intero testo con ogni modifica in grassetto rosso, con i pulsanti *Rifiuta* e *Consenti*. Se impiega più di circa un minuto, all'IA viene comunicato che la revisione è ancora aperta ed essa non la invia di nuovo; la Sua approvazione successiva memorizza comunque la versione.
- **Versioni, mai sovrascritte.** Ogni proposta accettata e ogni salvataggio nella scheda diventa una nuova versione con lo stesso numero *#SNxxxxx*; un testo invariato non crea una nuova versione.
- **Come lo legge l'IA.** L'IA può leggere lo snake di un caso, gli snake di tutti i casi di una fattispecie nell'ordine dell'elenco dei casi, gli snake di tutti i casi di un cliente, oppure un singolo snake in base al suo numero — ogni blocco con l'intestazione *#SNxxxxx · vN* e il proprio caso. Un elenco di inventario mostra ogni snake con il numero di voci, senza testi integrali. Anche il pacchetto di ripresa di un caso e la valutazione del caso contengono lo snake.
- **Dove produce effetto.** Lo snake opera attraverso il gate dello snake nel [Flusso di lavoro 6 — Redigere un atto](#w6). Quando per il caso esistono snake — il proprio snake o quelli degli altri casi delle sue fattispecie — l'IA Le pone la domanda fissa *Vuole il gate snake?*, a meno che Lei non abbia già detto *con gate snake*, o non abbia rinunciato al round, con parole Sue. Dopo il Suo sì arriva il round dello snake della catena di verifica, prima del round finale del Nucleu: l'IA legge per intero lo snake del caso e gli snake degli altri casi delle sue fattispecie, rilegge la bozza e risolve ogni voce dello snake in un file di risultato come inserita (con il luogo nel documento), respinta o non rilevante, ciascuna con una motivazione. Una voce viene respinta se essa, o la sua formulazione, potrebbe essere rivolta contro il cliente. *Già utilizzata* o *già nota al tribunale* non è accettata come motivazione: le voci sono argomenti da ripetere in ogni documento in cui si adattano. Il round è accettato solo quando ogni voce è risolta, gli snake e la bozza sono stati letti dopo l'ordine e la bozza è stata davvero modificata ovunque una voce sia stata inserita.

## Flusso di lavoro 6 — Redigere un atto

Questo flusso di lavoro La porta da una richiesta in parole semplici a un modello pronto per il deposito nell'elaboratore di testi: un atto, una richiesta a un tribunale o a un'autorità, oppure una lettera.
L'IA legge il caso prima di scrivere, costruisce il documento nel proprio scratch store cifrato, fa verificare rispetto ai Suoi registri ogni fatto, citazione, norma e parte, percorre una catena di verifica fissa e Le chiede conferma a ogni punto decisionale.
Lo usi ogni volta che qualcosa deve uscire per iscritto dal Suo studio. Ciò che esce da IRONSTICK è sempre un modello che deve rivedere, firmare e inviare personalmente.

![Diagramma di flusso: dall'incarico attraverso lettura, formato, bozza, verifica, sintesi, catena di verifica, round dello snake e del Nucleu fino alla consegna e alla chiusura](https://www.ironstick.legal/img/bridge/w6_flow.png)

Dal Suo incarico al modello nell'elaboratore di testi: l'IA legge, redige e verifica; Lei decide a ogni passo disegnato in bianco su nero.

### Passo 0 — impostare il contesto

- **Indicare il caso.** Per la chat integrata, apra il caso e scelga *Redigi testo* › *Con l'aiuto dell'IA*: la chat si apre con quel caso; da una voce della cronaca il documento è già indicato. Con un'IA desktop, indichi il numero del caso nel Suo primo messaggio — l'IA può anche chiedere a IRONSTICK quale schermata e quale caso ha aperto.
- **Il caso ha bisogno del suo Paese.** Diritto, lingua e data del documento derivano dalla giurisdizione impostata nel caso. Se non è impostata alcuna giurisdizione, il formato del documento viene rifiutato con la richiesta di impostarla prima.
- **Usi il modello più potente della Sua IA desktop.** Per la redazione, all'IA viene detto di raccomandare il livello di modello più potente prima di iniziare e uno più leggero di nuovo dopo la consegna. L'app dell'IA desktop cambia solo per mano Sua; la chat integrata cambia da sola.
- **Riunisca il Suo primo messaggio.** Caso, tipo di documento, che cosa vuole ottenere, i numeri di prova su cui si basa, tono e lunghezza e un atto precedente il cui indirizzamento ha funzionato. I documenti fondano un atto; gli aggettivi no.
- **Dica subito che cosa vuole dai round di verifica.** Espressioni come *con gate snake* o *senza snake e Nucleu* nel Suo messaggio sono riconosciute da IRONSTICK; l'IA non chiede allora nulla su quei round per questo documento. Il testo incollato non vale come parole Sue.

Redigi la replica alla comparsa di risposta #0004127 nel caso [numero del caso], basala su #0003310 e #0003318, breve e oggettiva, indirizzata come l'appello del 12 maggio, con gate snake.

### Cosa dici — passo dopo passo

1. Scrivi una replica a [#numero di prova] nel caso [numero del caso]. Obiettivo: [obiettivo].

L'IA legge il caso, il Nucleu della fattispecie e del caso e il documento a cui risponde, poi redige nel proprio scratch store.
2. Usa [#numeri di prova] come prove. Tono: [oggettivo / deciso].

Le Sue istruzioni vengono recepite nella bozza; ogni documento citato viene letto integralmente.
3. Nessuna correzione — prosegui.

La catena di verifica si avvia: nuova lettura, confronto con i Suoi atti precedenti, attacco dalla parte avversa, round dello snake, controllo del Nucleu.
4. Modifica il punto [numero]: [la tua correzione].

La bozza viene corretta e controllata di nuovo prima di proseguire.
5. Consegnalo.

Il documento compare nella finestra di download; lo porta nell'elaboratore di testi, lo firma e lo invia personalmente.

### Che cosa accade in background

- **Giurisdizione e lingua.** L'IA determina la giurisdizione dal caso prima di qualsiasi lavoro giuridico. Dialoga con Lei nella lingua di sistema di IRONSTICK; il documento è scritto nella lingua ufficiale del Paese del caso e il formato reca il numero del caso e la data di oggi.
- **Leggere il caso prima di scrivere.** Gli strumenti che scrivono su un caso vengono rifiutati finché l'IA non ha letto il digest del caso; un atto richiede inoltre che i documenti più recenti del caso siano letti integralmente. Il rifiuto elenca ciò che resta da leggere.
- **Gate di avvio per il formato.** Il formato vincolante del documento (secondo il tipo di documento: atto o lettera, rappresentato da un legale o in proprio) viene fornito solo dopo che l'IA ha letto il digest completo, ogni documento in uscita del cliente in quel caso per intero, il documento a cui l'atto risponde per intero, la memoria del caso e ogni Nucleu del caso. Tutto ciò che è indirizzato a un tribunale è un atto, mai una lettera. Per un atto il formato porta anche un profilo del tribunale: i giudici e i pubblici ministeri di quel tribunale presenti nei Suoi archivi.
- **Prima le Sue richieste originarie.** Quando l'atto risponde a un documento, l'IA deve prima elencare nella chat ogni richiesta della domanda originaria del cliente nel caso, citata con il proprio numero di prova, chiederLe se è ancora corretta e concludere il proprio turno. Il formato viene fornito solo dopo la Sua risposta. Se il documento stesso apre il procedimento, l'IA lo dice in una frase e non chiede nulla.
- **Prima il Nucleu.** Scrivere, controllare e consegnare vengono rifiutati finché ogni Nucleu attuale del caso — il Nucleu del caso e il Nucleu di ogni fattispecie a cui appartiene — non è stato letto nella sua versione attuale, di nuovo dopo ogni nuova versione e dopo che l'IA desktop ha condensato la propria conversazione.
- **Scrivere solo da ciò che è stato letto.** Una volta che l'IA ha aperto un documento della controparte o di un'autorità nel caso, il lavoro su un documento di quel caso viene rifiutato finché quel documento non è stato letto per intero. Una bozza che cita documenti che l'IA non ha letto per intero è bloccata contro qualsiasi modifica finché non vengono letti; cancellare il passaggio citato non toglie il blocco.
- **Il controllo deterministico dell'atto.** Viene eseguito sullo stato attuale del file, senza IA, e controlla: ogni riferimento di prova e ogni timbro, e che ogni documento citato o allegato sia stato letto per questo documento; ogni citazione normativa rispetto alla biblioteca giuridica verificata; ogni citazione testuale rispetto ai testi integrali del caso, ai documenti recuperati e alla biblioteca; i numeri di caso; gli importi, che devono corrispondere esattamente alla forma registrata; i nomi di cliente, persone e istituzioni lettera per lettera, compresi i segni diacritici; gli IBAN e, come controllo specifico per Paese, i numeri personali rumeni (CNP) tramite somma di controllo e rispetto ai registri; che ogni persona o società nominata sia stata letta insieme ai suoi collegamenti; e il formato vincolante, compreso l'elenco degli allegati. Ogni rilievo è contrassegnato come VERIFIED, UNVERIFIED o CONTRADICTED.
- **Leggere prima di scrivere, non dopo.** Una lettura effettuata dopo l'ultima modifica della bozza non vale per quella verifica: l'IA deve leggere prima, poi integrare nel testo, poi verificare di nuovo.
- **Citazioni.** Una citazione che non si trova in nessuna fonte blocca la consegna; riformularla o eliminare le virgolette la lascia bloccata e l'unico rimedio è la formulazione esatta della fonte. Una citazione che scompare dal testo Le viene segnalata alla consegna.
- **Allegati.** Ogni voce di allegato deve recare il riferimento di prova, il timbro di deposito prelevato da IRONSTICK e il segnaposto della pagina. Un allegato senza file memorizzato e senza supporto viene contrassegnato per la revisione. Un allegato che è un documento in uscita o un atto della controparte viene contrassegnato con l'istruzione di allegare invece il documento originale, se l'atto era stato allegato solo per una pagina in esso contenuta; questo contrassegno è un'annotazione di revisione, non un blocco.
- **I rilievi aperti tornano all'IA.** Ogni rilievo del controllo viene restituito all'IA perché lo corregga e il controllo viene eseguito di nuovo sul nuovo stato. I controlli vengono conteggiati per documento, attraverso i numeri di versione: se dopo il quinto controllo restano rilievi aperti, IRONSTICK rimette a Lei la decisione con un messaggio di sistema e l'IA riferisce i rilievi che non ha potuto fondare sui Suoi registri, in modo che Lei decida come procedere.
- **Prima la sintesi.** Dopo il primo OK la catena di verifica inizia con una sintesi del documento per Lei — destinatario e procedimento, richieste, struttura, fatti chiave con le relative prove, norme citate. L'IA attende la Sua risposta; le correzioni vengono integrate prima che la catena prosegua.
- **La catena di verifica.** Ogni passo viene riferito al controllo dell'atto e controllato prima che arrivi l'ordine successivo: leggere di nuovo l'intero file; gli atti precedenti del cliente sui documenti citati, così che il cliente non contraddica i propri atti precedenti; una tabella di replica che copre ogni passaggio del documento a cui si risponde; un attacco come parte avversa, scritto in un file separato e risolto punto per punto nella bozza; una valutazione, risolta allo stesso modo. Un file conta come letto solo quando ogni riga è stata letta dopo l'ordine; un round senza alcun rilievo recepito in cui la maggior parte dei rilievi viene respinta perché già eseguita viene rifiutato.
- **Domande fisse.** Poi arrivano fino a due domande fisse — la domanda sul Nucleu quando il caso ha un Nucleu, la domanda sullo snake quando per esso esistono snake. L'IA le pone parola per parola, una alla volta, e accetta solo un sì o un no dal Suo stesso messaggio. Un nuovo atto senza una versione precedente ottiene il round del Nucleu senza la domanda. La Sua risposta viene ricordata per tutte le versioni del documento.
- **Round dello snake.** Dopo il Suo sì, l'IA legge gli snake del caso e delle sue fattispecie e registra, per ogni voce dello snake, se è stata inserita, respinta o non rilevante, ciascuna con una motivazione; una voce viene respinta se potrebbe essere rivolta contro il cliente.
- **Round del Nucleu.** Il documento viene confrontato con il Nucleu punto per punto. Una contraddizione non può essere respinta: viene corretta o contrassegnata come conflitto. Un conflitto ferma il lavoro su quel documento; l'IA deve avvertirLa in dettaglio e proseguire solo dopo la Sua decisione di correggere il documento o di mantenere lo scostamento.
- **Le Sue correzioni restano.** I Suoi messaggi vengono registrati per documento. Una Sua correzione che è stata integrata e poi di nuovo rimossa blocca la catena e la consegna. Un passaggio fondato su parole Sue non può essere cancellato finché l'IA non Glielo ha chiesto.
- **Una modifica riavvia la catena.** Ogni modifica annulla l'ultimo controllo. Una modifica dopo la catena completata riavvia l'intera catena.
- **Un'unica domanda di consegna.** Alla fine l'IA indica in al massimo tre righe che cosa la catena ha modificato e chiede una sola volta se può consegnare. La consegna viene rifiutata senza un controllo positivo recente per esattamente questo stato del file e senza il Suo sì.
- **Decisioni giudiziarie aperte.** Se ci sono ancora decisioni giudiziarie in attesa di valutazione, l'IA Le chiede se valutarle subito, così che i risultati confluiscano nel documento, oppure più tardi.
- **Consegna nell'elaboratore di testi.** Il file passa solo attraverso la finestra di download di IRONSTICK: lo salva oppure passa direttamente il Markdown all'elaboratore di testi. Lì lo modifica, aggiunge l'intestazione, esclude le pagine, inserisce la Sua firma ed esporta un PDF o un DOCX. Un file invariato già consegnato viene ripetuto solo su richiesta, senza un nuovo numero di versione.
- **Dopo la consegna.** L'IA chiede se il documento è finito o necessita di correzioni. Finché non risponde, l'IA può solo leggere. La Sua correzione viene allegata alla versione consegnata, che diventa nulla, e per la correzione viene creata la versione successiva. La stampa nell'elaboratore di testi, o l'invio del PDF per il controllo e-mail, chiude il documento.
- **Il pacchetto e-mail.** Un'e-mail al tribunale viene preparata solo per un PDF finito: Lei trascina il PDF firmato nella chat, l'IA lo controlla rispetto all'ultima versione e solo un PDF corrispondente apre il formato e-mail — oggetto, corpo con mittente, ID e numero di fascicolo, elenco del pacchetto e destinatario, come caselle di copia. Gli atti troppo grandi vengono suddivisi in parti di circa dieci megabyte nella schermata di invio della posta, ciascuna con la propria e-mail di accompagnamento. IRONSTICK non invia nulla; Lei invia dal Suo programma di posta.

## Flusso di lavoro 7 — OSINT: ricercare una persona o una società

Usi questo flusso di lavoro quando vuole sapere chi è una parte: un avversario, un testimone, una società dietro un indirizzo, le persone intorno a un'impresa.
L'IA esegue una procedura di ricerca fissa attraverso i Suoi registri e l'internet aperto, apre e legge le fonti e inserisce ciò che può verificare come proposte nel Monitor di coerenza dei dati.
Nulla diventa parte dei Suoi registri finché non lo accetta lì. La ricerca non richiede alcun caso: una parte può essere ricercata da sola.

![Diagramma di flusso: tu indichi la parte; la verifica OSINT cerca nei Suoi registri e sul web; l'IA legge ogni reperto di prova e apre i link corrispondenti; i controlli anti-bot vengono rimessi a te nella finestra del browser IRONSTICK; il gate OSINT controlla la lista di controllo; i reperti verificati vanno come proposte nel Monitor di coerenza dei dati, dove tu li accetti o li rifiuti; poi viene sbloccata la parte successiva.](https://www.ironstick.legal/img/bridge/w7_flow.png)

Una parte alla volta: cercare, leggere, verificare, proporre — e Lei decide nel Monitor di coerenza dei dati.

### Passo 0 — impostare il contesto

- **Tenere pronti i dati essenziali della parte.** La verifica OSINT richiede il nome completo, il Paese e se si tratta di una persona fisica o di una società; città e distretto per quanto noti. Il Paese determina la lingua dei termini di ricerca. Città, distretto e Paese sono inoltre obbligatori per ogni nuova parte che l'IA propone in seguito.
- **Nessun caso richiesto.** La verifica OSINT non richiede un numero di caso. Se vuole che la parte sia collegata anche a un caso, lo dica — il collegamento è allora una proposta a sé stante.
- **Una registrazione esistente aiuta.** Se la parte è già in IRONSTICK, la nomini o ne indichi il numero (ad esempio @E0001234). L'IA legge prima la registrazione; la verifica OSINT elenca da sé anche le voci esistenti con lo stesso nome.
- **Più nomi?** Se ha un elenco (un elenco di amici, un elenco di partecipanti, un colophon) acquisito come documento, chieda all'IA di confrontare prima l'elenco con tutti in IRONSTICK, poi di ricercare solo i nomi rilevanti.
- **Senza la conversazione con l'IA.** Nell'analisi della persona di una persona, il pulsante *Ricerca web* apre una ricerca guidata propria: link candidati, riassunti delle pagine, un'anteprima dei campi dell'analisi e il salvataggio nell'analisi della persona.

### Cosa dici — passo dopo passo

1. Ricerca [nome completo], [città], [Paese] — persona fisica.

Vengono controllati prima i Suoi registri; poi le fonti su internet vengono aperte e lette.
2. Ricerca la società [nome], [città], [Paese].

La stessa procedura per una società, compresi partita IVA e sede legale.
3. Esiste un collegamento tra [persona] e [persona]?

Vengono mostrate le relazioni esistenti; quelle nuove vengono cercate nei Suoi registri e nelle fonti.
4. Mostrami la fonte di [reperto].

Ottiene il link o il numero di prova alla base del reperto.
5. Inserisci i reperti verificati come proposte.

I reperti finiscono nel Monitor di coerenza dei dati; nulla viene memorizzato finché non lo accetta lì.

### Che cosa accade in background

- **La verifica OSINT.** L'IA avvia la verifica con nome, città, distretto, Paese e l'indicazione se la parte è una persona fisica o giuridica, e ogni volta viene eseguita la stessa procedura. Internamente il nome viene cercato a testo integrale in tutto il database (tutti i clienti); per ogni caso tornano le 10 voci di prova più recenti con il paragrafo di ogni reperto, più quante altre ne esistono. Sul web viene eseguito un elenco fisso di ricerche: CV, Facebook, LinkedIn, Instagram, distretto, città, scandalo, notizie, dichiarazioni patrimoniali e di interessi (dove pubblicate), imposte, società; per una società il registro delle imprese e l'insolvenza sostituiscono le ricerche personali. I termini di ricerca sono nella lingua del Paese della parte e vengono eseguiti su tre motori di ricerca. Link e titoli tornano senza duplicati. La ricerca viene eseguita come processo in background; finché non è terminata, l'IA ripete la stessa identica chiamata per continuare ad attendere. La verifica stessa non scrive nulla.
- **Prima le voci esistenti.** Se IRONSTICK contiene già persone, società o istituzioni corrispondenti al nome, la prima risposta le elenca per intero, la migliore corrispondenza per prima. L'IA indica la voce che è questa parte, oppure «nessuna». Una voce segnalata riceve ogni reperto; per un'IA desktop al bridge, una proposta di creare di nuovo la stessa parte viene allora rifiutata.
- **Un profilo preparato, non verificato.** La risposta lo dice espressamente: gli omonimi sono probabili. I link il cui risultato di ricerca mostra il nome completo sono i link corrispondenti, ordinati dal migliore; gli altri sono facoltativi; le semplici home page vengono scartate. Il compito dell'IA è leggere ogni reperto di prova, aprire ogni link corrispondente e usare solo ciò che la pagina aperta stessa afferma — mai un titolo da solo.
- **Gate OSINT — una parte alla volta.** Per un'IA desktop al bridge, il risultato termina con una lista di controllo e la successiva verifica OSINT per un'altra parte viene rifiutata finché essa non è stata esaurita:
	- i primi 10 link corrispondenti aperti (almeno il 20 % di essi se è di più);
	- ogni voce di prova elencata letta — un risultato deviato nell'archivio temporaneo conta solo se letto fino alla fine, una ricerca al suo interno non conta mai;
	- per una persona, ogni pagina aperta che nomina la persona e che è finita nell'archivio temporaneo letta nei suoi reperti;
	- poi o una proposta o la dichiarazione che non è stato trovato nulla di utilizzabile;
	- per una persona, anche ogni collegamento con altre persone proposto, o la dichiarazione che non ve ne sono.
Una pagina che nomina il nome completo della persona insieme alla città o al distretto non può essere chiusa come «nulla di utilizzabile» a meno che l'IA non la elenchi come già registrata o come omonimo. Il rifiuto indica esattamente ciò che manca. Le letture sono registrate per sessione, così la lettura di una sessione non vale mai per un'altra.
- **Nuova persona solo dopo una verifica OSINT completa.** Per un'IA desktop al bridge, una proposta per una nuova persona fisica viene rifiutata finché la verifica OSINT per quel nome non è stata esaurita completamente. Città, distretto e Paese sono obbligatori per ogni nuova parte e ogni voce di indirizzo. Una nuova parte necessita altrimenti di almeno due campi di dettaglio oltre al nome. L'indirizzo di una persona fisica viene confrontato con gli indirizzi delle istituzioni — l'indirizzo di un datore di lavoro viene rifiutato come indirizzo di residenza — e una nuova società necessita della propria partita IVA, escluse le associazioni.
- **Aperte, non snippet.** Le pagine web vengono aperte e lette con lo strumento pagine di IRONSTICK; i risultati di ricerca sono solo indicazioni. Le pagine grandi vengono conservate complete nell'archivio temporaneo cifrato e lette da lì. I moduli di ricerca e le tabelle di dati che si riempiono solo dopo un filtro possono essere interrogati direttamente. Una pagina aperta nella stessa sessione viene servita di nuovo da una copia per 30 minuti. Un documento scansionato che richiede più tempo per l'elaborazione viene segnalato come non ancora pronto; l'elaborazione prosegue e la chiamata successiva restituisce il testo.
- **I controlli anti-bot e gli accessi vengono rimessi a Lei.** Quando un sito web mostra un controllo anti-bot o blocca l'accesso automatico, IRONSTICK apre la pagina nella propria finestra del browser e l'IA Le chiede di completare lì il controllo. Poi l'IA legge la pagina in quella finestra, apre altre pagine dello stesso sito web e ne scarica i file nello scratch store cifrato; nulla entra in un caso finché non lo acquisisce. Per un altro sito web l'IA torna allo strumento pagine; quando ha finito, segnala come concluso il lavoro nel browser e la finestra Le chiede se chiuderla o lasciarla aperta.
- **Istruzioni nascoste oscurate.** Il testo delle pagine web aperte e della finestra del browser passa un'ispezione basata su regole; i passaggi che si rivolgono a un'IA, imitano il testo di chat o di controllo di IRONSTICK o nascondono il testo in caratteri invisibili vengono sovrascritti con asterischi e sopra il contenuto compare un avviso.
- **Elenchi di nomi in un solo passaggio.** Un confronto di elenchi verifica in modo deterministico un elenco acquisito con ogni persona e società in IRONSTICK — accenti ignorati, ordine delle parole ignorato, tollerante agli errori OCR. Le corrispondenze sono classificate come esatte, con ordine invertito, variante o parola singola; le corrispondenze su una sola parola sono sempre ambigue e vanno controllate.
- **Proposte invece di scritture.** I fatti verificati vanno come proposte nel Monitor di coerenza dei dati: anagrafica, analisi della persona, collegamenti e duplicati. Per l'analisi della persona l'IA deve prima leggere la persona; un campo che contiene già del contenuto viene modificato solo quando l'IA riporta quel contenuto parola per parola. Un campo di analisi accettato confluisce nell'ultima analisi della persona. Una nuova persona riceve il proprio numero solo dopo la Sua accettazione, perciò i collegamenti ad essa richiedono una seconda accettazione.
- **Mai nella memoria dell'IA.** I reperti e l'avanzamento dell'OSINT appartengono alla parte, non alla memoria. Finché è aperta una verifica OSINT di un'IA desktop, ogni tentativo di memorizzare una voce di memoria viene rifiutato con l'istruzione di inserire invece i fatti presso la parte.
- **La ricerca web sulla persona nell'app.** Il pulsante *Ricerca web* nell'analisi della persona esegue quattro passi: una ricerca web con varianti del nome raccoglie link candidati (una ulteriore ricerca web dell'IA viene eseguita solo con il Suo consenso); Lei rimuove i risultati indesiderati; le pagine rimanenti vengono caricate e riassunte da un'IA esterna; Lei seleziona le fonti e l'IA le condensa nei campi dell'analisi come anteprima modificabile. Il salvataggio scrive i campi nell'analisi della persona non legata a un caso, contrassegnata come non confermata. L'IA esterna viene usata solo dopo che ha acconsentito in una finestra di consenso; se rifiuta, non viene inviato nulla.

## Flusso di lavoro 8 — Ricerca giuridica: prima le leggi della biblioteca

Usi questo flusso di lavoro ogni volta che una legge, un articolo di un codice o un regolamento sono rilevanti: per rispondere a una questione giuridica, per controllare una citazione o per fondare un atto.
L'IA legge le norme dalla Sua biblioteca giuridica, parola per parola, e va su internet solo quando la biblioteca non contiene nulla su quella norma.
Una legge trovata online viene aperta, letta, citata con il suo URL e segnalata, così che dopo la Sua approvazione entri nella biblioteca.
La biblioteca è ciò rispetto a cui il controllo dell'atto verifica ogni articolo citato.

![Diagramma di flusso: Lei chiede di una norma con il caso aperto; l'IA determina la giurisdizione e cerca nella biblioteca giuridica; se la biblioteca contiene la norma, l'IA legge l'articolo alla lettera e risponde dalla biblioteca; in caso contrario, il web viene sbloccato per quella norma, l'IA apre e legge la pagina, segnala la fonte, Lei la seleziona nella finestra di consenso e la legge viene memorizzata nella biblioteca e letta da lì; in un atto, il controllo dell'atto verifica che ogni articolo citato sia stato letto nella biblioteca.](https://www.ironstick.legal/img/bridge/w8_flow.png)

Prima la biblioteca, il web solo in caso di mancata corrispondenza, e ogni fonte web torna nella biblioteca con la Sua approvazione.

### Passo 0 — impostare il contesto

- **Aprire il caso o indicarlo.** Il diritto da applicare deriva dal caso. L'IA legge la giurisdizione registrata nel caso prima di qualsiasi lavoro giuridico di merito.
- **Se non viene indicata alcuna giurisdizione.** La ricerca nella biblioteca usa allora la giurisdizione del caso su cui l'IA ha lavorato per ultimo nella sessione e lo dichiara; senza un caso noto cerca in tutte le giurisdizioni e chiede all'IA di controllare la giurisdizione di ogni risultato.
- **Vedere che cosa contiene la biblioteca.** La schermata *Leggi* elenca ogni legge della biblioteca con titolo, giurisdizione, materia, fonte e stato, ha una propria ricerca a testo integrale e un pulsante di aggiunta per un link o un file PDF o Markdown. Chieda all'IA «quali leggi contiene la biblioteca per [Paese]?» per ottenere la stessa panoramica nella conversazione.
- **Chiedere la lettura che Le serve.** Una rapida panoramica, il testo letterale di un articolo o una lettura completa di una legge. Dica quale.

### Cosa dici — passo dopo passo

1. Che cosa dice l'art. [numero] di [legge]? Citalo.

L'articolo viene letto parola per parola dalla Sua biblioteca giuridica e citato con la sua fonte.
2. [questione] è disciplinata in [legge]? Dammi gli articoli.

La biblioteca viene consultata; ottieni gli articoli rilevanti con la loro formulazione esatta.
3. Controlla le norme citate nella mia bozza rispetto alla biblioteca.

Ogni articolo citato viene confrontato con il testo integrale nella biblioteca.
4. [legge] non è nella biblioteca — cercala sul portale ufficiale.

Il web viene aperto solo per una norma che la biblioteca non contiene; la pagina viene letta, citata con il suo link e proposta per la Sua biblioteca.

### Che cosa accade in background

- **La ricerca nella biblioteca.** Copre tutti i file di leggi della biblioteca in due modi: per denominazione («Codice civile», «Regolamento (UE) 2016/679»), confrontata con titolo e descrizione e classificata per prima, oppure per passaggio, una ricerca fuzzy in cui bastano circa il 60 % delle parole. Ogni risultato indica il numero di registrazione interno (L-number), il file, brevi estratti con le loro posizioni esatte in caratteri e una chiamata già pronta per recuperare la formulazione circostante.
- **Lettura letterale.** Il lettore di articoli restituisce un articolo in base all'L-number e al numero dell'articolo; la ricerca di frasi restituisce un intervallo di caratteri o ogni punto in cui compare una frase, con la formulazione circostante. Entrambi registrano esattamente ciò che hanno restituito come letto. Il lettore di leggi restituisce un'intera legge; una legge più grande del limite del connettore va completa nell'archivio temporaneo cifrato, senza anteprima, e non registra allora nulla come letto.
- **Prima la biblioteca giuridica.** Una ricerca web o una richiesta di pagina che sembra una ricerca di legge — numeri di articoli o di commi, nomi di codici, numeri di leggi, portali normativi — viene rifiutata finché l'IA non ha cercato quella norma nella biblioteca. Se la biblioteca ha risultati, il web resta chiuso per quella norma e all'IA viene detto di citare dalla biblioteca. Solo quando la biblioteca non segnala alcuna corrispondenza il web viene sbloccato per quella norma, per 15 minuti, compresi i link ai portali normativi che la ricerca restituisce. I risultati che non portano nel titolo il numero o la denominazione dell'atto cercato, o che non contengono il numero dell'articolo cercato, non contano come «la biblioteca lo ha» — la menzione di un regolamento all'interno della propria legge madre è un falso risultato di questo tipo. Il gate si applica alla chat IA e ad ogni IA desktop.
- **Aperte, non snippet.** Una pagina usata come fonte viene aperta e letta con lo strumento pagine di IRONSTICK; i risultati di ricerca sono solo indicazioni. Ogni fonte internet è citata con il proprio URL. La formulazione della legge viene citata dal file della biblioteca una volta che la fonte vi si trova.
- **Segnalare le fonti normative.** Dopo una ricerca web relativa a una legge, o dopo che l'IA ha aperto una pagina di un portale normativo, ogni ulteriore risposta degli strumenti inizia con il promemoria di segnalare la fonte, per un massimo di 15 minuti. Un link a un portale che compare solo in un risultato di ricerca non correlato ottiene soltanto una nota.
- **Aperta dall'IA stessa.** Una segnalazione di fonte viene accettata solo quando la stessa sessione dell'IA ha aperto esattamente quella pagina con lo strumento pagine nelle ultime 24 ore. In caso contrario la segnalazione viene rifiutata con l'istruzione di aprire la pagina e controllare che contenga davvero il testo della legge — non una pagina di errore, una pagina di accesso, un risultato di ricerca o una panoramica. Come ogni scrittura datata, la segnalazione richiede la data corrente rilevata negli ultimi 30 minuti.
- **Il Suo consenso.** Le fonti segnalate si raccolgono in un'unica finestra, ciascuna con una casella da spuntare. Le fonti selezionate vengono scaricate da un processo in background, convertite, controllate e memorizzate nella biblioteca; quelle non selezionate vengono rifiutate. Chiudere la finestra le lascia raccolte; essa ricompare con la segnalazione successiva. Un link già presente nella biblioteca riceve la risposta che esiste; una fonte diversa per un atto che la biblioteca contiene già diventa una richiesta di sostituire la fonte, con lo stesso L-number.
- **Nessun portale normativo nella finestra del browser.** La finestra del browser di IRONSTICK, in cui completa controlli anti-bot e accessi per altri siti web, rifiuta i portali normativi: lì non viene aperto, letto o scaricato nulla. Un portale normativo che blocca lo strumento pagine non viene passato a quella finestra.
- **Aggiornamento della biblioteca.** Le fonti collegate vengono ricontrollate rispetto alla loro fonte circa ogni 14 giorni; l'IA può anche ricontrollare subito una singola legge. Una legge che non ha più potuto essere verificata rispetto alla sua fonte viene contrassegnata come «non verificabile»; per essa la regola «prima la biblioteca» non si applica e la versione attuale viene cercata online. Un file caricato senza fonte reca un avviso che la sua attualità non può essere controllata.
- **Citazioni in un atto.** Il controllo dell'atto confronta ogni articolo citato con il registro di lettura degli strumenti della biblioteca. Un articolo che esiste nella biblioteca ma non vi è stato letto prima dell'ultima modifica della bozza è un rilievo bloccante, con l'istruzione di leggerlo alla lettera con il lettore di articoli e integrarlo nel testo. Una norma non presente nella biblioteca è un rilievo bloccante finché la sua fonte non è segnalata e integrata; una fonte da Lei rifiutata lascia la citazione contrassegnata come non verificata. Una lettura vale quando è avvenuta dopo l'ultima modifica del testo della biblioteca e prima dell'ultima modifica della bozza.
- **Individuato non significa letto.** Trovare il numero di un articolo in un file di legge, o nominarlo in una panoramica, non è una lettura letterale. Per un atto, ogni articolo citato viene letto con il lettore di articoli e l'IA controlla che la formulazione sostenga davvero la sua frase.
- **Leggere un'intera legge.** Quando un codice completo si trova nell'archivio temporaneo e l'IA lo legge lì a parti, ha il testo integrale nella propria conversazione. Per il controllo dell'atto, un articolo conta ancora come letto solo quando è arrivato tramite il lettore di articoli o la ricerca di frasi, oppure con una legge abbastanza piccola da essere restituita direttamente.

## Lavorare con l'IA — il Suo assistente nel fascicolo

In linea di principio, una chat con un'IA collegata a IRONSTICK tramite il bridge è uno strumento enormemente potente. Lo consideri come un collaboratore di studio o un collega avvocato. Tramite il bridge, l'IA non può solo cercare documenti, singoli passaggi di testo o prove — può anche visualizzare immagini memorizzate, visualizzare e controllare file PDF su richiesta, avviare nuove scansioni OCR e molto altro.

Quando lavora con l'IA, lavori con essa come farebbe con un collaboratore di studio o un avvocato. Dia semplicemente istruzioni chiare su ciò che vuole esattamente. L'IA effettua le interrogazioni necessarie in background tramite il bridge, direttamente in IRONSTICK — cioè nei Suoi fascicoli.

**Di regola:** senza il Suo consenso, l'IA può fare in IRONSTICK poco più che leggere. Le modifiche ai dati anagrafici, alla cronaca, al calendario, alla memoria, ai testi integrali e alla biblioteca giuridica diventano effettive solo dopo la Sua approvazione: o riceve per questo un modulo o una finestra di dialogo in IRONSTICK, oppure la richiesta di modifica dell'IA compare nel Monitor di coerenza dei dati. Senza una tale finestra, l'IA scrive solo nelle proprie aree di lavoro — lo scratch store cifrato, il diario giornaliero su Sua richiesta e la propria valutazione del caso dopo i controlli deterministici. Tag e messaggi nella chat dello studio richiedono la Sua conferma nella chat.

**Ma faccia attenzione:** ogni app di IA desktop mostra le proprie chiamate agli strumenti. Se l'IA Le dà una risposta senza aver effettuato nemmeno una chiamata a IRONSTICK, sia scettico e chieda su che cosa si basa questa informazione.

Sia rigoroso nelle Sue domande e istruzioni e dica all'IA dove e come ricercare. Non è necessario nominare lo strumento di ricerca — l'IA lo conosce da sola — ma le dica chiaramente di prelevare l'informazione da IRONSTICK: nel cliente XY, nel caso XY, nella prova XY. Può semplicemente indicare i clienti con il loro nome — l'IA risolve da sola il ClientID — oppure copiare il numero del cliente (*@C0000000*) da IRONSTICK e fornirlo all'IA. Lo stesso funziona, ad esempio, con un numero di prova (*#0000000*).
**Capisca soprattutto una cosa:** l'IA non è un'intelligenza artificiale in quanto tale. Dietro di essa non c'è assolutamente alcuna intelligenza. Ciò che oggi viene chiamato IA è un modello matematico per il calcolo di probabilità. Non ha assolutamente alcuna coscienza — anche se cerca di trasmettere esattamente quell'illusione. In linea di principio è un compilatore potenziato matematicamente — ed è esattamente per questo che IRONSTICK la utilizza: IRONSTICK fornisce i dati e l'IA genera prosa attorno ai dati e ai fatti forniti. L'IA non sente il caso; calcola soltanto le probabilità in un caso. A questo serve, in questo è brava — ed è per questo che IRONSTICK la utilizza.

In altre parole: l'IA copre ciò che la logica deterministica di un programma non può coprire, o solo con uno sforzo estremo — comprendere e scrivere il linguaggio naturale. Tutto il resto — l'accesso ai Suoi fascicoli, la selezione del fascicolo giudiziario, i controlli rispetto ai Suoi registri, la regola per cui i Suoi registri cambiano solo con la Sua approvazione — è svolto da IRONSTICK stesso, in modo deterministico. L'IA non diventa mai la fonte dei fatti; lo è IRONSTICK. È questo che distingue in modo così fondamentale l'approccio di IRONSTICK dall'uso convenzionale dell'IA.

Per Lei come utente, tuttavia, IRONSTICK si presenta nella forma familiare — come interfaccia grafica o come dialogo.
