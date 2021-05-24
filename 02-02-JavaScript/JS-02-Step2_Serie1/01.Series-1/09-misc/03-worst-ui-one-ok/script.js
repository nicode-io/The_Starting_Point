// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {
    function update() {
        let sliderValue = document.getElementById('slider').value;
        document.getElementById('target').innerHTML = ('0' + sliderValue);
    }  
    setInterval(update, 20); 
})();
