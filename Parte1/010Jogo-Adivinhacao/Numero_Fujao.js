let aleatorio = Math.floor(Math.random() * 10/* + 1*/);//O mais 1 retira o 0 como opção de acerto
let num;
let tentativa = 0;

console.log("adivinhe o numero que foi escolhido entre 0 e 9");
process.stdin.on("data", function (data) {
  if(tentativa < 5){
    num = Number(data.toString().trim());
    if (!isNaN(num)) {
      tentativa++;
      if (num == aleatorio) {
        console.log("Você acertou o número!! Incrível.");
        process.exit();
      } else {
        console.log("Você errou, tente novamente.");
          if(Math.abs(aleatorio - num) >= 5){
            console.log("Você errou por 5 ou mais")
          }else if(Math.abs(aleatorio - num) < 2){
            console.log("Você está muito próximo")
          }else if(Math.abs(aleatorio - num) < 5){
            console.log("Você está próximo por 4 ou menos")
          }
        console.log("Essa é sua tentativa número " + tentativa + " de 5 tentativas");
      }
    }else{
    console.log("Insira um numero válido");}
  }else{
  console.log("Suas chances acabaram, o número era " + aleatorio);
  console.log("tente novamente o jogo!");
  tentativa = 0;
  aleatorio = Math.floor(Math.random() * 10);}
});
