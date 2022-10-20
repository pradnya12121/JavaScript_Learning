let teacher = {
    FullName :"Smita Gore",
    Qualification : "Msc",
    // Age :45,
    contactNo :8104834562,
     degree:{
        PHD : "Adv Computing",
        BEd  : "Maths",
        Engineering :"Electronics & Telecommunication",
        MEd :"Chemistry",
        certificate :{
            certificateName :"TEFL Certificate",
            certificateName2 :"Certificate in Advance Computing",
            certificateName3 :"Certificate in IFE course",
            certificateName4  :"Certificate in Hacker Rank",

        },
        teaching:function(){
            let allDegree =  (`Teacher Degrees are :${this.PHD}   ${this.BEd}   ${this.Engineering}   ${this.MEd}`)
         return allDegree
      
          }
         
    
    }
    
   
}
console.log("");
 let aDegree =teacher.degree.teaching()
 console.log(`${aDegree}`);
 console.log("====================================================================")
//  console.log("");
 console.log(`Update New Property Age : 45`);
teacher.Age=45;
console.log(teacher);
console.log("=====================================================================");
console.log(`Modifiy Existing property  "FullName "`)
teacher.FullName="Smita Ramesh Gore";
console.log(teacher)
console.log("=====================================================================");
console.log("Delete any one Certificate from nested object");
console.log("Total certificate before delete :")

console.log(teacher.degree.certificate)
console.log("====================")
console.log("Total certificate After Delete");
delete teacher.degree.certificate.certificateName2

console.log(teacher.degree.certificate)
console.log("======================================================================");
console.log("Add new Certificate in nested Object");
teacher.degree.certificate.certificateName5="Advance Computing";
console.log(teacher.degree.certificate);
console.table(teacher.degree.certificate);



// console.table(teacher);