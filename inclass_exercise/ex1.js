const arr1 = [1, 2, 3, 4, 5];

function arrayReverse (arr) {
    let new_arr = [];
    let j = 0;
    for(i = arr.length-1; i >= 0; i--) {
        new_arr[j] = arr[i];
        j++;
    }

    return new_arr;

}

arr2 = arrayReverse(arr1);
console.log(arr2);