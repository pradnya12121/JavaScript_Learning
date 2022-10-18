function display(arg)
{
    var term=arg.toLowerCase();
    var vowels="aeiou";
    var count=0;
    for (let index =0; index < term.length; index++) {
        var char=term.charAt(index);
        if(vowels.includes(char))
        {
            count++
        }
        
    }
    console.log(`total number of vowles avilable in string :-${count}`);
    console.log("==========================================================================");

}
display("I am very good IT Developer")

function show(arg)
{
    var stm=arg.toLowerCase()
    var vowels="aeiou";
    var count=0;
    for (let index = 0; index < stm.length; index++) {
        var tim=stm.charAt(index);
        if(vowels.includes(tim))
        {
            count++
        }
        
        
    }
    console.log(`total number of vowles avilable in string :-${count}`);
}
show("I am Hardworking Person");
console.log("============================================================");
console.log("Q. WAP To find sum of cube of number  from 1 to 5")
function addition()
{
   let cube;
   let sum=0;
   for (let index = 1; index <=5; index++) {
    let  cube=index*index*index;
    sum=sum+cube;
    
    
   }console.log(sum);

}
addition()
console.log("============================================================");
function oddPositionedChars(arg)
{
var res=" ";
{for (let index = 0; index < arg.length; index++) {
    var char=arg.charAt(index);
    if(index%2!==0 && char!=" ")
    { 
        
        
        res=res  + char;
     
    }
    
}
console.log(res);
}
}
oddPositionedChars("Hard work always pay back");
console.log("========================")
oddPositionedChars("Soon I will be Angular It Champ");