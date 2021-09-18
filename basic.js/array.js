var friendAge = [12, 14, 16, 19, 21];
console.log(friendAge);

var friendAge = [12, 14, 15, 62];
console.log(friendAge[2]);

var friendAge = [12, 14, 25, 55];
friendAge[2] = 26;    
console.log(friendAge);

var friendAge = [12, 14, 24, 56];
var position = friendAge.indexOf(24);
console.log(position);

var friendAge = [12, 14, 16, 23];
friendAge.push(22);
friendAge.push(23);
console.log(friendAge);

var friendAge = [12, 14, 23, 33];
console.log(friendAge.length);

var friendAge = [12, 14, 23, 30];
friendAge.pop();
console.log(friendAge);

// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************
// ***********************************************************

var teaLine = ['balam', 'kalam' , 'salam', 'dalam'];
console.log(teaLine);

var teaLine = ['balam', 'kalam' , 'salam', 'dalam'];
teaLine.push('Akim');
teaLine.push('lambia');
console.log(teaLine)

var teaLine = ['balam', 'kalam' , 'salam', 'dalam'];
teaLine.pop();
console.log((teaLine));

var teaLine = ['balam', 'kalam' , 'salam', 'dalam'];
teaLine.shift();
console.log(teaLine)

var teaLine = ['balam', 'kalam' , 'salam', 'dalam'];
teaLine.unshift('Aslam');
console.log(teaLine);

var teaLine = ['balam', 'kalam' , 'salam', 'dalam', 'NAlam', 'amal'];
var result = teaLine.slice(2);
console.log(result)

var teaLine = ['balam', 'kalam' , 'salam', 'dalam', 'NAlam', 'amal'];
var result = teaLine.slice(2,5);
console.log(result)

