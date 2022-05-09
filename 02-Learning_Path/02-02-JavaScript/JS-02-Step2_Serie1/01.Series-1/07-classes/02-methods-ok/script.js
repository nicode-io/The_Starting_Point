//07-classes/02-methods/script.js - 7.2: methods


(() => {
    document.getElementById('run').addEventListener('click', () => {
        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            };
            sayHello() {
                alert('Hello, ' + this.firstname + ' ' + this.lastname);
            }
        }
        let a = new Person('Brik', 'Brok');
        a.sayHello();
    })
})();
