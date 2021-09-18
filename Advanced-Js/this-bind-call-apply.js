// ************************************************************
// ******************      This        ************************


// const normalPerson = {
//     fristName: 'Saied',
//     lastName: 'Afride',
//     fullName: function () {
//         console.log(this.fristName, this.lastName);
//     }
// }
// console.log(normalPerson);



// const normalPerson = {
//     fristName: 'Saied',
//     lastName: 'Afride',
//     Selary: 15000,
//     fullName: function () {
//         console.log(this.fristName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.Selary = this.Selary - amount;
//         return this.Selary
//     }
// }

// normalPerson.chargeBill(150);
// console.log(normalPerson.Selary);


// ************************************************************
// ******************      bind        ************************

// const normalPerson = {
//     fristName: 'Saied',
//     lastName: 'Afride',
//     Selary: 15000,
//     fullName: function () {
//         console.log(this.fristName, this.lastName);
//     },
//     chargeBill: function(amount){
//         console.log(this);
//         this.Selary = this.Selary - amount;
//         return this.Selary
//     }
// }



// const heroPerson = {
//     fristName: 'Hero',
//     lastName: 'Salam',
//     Selary: 10000,
// }

// const friendlyPerson = {
//     fristName: 'Hero',
//     lastName: 'kamal',
//     Selary: 12000
// }

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// heroBillCharge(2000);
// console.log(heroPerson.Selary);
// console.log(normalPerson.Selary);

// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(2000);
// console.log(friendlyPerson.Selary);


// ************************************************************
// ******************      call        ************************


// const normalPerson = {
//     fristName: 'Saied',
//     lastName: 'Afride',
//     Selary: 15000,
//     fullName: function () {
//         console.log(this.fristName, this.lastName);
//     },
//     chargeBill: function(amount, tips, tax){
//         console.log(this);
//         this.Selary = this.Selary - amount - tips - tax;
//         return this.Selary
//     }
// }



// const heroPerson = {
//     fristName: 'Hero',
//     lastName: 'Salam',
//     Selary: 10000,
// }

// const friendlyPerson = {
//     fristName: 'Hero',
//     lastName: 'kamal',
//     Selary: 12000
// }

// normalPerson.chargeBill.call(heroPerson, 900, 200, 100);
// normalPerson.chargeBill.call(heroPerson, 200, 100, 100);
// console.log(heroPerson.Selary);


// normalPerson.chargeBill.call(friendlyPerson, 200, 100, 50);
// console.log(friendlyPerson.Selary)


// ************************************************************
// ******************      apply        ************************


const normalPerson = {
    fristName: 'Saied',
    lastName: 'Afride',
    Selary: 15000,
    fullName: function () {
        console.log(this.fristName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.Selary = this.Selary - amount - tips - tax;
        return this.Selary
    }
}



const heroPerson = {
    fristName: 'Hero',
    lastName: 'Salam',
    Selary: 10000,
}

const friendlyPerson = {
    fristName: 'Hero',
    lastName: 'kamal',
    Selary: 12000
}

normalPerson.chargeBill.apply(heroPerson, [300, 100, 100]);
normalPerson.chargeBill.apply(heroPerson, [100, 100, 100]);
console.log(heroPerson.Selary);



