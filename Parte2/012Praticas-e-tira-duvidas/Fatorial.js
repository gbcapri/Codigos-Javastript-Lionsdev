let num;

console.log("Digite um numero para calcular seu fatorial");
process.stdin.on("data", function (data) {
    num = +data.toString().trim();
    let fat=1;
    for (let i = 1; i <= num; i++) {
        fat*=i;
    }
    console.log("O seu fatorial é:" + fat)
    process.exit();
});

