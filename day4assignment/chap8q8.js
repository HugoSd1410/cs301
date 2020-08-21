let prompt = require('prompt-sync')();
let message = "I'm thinking of a number between 1 and 100.\n" + "Try to guess it!\n" + "Please enter an integer between 1 and 100: ";
let answer = 38;
let guess;
let i = 1;
do { 
    guess = parseInt(prompt(message))
    if (guess < answer) {
        message = guess + " is too low. Please enter another integer: ";
        i++;
    }
    else if (guess > answer) {
        message = guess + " is too high. Please enter another integer: ";
        i++;
    } 
    
} while (guess != answer);
message = guess + " is correct!";
console.log(message + " You tried " + i + " times.");