console.log("Name: Pradnya Kolase");
console.log(`Assignment 7 : reduce()`);
console.log("======================================================================================================");
console.log("Given array:");
const array_numbers=[20,11,40,25,37,49,9,60,2,19];
console.log(array_numbers);
console.log("======================================================================================================");
console.log("Findt the sum of all numbers")
const new_array_numbers=array_numbers.reduce((runningTotal,value)=>{
   return runningTotal + value
},0)
console.log(`sum of all numbers: ${new_array_numbers}`);
console.log("==========================================================================================================");
console.log(`Find sum of all even  numbers`);
const new_array_numbers1 = array_numbers.filter((element)=>{
      return element%2==0
})
console.log(new_array_numbers1)
const new_array_numbers3 =new_array_numbers1.reduce((runningTotal,value)=>{
   return runningTotal + value 
})
console.log(`Sum of all even number : ${new_array_numbers3}`)

