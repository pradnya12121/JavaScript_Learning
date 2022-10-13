console.log("1. WF to chexk passed argument number value is Even or Odd");
function EvenOdd(arg)
{
if(arg%2==0)
{
    console.log(`The given number is : EVEN`);
 }else
 {
    console.log(`The given number is : ODD`);
 }
}
EvenOdd(45);
EvenOdd(70);
EvenOdd(67);
EvenOdd(98);

console.log("======================================================================================================================");
 
console.log("2. Check if person is eligible for vote or not");
function Voting(age)
{
if(age>=18)
{
    console.log(`Person is Eligible for VOTE`);
}
else
{
    console.log(`Person is Not Eligible for VOTE`) ;
}
}
Voting(18);
Voting(20);
Voting(17);
Voting(40);


console.log("======================================================================================================================");

console.log(" 3 .Check if string contains more than 10 character or not");

function String(arg)
{
    if(arg.length>=10)
    {

        console.log(`String Contain More than 10 character`);
    }
    else
    {
        console.log(`String Not Contain More than 10 character`);
    }

}
String("JavaScript-ES6");


console.log("======================================================================================================================");

console.log(`4 .Check if string start with "Java" EX - "JavaScript Language"`);

function display(str)
{
    
   
if(str.startsWith("Java"))
{
   console.log(`String start with "Java"`);
}
else
{
    console.log(`String  Not start with "Java"`);
}
}
display("JavaScript");
    
   
console.log("======================================================================================================================");