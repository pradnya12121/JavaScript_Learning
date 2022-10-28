
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Given Array :")
console.log(fruits_seasonal);
console.log("1. Log the first and last element" );
const first_fruit = fruits_seasonal[0];
console.log(first_fruit);
const last_fruit = fruits_seasonal[4];
console.log(last_fruit);
console.log("==================================================================");
console.log(`2. Add element Papaya before the element  "Banana" and then log the array on console`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log("=========================================================================");
console.log(`3.Remove "Mango" from the array`);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log("============================================================================");
console.log(`4. Add element or insert element "Pineapple" at the last position`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log("===============================================================================");
console.log(`5.Insert an element "Dragon Fruit" befroe "Water Melon"`);
fruits_seasonal.splice(4, 0 ,"Dragon Fruit");
console.log(fruits_seasonal);
console.log("================================================================================");
console.log(`6.Replace an element "Orange" with "Kiwi"`);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);
console.log("================================================================================");
console.log(`7.Log the element starting from index 1 to 4`);
const middle_fruit = fruits_seasonal.slice(1 , 4);
console.log(middle_fruit);
console.log("=================================================================================");
console.log("8. Only select last 3 element and log on console : Use the Length Property");
 last_three = fruits_seasonal.slice(4)
console.log(last_three);
console.log("====================================================================================");



