const prompt = require("prompt-sync")();
let input;
do{
    input = prompt("What's going on?: ");
    // input = newInput.toLowerCase()
} while (input.toLowerCase() !== "stop");
