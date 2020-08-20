let prompt = require('prompt-sync')();
let weather = prompt('How is the weather today?: ');
let footWear;
if (weather === "hot") {
    footWear = "sandals"; 
} else if (weather === "rain") {
    footWear = "galoshes";
} else if (weather === "snow") {
    footWear = "boots";
} else {
    footWear = "shoes";
}
console.log(footWear);

