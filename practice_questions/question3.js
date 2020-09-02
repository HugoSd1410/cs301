function testPalindrome(string){
let temp = string.toLowerCase();
let splittedArr = temp.split("");
splittedArr.reverse();
let revString = splittedArr.join("");

return temp === revString;




}


let string ="car";
let output = testPalindrome(string);
console.log(output);