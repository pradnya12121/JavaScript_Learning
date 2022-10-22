function series(num)
{
let num1=0;
let num2=1;
// let num=10;
// let res=" ";
 for (let index = 0; index < num; index++)
  {
    if(index==0)
    {
        console.log(0);

    }
    else if(index==1)
    {
        console.log(1);

    }
    else
    {
        num3=num1+num2;
        num1=num2;
        num2=num3;
        // res = res +" "+ num3;
       
        
 console.log(num3);

    }
 }
 

}
series(10);