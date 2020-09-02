function isSumSafe(arr) {

    let sum = 0;
    if (arr.length === 0) {
        return false;
    }
        for (let i = 0; i < arr.length; i++) {

            sum += arr[i];
        }

        return sum > 0;
    }




let arr1 = [5, -5, 0];
let arr2 = [1, 2, 3]
let output = isSumSafe(arr1);
console.log(output);