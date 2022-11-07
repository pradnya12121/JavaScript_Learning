console.log("Name : Pradnya Kolase");
console.log(`Assignment 9 : sort()`);
console.log("================================================================================================");
console.log(`Given array:`)
const array_roll_numbers=[113,45,46,11,32,45,109,799,56,45];
console.log(array_roll_numbers);
console.log("====================================================================================================");
console.log("1. Reverse the array");
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log("====================================================================================================");
console.log(`2. Use the sort() method as it is without any custom sorting logic without (passing any argument)`)
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`==> Use only sort() method and without custom logic "issue is found :- Array is not properly sort they only prefered the first digit according to that sequence they sorted"`);
console.log("===========================================================================================================");
console.log(`3. Sort the array in ascending order`);
array_roll_numbers.sort((a,b)=>{
return a > b ? 1 :-1;
})
console.log(array_roll_numbers)
console.log("=============================================================================================================");
console.log(`4. Sort the array in descending order`);
array_roll_numbers.sort((a,b)=>{
    return a > b ? -1 :1;
    })
console.log(array_roll_numbers)
console.log("=========================================================================================================");
 console.log(`5. Sort the array in descending  order with using reverse() `);
 array_roll_numbers.sort((a,b)=>{
        return a > b ? 1 :-1;
  })
// console.log(array_roll_numbers);
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log("============================================================================================================");
console.log(`6. Find the greatest number from array`);
let largest=0;
array_roll_numbers.forEach((value)=>{
        if(largest<value)
        largest = value;
        

})
console.log(`Largest number :${largest}`)
console.log("===============================================================================================================");
console.log("7. Find the smallest number from array");

let smallest;
array_roll_numbers.forEach((value)=>{
        if(smallest>value);
        smallest = value;
         
})

console.log(`Smallest number :${smallest}`)
console.log("==============================================================================================================");
console.log("8. Remove Duplicate from an array");
const new_array_numbers = [...new Set(array_roll_numbers)];
console.log(new_array_numbers);
