# Manuel - Bridge

> Manuel Bridge — travailler avec l’IA : ce qui se passe en arrière-plan, et huit flux de travail, du début de journée à la recherche juridique.

Page originale: https://www.ironstick.legal/manualbridge_fr.html

---

Manuel Bridge — travailler avec l’IA : ce qui se passe en arrière-plan, et huit flux de travail, du début de journée à la recherche juridique.

Notions de base

## 1. Chat d'IA et Bridge — quelle différence ?

IRONSTICK vous offre deux façons de travailler sur vos dossiers avec une IA.
Le **chat d'IA** est intégré au programme : vous écrivez dans une fenêtre d'IRONSTICK, et IRONSTICK envoie lui-même la demande à un service d'IA externe, au moyen des clés d'API que votre cabinet a enregistrées dans la [configuration de l'IA](https://www.ironstick.legal/manualquickstart_fr.html#q3).
Le **Bridge** fonctionne dans l'autre sens : vous écrivez dans l'application d'IA de bureau que vous utilisez déjà, et cette application appelle en direct les outils d'IRONSTICK par l'intermédiaire d'un connecteur.
Dans les deux cas, l'IA n'accède à vos données que par IRONSTICK, avec les mêmes outils et derrière les mêmes portes.

### Le chat d'IA intégré

- **D'abord une couche locale.** Chaque message passe d'abord par une couche fondée sur des règles, exécutée sur votre ordinateur, sans modèle d'IA et sans internet. Les demandes simples — ouvrir un écran, un client ou un dossier, des consultations simples — y sont exécutées directement. Tout ce qui exige un raisonnement ou une rédaction est transmis à un service d'IA externe.
- **Vos clés, vos services.** Le chat utilise les services d'IA externes pour lesquels une clé d'API est enregistrée dans la configuration de l'IA. Ils sont utilisés automatiquement dans un ordre fixe. Si l'un d'eux est indisponible ou n'a plus de crédit, le suivant reprend la même demande.
- **Le consentement d'abord.** Avant d'envoyer quoi que ce soit à un service d'IA externe, le chat vous le demande. Si vous refusez, rien n'est envoyé, et le chat ne redemande pas tant que vous n'avez pas changé de mode ou rouvert le chat.
- **Pseudonymisé.** Avant qu'une demande ne quitte votre ordinateur, les noms de personnes et de sociétés, les numéros de dossier et de dossier judiciaire, les numéros d'identification personnels, les IBAN, les numéros de téléphone, les adresses électroniques et les adresses des parties [sont remplacés par des substituts neutres](https://www.ironstick.legal/gdpr_fr.html). La réponse est retraduite sur votre ordinateur. Les dates et les montants restent inchangés. Les substituts sont construits à partir de vos propres enregistrements ; en outre, les numéros, adresses électroniques et numéros de téléphone sont reconnus dans le texte libre.
- **Journalisé.** Chaque appel à un service d'IA externe est journalisé localement, sous la forme de substituts dans laquelle il a quitté votre ordinateur.
- **Mémoire de travail compacte.** À chaque tour, l'IA reçoit la partie récente de la conversation (environ les 6 000 derniers caractères) et un court résumé de la partie antérieure. Une demande comporte jusqu'à huit cycles d'outils.
- **Où il fonctionne.** Sous Windows et sur la tablette Android.

### Le Bridge

- **Trois composants.** Votre application d'IA de bureau se connecte, par le Model Context Protocol (MCP), à un petit programme Bridge installé sur le même ordinateur. Le Bridge transmet chaque appel à l'application IRONSTICK en cours d'exécution, par une connexion protégée accessible uniquement depuis cet ordinateur. L'application exécute l'outil et renvoie le résultat par le même chemin.
- **Le programme Bridge ne connaît aucune donnée.** Il n'ouvre aucune base de données et ne contient aucun outil propre ; il ne fait que transmettre les appels. Les instructions de travail pour l'IA proviennent elles aussi de l'application en cours d'exécution lorsque l'IA de bureau se connecte.
- **Uniquement lorsqu'IRONSTICK tourne.** Si l'application est fermée, chaque appel d'outil reçoit pour réponse que IRONSTICK n'est pas en cours d'exécution et qu'il faut le démarrer. La liste des outils reste visible dans l'IA de bureau ; l'ordre dans lequel vous lancez les deux programmes importe donc peu.
- **Données réelles.** Les résultats des outils parviennent à l'IA de bureau sans pseudonymisation — noms, numéros et dates réels sont ce qui rend possible un modèle prêt à être déposé. Ce que l'IA lit est traité sous votre propre compte auprès du fournisseur de l'application d'IA de bureau, aux conditions de ce fournisseur.
- **Activé par vous.** Le Bridge ne fonctionne que si *Autoriser l'accès du connecteur par l'IA de bureau locale* est activé dans la configuration de l'IA et que le Bridge de cette application d'IA de bureau est [sous licence](https://www.ironstick.legal/download_fr.html). Le contrôle du programme — ouvrir des écrans, des dossiers et des documents, exporter — requiert un second interrupteur.
- **Plusieurs à la fois.** Les applications d'IA de bureau sous licence — Claude Desktop, ChatGPT Desktop, Qwen Desktop et Kimi Desktop — peuvent être connectées en même temps et travailler sur le même dossier. Chacune est affichée avec son propre symbole dans la barre de menu pendant qu'elle travaille.
- **Où il fonctionne.** Sous Windows.

### Comparaison

|  | Chat d'IA (intégré) | Bridge (application d'IA de bureau) |
| --- | --- | --- |
| Où vous écrivez | Dans la fenêtre de chat d'IRONSTICK | Dans votre application d'IA de bureau |
| Qui parle au service d'IA | IRONSTICK, avec vos propres clés d'API | Votre application d'IA de bureau, avec votre propre compte |
| Coûts de l'IA | Facturés à l'usage par le service d'IA sur votre clé d'API | Couverts par l'abonnement que vous détenez déjà pour l'application d'IA de bureau |
| Licence IRONSTICK | Incluse, sans licence supplémentaire | [Licence Bridge](https://www.ironstick.legal/download_fr.html) par utilisateur / poste de travail — un Bridge par application d'IA de bureau, ou le bundle de tous les Bridges |
| Données envoyées à l'IA | Pseudonymisées ; dates et montants inchangés | Données réelles, traitées sous votre compte auprès du fournisseur |
| Votre consentement | Avant la première requête externe d'une session de chat | Avant le premier accès aux données par une IA de bureau, quelle qu'elle soit, à chaque exécution du programme |
| Instructions de travail | Envoyées avec chaque requête | L'IA doit les lire et restituer mot pour mot une règle avant l'ouverture de tout outil |
| Outils et portes | Le même jeu d'outils et les mêmes portes, plus une recherche dans l'historique propre du chat | Le même jeu d'outils et les mêmes portes ; contrôle du programme uniquement avec son interrupteur |
| Durée d'une session de travail | Conversation récente plus un court résumé ; jusqu'à huit cycles d'outils par requête | La conversation de l'application d'IA de bureau |
| Plateformes | Windows et tablette Android | Windows |

### Pourquoi le Bridge convient aux travaux de dossier de grande ampleur

- **Aucun coût par appel via IRONSTICK.** Lire des dossiers entiers, traiter des centaines de documents et rédiger en plusieurs passes : tout cela s'exécute sur l'abonnement que vous payez déjà pour l'application d'IA de bureau. Le même travail via le chat intégré est facturé à l'usage sur votre clé d'API, ce qui s'additionne vite sur de gros dossiers.
- **Des sessions de travail plus longues.** L'IA de bureau mène sa propre conversation, continue — idéale pour de longues sessions de travail sur des dossiers volumineux.
- **Des réponses plus volumineuses par appel.** Claude Desktop et ChatGPT Desktop reçoivent directement des réponses d'outils allant jusqu'à 40 000 caractères ; Qwen Desktop, Kimi Desktop et le chat intégré en reçoivent jusqu'à 10 000. Tout ce qui dépasse va, en entier, dans le brouillon chiffré et y est lu partie par partie.
- **Tout le jeu d'outils, le texte intégral.** L'IA de bureau travaille avec le jeu d'outils complet et lit les textes intégraux dans sa propre conversation, derrière les mêmes portes que le chat.
- **Le chat garde sa place.** Le chat intégré ne requiert aucune licence supplémentaire, est toujours à portée de main — y compris sur la tablette — et constitue le canal le plus étroitement contrôlé : pseudonymisé, soumis à consentement et journalisé.

## 2. Un seul jeu d'outils — dans l'Application client

Chaque opération qu'une IA peut effectuer réside dans l'Application client IRONSTICK sur votre ordinateur — pas dans l'IA, ni dans le programme Bridge.
Le chat d'IA et chaque IA de bureau connectée appellent exactement les mêmes outils. Chaque appel est exécuté par l'application en cours d'exécution sur votre base de données en direct, et seul le résultat retourne à l'IA.

- **Un seul registre d'outils.** Le jeu d'outils est construit par un seul et même module pour le chat d'IA et pour le Bridge : les mêmes outils, dans le même ordre, derrière les mêmes portes. Les outils sont regroupés en jeux d'outils par thème — dossier, pièces, délais, lois, courriers et courriels et d'autres — que l'IA ouvre selon ses besoins.
- **Un seul chemin.** Chaque appel d'outil, qu'il vienne du chat ou d'une IA de bureau, passe par la même couche de contrôle : le symbole d'activité dans la barre de menu, l'identification de l'appelant, les portes et la remise des gros résultats au brouillon. Chaque IA de bureau et chaque service d'API tient son propre registre de ce qu'il a lu, de sorte que la lecture de l'un ne compte jamais pour un autre.
- **Les données restent dans IRONSTICK.** Votre dossier reste dans la base de données IRONSTICK sur votre ordinateur. Une IA ne reçoit que ce qu'un outil renvoie pour l'appel qu'elle effectue ; IRONSTICK ne lui remet ni la base de données ni le dossier de données.
- **En direct à chaque appel.** Les outils ouvrent la base de données à chaque appel. Une modification que vous enregistrez est ce que voit l'appel d'outil suivant.
- **S'exécute en arrière-plan.** Les outils s'exécutent en arrière-plan au sein de l'application, de sorte que le programme reste réactif même pendant de longues lectures de gros dossiers.
- **L'application doit être en cours d'exécution.** Sans l'application en cours d'exécution, il n'y a pas d'outils : le programme Bridge ne fait que transmettre les appels et répond qu'IRONSTICK n'est pas en cours d'exécution.
- **L'application doit être déverrouillée.** Tant que le code de sécurité à six chiffres n'a pas été saisi sur l'écran de démarrage, chaque appel d'outil d'une IA de bureau reçoit pour réponse que l'application est verrouillée, et aucune donnée n'est renvoyée. Saisissez le code dans IRONSTICK, puis répétez la demande.
- **L'accès est accordé par vous.** Le Bridge ne sert une IA de bureau que lorsque l'interrupteur du connecteur est activé et que cette IA de bureau est sous licence. Le premier accès aux données par une IA de bureau, quelle qu'elle soit, après chaque démarrage du programme ouvre un seul dialogue de confirmation. Si vous acceptez, l'accès reste ouvert pour toutes les IA de bureau sous licence jusqu'à la fin de l'exécution du programme. Si vous refusez, chaque appel de chaque IA de bureau est refusé pendant 10 minutes, et l'accès suivant vous le redemande. Cette décision n'est pas enregistrée.

## 3. Les portes — ce qui se passe en arrière-plan

Entre l'IA et vos enregistrements se trouvent des portes intégrées à la couche d'outils de l'Application client. Il s'agit de simple logique de programme — aucune IA ne contrôle une autre IA.
Lorsqu'une porte refuse un appel, rien n'est écrit ni livré ; l'IA reçoit un message indiquant ce qui manque et l'appel qui ouvre la porte.
La plupart des portes fonctionnent de la même façon pour le chat d'IA et pour chaque IA de bureau ; la dernière colonne indique où chacune s'applique.

| Porte | Quand elle se déclenche | Ce qu'elle fait | S'applique à |
| --- | --- | --- | --- |
| **Consentement avant l'IA externe** | La première fois, dans une session de chat, qu'une requête doit aller à un service d'IA externe | Un dialogue demande si l'IA externe peut être utilisée. Si vous refusez, rien n'est envoyé, et le chat ne redemande pas au cours de cette session. | Chat d'IA |
| **Pseudonymisation** | Chaque requête du chat d'IA à un service d'IA externe | Noms, sociétés, numéros de dossier et de dossier judiciaire, numéros d'identification, IBAN, numéros de téléphone, adresses électroniques et adresses des parties partent sous forme de substituts et sont retraduits sur votre ordinateur. Les dates et les montants restent inchangés. Si la liste des substituts ne peut pas être construite complètement, la requête n'est pas envoyée. | Chat d'IA |
| **Consentement d'accès aux données** | Le premier appel d'outil par une IA de bureau, quelle qu'elle soit, après le démarrage du programme | Un seul dialogue de confirmation apparaît pour toutes les IA de bureau. Accepté : ouvert pour le reste de l'exécution du programme. Refusé : chaque appel est refusé pendant 10 minutes, puis la question vous est reposée. | Bridge |
| **Verrou de démarrage** | Chaque appel d'outil tant que le code de sécurité à six chiffres n'a pas été saisi | L'appel reçoit pour réponse que l'application est verrouillée ; aucune donnée n'est renvoyée. | Bridge |
| **Verrou d'instructions** | Chaque appel d'outil d'une IA de bureau | Tous les outils, à l'exception de la lecture des instructions, de leur confirmation et de la demande de la langue du système, restent fermés tant que l'IA n'a pas lu les instructions et restitué mot pour mot la règle contre les faits inventés. La confirmation expire 60 minutes après avoir été donnée, après 2 heures sans appel, à minuit, à chaque nouvelle connexion et, lorsqu'IRONSTICK peut voir le journal de conversation, lorsque l'IA de bureau condense sa conversation ; l'IA doit alors relire et restituer mot pour mot une règle choisie au hasard. Dans le chat d'IA, les instructions sont au contraire envoyées avec chaque requête. | Bridge |
| **Porte de la date** | Outils qui écrivent un contenu daté — chronique, calendrier, notes du jour, journal quotidien, mémoire, signalements de lois et autres | L'appel est refusé si l'IA n'a pas récupéré la date et l'heure réelles au cours des 30 dernières minutes. | Les deux |
| **Lire d'abord le dossier** | Outils qui lisent le contenu d'un dossier (chronique, chronologie, recherches, textes intégraux et autres) et outils qui écrivent sur un dossier (notes, entrées de chronique, contrôle d'écriture, export, transmission à une autre IA) | Les outils qui lisent le contenu d'un dossier sont refusés tant que l'IA n'a pas lu le digest de ce dossier. Une note ou une entrée de chronique exige en outre le profil du dossier, l'ordre juridique et les entrées de chronique les plus récentes. Un contrôle d'écriture, un export ou une transmission exige en outre que les documents les plus récents du dossier aient été lus intégralement. Le refus énumère ce qui reste à lire. | Les deux |
| **Écrire uniquement à partir de ce qui a été lu** | Entrées de mémoire, modifications d'un snake, travail sur les projets, contrôle d'écriture et remise sur un dossier | Une entrée de mémoire pour un dossier n'est acceptée que si le digest a été lu et que chaque document qui y est cité a été lu intégralement au cours de cette session. Chaque résultat de recherche figurant dans un fichier de brouillon porte la mention que les résultats de recherche ne valent pas lecture, avec les documents derrière ces résultats qui restent non lus. Dès que l'IA a ouvert un document de la partie adverse ou d'une autorité dans un dossier, plus rien n'est écrit sur ce dossier tant que ce document n'a pas été lu intégralement. | Les deux |
| **Nucleu d'abord** | Rédiger, contrôler et remettre une écriture | Refusé tant que chaque nucleu actuel du dossier — le Nucleu du dossier et le nucleu de chaque affaire à laquelle le dossier appartient — n'a pas été lu dans sa version actuelle. Le dernier tour du contrôle d'écriture compare le document au nucleu. | Les deux |
| **Porte du snake** | Dans le contrôle d'écriture, juste avant le tour du nucleu, lorsque le dossier ou un autre dossier de ses affaires possède un snake | L'IA doit vous demander s'il faut exécuter le tour du snake et ne poursuit qu'après votre réponse — ou immédiatement, si vous l'avez demandé en donnant l'ordre. Si vous répondez oui, chaque entrée du snake doit être réglée comme reprise, rejetée ou sans pertinence, avec un motif. | Les deux |
| **Bibliothèque juridique d'abord** | Une recherche web ou une demande de page web qui concerne une loi (numéros d'articles ou de paragraphes, noms de codes, numéros de lois, portails législatifs) | Refusé tant que l'IA n'a pas cherché cette norme dans votre bibliothèque juridique. Si la bibliothèque la contient, le web reste fermé pour cette norme et l'IA cite d'après la bibliothèque. Ce n'est que lorsque la bibliothèque n'a aucun résultat que le web est ouvert pour cette norme, pendant 15 minutes. | Les deux |
| **Signaler les sources législatives — ouvertes, pas des extraits** | Une recherche web relative à une loi ou une page de portail législatif ouverte qui fournit une source législative, et chaque signalement d'une nouvelle source législative | Chaque réponse d'outil suivante commence par le rappel de signaler la source, jusqu'à ce qu'elle soit signalée (pendant 15 minutes au plus). Un signalement n'est accepté que pour une page que l'IA a elle-même ouverte avec l'outil de pages d'IRONSTICK au cours des dernières 24 heures. Les sources signalées attendent dans un seul dialogue de consentement : les sources cochées sont récupérées, vérifiées et enregistrées dans la bibliothèque, les sources non cochées sont refusées. | Les deux |
| **Mémoire uniquement avec votre accord** | L'IA enregistre, modifie ou supprime une entrée de mémoire | Un dialogue vous montre l'entrée. Elle n'est enregistrée, modifiée ou supprimée que si vous l'autorisez ; les entrées refusées sont écartées. Tant que le dialogue est ouvert, tout autre appel de cette session est refusé. Hormis les tâches de transmission entre IA et vos propres notes, l'IA ne lit que les entrées de mémoire que vous avez approuvées. | Les deux |
| **Des propositions au lieu d'écritures** | L'IA veut modifier des données maîtresses, ajouter une personne ou une institution, ajouter une relation, remplir une analyse de personne, fusionner des doublons ou supprimer un enregistrement | L'outil n'écrit rien dans vos enregistrements. Il place une proposition dans le Moniteur de cohérence des données, où vous l'acceptez ou la rejetez. | Les deux |
| **Documents secrets écartés** | Chaque outil d'IA qui lit des documents, des médias, des délais ou un dossier entier, et les services d'arrière-plan qui utilisent une IA externe (Moniteur de cohérence des données, rapport de situation) | Les entrées marquées comme secrètes sont filtrées de tous les outils et services d'IA et ne sont pas transmises à l'IA. | Les deux |
| **Perspectives uniquement d'après le dossier judiciaire** | L'évaluation du dossier par l'IA, lancée dans l'application ou par une IA de bureau | L'estimation des perspectives de succès repose uniquement sur le profil du dossier et sur les documents du dossier qui sont allés au tribunal ou à l'autorité visés dans l'acte introductif, ou en sont venus — des deux côtés, sans annexes. Sans acte introductif ni tribunal ou autorité reconnus, les perspectives sont signalées comme non estimables et la jauge reste vide. | Les deux |
| **Contrôle avant la remise** | Remise d'un document formel tel qu'une écriture | La remise est refusée sans un résultat positif récent du contrôle d'écriture déterministe pour exactement cet état du dossier ; toute modification l'invalide. Ce qui quitte le système est un modèle prêt à être déposé, que vous relisez et signez. | Les deux |

Flux de travail

## Flux de travail 1 — Démarrer la journée

Le démarrage de la journée répond à trois questions avant que vous ne commenciez : ce qui est dû, ce qui est arrivé et où vous en étiez resté.
Une seule étape produit le résumé de démarrage de session avec la date, les rappels, les délais et les rendez-vous des trois prochains jours et les tâches ouvertes. Ensuite, l'IA récupère la liste complète des délais, les rendez-vous du jour et ce qui a été saisi aujourd'hui ou hier.
Utilisez-le chaque matin, et chaque fois que vous démarrez une nouvelle conversation avec une IA de bureau.

![Démarrage, agenda et Heatmap](https://www.ironstick.legal/img/screens/1%20menu.png)

Démarrage, agenda et Heatmap : délais, rendez-vous et nouvelles entrées du jour en un coup d'œil.

### Étape 0 — poser le contexte

- **Démarrer et déverrouiller IRONSTICK.** Les outils ne fonctionnent que lorsque l'application est en cours d'exécution et après la saisie du code de sécurité à six chiffres.
- **Votre propre briefing dans l'application.** Sous Windows, le premier démarrage de la journée demande si IRONSTICK doit vous faire le point sur la journée. Si vous répondez oui, le briefing s'affiche avec des lignes cliquables qui mènent aux délais, au calendrier, à la boîte aux lettres, aux documents et au dossier, et il est aussi lu à voix haute.
- **IA de bureau : une nouvelle conversation.** Démarrez une nouvelle conversation dans votre application d'IA de bureau. Approuvez le dialogue d'accès aux données qu'IRONSTICK affiche lors du premier accès par une IA de bureau, quelle qu'elle soit, après le démarrage du programme.
- **Chat d'IA.** Ouvrez le chat d'IA dans IRONSTICK ; les instructions de travail sont envoyées avec chaque requête.
- **Aucun dossier nécessaire.** Le démarrage de la journée couvre tous les clients et tous les dossiers. N'ouvrez un dossier que si votre question porte sur ce dossier.

### Ce que vous dites — pas à pas

Démarre la session.

1. L'IA lit et confirme ses instructions, fixe la date du jour et charge le résumé de démarrage de session : rappels, délais et rendez-vous des trois prochains jours, tâches ouvertes.

Qu'est-ce qui est dû aujourd'hui et dans les trois prochains jours ?

2. Vous obtenez les délais, les audiences et les rendez-vous par ordre de date, chacun avec son dossier.

Qu'est-ce qui est arrivé depuis hier ?

3. Les nouveaux courriels et les documents nouvellement saisis, chacun avec le dossier auquel il a été rattaché.

Lis le nouveau courriel du dossier [numéro de dossier] et dis-moi ce qu'il attend de moi.

4. Le texte intégral est lu d'abord ; vous obtenez le contenu, les points ouverts et une suggestion pour la prochaine étape.

Inscris dans le journal quotidien l'appel téléphonique d'aujourd'hui avec [personne] au sujet de [objet].

5. L'entrée est ajoutée au journal quotidien du jour avec la date et l'heure.

### Ce qui se passe en arrière-plan

- **Des portes avant le premier outil.** Tant que le code de sécurité n'est pas saisi, chaque appel d'outil d'une IA de bureau reçoit pour réponse que l'application est verrouillée. Le premier accès aux données par une IA de bureau, quelle qu'elle soit, après le démarrage du programme ouvre le dialogue de consentement ; une fois approuvé, l'accès reste ouvert pour toutes les IA de bureau jusqu'à la fin de l'exécution du programme. Avant l'ouverture de tout autre outil, l'IA de bureau doit lire les instructions de travail et restituer une règle mot pour mot.
- **Démarrage de session en une étape.** Par le Bridge, l'ouverture du jeu d'outils de démarrage de session produit le résumé de démarrage de session. La date et l'heure, la langue du système et l'écran que vous avez ouvert reviennent immédiatement ; le résumé complet est placé dans le brouillon chiffré, où l'IA le lit.
- **Ce que contient le résumé.** Les rappels de mémoire échus (aujourd'hui et en retard), que l'IA traite en premier ; les clients pour lesquels la mémoire d'IA partagée détient des connaissances ; l'unique ancre de date ; la langue du système, qui est la langue de la conversation ; l'écran actuel ; la liste des dix derniers journaux quotidiens ; les délais et rendez-vous échéant dans les trois jours, dix lignes au plus chacun ; les tâches ouvertes laissées par une autre IA. Chaque section est plafonnée, et une section plafonnée indique à l'IA où récupérer la version complète.
- **Décisions de justice en attente.** Lors du premier démarrage de session de la journée, lorsque des décisions de justice n'ont pas encore été évaluées, le résumé demande à l'IA de vous demander aussitôt s'il faut les évaluer maintenant. Oui : l'IA les traite une par une. Non : elle poursuit votre tâche.
- **La liste complète des délais.** La liste des délais renvoie tout ce qui figure sur l'écran des délais d'IRONSTICK, trié par date : délais sur les documents, prochaines audiences issues des portails judiciaires et du calendrier, et délais que l'IA a fixés elle-même sur ses notes de mémoire, signalés comme tels. La liste peut être restreinte à critique (en retard et aujourd'hui), prochainement (jusqu'à 10 jours, retards inclus), aujourd'hui, cette semaine, la semaine prochaine ou une date. Par le Bridge, l'ouverture du jeu d'outils des délais renvoie la même liste complète ainsi que les rendez-vous du jour.
- **Rendez-vous.** La liste des rendez-vous présente les rendez-vous d'un jour ou d'une période dans cet ordre : audiences issues des portails judiciaires, audiences issues du calendrier, puis les autres entrées du calendrier.
- **Ce qui est arrivé.** Deux listes présentent chaque entrée saisie aujourd'hui ou hier, tous clients et tous dossiers confondus ; ce qui compte est le jour de la saisie, non la date de l'événement. Par le Bridge, l'ouverture du jeu d'outils de correspondance et de courriels liste les documents enregistrés aujourd'hui et les courriels reçus aujourd'hui, dix de chaque au plus.
- **Le briefing du jour pour l'IA.** L'IA peut récupérer le contenu du briefing du jour avec numéros de documents et repères : délais des 30 prochains jours, délais critiques et délais clos aujourd'hui, audiences et rendez-vous du jour, courriels non lus, documents saisis aujourd'hui, audiences de demain, anniversaires, dossiers ravivés, statistiques de la semaine et journal d'IA récent. Un contrôle distinct consigne, pour chaque IA de bureau, si elle a été briefée aujourd'hui ; sinon, il renvoie les journaux quotidiens les plus récents et consigne qu'elle a été briefée.
- **Lire un nouveau document.** Le lecteur de texte intégral renvoie le texte intégral extrait d'une entrée. Les instructions de travail indiquent à l'IA qu'un titre ou une ligne de liste ne prouve pas ce qu'une entrée documente : avant d'affirmer ce que dit une entrée, elle lit le texte intégral au cours de la session en cours, et elle distingue ce que la source documente de ce qu'une partie ou une déduction suggère.
- **Questions sur un dossier.** La chronique d'un dossier, ses délais et son calendrier sont du contenu de dossier : ils sont refusés tant que l'IA n'a pas lu le digest de ce dossier, puis sa mémoire de dossier. Les listes globales couvrant tous les dossiers sont ouvertes sans cela. La chronique peut être filtrée par date ; une date correspond à la date de l'entrée ou à la date du document.
- **Proposer de l'afficher dans IRONSTICK.** Après une liste de délais ou de rendez-vous, l'IA peut proposer d'ouvrir l'entrée dans la fenêtre d'IRONSTICK. Elle ne navigue qu'avec votre accord, et uniquement si le contrôle du programme est activé dans la configuration de l'IA.

## Flux de travail 2 — Règles générales de conversation

Ces règles valent pour chaque conversation avec l'IA, dans le chat intégré comme par le Bridge : comment une session démarre, quelle langue l'IA parle, d'où ses faits peuvent provenir et comment vous vérifiez ses sources.
Chaque règle est accompagnée de la phrase que vous employez pour l'appliquer : instructions lues et confirmées, réponses qui nomment leurs sources, textes intégraux lus jusqu'au bout avant une réponse.
Lisez ceci avant votre première vraie session de travail ; les mêmes règles portent tous les autres flux de travail.

![Parcours guidé : lire d'abord, répondre ensuite](https://www.ironstick.legal/img/73_ironstick_guided_path.png)

Une conversation fondée sur des preuves : l'IA lit ce qu'elle doit lire avant de répondre — et vous vérifiez vous-même les sources.

### Étape 0 — poser le contexte

- **Démarrez d'abord IRONSTICK et déverrouillez-le.** Sans l'application en cours d'exécution, le Bridge répond qu'IRONSTICK n'est pas en cours d'exécution ; tant que le code de sécurité à six chiffres n'est pas saisi, chaque appel d'outil reçoit pour réponse que l'application est verrouillée.
- **Démarrez la session.** Dans votre IA de bureau, commencez une nouvelle conversation et demandez-lui de démarrer la session. L'ouverture du jeu d'outils de démarrage de session produit le résumé de démarrage de session : la date, la langue du système, l'écran que vous avez ouvert, les rappels échus, les décisions de justice ouvertes à évaluer, les délais et rendez-vous des trois prochains jours, les dix derniers journaux quotidiens et les tâches de transmission ouvertes.
- **Regardez le symbole de l'IA dans la barre supérieure.** Son menu déroulant indique, pour une IA de bureau, si les instructions sont confirmées (coche verte ou croix rouge), combien de fois elles ont été lues et combien d'infractions aux règles se sont produites ; pour chaque dossier que l'IA a touché, il indique le profil, l'ordre juridique et le digest comme lus ou non lus, ainsi qu'une barre des documents lus.
- **Dans le chat intégré**, les instructions de travail font partie de chaque requête ; il n'y a rien à confirmer. Avant que la première requête ne parte vers un service d'IA externe, IRONSTICK demande votre consentement.
- **Donnez le repère le plus précis dont vous disposez.** Un numéro de pièce vaut mieux qu'un nom, un nom vaut mieux qu'un mot-clé, et un numéro de dossier indique à l'IA quel dossier lire.

Démarre la session. Puis lis le digest et la mémoire de dossier du dossier [numéro de dossier] et dis-moi ce qui est ouvert.

### Les règles — et ce que vous dites pour les appliquer

Démarre la session.

1. Règle 1 — l'IA lit et confirme ses instructions avant de toucher à des données de dossier, et répond dans la langue de votre système.

Cite la règle [numéro] de tes instructions.

2. Règle 2 — chaque règle peut être montrée mot pour mot, de sorte que vous pouvez la faire respecter par l'IA.

Quel document dit cela ? Donne-moi le numéro de pièce.

3. Règle 3 — chaque affirmation porte sa source ; un clic sur le numéro ouvre le document.

Lis [#numéro de pièce] en entier avant de répondre.

4. Règle 4 — les titres et les descriptions courtes ne sont pas des faits ; la réponse repose sur le texte intégral.

Sépare ce qui est prouvé de ce qui n'est que supposé.

5. Règle 5 — l'IA signale les appréciations et les soupçons comme tels et n'énonce que ce que les sources documentent.

Lis le document en entier, pas seulement les résultats de recherche.

6. Règle 6 — les longs documents sont lus jusqu'au bout ; l'IA signale lorsque chaque ligne a été lue.

### Ce qui se passe en arrière-plan

- **Verrou d'instructions (Bridge).** Tant que l'IA de bureau n'a pas lu les instructions de travail et restitué mot pour mot la règle contre les faits inventés, tous les outils, à l'exception de la lecture des instructions, de leur confirmation et de la demande de la langue du système, sont refusés. L'IA qui a lu doit confirmer elle-même ; une confirmation donnée dans une autre conversation n'ouvre pas le verrou pour elle.
- **Relecture.** La confirmation expire 60 minutes après avoir été donnée, après deux heures sans appel, à minuit et à chaque nouvelle connexion ; lorsque IRONSTICK peut voir le journal de conversation de l'IA de bureau, également lorsque l'IA de bureau condense cette conversation. L'IA relit alors et restitue mot pour mot une règle choisie au hasard — une courte pause, pas une défaillance.
- **Garde-fous des règles.** La logique du programme surveille les raccourcis, par exemple appeler des outils avant d'avoir lu les instructions ou déplacer un fichier en contournant la voie de remise. Lorsqu'un raccourci est détecté, tous les outils sont verrouillés et le motif est indiqué ; selon le nombre, l'IA récite la règle contre les faits inventés ou relit les instructions et restitue la règle que nomme le refus. Le nombre est visible dans le menu déroulant du symbole de l'IA.
- **Une seule langue de conversation.** L'IA répond dans la langue du système IRONSTICK pendant toute la session, quelle que soit la langue dans laquelle vous écrivez. Les écritures, les courriels judiciaires et les entrées de chronique sont rédigés dans la langue de l'ordre juridique du dossier ; le journal quotidien, dans la langue de la conversation.
- **Des faits issus des outils, de cette session.** Les instructions n'autorisent les faits de dossier que s'ils proviennent des outils d'IRONSTICK, récupérés au cours de la session en cours — pas de la mémoire de l'IA, de messages antérieurs, de données d'entraînement, de fichiers téléchargés ou d'un autre connecteur. Ce qui ne peut pas être récupéré est nommé comme une lacune, jamais comblé par déduction.
- **D'abord la recherche.** Il est dit à l'IA de ne jamais demander ce que les outils peuvent lui apprendre : à partir d'un numéro de dossier, elle lit au lieu de demander de quel dossier il s'agit.
- **Les titres et les résumés ne sont pas des faits.** Avant d'affirmer ce qu'une entrée documente, l'IA doit lire le texte intégral de l'entrée au cours de la session en cours ; ce qu'un titre, une partie ou une déduction suggère doit être qualifié de soupçon. Une entrée sans texte extrait ne donne lieu à aucune affirmation sur le fond.
- **Les résultats de recherche ne valent pas lecture.** Chaque résultat de recherche figurant dans un fichier de brouillon porte la mention que les résultats ne valent pas lecture, avec les documents derrière ces résultats qui restent non lus. Pour les extractions de dossier, un avertissement de couverture de lecture nomme chaque fichier non lu jusqu'au bout, avec son pourcentage et les plages de lignes non lues ; il réapparaît dans les réponses suivantes tant que les lacunes n'ont pas été lues.
- **L'état de lecture dans les réponses.** Lorsque les chiffres de lecture changent, les réponses des outils portent les mêmes chiffres que ceux que vous voyez dans le menu déroulant du symbole de l'IA, avec l'instruction de ne jamais déclarer un dossier, ses pièces ou sa mémoire entièrement lus si ces chiffres ne le montrent pas.
- **Lire d'abord le digest et la mémoire.** Le contenu d'un dossier n'est disponible qu'après la lecture du digest du dossier ; pour une tâche sur un dossier, la mémoire de dossier complète est lue en premier.
- **Seule la lecture propre compte.** Pour l'évaluation du dossier, IRONSTICK vérifie chaque lecture à l'aune du journal de conversation propre de l'IA de bureau ; ce que lisent des agents auxiliaires ne compte pas.
- **Des sources vérifiables.** L'IA désigne chaque document par son numéro de pièce. Dans le chat intégré, un numéro ne devient un lien que si cette entrée existe dans vos enregistrements et n'est ni supprimée ni secrète ; un clic l'ouvre dans la chronique du dossier. Un numéro sans entrée correspondante reste du texte simple. Dans une IA de bureau, cherchez le numéro dans IRONSTICK ou demandez à l'IA de lire cette entrée en entier.
- **Les lois depuis la bibliothèque.** Les lois sont vérifiées d'abord dans votre bibliothèque juridique ; le web ne s'ouvre pour une norme que si la bibliothèque n'a aucun résultat, et seules les pages ouvertes par l'outil de pages d'IRONSTICK comptent comme lues.
- **Les écritures datées exigent la date du jour.** Les outils qui écrivent un contenu daté sont refusés si l'IA n'a pas récupéré la date et l'heure réelles au cours des 30 dernières minutes. Dans le Bridge, les réponses de l'IA commencent par cette date.
- **Après une longue conversation.** Les lectures restent comptées pour leur dossier lorsque l'IA de bureau condense sa conversation ; le nucleu d'un dossier doit être relu. Pour reprendre un dossier, l'IA peut charger digest, nucleu, mémoire de dossier et snakes dans un seul fichier de travail.
- **Gros documents.** Les grosses réponses d'outils vont, en entier, dans le brouillon chiffré et sont lues partie par partie, la couverture de lecture étant suivie ligne par ligne.

## Flux de travail 3 — Évaluation du dossier

L'évaluation du dossier est le regard d'analyste senior de l'IA sur un dossier, enregistré dans IRONSTICK et affiché dans l'onglet d'évaluation par l'IA du dossier.
Les perspectives de succès ne sont estimées qu'à partir du dossier judiciaire : ce qui est allé au tribunal ou à l'autorité visés dans l'acte introductif, ou en est venu.
Les sections descriptives s'appuient sur l'ensemble du dossier IRONSTICK et sur les dossiers voisins du client.
Utilisez-la lorsqu'un dossier a évolué, lorsque la dernière évaluation est ancienne, ou lorsque vous voulez qu'une IA de bureau établisse une nouvelle évaluation selon les mêmes critères que l'application.

![Évaluation du dossier par l'IA avec chances de succès](https://www.ironstick.legal/img/screens/5%20case%20assesment%20detail.png)

L'évaluation du dossier lit le dossier et affiche les chances de succès avec l'état des preuves, la prétention principale et les autres prétentions.

### Étape 0 — poser le contexte

- **Ouvrir le dossier ou le nommer.** Ouvrez le dossier dans IRONSTICK : l'IA peut voir quel écran et quel dossier vous avez ouverts. Vous pouvez aussi donner le numéro de dossier ; l'IA retrouve le dossier grâce à son numéro.
- **L'acte introductif doit figurer au dossier.** Le pronostic exige le document qui a introduit la procédure, par exemple l'assignation, enregistré avec son texte extrait. Il peut aussi se trouver dans un autre dossier du même client, tel que le dossier dont celui-ci a été séparé.
- **Le tribunal doit être enregistré.** IRONSTICK ne reconnaît le tribunal ou l'autorité que s'il est enregistré parmi vos institutions et que son nom figure dans l'adresse de l'acte introductif. S'il manque, la jauge de succès reste vide.
- **Dans l'application ou par une IA de bureau.** Dans l'onglet d'évaluation par l'IA de l'application, seuls les dossiers dont le statut est Actif peuvent être évalués. Une IA de bureau peut évaluer n'importe quel dossier, quel que soit son statut et même lorsque rien de nouveau n'est arrivé.

### Ce que vous dites — pas à pas

Ouvre le dossier [numéro de dossier] et donne-moi l'état de la dernière évaluation.

1. L'IA charge le dossier et résume l'évaluation enregistrée, date comprise.

Fais une nouvelle évaluation du dossier [numéro de dossier].

2. Le dossier judiciaire est constitué, les documents sont lus et l'évaluation est rédigée en étapes fixes ; le résultat apparaît dans l'onglet d'évaluation par l'IA.

Pourquoi les perspectives de succès ne sont-elles pas meilleures ?

3. Vous obtenez les points du dossier judiciaire qui pèsent contre vous, chacun avec son numéro de pièce.

Quels documents de mon dossier seraient utiles mais ne sont pas encore devant le tribunal ?

4. L'IA compare l'ensemble de votre dossier au dossier judiciaire et nomme ce qui y manque encore.

Prends [#numéro de pièce] en compte et évalue à nouveau.

5. Votre remarque est transmise et l'évaluation est renouvelée en la prenant en compte.

### Ce qui se passe en arrière-plan

- **D'abord la dernière évaluation.** Le lecteur d'évaluation renvoie l'évaluation la plus récente du dossier. Sa première ligne indique la date, l'ancienneté et s'il s'agissait d'une évaluation complète ou d'une mise à jour, et il est dit à l'IA d'indiquer quand la dernière évaluation a été faite. Comme tout outil qui lit le contenu d'un dossier, il est refusé tant que l'IA n'a pas lu le digest du dossier puis la mémoire de dossier.
- **Un outil, six étapes.** Une IA de bureau n'établit une nouvelle évaluation qu'avec l'outil d'évaluation dédié. Chaque appel ne renvoie que l'étape en cours ; l'étape suivante n'est remise qu'après qu'IRONSTICK a contrôlé l'étape en cours. Aucune étape ne peut être sautée. Si l'application évalue le même dossier à ce moment-là, l'outil refuse jusqu'à ce que l'application ait terminé.
- **Étape 1 — acte introductif.** L'IA lit les PDF du dossier, en commençant par le plus ancien, et signale l'acte introductif comme certain, incertain ou « aucun trouvé ». Contrôlé : chaque document signalé appartient à ce client et a été lu intégralement au cours de cette session ; « aucun trouvé » n'est accepté que si chaque PDF du dossier a été lu intégralement. Un document signalé comme certain est enregistré pour les évaluations ultérieures.
- **Porte : dossier judiciaire.** IRONSTICK cherche un tribunal ou une autorité enregistrés parmi vos institutions dans l'adresse en tête de la première page de l'acte introductif, ou comme destinataire sur cette page. Le dossier judiciaire se compose alors de l'acte introductif et de chaque document entrant et sortant du dossier dont l'interlocuteur est ce tribunal ou cette autorité — des deux parties, sans annexes, et sans entrées secrètes ou supprimées.
- **Étape 2 — état du dossier judiciaire et pronostic.** L'IA doit lire elle-même intégralement chaque document du dossier judiciaire, puis remettre la section de pronostic : un pourcentage, sa fourchette (clairement perdu, plutôt perdu, ouvert, plutôt gagné, clairement gagné), l'état du dossier judiciaire, l'état des preuves, la demande principale, les autres demandes, l'évolution par rapport au pronostic précédent et le motif. Contrôlé : chaque document du dossier judiciaire a été lu ; le pourcentage se situe dans sa fourchette ; chaque ligne est présente ; l'état du dossier judiciaire et le motif ne citent que des documents du dossier judiciaire ; ces lignes sont rédigées dans la langue du système ; un écart de plus de 10 points par rapport au pronostic précédent nomme les nouveaux documents qui le justifient.
- **Pas de dossier judiciaire — ce que l'IA vous dit.** Sans acte introductif, ou sans tribunal ou autorité reconnus dans son adresse, il n'y a pas de dossier judiciaire. IRONSTICK demande alors à l'IA de vous informer aussitôt, dans la langue de la conversation et avant de poursuivre, qu'aucun pronostic n'est établi et que la jauge de succès reste vide — en nommant le motif et, le cas échéant, l'acte introductif. L'étape passe alors avec le seul dossier, et l'état du dossier IRONSTICK prend la place du pronostic.
- **Étapes 3 et 4 — lecture.** L'étape 3 liste les PDF entrants et sortants les plus récents du dossier et l'acte introductif enregistré ; l'étape 4 liste chaque document des autres dossiers du client qui est lié à ce dossier. Chacun doit être lu intégralement ; résumés, titres et résultats de recherche ne valent pas lecture. Un résultat qui est allé dans le brouillon ne compte que si chacune de ses parties a été lue.
- **État de lecture.** IRONSTICK tient un registre de lecture par dossier : combien de documents du dossier l'IA a lus intégralement, et si elle a lu le digest et la mémoire de dossier. Ce sont les mêmes chiffres que vous voyez, et ils accompagnent les réponses dès qu'ils changent. Il est dit à l'IA qu'ils constituent la seule base valable pour toute affirmation sur ce qu'elle a lu, et qu'elle ne peut déclarer un dossier ou ses documents « entièrement lus » que si les chiffres le montrent.
- **Seule la lecture propre de l'IA compte.** IRONSTICK vérifie chaque lecture à l'aune du journal de conversation de cette IA de bureau ; ce que lisent des sous-agents ou des agents parallèles n'est pas compté. Lorsque le journal de conversation d'une connexion n'est pas visible, la réponse l'indique, et il est dit à l'IA de vous informer que ce contrôle n'a pas été possible.
- **Étape 5 — digest des faits.** L'IA remet son digest avec les rubriques faits essentiels, faits documentés et citations clés, contradictions, lacunes et délais manqués, renvois entre dossiers, et les destinataires. Contrôlé : chaque rubrique est présente et renseignée ; les faits essentiels citent des documents ; chaque dossier voisin est nommé ; chaque document cité a été lu intégralement.
- **Étape 6 — rédaction.** Ce n'est qu'à présent que l'IA reçoit les règles de rédaction. Les sections sont : fondement, état du dossier IRONSTICK, remarque critique, points forts, risques, imbrication entre dossiers et, lorsqu'IRONSTICK a trouvé des dossiers connexes d'autres clients, ces dossiers en dernière section. L'état du dossier IRONSTICK repose sur le digest de chaque document, et l'IA lit intégralement tout document important. Contrôlé : les sections et leur ordre ; le fondement nomme l'acte introductif ; six points au plus chacun sous points forts et risques ; chaque document cité existe dans les dossiers de ce client ou dans le matériel, n'est ni secret ni supprimé et a été lu intégralement ; la section entre dossiers nomme chaque dossier voisin.
- **Rejet.** Lorsqu'un contrôle échoue, la réponse commence par REJECTED suivi d'une liste numérotée d'erreurs. Rien n'avance et rien n'est enregistré ; l'IA corrige exactement ces points et rappelle. Un élément remis à la mauvaise étape est rejeté. L'IA peut recommencer la chaîne à l'étape 1 avec du matériel actualisé, et un redémarrage de l'application la fait aussi recommencer.
- **Enregistrement.** Lorsque l'étape 6 est acceptée, IRONSTICK insère le pronostic de l'étape 2 après le fondement, s'il y a un dossier judiciaire, et enregistre l'évaluation comme nouvelle évaluation complète. Il affiche alors le dossier dans son onglet d'évaluation par l'IA, et il est dit à l'IA de vous dire que la nouvelle évaluation est enregistrée.
- **Dans l'onglet d'évaluation par l'IA.** L'état du dossier judiciaire figure à côté de la jauge de succès avec la fourchette, l'état des preuves, la demande principale et les autres demandes. Sans dossier judiciaire, l'état du dossier IRONSTICK passe en deuxième position et la jauge à côté reste vide.
- **L'évaluation dans l'application.** Dans l'onglet lui-même, vous demandez une évaluation pour un dossier actif. L'onglet demande le consentement avant d'utiliser un service d'IA externe ; le traitement se poursuit alors en arrière-plan, même si vous changez d'onglet ou d'écran, à travers la reconnaissance de texte des nouveaux documents, la recherche, la rédaction et le pronostic. Une évaluation existante peut être mise à jour dans un délai d'un jour après la dernière réévaluation complète, au plus trois fois de suite. Lorsque rien de nouveau n'est arrivé depuis la dernière évaluation, la réévaluation ne s'ouvre qu'après que vous avez écrit une remarque d'au moins trois mots dans le champ des objections.

## Flux de travail 4 — Créer un nucleu

Un nucleu est l’orientation contraignante d’un dossier : la ligne d’argumentation centrale, les faits et preuves directeurs, ce qui doit être dit et ce qui ne doit jamais l’être.
Il existe à deux niveaux — une fois pour toute une affaire, valable pour chaque dossier qu’il contient, et une fois pour le dossier individuel — et chaque document que l’IA rédige pour le dossier lui est subordonné.
Le meilleur moment pour le créer est juste après une évaluation du dossier, tant que l’ensemble du dossier se trouve encore dans le contexte de travail de l’IA.
L’IA le rédige, IRONSTICK vous montre chaque modification, et seule votre approbation l’enregistre comme nouvelle version.

![Onglets du dossier avec nucleu (symbole de l'atome) et snake (symbole du serpent)](https://www.ironstick.legal/img/screens/5%20case%20tab2.png)

Le nucleu dans l'onglet au symbole de l'atome : l’IA rédige et propose, vous acceptez ; chaque modification acceptée devient une nouvelle version qui oriente chaque mémoire ultérieur.

### Étape 0 — définir le contexte

- **Choisir le moment.** Demandez le nucleu juste après une évaluation du dossier. L’évaluation fait lire à l’IA le digest, les textes intégraux, la mémoire du dossier ainsi que tout nucleu et tout snake existants ; tant que tout cela se trouve encore dans son contexte de travail, l’orientation peut être distillée à partir de l’ensemble du dossier plutôt que de quelques documents.
- **Choisir le niveau.** Un *Nucleu d’affaire* appartient à une affaire (un groupe de dossiers dans la liste des dossiers) et s’applique à chaque dossier qu’elle contient. Un *nucleu de dossier* ne s’applique qu’à un seul dossier et ajuste l’orientation pour ce dossier. Un dossier est régi par son propre nucleu et par le nucleu de chaque affaire à laquelle il appartient ; le Nucleu du dossier ne doit donc pas contredire la ligne de l’affaire.
- **Où le trouver.** Sur l’écran du dossier, l’onglet portant le symbole de l’atome (*Nucleu du dossier*) contient en haut le Nucleu du dossier, modifiable, et en dessous, en lecture seule, le nucleu de chaque affaire à laquelle le dossier appartient. Dans la liste des dossiers, le bouton atome dans la barre de titre d’une affaire ouvre son Nucleu d’affaire. Chaque nucleu porte son identifiant, par exemple *#KI00041 · v3* ; un clic le copie, de sorte que vous pouvez le coller dans le chat.
- **Ce qui y a sa place.** L’orientation et rien d’autre : la thèse directrice, la place du dossier dans le litige plus large, les parties, les thèses de la partie adverse et les réponses à y apporter, la manière de pondérer les preuves futures et les lignes à ne pas franchir. Les faits y figurent comme historique documenté ; l’état actuel du dossier est chaque fois lu dans le digest.
- **Ce qui n’y a pas sa place.** Les rappels, notes, tâches, historique de session, questions ouvertes et réflexions de travail relèvent de la mémoire du dossier. Les déclarations de la partie adverse que contredisent les pièces du dossier relèvent du snake.
- **Taille.** Au maximum 20 000 caractères par nucleu. Le compteur à côté du texte indique la longueur et devient rouge au-delà de la limite. Si l’orientation exige plus de place, conservez la ligne commune dans le Nucleu d’affaire et placez ce qui est propre à un dossier dans le nucleu de ce dossier, avec la même limite.
- **Le rédiger vous-même.** Vous pouvez aussi saisir ou corriger un nucleu directement dans l’onglet ou dans la fenêtre de l’affaire et appuyer sur *Enregistrer* ; chaque enregistrement est une nouvelle version.

### Ce que vous dites — pas à pas

Crée le Nucleu du dossier [numéro de dossier] à partir de cette évaluation.

1. L’IA distille l’orientation à partir du dossier qu’elle vient de lire et ouvre sa proposition dans l’onglet *Nucleu du dossier*, où vous l’acceptez ou la rejetez.

Crée un nucleu pour l’affaire [affaire] : la ligne centrale qui s’applique à chaque dossier qu’elle contient.

2. L’IA rédige le Nucleu d’affaire et l’affiche dans la fenêtre de l’affaire ; une fois accepté, il s’applique à chaque dossier de l’affaire et apparaît en lecture seule dans chacun d’eux.

Quelle est la longueur de chaque nucleu du dossier [numéro de dossier], et que pourrait-on déplacer dans le Nucleu d’affaire ?

3. L’IA lit le Nucleu du dossier et chaque Nucleu d’affaire du dossier et mesure chacun par rapport à la limite de 20 000 caractères.

Mets à jour le Nucleu du dossier [numéro de dossier] : nous n’argumentons plus sur [point].

4. L’IA explique dans le chat ce qu’elle veut modifier et pourquoi, puis ne propose que les passages modifiés ; vous les voyez en gras rouge, et une modification acceptée devient la version suivante.

Lis-moi le nucleu actuel du dossier [numéro de dossier], avec le nucleu de chaque affaire.

5. L’IA charge l’ensemble complet dans ses versions actuelles, chacune avec son identifiant, par exemple #KI00041 · v3.

Ce projet contredit-il le nucleu ?

6. L’IA compare le projet point par point avec chaque nucleu qui s’applique au dossier et nomme chaque écart ; dans un mémoire, cette comparaison constitue le dernier tour de la chaîne de contrôle.

### Ce qui se passe en arrière-plan

- **Une seule voie d’écriture, avec votre approbation.** L’IA propose un nucleu par un outil dédié : la première version d’un nucleu de dossier par le dossier, la première version d’un Nucleu d’affaire par l’affaire (tirée de la liste des affaires), chaque modification ultérieure par le numéro du nucleu. Les changements à l’intérieur du texte sont transmis sous forme de remplacements ciblés ; l’IA a pour consigne de ne jamais retaper l’ensemble du nucleu et d’expliquer dans le chat, avant de proposer, ce qu’elle veut modifier et pourquoi.
- **La fenêtre de contrôle.** Pour un nucleu de dossier, IRONSTICK ouvre le dossier sur l’onglet *Nucleu du dossier* ; pour un Nucleu d’affaire, la fenêtre apparaît par-dessus l’écran en cours. Elle affiche le texte entier avec chaque modification en gras rouge, les suppressions barrées, et les boutons *Rejeter* et *Accepter*. Une seule révision de nucleu est ouverte à la fois. Si vous mettez plus d’une minute environ, l’IA est informée que la révision est encore ouverte et ne la renvoie pas ; votre approbation ultérieure enregistre quand même la version.
- **Contrôle de la taille.** Une proposition de plus de 20 000 caractères est refusée avant de vous parvenir, avec la consigne de s’en tenir au cœur directeur et de placer l’orientation propre à un dossier dans le Nucleu du dossier, ou l’orientation commune dans le Nucleu d’affaire.
- **Date actuelle.** Comme toute écriture datée, une proposition de nucleu exige que la date actuelle ait été récupérée au cours des 30 dernières minutes.
- **Des versions, jamais d’écrasement.** Chaque proposition acceptée et chaque enregistrement dans l’onglet est stocké comme une nouvelle ligne avec le numéro de version suivant ; le numéro *#KIxxxxx* reste le même pour toutes les versions, et la version la plus élevée est la version actuelle. Un texte inchangé ne crée aucune nouvelle version. Lorsqu’une affaire est supprimée, son nucleu est masqué et ses versions sont conservées.
- **Comment l’IA le lit.** Un seul appel avec le dossier renvoie l’ensemble complet : le Nucleu du dossier et le nucleu de chaque affaire du dossier, chacun avec son en-tête *#KIxxxxx · vN*, intégral, et il nomme les niveaux qui n’en ont pas encore. Le nucleu figure aussi tout en haut du digest du dossier, du briefing du dossier et du paquet de reprise. Une liste d’inventaire présente chaque nucleu sans textes intégraux ; l’ouverture de l’ensemble d’outils des instructions IA affiche l’inventaire des Nucleu du dossier que vous avez ouvert.
- **Relire après chaque modification.** IRONSTICK consigne quelle version de chaque nucleu l’IA a lue. Une nouvelle version, ou le fait que l’IA de bureau condense sa conversation, rend la lecture antérieure caduque.
- **Où il produit ses effets.** Le nucleu oriente chaque mémoire par le [Flux de travail 6 — Rédiger un mémoire](#w6). Là, la porte du nucleu refuse la rédaction, la vérification et la remise d’un document du dossier tant que chaque nucleu applicable — le Nucleu du dossier et chaque Nucleu d’affaire — n’a pas été lu dans sa version actuelle ; le format de document contraignant n’est de même fourni qu’une fois chaque Nucleu du dossier lu. À la fin de la chaîne de contrôle vient le tour du nucleu : le document est comparé au nucleu point par point, chaque écart est corrigé ou réglé, une contradiction ne peut jamais être rejetée, et celle qui ne peut pas être supprimée est marquée comme conflit. Un conflit arrête le travail sur ce document jusqu’à ce que vous ayez été averti en détail et que vous ayez décidé si le document est corrigé ou si l’écart est maintenu.
- **Dans l’évaluation du dossier.** Lorsqu’une évaluation s’exécute, chaque nucleu existant du dossier fait partie de son contexte en tant qu’orientation contraignante, cité par son identifiant.

## Flux de travail 5 — Construire le snake

Le snake est le registre de travail interne des déclarations de la partie adverse, dans un dossier, que contredisent les preuves du dossier. Chaque entrée fixe le lieu de la déclaration — document, date, dossier et page — et énumère chaque document qui la réfute.
Vous le construisez de deux manières : par une recherche ciblée dans un ou plusieurs dossiers, ou dans des documents que vous nommez ; ou au beau milieu d’une conversation, au moment où apparaît une contradiction entre la partie adverse et le dossier.
IRONSTICK vérifie chaque ligne par rapport à vos données, vous approuvez chaque version, et dans chaque mémoire ultérieur les entrées du snake sont proposées comme arguments contre la partie adverse.

![Nucleu et snake sur le chemin du mémoire](https://www.ironstick.legal/img/76_nucleu_snake_path.png)

Le snake consigne les contradictions entre la partie adverse et le dossier : chaque ligne vérifiée par rapport aux données, votre approbation pour chaque version.

### Étape 0 — définir le contexte

- **Recherche ciblée.** Nommez les dossiers, ou les documents, dans lesquels l’IA doit chercher des déclarations de la partie adverse que les pièces réfutent. Un bon moment est juste après une évaluation du dossier ou une lecture complète du dossier, tant que les pièces se trouvent encore dans le contexte de travail de l’IA. Demandez-lui de ratisser large ; le snake ne contient que ce que les documents prouvent.
- **Pendant une conversation quelconque.** Lorsqu’une contradiction entre la partie adverse et le dossier surgit alors que vous travaillez sur autre chose, dites à l’IA de l’ajouter au snake si elle n’y figure pas encore. Elle vérifie d’abord le snake actuel et complète une entrée existante plutôt que d’enregistrer deux fois le même point.
- **Un snake par dossier.** Un snake appartient à un seul dossier. Une affaire n’a pas de snake propre ; elle affiche les snakes de tous ses dossiers.
- **Où le trouver.** Sur l’écran du dossier, l’onglet portant le symbole du serpent, à droite de l’onglet du nucleu (*Snake du dossier*), contient le snake de ce dossier avec son identifiant, par exemple *#SN00004 · v2*, et un compteur de caractères. Dans la liste des dossiers, le bouton snake dans la barre de titre d’une affaire ouvre *Snakes de l’affaire* : les snakes de tous ses dossiers dans l’ordre de la liste ; un clic sur un dossier l’ouvre sur l’onglet *Snake du dossier*.
- **Taille.** Au maximum 20 000 caractères par snake de dossier. Le compteur devient rouge au-delà de la limite. Limitez chaque entrée au lieu, à une courte description et à ses lignes de référence.
- **Ce qui y a sa place.** Uniquement les déclarations de la partie adverse que contredisent les preuves du dossier. Les soupçons, la stratégie et les rappels n’y ont pas leur place ; les rappels vont dans la mémoire du dossier, et les contradictions de la partie adverse vont uniquement dans le snake, jamais dans la mémoire.

**Le format d’une entrée.** Les entrées sont séparées par une ligne vide. La première ligne indique le lieu de la déclaration ; vient ensuite la description ; puis chaque document lié sur sa propre ligne, commençant par une flèche :

#0004417 · 12.10.2026 · CaseID 19 · p. 2 top
Mémoire en défense sur appel, partie adverse B : les tribunaux ont déjà statué définitivement sur la propriété des installations. Le dossier, au contraire : les deux jugements laissent expressément la propriété à la procédure au fond, et la partie adverse B l’avait elle-même dit lors de l’audience précédente.
→ #0003304 · 18.07.2026 · CaseID 19 · p. 5 middle
→ #0000586 · 25.04.2026 · CaseID 8 · p. 9 top
→ #0001127 · 24.06.2026 · CaseID 8 · p. 15 bottom

Chaque ligne de référence se lit ainsi : numéro de preuve à sept chiffres · la date du document telle que IRONSTICK l’enregistre (JJ.MM.AAAA) · le CaseID de ce document · la page et la position sur celle-ci (haut, milieu ou bas, dans n’importe laquelle des langues du système), ou un tiret pour une preuve sans pages. Lorsqu’une contradiction s’étend sur plusieurs documents, chacun d’eux reçoit sa propre ligne de référence : la déclaration, la contre-déclaration et chaque pièce intermédiaire. Vous pouvez aussi saisir ou corriger les entrées vous-même dans l’onglet et appuyer sur *Enregistrer* ; chaque enregistrement est une nouvelle version.

### Ce que vous dites — pas à pas

Construis le snake du dossier [numéro de dossier] à partir du dossier complet.

1. L’IA lit le dossier et chaque document qui réfute la partie adverse, puis propose le snake dans l’onglet *Snake du dossier*, chaque ligne étant vérifiée par rapport à vos données.

Cherche dans les documents [numéros de preuves] des déclarations de la partie adverse que le dossier contredit et ajoute-les au snake du dossier [numéro de dossier].

2. L’IA lit exactement ces documents en entier et n’inscrit que les déclarations que vos données réfutent, chacune avec ses documents réfutants.

Construis les snakes de tous les dossiers de l’affaire [affaire]. Ratisse large.

3. L’IA travaille dossier par dossier, un snake par dossier ; la fenêtre de l’affaire les affiche ensuite tous dans l’ordre de la liste des dossiers.

Cette contradiction figure-t-elle déjà dans le snake du dossier [numéro de dossier] ?

4. L’IA lit le snake actuel et vous dit si le point est déjà enregistré, et dans quelle entrée.

Ajoute cette contradiction de la partie adverse au snake si elle n’y figure pas encore.

5. L’IA lit le snake actuel, complète l’entrée existante ou en rédige une nouvelle avec chaque document réfutant sur sa propre ligne, et vous montre la modification à accepter.

Quels snakes avons-nous pour le client [client] ?

6. L’IA énumère chaque snake des dossiers du client avec son identifiant, sa version et son nombre d’entrées.

### Ce qui se passe en arrière-plan

- **Lire d’abord.** Si le dossier a déjà un snake, une modification n’est acceptée qu’après que l’IA a lu sa version actuelle dans cette session, et de nouveau après que l’IA de bureau a condensé sa conversation. Un dossier sans snake accepte directement ses premières entrées. L’IA a pour consigne de vérifier que le point n’est pas déjà enregistré et de compléter l’entrée existante plutôt que de la saisir deux fois.
- **Écrire uniquement à partir de ce qui a été lu.** Dès que l’IA a ouvert un document de la partie adverse ou d’une autorité dans le dossier, une modification du snake est refusée tant que ce document n’a pas été lu intégralement.
- **Le texte entier, à chaque fois.** L’IA propose le snake complet, ajout compris ; les écritures partielles (ajout à la fin ou remplacements ciblés) sont refusées, de sorte que chaque proposition est faite avec l’ensemble du registre en vue. Une proposition de plus de 20 000 caractères est refusée avant de vous parvenir.
- **Chaque ligne vérifiée par rapport aux données.** Avant que la proposition ne soit affichée, IRONSTICK vérifie chaque entrée : la première ligne dans la forme requise, une description, au moins une ligne de référence, aucune description après les lignes de référence ; et, pour chaque ligne de référence, que la preuve existe, appartient au CaseID indiqué, porte exactement cette date de document, appartient au même client que le dossier, et que la page se trouve dans le PDF enregistré. En cas d’erreur, rien n’est proposé ; l’IA reçoit la liste des erreurs, entrée par entrée, et les corrige.
- **La fenêtre de contrôle.** IRONSTICK ouvre le dossier sur l’onglet *Snake du dossier* et affiche le texte entier avec chaque modification en gras rouge, avec les boutons *Rejeter* et *Accepter*. Si vous mettez plus d’une minute environ, l’IA est informée que la révision est encore ouverte et ne la renvoie pas ; votre approbation ultérieure enregistre quand même la version.
- **Des versions, jamais d’écrasement.** Chaque proposition acceptée et chaque enregistrement dans l’onglet devient une nouvelle version sous le même numéro *#SNxxxxx* ; un texte inchangé ne crée aucune nouvelle version.
- **Comment l’IA le lit.** L’IA peut lire le snake d’un dossier, les snakes de tous les dossiers d’une affaire dans l’ordre de la liste des dossiers, les snakes de tous les dossiers d’un client, ou un snake par son numéro — chaque bloc coiffé de *#SNxxxxx · vN* avec son dossier. Une liste d’inventaire présente chaque snake avec son nombre d’entrées, sans textes intégraux. Le paquet de reprise d’un dossier et l’évaluation du dossier portent également le snake.
- **Où il produit ses effets.** Le snake agit par la porte du snake dans le [Flux de travail 6 — Rédiger un mémoire](#w6). Lorsqu’il existe des snakes pour le dossier — le sien ou ceux des autres dossiers de ses affaires —, l’IA vous pose la question fixe *Souhaitez-vous le Snake Gate ?*, sauf si vous avez déjà dit *avec snake gate*, ou renoncé au tour, dans vos propres mots. Après votre oui vient le tour du snake de la chaîne de contrôle, avant le tour final du nucleu : l’IA lit intégralement le snake du dossier et les snakes des autres dossiers de ses affaires, relit le projet, et règle chaque entrée du snake dans un fichier de résultat comme intégrée (avec l’endroit dans le document), rejetée ou non pertinente, chacune avec un motif. Une entrée est rejetée si elle, ou sa formulation, pouvait se retourner contre le client. *Déjà utilisée* ou *déjà connue du tribunal* n’est pas admis comme motif : les entrées sont des arguments à répéter dans chaque document où elles conviennent. Le tour n’est accepté que lorsque chaque entrée est réglée, que les snakes et le projet ont été lus après l’ordre, et que le projet a réellement été modifié partout où une entrée a été intégrée.

## Flux de travail 6 — Rédiger un mémoire

Ce flux de travail vous mène d’une demande en termes simples à un modèle prêt à être soumis dans le traitement de texte : un mémoire, une requête à un tribunal ou à une autorité, ou un courrier.
L’IA lit le dossier avant d’écrire, construit le document dans son brouillon chiffré, fait vérifier chaque fait, citation, norme et partie par rapport à vos données, parcourt une chaîne de contrôle fixe et vous interroge à chaque point de décision.
Utilisez-le chaque fois que quelque chose doit quitter votre cabinet par écrit. Ce qui quitte IRONSTICK est toujours un modèle que vous relisez, signez et envoyez vous-même.

![Parcours guidé avec vérifications jusqu’au mémoire finalisé](https://www.ironstick.legal/img/75_ironstick_coaching_line.png)

De votre demande au modèle dans le traitement de texte : l’IA lit, rédige et vérifie, guidée par des contrôles jusqu’à la coche ; vous décidez à chaque étape.

### Étape 0 — définir le contexte

- **Nommer le dossier.** Dans le chat intégré, ouvrez le dossier et choisissez *Rédiger un texte* › *Avec l’aide de l’IA* : le chat s’ouvre avec ce dossier ; à partir d’une entrée de la chronique, le document est déjà nommé. Avec une IA de bureau, indiquez le numéro de dossier dans votre premier message — l’IA peut aussi demander à IRONSTICK quel écran et quel dossier vous avez ouverts.
- **Le dossier a besoin de son pays.** Le droit, la langue et la date du document proviennent de la juridiction définie dans le dossier. Si aucune juridiction n’est définie, le format de document est refusé avec la demande de la définir d’abord.
- **Utilisez le modèle le plus puissant de votre IA de bureau.** Pour la rédaction, l’IA a pour consigne de recommander le niveau de modèle le plus puissant avant de commencer, puis de nouveau un niveau plus léger après la remise. L’application d’IA de bureau ne change de modèle que de votre main ; le chat intégré change de lui-même.
- **Regroupez votre premier message.** Dossier, type de document, ce que vous voulez obtenir, numéros des preuves sur lesquelles il repose, ton et longueur, et un acte antérieur dont l’adressage a fonctionné. Ce sont les documents qui fondent un mémoire, pas les adjectifs.
- **Dites d’emblée ce que vous voulez des tours de contrôle.** Des mots tels que *avec snake gate* ou *sans snake ni nucleu* dans votre propre message sont reconnus par IRONSTICK ; l’IA ne pose alors pas de question sur ces tours pour ce document. Un texte collé ne compte pas comme vos propres mots.

Rédige la réponse au mémoire en défense #0004127 dans le dossier [numéro de dossier], fonde-la sur #0003310 et #0003318, courte et factuelle, adressée comme l’appel du 12 mai, avec snake gate.

### Ce que vous dites — pas à pas

Rédige une réponse à [#numéro de preuve] dans le dossier [numéro de dossier]. Objectif : [objectif].

1. L’IA lit le dossier, le nucleu de l’affaire et du dossier, ainsi que le document auquel vous répondez, puis rédige dans son brouillon.

Utilise [#numéros de preuves] comme preuves. Ton : [factuel / ferme].

2. Vos instructions sont intégrées au projet ; chaque document cité est lu en entier.

Aucune correction — continue.

3. La chaîne de contrôle s’exécute : relecture, comparaison avec vos actes antérieurs, attaque du point de vue de la partie adverse, tour du snake, vérification du nucleu.

Modifie le point [numéro] : [votre correction].

4. Le projet est corrigé et vérifié de nouveau avant de poursuivre.

Livre-le.

5. Le document apparaît dans la fenêtre de téléchargement ; reprenez-le dans le traitement de texte, signez-le et envoyez-le vous-même.

### Ce qui se passe en arrière-plan

- **Juridiction et langue.** L’IA détermine la juridiction à partir du dossier avant tout travail juridique. Elle vous parle dans la langue du système IRONSTICK ; le document est rédigé dans la langue officielle du pays du dossier, et le format porte le numéro de dossier et la date du jour.
- **Lire le dossier avant d’écrire.** Les outils qui écrivent sur un dossier sont refusés tant que l’IA n’a pas lu le digest du dossier ; un mémoire exige en outre que les documents les plus récents du dossier aient été lus en entier. Le refus énumère ce qui reste non lu.
- **Porte de départ pour le format.** Le format de document contraignant (selon le type de document : mémoire ou courrier, représenté par un avocat ou sans représentation) n’est fourni qu’après que l’IA a lu le digest complet, chaque document sortant du client dans ce dossier en entier, le document auquel le mémoire répond en entier, la mémoire du dossier et chaque Nucleu du dossier. Tout ce qui est adressé à un tribunal est un mémoire, jamais un courrier. Pour un mémoire, le format apporte aussi un profil du tribunal tiré de vos dossiers.
- **D’abord vos demandes d’origine.** Lorsque le mémoire répond à un document, l’IA doit d’abord énumérer dans le chat chaque demande de la requête initiale du client dans le dossier, citée avec son numéro de preuve, vous demander si elle est toujours exacte, et terminer son tour. Le format n’est fourni qu’après votre réponse. Si le document ouvre lui-même la procédure, l’IA le dit en une phrase et ne pose aucune question.
- **Le nucleu d’abord.** La rédaction, la vérification et la remise sont refusées tant que chaque nucleu actuel du dossier — le Nucleu du dossier et le nucleu de chaque affaire à laquelle il appartient — n’a pas été lu dans sa version actuelle, de nouveau après chaque nouvelle version et après que l’IA de bureau a condensé sa conversation.
- **Écrire uniquement à partir de ce qui a été lu.** Dès que l’IA a ouvert un document de la partie adverse ou d’une autorité dans le dossier, le travail sur un document de ce dossier est refusé tant que ce document n’a pas été lu intégralement. Un projet qui cite des documents que l’IA n’a pas lus en entier est verrouillé contre toute modification jusqu’à leur lecture ; supprimer le passage cité ne lève pas le verrou.
- **La vérification déterministe du mémoire.** Elle s’exécute sur l’état actuel du fichier, sans IA, et contrôle : chaque référence de preuve et chaque cachet, et que chaque document cité ou annexé a été lu pour ce document ; chaque citation de loi par rapport à la bibliothèque juridique vérifiée ; chaque citation littérale par rapport aux textes intégraux du dossier, aux documents récupérés et à la bibliothèque ; les numéros de dossier ; les montants, qui doivent correspondre exactement à la forme enregistrée ; les noms du client, des personnes et des institutions lettre pour lettre, signes diacritiques compris ; les IBAN et, comme contrôle propre à un pays, les numéros personnels roumains (CNP) par somme de contrôle et par rapport aux données ; que chaque personne ou société nommée a été lue avec ses liens ; et le format contraignant, y compris la liste des annexes. Chaque constat est marqué VERIFIED, UNVERIFIED ou CONTRADICTED.
- **Lire avant d’écrire, pas après.** Une lecture effectuée après la dernière modification du projet ne compte pas pour cette vérification : l’IA doit d’abord lire, puis l’intégrer au texte, puis vérifier de nouveau.
- **Citations.** Une citation introuvable dans toute source bloque la remise ; la reformuler ou retirer les guillemets la laisse bloquée, et la seule correction est la formulation exacte de la source. Une citation qui disparaît du texte vous est signalée lors de la remise.
- **Annexes.** Chaque entrée d’annexe doit porter la référence de la preuve, le cachet de dépôt récupéré auprès de IRONSTICK et l’espace réservé de la page. Une annexe sans fichier enregistré et sans média est signalée pour contrôle. Une annexe qui est un document sortant ou un acte de la partie adverse est signalée avec la consigne de joindre à la place le document original, si l’acte n’a été joint que pour une seule page ; ce signalement est une note de contrôle, pas un blocage.
- **Les constats ouverts retournent à l’IA.** Chaque constat de la vérification est renvoyé à l’IA pour correction, et la vérification s’exécute de nouveau sur le nouvel état. Les vérifications sont comptées par document, tous numéros de version confondus : si des constats restent ouverts après la cinquième vérification, IRONSTICK vous remet la décision par un message système, et l’IA vous présente les points restés ouverts, afin que vous décidiez de la suite.
- **D’abord le résumé.** Après le premier OK, la chaîne de contrôle commence par un résumé du document à votre intention — destinataire et procédure, demandes, structure, faits clés avec leurs preuves, lois citées. L’IA attend votre réponse ; les corrections sont intégrées avant que la chaîne ne continue.
- **La chaîne de contrôle.** Chaque étape est rapportée à la vérification du mémoire et vérifiée avant que l’ordre suivant ne vienne : relire le fichier entier ; les actes antérieurs du client sur les documents cités, afin que le client ne contredise pas ses propres actes antérieurs ; un tableau de réponse couvrant chaque passage du document auquel on répond ; une attaque du point de vue de la partie adverse, rédigée dans un fichier séparé et réglée point par point dans le projet ; une évaluation, réglée de la même manière. Un fichier ne compte comme lu que lorsque chaque ligne a été lue depuis l’ordre ; un tour sans aucun constat retenu, où la plupart des constats sont écartés comme déjà traités, est refusé.
- **Questions fixes.** Viennent ensuite jusqu’à deux questions fixes — la question du nucleu lorsque le dossier a un nucleu, la question du snake lorsqu’il existe des snakes pour lui. L’IA les pose mot pour mot, une à la fois, et n’accepte qu’un oui ou un non de votre propre message. Un nouveau mémoire sans version antérieure reçoit le tour du nucleu sans la question. Votre réponse est retenue pour toutes les versions du document.
- **Tour du snake.** Après votre oui, l’IA lit les snakes du dossier et de ses affaires et consigne, pour chaque entrée du snake, si elle a été intégrée, rejetée ou jugée non pertinente, chacune avec un motif ; une entrée est rejetée si elle pouvait se retourner contre le client.
- **Tour du nucleu.** Le document est comparé au nucleu point par point. Une contradiction ne peut pas être rejetée : elle est corrigée ou marquée comme conflit. Un conflit arrête le travail sur ce document ; l’IA doit vous avertir en détail et ne poursuivre qu’après votre décision de corriger le document ou de maintenir l’écart.
- **Vos corrections restent.** Vos propres messages sont consignés par document. Une correction de votre part qui a été intégrée puis de nouveau retirée bloque la chaîne et la remise. Un passage fondé sur vos propres mots ne peut pas être supprimé tant que l’IA ne vous a pas interrogé.
- **Une modification relance la chaîne.** Chaque modification annule la dernière vérification. Une modification après la chaîne achevée relance toute la chaîne.
- **Une seule question de remise.** À la fin, l’IA nomme en trois lignes au plus ce que la chaîne a modifié et demande une seule fois si elle peut remettre. La remise est refusée sans une vérification positive récente pour exactement cet état du fichier, et sans votre oui.
- **Décisions judiciaires ouvertes.** Si des décisions de justice attendent encore d’être évaluées, l’IA vous demande si elles doivent l’être maintenant, afin que leurs résultats alimentent le document, ou plus tard.
- **Remise dans le traitement de texte.** Le fichier passe uniquement par la boîte de dialogue de téléchargement d’IRONSTICK : l’enregistrer, ou transmettre directement le Markdown au traitement de texte. Vous y modifiez, ajoutez l’en-tête, excluez des pages, apposez votre signature et exportez un PDF ou un DOCX. Un fichier inchangé déjà remis n’est répété que sur demande, sans nouveau numéro de version.
- **Après la remise.** L’IA demande si le document est terminé ou nécessite des corrections. Tant que vous n’avez pas répondu, l’IA ne peut que lire. Votre correction est rattachée à la version remise, qui devient caduque, et la version suivante est créée pour la correction. L’impression dans le traitement de texte, ou l’envoi du PDF pour le contrôle de l’e-mail, clôt le document.
- **Le paquet e-mail.** Un e-mail destiné à un tribunal n’est préparé que pour un PDF finalisé : vous glissez le PDF signé dans le chat, l’IA le compare à la dernière version, et seul un PDF correspondant ouvre le format e-mail — objet, corps avec expéditeur, identifiant et numéro de dossier, liste du paquet, et destinataire, sous forme de zones de copie. Les dépôts volumineux sont découpés en parties d’environ dix mégaoctets sur l’écran d’envoi de courrier, chacune avec son e-mail d’accompagnement. IRONSTICK n’envoie rien ; vous envoyez depuis votre propre programme de messagerie.

## Flux de travail 7 — OSINT : rechercher une personne ou une société

Utilisez ce flux de travail lorsque vous voulez savoir qui est une partie : un adversaire, un témoin, une société derrière une adresse, les personnes autour d’une entreprise.
L’IA exécute une procédure de recherche fixe à travers vos propres données et l’Internet ouvert, ouvre et lit les sources, et saisit ce qu’elle peut vérifier sous forme de propositions dans le Moniteur de cohérence des données.
Rien ne devient partie de vos données tant que vous ne l’y avez pas accepté. La recherche n’exige aucun dossier : une partie peut être recherchée isolément.

![Recherche sur les personnes et les sociétés via le Bridge](https://www.ironstick.legal/img/60_mcp_network.png)

Une partie à la fois : chercher, lire, vérifier, proposer — et vous décidez dans le Moniteur de cohérence des données.

### Étape 0 — définir le contexte

- **Avoir les données clés de la partie à portée de main.** La vérification OSINT exige le nom complet, le pays et s’il s’agit d’une personne physique ou d’une société ; la ville et le quartier dans la mesure où ils sont connus. Le pays détermine la langue des termes de recherche. Ville, quartier et pays sont aussi obligatoires pour chaque nouvelle partie que l’IA propose ensuite.
- **Aucun dossier requis.** La vérification OSINT ne prend aucun numéro de dossier. Si vous souhaitez aussi lier la partie à un dossier, dites-le — le lien fait alors l’objet d’une proposition distincte.
- **Une fiche existante aide.** Si la partie figure déjà dans IRONSTICK, nommez-la ou donnez son numéro (par exemple @E0001234). L’IA lit d’abord la fiche ; la vérification OSINT énumère aussi d’elle-même les entrées existantes portant le même nom.
- **Plusieurs noms ?** Si vous avez une liste (une liste d’amis, une liste de participants, des mentions légales) saisie comme document, demandez à l’IA de comparer d’abord la liste à toutes les personnes d’IRONSTICK, puis de ne rechercher que les noms qui comptent.
- **Sans la conversation avec l’IA.** Dans l’analyse d’une personne, le bouton *Recherche web* ouvre une recherche guidée qui vous est propre : liens candidats, résumés de pages, aperçu des champs d’analyse et enregistrement dans l’analyse de la personne.

### Ce que vous dites — pas à pas

Recherche [nom complet], [ville], [pays] — personne physique.

1. Vos propres données sont d’abord vérifiées ; puis les sources sur Internet sont ouvertes et lues.

Recherche la société [nom], [ville], [pays].

2. La même procédure pour une société, y compris son numéro fiscal et son siège social.

Existe-t-il un lien entre [personne] et [personne] ?

3. Les relations existantes sont affichées ; de nouvelles sont recherchées dans vos données et les sources.

Montre-moi la source de [constat].

4. Vous obtenez le lien ou le numéro de preuve derrière le constat.

Saisis les constats vérifiés sous forme de propositions.

5. Les constats arrivent dans le Moniteur de cohérence des données ; rien n’est enregistré tant que vous ne l’y avez pas accepté.

### Ce qui se passe en arrière-plan

- **La vérification OSINT.** L’IA lance la vérification avec nom, ville, quartier, pays et personne physique ou morale, et la même procédure s’exécute chaque fois. En interne, le nom est recherché en texte intégral dans toute la base de données (tous les clients) ; par dossier, les 10 entrées de preuve les plus récentes reviennent avec le paragraphe de chaque résultat, plus le nombre de celles qui existent en sus. Sur le web, une liste fixe de recherches s’exécute : CV, Facebook, LinkedIn, Instagram, quartier, ville, scandale, actualités, déclarations de patrimoine et d’intérêts (lorsqu’elles sont publiées), fiscalité, sociétés ; pour une société, le registre du commerce et l’insolvabilité remplacent les recherches personnelles. Les termes de recherche sont dans la langue du pays de la partie et sont exécutés sur trois moteurs de recherche. Les liens et titres reviennent sans doublons. La recherche s’exécute comme tâche d’arrière-plan ; tant qu’elle n’est pas terminée, l’IA répète l’appel identique pour continuer d’attendre. La vérification elle-même n’écrit rien.
- **D’abord les entrées existantes.** Si IRONSTICK détient déjà des personnes, sociétés ou institutions correspondant au nom, la première réponse les énumère en entier, la meilleure correspondance en premier. L’IA nomme l’entrée qui correspond à cette partie, ou « aucune ». Une entrée signalée reçoit chaque constat ; pour une IA de bureau au pont, une proposition de créer à nouveau la même partie est alors refusée.
- **Un profil préparé.** L’IA le vérifie source par source et écarte les homonymes. Les liens dont le résultat de recherche affiche le nom complet sont les liens correspondants, triés du meilleur au moins bon ; les autres sont facultatifs ; les simples pages d’accueil sont écartées. La tâche de l’IA est de lire chaque résultat de preuve, d’ouvrir chaque lien correspondant et de n’utiliser que ce que la page ouverte elle-même énonce — jamais un titre seul.
- **Porte OSINT — une partie à la fois.** Pour une IA de bureau au pont, le résultat se termine par une liste de contrôle, et la vérification OSINT suivante pour une autre partie est refusée tant qu’elle n’est pas traitée :
   - les 10 premiers liens correspondants ouverts (au moins 20 % d’entre eux si cela fait davantage) ;
   - chaque entrée de preuve listée lue — un résultat dévié vers le brouillon ne compte que s’il est lu jusqu’à la fin, une recherche à l’intérieur ne compte jamais ;
   - pour une personne, chaque page ouverte qui nomme la personne et a atterri dans le brouillon lue à ses résultats ;
   - puis soit une proposition, soit la déclaration que rien d’exploitable n’a été trouvé ;
   - pour une personne, aussi chaque lien avec d’autres personnes proposé, ou la déclaration qu’il n’y en a aucun.
- Une page qui nomme le nom complet de la personne avec la ville ou le quartier ne peut pas être close comme « rien d’exploitable » à moins que l’IA ne la liste comme déjà enregistrée ou comme homonyme. Le refus nomme exactement ce qui manque. Les lectures sont comptabilisées par session, de sorte que la lecture d’une session ne compte jamais pour une autre.
- **Nouvelle personne seulement après une vérification OSINT complète.** Pour une IA de bureau au pont, une proposition de nouvelle personne physique est refusée tant que la vérification OSINT pour ce nom n’a pas été menée à terme. Ville, quartier et pays sont obligatoires pour chaque nouvelle partie et chaque entrée d’adresse. Une nouvelle partie exige par ailleurs au moins deux champs de détail en plus de son nom. L’adresse d’une personne physique est comparée aux adresses des institutions — l’adresse d’un employeur est refusée comme adresse de domicile — et une nouvelle société a besoin de son numéro fiscal, associations exceptées.
- **Ouvertes, pas des extraits.** Les pages web sont ouvertes et lues avec l’outil de pages d’IRONSTICK ; les résultats de recherche ne sont que des pointeurs. Les grandes pages sont conservées en entier dans le brouillon chiffré et lues à partir de là. Les formulaires de recherche et les tableaux de données qui ne se remplissent qu’après un filtre peuvent être interrogés directement. Une page ouverte dans la même session est resservie à partir d’une copie pendant 30 minutes. Un document numérisé dont le traitement prend plus de temps est signalé comme pas encore prêt ; le traitement se poursuit et l’appel suivant renvoie le texte.
- **Les contrôles anti-robot et les connexions vous reviennent.** Lorsqu’un site web affiche un contrôle anti-robot ou bloque les accès automatisés, IRONSTICK ouvre la page dans sa propre fenêtre de navigateur et l’IA vous demande d’y effectuer le contrôle. Ensuite, l’IA lit la page dans cette fenêtre, ouvre d’autres pages du même site web et télécharge ses fichiers dans le brouillon chiffré ; rien n’entre dans un dossier tant que vous ne l’avez pas saisi. Pour un autre site web, l’IA revient à l’outil de pages ; lorsqu’elle a terminé, elle signale le travail dans le navigateur comme terminé, et la fenêtre vous demande si vous voulez la fermer ou la laisser ouverte.
- **Instructions cachées masquées.** Le texte des pages web ouvertes et de la fenêtre de navigateur passe par une inspection fondée sur des règles ; les passages qui s’adressent à une IA, imitent un chat ou un texte de contrôle d’IRONSTICK, ou cachent du texte dans des caractères invisibles sont écrasés par des astérisques, et un avertissement figure au-dessus du contenu.
- **Listes de noms en une passe.** Une comparaison de listes compare de façon déterministe une liste saisie à chaque personne et chaque société d’IRONSTICK — accents neutralisés, ordre des mots ignoré, tolérant aux erreurs d’OCR. Les correspondances sont classées exacte, permutée, variante ou mot isolé ; les correspondances sur un mot isolé sont toujours ambiguës et doivent être vérifiées.
- **Des propositions au lieu d’écritures.** Les faits vérifiés vont sous forme de propositions dans le Moniteur de cohérence des données : données de base, analyse de la personne, liens et doublons. Pour l’analyse de la personne, l’IA doit d’abord lire la personne ; un champ qui contient déjà du contenu n’est modifié que si l’IA transmet ce contenu mot pour mot. Un champ d’analyse accepté entre dans la dernière analyse de la personne. Une nouvelle personne ne reçoit son numéro qu’après votre acceptation, de sorte que les liens vers elle exigent une seconde acceptation.
- **Jamais dans la mémoire de l’IA.** Les constats et l’avancement de l’OSINT appartiennent à la partie, non à la mémoire. Tant qu’une vérification OSINT d’une IA de bureau est ouverte, toute tentative d’enregistrer une entrée de mémoire est refusée avec la consigne de saisir les faits auprès de la partie.
- **La recherche web sur une personne dans l’application.** Le bouton *Recherche web* dans l’analyse de la personne exécute quatre étapes : une recherche web avec des variantes du nom collecte des liens candidats (une recherche web supplémentaire par IA n’a lieu qu’avec votre consentement) ; vous retirez les résultats indésirables ; les pages restantes sont chargées et résumées par une IA externe ; vous cochez les sources, et l’IA les condense dans les champs d’analyse sous forme d’aperçu modifiable. L’enregistrement écrit les champs dans l’analyse de la personne qui n’est pas liée à un dossier, marquée comme non confirmée. L’IA externe n’est utilisée qu’après votre accord dans une boîte de dialogue de consentement ; si vous refusez, rien n’est envoyé.

## Flux de travail 8 — Recherche juridique : d’abord les lois de la bibliothèque

Utilisez ce flux de travail chaque fois qu’une loi, un article de code ou un règlement importe : pour répondre à une question juridique, vérifier une citation ou fonder un mémoire.
L’IA lit les normes dans votre propre bibliothèque juridique, mot pour mot, et ne va sur Internet que lorsque la bibliothèque n’a rien sur cette norme.
Une loi trouvée en ligne est ouverte, lue, citée avec son URL et signalée, afin qu’après votre approbation elle entre dans la bibliothèque.
La bibliothèque est ce à quoi la vérification du mémoire confronte chaque article cité.

![La bibliothèque juridique](https://www.ironstick.legal/img/43_statutes.png)

La bibliothèque d’abord, le web seulement en cas d’absence, et chaque source web retourne dans la bibliothèque avec votre approbation.

### Étape 0 — définir le contexte

- **Ouvrir le dossier ou le nommer.** Le droit applicable provient du dossier. L’IA lit la juridiction enregistrée dans le dossier avant tout travail juridique de fond.
- **Si aucune juridiction n’est nommée.** La recherche dans la bibliothèque utilise alors la juridiction du dossier sur lequel l’IA a travaillé en dernier dans la session et le dit ; sans dossier connu, elle cherche dans toutes les juridictions et demande à l’IA de vérifier la juridiction de chaque résultat.
- **Voir ce que contient la bibliothèque.** L’écran *Lois* énumère chaque loi de la bibliothèque avec titre, juridiction, domaine, source et statut, possède sa propre recherche en texte intégral et un bouton d’ajout pour un lien ou un fichier PDF ou Markdown. Demandez à l’IA « quelles lois la bibliothèque contient-elle pour [pays] ? » pour obtenir le même aperçu dans la conversation.
- **Demandez la lecture dont vous avez besoin.** Un aperçu rapide, le texte littéral d’un article ou une lecture complète d’une loi. Dites laquelle.

### Ce que vous dites — pas à pas

Que dit l’art. [numéro] de [loi] ? Cite-le.

1. L’article est lu mot pour mot dans votre bibliothèque juridique et cité avec sa source.

[Question] est-elle réglée dans [loi] ? Donne-moi les articles.

2. La bibliothèque est interrogée ; vous obtenez les articles pertinents avec leur formulation exacte.

Vérifie les normes citées dans mon projet par rapport à la bibliothèque.

3. Chaque article cité est comparé au texte intégral de la bibliothèque.

[Loi] ne figure pas dans la bibliothèque — cherche-la sur le portail officiel.

4. Le web n’est ouvert que pour une norme que la bibliothèque ne détient pas ; la page est lue, citée avec son lien et proposée pour votre bibliothèque.

### Ce qui se passe en arrière-plan

- **La recherche dans la bibliothèque.** Elle parcourt tous les fichiers de lois de la bibliothèque de deux manières : par désignation (« Code civil », « Règlement (UE) 2016/679 »), comparée au titre et à la description et classée en premier, ou par passage, une recherche approximative où environ 60 % des mots suffisent. Chaque résultat nomme le numéro d’enregistrement interne (numéro L), le fichier, de courts extraits avec leurs positions exactes de caractères et un appel prêt à l’emploi pour récupérer le texte qui les entoure.
- **Lecture littérale.** Le lecteur d’article renvoie un article par numéro L et numéro d’article ; la recherche d’expression renvoie une plage de caractères ou chaque endroit où une expression apparaît, avec le texte qui l’entoure. Tous deux enregistrent exactement ce qu’ils ont renvoyé comme lu. Le lecteur de loi renvoie une loi entière ; une loi plus grande que la limite du connecteur va intégralement dans l’espace de travail chiffré ; compte comme lu ce que l’IA en extrait avec le lecteur d’article.
- **La bibliothèque juridique d’abord.** Une recherche web ou une requête de page qui ressemble à une recherche de loi — numéros d’article ou de paragraphe, noms de codes, numéros de loi, portails de lois — est refusée tant que l’IA n’a pas cherché cette norme dans la bibliothèque. Si la bibliothèque a des résultats, le web reste fermé pour cette norme et l’IA est invitée à citer à partir de la bibliothèque. Ce n’est que lorsque la bibliothèque ne signale aucune correspondance que le web est libéré pour cette norme, pendant 15 minutes, y compris les liens de portails de lois que cette recherche renvoie. Les résultats dont le titre ne porte pas le numéro ou la désignation de l’acte recherché, ou qui ne contiennent pas le numéro d’article recherché, ne comptent pas comme « la bibliothèque l’a » — la mention d’un règlement dans sa loi mère est un tel faux résultat. La porte s’applique au chat IA et à chaque IA de bureau.
- **Ouvertes, pas des extraits.** Une page utilisée comme source est ouverte et lue avec l’outil de pages d’IRONSTICK ; les résultats de recherche ne sont que des pointeurs. Toute source Internet est citée avec son URL. Le texte d’une loi est cité à partir du fichier de la bibliothèque dès que la source s’y trouve.
- **Signaler les sources de lois.** Après une recherche web relative à une loi, ou après que l’IA a ouvert une page d’un portail de lois, chaque réponse d’outil suivante commence par le rappel de signaler la source, pendant 15 minutes au plus. Un lien de portail qui apparaît simplement dans un résultat de recherche sans rapport ne reçoit qu’une note.
- **Ouverte par l’IA elle-même.** Un signalement de source n’est accepté que si la même session d’IA a ouvert exactement cette page avec l’outil de pages au cours des dernières 24 heures. Sinon, le signalement est refusé avec la consigne d’ouvrir la page et de vérifier qu’elle contient réellement le texte de la loi — pas une page d’erreur, une page de connexion, un résultat de recherche ou un aperçu. Comme toute écriture datée, le signalement exige que la date actuelle ait été récupérée au cours des 30 dernières minutes.
- **Votre consentement.** Les sources signalées sont rassemblées dans une seule boîte de dialogue, chacune avec une case à cocher. Les sources cochées sont récupérées par un processus d’arrière-plan, converties, vérifiées et enregistrées dans la bibliothèque ; les sources non cochées sont refusées. Fermer la boîte de dialogue laisse les sources rassemblées ; elle revient avec le signalement suivant. Un lien déjà présent dans la bibliothèque reçoit la réponse « existant » ; une source différente pour un acte que la bibliothèque détient déjà devient une demande de remplacement de la source, sous le même numéro L.
- **Aucun portail de lois dans la fenêtre de navigateur.** La fenêtre de navigateur d’IRONSTICK, où vous effectuez les contrôles anti-robot et les connexions pour d’autres sites web, refuse les portails de lois : rien n’y est ouvert, lu ou téléchargé. Un portail de lois qui bloque l’outil de pages n’est pas confié à cette fenêtre.
- **Actualité de la bibliothèque.** Les sources liées sont revérifiées par rapport à leur source environ tous les 14 jours ; l’IA peut aussi revérifier immédiatement une seule loi. Si une loi s’écarte de sa source, l’IA recherche la version actuelle en ligne. Les fichiers téléversés sans source sont signalés comme tels.
- **Citations dans un mémoire.** La vérification du mémoire confronte chaque article cité au journal de lecture des outils de la bibliothèque. Un article qui existe dans la bibliothèque mais n’y a pas été lu avant la dernière modification du projet est un constat bloquant, avec la consigne de le lire littéralement avec le lecteur d’article et de l’intégrer au texte. Une norme absente de la bibliothèque est un constat bloquant tant que sa source n’est pas signalée et intégrée. Une lecture compte lorsqu’elle est intervenue après la dernière modification du texte de la bibliothèque et avant la dernière modification du projet.
- **Localisé n’est pas lu.** Trouver un numéro d’article dans un fichier de loi, ou le nommer dans un aperçu, n’est pas une lecture littérale. Pour un mémoire, chaque article cité est lu avec le lecteur d’article, et l’IA vérifie que le texte étaye réellement sa phrase.
- **Lire une loi entière.** Lorsqu’un code complet se trouve dans le brouillon et que l’IA le lit là par parties, elle a le texte intégral dans sa conversation. Pour la vérification du mémoire, un article ne compte toujours comme lu que s’il est passé par le lecteur d’article ou la recherche d’expression, ou avec une loi assez petite pour être renvoyée directement.

## Travailler avec l’IA — votre assistant dans le dossier

En principe, un chat avec une IA connectée à IRONSTICK par le pont est un outil extraordinairement puissant. Voyez-le comme un assistant juridique ou un confrère. Par le pont, l’IA peut non seulement rechercher des documents, des passages de texte ou des pièces individuelles — elle peut aussi consulter des images enregistrées, consulter et vérifier des fichiers PDF sur demande, lancer de nouvelles numérisations OCR et bien davantage.

Lorsque vous travaillez avec l’IA, travaillez avec elle comme vous le feriez avec un assistant juridique ou un avocat. Donnez simplement des instructions claires sur ce que vous voulez exactement. L’IA effectue en arrière-plan les requêtes nécessaires par le pont, directement dans IRONSTICK — c’est-à-dire dans vos dossiers.

**En règle générale :** sans votre consentement, l’IA ne peut guère faire plus que lire dans IRONSTICK. Les modifications des données de base, de la chronique, du calendrier, de la mémoire, des textes intégraux et de la bibliothèque juridique ne prennent effet qu’après votre approbation : soit vous recevez pour cela un formulaire ou une boîte de dialogue dans IRONSTICK, soit la demande de modification de l’IA apparaît dans le Moniteur de cohérence des données. Sans une telle boîte de dialogue, l’IA n’écrit que dans ses propres zones de travail — le brouillon chiffré, le journal quotidien à votre demande et sa propre évaluation de dossier après les vérifications déterministes. Les étiquettes et messages du chat du cabinet exigent votre confirmation dans le chat.

**Transparence totale :** chaque application d’IA de bureau affiche ses appels d’outils — vous voyez à tout moment quelles informations l’IA a extraites d’IRONSTICK.
Soyez strict dans vos questions et instructions, et dites à l’IA où et comment rechercher. Vous n’avez pas besoin de nommer l’outil de recherche — l’IA le connaît elle-même — mais dites-lui clairement d’aller chercher l’information dans IRONSTICK : chez le client XY, dans le dossier XY, dans la preuve XY. Vous pouvez simplement nommer les clients par leur nom — l’IA résout elle-même l’identifiant du client — ou copier le numéro du client (*@C0000000*) depuis IRONSTICK et le donner à l’IA. Il en va de même, par exemple, avec un numéro de preuve (*#0000000*).

L’IA couvre ce que la logique de programme déterministe ne peut pas faire, ou seulement au prix d’un effort extrême — comprendre et écrire le langage naturel. Tout le reste — l’accès à vos dossiers, la sélection du dossier judiciaire, les vérifications par rapport à vos données, la règle selon laquelle vos données ne changent qu’avec votre approbation — est assuré par IRONSTICK lui-même, de façon déterministe. L’IA ne devient jamais la source des faits ; c’est IRONSTICK qui l’est. C’est ce qui distingue si fondamentalement l’approche d’IRONSTICK de l’usage conventionnel de l’IA.
Pour vous, en tant qu’utilisateur, IRONSTICK se présente cependant sous la forme familière — comme l’interface graphique ou comme un dialogue.
