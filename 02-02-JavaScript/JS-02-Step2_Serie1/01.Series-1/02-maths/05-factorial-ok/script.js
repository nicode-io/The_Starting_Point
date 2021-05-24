
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let n = parseInt(document.getElementById('number').value);
        let fact = factorial(n);
        function factorial(n){
            if(n == 0 || n == 1){
                return 1;
            }else{
                return n * factorial(n-1);
            }
        }
        alert(fact);
    });

})();
