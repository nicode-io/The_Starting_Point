
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            alert('FiZzBuZz');
        } else if (i % 5 == 0) {
            alert('BuZz');
        } else if (i % 3 == 0) {
            alert('FiZz');
        } else {
            alert(i);
        }
    }

})();
