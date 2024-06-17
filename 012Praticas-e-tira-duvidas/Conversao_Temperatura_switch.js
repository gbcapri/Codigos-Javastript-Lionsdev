let passo = 0;
let temp;
let opcao;

console.log("Digite o de qual temperatura para qual temperatura deseja calcular: \n1-Celcius->Fahrenheit \n2-Fahrenheit->Celcius");
process.stdin.on("data", function (data) {
    num = data.toString().trim();
        switch(passo){
            case 0:
                switch(num){
                    case '1':
                        console.log("Digite a temperatura em Celcius para ser calculada");
                        passo = 1;
                        break;
                    case '2':
                        console.log("Digite a temperatura em Fahrenheit para ser calculada");
                        passo = 2;
                        break;
                    default:
                        console.log("Escreva algo válido");
                }
                break;
            case 1:
                temp = Number(num);
            let calculo1 = (temp * 1.8) + 32;
            console.log("A temperatura em Fahrenheit é: " + calculo1);
            console.log("Deseja calcular outra temperatura? Se não, digite 'n', se sim, digite \n1-Celcius -> Fahrenheit \n2-Fahrenheit -> Celcius");
            passo = 3; // Definindo passo 3 para aguardar a próxima entrada
            opcao = num;
            break;
        case 2:
            temp = Number(num);
            let calculo2 = (temp - 32) / 1.8;
            console.log("A temperatura em Celcius é: " + calculo2);
            console.log("Deseja calcular outra temperatura? Se não, digite 'n', se sim, digite \n1-Celcius -> Fahrenheit \n2-Fahrenheit -> Celcius");
            passo = 3; // Definindo passo 3 para aguardar a próxima entrada
            break;
        case 3:
            if (num === 'n' || num === 'nao' || num === 'não') {
                process.exit();
            } else {
                passo = 0;
            }
            break;
            default:
                console.log("Escreva algo válido");
        }
});