// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {
    let items = document.getElementsByClassName('target');
    for (var i=0; i < items.length; i++) {
        items[i].innerHTML = 'owned';
    }
})();
