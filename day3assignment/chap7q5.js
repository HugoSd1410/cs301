let prompt = require('prompt-sync')();
let age = prompt("How old is the child?: ");
let season = prompt("What is the current season? summer, fall, winter or spring?: ");
age = parseInt(age);
let bedTime;
if (age <6 && (season === "summer" || season === "fall")) {
    bedTime = "8:30 p.m.";
} else if (age < 6 && (season === "winter" || season === "spring")) {
    bedTime = "8:00 p.m."
} else if (age < 13 && season === "summer") {
    bedTime = "9:30 p.m.";
} else if (age < 13 && (season === "winter" || season === "spring" || season === "fall")) {
    bedTime = "8:30 p.m.";
} else if (age >= 13 && season === "summer") {
    bedTime = "10:30 p.m.";
} else if (age >= 13 && (season === "winter" || season === "spring" || season === "fall")) {
    bedTime = "9:30 p.m.";
}
console.log(bedTime);