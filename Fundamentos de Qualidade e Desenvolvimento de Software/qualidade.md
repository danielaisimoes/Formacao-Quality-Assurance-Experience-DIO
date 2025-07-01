# Processo de gerenciamento de qualidade

É o conjunto de todos os processos que garantem que os produtos, serviços e o ciclos de vida vão de encontro com os objetivos da qualidade para alcançar a satisfação do usuário.As atividades fundamentais do gerenciamento são:
- **Planejamento** para determinar padrões e processos que serão utilizados, além de metas especificas da qualidade e organização das atividades;
- **Garantia** para definir e avaliar a adequação dos processos e fornecer evidencias de confiança no produto produzido;
- **Controle** para determinar se os padrões estão sendo seguidos e avaliar os produtos intermediários e finais;
- **Melhoria** que se preocupa com melhorar a eficiência e efetividade.

# Controle de qualidade (QC - Quality Control)

Enquanto a Garantia da Qualidade (QA) é proativa e se preocupa em melhorar o processo para prevenir defeitos, o QC é focado na detecção: ele inspeciona o resultado do processo para encontrar falhas. Em resumo, QC é sobre encontrar os problemas.

Falando de controle de qualidade, temos os testes que, nada mais são do que as verificações de que geram evidencias e relatórios para comprovar o processo de garantia. Ele acontece por meio da analise estática, onde é verificado se a documentação esta em conformidade com as necessidades definidas, em conjunto com análise dinâmica que relaciona as técnicas com o código em execução (os famosos testes automatizados e manuais).

- **Testes Funcionais**: Verifica se cada função do software se comporta conforme o especificado nos requisitos.
- **Testes Não-Funcionais**: Avalia características como desempenho, usabilidade, segurança.
- **Testes de Regressão**: Garante que as novas funcionalidades ou correções de bugs não quebraram algo que já funcionava.

O QC não se aplica apenas ao código executável, mas a todos os produtos gerados durante o desenvolvimento. O code review, por exemplo, onde outros desenvolvedores ou especialistas leem o código-fonte, pode encontrar erros lógicos, inconsistências ou violações dos padrões de codificação da equipe. Ou a inspeção de documentos de requisitos, especificações de design e manuais do usuário para garantir que sejam claros, completos e consistentes.

## A importância do rastreamento de defeitos
- Entendimento do produto e dos tipos de defeitos encontrados;
- Entender melhor as necessidades de qualidade do produto;
- Facilitar a correção do processo ou do produto;
- Podem rastrear problemas em geral, no código, documentação etc;
- Reportar status do produto;
- Alinhamento de revisões pelo time de desenvolvimento.

E não basta encontrar os erros, é preciso gerenciá-los!</br>

Para isso, é necessário reportar, documentando o defeito encontrado com clareza, o resultado esperado e o resultado obtido. Saber priorizar, ajudando a equipe a entender o quão grave é o impacto e o quão urgente é a correção. Isso tudo sem deixar de lado a verificação das correções após um defeito ser corrigido, pois precisamos testar novamente para confirmar que a correção funciona e não gerou novos problemas.

Ou seja, o ***Controle de Qualidade*** são as mãos na massa, as atividades de inspeção e teste que garantem que um produto específico está bom. E a ***Garantia da Qualidade*** é a estratégia e a mentalidade que garantem que a organização inteira está construindo qualidade desde o início. Ambos são essenciais para entregar um software confiável.

# Ciclo de vida do bug

Esse é o processo formal que um defeito de software percorre desde o momento em que é descoberto até ser completamente resolvido e fechado. Pode-se fazer uma analogia a uma ficha de anamnese, pois é necessário entender onde ele nasceu, onde foi encontrado, validado, fechado e cada etapa no processo de desenvolvimento e correção. Os Principais objetivos dos reports de defeitos são:
- Prover às partes interessadas informações a respeito do evento anômalo para isolar e corrigir o problema ou o potencial problema;
- Prover meios para rastrear a qualidade do produto e o impacto deles nas atividades de testes e retestes;
- Prover ideias para melhoria no processo de desenvolvimento e testes.

# Testes de software

Teste é o processo de avaliar e reduzir riscos de falhas do software em operação e ter controle da qualidade. Esse processso não diz respeito somente ao ato de executar um teste em si, pois o objetivo não é apenas provar que o software funciona, mas descobrir sob quais condições ele falha, quais são seus limites e o quão confiável ele realmente é. Realizamos os testes para:
- Evitar defeitos e avaliar produtos;
- Verificar cumprimento de requisitos;
- Validar se produto funciona como o cliente espera;
- Criar confiança no nível de qualidade;
- Redução de riscos;
- Atuar junto ao cliente para tomada de decisões.

><ins> **É importante saber que:** </ins>
>- O teste mostra presença de defeitos e não a ausência;
>- Testes iniciais economizam tempo e dinheiro;
>- O mesmo teste não encontra novos defeitos → atenção com testes de regressão;
>- O teste depende do contexto;
>- Ausência de erros é ilusão.

## Abordagens de teste
- **Teste Manual**:
Um ser humano executa os testes, interagindo com o software como um usuário final faria.
- **Teste Automatizado**:
Scripts e ferramentas executam casos de teste pré-definidos.

## Atividades de teste
São todas as etapas, tarefas e ações realizadas durante o processo de teste de software, elas que garantem que o software seja verificado, validado e esteja de acordo com os requisitos de qualidade.

- **Planejamento**: Onde são definidos os propósitos e abordagens de acordo com as restrições do contexto e especificadas as tarefas e estimativas de prazos;
- **Monitoramento e controle do teste**: É feita a comparação continua do progresso real com o plano de teste a partir de critérios de avaliação de saídas (*estar de acordo com o que foi esperado*);
- **Análise**: É quando uma base de teste é analisada para saber “o que testar” de acordo com os critérios estabelecidos, avaliar os tipos de defeitos que podem ser encontrados e definir e priorizar condições de teste;
- **Modelagem**: Momento em que as condições de teste são elaboradas, é feita a verificação da infra necessária e projetado um ambiente de teste;    
- **Implementação**: Momento em que é desenvolvido e priorizado procedimentos de teste e script automatizados, organização lógica e eficiente da execução dos testes e preparo dos dados de teste;    
- **Execução**: É quando o conjunto de testes planejados são executados, sejam manuais ou automatizados, dessa forma podendo fazer comparação de resultados reais com os esperados, analisar, registrar e reportar anomalias para identificar a causa e quando necessário o reteste;    
- **Conclusão**: Cria-se um relatório de resumo de teste, finaliza e arquiva dados e registros dos testes e executa a melhora na maturidade do processo de teste.

### Níveis de teste
Dividimos a atividade em **Níveis** (*que definem quando e o escopo do teste*) e **Tipos** (*que definem o que estamos avaliando*).</br>

Os níveis representam as camadas do desenvolvimento de software onde os testes são aplicados. Todos tem o principio de reduzir riscos, mas cada nível tem um objetivo específico para garantir que, tanto as partes menores, quanto o sistema completo funcionem corretamente, além de dar suporte para entender onde os problemas podem surgir e como mitigá-los. 

- **Teste de componente/unidade - *Cada parte funciona isolada?***</br>
Focado em testar componentes do código de forma independente, uma função, método ou componente isolado.
    - Verificar requisitos funcionais e não funcionais
    - Construir confiança do componente
    - Encontrar defeitos
    - Evitar que os defeitos sejam refletidos em níveis mais altos de teste
    >**Ferramentas:** JUnit, NUnit, PyTest, Jest.
- **Teste de integração - *As partes se comunicam bem?***</br>
Focado na integração entre componentes ou comunicação de sistemas (back e front, por exemplo). Importante para:
    - Verificar interfaces
    - Encontrar defeitos nas partes envolvidas que podem refletir em níveis mais altos de testes
    >**Ferramentas:** Postman, SoapUI, JUnit (para integração), Cypress (para APIs).
- **Teste de sistema (End-to-End) - *Funciona de ponta a ponta?*** </br>
Focado nos requisitos de ponta a ponta do sistema, testa o sistema como um todo, do início ao fim, simulando o uso real. Importante para:
    - Validar o sistema como um todo
    - Encontrar defeitos não vistos em níveis mais baixos
    - Evitar que defeitos se reflitam em produção após aceite do cliente
    >**Ferramentas:** Selenium, Cypress, Playwright, Appium.
- **Teste de aceite (UAT – User Acceptance Test) - *O sistema atende ao negócio?***</br>
Focado na validação e conformidade com regras de negocio e necessidade do cliente. Importante para:
    - Validar o sistema como um todo
    - Encontrar defeitos não vistos em níveis mais baixos
    - Evitar que defeitos se reflitam em produção após aceite do cliente

### Tipos de teste
Enquanto os **níveis** de teste são *onde testamos* (unidade, integração, sistema, aceitação), os **tipos** de teste são *o que queremos verificar*: funcionalidade, segurança, desempenho, usabilidade, etc. </br>
Para cada nível, podemos aplicar diferentes tipos de teste para avaliar diferentes características. Com eles podemos avaliar:
- Caraterísticas funcionais e não funcionais;
- Estrutura ou arquitetura de componentes ou sistema;
- Efeitos de alterações em outras partes do código.
    - **Teste funcional**: Verifica o comportamento esperado, ou seja, se o sistema faz o que deveria fazer:
        - Desenvolvidos a partir de especificações de requisitos, historia do usuário, casos de uso;
        - Pode ser utilizado em todos os níveis de teste;
        - Técnicas caixa-preta são bem uteis para avaliação de comportamentos funcionais do sistema;
    - **Teste não funcional**:
    Avalia qualidade além da função, como desempenho, segurança, usabilidade etc.
        - Pode ser feito em todos os níveis.
        - Teste de Desempenho: Avalia a velocidade, responsividade e estabilidade sob carga.
        - Teste de Usabilidade: Mede o quão fácil, intuitivo e agradável é usar o software.
        - Teste de Segurança: Busca por falhas e vulnerabilidades que possam ser exploradas.
    - **Teste de regressão**:
    Verifica se uma nova alteração não quebrou funcionalidades que já funcionavam.
        - Muito comum após correções de bugs ou novas features.
    - **Teste de Fumaça (Smoke Test)**: Um conjunto rápido de testes executado após uma nova versão ser instalada para garantir que as funcionalidades mais críticas não estão quebradas.
    - **Teste exploratório**: Realizado de forma mais livre, sem seguir um roteiro fixo, buscando descobrir problemas que não foram mapeados.
    - **Teste de manutenção**: Testa o sistema após atualizações, correções ou melhorias no código.
    - **Teste caixa-branca**: Verifica se o fluxo interno do código funciona corretamente, analisando condições, loops, funções e decisões.
        - Focado no código-fonte;
        - Verifica fluxos, condições, loops e caminhos lógicos;
        - Cobertura de código com testes de unidade ou integração.

## Técnicas de teste
São estratégias, métodos ou abordagens que usamos para criar casos de teste, definir entradas, saídas e verificar se o sistema está funcionando corretamente. Ajudam a garantir que estamos testando de forma eficiente, cobrindo os principais cenários e reduzindo riscos.

> **Caixa Preta**: Entradas, saídas, comportamento;</br>
> **Caixa Branca**: Código, fluxos, lógica interna;</br>
> **Baseada na Experiência**: Conhecimento prático, criatividade

- **Caixa-Preta** (*funcionais*):
    - Foca no comportamento do sistema, entradas e saídas do teste, sem olhar o código;
    - Fundamentado a partir de documentos de requisitos, caso de uso, historias do usuário, etc;
    - Técnicas relacionadas:
        - ***Particionamento de Equivalência***:
            Divide os dados em grupos válidos e inválidos.   
        - ***Análise de Valor Limite***: 
            Testa os limites, onde costumam ocorrer erros.   
        - ***Tabela de Decisão***:
            Verifica combinações de condições e decisões. 
        - ***Teste de Transição de Estado***:
            Testa mudanças de estado do sistema.   
        - ***Teste de Caso de Uso***: 
        Segue os fluxos descritos nos casos de uso, como um usuário faria.
        </br>
- **Caixa-branca** (*estruturais*):
    - Foca na lógica interna do código, fluxos e condições;
    - Podem ser usadas em todos os níveis de teste;
    - Normalmente é utilizada em teste a nível de componente no código-fonte;
    - Técnicas relacionadas:
        - ***Cobertura de Caminho***: 
            Testa todos os caminhos possíveis no código.
        - ***Cobertura de Decisão***:
            Garante que todas as decisões (if/else) foram executadas.
        - ***Cobertura de Condição***:
            Testa todas as condições booleanas (true/false).
- **Baseado na experiência**:
    - Usa o conhecimento, percepção e intuição do testador;
    - Cobertura de difícil avaliação e metrificação;
    - Pode identificar situações não encontradas nos métodos mais sistemáticos.
    Técnicas relacionadas
        - ***Teste Exploratório***:
            O testador navega livremente buscando falhas.   
        - ***Suposição de erro***:
            Buscar diretamente erros, como injeção de dados inválidos. 
        - ***Checklist***:
            Lista pré-definida do que deve ser verificado.