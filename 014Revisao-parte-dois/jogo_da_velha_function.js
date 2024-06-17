let jogo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
let jogadoratual = "X";
let jogadas = 0;

function verificarVencedor() {
    for (let i = 0; i < 3; i++) {
        if (jogo[i][0] === jogo[i][1] && jogo[i][1] === jogo[i][2]) {
            return true;}
    }
    for (let j = 0; j < 3; j++) {
        if (jogo[0][j] === jogo[1][j] && jogo[1][j] === jogo[2][j]) {
            return true;}
    }
    if ((jogo[0][0] === jogo[1][1] && jogo[1][1] === jogo[2][2]) ||
        (jogo[0][2] === jogo[1][1] && jogo[1][1] === jogo[2][0])) {
        return true;
    }
    return false;
}

function tabuleiro() {
    for (let i = 0; i < jogo.length; i++) {
        let linha = "";
        for (let j = 0; j < jogo[i].length; j++) {
            linha += " " + jogo[i][j] + " ";
            if (j < jogo[i].length - 1) {
                linha += "|";
            }
        }
        console.log(linha);
        if (i < jogo.length - 1) {
            console.log("-----------");
        }
    }
}

function atualizarJogada(posi, jogadoratual) {
    for (let i = 0; i < jogo.length; i++) {
        for (let j = 0; j < jogo[i].length; j++) {
            if (jogo[i][j] == posi) {
                jogo[i][j] = jogadoratual;
            }
        }
    }
}

function posicao(posi) {
    for (let i = 0; i < jogo.length; i++) {
        for (let j = 0; j < jogo[i].length; j++) {
            if (jogo[i][j] == posi) {
                return true;
            }
        }
    }
    return false;
}

console.log("vamos jogar o jogo da velha!!!")
tabuleiro();
console.log("JOGADOR ATUAL: " + jogadoratual);
process.stdin.on("data", function (data) {
    
    if (jogadas < 9) {
        
        
        let posi = data.toString().trim();
        if (!posicao(posi)) {
            console.log("Insira novamente para colocar uma posição válida");
        } else {
            atualizarJogada(posi, jogadoratual);
            console.log("\n\n\n\n\nposição atualizada");
            tabuleiro();
            if(verificarVencedor()){
                console.log("O jogador " + jogadoratual + " venceu")
                process.exit();
            }
            jogadas++;
            if (jogadoratual == 'X') {
                jogadoratual = 'o';
            } else {
                jogadoratual = 'X';
            }
            console.log("JOGADOR ATUAL: " + jogadoratual);
        }
    }else{ 
    console.log("Não existem mais jogadas. O jogo empatou");
    process.exit();}
});     
