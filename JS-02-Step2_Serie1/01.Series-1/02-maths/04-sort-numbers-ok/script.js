// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let numSerie = document.getElementById("numbers").value;
        let arr = numSerie.split(', ');
        alert(arr.sort((a, b) => a - b));
    });

})();
