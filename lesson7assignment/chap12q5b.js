function titleCase(s) {

    let firstLetter = function (s) { return s[0].toUpperCase() + s.substr(1).toLowerCase() }
    let s_output = s.replace(/\w\S*/g, firstLetter);
    return s_output;

}


let s = "we are the world!";
let s_output = titleCase(s);
console.log(s_output);
