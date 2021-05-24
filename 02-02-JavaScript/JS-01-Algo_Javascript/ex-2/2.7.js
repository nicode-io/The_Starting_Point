// Import libraries
const readlineSync = require("readline-sync");

// Exercise 2.7 - OK with help, see TIPS
let n = new Number(readlineSync.question('Please enter a number : '));
let num = null;
let i = 1;
let total = 0;
while (i <= n) {
    num = new Number(readlineSync.question('Please enter a new number : '));
    total += num;
    i++;
}
console.log(total);

// TIPS
// Remember to initialize variables before working with them
// 'new' properties