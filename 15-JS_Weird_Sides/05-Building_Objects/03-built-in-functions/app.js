// Update the prototype of primitive objects is allowed in JavaScript
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("Nico".isLengthGreaterThan(3)); // true
console.log("Nico".isLengthGreaterThan(5)); // false

// All String primitive have access to this new function
// Beware NOT TO override the build-in function

Number.prototype.isPositive = function() {
    return this > 0;
}

// console.log(3.isPositive()); Throw error cause engine refused to convert primitive number to boolean

var a = new Number(3); // use function constructor to create object with primitive value inside, it's NOT a number
console.log(a.isPositive()); // true

