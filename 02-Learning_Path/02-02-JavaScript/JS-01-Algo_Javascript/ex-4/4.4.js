// Exercise 4.4 - OK (except name of max function, see)

// Import libraries
const readlineSync = require("readline-sync");

// Average
/**
 * Calculate average value of an array
 * @param  {array}   arr    Array's value to calculate average
 * @return {number}         Average value of the array
 */
function average(arr){
  let sum = 0
  for (let i in arr) {
    sum += arr[i]
  }
  return sum / arr.length;
}
// Test
console.log(average([10, 20, 30]))

// Minimum
//  #1
/**
 * Calculate minimum value of an array
 * @param  {array}   arr    Array which we want to have the minimum value
 * @return {integer} mini  Minimum array's values
 */
function min(arr) {
  let mini = null
  for (let elem in arr) {
    if (mini > elem) {
    mini = elem
    }
  return mini;
  }
}
// Test
console.log(min([4,8,6]))
// #2
/**
 * Calculate minimum value of an array
 * @param  {array}   arr    Array which we want to have the minimum value
 * @return {integer} mini   Minimum array's values
 */
function min(arr) {
  let mini = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i]
    }
  }
  return mini;
}
// Test
console.log(min([4,8,6]))
// #3
/**
 * Calculate minimum value of an array
 * @param  {array}   arr    Array which we want to have the minimum value
 * @return {integer} mini   Minimum array's values
 */
function min(arr){
  let numbers = arr
  return Math.min(...numbers)

}
// Test
console.log(min([1, 10, 20]))
// #4
/**
 * Calculate minimum value of an array
 * @param  {array}   arr    Array which we want to have the minimum value
 * @return {integer} mini   Minimum array's values
 */
function min(arr) {
  return mini = Math.min(...arr)  ;
}
console.log(min([1,10,20])) 

//! Maximum - Execution can't function for final exercise when I called it max ?! Work with name maxi
/**
 * Calculate maximum value of an array
 * @param  {array}   arr    Array which we want to have the maximum value
 * @return {integer} max   Maximum array's values
 */
function maxi(arr) {
  return max = Math.max(...arr) ;
}
// Test
console.log(maxi([1,10,20])) 

// Final exercise
// Import libraries
/**
const readlineSync = require("readline-sync");
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
function multiRand(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(rand10());
  }
  return array;
}
// Test
let n = readlineSync.question('How much random number do you want ? ');
let arr = multiRand(n);
console.log(arr);
console.log("The average value of random numbers is: " + average(arr) + '.');
console.log("The minimum value of random numbers is: " + min(arr) + '.');
console.log("The maximum value of random numbers is: " + maxi(arr) + '.');


