// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array

// explanation: https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

(() => {
    document.getElementById('run').addEventListener('click', () => {
        const fruits = [
            "cerise",
            "durian",
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "fraise",
            "durian",
            "pêche",
            "cerise",
            "raisin",
            "cerise",
        ];
        console.log(Array.from(new Set(fruits)));
    });
})();

