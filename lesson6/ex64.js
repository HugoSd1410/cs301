const num_array = [1,11,3,14,6,23,9,5];
// const default_sorted_array = num_array.sort();
// console.log(default_sorted_array); // [ 1, 11, 14, 23, 3, 5, 6, 9 ]
// const properly_sorted_array = num_array.sort(numberComparator);
// console.log(properly_sorted_array);
// function numberComparator(a,b){
// return a-b;
// }
console.log(num_array);



// let numberComparator = (a, b) => a- b;
let numberComparator = function(a, b) {
return a- b;

}


const sorted_array = num_array.sort(numberComparator);
console.log(sorted_array);