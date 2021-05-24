// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {
        let gallery= [
            "../../_shared/img/bell.svg",
            "../../_shared/img/clock.svg",
            "../../_shared/img/compass.svg",
            "../../_shared/img/lemon.svg",
            "../../_shared/img/map.svg",
        ]
        let element = document.getElementsByTagName('img')[0];
        // let source =  element.getAttribute('src');
        let i = 0
    document.getElementById('next').addEventListener('click', () => {
        i++;
        // if (i === gallery.length) {
        //     i = 0;
        //     element.setAttribute('src', gallery[i]);
        // } else {
        //     element.setAttribute('src', gallery[i]);
        // }
        // And then I discover conditionnal operator oO
        i === gallery.length ? (i=0, element.setAttribute('src', gallery[i])) : element.setAttribute('src', gallery[i]);
    })
})();
