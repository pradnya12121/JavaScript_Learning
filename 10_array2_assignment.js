
console.log("3.Create the file 10_array_assignment.js")
const arrayOfNames =['Kamat','Memon','Nashpati','Taimur','Memon','Kamat','Andy']
console.log(`Givan Array :[${arrayOfNames}]`);
console.log("=============================================================================");
const  newArrayOfNames = [...new Set(arrayOfNames)];
console.log(`Remove Duplicate Name : ${newArrayOfNames}`);
console.log("=============================================================================");
const duplicate= arrayOfNames.length-newArrayOfNames.length
console.log(`Duplicate element remove: ${duplicate}`);
console.log("=================================================================================");
const count=newArrayOfNames.length
console.log(`Count of Unique element :${count} `);
console.log("=================================================================================");