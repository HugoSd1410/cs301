let prompt = require('prompt-sync')();
let phrase = prompt("How are you?: ");
let num = prompt("Please enter an interger number: ");
num = parseInt(num);

for (let i = 1; i <= num; i++) {
    console.log(phrase);
}