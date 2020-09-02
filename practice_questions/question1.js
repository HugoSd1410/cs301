function isPerfecPrimeArray(arr) {
    let new_arr = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {

            new_arr[j] = arr[i];
            j++;
        }

    }
    console.log(new_arr);

for(let i = 0; i < new_arr.length; i++){
console.log(new_arr[i]);
for(let k = 2; k < new_arr[i]; k++){

    if(arr[i] % k === 0) {
        return false;
    } 

}

}
return true;

}


let arr = [1, 3, 5, 7];
let output = isPerfecPrimeArray(arr);
console.log(output);