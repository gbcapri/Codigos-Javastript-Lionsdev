process.stdout.write("Você gosta de café?Sim ou não \n");

let gostacafe = "";

process.stdin.on("data", function (data) {
gostacafe = data.toString().trim();
    if(gostacafe == 'sim'||gostacafe == 's') { 
    process.stdout.write("Que bom que você gosta \n");
  } else {
    process.stdout.write("Eu te odeio \n");
  }
  process.exit();
});
