// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById('run').addEventListener('click', () => {
        let me = {
            lastname: 'Denoel',
            firstname: 'Nicolas',
            age: 36,
            city: 'Nivelles',
            country: 'Belgium',
        };
        console.log('Hello, I\'m ' + me.firstname + ' ' + me.lastname + ', I\'m ' + me.age + ' and I live in a town called ' + me.city + ' in ' + me.country + '. Nice to meet you !' );
    });
})();
