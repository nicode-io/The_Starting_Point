function sayHiLater() {
    var greeting = 'Hi!';

    setTimeout(function () {
        console.log(greeting); // Timeout will have access to greeting value thanks to closure and its outer environment, even if fired later in event queue
    }, 1500);
}

sayHiLater();

function tellMeWhenDone(callback) {

    var a = 1000;
    var b = 2000;

    callback(a, b);
}

tellMeWhenDone(function (a, b) {
    console.log(a + b);
})


tellMeWhenDone(function (a) {
    console.log(a);
})


tellMeWhenDone(function (b) {
    console.log(b);
})
