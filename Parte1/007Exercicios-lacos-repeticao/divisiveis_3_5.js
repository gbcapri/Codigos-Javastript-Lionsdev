let num=10000;

for(num < 100000;num >= 0;num--){
    if(num%5 == 0 || num%3 == 0)
        process.stdout.write(num + " ");
}