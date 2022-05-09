// Function constructor - building prototypes
function Person(firstname, lastname) { // use the first capital letter to know that this function need to be invoked with "new" keyword
    console.log(this); // Person {}
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Function Invoked')
    console.log(this); // Person { firstname: firstname param value, lastname: lastname param value }
}

// Modify the prototype of objects created by a function constructor
// This prototype IS NOT the prototype of the function
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var nico = new Person();
console.log(nico.__proto__);
/*
 {
    getFullName: [Function (anonymous)],
 }
*/


Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(nico.__proto__);
/*
 {
    getFullName: [Function (anonymous)],
    getFormalFullName: [Function (anonymous)]
 }
*/

