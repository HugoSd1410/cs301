let prompt = require('prompt-sync')();
let age = prompt("How old are you?: ");
while (age <= 18) {
    console.log(age);
    age = prompt("How old are you?: ");

}