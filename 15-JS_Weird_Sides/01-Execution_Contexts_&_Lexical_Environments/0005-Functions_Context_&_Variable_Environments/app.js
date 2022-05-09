function b() {
    var myVar;
    console.log(myVar) // undefined
}

function a() {
    var myVar = 2;
    console.log(myVar) // 2
    b();
}

var myVar = 1;
console.log(myVar) //1
a();
