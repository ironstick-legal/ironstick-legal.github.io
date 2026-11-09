# Compendia - Client-App

> The IRONSTICK compendium: every function of the client app — clients, cases, evidence, deadlines, e-mail, documents, the AI layer, security and system requirements.

Original page: https://www.ironstick.legal/kompendium.html

---

The case-management system with built-in file intelligence —
for lawyers who want their evenings back.

IRONSTICK is a complete practice-management system for law firms, on Windows
and Android tablets: clients, cases, evidence, deadlines, e-mail and document
production, with an AI layer that works on your actual case files. It is
pan-European and built for the **civil-law** tradition, where the codified
statute is the authority, and it is available in eleven interface languages:
English, German, French, Italian, Spanish, Romanian, Portuguese, Dutch, Turkish,
Ukrainian and Russian. IRONSTICK recognises the jurisdiction of each case, builds
and maintains its own statute library, and adapts to the way you work. It is
offline-first, and every external data flow is documented in the GDPR data-flow
declaration.

**Hours become minutes**Pleading drafts, case summaries
and dossiers are generated from the file itself — your job shifts from
assembling to reviewing.
**Every document searchable**Every document, e-mail, photo
and recording is searchable — including scans and phone-call transcripts.
Deadlines and dormant cases are flagged automatically.
**Everything is one question away**“What came in from the
opponent last month?” — ask in plain language; every document the answer cites
is a clickable link to the record in your file.
**You stay in control**Local data, your own storage path,
consent for interactive external AI functions, pseudonymisation, audit logs — and a
[written GDPR disclosure of every data flow](https://www.ironstick.legal/gdpr.html).

### What law firms really need — and what IRONSTICK delivers

| Need | What IRONSTICK delivers | More |
| --- | --- | --- |
| **Saving time, billing hours** | Pleading drafts, case summaries and dossiers are built from the case file itself — you review instead of searching. Large filings with all annexes are stamped and paginated as one PDF, fully automatically. | [Chapter 3](#ch3), [5](#ch5) |
| **No missed deadlines** | The bell in the menu bar turns orange when a deadline falls due within ten days and red when one is due today or overdue — permanently visible. Cases with no activity for 14 days are flagged automatically, so dormant cases stay visible. | [Chapter 1](#ch1) |
| **Professional secrecy and GDPR** | The database is stored encrypted on your own hardware; IRONSTICK sends no client data to the vendor. Interactive external AI functions ask for your consent, calls through the central AI router are pseudonymised and logged, and the GDPR data-flow declaration includes a model clause for your client privacy notice. Through the desktop-AI bridges, the AI subscription you already hold works directly on the live case file. | [Chapter 9](#ch9), [11](#ch11) |
| **Trust in the vendor** | Your firm does not depend on a vendor's data centre: case files are stored on your own hardware, and the workstations keep working if IRONSTICK SERVER or the internet connection fails. The licence is checked offline on your computer, and every case can be exported at any time as a PDF dossier or an EDRM evidence ZIP. | [Chapter 8](#ch8), [13](#ch13) |
| **Predictable costs** | Modular licence: you buy only the components you use and add more later by licence key. The AI runs on your own provider accounts (a top-up of at least 20 dollars/euros per provider is recommended) instead of monthly per-seat fees in the hundreds of euros. All prices on the [pricing page](https://www.ironstick.legal/pricing.html). | [Chapter 9](#ch9) |
| **Fitting into existing workflows** | Your scanner or copier saves to a folder, and IRONSTICK takes over from there. Your e-mail inbox is fetched in the background and assigned to the cases. On the Android tablet, appointments, deadlines and court hearings are mirrored into an “IRONSTICK” calendar in your Google account, so they appear on any phone signed in to that account; the tablet works on the same case file. | [Chapter 1](#ch1), [15](#ch15) |
| **Low rollout effort** | No big-bang migration: new cases run in IRONSTICK from day one, and you move old cases only when it pays off. With the built-in OCR and AI pre-fill, you confirm a document's details instead of typing them. Training on site, one day per module. | — |
| **Knowing the parties, the court and the wider context** | OSINT at the push of a button on every person and company, judge profiles with an evaluation of their decisions, and a relationship analysis across all files — who is connected to whom, and why. Pleadings can take into account the court's documented decision practice. Every court decision is assessed once against a fixed grid, and the AI reads the assessments of the whole firm before every pleading to that court. | [Chapter 4](#ch4) |

### Who IRONSTICK is made for

IRONSTICK pays off wherever many documents, many parties and hard deadlines come together — and where client data must not leave the building. The firms that gain most are those that lose hours today searching, typing and assembling.

- **Solo lawyers and small firms.** No in-house IT required: IRONSTICK runs on a standard Windows PC, runs its own background maintenance and takes on work that would otherwise require additional staff.
- **Litigators with extensive case files.** If you handle thousands of pages of evidence, you can query the file in plain language and receive answers with their sources. Court dossiers are built in five guided steps, Bates-numbered and indexed.
- **Commercial, insolvency and criminal lawyers.** These proceedings involve many persons, companies and interconnections. The network of persons and companies across all case files makes connections visible that are impractical to track manually — down to OSINT profiles of persons and judge profiles with an evaluation of their decisions.
- **Firms with several lawyers.** With IRONSTICK SERVER — the office server — colleagues share cases, one legal library and one network of persons and companies, while each lawyer keeps the complete file on their own workstation.

![AES-256 encryption at rest: database, documents and configuration](https://www.ironstick.legal/img/49_encryption.png)
Part I — The daily practice

## 1. Your morning, in ninety seconds

Open IRONSTICK and the day is already sorted. The start screen shows what is
due and what went quiet; the **Agenda** merges everything that happened
across all your cases — yesterday's filings, overnight e-mails, new court dates,
photos, transcripts — into one chronological feed. You see the whole practice
without opening a single case. In addition, the separate **daily
briefing** gives you a short spoken overview of the day as you start
work.

![One system, every view](https://www.ironstick.legal/img/51_three_windows.png)

The main menu: deadlines, dormant cases and every section — at a glance, before you open a single case.

- **Deadlines with a traffic light.** The bell in the menu bar turns
orange when a deadline falls due within ten days and red when one is due today
or overdue — permanently visible, one click to the full list.
- **E-mail already triaged.** The monitor fetches your inbox in the
background and assigns messages to cases locally, without AI; the AI rates
their urgency. New mail is signalled in the menu bar.
- **Dormant cases and sudden activity.** Cases with no activity for 14 days
are flagged so they do not go unnoticed; cases with a sudden rise in activity —
new deadline, imminent hearing, official mail — carry a flame marker until
activity returns to normal.

## 2. Instant case summaries — ask, don't dig

The case assistant answers questions about your files the way a good
associate would — except that it has the entire file indexed and answers in
seconds:

- “Summarise the current state of play in case [case number].”
- “Which letters came *from* the opponent, and did we answer the last
one?”
- “Who said what about the site inspection — any contradictions?”
- “Have I already filed this exhibit with the court?”

Every document an answer cites is a **clickable link to the record in your
file** — numbered results you can open or have read aloud with a short command
(“open 1”, “read 1 aloud”); only records retrieved from your database are
shown as sources. Routine questions are answered by
a **local layer on your own machine**, without any data leaving the device;
heavier analysis escalates to external AI only with your consent. The
assistant works in all eleven interface languages and can be operated entirely
**by voice**, hands-free, with offline speech recognition and read-aloud.

The assistant does more than read: it verifies. On request, it
validates national ID numbers (Romania, Switzerland, Germany, Austria, France,
Italy, Spain), IBANs, VAT numbers (live against the EU VIES system), EORI and
LEI numbers — before a wrong number ends up in a pleading.
![Every angle on one case](https://www.ironstick.legal/img/53_case_tabs_collage.png)
## 3. From case file to a submission-ready template — in minutes

This is the flagship. You write pleadings and letters **in dialogue with
the AI** — in IRONSTICK's own chat (on your API key) or through the
desktop-AI bridge (Claude, ChatGPT, Qwen or Kimi Desktop). **Compose text ›
With AI help** in a case opens the chat with the case and the document
already named; from there the AI works like an associate on the live file:
client master data, the case chronicle with document full texts, deadlines,
related exhibits, the annex list, your case instructions — and even the recent
history of the client's *neighbouring* cases, because the opponent's
answer often sits in the parallel file. Where information is missing, it asks
follow-up questions instead of forcing your case into fixed templates.

- **Research instead of assertion.** While drafting, the AI actively
searches the file. It may state that no reply was received only after a search
of the file has confirmed it.
- **Verification before hand-over.** A deterministic scanner checks the
finished draft against the live file: every evidence reference, every party,
institution and file number, every statute citation against the verified legal
library. Any contradiction blocks the hand-over, and internal file stamps are
removed from the output.
- **Red/Blue Team, built in.** When switched on, a separate review pass
reads the draft as opposing counsel before hand-over: substantial findings send
it back for rework, up to two rounds, and each finding is assessed on its merits
before it is accepted.
- **A mandatory review chain.** Before the long review starts, the AI shows you a summary of the draft — you can still make corrections. It then rereads the whole draft, checks it against your own earlier filings and, for a reply, demonstrates passage by passage that every statement of the other side is answered. After that it examines the pleading from the opposing party's perspective, evaluates it and corrects it; cross-references and time statements are checked as well. IRONSTICK signs off every stage, and any later change starts the chain again from the beginning.
- **A submission-ready template — never a finished filing.** The result
arrives through IRONSTICK's export dialog and lands in the built-in word
processor with one click: A4 pagination, your letterhead (first page or every
page), page-break control, signature placement, annex list taken over
automatically — print, PDF, DOCX or Markdown. You review, correct and sign;
the responsibility for what is filed stays with you.

**Why the pleading format is fixed — and what it gives you.**
IRONSTICK writes every pleading in one fixed, clean format on purpose: only
that way can it assemble the finished filing itself. The annex list in the text is
linked to the evidence in the file. In the print preview, IRONSTICK places
the document and all annexes into one PDF, page by page. You decide for every
annex page what goes to the court: a right click leaves a page out, practically
blank pages are removed automatically, and every annex keeps at least one page.
The page ranges in the annex list are recalculated each time, so they always
match the final PDF. Certification stamps in the language of the case's country,
your signature, continuous page numbers and the annex number on every annex page
are added automatically. Large filings — 3,000 pages, stamped and paginated — are
produced in under 20 minutes. Whenever you need it, the document itself is also
available as a Word file (DOCX).
Hours of file study and drafting become minutes of review —
you read, refine and sign.

## 4. Evidence intelligence — a file that retains every detail

The heart of IRONSTICK is evidence intelligence. Everything you capture —
scanned PDFs, e-mails with attachments, WhatsApp histories, photos, audio
recordings — becomes searchable full text. OCR is built in, with nothing to
install: on Windows it covers more than 35 European languages, including all
eleven interface languages. The search is deliberately tolerant: it still finds matches despite
missing diacritics, typical scan errors or partial names.

- **Annexes and filings, established from the document itself.** When a document
is captured, IRONSTICK reads which of your exhibits it physically contains and
which reference numbers it carries. The chronicle then shows, on every exhibit:
*filed with the court on … in case …* — and on every outgoing letter, its
full annex list. “Did I already file this?” has a one-click answer.
- **Reference-number chains.** Each reference number links all documents of
the same proceeding into a chronological chain — the documented history of who
wrote what, when, and whether it was answered.
- **Photos and recordings as evidence.** Photos keep their capture location (one click
to the satellite view), phone recordings become speaker-labelled transcripts —
all of it searchable, all of it citable evidence.
- **Cross-case awareness.** Conflict-of-interest check on intake, warnings
when the same opponent appears in several cases, a relationship graph of all
parties, and a relevance radar that finds related material you did not think to
look for.

**Recordings become text — automatically, on your own computer.**
Phone calls, hearing recordings, voice messages, videos: IRONSTICK accepts every
common audio and video format (Windows). You trim the relevant part, choose the
language, the number of speakers and the quality level (fast, medium, high) and see
the expected computing time before you start. Speech recognition runs entirely
offline on your computer. The AI then assigns the sentences to the speakers — with
your consent and pseudonymised; it may not change a single word, every line is
checked against the recognised text. What recognition did not understand with
certainty is marked instead of guessed. The result opens in the editor and, after
your review, becomes citable evidence.

**The network builds itself.** A desktop AI connected via the Bridge reads the file,
researches the parties on the internet and files every person, company,
institution and connection it finds as a one-click-to-approve proposal; a
background auto-linker ties every party to every case whose documents name it;
and the **Universe** turns the whole inventory into a fly-through 3D network
with automatically detected clusters — densely connected groups are highlighted
in red. Within hours you have a consolidated network of persons and companies
across your entire data set, which would not be feasible manually, and the
visualisation points straight to the cluster.

**What this means in practice — two days, measured.** Over two working
days in September 2026, a single desktop AI connected through the Bridge read the files of a
multi-party proceeding, researched the parties on the internet and filed what it
found; the lawyer's role was limited to reviewing and approving the proposals. The result, counted afterwards
in the database: **293 persons and companies, 11 institutions, 811 relationships
and 733 party-case links** — 2,487 review decisions in total, 97 per cent
accepted, 3 per cent rejected at the gate. By hand — sources read, every
person identified, every connection checked, every record typed — that is about
310 working hours: eight full-time weeks for one person, or half a year
alongside ongoing casework. Time is only part of the benefit. No one can keep 300
names and 800 connections in mind; the clusters highlighted in the Universe view
cannot be seen in a paper file. The 3 per cent are why the review gate
exists: each one would have been a wrong record had it been written without
review.

**IRONSTICK also draws a client's case map:** cases as hexagons,
grouped by your own matters, connected where they share parties, cite each other
as an exhibit or name the other's case number. The connected AI reads the same
map through dedicated tools.

![The Bridge, the Client App and a client's case map](https://www.ironstick.legal/img/60_mcp_network.png)
### OSINT at the push of a button — built-in research on persons and companies

OSINT (open-source intelligence) — the systematic evaluation of freely
accessible sources — is standard practice in investigative authorities and
commercial law firms, but it is manual work: everyone researches differently,
and everyone forgets something different. IRONSTICK turns it into a fixed
procedure. The AI supplies the name, city, district, country and whether the
subject is a natural or a legal person; the application then runs the same
documented procedure every time:

- **Your own files first.** A deterministic full-text search for the name
across the entire inventory, all clients: for each case, the ten most recent
matches with paragraph and character position, plus a count of further
matches.
- **Case-specific research material** such as commercial register extracts, land register extracts and the like: file it in the case and instruct the AI to take it into account.
- **Then the internet, on a fixed grid.** Career history, social-media
profiles (Facebook, LinkedIn, Instagram), location, adverse media and press
coverage, published declarations of assets and interests, tax information and
company holdings — for companies, the commercial register and insolvency
records. Search terms are formulated automatically in the language of the
subject's country, not in the language of your interface. The research runs
automatically in the background in the Client App, and the AI receives a
complete OSINT profile to work with, which is more accurate and considerably
cheaper than searching step by step.
- **Three search engines at once.** Google, DuckDuckGo and Qwant work
through the grid in parallel; the results arrive as one merged list without
duplicates. If one engine blocks, the others continue.
- **A prepared profile — not a verdict.** The AI receives both lists
together with the search terms already covered, opens every result and every
link one by one, eliminates namesakes and places only what is substantiated as
a proposal in the Data Consistency Monitor. Only what you approve is
adopted.

The result: a research profile that follows the same procedure and is as
complete for the three-hundredth person as for the first. Only publicly accessible sources are evaluated.

### What sets IRONSTICK apart

We know of no other product that keeps a full **relationship database** of
persons, companies and institutions at the level of the individual person,
breaks it down to the single case file and the single exhibit, presents it
clearly to the lawyer and gives the AI the same picture as text — together with
a 24-field **person analysis** for each person; the AI can only propose
changes to it, and each one needs your approval.

Conventional practice software typically keeps parties as an address book with a role in the case: no graph between them, no person analysis, no clusters, and its AI assistants read documents, not the network. Most AI legal assistants run in the provider's cloud with a model the firm cannot choose. Large investigation platforms offer graphs and profiles, but they are designed for authorities and corporations and usually require a consulting project; they have no case file in the lawyer's sense and no interchangeable AI that reads them. A firm running criminal and civil proceedings with dozens of parties and interconnected cases falls between these markets. That is where IRONSTICK sits.

### Judges and other participants — who is connected to whom, and why

This knowledge does not apply to a single case only. It covers every party, every relationship and every role a person has played in one of your files, across cases and across clients — who sits on which board, who signs for whom, who appeared in which proceeding as witness, opponent or office-holder. It grows every day as a by-product of the work that lawyer and AI do on the files.

- **Relationship analysis.** Every connection between persons, companies and institutions is stored with the evidence that supports it; dense networks are detected automatically as clusters. You see not only that two parties are connected, but through what.
- **Judge profiles.** Every decision in your files is attributed to the judge or prosecutor who made it — from the heading and the signature block, not by inference. Added to this is the OSINT research on the person: career, public statements, connections to parties and law firms.
- **Judgment evaluation per judge — done once, available for good.** How does a particular judge decide, what do they respond to, what do they take up from the pleadings and what do they pass over? Every court decision is recognised on capture — next to incoming/outgoing there is a “court decision” checkbox you can change at any time — and lands on an assessment list; the existing archive is searched automatically as well. The AI works through the list decision by decision: it reads the decision and the submissions of both sides that preceded it, IRONSTICK measures which share of the reasoning comes from whose submission, and the AI answers a fixed grid — arguments, law, evidence, basis of decision, style, outcome and a short characterisation of the panel. Nothing is stored until you approve it, linked to court, judges and court clerks; if one of these persons is missing from the master data, they are first researched via OSINT and created. A decision does not change, so it is assessed once and the assessment remains.
- **Pleadings informed by the court's practice.** A pleading can take into account the individual judge or the panel that will read it — composition, prior decisions and positions, documented connections to the parties and, where present, grounds for recusal — because the documented connections and decision history are available to you. Before every pleading to a court, the AI reads the collected assessments of that court and of every judge on the panel. If decisions are still unassessed, IRONSTICK asks before the output whether you want to assess them now — so the result still flows in — or later; and at the first start of the day the AI reminds you of its own accord.
- **Making coordination visible.** Any two pleadings, even from different proceedings and clients, can be compared word for word: identical text blocks are found automatically, even across OCR errors, and can indicate coordination between counsel.

In court that is the difference between presenting a case and knowing the field: every document can be aligned with the actual network around the case — who is connected to whom, and who previously appeared on which side — because the lawyer knows where everything is. Compiling this manually is impractical; in IRONSTICK it builds up as part of daily case work.

![The whole network from every angle](https://www.ironstick.legal/img/57_persons_maps.png)

The Universe after two days of automatic capture: every party of the data set as a node, weighted by connections, grouped into clusters; densely connected clusters are highlighted in red. No names were entered manually.

**One sheet instead of a thousand lines.** The relationship network of a person or
a case and the chronology of its documents are ready as a chart at the press of a
button: the network shows the fifty most urgent nodes, weighted by deadlines, recent
activity and connections; the chronology lists incoming and outgoing letters in time
order, with the annexes right beside each letter. Every number in it is clickable and
leads to the evidence, the person or the institution. One click on **Capture** takes the chart to document capture, where you assign it and it receives its stamp when saved; from the case network you can also create a
**Wallpaper**: a printable A4 landscape overview for the office wall; it is
downloaded only and is not stored in the case file.

The desktop AI connected through the Bridge draws in the same design too: processes,
procedural paths, chronologies, networks. It discusses the chart with you and shows
the preview in IRONSTICK; drawing and the error check before display are
deterministic, without AI. Charts can also be viewed on the tablet.

## 5. A document system built for court

IRONSTICK is also a full DMS — one that thinks in exhibits, stamps and page
numbers rather than folders:

- **Capture with AI pre-fill.** Drop a scanned PDF into the inbox: OCR
runs, the AI proposes title, type, parties, case assignment, date and deadline,
and IRONSTICK additionally recognises the matching case on its own
— you confirm instead of typing. Every captured file gets a cryptographic
**integrity fingerprint** (SHA-256), so any later alteration can be
detected.
- **Stamping & pagination.** Merging, Bates numbering, file stamps,
metadata cleaning — every produced PDF carries a searchable text layer, so the
finished document can be searched and quoted without ever re-running OCR.
- **The dossier assistant.** A guided, five-step path from chronicle to a
submission-ready case dossier: choose entries, cover sheet and jurisdiction, preview
with page thumbnails, then a finished PDF with table of contents and Bates
numbers — plus an **EDRM evidence ZIP** for eDiscovery hand-over.
- **Redaction that holds.** Category switches (clients, names, places,
amounts, ID numbers, IBANs …), a local finder that marks candidates, manual
marking on the page — and on export the redactions are **burned in
irreversibly**, with a clean searchable text layer over the top.
- **Mail dispatch for oversized files.** A large PDF is split
losslessly into parts that fit the size limits of court e-filing mailboxes,
each with a ready-made delivery e-mail in the document's language — copy,
attach, send.

### Large-scale filings — 3,000 pages, stamped and paginated, in under 20 minutes

In civil procedure and large-scale litigation this goes straight to the
biggest pain points of lawyers and their staff — time, error rate and manual
labour:

- **Time savings.** Work that otherwise falls to a paralegal or the
lawyer — assembling and merging PDFs by hand, checking pages, stamping every
page manually (Bates numbering) — runs fully automatically here.
- **Consistency and fewer errors.** With more than 2,000 pages,
manual work quickly produces mistakes: misplaced stamps, wrong page numbers on
annexes, missing links, missed formatting rules. An automated pipeline
applies the same stamping and pagination rules to every page.
- **Stable with very large files.** Standard office software and PDF
viewers often become unresponsive with a 700 MB file of 3,000 pages as
soon as you try to work through it or re-paginate it.
- **Speed under deadline pressure.** Shortly before a filing deadline,
large pleadings with all their evidence are ready as a submission-ready
template within minutes.

![Building a dossier, end to end](https://www.ironstick.legal/img/54_dossier_flow.png)
**Tested.** 3,000 pages of pleadings, annexes mixed text and
image, stamped and paginated, output one 700 MB PDF — in under
20 minutes.
Part II — AI at full depth

## 6. Your desktop AI, plugged straight into your file

![The AI assistant works alongside the lawyer, directly on the live case file.](https://www.ironstick.legal/img/cutout_assistant.jpg)

The AI assistant works alongside the lawyer, directly on the live case file.

For deep analytical work, IRONSTICK offers something no export folder can:
a **live bridge** between your own desktop AI — **Claude Desktop, ChatGPT
Desktop, Qwen Desktop and/or Kimi Desktop**, each licensed separately and unlocked in
your Client App licence key — and the running application. The AI reads the current
file state through **more than 200 purpose-built tools** — chronicles, full
texts, e-mails, deadlines, master data — and works at full depth:

- “Read the whole case and tell me where our position is weakest.”
- “Draft the appeal in our pleading format and hand it over to the word
processor.” — the draft appears in IRONSTICK, ready for letterhead
printing.
- “Compare the three expert opinions and build me a contradiction table.”

**Built for large files — why a live bridge beats any file export.**
The bridge add-ons are designed for one purpose: **working on large
data pools that demand analysis at full detail**. You keep full control
through switches, consent gates and per-AI licensing, while every conversation
and every evaluation can draw on the **entire IRONSTICK data pool**.
This level of detail cannot be achieved through a conventional file feed
(exporting Markdown files into an AI chat): even the largest AI context windows
hold only a few megabytes of text at once —

As stated by the providers, November 2026.
| Model / platform | Context window (tokens) | ≈ text capacity |
| Claude (Opus / Sonnet) | 1,000,000 | ~2,500 KB (2.5 MB) |
| ChatGPT (app, Plus) | 256,000 | ~1,000 KB |
| ChatGPT (app, Pro) | 400,000 | ~1,600 KB |
| ChatGPT (API maximum) | 1,050,000 | ~4,000 KB (4 MB) |

— while a mature case archive is many times that. The bridge works around
this limit: instead of loading files into the window, the AI is given
**more than 200 purpose-built tools with strict instructions on how to use them**, and
fetches precisely the passages, documents, e-mails and deadlines it needs,
exactly when it needs them — fresh from the live system, across the whole
pool. The context window then carries the analysis, not the bulk.

**And when the task really is “read everything”:** with a single call
the AI stages the **entire case** — in full, with OCR text normalised — into a
local work area and then reads it piece by piece, without pushing the
whole file through the window. A 400-document case becomes fully readable,
and the staged copy is always complete.
The same area gives the AI a **one-call session start** — date, language,
your current screen, the daily briefing, deadlines and open tasks in one
summary — and a **freshness check** invalidates a staged extract as soon as
the underlying file changes, so the AI works from the current state of the
file.

**The IRONSTICK browser — you see what the AI reads (Windows).** IRONSTICK opens web pages and documents from your file in its own browser window with a red frame, so you can always tell it apart from your personal browser. On your instruction the AI reads what is open there — not by remote-controlling the window, but as cleaned text; for a document from your file it knows exactly which item it is.

### Why a language model alone cannot handle large case files — and how IRONSTICK solves this

A language model on its own is outmatched by a mature case file, and,
contrary to a widespread assumption, a bigger context window (1 or 2 million
tokens) does not fix that:

- **The “lost in the middle” phenomenon.** Give a model hundreds of raw
pages at once and its accuracy on details drops sharply: facts from the middle
of the file are “forgotten” or hallucinated.
- **Context overload.** A single tool result that pours 50,000
characters of full text into the chat overloads the conversation: the model
loses orientation, the context overflows, and everything becomes slow and
expensive.
- **No memory, no structure.** A language model on its own knows nothing of deadlines,
file numbers, parties, Bates stamps or the chronology of proceedings. It sees
one long string of characters.

IRONSTICK does not use the language model to carry the whole file; it
gives it precise, structured access:

1. **Structure first.** Before the AI sees a single word, IRONSTICK has
already structured the file: documents classified, dates indexed, OCR
repaired, annexes linked.
2. **Decoupling through tools and a work area.** Through more than 200
specialised tools the AI fetches precisely what the question needs — and when
a result is very large after all, anything above a fixed size limit is
automatically diverted to a local, AES-256-encrypted work area that only
IRONSTICK can read. The chat stays uncluttered.
3. **Persistence.** Through the shared AI memory, the automatic daily logs
and the work area, analysis results are kept across sessions: the AI builds knowledge over
weeks instead of starting from zero with every prompt.

**The bottom line:** a language model without a system is like a
brilliant lawyer handed 5,000 loose, unsorted pages and told to find the
decisive line in five seconds. IRONSTICK is the infrastructure that turns
that lawyer into a functioning high-performance practice.

Set-up is one button per AI in the configuration (for Qwen Desktop,
IRONSTICK copies the set-up text for you to paste into Qwen's own dialog); for
Claude and ChatGPT, a skill plug-in gives the AI your firm's mandatory output
formats. What the AI learns about a case is kept in a **shared AI memory** —
compact, client-bound and visible to you; the AI can propose to store, change
or delete an entry, and each change takes effect only after you approve it. And
you always see what is happening: whenever an AI reads your file, its symbol
lights up in the menu bar.

**Websites with an access check.** If a website requires a
confirmation before it releases its content, IRONSTICK opens the
page in a separate window: you confirm there, and work on the page
continues seamlessly.

The first access in each program run requires your explicit
consent; documents marked secret are invisible on this channel; changes the AI
proposes to your master data wait for your approval in the Data Consistency
Monitor. Chronicle entries arrive as a prefilled capture form — you add photos
if you like and save it yourself.
**The bridges run in parallel.** If several add-ons are
licensed, Claude, ChatGPT, Qwen and Kimi can be connected at the same time and even
work on the same case simultaneously — sharing the same file state, the same
AI memory and the same review gates, while the menu bar shows one pulsing logo
per active AI, so every access is attributed to the AI that made it.
### Several minds, one case — a built-in board of advisers

This goes well beyond a chatbot. Because the bridges can run
at once, you put **independent AIs on the same file** and let them check
each other's work — with IRONSTICK in the middle as shared database and
coordinator. The decisive point: Claude, ChatGPT, Qwen and Kimi are **different
models with different training**, so you get **genuinely different opinions
and approaches** — a real second opinion, not one model nodding at itself.
These are **among the leading AI models available today**; IRONSTICK
puts them, side by side, on your case.

![Several independent AIs on the same case — a board of advisers checking each other’s work.](https://www.ironstick.legal/img/cutout_advisory_board.jpg)

Several independent AIs on the same case — a board of advisers checking each other’s work.

You direct them in plain language, like a partner steering two associates:
*“Work this out … now give it to the other one to check … bring me its
assessment … revise.”* The draft, theory or pleading is handed over through
IRONSTICK, the second AI reviews it critically — tasked to find weaknesses,
counter-arguments and errors, not to praise — and its assessment comes back to
you. Both work on the **identical case data**, and the entire exchange is
logged and traceable.

Multi-model review is particularly useful for:

- **Developing theories of the case** — build one, have the other stress-test it.
- **Pattern recognition across the file** — two models catch what one misses.
- **Working out tactics and strategy** — proposal and counter-proposal.
- **Drafting and hardening pleadings** — write, review, rebut, refine.
- **Cross-checking your general lines of reasoning** — before the opponent does.

### A file that repairs itself — with you in the loop

Capture errors and poor scans no longer have to be permanent. When the AI
encounters a stored full text that is truncated or damaged by a poor OCR run, it
does not quietly work around it — it **repairs the record**: it requests a
fresh, page-accurate re-scan of the original PDF (you pick the pages in the
familiar page picker), compares the new scan with the stored text passage by
passage, and is instructed to repair only mechanical OCR errors, without
rewording and without changing numbers, names or amounts. It then hands the
corrected full text back. You see it in full, and the corrected text
**replaces the old one only after you approve it**. The archive becomes
cleaner with every week you work in it.

Where even a fresh scan reaches physical limits, the AI asks **you**
specifically: instead of a generic “file could not be processed”, it opens the
entry, names the exact spot (“page 12, near the top”) and asks you to type the
illegible words, each with page and position — or to hand it the original
PDF via the paperclip so it can read the scan with its own vision. You never comb through a
200-page file; you are called in only for the passages the machine cannot
resolve with certainty. Conventional systems report either success or a generic
error; IRONSTICK instead combines AI speed with a targeted human check.

Part III — Verification and sovereignty

## 7. The hallucination firewall — deterministic verification gates

The one justified fear about AI in legal work: models invent citations,
misquote figures, and claim to have read files they merely skimmed. The
industry answers with prompts and disclaimers — IRONSTICK answers with
architecture. Your desktop AI works on your file through **more than 200
purpose-built tools**, and every path to an outgoing document leads
through deterministic gates: pure logic, no AI checking AI.

![Watch the AI work — live](https://www.ironstick.legal/img/50_two_windows.png)
- **Read proof.** The system records, line by line, what the AI
actually read of your file. Unread passages are flagged in every
answer — and delivery stays locked while gaps exist. “I read
everything” stops being a claim and becomes a measurement.
- **Citation provenance.** Every evidence reference must point to a
real record the AI demonstrably fetched and fully read in this working
session — citing from search snippets or from memory fails
verification.
- **Statutes only from a verified library.** Cited articles are
checked against the letter of the law stored in your own verified library;
new sources enter it only through your consent dialog. An invented article
number blocks delivery.
- **Zero tolerance for numbers and names.** Amounts must match the
record exactly, party names down to the diacritic; IBANs and Romanian
personal numbers (CNP) run through checksum validators, and a number that fails its checksum blocks delivery.
- **Delivery only against attestation.** A formal pleading is refused
unless a fresh verification of exactly that file state came back green —
every edit voids the attestation, and five failed rounds abort the loop
and notify you. Every delivered document carries its verification
stamp.
- **No silent changes after delivery.** A correction to a delivered
document is not applied silently: the old version is visibly voided,
and a new version is created. Your corrections feed into the review.
- **No side doors.** A letter declared “informal” is
content-checked and rerouted through the formal gates; documents cannot be
renamed to reset their version history; statute knowledge from press
articles or the model's memory fails verification — only the law's own
text, demonstrably read from the library in this session, grounds a
citation; and every answer about a case carries the case's true subject
from your records, so any mix-up with another case is immediately
apparent.
- **Quotes across case boundaries.** If a quote comes from a document of
another case, the verifier finds it across the entire archive and names the exact
document — the AI reads exactly that one, not the whole foreign file.
- **Origin of every document.** For every document, the AI learns where
it comes from: if it comes from the opposing side or an authority, its
statements must first be critically examined; if it comes from the client, it
reflects the client's view.
- **Protection against injected instructions.** Web pages can contain text addressed to the AI rather than to you. Before web content reaches the AI, IRONSTICK removes hidden bait text and checks the rest against a pattern catalogue in eleven languages. Detected passages are made illegible and the AI receives a notice — pure logic, no AI checking an AI.
- **No repetition at your expense.** If a desktop AI tries to reload data it already
holds unchanged, the call is refused — your AI budget and time go into the work, not into
repetition.

**And you are not tied to one AI vendor.** The
built-in AI runs on **Qwen, Kimi, ChatGPT and Claude** — four
identically structured sections in the configuration. **IRONSTICK also keeps costs down automatically:** every provider you have set up
is used automatically, lowest cost first — Qwen, then Kimi, ChatGPT,
Claude. At every start the program checks which of them respond; if a quota or
credit runs out during the day, it switches automatically to the next configured
provider and shows a warning symbol in the menu bar; the next day it checks
again. No selector, no interruption, no lost work. The
desktop side offers Claude, ChatGPT, Qwen and Kimi.
**Background work at no cost:** for tasks that run in the background
without your involvement — summaries, e-mail triage and the like — you can
also add the free tiers of **Groq, OpenRouter and
Mistral** and switch each one on and off individually. If a provider falls short
on price, terms or performance, you simply remove its key — the gates, and
therefore the delivered standard, stay the same.
### The IRONSTICK way

![The IRONSTICK Bridge connects your AI provider to the Client App](https://www.ironstick.legal/img/58_mcp_bridge.png)
**What this means for your choice of AI:** with these
gates in place, the strength of the connected model mainly affects execution
speed and the number of correction rounds; the delivered result has to pass
the same enforced gates either way.
**Checking is not enforcing.** Some vendors now
advertise “citation checking” — often a best-effort
annotation service: look up citations, add references “where
possible”, then return the document regardless of the result, through
the vendor's own cloud.
IRONSTICK's verification works like a compiler, not a suggestion: seventeen
deterministic gates, one blocking verdict, an attestation bound to the
exact file state — every edit voids it — and no formal document is delivered
without it. IRONSTICK does not merely annotate; it enforces.
To our knowledge, no other legal software enforces this
combination. Observability tools log after the fact, sandboxes restrict
access — IRONSTICK verifies the work at the only interface the AI has.

How the internal AI chat and the bridges for Claude, ChatGPT, Kimi and Qwen work, and what the IRONSTICK approach makes possible: [the Bridge compendium](https://www.ironstick.legal/bridge.html).

### The classic way

![The classic way: AI without access to cases, only uploaded files](https://www.ironstick.legal/img/64_classic_way.png)
Most AI assistants still have no connection to the database that holds your cases and client data — the only way in is uploading files. Many cloud-based systems work the same way: at most, they move text files around in the background, invisible to the user. The AI then draws only on the information in exactly these uploaded files. If they are not too large, the AI may take everything into account; otherwise hallucinations become likely. The AI cannot access the case itself: it works without sight of the file and tries to get the best result for the user. That can lead to serious misjudgements and false statements.

Additional skills and plug-ins do not change this. They can even make it worse: their extensive instructions take up a considerable part of the context window before the AI has read the first document — and the fuller that window is, the more unevenly the AI takes into account what is in it.

![Overloaded AI: skills, plug-ins, instructions and files fill the AI’s context until it overflows](https://www.ironstick.legal/img/71_context_overload.png)
An AI model has a limited working memory. If it is flooded with large amounts of material at once, it cannot retain everything and may lose important facts or instructions.

![Best effort: the overloaded AI is sent on its way with nothing but requests and fails at the goal](https://www.ironstick.legal/img/72_best_effort_path.png)
That is what happens today with “best effort” AI offerings, however they are advertised. In practice, the AI’s context is simply filled with your case data: entire dossiers, long texts and, on top of that, long instructions and possibly plug-ins and skills. The context fills until nothing more fits, and is then compressed or only partly read. The AI is then asked to draft your pleading on that basis, and the risk of error is high.

![IRONSTICK: prepared data and short instructions; the AI is guided through signposts and safety gates to a verified goal](https://www.ironstick.legal/img/73_ironstick_guided_path.png)
IRONSTICK takes a different path. Instructions are capped at 20,000 characters, a small fraction of the context window of the supported models. Your case data is first prepared by IRONSTICK, and the AI receives only the data that matters (compact, structured data without prose). On the way, the AI is not left alone: it is given tools and safeguards, and it is guided to the goal by signposts and verification gates.

### The difference?

![Best effort: the AI is sent on its way with nothing but requests and the hope that it respects the instructions, and fails](https://www.ironstick.legal/img/74_best_effort_requests.png)
Classic best-effort offerings first give the AI a long set of instructions, then rely on it to follow them and not to have forgotten anything.

![IRONSTICK: continuous guidance with verification gates and additional information all the way to the verified goal](https://www.ironstick.legal/img/75_ironstick_coaching_line.png)
IRONSTICK guides the AI continuously, with checkpoints, additional information and tools along the way, and checks both the path and the result of the AI model throughout.

## 8. The structural problem of SaaS — and the IRONSTICK answer

**With cloud practice software, your data and part of your responsibility
move to a third party's infrastructure. IRONSTICK keeps both with the
firm:** the system is designed so that the workstations keep working if
IRONSTICK SERVER fails or is compromised.

**SaaS solutions promise security; this architecture builds it into the
structure.** Cloud and SaaS practice solutions share a structural
weakness: they are **centralised**. IRONSTICK is
**decentralised** by design.

![Attacks that can bring down centralised platforms meet a decentralised structure here — the practice keeps working.](https://www.ironstick.legal/img/cutout_attacks.jpg)

Attacks that can bring down centralised platforms meet a decentralised structure here — the practice keeps working.

- **The central single point of failure.** When a SaaS provider is
compromised — a supply-chain attack, stolen cloud credentials, a
configuration error at the cloud host — many firms can be affected at
once. This architecture distributes the risk **physically** across the
individual office locations and their own local networks.
- **The liability and data-protection trap.** With SaaS, highly
sensitive client data sits on someone else's servers — Microsoft Azure,
AWS, the vendor's data centres. After a data breach, an access request under
the US CLOUD Act or a server outage, the firm is exposed, professionally and
under data-protection law. With IRONSTICK, data is **stored locally
on the firm's own devices**.
- **Dependence on the provider's availability.** If the SaaS provider's
data centre goes down, nobody in the firm can work. Here, in the worst case,
the administrator replaces the NAS with a standard unit, and in the meantime
the practice keeps working on the workstations.
- **No silent data loss.** A single defect in a cloud database can
erase data irrecoverably. In an emergency, this system can be restored from
the physically separate workstations, including laptops that were offline at
the time.

**Independent of the vendor.** Your case file is stored on your own hardware, the licence is checked offline on your computer, and IRONSTICK needs no vendor server to work. Every case can be exported at any time as a PDF dossier or an EDRM evidence ZIP, and a complete backup to your own storage device takes one click.
## 9. Why IRONSTICK — and not a cloud legal AI

**The file stays yours. The AI comes to your data — not your data to the
AI.** This is the fundamental difference between IRONSTICK and cloud
legal-AI platforms. Much of the industry has moved to one model: your
client files live on a vendor's cloud, and an AI rented from that same vendor
works on them there. IRONSTICK turns that model around — the case file stays on
*your* hardware, and your own AI subscriptions connect to it through a
controlled, documented bridge.

![No cloud: the entire file fits on a storage device of your choice — even an encrypted USB drive.](https://www.ironstick.legal/img/cutout_no_cloud.jpg)

No cloud: the entire file fits on a storage device of your choice — even an encrypted USB drive.

Four arguments, in the order your clients would rank them:

- **Data sovereignty and professional secrecy.** The database is stored
on your own hardware; IRONSTICK sends no client data to the vendor. Pseudonymisation,
audit log and the complete GDPR data-flow declaration ship with the product —
including a ready-to-paste model clause for your client privacy notice. For
professional secrecy and GDPR accountability this is not a feature; it is the
answer.
- **Bring your own AI — and keep the cost structure.** You work with your
own Claude, ChatGPT, Qwen and/or Kimi accounts (a top-up of at least 20
dollars/euros per provider is recommended) instead of paying monthly per-seat fees in
the hundreds of euros for a cloud legal-AI platform. Over several years, the
difference for a small firm can be substantial, and you work with the same
leading models that many platforms build on.
- **Controlled access.** More than 200 tools give the AI live access
to the real file — chronicles, full texts, deadlines. But proposed changes to
your records appear as a redline (strikethrough for deletions, bold for
additions) and are applied only when you accept them. Every reference in a
generated pleading is checked against the file. The AI is powerful; the final
decision stays with you.
- **Precision and speed.** The IRONSTICK bridge gives the AI
direct access to *prepared* data: every document already OCR-processed,
classified, dated, referenced and case-bound. The AI does not have to spend
time reconstructing what a file contains — it queries the exact
entry, receives the exact full text, and cites the exact reference. Large
content moves by reference through the bridge instead of being retyped by the
model, byte-exact and in seconds. The result is a level of accuracy and,
above all, processing speed that copy-and-paste chats and cloud uploads do
not achieve.

## 10. Why not simply use an AI chat?

More and more lawyers are already experimenting with a general AI chat —
pasting documents into it and asking questions. For a single short document it
works. Under a real practice workload it reaches two hard limits — and both are
exactly what IRONSTICK is built to remove.

- **The context window.** An AI chat can only work with what fits into its
context window at once — at best a few megabytes of text (see the context-window
table in [Chapter 6](#ch6)). A mature case archive is many times that. So a plain chat forces you to
select a few pages, silently drops the rest, and starts again from zero
every session. IRONSTICK works around this limit: the assistant fetches exactly the
passages, documents, e-mails and deadlines it needs — fresh from the live
file — and carries its distilled insight forward in a persistent, client-bound
memory across sessions.
- **Organisation.** A plain chat has no structure — no clients, cases,
entities, institutions, deadlines, chronicle or cross-case links. Every session
is an island: nothing is filed, nothing carries over, nothing is auditable.
IRONSTICK *is* the structure: the AI works inside your organised file,
cites the exact exhibit and case number, honours the deadlines, and leaves a
clean trail behind it.

The gap is simple: chatting with an AI, versus defensible, repeatable case
work that still stands up months later.

![The Bridge: verification gates, tools and database](https://www.ironstick.legal/img/59_mcp_detail.png)
**And why external AI models at all — instead of a model of our own?**
The reason is economic. Operating a proprietary language model of usable
quality would require a substantial investment in servers, cooling and
infrastructure, plus annual running costs for operation, maintenance and
specialist staff. For a law firm, that investment is not sensible. And if
IRONSTICK offered a cloud AI service of its own instead, it would be the same
kind of service as Claude, ChatGPT, Qwen and Kimi already provide — only that
IRONSTICK could not offer it at their prices. That is why IRONSTICK
connects your own subscriptions to leading models instead of offering a model
of its own.

Part IV — Data security: your data, your rules

## 11. Everything local — by construction

![The file, the evidence and the secret compartment stay on your own hardware — protected by construction.](https://www.ironstick.legal/img/cutout_own_hardware.jpg)

The file, the evidence and the secret compartment stay on your own hardware — protected by construction.

- **Offline-first.** The entire file lives locally, in a directory
**you** choose — an encrypted USB drive, if you prefer. No forced cloud, no
vendor server, no account requirement. Without internet, the file, search,
documents and local assistant keep working.
- **AES-256 encrypted database.** The file that holds your entire
practice — clients, cases, chronicle, e-mails, deadlines, the AIs' memory —
is encrypted on disk with AES-256, every page individually and
integrity-sealed. Nothing to set up, no password to remember: the clear text
exists only in memory while IRONSTICK runs. Anyone who copies the file from a
disk, a USB stick or a backup obtains only ciphertext.
- **AES-256 encrypted documents.** The document store itself — every
original PDF, scan, image, recording — rests encrypted as well, each file
with its own integrity seal.
- **Authenticator access code.** Every start asks for a standard
six-digit authenticator code (TOTP) from your phone's authenticator app. No
password to remember, nothing stored: the secret is derived
from your licence key at run time, and the licence key gets you back in if
the phone is lost. Until the code is entered nothing is shown, and the AI
connectors receive no case data. The configuration file with your API and
mail credentials rests AES-256 encrypted as well.
- **Pseudonymisation before external AI.** Before in-app functions call an
external AI, names, company names, case numbers, IBANs, phone numbers, e-mail
addresses, party addresses and ID numbers from your records, plus Romanian
personal and tax numbers found in the text, are replaced by placeholders on
your machine; the answer is translated back locally.
- **Consent and audit.** External AI runs with your own API key.
Interactive functions ask for your consent first. Calls through the central AI router are pseudonymised and logged —
the audit trail stores exactly what actually left the machine.
- **Secret documents (Windows).** A hidden, password-encrypted
compartment for documents only the lawyer may see: invisible in every
list, excluded from every AI channel and every export, never synced to the
tablet, and included in a case hand-over to a colleague only after your explicit
confirmation — with an emergency function that permanently deletes all secret
documents.
- **Backups and sync without cloud.** One-click full backup to wherever
you want; Windows ↔ tablet sync runs over a USB cable, checksum-verified. On
the tablet, appointments, deadlines and hearings can be mirrored into an
“IRONSTICK” calendar in your Google account, so a phone signed in to that
account receives calendar entries only — never file contents.
- **Moving data to an external drive — verified before the switch.** If you want to
run your office PC and laptop with the same file on an external SSD, IRONSTICK checks
the target before the move: free space, actual speed, file system and whether test
data reads back unchanged; network drives and cloud folders are refused. After
copying, every file is compared by checksum; the switch happens only when everything
matches, and the old folder is kept under a new name. IRONSTICK recognises the drive
regardless of its drive letter; if it is missing at start-up, IRONSTICK says so
instead of silently opening an empty data set. You are warned when the drive is
85 % full. The drive must meet the [storage requirements](#ch15).
- **Written disclosure.** A complete GDPR data-flow declaration ships with
the system — every external transmission, its exact content, and where the
boundaries lie. Including a model clause for your own client privacy
notice, in all eleven interface languages.

![AES-256 encryption in the Client App and the Bridge](https://www.ironstick.legal/img/61_encryption_flow.png)
All protection layers described here are active out of the box — with nothing to configure and no setting that can disable them by accident: **data at rest** AES-256 encrypted — database, every document, the configuration and the AI's entire workspace. **Access at run time** only with the code from the authenticator app. **Data in motion**: every path documented in the GDPR declaration that ships with the product.

Cloud legal software sells you the promise that someone else keeps your
data safe. Here the protection is part of the construction, on your own
hardware, and you can verify each layer yourself.

Part V — Growing with the firm

## 12. Multi-user practice: IRONSTICK SERVER

![IRONSTICK SERVER runs on an ordinary Synology NAS, e.g. a DS223j from around €180.](https://www.ironstick.legal/img/62_server_fanout.png)

IRONSTICK SERVER runs on an ordinary Synology NAS, e.g. a DS223j from around €180.

For practices with several lawyers, IRONSTICK offers **IRONSTICK
SERVER** — the office server — a separately licensed add-on that turns independent
workstations into a coordinated multi-user practice, **without a cloud and
without giving up the local file**. It runs as a native package on a
Synology NAS — compact, low-maintenance storage devices widely used in small
offices — on any model with DSM 7.0 or newer, entirely inside your own network and
without AI traffic.

**Why a Synology NAS — and why that is not an IT project.** We chose
Synology deliberately because these devices are plug and play: connect power
and network and they are ready to use. Installing the IRONSTICK SERVER package
takes a few minutes and requires no console and no configuration files;
administration takes place in a browser. The workstations are just as
undemanding: the installer is a fully guided set-up that needs no IT
knowledge and no lengthy questionnaires — start it and enter the licence
key. Workstations and server find each other in the network automatically;
nobody types an address. A single-desk practice needs no NAS at all —
the server is an optional add-on for firms with several lawyers.

- **Share cases, keep your file.** Release a case to a colleague with
one action; they subscribe and receive a complete copy into their own local
file. Revocable at any time; documents marked secret are not shared. Several
lawyers, each with their own AI, can work on the same case
**at the same time** and send the case owner messages and analyses
directly from their AI session.
- **One legal library for the whole firm.** Every statute text a
colleague verifies and releases becomes available at every desk — and to
**every desk's AI**: the assistant and the desktop-AI bridges cite the
same verified, verbatim text from the shared library instead of fetching the
web again or trusting model memory. Review dates, red flags for stale
entries and automatic reassignment when a contributor is absent keep the
library current — one colleague's research becomes the whole firm's verified
knowledge. A **shared review duty** keeps it accurate: every workstation
re-checks its own contributed sources after two weeks — as an automatic
background task, without any action by the user. If a contributor is absent
at check time, the server distributes their checks among the other
workstations; after four weeks a source is coloured red. Once verified, a
source remains in the library; superseded versions are archived, not
deleted.
- **A firm-wide time overview.** Every workstation reports its measured
working time in the background; the server's admin pages show time per case,
per client and per day — for a single user or the whole practice — plus
presence, case-sharing history and a security log.
- **Administered in a browser.** Registration approval, licence, users,
laws and time — all on one admin page served by the NAS itself. Yearly
licence with a defined number of seats.
- **One person and company network for the whole firm.** Persons, companies,
institutions, their relationships and person analyses captured at one workstation are
available to everyone via the server; duplicates are recognised and merged during
reconciliation. Every record has an owner: colleagues do not change it directly, they
send a proposal that the owner accepts — if the owner does not respond within 48 hours,
ownership is transferred. Deleting a colleague's record also becomes a proposal.
- **Judge experience of the whole firm.** The assessments of court decisions
travel with this network: every colleague assesses the decisions from their own files,
and every AI connected to the server reads the whole firm’s experience with this court and these
judges before a pleading — each with an indication of who assessed it.

### Case hand-over and subscription — how it actually works

Releasing a case is a deliberate act, never a side effect. The owner
shares the case from within the app; it travels to the server in a
**two-phase transfer** — metadata first, file content second, so an
interrupted transfer does not leave a partial case behind — and large files are
content-addressed, so identical documents travel and are stored only once.
The server assigns **fresh internal IDs** to everything it stores: a
received case cannot collide with data already on a colleague's
workstation. Colleagues see the shared case on their own server-cases
screen and **subscribe**; the subscriber receives a complete copy into
their own local file and works on it with the full system — search,
assistant, AI drafting, everything. The owner can revoke the share at any time,
the administrator can end any subscription centrally, and every share,
subscription and export is recorded with date, time and address. Documents
marked secret are excluded from shared cases; a transfer of case ownership
includes them only after the owner's explicit confirmation.

**The key advantage: simultaneous AI-assisted teamwork on one
case.** Every subscriber works on their copy with the full system —
including their own desktop AI. Several lawyers can therefore work on the
same case **at the same time**, each with their own AI reading the file
at full depth, and send the case owner messages and finished evaluations
**directly from the AI session**: a contradiction table from one desk,
a revised draft from the next, a risk assessment from the third, all
reaching the owner while the work happens. When a deadline suddenly
looms or a hearing is brought forward, several colleagues can work on a
single case in parallel — divided workstreams, one owner keeping the
file.

### A legal library that grows with your work — connected directly to the AIs

Every IRONSTICK desk maintains verified statute texts as full-text
Markdown, each entry tagged with jurisdiction, source link and review date.
The assistant and the desktop-AI bridges reach this library through three dedicated tools: a fuzzy search (the jurisdiction is a mandatory input, so legal systems are not mixed), the verbatim retrieval of the stored text (the AI cites the verified wording, not its training memory) and the submission of new sources (whenever the AI encounters a relevant legal
source online, filing it is a **duty, not an option** — link only; the
application downloads, converts and verifies the text itself, and you
release it through the review gate of the Data Consistency Monitor).

This is what makes the library **dynamic**: it grows out of the
firm's daily work. Every research session of every colleague — human or
AI-assisted — feeds it. With IRONSTICK SERVER, each released statute is
de-duplicated centrally (same source updates the entry; a newer version of
the same text wins, the superseded one is shelved, not lost) and
**mirrored to every desk**. Review dates keep it honest: entries
unchecked for over a month turn red on every desk and in the web admin, and
if a contributor is absent, the server reassigns their entries evenly among
the active users, so the review duty continues during holidays. The result:
all the firm's AIs argue from **one verified, maintained statute library** —
verified once by one colleague, cited verbatim at every desk, maintained
under a common duty — instead of every desk fetching the open web again and
trusting whatever came back. And it is civil-law thinking end to end: the
authority is the codified statute text, cited verbatim, which is how courts
in civil-law jurisdictions expect authority to be cited.

### Central mail intake — the Central Scan App

Available **only together with IRONSTICK SERVER**: the
**Central Scan App**, a stand-alone program for the office clerk's PC —
no IRONSTICK installation needed there. **Up to three Central Scan
licences** can be acquired per server — each licensed separately — so up
to three scan workstations can run per office; all of them may even work the **same intake folder in
parallel without colliding** (a document opened by one clerk is
automatically locked and greyed out for the others).

- **One scan point for the whole firm.** The clerk scans the entire
morning mail into one folder and works the list document by document.
- **Searchable by design.** Pages that already carry a text layer are
left untouched; only scanned pages run through local OCR, and the
recognised text is embedded into the PDF as an invisible layer — the
receiving lawyer does not need to run OCR again.
- **The recipient is recognised — without AI.** The app matches
the document text against the case numbers and lawyer names of the firm
(reported live by the workstations) — plain deterministic matching, no AI
costs, and nothing leaves your network. Recognised recipients are suggested;
one click sends.
- **Delivery is automatic.** Each lawyer's IRONSTICK collects its own
documents from the server automatically and places them in the normal
document intake — the usual capture workflow takes over. The server keeps a
document only until the recipient has confirmed receipt; local copies at
the scan desk are deleted automatically after three days.

![Capturing a document into a case](https://www.ironstick.legal/img/56_capture_flow.png)
### Time tracking — local on every desk, aggregated for the firm

**Locally**, IRONSTICK measures working time automatically as a side
effect of working: no stopwatch, no start/stop discipline. Time is derived
from actual activity in the application, attributed to the case you are
working in, with idle time capped so an open window over lunch does not
bill anyone. Each desk has its own time page — today, 7, 30, 90 days or
everything; per case, per client, day by day with bars.

**With the server**, every workstation reports these measurements in
the background — every five minutes, as compact day totals per case
(including the client name), with missing days back-filled automatically; a
desk that joins later delivers its complete history, so the firm-wide
picture is whole from day one. The web admin's Time page is a faithful copy
of the desktop time page, extended by one selector: a single user, or
**ALL** — the whole practice. Time per case, per client and per day,
across every desk — a consistent basis for billing, capacity planning and
management decisions, produced without anyone filling in a timesheet.

**The system grows with the firm.** From a solo practice to a larger
team, IRONSTICK scales with you. A solo lawyer starts with one Client App
and, if wanted, one bridge (for example Claude or ChatGPT). When a second lawyer
joins, one more Client App and one more bridge are licensed, plus IRONSTICK SERVER, which includes up to five workstations. From then on, every additional colleague means one Client App and one bridge, and from the sixth workstation on, one additional server seat.
No large up-front investment — licence only what you need
right now. And if the team gets smaller, you simply buy fewer
licences.

Part VI — Reliability: self-repair, backups and minimal IT effort

## 13. When hardware fails — disaster recovery built in

A server that coordinates a whole practice must be able to fail
without taking the practice with it, and this one is designed to do so. The
entire server state lives in **one data folder on the NAS**: include it in
the NAS backup (e.g. Synology Hyper Backup) and a failed unit is restored in
three steps — install the package on the replacement, put the folder back,
start. Everything returns as it was and the workstations reconnect
on their own. And because the system is **decentralised** — every
workstation keeps its complete local file, its subscribed copies, its
legal-library mirror and its own backups — even after a total NAS loss
*without* a backup, the workstations repopulate the new server
automatically: workstations re-register automatically, owners re-issue their
case releases automatically (checked twice a day), subscribed copies are
protected for 14 days instead of being discarded, the legal library is rebuilt
from the workstations' own mirrors, and pending case hand-overs are designed so
that no data is lost. For higher demands, the same package runs unchanged on
the large, fully redundant Synology models — RAID disk redundancy, redundant
power supplies, High-Availability pairs with automatic failover.
Moving the office is just as straightforward: take the workstations with you,
set up the NAS at the new address, connect everything to the LAN — **Plug and Play**.
The workstations find their server again on their own: no fixed addresses,
no reconfiguration and no IT appointment.

![Swap servers and relocate — Plug and Play](https://www.ironstick.legal/img/63_server_move.png)
**In a total server failure, your data is preserved** by the system's self-repair and the decentralised backups. Even scanned-mail PDFs that the Central Scan App has uploaded but not yet delivered are kept for 72 hours in the scan workstation's local “completed” folder, ready to be re-sent.
**Maintenance:** the system is designed to repair common faults
automatically and needs very little maintenance. It also runs reliably on
older hardware. With the backup function, in an emergency you simply
reinstall and restore the backup.

**The system repairs itself.** Recovery time depends only on how
quickly a replacement device is installed, the software is put back on and the
device is connected to the LAN (server) — or the backup is restored
(workstation). Everything else is automatic. And even while the server is
down, for whatever reason, **the workstations keep working locally on their
own computers**: every lawyer has the complete file on their own
machine.

## 14. No IT department? That is the point of the design

A fair objection: IRONSTICK runs on your own hardware, so there is no
cloud vendor whose support desk fixes things when a local disk fails. True —
and deliberate: nobody at a distance holds your files, and nobody at a
distance can lose them, read them or lock you out. What that actually
demands of a practice without an administrator is smaller than it sounds.

- **One habit, nothing more: press Backup.** One click on the backup
screen writes a complete backup as a single ZIP; you save it wherever you
like — a USB stick, an external disk, the office NAS. IRONSTICK does not
leave this to discipline alone: if the last backup is older than five days,
the daily briefing ends with an urgent reminder, spoken and written, with a
direct link to the backup area; with IRONSTICK SERVER, the administration
page shows every user's last backup date, red after five days.
- **Backups are stored encrypted.** Database, documents, configuration
and the AI's working files are stored in the backup in AES-256-encrypted form.
- **Recovery is a routine, not a project.** New or repaired machine:
install from the stick, open the backup screen, restore the ZIP, start.
Everything returns as it was — cases, documents, chronicles, AI
memory, legal library. No technician, no ticket, no waiting.
- **Little to administer in between.** No database to tune; on a single
workstation, the licence key and the authenticator code are the only
credentials. With IRONSTICK SERVER, new workstations are approved once in
the browser administration. The system repairs common faults itself, and
workstations find IRONSTICK SERVER on their own. If you can save a document to a USB stick, you can
run IRONSTICK safely.
- **Second copies come at no extra cost where you use them.** Every workstation
in an IRONSTICK SERVER setup keeps its complete local file, the tablet sync
carries a checksum-verified copy with you, and the NAS is backed up by its
own tools (e.g. Synology Hyper Backup). Losing one device does not mean losing
the practice.
- **You see what is running in the background.** The performance indicator in
the menu bar lists every running background process — e-mail retrieval, text
recognition, encryption and decryption, backups, the AI’s tool calls, the recognition
of new court decisions — so background work stays visible.

The IT skills required are those of any Windows workplace, and no more. What
IRONSTICK removes is the dependency on someone else's data centre; what it
asks in return is a backup stick you actually use.

Part VII — In practice

## 15. System requirements

|  | Minimum | Recommended |
| --- | --- | --- |
| Operating system | Windows 11, 64-bit | Windows 11, 64-bit, current updates |
| Processor | Modern 4-core x64 (e.g. Intel Core i5 /
 AMD Ryzen 5) | 6–8 cores — text recognition runs multi-page in
 parallel, and offline speech recognition benefits directly from every
 core |
| Memory | 8 GB RAM | 16 GB RAM — comfortable headroom for
 large PDFs, dossier builds and audio transcription side by side |
| Storage | SSD with 20 GB free | NVMe SSD with 100+ GB
 free — the file archive, full-text search and PDF production are
 disk-intensive; a fast SSD makes a noticeable difference |
| Display | 1920 × 1080 | 1920 × 1200 or higher — the case
 screens use vertical space generously |
| Graphics | No dedicated graphics card required — any
 onboard graphics is sufficient | |
| Connectivity | Internet only for external AI,
 statute updates, e-mail, web research, maps and address geocoding — the file, search, documents and the local assistant
 run fully offline; one free USB port for tablet sync | |

Optional: an Android tablet (Android 11 or newer, 64-bit, tablet-size
screen) on the same file via cable sync, and your own AI account (for the
in-app external AI and/or a desktop AI — Claude Desktop, ChatGPT Desktop,
Qwen Desktop or Kimi Desktop) — without one, IRONSTICK simply runs as a fully local system.

### Storing data on an external drive (optional)

Anyone who keeps the file on an external drive — for example to run office PC and
laptop with the same data set — needs a drive that withstands a law firm’s continuous
load. IRONSTICK checks every target before the move and refuses unsuitable drives
(Windows).

| Check | Requirement |
| --- | --- |
| Free space | At least 9 GB, or 1 GB more than the current data
 set |
| Write / read | At least 80 MB/s / 150 MB/s — also under
 continuous load (not below 60 % of the initial value) |
| Many small files | At least 250 files per second |
| File system | NTFS or exFAT, not FAT32; not write-protected or
 locked |
| Reliability | Test data must read back unchanged |
| Not permitted | Network drives and cloud-sync folders (OneDrive, Google
 Drive, Dropbox, iCloud, Box, pCloud, MEGA) |
| Recommendation | External SSD — ordinary USB sticks rarely reach these
 values |

### System requirements — IRONSTICK SERVER (optional add-on)

|  | Requirement |
| --- | --- |
| Device | Any Synology NAS running DSM 7.0 or newer — ARM or
 Intel; the package ships native binaries for ARMv7, ARM64 and x86-64 |
| Performance | Designed to be lightweight: verified on a 2014
 **DS214se entry-level unit** with a single-core ARM CPU and
 256 MB RAM; runs on every Synology model with DSM 7.0 or newer, and
 current models offer considerably more headroom |
| Memory / CPU | No dedicated requirements beyond the NAS
 itself — the server does no analysis work; its background tasks are limited
 to relaying packages and a nightly clean-up |
| Storage | A few hundred MB for package and legal library;
 shared case packs grow only with what you actually share |
| Network | Office LAN only; one TCP port (47712) with token
 authentication. DSM, Web Station and ports 80/443 remain untouched |
| Administration | Any browser on the LAN; own admin password;
 licence key entered once |

IRONSTICK was not built to impress in a demo. It was built so
that at 19:00 you close the lid — with the file read, the draft hardened, the
deadline met, and the proof of all three in the system.

## 16. Licensing — modular, only what your firm uses

IRONSTICK is licensed by component. You take only the parts you need and add
more as the firm grows. This section names the components and how each one is licensed — you will find the figures on the [pricing page](https://www.ironstick.legal/pricing.html).

| Component | Licensed per |
| --- | --- |
| **IRONSTICK Client App** (base application) | per user / workstation |
| **Single bridge** — Claude, ChatGPT, Qwen *or* Kimi | per user / workstation |
| **All-bridge bundle** — all four bridges together | per user / workstation |
| **IRONSTICK SERVER** (incl. up to 5 Client App connections) | per firm / server |
| **Additional Client App connection on the server** (from the 6th) | per additional connection |
| **Central Scan App** (max. 3 per server) | per scan user / workstation |

- **Add-ons & dependencies:** the bridges and IRONSTICK SERVER are
separately licensed add-ons to the base application. Each bridge is unlocked in
your Client App licence key, so there is no separate bridge key, and it runs for
as long as that key is valid. The Central Scan App requires an active
IRONSTICK SERVER licence.
- **AI provider account:** for the built-in AI of the Client App, an API key
with the provider is all you need. A bridge is different: it works through the
provider's desktop app (Claude, ChatGPT, Qwen or Kimi) and your own account there. The built-in AI chat needs no bridge licence.
- **Training** is licensed separately in three on-site modules
(app · app + IRONSTICK SERVER · deep-dive AI bridges).

**Download the software:** the Client App, the bridges, IRONSTICK SERVER and the Central Scan App are available on the [download page](https://www.ironstick.legal/download.html) — where you will also find the installation order, the licensing rules and the form for requesting licence keys.

##### Get in touch

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scan the code to save our contact card — phone, e-mail and website.

Feel free to contact directly via WhatsApp or Telegram — calls are welcome too. Spoken languages: German, English, Romanian.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Message

### Interested in IRONSTICK or a demo? Write to us.
