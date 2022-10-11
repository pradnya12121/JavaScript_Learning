console.log("To log output on console only use string template with FE :-");

var stringAssignment1 =function()
{
   var dream="My Dream Company is";
   var company=`"Infosys"`;
   console.log(`${dream} ${company}`);

}
stringAssignment1();

console.log("====================================================================================================");

console.log("Create 3 variables for my hobbies are given as above:-");

 var stringAss=function()
 {  var hobby_one=`1)Reading Book`;
    var hobby_two=`2)Cooking`;
    var hobby_three=`3)Drawing`;
    console.log(`My Hobbies are :${hobby_one} `);
    console.log(`${hobby_two} `);
    console.log(`${hobby_three}`);
  
    var cancat_string=hobby_one.concat(hobby_two,hobby_three);
    console.log("Concat Above String :")
    console.log(cancat_string);
    console.log("=====================================================================================================");

}
  stringAss();
  
  