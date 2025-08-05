## ORM (Object Relational Mapper)

É uma técnica de mapeamento de objeto relacional que permite fazer uma relação do objeto com os dados que os mesmo representam

Permite o trabalho com banco de dados sem ter que passar as querys a cada vez que for acessar o banco de dados através da aplicação

## TypeORM

> [typeorm.io](http://typeorm.io)
> 

É uma ferramenta muito popular com documentação simples e implementação fácil, além de compatível com muitos bancos de dados ( MySQL, Mongo DB, Postgree, SQLite etc)

Alternativas de ORM:

- Sequelize
- Prisma
- Telerik

API Rest

ELa parte do principio que pode fazer todas as operações no bd através das rotas construídas nela. 

CRUD:

- Criar usuário (Create)
- Selecionar usuário (Read)
- Editar usuário (Update)
- Deletar usuário (Delete)

É importante que os domínios (endpoint) sejam referentes ao recurso utilizado

Verbos HTTP:

- GET - leitura
- PUT/PATCH - inserir/corrigir
- UPDATE - atualizar
- DELETE - deletar

Método MVC separa a aplicação em camadas para tornar a manutenção mais simples

- controller
- service

## TDD

Segue o ciclo : RED → GREEN → REFACTOR

- Escreve um teste que vai falhar
- Faça o código funcionar
- Elimine redundância