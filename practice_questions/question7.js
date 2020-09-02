let arr = ["apple", "sync", "ball", "rhythm"];

let new_arr = arr.filter(n =>vowelCount(n) < 1);

console.log(new_arr);


function vowelCount(string) {
    string = string.toLowerCase();
    let arr = string.split("");
    let temp_arr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "i" || arr[i] === "e" || arr[i] === "o" || arr[i] === "u") {

            temp_arr[j] = arr[i];
            j++;
        }

    }
  
    return temp_arr.length;



}
