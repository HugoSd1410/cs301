let prompt = require('prompt-sync')();
let vQ = prompt('Please enter volume in quarts: ');
let vL = parseFloat(vQ/1.0567);
console.log(vL);
