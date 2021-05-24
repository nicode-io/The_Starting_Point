// Import libraries
const readlineSync = require("readline-sync");

// Exercise 2.6 - OK
let weekNumber = readlineSync.question('Choose a number between 1 to 7 ? ');
if (weekNumber == 1) {
  console.log('Monday');
} else if (weekNumber == 2) {
  console.log('Tuesday');
} else if (weekNumber == 3) {
  console.log('It\s Wednesday');
} else if (weekNumber == 4) {
  console.log('It\'s Thursday');
} else if (weekNumber == 5) {
  console.log('It\'s Friday, I\'m in...');
} else if (weekNumber == 6) {
  console.log('It\'s Saturday');
} else if (weekNumber == 7) {
  console.log('It\'s Sunday');
}
