let prompt = require('prompt-sync')();
let beginningOdo = prompt('Please enter the beginning odometer reading in miles: ');
let endingOdo = prompt('Please enter the ending of odometer reading in miles: ');
let gasUsed = prompt('Please enter the amount of gasoline used: ');
beginningOdo = parseFloat(beginningOdo);
endingOdo = parseFloat(endingOdo);
gasUsed = parseFloat(gasUsed);
let gasPerMileage = (endingOdo-beginningOdo)/gasUsed;
console.log(gasPerMileage);