let prompt = require('prompt-sync')();
let numberOfBoxes = prompt('Please enter the number of boxes: ');
let numberOfBoxesInEachStack = prompt('Please enter the number of boxes in each stack: ');
let numberOfStack = Math.ceil(numberOfBoxes/numberOfBoxesInEachStack);
console.log(numberOfStack);