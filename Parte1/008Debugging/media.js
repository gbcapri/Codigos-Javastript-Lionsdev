let numeros = [];
let soma = 0;
let quant = 0;
let media = 0;
let num;
let quer;

console.log("Digite alguns numeros para ser calculado a media: ");
process.stdin.on("data", function (data) {
  if (!num) {
    num = Number(data.toString().trim());
    //da pra escrever num = +data.toString().trim(); que é a mesma coisa
    numeros.push(num);
    soma += num;
    quant++;
    console.log("Deseja inserir mais numeros?sim ou não?");
    console.log(numeros);
  } else if (!quer) {
    quer = data.toString().trim().toLowerCase();
        if (quer == 'n' || quer == 'nao' || quer == 'não') {
        console.log("Seus numeros ficaram:" + numeros);
        media = soma / quant;
        console.log("E sua média é: " + media)
        process.exit();
        } else {
            num = null;
            quer = null;
            console.log("Insira o proximo numero: ");
        }
    }
  });