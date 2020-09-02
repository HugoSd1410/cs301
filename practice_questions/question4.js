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
    console.log(temp_arr);
    return temp_arr.length;



}

let string = "Hi there, how are you?"
let output = vowelCount(string);
console.log(output);