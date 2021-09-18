var number = [23, 45, 56, 29, 70, 66];
var sum = 0;
for(var i = 0; i< number.length; i++){
    var element = number[i];
    sum = sum + element
}
console.log(sum);



function arrySum(number){
    var sum = 0;
    for(var i = 0; i< number.length; i++){
        var element = number[i];
        sum = sum + element
    }
    return sum;
}
var number = [23, 45, 56, 29, 70, 66];
var result = arrySum(number);
console.log(result);
var total = arrySum([36, 5, 65, 24, 70, 66]);
console.log(total);