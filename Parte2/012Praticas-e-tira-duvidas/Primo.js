let num;
let result;

console.log("Digite um numero para descobrir se é primo: ");
process.stdin.on("data", function (data) {
    num = +data.toString().trim();
    for (let i = 2; i < num; i++) {
        result = num % i;
        if(result == 0){
        console.log("O numero não é primo");
        process.exit();}
    }
    console.log("O numero é primo");
    process.exit();
});