let cadastro = [];
let quer;
let pessoa = {
    nome : "",
    idade : "",
    Curso : ""
};

console.log("Qual o seu nome?");
process.stdin.on("data", function(data){
if(data.toString().trim() == 'sair'){
console.log(cadastro);
process.exit();}
    if(!pessoa.nome){
        pessoa.nome = data.toString().trim();
        console.log("Qual a sua idade?");
    } else if(!pessoa.idade){
        pessoa.idade = data.toString().trim();
        console.log("Qual o seu curso?");
    } else {
        pessoa.Curso = data.toString().trim();
        cadastro.push(pessoa);
        console.log("Deseja cadastrar outro? Se sim digite o proximo nome ou se não escreva sair")
        pessoa = {};
    }
});


//console.log("Olá " + pessoa.nome + ", você tem " + pessoa.idade + " anos.");