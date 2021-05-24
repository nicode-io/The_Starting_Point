// Import libraries
const readlineSync = require("readline-sync");

// Exercise 2.1 - OK
let age = readlineSync.question('What\'s your age ? ');
if (age >= 18) {
  console.log("You're an adult");
} else {
  console.log("You're not an adult yet");
}