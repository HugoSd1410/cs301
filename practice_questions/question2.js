const prompt = require("prompt-sync")();

function findSumOfDigits(num) {
    let sum = 0;

while(num>0){
    sum+= num%10;
    num = Math.floor(num/10);
}

return sum;

}

let num = parseInt(prompt("Please enter a number: "));

let output = findSumOfDigits(num);
console.log(output);