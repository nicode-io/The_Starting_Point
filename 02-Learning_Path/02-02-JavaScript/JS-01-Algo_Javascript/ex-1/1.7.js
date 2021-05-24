// Exercise 1.7 - OK
const readlineSync = require('readline-sync');
let firstName = readlineSync.question('What\'s your first name please ? ');
let lastName = readlineSync.question('Waht\'s your last name please ? ');
let city = readlineSync.question('In wich town do you live ? ');
let birthTown = readlineSync.question('Where are you birth ? ');
let fruit = readlineSync.question('What\'s your favorite fruit ? ');
let fear = readlineSync.question('What\'s your bigger fear ? ');
console.log('Once upon a time in ' + birthTown + ', a little monkey called ' + firstName + ' was born. The monkey was part of the big '  + lastName + '\'s family from ' + city + '. The monkey was promised to a wonderful future, sadly his passion for ' + fruit + ' will take the monkey to another road. That road was going to lead the little monkey to ' + fear + ' No one knew how the little monkey got out, but he did !');