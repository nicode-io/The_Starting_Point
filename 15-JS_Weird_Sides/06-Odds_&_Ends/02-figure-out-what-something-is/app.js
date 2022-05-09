var a = 3;
console.log(typeof a); // number

var b = "hello";
console.log(typeof b); // string

var c = {}
console.log(typeof c); // object

var d = []
console.log(typeof d); // object => weird
console.log(Object.prototype.toString.call(d)) // [object Array] => better, take the array and give it to toString method inside its own prototype (JS trick)

function Person(name) {
    this.name = name;
}

var e = new Person('Nico');
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined => make sense
console.log(typeof null); // object => bug since, like, forever ...

var z = function() {};
console.log(typeof z); // function
