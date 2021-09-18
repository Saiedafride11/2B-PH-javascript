var bananaPrice = 440;
console.log(bananaPrice)

var seenAfter = 23;
console.log(typeof (seenAfter))


var name = "Saied Afride";
console.log(typeof name)

var isHot = true;
console.log(typeof isHot)

var promise = " I Will Provide You";
console.log(promise.toLowerCase());

var promise = "i will provide you with";
console.log(promise.toUpperCase());

var promise = "i will provide you with";
console.log(promise.indexOf('will'))

var promise = "i will provide you with";
console.log(promise.split('i'))


var num1 = 200;
var num2 = 100;
var num = ( num1 + num2);
console.log(num)

var num3 = 30;
var num4 = "30.55";
num4 = parseFloat(num4);
var num = (num3 + num4);
console.log(num)

var num5 = 20;
var num6 = "40.55";
var num6 = parseInt(num6);
console.log(num5 + num6)

var num7 = 10;
var num8 = "20.34";
var num8 = +num8;
console.log(num7 + num8)

var num9 = 500;
var num9 = ''+num9;
console.log(typeof num9)

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
var total = total.toFixed(1);
console.log(total)

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
var total = total.toFixed(3);
console.log(total)

// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************

var price1 = 20;
var price2 = 30;
var total = (price1 + price2);
console.log(total) 


var price1 = 25;
var price2 = 5;
var total = price1 / price2;
console.log(total)

var price1 = 25;
var price2 = 23;
var total = price1 % price2;
console.log(total)

var num = 30;
num++;
console.log(num)

var num = 31;
num--;
console.log(num)

var name1 = 'saied';
var name2 = 'Afride';
var name = name1 + " " +name2;
console.log(name)

// ************************************************************
// ************************************************************
// ************************************************************
// ************************************************************

var num = -10;
var absoluteNumber =Math.abs(num);
console.log(absoluteNumber);

var num = 9.55555;
var result = Math.round(num);
console.log(result)

var num = 9.09999;
var result = Math.ceil(num);
console.log(result)

var num = 9.99;
var result = Math.floor(num);
console.log(result);

var num = 7.88;
var result = Math.random();
console.log(result);

var num = Math.random() * 100;
var result = Math.round(num);
console.log(result)


var date = new Date("1971-10-12");
console.log(date)
