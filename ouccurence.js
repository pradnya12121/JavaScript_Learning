let string="Pradyakolasebapusaheb";
var result=[...string].reduce((res,char) =>(res[char]=(res[char] || 0)+1,res),{});
console.log(result)

