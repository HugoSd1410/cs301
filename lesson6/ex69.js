const arr1 = [1,2,3,4,5,6,7,8,9,10];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const arr_sum = arr1.reduce(reducer);
let arr_sum =0;
for(let i = 0; i < arr1.length; i++) {
    arr_sum += arr1[i]
}


console.log(arr_sum);


