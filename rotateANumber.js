function processData(input) {
    var array=input.split("\n");
   var ans="";
   var r=Number(array[0]);
   r=r%10;
   if(r<0)
       {
           r=r+array[1].length;
               
       }
   for(var i=array[1].length-r;i<array[1].length;i++)
       {
           ans+=array[1].charAt(i);
       }
   for(var i=0;i<array[1].length-r;i++)
       {
           ans+=array[1].charAt(i);
       }
   console.log(ans);
   
} 
function reverse(input) {
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
   return arr;
} 