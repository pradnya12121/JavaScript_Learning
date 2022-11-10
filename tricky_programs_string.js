var string="TCS the Indian IT Giant Company"

function reverse_string(arg){
   var string_length= arg.length-1;
   for (let index = string_length; index >=0 ;index--) {
    
    
    var char=arg.charAt(index);
    

    console.log(char)
   }


}
reverse_string("TCS the Indian IT Giant Company");

console.log("====================revese string======================");

function rever(arg){

     var string_length=arg.length-1;
     var result=" ";
     for (let index = string_length; index >=0; index--) {
        var char = arg.charAt(index)
        result= result + char;
     }
     console.log(`Reverse string is : ${result}`)

}rever("TCS the Indian IT Gaint Company");



function vowels(arg){
    var str=arg.toLowerCase();
   var result= " ";
    for (let index = 0; index < arg.length; index++)
     {
        
        var char=str.charAt(index)
    if(char=="a" || char=="i" || char=="e" || char=="o" || char=="u")
    { 
       result = result + " " + char;
    }
       
    }
    
    console.log(`Vowels in string : ${result}`)


}vowels("TCS the Indian IT Gaint Company");
console.log("==================count vowels dont consider  duplicate=========");

function vowels_duplicate(arg){
   let new_set= new Set();
   var str=arg.toLowerCase();
   var result;
   for (let index = 0; index < arg.length; index++) {
      
      var char=str.charAt(index);
     
   
      if(char=="i"|| char=="o" || char=="u" || char=="e" || char=="a"){

         new_set.add(char);
      }
      
   }console.log(new_set)
   for (const iterator of new_set) {
   
      console.log(iterator)
   }
}vowels_duplicate("TCS Indian IT Gaint Company")

console.log("===============WAP even index vowels====================");

function even_index_vowels(arg){
   var str=arg.toLowerCase();
   // var vowels="aeiou";
   var char;
 for (let index = 0; index < arg.length; index++) {
     var char1=str.charAt(index);
    if( index%2==0 && char1=="a" || char1=="e" || char1=="i" || char1=="o" ||char=="u")
     {
       char1
       console.log(char1)
     }
   
 }

}even_index_vowels("TCS Indian IT Gaint Company");


console.log("=======================Count total words in string===========================");

function total_words(arg){
   var  count=0;
   var  str_array=arg.split(" ");

return str_array.filter(word => word!=" ").length


}
console.log(total_words("TCS Indian total words in string"));

console.log("=========================Count total word in string================");

function total_words_one(arg){
 var count=0;
 var str_array=arg.split(" ");
 return str_array.filter(word =>word!=" ").length
}
console.log(total_words_one("TCS Indian total words in string"))

console.log()
