
console.log(`3. Clone the step 1 and step2 (bank_sbi using object.assign) ang log result using string template`)
const  bank_sbi =
{   bank_name: "SBI",
    branch_name :"Kurla",
    IFSC_code  :"163677",
    account_number :"100003456"
}

const bank_location =
{  
   street:"Jungal Mangal road",
   city :"Mumbai",
   pin_code:"400078"
      
}

const clone_bank = Object.assign({},bank_sbi);
console.log`Clone bank_sbi using Object.assign ${clone_bank}`;
// console.log(`3. Clone the step 2 (bank_location using object_assign)`)
const clone_bank_location = Object.assign({},bank_location);
console.log`Clone bank_location using Object.assign ${clone_bank_location}`
console.log(`Clone the step 1 and step 2(bank_sbi using ...spread operator) and log result using string templateS`);
 const clone_bank2 = {...bank_sbi};
 console.log`3. Clone bank_sbi using ...spread operator ${clone_bank2}`
 const clone_bank_location2 = {...bank_location};
 console.log `Clone the bank_location using ...spread operator ${clone_bank_location2}`;
 console.log("================================================================================================");
 console.log("4. Create the object using literal rate_of_interest with following properties and  ");

 const rate_of_interest =
 {   
    home_loan_interest:"7% p.a",
    personal_loan_interest:"6% p.a",
    due_interest:"3% p.a"

 }
 console.log(rate_of_interest)
 console.log("=====================================================================================================");
 console.log("5. Merge step 1 and step 2 and step 4 object  into new object")
 const sbi_details = Object.assign({},bank_sbi,bank_location,rate_of_interest)
console.table(sbi_details);
console.log("=======================================================================================================");
console.log("6. Traverse this merge object using loop");
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(`${element} ${key}`);
        
    }
}
