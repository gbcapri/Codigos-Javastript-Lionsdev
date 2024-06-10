let Informacoes = {
nome : "",
idade : "",
salario : "",
sexo : "",
estadoCivil : "",
};

console.log("Digite o nome: ");
process.stdin.on("data", function (data) {
    data = data.toString().trim();
//-----------------------------------------------------------
    if(!Informacoes.nome){
        if(data.length >= 3){
            Informacoes.nome = data;
            console.log("Digite sua idade: ");
        }else{
            console.log("Digite novamente um nome maior que 3 letras:");
        }
        return;
    }
//-----------------------------------------------------------
    if(!Informacoes.idade){
        let idade = +data;
        if(idade > 0 && idade < 150){
            Informacoes.idade = idade;
            console.log("Digite o seu salário: ");
        }else{
            console.log("Digite novamente uma idade válida:");
        }
        return;
    }
//-----------------------------------------------------------
    if(!Informacoes.salario){
        let salario = +data;
        if(salario > 0){
            Informacoes.salario = salario;
            console.log("Digite o seu sexo:[homem][mulher]");
        }else{
            console.log("Digite novamente um salário positivo:");
        }
        return;
    }
//-------------------------------------------------------------
    if(!Informacoes.sexo){
        switch(data.toLowerCase()){
            case 'm':
            case 'h':
            case 'macho':
            case 'homem':
                Informacoes.sexo = "Homem";
                console.log("Digite seu estado civil:");
                break;
            case 'm':
            case 'f':
            case 'mulher':
            case 'femea':
                Informacoes.sexo = "Mulher";
                console.log("Digite seu estado civil:");
                break;
            case 'sempre':
                Informacoes.sexo = "Tarado";
                console.log("Digite seu estado civil:");
                break;
            default:
                console.log("Escreva algo válido");
                
        }
        return;
    }
//-------------------------------------------------
    if(!Informacoes.estadoCivil){
        switch(data.toLowerCase()){
            case 'c':
            case 'casado':
                Informacoes.estadoCivil = "Casado";
                break;
            case 's':
            case 'solteiro':
                Informacoes.estadoCivil = "SOLTEIRO";
                break;
            case 'v':
            case 'viuvo':
                Informacoes.estadoCivil = "VIUVO";
                break;
            case 'divorciado':
            case 'd':
                Informacoes.estadoCivil = "DIVORCIADO";
                break;
            case 'casado com o perigo':
                Informacoes.estadoCivil = "Casado com o perigo";
                break;
            default:
                console.log("Escreva uma opção válida");
                return;
    }
//---------------------------------------------------
        console.log("informações sobre o usuário:"+
            "\nNome        :"+Informacoes.nome+
            "\nIdade       :"+Informacoes.idade+
            "\nSalário     :"+Informacoes.salario+
            "\nSEXO?       :"+Informacoes.sexo+
            "\nEstado civil:"+Informacoes.estadoCivil);
        process.exit();
    }
});
