const prompt = require("prompt-sync")();
let age = prompt("How old are you>: ");
for (let i = 1; i <=age; i++) {
    console.log("Happy Birthday!");
}