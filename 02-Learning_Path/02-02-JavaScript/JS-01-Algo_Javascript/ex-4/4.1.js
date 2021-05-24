// Exercise 4.1 - OK

// Import libraries 
const readlineSync = require("readline-sync");
/**
 * Areea calculation for a rectangle
 * @param  {Number} a       Length of rectangle
 * @param  {Number} b       Width of rectangle
 * @return {Array}  area    The area of rectangle
 */
let areaCalculation = (a, b) => {
  return a * b;
} 
let length = readlineSync.question('What\'s the length of your rectangle ? ');
let width = readlineSync.question('What\'s the width of your rectangle ? ');
let area = surfaceCalculation(length, width)
console.log('Your rectangle has an area of ' + area + ' square meters.');

