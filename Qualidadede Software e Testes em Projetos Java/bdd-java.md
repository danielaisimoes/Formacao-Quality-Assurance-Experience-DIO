# BDD

É um processo colaborativo com diferentes perspectivas para entender e refinar os requisitos do cliente através de conversas sobre exemplos de uso e comportamento do sistema.

- Faz parte das ferramentas do àgil;
- Integrar regra de negocio com linguagem de programação;
- Antecipar ao máximo os problemas;
- foco nas necessidades do cliente;
- Pode ser entendido como um passo alem do TDD;
- Reunião dos 3 amigos: O PO o Desenvolvedor e o QA fazem parte desde o inicio do processo, antes de gerar um documento estipulando as necessidades do cliente;
- Após essa reunião é gerado um documento de critérios de aceitação (requisitos do cliente/ canário) na linguagem Gherkin, e nesse momento o Desenvolvedor e o QA estarão bem alinhados sobre o que precisa ser feito.

## Estrutura básica de uma Feature (Gherkin):

**Funcionalidade**: Realizar compra no e-commerce</br>
    <ins>*Como*</ins> um comprador</br>
    <ins>*Quero*</ins> ver a lista de produtos disponíveis</br>
    <ins>*Para*</ins> que eu possa escolher qual devo comprar</br>

**Cenário**: Adicionar produto no carrinho</br>
    <ins>*Dado*</ins> que um usuário acesso o site xyz.com.br</br>
    <ins>*E*</ins> pesquisa pelo produto ”xxx” (pode conter mais de um E)</br>
    <ins>*Quando*</ins> adiciona o produto “xxx” ao carrinho</br>
    <ins>*Então*</ins> o produto “xxx” deve estar presente no carrinho</br>

**Cenário**: Aumentar a quantidade de produto através da pagina do produto</br>
    <ins>*Dado*</ins> que um usuário acessa o site "[http://automationpractice.com](http://automationpractice.com/)"</br>
    <ins>*E*</ins> pesquisa pelo produto "Dress"</br>
    <ins>*E*</ins> acessa o produto "Printed Chiffon Dress"</br>
    <ins>*E*</ins> aumenta a quantidade para 2</br>
    <ins>*Quando*</ins> adiciona o produto "Dress" ao carrinho</br>
    <ins>*Entao*</ins> o produto "Printed Chiffon Dress" deve possuir a quantidade 2</br>

## Ferramentas
- **Cucumber**: é uma biblioteca que facilita a escrita do Gherkin e ajuda a fazer a interface entre QA, Desenvolvedor e PO na escrita dos critérios de aceitação
- **Sellenium**: automatiza o teste de interface web
- **Meave**: Gerenciador de dependências

# Pratica
***pages*** = classes</br>
***steps*** = método</br>
***features*** = cenário</br>

**Cenário**: Aumentar a quantidade de produto através da pagina do produto</br>
    <ins>*Dado*</ins> que um usuário acessa o site "[http://automationpractice.com](http://automationpractice.com/)"</br>
    <ins>*E*</ins> pesquisa pelo produto "Dress"</br>
    <ins>*E*</ins> acessa o produto "Printed Chiffon Dress"</br>
    <ins>*E*</ins> aumenta a quantidade para 2</br>
    <ins>*Quando*</ins> adiciona o produto "Dress" ao carrinho</br>
    <ins>*Entao*</ins> o produto "Printed Chiffon Dress" deve possuir a quantidade 2</br>

**RUNNER → FEATURES → STEPS → PAGES**

- Em *Runner* , entre outras coisas, deve-se declarar qual a tag que diz quando executar um teste `tags = "@test"`;

```java
@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features", tags = "@test", glue = {""}, 
	monochrome = true, dryRun = false, plugin = { "json:target/cucumber.json", "rerun:target/rerun.txt" })
public class RunnerTest {

	@ClassRule
	public static Hooks hooks = new Hooks();
}
```

- Em *.feature*  é onde colocamos o cenário e devemos informar a tag antes do teste que queremos executar;

```java
@test
Cenario: Aumentar a quantidade de produto através da pagina do produto
	Dado que um usuário acessa o site "http://automationpractice.com"
	E pesquisa pelo produto "Dress"
	E acessa o produto "Printed Chiffon Dress"
	E aumenta a quantidade para 2
	Quando adiciona o produto "Dress" ao carrinho
	Entao o produto "Printed Chiffon Dress" deve possuir a quantidade 2

@test
Cenario: Adicionar produto no carrinho
	Dado que um usuario acessa o site "http://automationpractice.com"
  	E pesquisa pelo produto "Blouse"
  	Quando adiciona o produto "Blouse" ao carrinho
  	Entao o produto "Blouse" deve estar presente no carrinho
```

- Cada <ins>ação do usuário</ins> vai ser um <ins>método</ins> dentro da nossa classe, exemplo, o método pesquisar `homePage.pesquisarProduto(nomeProduto);`
- Em *steps* é gerado o método que da aquele passo, ou seja, o que ele vai fazer:

```java
@E("^pesquisa pelo produto \"(.*)\"$")
	public void pesquisarProduto(String nomeProduto) {
		HomePage homePage = new HomePage();
		homePage.pesquisarProduto(nomeProduto);
	}
```

- Para criar os métodos que foram definidos no cenário declarado em *features*, declaramos em *steps* e, para automatizar determinado step, o fazemos em *pages;*
- Para orientar o sistema a clicar em determinadas partes do site que vamos testar, utilizamos o Sellenium e com o F12 buscamos os parâmetros necessários;
- Para retornar o elemento da pagina utiliza `WebElement nomeProdutoTela = driver.findElement(By.xpath(".//*[@itemprop='name']/*[contains(text(), '" + nomeProduto + "')] | .//*[@itemprop='name'][text()='" + nomeProduto + "']"));` :
- É uma boa pratica colocar LOG para entender o que esta acontecendo