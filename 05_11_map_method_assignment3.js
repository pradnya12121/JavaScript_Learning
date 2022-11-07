console.log("Name:Pradnya Kolase");
console.log("Assignment 3 :map method");
console.log("==========================================================================================================");
console.log("Given Array:");
const array_numbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(array_numbers)
console.log("===========================================================================================================");
console.log(`1. Add 10 into each element and log new array on console using map()`);
const new_array_numbers=array_numbers.map((element,index)=>{
    return element+10;

})
console.log(new_array_numbers);

console.log("=============================================================================================================");

console.log(`2. Square the each array element and log on console `);
const new_array_numbers2=array_numbers.map((element)=>{
    return element*element;
})
console.log(new_array_numbers2);
console.log("==============================================================================================================");
console.log(`3. Add the index value into its corresponding each array element and log new array result on console`);
const new_array_numbers3= array_numbers.map((element,index)=>{
    return     sum=element + index;

})
console.log(new_array_numbers3);

