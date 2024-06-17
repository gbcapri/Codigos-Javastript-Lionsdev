let animais = ["Cachorro","Guapeca","Cão","Jaguara","Caramelo"];

//forEach
animais.forEach((cachorro, posicao) => {
    console.log(cachorro, posicao)
});
// for  
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i], i);
}

//while
let i = 0;
while (i < animais.length) {
    console.log(animais[i], i);
    i++;
}