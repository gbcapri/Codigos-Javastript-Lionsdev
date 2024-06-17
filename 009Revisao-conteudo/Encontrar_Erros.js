// Existem 13 erros neste script, encontre e corrija

let dia = true

if(dia) {
    console.log("Bom dia");
} else{
    console.log("Boa noite");
}

dia = false;

let aluno = {
    frio : true,
    molhado : true,
};

if(aluno.molhado && aluno.frio && !dia) {
    console.log("Vou usar um casaco");

    let casacos = ["casaco1", "casaco2", "casaco3"];
    
    for (let i = 0; i < casacos.length; i++) {
        console.log("Bota " + casacos[i] + " tira " + casacos[i]);
        
    }
}

/*

const dia = true//tem que trocar pra let pois constante não dá pra mudar

if(dia) {
    console.log("Bom dia");
} else (!dia)//retira (!dia) e coloca { pois else não precisa de condição e falta um {
    console.log("Boa noite");
}

dia = false;

let aluno {//coloca ={ pois se não não roda
    frio = true,//coloca : pois se não não salva como true
    molhado = true,//coloca : pois se não não salva como true
}

if(aluno.molhado EE aluno.frio EE !dia) { //troca os dois EE por && pois essa maneira anterior estava errada
    console.log("Vou usar um casaco");

    let casacos = ["casaco1"; "casaco2"; "casaco3"]; //troca os dois ; por , pois a maneira de separar elementos em um array é com , e não com ;
    
    for (let i = 1; i <= casacos.length; i++) {//troca i=1 por i=0 e <= por < pois se não ele não começa no primeiro e o tamanho começa no 0 então termina com o tamanho menos 1
        console.log("Ponha " + casacos[i] + " tira " + casacos[i]);
        
    }
 // tem que colocar } pois se não não roda 
 
 */