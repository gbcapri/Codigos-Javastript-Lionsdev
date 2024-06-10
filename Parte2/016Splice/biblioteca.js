let biblioteca = [];
let Livros = {
    nome: "",
    autor: "",
    tamanho: "",
    genero: "",
};

let opcao = 'menu';
console.log("Bem vindo à biblioteca");
console.log(
    "O que você deseja fazer?"+
    "\n1-Adicionar um livro."+
    "\n2-Listar os livros"+
    "\n3-Procurar um livro"+
    "\n4-Retirar um livro."+
    "\n5-Sair");

    process.stdin.on("data",function(data){
    data = data.toString().trim();

    if(opcao === 'menu'){
        switch(data){
            case '1':
                opcao = 'adicionar';
                console.log("Digite o nome do livro");
                break;
            case '2':
                if(biblioteca.length == 0){
                    console.log("não existem livros salvos")
                }else {
                    for (let i = 0; i < biblioteca.length; i++) {
                        console.log(
                            "Livro    " + (i + 1) + ":\n" +
                            "Nome:    " + biblioteca[i].nome + "\n" +
                            "Autor:   " + biblioteca[i].autor + "\n" +
                            "Tamanho: " + biblioteca[i].tamanho + "\n" +
                            "Gênero:  " + biblioteca[i].genero + "\n"
                        );
                    }
                }
                opcao = 'menu';
                console.log(
                    "O que você deseja fazer?" +
                    "\n1-Adicionar um livro." +
                    "\n2-Listar os livros" +
                    "\n3-Procurar um livro" +
                    "\n4-Retirar um livro." +
                    "\n5-Sair"
                );
                return;
            case '3':
                opcao = 'procurar';
                console.log("Digite o nome do livro que deseja procurar");
                break;
            case '4':
                opcao = 'retirar';
                console.log("Digite o nome do livro que deseja retirar");
                break;
            case '5':
                process.exit();
                break;
            default:
                console.log("caractere inválido")
        }
        return;
    }
//-------------------------------------------------------------------------------
    if(opcao === 'adicionar'){//nome
        if(data.length > 1){
            Livros.nome = data;
            console.log("digite o autor");
            opcao = 'autor';
        } else {
            console.log("insira um título válido");
        }
        return;
    }

    if (opcao === 'autor'){
        let autor = data;
        if(data.length > 2){
            Livros.autor = autor;
            console.log("digite a quantidade de páginas");
            opcao = 'tamanho';
        }else{
            console.log("insira um autor válido");
        }
        return;
    }

    if (opcao === 'tamanho'){
        let tamanho = +data;
        if(tamanho > 1){
            Livros.tamanho = tamanho;
            console.log("digite o gênero");
            opcao = 'genero';
        }else{
            console.log("insira um tamanho");
        }
        return;
    }

    if (opcao === 'genero'){
        let genero = data;
        if(genero.length > 2){
            Livros.genero = genero;

            console.log("Informações sobre o livro:" +
                "\nNome        :" + Livros.nome +
                "\nAutor       :" + Livros.autor +
                "\nTamanho     :" + Livros.tamanho +
                "\nGênero      :" + Livros.genero);
            
            biblioteca.push({ ...Livros});

            console.log(
                "O que você deseja fazer?"+
                "\n1-Adicionar um livro."+
                "\n2-Listar os livros"+
                "\n3-Procurar um livro"+
                "\n4-Retirar um livro."+
                "\n5-Sair");
            opcao = 'menu';
        }else{
            console.log("Digite um gênero válido");
        }
        return;
    }
//-------------------------------------------------------------------------------
    if(opcao == 'procurar'){
        let achou = null;
        for (let i = 0; i < biblioteca.length; i++) {
            if (biblioteca[i].nome.toLowerCase() === data.toLowerCase()) {
                achou = biblioteca[i];
                break;
            }
        }
        if (achou) {
            console.log("Livro encontrado:");
            console.log(achou);
        } else {
            console.log("Livro não encontrado.");
        }
        opcao = 'menu';
        console.log(
            "O que você deseja fazer?"+
            "\n1-Adicionar um livro."+
            "\n2-Listar os livros"+
            "\n3-Procurar um livro"+
            "\n4-Retirar um livro."+
            "\n5-Sair");
        opcao = 'menu';
        return;
    }
//-------------------------------------------------------------------------------
    if(opcao === 'retirar'){
        let livroRemovido = false;
        for (let i = 0; i < biblioteca.length; i++) {
            if (biblioteca[i].nome.toLowerCase() === data.toLowerCase()) {
                biblioteca.splice(i, 1);// o 1 é a quantidade e o primeiro é a posição
                livroRemovido = true;
                console.log("Livro removido com sucesso.");
                break;
            }
        }
        if (!livroRemovido) {
            console.log("Livro não encontrado.");
        }
        console.log(
            "O que você deseja fazer?"+
            "\n1-Adicionar um livro."+
            "\n2-Listar os livros"+
            "\n3-Procurar um livro"+
            "\n4-Retirar um livro."+
            "\n5-Sair");
        opcao = 'menu';
        return;
    }
//-------------------------------------------------------------------------------
});