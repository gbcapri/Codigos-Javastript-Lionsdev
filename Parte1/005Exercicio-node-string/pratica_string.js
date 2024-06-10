/* let nome = "Gabriel";
let sobrenome = "Breda";
let resultado = 0;
let n1 = 0;
let n2 = 0;
n1++;
n2 += 5;

resultado = n1 + n2;
console.log(resultado)
console.log("Hello world, " + nome + " " + sobrenome); 

para comentar usa ctrl shift a
*/
//-------------------------------------------------------------------------------------------------------
/* console.log("digite seu nome: ");

process.stdin.on('data', function (data) {
  let entrada = data.toString();

  process.stdout.write("Olá, " + entrada);

  process.exit();
}); */
//-------------------------------------------------------------------------------------------------------

process.stdout.write("Qual o seu nome? \n");

let nome = "";
let idade = "";
let CNH = false;
let temcnh;

process.stdin.on("data", function (data) {
  if (!nome) {
    nome = data.toString().trim();
    process.stdout.write("Qual a sua idade? \n");
  } else if (!idade) {
    idade = data.toString().trim();
    if (idade >= '18') {
      process.stdout.write("Você possui CNH? (1 para sim e 0 para não) \n");
    } else {
      process.stdout.write("Você é menor de idade e não pode ter CNH. \n");
      process.stdout.write("Olá " + nome + ", você tem " + idade + " anos e não pode dirigir.\n");
    }
  }

  if (idade >= '18') { // Verifica se idade é maior ou igual a 18
    temcnh = data.toString().trim().toLowerCase();
    if (temcnh === "1") {
      CNH = true;
      process.stdout.write("Você possui CNH!!!!!\n");
    }
  }

  if (idade && nome) {
    if (CNH == true) {
      process.stdout.write("Olá " + nome + ", você tem " + idade + " anos e pode dirigir.\n");
    } else {
      process.stdout.write("Olá " + nome + ", você tem " + idade + " anos e não pode dirigir.\n");
    }
    
    process.exit(); // Termina o programa após a última interação
  }
});
