// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {
    let guessNumber = Math.floor(Math.random() * (100 - 1));
    console.log(guessNumber);
    let userChoice = prompt('Guess the number between 1 to 100');
    while (userChoice != guessNumber) {
        if (userChoice < guessNumber) {
            userChoice = prompt('Too low try again !')
        } else if (userChoice > guessNumber) {
            userChoice = prompt('Too high try again !');
        }
    }
    alert('YOU WIN !');
})();
