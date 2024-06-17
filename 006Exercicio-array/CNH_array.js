let pessoa = {
    nome : "",
    idade : "",
    possuiCnh : ""
};

console.log("Qual o seu nome?");
process.stdin.on("data", function(data){

    if(!pessoa.nome){

        pessoa.nome = data.toString().trim();
        console.log("Qual a sua idade?");
    } else if(!pessoa.idade){

        pessoa.idade = data.toString().trim();
        console.log("Olá " + pessoa.nome + ", você tem " + pessoa.idade + " anos.");
        console.log("Você possui cnh? [s/n]");
    } else{

        pessoa.possuiCnh = data.toString().trim().toLowerCase();
        if(pessoa.possuiCnh == "s" || pessoa.possuiCnh == "sim"){

            console.log("Você já pode dirigir.");
        } else{

            console.log("Você não pode dirigir.");
        }
        process.exit();
    }
});
