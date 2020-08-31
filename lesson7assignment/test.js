function titleCase(s)
{
 return s.replace(/\w\S*/g, function(s){return s[0].toUpperCase() + s.substr(1).toLowerCase()})


 
}


let s = "we are the world!";
let s_output = titleCase(s);
console.log(s_output);



// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});


// }



// function capitalize_Words(str) {
//     return str.replace(/\w\S*/g, cap(str));


//     function cap(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

//     }


// }







