let prompt = require('prompt-sync')();
let r = parseFloat(prompt("Please enter radius: ",""));
let h = parseFloat(prompt("Please enter height: "));
let v = Math.PI * Math.sqrt(r, 2) * h;
console.log(v);
let x1 = parseFloat(prompt("Please enter x1: "));
let x2 = parseFloat(prompt("Please enter x2: "));
let y1 = parseFloat(prompt("Please enter y1: "));
let y2 = parseFloat(prompt("Please enter y2: "));
let d = Math.sqrt(Math.pow(x2 - x1, 2)) - Math.pow(y2-y1, 2);
console.log(d);
