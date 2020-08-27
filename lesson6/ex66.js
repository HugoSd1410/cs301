const arr = [1, 4, 2, 3, 7, 8, 8, 9, 12, 3];
// const odd_arr = arr.filter(n=> n%2 !== 0);

function oddArr(arr) {
    let tempt_arr = [];
    let j = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            tempt_arr[j] = arr[i];
            j = j + 1;
        }

    }
    return tempt_arr;
}

let odd_arr = oddArr(arr);


console.log(odd_arr);
