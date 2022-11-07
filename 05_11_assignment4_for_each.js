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
  console.log(`Name :Pradnya Kolase `);
  console.log(`Assignmen 4 : forEach()`);
  console.log("=========================================================================================")
  console.log("1.TCS Working Employee Details")
  array_employees.forEach((Employee)=>{
if(Employee.emp_company=="TCS"){
     console.log(`Employee Name : ${Employee.emp_name}   Company Name : ${Employee.emp_company}`)
}
  });
  console.log("========================================================================================");
  console.log("2.Find the employees with salary greater than equal 50000 log details on console");

  array_employees.forEach((Employee)=>{
     if(Employee.emp_salary>=50000)
     {
          console.log(`Employee ID: ${Employee.emp_id} Employee Name: ${Employee.emp_name}  Employee Dept:${Employee.emp_depth}  Employee Salary:${Employee.emp_salary} Company Name:${Employee.emp_company}` )
     }
  })
  console.log("================================================================================================");
  console.log("3.Find sum of all employees salary and log on console");
  let sum=0;
  array_employees.forEach((Employee)=>{
        sum=sum+Employee.emp_salary;
  } )
  console.log(sum)
  console.log("================================================================================================");
  console.log("4. Find the average salary and log on console")
     
  index=array_employees.length
//   console.log(index)
  array_employees.forEach((Employee)=>{
    avg=sum/index;
  })
  console.log(avg);
  console.log("======================================================================================================");
  console.log(`5.Find the 'IT' Department employees whose salary is greater thanor equal to 75000 and log complete employee detail`);

  array_employees.forEach((Employee)=>{
     if(Employee.emp_depth=='IT' && Employee.emp_salary>=75000)
     {
          console.log(`Emp ID: ${Employee.emp_id}  Emp Name: ${Employee.emp_name}  Emp Dept: ${Employee.emp_depth} Emp Salary:${Employee.emp_salary} Company Name: ${Employee.emp_company}`)
     }

  });

