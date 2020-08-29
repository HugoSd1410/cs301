let list = [12, 4, 8, 15, 17, 5, 20, 11];

function getMiddle(list) {
    if (list.length === 1) {

        let oneValue = `This arry has only one value. It is ${list[i]}`;
        return oneValue;
        
    } else if(list.length % 2 !==0) {
        let midValue = list[Math.floor(list.length/2)];
        return midValue;

    } else if (list.length % 2 ===0) {
        let left = list[((list.length-2)/2)];
        let right = list[list.length/2];
       
        let averageValue = (left + right)/2;
        return averageValue;
    }

}
let value = getMiddle(list);
console.log(value);