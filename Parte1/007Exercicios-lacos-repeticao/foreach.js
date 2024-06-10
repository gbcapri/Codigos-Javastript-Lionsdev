// Exemplo 1 - Iterar sobre um array com forEach
let frutas = ["Maçã", "Pêra", "Uva"];

frutas.forEach(function (fruta) {
  console.log(fruta);
});

// Exemplo 2 - Iterar sobre um array de objetos com forEach
let pessoas = [
  { nome: "Lionel", idade: 30 },
  { nome: "Cristiano", idade: 33 },
  { nome: "Neymar", idade: 25 }
];

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");
});
