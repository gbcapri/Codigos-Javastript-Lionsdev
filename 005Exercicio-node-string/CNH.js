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
    }
  }

  if (idade >= '18') {
    temcnh = data.toString().trim().toLowerCase();
    if (temcnh === "1") {
      CNH = true;
      process.stdout.write("Você possui CNH!!!!!\n");
    }
  }

  if (idade && CNH) {
    if (CNH == true) {
      process.stdout.write("Olá " + nome + ", você tem " + idade + " anos e pode dirigir.\n");
    } else {
      process.stdout.write("Olá " + nome + ", você tem " + idade + " anos e não pode dirigir.\n");
    }
    process.exit();
  }
});
