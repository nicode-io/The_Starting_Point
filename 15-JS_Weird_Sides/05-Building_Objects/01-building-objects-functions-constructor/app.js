// Function constructor
function Person(firstname, lastname) {
    console.log(this); // Person {}
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Function Invoked')
    console.log(this); // Person { firstname: firstname param value, lastname: lastname param value }

    // return { greeting: 'Hello ' + this.firstname}; No return for a function constructor, it works, but it's become a classic function
}

var nico = new Person('Nico', 'Den'); // new keyword creates an empty object than invoke the function
var jane = new Person('Jane', 'Da');
console.log(nico); // Person { firstname: 'Nico', lastname: 'Deno' }
console.log(jane); // Person { firstname: 'Jane', lastname: 'Da' }

