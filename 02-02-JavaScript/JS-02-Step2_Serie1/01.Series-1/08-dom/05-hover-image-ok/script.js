// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {
    let element = document.getElementsByTagName('img')[0];
    let source =  element.getAttribute('src');
    let dataHover = element.getAttribute('data-hover');
    element.addEventListener('mouseover', () => {
        element.setAttribute('src', dataHover);
    })
    element.addEventListener('mouseout', () => {
        element.setAttribute('src', source);
    })
    
})();
