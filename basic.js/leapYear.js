var year = 3532;
console.log(year / 4);

var year = 3232;
var reminder = year % 4;
console.log(reminder);


var year = 1828;
var reminder = year % 4;
console.log(reminder == 0);


var year = 1828;
var reminder = year % 4;
if(reminder == 0){
    console.log("It is Leapyear")
}
else{
    console.log("It is not Leapyear")
}


function isLeapYear(year){
    const reminder = year % 4;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}
const check2000 = isLeapYear(2000);
console.log(check2000)


function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    } else {
        return false
    }
}

var result = checkLeapYear(2000)
console.log(result)




// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// var result = prompt('Enter a year:');
// checkLeapYear(result)