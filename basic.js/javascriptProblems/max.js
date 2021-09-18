var business = 450;
var minister = 350;
if(business > minister){
    console.log("business is bigger")
}
else{
    console.log("minister is bigger")
}


var business = 450;
var minister = 650;
var sochib = 250;

if(business > minister){
    if(business > sochib){
        console.log("business is bigger")
    }
    else{
        console.log("sochib is bigger")
    }
}
else{
    if(minister > sochib){
        console.log("minister is bigger")
    }
    else{
        console.log("sochib is bigger")
    }
}



var business = 750;
var minister = 450;
var sochib = 250;
var max = Math.max(business, minister, sochib);
console.log(max)