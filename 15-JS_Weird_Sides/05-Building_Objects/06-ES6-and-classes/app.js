// JavaScript's classes are just objects too.
// Use these with pure prototypal inheritance and not like in other language patterns
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return `Hi ${this.firstname}`;
    }

    formalGreet() {
        return `${this.lastname}, ${this.firstname}`;
    }
}

var nico = new Person('Nico', 'Deno');
console.log(nico.greet()); // Hi Nico
console.log(nico.formalGreet()); // Deno, Nico

// Classes inheritance and override
class Developer extends Person { // extends set the prototype
    constructor(firstname, lastname, formalGreet) {
        super(firstname, lastname, formalGreet); // Inheritance from extended class
    }

    greet() { // override existing method
        return `Hello ${this.firstname} 42`;
    }
}

console.log(Developer.prototype); // Person {}
var nico2 = new Developer('Nicodev', 'Devtwo');
console.log(nico2.greet()); // Hello Nicodev 42
console.log(nico2.formalGreet()); // Devtwo, Nicodev
