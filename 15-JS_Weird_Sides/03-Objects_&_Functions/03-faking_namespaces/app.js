var greet = 'Hello !';
var greet = 'Ola !'; // These two variables collides

console.log(greet);

var english = {}; // Create a container
var spanish = {};

english.greetings.greet = "Hello"; // Error undefined, cannot create on the fly chaining two dots operators
spanish.greet = "Ola";

console.log(english);
console.log(spanish);
