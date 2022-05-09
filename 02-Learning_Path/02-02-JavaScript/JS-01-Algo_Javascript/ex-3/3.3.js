// Exercise 3.3 - OK - BONUS OK

// #1
let array =['Disco Elysium', 'Satisfactory', 'Anno'];
let arrayCopy = [];
for (let elem of array) {
  arrayCopy.push(elem);
}
console.log(array, arrayCopy);

// #2
let array =['Disco Elysium', 'Satisfactory', 'Anno'];
let arrayCopy = array.map((x) => x);
console.log(array, arrayCopy);