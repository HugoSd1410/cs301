const prompt = require('prompt-sync')();
let r;
let area;
do {
    r = parseFloat(prompt("Please enter the radius: "));
    area = Math.PI * Math.pow(r, 2);

} while (r <= 0)

console.log(area);