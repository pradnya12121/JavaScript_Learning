var stringHandsOn=function()
{ 
    console.log(" 1. With the help of given below String We can perform string operation")
    var sentence="    Hey you are doing good, keep it up      ";
    

    console.log(`${sentence}`);
    console.log("==================================================================================================");
    var total_length=sentence.length;
    console.log(` 2. Total Lenght Of Given String :- ${total_length}`);
    
    console.log("==================================================================================================");
    
    var trimResult = sentence.trim();
    console.log(` 3. Remove the leading and trailing extra spaces :-  ${trimResult.length}`);
    console.log("==================================================================================================");
    var finalResult=total_length-trimResult.length;
    console.log(` 4. Total number of extra spaces :- ${finalResult}`);
    console.log("==================================================================================================");
    console.log(` 5. First character After trim  :-${trimResult.charAt(0)}`);
    console.log(`Last character After trim  :-${trimResult.charAt(33)}`);
    console.log("==================================================================================================");
    var sp=trimResult.split(" ");
    console.log(sp);
    console.log(` 6. Total words avilable in the string :- ${sp.length}`);
    console.log("==================================================================================================");
    console.log(` 7. Index of word "good" from given string :- ${trimResult.indexOf("good")}`);
    
    console.log("==================================================================================================");
    console.log(` 8. Substring starting from index 22 using substring :- ${trimResult.substring(22)}`);
    console.log(`Substring starting from index of 22 using slice :- ${trimResult.slice(22)} `);
    
    console.log("==================================================================================================");
    console.log(` 9. Check, is string ends with word "up" :- ${trimResult.includes("up")}`);
    
    console.log("==================================================================================================");
    console.log( ` 10. Check, is string ends with word "Hey" :- ${trimResult.includes("Hey")}`);

}
stringHandsOn();