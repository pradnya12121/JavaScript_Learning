console.log("Name : Pradnya Kolase");
console.log("Assignment 5 : forEach");
console.log("====================================================================================");

class Employee{
    constructor(emp_id,emp_name,emp_depth,emp_salary,emp_company){
         this.emp_id=emp_id;
         this.emp_name=emp_name;
         this.emp_depth=emp_depth;
         this.emp_salary=emp_salary;
         this.emp_company=emp_company;
    } 
 }
 const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
 const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
 const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
 const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
 const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
 const emp_vinay =new Employee(88,"Vinayk","IT",75000,"TCS");
 const emp_mahi = new Employee(99,"Mahesh","HR",85000 ,"Infy");
 const array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

 console.log(`1. Get the list of employee names and log new array on console`);
 const new_array_employees=array_employees.map((employee)=>{
       return employee.emp_name;
 })
 console.log(new_array_employees);

 console.log("===================================================================================================");
 console.log("2. Get the list of department and log on console")
 const new_array_employees2= array_employees.map((employee)=>{
return employee.emp_depth
 })
 console.log(new_array_employees2);

 console.log("=======================================================================================================");
 console.log("3. Get the list of employees id's and log on console");
 const new_array_employees3= array_employees.map((employee)=>{
     return  employee.emp_id;
 })
 console.log(new_array_employees3)