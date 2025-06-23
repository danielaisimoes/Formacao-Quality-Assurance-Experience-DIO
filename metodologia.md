# Processo de software
O processo de software é um roteiro das atividades necessárias para desenvolver um software que gera estabilidade, controle e organização dentro do contexto onde todos os envolvidos são responsáveis.

## Principais atividades
Existem visões na literatura que definem algumas atividades que o autor julga importante para o processo, a visão dos dois principais autores:
- **Pressman**:
    - Comunicação
    - Planejamento
    - Modelagem
    - Construção
    - Entrega
- **Sommerville**:
    - Especificação
    - Projeto e implementação
    - Validação
    - Evolução

## Fluxos do processo
É a sequência de atividades operacionais do desenvolvimento e qualidade do software, como as etapas, atividades e sequências que guiam todo o desenvolvimento, desde a ideia até a entrega e manutenção. Na concepção de Pressman, seria assim:

*Comunicação → Planejamento → Modelagem → Construção → Entrega*

- **Linear**: Cada etapa só começa quando termina a anterior
- **Interativo**: Segue uma ordem linear mas interagem entre elas, podendo voltar para etapas passadas
- **Evolucionário**: Inicia pela comunicação com o cliente e segue em ciclo
- **Paralelo**: As atividades não acontecem sequencialmente e podem acontecer mais de uma por vez

## Ciclo de vida
São estruturas que descrevem todas as fases pelas quais um software passa, desde a concepção (ideia) até o seu encerramento ou substituição. Ele ajudam a definir quando e como cada atividade acontece e permitem planejar melhor prazos, custos e entregas. Essa estrutura vai ajudar na escolha da melhor abordagem.

- **<ins>Modelos</ins>**:
    - **Cascata (Waterfall)**: Fases sequenciais, cada uma depende da anterior.
    - **Modelo V**: Validação e verificação ligadas diretamente.
    - **Incremental**: Desenvolvimento em pedaços (entregas parciais).
    - **Espiral**: Foco na análise de riscos + desenvolvimento iterativo.
    - **Prototipação**: Criação de protótipos para validar requisitos.
    - **Ágil (Scrum, Kanban, XP)**: Entregas rápidas, iterativas e colaborativas.
    - **DevOps**: Integra desenvolvimento, testes e operações.

## Abordagens
É o estilo, o método ou a filosofia de trabalho adotada no desenvolvimento de software. Ela define como você conduz o projeto, organiza tarefas, planeja, desenvolve, testa e entrega o produto, podendo ser mais rígido, mais flexível, mais colaborativo ou mais técnico.

- **Tradicional (Prescritiva)**: Segue um processo linear, sequencial e bem definido.
- **Ágil**: Iterativa, incremental, colaborativa, adaptável.
- **Híbrida**: Combina práticas da Tradicional + Ágil.
- **DevOps**: Integra Desenvolvimento + Operações + QA (Qualidade).
- **Lean (Enxuta)**: Foco em reduzir desperdícios, maximizar valor e melhorar processos.
- **XP (Extreme Programming)**: Abordagem ágil focada em qualidade técnica, código limpo e testes constantes.
- **Design Thinking**: Centrada no usuário, usa empatia, ideação e prototipação para resolver problemas.

## Padrões do processo
São normas, regras e boas práticas reconhecidas mundialmente, ou seja, modelos e diretrizes, que ajudam equipes e empresas a desenvolver software de forma mais organizada, eficiente, segura e com qualidade, garantindo que sigam um processo estruturado, controlado e repetível na criação de software. Alguns exemplos são:

- <ins>Normas</ins>: 
    - **ISO/IEC 12207:** Define todo o ciclo de vida do software, incluindo desenvolvimento, manutenção, suporte e gestão.
    - **ISO/IEC 29119:** Padrão internacional para processos de testes de software.
- <ins>Modelos de maturidade</ins>:
    - **CMMI (Capability Maturity Model Integration):** Modelo de maturidade que define níveis (de 1 a 5) para medir a qualidade dos processos de software.
    - **MPS.BR:** Modelo brasileiro inspirado no CMMI, muito utilizado no Brasil.

## Processo unificado (PU)
É um modelo de desenvolvimento de software iterativo e incremental, que organiza o  desenvolvimento em fases, com ciclos de entregas contínuas e progressivas. Seu foco é entregar o software em partes (iterações), cada uma evoluindo o produto até sua conclusão.

- <ins>Características</ins>:
    - **Iterativo:** Entrega o produto em ciclos curtos e constantes;
    - **Incremental:** A cada ciclo, adiciona mais funcionalidades;
    - **Dirigido por Casos de Uso:** As funcionalidades são descritas como histórias de usuário ou casos de uso;
    - **Centrado na Arquitetura:** A arquitetura do sistema é desenvolvida desde o início e validada continuamente;
    - **Orientado a Riscos:** Identifica e trata riscos nas fases iniciais.
- <ins>Fases</ins>:
    - **Concepção**: Entender o problema, alinhar os objetivos e estimativas.
    - **Elaboração**: Projetar a arquitetura, definir requisitos mais críticos e planejar detalhes.
    - **Construção**: Desenvolver, testar e integrar as funcionalidades.
    - **Transição**: Entregar o software ao usuário, realizar treinamentos, correções e ajustes finais.
    - **Produção**: Monitora o uso continuo, da suporte e gera relatórios de defeitos e mudanças.

# Testes no mundo ágil
No ágil, o teste não é uma fase separada, ele acontece o tempo todo, dentro das Sprints e junto com o desenvolvimento. O foco é na qualidade contínua, feedback rápido e correção imediata.

- <ins>**Tipos que fazem parte do ciclo ágil**</ins>:
    - **Testes Unitários** → Valida partes pequenas (funções, métodos).
    - **Testes de Integração** → Verifica se os módulos interagem corretamente.
    - **Testes de API** → Valida os serviços e comunicação entre sistemas.
    - **Testes Funcionais** → Valida se o sistema faz o que deveria fazer.
    - **Testes de Aceitação** → Valida se atende aos critérios do cliente.
    - **Testes de Regressão** → Garante que uma mudança não quebrou algo já pronto.
    - **Testes de Performance** → Garante que o sistema é rápido e escalável.
    - **Testes de Segurança** → Verifica vulnerabilidades e riscos.
- <ins>**Principais métodos**</ins>:
    - **TDD (Test-Driven Development)**: Desenvolvimento guiado por testes. O teste é escrito antes do código e segue o ciclo: *Escrever Teste → Escrever Código → Refatorar*.
    - **BDD (Behavior-Driven Development)**: Desenvolvimento guiado por comportamento. Cria cenários de teste que descrevem o comportamento esperado em linguagem natural (Gherkin).
    - **ATDD (Acceptance Test-Driven Development)**: Desenvolvimento guiado por testes de aceitação. Cliente, QA e desenvolvedores definem os critérios de aceitação antes de codificar.
    - **Testes Exploratórios**: O QA explora o sistema sem scripts rígidos, buscando falhas, inconsistências e problemas fora dos caminhos tradicionais.
    - **Testes Automatizados**: Automatização de testes funcionais, regressão, APIs, unitários e até UI para garantir rapidez e cobertura.
    - **Testes Manuais**: Utilizados quando a automação não é viável ou em casos específicos, especialmente para testes exploratórios e visuais.
    - **Testes Contínuos (CI/CD)**: Integração dos testes nos pipelines de integração e entrega contínua. Sempre que há alteração no código, os testes são executados automaticamente.

# Desenvolvimento Ágil
Em contramão aos ditos métodos tradicionais ou “pesados”, 17 profissionais que já praticavam “métodos leves” se reuniram em Utah em 2001 e chagaram ao conceito de métodos e praticas de desenvolvimento de software e criaram o manifesto ágil, com 12 princípios de uma nova perspectiva de melhores maneiras de desenvolver software. Os pontos mais valorizados são:
- Indivíduos e interações tem mais valor que processos e ferramentas;
- Software em funcionamento tem mais valor que documentos abrangentes;
- Colaboração com o cliente tem mais valor que negociação de contratos;
- Responder a mudanças tem mais valor que seguir um plano.

## Extreme Programming
É uma metodologia ágil focada em alta qualidade do código, entrega contínua e rápida e adaptação constante às mudanças.

- <ins>**Valores**</ins>:
    - Simplicidade
    - Comunicação
    - Respeito
    - Feedback
    - Coragem
- <ins>**Quando usar**</ins>:
    - Projetos que exigem alta qualidade técnica.
    - Equipes pequenas e bem colaborativas.
    - Projetos onde os requisitos podem mudar com frequência.
    - Ambientes onde é necessário entregar valor rapidamente.
- <ins>**Processos**</ins>:
    - ***Planejamento***
        - Criação de historias do usuário pelo cliente e prioriza-la
        - Estimam com base em semanas de desenvolvimento → máximo ideal de 3 semanas
    - ***Projeto***
        - Principio KISS( keep it simples, stupid!)
        - Estimulo de uso de cartões CRC (classe - responsabilidade - colaborador)
        - Solução pontual a partir de protótipos
    - ***Codificação***
        - Uso de TDD (Test Driven Development)
        - Reforação: aperfeiçoamento de código
        - Programação em pares, com intenção de agilizar
    - ***Teste***
        - Uso de TDD (Test Driven Development)
        - Integração continua
        - Inclusão de teste de aceite→ historia do usuário
- <ins>**Principais praticas**</ins>:
    - ***Programação em Par (Pair Programming)***: Dois devs trabalham juntos no mesmo código, no mesmo computador.
    - ***Desenvolvimento Orientado a Testes (TDD)***: Escrever os testes antes do código.
    - ***Integração Contínua***: Subir código no repositório várias vezes ao dia.
    - ***Refatoração Contínua***: Melhorar o código frequentemente sem mudar sua funcionalidade.
    - ***Propriedade Coletiva***: Qualquer dev pode alterar qualquer parte do código.
    - ***Simplicidade***: Sempre buscar a solução mais simples possível.
    - ***Pequenas Entregas***: Entregas rápidas e constantes de valor ao cliente.
    - ***Codificação Padronizada***: Seguir padrões de código para manter clareza e consistência.
    - ***Cliente Sempre Presente***: Cliente ou representante disponível para esclarecer dúvidas.
    - ***Sustentabilidade (40 horas semanais)***: Trabalhar em ritmo saudável, sem sobrecarga.

## Scrum
É uma metodologia ágil que organiza o trabalho em ciclos curtos (Sprints), com reuniões regulares, priorização das tarefas e entregas constantes de valor. Foi criado no início dos anos 1990 e desde então vem sendo revisado, é baseado no empirismo e lean thinking (observação) e tem eventos formais para inspeção e adaptação.

- **Pilares**
    - Transparência
    - Adaptação
    - Inspeção
- **Valores**
    - Coragem
    - Foco
    - Compromisso
    - Respeito
    - Abertura

<ins>**É organizado em:**<ins>
1. Papéis (Time Scrum)
    - ***Product Owner (PO)***: Define o que deve ser feito. Prioriza o backlog e representa o cliente.
    - ***Scrum Master***: Garante que o time siga o Scrum, remove impedimentos, ajuda o time a fluir.
    - ***Time de Desenvolvimento***: Pessoas que fazem o trabalho: desenvolvedores, QA, analistas, etc.
2. Eventos (Cerimônias)
    - ***Sprint***: Ciclo de trabalho, de 1 a 4 semanas.
    - ***Planning (Planejamento da Sprint)***: O time escolhe o que vai ser feito na Sprint.
    - ***Daily Scrum (Daily)***: Reunião diária de até 15 minutos para alinhar andamento, bloqueios e próximos passos.
    - ***Sprint Review***: Apresentação do que foi feito na Sprint para stakeholders e PO.
    - ***Sprint Retrospective***: O time avalia o que pode melhorar no processo.
3. Artefatos (Ferramentas do processo)
    - ***Product Backlog***: Lista de tudo que precisa ser feito no produto (histórias, épicos, melhorias, bugs...).
    - ***Sprint Backlog***: Itens escolhidos do Product Backlog para serem feitos na Sprint.
    - ***Incremento***: Produto funcionando, com melhorias entregues ao final da Sprint.     

**<ins>Fluxo na prática:</ins>**
1. ***Product Backlog****:Lista com tudo o que precisa ser desenvolvido.
2. ***Planning***: O time escolhe o que vai desenvolver na Sprint.
3. ***Sprint***: O time trabalha nas tarefas.
4. ***Daily***: Alinhamento diário para resolver bloqueios e manter foco.
5. ***Review***: Demonstração do que foi entregue.
6. ***Retrospective***: nReflexão sobre o processo e melhorias.
7. Volta pro passo 2 na próxima Sprint!

## Outros métodos ágeis

### DSDM - Dynamic Systems Development Method
Ele faz parte das metodologias ágeis e foi criado para resolver problemas de atrasos, custos altos e baixa qualidade que ocorriam nos métodos tradicionais. Ele combina desenvolvimento iterativo, participação intensa do cliente, foco na entrega no prazo e qualidade garantida, ajustando o escopo conforme a necessidade.

- **<ins>8 princípios fundamentais</ins>:**
    - Foco na Necessidade de Negócio
    - Entrega no Prazo
    - Colaboração Contínua
    - Qualidade Nunca é Negociável
    - Desenvolvimento Iterativo e Incremental
    - Desenvolvimento é Reversível (se necessário)
    - Comunicação Contínua e Clara
    - Demonstração Contínua de Controle
- **<ins>Fases</ins>**:
    - ***Pré-Projeto***: Avaliação inicial, definição do escopo e viabilidade.
    - ***Viabilidade (Feasibility Study)***: Confirma se o projeto é possível técnica e comercialmente.
    - ***Estudo de Negócio (Business Study)***: Define requisitos de alto nível e arquitetura inicial.
    - ***Modelo Funcional (Functional Model Iteration)***: Criação de protótipos e funcionalidades iniciais.
    - ***Projeto de Design e Construção (Design and Build Iteration)***: Desenvolvimento e evolução do produto com entregas constantes.
    - ***Implementação (Implementation)***: Entrega, implantação e transição para o ambiente real.
    - ***Pós-Projeto***: Suporte, manutenção e avaliação dos benefícios.
- **<ins>Papeis</ins>**:
    - ***Visionário (Business Sponsor)***: Garante financiamento e visão estratégica.
    - ***Embaixador (Business Ambassador)***: Representa os usuários no dia a dia do projeto.
    - ***Assessor (Business Advisor)***: Dá suporte com conhecimento específico.
    - ***Analista de Solução (Solution Developer)***: Desenvolve e implementa as soluções.
    - ***Implementador (Solution Tester)***: Testa a solução constantemente.
    - ***Gerente de Equipe (Team Leader)***: Coordena o trabalho do time.
    - ***Facilitador (DSDM Coach)***: Garante que o método DSDM está sendo aplicado corretamente.

### Processo Unificado Ágil
Processo Unificado Ágil é uma adaptação do Processo Unificado (PU), que incorpora práticas ágeis para torná-lo mais leve, flexível e adaptável. A ideia principal é reduzir burocracia e documentação excessiva, sem abrir mão da organização, da arquitetura robusta e da qualidade do PU.

- **<ins>Características</ins>**:
    - Iterativo e incremental;
    - Mais leve que o PU tradicional;
    - Entrega contínua de valor;
    - Feedback constante do cliente;
    - Priorização de itens mais valiosos e de maior risco;
    - Menos documentação pesada, foco em comunicação;
    - Testes constantes e melhoria contínua.
- **<ins>Fases<ins>**:
    - ***Concepção***: Definir visão do produto, objetivos e riscos iniciais.
    - ***Elaboração***: Projetar a arquitetura, planejar, validar riscos e preparar a base técnica.
    - ***Construção***: Desenvolver funcionalidades de forma incremental e iterativa, com entregas constantes.
    - ***Transição***: Entregar ao cliente, realizar ajustes, treinamento e deploy final.
    - ***Entrega***: Cada iteração gera um incremento funcional, testado e potencialmente entregável, assim como no Scrum.
- **<ins>Praticas<ins>**:
    - Daily Meetings (Reuniões diárias) para alinhamento;
    - Backlog priorizado (como no Scrum);
    - Sprints ou Iterações curtas (de 2 a 4 semanas);
    - Testes constantes (TDD, testes automatizados);
    - Refatoração e melhoria contínua;
    - Revisões e retrospectivas a cada iteração.

### Kanban
Kanban é um método de gestão de trabalho que ajuda a visualizar, organizar e melhorar o fluxo de tarefas, de forma contínua, sem necessidade de Sprints ou ciclos fechados. Ele funciona com um quadro visual que representa o fluxo do trabalho em colunas.

- **<ins>Colunas comuns<ins>**:
    - ***To Do (A Fazer)*** – O que precisa ser feito;
    - ***Doing (Fazendo)*** – O que está em andamento;
    - ***Done (Concluído)*** – O que já foi finalizado.
- **<ins>Pode ser personalizado com<ins>**:
    - Aguardando análise;
    - Em desenvolvimento;
    - Em testes;
    - Pronto para entrega.
- **<ins>Objetivos<ins>**:
    - Melhorar a produtividade e eficiência;
    - Tornar o trabalho visual e transparente;
    - Controlar e equilibrar o fluxo de trabalho;
    - Reduzir gargalos e desperdícios;
    - Entregar valor de forma contínua e incremental;
- **<ins>Práticas<ins>**:
    - ***Visualizar o fluxo de trabalho***: Usar quadros, cartões e colunas para tornar o trabalho visível.
    - ***Limitar o trabalho em progresso (WIP)***: Definir quantas tarefas podem estar em andamento ao mesmo tempo.
    - ***Gerenciar o fluxo***: Acompanhar como as tarefas se movem no quadro, identificar gargalos.
    - ***Tornar as regras explícitas***: Definir critérios claros para quando uma tarefa muda de coluna.
    - ***Implementar ciclos de feedback***: Reuniões rápidas para ajustes e melhorias no processo.
    - ***Melhorar continuamente***: Observar o que não está funcionando e ajustar.