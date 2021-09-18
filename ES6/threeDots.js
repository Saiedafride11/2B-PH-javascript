// const age = [12, 33, 43, 13];
// const age1 = [32, 45, 12, 34];
// const allAge = age.concat(age1);
// console.log(allAge);


// const age = [12, 33, 43, 13];
// const age1 = [32, 45, 12, 34];
// const age2 = [77, 34, 34, 56];
// const allAge = age.concat(age1).concat([88]).concat(age2);
// console.log(allAge);


// const age = [12, 33, 43, 13];
// const age1 = [32, 45, 12, 34];
// const age2 = [77, 34, 34, 56];
// const allAge = [...age, ...age1, 5, ...age2];
// console.log(allAge);


// const business = 450;
// const business1 = 555;
// const business2 = 655;
// const total = Math.max(business, business1, business2);
// console.log(total);

const age = [12, 33, 43, 13];
const result = Math.max(...age);
console.log(result);