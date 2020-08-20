let prompt = require("prompt-sync")();
let status = prompt("Is the person a student, a faculty or other?: ");
let overdueBook = prompt("How many books has this person kept past the due date in the last year: ");
overdueBook = parseInt(overdueBook);
let loanDuration;
if (status === "student" && overdueBook === 0) {
    loanDuration = 6;
} else if (status === "student" && overdueBook < 3) {
    loanDuration = 4;
} else if (status === "student" && overdueBook >= 3) {
    loanDuration = 2;
} else if (status === "faculty" && overdueBook === 0) {
    loanDuration = 16;
} else if (status === "faculty" && overdueBook < 3) {
    loanDuration = 12;
} else if (status === "faculty" && overdueBook >= 3) {
    loanDuration = 8;
} else if (status === "other" && overdueBook === 0) {
    loanDuration = 4;
} else if (status === "other" && overdueBook < 3) {
    loanDuration = 3;
} else if (status === "other" && overdueBook >= 3) {
    loanDuration = 2;
}
console.log("Loan duration is " + loanDuration + " weeks");