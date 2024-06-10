let pessoa = {
    nome : "",
    idade : "",
    maioridade : ""
};

console.log("Qual o seu nome?");
process.stdin.on("data", function(data){

    if(!pessoa.nome){

        pessoa.nome = data.toString().trim();
        console.log("Qual a sua idade?");
    } else if(!pessoa.idade){

        pessoa.idade = +data.toString().trim();
        console.log("olá " + pessoa.nome);
        if(pessoa.idade >= 18){

            console.log("Você é um ser humano adulto maior de 18 anos");
        } else{

            console.log("Você é um ser humano sem nunhuma escolha na vida com 17 anos ou menos");
        }
        process.exit();
    }
});
