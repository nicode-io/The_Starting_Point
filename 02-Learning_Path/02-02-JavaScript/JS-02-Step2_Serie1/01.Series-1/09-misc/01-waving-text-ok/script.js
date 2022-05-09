// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    let target = document.getElementById('target');
    let origin = target.innerHTML;
    let fondDeSalle = origin.length; // The distance between the right and left walls of the dancefloor
    let i = 0;
    function change() {
        // In french "Accroche tes mains à ma taille, c'est la chenille ..."
        let wave = origin.substring(0, i) + 
        '<span style="font-size:2rem; color: #0F398C;">' + origin.substring(i, i+1) + '</span>' + 
        '<span style="font-size:3rem; color: #04C3D8;">' + origin.substring(i+1, i+2) + '</span>' + 
        '<span style="font-size:4rem; color: #ABE5F2;">' + origin.substring(i+2, i+3) + '</span>' + 
        '<span style="font-size:5rem; color: #04D8C3;">' + origin.substring(i+3, i+4) + '</span>' + 
        '<span style="font-size:6rem; color: #CDF2EE";>' + origin.substring(i+4, i+5) + '</span>' + 
        '<span style="font-size:5rem; color: #04D8C3;">' + origin.substring(i+5, i+6) + '</span>' + 
        '<span style="font-size:4rem; color: #ABE5F2;">' + origin.substring(i+6, i+7) + '</span>' + 
        '<span style="font-size:3rem; color: #04C3D8;">' + origin.substring(i+7, i+8) + '</span>' + 
        '<span style="font-size:2rem; color: #0F398C;">' + origin.substring(i+8, i+9) + '</span>' + 
        origin.substring(i+9);
        target.innerHTML = wave;
    }
    let dance = false;
    function move() {
        if (dance === false) {
            if (i < (fondDeSalle-9)) { // Let's go right
                change();
                i++;
            } else {
                dance = true;
            }
        } else { // Let's go left
            if (i > 0) { 
                change();
                i--;
            } else {
                dance = false;
            }
        }
    }
    setInterval(move, 30);
})();
