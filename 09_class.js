class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }


}
// sachin.details();
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
sachin.details();
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);
// console.log(s1 instanceof Student);
console.log(sachin instanceof Person);

console.log("=================================")


