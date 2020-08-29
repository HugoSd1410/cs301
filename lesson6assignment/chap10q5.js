function multiply(list, multiplier) {
    let new_list = [];

    for (let i = 0; i < list.length; i++) {
        new_list[i] = list[i] * multiplier;

    }

    return new_list;


}


let list = [17, 8, 9, 5, 20];
let products = multiply(list, 3);
console.log(products);