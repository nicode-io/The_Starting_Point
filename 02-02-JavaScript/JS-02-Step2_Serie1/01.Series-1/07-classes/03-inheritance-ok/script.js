// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    document.getElementById('run').addEventListener('click', () => {
        class Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
        }
        class Cat extends Animal {
            constructor(name, greeting) {
                super();
                this.name = name;
            }
            static greeting = 'Miahouse';
        }
        class Dog extends Animal {
            constructor(name, greeting) {
                super();
                this.name = name;
            }
            static greeting = 'Woof';
        }
        let felix = new Cat('DaHouseCat');
        let pluto = new Dog('Pluto');
        console.log(felix.sayHello());
        console.log(pluto.sayHello());
    })
})()
