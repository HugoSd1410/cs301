let prompt = require('prompt-sync')();
let vQ = prompt('Please enter volume in quarts: ');
vQ = parseFloat(vQ);
let vL = vQ/1.0567;
console.log(vL);
