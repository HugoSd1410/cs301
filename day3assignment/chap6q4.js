let prompt = require('prompt-sync')();
let cost = prompt("How much is the house?: ");
cost = parseFloat(cost);
let downPayment;
if (cost < 50000) {
    downPayment = cost*0.05;
} else if (cost < 100000) {
    downPayment = 2000 + 0.1*(cost - 50000)
} else if (cost < 200000) {
    downPayment = 7500 + 0.2*(cost - 100000)
} else if (cost >= 200000) {
    downPayment = 27500 + 0.25*(cost - 200000)
}
console.log("\$" + downPayment);