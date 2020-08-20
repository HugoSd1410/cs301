let prompt = require('prompt-sync')();
let number = prompt("Please enter a number between 1 to 5: ");
number = parseInt(number);
let numbSpell;
switch (number) {
    case 1:
        numbSpell = "One";
        break;
    case 2:
        numbSpell = "Two";
        break;
    case 3:
        numbSpell = "Three";
        break;
    case 4:
        numbSpell = "Four";
        break;
    case 5:
        numbSpell = "Five";
        break;
    default:
        numbSpell = "Invalid number";
}
console.log(numbSpell);