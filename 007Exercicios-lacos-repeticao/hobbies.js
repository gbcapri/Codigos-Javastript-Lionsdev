let hobbies = [];
let xis;
let quer;

console.log("Digite seus hobbies: ");
process.stdin.on("data", function (data) {
  if (!xis) {
    xis = data.toString().trim();
    hobbies.push(xis);
    console.log("Deseja inserir mais itens?sim ou não?");
    console.log(hobbies);
  } else if (!quer) {
    quer = data.toString().trim().toLowerCase();
    if (quer == 'n' || quer == 'nao' || quer == 'não') {
      console.log("Seus hobbies ficaram como:" + hobbies);
      process.exit();
    } else {
      xis = "";
      quer = "";
      console.log("Insira o proximo hobbie: ");
    }
  }
});
