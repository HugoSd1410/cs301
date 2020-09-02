
let arr = [25, 3, 123, 45];

let new_arr = arr.map(n => findSumOfDigits(n));
console.log(new_arr);



function findSumOfDigits(num) {
    let sum = 0;

while(num>0){
    sum+= num%10;
    num = Math.floor(num/10);
}

return sum;

}



