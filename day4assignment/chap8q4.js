let prompt = require('prompt-sync')();
let n = prompt("Please enter an interger number: ");
n = parseInt(n);
for (let i = 1; i <=n ; i++) {
    if(i % 2 !=0) {
        console.log(i);
    }

}