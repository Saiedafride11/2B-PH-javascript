function welComeGuests(name, greatHandler){
    greatHandler(name);
}

const actorName = 'Shakib Khan';

function greatMorning(name){
    console.log("Good Morning", name);
}

welComeGuests(actorName, greatMorning)