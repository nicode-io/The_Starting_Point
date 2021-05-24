// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {
    document.getElementById('run').addEventListener('click', () => {
        let fruits = [
            "apple",
            "pear",
            "raspberry",
            "tomatos",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peache",
            "grap",
            "cherry",
        ];
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    });
})();
