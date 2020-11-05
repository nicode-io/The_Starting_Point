// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {
    document.getElementById('run').addEventListener('click', () => {
        let a = document.getElementById('pass-one').value;
        let b = document.getElementById('pass-two').value;
        let c = document.getElementById('pass-two');
        a === b ? console.log('good') : c.className += 'error';
    })
})();
