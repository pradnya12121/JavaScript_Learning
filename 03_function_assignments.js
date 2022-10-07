console.log("----QUESTION:1---");
function multiplication()
{
   var x=24;
   var y=6;
   var z=x*y;
   console.log("Multipliction Of Two Number:" + z);
}
multiplication();



function divide()
{
  var a=567;
  var b=35;
  var c=a/b;
  console.log("Division of two number:"+ c) ;
   
 }
divide();

 console.log("---QUESTION:- 2---");

function personalDetail(firstName , lastName)
{
  console.log(firstName + lastName);
}
 personalDetail("Pradnya","Kolase");

 console.log("---QUESTION3---");

 function swap_values(argu1 ,argu2)
 {

console.log("-------------Before Swaping-------------");
console.log(argu1, argu2);
console.log("---------------After Swaping-----------");
var temp=argu1;
argu1=argu2;
argu2=temp;
console.log(argu1,argu2);
 }
 swap_values("virat", "Anushaka");
 swap_values(1000,2000);

 console.log("----QUESTION:-4---");
 function add_three_numbers(valu1,value2,value3)
 {
       console.log(valu1+value2+value3);
 }
 add_three_numbers(10.23,600,40);
 add_three_numbers("Hello","Good","Morning");
