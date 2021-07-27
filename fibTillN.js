function processData(input) {
    let a=0;
    let b=1;
    let c;
    while(a<=input){
        process.stdout.write(a+" ");
        c=a+b;
        a=b;
        b=c;
    }
} 