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
console.log("Name : Pradnya Kolase");
console.log("Assignment : 02")
console.log("==================================================================================");
console.log(`1. Find the all the employees working in 'TCS' and log only employee name and company name on console`)

for (const iterator of array_employees) {
    if(iterator.emp_company=="TCS")
    {
        console.log(`Employee Name :${iterator.emp_name}  ||  Company Name : ${iterator.emp_company}`)
    }
}
console.log("===========================================================================================");

console.log(`2. Find the 'Finance' department employees, log only department and employee name on console`);
for (const iterator of array_employees) {
    if(iterator.emp_depth=="Finance")
    {
        console.log(`Departmen Name :${iterator.emp_depth} || Employee Name : ${iterator.emp_name}`)
    }
}
console.log("===========================================================================================");
console.log(`3. Find the employees whose name starts with 'R' and complete employee detail on console`);
for (const iterator of array_employees) {
    if(iterator.emp_name.startsWith("R")){
        console.log(`Complete employee detail Whose Name start with 'R' :  ${iterator.emp_id} || ${iterator.emp_name} ||${iterator.emp_depth}|| ${iterator.emp_salary} ||${iterator.emp_company}`)

    }
    
}
console.log("=================================================================================================");
console.log(`4. Find the employees whose salary is greater than 70000 and emp_name,company_name, and salary on console`)
for (const iterator of array_employees) {
    if(iterator.emp_salary>70000)
    {
        console.log(`Employees whose salary >70000 : ${iterator.emp_name}|| ${iterator.emp_company}|| ${iterator.emp_salary}`)
    }
    
}
console.log("=======================================================================================================");
console.log(`5. Find the emp's whose salary greater than or equal 50000 and from 'IT' department, log complete emp details`)
for (const iterator of array_employees) {
    if(iterator.emp_salary>=50000 && iterator.emp_depth=="IT"){
        console.log(`Employee whose salary >=50000:${iterator.emp_id} || ${iterator.emp_name} ||${iterator.emp_depth}|| ${iterator.emp_salary} ||${iterator.emp_company}`)

    }
    
}
console.log("====================================================================================================================");
console.log(`6. Find out all the employees from company 'Infy' and log complete details on console`)
for (const iterator of array_employees) {
      if(iterator.emp_company=="Infy"){
        console.log(`Employee from 'Infy' company:${iterator.emp_id} || ${iterator.emp_name} ||${iterator.emp_depth}|| ${iterator.emp_salary} ||${iterator.emp_company}`)
      }

}
console.log("======================================================================================================================");