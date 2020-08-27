const prompt = require("prompt-sync")();
function checkPrime() {
    let num = parseInt(prompt("Please enter a number: "));
    if (num <= 1)
        console.log("This number is not a prime number");
    else if (num === 2)
        console.log("This number is a prime number");
    else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log("This number is not a prime number");
                break;
            }
        }
        if (i === num)
            console.log("This number is a prime number");
    }
}
checkPrime()