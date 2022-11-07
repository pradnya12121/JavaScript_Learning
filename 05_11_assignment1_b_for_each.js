console.log(`Name: Pradnya Kolase`);
console.log(`Assignment : forEach()`);
console.log("==========================================================================================================;")

console.log("Given array :")
const array_numbers= [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`[${array_numbers}]`);
console.log("=====================================================================================================");
console.log(`1. Log the array element with its index using forEach() with arrow function`);
const new_array_numbers= array_numbers.forEach((currentValue,index)=>{
    console.log(`${currentValue}    ${index}`)
});


console.log("=======================================================================================================");
console.log("2. Find the positive numbers and log on console");
const new_array_numbers1=array_numbers.forEach((currentValue)=>{
    if(currentValue>0)
    {
        console.log(currentValue)
    }
});
console.log("=========================================================================================================");
console.log("3. Find negative numbers and log on console using arrow function");
const  new_array_numbers2= array_numbers.forEach((currentValue)=>{
if(currentValue<0)
{
    console.log(currentValue)
}

})
console.log("=========================================================================================================");
console.log(`4. Find the even numbers and log on console using forEach() with arrow function`);
const new_array_numbers3= array_numbers.forEach((currentValue)=>{
if(currentValue%2==0)
{
    console.log(currentValue)
}

});
console.log("=========================================================================================================");
console.log(`Find the sum of all element from array_numbers and log on sum value on console`)
let sum=0;
const new_array_numbers4 = array_numbers.forEach((currentValue)=>{
  
    sum =sum + currentValue;
    

})
console.log(sum);
console.log("=========================================================================================================");
console.log("6. Log the only even positioned array value on console .forEach loop with arrow function prefered");
const new_array_numbers5= array_numbers.forEach((currentValue,index)=>{
    if(index%2==0)
    {
        console.log(currentValue)
    }
});
console.log("============================================================================================================");
console.log(`Log odd positioned array values on console if it is negative`);
const new_array_numbers6= array_numbers.forEach((currentValue,index)=>{
    if(index%2!==0 && currentValue<0)
    {
        console.log(currentValue);
    }
})
console.log("===========================================================================================================");




