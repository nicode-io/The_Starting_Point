// Import libraries
const readlineSync = require("readline-sync");

// Exercise 4.6 - OK
n = readlineSync.question('What number do you want to calculate the factorial ? ');
fact = factorial(n)
function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  }else{
    return n * factorial(n-1);
  }
}
console.log(fact + ' is the factorial of ' + n);
