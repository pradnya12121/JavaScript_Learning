

console.log("1. Given a month number then log the name of the month")
var monthName =function(monthName)
{
switch (monthName) 
{
    case 1:
        console.log("January");
        
        // break
        case 2:
        console.log("February");
        // break;

        case 3:
        console.log("March");
        // break;

        case 4:
        console.log("April");
        break;

        case 5:
        console.log("May");
        break

        case 6:
        console.log("June");
        break;

        case 7:
        console.log("July");
        break;

        case 8:
        console.log("August");
        break;
        case 9:
            console.log("Septamber");
            break;

            case 10:
        console.log("October");
        break;
       
        case 11:
            console.log("November");
            break;
            case 12:
                console.log("December");
                break;
    default:
        console.log("Invalid Month")
        break;
}
}
monthName(1);

console.log("");


// monthName(5);
// console.log("");
 monthName(12);
console.log("");
 monthName(6);
console.log("");
monthName(0);
console.log("==========================================================================================================");