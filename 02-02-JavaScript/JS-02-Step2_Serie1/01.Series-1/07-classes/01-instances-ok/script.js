// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    document.getElementById('run').addEventListener('click', () => { 
        class Cat {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }
        catOne = new Cat("Skitty", 9);
        catTwo = new Cat("Pixel", 6);
        console.log('Hello we are two new cats: I\'m ' + catOne.name + ' and I\'m ' + catTwo.name + '. We\'re ' + catOne.age + ' and ' + catTwo.age + '. Cats are nice !');
    });
})();
