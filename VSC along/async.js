//Synchronous operation example

// const syncOperation = () => {
//   console.log("Hey we started your syncronous operation...");

//   for (let i = 0; i < 3; i++) {
//     console.log(`Synchronus operation ${i}`);
//   }
//   console.log("Synchronouse operations completed");
// };

// syncOperation();



// Async operation example

// const asyncOperation = () => {
//   console.log("Starting Async operation...");
//   setTimeout(() => {
//     console.log("Async operation 1 : first person ");
//   }, 3000);
//   setTimeout(() => {
//     console.log("Async operation 2 : Second person ");
//   }, 1000);

//   console.log("Async operation started");
// };

// asyncOperation();


// Sync fs
const fs = require('fs');
console.log('start');
const data = fs.readFileSync('./data.txt', 'utf-8');

console.log(data);
console.log('end');

// Async fs
const fs = require('fs');
console.log('start');
fs.readFile('./data.txt', 'utf-8', (err,data) => {
  if (err) throw err;
});

console.log('end')