console.log("Step 1. Write normal fuction with argument and useing ternary opretor :");

function maleMarriageEligibility(gender , age ,boyName)
{
    var result= gender=="male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage` 
    : `hey ${boyName} you are not eligible for Marriage`;
    console.log(`Message Show : ${result}`);
}
maleMarriageEligibility("male" , 25 ,"Bilgates");
maleMarriageEligibility("male" , 17 ,"Stew Jobs");



console.log("========================================================================================================================");
console.log("Step 2. Write normal fuction with argument and useing  IF Block : ");

function femaleMarriageEligibility( gender , age , girlName)
{
    if(gender=="female" && age>=18)
    {
       
        console.log(` Message Show : Hey ${girlName} you are eligible for Marriage`);
    }
    else
    { 
        console.log(` Message Show :Hey ${girlName} you are Not eligible for Marriage`);

    }

}
 femaleMarriageEligibility("female" , 16 ,"Jenifer" );

 
 femaleMarriageEligibility("female" , 27 ,"Malinda Gates" );

 
console.log("========================================================================================================================");


