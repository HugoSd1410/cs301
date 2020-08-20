let prompt = require('prompt-sync')();
let number = prompt("please enter a number between 1 to 5: ");
number = parseInt(number);
if (number === 1) {
    console.log("One");
} else if (number === 2) {
    console.log("Two");
} else if (number === 3) {
    console.log("Three")
} else if (number === 4) {
    console.log("Four")
} else if (number === 5) {
    console.log(Five);
} else console.log("Invalid number");