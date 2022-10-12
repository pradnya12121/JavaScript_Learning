
console.log("1. Calculate the lenght of word and return its length square:-");
var  wordLengthSequence= function(word)
{
   var wordLength=word.length;
//    var wordLength2=word.length;
//    var wordLength3=word.length;
   console.log(`Length Of given word is :- ${wordLength}`);

   
   return wordLength*wordLength; 
}
var square=wordLengthSequence("JavaScript");

var square2=wordLengthSequence("Google");

var square3=wordLengthSequence("Developer");
console.log(`Square of 1st  Word Length is:- ${square}`);
console.log(`Square of 2nd  Word Length is:- ${square2}`);
console.log(`Square of  3rd Word Length is:- ${square3}`);
console.log("========================================================================================================================");

console.log("2. Givan String are as below :-");
var string="I am Angular Developer"
console.log(`${string}`);
console.log("========================================================================================================================");

console.log("2.1 Reverse the string and log on console :-");
var stringcal=function(str)
{ 
return str.split("").reverse().join("")
}
strreverse=stringcal("I am Angular Developer");
console.log(`${strreverse}`);
console.log("========================================================================================================================");
console.log("2.2. Find the string length and divide by total number words available in that string :-");

var strdivide=function()
{
    var string="I am Angular Developer"
  var strlength=string.length;
  console.log(`Total Length of string is :- ${strlength}`);
  var splitword=string.split(" ");
  
  console.log(`Total Words of String is :- ${splitword.length}`);
  var result= strlength / splitword.length ;
  var result2=strlength * splitword.length;
  console.log(`Result of Division is: - ${result}`);
  console.log(`2.3. Result of Multiplication  is: - ${result2}`);
}
strdivide();
console.log("========================================================================================================================");