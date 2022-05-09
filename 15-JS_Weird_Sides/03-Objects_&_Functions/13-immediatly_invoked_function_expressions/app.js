// function statement
function greet(name) {
    console.log('Hello ' + name);
}

greet('Nicode');


// using a function expression
var greetFunction = function (name) {
    console.log('Hello ' + name);
};

greetFunction('Nicode');

// using an Immediately Invoked Function Expression => IIFE
var greeting = function (name) {
    return ('Hello ' + name);
}('Nicode');

console.log(greeting) // Hello Nicode, function is executed immediately and store return value in greeting variable
// console.log(greeting()) // ERROR - string is not a function


"I am a string"; // No error (do nothing)
{
    name: 'Nicode'
} // No error (do nothing)

/*
function(name) {
    return 'Hello ' + name;
}

ERROR - Engine think it's a function statement
*/
var firstname = 'Nico';

(function (name) {
    var greetings = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    return 'Hello ' + name;
}(firstname)); // IIFE - No error because of wrapping with parentheses tricking the parser, executed on the fly

console.log(greetings);
