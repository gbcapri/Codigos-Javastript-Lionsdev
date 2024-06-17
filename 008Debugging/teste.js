const a = 10;
let cores = ["Vermelho", "Verde", "Azul"];

console.log("chegou");
a = 20;

console.log("aqui não chegou");
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]);
  console.log("=======================");
  cores.push("Amarelo");

  console.log(cores[i]);
  process.exit();
}
