let numeros = [];
let soma = 0;
let media = 0;
let num;
let final;

console.log("Digite alguns numeros para ser calculado a media: ");
process.stdin.on("data", function (data) {
num = +data.toString().trim();//da pra escrever num = Number(data.toString().trim()); que é a mesma coisa
final = data.toString().trim().toLowerCase();

if(final == "finalizar") {
    console.log("Seus numeros ficaram:" + numeros);
    for(let i = 0; i < numeros.length; i++){
        soma = numeros[i] + soma;
    }
    media = soma / numeros.length;
    console.log("E sua média é: " + media)
    process.exit();
}
    if (!isNaN(num)) {
    numeros.push(num);
    console.log("adicione mais numeros para que a média seja calculada ou finalize com 'finalizar'");
    } else{
    console.log("Insira o proximo numero ou finalize com finalizar para calcular a média");
    console.log("entrada inválida")
    }
  });