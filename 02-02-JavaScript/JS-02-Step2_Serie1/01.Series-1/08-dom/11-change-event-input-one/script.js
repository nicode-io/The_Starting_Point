// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {
    let a = document.getElementById('pass-one');
    let b = document.getElementById('counter');
    a.addEventListener('input', () => {
            a.value.length > 10 && (a.value = a.value.substring(0, a.value.length -1));
            b.innerHTML = a.value.length + "/10";
        }
    );
})();
