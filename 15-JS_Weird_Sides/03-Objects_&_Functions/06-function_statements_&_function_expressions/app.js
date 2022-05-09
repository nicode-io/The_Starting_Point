var a;

if (a === 3) { // if Statement: doesn't return a value, but condition is an Expression as it returns a value

}

greet();

// Function statement, doesn't return a value
function greet() {
    console.log('Hi')
}

// anonymousGreet() don't work as the variable is set but undefined, can't be invoked before declaration

// Function expression, it results in a value
var anonymousGreet = function () {
    console.log('Hi')
}

anonymousGreet(); // Can't be executed before declaration

function log(a) {
    a(); // Invoke function which is passed to log as params
}

log(function () { // Set a function as param
    console.log('Hi again');
});
