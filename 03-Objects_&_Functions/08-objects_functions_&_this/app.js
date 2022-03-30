function a() {
    console.log(this);
    this.newVariable = 'Hello'; // Add key/value to window object
}

a(); // 'this' points to window object if run in browser
console.log(newVariable); // Hello

var b = function () {
    console.log(this);
}
b(); // 'this' points to window object if run in browser

var c = {
    name: 'The C object',
    log: function () {
        var self = this;

        this.name = 'Updated C object' // Update c object property
        console.log(this.name); // Updated C object

        var setName = function (newName) {
            this.name = newName; // Update the global object and not the current object, not good but not bug just a bad decision
            self.name = newName; // Will update C object key
        }
        setName('Updating again the C object');
        console.log(this);
    }
}

c.log();
