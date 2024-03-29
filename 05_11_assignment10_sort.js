console.log("Name : Pradnya Kolase");
console.log(`Assignment 10 : sorting object(array)`);
console.log("==============================================================================================================");
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

 console.log(`1. Sort the array_employees in ascending order of employees id ang log detail id,Name,Department`);
  let sorted_array=array_employees.sort((ob1,ob2)=>{
    ob1.emp_id > ob2.emp_id ? 1: -1 ;
 })
 sorted_array.forEach((employee) => {     
   console.log(`Empolyee ID: ${employee.emp_id} Employee Name: ${employee.emp_name} Employee Department: ${employee.emp_depth} `)
 });

 console.log("=======================================================================================================");
 console.log(`2. Sort the array_employees in ascending order of employee department & log on id ,dept, and company`)
array_employees.sort(function(value1,value2){
if(value1.emp_depth > value2.emp_depth){
     return 1;
}  
if(value1.emp_depth < value2.emp_depth) 
{
     return -1
} 
})

array_employees.forEach((employee) => {     
     console.log(`Empolyee ID: ${employee.emp_id} Employee Name: ${employee.emp_name} Employee Department: ${employee.emp_depth} `)
   });

   console.log("==============================================================================================================");
   console.log(`3. Sort the array_employees in descending order of employees salary and log on Names,salary & company`)
   array_employees.sort(function(value1,value2){
     if(value1.emp_salary > value2.emp_salary){
          return -1;
     }  
     if(value1.emp_salary <value2.emp_salary) 
     {
          return 1
     } 
     })
     
     array_employees.forEach((employee) => {     
          console.log(` Employee Name: ${employee.emp_name} Employee Salary: ${employee.emp_salary} Company Name:${employee.emp_company} `)
        });
     console.log("==============================================================================================");
     console.log(`4.Sort the employee array in ascending order of company name and log company, id,Name, Salary,depth`);

     array_employees.sort(function(value1,value2){
          if(value1.emp_company > value2.emp_company){
               return 1;
          }  
          if(value1.emp_company < value2.emp_company) 
          {
               return -1
          } 
          })
          
          array_employees.forEach((employee) => {     
               console.log(`Company Name:${employee.emp_company}  Empolyee ID: ${employee.emp_id} Employee Name: ${employee.emp_name} Employee Department: ${employee.emp_depth} `)
             });

             

             