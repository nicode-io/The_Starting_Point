let play;
function launchGame(difficulty) {
    play = new Hangman(difficulty);
    play.game();
}
document.getElementById('easyGame').addEventListener('click', () => launchGame('easy'))
document.getElementById('mediumGame').addEventListener('click', () => launchGame('medium'))
document.getElementById('hardGame').addEventListener('click', () => launchGame('hard'))



