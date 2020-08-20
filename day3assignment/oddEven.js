let prompt = require('prompt-sync')();
let num = prompt("Please enter an integer number: ");
num = parseInt(num);
oddEvenCheck = num%2;
if (oddEvenCheck === 0) {
    console.log("Even number");
} else if (oddEvenCheck !== 0) {
    console.log("Odd number");
}