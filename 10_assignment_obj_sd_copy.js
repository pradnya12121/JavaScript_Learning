console.log("5. Create employee_info object")
const employee_info ={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"

    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    moibles:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
    
}
console.log("a. Log Details as given above:");
 console.log(employee_info.address);
 console.log("b.Mobile details");
 console.log(employee_info.moibles)

console.log("========================================================================");
console.log("Deep copy using (...spread opretor)");
var student={...employee_info}
console.log(student);
student.address.locality.street="Chinch Pokali";
student.moibles[0]="8104 564 123";
console.table(student);
console.table(employee_info);
console.log("After updating street and mobile number in clone object,it also change in original object hence spread opreator is not working on nested object");
console.log("=========================================================================");
console.log("Deep copy using JSON.strigfy()");
 var student = JSON.parse(JSON.stringify(employee_info))

employee_info.salary.july_month="80,000";
employee_info.address.country="United Kingdom";
console.log(employee_info.salary);
console.log(student.salary);
console.log("=======================================================================");
console.log(employee_info.address);
console.log(student.address);


