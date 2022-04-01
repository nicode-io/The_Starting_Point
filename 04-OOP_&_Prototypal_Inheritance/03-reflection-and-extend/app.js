const _ = require('./underscore.js');

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

for (var prop in nico) { // Loop over all member of object
    console.log('prototype chain')
    console.log(prop + ': ' + nico[prop]);
    console.log('----------------')
    /*
        Send back all key and values of objects inside prototype chain
        firstname: Nico
        lastname: Deno
        getFullName: function() {
            return this.firstname + " " + this.lastname;
        }
    */

    // Get only key and values from object itself (without proto)
    if (nico.hasOwnProperty(prop)) {
        console.log('object itself');
        console.log(prop + ': ' + nico[prop]);
        console.log('-----------------')
    } // Won't send proto values (here the getFullName key/value)
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

// Underscore and many other library provide an implementation to mix
// all prototypes of objects together
_.extend(nico, jane, jim);
console.log(nico);
/*
{
  firstname: 'Nico',
  lastname: 'Deno',
  address: '111 Main St.', // extended from jane object
  getFormalFullName: [Function: getFormalFullName], // extended from jane object
  getFirstName: [Function: getFirstName] // extended from jim object
}
 */

