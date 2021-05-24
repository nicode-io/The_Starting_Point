// Exercise 1.5 - OK
const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question('Enter the first decimal number with "." as separator ? ');
let secondNumber = readlineSync.question('Enter a second decimal number with "." as separator ? ');
let roundedFirstNumber = Math.round(firstNumber);
console.log(roundedFirstNumber * secondNumber);