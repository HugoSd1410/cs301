let prompt = require('prompt-sync')();
let balance = prompt("Please enter the balance: ");
let annualRate = prompt("Please enter the annual rate: ");
let numMonths = prompt("Please enter the number of months to invest: ");
balance = parseFloat(balance);
annualRate = parseFloat(annualRate);
numMonths = parseInt(numMonths);
let monthlyRate = annualRate/12;
for (let month = 1; month <= numMonths; month++) {
    let interest = balance * monthlyRate;
    interest = Math.round(interest*100)/100;
    balance += interest;
    // console.log (`Your balance after ${numMonths} will be \$${balance}`);
}
console.log (`Your balance after ${numMonths} will be \$${balance}`);
// console.log("Your balance after "+numMonths+" will be "+"\$"+balance);
