let prompt = require('prompt-sync')();
let distanceMeters = prompt('Please enter distance in meters: ');
let distanceMiles = parseFloat(distanceMeters/1609);
console.log(distanceMiles);
