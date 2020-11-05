/**
 * Hangman Game
 */
class Hangman {
    constructor(difficulty) {
        this.word = WordLibrary.chooseWord(difficulty);
        this.wordLength = this.word.length;
        this.score = 0;
        this.hangParts = 0;
    }

    /**
     * Launch the methods the game needs to run
     */
    game() {
        document.getElementById('win').style.visibility = 'hidden';
        document.getElementById('loose').style.visibility = 'hidden';
        this.dashLetters();
        this.alphaGrid();
        this.clickKeyboard();
        HangDraw.startDraw();
    }

    /**
     * Generate an alphabetical keyboard
     */
    alphaGrid() {
        let divKeyboard = document.getElementById('keyboard');
        divKeyboard.innerHTML = '';
        divKeyboard.style.visibility = 'visible';
        for (let char = 97; char < 123; char++) {
            let letter = String.fromCharCode(char);
            let btn = document.createElement('button');
            btn.setAttribute('id', 'btn'+letter);
            btn.innerHTML = letter;
            divKeyboard.appendChild(btn);
        }
        console.log(this.word);
    }

    /**
     * Generate a span with a dash for each letters of the word to find
     */
    dashLetters() {
        let divWord = document.getElementById('wordPrint');
        divWord.innerHTML = '';
        for (let loop = 0; loop < this.word.length; loop++) {
            let divContainer = document.createElement('span');
            divContainer.setAttribute('id', 'wordContainer'+loop);
            divContainer.innerHTML = ' _ ';
            divWord.appendChild(divContainer);
        }
    }

    /**
     * Capture user input on virtual game keyboard
     */
    clickKeyboard() {
        document.getElementById('keyboard').addEventListener('click', this.getLetter);
    }

    /**
     * Get the letter that user choose
     */
    getLetter() {
        let letter = event.target.innerHTML;
        play.checkLetter(letter);
    }

    /**
     * Check if the letter input by the user is in the word to find
     * @param {*} letter 
     */
    checkLetter(letter) {
        let goodState = false;
        for (let charTest = 0; charTest < this.word.length; charTest++) {
            if (letter == this.word[charTest]) {
                this.goodLetter(letter, charTest);
                goodState = true;
            } else {
                this.badLetter(letter, charTest);
            }
        }
        if (!goodState) {
            this.hangParts += 1;
            HangDraw.draw(this.hangParts);
        }
    }

    /**
     * Operations when a good letter is find by the user
     * @param {*} letter 
     * @param {*} charTest 
     */
    goodLetter(letter, charTest) {
        this.score += 100
        document.getElementById('points').innerHTML = this.score;
        document.getElementById('wordContainer'+charTest).innerHTML = letter;
        document.getElementById('btn'+letter).setAttribute('disabled', true);
        // document.getElementById()
        this.checkEnd();
    }

    /**
     * Operations when a bad letter is find by the user
     * @param {*} letter 
     */
    badLetter(letter) {
        document.getElementById('btn'+letter).setAttribute('disabled', true);
        document.getElementById('btn'+letter).style.boxShadow = "none";
        this.checkEnd();
    }

    /**
     * Win, loose or continue check
     */
    checkEnd() {
        if (this.score == this.word.length * 100) {
            removeEventListener('click', this.getLetter);
            document.getElementById('keyboard').style.visibility = 'hidden';
            document.getElementById('win').style.visibility = 'visible';
        } else if (this.hangParts == 5) {
            removeEventListener('click', this.getLetter);
            document.getElementById('keyboard').style.visibility = 'hidden';
            document.getElementById('loose').innerHTML = `You loose :( </br>The word was ${this.word}`
            document.getElementById('loose').style.visibility = 'visible';
        }
    }
}