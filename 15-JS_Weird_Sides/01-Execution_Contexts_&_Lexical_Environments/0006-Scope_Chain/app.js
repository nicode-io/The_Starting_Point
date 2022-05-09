function b() {
    console.log(myVar) // Return 1
    /**
     * WHen JS don't find a value in the current execution context,
     * it will then look in outer lexical environment for a match, in this case
     * outer reference is Global execution context where myVar = 1
     * This process is called 'Scope Chain'
     */
}

function a() {
    console.log(myVar); // undefined, cause the variable is found in the current execution context but not set yet to a value
    var myVar = 2;

    function c() {
        console.log(myVar) // Return 2, cause outer lexical environment is function a()
    }

    b();
    c();
}

var myVar = 1; // Here is the variable used in function b
a();
