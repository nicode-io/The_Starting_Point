// use BIND to specify 'this' object
var person = {
    firstname: 'Nico',
    lastname: 'De',
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // Failed, because this keyword make reference to global object
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---- BIND ----');
}

var logPersonName = logName.bind(person); // bind allow us to associate function with a specific 'this' object, here the 'person' object 'this' object

logPersonName('en');
/*
 Logged: Nico De
 Arguments: en undefined
 --------
*/

// Another way to use bind
var logName2 = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---- ANOTHER ----');
}.bind(person);
logName2('en', 'es');
/*
 Logged: Nico De
 Arguments: en es
 --------
*/


// Use CALL to invoke function
logName.call(person, 'en', 'es'); // first param is the 'this' object, then other params

// Use APPLY to invoke function, notice it needs an array for parameters definition
logName.apply(person, ['en', 'es']); // first param is the 'this' object, second is an array of params

// !! Note if we delete semicolon on above line how the code is broken

// IIFE with APPLY
(function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // Failed, because this keyword make reference to global object
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----IIFE APPLY ----');
}).apply(person, ['en', 'es']);

// Function borrowing
var person2 = {
    firstname: 'Deni',
    lastname: 'Code',
}

console.log(person.getFullName.apply(person2));

// Function currying
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // 8 as we set value of first param with BIND

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4)); // 12 as we set value of first param with BIND
