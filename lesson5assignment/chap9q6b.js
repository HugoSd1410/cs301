const prompt = require("prompt-sync")();

let a = 5;
let b = 4;
let c = 8;
let width = 20;
let depth = 8;
let height = 15;
let sweep = 100;

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
    // console.log("house volume is "+ house_volume);
    return house_volume;

}
console.log("house volume is "+houseVolume(20, 8, 15, 100));