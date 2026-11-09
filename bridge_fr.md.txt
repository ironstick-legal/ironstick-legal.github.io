# Compendiums - Bridge

> Le Bridge IRONSTICK pour l’IA de bureau : reliez Claude, ChatGPT, Qwen ou Kimi Desktop à vos dossiers — licences, installation, les contrôles déterministes et le catalogue complet des outils.

Page d’origine: https://www.ironstick.legal/bridge_fr.html

---

Le Bridge IRONSTICK permet à l'IA de bureau que vous utilisez déjà — Claude
Desktop / Claude Code, ChatGPT Desktop, Qwen Desktop ou Kimi Desktop — de travailler
directement sur vos dossiers, en local sur le même ordinateur et derrière dix-sept
portes déterministes. Le premier accès aux données lors de chaque exécution du
programme requiert votre consentement, chaque accès est affiché dans la barre de
menu, et les modifications des données maîtresses, de la chronique, du calendrier et
des instructions ne prennent effet qu'après votre validation. Ce compendium traite
des licences, du rapport avec le chat d'IA intégré d'IRONSTICK, de l'installation, de
l'affichage des accès, des portes, des demandes typiques et du catalogue complet des
outils. Édition Windows.

**En un coup d'œil**

- **Pour** les avocats et les parties qui se représentent elles-mêmes, sur un
seul poste ou au sein d'un cabinet relié par IRONSTICK SERVER, le serveur de cabinet.
- **Local :** le programme Bridge de l'IA de bureau et IRONSTICK communiquent par une
connexion protégée par jeton sur le même ordinateur ; seuls les outils web et
registres accèdent à Internet.
- **Maîtrisé :** consentement une fois par exécution du programme, un symbole
visible pour chaque accès, des portes déterministes avant toute écriture et toute
remise, et des propositions au lieu de modifications silencieuses.
- **Paneuropéen :** les recherches et les comparaisons gèrent les signes
diacritiques des onze langues de l'interface ; les numéros d'identification
nationaux sont validés pour neuf schémas dans sept pays.

## 1. Ce qu'est le Bridge

Le Bridge relie **votre propre IA de bureau** — Claude Desktop (ou
Claude Code), ChatGPT Desktop, Qwen Desktop ou Kimi Desktop — à
**application client IRONSTICK en cours d'exécution** sur le même ordinateur. L'IA
lit votre dossier au moyen d'outils conçus sur mesure — chroniques, textes
intégraux des documents, courriels, délais, données maîtresses — et travaille avec
en profondeur : elle analyse, recoupe et rédige des projets. La connexion elle-même
est strictement locale ; aucun serveur IRONSTICK n'y intervient. Les données que l'IA
lit sont traitées dans le cadre de **votre propre abonnement auprès de ce
fournisseur et de ses conditions**, comme l'expose la
[déclaration RGPD des flux de données](https://www.ironstick.legal/gdpr_fr.html).

- Suppose l'application de bureau concernée avec votre propre compte
(Anthropic, OpenAI, Qwen ou Kimi).
- Vous gardez la main : la fermeture d'IRONSTICK ferme aussitôt la source de données.
- Ce canal transmet **délibérément des données réelles, non pseudonymisées** ;
c'est précisément ce qui permet de rédiger des modèles prêts à être déposés.
- Les documents marqués **secrets** sont invisibles pour le Bridge.
- La **mémoire d'IA partagée entre les chats est conçue pour les longues
procédures** : les entrées rattachées à un dossier ne sont jamais supprimées
automatiquement ; les entrées sans dossier sont supprimées après un an sans
utilisation, et chaque utilisation renouvelle cette année.
- L'accès en écriture est délibérément étroit. Les modifications des données
maîtresses, de la chronique, du calendrier, de la mémoire, des textes intégraux et
de la bibliothèque juridique ne prennent effet qu'après votre validation, dans un
formulaire ou un dialogue d'IRONSTICK ou dans le Moniteur de cohérence des données.
Sans un tel dialogue, l'IA n'écrit que dans ses propres espaces de travail (magasin
de brouillon chiffré, journal quotidien à votre demande, sa propre évaluation de
dossier après les contrôles déterministes) et des notes sur le tableau d'affichage
d'un dossier partagé via IRONSTICK SERVER ; les étiquettes et les messages du chat du
cabinet requièrent votre confirmation dans le chat. Les projets sont transmis au
traitement de texte.

Chaque IA de bureau possède son propre petit programme Bridge ; tous se
connectent au même point d'accès local de l'application IRONSTICK en cours
d'exécution. Les quatre IA de bureau disposent des mêmes outils et des mêmes portes.
Les IA peuvent tourner **simultanément** et travailler en parallèle
sur le même dossier ; chacune est affichée avec son propre logo dans la barre de
menu.
## 1b. Pourquoi le Bridge ?

**Parce que le Bridge travaille sur l'abonnement que vous détenez déjà.** Une IA
de bureau fonctionne via l'application de bureau du fournisseur et votre compte
chez lui ; un abonnement est le forfait mensuel du fournisseur, et chaque
dialogue, chaque lecture de texte intégral et chaque cycle de rédaction est couvert
par celui-ci. Le même travail dans le chat intégré d'IRONSTICK fonctionne sur votre
clé d'API, et l'accès par API est facturé par le fournisseur à l'usage.

Le Bridge est donc la voie à privilégier pour les longs dialogues avec l'IA et
pour tout travail où des documents ou des ensembles de données importants sont tenus
à jour par l'IA : lire des dossiers entiers, maintenir à jour chroniques, journaux
quotidiens et entrées de mémoire, traiter des centaines d'annexes — un travail dont
le volume est couvert par le forfait au lieu d'être facturé à l'usage.

 [Figure: Deux voies vers l'IA : clé d'API facturée à l'usage ou Bridge avec application de bureau du fournisseur et son abonnement]
**Uniquement avec Claude Desktop / Claude Code**

- **Chaque chat est suivi séparément.** IRONSTICK distingue les chats
de votre Claude Desktop. Verrou d'instructions, registres de lecture, état de
préparation, contrôles des parties et suivi des remises sont
tenus **par chat** ; ce qu'un chat a lu ne compte jamais pour un autre. Dans le
menu déroulant du symbole Claude, chaque chat apparaît sous le nom que vous lui
avez donné dans Claude Desktop. Pour cela, IRONSTICK ne lit dans le journal de
session local de Claude que les événements d'outils structurés (nom de l'outil et
arguments), jamais le texte de la conversation. Un appel qui ne peut être
attribué parce que deux chats appellent exactement au même instant est accepté
dès lors qu'un chat de ce Claude détient une confirmation valide, et n'est pas
consigné comme infraction aux règles.
- **La compaction du contexte est détectée.** Lorsque Claude compacte une
longue conversation, les instructions lues auparavant ne figurent plus de façon
fiable dans son contexte. IRONSTICK verrouille aussitôt ce chat, sans pénalité,
jusqu'à ce qu'il ait relu les instructions et cité mot pour mot une règle choisie
au hasard ; ensuite il reprend là où il en était.
- **L'accès en dehors du connecteur est détecté.** Si un chat accède au
dossier de données d'IRONSTICK avec les propres outils de fichiers de Claude
(lire, chercher, shell, éditer) au lieu de passer par le connecteur, cela est
consigné comme infraction aux règles pour ce chat et signalé lors de son prochain
appel au connecteur.
- **Limite de connecteur étendue.** Claude Desktop reçoit les résultats
jusqu'à 40.000 caractères directement dans la réponse, soit quatre fois la limite
standard (10.000 pour Qwen, Kimi et le chat intégré) ; tout ce qui dépasse va en
bloc dans le magasin de brouillon.
- **Réponses en 45 secondes.** Comme Claude Desktop annule les appels d'outil
au bout de 60 secondes, les pages web sont renvoyées en 45 secondes (cette limite
vaut pour chaque IA de bureau). Les documents volumineux ou numérisés continuent
d'être traités en arrière-plan et sont livrés lors de l'appel suivant avec la même
adresse.
- **Contrôle des parties avec anticipation.** Pendant que Claude traite une
partie, il peut annoncer jusqu'à deux autres parties à l'avance ; IRONSTICK
les recherche en arrière-plan, et le contrôle suivant répond alors immédiatement.
Les résultats sont conservés 30 minutes ; l'ordre de la porte est inchangé, et la
partie suivante ne s'ouvre que lorsque la partie en cours est terminée.

**Uniquement avec ChatGPT Desktop**

- **Limite de connecteur étendue.** ChatGPT Desktop reçoit les résultats
jusqu'à 40.000 caractères directement dans la réponse, soit quatre fois la limite
standard (10.000 pour Qwen, Kimi et le chat intégré) ; tout ce qui dépasse va en
bloc dans le magasin de brouillon.
- **Contrôle des parties avec anticipation.** Pendant que ChatGPT traite une
partie, il peut annoncer jusqu'à deux autres parties à l'avance ; IRONSTICK
les recherche en arrière-plan, et le contrôle suivant répond alors immédiatement.
Les résultats sont conservés 30 minutes ; l'ordre de la porte est inchangé.

## 1c. Licences — quatre Bridges ou le bundle

Chaque Bridge d'IA de bureau est un **module complémentaire sous licence
distincte** :

| Bridge | Relie | Licence |
| --- | --- | --- |
| **Bridge Claude Desktop** | Claude Desktop / Claude Code (Anthropic) | Module distinct |
| **Bridge ChatGPT Desktop** | ChatGPT Desktop (OpenAI) | Module distinct |
| **Bridge Qwen Desktop** | Qwen Desktop | Module distinct |
| **Bridge Kimi Desktop** | Kimi Desktop (Moonshot AI) | Module distinct |
| **Bundle de Bridges** | Les quatre ci-dessus | Les quatre modules ensemble |

- Chaque Bridge est déverrouillé dans votre **clé de licence signée de
l'application client** ; il n'existe pas de clé de Bridge distincte. Seuls les Bridges sous licence sont
activés ; un Bridge sans licence n'est pas installé et n'apparaît pas dans la
configuration.
- Vous prenez une licence pour **un seul Bridge** (uniquement l'IA de bureau
que vous utilisez) ou pour le **bundle des quatre**, et pouvez en ajouter par la
suite.
- Les Bridges sous licence peuvent tourner **en parallèle** ; plusieurs IA de
bureau peuvent traiter un même dossier en même temps.

 [Figure: Application client IRONSTICK plus bundle de Bridges : un programme Bridge sous licence pour chaque IA de bureau]
Tarifs des Bridges individuels et du bundle :
[Tarifs](https://www.ironstick.legal/pricing_fr.html).
## 1d. Le chat d'IA intégré d'IRONSTICK — le même modèle, sans licence supplémentaire

IRONSTICK intègre aussi **son propre chat d'IA**. Il fonctionne sur
**le même niveau de travail que le Bridge** : les mêmes outils, les mêmes
portes, le même ancrage et la même rédaction de modèles prêts à être déposés.

- **Aucune licence supplémentaire.** Le chat intégré fait partie
d'IRONSTICK ; il ne requiert aucun module Bridge.
- **Il passe par l'API des fournisseurs** (votre propre clé d'API), que le
fournisseur facture à l'usage, alors que le Bridge passe par l'application de
bureau du fournisseur, au forfait mensuel de votre abonnement.
- En contrepartie, la voie de l'API est **plus étroitement contrôlée** : les
données sont pseudonymisées par le routeur, les appels interactifs demandent votre
consentement, chaque appel est consigné dans le journal d'audit et des plafonds de
taille s'appliquent, en plus des mêmes portes que le Bridge.

 [Figure: Le chat d'IA intégré : l'application client IRONSTICK avec la clé d'API du fournisseur]
**En bref :** le Bridge (application de bureau, abonnement
mensuel forfaitaire) convient au travail quotidien lourd et centré sur les
documents ; le chat intégré (API facturée à l'usage, sans licence supplémentaire)
est toujours disponible et plus étroitement contrôlé.
## 2. Installation (chacune des quatre)

 [Figure: Configuration → Configuration de l'IA : la section Claude Desktop avec les deux interrupteurs, le bouton de configuration et le bouton du plugin de compétence.]

Configuration → Configuration de l'IA : la section Claude Desktop avec les deux interrupteurs, le bouton de configuration et le bouton du plugin de compétence.

La procédure est la même pour chaque IA de bureau ; seules la source de
téléchargement et le bouton de configuration diffèrent.

1. Installer l'application de bureau, se connecter avec son propre compte et la
lancer une fois.
2. Dans IRONSTICK, ouvrir **Configuration → Configuration de l'IA → IA avec
serveur MCP local (STDIO)**.
3. Activer **« Autoriser l'accès au connecteur par Claude Desktop »** (l'interrupteur
principal de tout le canal).
4. En option, activer **« Autoriser la navigation par Claude Desktop »**
si l'IA doit aussi pouvoir piloter l'application : ouvrir des écrans, des
dossiers et des documents, et exporter des fichiers. La lecture fonctionne aussi
sans.
5. Cliquer sur le bouton **« Configurer … Desktop »** correspondant. Pour
Claude, ChatGPT et Kimi, un clic écrit et enregistre la configuration. Pour Qwen
Desktop, IRONSTICK copie le texte de configuration dans le presse-papiers et vous le
collez dans la boîte de dialogue « Ajouter MCP » de Qwen.
6. Démarrer une **nouvelle conversation**, ou utiliser le **bouton de
redémarrage** de la même section, qui ferme et relance les applications d'IA de
bureau sous licence afin qu'elles se reconnectent à IRONSTICK. IRONSTICK apparaît
alors parmi les connecteurs de l'IA, et ses outils sont disponibles dans chaque
conversation.

| IA de bureau | Téléchargement / connexion | Bouton de configuration |
| --- | --- | --- |
| **Claude Desktop / Claude Code** | claude.ai/download — compte Anthropic | « Configurer Claude Desktop » ; un bouton distinct crée le plugin de compétence, que vous ajoutez dans Claude Desktop |
| **ChatGPT Desktop** | openai.com/chatgpt/download — compte OpenAI | « Configurer ChatGPT Desktop » ; un bouton distinct crée le plugin de compétence, que vous ajoutez dans ChatGPT Desktop |
| **Qwen Desktop** | Qwen Desktop (Windows) — compte Qwen | « Configurer Qwen Desktop » (copie le texte de configuration pour la boîte de dialogue « Ajouter MCP » de Qwen) |
| **Kimi Desktop** | kimi.ai — compte Kimi | « Configurer Kimi Desktop » |

L'écran de configuration fournit les liens de téléchargement ainsi que les
liens vers les conditions d'utilisation et la politique de confidentialité de
chaque fournisseur.

**Configuration en une étape.** Pour Claude, ChatGPT et Kimi, un
seul clic sur le bouton de configuration, dans l'écran de configuration de
l'application client, écrit et enregistre la configuration complète ; aucun fichier
de configuration n'a à être modifié à la main. Pour Qwen Desktop, un collage dans
la propre boîte de dialogue de Qwen suffit. Le **bouton de redémarrage** ferme et relance les
applications d'IA de bureau sous licence afin qu'elles se reconnectent à IRONSTICK.
## 3. Comment l'accès des IA est affiché dans la barre de menu

 [Figure: La barre de menu pendant un accès par le Bridge — le symbole Claude apparaît à côté de l'indicateur CPU/RAM.]

La barre de menu pendant un accès par le Bridge — le symbole Claude apparaît à côté de l'indicateur CPU/RAM.

- **D'abord le consentement.** Le premier accès aux données par une IA de bureau
au cours d'une exécution du programme ouvre un seul dialogue de consentement.
Accepter ouvre l'accès à toutes les IA de bureau pour le reste de l'exécution ;
refuser les bloque toutes pendant 10 minutes.
- **Un logo par IA** apparaît dans la barre d'en-tête à côté de
l'indicateur CPU/RAM **à chaque appel d'outil** et reste allumé 3 secondes
après le dernier appel ; des séries d'appels rapides le maintiennent allumé en
continu. Si le symbole est sombre, rien n'est lu en ce moment. Chaque IA a son
propre signe : l'étoile orange de Claude, le nœud vert d'OpenAI, le symbole
violet de Qwen et le « K » bleu-vert de Kimi.
 [Figure: Gros plan : le symbole Claude s'allume à chaque appel d'outil et reste visible 3 secondes après le dernier appel.]

Gros plan : le symbole Claude s'allume à chaque appel d'outil et reste visible 3 secondes après le dernier appel.

- **Le menu déroulant du symbole de l'IA** montre ce que cette IA a lu au
cours de la session : la ligne « Consigne de travail + interdiction d'halluciner »
(coche verte tant qu'elle est valide, croix rouge après expiration), puis, par
dossier, les marques Profil, Ordre juridique et Digest ainsi qu'une barre
« Documents lus *r* sur *n* ».
- **Le symbole du cerveau** apparaît dès que la mémoire d'IA partagée
contient des entrées, et pulse 3 secondes chaque fois qu'un canal d'IA la lit
ou y écrit. Un clic ouvre le dialogue de gestion. L'IA peut proposer d'enregistrer,
de modifier ou de supprimer une entrée de mémoire ; chaque modification ne prend
effet qu'après votre validation. Vos propres notes sont en lecture seule pour l'IA.
- La **navigation** par l'IA (ouvrir des écrans, des dossiers ou des documents)
n'a lieu que si son interrupteur est activé ; sinon, les outils de navigation sont
refusés.
- **Accès en parallèle :** si plusieurs IA sous licence travaillent en même
temps, la barre d'en-tête affiche **un logo par IA active** côte à
côte ; chaque accès est attribué à l'IA qui l'a effectué.
- **Processus d'arrière-plan :** l'indicateur de performance énumère tous les
processus d'arrière-plan en cours, y compris chaque appel d'outil du chat intégré.

## 4. Dix-sept portes déterministes contre l'hallucination et les erreurs de données

IRONSTICK impose ses règles de travail par la structure. Dix-sept portes déterministes (de la logique
pure, sans IA) se dressent entre le modèle et vos enregistrements. Dans le catalogue
d'outils, un badge bleu tel que Porte 1 · Date désigne la porte qui
protège un outil.

| Porte | Empêche | Comment elle fonctionne |
| --- | --- | --- |
| **1. Porte de la date** | Des dates erronées tirées de la période d'entraînement du modèle au lieu de la date réelle. | Tout outil qui écrit dans IRONSTICK est refusé tant que l'IA n'a pas récupéré la date et l'heure réelles, contrôlées par NTP, au cours des 30 dernières minutes. Cette fenêtre est tenue par IA et délibérément courte. |
| **2. Porte des lois** | Un texte de loi inventé ou mal mémorisé. | L'accès web pour les lois est refusé tant que la bibliothèque juridique locale vérifiée n'a pas été consultée ; les sources législatives trouvées en ligne doivent être signalées et n'entrent dans la bibliothèque que par votre dialogue de consentement. |
| **3. Porte de vérification des écritures** | Des références de dossier inventées, des montants divergents, des noms de parties erronés, des citations non vérifiées dans une écriture. | La vérification déterministe des écritures en huit classes : la remise d'un document formel est bloquée sans vérification positive à jour pour l'état exact du fichier ; après cinq passages en échec, le processus s'arrête et vous en êtes averti. |
| **4. Gardien de la couverture de lecture** | Les affirmations « j'ai tout lu » alors que les fichiers n'ont été lus qu'en partie. | Un suivi à la ligne près de ce qui a réellement été lu, conservé d'un redémarrage à l'autre ; les plages non lues sont listées dans chaque réponse, la remise reste bloquée tant que des lacunes subsistent, et la suppression ou l'écrasement de fichiers sources non lus est refusé. |
| **5. Blocage de la navigation** | La perte d'un travail non enregistré à la suite d'un changement d'écran déclenché par l'IA. | Tant qu'un formulaire de saisie ou l'éditeur de texte est ouvert, chaque appel de navigation et d'export est refusé. |
| **6. Porte Human-in-the-loop** | Des modifications silencieuses de l'IA dans les données maîtresses, la chronique, le calendrier ou les instructions. | Les modifications de l'IA arrivent sous forme de propositions : Moniteur de cohérence des données, dialogues de comparaison rouge/vert, dialogues de confirmation ; rien n'est appliqué sans votre validation. |
| **7. Détecteur de contenu formel** | Des lettres ou écritures formelles déclarées « informelles » pour échapper à la mise en forme et à la vérification. | Une analyse déterministe du contenu (formules d'appel et de politesse en six langues, bloc destinataire, marqueurs juridiques, bloc d'identité) rejette la déclaration d'informalité ; un tel contenu n'a aucune voie de remise informelle, et la tentative est journalisée. |
| **8. Gardien des séries de versions** | La remise à zéro du compteur de versions par renommage du fichier (« …\_v05 » devient discrètement « NouveauNom\_v01 »). | Une première remise sous un nouveau nom de fichier est refusée tant qu'existe une série versionnée portant le même numéro de dossier ; l'IA doit poursuivre la série ou déclarer explicitement un document réellement différent, ce qui est journalisé. |
| **9. Enregistrement de lecture des lois** | Un contenu législatif tiré d'articles de presse, de résumés web ou de la mémoire du modèle au lieu du texte de la loi. | Chaque lecture dans la bibliothèque est enregistrée par exécution du programme (fichier source et numéros d'articles effectivement renvoyés). Un article cité sans un tel enregistrement de lecture échoue à la vérification ; les sous-références citées (alinéa, point) sont elles aussi contrôlées quant à leur existence. |
| **10. Ancre du dossier** | Un contexte de dossier inventé de mémoire à partir d'un *autre* dossier (contamination entre dossiers). | Chaque réponse d'outil qui concerne un dossier porte le numéro enregistré, le client et l'objet du dossier tirés des enregistrements, de sorte que tout contexte inventé apparaît à côté des données enregistrées et est aussitôt démasqué. |
| **11. Verrou d'accès aux instructions** | Une IA qui travaille sans avoir lu les règles de travail. | Hormis la lecture des instructions, leur confirmation et la lecture de la langue du système, tout outil est refusé tant que l'IA n'a pas lu les instructions et cité mot pour mot la règle 5 (interdiction d'halluciner). La confirmation expire 60 minutes après avoir été donnée, après 2 heures sans appel, à minuit, à chaque reconnexion et après la compaction du contexte de l'IA de bureau ; l'IA doit alors relire les instructions et citer une règle choisie au hasard. Le menu déroulant du symbole de l'IA affiche l'état en vert ou en rouge. |
| **12. Porte de préparation** | Des notes, entrées de journal ou écritures sur un dossier que l'IA n'a pas lu. | Deux niveaux, comptabilisés par IA et conservés d'un redémarrage à l'autre : une note exige que le profil, l'ordre juridique, le digest de chaque document (le digest tient lieu de chronique) et les cinq documents les plus récents aient été lus ; une écriture, une transmission ou un export exige en outre que chaque document qu'elle cite ou joint ait été lu intégralement. Une lecture reste valable 3 jours, ou jusqu'au prochain document entrant du dossier. |
| **13. Enregistrement de lecture lié au document** | Des annexes et références « lues » il y a des heures, ou pour un autre document. | Une lecture de texte intégral compte pendant 2 heures ; chaque remise du même document (quelle qu'en soit la version) prolonge de 2 heures ses documents cités ; vérifier ou remettre un document différent réinitialise les lectures d'annexes, et l'IA relit alors à neuf les annexes de ce document. |
| **14. Porte de lecture préalable à l'analyse** | Des « faits » non vérifiés inscrits dans la description ou les champs de contact d'une personne. | Une proposition touchant les champs de texte libre d'une personne est refusée tant que l'IA n'a pas lu le profil de cette personne au cours des 30 dernières minutes. |
| **15. Porte du digest** | Un contenu de dossier récupéré au coup par coup (recherches, chronologies, textes intégraux, délais) sur un dossier dont l'IA n'a pas lu le digest. | Chaque outil de contenu de dossier (chronique, chronologie, recherches, textes intégraux, contradictions, obligations, délais, correspondance, médias, institutions, étiquettes, évaluation, notes d'instruction) est refusé tant que le digest du dossier n'a pas été lu ; le refus nomme l'appel de préparation. La troisième tentative refusée sur le même dossier est consignée comme infraction aux règles. |
| **16. Porte des parties similaires** | Des personnes, sociétés ou institutions en double, créées parce qu'une variante d'orthographe n'a pas été reconnue. | Une proposition de nouvel enregistrement reçoit en réponse la liste des enregistrements existants similaires, et rien n'est enregistré. L'IA doit soit classer sous un enregistrement existant, soit confirmer explicitement que la partie est réellement nouvelle. Chaque nouvelle partie enregistrée déclenche l'étape de suivi obligatoire : rechercher et classer ses liens, recherche web comprise. |
| **17. Verrou de répétition** | La récupération répétée de données identiques, qui coûte du temps et des tokens sans apporter d'information. | Un appel qui renvoie exactement le même contenu qu'un appel antérieur est refusé. C'est le contenu qui est comparé, non l'appel : un autre paramètre donnant le même résultat est donc refusé lui aussi. Le verrou est levé lorsqu'un autre document a été remis ou présenté, lorsque le programme d'IA se reconnecte, lorsque l'IA a effectué entre-temps une autre tâche, ou lorsqu'elle a relu et confirmé ses instructions. Pour Claude, le verrou s'applique par chat ; pour ChatGPT, Qwen et Kimi, sur toutes les sessions ; le chat intégré en est exempté. |

## 5. Ce que vous en faites — exemples

Parlez à l'IA de bureau (ou au chat intégré) en langage courant ; elle choisit
elle-même les outils appropriés. Demandes typiques :

**« Que s'est-il passé dans le dossier [numéro de dossier] ? Résume
la situation actuelle et les prochaines échéances. »**
L'IA identifie le dossier,
lit l'intégralité du dossier par sections et lit les délais, puis fournit une
synthèse avec des références aux documents.
**« Rédige la réponse à l'injonction du tribunal de la semaine
dernière dans notre format d'écriture et transmets-la au traitement de
texte. »**
L'IA trouve l'injonction, lit le texte intégral, charge le format
de sortie et rédige ; le projet apparaît dans le traitement de texte
d'IRONSTICK, prêt pour votre révision et l'impression sur votre papier à en-tête.
**« Qui a dit quoi au sujet de la visite des lieux, et les
déclarations se contredisent-elles ? »**
Recherche de déclarations et
détecteur de contradictions sur l'ensemble du dossier.
**« Vérifie les numéros de TVA et de LEI de la partie adverse. »**
Contrôles
en direct auprès du service européen VIES et du registre mondial des LEI.
**« Construis une chronologie du litige et liste celles de nos
annexes qui ont déjà été déposées au tribunal. »**
Chronologie du dossier
plus listes des documents déposés et sortants avec leurs numéros
d'enregistrement.
**« Y a-t-il eu des courriels au sujet de l'expertise ? Qu'est-ce
qui était joint ? »**
Recherche de courriels avec expéditeur, objet, pièces
jointes et, sur demande, le texte du message.
**« Ouvre-moi le dossier et exporte les deux contrats en
PDF. »**
Avec la navigation activée, l'IA ouvre les écrans et livre les
fichiers.
**« Retiens pour la prochaine fois : l'avocat de la partie
adverse dépose toujours tard le vendredi. »**
Proposé pour la mémoire d'IA
partagée (rattachée au client, limitée en taille) ; une fois que vous l'avez
validé, il est disponible pour chaque session future, et vous pouvez le consulter et
le supprimer à tout moment.
**« Le projet est terminé. Donne-le à une autre IA pour contrôle :
le lire, trouver les points faibles et les contre-arguments, l'évaluer. »**
L'IA
transmet l'écriture via IRONSTICK ; un autre modèle, entraîné différemment,
l'examine d'un œil critique, et son évaluation vous revient. Un véritable
deuxième avis sur les mêmes données du dossier.
**« Consigne le travail d'aujourd'hui dans le journal quotidien. »**
Les
courriels envoyés, les écritures rédigées, les arguments élaborés et les décisions
sont inscrits dans le journal quotidien du jour ; à la session suivante, l'IA se
met au courant à partir des dernières entrées.
## 6. Le catalogue des outils

Voici les outils que met à disposition le Bridge — les mêmes pour chaque IA de
bureau connectée et pour le chat intégré. Chaque ligne indique d'abord la fonction
en français courant, puis le nom technique de l'outil, tel que l'IA le voit. Certains
noms techniques dérivent de termes allemands ou roumains (par exemple
`tagesprotokoll` = journal quotidien, `fristen` = délais,
`kalender` = calendrier, `ki` = IA, `sachverhalte`
= groupes d'affaires, `anexe` = annexes) ; la description donne la fonction.

Tous les outils sont en lecture seule, sauf si la description indique qu'ils
écrivent ou ouvrent un formulaire. Badges : Porte 1 · Date désigne la
porte du tableau des dix-sept portes ; Validation signifie que
rien ne change tant que vous n'avez pas validé dans le Moniteur de cohérence des
données ou dans un dialogue ou formulaire d'IRONSTICK ; Confirmation
signifie que l'outil n'agit qu'après votre confirmation explicite.

### Contexte de session et navigation

| Fonction | Nom technique |
| --- | --- |
| **Démarrage complet de session.** Exécute le démarrage complet de session en un seul appel (date, langue du système, contexte actuel, briefing quotidien, délais, rendez-vous, tâches de revue par les pairs ouvertes) et l'écrit dans un seul fichier de brouillon. Au premier démarrage de session de la journée, l'IA s'enquiert d'abord des décisions de justice non encore évaluées. | `session_start_to_scratch` |
| **Écran actuel.** Où se trouve l'utilisateur : écran, fil d'Ariane, client ou dossier ouvert. | `read_current_context` |
| **Langue du système** de l'installation. | `read_system_language` |
| **Date et heure actuelles** (contrôlées par NTP), pour le calcul des délais. | `get_datetime` Porte 1 · Date |
| **Instructions.** Relit à tout moment les instructions complètes et actuelles du connecteur. | `read_instructions` |
| **Confirmation des instructions.** Déverrouille le connecteur une fois que l'IA a lu les instructions et cité mot pour mot la règle 5 (interdiction d'halluciner). La confirmation expire après 60 minutes, après 2 heures sans appel, à minuit, à la reconnexion et après la compaction du contexte ; l'IA relit alors les instructions et cite une règle choisie au hasard. | `confirm_instructions` Porte 11 · Verrou d'instructions |
| **Manuel d'utilisation.** Renvoie les sections du manuel correspondant à des mots-clés en anglais ; l'IA les explique dans la langue du dialogue. Le manuel est conservé chiffré et en lecture seule dans le magasin de brouillon, où l'IA peut aussi le consulter. Chaque section contient des indications d'utilisation, des demandes suggérées et le déroulement du travail. | `user_help_request` |
| **Briefing matinal.** Le briefing structuré du jour avec identifiants de documents, numéros de dossier et marqueurs : délais, audiences, courriels non lus, documents nouvellement saisis, dossiers à activité accrue. | `get_dailybriefing` |
| **Ouvrir un écran** de l'application (requiert l'interrupteur de navigation). | `open_screen` Porte 5 · Navigation |
| **Ouvrir un enregistrement :** un dossier, un client, une personne, une institution ou un document précis (interrupteur de navigation). | `open_case` / `open_client` / `open_person` / `open_institution` / `open_evidence` |
| **Ouvrir un espace de travail :** l'assistant de dossier, au besoin entièrement préparé ; la recherche globale ; le moniteur de courriel (boîte de réception ou éléments envoyés, au besoin un message précis) ; le journal quotidien (un jour précis) ; ou l'écran de sauvegarde. Le lancement d'une sauvegarde requiert une confirmation (interrupteur de navigation). | `open_dossier` / `open_search` / `open_emailmonitor` / `open_tagesprotokoll` / `open_backup` |
| **Ouvrir un délai** dans l'écran des délais, mis en évidence (interrupteur de navigation). | `open_deadline` |
| **Ouvrir un formulaire :** les formulaires de saisie ou de modification (client, dossier, personne ou société, institution), l'écran d'affectation au dossier ou la boîte et le formulaire de saisie des documents. L'IA ouvre et préremplit ; l'utilisateur enregistre (interrupteur de navigation). | `open_new_client` / `open_new_case` / `open_new_person` / `open_new_institution` / `open_assign` / `open_capture` Validation |
| **Enregistrer une source législative :** ouvre l'écran des lois avec le dialogue d'enregistrement ouvert et l'URL préremplie ; l'utilisateur confirme (interrupteur de navigation). | `open_new_legal_source` Validation |
| **Récupérer les courriels maintenant :** récupère et trie les nouveaux courriels, comme le bouton de récupération. | `fetch_mails` |
| **Lancer une évaluation de dossier par IA** d'un dossier, après confirmation assortie d'un avertissement sur les coûts. | `request_case_assessment` Confirmation |
| **Envoyer un message dans le chat du cabinet** sur IRONSTICK SERVER au nom de l'utilisateur, après confirmation du texte exact. | `send_server_chat` Confirmation |
| **Gérer les étiquettes :** lister, ajouter, modifier ou supprimer les étiquettes colorées d'une entrée ; chaque modification requiert une confirmation. | `manage_tag` Confirmation |
| **Redémarrer les IA de bureau** pour une nouvelle connexion, après votre confirmation. | `recycle_desktop_ai` Confirmation |

### Trouver le bon enregistrement

| Fonction | Nom technique |
| --- | --- |
| **Listes des clients et des dossiers**, complètes. | `list_all_clients` / `list_all_cases` |
| **Trouver un dossier par son numéro** (même partiel). | `resolve_case_by_number` |
| **Trouver un client, une personne ou une institution par son nom** (recherche floue, tolérante aux signes diacritiques). | `resolve_client_by_name` / `resolve_person_by_name` / `resolve_institution_by_name` |
| **Dossiers impliquant une partie donnée.** | `find_case_by_party` |
| **Trouver des parties par mot-clé :** personnes et institutions dont le nom, les notes ou les champs d'analyse contiennent un mot-clé ; le point de départ lorsqu'on ne connaît qu'un fragment. | `find_party_by_keyword` |
| **Dossiers à activité accrue** (température), avec client et numéro de dossier. | `read_hot_cases` |
| **Saisi aujourd'hui ou hier :** tout ce qui a été saisi ce jour-là pour tous les clients et dossiers, sous forme de liste d'identifiants de documents avec heure, client, dossier et titre. | `get_all_fromtoday` / `get_all_fromyesterday` |

### Lire un dossier

| Fonction | Nom technique |
| --- | --- |
| **Dossier complet :** chronique avec textes intégraux. Pour les gros dossiers, le premier appel indique la taille et propose des recherches ciblées ou une livraison dans le magasin de brouillon. | `read_full_case` Porte 4 · Couverture de lecture |
| **Texte intégral du dossier vers le magasin de brouillon :** la lecture complète la plus rapide d'un gros dossier. Assemble le texte complet du dossier sans troncature, nettoie les artefacts d'OCR et l'écrit directement dans le magasin de brouillon ; l'IA ne reçoit que la référence du fichier et le lit ensuite par sections. Périmètre : tous les documents, les entrants, les sortants ou des documents choisis — la voie pour lire intégralement un document de 300.000 caractères. | `dump_case_to_scratch` Porte 4 · Couverture de lecture |
| **Préparation du dossier :** en un seul appel, le profil et l'ordre juridique du dossier ainsi que le digest de chaque document (identifiant, date, type, titre, résumé de saisie, renvois, taille du texte) ; le digest tient lieu de chronique. La réponse indique où se trouvent le profil et le digest (dans la réponse pour les petits dossiers, sinon dans des fichiers de brouillon à lire intégralement) et nomme les cinq documents les plus récents à lire en entier. Satisfait la porte de préparation ; les documents supprimés et secrets sont exclus. | `prepare_case` Porte 12 · Préparation |
| **Dernières entrées de la chronique :** un aperçu rapide ; ne compte pas pour la préparation. | `read_chronik` |
| **Dossiers et groupes d'affaires liés :** dossiers parents, enfants et du même groupe ; les groupes d'affaires d'un client tels que la carte Univers les regroupe ; les dossiers les plus fortement reliés. | `read_case_links` / `read_case_cliques` / `read_top_connected_cases` |
| **Orientation rapide sur le dossier :** chaque champ des onglets dossier et client, plus les 15 identifiants de documents les plus récents avec leurs dates de saisie. | `short_case_briefing` |
| **Dossiers d'un client** ; dossiers liés au dossier en cours. | `read_client_cases` / `read_related_cases` |
| **Tous les groupes d'affaires d'un client** en un seul appel, chacun avec ses dossiers (numéro de dossier, titre, statut, dossier parent) ; les dossiers non regroupés sont listés à part. | `list_sachverhalte` |
| **Tribunaux et autorités** impliqués dans un dossier, avec leurs adresses. | `read_case_institutions` |
| **Ordre juridique du dossier**, qui détermine la langue des documents. | `read_case_jurisdiction` |
| **Évaluation de dossier par IA** enregistrée. | `read_assessment` |
| **Chronologie du dossier :** tous les événements du dossier dans l'ordre chronologique. | `build_case_timeline` |
| **Liste des annexes d'une écriture :** les pièces qu'elle contient, chacune avec son tampon de dépôt. | `evidence_anexelist` |
| **Chaîne de numéros de courrier :** suit un numéro d'enregistrement ou de courrier à travers les documents. | `briefnummer_chain` |
| **Utilisation d'un document :** où un document a été utilisé ou référencé. | `evidence_usage` |
| **Pièces déposées au tribunal**, avec leurs numéros. | `list_submitted_evidence` |
| **Correspondance :** tous les documents entrants ou sortants d'un dossier (au besoin à partir d'une date donnée), sous forme de liste d'identifiants de documents. | `list_correspondence` |
| **Tampon(s) de dépôt** d'un document. | `evidenceidtoisstamp` |
| **Obligations de procédure ouvertes** d'un dossier, avec descriptions et marqueurs de retard ou d'urgence. | `list_open_obligations` |

### Documents et recherche de passages

| Fonction | Nom technique |
| --- | --- |
| **Texte intégral d'un document** (et, s'il existe, son texte de chat ou de transcription) ; jusqu'à 12 documents par appel. Au-delà de la limite du connecteur, le texte va en bloc dans le magasin de brouillon et ne compte comme lu qu'une fois le fichier lu intégralement. | `evidence_readfull` Porte 4 · Couverture de lecture |
| **Entrées multimédias** (photos, enregistrements) : métadonnées, localisation, transcriptions. | `read_media` |
| **Recherche de documents** par mot-clé ou par période. À son premier appel, la recherche par mot-clé demande ce qui est recherché, le périmètre et la forme de la réponse. | `search_evidence_by_keyword` / `search_evidence_by_time` Porte 15 · Digest |
| **Recherche de passages** dans le dossier (tolérante à l'OCR), qui renvoie les passages correspondants. | `search_passages` |
| **Documents d'une partie.** | `find_documents_from_party` |
| **Candidats à la contradiction** entre documents et déclarations. | `find_contradictions` |
| **Déclarations par intervenant** sur un sujet. | `who_said_what` |
| **Qui a communiqué avec qui**, et quand. | `who_with_whom` |

### Juges et décisions de justice

Cinq outils déterministes (sans IA) pour une seule question : comment un juge ou
un procureur décide-t-il — quels arguments des écritures aborde-t-il, lesquels
passe-t-il sous silence, et dans quelle mesure ses décisions sont-elles prévisibles ?
Les outils localisent et mesurent ; l'IA lit et évalue les décisions sur la base des textes intégraux. Seuls les documents entrants émanant d'un
tribunal ou d'un parquet comptent comme décisions.

| Fonction | Nom technique |
| --- | --- |
| **Décisions par juge :** chaque décision enregistrée dans laquelle une personne a siégé comme juge (président ou membre) ou agi comme procureur, dans tous les dossiers. Une décision ne compte que si la personne est nommée dans l'en-tête (composition du tribunal) ou dans le bloc de signature ; un nom figurant dans le corps du texte ne compte pas, et les greffiers ne sont pas listés. Pour chaque décision : tribunal, intitulé, rôle, composition et première phrase du dispositif, mot pour mot. | `list_decisions_by_judge` |
| **Structure d'une décision :** tribunal et section, numéro de dossier, nature, numéro et date, audience, composition, la phrase nommant les parties et l'objet, le dispositif mot pour mot, mots-clés du résultat, voie de recours, prononcé, citations de lois avec leur statut dans la bibliothèque et longueur de la motivation, chacun avec sa position en caractères dans le texte enregistré. Les éléments absents du texte sont signalés comme introuvables. | `read_decision_structure` |
| **Écritures précédant une décision :** chaque écriture déposée dans le dossier jusqu'à la date de la décision, écrite dans deux fichiers de brouillon — celui du client (documents sortants) et celui de la partie adverse (documents entrants). Seuls comptent les documents adressés à un tribunal ou à un parquet ; les lettres vers ou depuis d'autres autorités, les documents du tribunal, les preuves et les entrées de chronique sont exclus. Chaque écriture n'est prise qu'avec son document principal (courriel d'accompagnement et annexes retirés). Les documents qui ne peuvent être classés avec certitude sont listés comme non attribués, dans aucun des deux fichiers. | `read_request_and_ruling` Porte 4 · Couverture de lecture |
| **Motivation comparée aux écritures :** mesure quelle part de la motivation d'une décision correspond, en tant que texte, aux écritures du client, à celles de la partie adverse, aux deux, au texte de loi de la bibliothèque juridique, ou à aucune d'elles (la formulation propre du tribunal) ; l'exposé des positions des parties est mesuré à part. Les passages concordants sont listés avec leur taux de concordance (à partir de 70 %), du plus élevé au plus faible, dans la formulation d'origine, avec leurs positions en caractères. L'outil montre où la motivation reprend mot pour mot le texte des écritures. | `compare_ruling_with_submissions` |
| **Comparaison de documents :** compare deux documents quelconques, entre clients et dossiers, pour y repérer des blocs de texte identiques, par exemple dans des écritures de procédures différentes. Les passages concordants sont classés comme texte de loi, comme source citée en commun (un troisième document des deux dossiers) ou comme partagés uniquement par ces deux documents. La réponse invite l'IA à lire intégralement les deux documents avant d'affirmer quoi que ce soit sur un lien. | `compare_documents` |

### Liste d'évaluation des décisions de justice

Les décisions de justice sont reconnues à la saisie : outre entrant et sortant, une
case « décision de justice » que vous pouvez modifier à tout moment, et une
exécution en arrière-plan contrôle aussi les archives existantes. Les décisions
reconnues vont sur une liste d'évaluation. L'IA la traite décision par décision :
elle lit la décision et, au moyen de l'outil des écritures, les écritures des deux
parties, puis répond à une grille de questions fixe. Rien n'est enregistré sans
votre instruction expresse. Une décision ne change pas : elle n'est donc évaluée
qu'une seule fois.

| Fonction | Nom technique |
| --- | --- |
| **Décisions ouvertes sur la liste**, les plus récentes d'abord : tribunal, composition, juges et greffiers (chacun avec l'identifiant de son enregistrement, ou signalé comme pas encore dans les données maîtresses) et résultat. | `list_court_decisions_to_assess` |
| **Préparer une décision :** données d'en-tête, parts de texte mesurées de la motivation, questions d'évaluation avec la structure requise de l'analyse, et outils pour récupérer les écritures des deux parties. L'IA peut ensuite lire la décision sans charger l'aperçu de son dossier. | `prepare_decision_assessment` |
| **Enregistrer l'évaluation :** uniquement sur votre instruction expresse, uniquement lorsque la décision a été lue intégralement, uniquement avec une analyse en anglais sous sept intitulés obligatoires (arguments, droit, preuves, fondement, style, issue, caractérisation), chacun avec du contenu, et uniquement lorsque chaque juge et chaque greffier dispose d'un enregistrement dans les données maîtresses. S'il en manque un, l'IA recherche d'abord la personne dans des sources publiques et propose l'enregistrement. | `record_decision_assessment` Confirmation |
| **Évaluations enregistrées** par juge, tribunal, numéro de dossier judiciaire ou dossier, complètes et non abrégées : les vôtres et, avec IRONSTICK SERVER, celles de tous les collègues, chacune indiquant qui l'a établie. L'IA les consulte avant chaque écriture adressée à un tribunal, pour le tribunal et pour chaque juge de la composition. | `read_decision_assessments` |

Si des décisions restent à évaluer, l'outil de remise demande avant chaque
production formelle si elles doivent être évaluées maintenant, afin que le résultat
puisse encore être pris en compte, ou plus tard ; avec « plus tard », la question suit
directement après la remise. L'IA le demande aussi au premier démarrage de session de
la journée.

### Réparation OCR avec vérification par l'avocat

Lorsqu'un texte intégral enregistré s'avère tronqué ou abîmé par une exécution
d'OCR antérieure, l'IA peut le réparer, avec vous comme autorité finale. Elle demande
un nouveau scan ; vous sélectionnez les pages dans IRONSTICK (le même sélecteur de
pages que pour la saisie de documents) ; le nouveau scan est nettoyé de façon
déterministe (filigranes retirés, motifs d'OCR corrigés, espacement normalisé) et
placé dans le magasin de brouillon à côté du texte actuel de la base de données.
L'IA compare ensuite les deux versions passage par passage et retient celle qui est
correcte. Elle a pour instruction de ne réparer que les erreurs d'OCR mécaniques,
sans reformuler et sans modifier chiffres, noms ou montants. IRONSTICK vous montre
la version corrigée en entier, et elle ne remplace l'ancien texte qu'après votre
validation.

**Vérification ciblée par l'avocat.** Là où un passage appelle un regard humain, l'IA vous demande de contrôler des endroits précis plutôt que le
document entier :

- **Gros fichiers.** Pour un PDF de plus de 10 Mo ou 90 pages, l'IA nomme l'endroit exact à contrôler, par exemple « page 12, vers le
haut ».
- **Quelques endroits, non le fichier entier.** Vous ne passez pas en revue un
dossier de 200 pages. Vous ouvrez la pièce jointe dans l'entrée qu'IRONSTICK a déjà
ouverte pour vous, allez à la page indiquée et retranscrivez les mots ou chiffres
illisibles. Lorsqu'un passage est illisible à la fois dans l'ancien texte et dans le
nouveau scan, l'IA vous demande de le vérifier à l'œil : trois endroits au plus,
chacun avec sa page et sa position.
- **Retour direct dans le texte intégral.** Votre transcription est reprise
mot pour mot dans la version corrigée, passe par le même dialogue de validation, et
l'analyse se poursuit.

IRONSTICK isole les endroits
illisibles et ne vous interroge que sur ceux-là.

| Fonction | Nom technique |
| --- | --- |
| **Demander un nouveau scan OCR** du PDF original enregistré, page par page, uniquement pour les textes intégraux abîmés (vous sélectionnez les pages ; les documents secrets sont exclus). | `request_ocr_rescan` |
| **État du scan :** un contrôle unique qui renvoie l'ordre de travail complet une fois le scan prêt (les deux textes dans le magasin de brouillon). | `ocr_rescan_status` |
| **Transmission du PDF**, dernière étape d'escalade : ouvre l'entrée afin que vous ajoutiez le PDF original au chat (jusqu'à 10 Mo / 90 pages ; pour les fichiers plus volumineux, l'IA vous demande de retranscrire les endroits concernés, trois au plus). Requiert un nouveau scan préalable. | `request_pdf_handover` |
| **Soumettre le texte intégral corrigé** à IRONSTICK ; il vous est montré en entier, et seul votre enregistrement remplace le texte intégral enregistré. | `submit_corrected_fulltext` Validation |

### Courriel, calendrier et délais

| Fonction | Nom technique |
| --- | --- |
| **Courriels mentionnant un terme** (expéditeur, objet, extrait, pièces jointes). | `search_emails_mentioning` |
| **Texte intégral d'un courriel.** | `read_email_body` |
| **Entrées du calendrier**, globalement ou par dossier. | `read_kalender` |
| **Rendez-vous** d'un jour ou d'une période (audiences, réunions), audiences en premier. | `read_appointments` |
| **Tout ce qui figure dans l'écran des délais**, trié par date : délais, audiences à venir et échéances des entrées de mémoire d'IA ; filtrable par urgence ou par période. | `read_deadlines` |
| **Délais actifs** sous forme de liste compacte, globalement ou par dossier. | `read_fristen` |
| **Nouvelle entrée de calendrier :** ouvre le formulaire de calendrier prérempli (titre, date, heures, description, dossier) après un contrôle obligatoire des entrées du même jour ; rien n'est enregistré automatiquement — vous vérifiez et enregistrez. | `add_calendar_entry` Validation |

### Personnes, institutions et traces de travail

| Fonction | Nom technique |
| --- | --- |
| **Fiche d'une personne** (chaque champ de données maîtresses et d'analyse, complet) et réseau de relations d'une personne ou d'une institution ; chaque réponse commence par les dossiers de la partie. | `read_person` / `read_person_relations` / `read_institution_relations` |
| **Liens d'une partie :** toutes les personnes reliées à une personne, une société ou une institution par des relations enregistrées et des dossiers communs, les plus fortes d'abord, avec les dossiers de la partie en tête. Obligatoire pour chaque partie nommée dans une écriture. | `who_is_connected_with` |
| **Clusters du réseau de parties** (détection déterministe de communautés, comme dans la vue Univers), avec mise en évidence des groupes d'une densité inhabituelle et séparation facultative des personnes et des institutions ; et les parties les plus reliées. | `read_cliques` / `read_top_connected` |
| **Note sur un dossier partagé :** épingle une note sur le tableau d'affichage d'un dossier partagé via IRONSTICK SERVER ; elle est publiée directement et visible du propriétaire du dossier et de chaque abonné. | `send_case_note` Porte 12 · Préparation |
| **Fiche d'une institution** avec ses coordonnées. | `read_institution` |
| **Journal quotidien :** lire les derniers jours ou y chercher. | `read_tagesprotokolle` / `search_tagesprotokolle` |
| **Écrire dans le journal quotidien :** consigne le travail du jour (courriels envoyés, écritures rédigées, arguments élaborés, décisions) à votre demande. Un jour existant est complété, jamais écrasé ; les dossiers concernés sont liés. Écrit directement. | `append_tagesprotokoll` Porte 12 · Préparation |
| **Note brève** comme une entrée du journal quotidien du jour. Écrit directement. | `add_daily_note` Porte 12 · Préparation |
| **Nouvelle entrée de chronique :** ouvre le formulaire de chronique dans le bon dossier, prérempli par l'IA (titre, description, date de l'événement, heures, mots-clés) ; rien n'est enregistré automatiquement — vous complétez le formulaire (en ajoutant des images si vous le souhaitez) et l'enregistrez. | `add_chronik_entry` Validation |
| **Briefing de début de journée**, suivi séparément par IA de bureau : au premier appel de la journée, il renvoie les dernières entrées du journal quotidien et marque l'IA comme informée ; ensuite, il l'indique. | `daily_briefing` |
| **Temps de travail enregistré** par dossier et par client. | `read_time_tracking` |
| **Entrées étiquetées** dans tous les dossiers. | `read_tags` |

### Règles de travail, formats et mémoire

| Fonction | Nom technique |
| --- | --- |
| **Instructions d'IA d'un dossier :** les lister ; la lecture renvoie toujours le texte intégral. | `list_ki_instructions` / `read_ki_instruction` |
| **Toutes les instructions d'IA actives d'un dossier** en un seul appel (textes intégraux). | `read_all_ki_instructions` |
| **Inventaire des instructions d'IA** pour tous les clients et dossiers (client, dossier, identifiant d'instruction et nom de fichier ; sans textes intégraux). | `list_all_ki_instructions` |
| **Format de sortie :** les spécifications de format contraignantes. Pour les documents, l'IA nomme le type exact (écriture juridique ou simple lettre, chacune avec ou sans avocat) et reçoit le même modèle que le chat intégré, tenu à un seul endroit. | `read_output_format` |
| **Format du journal quotidien :** le format contraignant du fichier et des entrées. | `read_tagesprotokoll_format` |
| **Format des courriels au tribunal :** le format contraignant des courriels au tribunal et des paquets PDF (objet et corps du texte, listes de paquets). | `read_mailversand_format` |
| **Mémoire d'IA partagée :** rechercher des enseignements antérieurs ; proposer de nouvelles entrées (rattachées à un client, jusqu'à 1.000 caractères). Une nouvelle entrée ne prend effet qu'après votre validation. Les entrées rattachées à un dossier ne sont jamais supprimées automatiquement ; celles sans dossier le sont après un an sans utilisation, et chaque utilisation renouvelle cette année. | `memory_search` / `memory_store` Validation |
| **Entretenir les entrées de mémoire :** reformuler une entrée, déplacer ou effacer son échéance (avec un relevé des caractères utilisés et libres), ou la supprimer ; chaque modification ne prend effet qu'après votre validation. | `memory_update` / `memory_delete` Validation |
| **Export du paquet d'instructions d'IA** d'un client, via la boîte de dialogue d'export. | `export_ai_instruction` |

### Propositions soumises à votre validation

| Fonction | Nom technique |
| --- | --- |
| **Correction de données maîtresses ou nouvel enregistrement**, y compris un renommage et le type (personne physique ou morale) ; pour un nouvel enregistrement, le type doit d'abord être décidé. La proposition va au Moniteur de cohérence des données pour validation. Un nouvel enregistrement reçoit d'abord en réponse la liste des enregistrements existants similaires, et rien n'est enregistré tant que l'IA n'a pas classé sous l'un d'eux ou confirmé explicitement une nouvelle partie ; chaque nouvelle partie enregistrée déclenche l'étape de suivi consistant à rechercher et classer ses liens. | `propose_master_data` Validation Porte 16 · Parties similaires |
| **Relation** entre personnes, ou modification d'une relation existante ; même voie de validation. | `propose_relation` Validation |
| **Affecter une partie à un dossier :** exactement une personne, société ou institution, avec un motif obligatoire et des références de documents facultatives, va au Moniteur de cohérence des données. Une fois acceptée, la partie devient participante du dossier et apparaît dans les vues de clusters et de liens. Un lien existant ou un doublon en attente est signalé au lieu d'être proposé à nouveau. | `propose_case_link` Validation |
| **Texte d'analyse d'une personne** ; refusé tant que l'IA n'a pas lu le profil au cours des 30 dernières minutes. | `propose_person_analysis` Validation Porte 14 · Lecture d'analyse |
| **Contrôle d'une partie par sources publiques** sur une personne ou une société — la procédure standard pour contrôler une partie. Entrée : nom, ville, district, pays et type (personne physique ou morale). IRONSTICK exécute alors toujours les mêmes étapes : une recherche plein texte du nom dans toute la base de données (par dossier, les dix documents les plus récents avec positions de paragraphes, plus le nombre d'autres occurrences) et une liste fixe de recherches web dans la langue du pays de la partie sur Google, DuckDuckGo et Qwant, doublons supprimés. Renvoie un profil préparé avec chaque terme de recherche utilisé ; l'IA vérifie chaque résultat et chaque lien et classe les données via le Moniteur de cohérence des données. | `osint_entity` |
| **Contrôle d'une liste de noms :** rapproche un document qui contient une liste de noms — une liste de contacts de réseau social, une liste de participants ou de signatures, des mentions légales d'entreprise — de toutes les personnes et sociétés enregistrées, en un seul appel (l'ordre des mots et les prénoms composés sont gérés ; un prénom courant isolé n'est jamais retenu comme concordance, et les occurrences à un seul mot sont signalées comme ambiguës). Prend un identifiant de document, ou un dossier, auquel cas l'entrée la plus récente de ce dossier est contrôlée et nommée. Sans IA, sans écriture. | `entity_scan_evidence` |
| **Suppression ou doublon :** propose de retirer un enregistrement erroné, une étiquette ou un délai accompli (un motif dans la langue du système est obligatoire), ou de fusionner deux enregistrements en doublon. Rien n'est supprimé ni fusionné sans votre validation. | `propose_deletion` / `propose_duplicate` Validation |
| **Instruction d'IA modifiée :** propose une nouvelle version (un ajout, un fichier ou le contenu complet). IRONSTICK ouvre le dossier, vous montre une comparaison rouge/vert et n'applique la modification qu'après votre acceptation ; la décision est renvoyée à l'IA. | `update_ki_instruction` Validation |

### Magasin de brouillon pour les contenus volumineux

Un espace de travail local pour l'IA. Tout appel d'outil peut diriger son résultat
complet vers un fichier de brouillon ; l'IA ne reçoit alors que le chemin et la
taille, sans aperçu. Tout résultat dépassant la limite du connecteur (10.000
caractères ; 40.000 pour Claude Desktop et ChatGPT Desktop) y va automatiquement de
la même façon, ouvertures de jeux d'outils comprises. Les contenus volumineux ne
transitent donc dans aucune direction par la sortie de l'IA, ce qui est plus rapide,
moins coûteux et évite les erreurs de transcription ; l'IA les lit par sections dans
le magasin. Les fichiers de brouillon peuvent être transmis directement à l'outil de
remise et aux mises à jour d'instructions. Le magasin survit aux redémarrages : les
notes de l'IA, son registre d'état et les relevés de couverture de lecture sont
conservés ; les sorties d'outils des jours précédents sont supprimées à chaque
démarrage, et les fichiers ni lus ni écrits depuis 180 jours sont supprimés
automatiquement (la version finale d'une écriture après 360 jours).

**Le magasin de brouillon est chiffré.** Chaque fichier y est chiffré en
AES-256 au repos, avec la même dérivation de clé que la base de données des dossiers
et le magasin de documents. La lecture et l'écriture ne passent que par
IRONSTICK ; un fichier en clair déposé dans le magasin par une autre voie (un outil
de système de fichiers, une copie manuelle) est refusé, supprimé et signalé à l'IA
comme infraction aux règles. Les fichiers ne quittent le magasin que par le
dialogue d'export d'IRONSTICK. La base de données, le magasin de documents, le
fichier de configuration et le magasin de brouillon sont ainsi tous chiffrés en
AES-256 au repos.

**Aucun outil n'abrège son propre résultat.** Les outils de lecture des textes
intégraux de documents, des dossiers entiers, des courriels, des pages web (lois et
jugements complets), du journal quotidien, des fiches de personnes et de la chronique
livrent toujours leur contenu complet. Une règle centrale décide où il arrive : en
dessous de la limite du connecteur dans la réponse, au-dessus en bloc dans le
fichier de brouillon, si bien que l'IA n'a pas à prévoir la taille d'un résultat.

**Contrôle de fraîcheur :** IRONSTICK surveille chaque fichier de brouillon.
Dès que les données sous-jacentes changent — un nouveau document ou une nouvelle
entrée de chronique dans le dossier, une entrée de calendrier ou de journal
quotidien — ou qu'un fichier expire, son contenu est remplacé par un avis indiquant
à l'IA comment le récupérer à nouveau. Les fichiers de brouillon périmés sont
invalidés automatiquement.

| Fonction | Nom technique |
| --- | --- |
| **Outils de texte :** écrire (par portions) et lire des plages de lignes numérotées ; chercher avec numéros de ligne dans un fichier ou dans tous ; remplacer un texte exact ; insérer à une ligne ou après un repère ; supprimer ou remplacer des plages de lignes en une seule étape. | `scratch_write` / `scratch_read` / `scratch_grep` / `scratch_edit` / `scratch_insert` / `scratch_delete_lines` / `scratch_replace_lines` Porte 4 · Couverture de lecture |
| **Registre d'état de session** (clé et valeur), servant surtout à noter quel fichier est le projet principal en cours ; conservé d'un redémarrage à l'autre. | `scratch_statetracking` |
| **Plan, comparaison et décomptes :** tous les intitulés avec leurs plages de lignes ; comparaison de deux fichiers ; une copie de travail ; décomptes de mots, de lettres et de lignes. | `scratch_list_titles` / `scratch_diff` / `scratch_copy` / `scratch_countwords` / `scratch_countletters` / `scratch_countlines` |
| **Nettoyage :** normaliser l'espacement et les fins de ligne et supprimer les caractères invisibles ; créer dans un fichier distinct une copie de comparaison simplifiée (en minuscules, ou sans signes diacritiques). | `scratch_correctspace` / `scratch_correctcrlf` / `scratch_asciskeleton` |
| **Format d'écriture :** requis avant la remise de fichiers Markdown ; convertit la structure Markdown au format d'écriture (tableaux en lignes de texte, listes numérotées en « (1) », puces en « • », liens en texte). Le contenu est conservé. | `scratch_normalizemd` |
| **Lister et supprimer les fichiers de brouillon** ; les fichiers inutilisés depuis 180 jours sont supprimés automatiquement, et les enseignements durables relèvent de la mémoire d'IA. | `scratch_dirlist` / `scratch_deletefile` Porte 4 · Couverture de lecture |

### Web, registres et validation

| Fonction | Nom technique |
| --- | --- |
| **Recherche web et récupération de pages.** Chaque recherche interroge simultanément Google, DuckDuckGo et Qwant et renvoie une seule liste fusionnée sans doublons. Une page est récupérée sous forme de texte complet et lisible : le contenu principal est extrait (navigation, publicité et bandeaux de cookies retirés ; sur les pages d'article, le pied de page également). Sur les pages sans corps d'article, comme les pages d'entreprise et de contact, le pied de page est conservé, car l'adresse et les coordonnées s'y trouvent ; lorsque l'extraction ne laisserait presque rien, la page entière est livrée. Une page bloquée ou qui renvoie une erreur est retentée une fois dans le navigateur intégré, et le statut HTTP est signalé. Un appel répond en 45 secondes ; les documents volumineux ou numérisés continuent d'être traités en arrière-plan et sont livrés lors de l'appel suivant avec la même adresse. | `web_search` / `open_url` Porte 2 · Lois |
| **Article de loi isolé**, mot pour mot, par numéro de bibliothèque et numéro d'article — la voie prévue et la plus économique pour étayer une citation ; enregistre exactement cet article comme lu. | `get_legal_article` |
| **Revérifier une loi** par rapport à sa source maintenant (inchangée, mise à jour ou doublon) ; une version plus récente remplace l'entrée, y compris à l'échelle du cabinet sur IRONSTICK SERVER, où la vérification la plus récente l'emporte. | `recheck_legal_source` |
| **Chercher, récupérer et ajouter des lois.** La recherche est floue, et l'ordre juridique est un paramètre obligatoire, de sorte que les systèmes juridiques ne sont jamais mélangés. La récupération renvoie le texte de loi enregistré mot pour mot en Markdown, si bien que l'IA cite à partir de la bibliothèque vérifiée et non de la mémoire du modèle. L'IA doit signaler chaque source pertinente trouvée en ligne, sous forme de lien seulement ; IRONSTICK télécharge, convertit et vérifie lui-même le texte, et vous le libérez par la validation dans le Moniteur de cohérence des données. | `search_legal_source` / `get_legal_source` / `add_legal_source` Porte 2 · Lois Validation |
| **Inventaire de la bibliothèque et extraits :** parcourir la bibliothèque par pages (identifiant, ordre juridique, titre, date de contrôle) ; récupérer un extrait mot pour mot d'une loi par numéro de bibliothèque et plage de caractères (les résultats de recherche fournissent un appel prêt à l'emploi avec une plage élargie) ; charger une loi entière par numéro de bibliothèque. | `list_legal_sources` / `grep_legal` / `get_legal_by_lnumber` |
| **Validation** des numéros de TVA (en direct auprès du service européen VIES), des numéros EORI, des LEI, des IBAN et des numéros d'identification nationaux (neuf schémas dans sept pays). | `validate_vat_vies` / `validate_eori` / `validate_lei` / `validate_iban` / `validate_id_number` |
| **Registre du commerce :** ouvre la recherche « Trouver une entreprise » du portail européen e-Justice (BRIS) dans le navigateur intégré, pour lecture par l'IA. | `check_handelsregister` |

**Entretien de la bibliothèque et partage à l'échelle du cabinet.** Chaque loi de
la bibliothèque juridique porte son lien source et sa date de contrôle ; les entrées
non contrôlées depuis plus d'un mois sont signalées. Rejeter une loi dans le Moniteur de cohérence des données demande d'abord une confirmation. Avec IRONSTICK SERVER sur un NAS
Synology, la bibliothèque est partagée à l'échelle du cabinet : une loi vérifiée une
fois par un collègue est citée par l'IA à chaque poste, avec le même texte et la même version.

### Revue par les pairs par une seconde IA de bureau

| Fonction | Nom technique |
| --- | --- |
| **Transmettre pour revue :** confie une pièce produite par l'IA (argumentation, stratégie, écriture) à une autre IA de bureau pour un examen critique. Le texte intégral est placé dans une mémoire tampon éphémère, et une tâche y renvoie. Demande typique : « Fais vérifier cela par l'autre IA. » | `handoff_to_peer` |
| **Tâches de revue ouvertes** que l'autre IA a adressées à celle-ci (les siennes n'apparaissent jamais), avec leur contenu intégral. | `read_open_tasks` |
| **Répondre :** clôt une tâche entrante (son contenu est supprimé) et renvoie l'évaluation à l'expéditeur sous forme de nouvelle tâche, en un seul appel. | `reply_to_task` |
| **Clore sans réponse :** met fin au tour ; le contenu éphémère est supprimé. | `complete_task` |

### Transmission et remise

| Fonction | Nom technique |
| --- | --- |
| **Exporter un document** du dossier en PDF vers votre dossier Documents. | `export_pdf` |
| **Fiche personnelle :** ouvre le dialogue d'export avec la fiche personnelle PDF d'une partie (données maîtresses, implications dans les dossiers, analyse de la personne, relations ; champs renseignés uniquement). | `export_entity` |
| **Vérification des écritures :** le contrôle déterministe obligatoire d'une écriture achevée — références de documents avec enregistrements de lecture liés au document, citations de lois par rapport à la bibliothèque vérifiée, citations, numéros de dossier judiciaire au format n/nnn/aaaa, montants (concordance exacte), données maîtresses des parties, numéros personnels roumains (CNP) et IBAN (somme de contrôle), et chaque partie nommée lue et contrôlée quant à ses liens. La remise d'un document formel est bloquée sans vérification positive à jour pour l'état exact du fichier ; vérifier un autre document réinitialise les lectures d'annexes. | `verify_pleading` Porte 3 · Vérification des écritures |
| **Remise de fichier :** remet un fichier achevé via le dialogue d'export d'IRONSTICK ; un projet de texte passe d'un clic dans le traitement de texte comme modèle prêt à être déposé. N'accepte qu'un fichier du magasin de brouillon de l'application ; le contenu en ligne et les autres chemins sont refusés, de sorte que vérification, versionnement et suivi des remises répétées restent attachés à chaque remise. Si des décisions de justice de la liste d'évaluation sont encore ouvertes, il demande avant chaque écriture et chaque courriel à un tribunal ou à une autorité si elles doivent être évaluées maintenant ou plus tard. | `deliver_file` Porte 3 · Vérification des écritures Porte 7 · Contenu formel Porte 8 · Séries de versions |
| **Répéter une remise :** rouvre le dialogue d'IRONSTICK pour un fichier déjà remis et inchangé depuis, lorsque vous demandez à nouveau le même fichier ; sans portes, sans revue, sans nouvelle version. Les fichiers jamais remis, ou modifiés depuis leur remise, sont refusés et consignés comme infraction aux règles ; ils requièrent une nouvelle remise. | `redeliver_file` |

### Utilitaires

| Fonction | Nom technique |
| --- | --- |
| **Localisation et météo :** localisation approximative de l'utilisateur (pays, ville) d'après le dernier relevé de connexion ; météo actuelle d'un lieu donné. | `get_my_location` / `get_weather` |

## 7. Gardiens de la diligence — comment le Bridge contrôle le soin de l'IA

Huit **gardiens déterministes de la diligence** contrôlent avec quel soin l'IA
connectée travaille réellement. Étant de purs mécanismes de comptabilité et de
logique sur les chaînes de caractères, ils n'impliquent aucune IA et ne peuvent
pas être contournés par le modèle :

- **Gardien de la couverture de lecture.** Lorsque l'IA récupère le texte
complet d'un dossier, les fichiers de préparation d'un dossier ou un texte intégral
dépassant la limite du connecteur, le Bridge enregistre ligne par ligne quelles
plages elle a *réellement* lues, et conserve ces enregistrements d'un
redémarrage à l'autre. Tant que des lacunes subsistent, **chaque** réponse
d'outil, recherches comprises, liste les plages de lignes non lues exactes avec un
pourcentage. Une lecture complète ne peut être affirmée tant que les
enregistrements ne la confirment pas ; ce n'est qu'alors que l'IA reçoit la
confirmation unique *« COMPLETE — toutes les lignes lues »*, et la lecture est
inscrite pour la préparation du dossier.
- **Aucun aperçu.** Tout résultat dépassant la limite du connecteur (10.000
caractères ; 40.000 pour Claude Desktop et ChatGPT Desktop) est écrit en bloc dans
le magasin de brouillon ; l'IA ne reçoit qu'une note indiquant le nom du fichier, sa
taille et les deux commandes de poursuite. Rien n'est montré deux fois, et les
contenus volumineux sont lus dans le magasin de brouillon. Cela vaut pour chaque
outil, ouvertures de jeux d'outils comprises ; seuls le lecteur d'instructions et
les outils de brouillon eux-mêmes répondent directement. Aucun outil ne raccourcit
son propre résultat : en dessous de la limite, il arrive complet dans la réponse,
au-delà, complet dans le magasin de brouillon.
- **Gardien des nouvelles remises.** Si l'IA continue de corriger un fichier
de travail *après* vous l'avoir remis, chaque modification ultérieure reçoit
en réponse le rappel que vous détenez actuellement la version périmée et que le
fichier corrigé **doit** être remis à nouveau.
- **Gardien des projets non remis.** Lorsque l'IA rédige son journal quotidien,
son signal qu'elle termine, le Bridge liste nommément chaque projet versionné rédigé
au cours de la session qui n'a jamais été remis. Un travail achevé ne peut pas
rester inaperçu dans le stockage de travail de l'IA.
- **Gardien du format des courriels.** Chaque accès au contenu des courriels
porte un renvoi vers la spécification contraignante du format de courriel (objet,
corps du texte, contenu obligatoire, règles linguistiques), de sorte que l'IA se
voit rappeler la seule voie de remise correcte *avant* de rédiger un
courriel.
- **Gardien des boîtes à copier.** Chaque fois que l'IA écrit ou modifie un
fichier de travail textuel, la réponse lui rappelle que les documents parviennent à
l'utilisateur **uniquement** par l'outil de remise ; coller une lettre achevée
dans le chat sous forme de texte ou de boîte à copier contourne la mise en forme, la
vérification et le suivi des remises, et constitue une infraction aux règles. Le
seul format légitime en boîte à copier reste le courriel, tel que défini dans la
spécification du format de courriel.
- **Ancre du dossier.** Chaque réponse d'outil qui concerne un dossier porte le
numéro enregistré, le client et l'objet du dossier (porte 10), de sorte qu'un
contexte tiré d'un autre dossier est démasqué dans la même fenêtre.
- **Pilotage du niveau de modèle.** Les instructions indiquent à l'IA de
quelle classe de modèle une tâche a besoin : avant les outils d'écriture (format de
sortie, vérification, remise), elle vous demande en une phrase de faire passer le
client de bureau au modèle haut de gamme, et après la remise, elle vous indique
qu'un modèle moins coûteux suffit de nouveau. Lorsque les compteurs de propositions
révèlent un entretien du réseau des parties (deux propositions de données maîtresses
et une proposition de relation ou de lien au dossier), le Bridge ajoute, une fois par
session, l'indication que ce travail entièrement protégé par des portes n'a pas
besoin d'un modèle haut de gamme. Vous décidez ; l'IA continue de travailler.

L'exécution des outils s'effectue séparément de l'interface utilisateur au sein
de l'application, de sorte que les longues lectures de gros dossiers par l'IA ne
bloquent pas l'interface d'IRONSTICK.

## 8. Vérification des écritures — remise uniquement après preuve

Les écritures et les lettres sont rédigées en dialogue avec l'IA de bureau sur
le dossier vivant, avec le même niveau de travail et les mêmes portes que le chat
intégré d'IRONSTICK. Ce qui quitte le système est un **modèle prêt à être déposé** pour votre relecture et votre signature.
Deux contrôles précèdent chaque transmission : la vérification déterministe exposée
ici et — si vous l'activez pour le modèle d'API actif dans la configuration — la
revue **Red/Blue Team** : une passe de relecture distincte lit le projet en tant
que conseil adverse ; des constats substantiels le renvoient en retravail, deux
tours au maximum, chaque point étant analysé au fond et non repris
automatiquement. Si l'IA juge les constats infondés, elle soumet de nouveau le
fichier inchangé avec une réponse écrite à chaque constat ; le relecteur n'est pas
relancé sur un fichier inchangé, et le rapport de revue vous parvient accompagné de
ces réponses. La transmission elle-même passe par le dialogue d'export
d'IRONSTICK, d'où le projet passe d'un clic dans le traitement de texte.

**Aucune modification silencieuse après la remise.** Une fois un document
remis, une correction n'y est jamais apportée en silence : l'ancienne version
est visiblement invalidée et une nouvelle version est créée. Vos corrections
alimentent la revue.

Une écriture formelle ne peut pas quitter le système sans contrôle.
`verify_pleading`, un vérificateur déterministe (sans IA), contrôle le
projet achevé par rapport à vos enregistrements vivants et à la bibliothèque
juridique vérifiée, en **huit classes** :

- **Références de documents** — tampons de dépôt et numéros #, dans la liste des
annexes et dans le corps du texte : existence, appartenance, intégrité du tampon et
**enregistrement de lecture lié au document**. Chaque pièce citée ou jointe doit
compter comme lue pour ce document, soit récupérée intégralement, soit avec son
fichier de brouillon lu en entier ; une lecture compte pendant 2 heures, chaque
remise du même document la prolonge, et vérifier un autre document réinitialise les
lectures d'annexes. Les citations tirées d'extraits de recherche ou de mémoire
échouent à la vérification. Une ligne d'annexe peut indiquer une plage de pages
(« p. 12–15 ») ; l'obligation de lecture porte toujours sur le document
entier.
- **Citations de lois** — l'article cité doit exister dans le texte de la
bibliothèque vérifiée (tolérant aux séparateurs de milliers, exact aux limites de
mots) et doit avoir un **enregistrement de lecture** : l'IA doit avoir récupéré
cet article dans la bibliothèque au cours de cette exécution du programme. Les
articles de presse, les résumés web et la mémoire du modèle n'étayent jamais une
citation de loi et échouent à la vérification. Les sous-références citées (alinéa,
point) sont elles aussi contrôlées quant à leur existence. Une source absente de la
bibliothèque n'est pas ignorée : l'IA doit la demander, et la demande apparaît dans
**votre dialogue de consentement**. Les sources sélectionnées sont récupérées,
vérifiées et enregistrées ; celles refusées ne le sont pas, et chaque citation
ultérieure de celles-ci porte une mention visible « refusée par l'utilisateur ».
- **Citations textuelles** — chaque citation doit figurer mot pour mot dans un
document de votre fonds ou dans la bibliothèque juridique (tolérance à l'OCR).
Si elle provient d'un document d'un autre dossier, le vérificateur nomme ce
document, et l'IA ne lit alors que celui-ci, non la vue d'ensemble de l'autre
dossier. Une citation introuvable dans toute source est marquée comme contredite et
bloque la remise. Retirer les guillemets ou reformuler légèrement le passage n'y
change rien : la citation bloquée est mémorisée pour le document et reste bloquée.
Supprimer entièrement la citation est autorisé, et la remise vous indique quelles
citations ont été retirées faute de source les contenant.
- **Numéros de dossier judiciaire** au format n/nnn/aaaa, contrôlés par rapport à
vos dossiers et enregistrements.
- **Montants : concordance exacte requise.** Le chiffre doit correspondre
exactement à la forme enregistrée ; « 14.500 » là où l'enregistrement indique
« 14.500,00 » bloque la remise jusqu'à correction.
- **Données maîtresses des parties** — chaque nom utilisé doit correspondre à
l'orthographe enregistrée, lettre pour lettre, signes diacritiques compris.
- **Numéros personnels roumains (CNP) et IBAN** — validation par somme de
contrôle (un chiffre de contrôle invalide signale un numéro inventé ou mal saisi),
plus concordance avec les enregistrements.
- **Parties nommées** — chaque personne ou société nommée dans le document doit
avoir été lue (profil) et ses liens contrôlés
(`who_is_connected_with`) ; le refus nomme les deux appels et recommande
en outre le contrôle des clusters (`read_cliques`).

Chaque constat est classé comme vérifié, non vérifié ou contredit. La remise d'un
document formel est refusée sans vérification positive à jour pour l'état exact du
fichier ; **chaque modification l'annule**. Après cinq passages de vérification
en échec, le processus s'arrête, l'IA reçoit l'ordre de s'arrêter et de rendre
compte, et **vous** en êtes averti directement dans l'application. Les remises
passent exclusivement par le magasin de brouillon propre de l'application, de sorte
que vérification, versionnement et suivi des nouvelles remises restent attachés à
chaque fichier ; la remise en ligne et les autres chemins sont refusés.

## 9. Protection des données

Le Bridge transmet des **données brutes du dossier** dans
la session de votre IA de bureau, délibérément, car la rédaction d'un modèle
prêt à être déposé exige des noms, chiffres et dates réels. Tout ce que l'IA y
lit est traité dans le cadre de votre propre compte auprès du fournisseur
(Anthropic, OpenAI, Qwen ou Moonshot AI / Kimi) et selon ses conditions. Le chat
intégré, en revanche, transmet des données pseudonymisées via le routeur. La
divulgation complète, y compris ses limites, figure dans la [*IRONSTICK —
Déclaration RGPD des flux de données*](https://www.ironstick.legal/gdpr_fr.html).
**Fournisseurs gratuits d'arrière-plan.** Les fournisseurs
gratuits que vous pouvez activer dans la configuration pour les tâches
d'arrière-plan (Groq, OpenRouter, Mistral) ne sont pas utilisés par le
Bridge.
**Code d'accès.** Le Bridge respecte le verrouillage au démarrage
d'IRONSTICK : tant que le code à six chiffres de l'application d'authentification
n'a pas été saisi sur l'écran de démarrage d'IRONSTICK, chaque appel d'outil
reçoit la réponse « Application verrouillée — le code de sécurité n'a pas encore
été saisi » et aucune donnée de dossier n'est renvoyée. Saisissez le code dans
IRONSTICK, puis répétez la demande.
Version 1.0.6 — état de novembre 2026. La liste des outils reflète le Bridge
livré avec cette version ; des outils peuvent s'ajouter avec le temps.

## Annexe — Description technique complète du Bridge

Portée : version 1.0.6 — état de novembre 2026 ; plus de 200 outils répartis en 22 jeux d'outils, Model Context Protocol (MCP). Cette annexe est rédigée pour l'examen par les services informatiques et de protection des données et décrit l'architecture, chaque couche fonctionnelle, les protections, les limites et les redirections du Bridge.

### 1. Finalité et positionnement

Le Bridge relie des applications commerciales d'IA de bureau (Claude Desktop, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) à une application de gestion de dossiers juridiques IRONSTICK en cours d'exécution sur la même machine. L'IA de bureau reçoit, via le Model Context Protocol (MCP), une surface d'outils contrôlée et auto-descriptive ; chaque appel est exécuté au sein de l'application IRONSTICK sur la base de données vivante, et chaque résultat est post-traité par le Bridge avant d'atteindre le modèle. Les objectifs de conception sont : une charge de contexte permanente minimale pour le modèle, l'application structurelle de règles de travail que le seul texte d'instruction ne peut garantir, la protection du travail non enregistré de l'utilisateur, la protection des données contre les requêtes surdimensionnées ou mal dirigées, et l'absence complète de matériel de configuration lisible dans le produit installé.

### 2. Topologie des processus

Le Bridge se compose de deux processus qui coopèrent.

L'application IRONSTICK exploite un service local et protégé, joignable uniquement depuis le même ordinateur. Ce service détient le registre des outils, exécute tous les appels d'outils, applique toutes les portes et tous les post-traitements et constitue la seule référence pour ce qu'un modèle connecté peut voir et faire.

Devant chaque IA de bureau se trouve un petit exécutable natif. Il parle le protocole MCP standard vers l'IA de bureau et transmet le travail à l'application par la connexion locale protégée. Chaque IA de bureau dispose de sa propre copie de ce fichier avec son propre identifiant d'appelant ; aucun fichier d'instructions ne se trouve auprès du Bridge. L'identifiant d'appelant accompagne chaque appel d'outil comme argument interne et pilote tout le comportement propre à chaque IA. En outre, tant qu'une IA de bureau est connectée, le frontal envoie environ toutes les trois secondes un signal de présence à l'application ; celle-ci l'affiche comme indicateur « Bridge connecté » d'une durée de vie de quinze secondes, de sorte que l'utilisateur voit toujours si une IA externe est actuellement branchée.

Lors de la poignée de main d'initialisation MCP, le frontal renvoie son identité de serveur et, incorporé dans le résultat d'initialize, le texte d'instructions de début de session ; il récupère ce texte au même moment par un canal interne auprès de l'application en cours d'exécution. Si l'application est fermée, aucune instruction n'est servie, et le verrou d'instructions de l'application impose la lecture dès qu'elle tourne. Le manuel complet reste à tout moment accessible au modèle via un outil dédié.

### 3. Sécurité, licences et consentement

Le trafic entre le programme Bridge de l'IA de bureau et IRONSTICK reste sur cet ordinateur (boucle locale, protégée par jeton) ; seuls les outils web et registres accèdent à Internet. Les outils d'accès web n'atteignent que des adresses Internet publiques, de sorte qu'un modèle ne peut pas être dirigé par le Bridge pour sonder l'ordinateur ou le réseau local.

Le Bridge et les intégrations d'IA de bureau propres à chaque fournisseur sont des modules complémentaires sous licence séparée. Chacun est déverrouillé sous forme de bit de module dans la clé de licence signée de l'application client ; il n'existe pas de clé de Bridge distincte. Un module sans licence n'est ni installé ni exposé.

Une porte de consentement protège le premier accès aux données par exécution du programme pour chaque connexion d'IA de bureau : le premier appel d'outil d'une IA de bureau après le démarrage du programme ouvre une seule fenêtre d'avertissement au-dessus de l'écran actuel. Si l'utilisateur accepte, l'accès est ouvert à toutes les IA de bureau pour le reste de l'exécution ; s'il refuse, elles sont toutes bloquées pendant dix minutes, et chaque appel bloqué renvoie un message invitant l'IA de bureau à réessayer plus tard ; au bout des dix minutes, l'accès suivant rouvre la fenêtre. L'état est conservé uniquement en mémoire et n'est jamais enregistré.

Indépendamment du consentement, un verrou d'accès aux instructions garde chaque connexion de bureau : aucun outil — ouvreurs de jeux d'outils et outil d'exécution des membres compris — ne s'exécute tant que l'appelant n'a pas lu les instructions et cité mot pour mot l'interdiction d'halluciner (règle 5) au moyen de l'outil de confirmation ; seuls le lecteur d'instructions, l'outil de confirmation et l'outil de langue du système restent disponibles. La confirmation est tenue par IA de bureau et devient caduque soixante minutes après avoir été donnée, après deux heures sans appel, à minuit, à chaque nouvelle connexion et après la compaction du contexte de l'IA de bureau ; après une caducité, l'appelant doit relire les instructions et citer une règle choisie au hasard au lieu de celle qu'il connaît déjà. Sur la connexion Claude, chaque chat est un appelant distinct (les chats sont distingués au moyen des événements d'outils structurés du journal de session local de Claude, jamais du texte de la conversation) ; un chat dont le contexte a été compacté est aussitôt verrouillé, sans pénalité, jusqu'à ce qu'il ait relu les instructions ; et un chat qui accède au dossier de données avec ses propres outils de fichiers au lieu du connecteur se voit consigner une infraction aux règles. Un refus nomme les deux appels qui ouvrent le verrou, et le menu déroulant du symbole de l'IA dans l'application affiche l'état sous forme de coche verte ou de croix rouge.

Chaque fonction de lecture et d'écriture de données est validée par rapport à l'identité de propriétaire dérivée de la licence. Les enregistrements de preuves marqués secrets sont exclus sans exception de chaque fonction de lecture, de recherche, d'extraction et de tamponnage ; les enregistrements marqués supprimés sont de même invisibles.

### 4. Système d'instructions

Les consignes du modèle arrivent en trois couches, d'une spécificité strictement croissante et d'une résidence strictement décroissante.

L'instruction de base est livrée une seule fois, à l'intérieur du résultat d'initialize. Elle contient le mandat (un travail juridique fondé sur les faits, au niveau d'un collaborateur senior), les règles universelles (la langue du dialogue est la langue du système IRONSTICK ; l'ordre juridique des documents générés découle du dossier, jamais du dialogue ; discipline des dates ; aucune citation à partir d'extraits de recherche — chaque page sur laquelle l'IA s'appuie doit être ouverte et lue via open\_url, quelle que soit la recherche qui l'a trouvée ; discipline des citations et des références ; la limite de trois tentatives par appel d'outil en échec ; discipline de remise), ainsi que la description du mécanisme des jeux d'outils lui-même, y compris l'explication du champ du jeu d'outils d'origine.

Les règles de travail propres à chaque domaine ne sont pas résidentes : elles sont remises au modèle mot pour mot et à jour chaque fois qu'il ouvre le jeu d'outils correspondant, en tant que partie du contenu d'ouverture.

Le manuel complet — la base plus toutes les règles des jeux d'outils plus les annexes (parmi lesquelles le format de fichier du journal quotidien) — peut être relu à tout moment au moyen de l'outil de lecture des instructions ; l'application le fournit en direct à chaque appel, de sorte que les modifications des instructions atteignent une session en cours sans reconnexion.

Trois de ces règles sont en outre imposées structurellement plutôt que textuellement, par des portes : le verrou d'accès, la discipline des dates et la discipline des sources législatives. La lecture des instructions elle-même est la dernière règle du bloc universel : la manière de déverrouiller le connecteur n'est indiquée qu'après toutes les règles qui précèdent, de sorte qu'un modèle qui y parvient les a lues.

### 5. La surface d'outils et la couche des jeux d'outils

Pour que le choix des outils reste fiable, le Bridge n'expose pas d'emblée ses plus de 200 outils. Il expose une surface réduite d'environ trente entrées : sept outils de base (date et heure actuelles ; contexte actuel de l'interface ; langue du système ; ordre juridique du dossier ; relecture des instructions ; confirmation des instructions ; manuel d'utilisation), l'outil de remise, vingt-deux ouvreurs de jeux d'outils, l'outil d'exécution des membres et l'outil d'inventaire complet. Tout le reste n'existe que comme membre au sein des jeux d'outils.

Ouvrir un jeu d'outils est un appel d'outil ordinaire sans arguments. La réponse livre, en une seule fois : premièrement, lorsque le jeu d'outils en possède un, un bloc de contexte prégénéré de façon déterministe, calculé au moment de l'ouverture (huit jeux d'outils disposent de tels producteurs — le protocole de démarrage de session lui-même ; l'inventaire actuel des fichiers de brouillon ; les dix entrées de mémoire les plus récentes en aperçu ; les trente premières lois de la bibliothèque juridique ; la liste des dossiers chauds ; les documents enregistrés et les courriels entrants du jour ; le journal quotidien du jour ; l'instantané actuel des délais et des rendez-vous) ; deuxièmement, les règles de travail du domaine, mot pour mot ; troisièmement, les définitions complètes des outils membres avec leurs schémas de paramètres complets ; quatrièmement, une ligne de repli renvoyant à l'inventaire complet. Une défaillance à l'intérieur d'un producteur de prégénération n'empêche jamais l'ouverture.

Les membres sont exécutés au moyen de l'outil d'exécution des membres, qui prend le nom exact du membre et un objet d'arguments. Avant l'exécution, une validation de schéma légère a lieu : les champs obligatoires doivent être présents et non vides, et les paramètres entiers, numériques et booléens doivent pouvoir être interprétés comme tels ; une violation renvoie le schéma attendu au lieu d'exécuter. Un nom de membre inconnu renvoie, à titre de suggestion, le nom existant le plus proche selon la distance d'édition. La couche d'instructions limite les tentatives de correction à trois par appel en échec, après quoi le modèle doit s'arrêter et signaler l'erreur exacte.

Les jeux d'outils ne sont pas modaux ; tous les ouvreurs restent appelables à tout moment, et un outil peut délibérément être membre de plusieurs jeux d'outils. Des portes fonctionnelles suppriment des groupes entiers : lorsque la navigation dans l'interface graphique n'est pas activée par l'utilisateur, l'ouvreur du jeu d'outils de navigation et tous ses membres sont absents de chaque liste et de chaque réponse. L'outil d'inventaire complet liste chaque membre avec un objet d'une ligne et son jeu d'outils de rattachement, et n'existe que comme solution de repli ; les descriptions des jeux d'outils sont le routeur principal. Au total, les vingt-deux jeux d'outils portent plus de 340 entrées de membres pour plus de 200 outils distincts.

Le coût de contexte mesuré de cette organisation : la configuration initiale (instruction de base plus liste d'outils réduite) représente environ dix mille tokens ; une seule ouverture de jeu d'outils ajoute entre environ neuf cents et sept mille cinq cents tokens selon le jeu d'outils, avant son contenu de prégénération variable.

### 6. Format de définition des outils

Chaque définition d'outil se compose de quatre parties. La description porte la finalité de l'outil, ses mandats de comportement et ses renvois — et rien d'autre. Le schéma d'entrée porte chaque paramètre avec sa propre description, y compris les valeurs par défaut, les formats, les indications d'exclusion mutuelle et les mandats propres à chaque paramètre ; les instructions d'utilisation des paramètres se trouvent exclusivement ici. Le champ de sortie décrit, avant tout appel, exactement ce que renvoie l'appel, y compris les ordres de tri, les marqueurs et les formes d'erreur, afin que le modèle puisse juger de l'adéquation sans appels d'essai. Le champ du jeu d'outils d'origine nomme le jeu d'outils auquel l'outil appartient principalement, avec une valeur réservée qui marque les outils de base figurant toujours dans la liste de premier niveau ; un membre rencontré à l'intérieur d'un autre jeu d'outils indique ainsi où se trouvent d'autres outils de sa famille, et chaque ouverture de jeu d'outils porte une ligne explicative précisant que le modèle n'est jamais enfermé dans le jeu d'outils ouvert.

Tout le texte destiné au modèle est en anglais. Les définitions d'outils sont générées à partir d'une source unique et contrôlées automatiquement quant à leur cohérence, y compris la concordance entre le jeu d'outils d'origine de chaque outil et les listes de membres des jeux d'outils. Les limites numériques déclarées dans les schémas d'outils sont imposées dans les fonctions d'exécution, de sorte qu'un maximum annoncé est un maximum réel.

### 7. Mécanismes d'exécution universels

Les mécanismes suivants s'appliquent à l'ensemble de la surface d'outils et sont mis en œuvre de façon centralisée, non outil par outil.

Redirection vers le brouillon à la demande : chaque outil accepte un paramètre supplémentaire nommant un fichier de brouillon ; lorsqu'il est renseigné, le résultat complet est écrit dans ce fichier et le modèle ne reçoit que le chemin et la taille — aucun aperçu. Les contenus volumineux ne transitent ainsi jamais par le flux de tokens du modèle, dans aucun des deux sens, et le chemin est directement utilisable partout où un chemin source est accepté.

Protection contre le débordement : tout résultat dépassant la limite du connecteur — dix mille caractères, une constante centrale unique, portée à quarante mille (le quadruple de la valeur standard) pour Claude Desktop et ChatGPT Desktop — est automatiquement écrit dans un fichier de brouillon généré. Le modèle ne reçoit qu'une note indiquant la taille totale et le nombre de lignes, le nom du fichier, l'assurance explicite que rien n'est perdu, les deux commandes de poursuite (lecture par plage ; recherche de motif dans le fichier) et l'interdiction expresse de relancer l'appel — aucun aperçu, afin que les contenus volumineux soient lus dans le magasin de brouillon. La seule exception est le lecteur d'instructions, dont le paquet arrive toujours complet ; les ouvreurs de jeux d'outils sont détournés comme tout autre résultat. Aucun outil ne raccourcit son propre résultat — la limite du connecteur est le seul endroit où la taille est décidée. Les résultats au-delà de dix mégaoctets ne sont pas détournés mais reçoivent en réponse une instruction de restriction nommant les filtres applicables, puisque même le magasin de brouillon plafonne là la taille des fichiers. Sont exemptés du détournement les outils de lecture du brouillon eux-mêmes (plafonnés en interne ; les détourner créerait une récursion) et les appels qui ont déjà demandé une redirection vers le brouillon.

Porte de la date : tout outil qui écrit dans IRONSTICK est refusé aux appelants externes tant que cet appelant n'a pas récupéré la date et l'heure actuelles au cours des trente dernières minutes. Le refus nomme le remède — récupérer l'heure, puis répéter l'appel à l'identique. La fenêtre est tenue par IA de bureau, délibérément courte afin qu'une nouvelle conversation ne puisse hériter d'une ancienne récupération et que les passages de minuit soient détectés. Les appelants internes à l'application ne sont pas concernés. Cela existe parce que les modèles externes dateraient sinon les enregistrements d'après leur période d'entraînement et non d'après la date réelle.

Porte des lois : l'accès web aux lois et aux normes est structurellement refusé tant que la bibliothèque juridique interne n'a pas été consultée ; le refus renvoie à la procédure de la bibliothèque. Toute source législative néanmoins récupérée sur le web doit être signalée à la bibliothèque au moyen de l'outil d'enregistrement — la couche d'instructions qualifie l'omission de manquement à un devoir, et les résultats touchant des sources juridiques portent un marqueur à des fins d'auditabilité.

Blocage ferme de la navigation : huit écrans sont déclarés protégés — les quatre formulaires de saisie (saisie de documents, saisie de documents liée à un dossier, saisie de la chronique du dossier, saisie de client), le formulaire de création de dossier, le formulaire d'affectation d'institutions/de personnes et l'éditeur de texte. Tant que la fenêtre principale de l'utilisateur affiche l'un d'eux, chaque fonction de navigation dans l'interface graphique et d'export est refusée de façon centralisée, pour les appels directs comme pour l'exécution des membres, avec un message qui nomme l'écran protégé, interdit la navigation et enjoint au modèle de répondre avec les données dont il dispose et de ne proposer l'ouverture qu'après que l'utilisateur a terminé et enregistré. Un modèle ne peut donc jamais détruire un travail non enregistré de l'utilisateur en changeant d'écran. L'outil d'ouverture de pages web est exempté de ce blocage, puisqu'il ne fait pas naviguer l'application.

Offre de navigation : les résultats des quelque quarante outils dont la sortie décrit un objet que l'on peut ouvrir dans l'interface graphique — un dossier, une personne, une institution, un client, une preuve précise, un courriel, des entrées de calendrier ou des délais — reçoivent une ligne ajoutée proposant au modèle d'offrir à l'utilisateur d'ouvrir l'objet directement dans IRONSTICK, en nommant l'appel de navigation exact. Lorsque les arguments de l'appel contiennent l'identifiant de l'objet, la proposition est concrète ; pour les résultats de recherche et de liste, elle se réfère à l'identifiant d'un résultat. La ligne exige explicitement l'accord de l'utilisateur avant de naviguer, sauf si la demande de l'utilisateur était déjà une commande d'affichage/d'ouverture. L'offre n'est ajoutée qu'après le traitement du débordement, et seulement lorsque le résultat n'est pas une erreur, que la navigation est activée et que le blocage ferme de la navigation n'est pas actif — le blocage l'emporte toujours sur la proposition.

Propagation de l'appelant : l'identité de l'appelant accompagne chaque exécution et pilote l'état propre à chaque IA — le briefing de travail quotidien est suivi par IA de bureau, les listes de tâches de revue par les pairs excluent les propres tâches de l'appelant, et le journal des appels attribue chaque ligne.

Journaux d'appels : chaque programme Bridge tient à côté de lui un journal local indiquant l'heure, le nom de l'outil, la réussite ou l'échec et la taille de la réponse, jamais le contenu. Un second journal de diagnostic, plus détaillé, dans le dossier de données, est désactivé par défaut. Lorsqu'il est activé pour un dépannage (analyse des parcours, optimisation des jeux d'outils), il enregistre une ligne par appel d'outil pour toutes les IA connectées — horodatage, appelant, nom effectif de l'outil (pour l'exécution des membres, le membre interne), les paramètres de l'appel (trois cents caractères au plus chacun), la taille du résultat mesurée avant tout détournement pour débordement, la durée d'exécution et un indicateur d'erreur. Il peut être activé ou désactivé sans redémarrage, est automatiquement réduit dès qu'il dépasse deux mégaoctets, et est destiné à être désactivé ensuite.

Repli des signes diacritiques et des écritures : chaque recherche par mot-clé, recherche de motif et comparaison dans l'ensemble du Bridge neutralise la casse et les signes diacritiques pour les onze langues du système, y compris le i turc avec et sans point (remplacé avant la mise en minuscules, puisqu'il en changerait sinon la longueur), les variantes de lettres cyrilliques et les ligatures latines ; le repli préserve les positions là où des positions sont indiquées.

Conventions de résultat : les échecs sont renvoyés sous forme de texte commençant par un préfixe d'erreur et signalés comme erreurs dans le résultat MCP ; le modèle a pour instruction de corriger et de réessayer trois fois au plus, puis de s'arrêter et de signaler. Les marqueurs structurés et auto-descriptifs incorporés dans les résultats (pour les opérations de mémoire, les portes et assimilés) sont stables et documentés dans les champs de sortie correspondants.

Gardien de la couverture de lecture : lorsqu'un modèle récupère une extraction du dossier complet ou la remise dans le brouillon du lecteur de dossier complet, le Bridge enregistre à la ligne près quelles plages du fichier d'extraction ont réellement été lues. Tant que des plages non lues subsistent, chaque réponse d'outil réussie — recherches, correspondances de motifs, tout — porte les plages de lignes non lues exactes accompagnées d'un pourcentage de lecture ; une lecture complète ne peut donc être affirmée tant que les enregistrements ne la confirment pas. Une fois le fichier entièrement lu, les rappels cessent et la lecture par plage suivante confirme une fois que toutes les lignes ont été lues, ce qui met fin à l'obligation de lecture pour ce fichier. Sont suivis les extractions de dossiers complets, les fichiers de tête et de digest de l'outil de préparation de dossier et chaque texte intégral de document détourné vers le magasin de brouillon ; les lectures partielles d'autres résultats redirigés restent légitimes et silencieuses. L'état de couverture est persisté à côté du magasin et survit aux redémarrages de l'application, et un fichier lu jusqu'au bout est inscrit pour la préparation du dossier — la lecture reste valable même après que le nettoyage au démarrage a supprimé le fichier.

Gardien des nouvelles remises : après une remise de fichier réussie dont la source se trouve dans le magasin de brouillon, un fichier marqueur placé à côté du magasin enregistre le nom remis et l'heure (les remises transmises sous forme de contenu en ligne sont elles aussi enregistrées sous leur nom de remise). Chaque modification, écriture ou normalisation ultérieure d'un fichier qui y est enregistré reçoit en réponse le rappel que l'utilisateur détient la version remise périmée et que le fichier corrigé doit être remis à nouveau sous un nouveau numéro de version. La réponse de remise elle-même récupère en outre l'état actuel de la couverture de lecture auprès de l'application par un point de terminaison interne qui n'est pas un outil, et signale une remise effectuée malgré des plages non lues.

Gardien des projets non remis : l'entrée du journal quotidien — le signal de clôture du modèle — liste nommément chaque fichier de travail versionné écrit par le modèle au cours de la session qui n'a jamais été remis, avec l'instruction de remettre maintenant l'artefact achevé ; un travail qui n'existe que dans le magasin de brouillon n'atteint jamais l'utilisateur.

Gardien du format des courriels : chaque réponse des outils de lecture et de récupération de courriels porte le renvoi fixe selon lequel l'instruction contraignante de mise en forme et de remise des courriels — boîte à copier pour l'objet, boîte à copier pour le corps, section des destinataires, contenu obligatoire, règles linguistiques — provient de l'outil de spécification du format de courriel, à récupérer avant de construire tout courriel et à suivre à la lettre.

Exécution en arrière-plan : les outils de données et d'analyse s'exécutent séparément de l'interface utilisateur au sein de l'application, avec leur propre registre d'outils et leurs propres connexions à la base de données ; la partie interface ne fait qu'acheminer, appliquer les portes et post-traiter. Les longs accès à de gros dossiers ne bloquent donc pas l'interface utilisateur. Si la partie en arrière-plan s'arrête, l'exécution se poursuit dans la partie interface et la partie en arrière-plan est relancée à la prochaine occasion. Les outils qui ont besoin de l'interface utilisateur — navigation, dialogues de confirmation, navigateur intégré, récupération du courrier et outils de proposition soumis à validation — s'y exécutent toujours.

### 8. Portes d'interaction

Trois outils répondent délibérément à leur premier appel par une question au lieu d'un résultat ; dans chacun d'eux, la réponse littérale « unknown » est toujours valable et jamais sanctionnée.

La porte de remise : l'outil de remise de fichiers, appelé sans la déclaration de formalité, ne remet rien et demande si la remise relève de l'une des quatre catégories d'artefacts formels — écriture juridique, courriel au tribunal, entrée de chronique, entrée de journal quotidien — ou d'aucune d'entre elles. Répondre par « non » déclenche la remise immédiate — mais l'affirmation est contrôlée quant au contenu : un détecteur déterministe inspecte le fichier, et un contenu ayant la forme d'une lettre ou d'une écriture (formules d'appel et de politesse dans six langues, bloc destinataire, marqueurs juridiques, bloc d'identité) refuse la déclaration d'informalité et journalise la tentative ; un tel contenu n'a aucune voie informelle. Répondre par une catégorie formelle renvoie, toujours sans remettre, l'instruction de mise en forme contraignante pour exactement cette catégorie ; seul l'appel répété portant l'indicateur de confirmation selon lequel le fichier a été vérifié par rapport à cette instruction remet effectivement. Un gardien des séries de versions refuse en outre la première remise sous un nouveau radical de nom de fichier tant qu'une série versionnée déjà remise portant le même numéro de dossier existe — un document ne peut pas être renommé pour remettre à zéro son compteur de versions ; un document réellement différent exige une déclaration consciente et journalisée. Cette porte s'exécute dans l'application elle-même ; le frontal ne fait que transmettre l'appel. Les documents et les lettres ne parviennent jamais à l'utilisateur sous forme de texte de chat ou de boîtes à copier — chaque accès en écriture à un fichier de travail textuel porte ce rappel, et le seul artefact légitime en boîte à copier reste le courriel, conformément à son outil de format.

La porte de recherche : la recherche centrale de preuves, à son premier appel, ne cherche rien et pose trois questions — quel type d'élément est recherché (document entrant, document sortant, preuve avec document joint, déclaration/transcription, note de chronique, ou unknown), la portée lorsqu'un identifiant de client est présent (ce dossier uniquement, tous les dossiers du client, ou unknown — la liste des dossiers du client étant jointe à la question), et la forme de réponse souhaitée. Les formes de réponse sont : une liste d'identifiants épurée (la valeur par défaut recommandée ; les résultats sont ensuite ouverts un par un au moyen du lecteur de preuves), des résultats compacts avec le contexte de la correspondance, ou le résultat complet écrit dans un seul fichier de brouillon.

La porte du dossier complet : le lecteur de dossier complet, à son premier appel, ne charge rien et indique la taille réelle du dossier — le nombre de preuves et le volume de contenu cumulé approximatif des titres, descriptions, textes intégraux des documents et transcriptions — puis demande au modèle de choisir entre des outils de recherche ciblés et un appel répété avec l'argument de remise dans le brouillon, qui écrit le contenu complet du dossier, normalisé par OCR, dans le magasin de brouillon et ne renvoie que la référence du fichier.

La porte de vérification : pour les écritures formelles, l'outil de remise exige en outre une attestation récente du vérificateur d'écritures déterministe. Ce vérificateur analyse le fichier de brouillon achevé selon huit classes d'affirmations — les références de preuves dans la liste des annexes et dans le corps du texte (tampons et numéros, y compris la provenance des citations liée au document : chaque pièce citée ou jointe doit compter comme lue pour ce document — récupérée intégralement ou son fichier de brouillon lu jusqu'au bout ; une lecture compte pendant deux heures, chaque remise du même document prolonge ses pièces citées de deux heures, et vérifier ou remettre un document de radical différent réinitialise les lectures d'annexes ; une ligne d'annexe peut indiquer une plage de pages, l'obligation de lecture porte toujours sur le document entier), les citations de lois par rapport à la bibliothèque vérifiée (un article absent du texte de loi vérifié constitue un constat contredit ; la citation exige en outre une provenance de lecture — chaque lecture dans la bibliothèque est enregistrée par exécution de l'application avec les numéros d'articles effectivement renvoyés, et un article cité sans un tel enregistrement de lecture constitue un constat contredit, de sorte que les articles de presse, les résumés web et la mémoire du modèle ne peuvent jamais fonder une norme ; les sous-références citées telles que l'alinéa et le point sont contrôlées quant à leur existence dans la zone de texte de l'article ; une source absente de la bibliothèque bloque jusqu'à son intégration ou son refus), les citations textuelles — chacune doit être retrouvée intégralement dans les textes intégraux de l'ensemble du fonds ou dans la bibliothèque juridique ; si elle provient d'un document d'un autre dossier, le vérificateur nomme ce document, et seul celui-ci doit être lu, pas la vue d'ensemble de l'autre dossier ; une citation introuvable dans toute source est contredite et bloque la remise, une citation dont seuls les guillemets ont été retirés ou dont la formulation a été légèrement modifiée reste bloquée, et les citations entièrement supprimées sont signalées à l'utilisateur lors de la remise —, les numéros de dossier judiciaire au format n/nnn/aaaa, les montants selon une règle de concordance exacte (la forme exacte enregistrée), les données maîtresses des parties lettre pour lettre, signes diacritiques compris, les numéros personnels roumains (CNP) et les IBAN par validation de somme de contrôle, et les parties nommées — chaque personne ou société du registre des entités nommée dans le document doit avoir été lue (profil) et contrôlée quant à ses liens pour ce document, le refus nommant les deux appels et recommandant le test de clique. Les constats sont classés vérifiés, non vérifiés ou contredits ; tout constat contredit ou toute loi manquante non résolue entraîne un verdict bloquant. L'attestation est liée à l'état exact du fichier — toute modification l'annule — et après cinq passages de vérification en échec, le processus s'arrête, enjoint au modèle de s'arrêter et de rendre compte, et avertit l'utilisateur directement dans l'application.

La porte de consentement pour les sources législatives : une source législative signalée par le modèle n'est plus intégrée silencieusement. Les demandes sont rassemblées dans un dialogue de consentement unique dans l'application — source, ordre juridique, IA demandeuse — où les entrées cochées sont récupérées, vérifiées et enregistrées immédiatement et les entrées non cochées sont refusées ; une source refusée transforme ses citations ultérieures en mentions visibles « non vérifiée par décision de l'utilisateur » au lieu de blocages silencieux. Le moniteur de données ne porte ensuite plus les lois que pour le cycle de révision périodique.

La règle de remise exclusivement depuis le magasin : l'outil de remise n'accepte qu'un chemin source situé dans le magasin de travail de l'application ; le contenu en ligne et les chemins extérieurs au magasin sont refusés pour tout type de fichier. Ainsi, l'attestation de vérification, le suivi des nouvelles remises, le versionnage et la couverture de lecture restent attachés sans exception à chaque artefact remis.

La relance sur les décisions de justice en attente : s'il reste des décisions non évaluées sur la liste d'évaluation, l'outil de remise ne remet pas d'emblée une écriture ni un courriel à un tribunal ou à une autorité, mais indique le nombre de décisions en attente — celles qui concernent ce dossier ou ses tribunaux, avec leurs ID — et exige la réponse de l'utilisateur : évaluer maintenant ou plus tard. « Maintenant » suspend la remise et renvoie l'ordre de travail (évaluer, lire les évaluations du tribunal et de la formation, réviser le document, le vérifier à nouveau et le remettre) ; « plus tard » remet et ajoute au résultat la question de relance obligatoire. La question revient à chaque remise formelle tant que la liste n'est pas vide.

### 9. Démarrage de session et cadrage

L'ouverture du jeu d'outils de démarrage de session exécute en une seule fois l'intégralité du protocole de démarrage et l'écrit dans un fichier de brouillon fixe et nommé ; la réponse directe ne renvoie que l'ancre de date, la langue du système et le contexte actuel de l'interface graphique, et le modèle lit le reste — entrées de mémoire échues, briefing quotidien, délais, rendez-vous, tâches de pair ouvertes et index des dix dernières entrées du journal quotidien — en une seule lecture du brouillon. Les membres de ce jeu d'outils réexécutent des éléments isolés à la demande.

L'outil de date et d'heure répond par une seule ligne (date, heure, fuseau horaire, jour de la semaine, synchronisés par NTP lorsque c'est possible, sinon horloge du système) et porte le mandat permanent selon lequel chaque tour de dialogue commence par la date actuelle et les dates ne sont jamais devinées. L'outil de contexte de l'interface graphique indique quel écran de la fenêtre principale de l'application est ouvert, avec le fil d'Ariane ainsi que le client et le dossier ouverts. L'outil de langue du système renvoie l'identifiant de langue qui régit le dialogue et les listes transversales aux dossiers ; l'outil d'ordre juridique renvoie, par dossier, l'ordre juridique qui régit les documents générés et la terminologie, est obligatoire avant tout travail documentaire et prescrit de demander à l'utilisateur lorsqu'il n'est pas défini. L'outil de briefing matinal renvoie le briefing structuré du jour avec identifiants et marqueurs, afin que le modèle puisse agir sur chaque élément ; l'outil de briefing de travail suit, par IA de bureau, si cette IA a déjà été informée aujourd'hui, et ne renvoie les entrées récentes du journal quotidien qu'au premier contact de la journée.

### 10. Le magasin de brouillon

Le magasin de brouillon est le dossier de travail du modèle pour tout ce qui est volumineux. Il offre l'écriture avec possibilité d'ajout pour un assemblage par morceaux ; la lecture par plages numérotées par ligne, dont les numéros correspondent directement aux éditeurs fondés sur les lignes ; le remplacement exact de texte avec exigence d'unicité, une nouvelle tentative tolérante aux espaces et aux guillemets typographiques qui exige toujours l'unicité, et un repli prescrit vers localiser-et-copier en cas de toute autre non-concordance ; l'insertion par numéro de ligne ou après un repère ; la suppression de plages de lignes ; le remplacement atomique de plages de lignes comme opération de restructuration sûre ; la recherche de motifs insensible à la casse et aux signes diacritiques dans un fichier ou dans tous, avec un plafond de cinquante résultats et des lignes de contexte facultatives ; un plan markdown qui associe les titres à des plages de lignes sans lire le fichier ; une liste du répertoire ; la copie ; une différence ligne à ligne entre deux fichiers qui masque les lignes communes ; une normalisation orientée vers la remise qui aplatit le markdown structurel selon les conventions des écritures, protège les références, complète les références de preuves courtes jusqu'à sept chiffres et normalise les fins de ligne ; la normalisation des espaces ; le nettoyage des fins de ligne et des caractères invisibles ; des copies de comparaison simplifiées (en minuscules, ou sans signes diacritiques), toujours vers un fichier cible séparé ; des compteurs de mots, de lettres et de lignes ; et la suppression.

Un registre d'état léger retient des notes clé-valeur pour la session en cours — avant tout, quel fichier est le projet principal actuel — avec une sémantique de lecture, d'écriture et d'effacement, et survit aux redémarrages de l'application.

Cycle de vie : le magasin est durable et survit aux redémarrages ; les propres notes du modèle, le registre d'état, les métadonnées des fichiers et la comptabilité de la couverture de lecture sont conservés, tandis que les extractions d'outils des jours précédents sont purgées à chaque démarrage et que les fichiers non touchés depuis cent quatre-vingts jours sont supprimés (la version finale d'une écriture après trois cent soixante jours). Chaque accès par n'importe quel outil de brouillon — y compris une simple lecture — remet à zéro l'horloge de suppression de ce fichier ; une simple apparition dans la liste du répertoire ne le fait pas. La couche d'instructions oblige le modèle à supprimer ses fichiers de tâche à la fin d'une tâche et à transférer plutôt les enseignements durables dans le système de mémoire.

### 11. Le système de mémoire

La mémoire d'IA persistante est un carnet partagé entre les chats par toutes les IA connectées et par l'assistant intégré à l'application. Une entrée contient au plus mille caractères — les descriptions du jeu d'outils et des outils exigent une compression à l'essentiel absolu et le découpage des contenus plus volumineux — et est rattachée au minimum à un client ou à un dossier (avec un lien vers un dossier, le client est dérivé et corrigé automatiquement) et, facultativement, à une preuve, un courriel, une entité ou une institution, tous validés. Les entrées doivent être rédigées dans la langue du système IRONSTICK, quelle que soit la langue du dialogue, et il est interdit au modèle d'utiliser ses propres fichiers de mémoire privés pour la connaissance des dossiers, puisque ceux-ci n'atteignent ni l'IA pair ni l'utilisateur. Une échéance facultative donne à une entrée le caractère d'un délai : les entrées échues et en retard apparaissent en premier dans le protocole de démarrage de session et dans les vues des délais de l'application.

La recherche peut être filtrée selon n'importe lequel des identifiants liés et selon l'échéance (tout, exactement aujourd'hui, ou une fenêtre de dix jours autour d'une date donnée), renvoie les entrées les plus récentes d'abord, avec vingt résultats par défaut et cinquante au maximum, et marque les entrées de carnet rédigées par l'utilisateur comme strictement en lecture seule pour l'IA. La mise à jour remplace le texte et/ou déplace, définit ou efface l'échéance ; tout ce qui n'est pas fourni reste inchangé. Une mise à jour dont le texte dépasse la limite est rejetée avec une indication de capacité nommant la longueur soumise, la limite, l'occupation actuelle de l'entrée et le reste disponible ; chaque mise à jour de texte réussie indique de même l'occupation et le reste ; dans les deux cas, dès qu'il reste moins de trois cents caractères libres, la réponse ajoute la recommandation permanente soit de retravailler l'entrée entière, soit de créer une entrée supplémentaire et de laisser un renvoi dans l'ancienne. La suppression est irréversible et refuse les entrées de carnet de l'utilisateur et les entrées de tâche. L'enregistrement, la mise à jour et la suppression d'une entrée ouvrent chacun une fenêtre de validation dans l'application ; la modification ne prend effet qu'après l'approbation de l'utilisateur. L'entretien est conçu pour les procédures de longue durée : les entrées rattachées à un dossier ne sont jamais supprimées automatiquement. Les entrées sans dossier sont supprimées après un an sans utilisation ; chaque entrée renvoyée par une recherche en mémoire et chaque mise à jour renouvelle cette année, puisque le nettoyage mesure l'âge par rapport à la plus récente de la création et du dernier accès. Les entrées de carnet de l'utilisateur n'expirent jamais automatiquement.

Les données maîtresses, les personnes, les relations et les documents n'ont pas leur place dans la mémoire : les descriptions les orientent vers les outils de proposition et vers la saisie de documents.

### 12. Délais, rendez-vous et calendrier

Les outils de délais livrent les délais actifs soit de façon compacte (titre, date d'échéance, jours restants, dossier, les entrées marquées secrètes étant exclues), soit avec des descriptions par entrée et des marquages explicites de retard et d'urgence (urgent signifiant dix jours ou moins), ainsi qu'une forme récitative classée par urgence avec des filtres de période (tout, groupé par criticité, critiques uniquement, bientôt échus, aujourd'hui, cette semaine, la semaine prochaine, ou une date précise). L'outil de rendez-vous récite un jour ou une période en plaçant d'abord les audiences — les audiences importées du portail, puis les audiences du calendrier, puis les autres entrées du calendrier. Le lecteur de calendrier liste les entrées globalement ou par dossier, avec une plage de dates facultative.

L'outil de saisie dans le calendrier n'écrit jamais : il ouvre le formulaire du calendrier de l'application prérempli avec le titre, la date, les heures, la description et un lien facultatif vers le dossier, et l'utilisateur complète et enregistre. Sa description impose un contrôle obligatoire des doublons avant chaque appel : lire d'abord le calendrier du même jour, comparer uniquement par date en ignorant les heures, et, en cas d'entrée similaire, la montrer à l'utilisateur et lui demander s'il s'agit du même événement, l'outil n'étant appelé qu'après que l'utilisateur a confirmé une nouvelle entrée.

### 13. Le journal quotidien

Les outils du journal quotidien écrivent et lisent le journal quotidien transversal aux dossiers. L'ajout, sur instruction de l'utilisateur, vise un jour (par défaut aujourd'hui, la date étant récupérée au moyen de l'outil d'heure), complète toujours un jour existant avec un séparateur et n'écrase jamais, lie les dossiers concernés au moyen d'une liste de dossiers, et attend le contenu sous forme de markdown propre dans le style défini dans l'annexe des instructions. Un outil de note ajoute une seule ligne d'événement dans le journal quotidien du jour, avec une référence de dossier facultative. L'outil de format renvoie le format de fichier contraignant du journal quotidien. La lecture s'effectue par date, par plage ou des plus récents aux plus anciens, avec option de texte intégral et limitation à un dossier ; la recherche est une recherche par mot-clé insensible aux signes diacritiques dans les titres et les textes intégraux, avec date, titre et extrait de contexte pour chaque résultat. Les deux formes de liste affichent dix entrées par défaut et trente au maximum. L'ouverture du jeu d'outils livre déjà le journal quotidien du jour en entier, avec une note indiquant combien d'autres entrées existent pour les deux dernières semaines.

### 14. Accès aux dossiers

L'identification d'un dossier s'effectue par numéro de dossier, par nom d'une partie impliquée (tolérant aux signes diacritiques, couvrant l'adversaire, le demandeur, le titre et le client — obligatoire chaque fois que l'utilisateur nomme une partie sans numéro, puisque de nombreux dossiers ne portent aucun numéro), et au moyen de la liste des dossiers du client. Les procédures connexes proviennent de la hiérarchie des dossiers sous forme d'entrées parents, enfants et du même groupe.

Chaque document que lit l'IA porte une indication de provenance : les documents entrants émanant de la partie adverse ou d'une autorité sont signalés comme devant être examinés de manière critique, les documents sortants comme reflétant le point de vue du client. Cela vaut aussi bien pour le Bridge que pour le chat intégré.

L'outil d'aperçu rapide renvoie en un seul appel chaque champ de l'onglet dossier, chaque champ de l'onglet client, un rôle de portail lié facultatif et les quinze derniers identifiants de preuves avec leurs dates de saisie — destiné à l'orientation avant tout accès au texte intégral. Le lecteur de chronique renvoie la chronique d'un dossier des entrées les plus récentes aux plus anciennes, de façon compacte et sans textes intégraux, avec des filtres de date et une limite pouvant aller jusqu'à cinquante entrées, et constitue la réponse rapide désignée à la question « que s'est-il passé en dernier » — il ne compte pour rien dans la préparation du dossier.

La préparation du dossier est à la fois un outil et une porte. L'outil de préparation livre en un seul appel la tête (profil et ordre juridique) et le digest de chaque document — identifiant, date, type, titre, le résumé établi lors de la saisie, les renvois et la taille du texte intégral — qui tient lieu de chronique. La réponse commence toujours par une note indiquant où se trouvent la tête et le digest (en ligne lorsque la réponse entière reste sous la limite du connecteur, sinon sous forme de deux fichiers de brouillon qui doivent être lus jusqu'au bout) et les cinq documents les plus récents à lire intégralement. La porte de préparation refuse ensuite aux appelants externes deux niveaux de production sur un dossier : une note ou une entrée sur un dossier (journal, note quotidienne, entrée de chronique, note de dossier) tant que le profil, l'ordre juridique, le digest et les cinq entrées de chronique les plus récentes (notes sans PDF ni transcription ; images autorisées) n'ont pas été lus intégralement — de sorte qu'une série continue d'entrées de chronique respecte les dernières, sans imposer la lecture de documents lourds pour une simple note ; un jugement sur le dossier (vérification d'écriture, transmission, export) en outre tant que chaque document cité ou joint n'a pas été lu intégralement. Les lectures sont comptabilisées par IA de bureau dans un enregistrement conservé, valables trois jours ou jusqu'au prochain document entrant du dossier ; les documents sortants et les enregistrements de preuves n'invalident jamais une lecture. Le même enregistrement alimente le menu déroulant du symbole de l'IA. Un troisième niveau, inférieur, garde le contenu même du dossier : chaque outil de contenu de dossier — chronique, chronologie, recherches par mot-clé, par passage et par période, textes intégraux, contradictions, déclarations, obligations, délais, calendrier, correspondance, utilisation, pièces déposées, chaînes de courriers, listes d'annexes, tampons, médias, institutions, étiquettes, évaluation et notes d'instruction — est refusé pour un dossier dont l'appelant n'a pas lu le digest, le refus nommant l'outil de préparation ; la troisième tentative refusée sur le même dossier est consignée comme infraction aux règles. Les compteurs de préparation sont remis à zéro à chaque lecture des instructions et à chaque démarrage de session.

La lecture complète d'un dossier est protégée par la porte du dossier complet. L'extraction dans le brouillon est la voie complète la plus rapide : elle assemble tout le texte du dossier au sein de l'application, sans rognage, normalise les anomalies d'OCR (espaces répétés, mélanges de fins de ligne, espaces insécables, traits d'union conditionnels, caractères de largeur nulle), l'écrit directement dans le magasin de brouillon et ne renvoie que la référence avec des statistiques ; les très gros dossiers sont découpés en fichiers partiels numérotés. Des filtres de portée limitent l'extraction au sens entrant, sortant ou aux deux, et une liste d'identifiants de preuves extrait exactement ces enregistrements — la voie désignée pour lire intégralement un très gros document, le dossier étant dérivé de la preuve.

Le lecteur de preuves est la base obligatoire de toute affirmation de fond : il charge un enregistrement avec le texte intégral extrait de son document (complet et non tronqué ; au-delà de la limite du connecteur, il arrive en bloc dans le magasin de brouillon) et, le cas échéant, le texte intégral du chat ou de la transcription (couvrant les conversations de messagerie ainsi que les transcriptions téléphoniques, d'audition, d'interrogatoire et d'audience), plus le résumé qualifié, la description et les métadonnées, qui sont déclarés ne pas remplacer le texte intégral. Si aucune des sections de texte intégral n'apparaît, il n'existe aucun texte extrait et le modèle ne doit faire aucune affirmation de fond sur l'enregistrement. Une liste de jusqu'à douze identifiants séparés par des virgules lit plusieurs enregistrements en un seul appel. Un outil d'inventaire des médias indique l'existence, le type, la date et la taille des pièces jointes image, audio et vidéo d'un enregistrement ou d'un dossier, en précisant explicitement que le contenu des médias n'est pas lisible sous forme de texte et que cet outil existe pour qu'un enregistrement ne comportant que des médias ne soit pas classé à tort comme vide.

Les étiquettes sont présentées comme des post-it libres de l'utilisateur sur les enregistrements de preuves — le texte est l'information, la couleur n'a pas de signification fixe, et un enregistrement étiqueté est déclaré comme un fort marqueur de pertinence. Trois modes livrent une vue d'ensemble globale avec les nombres et les enregistrements référencés, toutes les étiquettes d'un dossier, ou une recherche textuelle dans les textes des étiquettes, avec un filtre de portée séparant les étiquettes personnelles de celles liées aux dossiers. Les groupes d'affaires listent tout le paysage des dossiers d'un client sous forme de groupes avec des dossiers imbriqués, dossiers parents et enfants compris. L'évaluation de dossier enregistrée peut être récupérée par dossier.

### 15. Recherche dans le dossier

La recherche centrale de preuves attribue des scores sur l'ensemble des champs des preuves, les textes intégraux extraits des documents et le contenu des transcriptions, les requêtes à plusieurs mots étant combinées de façon conjonctive, indépendamment des signes diacritiques et avec un bonus pour les expressions ; les résultats sont classés par pertinence sans exposer de valeurs de score, chaque résultat indique quel champ l'a déclenché, la valeur par défaut est de quinze résultats et le maximum de trente, et la forme de réponse suit le choix fait à la porte de recherche. La recherche de passages découpe les documents et les transcriptions en fenêtres de paragraphes et de phrases et renvoie les passages les mieux concordants avec leur référence — elle localise l'endroit d'un texte où figure quelque chose, et pas seulement l'enregistrement — avec une correspondance tolérante à l'OCR qui franchit les erreurs de saisie, un bonus pour les expressions et une portée limitée à exactement un dossier ou à tous les dossiers d'exactement un client (l'instrument désigné pour les questions du type « X a-t-il jamais, où que ce soit » ; jamais au-delà d'un client), avec huit passages par défaut et vingt au maximum. Un outil de plage de dates liste les preuves entre deux dates. Le chercheur dédié de correspondance émanant d'une partie est obligatoire lorsque l'utilisateur demande des documents provenant d'une partie précise ou adressés à celle-ci : il apparie la partie, avec tolérance aux signes diacritiques, aux enregistrements d'implication, filtre par sens (vers moi, de moi, ou les deux), exclut les chats et les transcriptions, masque par défaut les captures d'écran faites soi-même tout en en indiquant le nombre, et classe les plus récents d'abord — expressément distingué de la recherche par mot-clé, qui renverrait aussi des enregistrements se bornant à mentionner la partie.

### 16. Outils d'analyse déterministes

Ces outils calculent à partir des enregistrements sans aucune intervention de l'IA. La chronologie renvoie tous les éléments d'un dossier classés par date d'événement décroissante avec référence, horodatage, type d'enregistrement et titre, avec trois cents éléments par défaut et cinq cents au maximum. Le collecteur de contradictions ne juge délibérément pas : il rassemble jusqu'à cent vingt éléments candidats (soixante par défaut), facultativement filtrés sur une entité, avec référence, date, participants et contenu bref, et laisse au modèle le jugement ainsi que les lectures de texte intégral qui s'ensuivent. L'outil « qui a dit quoi » trouve chaque élément dans lequel une personne apparaît — comme participant, dans le titre ou le texte, ou dans le libellé d'une transcription — indépendamment des signes diacritiques, en marquant la source de chaque résultat, avec quarante résultats par défaut et cent au maximum. L'outil de réseau des participants compte quelles personnes et entités apparaissent ensemble dans les mêmes éléments, globalement ou par dossier, facultativement centré sur une entité. L'outil des obligations liste les éléments ouverts marqués comme délais par date d'échéance, avec le nombre de jours, les descriptions, les références et le marquage retard/urgence.

Cinq autres outils déterministes servent à caractériser des juges et des procureurs individuels ; seuls les documents entrants émanant d'un tribunal ou d'un parquet comptent comme décisions. Le listeur de décisions renvoie chaque décision dans laquelle une personne a siégé comme juge ou est intervenue comme procureur, dans tous les dossiers, en ne comptant qu'un nom figurant dans l'en-tête (composition de la juridiction) ou dans le bloc de signature — un nom dans le corps du texte ne compte pas, et les greffiers ne sont jamais listés. Le lecteur de structure décompose une décision en juridiction, section, numéro de dossier, nature, numéro et date, audience, formation, la phrase nommant les parties et l'objet, le dispositif mot pour mot, les mots-clés d'issue, la voie de recours, le prononcé, les citations de lois avec leur statut dans la bibliothèque et la taille de la motivation, chacun avec sa position en caractères, en signalant ce qui est absent comme introuvable. Le collecteur d'écritures écrit chaque écriture déposée dans le dossier jusqu'à la date de la décision dans deux fichiers de brouillon — les documents sortants du client et les documents entrants de la partie adverse — en se limitant aux documents adressés à un tribunal ou à un parquet, chacun avec son seul document principal (courriel d'accompagnement et annexes retranchés), et liste comme non attribué ce qui ne peut être classé ; ses fichiers emportent l'obligation de lecture. La comparaison de la décision mesure quelle part de la propre motivation de la juridiction concorde, en tant que texte, avec les écritures du client, celles de la partie adverse, les deux, le texte de loi de la bibliothèque, ou rien (la propre formulation de la juridiction), mesure séparément l'exposé des positions des parties, et liste les passages concordants avec leur taux de concordance à partir de soixante-dix pour cent, du plus élevé au plus faible, dans leur formulation d'origine avec les positions en caractères. La comparaison de documents confronte deux documents quelconques, tous clients et dossiers confondus, classe les passages concordants comme texte de loi, source citée commune ou partagés uniquement par ces deux-là, et ouvre sa réponse sur la consigne de lire intégralement les deux documents avant d'affirmer quoi que ce soit sur un lien.

Une liste d'évaluation transforme ces mesures en une connaissance durable des tribunaux et des juges. Chaque fiche marquée comme décision de justice — cochée par l'utilisateur lors de la saisie, préremplie par la reconnaissance ou trouvée par le traitement d'arrière-plan dans le fonds existant — est mise en file avec des données d'en-tête déterminées de manière déterministe : tribunal, formation de jugement et composition, juges et greffiers avec leurs ID de données de base, numéro, date et résultat. L'IA traite la liste une décision à la fois ; l'outil de préparation fournit les mesures, les questions d'évaluation avec la forme obligatoire et les outils pour la décision et les écritures, et libère la décision pour la lecture sans exiger la vue d'ensemble de son dossier. L'enregistrement est refusé tant que l'utilisateur n'a pas expressément donné son accord, que la décision n'a pas été lue entièrement, que l'analyse en anglais ne porte pas exactement les sept titres dans l'ordre fixe et avec un contenu, ou qu'un juge ou un greffier n'a pas d'ID de données de base. Sont enregistrés les données d'en-tête, l'affectation au dossier et au client, les mesures et l'analyse ; une nouvelle version des questions permet une réévaluation sur place. Avec l'IRONSTICK SERVER, les évaluations voyagent avec le réseau de personnes et de sociétés du cabinet : chaque poste tient sa propre évaluation par décision, que lui seul modifie, et l'outil de lecture renvoie intégralement les évaluations de tous les postes pour un juge, un tribunal, un numéro de procédure ou un dossier propre, avec à chaque fois l'indication de qui a évalué.

La famille du suivi des dépôts est déterministe par rapport aux écritures enregistrées : l'outil d'utilisation indique, pour une preuve, quelles annexes elle contient physiquement et dans quelles écritures elle a elle-même été déposée (avec date et numéro de rôle, tous dossiers confondus), ou, pour un dossier, le rapport des lacunes listant les éléments jamais déposés ; le listeur de preuves déposées renvoie, pour chaque écriture enregistrée, les identifiants joints ainsi que l'ensemble total dédoublonné, et il est obligatoire avant de composer la liste des annexes d'une nouvelle écriture, avec la réserve documentée que seules les annexes jointes de façon structurelle sont couvertes. La chaîne des numéros d'enregistrement trouve, à partir d'un numéro de courrier ou de tous les numéros figurant dans un document, chaque document partageant ce numéro, dans l'ordre chronologique — le déroulement documenté d'une procédure administrative. Le listeur d'annexes résout les annexes physiquement contenues dans un document, y compris le tampon de dépôt déterministe de chaque annexe ; l'outil de tampon résout tout identifiant de preuve en son tampon de dépôt déterministe (plusieurs fichiers enregistrés donnent plusieurs tampons ; un enregistrement sans fichier enregistré donne un marqueur vide explicite). Les deux outils porteurs de tampons interdisent d'inventer des tampons — ceux-ci doivent toujours être récupérés.

### 17. Réparation OCR

Un parcours d'escalade en quatre étapes répare les textes intégraux enregistrés ruinés, et son utilisation comme substitut commode de lecture est explicitement exclue. La demande de nouveau scan demande à l'application de repasser à l'OCR le PDF d'origine enregistré ; l'utilisateur sélectionne les pages dans IRONSTICK, et le modèle a pour instruction d'en informer l'utilisateur en une phrase et d'attendre. L'outil d'état doit être appelé une seule fois lorsque l'utilisateur indique que les pages ont été choisies — les boucles d'interrogation sont interdites — et, lorsque tout est prêt, il renvoie l'ordre de travail accompagné de deux fichiers de brouillon contenant le nouveau scan et le texte actuel de la base de données. La règle de comparaison prescrit au modèle de ne faire que des corrections mécaniques de l'OCR, jamais de reformulation, les chiffres, les noms et les montants étant conservés à l'identique. Là où un endroit est illisible dans LES DEUX sources, le modèle peut demander à l'utilisateur une vérification visuelle avant de soumettre — trois points au maximum par document, l'enregistrement étant ouvert à l'endroit exact et l'endroit désigné avec précision (« page 7, deuxième paragraphe — le montant ? ») ; lorsque la navigation est désactivée, l'enregistrement et la page sont nommés dans le chat à la place. L'outil de soumission remet le fichier de brouillon corrigé à l'application, qui le montre à l'utilisateur dans une fenêtre modale ; seul l'enregistrement par l'utilisateur remplace le texte de la base de données, et rien n'est enregistré automatiquement. La dernière escalade, la demande de remise du PDF, ouvre l'enregistrement et fait demander par le modèle à l'utilisateur de glisser personnellement le PDF d'origine dans le chat — le Bridge ne fournit délibérément aucune aide au chemin, refuse fermement lorsqu'aucun nouveau scan n'a précédé, et refuse les PDF de plus de dix mégaoctets ou de plus de quatre-vingt-dix pages ; le modèle lit ensuite le PDF visuellement, construit la version corrigée dans le magasin de brouillon et la soumet par la même porte de validation. En cas de refus pour cause de taille ou de nombre de pages, le processus ne s'arrête pas : la solution de repli par transcription ouvre tout de même l'enregistrement, et le modèle demande à l'utilisateur d'ouvrir le PDF via la pièce jointe et de retranscrire mot pour mot les passages concernés (« page X, vers le haut, il devrait être écrit … — veuillez le retranscrire exactement ») — trois endroits au maximum, repris mot pour mot dans la version corrigée ; toute lacune restante est déclarée ouvertement. Au lieu de renvoyer le document entier pour un traitement manuel, l'avocat ne vérifie que les endroits qui ne peuvent être résolus automatiquement.

### 18. Personnes, institutions, clients et propositions de données

Les outils d'identification trouvent les clients, les personnes et les institutions à partir d'un fragment de nom, avec tolérance aux signes diacritiques ; un chercheur par mot-clé parcourt les noms, les notes et les champs d'analyse lorsqu'on ne connaît qu'un fragment. Un contrôle de liste déterministe confronte un document contenant une liste de noms à toutes les personnes et sociétés enregistrées, désigné par identifiant de preuve ou par dossier — l'entrée la plus récente du dossier est alors analysée et nommée dans la réponse. Sur les connexions Claude et ChatGPT, le contrôle des parties accepte à l'avance jusqu'à deux autres parties et les recherche en arrière-plan pendant que la partie en cours est traitée ; les résultats sont conservés trente minutes et l'ordre de la porte reste inchangé. Les outils de réseau listent tous ceux qui sont liés à une partie par des relations explicites et des dossiers communs, les cliques de l'ensemble du réseau des parties par détection déterministe de communautés (comme dans la vue Univers de l'écran des personnes, avec mise en évidence des groupes d'une densité inhabituelle et une séparation facultative des personnes et des institutions en couches), ainsi que les parties les plus liées ; chaque réponse relative à une partie commence par le bloc des dossiers auxquels la partie est liée. Le lecteur de profil renvoie chaque champ de données maîtresses et d'analyse, complet et non tronqué. Les lecteurs de profil renvoient le profil de l'entité avec analyse et relations, toutes les relations d'une personne dans les deux sens envers les personnes et les institutions, le profil de l'institution et les institutions formellement liées à un dossier. Le lecteur de saisie du temps indique le temps de travail mesuré passivement (chaque consultation de page durant jusqu'à la suivante, plafonnée à trente minutes, la dernière étant comptée pour une minute) sous forme de vue d'ensemble des totaux et des principaux dossiers, clients et jours, ou sous forme de ventilation jour par jour d'un dossier, sur une plage de dates ou une fenêtre des derniers jours, de sept jours par défaut.

L'IA ne peut pas écrire directement dans les données maîtresses. Deux outils de proposition placent les constats dans le moniteur de cohérence des données de l'application en tant qu'éléments à valider : la proposition de données maîtresses (uniquement après que l'utilisateur a confirmé dans le chat que le constat doit être classé) vise une entité ou une institution existante — identifiée d'abord par son nom — ou décrit un nouvel enregistrement par son nom et ses champs, avec une liste de champs autorisés dans laquelle les numéros d'identification des sociétés et des personnes partagent un même champ, seuls les champs étayés étant autorisés, et des références de preuves facultatives ; la proposition de relation décrit une relation entre deux personnes identifiées ou entre une personne et une institution, avec exactement une contrepartie, une catégorie obligatoire, une justification facultative et des références facultatives au dossier, au client et aux preuves. Une proposition peut aussi renommer un enregistrement, en définir le type (personne physique ou morale), modifier la catégorie d'une relation existante, proposer une suppression (d'un enregistrement, d'une étiquette ou d'un délai accompli) avec un motif obligatoire dans la langue du système, ou proposer deux enregistrements comme doublons ; un nouvel enregistrement n'est accepté qu'une fois le type décidé dans le dialogue, et une proposition touchant la description ou les coordonnées d'une personne est refusée tant que l'appelant n'a pas lu ce profil au cours des trente dernières minutes. Dans les deux circuits, l'enregistrement ne change que lorsque l'utilisateur accepte la proposition dans le moniteur. Une proposition de nouvel enregistrement reçoit d'abord en réponse la liste des enregistrements existants similaires — appariés de façon souple, rien n'est enregistré — et l'appelant doit soit classer sous l'un d'eux, soit confirmer explicitement, par paramètre, que la partie est réellement nouvelle ; une correspondance stricte est redirigée vers l'enregistrement existant. Chaque nouvelle partie enregistrée renvoie une étape de suivi obligatoire ordonnant à l'appelant de rechercher et de classer les liens de la partie, recherche web comprise. Un troisième outil de proposition affecte une partie à un dossier : exactement une entité ou une institution, un motif obligatoire et des références de preuves facultatives deviennent un élément de validation de lien au dossier dans le même moniteur ; l'acceptation écrit le lien de participant sur lequel reposent les vues des cliques et des liens, tandis qu'un lien existant, un doublon en attente ou un rejet antérieur est signalé au lieu d'être proposé à nouveau. L'application compte en outre les propositions par appelant : après deux propositions de données maîtresses enregistrées et une proposition de relation ou de lien au dossier, elle considère la session comme un entretien du réseau des parties, ajoute une fois l'indication que ce travail entièrement protégé par des portes n'a besoin d'aucun modèle haut de gamme et — dans le chat intégré à l'application — maintient l'exécution sur le niveau de modèle intermédiaire. Des processus d'arrière-plan indépendants alimentent le même moniteur : un extracteur de données dédoublonné à la source et une analyse de normalisation périodique qui propose des fusions et des reclassements selon le modèle à trois catégories (personne physique ; personne morale : toute entité collective autre qu'un individu, une inscription au registre du commerce primant sur la propriété publique ; institution : organe de l'État sans inscription au registre) — sans jamais fusionner automatiquement.

### 19. La bibliothèque juridique

La bibliothèque contient des textes de loi complets sous forme de fichiers markdown, avec un numéro d'enregistrement interne par loi. L'outil de liste parcourt l'inventaire page par page (identifiant, ordre juridique, titre, nature, nom de fichier, date du dernier contrôle ; cinquante par défaut, cinq cents au maximum) et fonctionne en lecture seule. L'outil de recherche est obligatoire avant toute recherche internet d'une norme : il apparie soit par désignation dans le titre et la description, soit par passage cité avec une tolérance floue (environ soixante pour cent des mots suffisent et les terminaisons des mots sont tolérées), exige l'ordre juridique tiré du dossier, classe les correspondances de titre bien au-dessus des correspondances de contenu (une correspondance de titre compte pour neuf dixièmes, chaque résultat de contenu pour un dixième, trois extraits au plus par fichier), et renvoie pour chaque résultat le numéro d'enregistrement, le nom de fichier, de courts extraits avec leurs positions exactes en caractères et un appel d'extrait mot pour mot tout prêt dont la plage est déjà élargie — d'au moins cinq cents caractères au-delà de l'extrait — afin que le modèle récupère lui-même la formulation qui fait foi au lieu de se fier à l'extrait. L'outil d'extrait renvoie le contenu mot pour mot d'une loi entre deux positions en caractères, désigné par numéro d'enregistrement, borné au fichier, précédé d'une note indiquant que la plage peut être ajustée et que la loi entière peut être chargée, les résultats surdimensionnés étant automatiquement détournés vers le magasin de brouillon ; la correspondance des chiffres dans les recherches de lois applique des règles de limite qui tolèrent la notation à point des milliers des portails officiels. Les lois entières peuvent être chargées par nom de fichier ou par numéro d'enregistrement, les gros fichiers étant automatiquement détournés. L'outil d'enregistrement est le canal de signalement obligatoire pour toute loi trouvée sur le web ouvert : seuls le lien, l'ordre juridique ainsi qu'un titre et une phrase facultatifs sont soumis ; un processus d'arrière-plan récupère, convertit, enregistre et annonce la source dans le moniteur de données, et le modèle lui-même ne convertit jamais rien. Un cycle de révision de la bibliothèque suit la date du dernier contrôle de chaque source. Le rejet d'une loi dans le moniteur de données exige une confirmation.

Un outil de revérification contrôle à la demande une loi par rapport à sa source et indique inchangée, mise à jour ou doublon ; une récupération plus récente reprend l'entrée, et sur IRONSTICK SERVER la vérification la plus récente l'emporte, quel que soit celui qui a enregistré la loi en premier. Les lois entières dépassant la limite du connecteur arrivent dans le magasin de brouillon et n'enregistrent rien comme lu ; la provenance provient de l'outil d'article.

### 20. Validateurs et registres

Des outils de vérification déterministes couvrent : l'IBAN (format, longueur propre au pays, somme de contrôle) ; les numéros nationaux d'identité personnelle, d'assurance et fiscaux selon neuf schémas dans sept pays (Roumanie, Suisse, Allemagne, Autriche, France, Italie, Espagne) au moyen de chiffres de contrôle, avec un mode ciblé par schéma et un mode automatique qui teste tous les schémas et indique ceux qui sont valides ; les identifiants de TVA européens (contrôle hors ligne du format du pays d'abord, puis le service en direct officiel de l'Union, renvoyant les données de la société publiées lorsque l'État membre les fournit) ; les numéros EORI auprès du service de validation en direct de l'Union ; les identifiants d'entités juridiques (somme de contrôle d'abord, puis le registre mondial pour le statut et le nom) ; et, séparément, un outil de registre du commerce qui ouvre la recherche « Trouver une entreprise » du portail européen e-Justice (BRIS) dans un navigateur intégré pour lecture par le modèle . Chaque validateur renvoie un résultat concret et motivé — valide avec détails, invalide avec l'aspect défaillant, introuvable, ou service injoignable avec son statut — jamais un simple oui ou non, de sorte qu'un numéro réellement erroné se distingue toujours d'une panne. La couche d'instructions rend obligatoire l'exécution du validateur correspondant avant qu'un tel numéro n'entre dans un document produit ou révisé. Le même jeu d'outils porte l'outil de localisation approximative de l'utilisateur (pays, ville et adresse publique d'après le dernier instantané de connexion, explicitement pas une source d'ordre juridique) et un outil météo sans garantie.

### 21. Accès au web

Deux outils atteignent l'internet ouvert, tous deux présentés comme des compléments aux propres capacités web de l'IA de bureau, avec l'instruction explicite de les utiliser directement lorsque l'IA n'a pas d'accès web propre, et l'interdiction de les utiliser pour des données relatives aux dossiers. Chaque recherche interroge simultanément Google, DuckDuckGo et Qwant et renvoie une seule liste fusionnée, sans doublons, de résultats titrés et liés destinés à être suivis avec l'ouvreur de pages. L'ouvreur de pages récupère exactement une URL publique au moyen d'un pipeline par étapes que la description énumère intégralement, afin que le modèle n'abandonne jamais prématurément : une requête de navigateur standard avec gestion des redirections et compression ; les pages qui exigent JavaScript ou qui ne répondent pas à la requête standard sont rendues dans un navigateur intégré jusqu'à l'apparition du contenu ; conversion PDF exacte à la page utilisant la couche de texte de chaque page et l'OCR uniquement pour les pages numérisées, de sorte que les documents mixtes fonctionnent ; et conversion des formats bureautiques et textuels en texte lisible. La sortie est du markdown, complet : le contenu principal est extrait (navigation, publicités et bandeaux de cookies retirés), les pages sans corps d'article conservent leur pied de page parce que l'adresse et les coordonnées y figurent, et là où l'extraction ne laisserait presque rien, c'est la page entière qui est livrée. Un appel répond en quarante-cinq secondes ; un document volumineux ou numérisé continue d'être traité en arrière-plan et est livré immédiatement lors de l'appel suivant avec la même adresse. Les portails législatifs sont refusés tant que la bibliothèque n'a pas été consultée, conformément à la porte des lois. Lorsqu'un site web exige une confirmation avant de libérer son contenu, IRONSTICK ouvre la page dans une fenêtre dédiée ; l'utilisateur y confirme, et le travail sur la page se poursuit.

### 22. Navigation dans l'interface graphique et exports

Toute la navigation est soumise à une activation par l'utilisateur au moyen d'un interrupteur ; sans celui-ci, le groupe entier n'existe pas. Les outils de navigation ouvrent, dans la fenêtre principale de l'application : un dossier (au besoin sur son onglet de chronique ou d'évaluation), la liste des dossiers d'un client, une personne, une institution (toutes deux mises en évidence avec le détail ouvert), une entrée de preuve (bonne page de chronique, mise en évidence), la préparation du dossier de plaidoirie (avec une variante entièrement automatique réservée au souhait explicite de l'utilisateur d'obtenir un PDF complet), le journal quotidien (au besoin le détail d'un jour précis), le moniteur de courriel (au besoin le détail d'un courriel précis), la recherche globale avec une requête lancée (réservée au souhait explicite ; les réponses dans le chat utilisent à la place la recherche interne), la zone de sauvegarde avec un lancement immédiat de sauvegarde, et tout écran nommé figurant dans la liste canonique des écrans. Les dialogues d'export couvrent la liste des clients, la liste des délais, l'aperçu des dossiers d'un client, le dossier de plaidoirie en deux types de documents et la carte, ainsi que la construction du paquet d'IA du client. Tous les outils de navigation sont soumis au blocage ferme et sont les cibles des offres de navigation.

### 23. Rédaction, formats et remise

Le jeu d'outils de rédaction lie la production de documents à des spécifications récupérées. L'outil de format de sortie renvoie l'instruction de génération contraignante pour la catégorie d'artefact demandée — pour les écritures, différenciée en écriture juridique et lettre simple, chacune sous forme avec représentation par avocat et sans représentation, l'ordre juridique, la langue et la date du dossier étant résolus directement dans l'instruction, avec des espaces réservés que le modèle remplit à partir des données du connecteur ; l'outil de format d'envoi de courriels renvoie la spécification contraignante pour les envois au tribunal avec remise séquentielle des paquets. Les deux doivent être suivis à la lettre. Chaque IA de bureau remet une écriture markdown achevée par le dialogue de remise, qui peut l'ouvrir directement dans le traitement de texte d'IRONSTICK ; rien n'est enregistré tant que l'utilisateur n'enregistre pas. L'outil de saisie de chronique ouvre le formulaire de chronique prérempli dans le bon dossier, sans rien enregistrer lui-même.

La remise de fichiers à l'utilisateur passe exclusivement par l'outil de remise, que l'application exécute elle-même. Il n'accepte qu'un chemin source dans l'espace de travail temporaire — le contenu en ligne et les autres chemins sont refusés —, lit lui-même le fichier, de sorte que rien n'est ressaisi par le modèle, et le transmet à la boîte de dialogue d'exportation d'IRONSTICK ; de là, l'utilisateur l'enregistre ou envoie un projet de texte en un clic dans le traitement de texte. Il n'existe aucun dossier de remise ni aucun chemin dont le modèle aurait connaissance. Le modèle versionne lui-même les noms de fichiers, un nouveau numéro par remise ; le résultat indique les versions du radical déjà remises et la plus élevée, et avertit si le numéro choisi n'est pas le plus élevé. La remise a lieu une fois par tâche, à la fin, jamais pour des états intermédiaires, et passe d'abord les portes d'interaction et de vérification.

### 24. Revue par les pairs entre IA

L'outil de transmission confie une pièce produite à l'autre IA de bureau : le contenu va dans une grande mémoire de courte durée, un enregistrement de tâche y renvoie, l'instruction (plafonnée à mille caractères) indique ce que le pair doit faire, et le modèle demande ensuite à l'utilisateur de déclencher le pair dans l'autre application. L'outil de boîte de réception liste les tâches ouvertes adressées à l'appelant — les siennes n'apparaissent jamais — avec identifiant, mission et contenu complet, facultativement filtrées par client ou par dossier. L'outil de réponse clôt une tâche (en supprimant son contenu de courte durée) et renvoie simultanément l'évaluation sous forme de nouvelle tâche à l'expéditeur d'origine ; l'outil d'achèvement clôt sans renvoi. La lecture et l'écriture du brouillon sont membres de ce jeu d'outils pour le traitement du contenu échangé.

### 25. Fichiers d'instructions d'IA

Pour chaque dossier, l'utilisateur peut enregistrer des fichiers d'instructions que le modèle doit consulter. Le listeur affiche les instructions d'un dossier avec identifiant, nom de fichier, taille, date de téléversement et extrait, sans textes intégraux ; l'inventaire global liste chaque instruction de tous les clients et dossiers ; le lecteur individuel renvoie une instruction non rognée par son identifiant numérique, avec une option permettant d'acheminer le contenu brut vers le magasin de brouillon à l'octet près pour une transmission directe ; le lecteur groupé renvoie toutes les instructions d'un dossier en un seul appel, avec la même option de brouillon. Les deux sorties de liste sont automatiquement détournées lorsqu'elles sont surdimensionnées. L'outil de mise à jour propose une version modifiée par exactement l'une de trois voies — un fragment à ajouter (la voie privilégiée pour les ajouts, l'application assemblant elle-même le résultat et le modèle ayant interdiction de reproduire le contenu existant), un chemin source vers une nouvelle version complète sur le disque, ou le nouveau contenu complet en ligne — et l'application montre la modification à l'utilisateur sous forme de différences ; seule une approbation explicite l'adopte, l'issue (approuvée, refusée ou en attente) est renvoyée, et un état en attente interdit un nouvel envoi. L'export de paquet construit l'ensemble complet d'instructions et de compétences d'un client et ouvre le dialogue d'export.

### 26. Intégrations compagnes en dehors de la surface d'outils

Un compagnon côté client complète le Bridge sans faire partie de la surface MCP : pour Claude Desktop et ChatGPT Desktop, un bouton distinct de la configuration crée un plugin de compétence (des compétences reflétant le modèle de travail fondé sur les jeux d'outils et l'outil d'exécution, générées et versionnées par l'application), que l'utilisateur ajoute dans l'application de bureau. La configuration du frontal du Bridge pour chaque IA est écrite par les boutons correspondants du configurateur, qui écrivent toujours l'identité de l'appelant afin d'éviter le partage de configuration entre IA.

### 27. Sémantique des échecs et des refus — récapitulatif

Chaque refus dans le système est instructif plutôt que laconique : les violations de schéma renvoient le schéma attendu ; les noms inconnus renvoient la correspondance la plus proche ; la porte de la date nomme le remède exact ; la porte des lois nomme la procédure de la bibliothèque ; le blocage de la navigation nomme l'écran protégé et l'alternative différée ; le blocage de consentement nomme la fenêtre de nouvelle tentative ; les réponses surdimensionnées nomment le fichier et les deux commandes de poursuite ou les filtres de restriction ; les échecs des validateurs nomment l'aspect défaillant et distinguent les pannes ; les rejets de capacité dans la mémoire nomment l'occupation et le reste et, près de la limite, les options de restructuration ; les portes de remise et de recherche nomment leurs options de réponse, y compris l'échappatoire universelle « unknown » ; le verrou d'accès nomme les deux appels qui l'ouvrent ; la porte de préparation nomme les parties non lues avec identifiants et pourcentages ; le vérificateur d'écritures nomme, pour chaque lecture expirée ou réinitialisée, l'appel exact qui la rétablit. Le contrat envers le modèle est qu'après au plus trois tentatives corrigées sur tout appel en échec, le modèle s'arrête et signale l'erreur exacte à l'utilisateur.

##### Contact

### Tobias Werren

![IRONSTICK contact card (QR)](https://www.ironstick.legal/img/contact_qr.png)![Tobias Werren](https://www.ironstick.legal/img/tobias_werren.webp)Scannez le code pour enregistrer notre carte de contact — téléphone, e-mail et site.

N'hésitez pas à prendre contact directement via WhatsApp ou Telegram — un appel est également le bienvenu. Langues parlées : allemand, anglais, roumain.

[WhatsApp](https://wa.me/qr/3UCX3B7NRPECG1)[Telegram](https://t.me/ironstick_legal)

##### Message

### IRONSTICK ou une démonstration vous intéressent ? Écrivez-nous.
