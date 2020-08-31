function titleCase(s) {


    let s_tempt = s.split(" ");
    let firstLetter = "";
    let s_output =" ";

for(let i = 0; i < s_tempt.length; i++){
    let new_string ="";
    for (let n of s_tempt) {
        firstLetter = n[0];
        firstLetter = firstLetter.toUpperCase();
        s_output = firstLetter + n.substr(1);
    }

    new_string += s_output;
    return new_string;
}
}

let s = "we are the world!";
let new_s = titleCase(s);
console.log(new_s);

