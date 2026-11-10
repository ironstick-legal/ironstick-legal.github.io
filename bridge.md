# Compendia - Bridge

> The IRONSTICK desktop-AI bridge: connect Claude, ChatGPT, Qwen or Kimi desktop to your case files — licensing, installation, the deterministic gates and the full tool catalogue.

Original page: https://www.ironstick.legal/bridge.html

---

The IRONSTICK Bridge lets the desktop AI you already use — Claude
Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop or Kimi Desktop — work
directly on your case files, locally on the same computer and behind seventeen
deterministic safeguards. The first data access in each program run needs your
consent, every access is shown in the menu bar, and changes to master data,
chronicle, calendar and instructions take effect only after your approval. This
compendium covers licensing, the relationship to the built-in IRONSTICK AI chat,
installation, the access display, the safeguards, typical requests and the
complete tool catalogue. Windows edition.

**At a glance**

- **For** lawyers and self-represented parties, at a single workstation or
across a firm connected through IRONSTICK SERVER, the office server.
- **Local:** the desktop AI's bridge program and IRONSTICK communicate over a
token-protected connection on the same computer; only the web and register
tools contact the internet.
- **Controlled:** consent once per program run, a visible symbol for every
access, deterministic gates before writes and deliveries, and proposals instead
of silent changes.
- **Pan-European:** searches and comparisons handle the diacritics of all
eleven interface languages; national ID numbers are validated for nine schemes
in seven countries.

## 1. What the bridge is

The bridge connects **your own desktop AI** — Claude Desktop (or Claude
Code), ChatGPT Desktop, Qwen Desktop or Kimi Desktop — to the **running
IRONSTICK Client App** on the same computer. The AI reads your case material
through purpose-built tools — chronicles, document full texts, e-mails,
deadlines, master data — and works with it in depth: it analyses, cross-checks
and drafts. The connection itself is strictly local; no IRONSTICK server is
involved in it. The data the AI reads is processed under **your own
subscription with that provider and the provider's terms**, as set out in the
[GDPR data-flow declaration](https://www.ironstick.legal/gdpr.html).

- Requires the respective desktop application with your own account
(Anthropic, OpenAI, Qwen or Kimi).
- You stay in control: closing IRONSTICK closes the data source at once.
- This channel transmits **real, unpseudonymised data by design**; that is
what makes drafting submission-ready templates possible.
- Documents marked **secret** are invisible to the bridge.
- The cross-chat **AI memory is built for long-running proceedings**:
entries linked to a case are never deleted automatically; entries without a
case are deleted after one year without use, and every use renews that
year.
- Write access is deliberately narrow. Changes to master data, chronicle,
calendar, memory, full texts and the legal library take effect only after you
approve them, in an IRONSTICK form, dialog or the Data Consistency Monitor.
Without such a dialog, the AI writes only its own work areas (encrypted
scratch store, daily log at your request, its own case assessment after the
deterministic checks) and notes on the pinboard of a case shared through
IRONSTICK SERVER; tags and firm-chat messages need your confirmation in the chat.
Drafts go to the word processor.

Each desktop AI has its own small bridge program; all of them
connect to the same local endpoint in the running IRONSTICK application. All four
desktop AIs get the same tools and the same gates. The AIs can run **at the same time** and work on the
same case in parallel; each is shown with its own logo in the menu bar.
## 1b. Why the bridge?

**Because the bridge works on the subscription you already hold.** A
desktop AI runs through the provider's desktop app and your account there; a
subscription is the provider's flat monthly fee, and every dialogue, every
full-text read and every draft round is covered by it. The same work in
IRONSTICK's built-in chat runs on your API key, and API access is billed by the
provider per use.

The bridge is therefore the preferred route for long AI dialogues and for any
work in which documents or larger data holdings are managed through the AI:
reading whole case files, keeping chronicles, daily logs and memory entries up
to date, working through hundreds of exhibits — work whose volume is covered by
the flat fee instead of being billed per use.

 [Figure: Two routes to the AI: an API key billed per use, or the bridge with the provider's desktop app and its subscription]
**Specific to Claude Desktop / Claude Code**

- **Each chat is tracked separately.** IRONSTICK distinguishes the chats of
your Claude Desktop. The instruction lock, reading records, preparation status,
party checks and delivery tracking are kept **per chat**; what one chat has
read never counts for another. In the drop-down menu at the Claude symbol, each
chat appears under the name you gave it in Claude Desktop. For this, IRONSTICK
reads only the structured tool events (tool name and arguments) from Claude's
local session record, never the conversation text.
- **Context compaction is detected.** When Claude compacts a long
conversation, the instructions it read earlier are no longer reliably in its
context. IRONSTICK locks that chat immediately, without penalty, until it has
re-read the instructions and quoted a randomly chosen rule verbatim; it then
continues where it left off.
- **Access outside the connector is detected.** If a chat accesses the
IRONSTICK data folder with Claude's own file tools (read, search, shell, edit)
instead of the connector, this is recorded as a rule violation for that chat
and reported at its next connector call.
- **Extended connector limit.** Claude Desktop receives results of up to
40,000 characters directly in the answer, four times the standard limit
(10,000 for Qwen, Kimi and the built-in chat); anything larger goes to the
scratch store as a whole.
- **Responses within 45 seconds.** Because Claude Desktop cancels tool
calls after 60 seconds, web pages are returned within 45 seconds (this limit
applies to every desktop AI). Large or scanned documents continue processing in
the background and are delivered on the next call with the same address.
- **Party check with look-ahead.** While Claude works through one party,
it can name up to two further parties in advance; IRONSTICK searches them in the
background, so the next check answers at once. Results are kept for 30
minutes; the order of the gate is unchanged, and the next party opens only
when the current one is finished.

**Specific to ChatGPT Desktop**

- **Extended connector limit.** ChatGPT Desktop receives results of up to
40,000 characters directly in the answer, four times the standard limit
(10,000 for Qwen, Kimi and the built-in chat); anything larger goes to the
scratch store as a whole.
- **Party check with look-ahead.** While ChatGPT works through one party,
it can name up to two further parties in advance; IRONSTICK searches them in the
background, so the next check answers at once. Results are kept for 30
minutes; the order of the gate is unchanged.

## 1c. Licensing — four bridges, or the bundle

Each desktop-AI bridge is a **separately licensed add-on module**:

| Bridge | Connects | Licence |
| --- | --- | --- |
| **Claude Desktop Bridge** | Claude Desktop / Claude Code (Anthropic) | Separate module |
| **ChatGPT Desktop Bridge** | ChatGPT Desktop (OpenAI) | Separate module |
| **Qwen Desktop Bridge** | Qwen Desktop | Separate module |
| **Kimi Desktop Bridge** | Kimi Desktop (Moonshot AI) | Separate module |
| **Bridge bundle** | All four of the above | The four modules together |

- Each bridge is unlocked in your **signed Client App licence key**; there
is no separate bridge key.
Only licensed bridges are activated; an unlicensed bridge is not installed and
does not appear in the configuration.
- You can license **a single bridge** (only the desktop AI you use) or the
**bundle of all four**, and add more later.
- Licensed bridges can run **in parallel**; several desktop AIs can work on
one case at the same time.

 [Figure: IRONSTICK Client App plus the bridge bundle: one licensed bridge program per desktop AI]
Pricing for individual bridges and the bundle:
[Pricing](https://www.ironstick.legal/pricing.html).
## 1d. The built-in IRONSTICK AI chat — same model, no extra licence

IRONSTICK also has its **own AI chat built in**. It runs on **the same
working layer as the bridge**: the same tools, the same gates, the same
grounding and the same submission-ready drafting.

- **No extra licence.** The built-in chat is part of IRONSTICK; it needs no
bridge module.
- **It runs on the providers' API** (your own API key), which the
provider bills per use, whereas the bridge works through the provider's own
desktop app on the flat monthly fee of your subscription.
- In return, the API route is **more tightly controlled**: data is
pseudonymised by the router, interactive calls ask for your consent, every call
is audit-logged and size caps apply, in addition to the same gates as the
bridge.

 [Figure: The built-in AI chat: the IRONSTICK Client App with the provider's API key]
**In short:** the bridge (desktop app, flat monthly
subscription) suits heavy, document-driven daily work; the built-in chat (API
billed per use, no extra licence) is always available and more tightly
controlled.
## 2. Installation (any of the four)

 [Figure: Configuration → AI configuration: the Claude Desktop section with both switches, the set-up button and the skill-plugin button.]

Configuration → AI configuration: the Claude Desktop section with both switches, the set-up button and the skill-plugin button.

The procedure is the same for every desktop AI; only the download source and
the set-up button differ.

1. Install the desktop application, sign in with your own account and start
it once.
2. In IRONSTICK open **Configuration → AI configuration → AI with local MCP
server (STDIO)**.
3. Switch on **"Allow connector access from Claude Desktop"** (the master
switch for the whole channel).
4. Optionally switch on **"Allow navigation by Claude Desktop"** if the AI
may also operate the application: open screens, cases and documents, and export
files. Reading works without it.
5. Click the matching **"Set up … Desktop"** button. For Claude, ChatGPT and
Kimi, one click writes and registers the configuration. For Qwen Desktop,
IRONSTICK copies the set-up text to the clipboard and you paste it into Qwen's
"Add MCP" dialog.
6. Start a **new conversation**, or use the **restart button** in the same
section, which closes and restarts the licensed desktop-AI apps so that they
reconnect to IRONSTICK. IRONSTICK then appears among the AI's connectors, and
its tools are available in every conversation.

| Desktop AI | Download / sign-in | Set-up button |
| --- | --- | --- |
| **Claude Desktop / Claude Code** | claude.ai/download — Anthropic account | "Set up Claude Desktop"; a separate button creates the skill plugin, which you add in Claude Desktop |
| **ChatGPT Desktop** | openai.com/chatgpt/download — OpenAI account | "Set up ChatGPT Desktop"; a separate button creates the skill plugin, which you add in ChatGPT Desktop |
| **Qwen Desktop** | Qwen Desktop (Windows) — Qwen account | "Set up Qwen Desktop" (copies the set-up text for Qwen's "Add MCP" dialog) |
| **Kimi Desktop** | kimi.ai — Kimi account | "Set up Kimi Desktop" |

The configuration screen provides the download links and the links to each
provider's terms of use and privacy policy.

**Set-up in one step.** For Claude, ChatGPT and Kimi, a
single click on the set-up button in the configuration screen of the Client App
writes and registers the complete configuration; no configuration file needs to
be edited by hand. For Qwen Desktop, one paste into Qwen's own dialog completes
it. The **restart button** closes and restarts the licensed desktop-AI apps so that
they reconnect to IRONSTICK.
## 3. How AI access is shown in the menu bar

 [Figure: The menu bar during a bridge access — the Claude symbol appears next to the CPU/RAM readout.]

The menu bar during a bridge access — the Claude symbol appears next to the CPU/RAM readout.

- **Consent first.** The first data access by any desktop AI in a program
run opens one consent dialog. Approving opens access for all desktop AIs for the
rest of the run; refusing blocks all of them for 10 minutes.
- **A logo per AI** appears in the top bar next to the CPU/RAM display
**during every tool call** and stays lit for 3 seconds after the last
call; rapid series of calls keep it lit continuously. If the symbol is dark,
nothing is being read. Each AI has its own mark: the orange Claude starburst,
the green OpenAI knot, the violet Qwen symbol and the teal Kimi "K".
 [Figure: Close-up: the Claude symbol lights up for every single tool call and stays visible for 3 seconds after the last call.]

Close-up: the Claude symbol lights up for every single tool call and stays visible for 3 seconds after the last call.

- **The drop-down menu at the AI symbol** shows what that AI has read in the
session: the line "working instruction + hallucination prohibition" (green tick
while valid, red cross once expired), then for each case the flags for profile,
jurisdiction and digest plus a "documents read *r* of *n*" bar.
- **The brain symbol** appears as soon as the shared AI memory has entries
and pulses for 3 seconds whenever any AI channel reads or writes it.
Clicking it opens the management dialog. The AI can propose to store, change or
delete a memory entry; each change takes effect only after you approve it. Your
own notes are read-only for the AI.
- **Navigation** by the AI (opening screens, cases or documents) happens
only if its switch is on; otherwise navigation tools are refused.
- **Parallel access:** when several licensed AIs work at the same time, the
top bar shows **one logo per active AI** side by side; every access is
attributed to the AI that made it.
- **Background processes:** the performance indicator lists all running
background processes, including every tool call of the built-in chat.

## 4. Seventeen deterministic safeguards against hallucination and data errors

IRONSTICK enforces its working rules structurally. Seventeen deterministic gates (pure logic, no AI)
sit between the model and your records. In the tool catalogue, a blue badge
such as Gate 1 · Date names the gate that secures a
tool.

| Gate | Prevents | How it works |
| --- | --- | --- |
| **1. Date gate** | Wrong dates taken from the model's training period instead of the actual date. | Every tool that writes into IRONSTICK is refused unless the AI has fetched the actual, NTP-checked date and time within the last 30 minutes. The window is kept per AI and is deliberately short. |
| **2. Statute gate** | Invented or misremembered statute text. | Web access for statutes is refused until the verified local legal library has been consulted; statute sources found online must be reported and enter the library only through your consent dialog. |
| **3. Pleading verification gate** | Invented file references, deviating amounts, wrong party names, unchecked citations in a pleading. | The deterministic eight-class verification of pleadings: delivery of a formal document is blocked without a current positive verification for the exact file state; after five failed runs the process stops and you are notified. |
| **4. Read-coverage guard** | Claims of having read everything when files were only partly read. | Line-exact tracking of what was actually read, kept across restarts; unread ranges are listed in every answer, delivery stays blocked while gaps exist, and deleting or overwriting unread source files is refused. |
| **5. Navigation block** | Loss of unsaved work through an AI-triggered screen change. | While a capture form or the text editor is open, every navigation and export call is refused. |
| **6. Human-in-the-loop gate** | Silent AI changes to master data, chronicle, calendar or instructions. | AI changes arrive as proposals: Data Consistency Monitor, red/green comparison dialogs, confirmation dialogs; nothing is applied without your approval. |
| **7. Formal-content detector** | Formal letters or pleadings declared “informal” to bypass formatting and verification. | A deterministic content scan (salutation and closing formulas in six languages, addressee block, legal markers, identity block) rejects the informal declaration; such content has no informal delivery route, and the attempt is logged. |
| **8. Version-series guard** | Resetting the version counter by renaming the file (“…\_v05” quietly becoming “NewName\_v01”). | A first delivery under a new file name is refused while a versioned series with the same case number exists; the AI must continue the series or explicitly declare a genuinely different document, which is logged. |
| **9. Statute read record** | Statute content taken from press articles, web summaries or the model's memory instead of the statute text. | Every library read is recorded per program run (source file and the article numbers actually returned). A cited article without such a read record fails verification; cited sub-references (paragraph, point) are checked for existence too. |
| **10. Case anchor** | Case context invented from memory of a *different* case (cross-case contamination). | Every tool answer that concerns a case carries the case's registered number, client and subject from the records, so any invented context appears next to the registered data and is immediately exposed. |
| **11. Instruction access lock** | An AI working without having read the working rules. | Apart from reading the instructions, confirming them and reading the system language, every tool is refused until the AI has read the instructions and quoted rule 5 (prohibition of hallucination) verbatim. The confirmation expires 60 minutes after it was given, after 2 hours without a call, at midnight, on every reconnect and after the desktop AI compacts its context; the AI must then re-read the instructions and quote a randomly selected rule. The drop-down menu at the AI symbol shows the state in green or red. |
| **12. Preparation gate** | Notes, log entries or pleadings on a case the AI has not read. | Two levels, recorded per AI and kept across restarts: a note requires the profile, the jurisdiction, the digest of every document (the digest serves as the chronicle) and the five newest documents to have been read; a pleading, hand-over or export additionally requires every document it cites or attaches to have been read in full. A reading remains valid for 3 days, or until the next incoming document of the case. |
| **13. Document-bound reading record** | Annexes and references “read” hours ago, or for a different document. | A full-text reading counts for 2 hours; every delivery of the same document (any version) extends its cited documents by 2 hours; verifying or delivering a different document resets the annex readings, and the AI reads that document's annexes afresh. |
| **14. Analysis-read gate** | Unverified “facts” entered in a person's description or contact fields. | A proposal touching a person's free-text fields is refused unless the AI has read that person's profile within the last 30 minutes. |
| **15. Digest gate** | Case content gathered piecemeal (searches, timelines, full texts, deadlines) on a case whose digest the AI has not read. | Every case-content tool (chronicle, timeline, searches, full texts, contradictions, obligations, deadlines, correspondence, media, institutions, tags, assessment, instruction notes) is refused until the case's digest has been read; the refusal names the preparation call. The third refused attempt on the same case is recorded as a rule violation. |
| **16. Similar-party gate** | Duplicate persons, companies or institutions created because a variant spelling was not recognised. | A proposal for a new record is answered with a list of similar existing records, and nothing is stored. The AI must either file against an existing record or explicitly confirm that the party is genuinely new. Every stored new party triggers the required follow-up: research and file its connections, including web research. |
| **17. Repetition lock** | Repeated retrieval of identical data, which costs time and tokens without adding information. | A call that returns exactly the same content as an earlier one is refused. The content is compared, not the call, so a different parameter that yields the same result is refused as well. The lock resets when a different document has been delivered or presented, when the AI program reconnects, when the AI has done a different task in between, or when the AI has re-read and confirmed its instructions. |

## 5. What you can do with it — examples

Talk to the desktop AI (or the built-in chat) in plain language; it selects
the right tools itself. Typical requests:

**“What happened in case [case number]? Summarise the current
position and what is due next.”**
The AI identifies the case, reads the
complete file in sections and reads the deadlines, then delivers a summary with
document references.
**“Draft the reply to the court's request from last week, in our
pleading format, and hand it over to the word processor.”**
The AI finds the
request, reads its full text, loads the output format and drafts; the draft
appears in IRONSTICK's word processor, ready for your revision and for printing on
your letterhead.
**“Who said what about the site inspection, and do the
statements contradict each other?”**
Statement search and contradiction
finder across the whole case file.
**“Check the opponent's VAT and LEI numbers.”**
Live checks
against the EU VIES service and the global LEI register.
**“Build a timeline of the dispute and list which of our
exhibits have already been filed with the court.”**
Case timeline plus
lists of submitted and outgoing documents with registry numbers.
**“Were there any e-mails about the expert opinion? What was
attached?”**
E-mail search with sender, subject, attachments and, on
request, the message text.
**“Open the case for me and export the two contracts as
PDF.”**
With navigation enabled, the AI opens the screens and delivers the
files.
**“Remember for next time: opposing counsel always files late
on Fridays.”**
Proposed for the shared AI memory (linked to the client,
size-limited); once you approve it, it is available to every future session,
and you can review and delete it at any time.
**“The draft is ready. Give it to another AI to check: read it,
find the weak points and counter-arguments, and evaluate.”**
The AI hands
the pleading over through IRONSTICK; a different model with different training
reviews it critically, and its assessment comes back to you. A genuine second
opinion on the same case data.
**“Log today's work in the daily log.”**
Sent e-mails,
drafted pleadings, developed arguments and decisions are written into today's
daily log; at the next session the AI briefs itself from the most recent
entries.
## 6. The tool catalogue

These are the tools the bridge provides — the same for every connected
desktop AI and for the built-in chat. Each row gives the function in plain
English first and the technical tool name, as the AI sees it, second. Some
technical names derive from German or Romanian terms (for example
`tagesprotokoll` = daily log, `fristen` = deadlines,
`kalender` = calendar, `ki` = AI, `sachverhalte`
= matters, `anexe` = annexes); the description gives the function.

All tools are read-only unless the description says that they write or open a
form. Badges: Gate 1 · Date names the safeguard from
the table of seventeen gates; Review means that
nothing changes until you approve it in the Data Consistency Monitor or in an
IRONSTICK dialog or form; Confirmation means that the
tool acts only after your explicit confirmation.

### Session context and navigation

| Function | Technical name |
| --- | --- |
| **Complete session start.** Runs the complete session start in one call (date, system language, current context, daily briefing, deadlines, appointments, open peer-review tasks) and writes it to one scratch file. At the first session start of the day, the AI first asks about court decisions not yet assessed. | `session_start_to_scratch` |
| **Current screen.** Where the user is: screen, breadcrumb, open client or case. | `read_current_context` |
| **System language** of the installation. | `read_system_language` |
| **Current date and time** (NTP-checked), for deadline calculations. | `get_datetime` Gate 1 · Date |
| **Instructions.** Re-reads the complete, current connector instructions at any time. | `read_instructions` |
| **Instruction confirmation.** Unlocks the connector after the AI has read the instructions and quoted rule 5 (prohibition of hallucination) verbatim. The confirmation expires after 60 minutes, after 2 hours without a call, at midnight, on reconnect and after context compaction; the AI then re-reads the instructions and quotes a randomly selected rule. | `confirm_instructions` Gate 11 · Instruction lock |
| **User manual.** Returns the manual sections matching English keywords; the AI explains them in the dialogue language. The manual is held encrypted and read-only in the scratch store, where the AI can also search it. Each section includes operating notes, suggested requests and the workflow. | `user_help_request` |
| **Morning briefing.** Today's structured briefing with document IDs, case numbers and markers: deadlines, court dates, unread e-mail, newly captured documents, cases with raised activity. | `get_dailybriefing` |
| **Open a screen** in the application (requires the navigation switch). | `open_screen` Gate 5 · Navigation |
| **Open a record:** a specific case, client, person, institution or document (navigation switch). | `open_case` / `open_client` / `open_person` / `open_institution` / `open_evidence` |
| **Open a work area:** the case-file (dossier) assistant, optionally fully prepared; the global search; the e-mail monitor (inbox or sent items, optionally a specific message); the daily log (a specific day); or the backup screen. Starting a backup requires confirmation (navigation switch). | `open_dossier` / `open_search` / `open_emailmonitor` / `open_tagesprotokoll` / `open_backup` |
| **Open a deadline** on the deadlines screen, highlighted (navigation switch). | `open_deadline` |
| **Open a form:** the capture or edit forms for client, case, person or company and institution, the case assignment screen, or the document-capture inbox and form. The AI opens and pre-fills; the user saves (navigation switch). | `open_new_client` / `open_new_case` / `open_new_person` / `open_new_institution` / `open_assign` / `open_capture` Review |
| **Register a statute source:** opens the statutes screen with the registration dialog open and the URL pre-filled; the user confirms (navigation switch). | `open_new_legal_source` Review |
| **Fetch e-mail now:** fetches and triages new e-mails, like the fetch button. | `fetch_mails` |
| **Start an AI case assessment** of a case, after confirmation with a cost notice. | `request_case_assessment` Confirmation |
| **Send a firm-chat message** in IRONSTICK SERVER in the user's name, after confirmation of the exact text. | `send_server_chat` Confirmation |
| **Manage tags:** list, add, edit or remove the coloured tags of an entry; every change requires confirmation. | `manage_tag` Confirmation |
| **Restart the desktop AIs** for a fresh connection, after your confirmation. | `recycle_desktop_ai` Confirmation |

### Finding the right record

| Function | Technical name |
| --- | --- |
| **Client and case lists**, complete. | `list_all_clients` / `list_all_cases` |
| **Find a case by number** (also partial). | `resolve_case_by_number` |
| **Find a client, person or institution by name** (fuzzy, tolerant of diacritics). | `resolve_client_by_name` / `resolve_person_by_name` / `resolve_institution_by_name` |
| **Cases involving a given party.** | `find_case_by_party` |
| **Find parties by keyword:** persons and institutions whose name, notes or analysis fields contain a keyword; the starting point when only a fragment is known. | `find_party_by_keyword` |
| **Cases with raised activity** (temperature), with client and case number. | `read_hot_cases` |
| **Captured today or yesterday:** everything captured on that day across all clients and cases, as a list of document IDs with time, client, case and title. | `get_all_fromtoday` / `get_all_fromyesterday` |

### Reading a case

| Function | Technical name |
| --- | --- |
| **Complete case file:** chronicle with full texts. For large cases, the first call reports the size and offers targeted searches or delivery to the scratch store. | `read_full_case` Gate 4 · Read coverage |
| **Full case text to the scratch store:** the fastest complete read of a large case. Assembles the complete case text without truncation, cleans up OCR artefacts and writes it directly to the scratch store; the AI receives only the file reference and then reads it in sections. Scope: all, incoming or outgoing documents, or selected documents — the way to read a 300,000-character document in full. | `dump_case_to_scratch` Gate 4 · Read coverage |
| **Case preparation:** in one call, the case profile and jurisdiction plus the digest of every document (ID, date, type, title, capture summary, cross-references, text size); the digest serves as the chronicle. The answer states where profile and digest are (in the answer for small cases, otherwise in scratch files that must be read completely) and names the five newest documents to be read in full. Satisfies the preparation gate; deleted and secret documents are excluded. | `prepare_case` Gate 12 · Preparation |
| **Latest chronicle entries:** a quick look; does not count towards preparation. | `read_chronik` |
| **Related cases and matters:** parent, child and same-group cases; a client's matters as grouped in the Universe map; the most strongly connected cases. | `read_case_links` / `read_case_cliques` / `read_top_connected_cases` |
| **Quick case orientation:** every field of the case and client tabs, plus the 15 most recent document IDs with entry dates. | `short_case_briefing` |
| **Cases of a client**; cases linked to the current one. | `read_client_cases` / `read_related_cases` |
| **All matters of a client** in one call, each with its cases (file number, title, status, parent case); ungrouped cases are listed separately. | `list_sachverhalte` |
| **Courts and authorities** involved in a case, with addresses. | `read_case_institutions` |
| **Jurisdiction of the case**, which determines the document language. | `read_case_jurisdiction` |
| **Stored AI case assessment.** | `read_assessment` |
| **Case timeline:** all case events in chronological order. | `build_case_timeline` |
| **Annex list of a pleading:** the exhibits it contains, each with its filing stamp. | `evidence_anexelist` |
| **Letter-number chain:** follows a registry or letter number across documents. | `briefnummer_chain` |
| **Document usage:** where a document has been used or referenced. | `evidence_usage` |
| **Exhibits filed with the court**, with numbers. | `list_submitted_evidence` |
| **Correspondence:** all incoming or outgoing documents of a case (optionally from a given date), as a list of document IDs. | `list_correspondence` |
| **Filing stamp(s)** of a document. | `evidenceidtoisstamp` |
| **Open procedural obligations** of a case, with descriptions and overdue or urgent markers. | `list_open_obligations` |

### Documents and passage search

| Function | Technical name |
| --- | --- |
| **Full text of a document** (and, where present, its chat or transcript text); up to 12 documents per call. Above the connector limit the text goes to the scratch store as a whole and counts as read only once the file has been read completely. | `evidence_readfull` Gate 4 · Read coverage |
| **Media entries** (photos, recordings): metadata, location, transcripts. | `read_media` |
| **Document search** by keyword or period. On its first call the keyword search asks what is sought, the scope and the form of the answer. | `search_evidence_by_keyword` / `search_evidence_by_time` Gate 15 · Digest |
| **Passage search** across the file (OCR-tolerant), returning the matching passages. | `search_passages` |
| **Documents from a party.** | `find_documents_from_party` |
| **Contradiction candidates** between documents and statements. | `find_contradictions` |
| **Statements by speaker** on a topic. | `who_said_what` |
| **Who communicated with whom**, and when. | `who_with_whom` |

### Judges and court decisions

Five deterministic tools (no AI) for one question: how does a judge or
prosecutor decide — which arguments from the submissions do they address, which
do they pass over, and how predictable are their decisions? The tools locate and
measure; the AI reads and evaluates the decisions on the basis of the full
texts. Only incoming documents from a court or a prosecutor's office
count as decisions.

| Function | Technical name |
| --- | --- |
| **Decisions by judge:** every decision on record in which one person sat as judge (presiding or member) or acted as prosecutor, across all cases. A decision counts only if the person is named in the header (composition of the court) or in the signature block; a name in the body text does not count, and court clerks are not listed. For each decision: court, heading, role, panel and the first sentence of the operative part, verbatim. | `list_decisions_by_judge` |
| **Structure of a decision:** court and section, case number, type, number and date, hearing, panel, the sentence naming the parties and the subject matter, the operative part verbatim, outcome keywords, remedy, pronouncement, statute citations with their library status and the length of the reasoning, each with its character position in the stored text. Elements absent from the text are reported as not found. | `read_decision_structure` |
| **Submissions before a decision:** every submission filed in the case up to the date of the decision, written into two scratch files — the client's (outgoing documents) and the opposing side's (incoming documents). Only documents addressed to a court or a prosecutor's office count; letters to or from other authorities, court documents, evidence and chronicle entries are excluded. Each submission is taken with its main document only (covering e-mail and annexes removed). Documents that cannot be classified with certainty are listed as unassigned, in neither file. | `read_request_and_ruling` Gate 4 · Read coverage |
| **Reasoning compared with submissions:** measures how much of the reasoning of one decision matches, as text, the client's submissions, the opposing side's, both, statute text from the legal library, or none of them (the court's own wording); the recital of the parties' positions is measured separately. Matching passages are listed with their match rate (from 70 %), highest first, in the original wording with character positions. It shows where the reasoning reproduces submission text verbatim. | `compare_ruling_with_submissions` |
| **Document comparison:** compares any two documents, across clients and cases, for identical text blocks, for example in pleadings from different proceedings. Matching passages are classified as statute text, as a commonly quoted source (a third document of the two cases) or as shared only by these two documents. The answer directs the AI to read both documents completely before it states anything about a connection. | `compare_documents` |

### Assessment list of court decisions

Court decisions are recognised on capture: besides incoming and outgoing there
is a “court decision” checkbox that you can change at any time, and a background
run also checks the existing archive. Recognised decisions go onto an assessment
list. The AI works through it one decision at a time: it reads the decision and,
through the submissions tool, the submissions of both sides, and answers a fixed
set of questions. Nothing is stored until you expressly instruct it. A decision
does not change, so it is assessed once.

| Function | Technical name |
| --- | --- |
| **Open decisions on the list**, newest first: court, panel, judges and court clerks (each with its record ID, or marked as not yet in master data) and the outcome. | `list_court_decisions_to_assess` |
| **Prepare one decision:** header data, measured text shares of the reasoning, the assessment questions with the required structure of the analysis, and the tools for retrieving both sides' submissions. The AI can then read the decision without loading the overview of its case. | `prepare_decision_assessment` |
| **Record the assessment:** only on your express instruction, only when the decision has been read completely, only with an English analysis under seven required headings (arguments, law, evidence, basis, style, outcome, characterisation), each with content, and only when every judge and court clerk has a master-data record. If one is missing, the AI first researches the person in public sources and proposes the record. | `record_decision_assessment` Confirmation |
| **Stored assessments** by judge, court, court file number or case, complete and unabridged: your own and, with IRONSTICK SERVER, those of all colleagues, each showing who made it. The AI consults them before every pleading to a court, for the court and for every judge on the panel. | `read_decision_assessments` |

If decisions are still unassessed, the delivery tool asks before every formal
output whether they should be assessed now, so that the result can still be taken
into account, or later; with “later”, the question follows directly after
delivery. The AI also asks at the first session start of the day.

### OCR repair with lawyer verification

When a stored full text turns out to be truncated or damaged by an earlier OCR
run, the AI can repair it, with you as the final authority. It requests a fresh
scan; you select the pages in IRONSTICK (the same page picker as in document
capture); the new scan is cleaned deterministically (watermarks removed, OCR
patterns corrected, spacing normalised) and placed in the scratch store next to
the current database text. The AI then compares both versions passage by passage
and keeps whichever is correct. It is instructed to repair only mechanical OCR
errors, without rewording and without changing numbers, names or amounts.
IRONSTICK shows you the corrected version in full, and it replaces the old text
only after you approve it.

**Targeted verification by the lawyer.** Where a passage needs a human
eye, the AI asks you to check specific spots instead of the whole
document:

- **Large files.** For a PDF above 10 MB or 90 pages, the AI names the
exact location to check, for example “page 12, near the top”.
- **A few spots, not the whole file.** You do not work through a 200-page
file. You open the attachment in the entry IRONSTICK has already opened for you,
go to the named page and transcribe the illegible words or figures. Where a
passage is unreadable in both the old text and the new scan, the AI asks you to
check it by eye: at most three spots, each with page and position.
- **Direct return into the full text.** Your transcription is taken over
verbatim into the corrected version, passes the same approval dialog, and the
analysis continues.

IRONSTICK isolates the unreadable spots and asks you only about those.

| Function | Technical name |
| --- | --- |
| **Request a new OCR scan** of the stored original PDF, page by page, for damaged full texts only (you select the pages; secret documents are excluded). | `request_ocr_rescan` |
| **Scan status:** a single check that returns the full work order once the scan is ready (both texts in the scratch store). | `ocr_rescan_status` |
| **PDF hand-over**, the last escalation step: opens the entry so that you can add the original PDF to the chat (up to 10 MB / 90 pages; for larger files, the AI asks you to transcribe the spots in question, at most three). Requires a preceding new scan. | `request_pdf_handover` |
| **Submit the corrected full text** to IRONSTICK; it is shown to you in full, and only your save replaces the stored full text. | `submit_corrected_fulltext` Review |

### E-mail, calendar and deadlines

| Function | Technical name |
| --- | --- |
| **E-mails mentioning a term** (sender, subject, excerpt, attachments). | `search_emails_mentioning` |
| **Full text of one e-mail.** | `read_email_body` |
| **Calendar entries**, globally or per case. | `read_kalender` |
| **Appointments** for a day or period (hearings, meetings), court dates first. | `read_appointments` |
| **Everything on the deadlines screen**, sorted by date: deadlines, upcoming court hearings and due dates of AI memory entries; filterable by urgency or period. | `read_deadlines` |
| **Active deadlines** as a compact list, globally or per case. | `read_fristen` |
| **New calendar entry:** opens the calendar form pre-filled (title, date, times, description, case) after a required check for entries on the same day; nothing is saved automatically — you review and save. | `add_calendar_entry` Review |

### Persons, institutions and work records

| Function | Technical name |
| --- | --- |
| **Person record** (every master-data and analysis field, complete) and the relationship network of a person or institution; every answer begins with the party's cases. | `read_person` / `read_person_relations` / `read_institution_relations` |
| **Connections of a party:** everyone connected with one person, company or institution through recorded relationships and shared cases, strongest first, with the party's cases at the top. Required for every party named in a pleading. | `who_is_connected_with` |
| **Clusters in the party network** (deterministic community detection, as in the Universe view), with groups of unusual density highlighted and an optional separation of persons and institutions; and the most connected parties. | `read_cliques` / `read_top_connected` |
| **Note on a shared case:** pins a note to the pinboard of a case shared through IRONSTICK SERVER; it is posted directly and is visible to the case owner and every subscriber. | `send_case_note` Gate 12 · Preparation |
| **Institution record** with contact data. | `read_institution` |
| **Daily log:** read recent days or search them. | `read_tagesprotokolle` / `search_tagesprotokolle` |
| **Write to the daily log:** records the day's work (sent e-mails, drafted pleadings, developed arguments, decisions) at your request. An existing day is added to, never overwritten; affected cases are linked. Writes directly. | `append_tagesprotokoll` Gate 12 · Preparation |
| **Short note** as one entry in today's daily log. Writes directly. | `add_daily_note` Gate 12 · Preparation |
| **New chronicle entry:** opens the chronicle form in the right case, pre-filled by the AI (title, description, event date, times, keywords); nothing is saved automatically — you complete the form (adding pictures if you wish) and save it. | `add_chronik_entry` Review |
| **Start-of-day briefing**, tracked separately per desktop AI: on the first call of the day it returns the most recent daily-log entries and marks the AI as briefed; afterwards it says so. | `daily_briefing` |
| **Recorded working time** per case and client. | `read_time_tracking` |
| **Tagged entries** across all cases. | `read_tags` |

### Working rules, formats and memory

| Function | Technical name |
| --- | --- |
| **AI instructions of a case:** list them; reading always returns the full text. | `list_ki_instructions` / `read_ki_instruction` |
| **All active AI instructions of a case** in one call (full texts). | `read_all_ki_instructions` |
| **Inventory of AI instructions** across all clients and cases (client, case, instruction ID and file name; no full texts). | `list_all_ki_instructions` |
| **Output format:** the binding format specifications. For documents the AI names the exact type (legal pleading or simple letter, each with or without counsel) and receives the same template the built-in chat uses, maintained in one place. | `read_output_format` |
| **Daily-log format:** the binding file and entry format. | `read_tagesprotokoll_format` |
| **Court-mail format:** the binding format for court e-mails and PDF packages (subject and body text, package lists). | `read_mailversand_format` |
| **Shared AI memory:** search earlier insights; propose new entries (linked to a client, up to 1,000 characters). A new entry takes effect only after your approval. Entries linked to a case are never deleted automatically; entries without a case after one year without use, and every use renews that year. | `memory_search` / `memory_store` Review |
| **Maintain memory entries:** reword an entry, move or clear its due date (with a report of used and free characters), or delete it; each change takes effect only after your approval. | `memory_update` / `memory_delete` Review |
| **AI instruction package export** of a client, through the export dialog. | `export_ai_instruction` |

### Proposals for your review

| Function | Technical name |
| --- | --- |
| **Master-data correction or new record**, including a rename and the type (natural or legal person); for a new record the type must be decided first. The proposal goes to the Data Consistency Monitor for approval. A new record is first answered with a list of similar existing records, and nothing is stored until the AI files against one of them or explicitly confirms a new party; every stored new party triggers the follow-up to research and file its connections. | `propose_master_data` Review Gate 16 · Similar party |
| **Relationship** between persons, or a change to an existing one; same review path. | `propose_relation` Review |
| **Assign a party to a case:** exactly one person, company or institution, with a required reason and optional document references, goes to the Data Consistency Monitor. On acceptance the party becomes a case participant and appears in the cluster and connection views. An existing link or a pending duplicate is reported instead of being proposed again. | `propose_case_link` Review |
| **Person analysis text**; refused unless the AI has read the profile within the last 30 minutes. | `propose_person_analysis` Review Gate 14 · Analysis read |
| **Public-source party check** on a person or company — the standard procedure for checking a party. Input: name, city, district, country and type (natural or legal person). IRONSTICK then always runs the same steps: a full-text search for the name across the whole database (per case the ten newest documents with paragraph positions, plus the number of further hits) and a fixed list of web searches in the language of the party's country on Google, DuckDuckGo and Qwant, with duplicates removed. Returns a prepared profile with every search term used; the AI checks each finding and link and files the data through the Data Consistency Monitor. | `osint_entity` |
| **Name-list check:** matches a document that contains a list of names — a social-media contact list, an attendee or signature list, a company imprint — against all persons and companies on record in one call (word order and hyphenated first names are handled; a single common first name is never treated as a match, and single-word hits are marked as ambiguous). Takes a document ID, or a case, in which case the newest entry of that case is checked and named. No AI, no writes. | `entity_scan_evidence` |
| **Deletion or duplicate:** proposes removing an incorrect record, a tag or a completed deadline (a reason in the system language is required), or merging two records as duplicates. Nothing is deleted or merged without your approval. | `propose_deletion` / `propose_duplicate` Review |
| **Changed AI instruction:** proposes a new version (an addition, a file or the full content). IRONSTICK opens the case, shows you a red/green comparison and applies the change only after you accept; the decision is reported back to the AI. | `update_ki_instruction` Review |

### Scratch store for large content

A local work area for the AI. Any tool call can direct its full result to a
scratch file; the AI then receives only the path and the size, without a
preview. Every result above the connector limit (10,000 characters; 40,000 for
Claude Desktop and ChatGPT Desktop) goes there automatically in the same way,
including toolset openings. Large content therefore does not pass through the
AI's output in either direction, which is faster, cheaper and avoids
transcription errors; the AI reads it in sections from the store. Scratch files
can be passed directly to the delivery tool and to instruction updates. The
store survives restarts: the AI's notes, its state register and the
read-coverage records are kept; tool output from earlier days is removed at
every start, and files not read or written for 180 days are deleted
automatically (the final version of a pleading after 360 days).

**The scratch store is encrypted.** Every file in it is AES-256 encrypted
at rest, with the same key derivation as the case database and the document
store. Reading and writing pass only through IRONSTICK; a plain-text file placed
in the store by any other route (a file-system tool, a manual copy) is refused,
removed and reported to the AI as a rule violation. Files leave the store only
through IRONSTICK's export dialog. The database, the document store, the
configuration file and the scratch store are thus all AES-256 encrypted at rest.

**No tool shortens its own result.** The reading tools for document full
texts, whole cases, e-mails, web pages (complete statutes and judgments), the
daily log, person records and the chronicle always deliver their content
complete. One central rule decides where it arrives: below the connector limit
in the answer, above it as a whole in the scratch file, so the AI does not have
to predict the size of a result.

**Freshness check:** IRONSTICK monitors every scratch file. As soon as the
underlying data changes — a new document or chronicle entry in the case, a
calendar or daily-log entry — or a file expires, its content is replaced by a
notice telling the AI how to retrieve it again. Outdated scratch files are
invalidated automatically.

| Function | Technical name |
| --- | --- |
| **Text tools:** write (in portions) and read numbered line ranges; search with line numbers in one file or all; replace exact text; insert at a line or after a marker; delete or replace line ranges in one step. | `scratch_write` / `scratch_read` / `scratch_grep` / `scratch_edit` / `scratch_insert` / `scratch_delete_lines` / `scratch_replace_lines` Gate 4 · Read coverage |
| **Session state register** (key and value), above all recording which file is the current main draft; kept across restarts. | `scratch_statetracking` |
| **Outline, comparison and counts:** all headings with their line ranges; comparison of two files; a working copy; word, letter and line counts. | `scratch_list_titles` / `scratch_diff` / `scratch_copy` / `scratch_countwords` / `scratch_countletters` / `scratch_countlines` |
| **Clean-up:** normalise spacing and line endings and remove invisible characters; create a simplified comparison copy (lower case, or without diacritics) in a separate file. | `scratch_correctspace` / `scratch_correctcrlf` / `scratch_asciskeleton` |
| **Pleading format:** required before Markdown files are delivered; converts Markdown structure into the pleading format (tables to text lines, numbered lists to “(1)”, bullets to “•”, links to text). Content is preserved. | `scratch_normalizemd` |
| **List and delete scratch files**; files not used for 180 days are deleted automatically, and lasting insights belong in the AI memory. | `scratch_dirlist` / `scratch_deletefile` Gate 4 · Read coverage |

### Web, registers and validation

| Function | Technical name |
| --- | --- |
| **Web search and page retrieval.** Each search queries Google, DuckDuckGo and Qwant at the same time and returns one merged list without duplicates. A page is retrieved as complete, readable text: the main content is extracted (navigation, advertising and cookie banners removed; on article pages the footer as well). On pages without an article body, such as company and contact pages, the footer is kept, because address and contact data appear there; where extraction would leave almost nothing, the whole page is delivered. A page that is blocked or returns an error is tried once more in the embedded browser, and the HTTP status is reported. A call answers within 45 seconds; large or scanned documents continue processing in the background and are delivered on the next call with the same address. | `web_search` / `open_url` Gate 2 · Statute |
| **Single statute article**, verbatim, by library number and article number — the intended and most economical way to support a citation; records exactly that article as read. | `get_legal_article` |
| **Re-check a statute** against its source now (unchanged, updated or duplicate); a newer version replaces the entry, also firm-wide on IRONSTICK SERVER, where the most recent check prevails. | `recheck_legal_source` |
| **Search, retrieve and add statutes.** Search is fuzzy, and the jurisdiction is a required parameter, so legal systems are never mixed. Retrieval returns the stored statute text verbatim as Markdown, so the AI cites from the verified library, not from model memory. The AI must register every relevant source it finds online, as a link only; IRONSTICK downloads, converts and verifies the text itself, and you release it through the review in the Data Consistency Monitor. | `search_legal_source` / `get_legal_source` / `add_legal_source` Gate 2 · Statute Review |
| **Library inventory and excerpts:** page through the library (ID, jurisdiction, title, review date); retrieve a verbatim excerpt of a statute by library number and character range (search hits supply a ready-made call with an enlarged range); load a whole statute by library number. | `list_legal_sources` / `grep_legal` / `get_legal_by_lnumber` |
| **Validation** of VAT numbers (live against the EU VIES service), EORI numbers, LEIs, IBANs and national ID numbers (nine schemes in seven countries). | `validate_vat_vies` / `validate_eori` / `validate_lei` / `validate_iban` / `validate_id_number` |
| **Business register:** opens the “Find a company” search of the European e-Justice portal (BRIS) in the embedded browser for the AI to read. | `check_handelsregister` |

**Library maintenance and firm-wide sharing.** Each statute in the legal
library carries its source link and review date; entries not reviewed for more
than a month are flagged. Rejecting a statute in the Data Consistency Monitor
asks for confirmation first. With
IRONSTICK SERVER on a Synology NAS, the library is shared firm-wide: a statute
verified once by one colleague is cited by the AI at every workstation, with the
same text and the same version.

### Peer review by a second desktop AI

| Function | Technical name |
| --- | --- |
| **Hand over for review:** passes a piece the AI has produced (argument, strategy, pleading) to another desktop AI for critical review. The full text is placed in a short-lived buffer, and a task refers to it. Typical request: “Have the other AI check this.” | `handoff_to_peer` |
| **Open review tasks** that the other AI has addressed to this one (its own never appear), with their full content. | `read_open_tasks` |
| **Reply:** closes an incoming task (its content is deleted) and returns the assessment to the sender as a new task, in one call. | `reply_to_task` |
| **Close without reply:** ends the round; the short-lived content is deleted. | `complete_task` |

### Hand-over and delivery

| Function | Technical name |
| --- | --- |
| **Export a document** of the file as PDF to your Documents folder. | `export_pdf` |
| **Person sheet:** opens the export dialog with the PDF person sheet of one party (master data, case involvement, person analysis, relationships; filled fields only). | `export_entity` |
| **Pleading verification:** the required deterministic check of a finished pleading — document references with document-bound reading records, statute citations against the verified library, quotations, court file numbers in the n/nnn/yyyy format, amounts (exact match), party master data, Romanian personal numbers (CNP) and IBANs (checksum), and every named party read and checked for connections. Delivery of a formal document is blocked without a current positive verification for the exact file state; verifying a different document resets the annex readings. | `verify_pleading` Gate 3 · Pleading verification |
| **File delivery:** hands a finished file over through IRONSTICK's export dialog; a text draft goes into the word processor with one click as a submission-ready template. Accepts only a file in the application's scratch store; inline content and other paths are refused, so verification, versioning and re-delivery tracking stay attached to every delivery. If court decisions on the assessment list are still open, it asks before every pleading and every e-mail to a court or authority whether they should be assessed now or later. | `deliver_file` Gate 3 · Pleading verification Gate 7 · Formal content Gate 8 · Version series |
| **Repeat a delivery:** opens the IRONSTICK dialog again for a file that has already been delivered and is unchanged since, when you ask for the same file again; no gates, no review, no new version. Files not yet delivered, or changed since delivery, are refused and logged as a rule violation; they require a new delivery. | `redeliver_file` |

### Utilities

| Function | Technical name |
| --- | --- |
| **Location and weather:** approximate user location (country, city) from the latest login record; current weather for a named place. | `get_my_location` / `get_weather` |

## 7. Diligence guards: how the bridge checks the AI's thoroughness

Eight **deterministic diligence guards** check how carefully the connected
AI actually works. Being pure record-keeping and text logic, they involve no AI
and cannot be overridden by the model:

- **Read-coverage guard.** When the AI retrieves a full case text, the
preparation files of a case or a full text above the connector limit, the
bridge records line by line which ranges it has *actually* read, and keeps
these records across restarts. As long as gaps remain, **every** tool answer,
including searches, lists the exact unread line ranges with a percentage. A
complete read cannot be claimed until the records confirm it; only then does the
AI receive the one-time confirmation *“COMPLETE — all lines
read”*, and the reading is recorded for case preparation.
- **No preview.** Any result above the connector limit (10,000
characters; 40,000 for Claude Desktop and ChatGPT Desktop) is written to the
scratch store as a whole; the AI receives only a note with the file name, its
size and the two commands for continuing. Nothing is shown twice, and large
content is read in the scratch store. This applies to every tool, including
toolset openings; only the instruction reader and the scratch tools themselves
answer directly. No tool shortens its own result: below the limit it arrives
complete in the answer, above it complete in the scratch store.
- **Re-delivery guard.** If the AI continues to correct a working file
*after* it has been delivered to you, every further edit is answered with
the reminder that you currently hold the outdated version and that the
corrected file **must** be delivered again.
- **Undelivered-drafts guard.** When the AI writes its daily log, its
signal that it is finishing, the bridge lists by name every versioned draft
written in the session that was never delivered. Finished work cannot remain
unnoticed in the AI's working storage.
- **E-mail format guard.** Every access to e-mail content carries a pointer
to the binding mail-format specification (subject, body text, required content,
language rules), so the AI is reminded of the one correct delivery route
*before* it drafts an e-mail.
- **Copy-box guard.** Whenever the AI writes or edits a text working file,
the answer reminds it that documents reach the user **only** through the
delivery tool; pasting a finished letter into the chat as text or as a copy box
bypasses formatting, verification and delivery tracking and counts as a rule
violation. The only legitimate copy-box format remains the e-mail, as defined in
the mail-format specification.
- **Case anchor.** Every tool answer that concerns a case carries the
case's registered number, client and subject (gate 10), so context taken from
another case is exposed in the same window.
- **Model-tier steering.** The instructions tell the AI which model class a
task requires: before the pleading tools (output format, verification, delivery)
it asks you in one sentence to switch the desktop client to the top-tier model,
and after delivery it tells you that a less expensive model is sufficient again.
When the proposal counters indicate party-network maintenance (two master-data
proposals and one relationship or case-link proposal), the bridge adds, once per
session, a note that this fully gated work does not need a top-tier model. You
decide; the AI continues working.

Tool execution runs separately from the user interface within the
application, so long AI reads of large case files do not block the
IRONSTICK user interface.

## 8. Pleading verification: delivery only after proof

Pleadings and letters are written in dialogue with the desktop AI on the
live file, with the same working layer and the same gates as IRONSTICK's built-in
chat. What leaves the system is a **submission-ready template** for your
review and signature. Two checks precede every
hand-over: the deterministic verification set out here and, if you switch it on
for the active API model in the configuration, the **Red/Blue Team** review:
a separate review pass reads the draft as opposing counsel; substantial findings
send it back for rework, for at most two rounds, and every point is analysed on
its merits rather than adopted automatically. If the AI considers the findings
unfounded, it resubmits the unchanged file with a written answer to each
finding; the reviewer does not run a second time on an unchanged file, and you
receive the review report together with those answers. The hand-over itself
runs through IRONSTICK's export dialog, from where the draft goes into the word
processor with one click.

**No silent changes after delivery.** Once a document has been delivered,
a correction is never made silently: the old version is visibly voided, and a
new version is created. Your corrections feed into the review.

A formal pleading cannot leave the system unchecked.
`verify_pleading`, a deterministic checker (no AI), checks the
finished draft against your live records and the verified legal library in
**eight classes**:

- **Document references** — filing stamps and #-numbers, in the annex list
and in the body text: existence, ownership, stamp integrity and the
**document-bound reading record**. Every cited or attached item must count as
read for this document, either retrieved in full or with its scratch file read
completely; a reading counts for 2 hours, each delivery of the same document
extends it, and verifying another document resets the annex readings. Citations
from search excerpts or from memory fail verification. An annex line may state a
page range (“p. 12–15”); the reading requirement still covers the
whole document.
- **Statute citations** — the cited article must exist in the verified
library text (tolerant of thousands separators, exact at word boundaries) and
must have a **read record**: the AI must have retrieved that article from the
library in this program run. Press articles, web summaries and model memory never
support a statute citation and fail verification. Cited sub-references
(paragraph, point) are checked for existence as well. A source missing from the
library is not ignored: the AI must request it, and the request appears in
**your consent dialog**. Selected sources are retrieved, verified and stored;
declined ones are not, and every later citation of them carries a visible
“declined by user” note.
- **Verbatim quotations** — every quotation must appear verbatim in a
document of your archive or in the legal library (OCR-tolerant). If it comes
from a document of another case, the checker names that document, and the AI
then reads only that document, not the overview of the other case. A quotation
found in no source is marked as contradicted and blocks delivery. Removing the
quotation marks or slightly rewording the passage does not help: the blocked
quotation is remembered for the document and stays blocked. Deleting the
quotation entirely is allowed, and the delivery tells you which quotations were
removed because no source contains them.
- **Court file numbers** in the n/nnn/yyyy format, checked against your
cases and records.
- **Amounts: exact match required.** The figure must match the recorded
form exactly; “14.500” where the record says
“14.500,00” blocks delivery until corrected.
- **Party master data** — every name used must match the registered
spelling letter for letter, including diacritics.
- **Romanian personal numbers (CNP) and IBANs** — checksum validation (an
invalid check digit indicates an invented or mistyped number) plus a match
against the records.
- **Named parties** — every person or company named in the document must
have been read (profile) and checked for connections
(`who_is_connected_with`); the refusal names both calls and
recommends the cluster check (`read_cliques`) in addition.

Every finding is classified as verified, unverified or contradicted. Delivery
of a formal document is refused without a current positive verification for the
exact file state; **every edit cancels it**. After five failed verification
runs the process stops, the AI is instructed to stop and report, and **you**
are notified directly in the application. Deliveries run only through the
application's own scratch store, so verification, versioning and re-delivery
tracking stay attached to every file; inline delivery and other paths are
refused.

## 9. Data protection

The bridge delivers **raw case data** into your desktop
AI's session, deliberately, because drafting a submission-ready template needs
real names, numbers and dates. Everything the AI reads there is processed under
your own account with that provider (Anthropic, OpenAI, Qwen or Moonshot AI /
Kimi) and under its terms. The built-in chat, by contrast, transmits
pseudonymised data through the router. The complete disclosure, including where
the boundaries lie, is in the [*IRONSTICK GDPR Data-Flow
Declaration*](https://www.ironstick.legal/gdpr.html).
**Free background providers.** The free providers that you
can switch on in the configuration for background tasks (Groq, OpenRouter,
Mistral) are not used by the bridge.
**Access code.** The bridge observes IRONSTICK's start-up
lock: until the six-digit authenticator code has been entered on the IRONSTICK
start screen, every tool call is answered with “application locked — the
security code has not been entered yet”, and no case data is returned. Enter the
code in IRONSTICK, then repeat the request.
Version 1.0.7 — as of November 2026. The tool list reflects
the bridge shipped with this version; tools may be added over time.

## Appendix — Complete technical description of the bridge

Scope: Version 1.0.7 — as of November 2026; more than 200 tools in 22 toolsets, Model Context Protocol (MCP). This appendix is written for IT and data-protection review and describes the architecture, every functional layer, the safeguards, the limits and the redirections of the bridge.

### 1. Purpose and positioning

The bridge connects commercial desktop AI applications (Claude Desktop, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) to a running IRONSTICK legal case-management application on the same machine. The desktop AI receives a controlled, self-describing tool surface over the Model Context Protocol (MCP); every call is executed inside the IRONSTICK application against the live database, and every result is post-processed by the bridge before it reaches the model. The design goals are: minimal permanent context load on the model, structural enforcement of working rules that plain instruction text cannot guarantee, protection of unsaved user work, protection of the data against oversized or misdirected requests, and complete absence of readable configuration material in the installed product.

### 2. Process topology

The bridge consists of two cooperating processes.

The IRONSTICK application runs a local, protected service that can only be reached on the same computer. This service owns the tool registry, executes all tool calls, applies all gates and post-processors, and is the single point of truth for what a connected model may see and do.

In front of each desktop AI stands a small native executable. It speaks the standard MCP protocol toward the desktop AI and forwards work over the protected local connection to the application. Each desktop AI has its own copy of this file with its own caller identifier; no instruction file is kept with the bridge. The caller identifier travels with every tool call as an internal argument and drives all per-AI behaviour. The front-end also emits a heartbeat to the application roughly every three seconds while a desktop AI is connected; the application surfaces this as a "bridge connected" presence indicator with a fifteen-second time-to-live, so the user always sees whether an external AI is currently attached.

On the MCP initialize handshake the front-end returns its server identity and, embedded in the initialize result, the session-start instruction text; it fetches this text at that moment over an internal channel from the running application. If the application is closed, no instruction is served, and the application’s instruction lock enforces the reading as soon as it runs. The full playbook remains available to the model at any time through a dedicated tool.

### 3. Security, licensing and consent

Traffic between the desktop AI's bridge program and IRONSTICK stays on this computer (local loopback, token-protected); only the web and register tools contact the internet. The web-access tools reach only public internet addresses, so a model cannot be directed through the bridge to scan the computer or the local network.

The bridge and the per-vendor desktop integrations are separately licensed add-on modules. Each is unlocked as a module bit in the signed Client App licence key; there is no separate bridge key. An unlicensed module is neither installed nor exposed.

A consent gate protects the first data access per program run for every desktop-AI connection: the first tool call by any desktop AI after program start opens one warning dialog above the current screen. If the user approves, access is open for all desktop AIs for the rest of the run; if the user declines, all of them are blocked for ten minutes, and every blocked call returns a message asking the desktop AI to try again later; after the ten minutes the next access opens the dialog again. The state is held in memory only and never stored.

Independently of consent, an instruction access lock guards every desktop connection: no tool, toolset openers and the member-execution tool included, executes until the caller has read the instructions and quoted the prohibition of hallucination (rule 5) verbatim through the confirmation tool; only the instruction reader, the confirmation tool and the system-language tool remain available. The confirmation is kept per desktop AI and lapses sixty minutes after it was given, after two hours without a call, at midnight, on every new connection and after the desktop AI compacts its context; after a lapse the caller must re-read the instructions and quote a randomly chosen rule instead of the one it already knows. On the Claude connection each chat is a separate caller (distinguished through the structured tool events of Claude's local session record, never the conversation text); a chat whose context was compacted is locked immediately, without penalty, until it has re-read the instructions; and a chat that accesses the data folder with its own file tools instead of the connector has this recorded as a rule violation. A refusal names the two calls that open the lock, and the drop-down menu at the AI's symbol in the application shows the state as a green tick or a red cross.

Every data-reading and data-writing function is owner-validated against the licence-derived owner identity. Evidence records flagged as secret are excluded from every reading, searching, dumping and stamping function without exception; records flagged as deleted are likewise invisible.

### 4. Instruction system

The model's guidance arrives in three layers with strictly increasing specificity and strictly decreasing residency.

The core instruction is delivered once, inside the initialize result. It contains the mandate (fact-based legal work at senior-associate standard), the universal rules (dialogue language equals the IRONSTICK system language; the jurisdiction of generated documents comes from the case, never from the dialog; date discipline; no quoting from search snippets — every page the AI relies on must be opened and read via open\_url, whichever search found it; citation and reference discipline; the retry limit of three attempts per failing tool call; delivery discipline), and the description of the toolset mechanism itself, including the explanation of the home-toolset field.

The per-area working rules are not resident: they are handed to the model verbatim and current every time it opens the corresponding toolset, as part of the opening payload.

The complete playbook — core plus all toolset rules plus the appendices (among them the daily-log file format) — can be re-read at any moment through the instruction-reading tool; the application serves it live on every call, so instruction changes reach a running session without reconnecting.

Three of these rules are additionally enforced structurally rather than textually, by gates: the access lock, the date discipline and the statute-source discipline. The reading of the instructions itself is the last rule of the universal block: the way to unlock the connector is stated only after all preceding rules, so a model that reaches it has read them.

### 5. The tool surface and the toolset layer

To keep tool selection reliable, the bridge does not expose all of its more than 200 tools at once. It exposes a reduced surface of about thirty entries: seven core tools (current date and time; current GUI context; system language; case jurisdiction; instruction re-read; instruction confirmation; user manual), the delivery tool, twenty-two toolset openers, the member-execution tool and the full-inventory tool. Everything else exists only as members inside toolsets.

Opening a toolset is an ordinary tool call without arguments. The answer delivers, in one shot: first, where the toolset has one, a deterministically pre-generated context block computed at the moment of opening (eight toolsets have such producers — the session-start protocol itself; the current scratch file inventory; the ten most recent memory entries as a preview; the first thirty statutes of the legal library; the list of hot cases; today's registered documents and incoming e-mails; today's daily log; the current deadline and appointment snapshot); second, the verbatim working rules of the area; third, the complete member-tool definitions with their full parameter schemas; fourth, a fallback line pointing to the full inventory. A failure inside a pre-generation producer never prevents the opening.

Members are executed through the member-execution tool, which takes the exact member name and an argument object. Before execution a lightweight schema validation runs: required fields must be present and non-empty, and integer, number and boolean parameters must parse as such; a violation returns the expected schema instead of executing. An unknown member name returns the closest existing name by edit distance as a suggestion. The instruction layer caps correction attempts at three per failing call, after which the model must stop and report the exact error.

Toolsets are not modal; all openers remain callable at all times, and a tool may deliberately be a member of several toolsets. Feature gates remove whole groups: when GUI navigation is not enabled by the user, the navigation toolset opener and all its members are absent from every list and every answer. The full-inventory tool lists every member with a one-line purpose and its owning toolset and exists only as a fallback; the toolset descriptions are the primary router. In total the twenty-two toolsets carry more than 340 member entries over more than 200 distinct tools.

The measured context cost of this arrangement: the initial configuration (core instruction plus reduced tool list) is roughly ten thousand tokens; a single toolset opening adds between roughly nine hundred and seven and a half thousand tokens depending on the toolset, before its variable pre-generation content.

### 6. Tool definition format

Every tool definition consists of four parts. The description carries the tool's purpose, its behavioural mandates and its cross-references — and nothing else. The input schema carries every parameter with its own description, including defaults, formats, mutual-exclusivity notes and per-parameter mandates; parameter usage instructions live exclusively here. The output field describes, before any call, exactly what the call returns, including orderings, markers and error forms, so the model can judge suitability without trial calls. The home-toolset field names the toolset the tool primarily belongs to, with a reserved value marking core tools that are always in the top-level list; a member encountered inside another toolset thereby advertises where more tools of its family live, and every toolset opening carries one explanatory line stating that the model is never locked into the opened toolset.

All model-facing text is English. Tool definitions are generated from a single source and checked automatically for consistency, including the agreement between each tool's home toolset and the toolset member lists. Declared numeric limits in tool schemas are enforced in the executing functions, so a stated maximum is a real maximum.

### 7. Universal runtime mechanisms

The following mechanisms apply across the entire tool surface and are implemented centrally, not per tool.

Scratch redirection on demand: every tool accepts an additional parameter naming a scratch file; when set, the complete result is written to that file and the model receives only the path and the size — no preview. Large content thereby never flows through the model's token stream in either direction, and the path is directly usable wherever a source path is accepted.

Overflow protection: any result exceeding the connector limit — ten thousand characters, one central constant, raised to forty thousand (four times the standard) for Claude Desktop and ChatGPT Desktop — is automatically written to a generated scratch file. The model receives only a note stating the total size and line count, the file name, the explicit assurance that nothing is lost, the two continuation commands (ranged reading; pattern search in the file) and the express prohibition of re-requesting the call — no preview, so large content is read in the scratch store. The one exception is the instruction reader, whose package always arrives complete; toolset openers are diverted like every other result. No tool shortens its own result — the connector limit is the only place where size is decided. Results beyond ten megabytes are not diverted but answered with a narrowing instruction naming the applicable filters, since even the scratch store caps file size there. Exempt from diversion are the scratch reading tools themselves (internally capped; diverting them would recurse) and calls that already requested scratch redirection.

Date gate: every tool that writes into IRONSTICK is refused for external callers unless that caller has fetched the current date and time within the last thirty minutes. The refusal names the remedy — fetch the time, then repeat the identical call. The window is kept per desktop AI, deliberately short so a fresh conversation cannot inherit an old fetch and so midnight rollovers are caught. In-app callers are unaffected. This exists because external models otherwise date records from their training period instead of the actual date.

Statute gate: web access for statutes and norms is structurally refused until the internal legal library has been consulted; the refusal points to the library procedure. Any statute source that is nevertheless fetched from the web must be reported into the library through the registration tool — the instruction layer classifies omission as a breach of duty, and results touching legal sources carry a marker for auditability.

Navigation hard-block: eight screens are declared protected — the four capture forms (document capture, case-bound document capture, case chronicle capture, client capture), the case creation form, the institution/person assignment form and the text editor. While the user's main window shows any of these, every GUI-navigation and export function is refused centrally, for direct calls and member execution alike, with a message naming the protected screen, forbidding navigation, and instructing the model to answer with the data it has and to offer opening only after the user has finished and saved. A model can therefore never destroy unsaved user work by switching screens. The web-page opening tool is exempt from this block, since it does not navigate the application.

Navigation offer: results of the roughly forty tools whose output describes a GUI-openable object — a case, a person, an institution, a client, a specific evidence item, an e-mail, calendar entries or deadlines — receive one appended line proposing that the model offer the user to open the object directly in IRONSTICK, naming the exact navigation call. Where the invoking arguments contain the object identifier the proposal is concrete; for search and listing results it references the identifier of a hit. The line explicitly requires user agreement before navigating unless the user's request already was a show/open command. The offer is appended only after the overflow handling, and only when the result is not an error, navigation is enabled, and the navigation hard-block is not active — the block always wins over the proposal.

Caller propagation: the caller identity accompanies every execution and drives per-AI state — the once-per-day work briefing is tracked per desktop AI, peer-review task listings exclude the caller's own tasks, and the call log attributes every line.

Call logs: each bridge program keeps a local log next to itself with time, tool name, success or failure and answer size, and never content. A second, more detailed diagnostic log in the data folder is off by default. When it is switched on for troubleshooting (path analysis, toolset optimisation), it records one line per tool call across all connected AIs — timestamp, caller, the effective tool name (for member execution the inner member), the call parameters (up to three hundred characters each), the result size measured before any overflow diversion, the execution duration and an error flag. It can be switched without a restart, is trimmed automatically once it exceeds two megabytes, and is meant to be switched off afterwards.

Diacritics and script folding: every keyword search, pattern search and comparison across the bridge folds case and diacritics for all eleven system languages, including the Turkish dotted/dotless i (replaced before lowercasing, since it otherwise changes length), Cyrillic variant letters and Latin ligatures; the folding is position-stable where positions are reported.

Result conventions: failures are returned as text beginning with an error prefix and flagged as errors in the MCP result; the model is instructed to correct and retry at most three times, then stop and report. Structured self-describing markers embedded in results (for memory operations, gates and similar) are stable and documented in the respective output fields.

Read-coverage guard: when a model pulls a full-case dump or the whole-case reader's scratch delivery, the bridge records line-exactly which ranges of the dump file were actually read. As long as unread ranges remain, every successful tool answer — searches, pattern matches, everything — carries the exact unread line ranges together with a read percentage; a complete read therefore cannot be claimed until the records confirm it. Once the file is fully read, the reminders stop and the next ranged read confirms once that all lines were read, which ends the reading requirement for that file. Tracked are the full-case dumps, the head and digest files of the case preparation tool and every document full text that was diverted to the scratch store; partial reads of other redirected results remain legitimate and silent. The coverage state is persisted next to the store and survives application restarts, and a file read to completion is recorded for case preparation — the reading stays valid even after the start-up clean-up removed the file.

Re-delivery guard: after a successful file delivery whose source lies in the scratch store, a marker file next to the store records the delivered name and time (deliveries passed as inline content are recorded under their delivery name as well). Every later edit, write or normalisation of a file recorded there is answered with the reminder that the user is holding the outdated delivered version and that the corrected file must be delivered again under a new version number. The delivery answer itself additionally fetches the current read-coverage state from the application over an internal endpoint that is not a tool, and flags a delivery made despite unread ranges.

Undelivered-drafts guard: the daily-log entry — the model's signal that it is finishing — lists by name every versioned working file written by the model in the session that was never delivered, with the instruction to deliver the finished artefact now; work that only exists in the scratch store never reaches the user.

E-mail format guard: every answer of the e-mail reading and fetching tools carries the fixed pointer that the binding instruction for formatting and delivering e-mails — subject copy box, body copy box, recipient section, mandatory content, language rules — comes from the mail-format specification tool, to be fetched before building any e-mail and followed to the letter.

Background execution: the data and analysis tools run separately from the user interface within the application, with their own tool registry and database connections; the interface part only routes, gates and post-processes. Long accesses to large case files therefore do not block the user interface. If the background part stops, execution continues in the interface part and the background part is restarted at the next opportunity. Tools that need the user interface — navigation, confirmation dialogs, the embedded browser, mail retrieval and the review-gated proposal tools — always run there.

### 8. Interaction gates

Three tools deliberately answer their first call with a question instead of a result; in all of them the literal answer "unknown" is always valid and never punished.

The delivery gate: the file-delivery tool, called without the formality declaration, delivers nothing and asks whether the delivery is one of the four formal artefact kinds — legal pleading, court e-mail, chronicle entry, daily-log entry — or none of them. Answering with "no" delivers immediately — but the claim is content-checked: a deterministic detector inspects the file, and content shaped like a letter or pleading (salutation and closing formulas across six languages, an addressee block, legal markers, an identity block) refuses the informal claim and logs the attempt; such content has no informal path. Answering with a formal kind returns, still without delivering, the binding formatting instruction for exactly that kind; only the repeated call carrying the confirmation flag that the file was verified against this instruction actually delivers. A version-series guard additionally refuses the first delivery under a new file stem while a delivered versioned series with the same case number already exists — a document cannot be renamed to reset its version counter; a genuinely different document requires a conscious, logged declaration. This gate runs inside the application itself; the front-end merely passes the call through. Documents and letters never reach the user as chat text or copy boxes — every writing access to a text working file carries that reminder, and the one legitimate copy-box artefact remains the e-mail per its format tool.

The search gate: the central evidence search, on its first call, searches nothing and asks three things — what kind of item is sought (inbound document, outbound document, evidence with attached document, statement/transcript, chronicle note, or unknown), the scope where a client identifier is present (this case only, all cases of the client, or unknown — with the client's case list included in the question), and the desired answer form. The answer forms are: a clean identifier list (the recommended default; hits are then opened individually through the evidence reader), compact hits with match context, or the full result written to a single scratch file.

The full-case gate: the whole-case reader, on its first call, loads nothing and reports how large the case actually is — the evidence count and the approximate accumulated content volume across titles, descriptions, document full texts and transcripts — then asks the model to decide between targeted search tools and a repeated call with the scratch delivery argument, which writes the complete, OCR-normalised case content into the scratch store and returns only the file handle.

The verification gate: for formal pleadings the delivery tool additionally requires a fresh attestation from the deterministic pleading verifier. That verifier scans the finished scratch file across eight claim classes — evidence references in the annex list and the running text (stamps and numbers, including document-bound citation provenance: every cited or attached item must count as read for this document — fetched in full or its scratch file read to completion; a reading counts for two hours, every delivery of the same document extends its cited items by two hours, and verifying or delivering a different document stem resets the annex readings; an annex line may declare a page range, the reading duty remains the whole document), statute citations against the verified library (an article absent from the verified statute text is a contradicted finding; the citation additionally requires read provenance — every library read is recorded per application run with the article numbers actually returned, and a cited article without such a read record is a contradicted finding, so press articles, web summaries and model memory can never ground a norm; cited sub-references such as paragraph and point are existence-checked in the article's text region; a source absent from the library blocks until integrated or declined), verbatim quotes — each must be found in full in the full texts of the entire archive or the legal library; if it comes from a document of another case, the verifier names that document, and only that one must be read, not the overview of the other case; a quote found in no source is contradicted and blocks delivery, a quote whose marks were merely removed or whose wording was lightly changed stays blocked, and quotes struck entirely are reported to the user at delivery —, court file numbers in the n/nnn/yyyy format, amounts under an exact-match rule (the exact recorded form), party master data letter for letter including diacritics, Romanian personal numbers (CNP) and IBANs through checksum validation, and named parties — every person or company from the entity register that is named in the document must have been read (profile) and connection-checked for this document, with the refusal naming both calls and recommending the clique test. Findings are graded verified, unverified or contradicted; any contradicted finding or unresolved missing statute yields a blocking verdict. The attestation binds to the exact file state — any edit voids it — and after five failed verification runs the process stops, instructs the model to stop and report, and notifies the user directly in the application.

The consent gate for statute sources: a statute source reported by the model is no longer integrated silently. Requests collect in a single consent dialog in the application — source, jurisdiction, requesting AI — where checked entries are fetched, verified and stored at once and unchecked entries are declined; a declined source turns later citations of it into visible unverified-by-user-decision notes instead of silent blocks. The data monitor thereafter carries statutes only for the periodic review cycle.

The store-only delivery rule: the delivery tool accepts exclusively a source path inside the application's working store; inline content and paths outside the store are refused for every file type. This keeps the verification attestation, re-delivery tracking, versioning and read coverage attached to every delivered artefact without exception.

The follow-up question about open court decisions: if unassessed decisions remain on the assessment list, the delivery tool at first does not deliver a pleading or a court or authority e-mail, but names the number of open decisions, those belonging to this case or its courts with their IDs, and requires the user’s answer — assess now or later. “Now” halts the delivery and returns the work order (assess, read the assessments of court and panel, revise the document, verify again and deliver); “later” delivers and appends the mandatory follow-up question to the result. The question comes again with every formal delivery as long as the list is not empty.

### 9. Session start and framing

The session-start toolset's opening runs the entire start protocol in one shot and writes it to a fixed, named scratch file; the direct answer returns only the date anchor, the system language and the current GUI context, and the model reads the remainder — due memory entries, the daily briefing, deadlines, appointments, open peer tasks, and the index of the last ten daily-log entries — with a single scratch read. The members of this toolset re-run single pieces on demand.

The date-and-time tool answers with one line (date, time, timezone, weekday, NTP-synchronised where possible, otherwise system clock) and carries the standing mandate that every dialog turn begins with the current date and that dates are never guessed. The GUI-context tool reports which screen of the application's main window is open, with breadcrumb and the open client and case. The system-language tool returns the language identifier governing dialog and cross-case lists; the jurisdiction tool returns, per case, the jurisdiction that governs generated documents and terminology, is mandatory before any document work, and instructs asking the user when unset. The morning-briefing tool returns today's structured briefing with identifiers and markers so the model can act on each item; the work-briefing tool tracks per desktop AI whether that AI was already briefed today, returning the recent daily-log entries only on the first contact of the day.

### 10. The scratch store

The scratch store is the model's working folder for everything large. It offers writing with append capability for chunked assembly; line-numbered ranged reading whose numbers map directly to the line-based editors; exact text replacement with uniqueness requirement, a whitespace- and typographic-quote-tolerant retry that still requires uniqueness, and an instructed fallback to locate-and-copy on any other mismatch; insertion by line number or after a marker; line-range deletion; atomic line-range replacement as the safe restructuring operation; case- and diacritics-insensitive pattern search across one or all files with a fifty-hit cap and optional context lines; a markdown outline that maps headings to line ranges without reading the file; a directory listing; copying; a line diff between two files that hides common lines; delivery-oriented normalisation that flattens structural markdown to the pleading conventions, protects references, pads short evidence references to seven digits and normalises line endings; whitespace normalisation; line-ending and invisible-character clean-up; simplified comparison copies (lower case, or without diacritics) always into a separate target file; word, letter and line counters; and deletion.

A lightweight state register remembers key-value notes for the running session — above all which file is the current main draft — with get, set and clear semantics, surviving application restarts.

Lifecycle: the store is long-lived and survives restarts; the model's own notes, the state register, the file metadata and the read-coverage bookkeeping persist, while tool dumps from earlier days are purged at every start and files untouched for one hundred and eighty days are deleted (the final version of a pleading after three hundred and sixty days). Every access through any scratch tool — including a plain read — resets that file's deletion clock; a mere appearance in the directory listing does not. The instruction layer obliges the model to delete its task files when a task ends and to move durable insights into the memory system instead.

### 11. The memory system

The persistent AI memory is a cross-chat notebook shared by all connected AIs and the built-in assistant. An entry holds at most one thousand characters — the toolset and tool descriptions demand compression to the absolute essentials and splitting of larger material — and is linked at minimum to a client or a case (with a case link the client is derived and corrected automatically) and optionally to an evidence item, an e-mail, an entity or an institution, all validated. Entries must be written in the IRONSTICK system language regardless of dialogue language, and the model is forbidden to use its own private memory files for case knowledge, since those reach neither the peer AI nor the user. An optional due date makes an entry deadline-like: due and overdue entries surface first in the session-start protocol and in the application's deadline views.

Search is filterable by any of the linked identifiers and by due date (everything, exactly today, or a window of ten days around a given date), returns newest first with a default of twenty and a maximum of fifty hits, and marks user-authored notebook entries as strictly read-only for the AI. Updating replaces text and/or moves, sets or clears the due date; everything not supplied stays unchanged. An update whose text exceeds the limit is rejected with a capacity statement naming the submitted length, the limit, the entry's current occupancy and the free remainder; every successful text update likewise reports occupancy and remainder; in both cases, once fewer than three hundred characters remain free, the answer appends the standing recommendation to either rework the whole entry or create an additional entry and leave a cross-reference in the old one. Deletion is irreversible and refuses user notebook entries and task entries. Storing, updating and deleting an entry each open an approval window in the application; the change takes effect only after the user approves it. Housekeeping is built for long-running proceedings: entries linked to a case are never deleted automatically. Entries without a case are deleted after one year without use; every entry returned by a memory search and every update renews that year, since the clean-up measures age against the most recent of creation and last access. User notebook entries never expire automatically.

Master data, persons, relations and documents do not belong in the memory: the descriptions route them to the proposal tools and to document capture.

### 12. Deadlines, appointments and the calendar

The deadline tools deliver the active deadlines either compactly (title, due date, days remaining, case, with secret-flagged entries excluded) or with per-entry descriptions and explicit overdue and urgent markings (urgent meaning ten days or less), and a recital form ordered by urgency with period filters (all grouped by criticality, critical only, due soon, today, this week, next week, or a specific date). The appointment tool recites a day or period ordered court dates first — portal-imported court dates, then calendar court dates, then remaining calendar entries. The calendar reader lists entries globally or per case with optional date range.

The calendar capture tool never writes: it opens the application's calendar form prefilled with title, date, times, description and optional case link, and the user completes and saves. Its description imposes a mandatory duplicate check before every call: read the same day's calendar first, compare by date only while ignoring times, and on any similar entry show it to the user and ask whether it is the same event, calling the tool only after the user confirms a new entry.

### 13. The daily journal

The daily-log tools write and read the cross-case daily log. Appending, on the user's instruction, targets a day (default today, with the date fetched through the time tool), always appends to an existing day with a separator and never overwrites, links affected cases through a case list, and expects the content as clean markdown in the style defined in the instruction appendix. A note tool adds a single event line to today's daily log with an optional case reference. The format tool returns the binding daily-log file format. Reading works by date, range or newest-first with full-text option and case scoping; searching is a diacritics-insensitive keyword search across titles and full texts with date, title and context excerpt per hit. Both listing forms default to ten and cap at thirty entries. The toolset opening already delivers today's daily log in full, with a note on how many further entries exist for the last two weeks.

### 14. Case access

Case resolution works by case number, by involved party name (diacritics-tolerant, covering opponent, claimant, title and client — mandatory whenever the user names a party without a number, since many cases carry no number at all), and through the client's case list. Related proceedings come from the case hierarchy as parent, child and same-group entries.

Every document the AI reads carries an origin label: inbound documents from the opposing side or an authority are marked as to be critically examined, outbound documents as the client's view. This applies equally to the bridge and the built-in chat.

The quick overview tool returns, in one call, every field of the case tab, every field of the client tab, an optional linked portal docket, and the last fifteen evidence identifiers with entry dates — intended as orientation before any full-text access. The chronicle reader returns a case's chronicle newest-first, compactly and without full texts, with date filters and a limit of up to fifty entries, and is the designated quick answer for "what happened last" — it counts for nothing toward case preparation.

Case preparation is a tool and a gate. The preparation tool delivers, in one call, the head (profile and jurisdiction) and the digest of every document — identifier, date, type, title, the capture-time summary, cross-references and full-text size — which serves as the chronicle. The answer always begins with a note naming where head and digest are (inline when the whole answer stays under the connector limit, otherwise as two scratch files that must be read to completion) and the five newest documents to read in full. The preparation gate then refuses, for external callers, two tiers of case output: a note or entry on a case (journal, daily note, chronicle entry, case note) until profile, jurisdiction, digest and the five newest chronicle entries (notes without a PDF or transcript; images allowed) are read in full — so a running series of chronicle entries respects the last ones, without forcing heavy documents to be read for a mere note; a judgement on the case (pleading verification, hand-over, export) additionally until every cited or attached document is read in full. Readings are recorded per desktop AI in a stored record, valid for three days or until the next inbound document of the case; outgoing documents and evidence records never invalidate a reading. The same record feeds the drop-down menu at the AI's symbol. A third, lower tier guards case content itself: every case-content tool — chronicle, timeline, keyword, passage and period searches, full texts, contradictions, statements, obligations, deadlines, calendar, correspondence, usage, filed exhibits, letter chains, annex lists, stamps, media, institutions, tags, assessment and instruction notes — is refused for a case whose digest the caller has not read, the refusal naming the preparation tool; the third refused attempt on the same case is recorded as a rule violation. The preparation counters reset with every instruction reading and session start.

Complete case reading is protected by the full-case gate. The scratch dump is the fastest complete path: it assembles the whole case text inside the application, untrimmed, normalises OCR anomalies (repeated spaces, line-ending mixtures, non-breaking spaces, soft hyphens, zero-width characters), writes it directly into the scratch store and returns only the handle with statistics; very large cases split into numbered part files. Scope filters restrict the dump to inbound, outbound or both directions, and an evidence-identifier list dumps exactly those records — the designated way to read one very large document completely, with the case derived from the evidence.

The evidence reader is the mandatory basis for every substantive statement: it loads a record with its extracted document full text (complete and untruncated; above the connector limit it arrives as a whole in the scratch store) and, where present, the chat or transcript full text (covering messenger chats and phone, hearing, interrogation and court transcripts), plus the qualified summary, description and metadata, which are declared no substitute for the full text. If neither full-text section appears, no extracted text exists and the model must not make substantive claims about the record. A comma list of up to twelve identifiers reads several records in one call. A media inventory tool reports the existence, type, date and size of image, audio and video attachments of a record or case, explicitly stating that media content is not readable as text and exists so a record with only media is not misclassified as empty.

Tags are surfaced as free-form user post-its on evidence records — the text is the information, the colour has no fixed meaning, and a tagged record is declared a strong relevance marker. Three modes deliver a global overview with counts and referenced records, all tags of a case, or a text search within tag texts, with a scope filter separating personal from case-bound tags. Matters list a client's entire case landscape as groups with nested cases, including parent and child cases. The stored case assessment is retrievable per case.

### 15. Search inside the file

The central evidence search scores across all evidence fields, the extracted document full texts and the transcript contents, with multi-word queries combined conjunctively, diacritics independence and a phrase boost; results are ordered by relevance without exposing score numbers, each hit labels which field triggered it, the default is fifteen and the maximum thirty hits, and the answer form follows the choice made at the search gate. The passage search splits documents and transcripts into paragraph and sentence windows and returns the best-matching passages with their reference — locating where in a text something stands, not merely which record — with OCR-tolerant matching that bridges capture errors, a phrase bonus, and scoping to exactly one case or to all cases of exactly one client (the designated instrument for "did X ever, anywhere" questions; never across clients), defaulting to eight and capping at twenty passages. A date-range tool lists evidence between two dates. The dedicated correspondence-from-party finder is mandatory when the user asks for documents from or to a specific party: it matches the party diacritics-tolerantly against the involvement records, filters by direction (to me, from me, or both), excludes chats and transcripts, hides self-made screenshots by default while stating their count, and orders newest first — expressly distinguished from the keyword search, which would also return records merely mentioning the party.

### 16. Deterministic analysis tools

These tools compute from the records without any AI involvement. The timeline returns all items of a case ordered by event date descending with reference, timestamp, record type and title, defaulting to three hundred and capping at five hundred items. The contradiction collector deliberately does not judge: it gathers up to one hundred twenty candidate items (default sixty), optionally filtered to one entity, with reference, date, participants and short content, and leaves the judging and the follow-up full-text reads to the model. The who-said-what tool finds every item in which a person occurs — as participant, in title or text, or inside transcript wording — diacritics-independently, marking the source of each hit, with a default of forty and cap of one hundred. The participant-network tool counts which persons and entities co-occur in the same items, globally or per case, optionally focused on one entity. The obligations tool lists open deadline-flagged items by due date with day counts, descriptions, references and overdue/urgent marking.

Five further deterministic tools serve the characterisation of individual judges and prosecutors; only incoming documents from a court or a prosecutor's office count as decisions. The decision lister returns every decision in which one person sat as judge or acted as prosecutor, across all cases, counting only a name in the header (composition of the court) or in the signature block — a name in the running text does not count, and court clerks are never listed. The structure reader dissects one decision into court, section, case number, kind, number and date, session, panel, the sentence naming parties and object, the operative part verbatim, outcome keywords, remedy, pronouncement, statute citations with their library status and the size of the reasoning, each with its character position, reporting what is absent as not found. The submission collector writes every submission filed in the case up to the date of the decision into two scratch files — the client's outgoing and the opposing side's incoming documents — restricted to documents addressed to a court or a prosecutor's office, each with its main document only (covering e-mail and annexes cut off), listing what cannot be classified as unassigned; its files carry the reading duty. The ruling comparison measures which share of the court's own reasoning matches, as text, the client's submissions, the opposing side's, both, statute text of the library, or nothing (the court's own wording), measures the recital of the parties' positions separately, and lists the matching passages with their match rate from seventy percent upwards, highest first, in the original wording with character positions. The document comparison holds any two documents against each other across clients and cases, classifies matching passages as statute text, common quoted source or shared only by these two, and opens its answer with the instruction to read both documents completely before anything is stated about a connection.

An assessment list turns these measurements into lasting knowledge about courts and judges. Every record marked as a court decision — ticked by the user on capture, pre-filled by the recognition or found by the background run in the existing archive — is queued with deterministically determined header data: court, panel and composition, judges and court clerks with their master-data IDs, number, date and outcome. The AI works through the list one at a time; the preparation tool delivers the measurements, the assessment questions together with the mandatory form and the tools for decision and submissions, and releases the decision for reading without requiring the case overview of its case. Recording is refused as long as the user has not expressly agreed, the decision has not been read completely, the English analysis does not carry exactly the seven headings in the fixed order with content, or a judge or court clerk has no master-data ID. Stored are the header data, the case and client assignment, the measurements and the analysis; a new version of the questions allows re-assessment in place. With the IRONSTICK SERVER the assessments travel with the firm’s person and company network: every workstation keeps its own assessment per decision, which only it changes, and the reading tool returns the assessments of all workstations for a judge, a court, a court file number or one’s own case in full, each with an indication of who assessed it.

The submission-tracking family is deterministic against the stored pleadings: the usage tool answers, for one evidence item, which annexes it physically contains and in which pleadings it was itself submitted (with date and docket, across cases), or, for a case, the gap report of items never submitted; the submitted-evidence lister returns per stored pleading the attached identifiers plus the deduplicated total set and is mandatory before composing a new pleading's annex list, with the documented caveat that only structurally attached annexes are covered. The registry-number chain finds, from a letter number or from all numbers occurring in one document, every document sharing that number in chronological order — the documented course of an administrative procedure. The annex lister resolves one document's physically contained annexes including the deterministic filing stamp per annex; the stamp tool resolves any evidence identifier to its deterministic filing stamp (several stored files yield several stamps; a record without a stored file yields an explicit empty marker). Both stamp-bearing tools prohibit inventing stamps — they must always be fetched.

### 17. OCR repair

A four-step escalation path repairs ruined stored full texts and is explicitly barred from use as a convenient reading substitute. The rescan request asks the application to re-OCR the stored original PDF; the user selects the pages in IRONSTICK, and the model is instructed to inform the user in one sentence and wait. The status tool is to be called once when the user says the pages were chosen — polling loops are forbidden — and, when ready, returns the work order together with two scratch files holding the fresh scan and the current database text. The comparison rule instructs the model to make only mechanical OCR corrections, never rephrasing, with numbers, names and amounts kept exact. Where a spot is unreadable in both sources, the model may ask the user for a sight check before submitting — at most three points per document, with the record opened at the exact place and the spot named precisely ("page 7, second paragraph — the amount?"); with navigation disabled the record and page are named in chat instead. The submission tool hands the corrected scratch file to the application, which shows it to the user in a modal; only the user's save replaces the database text, and nothing is stored automatically. The last escalation, the PDF hand-over request, opens the record and has the model ask the user to drag the original PDF into the chat personally — the bridge deliberately provides no path assistance, refuses hard when no rescan preceded, and refuses PDFs over ten megabytes or over ninety pages; the model then reads the PDF visually, builds the corrected version in the scratch store and submits it through the same review gate. On a size or page refusal the flow does not end: the transcription fallback still opens the record, and the model asks the user to open the PDF via the attachment and transcribe the relevant passages verbatim ("page X, near the top, it should say … — please transcribe it exactly") — at most three spots, taken over verbatim into the corrected version; any remaining gap is disclosed openly. Instead of the whole document being returned for manual processing, the lawyer checks only the spots that cannot be resolved automatically.

### 18. Persons, institutions, clients and data proposals

Resolution tools find clients, persons and institutions by name fragment, diacritics-tolerantly; a keyword finder searches names, notes and analysis fields when only a fragment is known. A deterministic list check matches a document that contains a list of names against all persons and companies on record, addressed by evidence identifier or by case — then the newest entry of the case is scanned and named in the answer. On the Claude and ChatGPT connections the party check accepts up to two further parties in advance and searches them in the background while the current one is worked through; results are kept thirty minutes and the order of the gate stays unchanged. Network tools list everyone connected with one party by explicit relationships and shared cases, the cliques of the whole party network by deterministic community detection (as in the Universe view of the persons screen, with groups of unusual density highlighted and an optional separation of persons and institutions into layers), and the most connected parties; every party-related answer starts with the block of cases the party is linked to. The profile reader returns every master-data and analysis field complete and untruncated. Profile readers return the entity profile with analysis and relations, all relations of a person in both directions across persons and institutions, the institution profile, and the institutions formally linked to a case. The time-tracking reader reports passively measured working time (each page view lasting until the next, capped at thirty minutes, the last one counted as one minute) as an overview of totals and top cases, clients and days, or as a per-day breakdown of one case, over a date range or a trailing-days window defaulting to seven.

The AI cannot write master data directly. Two proposal tools place findings into the application's Data Consistency Monitor as review items: the master-data proposal (only after the user confirmed in chat that the finding should be filed) targets an existing entity or institution — resolved first by name — or describes a new record by name and fields, with an allowed field list in which corporate and personal identification numbers share one field, only substantiated fields permitted, and optional evidence references; the relation proposal describes a relation between two resolved persons or between a person and an institution, with exactly one counterpart, a mandatory category, an optional substantiation and optional case, client and evidence references. A proposal may also rename a record, set its type (natural or legal person), change the category of an existing relation, propose a deletion (of a record, a tag or a completed deadline) with a reason in the system language that is mandatory, or propose two records as duplicates; a new record is accepted only after the type has been decided in the dialogue, and a proposal touching a person's description or contact details is refused unless the caller read that profile within the last thirty minutes. In both flows the record changes only when the user accepts the proposal in the monitor. A new-record proposal is first answered with the list of similar existing records — loosely matched, nothing stored — and the caller must either file against one of them or confirm explicitly, by parameter, that the party is genuinely new; a strict match is redirected to the existing record. Every stored new party returns a mandatory follow-up ordering the caller to research and file the party's connections, web research included. A third proposal tool assigns a party to a case: exactly one entity or institution, a mandatory reason and optional evidence references become a case-link review item in the same monitor; acceptance writes the participant link that the clique and connection views build on, while an existing link, a pending duplicate or an earlier rejection is reported instead of re-proposed. The application also counts proposals per caller: after two stored master-data proposals and one relation or case-link proposal it treats the session as party-network maintenance, appends once a hint that this fully gated work needs no top-tier model, and — in the built-in chat — keeps the run on the medium model tier. Independent background processes feed the same monitor: a data extractor deduplicated at the source and a periodic normalisation scan that proposes merges and reclassifications along the three-category model (natural person; legal person: any corporate body other than an individual, with a commercial-register entry taking precedence over state ownership; institution: state bodies without a register entry) — never merging automatically.

### 19. The legal library

The library holds full statute texts as markdown files with an internal registration number per statute. The listing tool pages through the inventory (identifier, jurisdiction, title, kind, file name, last-check date; default fifty, maximum five hundred) and is read-only. The search tool is mandatory before any internet search for a norm: it matches either by designation against title and description or by quoted passage with fuzzy tolerance (roughly sixty percent of the words suffice and word endings are tolerated), requires the jurisdiction taken from the case, ranks title matches far above content matches (a title match counts nine tenths, each content hit one tenth, at most three snippets per file), and returns per hit the registration number, the file name, short snippets with their exact character positions and a ready-made verbatim-excerpt call whose range is already enlarged — by at least five hundred characters beyond the snippet — so the model fetches the authoritative wording itself instead of trusting the snippet. The excerpt tool returns the verbatim content of one statute between two character positions, addressed by registration number, clamped to the file, prefixed by a note that the range can be adjusted and that the whole statute is loadable, with oversized results auto-diverted to the scratch store; digit matching inside statute searches uses boundary rules that tolerate the thousands-dot notation of official portals. Whole statutes are loadable by file name or by registration number, with large files auto-diverted. The registration tool is the mandatory report channel for any statute found on the open web: only the link, jurisdiction and optional title and sentence are submitted; a background process fetches, converts, stores and announces the source in the data monitor, and the model itself never converts anything. A library review cycle tracks the last-check date of every source. Rejecting a statute in the data monitor requires a confirmation.

A re-check tool verifies one statute against its source on demand and reports unchanged, updated or duplicate; a fresher fetch takes the entry over, and on IRONSTICK SERVER the most recent check prevails, regardless of who registered the statute first. Whole statutes above the connector limit land in the scratch store and register nothing as read; provenance comes from the article tool.

### 20. Validators and registries

Deterministic verification tools cover: IBAN (format, country-specific length, checksum); national personal, insurance and tax numbers across nine schemes in seven countries (Romania, Switzerland, Germany, Austria, France, Italy, Spain) via check digits, with a targeted mode per scheme and an automatic mode that tests all schemes and reports the valid ones; European VAT identifiers (offline country-format check first, then the official union live service, returning released company data where the member state provides it); EORI numbers against the union's live validation service; legal-entity identifiers (checksum first, then the global register for status and name); and, separately, a business-register tool that opens the "Find a company" search of the European e-Justice portal (BRIS) in an embedded browser for the model to read. Every validator returns a concrete, reasoned result — valid with details, invalid with the failing aspect, not found, or service unreachable including the status — never a bare yes or no, so a genuinely wrong number is always distinguishable from an outage. The instruction layer makes running the matching validator mandatory before any such number enters a produced or reviewed document. The same toolset carries the coarse user-location tool (country, city and public address from the latest login snapshot, explicitly not a jurisdiction source) and a best-effort weather tool.

### 21. Web access

Two tools reach the open internet, both framed as supplements to the desktop AI's own web capabilities, with the explicit instruction to use them directly when the AI has no own web access, and the prohibition of using them for case-related data. Every search queries Google, DuckDuckGo and Qwant at the same time and returns one merged list of titled, linked hits without duplicates, meant to be followed with the page opener. The page opener fetches exactly one public URL with a staged pipeline that the description enumerates in full so the model never gives up prematurely: a standard browser request with redirect handling and compression; pages that require JavaScript, or that do not answer the standard request, are rendered in an embedded browser until content appears; page-exact PDF conversion using the text layer per page and OCR only for scanned pages, so mixed documents work; and conversion of office and text formats into readable text. Output is markdown, complete: the main content is extracted (navigation, advertising and cookie banners removed), pages without an article body keep their footer because address and contact data stand there, and where the extraction would leave next to nothing the whole page is delivered instead. A call answers within forty-five seconds; a large or scanned document is processed further in the background and delivered at once on the next call with the same address. Statute portals are refused until the library was searched, per the statute gate. If a website requires a confirmation before it releases its content, IRONSTICK opens the page in a separate window; the user confirms there, and work on the page continues.

### 22. GUI navigation and exports

All navigation is opt-in through a user toggle; without it the entire group does not exist. The navigation tools open, in the application's main window: a case (optionally on its chronicle or assessment tab), a client's case list, a person, an institution (both highlighted with detail opened), an evidence entry (correct chronicle page, highlighted), the dossier preparation (with a full-automatic variant reserved for the user's explicit wish for a complete PDF), the daily log (optionally a specific day's detail), the e-mail monitor (optionally a specific mail's detail), the global search with a fired query (reserved for the explicit wish; chat answers use the internal search instead), the backup area with an immediate backup start, and any named screen from the canonical screen list. Export dialogs cover the client list, the deadline list, a client's case overview, the case dossier in two document types and the map, plus the client AI-package build. All navigation tools are subject to the hard block and are the targets of the navigation offers.

### 23. Writing, formats and delivery

The writing toolset binds document production to fetched specifications. The output-format tool returns the binding generation instruction for the requested artefact kind — for pleadings differentiated into legal pleading versus simple letter, each in represented and self-represented form, with the case's jurisdiction, language and date resolved directly into the instruction and placeholders that the model fills from connector data; the mail-dispatch format tool returns the binding specification for court mailings with sequential package delivery. Both must be followed to the letter. Every desktop AI delivers a finished Markdown pleading through the delivery dialog, which can open it directly in the IRONSTICK word processor; nothing is stored until the user saves. The chronicle capture tool opens the prefilled chronicle form in the correct case, saving nothing itself.

Delivery of files to the user runs exclusively through the delivery tool, which the application executes itself. It accepts only a source path in the scratch store — inline content and other paths are refused —, reads the file itself, so nothing is retyped by the model, and hands it to IRONSTICK’s export dialog; from there the user saves it or sends a text draft into the word processor with one click. There is no delivery folder and no path the model learns. The model versions file names itself, one new number per delivery; the result reports the versions of the name stem delivered so far and the highest one, and warns if the chosen number is not the highest. Delivery happens once per task, at the end, never for intermediate states, and first passes the interaction and verification gates.

### 24. Peer review between AIs

The hand-over tool passes a produced piece to the other desktop AI: the content goes into a short-term large store, a task record references it, the instruction (capped at a thousand characters) states what the peer shall do, and the model then asks the user to trigger the peer in the other application. The inbox tool lists open tasks addressed to the caller — its own never appear — with identifier, assignment and full content, optionally filtered by client or case. The reply tool closes a task (deleting its short-term content) and simultaneously sends the assessment back as a new task to the original sender; the completion tool closes without returning. Scratch read and write are members of this toolset for handling the exchanged content.

### 25. AI instruction files

Per case the user can store instruction files that the model must consult. The lister shows a case's instructions with identifier, file name, size, upload date and excerpt, without full texts; the global inventory lists every instruction across all clients and cases; the single reader returns one instruction untrimmed by its numeric identifier with an option to route the raw content into the scratch store byte-exact for pass-through; the bulk reader returns all of a case's instructions in one call with the same scratch option. Both listing outputs auto-divert when oversized. The update tool proposes a changed version through exactly one of three ways — an append fragment (the preferred way for additions, with the application assembling the result itself and the model forbidden to reproduce the existing content), a source path to a complete new version on disk, or the complete new content inline — and the application shows the change to the user as a diff; only explicit approval adopts it, the outcome (approved, declined or pending) is returned, and a pending state forbids re-sending. The package export builds a client's complete instruction-and-skill bundle and opens the export dialog.

### 26. Companion integrations outside the tool surface

One client-side companion complements the bridge without being part of the MCP surface: for Claude Desktop and ChatGPT Desktop, a separate button in the configuration creates a skill plugin (skills mirroring the toolset-and-run-tool working model, generated and versioned by the application), which the user adds in the desktop app. The bridge front-end configuration for each AI is written by the corresponding configurator buttons, which always write the caller identity to protect against configuration sharing between AIs.

### 27. Failure and refusal semantics — summary

Every refusal in the system is instructive rather than bare: schema violations return the expected schema; unknown names return the nearest match; the date gate names the exact remedy; the statute gate names the library procedure; the navigation block names the protected screen and the deferred alternative; the consent block names the retry window; oversize answers name the file and the two continuation commands or the narrowing filters; validator failures name the failing aspect and distinguish outages; capacity rejections in the memory name occupancy and remainder and, near the limit, the restructuring options; the delivery and search gates name their answer options including the universal unknown escape; the access lock names the two calls that open it; the preparation gate names the unread parts with identifiers and percentages; the pleading verifier names, per expired or reset reading, the exact call that restores it. The model-facing contract is that after at most three corrected attempts on any failing call the model stops and reports the exact error to the user.

##### Get in touch

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scan the code to save our contact card — phone, e-mail and website.

Feel free to contact directly via WhatsApp or Telegram — calls are welcome too. Spoken languages: German, English, Romanian.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Message

### Interested in IRONSTICK or a demo? Write to us.
