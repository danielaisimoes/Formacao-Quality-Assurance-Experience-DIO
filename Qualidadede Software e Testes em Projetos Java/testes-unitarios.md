# Testes unitários

- São testes de unidade, onde se testa a menor unidade de código possível, como função, método, classes etc.
- Permite solucionar dois problemas bem recorrentes que prejudicam o bom desempenho de um software, a alta taxa de defeitos e a deterioração do sistema;
    - **Alta taxa de defeitos**: os testes unitários aumentam a validação de todas as funções do programa final, o que diminui a probabilidade de erros futuros.
    - **Deterioração do sistema**: eles permitem a simplificação dos códigos utilizados, fazendo com que elementos desnecessários fiquem de fora e não resultem no mau funcionamento de todo o sistema.
- É um conceito amplo, o JUnit é uma ferramenta para o Java, para outras linguagens existem outras ferramentas.
- São escritos durante o desenvolvimento, ou seja, faz parte do desenvolvedor aprender a desenvolver testes unitários.

```java
class Pessoa {
	//contrutor, atributos e outros métodos
	public boolean ehMaiorDeIdade() {
		return idade > 18;
	}
}

class PessoaTeste {
	@Test
	void validaVerificacaoDeMaioridade() {
		Pessoa joaozinho = new Pessoa("João", LocalDate.of(2024, 1, 1));
		Assertions.assertTrue(joaozinho.ehMaiorDeIdade());
	}
}
```

## Importância dos testes unitários

- **Compreender o código fonte**: pode ser feito de diversas formas, mas rodar os testes vai dar uma visão funcional do que o código deve fazer;
- **Corrigir bug com segurança**: é preciso ter cuidado para que uma correção não gere outro problema, é importante criar um caso de teste onde seja possível ver o bug para poder ajustar sem gerar novos bugs;
- **Refatorar bugs sem introduzir bugs**: é preciso ter certeza de que não vai ter problemas com aquela melhoria e faze-la da melhor forma possível sem causar prejuízos;
- **Entregar com segurança uma nova feature**: é interessante os teste unitários para validar que ela esta funcionando e entregar com segurança essa nova feature;
- **Métrica de qualidade**: é o teste mais barato e rápido de feedback, sendo o inicio de uma métrica de confiabilidade;
- **Cobertura de testes**: Quanto mais o código é coberto de  testes de validações, mais certeza temos que está tudo conforme especificado pelo cliente;
- **Automação na execução de testes** : aumenta a agilidade.