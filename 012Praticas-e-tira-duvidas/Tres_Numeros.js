let num1;
let num2;
let num3;
let maior;

console.log("Digite 3 numeros para descobrir o maior: ");
process.stdin.on("data", function (data) {
    if (!num1) {
        num1 = +data.toString().trim();
        maior = num1;
        console.log("Digite o segundo numero");
    } else if (!num2) {
        num2 = +data.toString().trim();
        if (num2 > maior) {
        maior = num2;
        }
        console.log("Digite o terceiro numero");
    } else if (!num3) {
        num3 = +data.toString().trim();
        if (num3 > maior) {
            maior = num3;
        }
        console.log("o maior numero é: " + maior);
        process.exit();
    }
    
});
