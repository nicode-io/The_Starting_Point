var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var nico = Object.create(person);
console.log(nico); // Empty object {} with prototype pointing to person prototype
nico.firstname = 'Nico';
nico.lastname = 'Deno';
nico.formalGreet = function() { return this.lastname + ', ' + this.firstname};
console.log(nico.greet()); // Hi Nico => accessed through nico prototype
console.log(nico.formalGreet()); // Deno, Nico => accessed through nico object
console.log(nico.__proto__); // { firstname: 'Default', lastname: 'Default', greet: [Function: greet] }

console.log(nico);
/*
Notice that with pure inheritance the nico object does not contain greet method
{
  firstname: 'Nico',
  lastname: 'Deno',
  formalGreet: [Function (anonymous)]
}
 */


// Older browser without Object.create
// Using polyfill to add feature to prototype
if (!Object.create2) { // here we name Object.create2 for demo working but in real life it's Object.create
    Object.create2 = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter');
        }
        function F() {}
        F.prototype = o; // Give the prototype to the object supplied as param
        return new F(); // Return the new object with prototype
    }
}

var nico2 = Object.create2(person);
console.log(nico2); // {}
console.log(nico2.__proto__); // { firstname: 'Default', lastname: 'Default', greet: [Function: greet] }

