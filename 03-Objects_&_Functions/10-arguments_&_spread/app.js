function greet(firstname, lastname, language, ...other) {
    if (arguments.length === 0) {
        console.log('Missing Parameters');
        console.log('-------')
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('-------');
    console.log(arguments);
    console.log('arg 0: ' + arguments[0])
    console.log('-------');
    console.log(other[0]);
}

greet(); // undefined undefined undefined
greet('Nicode'); // Nicode undefined undefined and [Arguments] { '0': 'Nicode' }
greet('Nico', 'De', 'EN'); // Nico De EN and [Arguments] { '0': 'Nico', '1': 'De', '2': 'EN' }
greet('Nico', 'De', 'EN', 'Bazar', 'In', 'Spread', 'Operator')


function greet2(firstname, lastname, language = 'EN') {
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('-------')
}

greet2(); // undefined undefined EN
