let prompt = require('prompt-sync')();
let beginningOdo = prompt('Please enter the beginning odometer reading in miles: ');
let endingOdo = prompt('Please enter the ending of odometer reading in miles: ');
let gasUsed = prompt('Please enter the amount of gasoline used: ');
let gasPerMileage = parseFloat((endingOdo-beginningOdo)/gasUsed);
console.log(gasPerMileage);