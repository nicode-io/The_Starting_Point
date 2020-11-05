// Exercise 3.4 - OK

// Array creation
let array = [];
for (let i = 1; i < 101; i++) {
  array.push(i);
}
// Select min/max
let min = Math.min.apply(Math, array);
    max = Math.max.apply(Math, array);
console.log('The minimum value in this array is : ' + min + ' and the maximum value in this array is : ' + max);