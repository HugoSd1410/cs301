const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Please enter the triangle's length a: "));
let b = parseFloat(prompt("Please enter the triangle's length b: "));
let c = parseFloat(prompt("Please enter the triangle's length c: "));
let width = parseFloat(prompt("Please enter the width: "));
let depth = parseFloat(prompt("Please enter the depth: "));
let height = parseFloat(prompt("Please enter the height: "));
let sweep = parseFloat(prompt("Please enter the sweep: "));



function triangleArea(a, b, c) {
 
    let s = (a + b + c) / 2;
    let triangle_area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("triangle area is "+triangle_area);
    return triangle_area;
}
function roofVolume(width, depth, sweep) {

    let roof_volume = triangleArea(a, b, c) * width;
    console.log ("roof volume is "+roof_volume);
    return roof_volume;
}

function livingVolume(width, depth, height) {
    let living_volume = width * depth * height;
    console.log("living volume is " + living_volume);
    return living_volume;

}
function houseVolume(width, depth, height, sweep) {

    let house_volume = livingVolume(width, depth, height) + roofVolume(width, depth, sweep);
  
    return house_volume;

}
console.log("house volume is "+houseVolume(width, depth, height, sweep));