let usuarios = [];
let Informacoes = {
    nome: "",
    idade: "",
    salario: "",
    sexo: "",
    estadoCivil: "",
};

let estado = 'menu';
console.log("Escolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");

process.stdin.on("data", function (data) {
    data = data.toString().trim();

    if (estado === 'menu') {
        switch (data) {
            case '1':
                estado = 'nome';
                console.log("Digite o nome: ");
                break;
            case '2':
                if (usuarios.length === 0) {
                    console.log("Nenhum usuário cadastrado.");
                } else {
                    console.log("Lista de usuários cadastrados:");
                    usuarios.forEach((usuario, index) => {
                        console.log(`${index + 1}. ${usuario.nome}`);
                    });
                }
                console.log("\nEscolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");
                break;
            case '3':
                estado = 'procurar';
                console.log("Digite o nome do usuário que deseja procurar: ");
                break;
            case '4':
                estado = 'retirar';
                console.log("Digite o nome do usuário que deseja retirar: ");
                break;
            default:
                console.log("Opção inválida. Escolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");
        }
        return;
    }

    if (estado === 'procurar') {
        const usuarioEncontrado = usuarios.find(usuario => usuario.nome.toLowerCase() === data.toLowerCase());
        if (usuarioEncontrado) {
            console.log("Usuário encontrado:");
            console.log(usuarioEncontrado);
        } else {
            console.log("Usuário não encontrado.");
        }
        estado = 'menu';
        console.log("\nEscolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");
        return;
    }

    if (estado === 'retirar') {
        const index = usuarios.findIndex(usuario => usuario.nome.toLowerCase() === data.toLowerCase());
        if (index !== -1) {
            usuarios.splice(index, 1);
            console.log("Usuário removido com sucesso.");
        } else {
            console.log("Usuário não encontrado.");
        }
        estado = 'menu';
        console.log("\nEscolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");
        return;
    }
    /*
    let usuarioRemovido = false;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome.toLowerCase() === data.toLowerCase()) {
                usuarios.splice(i, 1);// o 1 é a quantidade e o primeiro é a posição
                usuarioRemovido = true;
                console.log("Usuário removido com sucesso.");
                break;
            }
        }
        if (!usuarioRemovido) {
            console.log("Usuário não encontrado.");
        }
        estado = 'menu';
        console.log("\nEscolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");
        return;
    }
    */

    if (estado === 'nome') {
        if (data.length >= 3) {
            Informacoes.nome = data;
            console.log("Digite sua idade: ");
            estado = 'idade';
        } else {
            console.log("Digite novamente um nome maior que 3 letras:");
        }
        return;
    }

    if (estado === 'idade') {
        let idade = +data;
        if (idade > 0 && idade < 150) {
            Informacoes.idade = idade;
            console.log("Digite o seu salário: ");
            estado = 'salario';
        } else {
            console.log("Digite novamente uma idade válida:");
        }
        return;
    }

    if (estado === 'salario') {
        let salario = +data;
        if (salario > 0) {
            Informacoes.salario = salario;
            console.log("Digite o seu sexo:[homem][mulher]");
            estado = 'sexo';
        } else {
            console.log("Digite novamente um salário positivo:");
        }
        return;
    }

    if (estado === 'sexo') {
        switch (data.toLowerCase()) {
            case 'm':
            case 'h':
            case 'macho':
            case 'homem':
                Informacoes.sexo = "Homem";
                console.log("Digite seu estado civil:");
                estado = 'estadoCivil';
                break;
            case 'f':
            case 'mulher':
            case 'femea':
                Informacoes.sexo = "Mulher";
                console.log("Digite seu estado civil:");
                estado = 'estadoCivil';
                break;
            default:
                console.log("Escreva algo válido");
        }
        return;
    }

    if (estado === 'estadoCivil') {
        switch (data.toLowerCase()) {
            case 'c':
            case 'casado':
                Informacoes.estadoCivil = "Casado";
                break;
            case 's':
            case 'solteiro':
                Informacoes.estadoCivil = "Solteiro";
                break;
            case 'v':
            case 'viuvo':
                Informacoes.estadoCivil = "Viuvo";
                break;
            case 'd':
            case 'divorciado':
                Informacoes.estadoCivil = "Divorciado";
                break;
            default:
                console.log("Escreva uma opção válida");
                return;
        }

        console.log("Informações sobre o usuário:" +
            "\nNome        :" + Informacoes.nome +
            "\nIdade       :" + Informacoes.idade +
            "\nSalário     :" + Informacoes.salario +
            "\nSexo        :" + Informacoes.sexo +
            "\nEstado civil:" + Informacoes.estadoCivil);

        usuarios.push({ ...Informacoes });

        console.log("\nUsuário adicionado! Escolha uma opção:\n1. Adicionar novo usuário\n2. Listar todos os usuários\n3. Procurar usuário específico\n4. Retirar um usuário");
        estado = 'menu';
        return;
    }
});
