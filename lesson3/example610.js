let prompt = require('prompt-sync')();
let salesAmount = prompt('Please enter salesAmount: ');
let commissionRate;
if (salesAmount >= 0 && salesAmount < 300) {
    commissionRate = 0;
} else if (salesAmount < 600) {
    commissionRate = 0.02;
} else if (salesAmount < 1000) {
    commissionRate = 0.025;
} else if (salesAmount > 1000) {
    commissionRate = 0.03;
} else {
    commissionRate = "Invalid";
}
console.log(commissionRate);