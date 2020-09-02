function maxMinPair(arr){

    let new_arr =[];

    new_arr[0] =Math.max(...arr);
    new_arr[1] = Math.min(...arr);
    return new_arr;

}

let arr= [3, -5, 8, 9, 25, -7]

let output = maxMinPair(arr);

console.log(output);