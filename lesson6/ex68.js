const arr = [1, 2, -1, 3, -2, 5, 6];

function positiveArr(arr) {
    let tempt_arr = [];
    let j = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            tempt_arr[j] = arr[i];
            j = j + 1;
        }

    }
    return tempt_arr;
}

let positive_arr = positiveArr(arr);


console.log(positive_arr);