let prompt = require('prompt-sync')();
let studentName = prompt("What is the student's name?: ");
let creditNumber = prompt("How many credits did the student complete?: ");
let yearInSchool;
if (creditNumber < 30) {
    yearInSchool = "freshman";
} else if (creditNumber < 60) {
    yearInSchool = "sophomore";
} else if (creditNumber < 90) {
    yearInSchool = "junior";
} else if (creditNumber >= 90) {
    yearInSchool = "senior";
}
console.log(`${studentName} is ${yearInSchool}`);