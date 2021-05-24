
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    document.getElementById('run').addEventListener('click', () => {
        let dateString = new Date('\'' + document.getElementById('dob-month').value + " " + document.getElementById('dob-day').value + " " + document.getElementById('dob-year').value + '\'');
        let actual = new Date();
        let yDiff = (actual.getFullYear() - dateString.getFullYear());
        let mDiff = (actual.getMonth() - dateString.getMonth());
        let dDiff = (actual.getDate() - dateString.getDate());
        if (mDiff > 0) {
            alert(yDiff);
        } else if (mDiff < 0) {
            alert(yDiff-1);
        } else {
            if (dDiff > 0) {
                alert(yDiff);
            } else if (dDiff < 0) {
                alert(yDiff - 1);
            } else {
                alert('Happy ' + yDiff + '\'s Bday, Let\'s party !');
            }
        }
    });
})();
