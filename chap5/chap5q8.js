let prompt = require('prompt-sync')();
let regHours = prompt("Please enter the emplpyee's regular working hours: ");
let regWage = prompt("Please enter the employee's wage: ");
regHours = parseFloat(regHours);
regWage = parseFloat(regWage);
let grossPay = regWage * regHours;
let tax = grossPay * 0.15;
let afterTaxPay = grossPay - tax;
console.log (afterTaxPay);