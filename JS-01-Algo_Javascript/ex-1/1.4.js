// Exercise 1.4 - OK
const readlineSync = require('readline-sync');
let firstName = readlineSync.question('What\'s your first name please ? ');
let lastName = readlineSync.question('Waht\'s your last name please ? ');
let city = readlineSync.question('In wich town do you live ? ');
console.log('Your name is ' + firstName + ' ' + lastName + ' and you live in ' + city);