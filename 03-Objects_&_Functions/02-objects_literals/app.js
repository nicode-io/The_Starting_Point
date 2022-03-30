var person = {
    name: 'Nicode',
    address: {
        street: 'Liberty Street',
        city: 'Nivelles'
    }
};

console.log(person);

function greet(person) {
    console.log('Hi ' + person.name);
}

greet(person); // Use existing object
greet({name: 'Nico'}); // Create object on the fly to be used as param

// We can mix literals, dot cause engine behave the same with all syntax styles
person.address2 = {
    street: 'Another address'
}





