# Déclaration RGPD des flux de données

> Déclaration RGPD des flux de données d’IRONSTICK : chaque voie par laquelle des données quittent IRONSTICK vers un fournisseur d’IA externe, ce qui est transmis et où s’applique la pseudonymisation.

Page originale: https://www.ironstick.legal/gdpr_fr.html

---

Relations avec les grands modèles de langage externes

Description factuelle, établie à partir du code, de chacune des voies par
lesquelles des données quittent IRONSTICK en direction d'un LLM externe, de ce qui est
exactement transmis, sous quelle forme, et des points où s'applique la couche de
pseudonymisation. Édition de bureau Windows. Le présent document décrit
exclusivement le comportement d'IRONSTICK — **ce que le fournisseur d'IA fait des
données reçues est régi exclusivement par les conditions propres au fournisseur**
(les conditions et politiques de confidentialité des fournisseurs que l'utilisateur a
configurés : Alibaba Cloud (Qwen), Moonshot AI (Kimi), OpenAI, Anthropic et, s'ils
sont activés, Groq, OpenRouter et Mistral ; Google uniquement si Google Drive est
utilisé pour les exportations), que l'utilisateur doit examiner séparément.

Version 1.0.7 — état : novembre 2026

**Synthèse.**

- **Stockage.** Toutes les données se trouvent dans un répertoire de données local
unique. La base de données, le stockage des documents, le fichier de configuration et
la mémoire de travail temporaire de l'IA sont chiffrés au repos en AES-256. Seuls
restent en clair les copies de travail temporaires des documents ouverts, la boîte de
réception des numérisations, les exportations et les fichiers sortants, la mémoire
tampon de relecture croisée de courte durée et, s'il est activé, le journal de
diagnostic (section 8).
- **IA externe.** Les appels d'IA depuis l'application n'existent qu'avec la clé
API propre de l'utilisateur. Les appels acheminés par le routeur central sont
pseudonymisés par défaut et consignés dans un journal d'audit local ; les exceptions
délibérées en clair sont énumérées en 2.3.
- **Consentement.** Le chat IA, la saisie de documents et la recherche de personnes
demandent l'autorisation une fois par session ou par exécution du programme ; dans le
traitement de texte, le lancement d'une fonction d'IA vaut consentement. Plusieurs
fonctions d'arrière-plan font appel à l'IA dans le cloud sans boîte de dialogue
propre : le tri des courriels, le moniteur de cohérence des données, le briefing
quotidien, le résumé du dialogue et la revue Red/Blue Team (section 3).
- **Bridge d'IA de bureau.** Module complémentaire facultatif qui transmet des données de dossier réelles au fournisseur de l'IA de bureau propre
de l'utilisateur, après une seule boîte de dialogue de consentement par exécution du
programme (section 4.9).
- **Autres services.** Les adresses des parties sont géocodées chaque jour avec
OpenStreetMap Nominatim (adresse uniquement, sans noms) ; un fichier d'actualités est
téléchargé depuis [www.ironstick.legal](https://www.ironstick.legal/index_fr.html) après le démarrage, puis toutes les six heures ;
aucune donnée de dossier ni donnée à caractère personnel n'est envoyée à l'éditeur du
logiciel (sections 1 et 7).
- **IRONSTICK SERVER.** Facultatif, sur le NAS propre du cabinet, au sein de son
réseau local, sans connexion à internet. Les documents parviennent au serveur et n'y reposent que sous
forme de fichiers chiffrés en AES-256 ; le serveur n'en voit jamais le texte en clair. Le temps de travail par dossier et les événements de
sauvegarde de chaque poste de travail sont visibles par l'administrateur du cabinet
(section 9).

## 1. Périmètre et points de terminaison

![API d'IA, application d'IA de bureau et serveur MCP à gauche, IRONSTICK Client au centre, coffre-fort de données AES-256, IRONSTICK Server et application de numérisation à droite](https://www.ironstick.legal/img/65_ai_client_vault.png)

Les appels d'IA externes effectués depuis l'application sont adressés **au
fournisseur que la cascade automatique utilise à ce moment-là**. L'utilisateur peut
configurer jusqu'à quatre fournisseurs ; les fournisseurs pour lesquels une clé a été
saisie sont utilisés dans l'ordre fixe suivant, du moins coûteux au plus coûteux :
**Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. À chaque démarrage du programme, IRONSTICK
vérifie lesquels d'entre eux répondent. Si un fournisseur échoue, la même requête est
transmise au suivant. Le fournisseur défaillant est de nouveau sollicité après un délai
d'attente qui dépend de l'erreur ; il n'est ignoré pour le reste de la journée que lorsque
son crédit est épuisé ou que la cause est inconnue. Le
contenu transmis est identique pour chaque fournisseur (à partir de la section 3 :
pseudonymisé par le routeur, consentement, journal d'audit). Les points de
terminaison sont les suivants :

- **Claude :** POST https://api.anthropic.com/v1/messages,
clé API propre de l'utilisateur.
- **ChatGPT :** POST https://api.openai.com/v1/chat/completions,
clé API propre de l'utilisateur.
- **Qwen :** POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
(Alibaba Cloud Model Studio, région internationale), clé API propre de l'utilisateur.
- **Kimi :** POST https://api.moonshot.ai/v1/chat/completions
(Moonshot AI), clé API propre de l'utilisateur.

**Fournisseurs gratuits d'arrière-plan (facultatif).** L'utilisateur peut en outre
enregistrer les offres gratuites de **Groq**, **OpenRouter** et **Mistral**.
IRONSTICK les utilise exclusivement pour des tâches qui s'exécutent en arrière-plan :
tri des courriels, moniteur de cohérence des données, briefing quotidien, résumé du dialogue,
attribution des interlocuteurs lors des transcriptions, récupération de textes de loi et
tableau de situation. Chacun de ces fournisseurs dispose dans la configuration de son
propre interrupteur marche/arrêt ; il n'est utilisé que si une clé est enregistrée et que son
interrupteur est activé. Ils ne sont **jamais** utilisés pour le chat, pour les
écritures ni pour la revue Red/Blue Team. Si aucun d'entre eux n'est disponible, la
cascade décrite ci-dessus prend le relais. La pseudonymisation, le consentement et le
journal d'audit suivent la tâche concernée (section 4). Les points de terminaison sont
les suivants :

- **Groq :** POST https://api.groq.com/openai/v1/chat/completions,
clé API propre de l'utilisateur.
- **OpenRouter :** POST https://openrouter.ai/api/v1/chat/completions,
clé API propre de l'utilisateur.
- **Mistral :** POST https://api.mistral.ai/v1/chat/completions,
clé API propre de l'utilisateur.

**Offres gratuites — avertissement dans la configuration.** Dans la configuration, une indication sous chacun de ces fournisseurs précise qu'IRONSTICK l'utilise — dès lors que la clé API est enregistrée et l'interrupteur activé — pour des tâches d'arrière-plan telles que les résumés et le tri des e-mails, et qu'il transmet à cette occasion des données à ce fournisseur. Avant d'activer l'un de
ces fournisseurs, vérifiez si ses conditions prévoient le contrat de sous-traitance
exigé pour les sous-traitants et satisfont à vos règles professionnelles. Un
fournisseur désactivé n'est pas utilisé.

Trois niveaux de modèle configurables sont utilisés par fournisseur (petit / moyen /
grand). Un canal distinct et facultatif est le
**Bridge d'IA de bureau** (section 4.9) : dans ce cas, les données sont
transmises à l'IA de bureau locale propre de l'utilisateur (Claude Desktop / Claude
Code, ChatGPT Desktop, Qwen Desktop **ou** Kimi Desktop), c'est-à-dire au
fournisseur de cette IA (Anthropic, OpenAI, Alibaba Cloud/Qwen ou Moonshot AI/Kimi),
dans le cadre de l'abonnement/du compte propre de l'utilisateur auprès de ce
fournisseur. Les
Bridges peuvent fonctionner en parallèle : chaque IA de bureau dispose de son propre
petit programme de Bridge, tous se connectent au même point de terminaison local de
l'application en cours d'exécution, et ils peuvent travailler en même temps sur le même
dossier. Aucune donnée de dossier ni donnée à caractère personnel n'est envoyée à
l'éditeur du logiciel. Le seul contact avec l'éditeur est un simple téléchargement d'un
fichier d'actualités depuis [www.ironstick.legal](https://www.ironstick.legal/index_fr.html) (après le démarrage, puis toutes les six
heures, section 7), qui ne transporte aucune donnée en dehors de la connexion technique
elle-même. **IRONSTICK SERVER** (section 9) n'y change rien : il est
exploité par le cabinet lui-même, sur le matériel propre du cabinet, au sein du réseau
propre du cabinet — il ne contacte jamais l'éditeur ni aucun fournisseur d'IA.

**L'interrupteur principal est l'accès propre de l'utilisateur.**
Un traitement d'IA externe depuis l'application n'existe que si l'utilisateur a ouvert
son propre compte auprès d'un fournisseur d'IA et saisi sa propre clé d'accès dans la
configuration.
**Si aucun fournisseur n'est configuré, aucun appel d'IA externe depuis l'application
ne peut avoir lieu** — chacune des fonctionnalités décrites à la section 4 reste
alors locale ou est tout simplement indisponible. Ce compte constitue un contrat
direct entre l'utilisateur et le fournisseur ; IRONSTICK n'y est pas partie. Il en va
de même pour le Bridge d'IA de bureau, qui requiert l'abonnement/le compte propre
de l'utilisateur auprès du fournisseur d'IA de bureau choisi (Anthropic, OpenAI,
Alibaba Cloud/Qwen ou Moonshot AI/Kimi). Les documents marqués comme **secrets**
sont exclus des outils du Bridge et du chat, du paquet d'instructions IA et de
toute sortie générée (pièces jointes, dossiers, exports) ; leur traitement lors de la
saisie suit le choix délibéré de l'utilisateur au moment de la saisie
(section 4.1).

Entièrement local (rien ne quitte la machine) : extraction de texte et OCR, la
couche de chat locale déterministe, la recherche globale, le radar de pertinence,
l'analyse des chaînes de courriers, la génération de dossiers/PDF, la passe locale de l'outil de repérage pour le caviardage, la reconnaissance vocale (transcription d'enregistrements), ainsi que la constitution du paquet
d'instructions IA.

## 2. La couche de pseudonymisation

Chaque appel effectué au sein de l'application par le routeur d'IA central est
pseudonymisé par défaut : les identifiants du texte sortant sont remplacés par des jetons, et la réponse est rétablie localement. Si le pseudonymiseur ne peut pas être constitué complètement, rien n'est
envoyé. Les exceptions sont énumérées en 2.3. La table de correspondance n'existe
qu'en mémoire, une nouvelle table par opération ; elle n'est jamais enregistrée.

![En haut : IRONSTICK Client, silhouette anonymisée avec engrenages, API d'IA ; en bas : IRONSTICK Client, utilisateur, application d'IA de bureau](https://www.ironstick.legal/img/66_pseudonymization.png)

### 2.1 Ce qui est remplacé

| Source | Champs | Famille de jetons (identifiants internes) |
| --- | --- | --- |
| Fiches clients | nom, numéro d'identification national issu du champ d'identifiant (p. ex. le CNP roumain), téléphone, courriel, adresse et ville | $PARTEI_A$ (partie), $CNP_A$ (numéro d'identification), $TEL_A$ (téléphone), $MAIL_A$ (courriel), $ADRESSE_A$ (adresse) |
| Personnes / entités | nom complet (personne ou société), numéro d'identification national ou numéro d'entreprise issu du champ d'identifiant (p. ex. CNP ou CUI roumain) | $PARTEI_B$ (partie) / $FIRMA_A$ (société), $CNP_B$ (numéro d'identification) |
| Dossiers | numéro de dossier, partie adverse, demandeur | $FALL_A$ (dossier), $PARTEI_C$ (partie)… |
| Couche de motifs (valeurs inconnues dans le texte libre) | numéros de dossier judiciaire, numéros d'identification personnels, IBAN, adresses électroniques et numéros de téléphone. Les autres numéros d'identification nationaux ne sont remplacés que s'ils sont enregistrés sur la fiche du client ou de la personne. | mêmes familles de jetons |

### 2.2 Ce qui reste délibérément réel

- **Dates, heures et montants** — ils sont nécessaires tels quels à l'analyse juridique.
- **Noms d'institutions** (juridictions, autorités) — ils ne figurent pas dans le
dictionnaire et sont des organismes publics.
- **Tiers sans fiche propre** — les témoins, médecins, avocats, juges ou sociétés qui ne sont pas enregistrés en tant que fiche client, personne ou dossier ; pour qu'un tiers soit remplacé par un jeton, il suffit de l'enregistrer comme personne.
- **Adresses de non-clients** — c'est l'adresse enregistrée du client qui est remplacée par un jeton.
- L'intégralité du **contenu factuel** des documents (allégations, diagnostics,
récit) — seuls les identifiants sont remplacés, non l'histoire.

### 2.3 Exceptions délibérées de noms en clair

- **Recherche web sur des personnes (étape 1)** et **remplissage automatique de
formulaires** pour les personnes / institutions : une recherche web portant sur
$PARTEI_A$ n'a aucun sens ; le nom réel est donc envoyé par conception.
- **Outil d'IA de repérage pour le caviardage** : il reçoit un texte déjà caviardé
localement et doit répondre en indiquant les noms en clair des *tiers inconnus*
qu'il trouve — la pseudonymisation est désactivée pour cette seule finalité.
- **Prétraitement de la lecture à voix haute (TTS)** : voir 4.6 — les phrases sont
transmises en clair.
- **Bridge d'IA de bureau** : données brutes par conception (section 4.9).

## 3. Moments de consentement et journal d'audit

Les appels acheminés par le routeur central sont soumis au consentement et
journalisés : chaque tour de modèle inscrit une ligne dans la table d'audit locale contenant la requête et la réponse complètes **sous la
forme remplacée par des jetons qui a effectivement quitté la machine** ; les
tentatives refusées ou bloquées sont journalisées sans contenu. Lorsqu'une fonction
demande un consentement, la boîte de dialogue indique le niveau de modèle et la taille
approximative de la requête, et une seule approbation couvre la session d'écran en cours
(pour la saisie de documents : l'exécution en cours du programme).

**Flux du routeur sans boîte de dialogue de consentement propre :**
le tri des courriels (en fonctionnement en arrière-plan comme lors d'une récupération
manuelle dans l'écran des courriels, section 4.2), l'exécution d'analyse du moniteur de
cohérence des données (4.5), le briefing quotidien (4.4a), le résumé du dialogue du chat
API et la revue Red/Blue Team (4.7), ainsi que l'outil d'IA de repérage pour le
caviardage (l'activation de son interrupteur vaut consentement). Ces flux restent
pseudonymisés (à l'exception des réponses en noms en clair voulues de l'outil de
repérage pour le caviardage) et restent audités.

**Flux qui contournent le routeur :** les fonctions d'IA du
traitement de texte, le prétraitement de la lecture à voix haute et l'appel de
correction par IA File→Markdown appellent directement l'API. Ils sont pseudonymisés
(exception : lecture à voix haute), mais ils n'affichent **aucune boîte de dialogue
de consentement propre et n'inscrivent aucune ligne dans le journal
d'audit**. L'utilisation de ces fonctionnalités par l'utilisateur (appui sur le
bouton IA, lancement d'une génération, lancement de la lecture à voix haute avec
l'interrupteur IA activé) constitue le moment du consentement.

## 4. Les flux de données, cas d'usage par cas d'usage

### 4.1 Saisie de documents

L'extraction de texte et l'OCR sont locales. Si une clé API est configurée,
IRONSTICK demande l'autorisation une fois par exécution du programme, puis jusqu'à
quatre types d'appels sont effectués (tous pseudonymisés, tous audités) :

- **Détection du document principal** (petit niveau) : extraits du texte OCR brut — uniquement pour les
numérisations de mauvaise qualité.
- **Correction de l'OCR** (petit niveau) : un extrait limité du texte du document.
- **Classification** (niveau moyen) : un extrait limité du texte du document, **plus des listes système** : la liste complète des dossiers (numéro
de dossier, nom du client, partie adverse — remplacés par des jetons), un ensemble
de noms connus (remplacés par des jetons), ainsi que les
listes de codes des types d'institutions et des types de documents (libellés non
remplacés par des jetons). Solution de repli : petit niveau, sans
les listes.
- **Contextualisation lors de l'enregistrement** (petit niveau) : les
métadonnées du document et son texte intégral de longueur limitée, plus une
ligne d'index (ID, date, titre) de **chaque pièce active du même
client** — utilisée pour étayer les renvois. S'exécute également pour les
documents marqués comme secrets (décision délibérée de l'utilisateur).

### 4.2 Moniteur de courriels (tri)

L'affectation à un dossier s'effectue **localement et sans IA**. Les nouveaux
courriels sont récupérés en arrière-plan au démarrage, puis toutes les cinq minutes. Un
courriel dont la reconnaissance locale identifie déjà le dossier (numéro de dossier,
numéro de courrier, numéro de client ou renvoi à un acte déposé par le cabinet) ne
provoque aucun appel d'IA. Pour tout autre courriel, **un appel de petit niveau**
évalue l'urgence en transmettant exactement : le nom et l'adresse de l'expéditeur,
l'objet et l'extrait d'aperçu enregistré en texte brut (strictement plafonné) — **jamais le corps complet**, aucune pièce jointe et **aucune liste des
dossiers**. Réponse : priorité et justification. Si des fournisseurs gratuits
d'arrière-plan sont activés (section 1), cet appel peut passer par eux.
**Aucune boîte de dialogue de consentement n'est affichée**, ni en fonctionnement en
arrière-plan ni lors d'une récupération manuelle dans l'écran des courriels : le tri
s'exécute automatiquement dès qu'un compte de messagerie et un fournisseur d'IA sont
configurés. Pseudonymisé et audité.

**Aucun pixel de suivi.** L'ouverture d'un courriel dans le moniteur ne
contacte jamais le serveur de l'expéditeur : les images référencées par une adresse
internet (y compris les pixels de suivi invisibles) ne sont pas chargées et
apparaissent sous forme de substituts (espaces réservés) accompagnés d'un avis, de
sorte que l'expéditeur ne peut savoir ni quand, ni combien de fois, ni depuis quelle
adresse un courriel a été lu. Seules les images intégrées dans le courriel lui-même
sont affichées.

### 4.3 Analyse de personnes (recherche web)

Trois étapes, après un consentement donné une fois par session :

- **Étape 1 — recherche :** des moteurs de recherche sont interrogés directement
depuis l'ordinateur de l'utilisateur ; en
outre, l'outil de recherche web côté serveur du fournisseur est appelé avec le
**nom réel de la personne en clair** (inévitable pour une recherche ; journalisé
en clair).
- **Étape 2 — résumés de pages** (niveau moyen) : pour chaque page, le nom de la
personne (remplacé par un jeton), l'URL et un extrait limité du contenu de la page.
- **Étape 3 — synthèse du profil** (grand niveau) : nom et ville (remplacés par
des jetons) plus les textes de page collectés, de longueur limitée par
source.

Le résultat est enregistré localement avec la fiabilité « non confirmé ». Les
boutons de **remplissage automatique** correspondants des formulaires
personne/institution envoient de même le nom saisi en clair (exception
documentée).

### 4.3a Vérification d'une partie à partir de sources publiques

La vérification d'une partie à partir de sources publiques est une procédure fixe que
l'application exécute elle-même lorsqu'une IA connectée l'appelle avec le nom, la
ville, le district, le pays et la nature de la partie (personne physique ou
personne morale) :

- **Dossiers :** une recherche en texte intégral du nom dans la base de données
locale — **purement locale**, rien ne quitte la machine.
- **Internet :** une liste fixe de requêtes de recherche est envoyée aux moteurs
de recherche publics **Google, DuckDuckGo et Qwant**. Chaque requête se compose
d'un terme de recherche dans la langue du pays de la partie, plus le **nom réel de
la partie en clair** et, pour certaines requêtes, la ville ou le district
(inévitable pour une recherche). Aucun contenu de dossier, de client ou de document
n'est transmis. Les moteurs voient les requêtes comme celles de tout utilisateur d'un
navigateur.

Le résultat est renvoyé à l'IA appelante sous la forme d'un profil préparé et non
vérifié. Rien n'est inscrit dans les données de base : chaque constatation passe par
la barrière de validation du moniteur de cohérence des données (section 4.5) et n'est reprise que
lorsque l'utilisateur l'accepte. Seules des sources accessibles au public sont
évaluées.

### 4.4 Journal quotidien

L'écran lui-même est local. L'importation de texte libre exécute d'abord un
analyseur **local** ; ce n'est que si aucun marqueur de format de journal n'est
trouvé qu'une solution de repli par IA normalise le texte brut : le texte collé est
envoyé intégralement, petit niveau,
soumis au consentement, pseudonymisé, audité. Les journaux enregistrés ne quittent la
machine qu'en tant que résultats d'outils du chat ou du Bridge d'IA de bureau (extraits
plafonnés) ou au sein du paquet d'instructions IA (section 5).

### 4.4a Briefing quotidien

Lors du premier démarrage du programme de la journée (Windows), IRONSTICK
prépare en arrière-plan un briefing quotidien parlé, dès le démarrage et avant que la
fenêtre du briefing ne demande à l'utilisateur s'il souhaite l'écouter. Le texte du
briefing — nombre de délais, audiences du jour et du lendemain avec numéro de dossier,
nom du client, ville et juridiction, ainsi que les intitulés des rendez-vous du
jour — est envoyé une fois (petit niveau) à l'IA dans le cloud, qui le reformule en
prose parlée dans la langue du système. Pseudonymisé par le routeur, audité, **sans
boîte de dialogue de consentement**. Si des fournisseurs gratuits d'arrière-plan sont
activés (section 1), cet appel peut passer par eux. En l'absence de fournisseur
disponible, un texte assemblé localement est utilisé à la place.

### 4.5 Moniteur de cohérence des données

La phase 1 (courriel ↔ données de base) est entièrement déterministe. La phase 2
envoie **un appel par nouveau document entrant**, de petit niveau (pseudonymisé,
audité, **sans boîte de dialogue**), contenant : les **extraits de zones de
coordonnées** dédoublonnés (courts extraits autour des indications d'adresse, de
téléphone et fiscales) issus du texte intégral de **ce** document, les noms des parties de
ce document et de son dossier, ainsi que, pour chaque partie, les **noms** des
correspondances possibles dans les données de base enregistrées (remplacés par des
jetons lorsqu'ils figurent dans le dictionnaire ; noms d'institutions en clair).
**Les coordonnées et les numéros d'identification issus des données de base enregistrées ne sont pas
transmis.** Si des fournisseurs gratuits d'arrière-plan sont activés (section 1), cet
appel peut passer par eux. La réponse ne devient
jamais qu'une suggestion que l'utilisateur doit accepter dans le moniteur.

### 4.6 Traitement de texte (assistance IA dans le texte)

- **Réviser la sélection :** la phrase/le paragraphe/la section sélectionné(e)
(avec balisage) **plus un extrait du document à
titre de contexte** et l'instruction de l'utilisateur — niveau moyen,
pseudonymisé.
- **Structure/table des matières :** en pratique l'ensemble du document sous
forme de liste de lignes indexées (lignes longues tronquées), de longueur limitée — niveau moyen, pseudonymisé.
- **Prétraitement de la lecture à voix haute :** lors de la lecture à voix haute
d'un document, **chaque phrase est envoyée individuellement en clair au petit
niveau** afin de développer les abréviations et les nombres — **sans
pseudonymisation** (les numéros d'identification doivent revenir inchangés pour être
lus correctement). Les tampons de fichier et les marqueurs de référence sont d'abord
supprimés localement. Le lancement de la lecture à voix haute constitue le moment du
consentement.

Aucun des appels du traitement de texte n'affiche de boîte de
dialogue de consentement distincte ni n'inscrit de lignes dans le journal d'audit
(contournement du routeur, section 3).

### 4.7 Revue Red/Blue Team et résumé du dialogue (API)

Deux autres flux API relèvent de la rédaction. **Red/Blue Team :** si
l'utilisateur l'a activée pour le fournisseur actif (interrupteur à côté de la clé
API ; une clé enregistrée est requise), chaque document formel remis par la
boîte de dialogue de remise — depuis le chat de l'application comme depuis le
Bridge d'IA de bureau — est relu une fois de plus par le même fournisseur dans le
rôle de l'avocat adverse, lors d'une passe de revue distincte (niveau moyen). Sont
transmis : le texte du projet, la date et la juridiction compétente du dossier ;
pseudonymisé par le routeur et audité comme tout appel du routeur ; **aucune boîte de
dialogue de consentement** — l'interrupteur vaut consentement ; le rapport du relecteur est joint à l'attention de
l'utilisateur. La revue Red/Blue Team ne passe **jamais** par les fournisseurs
gratuits d'arrière-plan (section 1). **Résumé du dialogue :** lors de longues sessions
du chat API, la partie
la plus ancienne du dialogue (uniquement les questions de l'utilisateur et les
réponses finales du modèle, jamais les résultats d'outils) est condensée par le
fournisseur actif (petit niveau, en arrière-plan, **sans boîte de dialogue de
consentement propre**) en un bref résumé
qui remplace l'historique brut ; il est stocké chiffré dans la mémoire de travail
temporaire et écrasé à chaque fois. Pseudonymisé et audité. Si des fournisseurs
gratuits d'arrière-plan sont activés (section 1), le résumé peut passer par eux.

### 4.8 Chat IA (externe, API)

Consentement une fois par session de chat ; niveau moyen avec escalade automatique
vers le grand niveau (l'ensemble du contexte est alors renvoyé) ; pseudonymisé ;
chaque tour audité. Chaque échange transmet : l'invite système (règles statiques), le
**contexte GUI en direct** (écran actuel, dossier/client ouvert, y compris le nom
du client — remplacé par un jeton), jusqu'à **10 entrées de la mémoire IA** du
client ouvert, le dialogue le plus récent plus un résumé
des échanges plus anciens (4.7) et la liste des fichiers de
travail temporaires du chat. Chaque outil appelé par le modèle renvoie son résultat
dans la conversation API — y compris les textes intégraux des documents (les résultats plus volumineux sont déposés dans la
mémoire de travail temporaire chiffrée), les corps de courriels et
des extraits du journal quotidien. Le chat utilise la même
couche d'outils et les mêmes barrières de remise que le Bridge d'IA de bureau
(4.9) : vérification des actes de procédure, Red/Blue Team (4.7) et remise via la
boîte de dialogue d'exportation — ce qui quitte le système est un modèle prêt à être
déposé. La couche de chat locale répond aux demandes courantes sans aucune
transmission.

Deux fonctions utilitaires méritent une mention explicite. La **consultation de la
météo**
récupère des données météorologiques actuelles pour un lieu nommé auprès du service
non-LLM Open-Meteo (section 7) — seuls le nom du lieu / ses coordonnées sont transmis
à ce service, jamais de données de dossier ou de personne. La **consultation de la
localisation**
répond exclusivement à partir de l'instantané de sécurité **le plus récent enregistré
localement** (section 8) : la demande de l'IA ne déclenche **aucune nouvelle
consultation externe** — elle se contente de lire ce qui se trouve déjà sur le
disque. Comme pour tout outil, ce que ces fonctions renvoient est réinjecté dans la
conversation d'IA, c'est-à-dire transmis au fournisseur d'IA.

### 4.9 Bridge d'IA de bureau (modules complémentaires facultatifs)

**Chaque accès à une IA de bureau constitue un module facultatif, acquis
séparément.** Il n'existe que si le cabinet a acquis et installé le module
Bridge correspondant ; en l'absence de tout module, la section du Bridge
reste verrouillée dans la configuration, le point de terminaison local ne démarre
jamais, et aucun des flux décrits dans la présente section ne peut avoir lieu. Des
Bridges existent pour **Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** et **Kimi Desktop** ; chacun dispose de son propre petit
programme de Bridge, et tous se connectent au même point de terminaison local de
l'application en cours d'exécution. Les flux de données décrits ci-dessous sont
identiques pour tous ; seul le fournisseur destinataire diffère.

**Ce canal transmet des données de dossier réelles.** C'est sa finalité : la session d'IA de bureau propre de
l'utilisateur rédige des modèles prêts à être déposés et a donc besoin des noms et
numéros réels.

- L'IA de bureau (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop ou Kimi Desktop) se connecte à l'application en cours d'exécution par son programme de Bridge ; cette connexion reste sur l'ordinateur. Seuls les outils de recherche web, de lecture de pages et de registres contactent internet.
- **Sites web avec contrôle d'accès.** Lorsqu'un site web exige une confirmation
avant de libérer son contenu, IRONSTICK ouvre la page dans une fenêtre
dédiée ; l'utilisateur y confirme lui-même. Le contenu de la page est ensuite lu par
l'IA de bureau — il est transmis à son fournisseur comme tout autre résultat d'outil.
- Le premier accès aux données par une IA de bureau quelconque au cours d'une exécution
du programme ouvre une boîte de dialogue de consentement bloquante unique. L'approbation
ouvre l'accès à toutes les IA de bureau pour le reste de l'exécution du programme ; un
refus les bloque toutes temporairement.
- Plus de 200 outils donnent accès aux chroniques, textes intégraux,
courriels, journaux quotidiens, délais, données de base, dossiers complets (par
parties) et formats de sortie ; les documents marqués comme secrets sont exclus. Les
modifications des données de base, de la chronique, du calendrier, de la mémoire IA,
des textes intégraux et de la bibliothèque juridique ne prennent effet qu'après
approbation de l'utilisateur, dans un formulaire ou une boîte de dialogue d'IRONSTICK
ou dans le moniteur de cohérence des données : les suggestions de données de base et de
relations aboutissent dans le moniteur ; les modifications proposées par l'IA aux
notes d'instructions IA liées à un dossier sont présentées sous forme de différentiel
rouge/vert et ne sont appliquées qu'après acceptation expresse de l'utilisateur ; les
entrées de chronique ne sont jamais écrites par l'IA — elle se contente de préremplir
le formulaire de saisie, que l'utilisateur complète et enregistre ; et un texte
intégral de document réparé par l'IA (nouvelle numérisation OCR) ne remplace le texte
intégral enregistré qu'après que l'utilisateur a vu le texte complet dans une boîte de
dialogue de confirmation et l'a enregistré.
Sans une telle boîte de dialogue, l'IA n'écrit que dans ses propres espaces de travail :
la mémoire de travail temporaire chiffrée, le journal quotidien à la demande de
l'utilisateur et sa propre évaluation du dossier après les contrôles déterministes. Les
étiquettes et les messages du chat du cabinet nécessitent la confirmation de
l'utilisateur dans le chat. Sur un dossier auquel il est abonné auprès d'un collègue,
l'IA peut épingler une note qui parvient, par
IRONSTICK SERVER, au titulaire du dossier et à tous les abonnés (section 9). La remise au
traitement de texte et la remise de fichiers sont des étapes explicites de
l'utilisateur ; la navigation n'est possible que si elle est autorisée séparément.
- **Réparation par nouvelle numérisation OCR (locale) et remise du PDF (à
l'initiative de l'utilisateur).** Lorsqu'un texte intégral enregistré est tronqué ou
altéré par une ancienne passe d'OCR, l'IA peut demander une nouvelle numérisation :
l'utilisateur choisit les pages, la nouvelle numérisation s'exécute **localement**
(aucun nouveau destinataire externe), et les deux versions du texte sont placées dans
la mémoire de travail temporaire locale ; tout ce que l'IA en lit est transmis à son
fournisseur comme tout autre résultat d'outil. En tout dernier recours — uniquement
après une telle nouvelle numérisation et uniquement dans des limites strictes imposées
par le Bridge —, l'IA peut demander à
l'utilisateur de lui remettre le **fichier PDF original** : IRONSTICK se contente
d'ouvrir l'entrée ; l'utilisateur enregistre le PDF au moyen de l'icône en
forme de trombone et le fait glisser dans le chat de l'IA de bureau. Le document est
ainsi transféré **en tant que fichier** (y compris les tampons, signatures et
images) au fournisseur de cette IA — cela se produit exclusivement par l'action propre
et délibérée de l'utilisateur, jamais automatiquement, et les documents marqués comme
secrets sont exclus d'emblée de l'ensemble du canal de nouvelle numérisation.
- **Mémoire de travail temporaire locale de l'IA (minimisation des données).** Les résultats d'outils volumineux peuvent être déposés dans un fichier de travail temporaire local et chiffré, et y être retravaillés **sans être transmis au fournisseur d'IA**.
Les exports complets de dossiers destinés à l'IA et la vue d'ensemble de démarrage de
session en un seul appel sont de même écrits directement dans cette mémoire locale ;
seules les portions que l'IA lit ensuite sont transmises à
son fournisseur. La mémoire de travail temporaire
se trouve dans le répertoire de données et subsiste d'une session à l'autre (elle
constitue le contexte de travail de l'IA) ; les fichiers qui ne sont plus utilisés sont supprimés automatiquement, et aucun nouveau destinataire externe n'est créé.
- **La mémoire de travail temporaire est chiffrée.** Chaque fichier de la mémoire de travail temporaire est chiffré au repos en
AES-256 ; les fichiers ne quittent
cette mémoire que par la boîte de dialogue d'exportation d'IRONSTICK, jamais vers un
dossier de téléchargement. La base de données, le stockage des documents, le fichier de
configuration et la mémoire de travail temporaire sont ainsi tous chiffrés au repos en
AES-256. Les copies de travail temporaires des documents ouverts (effacées à chaque
démarrage et à l'arrêt), la mémoire tampon de relecture croisée de courte durée, la
boîte de réception des numérisations, les exportations et les fichiers sortants restent
en clair (section 8).
- Les résultats des outils sont remis au client d'IA de bureau de l'utilisateur et,
de là, à **son fournisseur** : Anthropic pour Claude (dans le cadre de
l'abonnement Claude de l'utilisateur et des conditions d'Anthropic), OpenAI pour
ChatGPT (dans le cadre de l'abonnement ChatGPT de l'utilisateur et des conditions
d'OpenAI), Alibaba Cloud/Qwen pour Qwen Desktop (dans le cadre du compte Qwen de
l'utilisateur et des conditions de Qwen) ou Moonshot AI pour Kimi Desktop (dans le cadre
du compte Kimi de l'utilisateur et des conditions de Moonshot AI). IRONSTICK n'inscrit aucune ligne dans le
journal d'audit pour le trafic du Bridge ; la barre supérieure affiche un logo
clignotant par IA active (marque Claude, marque ChatGPT, marque Qwen, marque Kimi) — un accès
simultané est possible et chacun est signalé séparément. Chaque programme de Bridge
tient à côté de lui un **journal local** indiquant l'heure, le nom de l'outil,
le succès ou l'échec et la taille de la réponse, et **jamais de contenu**. Un second
**journal de diagnostic**, plus détaillé, dans le répertoire de données est
**désactivé par défaut** ; lorsqu'il est activé à des fins de dépannage, il peut
contenir en clair des paramètres d'appel (pouvant
comprendre des noms) et il est réduit automatiquement. Aucun de ces deux
journaux n'est transmis où que ce soit.
- La mémoire IA partagée enregistre localement des enseignements condensés
(liés à un client ou à un dossier). L'IA peut proposer
d'enregistrer, de modifier ou de supprimer une entrée ; chaque modification ne prend
effet qu'après approbation de l'utilisateur. Les entrées liées à un dossier ne sont
jamais supprimées automatiquement ; les entrées sans dossier sont supprimées après un
an sans utilisation. Le contenu de la mémoire est visible par chaque canal d'IA et est
transmis chaque fois que ces canaux le lisent.
- La relecture croisée entre les IA de bureau passe par IRONSTICK, et non
directement entre les fournisseurs : une IA dépose un produit de travail (par ex. un
projet) dans une **mémoire tampon d'échange locale et de courte durée** (fichiers
en clair sur la machine de l'utilisateur, supprimés à la clôture de la tâche et
effacés intégralement à chaque redémarrage de l'application) ainsi qu'une note de
tâche ; l'autre IA la lit lorsque l'utilisateur le lui demande. Cela ne crée **aucun
nouveau destinataire externe** — tout ce que lit l'IA relectrice est transmis à
**son propre** fournisseur exactement comme tout autre résultat d'outil ci-dessus,
dans le cadre des conditions de ce fournisseur. Les fournisseurs n'échangent jamais de
données directement ; ce que lit l'IA relectrice ne va qu'à son propre fournisseur.

### 4.10 Transcription audio (attribution des interlocuteurs)

La reconnaissance vocale fonctionne entièrement en local ; l'enregistrement lui-même ne
quitte jamais l'ordinateur. Si l'utilisateur a indiqué plus d'un interlocuteur, l'IA
attribue ensuite les lignes reconnues aux interlocuteurs : par sections (niveau moyen), le texte reconnu, plus des lignes déjà attribuées comme contexte et
le nombre d'interlocuteurs. Les appels passent par le routeur — pseudonymisés, soumis au
consentement et consignés dans le journal d'audit. La réponse ne doit pas modifier le
texte : chaque ligne est contrôlée par rapport au texte reconnu ; si un bloc échoue, la
transcription est reprise sans attribution des interlocuteurs. Avec un seul
interlocuteur, aucun appel à l'IA n'a lieu. Si des fournisseurs gratuits d'arrière-plan
sont activés (section 1), ces appels peuvent passer par eux.

## 5. Le paquet d'instructions IA (ZIP d'exportation)

![IRONSTICK Client, utilisateur avec fichiers MD et archive ZIP, application web d'IA](https://www.ironstick.legal/img/67_instruction_zip.png)

La constitution du paquet est locale et n'implique aucun appel d'IA. Elle produit du
**Markdown en clair** (sans pseudonymisation) destiné à être téléversé par
l'utilisateur vers un LLM externe de son choix. Contenu :

| Fichier | Contenu |
| --- | --- |
| Dossiers | tous les dossiers du client sélectionné avec les parties, le statut et l'index des ID de pièces (sans textes intégraux) |
| Entités | **toutes les personnes/entités de l'ensemble du cabinet** (et pas seulement de ce client), y compris les numéros d'identification nationaux des personnes et des sociétés (p. ex. CNP/CUI roumains), date de naissance, coordonnées complètes, profession, véhicule — plus les blocs d'analyse enregistrés (évaluation, vulnérabilités, domiciles, finances, environnement social, sources) |
| Institutions, délais | toutes les institutions ; délais actifs avec numéros de dossier et nom du client |
| Courrier | les 100 courriels les plus récents **à l'échelle du cabinet** : expéditeur, destinataire, objet, noms des fichiers joints, court extrait (sans corps complets) |
| Journal quotidien | 10 derniers jours, à l'échelle du cabinet, y compris la chronologie des dossiers sur cette période |
| Par dossier | un dossier de synthèse par affaire : la chronique complète **avec les textes intégraux des documents**, identifiants du client et des parties, y compris les numéros d'identification ; plus toutes les notes de contexte du dossier, sans plafond |
| Fichiers d'instructions | cinq documents de règles de travail — aucune donnée à caractère personnel |

**Ce qui se produit lorsque ce ZIP est téléversé vers un service d'IA
tiers :** l'utilisateur transfère personnellement, en clair, des parties
substantielles de l'ensemble du cabinet — identités des clients avec leurs numéros
d'identification nationaux, profils de tiers comprenant des évaluations sensibles,
métadonnées de correspondance à l'échelle du cabinet et dossiers — à ce fournisseur. À
partir de ce moment, les données sont traitées selon les conditions de ce
fournisseur (utilisation pour l'entraînement, conservation, juridiction). IRONSTICK affiche un avertissement relatif à la
protection des données avant l'exportation (une fois par exécution du programme) et
propose également l'exportation vers Google Drive, ce qui place en outre les fichiers
chez Google. L'utilisateur agit en tant que responsable du traitement transmetteur au
sens du RGPD et doit s'assurer de l'existence d'une base juridique (par ex. art. 6,
règles relatives au secret professionnel) avant le téléversement.

Les documents marqués comme secrets sont exclus des délais, des journaux quotidiens
et des dossiers de synthèse des affaires.

## 6. Matrice récapitulative

| Flux | Ce qui sort (forme) | Pseudonymisé | Boîte de dialogue de consentement propre | Journal d'audit |
| --- | --- | --- | --- | --- |
| Saisie de documents (4 appels) | texte OCR et texte du document (limité), listes de dossiers et de noms | oui | oui — une fois par exécution du programme | oui |
| Tri des courriels (récupération manuelle dans l'écran des courriels) | expéditeur, objet, court extrait (aucune liste des dossiers) ; uniquement pour les courriels non affectés localement | oui | non | oui |
| Tri des courriels (arrière-plan, toutes les cinq minutes) | idem | oui | non | oui |
| Briefing quotidien (API) | texte du briefing : nombre de délais, audiences avec numéro de dossier, nom du client, ville et juridiction, intitulés des rendez-vous | oui | non (premier démarrage de la journée, préparé pendant le démarrage) | oui |
| Recherche de personnes, étape 1 | nom réel (recherche web) | non — par conception | oui — une fois par session | oui (en clair) |
| Recherche de personnes, étapes 2 et 3 | textes de pages (limités par source) | oui | même consentement | oui |
| Remplissage automatique personne/institution | nom saisi (recherche web) | non — par conception | oui — une fois par session | oui (en clair) |
| Importation IA du journal quotidien | texte brut collé | oui | oui | oui |
| Moniteur de cohérence des données | par nouveau document : ses zones de coordonnées et les noms des correspondances possibles (ni coordonnées ni numéros d'identification issus des données de base) | oui (noms d'institutions en clair) | non (arrière-plan limité) | oui |
| Traitement de texte : réviser / structurer | sélection avec extrait de contexte / lignes du document (limitées) | oui | non (bouton = consentement) | non |
| Prétraitement de la lecture à voix haute | chaque phrase, en clair | non | non (lancement = consentement) | non |
| Revue Red/Blue Team (API) | texte du projet, date et juridiction | oui | non (interrupteur = consentement) | oui |
| Résumé du dialogue (API) | échanges plus anciens du dialogue (questions de l'utilisateur et réponses finales uniquement) | oui | non (passe d'arrière-plan du chat API) | oui |
| Correction par IA File→Markdown | texte converti | oui | non | non |
| Outil d'IA de repérage pour le caviardage | texte déjà caviardé ; les réponses contiennent des noms en clair de tiers | désactivée — par conception | interrupteur = consentement | oui |
| Chat IA (externe) | invite, contexte d'écran, mémoire, dialogue récent avec résumé, résultats d'outils (limités par élément) | oui | oui — une fois par session | oui |
| Bridge d'IA de bureau (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | résultats d'outils bruts (données de dossier complètes) | non — par conception | oui — une fois par exécution du programme pour toutes les IA de bureau | non (côté application) |
| Transcription audio : attribution des interlocuteurs | texte reconnu par sections — jamais l'enregistrement | oui | oui | oui |
| Fournisseurs gratuits d'arrière-plan (Groq, OpenRouter, Mistral) — uniquement s'ils sont activés | les mêmes contenus que la tâche d'arrière-plan concernée ; jamais le chat, les écritures ni la revue Red/Blue Team | comme la tâche concernée | non (interrupteur par fournisseur = consentement) | oui |
| ZIP d'instructions IA | exportation en clair du cabinet (téléversement à l'initiative de l'utilisateur) | non | avertissement une fois par exécution du programme | s.o. |

## 7. Services externes non-LLM (par souci d'exhaustivité)

![IRONSTICK Client, internet, symbole de localisation et symbole météo](https://www.ironstick.legal/img/68_external_services.png)

Indépendamment de tout LLM, les fonctionnalités suivantes contactent des services
externes avec le minimum de données nécessaires : validation de numéros (EU VIES,
EORI, GLEIF, registres du commerce — le numéro vérifié), les requêtes web directes de
la recherche de personnes (le nom), IMAP (votre serveur de messagerie), et
les exportations facultatives vers Google Drive (les fichiers exportés). Aucun de ces
services n'implique le fournisseur d'IA.

Les services suivants sont contactés en arrière-plan ou avec des données tout aussi
minimales :

- **OpenStreetMap Nominatim (géocodage d'adresses)** — une fois par jour, une tâche
d'arrière-plan parcourt les personnes et sociétés des fiches de parties qui ont une
adresse ou une ville, et envoie la rue, le district, la ville et le pays (jamais le
nom) à Nominatim afin de les placer sur la carte ; une adresse déjà placée n'est
renvoyée que lorsqu'elle change, et une adresse introuvable est de nouveau tentée après
un délai d'attente. Le nom de lieu de la consultation de la météo est géocodé de la
même manière. Aucune boîte de dialogue de consentement ; les coordonnées sont
enregistrées localement.
- **ipwho.is (géolocalisation IP)** — une fois par démarrage du programme, dans
le cadre de l'instantané de sécurité local (section 8), IRONSTICK demande à ce service
l'adresse IP **publique** de la machine et une localisation approximative (ville,
pays, FAI). La requête ne transporte aucune donnée ; le service reçoit l'adresse IP
publique d'où provient la requête. La réponse est enregistrée
exclusivement en local et n'est transmise nulle part ailleurs.
- **Open-Meteo (météo)** — sur demande, la consultation de la météo par l'IA
(section 4.8) interroge les données météorologiques actuelles pour un lieu nommé ; le
briefing quotidien fait de même pour la ville enregistrée dans la configuration
lorsque son mode facultatif avec référence météo est activé. Seules les coordonnées du
lieu sont transmises — jamais de données de dossier, de client ou de personne.
- **[www.ironstick.legal](https://www.ironstick.legal/index_fr.html) (fichier d'actualités)** — une fois le code d'accès saisi,
puis toutes les six heures, l'application télécharge depuis le site web de l'éditeur du
logiciel un fichier d'actualités contenant des avis et des avertissements, ainsi que
toute image qu'il référence. La requête ne transporte aucune donnée ; comme tout
serveur web, le serveur de l'éditeur voit l'adresse IP et l'heure de la requête.

Aucun de ces services n'implique le fournisseur d'IA.

## 8. Stockage local, intégrité et maîtrise par l'utilisateur

![IRONSTICK Client avec verrouillage d'accès TOTP ; documents, mémoire temporaire et base de données chiffrés en AES-256](https://www.ironstick.legal/img/69_local_encryption.png)

Indépendamment des canaux d'IA ci-dessus, ce qui suit s'applique à **toutes**
les données détenues par IRONSTICK :

- **Stockage exclusivement local.** L'ensemble des données — base de données,
fichiers de documents, médias, transcriptions, configuration — se trouve dans un
répertoire de données unique, à un emplacement défini par l'utilisateur. IRONSTICK ne
requiert aucun compte cloud, et aucune fonction n'envoie de données de l'utilisateur à
l'éditeur (le seul contact avec l'éditeur est le téléchargement du fichier
d'actualités, section 7). Lorsqu'un cabinet exploite le serveur
facultatif IRONSTICK SERVER (section 9), ce serveur est lui aussi l'appareil propre du
cabinet, sur le réseau propre du cabinet — rien ne change quant à l'accès de
l'éditeur.
- **Base de données chiffrée au repos (AES-256).** La base de données — le
registre des clients, dossiers, chroniques, courriels, délais, textes des
transcriptions et la mémoire des IA — est stockée chiffrée en AES-256, chaque page
individuellement et avec un sceau d'intégrité par page. La clé est dérivée par
l'application au moment de l'exécution et n'est jamais écrite sur le disque ni dans la
configuration, de sorte qu'un fichier de base de données copié depuis le support de stockage ou
depuis une archive de sauvegarde est illisible sans IRONSTICK. Il s'agit d'une mesure
technique au sens de l'art. 32 du RGPD, qui s'applique sans aucune configuration par
l'utilisateur et ne peut pas être désactivée.
- **Documents chiffrés au repos (AES-256).** Le stockage des documents — les PDF
originaux, numérisations, images, fichiers audio et de transcription — est chiffré de
la même manière, fichier par fichier, avec un sceau d'intégrité qui détecte toute
altération. La lecture passe par une barrière unique qui déchiffre le fichier demandé
dans une copie de travail temporaire et supprime ces copies à la fermeture ou au
démarrage de l'application. Les sauvegardes et les paquets de dossiers contiennent les
documents sous leur forme chiffrée.
- **Ce qui reste en clair.** Outre les copies de travail de la session en cours et les exportations : les numérisations en attente dans la boîte de réception des
numérisations avant leur saisie ; la mémoire tampon de relecture croisée de courte
durée entre IA de bureau (section 4.9, supprimée à la clôture de la tâche et effacée à
chaque démarrage) ; et, uniquement s'il est activé, le journal de diagnostic détaillé
du Bridge (section 4.9).
- **Contrôle d'accès au démarrage (TOTP).** Une fois la clé de licence acceptée,
l'application n'affiche rien d'autre qu'une invite de saisie de code jusqu'à ce que
l'utilisateur saisisse le code à usage unique actuel à six chiffres, basé sur le
temps, provenant d'une application d'authentification (RFC 6238). Le secret à
l'origine des codes n'est
jamais écrit sur le disque ; seule une empreinte non secrète de la configuration
confirmée est enregistrée, afin que le code QR soit de nouveau affiché après un
changement de clé. Des codes erronés répétés déclenchent un délai d'attente croissant.
Les Bridges d'IA de bureau ne reçoivent aucune donnée de dossier tant que
l'application est verrouillée. Le fichier de configuration (clés
API, identifiants de messagerie, accès au serveur) est stocké chiffré en AES-256 selon
le même mécanisme que les documents et n'est déchiffré qu'en mémoire.
- **Emplacement de stockage choisi par l'utilisateur.** Le chemin des données est
choisi lors de l'installation et peut être modifié à tout moment — y compris vers un
support amovible tel qu'une clé USB chiffrée ou un disque externe chiffré.
L'application suit simplement l'emplacement configuré ; le chiffrement du support (par
ex. au moyen du chiffrement de disque du système d'exploitation) relève de
l'utilisateur et est recommandé pour les supports portables. Les lecteurs réseau et les
dossiers synchronisés avec le cloud (OneDrive, Google Drive, Dropbox, iCloud, Box,
pCloud, MEGA) sont refusés comme emplacement des données. Lors d'un changement d'emplacement de stockage dans la configuration, IRONSTICK contrôle la cible au regard de ces règles ; la copie s'effectue avec comparaison de sommes de contrôle, la bascule n'a lieu qu'après une vérification réussie, et l'ancien dossier est conservé sous un autre nom.
- **Synchronisation des appareils sans aucun cloud.** La synchronisation
facultative Windows ↔ tablette Android s'effectue par une connexion directe
par câble USB — aucun service tiers n'intervient, les transferts sont vérifiés par
somme de contrôle, et une sauvegarde obligatoire est effectuée avant le remplacement
de la base de données. Les documents marqués comme secrets ne sont jamais transférés
vers la tablette.
- **Instantané de sécurité au démarrage (journal de connexion local).** À chaque
démarrage du programme, IRONSTICK enregistre en arrière-plan un instantané de la
machine sur laquelle il s'exécute : nom d'hôte, système d'exploitation, RAM/CPU,
adresse IP locale, navigateur par défaut, outils d'accès à distance en cours
d'exécution qu'il détecte, et un score de sécurité dérivé — plus, une fois par
démarrage, l'adresse IP publique et la localisation approximative (ville, pays, FAI)
obtenues auprès du service de géolocalisation IP ipwho.is (section 7).
L'instantané est enregistré **exclusivement en local** dans la base de données et n'est transmis nulle part. La conservation est
limitée automatiquement à **6 mois** au maximum et à **1 000 entrées** au
maximum (maintenance quotidienne), et l'utilisateur peut consulter le journal à tout
moment dans le configurateur (carte «Journal de connexion»).
- **Empreintes d'intégrité sur chaque fichier saisi.** Au moment de la saisie,
chaque fichier enregistré reçoit une empreinte cryptographique de son contenu (SHA-256
pour les documents et les médias ; une empreinte MD5 héritée pour les fichiers audio
de transcription), consignée dans la base de données à côté de l'entrée. Toute
modification ultérieure d'un fichier enregistré est donc **détectable** par
comparaison du fichier avec son empreinte consignée, et les exportations
d'e-discovery (EDRM) contiennent ces empreintes afin que les destinataires puissent
vérifier les fichiers de manière indépendante. Toute manipulation devient ainsi manifeste et démontrable.
- **Sauvegardes à la discrétion de l'utilisateur.** Une fonction de sauvegarde
intégrée écrit une copie complète des données (sauvegarde complète ou sauvegarde des
seules données) sous la forme d'une archive ZIP unique vers toute destination choisie
par l'utilisateur, et effectue la restauration à partir d'une telle archive sur
demande. La fréquence des sauvegardes, leur lieu de conservation, leur durée de
conservation et le chiffrement supplémentaire éventuel des archives relèvent
entièrement de la décision de l'utilisateur. Dans chaque archive, la base de données,
les documents, la configuration et la mémoire de travail temporaire de l'IA sont en
tout état de cause chiffrés en AES-256 ; seules les numérisations encore en attente
dans la boîte de réception des numérisations y figurent telles quelles —
IRONSTICK n'impose aucun calendrier et ne transmet les sauvegardes nulle part.
- **Les documents générés appartiennent à l'utilisateur.** L'utilisateur peut
générer des documents à tout moment — actes de procédure, courriers, dossiers, listes,
exportations — et les télécharger : ils sont écrits dans le dossier Documents local
ou, lorsque l'utilisateur choisit expressément Google Drive comme destination, dans le
compte Google Drive propre de l'utilisateur.
Ce qu'il advient ensuite d'un document généré — impression, dépôt auprès d'une juridiction,
envoi par courriel, téléversement vers un service quelconque, communication à des
tiers — est décidé par le seul utilisateur.

**Répartition des responsabilités.** Dès lors qu'IRONSTICK stocke
tout localement et ne transmet des données que par les voies documentées aux sections
1 à 7 et 9 — y compris les fonctions d'arrière-plan qui s'exécutent sans boîte de
dialogue propre (sections 3 et 7) —, l'exploitant du cabinet est le
seul responsable du traitement : il choisit le support de stockage et son chiffrement,
gère et conserve les sauvegardes, décide des fonctions d'IA activées, donne ou refuse
chaque consentement, et décide seul de ce qu'il advient de chaque document,
exportation ou sauvegarde produit par le logiciel. Le contenu généré par l'IA —
projets, résumés, évaluations, classifications — constitue toujours une
**proposition** sur laquelle l'utilisateur décide. Le présent document existe afin que chacune de ces décisions
puisse être prise en pleine connaissance des flux de données réels.

## 9. IRONSTICK SERVER (facultatif, sur le réseau propre du cabinet)

![IRONSTICK Server et IRONSTICK Client reliés par le LAN ; le serveur n’a aucune connexion à internet](https://www.ironstick.legal/img/70_server_lan.png)

Les cabinets disposant de plusieurs postes de travail IRONSTICK peuvent exploiter le
serveur facultatif **IRONSTICK SERVER** — un service de coordination qui s'exécute
sur le NAS Synology propre du cabinet, au sein du réseau local propre du cabinet. Aux
fins de la présente déclaration, les faits déterminants sont les suivants :

- **Aucune partie externe n'intervient.** Le serveur est l'appareil propre du
cabinet. Il n'accepte de connexions qu'à partir d'adresses réseau privées (locales) et
**n'initie jamais aucune connexion vers internet** — ni télémétrie, ni vérification
de mises à jour, ni contact avec l'éditeur. L'éditeur du logiciel n'a aucun accès de
quelque nature que ce soit.
- **Transport et stockage.** Les documents parviennent au serveur et n'y reposent que sous forme de fichiers chiffrés en
AES-256, dans le même format de coffre-fort que sur le poste de travail ; le serveur n'en voit
jamais le texte en clair. Le serveur fonctionne sur le NAS propre du cabinet, au sein du réseau
du cabinet, sans connexion à internet.
- **Aucune intervention d'IA.** Le serveur n'achemine aucun trafic d'IA, ne
stocke aucune clé d'IA et ne communique jamais avec un quelconque fournisseur de
modèles de langage. Tous les canaux d'IA décrits aux sections 1 à 6 restent
strictement propres à chaque poste de travail ; la couche de pseudonymisation, les
barrières de consentement et le journal d'audit ne sont pas affectés par la présence
du serveur.
- **Ce que le serveur stocke** — l'ensemble sur le NAS, sous le contrôle du
cabinet : (a) les **paquets de dossiers partagés** — uniquement les dossiers qu'un
utilisateur a expressément mis à la disposition de ses collègues ; les documents
marqués comme secrets sont exclus par conception et ne parviennent jamais au serveur ;
(b) la **bibliothèque juridique centrale** — textes législatifs publics au format
Markdown, chacun accompagné du nom de l'utilisateur contributeur, du lien vers la
source et de la date de vérification ; (c) les **enregistrements du suivi du
temps** — par utilisateur, jour et dossier : numéro de dossier, nom du client et
minutes, communiqués en arrière-plan par chaque poste de travail ; (d) les **totaux
de présence** par utilisateur et par jour, dérivés des signaux de présence de
session ; (e) les **métadonnées d'événements de dossier** — partages, révocations,
débuts/fins d'abonnement et exportations, chacun avec la date, l'heure et l'adresse IP
LAN ; (f) un **journal de sécurité** comprenant les événements d'administration et
de connexion, y compris les adresses IP LAN ; (g) les **colis de transmission de
dossiers** — lorsqu'un utilisateur transfère la titularité d'un dossier à un
collègue, le dossier complet transite sous forme d'une archive unique par une zone de
transfert temporaire du serveur ; le colis est supprimé du serveur après que le
destinataire a confirmé l'importation, et les documents marqués comme secrets ne sont
transmis qu'après une confirmation supplémentaire expresse du titulaire (à défaut, le
transfert est interrompu) ; (h) la **réception centrale des numérisations**
(Central Scan App facultative) : un registre des **numéros de dossier et du nom
d'affichage** de chaque utilisateur (communiqués par les postes de travail à titre
d'éléments de correspondance — jamais le contenu des dossiers) et une **file
d'attente de documents** par fichier, conservant le courrier entrant numérisé
adressé à un utilisateur jusqu'à ce que le poste de travail de cet utilisateur l'ait
récupéré et confirmé, après quoi la copie sur le serveur est supprimée ; la
reconnaissance de texte et l'attribution au destinataire s'effectuent localement sur
le poste de numérisation, sans aucune IA ; (i) les **enregistrements d'événements de
sauvegarde** — chaque poste de travail communique ses événements de sauvegarde et de
restauration des données (type, nom de fichier, taille, heure, IP LAN), de sorte que
l'administrateur peut voir pour chaque utilisateur quand la dernière sauvegarde a été
effectuée et relancer les utilisateurs en retard ; (j) le **répertoire des parties à
l'échelle du cabinet** — les fiches de base des
**personnes et sociétés, des institutions, des relations entre elles et des analyses
de personnes** tenues par les postes de travail, ainsi que la file des propositions
de modification échangées entre utilisateurs ; (k) les **évaluations de décisions de justice** — par poste et par décision : tribunal, formation de jugement et composition, les noms des juges et des greffiers, numéro de décision, date, numéro de procédure, les numéros internes de dossier et de client du poste évaluateur, les parts de texte mesurées et l'analyse en anglais de la décision et des écritures des deux parties rédigée par l'IA ; (l) le **chat du cabinet** — messages entre les utilisateurs enregistrés (supprimés après un an) — et les notes épinglées sur un dossier partagé, visibles par son titulaire et par tous les abonnés.
- **Le répertoire des parties à l'échelle du cabinet.** Dès qu'un poste de
travail est connecté au serveur, ses données de base relatives aux parties (qui est
qui : noms, identifiants, coordonnées, relations, analyse de personnes) sont
**téléversées automatiquement** et répliquées sur chaque autre poste de travail du
même cabinet, afin que chaque avocat voie avec qui le cabinet est déjà en relation et
que le cabinet dispose d'une vue d'ensemble des conflits d'intérêts. Chaque fiche a
exactement un titulaire — l'utilisateur qui l'a introduite en premier ; tous les
autres utilisateurs détiennent une copie en lecture seule et ne peuvent qu'envoyer une
**proposition de modification**, que le titulaire accepte ou rejette dans le
moniteur de données. Si le titulaire ne peut être joint pendant 48 heures, la
titularité passe à l'utilisateur ayant fait la proposition. **Le contenu des dossiers
ne fait pas partie de ce répertoire** — les documents, la chronologie, la
correspondance et les affectations de dossiers restent régis par les actions
explicites de partage et de transmission décrites ici. L'échange reste au sein du
cabinet (un seul responsable du traitement), ne quitte jamais le réseau local et
n'implique **aucun fournisseur d'IA** : la détection des doublons et la comparaison
des champs s'exécutent sous forme de simple logique de programme sur le poste de
travail émetteur ; le serveur se contente de stocker et de retransmettre. Les cabinets
devraient mentionner ce partage interne des données relatives aux parties et des
analyses de personnes dans leur registre des activités de traitement.
- **Les évaluations de décisions de justice.** Une évaluation n'est enregistrée que sur ordre exprès de l'utilisateur ; ensuite, comme le répertoire des parties, elle est **téléversée automatiquement** et répliquée sur chaque poste du cabinet. Chaque poste tient sa propre évaluation par décision, que lui seul peut modifier. L'analyse décrit le contenu d'une décision et des écritures qui s'y rapportent — elle contient dans cette mesure du **contenu de dossier** — et nomme les juges et les greffiers. Aucun fournisseur d'IA n'intervient ; l'échange reste dans le réseau local du cabinet. Les cabinets devraient également faire figurer cette communication dans leur registre des activités de traitement.
- **Uniquement des actions délibérées — pour le contenu des dossiers.** Le
contenu des dossiers ne parvient au serveur que par une action explicite de partage ou
de transmission confirmée par l'utilisateur ; les textes de la bibliothèque juridique
uniquement après que l'utilisateur a accepté l'entrée dans le moniteur de données ; le
courrier entrant numérisé uniquement après que l'employé de bureau a examiné le
document et cliqué sur l'envoi à un destinataire choisi. Le répertoire des parties et les évaluations enregistrées de décisions de justice constituent les exceptions délibérées : ils se synchronisent en arrière-plan sans confirmation fiche par fiche. Les enregistrements de temps, de présence,
d'événements et de sauvegarde sont des métadonnées opérationnelles créées par le
fonctionnement multi-utilisateurs lui-même et sont visibles par l'administrateur du
cabinet dans l'interface d'administration web.
- **Responsabilité du traitement.** Le cabinet qui exploite le serveur demeure le
seul responsable du traitement. L'administrateur contrôle l'approbation des
inscriptions, peut mettre fin aux abonnements, supprimer des entrées de la
bibliothèque juridique et désinstaller le paquet — ce qui laisse le répertoire de
données du serveur sous le contrôle de l'administrateur sur le NAS.
- **Données des collaborateurs.** Avec IRONSTICK SERVER, chaque poste de travail
communique au serveur son temps de travail mesuré par jour et par dossier (numéro de
dossier, nom du client) ainsi que chaque événement de sauvegarde et de restauration
(fichier, taille, heure, adresse IP), où l'administrateur du cabinet peut les consulter.
Le cabinet doit en informer son personnel.
- **Noms complets des clients dans les enregistrements de temps.** La vue
d'ensemble du saisie du temps affiche le temps de travail par dossier et par client, ce
qui signifie que des noms de clients sont stockés sur le NAS. Ces données restent au
sein de l'infrastructure propre du cabinet et de son régime de confidentialité
existant — mais les cabinets devraient inclure le NAS dans leur inventaire des mesures
techniques et organisationnelles (contrôle d'accès sur le système d'exploitation du
NAS, chiffrement du volume, politique de sauvegarde), exactement comme ils le feraient
pour tout serveur de fichiers de bureau.

## Annexe — Clause type pour votre notice d'information des clients (proposition)

Le texte suivant est une proposition de rédaction qu'un cabinet utilisant IRONSTICK
peut reprendre dans sa propre notice d'information des clients. Il est rédigé de
manière à correspondre exactement aux flux de données décrits ci-dessus. Il évite
délibérément toute citation d'articles de loi afin de pouvoir être inséré dans des
notices de toute structure.

**Avant d'insérer ce texte — liste de vérification pour
l'avocat :**

1. Assurez-vous de disposer du contrat de sous-traitance de **chaque** fournisseur
d'IA que vous avez configuré, ne nommez dans la clause que les fournisseurs que vous
utilisez effectivement, et vérifiez la phrase relative à l'entraînement et à la
conservation au regard des conditions que vous avez effectivement signées. Les
fournisseurs gratuits d'arrière-plan (Groq, OpenRouter, Mistral, section 1) ne sont
couverts par la clause qu'au moyen de la phrase facultative qui y figure entre crochets —
ne les activez que si leurs conditions satisfont à vos exigences déontologiques, et
supprimez la phrase si vous ne les utilisez pas.
2. Ne conservez la phrase entre crochets relative à l'espace de travail de l'IA que si
vous utilisez réellement le Bridge d'IA de bureau (Claude Desktop/Code, ChatGPT
Desktop, Qwen Desktop ou Kimi Desktop) ; supprimez-la dans le cas contraire.
3. La présente clause couvre les flux au sein de l'application décrits dans le
présent document. Elle ne couvre **pas** le paquet d'instructions IA (section 5) —
le téléversement de cette exportation vers un service d'IA quelconque constitue une
décision distincte et requerra en règle générale le consentement exprès du
client.
4. Si vous avez désactivé certaines fonctions d'IA dans le configurateur, raccourcissez
la liste des finalités en conséquence — décrivez exactement ce que vous utilisez, rien
de plus.
5. Il s'agit d'une proposition de rédaction et non d'un conseil juridique. Faites-la
examiner au regard des règles professionnelles de votre barreau et de la pratique
locale en matière de protection des données avant toute utilisation.

### Français

**Traitement des dossiers assisté par IA.** Notre cabinet utilise le
logiciel de gestion de dossiers IRONSTICK, qui comprend des fonctions assistées
par intelligence artificielle. Pour ces fonctions, certaines données de votre
dossier peuvent être transmises à un prestataire externe de services d'IA
(selon la disponibilité : Alibaba Cloud, Moonshot AI, OpenAI ou Anthropic, via leurs API), qui les traite
pour notre compte dans le cadre d'un accord de sous-traitance. Nous utilisons
ces fonctions pour : le classement et l'enregistrement des documents entrants,
la priorisation du courrier électronique entrant, la vérification de la
cohérence de nos données, la rédaction et la relecture d'actes juridiques,
ainsi que l'analyse et la recherche juridiques. [Optionnel — à supprimer si non
utilisé : Pour les tâches qui s'exécutent en arrière-plan, telles que la priorisation du
courrier électronique entrant, la vérification de nos données et les résumés, les
services gratuits de Groq, OpenRouter ou Mistral peuvent en outre être utilisés ; nous
avons examiné leurs conditions avant de les activer.]

**Mesures de protection.** Avant toute transmission, le logiciel
remplace, sur notre propre ordinateur, les identifiants directs enregistrés
dans notre système — noms, numéros d'identification personnels, numéros de
téléphone, adresses électroniques, adresses postales, numéros de dossier et
coordonnées bancaires — par des marqueurs neutres. La table de correspondance
entre marqueurs et données réelles ne quitte jamais le cabinet ; les réponses
du prestataire sont retraduites localement. Seul est transmis ce qui est
nécessaire à la fonction concernée, dans des limites de volume fixes. Quelques
fonctions exigent techniquement des données réelles — par exemple la recherche
publique sur Internet concernant le nom d'une personne, ou la fonction de
lecture à voix haute ; nous ne les utilisons que par une action individuelle
délibérée. [Optionnel — à supprimer si non utilisé : Pour la rédaction d'actes
de procédure, nous utilisons en outre un espace de travail IA dans lequel les
données du dossier sont traitées sans remplacement par des marqueurs ; ce canal
n'est utilisé que sous notre surveillance directe.] Indépendamment des fonctions
d'IA, le logiciel envoie les adresses postales enregistrées dans nos données — sans les
noms — au service cartographique public OpenStreetMap afin de pouvoir les afficher sur
une carte.

**Le prestataire.** Selon les conditions du prestataire qui nous sont
applicables, les contenus transmis par l'API ne sont pas
utilisés pour entraîner des modèles d'IA et ne sont conservés que pour une
durée limitée. Le traitement peut avoir lieu en dehors de l'Espace économique
européen ; dans ce cas, le transfert est protégé par les garanties convenues
dans notre accord de sous-traitance. Ce que le prestataire peut faire des
données est régi par cet accord — et non par la libre appréciation de l'IA.

**Votre choix.** Notre secret professionnel demeure intact : au-delà de
ce qui est décrit ici, aucune donnée ne quitte le cabinet. Le traitement repose
sur le mandat que vous nous avez confié et sur notre intérêt légitime à une
gestion efficace et rigoureuse de votre dossier. Vous pouvez vous opposer à
tout moment à l'utilisation des fonctions assistées par IA ; dans la mesure du
possible, nous traiterons alors votre dossier sans elles. Vous conservez par
ailleurs l'ensemble de vos droits en matière de protection des données :
accès, rectification, effacement et réclamation auprès de l'autorité de
contrôle.

La présente déclaration a été établie à partir du code source de
l'application (pseudonymiseur, routeur externe, journal d'audit et voie de
transmission de chaque fonctionnalité) et reflète le comportement livré de la version
1.0.7 (état : novembre 2026). Le traitement par le fournisseur d'IA lui-même — conservation, utilisation
pour l'entraînement, sous-traitants ultérieurs, juridiction — est régi exclusivement
par les conditions du fournisseur, dans leurs versions en vigueur. Les
liens vers les conditions et la politique de confidentialité de chaque fournisseur
figurent également dans la section correspondante de la configuration de l'IA.

| Fournisseur | Conditions et confidentialité |
| --- | --- |
| Alibaba Cloud (Qwen) | [alibabacloud.com/help/en/legal](https://www.alibabacloud.com/help/en/legal) |
| Moonshot AI (Kimi) | [platform.kimi.ai/docs/agreement](https://platform.kimi.ai/docs/agreement) |
| OpenAI (ChatGPT) | [openai.com/policies](https://openai.com/policies) |
| Anthropic (Claude) | Commercial Terms of Service : [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms) ; Usage Policy : [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup) ; Privacy Policy : [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) |
| Groq | [groq.com/terms-of-use](https://groq.com/terms-of-use) |
| OpenRouter | [openrouter.ai/terms](https://openrouter.ai/terms) |
| Mistral | [legal.mistral.ai/terms/commercial-terms-of-service](https://legal.mistral.ai/terms/commercial-terms-of-service) |
