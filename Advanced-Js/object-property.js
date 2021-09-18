// const Student = [
//     {id:12, name: 'Saied'},
//     {id:13, name: 'Afride'},
//     {id:14, name: 'Ridoy'},
//     {id:15, name: 'kamal'}
// ];

// let nameCheck = [];
// for (let i = 0; i <Student.length; i++){
//     let result = Student[i];
//     nameCheck.push(result.name);
// }
// console.log(nameCheck);


const Student = [
    {id:12, name: 'Saied'},
    {id:13, name: 'Afride'},
    {id:14, name: 'Ridoy'},
    {id:15, name: 'kamal'}
];

const nameCheck = Student.map(s => s.name);
console.log(nameCheck);
const idCheck = Student.map(s => s.id);
console.log(idCheck);
const filterCheck = Student.filter(s => s.id > 13);
console.log(filterCheck);
const findCheck = Student.find(s => s.id > 12);
console.log(findCheck)