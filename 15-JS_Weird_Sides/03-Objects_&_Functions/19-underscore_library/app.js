const _ = require('./underscore.js');

var arr1 = [1, 2, 3];

var arr2 = _.map(arr1, function (item) {
    return item * 3
});
console.log(arr2); // [ 3, 6, 9 ]

var arr3 = _.filter([2, 3, 4, 5, 6, 7, 8], function (item) {
    return item % 2 === 0
});
console.log(arr3); // [ 2, 4, 6, 8 ]

