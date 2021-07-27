function processData(input) {
    var arr=input.split("\n");
    var first =0;
    var last=0;
    var check=arr[arr.length-1];
    var flag=true;
    for(var i=1;i<arr.length-1;i++)
        {
          if(arr[i]==check&&flag==true)
              {
                  first=i-1;
                  flag=false;
              }
            if(arr[i]==check)
              {
                  last=i-1;
                 //lag=false;
              }
            
        }
    console.log(first);
    console.log(last);
} 