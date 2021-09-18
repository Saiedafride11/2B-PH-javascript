let acceptCookie = confirm(location.hostname+" want to accept your cookies");

function afterAccept(){
    console.log('User Accepted');
}
function afterDeclined(){
    console.log('User Declined');
}

if(acceptCookie == true){
    afterAccept();
}
else{
    afterDeclined();
}

var a = 10;
console.log(++a);
console.log(a);

var a = 10;
console.log(a++);
console.log(a);