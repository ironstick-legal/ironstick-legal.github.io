# Declaração RGPD sobre fluxos de dados

> Declaração RGPD do IRONSTICK sobre fluxos de dados: cada percurso pelo qual os dados saem do IRONSTICK em direção a um fornecedor de IA externo, o que é transmitido e onde atua a pseudonimização.

Página original: https://www.ironstick.legal/gdpr_pt.html

---

Relações com Large Language Models externos

Descrição factual, derivada do código, de cada percurso pelo qual os dados
saem do IRONSTICK em direção a um LLM externo, do que é exatamente transmitido, sob que forma
e onde atua a camada de pseudonimização. Edição para Windows desktop. Este documento
descreve exclusivamente o comportamento do IRONSTICK — **o que o fornecedor de IA faz com os dados
recebidos rege-se exclusivamente pelas condições próprias do fornecedor** (os
termos de utilização e as políticas de privacidade dos fornecedores configurados pelo utilizador: Alibaba Cloud (Qwen),
Moonshot AI (Kimi), OpenAI, Anthropic e, se ativados, Groq, OpenRouter e
Mistral; Google apenas se o Google Drive for utilizado para exportações), que o utilizador tem de analisar separadamente.

Versão 1.0.7 — Situação em novembro de 2026

**Resumo.**

- **Armazenamento.** Todos os dados residem num único diretório de dados local. A base de dados,
o arquivo de documentos, o ficheiro de configuração e o armazenamento intermédio da IA estão, em repouso,
encriptados com AES-256. Em texto simples permanecem apenas as cópias de trabalho temporárias dos
documentos abertos, a entrada de digitalizações, as exportações e os ficheiros de saída, o
buffer de curta duração da revisão por pares e, se ativado, o registo de diagnóstico (secção 8).
- **IA externa.** Só existem chamadas de IA dentro da aplicação com a chave de API própria do utilizador.
As chamadas através do router central são, por predefinição, pseudonimizadas e registadas num
registo de auditoria local; as exceções deliberadas em texto simples estão enumeradas em 2.3.
- **Consentimento.** O chat de IA, o registo de documentos e a pesquisa de pessoas perguntam uma vez
por sessão ou por execução do programa; no processador de texto, iniciar uma função de IA
constitui o consentimento. Várias funções em segundo plano chamam a IA na nuvem sem diálogo próprio:
a triagem de e-mails, o monitor de consistência de dados, o briefing diário, o resumo de diálogos
e a verificação Red/Blue Team (secção 3).
- **Bridge para IA desktop.** Um módulo adicional opcional que transmite dados reais dos processos ao fornecedor da IA desktop do próprio utilizador, após
um diálogo de consentimento por execução do programa (secção 4.9).
- **Outros serviços.** As moradas das partes são geocodificadas diariamente com o
OpenStreetMap Nominatim (apenas a morada, sem nomes); um ficheiro de novidades é descarregado após o arranque e,
depois, a cada seis horas a partir de [www.ironstick.legal](https://www.ironstick.legal/index_pt.html); não são enviados ao fabricante do software quaisquer dados de processos ou
de pessoas (secções 1 e 7).
- **IRONSTICK SERVER.** Opcional, no próprio
NAS do escritório na rede local, sem ligações à Internet. Os documentos só chegam ao servidor como
ficheiros encriptados com AES-256 e também só aí ficam guardados dessa forma; o servidor nunca vê o seu texto simples. O tempo de trabalho por processo
e os eventos de cópia de segurança de cada posto de trabalho são visíveis para o administrador do escritório
(secção 9).

## 1. Âmbito de aplicação e endpoints

![API de IA, aplicação de IA para desktop e servidor MCP à esquerda, o cliente IRONSTICK ao centro, cofre de dados com AES-256, IRONSTICK Server e aplicação de digitalização à direita](https://www.ironstick.legal/img/65_ai_client_vault.png)

As chamadas de IA externas dentro da aplicação são dirigidas **ao fornecedor que a cascata automática
utiliza nesse momento**. O utilizador pode configurar até quatro fornecedores; cada
fornecedor para o qual esteja registada uma chave é utilizado por esta ordem fixa,
cabendo a vez primeiro ao mais económico: **Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. A cada arranque do programa, o IRONSTICK verifica
quais deles respondem. Se um fornecedor falhar, o mesmo pedido segue para o
seguinte. O fornecedor que falhou é tentado novamente após um tempo de espera que depende do erro;
durante o resto do dia,
só é ignorado se o seu saldo estiver esgotado ou a causa for desconhecida. O conteúdo transmitido
é idêntico em todos os fornecedores (a partir da secção 3: pseudonimizado pelo router,
consentimento, registo de auditoria). Os endpoints são:

- **Claude:** POST https://api.anthropic.com/v1/messages,
a chave de API própria do utilizador.
- **ChatGPT:** POST https://api.openai.com/v1/chat/completions,
a chave de API própria do utilizador.
- **Qwen:** POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
(Alibaba Cloud Model Studio, região internacional), a chave de API própria do utilizador.
- **Kimi:** POST https://api.moonshot.ai/v1/chat/completions
(Moonshot AI), a chave de API própria do utilizador.

**Fornecedores gratuitos para segundo plano (opcional).** Adicionalmente, o utilizador pode
registar as ofertas gratuitas da **Groq**, da **OpenRouter** e da **Mistral**.
O IRONSTICK utiliza-as exclusivamente para tarefas que correm em segundo
plano: triagem de e-mails, monitor de consistência de dados, briefing diário, resumo de diálogos,
atribuição de oradores em transcrições, obtenção de textos legislativos e relatório de situação. Cada
um destes fornecedores tem na configuração um interruptor próprio de ativação/desativação; só é utilizado
se estiver registada uma chave e o respetivo interruptor estiver ativado. Para o chat, para
peças processuais e para a verificação Red/Blue Team, **nunca** são utilizados. Se
nenhum deles estiver disponível, assume a cascata descrita acima.
A pseudonimização, o consentimento e o registo de auditoria regem-se pela respetiva
tarefa (secção 4). Os endpoints são:

- **Groq:** POST https://api.groq.com/openai/v1/chat/completions,
a chave de API própria do utilizador.
- **OpenRouter:** POST https://openrouter.ai/api/v1/chat/completions,
a chave de API própria do utilizador.
- **Mistral:** POST https://api.mistral.ai/v1/chat/completions,
a chave de API própria do utilizador.

**Ofertas gratuitas — indicação na configuração.** Na configuração, uma indicação sob cada um destes fornecedores esclarece que o IRONSTICK — desde que a chave de API esteja registada e o interruptor ativado — o utiliza para tarefas em segundo plano, como resumos e triagem de e-mails, transmitindo para tal dados a esse fornecedor. Antes de ativar um destes fornecedores, verifique se as respetivas
condições preveem o contrato de tratamento de dados exigido para subcontratantes
e se cumprem as regras deontológicas da sua profissão. Um fornecedor desativado não é utilizado.

Por fornecedor são utilizados três níveis de modelo configuráveis (pequeno / médio /
grande). Um canal separado e opcional é a
**Bridge para IA desktop** (secção 4.9): aí, os dados fluem para a IA desktop
local do próprio utilizador (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen
Desktop **ou** Kimi Desktop), ou seja, para o fornecedor dessa IA (Anthropic, OpenAI,
Alibaba Cloud/Qwen ou Moonshot AI/Kimi), no âmbito da subscrição/conta própria do utilizador junto desse fornecedor. As
Bridges podem funcionar em paralelo: cada IA desktop tem o seu próprio pequeno programa Bridge,
todas se ligam ao mesmo endpoint local na aplicação em execução, e podem
trabalhar em simultâneo no mesmo processo. Não são enviados ao fabricante do software quaisquer dados de processos ou
de pessoas. O único contacto com o fabricante é um simples download de um ficheiro de novidades
a partir de [www.ironstick.legal](https://www.ironstick.legal/index_pt.html) (após o arranque e, depois, a cada seis horas, secção 7), que, além da
própria ligação técnica, não contém quaisquer dados.
O **IRONSTICK SERVER** (secção 9) nada altera a este respeito: é
operado pelo próprio escritório, no hardware próprio do escritório, dentro da
rede própria do escritório — nunca contacta o fabricante nem nenhum fornecedor de IA.

**O interruptor principal é o acesso próprio do utilizador.** O
tratamento por IA externa dentro da aplicação só existe se o utilizador tiver aberto uma conta própria
junto de um fornecedor de IA e introduzido a sua própria chave de acesso na configuração.
**Sem um fornecedor configurado, não pode ocorrer qualquer chamada de IA externa dentro da aplicação** — cada
função descrita na secção 4 permanece então local ou simplesmente não está disponível. Esta
conta constitui um contrato direto entre o utilizador e o fornecedor; o IRONSTICK não é
parte contratante. O mesmo se aplica à Bridge para IA desktop, que
pressupõe uma subscrição/conta própria do utilizador junto do fornecedor de IA desktop escolhido
(Anthropic, OpenAI, Alibaba Cloud/Qwen ou Moonshot AI/Kimi). Os documentos marcados como **secretos** estão
excluídos das ferramentas da Bridge para IA desktop e do chat, do
pacote de instruções de IA e de qualquer resultado gerado (anexos, dossiers, exportações);
o seu tratamento durante o registo segue a decisão deliberada do utilizador no
momento do registo (secção 4.1).

Integralmente local (nada sai do computador): extração de texto e OCR, a
camada de chat local determinística, a pesquisa global, o radar de relevância, a análise de cadeias de correspondência,
a geração de dossiers/PDF, a execução local do localizador de rasuras, o reconhecimento de voz
(transcrição de gravações) e a criação do pacote de instruções de IA.

## 2. A camada de pseudonimização

Cada chamada dentro da aplicação através do router central de IA é, por predefinição, pseudonimizada:
os identificadores no texto de saída são substituídos por marcadores, e a resposta é restaurada localmente. Se não for possível construir
integralmente o pseudonimizador, nada é enviado. As exceções estão enumeradas em 2.3. A correspondência
existe apenas na memória de trabalho, uma nova correspondência por operação; nunca é guardada.

![Em cima: cliente IRONSTICK, figura anonimizada com engrenagens, API de IA; em baixo: cliente IRONSTICK, utilizador, aplicação de IA para desktop](https://www.ironstick.legal/img/66_pseudonymization.png)

### 2.1 O que é substituído

| Fonte | Campos | Família de marcadores (identificadores internos) |
| --- | --- | --- |
| Registos de clientes | Nome, número de identificação nacional do campo de identificação (p. ex., CNP romeno), telefone, e-mail, morada e localidade | $PARTEI_A$ (parte), $CNP_A$ (número de identificação), $TEL_A$ (telefone), $MAIL_A$ (e-mail), $ADRESSE_A$ (morada) |
| Pessoas / entidades | nome completo (pessoa ou empresa), número de identificação nacional ou número de empresa do campo de identificação (p. ex., CNP ou CUI romenos) | $PARTEI_B$ (parte) / $FIRMA_A$ (empresa), $CNP_B$ (número de identificação) |
| Processos | Número do processo, parte contrária, autor | $FALL_A$ (processo), $PARTEI_C$ (parte)… |
| Camada de padrões (valores desconhecidos no texto livre) | números de processo judicial, números pessoais, IBAN, endereços de e-mail e números de telefone. Outros números de identificação nacionais só são substituídos se estiverem guardados no registo do cliente ou da pessoa. | as mesmas famílias de marcadores |

### 2.2 O que permanece deliberadamente inalterado

- **Datas, horas e montantes pecuniários** — são necessários inalterados para a análise jurídica.
- **Nomes de instituições** (tribunais, autoridades) — não constam do
dicionário e são entidades públicas.
- **Terceiros sem registo próprio** — testemunhas, médicos, advogados, juízes ou empresas que não estejam registados como cliente, pessoa ou processo; quem deva ser substituído por um marcador é simplesmente registado como pessoa.
- **Moradas de não clientes** — é substituída por um marcador a morada guardada do cliente.
- Todo o **conteúdo factual** dos documentos (alegações, diagnósticos,
relato) — apenas os identificadores são substituídos, não a situação de facto.

### 2.3 Exceções deliberadas com nomes reais

- **Pesquisa web de pessoas (etapa 1)** e **preenchimento automático de formulários** para pessoas /
instituições: uma pesquisa web por $PARTEI_A$ não faria sentido, pelo que o
nome real é enviado deliberadamente.
- **Localizador de rasuras por IA**: recebe texto que já foi rasurado
localmente e tem de responder com os nomes reais dos *terceiros desconhecidos* que encontrou
— a pseudonimização está desativada para este único fim.
- **Pré-processamento da função de leitura em voz alta (TTS)**: ver 4.6 — as frases saem em texto
simples.
- **Bridge para IA desktop**: deliberadamente dados em bruto (secção 4.9).

## 3. Momentos do consentimento e o registo de auditoria

As chamadas encaminhadas através do router central estão sujeitas a consentimento e são registadas: cada
ronda do modelo escreve uma linha na tabela de auditoria local com
o pedido e a resposta completos **na forma com marcadores que efetivamente
saiu do computador**; as tentativas recusadas ou bloqueadas são registadas sem conteúdo. Quando uma
função pede consentimento, o diálogo indica o nível do modelo e a dimensão aproximada do pedido, e uma autorização é válida para
a sessão de ecrã atual (no registo de documentos: para a execução atual do programa).

**Fluxos do router sem diálogo de consentimento próprio:**
a triagem de e-mails (tanto no funcionamento em segundo plano como na obtenção manual no ecrã de e-mail,
secção 4.2), a execução de análise do monitor de consistência de dados (4.5),
o briefing diário (4.4a), o resumo de diálogos do chat de API e a verificação Red/Blue
Team (4.7), bem como o localizador de rasuras por IA (ativar o seu interruptor constitui o
consentimento). Estes são, ainda assim, pseudonimizados (exceto as respostas com nomes reais pretendidas do
localizador de rasuras) e, ainda assim, registados no registo de auditoria.

**Fluxos que contornam o router:** as
funções de IA do processador de texto, o pré-processamento da função de leitura em voz alta e a correção por IA ficheiro→Markdown
chamam a API diretamente. São pseudonimizados (exceção: função de leitura em voz alta),
mas **não apresentam diálogo de consentimento próprio nem escrevem linhas no
registo de auditoria**. A utilização destas funções pelo utilizador (premir o botão de IA,
iniciar uma geração, iniciar a função de leitura em voz alta com o interruptor de IA ativado) constitui o
momento do consentimento.

## 4. Os fluxos de dados, caso de utilização a caso de utilização

### 4.1 Registo de documentos

A extração de texto e o OCR são efetuados localmente. Se estiver configurada uma chave de API, o IRONSTICK pergunta
uma vez por execução do programa; em seguida, correm até quatro tipos de chamada (todos pseudonimizados, todos
registados no registo de auditoria):

- **Deteção do documento principal** (nível pequeno): excertos do texto OCR em bruto — apenas em digitalizações de má qualidade.
- **Correção de OCR** (nível pequeno): um excerto limitado do texto do documento.
- **Classificação** (nível médio): um excerto limitado do texto do documento, **acrescido de listas do sistema**: a lista completa de processos (número do processo,
nome do cliente, parte contrária — substituídos por marcadores), um inventário de nomes conhecidos (substituídos por marcadores), bem como as listas de códigos dos tipos de instituição e dos tipos de documento
(designações sem marcadores). Alternativa: nível pequeno, sem as
listas.
- **Contextualização ao guardar** (nível pequeno): os metadados do documento e
o texto integral com extensão limitada, acrescidos de uma linha de índice (ID, data, título) **de cada prova ativa do mesmo cliente** — utilizada para assegurar
as remissões. Corre também para documentos marcados como secretos (decisão deliberada do
utilizador).

### 4.2 Monitor de e-mail (triagem)

A associação a processos é feita **localmente e sem IA**. Os novos e-mails são obtidos em
segundo plano no arranque e, depois, a cada cinco minutos. Um e-mail cujo processo
o reconhecimento local já determine (número do processo, número de carta, número do cliente ou referência a uma
peça processual própria) não desencadeia qualquer chamada de IA. Para qualquer outro
e-mail, **uma chamada do nível pequeno** avalia a urgência, com exatamente: nome e
endereço do remetente, assunto e o excerto de pré-visualização guardado como texto simples (com limite fixo) — **nunca o texto completo da mensagem**, nenhum
anexo e **nenhuma lista de processos**. Resposta: prioridade e fundamentação. Se estiverem ativados fornecedores gratuitos
para segundo plano (secção 1), esta chamada pode correr através deles.
**Não é apresentado qualquer diálogo de consentimento**, nem no funcionamento em segundo plano nem na
obtenção manual no ecrã de e-mail: a triagem corre automaticamente assim que uma conta de e-mail
e um fornecedor de IA estejam configurados. Pseudonimizado e registado no registo de auditoria.

**Sem píxeis de rastreio.** Abrir um e-mail no monitor nunca contacta
o servidor do remetente: as imagens referenciadas através de um endereço de Internet (incluindo
píxeis de rastreio invisíveis) não são carregadas e aparecem como marcadores com uma
indicação, de modo que o remetente não pode saber quando, quantas vezes ou a partir de que endereço um
e-mail foi lido. São apresentadas exclusivamente as imagens incorporadas no próprio e-mail.

### 4.3 Análise de pessoas (pesquisa web)

Três etapas, após um consentimento único por sessão:

- **Etapa 1 — Pesquisa:** os motores de pesquisa são consultados diretamente a partir do computador do
utilizador; adicionalmente, é chamada a
ferramenta de pesquisa web do lado do servidor do fornecedor com o **nome
real da pessoa em texto simples** (inevitável para uma pesquisa; registado em texto simples).
- **Etapa 2 — Resumos de páginas** (nível médio): por página, o nome da pessoa
(substituído por marcador), o URL e um excerto limitado do conteúdo da página.
- **Etapa 3 — Síntese do perfil** (nível grande): nome e localidade (substituídos por marcadores)
acrescidos dos textos das páginas recolhidos, com extensão limitada por fonte.

O resultado é guardado localmente com a fiabilidade «não confirmado». Os respetivos
botões de **preenchimento automático** nos formulários de pessoas/instituições enviam o
nome introduzido também em texto simples (exceção documentada).

### 4.3a Verificação de partes a partir de fontes públicas

A verificação de uma parte a partir de fontes públicas é um procedimento definido que a própria aplicação
executa quando uma IA ligada a chama com nome, localidade, distrito, país e
o tipo de parte (pessoa singular ou pessoa coletiva):

- **Processos:** uma pesquisa de texto integral pelo nome na base de dados
local — **puramente local**, nada sai do computador.
- **Internet:** uma lista fixa de pesquisas é enviada aos motores de pesquisa
públicos **Google, DuckDuckGo e Qwant**. Cada pesquisa consiste num
termo de pesquisa no idioma do país da parte, acrescido do **nome
real da parte em texto simples** e, em algumas pesquisas, da localidade ou do distrito
(inevitável para uma pesquisa). Não são transmitidos conteúdos de processos, de clientes ou de documentos.
Os motores de pesquisa veem as pesquisas como as de qualquer utilizador de um navegador.

O resultado é devolvido à IA que efetuou a chamada como perfil preparado e não verificado.
Nada é escrito nos dados mestre: cada resultado passa pela barreira de verificação
do monitor de consistência de dados (secção 4.5) e só é adotado se o
utilizador o aceitar. São avaliadas exclusivamente fontes de acesso público.

### 4.4 Registo diário

O ecrã em si é local. Na importação de texto livre corre primeiro um analisador **local**;
só se não for encontrada nenhuma marcação de formato de registo diário é que uma alternativa por IA normaliza
o texto em bruto: o texto colado é enviado na íntegra, nível pequeno, sujeito a consentimento, pseudonimizado, registado no registo de auditoria. As entradas
guardadas do registo diário só saem do computador como resultados de ferramentas do chat ou da Bridge para IA desktop
(excertos limitados) ou dentro do pacote de instruções de IA (secção 5).

### 4.4a Briefing diário

No primeiro arranque do programa de cada dia (Windows), o IRONSTICK prepara
em segundo plano um briefing diário falado, já durante o arranque e
antes de a janela do briefing perguntar se o utilizador o pretende ouvir. O texto do briefing —
números de prazos, as audiências de hoje e de amanhã com número do processo,
nome do cliente, local e tribunal, bem como os títulos dos compromissos de hoje — é
enviado uma vez (nível pequeno) para a IA na nuvem, que o reformula como prosa falada no
idioma do sistema. Pseudonimizado através do router, registado no registo de auditoria, **sem diálogo de consentimento**.
Se estiverem ativados fornecedores gratuitos para segundo plano (secção 1), esta chamada pode
correr através deles. Se nenhum fornecedor estiver disponível, é utilizado, em vez disso, um texto composto localmente.

### 4.5 Monitor de consistência de dados

A fase 1 (e-mail ↔ dados mestre) é integralmente determinística. A fase 2 envia
**por cada novo documento recebido uma chamada** do nível pequeno (pseudonimizada,
registada no registo de auditoria, **sem diálogo**), que contém: os
**excertos da zona de contactos** deduplicados (breves excertos em torno de dados de morada, telefone e fiscais) do
texto integral **desse** documento, os nomes das partes desse documento e do seu processo, bem como, para
cada parte, os **nomes** de possíveis correspondências nos dados mestre guardados (substituídos
por marcadores, na medida em que constem do dicionário; nomes de instituições em texto simples).
**Os dados de contacto e os números de identificação dos dados mestre guardados não são transmitidos.** Se estiverem
ativados fornecedores gratuitos para segundo plano (secção 1), esta chamada pode correr através
deles. A resposta torna-se sempre apenas uma proposta, que o
utilizador tem de aceitar no monitor.

### 4.6 Processador de texto (assistência de IA no texto)

- **Rever seleção:** a frase/o parágrafo/a secção selecionado(a) (com
marcação) **acrescido(a) de um excerto do documento como contexto**
e a instrução do utilizador — nível médio, pseudonimizado.
- **Estrutura/índice:** na prática, todo o documento como lista indexada de linhas
(linhas longas encurtadas), com extensão limitada — nível médio, pseudonimizado.
- **Pré-processamento para a função de leitura em voz alta:** ao ler um documento em voz alta, **cada
frase é enviada individualmente em texto simples para o nível pequeno**, para
escrever por extenso abreviaturas e números — **sem pseudonimização** (os números de identificação
têm de regressar inalterados para serem lidos corretamente). Carimbos de processo e marcações de referência
são previamente removidos localmente. Iniciar a função de leitura em voz alta constitui o momento do
consentimento.

Nenhuma das chamadas do processador de texto apresenta um diálogo de consentimento separado
nem escreve entradas no registo de auditoria (contorno do router, secção 3).

### 4.7 Verificação Red/Blue Team e resumo de diálogos (API)

Dois outros fluxos de API fazem parte da elaboração de minutas. **Red/Blue Team:** se o utilizador
a tiver ativado para o fornecedor ativo (interruptor junto à chave de API; é necessária uma
chave guardada), cada documento formal entregue através do
diálogo de entrega — tanto a partir do chat da aplicação como da Bridge para IA desktop —
é lido mais uma vez pelo mesmo fornecedor, numa passagem de verificação separada, na perspetiva do
mandatário da parte contrária
(nível médio). São transmitidos: o texto da minuta, a data e a jurisdição
do processo; pseudonimizado através do router e registado no registo de auditoria como qualquer chamada do router;
**sem diálogo de consentimento** — o interruptor constitui o consentimento; o relatório do verificador é anexado para o utilizador. A verificação Red/Blue Team
**nunca** corre através dos fornecedores gratuitos para segundo plano (secção 1). **Resumo de diálogos:** em sessões
longas de chat de API, a parte mais antiga do diálogo (apenas as perguntas do utilizador e as
respostas finais do modelo, nunca resultados de ferramentas) é condensada pelo fornecedor ativo
(nível pequeno, em segundo plano, **sem diálogo de consentimento próprio**) num breve resumo que substitui o histórico
em bruto; é guardado encriptado no armazenamento intermédio e substituído
de cada vez. Pseudonimizado e registado no registo de auditoria. Se estiverem ativados fornecedores gratuitos para segundo plano (secção 1), o
resumo pode correr através deles.

### 4.8 Chat de IA (externo, API)

Consentimento uma vez por sessão de chat; nível médio com escalonamento automático para o
nível grande (todo o contexto é então reenviado); pseudonimizado; cada ronda
registada no registo de auditoria. Cada interação transmite: o prompt de sistema (regras estáticas), o **contexto atual da interface**
(ecrã atual, processo/cliente aberto, incluindo o nome do cliente — substituído por marcador),
até **10 entradas de memória da IA** do cliente aberto, o diálogo mais recente acrescido de um resumo das interações anteriores
(4.7), bem como a lista dos ficheiros do armazenamento intermédio do chat. Cada ferramenta que o modelo chama
devolve o seu resultado à conversa de API — incluindo textos integrais de documentos
(os resultados maiores são guardados no armazenamento intermédio encriptado), textos de mensagens de e-mail e
excertos do registo diário. O chat utiliza a mesma camada de ferramentas
e as mesmas verificações de entrega que a Bridge para IA desktop (4.9): verificação de
peças processuais, Red/Blue Team (4.7) e entrega através do diálogo de exportação —
o que sai do sistema é uma minuta pronta a apresentar. A camada de chat local
responde a pedidos de rotina sem qualquer transmissão.

Duas funções auxiliares merecem menção expressa. A **consulta meteorológica**
obtém dados meteorológicos atuais para um local indicado junto do serviço não LLM
Open-Meteo (secção 7) — a este serviço são transmitidos apenas o nome do local ou as respetivas coordenadas,
nunca dados de processos ou de pessoas. A **consulta de localização**
responde exclusivamente a partir do **mais recente instantâneo de segurança guardado localmente**
(secção 8): o pedido da IA **não desencadeia nenhuma nova consulta externa** —
limita-se a ler o que já existe no suporte de dados. Como em qualquer ferramenta, o que estas funções
devolvem regressa à conversa de IA, ou seja, ao fornecedor de IA.

### 4.9 Bridge para IA desktop (módulos adicionais opcionais)

**Cada acesso de IA desktop é um módulo opcional, adquirido separadamente.**
Só existe onde o escritório tiver adquirido e
instalado o respetivo módulo Bridge; sem qualquer módulo, a secção Bridge na
configuração permanece bloqueada, o endpoint local nunca arranca, e nenhum dos fluxos de dados
descritos nesta secção pode ocorrer. Existem Bridges para
**Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** e **Kimi Desktop**; cada uma tem o seu próprio pequeno programa Bridge,
e todas se ligam ao mesmo endpoint local na aplicação
em execução. Os fluxos de dados descritos a seguir são idênticos para todas; apenas o fornecedor destinatário difere.

**Este canal transmite dados reais dos processos.** É essa a sua finalidade: a sessão de IA desktop própria do utilizador elabora
minutas prontas a apresentar e necessita, por isso, de nomes e números reais.

- A IA desktop (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop ou Kimi Desktop)
liga-se, através do seu programa Bridge, à aplicação em execução; esta ligação permanece no
computador. Apenas as ferramentas de pesquisa web, de leitura de páginas e de registos públicos estabelecem contacto com a Internet.
- **Sítios web com verificação de acesso.** Se um sítio web exigir uma confirmação antes de
disponibilizar os seus conteúdos, o IRONSTICK abre a página numa janela própria; o
utilizador confirma aí pessoalmente. O conteúdo da página é depois lido pela IA desktop —
e segue, como qualquer outro resultado de ferramenta, para o respetivo fornecedor.
- O primeiro acesso a dados de qualquer IA desktop numa execução do programa abre um diálogo de
consentimento bloqueante. A autorização abre o acesso a todas as IA desktop durante o resto da
execução do programa; uma recusa bloqueia-as todas temporariamente.
- Mais de 200 ferramentas disponibilizam cronologias, textos integrais, e-mails,
registos diários, prazos, dados mestre, processos inteiros (por partes) e formatos de saída;
os documentos marcados como secretos estão excluídos. As alterações a dados mestre,
cronologia, calendário, memória da IA, textos integrais e biblioteca de legislação só produzem efeito
depois de o utilizador as ter autorizado num formulário ou diálogo do IRONSTICK
ou no monitor de consistência de dados: as propostas relativas a dados mestre e relações
vão para o monitor; as alterações propostas pela IA a notas de instruções de IA associadas a processos são apresentadas como
diff vermelho/verde e só são adotadas depois de o utilizador ter
dado o seu acordo expresso; as entradas da cronologia nunca são escritas pela IA — esta limita-se a pré-preencher o
formulário de registo, que o utilizador completa e guarda; e um texto integral de documento corrigido pela IA
(nova digitalização OCR) só substitui o texto integral guardado depois de
o utilizador ter visto e guardado o texto completo num diálogo de confirmação.
Sem um diálogo desse tipo, a IA só escreve nas suas próprias áreas de trabalho: o armazenamento
intermédio encriptado, o registo diário a pedido do utilizador e a sua própria avaliação do processo após as verificações determinísticas.
As etiquetas e as mensagens do chat do escritório precisam da confirmação do utilizador no chat. Num processo subscrito por um colega,
a IA pode afixar uma nota, que chega, através do
IRONSTICK SERVER, ao titular do processo e a todos os subscritores
(secção 9). A passagem para o processador de texto e a entrega de ficheiros são passos expressos do utilizador;
navegação apenas com autorização separada.
- **Correção por nova digitalização OCR (local) e a entrega do PDF (desencadeada pelo utilizador).**
Se um texto integral guardado estiver truncado ou inutilizável devido a uma execução de OCR antiga, a IA pode
solicitar uma nova digitalização: o utilizador seleciona as páginas, a nova digitalização corre **localmente**
(nenhum novo destinatário externo), e ambas as versões do texto são disponibilizadas no
armazenamento intermédio local; o que a IA daí lê segue, como qualquer
outro resultado de ferramenta, para o respetivo fornecedor. Como último recurso extremo — apenas após uma nova digitalização deste tipo e
apenas dentro de limites rígidos impostos pela Bridge —
a IA pode pedir ao utilizador que lhe entregue o **ficheiro PDF original**: o IRONSTICK
limita-se a abrir a entrada; o utilizador guarda ele próprio o PDF através do ícone de clipe
e arrasta-o para o chat da IA desktop. Desta forma, o documento é
transmitido **como ficheiro** (incluindo carimbos, assinaturas e imagens) ao fornecedor dessa IA
— o que acontece exclusivamente por ação própria e deliberada do utilizador, nunca
automaticamente, e os documentos marcados como secretos estão, à partida, excluídos de todo o
canal de nova digitalização.
- **Armazenamento intermédio local da IA (minimização de dados).** Os resultados de ferramentas extensos podem ser guardados num ficheiro local e encriptado do armazenamento intermédio e aí trabalhados, **sem sequer serem transmitidos ao fornecedor
de IA**. As exportações completas de processos para a IA
e o resumo de início de sessão numa só chamada são igualmente escritos diretamente nesse
armazenamento local; apenas as partes que a IA lê depois seguem para o respetivo fornecedor.
O armazenamento intermédio encontra-se dentro do
diretório de dados e mantém-se entre sessões (é o contexto de trabalho da IA);
os ficheiros que deixam de ser utilizados são eliminados automaticamente, e não surge nenhum novo destinatário externo.
- **O armazenamento intermédio é encriptado.**
Cada ficheiro no armazenamento intermédio está, em repouso, encriptado com AES-256; os ficheiros só saem do
armazenamento através do diálogo de exportação do IRONSTICK, nunca para uma pasta de transferências.
A base de dados, o arquivo de documentos, o ficheiro de configuração e o armazenamento intermédio
estão, assim, todos encriptados com AES-256 em repouso. As cópias de trabalho temporárias dos documentos
abertos (esvaziadas a cada arranque e no encerramento), o buffer de curta duração da revisão por pares,
a entrada de digitalizações, as exportações e os ficheiros de saída permanecem em texto simples
(secção 8).
- Os resultados das ferramentas são transmitidos ao cliente de IA desktop do utilizador e, a partir daí,
**ao respetivo fornecedor**: Anthropic para o Claude (no âmbito da subscrição Claude
do utilizador e das condições da Anthropic), OpenAI para o ChatGPT (no âmbito da
subscrição ChatGPT do utilizador e das condições da OpenAI), Alibaba Cloud/Qwen para o Qwen
Desktop (no âmbito da conta Qwen do utilizador e das condições da Qwen) ou Moonshot AI para o Kimi
Desktop (no âmbito da conta Kimi do utilizador e das condições da Moonshot AI). O IRONSTICK não escreve
linhas no registo de auditoria para o tráfego da Bridge; a barra superior mostra, por cada
IA ativa, um logótipo pulsante (símbolo Claude, símbolo ChatGPT, símbolo Qwen, símbolo Kimi) — o acesso simultâneo é
possível e é sinalizado separadamente. Cada programa Bridge mantém ao seu lado um
**registo local** com a hora, o nome da ferramenta, êxito/falha e a
dimensão da resposta, **nunca com conteúdos**. Um segundo registo, mais detalhado, o
**registo de diagnóstico** no diretório de dados, está **desativado por predefinição**; quando é
ativado para diagnóstico de erros, pode conter parâmetros de chamada (que podem incluir nomes) em texto simples e é encurtado automaticamente. Nenhum dos registos é transmitido para onde quer que seja.
- A memória partilhada da IA guarda localmente conhecimentos condensados (associados a clientes ou a processos). A IA pode propor
guardar, alterar ou eliminar uma entrada; cada alteração só produz efeito depois de o utilizador ter dado o seu acordo. As entradas associadas a um processo
nunca são eliminadas automaticamente; as entradas sem processo são eliminadas após um ano sem utilização. O conteúdo da memória é visível para cada canal de IA
e é transmitido assim que esses canais o leem.
- A revisão por pares entre as IA desktop decorre através do IRONSTICK, e não diretamente
entre os fornecedores: uma IA deposita um resultado de trabalho (p. ex., uma minuta) num
**buffer de troca local e de curta duração** (ficheiros em texto simples no computador do utilizador,
eliminados quando a tarefa é encerrada e totalmente limpos a cada reinício da aplicação), juntamente com uma
nota de tarefa; a outra IA lê-os quando o utilizador lho indica. Daí resulta
**nenhum novo destinatário externo** — o que a IA revisora lê é transmitido, tal como qualquer outro
resultado de ferramenta descrito acima, ao **seu próprio** fornecedor, nas condições
deste. Os fornecedores nunca trocam dados diretamente; o que a IA revisora lê segue
exclusivamente para o seu próprio fornecedor.

### 4.10 Transcrição de áudio (atribuição de oradores)

O reconhecimento de voz corre integralmente em local; a própria gravação nunca sai do
computador. Se o utilizador tiver indicado mais do que um orador, a IA atribui em seguida
as linhas reconhecidas aos oradores: por secções (nível médio), o texto reconhecido, juntamente com linhas já atribuídas como contexto e
o número de oradores. As chamadas passam pelo router — pseudonimizadas, sujeitas a
consentimento, registadas no registo de auditoria. A resposta não pode
alterar o texto: cada linha é verificada face ao texto reconhecido; se um bloco falhar,
a transcrição é adotada sem atribuição de oradores. Com apenas um orador, não há
qualquer chamada de IA. Se estiverem ativados fornecedores gratuitos para segundo plano (secção 1), estas
chamadas podem correr através deles.

## 5. O pacote de instruções de IA (ZIP de exportação)

![Cliente IRONSTICK, utilizador com ficheiros MD e arquivo ZIP, aplicação web de IA](https://www.ironstick.legal/img/67_instruction_zip.png)

A criação do pacote é feita localmente e não inclui qualquer chamada de IA. Gera
**Markdown em texto simples** (sem pseudonimização), destinado a ser carregado pelo
utilizador num LLM externo da sua escolha. Conteúdo:

| Ficheiro | Conteúdo |
| --- | --- |
| Processos | todos os processos do cliente selecionado, com partes, estado e índice de IDs de provas (sem textos integrais) |
| Entidades | **todas as pessoas/entidades de todo o escritório** (não apenas deste cliente), incluindo números nacionais de pessoas e de empresas (p. ex., CNP/CUI romenos), data de nascimento, dados de contacto completos, profissão, veículo — acrescidos dos blocos de análise guardados (avaliação, vulnerabilidades, locais de residência, finanças, meio social, fontes) |
| Instituições, prazos | todas as instituições; prazos ativos com número de processo e nome do cliente |
| Correio | os 100 e-mails mais recentes **de todo o escritório**: remetente, destinatário, assunto, nomes dos ficheiros anexos, breve excerto (sem textos completos das mensagens) |
| Registo diário | últimos 10 dias, de todo o escritório, incluindo a cronologia dos processos desse período |
| Por processo | os autos de cada processo: a cronologia completa **com textos integrais dos documentos**, identificadores do cliente e das partes, incluindo números de identificação; acrescidos de todas as notas de contexto do processo, sem limite |
| Ficheiros de instruções | cinco documentos com regras de trabalho — sem dados pessoais |

**O que acontece quando este ZIP é carregado num serviço de IA de terceiros:**
o utilizador transmite pessoalmente e em texto simples partes essenciais de todo o
escritório — identidades de clientes com números de identificação nacionais, perfis de terceiros,
incluindo avaliações sensíveis, metadados da correspondência de todo o escritório e autos dos processos
— a esse fornecedor. A partir desse momento, os dados são tratados nas condições
desse fornecedor (utilização para treino, conservação, ordem jurídica). O IRONSTICK apresenta, antes da
exportação (uma vez por execução do programa), um aviso de proteção de dados e oferece também a exportação para o Google Drive, o que faz com que
os ficheiros fiquem adicionalmente guardados na Google. O utilizador atua como responsável
pelo tratamento que transmite os dados, na aceção do RGPD, e tem de assegurar uma base jurídica antes do carregamento (p. ex., art. 6.º,
regras deontológicas de sigilo profissional).

Os documentos marcados como secretos estão excluídos dos prazos, dos registos diários e dos
autos dos processos.

## 6. Matriz de síntese

| Fluxo de dados | O que sai (forma) | Pseudonimizado | Diálogo de consentimento próprio | Registo de auditoria |
| --- | --- | --- | --- | --- |
| Registo de documentos (4 chamadas) | Texto OCR e do documento (limitado), listas de processos e de nomes | sim | sim — uma vez por execução do programa | sim |
| Triagem de e-mails (obtenção manual no ecrã de e-mail) | Remetente, assunto, breve excerto de texto (sem lista de processos); apenas para e-mails não associados localmente | sim | não | sim |
| Triagem de e-mails (segundo plano, a cada cinco minutos) | idem | sim | não | sim |
| Briefing diário (API) | Texto do briefing: números de prazos, audiências com número do processo, nome do cliente, local e tribunal, títulos dos compromissos | sim | não (primeiro arranque do dia, preparado no arranque) | sim |
| Pesquisa de pessoas, etapa 1 | Nome real (pesquisa web) | não — por conceção | sim — uma vez por sessão | sim (em texto simples) |
| Pesquisa de pessoas, etapas 2 e 3 | Textos das páginas (limitados por fonte) | sim | o mesmo consentimento | sim |
| Preenchimento automático pessoa/instituição | nome introduzido (pesquisa web) | não — por conceção | sim — uma vez por sessão | sim (em texto simples) |
| Importação por IA do registo diário | texto em bruto colado | sim | sim | sim |
| Monitor de consistência de dados | por cada novo documento: as respetivas secções de contacto e nomes de possíveis correspondências (sem dados de contacto nem números de identificação dos dados mestre) | sim (nomes de instituições em texto simples) | não (processo em segundo plano com limitação de ritmo) | sim |
| Processador de texto: rever / estruturar | Seleção com excerto de contexto / linhas do documento (limitado) | sim | não (botão = consentimento) | não |
| Pré-processamento para leitura em voz alta | cada frase, texto simples | não | não (início = consentimento) | não |
| Verificação Red/Blue Team (API) | Texto da minuta, data e jurisdição | sim | não (interruptor = consentimento) | sim |
| Resumo de diálogos (API) | rondas de diálogo mais antigas (apenas perguntas do utilizador e respostas finais) | sim | não (execução em segundo plano do chat de API) | sim |
| Correção por IA ficheiro→Markdown | texto convertido | sim | não | não |
| Localizador de rasuras por IA | texto já rasurado; as respostas contêm nomes reais de terceiros | desativada — por conceção | interruptor = consentimento | sim |
| Chat de IA (externo) | Prompt, contexto do ecrã, memória, diálogo mais recente com resumo, resultados de ferramentas (limitados por elemento) | sim | sim — uma vez por sessão | sim |
| Bridge para IA desktop (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | resultados de ferramentas não processados (dados completos dos processos) | não — por conceção | sim — uma vez por execução do programa para todas as IA desktop | não (do lado da aplicação) |
| Transcrição de áudio: atribuição de oradores | texto reconhecido por secções — nunca a gravação | sim | sim | sim |
| Fornecedores gratuitos para segundo plano (Groq, OpenRouter, Mistral) — apenas se ativados | os mesmos conteúdos que a respetiva tarefa em segundo plano; nunca chat, peça processual ou Red/Blue Team | como a respetiva tarefa | não (interruptor por fornecedor = consentimento) | sim |
| ZIP de instruções de IA | exportação do escritório em texto simples (carregamento desencadeado pelo utilizador) | não | aviso uma vez por execução do programa | não aplicável |

## 7. Serviços externos sem LLM (por uma questão de exaustividade)

![Cliente IRONSTICK, Internet, ícone de localização e ícone de meteorologia](https://www.ironstick.legal/img/68_external_services.png)

Independentemente de qualquer LLM, as funções seguintes contactam serviços externos com
os dados mínimos necessários: validação de números (EU VIES, EORI, GLEIF,
registos comerciais — o número a verificar), as consultas web diretas da pesquisa de pessoas (o nome), IMAP (o seu servidor de correio) e
exportações opcionais para o Google Drive (os ficheiros exportados). Nenhuma destas operações envolve
o fornecedor de IA.

Os serviços seguintes são contactados em segundo plano ou igualmente com dados
mínimos:

- **OpenStreetMap Nominatim (geocodificação de moradas)** — uma vez por dia, uma
tarefa em segundo plano percorre as pessoas e empresas nos registos de partes
que tenham uma morada ou uma localidade e envia a rua, o distrito, a localidade e o país
(nunca o nome) ao Nominatim, para as posicionar no mapa; uma morada já
posicionada só é reenviada se mudar, e uma não encontrada é
tentada de novo após um tempo de espera. O nome do local da consulta meteorológica é geocodificado da
mesma forma. Sem diálogo de consentimento; as coordenadas são guardadas localmente.
- **ipwho.is (consulta Geo-IP)** — uma vez por arranque do programa, o IRONSTICK, no âmbito do
instantâneo de segurança local (secção 8), consulta junto deste serviço o
endereço IP **público** do computador e uma localização aproximada (cidade, país, ISP).
O pedido não contém dados úteis; o serviço recebe o endereço IP público a partir do qual o
pedido chega. A resposta é guardada exclusivamente em local e
não é transmitida para mais nenhum lado.
- **Open-Meteo (meteorologia)** — a pedido, a consulta meteorológica da IA
(secção 4.8) obtém dados meteorológicos atuais para um local indicado; o briefing diário faz
o mesmo para o local registado na configuração, se o seu modo opcional com
referência meteorológica estiver ativado. São transmitidas apenas as coordenadas do local — nunca
dados de processos, de clientes ou de pessoas.
- **[www.ironstick.legal](https://www.ironstick.legal/index_pt.html) (ficheiro de novidades)** — depois de introduzido o código de
acesso e, depois, a cada seis horas, a aplicação descarrega do sítio web do fabricante do software um ficheiro de novidades com
indicações e avisos, bem como cada imagem nele referenciada. O pedido não contém dados; como qualquer servidor web,
o servidor do fabricante vê o endereço IP e o momento do pedido.

Nenhum destes serviços envolve o fornecedor de IA.

## 8. Armazenamento local, integridade e controlo pelo utilizador

![Cliente IRONSTICK com bloqueio de acesso TOTP; documentos, armazenamento intermédio e base de dados encriptados com AES-256](https://www.ironstick.legal/img/69_local_encryption.png)

Independentemente dos canais de IA acima descritos, aplica-se o seguinte a **todos**
os dados que o IRONSTICK mantém:

- **Armazenamento exclusivamente local.** Todo o acervo de dados — base de dados, ficheiros de documentos,
multimédia, transcrições, configuração — encontra-se num único diretório de dados, num
caminho definido pelo utilizador. O IRONSTICK não requer qualquer conta na nuvem,
e nenhuma função envia dados do utilizador ao fabricante (o único contacto com o fabricante é
o download do ficheiro de novidades, secção 7). Se um escritório operar
o IRONSTICK SERVER opcional (secção 9), também esse servidor é um dispositivo próprio do
escritório, na rede própria do escritório — o que em nada altera o acesso do fabricante.
- **Base de dados encriptada em repouso (AES-256).** A base de dados — o acervo
de clientes, processos, cronologia, e-mails, prazos, textos de transcrições e a
memória das IA — é guardada encriptada com AES-256, cada página individualmente e
com um selo de integridade por página. A chave é derivada pela aplicação em
tempo de execução e nunca é escrita em disco nem na configuração, pelo que um ficheiro de base de dados
copiado do dispositivo de armazenamento ou de um arquivo de cópia de segurança não pode ser lido sem o
IRONSTICK. Trata-se de uma medida técnica na aceção do art. 32.º do RGPD, que
atua sem qualquer configuração por parte do utilizador e não pode ser desativada.
- **Documentos encriptados em repouso (AES-256).** O arquivo de documentos — os
PDF originais, digitalizações, imagens, ficheiros de áudio e de transcrição — é encriptado da mesma forma,
ficheiro a ficheiro, com um selo de integridade que deteta alterações.
A leitura é feita através de uma única porta de acesso, que desencripta o ficheiro pedido
para uma cópia de trabalho temporária e remove essas cópias quando a
aplicação é fechada ou iniciada. As cópias de segurança e os pacotes de processos contêm os documentos
na sua forma encriptada.
- **O que permanece em texto simples.** Além das cópias de trabalho da sessão em curso e das exportações: as digitalizações que aguardam registo na entrada de digitalizações;
o buffer de curta duração da revisão por pares entre as IA desktop (secção 4.9, eliminado
quando a tarefa é encerrada e limpo a cada arranque); e, apenas se ativado,
o registo de diagnóstico detalhado da Bridge (secção 4.9).
- **Controlo de acesso no arranque (TOTP).** Assim que a chave de licença
é aceite, a aplicação não mostra nada além de um pedido de código, até o utilizador
introduzir o código único atual de seis dígitos, baseado no tempo, de uma
aplicação autenticadora (RFC 6238). O segredo subjacente aos códigos
nunca é escrito em disco; é guardada apenas uma
impressão digital não secreta da configuração confirmada, para que o código QR
volte a ser apresentado após uma mudança de chave. Introduções erradas repetidas desencadeiam um tempo de espera
crescente. As Bridges para IA desktop não recebem dados de processos enquanto a aplicação
estiver bloqueada. O ficheiro de configuração (chaves de API, credenciais de e-mail,
acesso ao servidor) está encriptado com AES-256 pelo mesmo mecanismo que os
documentos e só é desencriptado na memória de trabalho.
- **Local de armazenamento controlado pelo utilizador.** O caminho dos dados é escolhido na
configuração inicial e pode ser alterado a qualquer momento — também para um suporte amovível, como
uma pen USB encriptada ou um disco externo encriptado. A aplicação limita-se a seguir
o local de armazenamento configurado; a encriptação do suporte (p. ex., com a
encriptação de unidades do sistema operativo) está nas mãos do utilizador e é
recomendada para suportes portáteis. Unidades de rede e pastas sincronizadas com uma nuvem
(OneDrive, Google Drive, Dropbox, iCloud, Box, pCloud, MEGA) são recusadas como local de
armazenamento de dados. Ao mudar o local de armazenamento na configuração, o
IRONSTICK verifica o destino segundo estas regras; a cópia é feita com comparação de somas de controlo, a mudança
só ocorre após verificação bem-sucedida, e a pasta antiga é conservada com outro nome.
- **Sincronização de dispositivos sem qualquer nuvem.** A
sincronização opcional Windows ↔ tablet Android decorre através de uma ligação direta
por cabo USB — nenhum serviço de terceiros está envolvido, as transferências são
verificadas por soma de controlo, e antes da substituição da base de dados é criada uma cópia de segurança
obrigatória. Os documentos marcados como secretos não são de todo transferidos para o tablet.
- **Instantâneo de segurança no arranque (registo local de acessos).** A cada
arranque do programa, o IRONSTICK regista em segundo plano um instantâneo do computador em que
está a correr: nome do anfitrião, sistema operativo, RAM/CPU, endereço IP local, navegador predefinido,
ferramentas de acesso remoto em execução que deteta, bem como uma avaliação de segurança daí derivada
— e ainda, uma vez por arranque, o endereço IP público e a localização aproximada
(cidade, país, ISP), determinados através do serviço Geo-IP ipwho.is (secção 7).
O instantâneo é guardado **exclusivamente em local** no registo de acessos da base de dados
e não é transmitido para lado nenhum. A conservação está
automaticamente limitada a um máximo de **6 meses** e a um máximo de **1.000
entradas** (limpeza diária), e o utilizador pode consultar o registo a qualquer momento
no configurador (cartão «Registo de acessos»).
- **Impressões digitais de integridade para cada ficheiro registado.** No momento do
registo, cada ficheiro guardado recebe uma impressão digital criptográfica do conteúdo
(SHA-256 para documentos e multimédia; uma impressão digital MD5 mais antiga para ficheiros de áudio de transcrições),
que é registada na base de dados junto da entrada. Qualquer alteração posterior de um
ficheiro guardado é, por isso, **detetável** através da comparação do ficheiro com a sua
impressão digital registada, e as exportações de E-Discovery (EDRM) incluem estas impressões digitais,
para que os destinatários possam verificar os ficheiros de forma independente. Desta forma, qualquer manipulação torna-se evidente e demonstrável.
- **Cópias de segurança ao critério do utilizador.** Uma função de cópia de segurança integrada escreve
uma cópia completa dos dados (cópia de segurança completa ou apenas de dados) como um único arquivo ZIP
num destino qualquer escolhido pelo utilizador e, a pedido, restaura a partir de um arquivo desse tipo.
Com que frequência são criadas cópias de segurança, onde são guardadas, durante quanto tempo são
conservadas e se os arquivos são adicionalmente encriptados fica inteiramente à
decisão do utilizador. Em cada arquivo, a base de dados, os documentos, a
configuração e o armazenamento intermédio da IA estão, em qualquer caso, encriptados com AES-256; apenas
as digitalizações que ainda aguardam na entrada de digitalizações estão incluídas sem alterações —
o IRONSTICK não impõe qualquer calendário e não transmite cópias de segurança para lado nenhum.
- **Os documentos gerados pertencem ao utilizador.** O utilizador pode a qualquer momento
gerar documentos — peças processuais, cartas, dossiers, listas, exportações — e
descarregá-los: são escritos na pasta local «Documentos» ou, se o
utilizador escolher expressamente o Google Drive como destino, na conta Google Drive própria do utilizador.
O que acontece depois a um
documento gerado — impressão, apresentação num tribunal, envio por e-mail,
carregamento num serviço qualquer, partilha com terceiros — é decidido exclusivamente pelo utilizador.

**Atribuição de responsabilidade.** Uma vez que o IRONSTICK
guarda tudo localmente e só transmite dados pelos percursos documentados nas secções
1–7 e 9 — incluindo as funções em segundo plano que correm sem diálogo
próprio (secções 3 e 7) —, o operador do escritório é o único
responsável pelo tratamento: escolhe o suporte de armazenamento e a respetiva encriptação, gere as cópias de segurança e
conserva-as, decide que funções de IA estão ativadas, concede ou recusa cada
consentimento e decide sozinho o que acontece a cada documento, cada exportação ou cada cópia de segurança
que o software gera. Os conteúdos gerados por IA — minutas, resumos, avaliações,
classificações — são sempre uma **proposta**, sobre a qual o utilizador decide. Este documento serve para que cada
uma destas decisões possa ser tomada com pleno conhecimento dos
fluxos de dados efetivos.

## 9. IRONSTICK SERVER (opcional, na rede própria do escritório)

![IRONSTICK Server e cliente IRONSTICK ligados através da LAN; o servidor não tem ligação à Internet](https://www.ironstick.legal/img/70_server_lan.png)

Os escritórios com vários postos de trabalho IRONSTICK podem operar o
**IRONSTICK SERVER** opcional — um serviço de coordenação que corre no
NAS Synology do próprio escritório, na rede local própria do escritório. Para
efeitos desta declaração, são determinantes os seguintes factos:

- **Nenhuma parte externa está envolvida.** O servidor é um
dispositivo próprio do escritório. Aceita ligações exclusivamente de endereços de rede
privados (locais) e **nunca estabelece ele próprio uma ligação à
Internet** — sem telemetria, sem verificações de atualizações, sem contacto com o fabricante.
O fabricante do software não tem qualquer acesso.
- **Transporte e armazenamento.** Os documentos só chegam ao servidor como ficheiros encriptados com AES-256, no mesmo formato de cofre que no
posto de trabalho, e também só aí ficam guardados dessa forma; o servidor nunca vê o seu texto simples.
O servidor corre no próprio NAS do escritório, na rede do escritório, sem ligações à Internet.
- **Nenhuma participação de IA.** Nenhum tráfego de IA passa pelo servidor; este
não guarda qualquer chave de IA e nunca comunica com um fornecedor de
modelos de linguagem. Todos os canais de IA descritos nas secções 1–6 permanecem
estritamente limitados ao posto de trabalho individual; a camada de pseudonimização,
as barreiras de consentimento e o registo de auditoria não são afetados pela existência
do servidor.
- **O que o servidor guarda** — tudo no NAS, sob o controlo do
escritório: (a) **pacotes de processos partilhados** — exclusivamente processos que um
utilizador partilhou expressamente com colegas; os documentos marcados como secretos
estão excluídos por conceção e nunca chegam ao
servidor; (b) a **biblioteca central de legislação** — textos legislativos
públicos em Markdown, cada um com o nome do utilizador que o contribuiu,
a ligação para a fonte e a data de verificação; (c) **dados de registo de tempo** — por utilizador,
dia e processo: número do processo, nome do cliente e minutos, comunicados por cada posto de trabalho em
segundo plano; (d) **totais de presença** por utilizador e dia,
derivados de sinais de atividade das sessões; (e) **metadados de eventos de processos** —
partilhas, revogações, início e fim de subscrições, bem como exportações, cada um com
data, hora e endereço IP da LAN; (f) um **registo de segurança** com
eventos administrativos e eventos de início de sessão, incluindo
endereços IP da LAN; (g) **pacotes de passagem de processos** — se um utilizador transferir a
titularidade de um processo para um colega, o processo completo chega,
como arquivo, a uma área de passagem temporária no servidor; o pacote
é eliminado do servidor depois de o destinatário ter confirmado a importação, e
os documentos marcados como secretos só são transferidos após
confirmação adicional expressa pelo titular (caso contrário, a transferência é
cancelada); (h) a **entrada central de digitalizações** (Central Scan
App opcional): um diretório dos **números de processo e do nome de apresentação** de cada
utilizador (comunicados pelos postos de trabalho como material de correspondência — nunca
conteúdos de processos), bem como um **spool de documentos** ficheiro a ficheiro, que guarda o correio recebido
digitalizado e dirigido a um utilizador até o posto de trabalho desse
utilizador o ter obtido e confirmado, após o que a cópia no servidor é eliminada;
o reconhecimento de texto e a atribuição do destinatário são efetuados localmente no
posto de digitalização, sem qualquer IA; (i) **dados de eventos de cópia de segurança** — cada
posto de trabalho comunica os seus eventos de cópia de segurança e de restauro
(tipo, nome do ficheiro, tamanho, momento, IP da LAN), para que o administrador possa ver, por utilizador,
quando foi criada a última cópia de segurança e lembrar os utilizadores
que estejam em atraso; (j) o **diretório de partes de todo o escritório**
— os registos mestre de **pessoas e empresas,
instituições, as relações entre elas e as análises de pessoas**, que
são mantidos nos postos de trabalho, juntamente com a fila das
propostas de alteração trocadas entre os utilizadores; (k) as
**avaliações de decisões judiciais** — por posto de trabalho e decisão: tribunal,
secção e composição, os nomes dos juízes e dos oficiais de justiça,
número da decisão, data, número de processo, os números internos de processo e de cliente do
posto de trabalho avaliador, proporções de texto medidas e a análise em inglês, redigida pela IA,
da decisão e das peças de ambas as partes; (l) o
**chat do escritório** — mensagens entre os utilizadores registados (eliminadas após um ano) —
bem como notas afixadas a um processo partilhado, visíveis para o respetivo titular e todos os subscritores.
- **O diretório de partes de todo o escritório.** Assim que um posto de trabalho está ligado ao
servidor, os seus dados mestre de partes (quem é quem: nomes,
identificadores, dados de contacto, relações, análise de pessoa) são **automaticamente
carregados** e espelhados em cada outro posto de trabalho do mesmo escritório,
para que cada advogado veja com quem o escritório já lida, e o
escritório obtenha uma visão global dos conflitos de interesses. Cada registo
tem exatamente um titular — o utilizador que o introduziu primeiro; todos os
outros utilizadores mantêm uma cópia apenas de leitura e só podem enviar uma
**proposta de alteração**, que o titular aceita ou recusa no monitor de dados.
Se o titular não estiver contactável durante 48 horas, a
titularidade passa para o utilizador que fez a proposta. **Os conteúdos dos processos não
fazem parte deste diretório** — documentos, cronologia, correspondência e
associações a processos continuam sujeitos aos atos expressos de partilha e de passagem
aqui descritos. A troca permanece dentro do escritório
(um único responsável pelo tratamento), nunca sai da rede local e não envolve
**nenhum fornecedor de IA**: a deteção de duplicados e a comparação de campos correm como
pura lógica de programa no posto de trabalho que envia; o servidor limita-se a guardar e
a reencaminhar. Os escritórios devem incluir esta partilha interna de
dados de partes e de análises de pessoas no seu registo das
atividades de tratamento.
- **As avaliações de decisões judiciais.** Uma avaliação só é guardada por
ordem expressa do utilizador; depois disso, tal como o
diretório de partes, é **automaticamente carregada** e espelhada em cada posto de trabalho do
escritório. Cada posto de trabalho mantém, por decisão, a sua própria avaliação,
que só ele pode alterar. A análise descreve o conteúdo de uma decisão e das
peças relativas à mesma — contém, nessa medida, **conteúdo do processo** — e identifica pelo nome os juízes e
os oficiais de justiça. Nenhum fornecedor de IA está envolvido; a troca permanece na
rede local do escritório. Os escritórios devem incluir também esta partilha no seu
registo das atividades de tratamento.
- **Apenas atos deliberados — para conteúdos de processos.** Os conteúdos dos processos chegam
ao servidor exclusivamente através de um ato expresso de partilha ou de passagem, confirmado pelo utilizador;
os textos da biblioteca de legislação só depois de o
utilizador ter aceitado a entrada no monitor de dados; o correio recebido digitalizado
só depois de o colaborador do escritório ter verificado o documento e clicado em Enviar para um
destinatário selecionado. O diretório de partes e as
avaliações de decisões judiciais guardadas são as exceções deliberadas: sincronizam-se
em segundo plano sem confirmação por registo. Os dados de tempo, presença, eventos e cópias de segurança são
metadados operacionais que resultam do próprio funcionamento multiutilizador e
são visíveis para o administrador do escritório na administração web.
- **Responsabilidade.** O escritório que opera o servidor continua a ser o
único responsável pelo tratamento. O administrador decide sobre a aprovação de
registos, pode terminar subscrições, eliminar entradas da biblioteca de legislação
e desinstalar o pacote — ficando o diretório de dados do servidor sob
o controlo do administrador no NAS.
- **Dados de trabalhadores.** Com o IRONSTICK SERVER, cada
posto de trabalho comunica o seu tempo de trabalho medido por dia e por processo (número do processo,
nome do cliente), bem como cada evento de cópia de segurança e de restauro (ficheiro, tamanho, hora, endereço IP),
ao servidor, onde o administrador do escritório os pode consultar. O escritório tem de
informar os seus colaboradores em conformidade.
- **Nomes completos de clientes nos dados de registo de tempo.** A
vista geral do registo de tempo mostra o tempo de trabalho por processo e por cliente, o que
significa que os nomes dos clientes são guardados no NAS. Isto permanece
dentro da infraestrutura própria do escritório e do seu regime de
confidencialidade existente — os escritórios devem, no entanto, incluir o NAS no seu registo
das medidas técnicas e organizativas (controlo de acessos
no sistema operativo do NAS, encriptação de volumes, política de cópias de segurança), tal como para qualquer outro
servidor de ficheiros do escritório.

## Anexo — Cláusula-tipo para a sua informação de privacidade aos clientes (proposta)

O texto seguinte é uma proposta de redação que um escritório que
utilize o IRONSTICK pode incluir na sua própria informação de privacidade aos clientes.
Foi redigido de modo a corresponder exatamente aos fluxos de dados acima descritos. Prescinde deliberadamente de citações de artigos de lei, para que possa ser inserido em
informações com qualquer estrutura.

**Antes de inserir o texto — lista de verificação para o advogado:**

1. Tenha à mão o contrato de subcontratação de **cada** fornecedor de IA que
configurou, indique na cláusula apenas os fornecedores
que efetivamente utiliza e verifique a frase sobre treino e
conservação com base nas condições que efetivamente subscreveu.
Os fornecedores gratuitos para segundo plano (Groq, OpenRouter, Mistral, secção 1)
só são abrangidos pela cláusula através da frase opcional entre parênteses retos aí incluída —
ative-os apenas se as respetivas condições cumprirem os seus requisitos
deontológicos, e elimine a frase se não os utilizar.
2. Mantenha a frase entre parênteses retos sobre a área de trabalho de IA apenas
se utilizar efetivamente a Bridge para IA desktop (Claude Desktop/Code, ChatGPT Desktop, Qwen
Desktop ou Kimi Desktop); caso contrário, elimine-a.
3. Esta cláusula abrange os fluxos de dados descritos neste documento
dentro da aplicação. **Não** abrange o pacote de instruções de IA (secção 5)
— o carregamento dessa exportação num serviço de IA é uma
decisão separada e requer, em regra, o consentimento expresso
do cliente.
4. Se tiver desativado funções de IA individuais no configurador, encurte
a lista de finalidades em conformidade — descreva exatamente o que
utiliza, e nada mais.
5. Trata-se de uma proposta de redação, não de aconselhamento jurídico. Mande verificá-la antes
da utilização à luz das regras deontológicas da sua Ordem e da prática local
em matéria de proteção de dados.

### Português

**Tratamento de mandatos com apoio de IA.** O nosso escritório utiliza o
software de gestão jurídica IRONSTICK, que inclui funções com apoio de IA. Para estas
funções, podem ser transmitidos dados selecionados do seu processo a um
prestador de serviços de IA externo (consoante a disponibilidade: Alibaba Cloud, Moonshot AI, OpenAI ou Anthropic, através das respetivas API),
que os trata por nossa conta com base num
contrato de subcontratação. Utilizamos estas funções para:
a classificação e o registo de documentos recebidos, a priorização
de e-mails recebidos, a verificação dos nossos dados quanto a incoerências,
a redação e a verificação de documentos jurídicos, bem como para análise jurídica
e pesquisa. [Opcional — eliminar se não for utilizado: para tarefas que correm em
segundo plano, como a priorização de e-mails recebidos, a verificação dos nossos
dados e resumos, podem ser utilizados adicionalmente os serviços gratuitos da Groq,
da OpenRouter ou da Mistral; analisámos as respetivas condições antes de
os ativar.]

**Medidas de proteção.** Antes de cada transmissão, o software substitui, no nosso próprio
computador, os identificadores diretos guardados no nosso sistema — nomes,
números de identificação pessoal, números de telefone, endereços de e-mail, moradas postais,
números de processo e dados bancários — por marcadores
neutros. A tabela de correspondência entre marcadores e dados reais
nunca sai do nosso escritório; as respostas do prestador de serviços são retraduzidas
localmente. É transmitido apenas o que cada função exige,
com limites de volume fixos. Algumas funções necessitam, por razões técnicas,
de dados reais — por exemplo, a pesquisa pública na Internet sobre o nome de uma pessoa
ou a função de leitura em voz alta; utilizamo-las apenas através de um ato individual
deliberado. [Opcional — eliminar se não for utilizado: para a
elaboração de peças processuais, utilizamos adicionalmente uma área de trabalho de IA, na
qual os dados do processo são tratados sem substituição por marcadores; este canal é
utilizado apenas sob a nossa supervisão direta.] Independentemente das funções de IA, o software envia
as moradas postais guardadas nos nossos dados — sem nomes — ao serviço público de mapas
OpenStreetMap, para que possam ser apresentadas num mapa.

**O prestador de serviços.** Segundo as condições do prestador de serviços aplicáveis
ao nosso escritório, os conteúdos transmitidos através da API
não são utilizados para treinar modelos de IA e só são conservados durante um período
limitado. O tratamento pode ocorrer fora do Espaço Económico Europeu;
nesse caso, a transferência está protegida pelas garantias acordadas no nosso
contrato de subcontratação. O que o
prestador de serviços pode fazer com os dados é regulado por esse contrato — e não pelo
critério da IA.

**A sua escolha.** O nosso dever de sigilo profissional mantém-se
inalterado: para além do aqui descrito, nenhum dado sai do nosso
escritório. O tratamento assenta no mandato que nos foi conferido e no nosso
interesse legítimo num tratamento eficiente e diligente
do mandato. Pode opor-se à utilização das funções com apoio de IA
a qualquer momento; na medida do possível, trataremos então o seu processo sem
essas funções. Os seus direitos legais em matéria de proteção de dados — acesso, retificação,
apagamento, reclamação junto da autoridade de controlo — mantêm-se integralmente
salvaguardados.

Esta declaração foi derivada do código-fonte da aplicação
(pseudonimizador, router externo, registo de auditoria e o percurso de transmissão
de cada função individual) e reflete o comportamento distribuído da versão 1.0.7 (situação em novembro de 2026).
O tratamento pelo próprio fornecedor de IA — conservação,
utilização para treino, subcontratantes ulteriores, ordem jurídica — rege-se
exclusivamente pelas condições do fornecedor, na respetiva versão em vigor. As
ligações para os termos de utilização e as políticas de privacidade de cada fornecedor encontram-se também na
respetiva secção da Configuração de IA.

| Fornecedor | Termos de utilização e privacidade |
| --- | --- |
| Alibaba Cloud (Qwen) | [alibabacloud.com/help/en/legal](https://www.alibabacloud.com/help/en/legal) |
| Moonshot AI (Kimi) | [platform.kimi.ai/docs/agreement](https://platform.kimi.ai/docs/agreement) |
| OpenAI (ChatGPT) | [openai.com/policies](https://openai.com/policies) |
| Anthropic (Claude) | Termos comerciais de serviço: [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms); Política de utilização: [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup); Política de privacidade: [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) |
| Groq | [groq.com/terms-of-use](https://groq.com/terms-of-use) |
| OpenRouter | [openrouter.ai/terms](https://openrouter.ai/terms) |
| Mistral | [legal.mistral.ai/terms/commercial-terms-of-service](https://legal.mistral.ai/terms/commercial-terms-of-service) |
