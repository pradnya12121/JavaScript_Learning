console.log("Name : Pradnya Kolase");
console.log(`Assignment 6 : filter () `);
console.log("=================================================================================================");
console.log("Given array:");
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(array_numbers);
console.log("====================================================================================================");
console.log("1. Find out all the numbers which are greater than 50 and log on console");
const new_array_numbers= array_numbers.filter((element)=>{
      return  element>50;
      
})
console.log(`Number Greater then 50: ${new_array_numbers}`);
console.log("=====================================================================================================");
console.log("2. Find out all the even number and log on console");
const new_array_numbers1= array_numbers.filter((element)=>{
    return  element%2==0;
})
console.log(`Evan Number: ${new_array_numbers1}`);
console.log("===================================================================================================");
console.log("3. Find out all the odd number and log on console");
const new_array_numbers2= array_numbers.filter((element)=>{
    return  element%2!==0;
})
console.log(`Odd Number: ${new_array_numbers2}`);
console.log("=================================================================================================");
console.log("4. Find out all the number which are multiple of 5");
const new_array_numbers3= array_numbers.filter((element)=>{
    if(element%5==0)
    {
        console.log(`${element}`);
    }
})
console.log("==================================================================================================");
console.log("5. Find all the numbers which are between 20 to 50");
const new_array_numbers4=array_numbers.filter((element)=>{
    if(element>20 && element<50)
    {
        console.log(`${element}`)
    }
})


