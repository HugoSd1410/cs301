let prompt = require("prompt-sync")();
let n = prompt("Please enter a number from 1 to 12: ");

let day = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
let gift = ["a partridge in a pear tree", "two turtle doves", "three French hens", "four calling birds", "five golden rings", "six geese a laying", "seven swans a swimming", "eight maids a milking", "nine ladies dancing", "ten lords a leaping", "eleven pipers piping", "twelve drummers drumming"];

let dayCounter = day[n - 1];
let giftCounter = gift[0];

if(n >1) {

    for (let i = 1; i < n; i++) {

        giftCounter = "and " + gift[0] + ".";

        for (let j = 1; j <= i; j++) {

            giftCounter = gift[j] + ", " + giftCounter;

        }
    }

}


let lyrics = "On the " + dayCounter + " day of Christmas, my true love gave to me: " + giftCounter;

console.log(lyrics);



