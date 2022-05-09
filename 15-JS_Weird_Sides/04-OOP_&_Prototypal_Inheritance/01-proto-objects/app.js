var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

var nico = {
    firstname: 'Nico',
    lastname: 'Deno'
}

// Never use this way in real life because of performance issues
// FOR DEMO ONLY
nico.__proto__ = person // object inherit person prototype
console.log(nico.getFullName()); // Nico Deno
console.log(nico.firstname); // Nico and not Default because of prototype chain, first found is displayed

var jane = {
    firstname: 'jane'
}

jane.__proto__ = person;
console.log(jane.getFullName()); // Jane Default
