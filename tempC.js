let prompt = require('prompt-sync')();
let tempInCelsius = prompt('Eneter value in celsius: ')
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);

tempInFahrenheit = prompt('Eneter value in ahrenheit: ')
tempInCelsius = (parseFloat(tempInFahrenheit)-32)*5/9;
console.log(tempInCelsius);