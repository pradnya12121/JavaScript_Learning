console.log("Name : Pradnya Kolase");
console.log("Assignment :2")
console.log("=================================================================================================================");
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

 console.log(`1. Create map collection with name "map_employees" and entries in such a way that employee id is the key and value is employee object`);

 const map_employees=new Map();
 map_employees.set(22,"emp_anil");
 map_employees.set(33,"emp_radha");
 map_employees.set(55,"emp_rishi");
 map_employees.set(66,"emp_sonali");
 map_employees.set(77,"emp_monika");
 map_employees.set(88,"emp_vinay");
 map_employees.set(99,"emp_mahi");
 
 map_employees.forEach((key,value)=>{
       console.log( ` ${emp_anil.emp_id} ==> Name: ${emp_anil.emp_name} , Dept : ${22,emp_anil.emp_depth} , Company: ${22,emp_anil.emp_company} , Salary: ${22,emp_anil.emp_salary}`)
        
     })

    map_employees.forEach((key,value)=>{
     console.log(`${emp_radha.emp_id} ==>  Name:  ${emp_radha.emp_name} , Dept : ${33,emp_radha.emp_depth} , Company: ${33,emp_radha.emp_company} , Salary: ${33,emp_radha.emp_salary}`)
    })
          map_employees.forEach((key,value)=>{
      console.log(`${emp_rishi.emp_id} ==>  Name:  ${emp_rishi.emp_name} , Dept : ${33,emp_rishi.emp_depth} , Company: ${33,emp_rishi.emp_company} , Salary: ${33,emp_rishi.emp_salary}`)
   })
   map_employees.forEach((key,value)=>{
     console.log(`${emp_sonali.emp_id} ==>  Name:  ${emp_sonali.emp_name} , Dept : ${33,emp_sonali.emp_depth} , Company: ${33,emp_sonali.emp_company} , Salary: ${33,emp_sonali.emp_salary}`)
    })  
       map_employees.forEach((key,value)=>{
      console.log(`${emp_monika.emp_id} ==>  Name:  ${emp_monika.emp_name} , Dept : ${33,emp_monika.emp_depth} , Company: ${33,emp_monika.emp_company} , Salary: ${33,emp_monika.emp_salary}`)
    })

    map_employees.forEach((key,value)=>{
     console.log(`${emp_vinay.emp_id} ==>  Name:  ${emp_vinay.emp_name} , Dept : ${33,emp_vinay.emp_depth} , Company: ${33,emp_vinay.emp_company} , Salary: ${33,emp_vinay.emp_salary}`)
    })
    map_employees.forEach((key,value)=>{
     console.log(`${emp_mahi.emp_id} ==>  Name:  ${emp_mahi.emp_name} , Dept : ${33,emp_mahi.emp_depth} , Company: ${33,emp_mahi.emp_company} , Salary: ${33,emp_mahi.emp_salary}`)
   })

   console.log("==============================================================================================================")

   let map_employees1= new Map();
 map_employees1.set(22,emp_anil);
 map_employees1.set(33,emp_radha)
 map_employees1.set(55,emp_rishi)
 map_employees1.set(66,emp_sonali)
 map_employees1.set(77,emp_monika)
 map_employees1.set(88,emp_vinay)
 map_employees1.set(99,emp_mahi);
 map_employees1.forEach((key,values)=>{
     console.log(`${values}===>`,key);
 })