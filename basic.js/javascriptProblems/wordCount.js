var speech = "I am Saied Afride. My Name Is Rifoy";
console.log(speech.length);

var speech = "I am Saied Afride. My Name Is Rifoy";
console.log(speech[3]);


var speech = "I am Saied Afride. My Name Is Rifoy";
var char = 0;
for(var i=0; i<speech.length; i++){
    var letter = speech[i];
    if(letter == " "){       // (letter == " ") tokoni 1 ta gor barabo.ortat char++
        char++;
    }
}
console.log(char);

var speech = "I am Saied Afride. My Name          Is          Rifoy";
var char = 0;
for(var i=0; i<speech.length; i++){
    var letter = speech[i];
    if(letter == " " && speech[i-1] != " "){   // (letter == " ") tokoni 1 ta gor barabo.ortat char++
        char++;
    }
}
char++;
console.log(char)