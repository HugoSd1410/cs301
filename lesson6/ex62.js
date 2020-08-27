let scores =[10, 20, 30, 40, 50];

function findAverage(arr) {
let sum = 0;
for(let i=0; i < arr.length; i++) {
    
    sum += arr[i];
}
return sum/arr.length;


}
let average = findAverage(scores);
console.log(average);