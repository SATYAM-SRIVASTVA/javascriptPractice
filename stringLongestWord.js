function processData(input) {
    let arrString=input.split(" ");
    let longestWord="";
    let maxLength=0;
    for(let i=0;i<arrString.length;i++){
        if(arrString[i].length>maxLength){
            longestWord=arrString[i];
            maxLength=arrString[i].length;
        }
    }
    console.log(longestWord);
} 
