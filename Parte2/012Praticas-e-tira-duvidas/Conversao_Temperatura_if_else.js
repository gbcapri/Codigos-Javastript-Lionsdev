let conversor;

console.log("digite f para fahrenheit, c para celsius e k para kelvin");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim();

  if (!conversor) {
    if (
      entrada == "f" || entrada == "c" || entrada == "k") {
      conversor = entrada;
      console.log("Agora digite uma temperatura");
    } else {
      console.log("insira um valor valido");
    }
  } else {
    let temperatura = Number(entrada);
    if (Number.isNaN(temperatura)) {
      console.log("insira um temperatura válida");
    } else {
      if (conversor == "f") {
        console.log("em celsius é:", (temperatura - 32) / 1.8);
        console.log("em kelvin é:", ((temperatura - 32) * 5) / 9 + 273.15);
      } else if (conversor == "c") {
        console.log("em fehrenheit é:", temperatura * 1.8 + 32);
        console.log("em kelvin é:", temperatura + 273.15);
      } else if (conversor == "k") {
        console.log("em celsius é:", temperatura - 273.15);
        console.log("em fehrenheit é:", (temperatura - 273.15) * 1.8 + 32);
      }
    }
  }
});