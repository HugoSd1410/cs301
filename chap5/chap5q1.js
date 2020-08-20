let prompt = require('prompt-sync')();
let r = prompt("Please enter radius: ");
let h = prompt("Please enter height: ");
r = parseFloat(r);
h = parseFloat(h);
let v = Math.PI * r * r * h;
console.log(v);