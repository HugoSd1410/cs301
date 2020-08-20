let prompt = require('prompt-sync')();
let distanceMeters = prompt('Please enter distance in meters: ');
distanceMeters = parseFloat(distanceMeters);
let distanceMiles = distanceMeters/1609;
console.log(distanceMiles);
