idades = [];
let media;
let soma = 0;
let num;

console.log("Insira as idasdes da turma para que seja feita a média");
process.stdin.on("data",function (data){
num = data.toString().trim().toLowerCase();

if(num == "calcular"){
    if(idades.length == 0){
        console.log("insira um numero para começarmos a calcular a média");
    }else{
        media = soma / idades.length;
        console.log("A média é: " + media);
    }
    process.exit();
}
    if (num.trim() == "") {
        console.log("Digite um número para que seja juntado à média");
        return;
    }else if(!isNaN(Number(num))){
        idades.push(Number(num));
        soma += (Number(num));
        console.log("Adicione mais idades ou finalize com 'CALCULAR'");
    }
    else{
        console.log("Digite um número válido");
    }

});