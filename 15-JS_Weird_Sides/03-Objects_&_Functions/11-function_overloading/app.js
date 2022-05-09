// Alternative to function overloading (not available in JS, with first class functions, cause functions are objects)
function greet(firstname, lastname, language) {
    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
        console.log('Ola ' + firstname + ' ' + lastname);
    }
}

// Create alternative function with fewer parameters
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greetEnglish('Nico', 'De'); // Hello Nico De
greetSpanish('Nico', 'De'); // Ola Nico De
