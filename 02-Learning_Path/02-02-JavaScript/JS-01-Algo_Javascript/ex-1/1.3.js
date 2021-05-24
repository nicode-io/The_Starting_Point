// Exercise 1.3 - OK
const readlineSync = require('readline-sync');
let firstName = readlineSync.question('Can you give me your first name please ? ');
console.log('Hello ' + firstName);