const arr1 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const arr_sum = arr1.reduce(reducer);
console.log(arr_sum);