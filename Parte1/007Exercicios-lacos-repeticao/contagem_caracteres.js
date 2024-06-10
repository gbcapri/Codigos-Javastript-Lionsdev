let str;

console.log("Digite uma frase para descobrir o numro de caracteres presente nela: ")
process.stdin.on("data", function(data){
    str = data.toString().trim();
    console.log("A frase tem " + str.length + " caracteres")
    process.exit();
});
