// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)

(() => {
    document.getElementById('run').addEventListener('click', async () => {
        let persons = await window.lib.getPersons();
        try {
            persons.forEach(person => {
            console.log(person);
            });
        } catch (error) {
            console.error(error);
        }
    });
})();

