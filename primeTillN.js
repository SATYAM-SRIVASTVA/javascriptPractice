function processData(input) {
    let ans="";
   
   for(let i=2;i<=input;i++)
       {
           if(isPrime(i)==true)
               {
                   ans+=i+" ";
               }
       }
   console.log(ans);
} 

function isPrime(input)
{
   if(input==2)
       return true;
   else 
       for(let i=2;i*i<=input;i++)
           {
               if(input%i==0)
                   return false;
           }
   return true;
} 