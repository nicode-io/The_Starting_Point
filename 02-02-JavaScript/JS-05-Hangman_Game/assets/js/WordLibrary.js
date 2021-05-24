/**
 * Library of words and word selector for hangman game
 */
class WordLibrary {

    static wordEasy = ['seven', 'world', 'about', 'again', 'heart', 'pizza', 'water', 'happy', 'sixty', 'board', 'month', 'angel', 'death', 'green', 'music', 'fifty', 'three', 'party', 'piano', 'mouth', 'woman', 'sugar', 'amber', 'dream', 'apple', 'laugh', 'tiger', 'faith', 'earth', 'river', 'money', 'peace', 'forty', 'words', 'smile', 'abate', 'house', 'alone', 'watch', 'lemon', 'south', 'anime', 'after', 'santa', 'women', 'admin'];
    static wordMedium = ['accept', 'access', 'action', 'afraid', 'battle', 'beauty', 'author', 'circle', 'coffee', 'dealer', 'danger', 'desert', 'dinner', 'doctor', 'engine', 'escape', 'factor', 'fabric', 'fallen', 'flight', 'future', 'growth', 'friend', 'honest', 'hidden', 'linked', 'lesson', 'listen', 'little', 'luxury', 'market', 'master', 'losing', 'mature', 'memory', 'member', 'medium', 'office', 'option', 'output', 'orange', 'origin', 'palace'];
    static wordHard = ['thirteen', 'thursday', 'princess', 'children', 'fourteen', 'assonant', 'language', 'elephant', 'mountain', 'abdicate', 'memories', 'darkness', 'february', 'sandwich', 'calendar', 'equation', 'birthday', 'treasure', 'equation', 'tomorrow', 'remember', 'daughter', 'ordinary', 'hospital', 'squirrel', 'fucntion', 'building', 'drooping', 'sentence', 'november', 'personal', 'champion', 'violence', 'tommorrow'];


    /**
     * Choose a random word within the choosen difficulty word's array
     * @param {*} difficulty 
     */
    static chooseWord(difficulty) {
        if (difficulty == 'easy') {
            return(this.wordEasy[Math.floor(Math.random() * this.wordEasy.length)])
        } else if (difficulty == 'medium') {
            return(this.wordMedium[Math.floor(Math.random() * this.wordMedium.length)])
        } else if (difficulty == 'hard') {
            return(this.wordHard[Math.floor(Math.random() * this.wordHard.length)])
        } else {
            return(this.wordEasy[Math.floor(Math.random() * this.wordEasy.length)])
        }
    }
}