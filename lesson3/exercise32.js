let prompt = require('prompt-sync')();
let number = parseInt(prompt('Please enter a number from 1 to 10: '));
if (number === 7) {
    console.log('Bingo!');
} else {console.log('Please try again!')};