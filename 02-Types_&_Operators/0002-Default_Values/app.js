function greet(name) {
    name = name || "your name here";
    console.log('hello ' + name);
}

greet('Marc'); // hello Marc
greet(); // hello your name here, default value is used as name is undefined
greet(0) // hello your name here, be careful with zero

console.log(libraryName)
