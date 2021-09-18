// class Student {
//     constructor(){
//         this.id = 12;
//         this.name = "Saied";
//     }
// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);


// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "Jay Hary Spry";
//     }
// }
// const student1 = new Student(12, "Saied");
// const student2 = new Student(15, "Afride");
// console.log(student1, student2);



class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Jay Hary Spry";
    }
}
const student1 = new Student(12, "Saied");
const student2 = new Student(22, "Afride");
const student3 = new Student(33, "Hridoy");
console.log(student1.id, student2.id, student3.id);

