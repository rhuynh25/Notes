// // example 1: addition with type coercion

// var num1 = 42 //number data type

// var str1 = "3" //string data type

// var result = num1 + str1;
// console.log(result);



// var num2 = 10;

// var str2 = "5";

// var result2 = num2 - str2;
// console.log(result2);


// var num3 = 7;

// var str3 = "7";

// console.log(num3 == str3);



// var num4 = 7

// var str4 = "7"

// console.log(num4 === str4);


// // Boolean Example

// var num6 = "";

// var bool6 = Boolean(num6);

// console.log(bool6);


// //Comparison with different data types

// let num8 = 10;

// let str6 = "10";

// if (num8 == str6);{
//     console.log("Equal")
// } else {
//     console.log("Not Equal")
// }
// // With 2 == they equal. 3 === changes it to not equal cause the condition changed and one is a string and another is an integer





// Array Code Along

// const apprentices = ['Richard', 'Jorge', 'Noe', 'Josh', 'Sulay'];

// const numberOfApprentices = apprentices.length;

// console.log('')


// let fruits = ['apple', 'passionfruit', 'mango', 'lychee'] //This is an array of fruits
//                  0           1           2       3
// console.log(fruits);
// console.log(fruits[2]);

// //Modified Array
// fruits [1] = 'grapes'; //output ['apple', 'grapes', 'mango', 'lychee']
// console.log(fruits);

// fruits.unshift("strawberries"); //output [ 'strawberries', 'apple', 'grapes', 'mango', 'lychee' ]
// console.log(fruits);

// fruits.pop(); //removes last element of the array
// console.log(fruits);


// will iterate over the array using a for loop
// for (let i = 0; i < fruits.length; i++); {
//     console.log(fruits[i])
// }





//LOOPS CODE ALONG


// Array of zoo animals

//var zooAnimals = ["Zebra", "Rhino", "Penguin", "Monkey"];

// Creating a For Loop to print out each zoo animal

//for (let i = 0; i < zooAnimals.length; i++) {
// Console.log the animals at index position i to the console
//console.log(zooAnimals[i]);
//}

//for (let i = 0; i < 5; i++){
//Prints a message and the current i value to the console EXAMPLE " I am 0 - 4"
//console.log("I am " + i)
//}



// Loop through an object
// var moviePatrons = [        //ARRAY OF OBJECTS
//     {name:"Tom", age:16},
//     {name:"Ashley", age:31},
//     {name:"Osiel", age:23},
//     {name:"Sarah", age:18},
//     {name:"Malcom", age:15},
//     {name:"Alvin", age:22},
// ];

// function canWatchMovies(array){

// for(let i = 0; i < array.length; i++) {

//     if(array[i].age >= 17){

//     console.log(`${array[i].name} can watch R rated movies`);

//         } else{
//         console.log(`${array[i].name} cannot watch R rated movies`);
//         }
//     }
// }





// // Named function
// function addNumbers (a, b) {
//     return a + b;
// }
// console.log(addNumbers(1,2)); // Result 3

// // Function Expression
// const multiplyNumbers = function (a, b) {
//     return a * b;
// }
// console.log(multiplyNumbers(20, 30)); // Result 600

// // Arrow Function introduced in 2015
// const divideNumber = (a, b) => {
//     return a / b
// }
// console.log("Divide Number Function", divideNumbers(20, 10));

// const sameLinedDivideNumbers = (a , b) => {
//     console.log("Good Job")
//     return a/b
// }
// console.log("Same Line Divide Numbers Function", sameLinedDivideNumbers(40 , 4));

// // Immediately Invoked Function Expression (I.I.F.E.)
// (function(){
//     console.log("This is an IIFE")
// })();

// // Higher Order Function/ Callback function
// function higherOrder(potatoeFunction){
//     console.log("Higher Order Function");
//     potatoeFunction();
// }

// higherOrder(sameLinedivideFunction);




// Functions
// Here we will create the function called adder that takes in 3 parameters


// Function that adds 3 numbers

// function adder (x, y, z){
//     return x + y + z
// }
// console.log(adder(1,2,3));

// Function that multiplies 3 numbers

// function multiply (x, y, z){
//     return x * y * z
// }
// console.log(multiply(3,5,6));


// Create a function called "isString" that takes in 3 arguments (x, y, z)

// function isString(x, y, z) {
// isString checks if each argument is a string using the typeof operater
// If/else to check if the string exist
//     if(typeof x === "string" && typeof y === "string" && z === "string"){
//     console.log("Hey all parameters are strings");
//     }else{
//         console.log("Hey all parameters aren't strings");
//     }
// }

// isString("Osiel", "Richard", "JT");
// isString(100, "Justin", "Alex");


// Lets create a vowel checker

// function vowelChecker(x){
//     var firstChar = x.toLowerCase().charAt(0); // This variable will check the first letter and if its lowercase
//     if(
//         firstChar === "a"||
//         firstChar === "e" ||
//         firstChar === "i" ||
//         firstChar === "o" ||
//         firstChar === "u" 
//     ){
//         console.log("OMG, you're a vowel")   
//     }else{
//         console.log("Hey, you're not a vowel")
//     }
// }
// vowelChecker("Richard")


// Arrow function
//BERFORE ARROW FUNCTION

// function addNumbers(num1,num2){
//     return num1 + num2;
// }

// const result1 = addNumbers(5,3);
// console.log(result1);

// AFTER with Arrow function
//Arrow function that adds 2 numbers

// const addNumbers2 = (num1,num2) => {
//     return num1 + num2;
// }

// const result2 = addNumbers2(5,3);
// console.log(result2);





// CALLBACK functions

// function fetchuserData (userID,callback){   //Here created a function
//     setTimeout(()=>{        // Created a timeout function
//         const fakeUserData = {
//             id:userId,
//             username:"Richard",
//             email: "rhuynh@fakemail.com"
//         };
//         callback(fakeUserData);
//     },2000)// 2 - sec delay
// }
//     function displayUserData(userData){
//         console.log("User Data:");
//         console.log(userData);
//     }

//     const userId = 123;
//     fetchuserData(userId, displayUserData);
//     console.log("Fetching your data...");





// OBJECTS CODE ALONG

// Create and Object
// let instructor = {
//     firstName: "Lartori", 
//     lastName: "Miller",
//     age: 26,
//     hasKids: true,
//     kis: ["Malachi", "Lorelai", "Lilah"]
// }

// // Create a object literal
// let car = { };
// // Access information in an object
// console.log(instructor.firstName);

// console.log("car object", car)

// car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2024,
//     color: "Black"
// }

// Add a new property to an object, NOT REALLY A GOOD PRACTICE. Rather make a funciton that is update car
// car.price = 30000;

// console.log("Car Object");

// Add a method to an object

// Create a userProfile object that contains the following properties, username, email, and birthyear
// let userProfile = {
//     userName: "Rhuynh",
//     email: "fakeemail@google.com",
//     birthyear: 1998,
//     calcAge: function(){
//         return 2024 - this.birthyear;
//     }
// };

// console.log(userProfile.calcAge());

// // Create object called apprentices
// let apprentices = {
//     sayHello: false,
//     names: ["Richard", "JT", "Tra", "Noe"] 
// }

// // create a function that accepts an object
// function sayHello(obj){
//     if(obj.saysHello === true){
//         console.log("You are friendly");
//     } else {
//     console.log("Who didn't speak?", obj.names);
// }
// };
// sayHello(apprentices);

// sayHello({
//     sayHello: true,
//     names: [Juan]
// })





// Creating a nested object
// let clothing = {
//     shirts : "short sleeve", // String
//     quantity: 10, // Number
//     onSale: true, // Boolean
//     sizes: ["small", "medium", "large"], // Array
//     apparel: {
//         hats: "baseball hat",
//         quantity: 20,
//         colors :{
//             standard: ["black", "white"],
//             custom: "brown"
//         }
//     },
//     calculateProfit: function(){
//         return (10 * this.quantity);
//     }
// }
// You can combine bracket and dot notation. Typically at the end
// Using dot notation
// console.log(clothing.shirts);
// console.log(clothing["quantity"]);
// console.log(clothing.apparel.hats);
// console.log(clothing.apparel.colors.custom);
// // Using bracket notation
// console.log(clothing.apparel.colors["standard"][0])
// console.log(clothing["apparel"]["colors"]["custom"]);
