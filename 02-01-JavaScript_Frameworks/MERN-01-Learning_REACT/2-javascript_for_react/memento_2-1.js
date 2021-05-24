// Chapter 2. Javascript for REACT - Memento 2.1

// INDEX
// @14  Template strings @line 14
// @31  Passing arguments in function @line 31
// @37  Default Argument @line 37
// @43  Arrow functions @line 43
// @60  Returning objects in arrow function @line 60
// @68  Destructuring object @line 68
// @82  Destructuring arrays @line 82
// @88  Object literal enhancement @line 88
// @105 The Spread operator @line 105

// Template String
    let lastName = 'Denoël';
    let firstName = 'Nicolas';
    let middleName = 'Egghead';
    console.log(`${lastName}, ${firstName} ${middleName}\n`);

    const email = ` 
    Hello ${firstName},

    Thanks for ordering ${lastName}.

    See you soon, 

    ${middleName}\n
    ` 
    console.log(email);

//  Passing argument in function
    const logCompliment = function(firstName, message) {
        return(`${message}, ${firstName} \n`);
    }
    console.log(logCompliment('Nicolas', 'You look busy'));

// Default argument
    const logCompliment_two = function(firstName = 'world', message = 'Hello') {
        return(`${message}, ${firstName} \n`);
    }
    console.log(logCompliment_two());

// Arrow functions
    const lordify = (firstName, land = 'Groland') => `${firstName} of ${land}\n`;
    console.log(lordify('Nico'));

    const lordify_two = (firstName, land) => {
        if (!firstName) {
            throw new Error('FirstName required');
        }
        if (!land) {
            throw new Error('Land required');
        }

        return `${firstName} of ${land}\n`;
    }
    // console.log(lordify_two('Nico')); => Error: Land required
    console.log(lordify_two('Nico', 'Groland'));

// Returning objects in arrow functions
    const person = (firstName, lastName) => ({
        first: firstName,
        last: lastName
    })
    console.log(person('Thomas', 'Edison'));
    console.log('');

// Destructuring objects
    const sandwich = {
        bread: 'dutch crunch',
        meat: 'tuna',
        cheese: 'swiss',
        toppings: ['lettuce', 'tomato', 'mustard']
    };
    let { bread, toppings } = sandwich;
    bread = 'garlic'
    toppings = ['chili']
    console.log(bread, toppings);
    console.log(sandwich.bread, sandwich.toppings);
    console.log('');

// Destructuring arrays
    const [firstAnimal] = ['horse', 'mouse', 'cat'];
    console.log(firstAnimal);
    const [, , thirdAnimal] = ['horse', 'mouse', 'cat'];
    console.log(thirdAnimal);

// Object Literal Enhancement
    const skier = {
        name: 'Nick',
        sound: 'Hurray',
        powderYell() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell} ${yell} !!!`);
        },
        speed(kmh) {
            this.speed = kmh;
            console.log('speed:', kmh, 'Km/H');
        }
    };
    console.log(skier);
    console.log(skier.speed(60));
    console.log('');

// The Spread Operator
    const peaks = ['Himalaya', 'Everest', 'White Peak'];
    const canyons = ['Ward', 'Blackwood'];
    const tahoe = [...peaks, ...canyons];
    console.log(tahoe.join(', '));
    console.log('');

    const [last] = [...peaks].reverse(); // We don't mutate the original array 'pure operation'
    console.log(last);
    console.log(peaks.join(', '));
    console.log('');

    const lakes = ['Donner', 'Marlette', 'Fallen Leaf', 'Cascade'];
    const [first, ...others] = lakes;
    console.log(others.reverse().join(', '));
    console.log('');

    function directions(...arguments) {
        let [start, ...remaining] = arguments;
        let [finish, ...stops] = remaining.reverse();
        console.log(`Drive through ${arguments.length} towns`);
        console.log(`Starting in ${start}`);
        console.log(`The destination is ${finish}`);
        console.log(`Stopping ${stops.length} times in between`);
    }
    directions('Charleroi', 'Liège', 'Bruxelles', 'Anvers', 'Groland', 'Codeland');
    console.log('');

    const inTheDay = {
        breakfast: 'eggs',
        lunch: 'fish and chips'
    }
    const dinner = 'chicken and fries';
    const backpackingMeals = {
        ...inTheDay, 
        dinner
    }
    console.log(backpackingMeals);
    console.log('');

