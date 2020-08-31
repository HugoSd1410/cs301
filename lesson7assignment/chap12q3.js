function suffix(string1, string2) {
    let commonSuffix = [];
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < string1.length; i++) {
        arr1[i] = string1[i];

    }
    for (let i = 0; i < string2.length; i++) {
        arr2[i] = string2[i];

    }
   
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
 

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            commonSuffix[i] = arr1[i];

        } else if(arr1[i] !== arr2[i]) break;

    }
    commonSuffix = commonSuffix.reverse();
 
    commonSuffix = commonSuffix.join();
    commonSuffix = commonSuffix.replace(/,/g, "");



    return commonSuffix;

}

let string1 = "swimming";
let string2 = "walking";
let new_string = suffix(string1, string2);
console.log(new_string);