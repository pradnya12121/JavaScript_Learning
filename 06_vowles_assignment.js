var givenString="Good Morning IT Champ";

 
var str= givenString.toLowerCase();
var vowels =  "aeiou";
var count = 0;

for (let index = 0; index <str.length; index++) {
    
    var spl= str.charAt(index);
    if(vowels.includes(str.charAt(index)))
    {
        
    //    console.log(spl);
    count=count + 1;
     
       
    }
    console.log(count);
    
}

console.log("==================================================================================");
console.log(`2. Write a function to count vowels from the given string. EX -->" I Love JavaScript"`)

function display()
{
  var sentence='I Love JavaScript';
  var tot=sentence.toLowerCase();
  var count = 0;
       for (let index = 0; index <tot.length; index++) 
       {
       
        
  

        var char=tot.charAt(index)
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u")
        {
        //   console.log(char);
        //   console.log("");
      
          count = count + 1;
         
        }
       }
       
       console.log(count);
}
display();
console.log("==========================================================================================");
console.log(`3.Write a function expression to sum all numbers from 1 to 10`);
var addtion=function()
{
    var  x=0;
    var  index=1;
  for (let index = 1; index<=10 ; index++) 
  {
    
    x=x+index;
    console.log(x);

}}
addtion()
console.log("===========================================================================================");
console.log(`4. Write function to get the sum of square number from 1 to 5`);

function square()
{
   
    var index=1;
    var sum=0;
    
for (let index = 1; index <=5; index++)
 {
var sqr=index*index;
var sum=sum+(index*index);
    
    console.log(sum);
}
}
square()
console.log("===========================================================================================");
console.log('5. write a function as mention below')

function evenPositionedCha(arg)

{  
    
    // var string="Hard work always pays back";
    var stm=arg.toLowerCase();
    // var string2="Soon I will be Angular IT Champ";
    
    var stt=stm.charAt(0);
    var store= " ";
    
    for (let index = 0; index < stm.length; index++) 

    {
        if(index%2==0 && stt!=" ")
        {
            
          store = store +stm.charAt(index)
        }
    }


    console.log(store);
}
  evenPositionedCha("Hard work always pays back");
  console.log("=============================================================================")
  evenPositionedCha("Soon I will be Angular IT Champ");