let jogo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let jogadoratual = "X";
let jogadas = 0;

console.log("Vamos jogar o jogo da velha!!!");

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

console.log("JOGADOR ATUAL: X");

process.stdin.on("data", function (data) {
    let posi = data.toString().trim();
    let verificarVencedor = false;
    for (let i = 0; i < 3; i++) {
        if (jogo[i][0] === jogo[i][1] && jogo[i][1] === jogo[i][2]) {
            verificarVencedor = true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (jogo[0][j] === jogo[1][j] && jogo[1][j] === jogo[2][j]) {
            verificarVencedor = true;
        }
    }
    if ((jogo[0][0] === jogo[1][1] && jogo[1][1] === jogo[2][2]) ||
        (jogo[0][2] === jogo[1][1] && jogo[1][1] === jogo[2][0])) {
        verificarVencedor = true;
    }

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

    let posicaoValida = false;
    for (let i = 0; i < jogo.length; i++) {
        for (let j = 0; j < jogo[i].length; j++) {
            if (jogo[i][j] == posi) {
                posicaoValida = true;
            }
        }
    }

    if (jogadas < 9) {
        if (!posicaoValida) {
            console.log("Insira novamente para colocar uma posição válida");
        } else {
            for (let i = 0; i < jogo.length; i++) {
                for (let j = 0; j < jogo[i].length; j++) {
                    if (jogo[i][j] == posi) {
                        jogo[i][j] = jogadoratual;
                    }
                }
            }
            console.log("\n\n\n\n\nPosição atualizada");

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

            if (verificarVencedor) {
                console.log("O jogador " + jogadoratual + " venceu");
                process.exit();
            }

            jogadas++;
            jogadoratual = (jogadoratual == 'X') ? 'O' : 'X';
            console.log("JOGADOR ATUAL: " + jogadoratual);
        }
    } else {
        console.log("Não existem mais jogadas. O jogo empatou");
        process.exit();
    }
});
