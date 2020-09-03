function findSmallest(a, b, c) {
let arr = new Array(3);
arr[0] = a;
arr[1] = b,
arr[2] = c;
let new_arr = arr.sort((a, b) => a-b);
return new_arr[0];

}


// function findSmallest(a, b, c) {
//     let arr = new Array(3);
//     arr[0] = a;
//     arr[1] = b;
//     arr[2] = c;
//     return Math.min(...arr);
// }

let a = 2;
let b = -1;
let c = -5;

console.log(findSmallest(a, b, c));