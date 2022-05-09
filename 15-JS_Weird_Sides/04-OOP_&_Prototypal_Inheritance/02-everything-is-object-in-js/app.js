var a = {

}
var b = function() { };
var c = [];

console.log(a.__proto__); // Object {}
console.log(b.__proto__); // Function {}
console.log(c.__proto__); // Object(0) []
console.log(a.__proto__.__proto__); // null, already object prototype which is the root object in Javascript engine
console.log(b.__proto__.__proto__); // Object prototype
console.log(c.__proto__.__proto__); // Object prototype
// ALl methods available for these types are referred inside their prototype
