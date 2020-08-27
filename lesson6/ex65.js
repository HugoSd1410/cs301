const arr = ["apple", "ball", "cat"];

// function arrLength(arr) {
//     let tempt_arr = [];
// for(let i = 0; i < arr.length; i++) {

//     tempt_arr[i] = arr[i].length;
// }
// return tempt_arr;
// }
// arrLength(arr);
// const new_arr = arrLength(arr);

const new_arr = arr.map(n => n.length);



console.log(new_arr);