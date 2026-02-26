"use strict";
//if else - switch case
/*syntax

if(false){


}else if(true){


}else{


}*/
let randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);
/*
if(randomNumber > 3){
    console.log(`${randomNumber} is greater than 3`)
}
else{
    console.log(`${randomNumber} is less than or equal to 3`)
}
*/
/*
if(randNumber === 0){

    console.log("Number is ZERO : "+randNumber);
}else if(randNumber === 1){

    console.log("Number is ONE : "+randNumber);
}else if(randNumber === 2){

    console.log("Number is TWO : "+randNumber);
}else{

    console.log("Number is either THREE or FOUR: "+randNumber)
}*/
switch (randomNumber) {
    case 0:
        console.log(`Number is zero : ${randomNumber}`);
        break;
    case 1:
        console.log(`Number is one : ${randomNumber}`);
        break;
    case 2:
        console.log(`Number is two : ${randomNumber}`);
        break;
    default:
        console.log("Number is either THREE or FOUR: " + randomNumber);
        break;
}
