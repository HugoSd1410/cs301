
let prompt = require('prompt-sync')();

function subtract(a, b) {
    return (a - b);

}
function sum(a, b) {
    return (a + b);

}

function product(a, b) {
    return (a * b);

}

function division(a, b) {
    return (a / b);

}

let a = parseFloat(prompt("Please enter the first number: "));
let operation = prompt("Please select the operation +, -, x, or /: ");
let b = parseFloat(prompt("Please enter the second number: "));

if (operation === "-") {
    console.log(a + " - " + b + " = " + subtract(a, b));
} else if (operation === "+") {
    console.log(a + " + " + b + " = " + sum(a, b));
} else if (operation === "x") {
    console.log(a + " x " + b + " = " + product(a, b));
} else if (operation === "/") {
    console.log(a + " / " + b + " = " + division(a, b));
}

