console.log("Name: Pradnya Kolase");
console.log(`Assignment 8 : filter() and reduce()`);
console.log("====================================================================================================");
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
 const array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
 console.log("1. Find all the employees from wipro company")
 const new_array_emps=array_emps.filter((employee)=>{
    if(employee.emp_company=="Wipro")
    {
        console.log(`Employee Id :${employee.emp_id} Employee Name : ${employee.emp_name} Employee Dept: ${employee.emp_depth} Employee Salary:${employee.emp_salary} Company Name :${employee.emp_company}`)
    }

 }) 
 console.log("=========================================================================================================");
 console.log(`2. Find all the employees from  "IT" or "HR' dept`);
 const new_array_emps1= array_emps.filter((employee)=>{
    if(employee.emp_depth=="IT" || employee.emp_depth=="HR")
    {
        
        console.log(`Employee Id :${employee.emp_id} Employee Name : ${employee.emp_name} Employee Dept: ${employee.emp_depth} Employee Salary:${employee.emp_salary} Company Name :${employee.emp_company}`)
    }
 })
 console.log("============================================================================================================");
 console.log('3. Find all the employees whose emp_id  are greater than 50 ');
 const new_array_emps2= array_emps.filter((employee)=>{
    if(employee.emp_id>50)
    {
        
        console.log(`Employee Id :${employee.emp_id} Employee Name : ${employee.emp_name} Employee Dept: ${employee.emp_depth} Employee Salary:${employee.emp_salary} Company Name :${employee.emp_company}`)
    }
 })
 console.log("================================================================================================================");
 console.log(`4. Find all the employees whose name start with letter 'A' or 'V' or 'M'`);
 const new_array_emps3 = array_emps.filter((employee)=>{
    if(employee.emp_name.startsWith('A') || employee.emp_name.startsWith('V') || employee.emp_name.startsWith('M')){
        console.log(`Employee Id :${employee.emp_id} Employee Name : ${employee.emp_name} Employee Dept: ${employee.emp_depth} Employee Salary:${employee.emp_salary} Company Name :${employee.emp_company}`)
    }  
    })

    console.log("=============================================================================================================");
    console.log(`5. Find all the average salary of the employees for all the department`);
    let sum=0;
    index=array_emps.length;
    array_emps.forEach((employee)=>{
        return   sum= (sum +employee.emp_salary)

    })
    console.log(`${sum}`)

    index=array_emps.length
    //   console.log(index)
      array_emps.forEach((Employee)=>{
        avg=sum/index;
      })
      console.log(`Average Salary : ${avg}`);

      console.log("============================================================================================================");
      console.log(`6. Find the average salary of "IT" department `)
    //    let sum1 =0;
       count=0;
      const new_array_emps5= array_emps.filter((employee,index)=>{
     if(employee.emp_depth=="IT"){
        // sum1= sum1+employee.emp_salary
        //  console.log(`Total Salary:${sum1}`)
        count=count + employee.emp_salary
    
    }
    
});
 console.log(`${count}`)
// var avg;
// avg= (sum1/3);
// console.log(` Average Salary: ${avg}`);
let new_array_emps9=[]
array_emps.filter((employee)=>{
    if(employee.emp_depth=="IT"){
   new_array_emps9.push(employee.emp_salary)
    }
});
console.log(new_array_emps9);
 let len=new_array_emps9.length;
 console.log(len);

let sum3=new_array_emps9.reduce((runningTotal,value,index)=>{
    runningTotal= runningTotal + value;
    
        avg= runningTotal/len
    return runningTotal;
})
console.log(`Average salary of IT department :${avg} `)










    
    //   const  new_array_emps7= new_array_emps5.reduce()
      
     
      
    



 