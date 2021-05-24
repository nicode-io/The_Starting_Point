// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {
    (() => {
        document.getElementById('fix-part-one').addEventListener('click',  updateValue);
        document.getElementById('fix-part-two').addEventListener('click',  updateValue);
        document.getElementById('fix-part-three').addEventListener('click',  updateValue);
        document.getElementById('fix-part-four').addEventListener('click',  updateValue);
    
        function updateValue() {
            let currentId = event.currentTarget.getAttribute('id');
            let newId = currentId.slice(4);

            let min = parseInt(document.getElementById(newId).getAttribute('data-min'));
            let max = parseInt(document.getElementById(newId).getAttribute('data-max'));
            let rand = Math.floor(Math.random() * (max - min)) + min;
            if (rand < 9) {
                rand = '0' + rand;
            } 
            document.getElementById(newId).value = rand;
            document.getElementById('target').innerHTML = '0' + document.getElementById('part-one').value + ' ' + document.getElementById('part-two').value + ' ' + document.getElementById('part-three').value + ' ' + document.getElementById('part-four').value
        }
    })();
})();
