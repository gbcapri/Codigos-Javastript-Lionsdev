const lista = ["100", "101", "102", "103", "104"];
let numero;

console.log("Digite seu numero para ver se esta na lista: ");
process.stdin.on("data", function(data){
    numero = data.toString().trim();
    if(lista.includes(numero)){

        process.stdout.write("O número "+numero+" está presente na lista");
    } else{

        process.stdout.write("O número "+numero+" não está presente na lista");
    }
    process.exit();
});