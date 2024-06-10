process.stdout.write("Digite um numero \n");

let num;

process.stdin.on("data", function (data) {
    num = data.toString().trim();
        if(num % 2 == 0) { 
        process.stdout.write("o numero é par \n");
      } else {
        process.stdout.write("O numero é impar \n");
      }
      process.exit();
    });
    