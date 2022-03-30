function greet(whattosay) {

    return function (name) {
        console.log(whattosay + ' ' + name)
    }

}

// Closure has kept in memory the value of "whattosay" parameter through outer environment even
// if the execution stack of greet is gone, allowing us to execute a subsequent function
greet('Hi')('Nicode'); // Hi Nicode

var sayHi = greet('Hi');
sayHi('Nicode'); // Hi Nicode


// weird closures example (except when you understand under the hood mechanic)
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () { // function is not invoked here just created
                console.log(i);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();
fs[0](); // 3 function inside array is invoked here, value of i in current outer environment is 3
fs[1](); // 3 same outer environment than function above
fs[2](); // 3 same outer environment then function above


// !!! Behaviour drastically change if using let keyword
function newBuildFunctions() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(
            function () { // function is not invoked here just created
                console.log(i);
            }
        )
    }

    return arr;
}

let fs2 = newBuildFunctions();
fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2

// Same behaviour than let keyword but with ES5 specs
function es5BuildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) { // function is now invoked here, j is the current incremented value of i
                return function () {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var fs3 = es5BuildFunctions();
fs3[0](); // 0
fs3[1](); // 1
fs3[2](); // 2
