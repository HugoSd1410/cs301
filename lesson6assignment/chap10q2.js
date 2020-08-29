const list =[17, 8, 9, 5, 20];

function addEnds(list) {

    return list[0] + list[list.length-1];
}

let value = addEnds(list);

console.log(value);
