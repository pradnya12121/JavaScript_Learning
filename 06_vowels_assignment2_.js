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