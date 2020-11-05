// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
    document.getElementById('run').addEventListener('click', () => {
        let fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
        fruits.splice(0, 1, 'banana');
        fruits.splice(11, 1, 'kiwi');
        alert(fruits);
    });
})();
