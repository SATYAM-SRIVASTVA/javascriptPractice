function processData(input) {
   
    var st = input / 2, sp = 1; // sp = spaces ; st = stars
   for (var i = 1; i <= input; i++)
   {
       var line ="";
       for(var j=0;j<st;j++)
       {line+="*";}
       for(var j=0;j<sp;j++)
       {line+=" ";}
       for(var j=0;j<st;j++)
       {line+="*";}
       
     console.log(line);
     if ( i <= input / 2)
     { sp += 2;
       st--;
     }
     else
     {
       sp -= 2;
       st++;
     }
   }
}
