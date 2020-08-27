const prompt = require("prompt-sync")();
function farthToCels() {
let tempInFahrenheit = prompt("Please enter a temperature value in degree Fahrenheit: ")
let tempInCelsius = (parseFloat(tempInFahrenheit)-32)*5/9;
console.log(tempInCelsius);
}
farthToCels();