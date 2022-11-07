const arrayOfNumbers=[10,20,30,40,50,60,-3];
arrayOfNumbers.forEach((currentValue)=>console.log(currentValue));


arrayOfNumbers.forEach((currentValue,index)=>{
    if(currentValue<0)
    {
        console.log(currentValue,index)
    }
});
console.log("=====for each for set===================")
const setOfNumbers= new Set(arrayOfNumbers);
setOfNumbers.forEach((value)=>{
 console.log(value)
});

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );


