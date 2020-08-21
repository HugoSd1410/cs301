let prompt = require('prompt-sync')();
let n = parseInt(prompt("Please enter an integer number: "));
for (let i = 1; i <= n; i++) {
    let a = 2 * i;
    let b = 3 * i;
    let c = i * i;
    let d = i * i * i;
  
    console.log(`${i} ${a} ${b} ${c} ${d}`);
    // console.log(i + " " + a + " " + b + " " + c + " " + d);

}