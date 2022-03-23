// b() -> works
// console.log(a) -> return undefined cause hoisting allocates memory for variables but don't know its value yet

/**
 * HOISTING: takes to the top variables and functions
 * to allocate memory for them, it's good practise not
 * to rely on this behaviour and so use functions or variables
 * before initialisation in the code flow
 * */

var a = 'Hello World'

function b() {
    console.log('Called b')
}

b();
console.log(a);
