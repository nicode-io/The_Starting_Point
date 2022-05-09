function makeGreeting(language) {

    return function (firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }


        if (language === 'es') {
            console.log('Ola ' + firstname + ' ' + lastname);
        }
    }
}


var greetEnglish = makeGreeting('en'); // Outer env execution context gives value of language = 'en', taking advantage of closure for language value
var greetSpanish = makeGreeting('es'); // Outer env execution context gives value of language = 'es', taking advantage of closure for language value

greetEnglish('Nico', 'De'); // Hello Nico De
greetSpanish('Nico', 'De'); // Ola Nico De
// console.log(language); // ERROR - Not directly accessible cause in closure memory only




