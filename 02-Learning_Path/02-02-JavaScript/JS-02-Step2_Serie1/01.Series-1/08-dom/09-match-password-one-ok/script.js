// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {
    document.getElementById('run').addEventListener('click', () => {
        let a = document.getElementById('pass-one').value;
        let b = document.getElementById('pass-two').value;
        a === b ? console.log('good') : document.getElementById('pass-two').style.borderColor = "red";
        
    })
})();
