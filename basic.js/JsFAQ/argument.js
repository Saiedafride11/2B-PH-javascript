// function addNumbers(num1, num2){
//     return num1 + num2;
// }
// var result = addNumbers(2,2);
// console.log(result);


// function addNumbers(num1, num2){
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         var num = arguments[i];
//         console.log(num);
//     }
//     return num;
// }
// var result = addNumbers(23, 2, 4, 5, 5);
// console.log(result);

function addNumbers(num1, num2){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        var num = arguments[i];
        sum = sum + num;
    }
    function logInfo(messege){
        console.log(messege);
    }
    logInfo("Hello");
    return sum;
}
var result = addNumbers(23, 2, 45, 67);
console.log(result);
