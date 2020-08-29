let list = [17, 8, 9, 5, 20];

function countEvens(list) {
let j = 0

    for (i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            
            j++;
            
        }
        
    }
    
    return j;

}
let count = countEvens(list);
console.log(count);