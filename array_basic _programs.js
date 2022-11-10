const array=[1,6,5,3,11,23,4];

console.log(array);

array.forEach((element)=>{
    console.log(element)
})

console.log("=================================");
console.log("===========odd indexd elemnt================");
array.filter((element,index)=>{
    if(index%2!==0){
        console.log(element)
    }

})
console.log("==============print reverse order array===============");
// array.reverse();
// console.log(array);
console.log("===================last element using length property============");
let last=array[array.length-1];
console.log(last);

console.log("============last element in array using length peoperty=========");
let last_element=array[array.length-1];
console.log(last_element);
console.log("============third last element============")
let third_last=array[array.length-3];
console.log(third_last);
console.log("=============third last elemnt using slice============");
console.log("================insert elemnt beginig of array==============");
array.unshift(90);
console.log(array);
console.log("===================replace the elemnt middle=============");
array.splice(3,3,44,67);
console.log(array);
console.log("================add element without replacing============");
array.splice(2,0,56,34);
console.log(array);
console.log("===============add elemnt 2 add end of the array");
array.push(40,26);
console.log(array);
console.log("==============replace last element  with element  9========");
array.splice(10,9,25,56,90,79,290,78,89,90,90)
console.log(array);
console.log("==============find elemnt 5 from given array=======================");
// let th_elemnt =array.slice(0,5);

array.filter((element,index)=>{
    if(index==5){
        console.log(element)
    }

})

console.log("===========remove last element from the array=========");
array.pop();
console.log(array);
console.log("==============deep clone====================")
// let new_array=[...array];
let new_array=JSON.parse(JSON.stringify(array))
console.log(new_array);
new_array.push(109);
console.log(new_array)
console.log(array);
array.pop(78);
console.log(array);
console.log(new_array);