let prompt = require("prompt-sync")();
let status = prompt("Is the person a student, a faculty or other?: ");
let overdueBook = prompt("How many books has this person kept past the due date in the last year: ");
overdueBook = parseInt(overdueBook);
let loanDuration;
if (status === "student") {
    if (overdueBook === 0) {
    loanDuration = 6;
    } else if (overdueBook < 3 ) {
    loanDuration = 4;
    } else if (overdueBook >= 3) {
    loanDuration = 2;
}
} else if (status === "faculty") {
    if (overdueBook === 0 ) {
        loanDuration = 16;
    } else if (overdueBook < 3) {
        loanDuration = 12;
    } else if (overdueBook >= 3) {
        loanDuration = 8;
    } 
} else if (status === "other") {
    if (overdueBook === 0) {
        loanDuration = 4;
    } else if (overdueBook < 3) {
        loanDuration = 3;
    } else if (overdueBook >= 3) {
        loanDuration = 2;
    }
}
console.log("Loan duration is " + loanDuration + " weeks");