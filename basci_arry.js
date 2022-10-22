var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
arrayOfNumbers.push(88);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

//arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);

// let otherArray = arrayOfNumbers; // Shallow Copy
let otherArray = [...arrayOfNumbers];
arrayOfNumbers[3]  = 44;
console.table(arrayOfNumbers);
console.table(otherArray);
