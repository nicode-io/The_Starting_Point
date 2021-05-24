
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let arr = []
        for (let i = 1; i < 22; i++) {
            arr.push(Math.pow(i, 2));
        }
        alert(arr);
    });

})();
