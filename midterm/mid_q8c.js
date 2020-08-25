const prompt = require('prompt-sync')();
let num = parseInt(prompt("please enter an integer number: "));

for ( i =0; i < 1; i++) {
let numReversed = "";

for (; num >0; num/= 10) {
let remainder = num % 10;
num = Math.floor(num/10);
numReversed =+ remainder;


}

console.log(numReversed);
}
