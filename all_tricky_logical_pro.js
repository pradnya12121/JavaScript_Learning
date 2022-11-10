//  fibonacci series =  0 1 1 2

function fibo(num){
    var num1=0;
     var num2=1;
   //   var num3;
    for (let index = 0; index < num; index++) {
       if(index==0)
       {
           console.log(0);
       }
       else if(index==1)
       {
           console.log(1);
       }
        var num3=num1+num2;
        num1=num2;
        num2=num3;
        console.log(num3)
    }
    
   
   }fibo(8);
   
   console.log("====================fibonacci series==================");
   
   function fib(arg){
   var num1=0;
   var num2=1;
   for (let index = 0; index < arg; index++) {
       if(index==0){
           console.log(0)
       }
       else if(index==1){
           console.log(1)
       }
       var num3=num1+num2;
       num1=num2;
       num2=num3;
       console.log(num3)
       
   }
   }fib(6)
   
   console.log("============factorial of number===========");
   //  5!=5*4*3*2*1
   
   function fact(num){
        if(num==0 || num==1) {
           console.log(1);
        }
        else{
       for (let index = num-1; index >= 1; index--) {
           num=num*index;
           
           
       }
        }
        
       console.log(num)
   
       
   }fact(5)
   
   function fc(num){
       if(num==0 || num==1)
       {
           console.log(1);
       }else{
       for (let index = num-1; index >=1; index--) {
           num=num*index
           
       }
   }
       console.log(num)
   
   }fc(6)
   
   console.log("=========first 7 even number===============");
   
   for (let index=0; index <=14; index++) {
   if(index%2==0)
       
   {
       console.log(index)
   }
   }
   
   
   console.log("===============chk 11 prime number========")
   function prime(num){
       if(num===1){
           return false
       }
       else if(num===2){
           return true
       }
       else{
           for (let index = 2; index < num; index++) {
               if(num%index===0){
                   return false
               }
        
               
           } 
           return true;
       }
   
   }console.log(prime(11));
   
   console.log("============number is prime or not===========");
   function prime1(n){
       if(n===1){
          return false 
       }
       else if(n===2){
           return true
       }
       else{
           for (let index = 2; index < n; index++) {
           if(n%index===0){
             return  false
           }
               
           }
       }return true
   
   }
   console.log(prime1(11))
   console.log(prime1(35))