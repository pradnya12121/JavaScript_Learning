console.log("Q 1.WAP to find factorial of given number");
function fact(arg)
{var count=5;
    for (let index = 1; index < 5; index++) {
        
        count *=index;
    }
console.log(count);
}fact(5);

console.log("========================================================");

console.log("Q .WAP to find factors of 225");

function factor(arg)
{
    for (let index = 1; index < 225; index++) {
        
       if(arg%index==0) {
           console.log(index);
       }
    }
}
factor(225)
console.log("===========================================================");
 console.log("Q. Assignment ")
 function count_chars(arg)

 {
    var tir="a";
 count=0;
    for (let index = 0; index < arg.length; index++) {
        var char=arg.charAt(index);
        if(tir.includes(char)){

            count++;
        }
        
    }

 console.log(count);
 }
 count_chars("I am Learning JavaScript");
 console.log("===================")
 count_chars("My Favourite movie is lagan");