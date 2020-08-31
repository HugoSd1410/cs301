function switchCase(s) {
    let s_tempt=[];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i].toLowerCase()) {
            s_tempt[i] = s[i].toLowerCase();
        } else if (s[i] === s[i].toLowerCase()) {

            s_tempt[i] = s[i].toUpperCase();
        } else {
            s_tempt[i] = s[i];
        }



    }
    s_tempt = s_tempt.join();
    s_tempt = s_tempt.replace(/,/g,"");
    return s_tempt;

}

let s = "Catch 22";
new_s = switchCase(s);
console.log(new_s);

