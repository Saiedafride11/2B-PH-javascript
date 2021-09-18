function defaultValue(num1, num2){
   
    return sum = num1 + num2;
}
var result = defaultValue(2,2);
console.log(result);


function defaultValue1(num1, num2){
    if(num2 == undefined){
        num2 =  0;
    }
    return sum = num1 + num2;
}
var result = defaultValue1(2);
console.log(result);


function defaultValue2(num1, num2){
    var num2 = num2 || 0;
    return sum = num1 + num2;
}
var result = defaultValue2(5);
console.log(result);


function defaultValue2(num1, num2=8){
    var num2 = num2 || 0;
    return sum = num1 + num2;
}
var result = defaultValue2(7);
console.log(result);
