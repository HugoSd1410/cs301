let i = 0;
let j = 1;

let count = 1;
let output ="";
output = output +i+", "+j+", ";
console.log(1);
while (count<=23) {
    let next = 1 + j;
    output = output + next+", ";
    u = j;
    j = next;
    count++;

}
console.log(output);