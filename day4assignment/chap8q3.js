let prompt = require('prompt-sync')();
let n = prompt("Please enter an interger number: ");
n = parseInt(n);
for (let i = 1; i <=n ; i++) {
    console.log(i);
}