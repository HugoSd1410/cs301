// let a = 1;
// let b = 0;
// let f;
// for(let i = 1; i <= 25; i++) {
   
//     f = a + b;
//     console.log(f);

//     a = b;
//     b = f;
    
  
    
// }
// let a = 1;
// let b = 0;
// for(let f = 0; f <= 1; f++) {
//     console.log(f);
// for(let i = 1; i <= 24; i++) {
   
//     f = a + b;
//     console.log(f);

//     a = b;
//     b = f;
    
//     }
    
// }

let a = 1;
let b = 0;
let c = 0;
let output = 0;
for(let i = 1; i <= 24; i++) {
   
    c = a + b;
    // console.log(f);

    a = b;
    b = c;
    output = output + c + ", ";
    
}
output = 0 + ", " + output;
console.log(output);
