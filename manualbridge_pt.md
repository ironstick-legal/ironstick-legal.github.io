# Manual - Bridge

> Manual da Bridge — trabalhar com a IA: o que acontece nos bastidores e oito fluxos de trabalho, do início do dia ao OSINT e à pesquisa legislativa.

Página original: https://www.ironstick.legal/manualbridge_pt.html

---

Manual da Bridge — trabalhar com a IA: o que acontece nos bastidores e oito fluxos de trabalho, do início do dia à pesquisa legislativa.

Fundamentos

## 1. Chat de IA e Bridge — qual é a diferença?

O IRONSTICK oferece-lhe duas formas de trabalhar com uma IA sobre os seus processos.
O **chat de IA** está integrado no programa: escreve numa janela do IRONSTICK e é o próprio IRONSTICK que envia o pedido a um serviço de IA externo – com as chaves de API que o seu escritório registou na [Configuração de IA](https://www.ironstick.legal/manualquickstart_pt.html#q3).
A **Bridge** funciona ao contrário: escreve na aplicação de IA para desktop que já utiliza, e essa aplicação chama as ferramentas do IRONSTICK em tempo real através de um conector.
Em ambos os casos, a IA acede aos seus dados exclusivamente através do IRONSTICK, pelas mesmas ferramentas e por detrás das mesmas barreiras.

### O chat de IA integrado

- **Primeiro, uma camada local.** Cada mensagem passa primeiro por uma camada baseada em regras que corre no seu computador – sem modelo de IA e sem Internet. Os pedidos simples – abrir um ecrã, um cliente ou um processo, consultas simples – são executados aí diretamente. Tudo o que exija raciocínio ou redação segue para um serviço de IA externo.
- **As suas chaves, os seus serviços.** O chat utiliza os serviços de IA externos para os quais existe uma chave de API registada na Configuração de IA. São utilizados automaticamente por uma ordem fixa. Se um deles não estiver acessível ou o seu saldo se esgotar, o seguinte assume o mesmo pedido.
- **Primeiro, o seu consentimento.** Antes de o chat enviar o que quer que seja a um serviço de IA externo, pergunta-lhe. Se recusar, nada é enviado, e o chat só volta a perguntar quando mudar de modo ou reabrir o chat.
- **Pseudonimizado.** Antes de um pedido sair do seu computador, os nomes de pessoas e empresas, os números de processo e de referência, os números de identificação pessoal, os IBAN, os números de telefone, os endereços de e-mail e as moradas das partes são [substituídos por marcadores neutros](https://www.ironstick.legal/gdpr_pt.html). A resposta é retraduzida no seu computador. As datas e os montantes mantêm-se inalterados. Os marcadores são gerados a partir dos seus próprios registos; além disso, são reconhecidos números, endereços de e-mail e números de telefone no texto livre.
- **Registado.** Cada chamada a um serviço de IA externo é registada localmente, precisamente na forma com marcadores em que saiu do seu computador.
- **Memória de trabalho compacta.** A cada interação, a IA recebe a parte mais recente da conversa (cerca dos últimos 6.000 caracteres) e um breve resumo da parte anterior. Um pedido decorre em até oito rondas de ferramentas.
- **Onde funciona.** No Windows e no tablet Android.

### A Bridge

- **Três componentes.** A sua aplicação de IA para desktop liga-se, através do Model Context Protocol (MCP), a um pequeno programa Bridge no mesmo computador. A Bridge encaminha cada chamada, através de uma ligação protegida acessível apenas a partir deste computador, para a aplicação IRONSTICK em execução. A aplicação executa a ferramenta e devolve o resultado pelo mesmo caminho.
- **O programa Bridge não conhece dados.** Não abre nenhuma base de dados nem contém ferramentas próprias; limita-se a encaminhar as chamadas. Também as instruções de trabalho para a IA provêm da aplicação em execução quando a IA desktop se liga.
- **Apenas enquanto o IRONSTICK estiver em execução.** Se a aplicação estiver fechada, cada chamada de ferramenta recebe como resposta a indicação de que o IRONSTICK não está em execução e de que o deve iniciar. A lista de ferramentas continua visível na IA desktop, pelo que a ordem pela qual inicia os dois programas é indiferente.
- **Dados reais.** Os resultados das ferramentas chegam à IA desktop sem pseudonimização – são os nomes, números e dados reais que tornam possível uma minuta pronta a apresentar. O que a IA lê é tratado na sua própria conta junto do fornecedor da aplicação de IA para desktop e nas condições deste.
- **Ativada por si.** A Bridge só funciona se a opção *Permitir acesso do conector por IA desktop local* estiver ativada na Configuração de IA e se a Bridge estiver [licenciada](https://www.ironstick.legal/download_pt.html) para essa aplicação de IA para desktop. O controlo do programa – abrir ecrãs, processos e documentos, exportar – requer um segundo interruptor.
- **Várias em simultâneo.** As aplicações de IA para desktop licenciadas – Claude Desktop, ChatGPT Desktop, Qwen Desktop e Kimi Desktop – podem estar ligadas em simultâneo e trabalhar no mesmo processo. Cada uma é apresentada, enquanto trabalha, com o seu próprio ícone na barra de menus.
- **Onde funciona.** No Windows.

### Em comparação

|  | Chat de IA (integrado) | Bridge (aplicação de IA para desktop) |
| --- | --- | --- |
| Onde escreve | Na janela de chat do IRONSTICK | Na sua aplicação de IA para desktop |
| Quem comunica com o serviço de IA | O IRONSTICK, com as suas próprias chaves de API | A sua aplicação de IA para desktop, com a sua própria conta |
| Custos da IA | Faturados pelo serviço de IA em função da utilização, na sua chave de API | Cobertos pela subscrição que já tem para a aplicação de IA para desktop |
| Licença IRONSTICK | Incluído, sem licença adicional | [Licença Bridge](https://www.ironstick.legal/download_pt.html) por utilizador / posto de trabalho – uma Bridge por aplicação de IA para desktop ou o pacote de todas as Bridges |
| Dados enviados à IA | Pseudonimizados; datas e montantes inalterados | Dados reais, tratados na sua conta junto do fornecedor |
| O seu consentimento | Antes do primeiro pedido externo de uma sessão de chat | Antes do primeiro acesso a dados por qualquer IA desktop em cada execução do programa |
| Instruções de trabalho | São enviadas com cada pedido | A IA tem de as ler e confirmar textualmente uma regra antes de abrir uma ferramenta |
| Ferramentas e barreiras | As mesmas ferramentas e as mesmas barreiras, mais uma pesquisa no próprio histórico do chat | As mesmas ferramentas e as mesmas barreiras; controlo do programa apenas com o respetivo interruptor |
| Duração de uma sessão de trabalho | Conversa mais recente e um breve resumo; até oito rondas de ferramentas por pedido | A conversa da aplicação de IA para desktop |
| Plataformas | Windows e tablet Android | Windows |

### Porque é que a Bridge é indicada para trabalho processual extenso

- **Sem custos por chamada através do IRONSTICK.** Ler processos completos, analisar centenas de documentos e redigir em várias rondas – tudo isto corre pela subscrição que já paga pela aplicação de IA para desktop. O mesmo trabalho feito através do chat integrado é faturado em função da utilização na sua chave de API, o que, em processos grandes, se acumula rapidamente.
- **Sessões de trabalho mais longas.** A IA desktop mantém a sua própria conversa contínua — ideal para longas sessões de trabalho sobre processos volumosos.
- **Respostas maiores por chamada.** O Claude Desktop e o ChatGPT Desktop recebem diretamente respostas de ferramentas até 40.000 caracteres; o Qwen Desktop, o Kimi Desktop e o chat integrado recebem até 10.000. Tudo o que for maior vai integralmente para o armazenamento intermédio encriptado e é lido a partir daí por partes.
- **O conjunto completo de ferramentas, o texto completo.** A IA desktop trabalha com o conjunto completo de ferramentas e lê os textos integrais na sua própria conversa, por detrás das mesmas barreiras que o chat.
- **O chat mantém o seu lugar.** O chat integrado não precisa de licença adicional, está sempre à mão – também no tablet – e é o canal mais rigorosamente controlado: pseudonimizado, com pedido de consentimento e registado.

## 2. Um conjunto de ferramentas — na aplicação cliente

Cada operação que uma IA pode executar reside na aplicação cliente IRONSTICK no seu computador – não na IA nem no programa Bridge.
O chat de IA e cada IA desktop ligada chamam exatamente as mesmas ferramentas. Cada chamada é executada pela aplicação em execução sobre a sua base de dados em tempo real, e apenas o resultado regressa à IA.

- **Um único registo de ferramentas.** O conjunto de ferramentas é construído por um único módulo, tanto para o chat de IA como para a Bridge: as mesmas ferramentas, pela mesma ordem, por detrás das mesmas barreiras. As ferramentas estão agrupadas por temas em conjuntos de ferramentas – processo, provas, prazos, legislação, cartas e e-mails, entre outros –, que a IA abre conforme necessário.
- **Um único caminho.** Cada chamada de ferramenta, seja do chat ou de uma IA desktop, passa pela mesma camada de controlo: o ícone de atividade na barra de menus, a identificação de quem chama, as barreiras e o encaminhamento de resultados grandes para o armazenamento intermédio. Cada IA desktop e cada serviço de API mantém o seu próprio registo do que leu, de modo que a leitura de uma nunca conta para outra.
- **Os dados ficam no IRONSTICK.** O seu processo permanece na base de dados do IRONSTICK no seu computador. Uma IA recebe apenas o que uma ferramenta devolve para a respetiva chamada; o IRONSTICK não lhe entrega nem a base de dados nem a pasta de dados.
- **Em tempo real a cada chamada.** As ferramentas abrem a base de dados a cada chamada. O que guardar é visto pela chamada de ferramenta seguinte.
- **Funciona em segundo plano.** As ferramentas correm em segundo plano dentro da aplicação, pelo que o programa se mantém reativo mesmo durante leituras longas de processos volumosos.
- **A aplicação tem de estar em execução.** Sem a aplicação em execução não há ferramentas: o programa Bridge limita-se a encaminhar chamadas e responde que o IRONSTICK não está em execução.
- **A aplicação tem de estar desbloqueada.** Enquanto o código de segurança de seis dígitos não for introduzido no ecrã inicial, cada chamada de ferramenta de uma IA desktop recebe como resposta a indicação de que a aplicação está bloqueada, e não são devolvidos dados. Introduza o código no IRONSTICK e repita depois o pedido.
- **O acesso é concedido por si.** A Bridge só serve uma IA desktop se o interruptor do conector estiver ativado e essa IA desktop estiver licenciada. O primeiro acesso a dados por qualquer IA desktop após cada arranque do programa abre um único diálogo de confirmação. Se aprovar, o acesso fica aberto para todas as IA desktop licenciadas durante o resto da execução do programa. Se recusar, cada chamada de cada IA desktop é rejeitada durante 10 minutos, e no acesso seguinte é-lhe perguntado de novo. Esta decisão não é guardada.

## 3. As barreiras — o que acontece nos bastidores

Entre a IA e os seus registos existem barreiras incorporadas na camada de ferramentas da aplicação cliente. Trata-se de simples lógica de programa – nenhuma IA verifica outra IA.
Se uma barreira rejeitar uma chamada, nada é escrito nem entregue; a IA recebe uma mensagem que indica o que falta e qual a chamada que abre a barreira.
A maioria das barreiras funciona da mesma forma para o chat de IA e para cada IA desktop; a última coluna mostra onde cada uma se aplica.

| Barreira | Quando é acionada | O que faz | Aplica-se a |
| --- | --- | --- | --- |
| **Consentimento antes da IA externa** | Quando, numa sessão de chat, um pedido tem de ser enviado pela primeira vez a um serviço de IA externo | Um diálogo pergunta se a IA externa pode ser utilizada. Se recusar, nada é enviado, e o chat não volta a perguntar nessa sessão. | Chat de IA |
| **Pseudonimização** | Cada pedido do chat de IA a um serviço de IA externo | Nomes, empresas, números de processo e de referência, números de identificação, IBAN, números de telefone, endereços de e-mail e moradas das partes saem do computador como marcadores e são retraduzidos no seu computador. As datas e os montantes mantêm-se inalterados. Se não for possível construir integralmente a lista de marcadores, o pedido não é enviado. | Chat de IA |
| **Consentimento para acesso a dados** | A primeira chamada de ferramenta de qualquer IA desktop após o arranque do programa | Surge um diálogo de confirmação comum a todas as IA desktop. Aprovado: aberto durante o resto da execução do programa. Recusado: cada chamada é rejeitada durante 10 minutos; depois é-lhe perguntado de novo. | Bridge |
| **Bloqueio de arranque** | Cada chamada de ferramenta enquanto o código de segurança de seis dígitos não for introduzido | A chamada recebe como resposta a indicação de que a aplicação está bloqueada; não são devolvidos dados. | Bridge |
| **Trinco das instruções** | Cada chamada de ferramenta de uma IA desktop | Todas as ferramentas, exceto a leitura das instruções, a sua confirmação e a consulta do idioma do sistema, permanecem fechadas até a IA ter lido as instruções e reproduzido textualmente a regra contra factos inventados. A confirmação caduca 60 minutos após ter sido dada, após 2 horas sem chamadas, à meia-noite, a cada nova ligação e – quando o IRONSTICK consegue consultar o registo da conversa – quando a IA desktop condensa a sua conversa; nesse caso, a IA tem de voltar a ler e reproduzir textualmente uma regra escolhida aleatoriamente. No chat de IA, as instruções são, em vez disso, enviadas com cada pedido. | Bridge |
| **Barreira de data** | Ferramentas que escrevem conteúdos datados – cronologia, calendário, notas diárias, registo diário, memória, comunicações de legislação, entre outras | A chamada é rejeitada, a menos que a IA tenha obtido, nos últimos 30 minutos, a data e a hora atuais reais. | Ambos |
| **Primeiro ler o processo** | Ferramentas que leem dados do processo (cronologia, linha temporal, pesquisas, textos integrais, entre outras) e ferramentas que escrevem num processo (notas, entradas na cronologia, verificação de peças processuais, exportação, passagem a outra IA) | As ferramentas que leem o conteúdo de um processo são rejeitadas até a IA ter lido o digest desse processo. Uma nota ou uma entrada na cronologia exige, além disso, o perfil do processo, a jurisdição e as entradas mais recentes da cronologia. Uma verificação de peça processual, uma exportação ou uma passagem exige ainda que os documentos mais recentes do processo tenham sido lidos na íntegra. A rejeição enumera o que ainda não foi lido. | Ambos |
| **Escrever apenas a partir do que foi lido** | Entradas de memória, alterações a uma Snake, trabalho sobre minutas, a verificação de peças processuais e a entrega relativa a um processo | Uma entrada de memória relativa a um processo só é aceite se o digest tiver sido lido e se cada documento nele citado tiver sido lido na íntegra nessa sessão. Cada resultado de pesquisa num ficheiro do armazenamento intermédio inclui a indicação de que resultados de pesquisa não equivalem a leitura, juntamente com os documentos ainda não lidos que estão por detrás dos resultados. Se, num processo, a IA tiver aberto um documento da parte contrária ou de uma autoridade, nada mais é escrito nesse processo até esse documento ter sido lido na íntegra. | Ambos |
| **Primeiro o Nucleu** | Redigir, verificar e entregar uma peça processual | Rejeitado até cada Nucleu atual do processo – o Nucleu do processo e o Nucleu de cada situação de facto a que o processo pertence – ter sido lido na sua versão atual. A última ronda da verificação de peças processuais compara o documento com o Nucleu. | Ambos |
| **Barreira Snake** | Na verificação de peças processuais, imediatamente antes da ronda do Nucleu, se o processo ou outro processo das suas situações de facto tiver uma Snake | A IA tem de lhe perguntar se a ronda Snake deve ser executada e só prossegue após a sua resposta – ou de imediato, se o tiver solicitado ao atribuir a tarefa. Se responder que sim, cada entrada da Snake tem de ser tratada, com fundamentação, como adotada, rejeitada ou não relevante. | Ambos |
| **Primeiro a biblioteca de legislação** | Uma pesquisa na web ou consulta de página web relativa a uma lei (números de artigos ou parágrafos, nomes de leis, números de diplomas, portais de legislação) | Rejeitado até a IA ter pesquisado essa norma na sua biblioteca de legislação. Se a biblioteca a contiver, a web permanece fechada para essa norma e a IA cita a partir da biblioteca. Só se a biblioteca não tiver qualquer resultado é que a web é aberta para essa norma – durante 15 minutos. | Ambos |
| **Comunicar fontes legislativas — abertas, não excertos** | Uma pesquisa na web relativa a legislação ou uma página aberta de um portal de legislação que forneça uma fonte legislativa, e cada comunicação de uma nova fonte legislativa | Cada resposta de ferramenta seguinte começa com o lembrete para comunicar a fonte, até que esta seja comunicada (até 15 minutos). Uma comunicação só é aceite para uma página que a própria IA tenha aberto nas últimas 24 horas com a ferramenta de páginas do IRONSTICK. As fontes comunicadas aguardam num diálogo de consentimento: as fontes assinaladas são obtidas, verificadas e guardadas na biblioteca; as não assinaladas são rejeitadas. | Ambos |
| **Memória apenas com a sua autorização** | A IA guarda, altera ou elimina uma entrada de memória | Um diálogo mostra-lhe a entrada. Esta só é guardada, alterada ou eliminada se o autorizar; as entradas recusadas são descartadas. Enquanto o diálogo estiver aberto, qualquer outra chamada dessa sessão é rejeitada. Com exceção das tarefas de passagem entre IA e das suas próprias notas, a IA lê apenas as entradas de memória que autorizou. | Ambos |
| **Propostas em vez de escrita** | A IA pretende alterar dados mestre, adicionar uma pessoa ou instituição, adicionar uma relação, preencher uma análise de pessoa, fundir duplicados ou eliminar um registo | A ferramenta não escreve nada nos seus registos. Deposita uma proposta no monitor de consistência de dados, onde a aceita ou recusa. | Ambos |
| **Documentos secretos excluídos** | Cada ferramenta de IA que lê documentos, ficheiros multimédia, prazos ou um processo inteiro, e os serviços em segundo plano que utilizam IA externa (monitor de consistência de dados, relatório de situação) | As entradas marcadas como secretas são filtradas de cada ferramenta de IA e de cada serviço e não são transmitidas à IA. | Ambos |
| **Probabilidades de êxito apenas com base nos autos do tribunal** | A avaliação do processo por IA, iniciada na aplicação ou por uma IA desktop | A avaliação das probabilidades de êxito baseia-se exclusivamente no perfil do processo e nos documentos do processo que foram enviados ao tribunal ou à autoridade a que se dirige a petição inicial, ou que de lá vieram – de ambas as partes, sem anexos. Sem petição inicial ou sem tribunal ou autoridade identificados, as probabilidades de êxito são assinaladas como não avaliáveis e o indicador fica vazio. | Ambos |
| **Verificação antes da entrega** | Entrega de um documento formal, como uma peça processual | A entrega é rejeitada sem um resultado positivo recente da verificação determinística de peças processuais para exatamente este estado do processo; qualquer edição invalida-o. O que sai do sistema é uma minuta pronta a apresentar, para revisão e assinatura por si. | Ambos |

Fluxos de trabalho

## Fluxo de trabalho 1 — Início do dia

O início do dia responde a três perguntas antes de começar: o que está a vencer, o que entrou e onde ficou.
Um passo gera o resumo de início de sessão – com a data, os lembretes, os prazos e compromissos dos próximos três dias e as tarefas pendentes. Em seguida, a IA obtém a lista completa de prazos, os compromissos de hoje e o que foi registado hoje ou ontem.
Utilize-o todas as manhãs e sempre que iniciar uma nova conversa com uma IA desktop.

![Início, agenda e mapa de calor](https://www.ironstick.legal/img/screens/1%20menu.png)

Início, agenda e mapa de calor: prazos, compromissos e novas entradas do dia num relance.

### Passo 0 — Estabelecer o contexto

- **Iniciar e desbloquear o IRONSTICK.** As ferramentas só funcionam enquanto a aplicação estiver em execução e depois de introduzido o código de segurança de seis dígitos.
- **O seu próprio briefing na aplicação.** No Windows, o primeiro arranque do dia pergunta se o IRONSTICK deve fazer-lhe um briefing sobre o dia. Se responder que sim, o briefing é apresentado com linhas clicáveis que conduzem aos prazos, ao calendário, à caixa de correio, aos documentos e ao processo, e é também lido em voz alta.
- **IA desktop: uma nova conversa.** Inicie uma nova conversa na sua aplicação de IA para desktop. Aprove o diálogo de acesso a dados que o IRONSTICK apresenta no primeiro acesso de qualquer IA desktop após o arranque do programa.
- **Chat de IA.** Abra o chat de IA no IRONSTICK; as instruções de trabalho são enviadas com cada pedido.
- **Não é necessário nenhum processo.** O início do dia abrange todos os clientes e processos. Abra um processo apenas se a sua pergunta disser respeito a esse processo.

### O que diz — passo a passo

Inicia a sessão.

1. A IA lê e confirma as suas instruções, fixa a data de hoje e carrega o resumo de início de sessão: lembretes, prazos e compromissos dos próximos três dias, tarefas pendentes.

O que vence hoje e nos próximos três dias?

2. Recebe os prazos, as audiências e os compromissos por ordem cronológica, cada um com o respetivo processo.

O que entrou desde ontem?

3. Novos e-mails e documentos recém-registados, cada um com o processo a que foi associado.

Lê o novo e-mail no processo [número do processo] e diz-me o que me pede.

4. Primeiro é lido o texto integral; recebe o conteúdo, os pontos em aberto e uma proposta para o passo seguinte.

Regista no registo diário a chamada telefónica de hoje com [pessoa] sobre [assunto].

5. A entrada é incluída, com data e hora, no registo diário de hoje.

### O que acontece nos bastidores

- **Barreiras antes da primeira ferramenta.** Enquanto o código de segurança não for introduzido, cada chamada de ferramenta de uma IA desktop recebe como resposta a indicação de que a aplicação está bloqueada. O primeiro acesso a dados de qualquer IA desktop após o arranque do programa abre o diálogo de consentimento; uma vez aprovado, o acesso fica aberto para todas as IA desktop durante o resto da execução do programa. Antes de se abrir qualquer outra ferramenta, a IA desktop tem de ler as instruções de trabalho e reproduzir textualmente uma regra.
- **Início de sessão num só passo.** Através da Bridge, a abertura do conjunto de ferramentas de início de sessão gera o resumo de início de sessão. A data e a hora, o idioma do sistema e o ecrã aberto são devolvidos de imediato; o resumo completo é guardado no armazenamento intermédio encriptado, onde a IA o lê.
- **O que o resumo contém.** Lembretes de memória pendentes (de hoje e em atraso), que a IA trata primeiro; os clientes para os quais a memória partilhada da IA contém conhecimento; a âncora de data única; o idioma do sistema, que é também o idioma da conversa; o ecrã atual; a lista dos últimos dez registos diários; os prazos e compromissos que vencem nos próximos três dias, no máximo dez linhas por rubrica; as tarefas pendentes deixadas por outra IA. Cada secção é limitada, e uma secção limitada indica à IA onde obter a versão completa.
- **Decisões judiciais pendentes.** No primeiro início de sessão do dia, se houver decisões judiciais ainda não avaliadas, o resumo instrui a IA a perguntar-lhe de imediato se devem ser avaliadas agora. Sim: a IA trata-as uma a uma. Não: prossegue com a sua tarefa.
- **A lista completa de prazos.** A lista de prazos fornece tudo o que consta do ecrã de prazos do IRONSTICK, ordenado por data: prazos associados a documentos, audiências agendadas provenientes dos portais dos tribunais e do calendário, bem como prazos que a IA fixou nas suas próprias notas de memória, assinalados como tal. A lista pode ser restringida a críticos (em atraso e de hoje), em breve (até 10 dias, incluindo os em atraso), hoje, esta semana, próxima semana ou uma data. Através da Bridge, a abertura do conjunto de ferramentas de prazos fornece a mesma lista completa, mais os compromissos de hoje.
- **Compromissos.** A lista de compromissos mostra os compromissos de um dia ou de um período, por esta ordem: audiências provenientes dos portais dos tribunais, audiências provenientes do calendário e, por fim, as restantes entradas do calendário.
- **O que entrou.** Duas listas mostram cada entrada registada hoje ou ontem em todos os clientes e processos; o que conta é o dia do registo, não a data do acontecimento. Através da Bridge, a abertura do conjunto de ferramentas de correspondência e e-mail lista os documentos registados hoje e os e-mails recebidos hoje, até dez de cada.
- **O briefing diário para a IA.** A IA pode obter o conteúdo do briefing diário com números de documento e marcações: prazos dos próximos 30 dias, os críticos e os concluídos hoje, as audiências e os compromissos de hoje, correio não lido, documentos registados hoje, as audiências de amanhã, aniversários, processos reativados, estatísticas semanais e o diário de IA mais recente. Uma verificação separada regista, para cada IA desktop individualmente, se esta já recebeu o briefing hoje; caso contrário, fornece os registos diários mais recentes e anota que o briefing foi feito.
- **Ler um novo documento.** O leitor de texto integral fornece o texto integral extraído de uma entrada. As instruções de trabalho dizem à IA que um título ou uma linha de lista não é prova do que uma entrada documenta: antes de indicar o que uma entrada diz, lê o texto integral na sessão atual e mantém o que a fonte comprova separado do que uma parte ou uma inferência sugere.
- **Perguntas sobre um processo.** A cronologia de um processo, os seus prazos e o seu calendário são dados do processo: são rejeitados até a IA ter lido o digest desse processo e, em seguida, a sua memória do processo. As listas globais de todos os processos estão abertas sem isso. A cronologia pode ser filtrada por data; uma data corresponde à data da entrada ou à data do documento.
- **Proposta para mostrar no IRONSTICK.** Após uma lista de prazos ou de compromissos, a IA pode propor abrir a entrada na janela do IRONSTICK. Só navega depois de ter dado o seu acordo, e apenas se o controlo do programa estiver ativado na Configuração de IA.

## Fluxo de trabalho 2 — Regras gerais da conversa

Estas regras aplicam-se a cada conversa com a IA, no chat integrado e através da Bridge: como começa uma sessão, que idioma a IA fala, de onde podem provir os seus factos e como verifica as suas fontes.
A cada regra corresponde a frase com que a aplica: instruções lidas e confirmadas, respostas que indicam as suas fontes, textos integrais lidos até ao fim antes de uma resposta.
Leia isto antes da sua primeira sessão de trabalho real; as mesmas regras sustentam todos os outros fluxos de trabalho.

![Caminho guiado: primeiro ler, depois responder](https://www.ironstick.legal/img/73_ironstick_guided_path.png)

Uma conversa fundamentada: a IA lê o que tem de ler antes de responder — e as fontes, verifica-as pessoalmente.

### Passo 0 — Estabelecer o contexto

- **Primeiro, iniciar e desbloquear o IRONSTICK.** Sem a aplicação em execução, a Bridge responde que o IRONSTICK não está em execução; enquanto o código de segurança de seis dígitos não for introduzido, cada chamada de ferramenta recebe como resposta a indicação de que a aplicação está bloqueada.
- **Iniciar a sessão.** Inicie uma nova conversa na sua IA desktop e peça-lhe que inicie a sessão. A abertura do conjunto de ferramentas de início de sessão gera o resumo de início de sessão: a data, o idioma do sistema, o ecrã aberto, os lembretes pendentes, as decisões judiciais pendentes a avaliar, os prazos e compromissos dos próximos três dias, os últimos dez registos diários e as tarefas de passagem pendentes.
- **Preste atenção ao ícone da IA na barra superior.** No caso de uma IA desktop, o seu menu pendente mostra se as instruções estão confirmadas (visto verde ou cruz vermelha), quantas vezes foram lidas e quantas infrações às regras ocorreram; para cada processo em que a IA tocou, mostra o perfil, a jurisdição e o digest como lidos ou não lidos, bem como uma barra dos documentos lidos.
- **No chat integrado**, as instruções de trabalho fazem parte de cada pedido; não há nada a confirmar. Antes de o primeiro pedido seguir para um serviço de IA externo, o IRONSTICK pede o seu consentimento.
- **Dê a referência mais precisa de que dispõe.** Um número de prova vale mais do que um nome, um nome vale mais do que uma palavra-chave, e um número de processo diz à IA que processo deve ler.

Inicia a sessão. Depois lê o digest e a memória do processo [número de processo] e diz-me o que está em aberto.

### As regras — e o que diz para as aplicar

Inicia a sessão.

1. Regra 1 — a IA lê e confirma as suas instruções antes de tocar em dados do processo e responde no idioma do seu sistema.

Cita a regra [número] das tuas instruções.

2. Regra 2 — cada regra pode ser apresentada textualmente, para que possa vincular a IA a ela.

Que documento diz isso? Indica-me o número de prova.

3. Regra 3 — cada afirmação indica a sua fonte; um clique no número abre o documento.

Lê [#número de prova] na íntegra antes de responderes.

4. Regra 4 — títulos e descrições breves não são factos; a resposta baseia-se no texto integral.

Separa o que está provado do que é apenas suposto.

5. Regra 5 — a IA assinala avaliações e suposições como tais e reproduz apenas o que as fontes documentam.

Lê o documento inteiro, não apenas os resultados da pesquisa.

6. Regra 6 — os documentos longos são lidos até ao fim; a IA comunica quando cada linha foi lida.

### O que acontece nos bastidores

- **Trinco das instruções (Bridge).** Enquanto a IA desktop não tiver lido as instruções de trabalho e reproduzido textualmente a regra contra factos inventados, todas as ferramentas são rejeitadas, exceto a leitura das instruções, a sua confirmação e a consulta do idioma do sistema. A IA que leu tem de confirmar ela própria; uma confirmação dada noutra conversa não lhe abre o trinco.
- **Nova leitura.** A confirmação caduca 60 minutos após ter sido dada, após duas horas sem chamadas, à meia-noite e a cada nova ligação; quando o IRONSTICK consegue consultar o registo da conversa da IA desktop, também quando a IA desktop condensa essa conversa. Nesse caso, a IA volta a ler e reproduz textualmente uma regra escolhida aleatoriamente – uma breve pausa, não um erro.
- **Salvaguardas das regras.** A lógica do programa está atenta a atalhos, como chamadas de ferramentas antes da leitura das instruções ou um ficheiro que é desviado do circuito de entrega. Se for detetado um, todas as ferramentas ficam bloqueadas e o motivo é indicado; consoante o contador, a IA recita a regra contra factos inventados ou volta a ler as instruções e reproduz a regra indicada na rejeição. O contador é visível no menu pendente do ícone da IA.
- **Um idioma de conversa.** A IA responde durante toda a sessão no idioma do sistema do IRONSTICK, independentemente do idioma em que escreva. As peças processuais, os e-mails para o tribunal e as entradas na cronologia são redigidos no idioma da jurisdição do processo; o registo diário, no idioma da conversa.
- **Factos provenientes das ferramentas, desta sessão.** As instruções só admitem factos do processo provenientes das ferramentas do IRONSTICK, obtidos na sessão atual – não da memória da IA, de mensagens anteriores, de dados de treino, de ficheiros descarregados ou de outro conector. O que não puder ser obtido é identificado como lacuna e nunca preenchido por inferência.
- **Primeiro pesquisar.** A IA tem instruções para nunca perguntar o que as ferramentas podem responder: perante um número de processo, lê em vez de perguntar a que processo se refere.
- **Títulos e resumos não são factos.** Antes de afirmar o que uma entrada documenta, a IA tem de ler o texto integral da entrada na sessão atual; o que um título, uma parte ou uma inferência sugere deve ser assinalado como suposição. Uma entrada sem texto extraído não dá origem a qualquer afirmação de conteúdo.
- **Resultados de pesquisa não equivalem a leitura.** Cada resultado de pesquisa num ficheiro do armazenamento intermédio inclui a indicação de que resultados não equivalem a leitura, juntamente com os documentos ainda não lidos que estão por detrás dos resultados. No caso de extrações completas de processos, um aviso de cobertura de leitura indica cada ficheiro não lido até ao fim, com a respetiva percentagem e os intervalos de linhas não lidos; o aviso volta a aparecer em respostas posteriores até as lacunas terem sido lidas.
- **O estado de leitura nas respostas.** Quando os números de leitura mudam, as respostas das ferramentas incluem os mesmos números que vê no menu pendente do ícone da IA, com a instrução de nunca designar um processo, as suas provas ou a sua memória como integralmente lidos, a menos que esses números o demonstrem.
- **Primeiro ler o digest e a memória.** Os dados do processo só ficam disponíveis depois de lido o digest do processo; para uma tarefa relativa ao processo, é lida primeiro a memória completa do processo.
- **Só conta a leitura própria.** Para a avaliação do processo, o IRONSTICK verifica cada leitura com base no próprio registo da conversa da IA desktop; o que foi lido por agentes auxiliares não conta.
- **Fontes que pode verificar.** A IA identifica cada documento pelo seu número de prova. No chat integrado, um número só se torna ligação se essa entrada existir nos seus registos e não estiver eliminada nem for secreta; um clique abre-a na cronologia do processo. Um número sem essa entrada permanece texto simples. Com uma IA desktop, procure o número no IRONSTICK ou peça à IA que leia essa entrada na íntegra.
- **Legislação a partir da biblioteca.** A legislação é verificada primeiro na sua biblioteca de legislação; a web só se abre para uma norma se a biblioteca não tiver qualquer resultado, e só as páginas abertas através da ferramenta de páginas do IRONSTICK contam como lidas.
- **Escritas datadas exigem a data de hoje.** As ferramentas que escrevem conteúdos datados são rejeitadas, a menos que a IA tenha obtido, nos últimos 30 minutos, a data e a hora reais. Na Bridge, as respostas da IA começam com essa data.
- **Após uma conversa longa.** O que foi lido continua a contar para o respetivo processo quando a IA desktop condensa a sua conversa; o Nucleu de um processo tem de ser lido novamente. Para retomar um processo, a IA pode carregar o digest, o Nucleu, a memória do processo e as Snakes num ficheiro de trabalho.
- **Documentos grandes.** As respostas de ferramentas grandes vão integralmente para o armazenamento intermédio encriptado e são lidas por partes, sendo a cobertura de leitura acompanhada linha a linha.

## Fluxo de trabalho 3 — Avaliação do processo

A avaliação do processo é a perspetiva da IA, enquanto analista sénior, sobre um processo, guardada no IRONSTICK e apresentada no separador Avaliação por IA do processo.
As probabilidades de êxito são avaliadas exclusivamente com base nos autos do tribunal: naquilo que foi enviado ao tribunal ou à autoridade a que se dirige a petição inicial, ou que de lá veio.
As secções descritivas baseiam-se nos autos completos do IRONSTICK e nos processos vizinhos do cliente.
Utilize-a quando um processo tiver avançado, quando a última avaliação for antiga ou quando uma IA desktop deva elaborar uma nova avaliação segundo os mesmos critérios da aplicação.

![Avaliação do processo por IA com probabilidade de êxito](https://www.ironstick.legal/img/screens/5%20case%20assesment%20detail.png)

A avaliação do processo lê os autos e mostra a probabilidade de êxito com a situação probatória, a pretensão principal e as restantes pretensões.

### Passo 0 — Estabelecer o contexto

- **Abrir ou indicar o processo.** Abra o processo no IRONSTICK: a IA consegue ver que ecrã e que processo tem aberto. Pode também indicar o número do processo; a IA encontra o processo pelo seu número.
- **A petição inicial tem de constar dos autos.** O prognóstico precisa do documento que deu início ao procedimento, por exemplo a petição inicial da ação, guardado com o respetivo texto extraído. Pode também estar noutro processo do mesmo cliente, por exemplo no processo do qual este foi separado.
- **O tribunal tem de estar registado.** O IRONSTICK só reconhece o tribunal ou a autoridade se estiver registado entre as suas instituições e se o seu nome constar do endereço da petição inicial. Se faltar, o indicador de êxito fica vazio.
- **Na aplicação ou por uma IA desktop.** No separador Avaliação por IA da aplicação, só podem ser avaliados processos com o estado Ativo. Uma IA desktop pode avaliar qualquer processo, seja qual for o seu estado, e mesmo que nada de novo tenha entrado.

### O que diz — passo a passo

Abre o processo [número do processo] e indica-me o estado da última avaliação.

1. A IA carrega o processo e resume a avaliação guardada, incluindo a respetiva data.

Elabora uma nova avaliação do processo [número do processo].

2. Os autos do tribunal são compilados, os documentos são lidos e a avaliação é redigida em etapas fixas; o resultado aparece no separador Avaliação por IA.

Porque é que as probabilidades de êxito não são mais altas?

3. Recebe os pontos dos autos do tribunal que jogam contra si, cada um com o respetivo número de prova.

Que documentos do meu processo ajudariam, mas ainda não estão na posse do tribunal?

4. A IA compara todo o seu processo com os autos do tribunal e indica o que ainda falta neles.

Tem em conta [#número de prova] e avalia novamente.

5. O seu comentário é transmitido e a avaliação é renovada com base nele.

### O que acontece nos bastidores

- **Primeiro, a última avaliação.** O leitor de avaliações fornece a avaliação mais recente do processo. A sua primeira linha indica a data, a antiguidade e se se tratou de uma avaliação completa ou de uma atualização, e a IA tem instruções para indicar quando foi elaborada a última avaliação. Como qualquer ferramenta que lê dados do processo, é rejeitado até a IA ter lido o digest do processo e, em seguida, a memória do processo.
- **Uma ferramenta, seis etapas.** Uma IA desktop só elabora uma nova avaliação com a ferramenta de avaliação própria. Cada chamada fornece apenas a etapa atual; a etapa seguinte só é disponibilizada depois de o IRONSTICK ter verificado a atual. Nenhuma etapa pode ser saltada. Se a aplicação estiver a avaliar o mesmo processo no mesmo momento, a ferramenta rejeita até a aplicação terminar.
- **Etapa 1 — Petição inicial.** A IA lê os PDF do processo, começando pelo mais antigo, e comunica a petição inicial como segura, incerta ou «nenhuma encontrada». Verifica-se: cada documento comunicado pertence a este cliente e foi lido na íntegra nesta sessão; «nenhuma encontrada» só é aceite se cada PDF do processo tiver sido lido na íntegra. Um documento comunicado como seguro é guardado para avaliações posteriores.
- **Barreira: autos do tribunal.** O IRONSTICK procura um tribunal ou uma autoridade registado entre as suas instituições no endereço no cabeçalho da primeira página da petição inicial ou como destinatário nessa página. Os autos do tribunal consistem então na petição inicial e em cada documento recebido e enviado do processo cujo interlocutor seja esse tribunal ou essa autoridade – de ambas as partes, sem anexos e sem entradas secretas ou eliminadas.
- **Etapa 2 — Estado dos autos do tribunal e prognóstico.** A IA tem de ler ela própria, na íntegra, cada documento dos autos do tribunal e depois submeter a secção de prognóstico: uma percentagem, a respetiva faixa (claramente perdido, tendencialmente perdido, em aberto, tendencialmente ganho, claramente ganho), o estado dos autos do tribunal, a situação probatória, a pretensão principal, as restantes pretensões, a variação face ao prognóstico anterior e a fundamentação. Verifica-se: cada documento dos autos do tribunal lido; a percentagem situa-se dentro da sua faixa; cada linha está presente; o estado dos autos do tribunal e a fundamentação citam apenas documentos dos autos do tribunal; essas linhas estão redigidas no idioma do sistema; uma variação de mais de 10 pontos face ao prognóstico anterior indica os novos documentos que a justificam.
- **Sem autos do tribunal — o que a IA lhe comunica.** Sem petição inicial ou sem tribunal ou autoridade identificados no respetivo endereço, não há autos do tribunal. O IRONSTICK instrui então a IA a informá-lo de imediato, antes de prosseguir e no idioma da conversa, de que não é elaborado qualquer prognóstico e de que o indicador de êxito fica vazio – indicando o motivo e, se existir, a petição inicial. A etapa é então concluída apenas com o processo, e o estado do processo no IRONSTICK substitui o prognóstico.
- **Etapas 3 e 4 — Leitura.** A etapa 3 lista os PDF recebidos e enviados mais recentes do processo e a petição inicial guardada; a etapa 4 lista cada documento dos restantes processos do cliente que esteja ligado a este processo. Cada um tem de ser lido na íntegra; resumos, títulos e resultados de pesquisa não equivalem a leitura. Um resultado que tenha ido para o armazenamento intermédio só conta se cada parte tiver sido lida.
- **Estado de leitura.** O IRONSTICK mantém um livro de leitura por processo: quantos documentos do processo a IA leu na íntegra e se leu o digest e a memória do processo. São os mesmos números que vê, e chegam com as respostas assim que mudam. A IA é informada de que constituem a única base válida para qualquer afirmação sobre o que leu e de que só pode designar um processo ou os seus documentos como «lidos na íntegra» se os números o demonstrarem.
- **Só conta a leitura própria da IA.** O IRONSTICK verifica cada leitura com base no registo da conversa dessa IA desktop; o que foi lido por subagentes ou agentes paralelos não é contabilizado. Quando o registo da conversa de uma ligação não pode ser consultado, a resposta indica-o, e a IA tem instruções para o informar de que essa verificação não foi possível.
- **Etapa 5 — Digest de factos.** A IA submete o seu digest com os títulos factos essenciais, factos documentados e citações-chave, contradições, lacunas e prazos não cumpridos, ligações entre processos e os destinatários. Verifica-se: cada título está presente e preenchido; os factos essenciais citam documentos; cada processo vizinho é indicado; cada documento citado foi lido na íntegra.
- **Etapa 6 — Redação.** Só agora a IA recebe as regras de redação. As secções são base, estado do processo no IRONSTICK, nota crítica, pontos fortes, riscos, articulação entre processos e – se o IRONSTICK tiver encontrado processos relacionados de outros clientes – esses processos como última secção. O estado do processo no IRONSTICK assenta no digest de cada documento, e a IA lê na íntegra cada documento importante. Verifica-se: as secções e a sua ordem; a base indica a petição inicial; no máximo seis pontos em pontos fortes e em riscos; cada documento citado existe nos processos deste cliente ou no material, não é secreto nem foi eliminado e foi lido na íntegra; a secção sobre a articulação entre processos indica cada processo vizinho.
- **Rejeição.** Se uma verificação falhar, a resposta começa com REJECTED e uma lista numerada de erros. Nada avança e nada é guardado; a IA corrige exatamente esses pontos e chama de novo. Uma parte submetida na etapa errada é rejeitada. A IA pode recomeçar a cadeia na etapa 1 com material novo, e um reinício da aplicação também a recomeça do princípio.
- **Guardar.** Se a etapa 6 for aceite, o IRONSTICK insere o prognóstico da etapa 2 – quando existem autos do tribunal – a seguir à base e guarda a avaliação como nova avaliação completa. Mostra então o processo no respetivo separador Avaliação por IA, e a IA tem instruções para lhe comunicar que a nova avaliação foi guardada.
- **No separador Avaliação por IA.** O estado dos autos do tribunal figura ao lado do indicador de êxito, com a faixa, a situação probatória, a pretensão principal e as restantes pretensões. Sem autos do tribunal, o estado do processo no IRONSTICK passa para o segundo lugar, e o indicador ao lado fica vazio.
- **A avaliação na aplicação.** No próprio separador, solicita uma avaliação para um processo ativo. O separador pede consentimento antes de utilizar um serviço de IA externo; a execução prossegue depois em segundo plano, mesmo que mude de separador ou de ecrã – passando pelo reconhecimento de texto dos novos documentos, pela pesquisa, pela redação e pelo prognóstico. Uma avaliação existente pode ser atualizada no prazo de um dia após a última reavaliação completa, no máximo três vezes seguidas. Se nada de novo tiver entrado desde a última avaliação, uma reavaliação só fica disponível depois de ter escrito no campo de objeções um comentário com pelo menos três palavras.

## Fluxo de trabalho 4 — Criar um Nucleu

Um Nucleu é a linha de orientação vinculativa de um processo: a linha central da argumentação, os factos e as provas determinantes, o que tem de ser dito e o que nunca pode ser dito.
Existe em dois níveis — uma vez para toda uma situação de facto, válido para cada processo nela incluído, e uma vez para o processo individual — e cada documento que a IA redige para o processo fica-lhe subordinado.
O melhor momento para o criar é imediatamente após uma avaliação do processo, enquanto todo o processo ainda se encontra no contexto de trabalho da IA.
A IA redige-o, o IRONSTICK mostra-lhe cada alteração, e só a sua aprovação o guarda como nova versão.

![Separador do processo com Nucleu (ícone de átomo) e Snake (ícone de serpente)](https://www.ironstick.legal/img/screens/5%20case%20tab2.png)

O Nucleu no separador com o ícone de átomo: a IA redige e propõe, a decisão de adotar é sua; cada alteração adotada torna-se uma nova versão que orienta todas as peças processuais posteriores.

### Passo 0 — Definir o contexto

- **Escolher o momento.** Peça o Nucleu imediatamente após uma avaliação do processo. Na avaliação, a IA lê o digest, os textos integrais, a memória do processo, bem como um Nucleu e uma Snake existentes; enquanto tudo isso ainda estiver no seu contexto de trabalho, a linha de orientação pode ser destilada de todo o processo, e não apenas de alguns documentos.
- **Escolher o nível.** Um *Nucleu da situação de facto* pertence a uma situação de facto (um grupo de processos na lista de processos) e aplica-se a cada processo nela incluído. Um *Nucleu do processo* aplica-se apenas a um processo e ajusta a linha de orientação para esse processo. Um processo é orientado pelo seu próprio Nucleu e pelo Nucleu de cada situação de facto a que pertence; o Nucleu do processo não deve, por isso, contradizer a linha da situação de facto.
- **Onde o encontra.** No ecrã do processo, o separador com o ícone de átomo (*Nucleu do processo*) contém, em cima, o Nucleu do processo editável e, por baixo, apenas para leitura, o Nucleu de cada situação de facto a que o processo pertence. Na lista de processos, o botão de átomo na barra de título de uma situação de facto abre o respetivo Nucleu da situação de facto. Cada Nucleu tem o seu identificador, por exemplo *#KI00041 · v3*; um clique copia-o, para que o possa colar no chat.
- **O que deve conter.** A linha de orientação e nada mais: a tese determinante, a posição do processo no litígio mais amplo, as partes, as teses da parte contrária e as respostas a elas, a forma de ponderar provas futuras e as linhas que não podem ser ultrapassadas. Os factos entram como historial documentado; o estado atual do processo é lido de cada vez a partir do digest.
- **O que não deve conter.** Lembretes, notas, tarefas, histórico de sessões, questões em aberto e reflexões de trabalho pertencem à memória do processo. As afirmações da parte contrária que os autos contradizem pertencem à Snake.
- **Extensão.** No máximo 20.000 caracteres por Nucleu. O contador ao lado do texto mostra a extensão e fica vermelho acima do limite. Se a linha de orientação precisar de mais espaço, mantenha a linha comum no Nucleu da situação de facto e coloque o que é específico de um processo no Nucleu desse processo, com o mesmo limite.
- **Redigir pessoalmente.** Pode também escrever ou corrigir um Nucleu diretamente no separador ou na janela da situação de facto e premir *Guardar*; cada gravação é uma nova versão.

### O que diz — passo a passo

Cria o Nucleu do processo [número de processo] a partir desta avaliação.

1. A IA destila a linha de orientação do processo que acabou de ler e abre a sua proposta no separador *Nucleu do processo*, onde a adota ou recusa.

Cria um Nucleu para a situação de facto [situação de facto]: a linha central válida para cada processo nela incluído.

2. A IA redige o Nucleu da situação de facto e mostra-o na janela da situação de facto; uma vez adotado, aplica-se a cada processo da situação de facto e aparece em cada um deles apenas para leitura.

Qual é a extensão de cada Nucleu do processo [número de processo], e o que poderia passar para o Nucleu da situação de facto?

3. A IA lê o Nucleu do processo e cada Nucleu de situação de facto do processo e mede cada um face ao limite de 20.000 caracteres.

Atualiza o Nucleu do processo [número de processo]: já não argumentamos com [ponto].

4. A IA explica no chat o que pretende alterar e porquê, e depois propõe apenas as passagens alteradas; vê-as a vermelho e negrito, e uma alteração adotada torna-se a versão seguinte.

Lê-me o Nucleu atual do processo [número de processo], com o Nucleu de cada situação de facto.

5. A IA carrega o conjunto completo nas versões atuais, cada uma com o seu identificador, por exemplo #KI00041 · v3.

Esta minuta contradiz o Nucleu?

6. A IA compara a minuta, ponto por ponto, com cada Nucleu aplicável ao processo e identifica cada divergência; numa peça processual, esta comparação é a ronda final da cadeia de verificação.

### O que acontece nos bastidores

- **Um único caminho de escrita, com a sua aprovação.** A IA propõe um Nucleu através de uma ferramenta própria: a primeira versão de um Nucleu do processo através do processo, a primeira versão de um Nucleu da situação de facto através da situação de facto (retirada da lista de situações de facto), cada alteração posterior através do número do Nucleu. As alterações ao texto entram como substituições pontuais; a IA tem instruções para nunca reescrever o Nucleu por completo e para explicar no chat o que pretende alterar e porquê, antes de propor.
- **A janela de revisão.** Para um Nucleu do processo, o IRONSTICK abre o processo no separador *Nucleu do processo*; para um Nucleu da situação de facto, a janela aparece por cima do ecrã atual. Mostra o texto completo com cada alteração a vermelho e negrito, as eliminações riscadas, e os botões *Recusar* e *Adotar*. Só está aberta uma revisão de Nucleu de cada vez. Se precisar de mais de cerca de um minuto, a IA é informada de que a revisão ainda está aberta e não a envia de novo; a sua aprovação posterior guarda a versão na mesma.
- **Verificação da extensão.** Uma proposta com mais de 20.000 caracteres é rejeitada antes de lhe chegar, com a instrução de se limitar ao núcleo determinante e de colocar a linha de orientação específica do processo no Nucleu do processo e a linha de orientação comum no Nucleu da situação de facto.
- **Data atual.** Como qualquer escrita datada, uma proposta de Nucleu requer a data atual, obtida nos últimos 30 minutos.
- **Versões, nunca substituídas.** Cada proposta adotada e cada gravação no separador é guardada como nova linha com o número de versão seguinte; o número *#KIxxxxx* mantém-se igual em todas as versões, e a versão mais alta é a atual. Texto inalterado não gera nova versão. Se uma situação de facto for eliminada, o seu Nucleu é ocultado e as suas versões são conservadas.
- **Como a IA o lê.** Uma chamada com o processo fornece o conjunto completo: o Nucleu do processo e o Nucleu de cada situação de facto do processo, cada um com o seu cabeçalho *#KIxxxxx · vN*, na íntegra, e indica os níveis que ainda não têm nenhum. O Nucleu figura, além disso, no topo do digest do processo, do briefing do processo e do pacote de retoma. Uma lista de inventário mostra cada Nucleu sem textos integrais; quem abre o conjunto de ferramentas de instruções de IA vê o inventário de Nucleu do processo atualmente aberto.
- **Ler de novo após cada alteração.** O IRONSTICK regista que versão de cada Nucleu a IA leu. Uma nova versão ou a condensação da conversa pela IA desktop invalida a leitura anterior.
- **Onde atua.** O Nucleu orienta cada peça processual através do [Fluxo de trabalho 6 — Redigir uma peça processual](#w6). Aí, a barreira do Nucleu impede a redação, a verificação e a entrega de um documento do processo até cada Nucleu aplicável — o Nucleu do processo e cada Nucleu de situação de facto — ter sido lido na sua versão atual; do mesmo modo, o formato de documento vinculativo só é disponibilizado depois de lido cada Nucleu do processo. No fim da cadeia de verificação está a ronda do Nucleu: o documento é comparado ponto por ponto com o Nucleu, cada divergência é corrigida ou tratada, uma contradição nunca pode ser descartada, e uma que não possa ser eliminada é marcada como conflito. Um conflito interrompe o trabalho nesse documento até ter sido avisado em pormenor e ter decidido se o documento é corrigido ou se a divergência se mantém.
- **Na avaliação do processo.** Durante uma avaliação, cada Nucleu existente do processo faz parte do seu contexto como linha de orientação vinculativa, citado com o seu identificador.

## Fluxo de trabalho 5 — Construir a Snake

A Snake é o registo de trabalho interno das afirmações da parte contrária num processo que são contraditas pelas provas dos autos. Cada entrada fixa a localização da afirmação — documento, data, processo e página — e enumera cada documento que a refuta.
Constrói-a de duas formas: através de uma pesquisa direcionada num ou em vários processos ou em documentos que indicar; ou a meio de qualquer conversa, assim que surja uma contradição da parte contrária com os autos.
O IRONSTICK verifica cada linha face aos seus documentos, cabe-lhe aprovar cada versão, e em cada peça processual posterior as entradas da Snake são propostas como argumentos contra a parte contrária.

![Nucleu e Snake a caminho da peça processual](https://www.ironstick.legal/img/76_nucleu_snake_path.png)

A Snake regista as contradições da parte contrária com os autos: cada linha verificada face aos documentos, a sua aprovação para cada versão.

### Passo 0 — Definir o contexto

- **Pesquisa direcionada.** Indique os processos ou os documentos em que a IA deve procurar afirmações da parte contrária que os documentos refutam. Um bom momento é imediatamente após uma avaliação do processo ou uma leitura completa do processo, enquanto os autos ainda estão no contexto de trabalho da IA. Peça-lhe que lance a rede de forma ampla; a Snake contém apenas o que os documentos provam.
- **Durante qualquer conversa.** Se surgir uma contradição da parte contrária com os autos enquanto trabalha noutra coisa, instrua a IA a incluí-la na Snake, caso ainda não conste dela. A IA verifica primeiro a Snake atual e completa uma entrada existente, em vez de registar o ponto em duplicado.
- **Uma Snake por processo.** Uma Snake pertence a exatamente um processo. Uma situação de facto não tem Snake própria; mostra as Snakes de todos os seus processos.
- **Onde a encontra.** No ecrã do processo, o separador com o ícone de serpente à direita do separador do Nucleu (*Snake do processo*) contém a Snake desse processo com o seu identificador, por exemplo *#SN00004 · v2*, e um contador de caracteres. Na lista de processos, o botão Snake na barra de título de uma situação de facto abre as *Snakes da situação de facto*: as Snakes de todos os seus processos pela ordem da lista; um clique num processo abre-o no separador *Snake do processo*.
- **Extensão.** No máximo 20.000 caracteres por Snake do processo. O contador fica vermelho acima do limite. Limite cada entrada à localização, a uma breve descrição e às respetivas linhas de referência.
- **O que deve conter.** Apenas afirmações da parte contrária que são contraditas pelas provas dos autos. Suposições, estratégia e lembretes não pertencem aqui; os lembretes vão para a memória do processo, e as contradições da parte contrária vão apenas para a Snake, nunca para a memória.

**O formato das entradas.** As entradas são separadas por uma linha em branco. A primeira linha é a localização da afirmação; depois a descrição; depois cada documento ligado numa linha própria, começando com uma seta:

#0004417 · 12.10.2026 · CaseID 19 · p. 2 em cima
Contra-alegações de recurso, contraparte B: Os tribunais já teriam decidido com trânsito em julgado a propriedade das instalações. Contra isto, os autos: ambas as sentenças remetem expressamente a questão da propriedade para o processo principal, e a contraparte B afirmou o mesmo na audiência anterior.
→ #0003304 · 18.07.2026 · CaseID 19 · p. 5 ao meio
→ #0000586 · 25.04.2026 · CaseID 8 · p. 9 em cima
→ #0001127 · 24.06.2026 · CaseID 8 · p. 15 em baixo

Cada linha de referência tem a forma: número de prova com sete dígitos · a data do documento tal como o IRONSTICK a regista (DD.MM.AAAA) · o CaseID desse documento · a página e a posição nela (em cima, ao meio ou em baixo, em cada um dos idiomas do sistema) ou um traço para provas sem páginas. Se uma contradição se estender por vários documentos, cada um deles recebe a sua própria linha de referência: a afirmação, a afirmação contrária e cada elemento de prova intermédio. Pode também escrever ou corrigir entradas diretamente no separador e premir *Guardar*; cada gravação é uma nova versão.

### O que diz — passo a passo

Constrói a Snake do processo [número de processo] a partir dos autos completos.

1. A IA lê o processo e cada documento que refuta a parte contrária e propõe depois a Snake no separador *Snake do processo*, com cada linha verificada face aos seus documentos.

Pesquisa nos documentos [números de prova] afirmações da parte contrária que os autos contradizem e inclui-as na Snake do processo [número de processo].

2. A IA lê na íntegra exatamente esses documentos e regista apenas as afirmações que os seus documentos refutam, cada uma com os documentos que a refutam.

Constrói as Snakes de todos os processos da situação de facto [situação de facto]. Lança a rede de forma ampla.

3. A IA trabalha processo a processo, uma Snake por processo; a janela da situação de facto mostra depois todas pela ordem da lista de processos.

Esta contradição já consta da Snake do processo [número de processo]?

4. A IA lê a Snake atual e diz-lhe se o ponto já está registado e em que entrada.

Inclui esta contradição da parte contrária na Snake, caso ainda não conste dela.

5. A IA lê a Snake atual, completa a entrada existente ou escreve uma nova, com cada documento refutador numa linha própria, e mostra-lhe a alteração para adoção.

Que Snakes temos para o cliente [cliente]?

6. A IA lista cada Snake dos processos do cliente, com identificador, versão e número de entradas.

### O que acontece nos bastidores

- **Primeiro ler.** Se o processo já tiver uma Snake, uma alteração só é aceite depois de a IA ter lido a respetiva versão atual nessa sessão, e de novo depois de a IA desktop ter condensado a sua conversa. Um processo sem Snake aceita diretamente as suas primeiras entradas. A IA tem instruções para verificar se o ponto ainda não está registado e para completar a entrada existente, em vez de a registar em duplicado.
- **Escrever apenas a partir do que foi lido.** Se a IA tiver aberto no processo um documento da parte contrária ou de uma autoridade, uma alteração à Snake é rejeitada até esse documento ter sido lido na íntegra.
- **Sempre o texto completo.** A IA propõe a Snake completa, incluindo o seu aditamento; escritas parciais (acréscimos ou substituições pontuais) são rejeitadas, de modo que cada proposta é feita com todo o registo à vista. Uma proposta com mais de 20.000 caracteres é rejeitada antes de lhe chegar.
- **Cada linha verificada face aos documentos.** Antes de a proposta ser apresentada, o IRONSTICK verifica cada entrada: a primeira linha na forma exigida, uma descrição, pelo menos uma linha de referência, nenhuma descrição após as linhas de referência; e, para cada linha de referência, que a prova existe, pertence ao CaseID indicado, tem exatamente essa data de documento, pertence ao mesmo cliente que o processo e que a página se situa dentro do PDF guardado. Perante qualquer erro, nada é proposto; a IA recebe a lista de erros, entrada a entrada, e corrige-os.
- **A janela de revisão.** O IRONSTICK abre o processo no separador *Snake do processo* e mostra o texto completo com cada alteração a vermelho e negrito, com os botões *Recusar* e *Adotar*. Se precisar de mais de cerca de um minuto, a IA é informada de que a revisão ainda está aberta e não a envia de novo; a sua aprovação posterior guarda a versão na mesma.
- **Versões, nunca substituídas.** Cada proposta adotada e cada gravação no separador torna-se uma nova versão sob o mesmo número *#SNxxxxx*; texto inalterado não gera nova versão.
- **Como a IA a lê.** A IA pode ler a Snake de um processo, as Snakes de todos os processos de uma situação de facto pela ordem da lista de processos, as Snakes de todos os processos de um cliente ou uma Snake pelo seu número — cada bloco com o cabeçalho *#SNxxxxx · vN* e o respetivo processo. Uma lista de inventário mostra cada Snake com o número das suas entradas, sem textos integrais. O pacote de retoma de um processo e a avaliação do processo também incluem a Snake.
- **Onde atua.** A Snake atua através da barreira Snake no [Fluxo de trabalho 6 — Redigir uma peça processual](#w6). Se existirem Snakes para o processo — a sua própria Snake ou as dos outros processos das suas situações de facto —, a IA faz-lhe a pergunta fixa *Pretende a barreira Snake?*, a menos que já tenha dito *com barreira Snake* ou dispensado a ronda pelas suas próprias palavras. Após o seu sim, segue-se a ronda Snake da cadeia de verificação, antes da ronda final do Nucleu: a IA lê na íntegra a Snake do processo e as Snakes dos outros processos das suas situações de facto, volta a ler a minuta e trata cada entrada da Snake num ficheiro de resultados como incorporada (com a localização no documento), rejeitada ou não relevante, sempre com fundamentação. Uma entrada é rejeitada se ela ou a sua formulação puderem ser voltadas contra o cliente. *Já utilizado* ou *já do conhecimento do tribunal* não é aceite como fundamentação: as entradas são argumentos a repetir em cada documento em que se enquadrem. A ronda só é aceite se cada entrada tiver sido tratada, se as Snakes e a minuta tiverem sido lidas após a atribuição da tarefa e se a minuta tiver sido efetivamente alterada em todos os pontos em que uma entrada foi incorporada.

## Fluxo de trabalho 6 — Redigir uma peça processual

Este fluxo de trabalho leva-o de um pedido em palavras simples a uma minuta pronta a apresentar no processador de texto: uma peça processual, um requerimento a um tribunal ou a uma autoridade, ou uma carta.
A IA lê o processo antes de escrever, constrói o documento no seu armazenamento intermédio encriptado, faz verificar cada facto, cada citação, cada norma e cada parte face aos seus documentos, percorre uma cadeia de verificação fixa e consulta-o em cada ponto de decisão.
Utilize-o sempre que algo deva sair por escrito do seu escritório. O que sai do IRONSTICK é sempre uma minuta que revê, assina e envia pessoalmente.

![Caminho guiado com verificações até à peça processual concluída](https://www.ironstick.legal/img/75_ironstick_coaching_line.png)

Da sua instrução à minuta no processador de texto: a IA lê, redige e verifica, guiada por verificações até ao visto final; a decisão em cada passo é sua.

### Passo 0 — Definir o contexto

- **Indicar o processo.** Para o chat integrado, abra o processo e escolha *Redigir texto* › *Com ajuda da IA*: o chat abre-se com esse processo; a partir de uma entrada da cronologia, o documento já fica indicado. Com uma IA desktop, indique o número de processo na sua primeira mensagem — a IA pode também perguntar ao IRONSTICK que ecrã e que processo tem aberto.
- **O processo precisa do seu país.** O direito, o idioma e a data do documento provêm da jurisdição definida no processo. Se não estiver definida nenhuma jurisdição, o formato do documento é recusado, com o pedido para a definir primeiro.
- **Utilize o modelo mais potente da sua IA desktop.** Para a redação, a IA tem instruções para recomendar, antes de começar, o nível de modelo mais potente e, após a entrega, novamente um mais ligeiro. A aplicação de IA para desktop só muda por ação sua; o chat integrado muda autonomamente.
- **Concentre tudo na sua primeira mensagem.** Processo, tipo de documento, o que pretende alcançar, os números de prova em que se baseia, tom e extensão, bem como uma peça processual anterior cujo endereçamento tenha funcionado. São os documentos que fundamentam uma peça processual; os adjetivos não.
- **Diga de antemão o que pretende das rondas de verificação.** Expressões como *com barreira Snake* ou *sem Snake e Nucleu* na sua própria mensagem são reconhecidas pelo IRONSTICK; a IA deixa então de perguntar por essas rondas para esse documento. Texto colado não conta como palavras suas.

Redige a réplica à contestação #0004127 no processo [número de processo], fundamenta-a em #0003310 e #0003318, breve e objetiva, endereçada como o recurso de 12 de maio, com barreira Snake.

### O que diz — passo a passo

Escreve uma resposta a [#número de prova] no processo [número de processo]. Objetivo: [objetivo].

1. A IA lê o processo, o Nucleu da situação de facto e do processo, bem como o documento a que está a responder, e redige depois no seu armazenamento intermédio.

Utiliza [#números de prova] como prova. Tom: [objetivo / firme].

2. As suas instruções são incorporadas na minuta; cada documento citado é lido na íntegra.

Sem correções — continua.

3. A cadeia de verificação corre: nova leitura, comparação com as suas peças processuais anteriores, ataque a partir da perspetiva da parte contrária, ronda Snake, verificação do Nucleu.

Altera o ponto [número]: [a sua correção].

4. A minuta é corrigida e verificada de novo antes de prosseguir.

Entrega-a.

5. O documento aparece na janela de transferências; abra-o no processador de texto, assine-o e envie-o pessoalmente.

### O que acontece nos bastidores

- **Jurisdição e idioma.** A IA determina a jurisdição a partir do processo antes de fazer trabalho jurídico. Fala consigo no idioma do sistema do IRONSTICK; o documento é redigido na língua oficial do país do processo, e o formato inclui o número de processo e a data de hoje.
- **Ler o processo antes de escrever.** As ferramentas que escrevem num processo são rejeitadas até a IA ter lido o digest do processo; uma peça processual exige, além disso, que os documentos mais recentes do processo tenham sido lidos na íntegra. A rejeição enumera o que ainda não foi lido.
- **Barreira inicial do formato.** O formato de documento vinculativo (consoante o tipo de documento: peça processual ou carta, com representação por advogado ou em causa própria) só é disponibilizado depois de a IA ter lido o digest completo, cada documento enviado pelo cliente nesse processo na íntegra, o documento a que a peça processual responde na íntegra, a memória do processo e cada Nucleu do processo. Tudo o que é dirigido a um tribunal é uma peça processual, nunca uma carta. Para uma peça processual, o formato traz ainda um perfil do tribunal extraído dos seus processos.
- **Primeiro, os seus pedidos originais.** Se a peça processual responder a um documento, a IA tem primeiro de enumerar no chat cada pedido da peça inicial do cliente no processo, citado com o respetivo número de prova, perguntar-lhe se ainda se mantém e terminar a sua intervenção. O formato só é disponibilizado após a sua resposta. Se o próprio documento der início ao procedimento, a IA di-lo numa frase e não pergunta nada.
- **Primeiro o Nucleu.** A redação, a verificação e a entrega são rejeitadas até cada Nucleu atual do processo — o Nucleu do processo e o Nucleu de cada situação de facto a que pertence — ter sido lido na sua versão atual, e de novo após cada nova versão e depois de a IA desktop ter condensado a sua conversa.
- **Escrever apenas a partir do que foi lido.** Se a IA tiver aberto no processo um documento da parte contrária ou de uma autoridade, o trabalho num documento desse processo é rejeitado até esse documento ter sido lido na íntegra. Uma minuta que cite documentos que a IA não leu na íntegra fica bloqueada para qualquer alteração até estes terem sido lidos; eliminar a passagem citada não levanta o bloqueio.
- **A verificação determinística de peças processuais.** Corre sobre o estado atual do ficheiro, sem IA, e verifica: cada referência a provas e cada carimbo, bem como que cada documento citado ou anexado foi lido para este documento; cada citação legal face à biblioteca de legislação verificada; cada citação textual face aos textos integrais do processo, aos documentos obtidos e à biblioteca; os números de processo; os montantes, que têm de corresponder exatamente à forma registada; os nomes do cliente, das pessoas e das instituições letra a letra, incluindo os sinais diacríticos; os IBAN e, como verificação específica de país, os números de identificação pessoal romenos (CNP) por soma de controlo e face aos documentos; que cada pessoa ou empresa mencionada foi lida juntamente com as suas ligações; e o formato vinculativo, incluindo a lista de anexos. Cada constatação é marcada como VERIFICADO, NÃO VERIFICADO ou CONTRADITÓRIO.
- **Ler antes de escrever, não depois.** Uma leitura posterior à última alteração da minuta não conta para esta verificação: a IA tem primeiro de ler, depois incorporar no texto e, em seguida, verificar de novo.
- **Citações.** Uma citação que não seja encontrada em nenhuma fonte bloqueia a entrega; reformulá-la ou retirar as aspas mantém-na bloqueada, e o único remédio é a redação exata da fonte. Uma citação que desapareça do texto é-lhe comunicada no momento da entrega.
- **Anexos.** Cada entrada de anexo tem de incluir a referência à prova, o carimbo de entrada obtido pelo IRONSTICK e o marcador de página. Um anexo sem ficheiro guardado e sem multimédia é assinalado para verificação. Um anexo que seja um documento enviado ou uma peça da parte contrária é assinalado com a instrução de anexar antes o documento original, caso essa peça tenha sido junta apenas por causa de uma página nela contida; esta marcação é uma indicação de verificação, não um bloqueio.
- **As constatações em aberto regressam à IA.** Cada constatação da verificação é devolvida à IA para correção, e a verificação corre de novo sobre o novo estado. As verificações são contadas por documento, independentemente dos números de versão: se, após a quinta verificação, ainda houver constatações em aberto, o IRONSTICK passa-lhe a decisão através de uma mensagem do sistema, e a IA apresenta-lhe os pontos em aberto para que decida como prosseguir.
- **Primeiro, o resumo.** Após o primeiro OK, a cadeia de verificação começa com um resumo do documento para si — destinatário e procedimento, pedidos, estrutura, factos essenciais com as respetivas provas, legislação citada. A IA aguarda a sua resposta; as correções são incorporadas antes de a cadeia prosseguir.
- **A cadeia de verificação.** Cada passo é comunicado à verificação de peças processuais e verificado antes de chegar a instrução seguinte: ler novamente todo o ficheiro; as peças processuais anteriores do cliente relativas aos documentos citados, para que o cliente não contradiga as suas próprias intervenções anteriores; uma tabela de resposta que cubra cada passagem do documento respondido; um ataque na perspetiva da parte contrária, escrito num ficheiro próprio e tratado ponto por ponto na minuta; uma avaliação, tratada da mesma forma. Um ficheiro só conta como lido se cada linha tiver sido lida desde a instrução; uma ronda sem qualquer constatação adotada, na qual a maioria das constatações seja descartada como já tratada, é rejeitada.
- **Perguntas fixas.** Seguem-se até duas perguntas fixas — a pergunta do Nucleu, se o processo tiver um Nucleu, e a pergunta da Snake, se existirem Snakes para ele. A IA formula-as textualmente, uma após a outra, e só aceita um sim ou um não vindo da sua própria mensagem. Uma nova peça processual sem versão anterior recebe a ronda do Nucleu sem a pergunta. A sua resposta é memorizada para todas as versões do documento.
- **Ronda Snake.** Após o seu sim, a IA lê as Snakes do processo e das suas situações de facto e regista, para cada entrada da Snake, se é incorporada, rejeitada ou não relevante, sempre com fundamentação; uma entrada é rejeitada se puder ser voltada contra o cliente.
- **Ronda do Nucleu.** O documento é comparado ponto por ponto com o Nucleu. Uma contradição não pode ser descartada: é corrigida ou marcada como conflito. Um conflito interrompe o trabalho nesse documento; a IA tem de o avisar em pormenor e só pode prosseguir após a sua decisão de corrigir o documento ou de manter a divergência.
- **As suas correções permanecem.** As suas próprias mensagens são registadas por documento. Uma correção sua que tenha sido incorporada e mais tarde removida bloqueia a cadeia e a entrega. Uma passagem baseada nas suas próprias palavras não pode ser eliminada antes de a IA lhe ter perguntado.
- **Uma alteração reinicia a cadeia.** Cada edição invalida a última verificação. Uma alteração após a conclusão da cadeia reinicia toda a cadeia.
- **Uma pergunta de entrega.** No fim, a IA indica, em no máximo três linhas, o que a cadeia alterou e pergunta uma vez se pode entregar. A entrega é recusada sem uma verificação positiva recente para exatamente este estado do ficheiro e sem o seu sim.
- **Decisões judiciais pendentes.** Se houver decisões judiciais ainda por avaliar, a IA pergunta-lhe se devem ser avaliadas agora, para que os seus resultados sejam incorporados no documento, ou mais tarde.
- **Entrega no processador de texto.** O ficheiro sai apenas através do diálogo de transferência do IRONSTICK: guarde-o ou passe o Markdown diretamente para o processador de texto. Aí edita, acrescenta o papel timbrado, exclui páginas, apõe a sua assinatura e exporta um PDF ou DOCX. Um ficheiro inalterado e já entregue só é repetido a pedido, sem novo número de versão.
- **Após a entrega.** A IA pergunta se o documento está concluído ou se precisa de correções. Até responder, a IA só pode ler. A sua correção é anexada à versão entregue, que fica assim invalidada, e é criada a versão seguinte para a correção. Imprimir no processador de texto ou enviar o PDF para a verificação de e-mail conclui o documento.
- **O pacote de e-mail.** Um e-mail para o tribunal só é preparado para um PDF concluído: arrasta o PDF assinado para o chat, a IA verifica-o face à última versão, e só um PDF correspondente abre o formato de e-mail — assunto, texto com remetente, identificador e número de processo, lista do pacote e o destinatário, como campos para copiar. Envios demasiado grandes são divididos, no ecrã de envio de correio, em partes de cerca de dez megabytes, cada uma com o seu próprio e-mail de acompanhamento. O IRONSTICK não envia nada; o envio é feito por si, a partir do seu próprio programa de correio eletrónico.

## Fluxo de trabalho 7 — OSINT: pesquisar uma pessoa ou empresa

Utilize este fluxo de trabalho quando quiser saber quem é uma parte: um adversário, uma testemunha, uma empresa por detrás de um endereço, as pessoas em torno de uma empresa.
A IA executa um procedimento de pesquisa fixo nos seus próprios documentos e na Internet aberta, abre e lê as fontes e regista o que consegue verificar como propostas no monitor de consistência de dados.
Nada passa a fazer parte dos seus registos até o adotar aí. A pesquisa não precisa de processo: uma parte pode ser pesquisada isoladamente.

![Pesquisa de pessoas e empresas através da Bridge](https://www.ironstick.legal/img/60_mcp_network.png)

Uma parte de cada vez: pesquisar, ler, verificar, propor — e a decisão é sua, no monitor de consistência de dados.

### Passo 0 — Definir o contexto

- **Ter à mão os dados essenciais da parte.** A verificação OSINT precisa do nome completo, do país e de saber se se trata de uma pessoa singular ou de uma empresa; cidade e distrito, se conhecidos. O país determina o idioma dos termos de pesquisa. Cidade, distrito e país são, além disso, obrigatórios para cada nova parte que a IA venha a propor.
- **Não é necessário nenhum processo.** A verificação OSINT não aceita número de processo. Se quiser, além disso, associar a parte a um processo, diga-o — a associação constitui então uma proposta própria.
- **Um registo existente ajuda.** Se a parte já constar do IRONSTICK, indique-a ou o seu número (por exemplo @E0001234). A IA lê primeiro o registo; a verificação OSINT enumera, além disso, por si própria as entradas existentes com o mesmo nome.
- **Vários nomes?** Se tiver registado uma lista (uma lista de amigos, uma lista de participantes, uma ficha técnica) como documento, peça à IA que compare primeiro a lista com todas as pessoas no IRONSTICK e que depois pesquise apenas os nomes relevantes.
- **Sem a conversa com a IA.** Na análise de pessoa de uma pessoa, o botão *Pesquisa web* abre uma pesquisa própria guiada: ligações candidatas, resumos de páginas, uma pré-visualização dos campos da análise e a gravação na análise da pessoa.

### O que diz — passo a passo

Pesquisa [nome completo], [cidade], [país] — pessoa singular.

1. Primeiro são verificados os seus próprios documentos; depois as fontes na Internet são abertas e lidas.

Pesquisa a empresa [nome], [cidade], [país].

2. O mesmo procedimento para uma empresa, incluindo o respetivo número de identificação fiscal e a sede.

Existe alguma ligação entre [pessoa] e [pessoa]?

3. As relações existentes são apresentadas; as novas são procuradas nos seus documentos e nas fontes.

Mostra-me a fonte de [resultado].

4. Recebe a ligação ou o número de prova por detrás do resultado.

Regista os resultados verificados como propostas.

5. Os resultados vão para o monitor de consistência de dados; nada é guardado até o adotar aí.

### O que acontece nos bastidores

- **A verificação OSINT.** A IA inicia a verificação com o nome, a cidade, o distrito, o país e a indicação de se a parte é uma pessoa singular ou coletiva; de cada vez corre o mesmo procedimento. Internamente, o nome é pesquisado em texto integral em toda a base de dados (todos os clientes); por processo, são devolvidas as 10 entradas de prova mais recentes com o parágrafo de cada resultado, bem como quantas mais existem. Na web corre uma lista fixa de pesquisas: currículo, Facebook, LinkedIn, Instagram, distrito, cidade, escândalo, notícias, declarações de património e de interesses (na medida em que estejam publicadas), impostos, empresas; para uma empresa, o registo comercial e a insolvência substituem as pesquisas relativas a pessoas. Os termos de pesquisa estão no idioma do país da parte e são submetidos a três motores de pesquisa. As ligações e os títulos são devolvidos sem duplicados. A pesquisa corre como tarefa em segundo plano; enquanto não estiver concluída, a IA repete a chamada idêntica para continuar a aguardar. A própria verificação não escreve nada.
- **Primeiro as entradas existentes.** Se o IRONSTICK já contiver pessoas, empresas ou instituições que correspondam ao nome, a primeira resposta enumera-as na íntegra, a melhor correspondência primeiro. A IA indica a entrada que corresponde a esta parte, ou «nenhuma». Uma entrada indicada recebe cada resultado; com uma IA desktop ligada à Bridge, uma proposta para criar de novo a mesma parte é então rejeitada.
- **Um perfil preparado.** A IA verifica-o fonte a fonte e exclui os homónimos. As ligações cujo resultado de pesquisa mostra o nome completo são as ligações correspondentes, ordenadas por qualidade; as restantes são opcionais; meras páginas iniciais são descartadas. A tarefa da IA é ler cada resultado de prova, abrir cada ligação correspondente e utilizar apenas o que a própria página aberta afirma — nunca apenas um título.
- **Barreira OSINT — uma parte de cada vez.** Com uma IA desktop ligada à Bridge, o resultado termina com uma lista de verificação, e a verificação OSINT seguinte para outra parte é rejeitada até essa lista estar cumprida:
   - as primeiras 10 ligações correspondentes abertas (pelo menos 20 % delas, se isso for mais);
   - cada entrada de prova enumerada lida — um resultado desviado para o cofre temporário só conta se tiver sido lido até ao fim, e uma pesquisa nele nunca conta;
   - no caso de uma pessoa, cada página aberta que mencione a pessoa e tenha ido parar ao cofre temporário lida nos pontos em que a menciona;
   - depois, ou uma proposta ou a constatação de que nada de aproveitável foi encontrado;
   - no caso de uma pessoa, além disso, cada ligação a outras pessoas proposta, ou a constatação de que não existe nenhuma.
- Uma página que indique o nome completo da pessoa juntamente com a cidade ou o distrito não pode ser encerrada como «nada de aproveitável», a menos que a IA a indique como já registada ou como homónimo. A rejeição indica exatamente o que falta. As leituras são contabilizadas por sessão, de modo que a leitura de uma sessão nunca conta para outra.
- **Nova pessoa apenas após verificação OSINT completa.** Com uma IA desktop ligada à Bridge, uma proposta de nova pessoa singular é rejeitada até a verificação OSINT para esse nome ter sido integralmente cumprida. Cidade, distrito e país são obrigatórios para cada nova parte e cada entrada de endereço. Uma nova parte precisa, além disso, de pelo menos dois campos de detalhe além do nome. O endereço de uma pessoa singular é verificado face aos endereços de instituições — o endereço de uma entidade empregadora é rejeitado como endereço privado — e uma nova empresa precisa do seu número de identificação fiscal, exceto associações.
- **Abertas, não excertos.** As páginas web são abertas e lidas com a ferramenta de páginas do IRONSTICK; os resultados de pesquisa são apenas indicadores de caminho. As páginas grandes são guardadas integralmente no cofre temporário encriptado e lidas a partir daí. Formulários de pesquisa e tabelas de dados que só se preenchem após um filtro podem ser consultados diretamente. Uma página aberta na mesma sessão é novamente fornecida a partir de uma cópia durante 30 minutos. Um documento digitalizado cujo processamento demore mais é comunicado como ainda não pronto; o processamento continua, e a chamada seguinte fornece o texto.
- **Verificações anti-bot e inícios de sessão ficam a seu cargo.** Se um sítio web apresentar uma verificação anti-bot ou bloquear acessos automatizados, o IRONSTICK abre a página na sua própria janela de navegador, e a IA pede-lhe que conclua aí a verificação. Depois, a IA lê a página nessa janela, abre outras páginas do mesmo sítio web e descarrega os respetivos ficheiros para o cofre temporário encriptado; nada entra num processo até o registar. Para outro sítio web, a IA regressa à ferramenta de páginas; quando termina, comunica o trabalho no navegador como concluído, e a janela pergunta-lhe se deve ser fechada ou mantida aberta.
- **Instruções ocultas rasuradas.** O texto das páginas web abertas e da janela do navegador passa por uma verificação baseada em regras; as passagens que se dirijam a uma IA, imitem texto de controlo do chat ou do IRONSTICK ou ocultem texto em caracteres invisíveis são substituídas por asteriscos, e é apresentada uma indicação por cima do conteúdo.
- **Listas de nomes numa só passagem.** Uma comparação de listas verifica de forma determinística uma lista registada face a cada pessoa e empresa no IRONSTICK — acentos normalizados, ordem das palavras ignorada, tolerante a erros de OCR. As correspondências são classificadas como exatas, com ordem trocada, variante ou palavra isolada; as correspondências de palavra isolada são sempre ambíguas e têm de ser verificadas.
- **Propostas em vez de escritas.** Os factos verificados vão como propostas para o monitor de consistência de dados: dados mestre, a análise de pessoa, ligações e duplicados. Para a análise de pessoa, a IA tem primeiro de ler a pessoa; um campo que já tenha conteúdo só é alterado se a IA transmitir esse conteúdo textualmente. Um campo de análise adotado vai para a análise mais recente da pessoa. Uma nova pessoa só recebe o seu número depois de a ter adotado, pelo que as ligações a ela precisam de uma segunda adoção.
- **Nunca na memória da IA.** Os resultados e o progresso OSINT pertencem à parte, não à memória. Enquanto uma verificação OSINT de uma IA desktop estiver em aberto, qualquer tentativa de guardar uma entrada de memória é rejeitada com a instrução de registar os factos na parte.
- **A pesquisa web de pessoas na aplicação.** O botão *Pesquisa web* na análise de pessoa percorre quatro passos: uma pesquisa web com variantes do nome recolhe ligações candidatas (uma pesquisa web adicional por IA só corre com o seu consentimento); remove os resultados indesejados; as páginas restantes são carregadas e resumidas por uma IA externa; assinala as fontes, e a IA condensa-as numa pré-visualização editável dos campos da análise. A gravação escreve os campos na análise da pessoa, que não está vinculada a um processo, marcados como não confirmados. A IA externa só é utilizada depois de ter dado o seu consentimento num diálogo de consentimento; se recusar, nada é enviado.

## Fluxo de trabalho 8 — Pesquisa jurídica: legislação primeiro a partir da biblioteca

Utilize este fluxo de trabalho sempre que uma lei, um artigo de um código ou um regulamento seja relevante: para responder a uma questão jurídica, verificar uma citação ou fundamentar uma peça processual.
A IA lê as normas textualmente a partir da sua própria biblioteca de legislação e só recorre à Internet se a biblioteca nada contiver sobre essa norma.
Uma lei encontrada online é aberta, lida, citada com o seu URL e comunicada de volta, para que, após a sua aprovação, entre na biblioteca.
A biblioteca é a referência com que a verificação de peças processuais confronta cada artigo citado.

![A biblioteca de legislação](https://www.ironstick.legal/img/43_statutes.png)

Primeiro a biblioteca, a web apenas em caso de falha, e cada fonte web regressa à biblioteca com a sua aprovação.

### Passo 0 — Definir o contexto

- **Abrir ou indicar o processo.** O direito aplicável provém do processo. A IA lê a jurisdição registada no processo antes de trabalhar juridicamente sobre o mérito.
- **Se não for indicada nenhuma jurisdição.** A pesquisa na biblioteca utiliza então a jurisdição do processo em que a IA trabalhou por último na sessão, e indica-o; sem processo conhecido, pesquisa em todas as jurisdições e pede à IA que verifique a jurisdição de cada resultado.
- **Ver o que a biblioteca contém.** O ecrã *Legislação* lista cada lei da biblioteca com título, jurisdição, área, fonte e estado, tem uma pesquisa de texto integral própria e um botão Adicionar para uma ligação ou um ficheiro PDF ou Markdown. Pergunte à IA «Que leis contém a biblioteca para [país]?» para obter a mesma visão geral na conversa.
- **Pedir a leitura de que precisa.** Uma breve visão geral, o texto de um artigo ou a leitura completa de uma lei. Diga qual.

### O que diz — passo a passo

O que diz o art. [número] de [lei]? Cita-o.

1. O artigo é lido textualmente a partir da sua biblioteca de legislação e citado com a respetiva fonte.

[Questão] está regulada em [lei]? Indica-me os artigos.

2. A biblioteca é pesquisada; recebe os artigos pertinentes com o seu texto exato.

Verifica as normas citadas na minha minuta face à biblioteca.

3. Cada artigo citado é comparado com o texto integral na biblioteca.

[Lei] não está na biblioteca — procura-a no portal oficial.

4. A web só é aberta para uma norma que a biblioteca não contém; a página é lida, citada com a sua ligação e proposta para a sua biblioteca.

### O que acontece nos bastidores

- **A pesquisa na biblioteca.** Pesquisa todos os ficheiros de legislação da biblioteca de duas formas: por designação («Código Civil», «Regulamento (UE) 2016/679»), comparada com o título e a descrição e classificada em primeiro lugar, ou por passagem de texto, uma pesquisa aproximada em que bastam cerca de 60 % das palavras. Cada resultado indica o número de registo interno (número L), o ficheiro, breves excertos com as suas posições exatas de caracteres e uma chamada pronta para obter o texto circundante.
- **Ler textualmente.** O leitor de artigos fornece um artigo pelo número L e pelo número do artigo; a pesquisa de expressões fornece um intervalo de caracteres ou cada ponto em que uma expressão ocorre, com o texto circundante. Ambos registam como lido exatamente o que forneceram. O leitor de leis fornece uma lei inteira; uma lei maior do que o limite do conector vai integralmente para a área de trabalho encriptada; conta como lido o que a IA daí obtém com o leitor de artigos.
- **Primeiro a biblioteca de legislação.** Uma pesquisa na web ou consulta de página que pareça uma consulta legislativa — números de artigos ou de números/parágrafos, nomes de códigos, números de diplomas, portais de legislação — é rejeitada até a IA ter pesquisado essa norma na biblioteca. Se a biblioteca tiver resultados, a web permanece fechada para essa norma e a IA é instruída a citar a partir da biblioteca. Só quando a biblioteca não comunica qualquer resultado é que a web é liberada para essa norma, durante 15 minutos, incluindo as ligações de portais de legislação que essa pesquisa fornecer. Resultados que não tenham no título o número ou a designação da lei procurada, ou que não contenham o número do artigo procurado, não contam como «a biblioteca tem-na» — a menção de um regulamento dentro da sua lei de base é uma dessas falhas. A barreira aplica-se ao chat de IA e a cada IA desktop.
- **Abertas, não excertos.** Uma página utilizada como fonte é aberta e lida com a ferramenta de páginas do IRONSTICK; os resultados de pesquisa são apenas indicadores de caminho. Cada fonte da Internet é citada com o seu URL. O texto legal é citado a partir do ficheiro da biblioteca assim que a fonte lá estiver.
- **Comunicar fontes legislativas.** Após uma pesquisa na web relativa a legislação, ou depois de a IA ter aberto uma página de um portal de legislação, cada resposta de ferramenta seguinte começa, durante até 15 minutos, com o lembrete para comunicar a fonte. Uma ligação de portal que apareça apenas num resultado de pesquisa sem relação com o tema recebe apenas uma indicação.
- **Aberta pela própria IA.** Uma comunicação de fonte só é aceite se a mesma sessão de IA tiver aberto exatamente essa página nas últimas 24 horas com a ferramenta de páginas. Caso contrário, a comunicação é rejeitada com a instrução de abrir a página e verificar que contém realmente o texto da lei — não uma página de erro, não uma página de início de sessão, não um resultado de pesquisa, não uma visão geral. Como qualquer escrita datada, a comunicação requer a data atual, obtida nos últimos 30 minutos.
- **O seu consentimento.** As fontes comunicadas acumulam-se num diálogo, cada uma com uma caixa de verificação. As fontes assinaladas são obtidas por um processo em segundo plano, convertidas, verificadas e guardadas na biblioteca; as não assinaladas são rejeitadas. Se fechar o diálogo, as fontes permanecem acumuladas; o diálogo regressa com a comunicação seguinte. Uma ligação que já esteja na biblioteca recebe a resposta de que já existe; uma fonte diferente para uma lei que a biblioteca já contém torna-se um pedido para substituir a fonte sob o mesmo número L.
- **Nenhum portal de legislação na janela do navegador.** A janela de navegador do IRONSTICK, na qual conclui verificações anti-bot e inícios de sessão para outros sítios web, recusa portais de legislação: nada é aí aberto, lido ou descarregado. Um portal de legislação que bloqueie a ferramenta de páginas não é passado para essa janela.
- **Atualidade da biblioteca.** As fontes ligadas são verificadas novamente face à sua fonte cerca de 14 em 14 dias; a IA pode também verificar de novo uma lei individual de imediato. Se uma lei divergir da sua fonte, a IA consulta online a versão atual. Os ficheiros carregados sem fonte estão assinalados como tal.
- **Citações numa peça processual.** A verificação de peças processuais confronta cada artigo citado com o registo de leitura das ferramentas da biblioteca. Um artigo que exista na biblioteca, mas que aí não tenha sido lido antes da última alteração da minuta, é uma constatação bloqueante, com a instrução de o ler textualmente com o leitor de artigos e de o incorporar no texto. Uma norma que não esteja na biblioteca é uma constatação bloqueante até a sua fonte ter sido comunicada e integrada. Uma leitura conta se tiver ocorrido após a última alteração do texto da biblioteca e antes da última alteração da minuta.
- **Encontrado não é lido.** Encontrar um número de artigo num ficheiro de legislação ou mencioná-lo numa visão geral não constitui uma leitura textual. Para uma peça processual, cada artigo citado é lido com o leitor de artigos, e a IA verifica que o texto sustenta efetivamente a sua frase.
- **Ler uma lei inteira.** Se um código completo estiver no cofre temporário e a IA o ler aí parte a parte, tem o texto completo na sua conversa. Para a verificação de peças processuais, um artigo só conta como lido se tiver chegado através do leitor de artigos ou da pesquisa de expressões, ou no caso de uma lei suficientemente pequena para ser devolvida diretamente.

## Trabalhar com a IA — o seu assistente no processo

Em princípio, um chat com uma IA ligada ao IRONSTICK através da Bridge é uma ferramenta extraordinariamente poderosa. Imagine-a como um assistente jurídico ou como um colega. Através da Bridge, a IA não só pode pesquisar documentos, passagens de texto individuais ou elementos de prova — pode também ver imagens guardadas, ver e verificar ficheiros PDF a pedido, iniciar novas digitalizações OCR e muito mais.

Quando trabalha com a IA, trabalha com ela como com um assistente jurídico ou um advogado. Dê simplesmente instruções claras sobre o que pretende exatamente. A IA executa as consultas necessárias em segundo plano através da Bridge, diretamente no IRONSTICK — ou seja, nos seus processos.

**Como regra:** sem o seu consentimento, a IA pouco mais pode fazer no IRONSTICK do que ler. As alterações a dados mestre, cronologia, calendário, memória, textos integrais e biblioteca de legislação só produzem efeito depois de as ter aprovado: ou recebe para tal um formulário ou um diálogo no IRONSTICK, ou o pedido de alteração da IA aparece no monitor de consistência de dados. Sem um diálogo desse tipo, a IA só escreve nas suas próprias áreas de trabalho — o armazenamento intermédio encriptado, o registo diário a seu pedido e a sua própria avaliação do processo após as verificações determinísticas. As etiquetas e as mensagens do chat do escritório requerem a sua confirmação no chat.

**Transparência total:** cada aplicação de IA para desktop mostra as suas chamadas de ferramentas — vê a todo o momento que informações a IA obteve do IRONSTICK.
Seja rigoroso nas suas perguntas e instruções, e diga à IA onde e como deve pesquisar. Não precisa de indicar a ferramenta de pesquisa — a IA conhece-a —, mas diga-lhe claramente que deve obter a informação do IRONSTICK: no cliente XY, no processo XY, na prova XY. Pode indicar os clientes simplesmente pelo nome — a IA resolve ela própria o ID do cliente — ou copiar o número do cliente (*@C0000000*) do IRONSTICK e fornecê-lo à IA. O mesmo funciona, por exemplo, com um número de prova (*#0000000*).

A IA cobre aquilo que a lógica de programa determinística não consegue fazer, ou só com um esforço extremo — compreender e escrever linguagem natural. Tudo o resto — o acesso aos seus processos, a seleção dos autos do tribunal, as verificações face aos seus documentos, a regra de que os seus registos só mudam com a sua aprovação — é feito pelo próprio IRONSTICK, de forma determinística. A IA nunca se torna a fonte dos factos; o IRONSTICK é que o é. É isto que distingue tão profundamente a abordagem do IRONSTICK da utilização convencional da IA.
Para si, enquanto utilizador, o IRONSTICK apresenta-se, no entanto, na forma habitual — como interface gráfica ou como diálogo.
