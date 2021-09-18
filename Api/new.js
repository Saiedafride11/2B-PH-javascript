class Person{
    constructor(fristName, lastName, salary){
        this.fristName = fristName;
        this.lastName = lastName;
        this.salary = salary
    }
}

const heroPerson = new Person("Hero", "Balam", 22000);
console.log(heroPerson);
const friendlyPerson = new Person("Hero", "Friendly", 20000);
console.log(friendlyPerson);