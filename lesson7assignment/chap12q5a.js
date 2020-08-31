function titleCase(s) {


    let s_tempt = s.split(" ");
    let firstLetter = "";
    let arr_letter = [];
    let counter = 0;
    let s_output =" ";

    for (let n of s_tempt) {
        firstLetter = n[0];
        firstLetter = firstLetter.toUpperCase();

        for (let i = 1; i < n.length; i++) {
            firstLetter += n[i];

        }
        arr_letter[counter] = firstLetter;
        counter++;

    }
    s_output = s_output + arr_letter;
    s_output = s_output.trim();
    s_output = s_output.replace(/,/g, " ");

    return s_output;

}

let s = "we are the world!";
let new_s = titleCase(s);
console.log(new_s);


