// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    document.getElementById('run').addEventListener('click', () => {    
        const keys = ["name", "species", "age", "gender", "color"];
        const values = ["Skitty", "cat", 9, "female", "tabby"];
        let result = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]))
        console.log(result);
    });
})();
