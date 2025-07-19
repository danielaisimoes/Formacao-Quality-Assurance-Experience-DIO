# Definição de testes

> “*Testes de software é o processo de execução de um produto para
determinar se ele atingiu suas especificações e funcionou
corretamente no ambiente para o qual foi projetado*” - Dias Neto
> 

Através dos testes nós podemos encontrar bugs, mas nunca podemos constatar a ausência dos mesmos, pois depende do cenário de teste que esta sendo aplicado. 

---

# Evolução de testes na Engenharia de software

## Modelo cascata

Criado em 1970, este é o modelo mais antigo de todos os processos e seu nome deriva do seu formato sequencial cascateado entre as fases. 

- É indicado para projetos pequenos
- *Para uma fase iniciar a outra deve estar totalmente finalizada* - Engholm, 2010
- *O resultado de cada etapa é a aprovação de um ou mais documentos “assinados”* - Sommerville, 2011
- O desenvolvimento é dividido em 7 partes:
    - Especificação: captação das necessidades do cliente e definidos os requisitos do sistema;
    - Projeto de software: desenho da arquitetura geral do sistema, seguindo as informações coletadas na etapa anterior. Separa-se em partes chamadas unidades de programa que terá seu proprio requisito de unidade;
    - Implementação: cada unidade de programa é implementada, podendo alocar vários programadores simultaneamente.
    - Teste unitário: são feitos os testes de unidade para certificar que as implementações atendem aos requisitos de unidade;
    - Integração: integrar todas as tarefas para compor um sistema completo.
    - Teste de sistema: um teste geral para certificar que os requisitos do sistema foram completamente atendidos.
    - Operação e manutenção: correção dos erros ou melhorias do sistema após a entrega
- **Vantagens**
    - Por ser separado em unidades de programa, permite que varios programadores trabalhem simultaneamente, agilizando a entrega;
    - Se as especificações estiverem corretas, um software pode ser desenvolvido de forma muito rápida.
- **Desvantagens**
    - Não foi elaborado para lidar com mudanças
    - É difícil estabelecer explicitamente todos os requisitos logo o início do projeto;
    - O cliente deve ter muita paciência, pois uma versão executável do software só fica disponível numa etapa avançada do desenvolvimento;
    - A produção e aprovação de documentos durante as etapas costumam se caras e geradoras de muito retrabalho;
    - É muito difícil retornar para as fases anteriores para corrigir problemas detectados posteriormente;
    - Esconde os riscos por muito tempo, retardando sua resolução;
    - *A natureza linear do modelo leva a “estados de bloqueio”, nos quais alguns membros da equipe de projeto precisam esperar que outros membros completem as tarefas dependentes* - Pressman, 2006


# Conceitos

- **Falha**:
    - ocorrem em decorrência aos erros;
    - comportamentos da aplicação diferentes do comportamento esperado;
    - todo erro que é visível para o usuário;
    - Uma falha pode ter sido causada por diversos erros, mas alguns erros podem nunca causar uma falha.
- **Erro**:
    - Ocorrem durante a execução de um programa caracterizado por um estado inconsistente ou inesperado;
    - Erro humano produzindo resultado incorreto
    - evidência de um defeito.
    - São a causa das falhas, mas não necessariamente, pois o estado inconsistente pode nunca ser utilizado;
- **Defeito(bug)**:
    - São passos, processos ou definições de dados incorretas;
    - algo que foi implementado de maneira incorreta;
    - uma instrução errada ou um comando incorreto
    - Incidente ou anomalia é o mesmo que defeito
    - é a causa de um erro, mas não necessariamente, pois a linha que contém um defeito pode nunca ser executada.

Ou seja, se por engano você faz um `if` errado, causa um defeito, que quando for ativado vai produzir um erro. Se esse erro for propagado até a saída do software constituirá uma falha.

- **Verificação (sistema)**: dado a especificação, a construção do sistema esta correta?; esta atendendo os requisitos definidos?
- **Validação (software)**: atender as expectativas do usuário; O que o cliente pediu esta sendo atendido?;

# Níveis de teste

As diversas fases, momentos e preocupações que devemos ter com o desenvolvimento de software precisa de métodos diferentes para ser testado.

**Unidade → Integração → Sistema → Regressão → Aceitação**

- **Unidade**:
    - Testes direcionados a pequenas unidades de software
    - Valida cada parte especifica do software através de entradas e resultados
    
    > Cada linguagem tem um framework próprio para teste de unidade
    > 
- **Integração**:
    - Valida uma estrutura maior de software;
    - Podem ser feitos simulando APIs, conectando com banco de dados etc
    - Teste mais alto nível para tentar entender entrada e saída
- **Sistema**:
    - Após uma implantação de uma versão minimamente estável do sistema, validando a partir dos resultados de uso;
    - alfa, beta e cannary:
        - **alpha**:
            - Validações com a partir do usuário final escolhido estrategicamente;
        - **beta**:
            - Teste mais maduro, validando já com o cliente com um resultado proximo do esperado
        - **cannary**:
            - é uma estratégia de deploy
            - seguimenta um publico especifico para ter acesso a versão mais recente ainda em teste
- **Regressão**:
    - Reavaliar o que esta sendo desenvolvido
    - Validação para ver se o que é novo não esta quebrando o que já existe;
    - Testa se uma correção não quebrou o que estava funcionando
- **Aceitação**:
    - O cliente faz uma avaliação após implantação;
    - Cliente confere se é o que esperava;
    - O BDD traz uma nova forma de fazer esse teste*.

# Técnicas de teste

Cada nível possui técnicas diferentes, as técnicas são formas de realizar o teste

- **Caixa branca**: é um teste onde você conhece a estrutura.
    - Teste estrutural
    - Valida dados, controles, fluxos, chamadas
    - garante a qualidade da implementação
    - Níveis:
        - Unidade
        - Integração
        - Regressão
- **Caixa preta**: é um teste onde não se sabe a estrutura.
    - Teste funcional
    - Verifica saídas utilizando vários tipos de entrada
    - Níveis:
        - Integração
        - Sistema
        - Aceitação
- **Caixa cinza**: mescla da branca e da preta
    - Tem conhecimento da estrutura
    - Analisa parte lógica e funcionalidade
    - Engenharia reversa

# O que são testes não funcionais

- Requisitos não funcionais são aqueles que **não interferem diretamente no desenvolvimento do sistema,** na verdade se trata de como o sistema se comportará em determinadas situações.
- Podem impactar no objetivo final do software se não forem contempladas em tempo de análise e desenvolvimento do projeto.
- Tem como objetivo testar aspectos do software que **não são associados as regras de negócio** mas sim a requisitos não funcionais como:
    - Comportamento do Sistema
    - Performance
    - Escalabilidade
    - Segurança
    - Infraestrutura
- São feitos com ferramentas que usam técnicas para apurar o comportamento do sistema em determinadas circunstâncias.
    - **Teste de carga**: é realizado para verificar qual o volume de transações, acessos simultâneos ou usuários que um sistema suporta.
        
        > Gatlin; Apache JMeter
        > 
    - **Teste de stress**: submeter o software a situações extremas, entender os limites do software e avaliar seu comportamento.
        
        > Apache JMeter
        > 
    - **Teste de segurança**: visa detectar vulnerabilidades em sistemas, software, redes e aplicativo.
        
        > ZAP