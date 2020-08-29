function rotateRight(list) {
    let tempt_value = list[list.length-1];
     for(let i = list.length-1; i >=0; i--) {
        list[i] = list[i-1];
     }
    list[0] = tempt_value;
    
     return list;
    
    
    }
    
    let list = [17, 8, 9, 5, 20];
    list = rotateRight(list);
    console.log(list);