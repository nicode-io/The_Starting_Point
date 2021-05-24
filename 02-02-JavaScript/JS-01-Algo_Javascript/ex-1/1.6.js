// Exercise 1.6 - OK
const readlineSync = require('readline-sync');
let firstNumber = readlineSync.question('Give me a number ? ');
let secondNumber = readlineSync.question('Give me a number ? ');
let firstRounded = Math.round(firstNumber);
let secondRounded = Math.round(secondNumber);
console.log(firstRounded % secondRounded);