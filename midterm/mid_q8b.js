const prompt = require('prompt-sync')();
let num = parseInt(prompt("please enter an integer number: "));
let n;
let i = 0;
do {
n = num/Math.pow(10, i);
i++;

} while (n > 1)
let digits = i -1;
console.log(digits + " digits"); //I'm trying to figure out how many digits does this integer have
for (k = 0; k < 1; k++) {
    let numReversed = "";

for (let j = 0; j < digits; j++) {
    
    let remainder = num % 10;
    num = Math.floor(num/10);
    console.log(remainder); //I split the integer number into single digits then convert them into string and sum all of them together reversely
    numReversed += remainder;
    

}
console.log(numReversed);
}



