
console.log("1. Define class for Vehicle")

class Vehical
{  
    constructor(name,color,speed,number,model)
    {
        this.name =name;
        this.color=color;
        this.speed=speed;
        this.number=number;
        this.model=model;

        }

 

}
let car =new Vehical("Car","White","80-90kmph","MH-2124","Mahindra Scorpio");

let baik =new Vehical("baik","black","23-29kmph","MH-2345","Yamaha");

let bus =new Vehical("bus","red","25 MB/s","MH-3455","Double-decker");

let truck =new Vehical("truck","brown","85mph","MH-1234","Ford F-150");

let pickup =new Vehical("pikup","yellow","45mph","MH-6789","Tata Ace");
console.log(car);
console.log(baik);
console.log(bus);
console.log(truck);
console.log(pickup);
console.log("=====================================================================================");

console.log("2. Define class for College");

class College {
    constructor(collegeName,department,collegeFee,collegeAddress){
        this.collegeName =collegeName;
        this.department =department;
        this.collegeFee =collegeFee;
        this.collegeAddress=collegeAddress;

    }
}
let engineering=new College("Starwood college of engineering","Mechanical","1,00000","Mumbai");
let degree=new College("Ruia college of engineering","Electrical","2,00000","Pune");
let jrCollege=new College("K J Somaiya college of engineering","Computer","1,50000","Navi-Mumbai");
let srCollege=new College("MCC college of engineering","Civil","90,000","Kerla");
console.log(engineering);
console.log(degree);
console.log(jrCollege);
console.log(srCollege);
console.log("===============================================================================================");

console.log("3.Write function travers_object with one argument and all instence of college");
function travers_object(object){
for (const key in engineering) {
    if (Object.hasOwnProperty.call(engineering, key)) {
        const element = engineering[key];
        console.log(`${key} ${element}`)
    }
}
}

travers_object(engineering);

console.log("==========================================");

function travers_object1(object){
for (const key in jrCollege) {
    if (Object.hasOwnProperty.call(jrCollege, key)) {
        const element = jrCollege[key];
        console.log(`${key} ${element}`)
    }
}
}

travers_object1(jrCollege);
console.log("======================================");

function travers_object2(object){
for (const key in degree) {
    if (Object.hasOwnProperty.call(degree, key)) {
        const element = degree[key];
        console.log(`${key} ${element}`)
    }
}
}


travers_object2(degree);
console.log("=======================")
function travers_object3(object){
for (const key in srCollege) {
    if (Object.hasOwnProperty.call(srCollege, key)) {
        const element = srCollege[key];
        console.log(`${key} ${element}`)
    }
}

}
travers_object3(srCollege);

console.log("===================================================================================================");
console.log("3.1 check car is  instences of College class ");

console.log(car instanceof College);
console.log("======================================================================================================");
console.log("WAP to print Fibonacci series til 7th accurence ")

let num1=0;
let num2=1;
let num=7;
for (let index = 0; index < num; index++) {
    if(index==0)
    {
        console.log(0+" ");

    }
    else if(index==1)
    {
console.log(1+" ");
    }
   else{
    sum=num1+num2;
     num1=num2;
      num2=sum;
    console.log(sum+" ");
   }
}