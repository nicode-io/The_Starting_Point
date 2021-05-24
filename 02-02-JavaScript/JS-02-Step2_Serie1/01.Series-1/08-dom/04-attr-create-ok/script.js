// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {
    let element = document.getElementById('source');
    let dataImage = element.getAttribute('data-image');
    document.getElementById('target').innerHTML = ('<img src=' + dataImage + '/>');
    element.remove();
})();
