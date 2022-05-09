function greet() {
    // The code we write here is the invocable part of an object and accessible with greet()
    console.log('Hi')
}

greet.language = 'english';
console.log(greet) // [Function: greet] { language: 'english' }
console.log(greet.language) // english, functions are objects

