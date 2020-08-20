let prompt = require('prompt-sync')();
let age = prompt('Please enter your age: ');
let maximumHeartRate = 220 - age;
let slowestHeartRate = maximumHeartRate * 0.65;
let highestHeartRate = maximumHeartRate * 0.85;
console.log(`Your slowest heart rate per minute should be ${slowestHeartRate}, your highest heart rate per minute should be ${highestHeartRate}.`)
