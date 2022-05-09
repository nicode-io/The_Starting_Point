// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    document.getElementById('run').addEventListener('click', () => {
        const fruits = new Set([
            "apple",
            "pear",
            "strawberry",
            "tomato",
            "orange",
            "mandarin",
            "durian",
            "peach",
            "grape",
            "cherry",
    ]);
        fruits.delete('apple');
        fruits.delete('cherry');
        fruits.add('banana');
        fruits.add('kiwi');
        console.log(fruits);
        
    });
})();
