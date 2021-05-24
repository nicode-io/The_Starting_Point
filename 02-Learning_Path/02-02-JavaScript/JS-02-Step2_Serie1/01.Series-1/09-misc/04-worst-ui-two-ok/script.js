// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {
    (() => {
        document.getElementById('part-one').addEventListener('click',  updateValue);
        document.getElementById('part-two').addEventListener('click',  updateValue);
        document.getElementById('part-three').addEventListener('click',  updateValue);
        document.getElementById('part-four').addEventListener('click',  updateValue);
    
        function updateValue() {
            let min = parseInt(event.currentTarget.getAttribute('data-min'));
            let max = parseInt(event.currentTarget.getAttribute('data-max'));
            let currentValue = parseInt(event.currentTarget.innerHTML);
            if(currentValue < max){
                if(currentValue < 9) {
                event.currentTarget.innerHTML = '0' + (currentValue + 1);
                } else {
                    event.currentTarget.innerHTML = currentValue + 1;
                }
            } else {
                currentValue = min;
                if(currentValue < 9) {
                    event.currentTarget.innerHTML =  '0' + (currentValue);
                } else {
                    event.currentTarget.innerHTML = currentValue;
                }
            }
        document.getElementById('target').innerHTML = '0'+ document.getElementById('part-one').innerHTML + ' / ' + document.getElementById('part-two').innerHTML + ' ' + document.getElementById('part-three').innerHTML + ' '  + document.getElementById('part-four').innerHTML
        }
    })();
})();
