// Exercise 4.3 - OK

// Import libraries
const readlineSync = require("readline-sync");
/**
 * Generate a random number from 1 to 10
 * @param  {null}           No parameters
 * @return {number} random  A random number between 1 to 10
 */
function rand10() {
  return(Math.floor(Math.random() * 10)+1)
}
/**
 * Make an array with random numbers
 * @param  {Number} n       How much numbers we want to store/show in loop
 * @return {Array}  array   The full array with n random numbers in it
 */
let n = readlineSync.question('How much random number do you want ? ');
function multiRand(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(rand10());
  }
  return array;
}
console.log(multiRand(n));
