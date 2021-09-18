// var nums = [5, 3, 6, 8, 9, 2, 4];
// for(var i = 0;i<nums.length;i++){
//     var num = nums[i];
//     console.log(num)
// }



// var nums = [5, 3, 6, 8, 9, 2, 4];
// for(var i = 0;i<nums.length;i++){
//     var num = nums[i];
//     if(i % 2 == 0){
//         console.log(num, 'It is even number');
//     }
//     else{
//         console.log(num, 'It is odd number')
//     }
// }





// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, 'it is even Number')
//     }
//     else{
//         console.log(num, 'it is odd Number')
//     }
// }

// var nums = [5, 3, 6, 8, 9, 2, 4];
// for(var i = 0;i<nums.length;i++){
//     var num = nums[i];
//     evenify(num);
// }


// var friendAge = [22, 44, 12, 34, 45];
// for(var i = 0; i<friendAge.length;i++){
//     var age = friendAge[i];
//     evenify(age)
// }



// function evenify(num){
//     if(num % 2 == 0){
//         console.log(num, 'it is even Number')
//     }
//     else{
//         console.log(num, 'it is odd Number')
//     }
// }

// function evenifyAll(nums){
//     for(var i = 0;i<nums.length;i++){
//         var num = nums[i];
//         evenify(num);
//     }
// }

// var nums = [5, 3, 6, 8, 9, 2, 4];
// evenifyAll(nums);

// var friendAge = [22, 44, 12, 34, 45];
// evenifyAll(friendAge);




function evenifyAll(nums){
    for(var i = 0;i<nums.length;i++){
        var num = nums[i];
        if(num % 2 == 0){
            console.log(num, 'it is even Number')
        }
        else{
            console.log(num, 'it is odd Number')
        }
    }
}

var nums = [5, 3, 6, 8, 9, 2, 4];
evenifyAll(nums);

var friendAge = [22, 44, 12, 34, 45];
evenifyAll(friendAge);