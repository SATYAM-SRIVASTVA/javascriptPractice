function processData(input) {
    let count=0;
       while(input!=0){
           count++;
           input=Math.floor(input/10);
       }
       console.log(count);
   } 