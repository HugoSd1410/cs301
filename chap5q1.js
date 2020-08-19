let prompt = require('prompt-sync')();
let r = prompt("Please enter radius: ");
let h = prompt("Please enter height: ");
let v = parseFloat(Math.PI * r * r * h);
console.log(v);