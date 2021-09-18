// const person = { name:'saied afride', age:'22', job:'facebooker', gfName:'Ema Watson', phone:'01323232344', address:'Kocho Ket', friends:['tom hangs', 'tom javed', 'tom elliot']};
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName, phone)
// console.log(gfName)
// console.log(gfName)
// console.log(gfName)




// const person = { name:'saied afride', age:'22', job:'facebooker', gfName:'Ema Watson', phone:'01323232344', address:'Kocho Ket', friends:['tom hangs', 'tom javed', 'tom elliot']};
// const {phone, gfName} = person;
// console.log(gfName, phone)



// const friend = ['Shakib khan', 'salman khan', 'amir khan',];
// const [chotoFriend] = friend;
// console.log(chotoFriend);


// const friend = ['Shakib khan', 'salman khan', 'amir khan',];
// const [chotoFriend, ...allFriends] = friend;
// console.log(allFriends);


const complexObject = {
    name: 'saied',
    info: {
        address: 'kola bagan',
        leader : 'tiger'
    }
}
const {leader} = complexObject.info;
console.log(leader);