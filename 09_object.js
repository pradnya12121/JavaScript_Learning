let objectSachin = {
    fullName : "Sachin",
    city:"mumbai",
    age:42,
    address:{
        street:"As Club",
        pinCode:12345,
        city:"Pune",
        state:"MH",
    },
      eat:function()
    {
     let personDetail = `Details are: ${this.fullName}  ${this.city}   ${this.address}`
     return personDetail
    }
    


}
  //  let isAvailable=age in objectSachin;
  //  console.log(`${isAvailable}`);

console.log(Object.entries(objectSachin))
console.log(Object.keys(objectSachin))
console.log(Object.values(objectSachin))
let pDetail = objectSachin.eat()
console.log(`${pDetail}`)
console.log("=================================")
objectSachin.eat();

objectSachin.address.landmark="Durga temple";
console.log(objectSachin);
let personname=objectSachin.fullName;
console.log(personname);
console.log(objectSachin["fullName"]);
objectSachin.pinCode=123456;
console.table(objectSachin);
objectSachin.profession="Angulaer Developer";
objectSachin.fullName="Sachin Ramesh Tendulkar";
delete objectSachin.age;
console.log(objectSachin.address.city);
console.table(objectSachin);
let mnp=Object.keys(objectSachin);
console.log(mnp)

