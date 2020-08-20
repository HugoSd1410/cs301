let prompt = require('prompt-sync')();
let age = prompt('Please enter your age; ');
age = parseInt(age);
if (age <= 0) {
    console.log('Please enter valid age');
} else if (age > 0 && age <= 14) {
    console.log("You can't drive yet.");
} else if (age >= 15 && age <= 18) {
    console.log("You can drive under supervision.");
} else if (age >= 19) {
    console.log("You can drive.");
} 