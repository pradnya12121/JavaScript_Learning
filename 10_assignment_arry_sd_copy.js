
console.log("1.Perform shallow clone on arry_num, update clone with values--->55,56 before value 90 and log original and clone arry ");

console.log("Given arry :")
const arry_num=[20,3,4,56,90,400]
console.log(arry_num);
console.log("Shallow Copy of given arry")
const new_arry_num=arry_num;

console.log(new_arry_num);
console.log("update the cloned")
new_arry_num.push(55);
new_arry_num.push(56);
console.log(new_arry_num);
console.log("original arry");
console.log(arry_num)

 console.log(new_arry_num)
  
console.log("=================================================");
console.log("Perform deep clone using spread opretor,Update original arry i.e arry_num with values 10,25 at least position and log original and clone");
console.log("Deep Clone");
console.log("Update original array :")
let other_arry=[...arry_num]
arry_num.push(10);
arry_num.push(25);
console.log("Original Arry update 10 and 25 ")
console.log(arry_num);
console.log("New Arry");
console.log(other_arry);
console.log("==============================================================");
console.log("3. Given other arry---> arry_even =[2,30,14,8] Merge or concat this aary with aary_num");
const arry_even =[2,30,14,8];
const arry_odd=[...arry_num,...arry_even]
console.log(arry_odd);





