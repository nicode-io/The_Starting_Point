// Exercise 3.2 - OK

// #1
// Array creation
let array = [];
let sum = 0
for (let i = 1; i < 6; i++) {
  array.push(i+1);
}
// Sum and average 
for (let i = 1; i < 6; i++) {
  sum += i;
}
let average = (sum / array.length);
console.log('The average of this array is: ' + average + '. The sum is equal to ' + sum + '.');

// #2
// Array creation
let array = [];
let sum = 0
for (let i = 100; i < 104; i++) {
  array.push(i+1);
}
// Sum and average 
for (let i = 100; i < 104; i++) {
  sum += i;
}
let average = (sum / array.length);
let roundedAverage = Math.floor(average);
console.log('The floored average, of this array is: ' + roundedAverage + '. The average is ' + average + '. The sum is equal to ' + sum + '.');