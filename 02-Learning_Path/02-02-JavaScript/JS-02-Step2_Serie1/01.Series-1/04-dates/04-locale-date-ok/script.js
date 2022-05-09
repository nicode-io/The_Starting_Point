
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {
    
    let weekDayName = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    let monthName = ['Janvier','Février','Mars','Avril','May','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
    let actual = new Date();
    let result = weekDayName[actual.getDay()] + " " + actual.getDate() + " " + monthName[actual.getMonth()] + " " + actual.getFullYear() + ", il est " + actual.getHours() + "H" + actual.getMinutes();
    document.getElementById("target").innerHTML = result;

})();
