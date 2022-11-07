const arrayOfNumbers=[1,2,3,4,5,6];
const newArrayOfNumbers=arrayOfNumbers.filter((element)=>{
return element>=4;
});
console.log(newArrayOfNumbers)
console.log("============reduce()============")
const newArrayOfNumbers1=arrayOfNumbers.reduce((value,runningTotal)=>{
  return value  +runningTotal;
})



console.log("====== reduce()=====");
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
