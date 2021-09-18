var a = 7;
var b = 5;
console.log("before swap: a=", a, "b=", b);

var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, "b=", b);

var x = 7;
var y = 5;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=", x, "y=", y);


var p = 5;
var q = 7;
[p, q] = [q, p, q];
console.log("after swap: p=", p, "q=", q);