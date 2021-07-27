function processData(input) {
    let arr=JSON.parse(input);
    let l=0;
    let r=arr.length-1;
    while(l<r){
        let temp=arr[l];
        arr[l]=arr[r];
        arr[r]=temp;
        l++;
        r--;
    }
    console.log(arr);
} 
