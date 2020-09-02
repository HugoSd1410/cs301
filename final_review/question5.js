
function isOneTwoOne(arr) {
for (let i = 0; i < arr.length; i++) {

if(arr[i] === 0) {
    return false;
} else if (arr[i] > 2) {
    return false;
}

}
if (arr[0] === 1 && arr[arr.length -1] === 1) {

    return true;
}
return false;
}

let arr1 = [1, 2, 2, 1];
let arr2 = [1, 2, 2, 2, 2, 2];
let arr3 = [1, 2, 2, 3, 2, 1]

let output = isOneTwoOne(arr1);
console.log(output);
