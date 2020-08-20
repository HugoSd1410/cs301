let prompt = require('prompt-sync')();
let firstNum = prompt("Please enter the first number: ");
let secondNum = prompt("Please enter the second number: ");
let absDiffer = Math.abs(secondNum - firstNum);
console.log(absDiffer);