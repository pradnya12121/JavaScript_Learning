function swap(x,y)
{ 
     console.log(`Before Swaping : ${x} ${y}`)
    var x=x+y;
    var y=x-y;
    x=x-y;
    console.log(`After swaping : ${x} ${y}`)


}
swap(100,200);


console.log("=========================swaping without using third variabl======================");

function swap1(x,y){
    console.log(` Before  Swaping:${x} ${y} `);
    var x=x+y;
    var y=x-y;
    var x=x-y;
    console.log(`After swaping : ${x} ${y}`)
}
swap1(10,25);

console.log("==============================================================================");
function swap3(x,y)
{
    console.log(`Before swaping: ${x} ${y}`);
    var x= x+y;
    var y=x-y;
    var x=x-y;
    console.log(`After swaping :${x} ${y}`)

}
swap3(34,68);
console.log("=============================================================================================");

console.log("==============swaping using third value=================")
function swap5(m,n){
    console.log(`Before swaping : ${m} ${n}`);
    var temp;
    var m=11;
    var n=12;
    var temp=m;
              m=n;
             n=temp;
             
             console.log(`After swaping : ${m} ${n}`)






}swap5(11,12);

console.log("================================================================");

console.log("=============swaping using third variable=====================");

function swap7(m,n){
   
    var temp;
    var m=11;
    var n=12;
    console.log(`Before swaping values: ${m} ${n}`);
    var temp=m;
    var m=n;
    n=temp;
    console.log(`After swaping values: ${m} ${n}`);
}swap(11,12);
swap(45,90);

console.log("===========================================swaping of 3 number================");

function swap9(m,n,o){
   var m=100;
   var n=200;
   var o=300;
   var temp;
   console.log(`Before swaping three values : ${m} ${n} ${o}`);
   var temp=m;

   var m=n;
   var n=o;
   var o=temp;
   console.log(`After swaping three values  : ${m} ${n} ${o}`);


}
swap9(100,200,300);

console.log("=====================swaping of three number==============");

function swap_new(x,y,z){
var x=100;
var y=399;
var z=266;
var temp;
console.log(`Before swaping : ${x} ${y} ${z}`);
var temp=x;
var x=y;
var y=z;
var z=temp;
console.log(`After swaping : ${x} ${y} ${z}`);


}
swap_new(100,399,266);