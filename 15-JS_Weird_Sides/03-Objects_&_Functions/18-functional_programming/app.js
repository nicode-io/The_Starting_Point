function mapForEach(arr, fn) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }

    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1); // [ 1, 2, 3 ]

console.log(mapForEach(arr1, function (item) {
    return item * 2;
})); // [ 2, 4, 6 ]

var arr2 = mapForEach(arr1, function (item) {
    return item > 2;
})
console.log(arr2); // [ false, false, true ]

var arr3 = mapForEach(arr1, function (item) {
    if (item % 2 === 0) {
        return `${item} is even`;
    }
    return `${item} is odd`;
})
console.log(arr3);

// That's how map build-in works under the hood
console.log(arr1.map(item => {
    if (item % 2 === 0) {
        return `${item} is even`;
    }
    return `${item} is odd`;
}))

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4); // [ false, true, true ]


// Avoid having to use bind and this on every call
var checkPastLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter); // Create and return an object which is a function with a defined context and params
}
var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);
