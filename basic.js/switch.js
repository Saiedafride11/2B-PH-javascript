num = 5 ;
switch(num){
    case 1000:
        console.log('I am 1000');
        break;
    case 100:
        console.log('I am 100');
        break;
    case 20:
    case 10:
        console.log('I am either 20 or 10');
        break;
    default:
        console.log('I dont know who are you')
}


num = 1000 ;
switch(num){
    case 1000:
        console.log("Its 1000");
        break;
    case 100:
        console.log("its 100");
        break;
    case 20:
    case 10:
        console.log("its 20 or 10");
        break;
    default:
        console.log("its default")
}




var digit = prompt("Enter Any Disit : ");

switch(digit) {
    case "0":
        console.log("Zero");
        break;
    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
        break;
    case "6":
        console.log("Six");
        break;
    case "7":
        console.log("Seven");
        break;
    case "8":
        console.log("Eight");
        break;
    case "9":
        console.log("Nine");
        break;
    default:
        console.log("Not a Digit")
}




var letter = prompt("Enter a letter : ");
var letter = letter.toLowerCase();
switch(letter) {
    case "a":
        console.log("Its Vowel");
        break;
    case "e":
        console.log("Its Vowel");
        break;
    case "i":
        console.log("Its Vowel");
        break;
    case "o":
        console.log("Its Vowel");
        break;
    case "u":
        console.log("Its Vowel");
        break;
    default:
        console.log("Not a Vowel")
}


var letter = prompt("Enter a letter : ");
var letter = letter.toLowerCase();
switch(letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Its Vowel");
        break;
    default:
        console.log("Not a Vowel")
}