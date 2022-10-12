console.log("1.1. Find the greatest number amongst two number :- ")

var greater=function(num1,num2)
{
    var result=num1 > num2 ? num1 :num2;
    console.log(`The Greatest  number :  ${result}`);
    

}
greater(10,-10);
greater(800,899);

console.log("===================================================================================================")
console.log("2.1. Check the given number even or odd (29,44,0,101) ");
var EvenOdd = function(value)
{
   

var result=value%2==0 ? true:false;
console.log(`Check The Given number is Even or Odd: ${result}`);
}
EvenOdd(29);
EvenOdd(44);
EvenOdd(0);
EvenOdd(101);


console.log("===================================================================================================")
var show=function(value)
{   
   
 var str=value.length;

  
   var result=str%2==0 ? "Even" : "Odd";
   console.log(`${result}`);
   

}
show("javaScript");

show("Google");
show("Developer");

console.log("===================================================================================================")