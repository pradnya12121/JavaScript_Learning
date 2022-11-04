console.log("Name : Pradnya Kolase")
console.log("Assignment : Arrow Function")
console.log("=================================================================================")
console.log("1.With no args and no return value,log message on console inside arrow function")
let show=()=>{
    console.log(`"Good Evening,Today is Friday"`);
}
show();
console.log("===========================================================================================");
console.log("2.With 3 args and no return value for recived 3 parameters perform the multiplication ");
let display=(arg1,arg2,arg3=5)=>{
     let mul=arg1*arg2*arg3;
     return mul;
     
}
let mul1=display(5,5,2);
console.log(`Multiplication of (5,5,2) is:${mul1}`)
let mul2=display(10,4);
console.log(`Multiplication of (10,4) and default value (5) ${mul2}`)
console.log("===============================================================================================");
console.log("3. With 5 args and return values such as, for recived params it should be addition")

let add=(arg1,arg2,arg3,arg4,arg5)=>{
   let sum=arg1 + arg2 + arg3 + arg4 + arg5;
   return sum;
     
}
let sum1=add(100,100,200,349,756);
console.log(`Additon of (100,100,200,349,756) is :${sum1}`)

 let sum2= add("I am "  , "learning  " ,"ES6 " ," features "  ,"in depth");
 console.log(`Addition of given String :${sum2}`)

 console.log("======================================================================================")