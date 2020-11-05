// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {
    // localStorage.clear();
    let save = localStorage.getItem('counti');
    document.getElementById('target').innerHTML = save;
    if (save == undefined) {
        save = 0;
    }
    document.getElementById('increment').addEventListener('click', () => {
        save++;
        document.getElementById('target').innerHTML = save;
        localStorage.setItem('counti', save);
    })
})();
