function sayLove(){
    console.log("hello Function")
}
sayLove()


function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(3);
doubleIt(7);
doubleIt(5);

function doubleIt(num){
    var result = num * 2
    return result;
}
var frist = doubleIt(4);
var second = doubleIt(5);
console.log(frist, second);


function doubleIt(num){
    var result = num *2;
    return result;
}
var first = doubleIt(2);
var second = doubleIt(4);
var total = first + second;
console.log(total)


function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var total = add(2, 2);
console.log(total)