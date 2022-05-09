var arr = new Array(); // Just for demo, use []

arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr); // [1, 2, 3]

arr.push(false);
arr.push(function (name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
    console.log(arguments); // Object containing all function's arguments
})
arr.push({
    name: 'Nicode',
    address: 'Liberty Street'
})

console.log(arr); // [1,2,3,false, [Function (anonymous)],{ name: 'Nicode', address: 'Liberty Street' }]

arr[4](arr[5].name); // Hello Nicode

