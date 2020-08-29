function rotateLeft(list) {
    let tempt_value = list[0];
    for (let i = 0; i < list.length; i++) {
        list[i] = list[i + 1];
    }
    list[list.length - 1] = tempt_value;

    return list;


}

let list = [17, 8, 9, 5, 20];
list = rotateLeft(list);
console.log(list);