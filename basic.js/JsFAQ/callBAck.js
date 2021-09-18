// function explainCallBack(name, age, task){
//     console.log("Hello", name);
//     console.log("Age", age);
//     washHand();
//     takeShower();
// }

// function washHand(){
//     console.log('Wash Hand With Your Shop');
// }

// function takeShower(){
//     console.log('Take Shower')
// }
// explainCallBack("Saied Afride", 23);
// explainCallBack("Khalid Shaifullah", 12);



// function explainCallBack(name, age, task){
//     console.log("Hello", name);
//     console.log("Age", age);
//     console.log("Task", task);
// }

// function washHand(){
//     console.log('Wash Hand With Your Shop');
// }

// function takeShower(){
//     console.log('Take Shower')
// }
// explainCallBack("Saied Afride", 23, washHand);
// explainCallBack("Khalid Shaifullah", 12, takeShower);




function explainCallBack(name, age, task){
    console.log('Hello', name);
    console.log('Age', age);
    task();
}

function washHand(){
    console.log('Wash Hand With Your Shop');
}

function takeShower(){
    console.log("Take Shower");
}

function scrollFacebook(){
    console.log("Scroll Facebook")
}
explainCallBack("Saied Afride", 23, washHand);
explainCallBack("Khalid Shaifullah", 22, takeShower);
explainCallBack("Tamo", 21, scrollFacebook);
