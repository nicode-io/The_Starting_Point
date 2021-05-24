// Exercise 3.1 - OK

// #1
let array = [];
for (let i = 1; i < 16; i++) {
  array.push(i);
}
console.log("The size is " + array.length);
for (let elem of array) {
  console.log("Do you want to eat a " + elem + "?");
}

// #2
let array = [];
for (let i = 100; i < 304; i++) {
  array.push(i);
}
console.log("The size is " + array.length);
for (let elem of array) {
  console.log("Do you want to eat a " + elem + "?");
}