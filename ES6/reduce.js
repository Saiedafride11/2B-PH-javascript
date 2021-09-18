// const nums = [12, 22, 31, 33, 55];
// // nums.map(num => num * 2);
// // nums.filter(num => num > 2);
// // nums.find(num => num > 20)
// // console.log(nums)

// const total = nums.reduce((sum, num) => sum + num, 0);
// console.log(total)


// // const total = nums.reduce((sum, num) => {
// //     return sum + num
// // }, 0);
// // console.log(total)

const friend = [
    {name: 'kamal', money:20},
    {name: 'jamal', money:30},
    {name: 'tamal', money:20}
];

// const total = friend.reduce((sum, friend) => sum + friend.money, 0);
// console.log(total)
const total = friend.reduce((sum, friend) => {
    console.log(sum, friend)
    return sum + friend.money
},0);
console.log(total)