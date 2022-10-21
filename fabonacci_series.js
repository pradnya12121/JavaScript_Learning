let num1=0;
let num2=1;
let num=8;
for (let index = 0; index < num; index++) {
    if(index==0)
    {
        console.log(0+" ");

    }
    else if(index==1)
    {
console.log(1+" ");
    }
   else{
    sum=num1+num2;
     num1=num2;
      num2=sum;
    console.log(sum+" ");
   }
    
    
}

