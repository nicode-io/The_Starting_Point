
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    document.getElementById("run").addEventListener("click", () => {
            for (let i = 0; i < 12; i++) {
                date.setDate(13);
                date.setMonth(i);
                date.setYear(year);
                if (date.getDay() == 5) {
                    alert(month[i]); 
            }
        }
    });
})();
