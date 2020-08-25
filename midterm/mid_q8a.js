const prompt = require('prompt-sync')();
let num = parseInt(prompt("please enter an integer number: "));
let n;
let i = 0;
do {
n = num/Math.pow(10, i);
i++;

} while (n > 1)
console.log(i-1 + " digits"); //I'm trying to figure out how many digits does this integer have
for (k = 0; k < 1; k++) {
    let numReversed = "";

for (let j = 1; j < i; j++) {
    
    let a = Math.round((num/Math.pow(10, j) - Math.floor(num/Math.pow(10, j)))* Math.pow(10, j));

    let b = Math.pow(10, (j-1));
    let c = Math.floor (a/b);
    // console.log(a);
    console.log(c); //I split the integer number into single digits then convert them into string and sum all of them together reversely
    numReversed += c;
    

}
console.log(numReversed);
}



