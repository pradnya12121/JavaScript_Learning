const new_array =[20,31,40,25,23,11,29,9,60,2,11];

for (let index = 2; index < new_array.length; index++) {
    if(new_array[index]%2==0 || new_array[index]%3==0 || new_array[index]%5==0)
    {
        console.log(`${new_array[index]}  :is Not prime Number`)
    }
    else
    {
        console.log(`${new_array[index]}  :is Prime Number `) 
    }
    
}