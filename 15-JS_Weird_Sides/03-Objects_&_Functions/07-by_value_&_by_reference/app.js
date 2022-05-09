// by VALUE (primitives)
var a = 3;
var b;

b = a; // Create new stack in memory for b and copy value of a
a = 2;

console.log(a); // 2
console.log(b); // 3


// by REFERENCE (all objects including functions)
var c = {greeting: 'Hi'};
var d;

d = c; // Points d to the same address as c

c.greeting = 'Ola' // Mutate c and so d which is a pointer to c

console.log(c); // { greeting: 'Ola'}
console.log(d); // { greeting: 'Ola'}


// by REFERENCE (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hello'; // mutate
}

changeGreeting(d); // Mutate d and c

console.log(c); // { greeting: 'Hello'}
console.log(d); // { greeting: 'Hello'}


// equals operator sets up new memory space (new address)
c = {greeting: 'Howdy'};

console.log(c); // { greeting: 'Howdy'}
console.log(d); // { greeting: 'Hello'}
