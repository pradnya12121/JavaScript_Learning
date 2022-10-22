function display(arg)
{
    // let str=arg.toLowerCase();
    var mnp=arg.length-1;
    var res=" ";

for (let index =mnp; index >= 0; index--) {
    
         var cha=arg.charAt(index);
      res = res + cha;
 
    }
    console.log(res);   
}
display("I am UI Developer");

console.log("=========================================================")
console.log("Reverse string practice");
var display1=function(str){
           var smt=str.length-1;
           var mnt=" ";
       for (let index = smt; index >=0; index--) {
           var chh=str.charAt(index)
        mnt = mnt + chh;
       }
       console.log(mnt);
}
display1("I Love JavaScript")
console.log("=====================================================")

console.log(" How to find vowels in srting")


function show(arg)
{ 
  var pqr=arg.toLowerCase();
  var count=0;
  for (let index = 0; index < pqr.length; index++)
  
   {var cht=pqr.charAt(index);
     if(cht=="a" || cht=="e" || cht=="i" || cht=="o" || cht=="u")
     {
        
        count=count+1
       
     }
    
 
  }
  console.log(count);
}
show("Hey you are very good person")