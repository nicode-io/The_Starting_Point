// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    document.getElementById('run').addEventListener('click', () => { 
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push((Math.floor(Math.random() * 100)+1));
            document.getElementById('n-' + (i+1)).innerHTML = arr[i];
        };
        let sum = arr.reduce(function(a, b){
            return a + b;
        }, 0);
        document.getElementById('min').innerHTML = Math.min.apply(Math, arr);
        document.getElementById('max').innerHTML = Math.max.apply(Math, arr);
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = (sum / arr.length);
    });
})();
