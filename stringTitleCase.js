function processData(input) {
    let strArray=input.split(" ");
    for(let i=0;i<strArray.length;i++){
        let charAt=strArray[i].charAt(0).toUpperCase();
        let remain=strArray[i].slice(1);
        process.stdout.write(charAt+remain+" ");
    }
} 