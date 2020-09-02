let arr =["madam", "car", "apple", "civic"];
let new_arr = arr.map(n => testPalindrome(n));
console.log(new_arr);



function testPalindrome(string){
    let temp = string.toLowerCase();
    let splittedArr = temp.split("");
    splittedArr.reverse();
    let revString = splittedArr.join("");
    
    return temp === revString;
    
    
    
    
    }
    
    
