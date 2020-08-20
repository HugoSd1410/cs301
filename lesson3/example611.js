let prompt = require('prompt-sync')();
let age = prompt("Please enter your age: ");
let gameAttended = prompt("Please enter the number of games you attended: ");
let ticketPrice;
if (age <= 17){
    if (gameAttended <= 5){
        ticketPrice = 8;
    } else if (gameAttended <= 10) {
        ticketPrice = 6;
    } else if (gameAttended >= 11) {
        ticketPrice = 5;
    }
} else if (age <= 54) {
    if(gameAttended <= 10 ) {
        ticketPrice = 10;
    } else if (gameAttended >= 11) {
        ticketPrice = 8;
    }
} else if (age >= 55) {
    if(gameAttended <= 10) {
        ticketPrice = 8
    } else if (gameAttended >= 11) {
        ticketPrice = 6;
    }
}
console.log(ticketPrice);