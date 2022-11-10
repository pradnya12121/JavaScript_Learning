const array=[1,6,5,3,11,23,4];
const second_array=[3,6,9,7,6];
console.log("===========merge two array==============");
const third_aaray=[...array,...second_array];
console.log(third_aaray);
console.log("================merge two array second way===========");
const third_aaray4=array .concat(second_array);
console.log(third_aaray4);
console.log("==========reverse array=============")
array.reverse();
console.log(array);
console.log("===============remove duplicate elemnts=============");
let new_set= [...new Set(third_aaray)];
console.log(new_set);
console.log("==========sum of all array element===============");

let sum=third_aaray.reduce((runningTotal,value)=>{
return runningTotal+value
})
console.log(sum);
console.log("=================sum of square of all elemnt========");
let new_arr=third_aaray.map((Element)=>{
    return Element*Element
}
)
console.log(new_arr)
let sum_square= new_arr.reduce((runningTotal,value)=>{
return runningTotal+value
})
console.log(sum_square);

console.log("===================multiplication of all array elemnt============");
// const  array1=[4,8,9,27,5,4,08,9]
let mul= third_aaray.reduce((prevValue,currentValue)=>
    prevValue *currentValue);

console.log(mul);
console.log("=======sort given array in ascending order=====================");
const array1=[1,6,5,3,11,23,4]
const new_arr1=array1.sort((a,b)=>{
return a > b ? 1 : -1
})
console.log(new_arr1);
console.log("============sort descending inorder======");
const new_arr12=array1.sort((a,b)=>{
    return a >b ?-1 :1
})
console.log(new_arr12)

console.log("==================second largest number in array==========");
const new_array5=array1.sort((a,b)=>{
    return a > b? 1:-1
})
console.log(new_array5);
let scon_larg=new_array5[new_array5.length-2];
console.log(scon_larg);

console.log("=================second smallest number in array=============");
let scon_small=new_array5[1];
console.log(scon_small)
console.log("====================sum of individual value form the given array==============");

const array6=[3,5,6,7,8,13];
const array7=[1,0,2,3,4];

const array9=[];
for (let index = 0; index< array6.length && array7.length; index++) {
    array9.push(array6[index]+array7[index])
    
}
console.log(array9)


array_one=[1,0,2,3,4,6,14];
array_two=[3,5,6,7,8,13];
array_three=[];
for(i=0; i<array_one.length&&array_two.length ;i++) 
{
       array_three.push(array_one[i] + array_two[i])
}


console.log(array_three)



array_four=[];
array_one.map((index)=>{
   if(index<array_one.length&&array_two.length) 
   {
    array_four.push(array_one[index]+ array_two[index])
   }
})
console.log(array_four)