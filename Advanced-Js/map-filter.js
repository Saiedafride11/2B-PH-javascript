// const number = [3, 4, 5, 6, 7, 8, 9];
// let Output = [];
// for(var i = 0; i <number.length; i++){
//     var element = number[i];
//     var result = element * element;
//     Output.push(result);
// }
// console.log(Output)



// const number = [3, 4, 5, 6, 7, 8];
// function square(element) {
//     return element * element;
// }
// const result = number.map(square);
// console.log(result);


// const number = [3, 4, 5, 6, 7, 8];
// number.map(function(element, index, array) {
//     console.log(element, index, array);
// })


// const number = [3, 4, 5, 6, 7, 8];
// const result = number.map(x => x * x);
// console.log(result);



const number = [3, 4, 5, 6, 7, 8];
const bigger = number.filter(x => x > 5);
console.log(bigger);

const numbers = [3, 4, 5, 6, 7, 8];
const lower = numbers.filter(x => x < 5);
console.log(lower);

const numberss = [3, 4, 5, 6, 7, 8];
const Find = numberss.find(x => x > 5);
console.log(Find);

