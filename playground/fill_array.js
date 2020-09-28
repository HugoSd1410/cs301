function fillArray(arr, n, maxValue) {

    let maxValue_string = maxValue + "";
console.log(maxValue_string);
    let maxValue_arr = maxValue_string.split("");
    console.log(maxValue_arr);
let maxValue_digits = maxValue_arr.length;
console.log(maxValue_digits);

    for(let i = 0; i < n; i++) {


do {
        arr[i] = Math.floor(Math.random() * Math.pow(10, maxValue_digits));
    
    } while (arr[i] >= maxValue || arr[i] === 0)
}

return arr;


}
let arr = [];
let n = 5;
let maxValue = 12;
let output = fillArray(arr, n, maxValue);
console.log(output);