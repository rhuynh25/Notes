// FizzBuzz

const { clear } = require("console");

// Make a function
// Create a for loop that will count to 20
// Check for numbers that are multiplies of 3 & 5 print FizzBuzz
// Check for numbers are multiples of 3 and print Fizz
// Check for numbers are multiples of 5 and print Buzz
// If both conditions are true print FizzBuzz

function fizzbuzz(num) {
    for (let i = 0; i <= 20; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(20);