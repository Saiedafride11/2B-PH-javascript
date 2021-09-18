function number(num){
    return num * 2;
}
const result = number(5);
console.log(result);


const number1 = function(num){
    return num * 2;
}
const result1 = number1(2);
console.log(result1);


const number2 = num => num * 2;
const result2 = number2(4);
console.log(result2);


const number3 = (x, y) => x + y;
const result3 = number3(2,8);
console.log(result3);

const number4 = () => 7;
const result4 = number4();
console.log(result4);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum - diff;
    return result; 
}
const result5 = doMath(10, 4);
console.log(result5)