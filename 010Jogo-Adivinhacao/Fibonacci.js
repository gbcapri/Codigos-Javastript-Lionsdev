let prim = [1,1];
let num;

console.log("Digite até que numero da sequencia de fibonacci deseja saber: ");
process.stdin.on("data", function (data) {
    num = Number(data.toString().trim());
    console.log("1: " + prim[0]);
    console.log("2: " + prim[1]);
    for(let i = 2; i < num; i++){
       prim[i] = prim[i-1] + prim[i-2];
       console.log((i+1) + ": "+ prim[i] );
    }
    process.exit();
});

