function reverseString(arg)
{
   var rev =arg.length-1;
  var sto=" ";
   for (let index = rev; index >=0; index--) 
   {
 sto=sto + arg.charAt(index)
    
   }
   console.log(sto);

}

reverseString("Hard work always pays back");
console.log("=========================================================================")
reverseString("Soon I will be Angular IT Champ")
console.log("=========================================================================")

function reverseString1(arg)
{
   var rev =arg.length-1;
  var sto1=" ";
   for (let index = rev; index >=0; index--) 
   {
    if((arg.charAt(index))!== " ")
 sto1=sto1 + arg.charAt(index)
    
   }
   console.log(sto1);

}

reverseString1("Hard work always pays back");
console.log("=========================================================================")
reverseString1("Soon I will be Angular IT Champ")
console.log("=========================================================================")