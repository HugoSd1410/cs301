let prompt = require('prompt-sync')();
let age;
do {
    age = prompt("How old are you?: ");
    console.log(age);
} while (age <= 18);