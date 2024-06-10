// Estrutura de repetição for
// -----------------------------------------
// A estrutura de repetição for é uma estrutura de controle
// que permite repetir uma parte de um código enquanto uma
// condição é verdadeira.

// Exemplo 1 - Contar de 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // Exemplo 2 - Contar de 10 até 1
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  // Exemplo 3 - Contar de 1 em 2 até 10
  for (let i = 1; i <= 10; i += 2) {
    console.log(i);
  }
  
  // Exemplo 4 - Contar de 10 em 2 até 1
  for (let i = 10; i >= 1; i -= 2) {
    console.log(i);
  }
  
  // Exemplo 5 - Contar de 1 até 100
  // e mostrar apenas os números pares
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // O que o for faz
  // -----------------------------------------
  // A estrutura de repetição for é uma estrutura de controle
  // que permite repetir uma parte de um código enquanto uma
  // condição é verdadeira.
  
  // A estrutura de repetição for é composta por três partes
  // - Inicialização: É a parte inicial da estrutura de repetição
  //                  que é executada apenas uma vez antes do início
  //                  da repetição.
  // - Condição:     É a parte que é avaliada antes de cada
  //                  repetição. Se a condição for verdadeira,
  //                  a repetição é executada. Caso seja falsa,
  //                  a repetição é encerrada.
  // - Atualização: É a parte que é executada no final de cada
  //                  repetição.
  
  // Exemplos comentados
  // -----------------------------------------
  // A estrutura de repetição for é uma ferramenta poderosa
  // para repetir ações em um código. Use-a com cuidado e
  // sempre tenha certeza de que a condição será falsa
  // eventualmente para evitar um loop infinito.