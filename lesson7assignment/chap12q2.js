function prefix(string1, string2) {
    let commonPrefix = [];
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < string1.length; i++) {
        arr1[i] = string1[i];

    }
    for (let i = 0; i < string2.length; i++) {
        arr2[i] = string2[i];

    }
  

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            commonPrefix[i] = arr1[i];

        } else if(arr1[i] !== arr2[i]) break;

    }
    commonPrefix = commonPrefix.join();
    commonPrefix = commonPrefix.replace(/,/g, "");




    return commonPrefix;
}

let string1 = "disable";
let string2 = "distasteful";
let new_string = prefix(string1, string2);
console.log(new_string);