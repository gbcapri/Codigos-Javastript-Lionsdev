const listaDeCompras = ["Pão", "Batata", "Cenoura", "Alface", "Carne"];
let produto;

console.log("Digite o produto que quer ver se está na lista de compras:");
process.stdin.on("data", function(data){
    produto = data.toString().trim();
    if(listaDeCompras.includes(produto)){

        process.stdout.write(produto + " está na lista de compras.");
    } else{

        process.stdout.write(produto + " não está na lista de compras.");
    }
    process.exit();
});