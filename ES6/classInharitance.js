// class Child{
//     constructor(name){
//         this.name = name;
//     }
// }
// const baby = new Child("Saied");
// console.log(baby);
// const baby2 = new Child("Afride");
// console.log(baby2);




// class Parent{
//     constructor(){
//         this.fatherName = "Jon Cena";
//     }
// }


// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
// const baby = new Child("Saied");
// console.log(baby);
// const baby2 = new Child("Afride");
// console.log(baby2);







class Parent{
    constructor(){
        this.fatherName = "Jon Cena";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Saied");
console.log(baby.getFullName());