let paisA = 80000;
let paisB = 200000;
let anos = 0;

while(paisA <= paisB){
    paisA +=  paisA * 0.03;
    paisB +=  paisB * 0.015;
    anos++;
}

console.log("demorará "+ anos +" anos para o país A passar o país B");