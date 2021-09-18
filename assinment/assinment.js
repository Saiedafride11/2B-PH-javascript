// feetToinch
function feetToinch (inch){
    var feet = inch / 12 ;
    return feet;
}
var result = feetToinch (144);
console.log(result)

// foodCalculator     
function foodCalculator (mango, apple){
    var mangoCount = mango * 4;
    var appleCount = apple * 4;
    var totalFruit = mangoCount + appleCount;
    return totalFruit
}
var result = foodCalculator (5,7);
console.log(result)

// BiggestNumber
function BiggestNumber (number){
    var largest = number[0];
    for(var i = 0; i<number.length ; i++){
        var curentNumber = largest [i];
        if(curentNumber > largest){
             largest = curentNumber;
        }
    }
    return largest
}
var result = BiggestNumber([2 , 4, 5, 6 ,9 ,12])
console.log(result);









//1. Feet to Mile Converter

function feetToMile(feet){
    var mile = feet/5280;
    mile = mile.toFixed(2);
    return mile;
}
var feetToTotalMile = feetToMile(5280);
console.log(feetToTotalMile);

//2. Wood Calculator

function woodCalculator(chair,table,bed){
    var needForChair = chair*1;
    var needForTable = table*3;
    var needForBed = bed*5;
    var totalWood = needForChair+needForTable+needForBed;
    return totalWood;
}
var needTotalWood = woodCalculator(2,2,2);
console.log(needTotalWood);

//3. Brick Calculator
// every feet 1000 it, 10 tola 15 feet, 20 tola 12 feet, 20+ tola 10 feet

function brickCalculator(floor){
    var forTenFloor = 150000;
    var forTwentyFloor=270000;
    if(floor<=0){
        console.log("This floor is not possible");
    }
    else if (floor<=10){
        var totalBricks = floor*15000;
    }
    else if (floor >=11 && floor<=20){
        var floorCount = floor-10;
        var forUpToTen=floorCount*12000;
        var totalBricks = forUpToTen+forTenFloor;
    }
    else{
        var floorCount = floor-20;
        var forUpToTwenty = floorCount*10000;
        var totalBricks = forUpToTwenty+forTwentyFloor;
    }
    return totalBricks;
}
var needBricks = brickCalculator(11);
console.log(needBricks);

//4.Tiny Friend Name

function tinyFriend(name){
    var smallestName =name[0];
    for (var i=0;i<name.length;i++){
        var currentName = name[i];
        if(currentName.length<smallestName.length){
            smallestName=currentName;
        }
    }
    return smallestName;
}
var name = ["Arafat", "Mahin", "Araf", "Hujaifa", "Rudro"];
var tinyFriendName = tinyFriend(name);
console.log(tinyFriendName);










//****** Jahid */ 


//***************** Calculate feet to mile */  
function feetToMile(feetValue){
    if(typeof(feetValue) != "number") return "Please enter valid number";
    else if(feetValue < 0) return "Distance can't be negative";
    else return feetValue/5280;  // because 1 mile = 5280 feet
}

//console.log(feetToMile(2));

//*********************Wood Counter */

function woodCalculator(chair,table, bed){
    totalWood = chair*1 + table*3 + bed*5;
    if(typeof(chair) != 'number' || typeof(table) != 'number' || typeof(bed) != 'number') return 'Value must be a number.';
    else if(chair < 0 || table < 0 || bed < 0 ) return 'Value must be positive.';
    else return totalWood;
}

//console.log(woodCalculator(1, 'f', 3));


//********************Counting brick */ 
function brickCalculator(floor){
    brickPerFeet = 1000;

    if(floor < 0) return "Floor Can't Be negative."; // Checking input number is negative
    else if(typeof(floor) != "number") return "Please write a valid number."; // Checking if the input is valid number
    else if(floor === 0) return 'No floor No brick';

    else if( floor > 0 && floor < 11){
        totalBrick = floor*brickPerFeet*15;
        return totalBrick;
    }
    else if( floor <= 20 && floor > 10){
        floor = floor-10;
        totalBrick =  (10*brickPerFeet*15) + (floor*brickPerFeet*12);
        return totalBrick;
    }
    else{
        floor = floor-20;
        totalBrick = (10*brickPerFeet*15) + (10*brickPerFeet*12) + (floor * brickPerFeet * 10);
        return totalBrick;
    }
}

//console.log(brickCalculator(0));


/******** Tiny Freind */
function tinyFriend(friendName){
    return friendName.reduce((a, b) => a.length <= b.length ? a : b); //using the reduce function of array
}