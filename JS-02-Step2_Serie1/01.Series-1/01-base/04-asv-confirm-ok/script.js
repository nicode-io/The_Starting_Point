
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let confirmation = false;
    while (!confirmation) {
        let questionOne = prompt('What\'s your age ?');
        let questionTwo = prompt('What\'s your gender ?');
        let questionThree = prompt('In wich town do you live ?');
        confirmation = confirm('So you\'re a ' + questionTwo + ', you\'re ' + questionOne + ' and you live in ' + questionThree);
    } 
    alert(confirmation);
})();
