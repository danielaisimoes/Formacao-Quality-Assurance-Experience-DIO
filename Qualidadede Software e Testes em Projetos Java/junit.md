# JUnit

- É um framework open source para criação de testes unitários
- Um dos criadores, Kent Beck tem envolvimento com o TDD e outras metodologias ágeis para desenvolvimento de software
- Tem tres modulos:
    - JUnit Plataform: componente que executa os testes
    - JUnit Jupiter: guarda todo o conteúdo (classes, interfaces etc)
    - JUnit Vintage: (utiliza para fazer integração com versões anteriores do JUnit

# O básico para testar

- Na arvore main se declara a classe
- Na arvore test declara o teste
- A estrutura é:
    - a notação `@Test` indica que o método é de teste;
    - todos os testes do JUnit retornam `void`, significa que não tem retorno;
    - O nome deve indicar o que vai ser feito/o que se espera no teste de forma clara para todos entenderem

```java
public class PessoaTeste {

@Test
void validarCalculoDeIdade() {
		Pessoa pessoa = new Pessoa(nome: "julia", LocalDater.of(year:2020, month:1, dayOfMonth:1)); // Cria um cenario
		Assertions.assertEquals(expected:2, pessoa.getIdade()); // Executa as validações
		}
}
```

- o comando `Assertions.assertEquals(dadoEsperado, dadoChamado())` avalia a igualdade, fazendo a validação se o resultado esperado esta de acordo com o resultado obtido

```java
@Test
void deveRetornarSeEhMaiorDeIdade() {
		Pessoa julia= new Pessoa(nome: "julia", LocalDater.of(year:2020, month:1, dayOfMonth:1));
		Assertions.assertTrue(jessica.ehMaiorDeIdade());
}		
```

- Quando o metodo retorna um boolean deve-se usar `Assertions.assertTrue(metodoQueVaiTestar);` ou `Assertions.assertFalse(metodoQueVaiTestar);`

# Algumas asserções (classe assertions)

- Comparar arrays utiliza `Assertions.assertArrayEquals(resultadoEsperado, resultadoObtido)`
- Os dois arrays que serão comparados devem ter o mesmo tamanho;

```java
@Teste
void validarLancamentos() {
		int[] primeiroLancamento = {10, 20, 30, 40, 50};
		int[] segundoLancamento = {-1, 5, 66, 3, 45};

		Assertions.assertArrayEquals(primeiroLancamento, segundoLancamento);
}
```

- No exemplo, o  segundoLancamento será comparado com o primeiroLancamento, índice a índice  (10 == -1?; 20 == 5?; etc)
- Pode ser utilizado também o `Assertions.assertnotEquals(primeiroLancamento, segundoLancamento)` que vai avaliar se eles não são iguais.
- Para verificar se uma referencia esta nula podemos usar o `Assertions.assertNull(parametro)`
- Ou, para verificar se a referencia não é nula `Assertions.assertNotNull(parametro)`
```java
@Teste
void validarSeObjetoEstaNulo() {
		Pessoa pessoa = null;
		
		Assertions.assertNull(pessoa);
}		
```

# After e Before

- Supondo que será consultado alguma informação no banco de dados, por exemplo, e para isso precisamos começar uma conexão e depois finalizar;
- Para isso, declaramos `@BeforeAll`  antes do teste e depois do teste `@AfterAll`;
- Será executado um vez no inicio e no final da classe de testes.

```java
public class ConsultarDadosDePessoaTest {

		@BeforeAll
		static void configuraConexao() {
				BrancoDeDados.iniciarConexao();
		}
		
		@Test
		void validarDadosDeRetorno() {
				Assertions.assertTrue(condition: true);
		}
		
		@AfterAll
		static void finalizarConexao() {
				BrancoDeDados.finalizarConexao();
		}
}
```

- Podemos fazer outro processo que insere dados e depois remove esses dados, nesse caso utiliza o `@BeforeEach` e `@AfterEach`
- Será realizado a cada teste que existir na classe

```java
public class ConsultarDadosDePessoaTest {

		@BeforeEach
		void insereDadosParaTeste(Pessoa pessoa) {
				BrancoDeDados.insereDados(new Pessoa(nome: "João", LocalDataTime.of(year: 2000, month: 1, dayOfMonth:1)));
		}
		
		@AfterEach
		void removeDadosParaTeste(Pessoa pessoa) {
				BrancoDeDados.removeDados(new Pessoa(nome: "João", LocalDataTime.of(year: 2000, month: 1, dayOfMonth:1)));
		}
		
		@Test
		void validarDadosDeRetorno() {
				Assertions.assertTrue(condition: true);
		}
}
```

# Assumptions e Testes condicionais

- Tem haver com hipóteses, ou seja, para validar determinada situação de teste será validada uma condição, presumindo que aquilo só será executado em determinada circunstancia e para isso utilizamos `Assumptions.assumeTrue(condição)`

```java
public class AssumptionsTest {

		@Test
		void validarAlgoSomenteNoUsuarioDaniela() {
				Assumptions.assumeTrue("daniela".equals(System.getenv(name: "USER")));
				Assertions.assertEquals(expected:10, actual: 5+5);
		}
```

- No exemplo, foi declarado que o teste só poderia ser feito no usuário daniela, então se estiver em outro usuário o teste não vai funcionar.
- Outro formato seria o de condições, nesse caso seria assim:

```java
public class CondicionaisTeste {

		@Test
		@EnableIfEnvironmentVariable(named= "USER", matches = "daniela") {
		void validarAlgoSomenteNoUsuarioDaniela() {
				Assertions.assertEquals(expected:10, actual: 5+5);
		}
```

- Pode ser usar, por exemplo, para desabilitar um teste em determinada condição, nesse caso, utiliza-se o `@DisabledIfEnvironmentVariable(named= "USER", matches = "root")`
- Tem também como definir o sistema operacional que deseja que o teste rode, então vai utilizar o `@EnabledOnOs(OS.LINUX)` e esse teste só será executado em Linux
- Pode ser colocado um array nessa condição utilizando { } `@EnabledOnOs({OS.LINUX, OS.MAC})`
- Também é possível definir em qual JRE que o teste deve rodar com o `@EnabledOnJre(JAVA_17)` ou `@EnabledForJreRange(min = JAVA_11, max = JAVA_17)` para definir um intervalo de versões que deseja executar o teste.

# Testando exceptions

- É possível testar quando um cenário de exceção acontece utilizando o `Assertions.assertThrows()` :

```java
public class ExceptionsTest {

		@Test
		void validarCenarioDeExcecaoNaTransferencia() {
				Conta contaOrigem = new Conta(numeroConta:"123455", saldo: 0);
				Conta contaDestiono = new Conta(numeroConta:"548223", saldo: 100);
				
				TransferenciaEntreContas transferenciaEntreContas = new TransferenciaEntreContas ();
				
				Assertions.assertThrows(IllegalArgumentException.class, () ->
						transferenciaEntreContas.transfere(contaOrigem, contaDestino, valor:-1));
		}
}
```

- Outro formato seria com `Assertions.assertDoesNotThrow ()` :

```java
public class ExceptionsTest {

		@Test
		void validarCenarioDeExcecaoNaTransferencia() {
				Conta contaOrigem = new Conta(numeroConta:"123455", saldo: 0);
				Conta contaDestiono = new Conta(numeroConta:"548223", saldo: 100);
				
				TransferenciaEntreContas transferenciaEntreContas = new TransferenciaEntreContas ();
				
				Assertions.assertDoesNotThrows(() -> transferenciaEntreContas.transfere(contaOrigem, contaDestino, valor:-1));
		}
}
```

# Ordenando testes

- É possivel definir a ordem que os testes serão realizados utilizando `@TestMethodOrder(MethodOrderer.OrderAnnotation.class)` :

```java
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class EscolhendoAOrdemDoTeste {

	@Order(3)
	@Test
	void validaFluxoA() {
				Assertions.assertTrue(condition: true);
				
	@Order(1)
	@Test
	void validaFluxoB() {
				Assertions.assertTrue(condition: true);
	
	@Order(2)
	@Test
	void validaFluxoC() {
				Assertions.assertTrue(condition: true);
	
	// será realizado na ordem numerica definida:
	//1o fluxoB 
	//2o fluxoC 
	//3o flucoA
```

- Para ordem alfabética, utiliza `@TestMethodOrder(MethodOrderer.MethodName.class)`
- E para fazer de forma aleatória `@TestMethodOrder(MethodOrderer.random.class)` , aqui ele vai executar cada vez em uma ordem diferente
- Ainda na ordem alfabetica mas alterando o nome do teste utiliza `@TestMethodOrder(MethodOrderer.DisplayName.class)` :

```java
@TestMethodOrder(MethodOrderer.DisplayName.class)
public class EscolhendoAOrdemDoTeste {

	@DisplayName("Teste que valida se o usuario foi criado")
	@Test
	void validaFluxoA() {
				Assertions.assertTrue(condition: true);
				
	@DisplayName("B")
	@Test
	void validaFluxoB() {
				Assertions.assertTrue(condition: true);
	
	@DisplayName("D")
	@Test
	void validaFluxoC() {
				Assertions.assertTrue(condition: true);
	//Vai ser feito em ordem alfabetica e o nome do teste será substituido:
	//B
	//D
	//Teste que valida se o usuario foi criado
```

# Boas práticas

- Importante se preocupar com o nome do teste e legibilidade do teste;
- Procure escrever o código de teste o mais próximo possível do código de execução;
- Ter conhecimento sobre TDD é bem importante;
- Padronização das nomenclaturas entre o time;
- Testes precisam ser determinísticos;
- Economizar tempo automatizando a execução dos testes;
- Utilize ferramenta de cobertura de código;