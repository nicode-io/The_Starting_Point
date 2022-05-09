var a = 3 + 4;
console.log(a);

/**
 * Under the hood it uses infix notation to execute
 * a function which add two values
 *
 * So at place of this:
 * function +(a, b) { return a + b}
 * JS allow :
 * a + b (where + operator can be considered as the function name)
 */

var b = 4 - 2;
console.log(b);

var c = 4 < 3;
console.log(c); // false


// Precedence & associativity
var d = 3 + 4 * 5; // 23, * is higher precedence (14 vs 13 for +)
console.log(d);

var e = 2, f = 3, g = 4;
e = f = g;
console.log(e); // 4 assign associativity is right-to-left
console.log(f); // 4
console.log(g); // 4

var h = (3 + 4) * 5
console.log(h) // 35, () is higher precedence

// Coercion
var i = 1 + '2' + false
console.log(i); // 12false (string), 1 as been coerced to string and chain it to '2', the same for boolean value

console.log(1 < 2 < 3) // true, under the hood 1 < 2 (true) => true (1) < 3 => true
console.log(3 < 2 < 1) // true, under the hood 3 < 2 (false which is 0 when converted to Number) < 1 => 0 < 1 => true

console.log(3 === "3")


// Existence and boolean
Boolean(undefined) // false
Boolean(null) // false
Boolean("") // false

let booltest; // undefined
if (booltest) { // false
    console.log('booltest')
}
