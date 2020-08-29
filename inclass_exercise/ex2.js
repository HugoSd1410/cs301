function replaceAll(phrase, string1, string2) {
    let arr_phrase = phrase.split(" ");

    for (let i = 0; i < arr_phrase.length; i++) {

        if (arr_phrase[i] === string1) {
            arr_phrase[i] = string2;
        }


    }
    new_phrase = arr_phrase.join(" ");

    return new_phrase;


}

let new_string = replaceAll("She said Hi and I replied Hi", "Hi", "Hello");
console.log(new_string);