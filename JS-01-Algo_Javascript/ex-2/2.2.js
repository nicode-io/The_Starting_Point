// Import libraries
const readlineSync = require("readline-sync");

// Exercise 2.2 - OK
console.log("Ask following questions with numbers");
let max = readlineSync.question('What\'s the max ? ');
let min = readlineSync.question('What\'s the min ? ');
let current = readlineSync.question('What\'s the current ? ');
if (min > max) {
  console.log("Sorry, maximum must be higher than maximum");
} else if (current < min) {
  console.log(current + ' is lower than minimum (minimum was: ' + min + ' .');
} else if (current > max) {
  console.log(current + ' is higher than maximum (maximum was: ' + max + ' .');
} else {
  console.log(current + ' is between ' + min + ' and ' + max);
}