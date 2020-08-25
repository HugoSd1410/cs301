const prompt =require("prompt-sync")();
let salary = prompt("How much is your salary: ");
let tax;
if (salary <= 20000) {
    tax = 0

} else if (salary <=50000) {
    tax =salary * 0.05;
} else if (salary > 50000) {
    tax = salary * 0.1;
}
console.log(tax);