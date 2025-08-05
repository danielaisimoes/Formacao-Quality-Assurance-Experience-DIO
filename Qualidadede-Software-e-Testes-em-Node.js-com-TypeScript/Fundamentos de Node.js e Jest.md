## Entendendo o Node
É um software de código aberto que permite a execução do JS fora da web
## JS
É uma linguagem inicialmente de front-end que com o tempo passou a trabalhar com back-end e para isso utiliza o Node para ser executado fora da web;<br>
**Funcionamento**: Quando o navegador lê o código JS ele transpila e compila para um código C++ que a maquina pode entender;
## Single-Thread x Multi-Thread
**Single-Thread**: As ações são executadas individualmente uma a uma mesmo que sejam concorrentes<br>
**Multi-Thread**: Executa paralelamente, independente se são ou não concorrentes
## Criando nosso servidor
***package.json*** é o arquivo que contem todos os scripts relacionados ao projeto e dependências que serão usadas
<br>***Nodemon*** é uma dependência, que vai ajudar a manter o projeto funcionando e acelerar o desenvolvimento<br>
***Express*** vai permitir construir rotas e caminhos do servidor
- Alguns projetos podem ter muitas dependências e, por serem pastas pesadas, elas não acompanham o arquivo do sistema, então quando for iniciar novas implementações naquele sistema, precisa consultar o package.json;
- Além de constar todas as dependências, também facilita na instalação, pois não é necessário instalar uma a uma, basta dar o comando `yarn install`.
## 4 principais métodos HTTP:
- **GET** ler os dados
- **POST** criar/cadastrar os dados
- **PUT/PATCH** editar os dados
- **DELETE** - apagar os dados
## Status Code
Toda vez que o navegador ou algum sistema faz uma requisição (acessar uma página, enviar um formulário, pedir dados de uma API etc), o servidor responde com um status code que é um número que indica se deu tudo certo ou deu ruim. Exemplos:
- 200 e 201 quando tem sucesso/criar dado
- 404 pagina não encontrada
***Thunder Client*** é uma extensão que permite criar requisições
## Implementando o Typescript
É uma linguagem  e um superset do JS que permite trabalhar com tipagens no desenvolvimento das aplicações.
- Roda somente para desenvolvimento
### Jest
É um framework de testes para JavaScript e TypeScript usado para escrever e rodar testes automatizados em projetos de front-end e back-end
Com Jest é possível fazer:
- **Testes unitários**
- **Testes de integração**
- **Testes de snapshot** (que garante que a interface visual não mudou sem querer)
### Padrão AAA:
É um **modelo para escrever testes automatizados** de forma clara, organizada e fácil de entender.
- Arrange - Montagem do cenário de testes
- Act - Ação que será testada
- Assert - Validação dos resultados esperados
```tsx
test('deve validar login com sucesso', () => {
  // Arrange
  const usuario = { email: 'teste@email.com', senha: '123456' };

  // Act
  const resultado = fazerLogin(usuario);

  // Assert
  expect(resultado.sucesso).toBe(true);
```
### Mocks:
- São objetos que substituem implementações reais em um cenário de testes unitários;
- Permite validar apenas os comportamentos afetados pelo novo componente.