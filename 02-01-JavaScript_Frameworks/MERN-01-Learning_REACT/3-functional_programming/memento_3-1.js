// Chapter 3. Functional Programming - Memento 3.1

// INDEX
// @12  Imperative vs Declarative
// @51  Data transformation - Filter 
// @60  Data transformation - Map 
// @81  Data transformation - Reduce
// @122 Recursion
// @141 Composition
// @150 High-order function

// Imperative vs Declarative
    // Imperative
    const string = 'Restaurants in Hanalet';
    var urlFriendly = '';
    
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            urlFriendly += '-';
        } else {
            urlFriendly += string[i];
        }
    }
    console.log(urlFriendly);

    // Declarative
    const string_two = 'Restaurant in Hanalet';
    const urlFriendly_two = string_two.replace(/ /g, '-');
    console.log(urlFriendly_two);
    console.log('');

    // Imperative DOM example
    // const target = document.getElementById('target');
    // const wrapper = document.createElement('div');
    // const headline = document.createElement('h1');

    // wrapper.id = 'welcome';
    // headline.innerText = 'Hello World';
    // wrapper.appendChild(headline);
    // target.appendChild(wrapper);

    // Declarative DOM example - REACT component
    // const { render } = ReactDOM;
    // const Welcome = () => (
    //     <div id ='welcome'>
    //         <h1>Hello World</h1>
    //     </div>
    // )
    // render(<Welcome />, document.getElementById('target'));

// Data transformation - Array Filter
    const schools = ['Yorktown', 'Washington', 'Wakefield'];
    const wSchools = schools.filter(school => school[0] === 'W');
    console.log(wSchools);
    const cutSchool = (cut, list) => list.filter(school => school !== cut);
    console.log(cutSchool('Washington',schools).join(', '));
    console.log(schools.join(', '));
    console.log('');

// Data transformation - Map
    const highSchools = schools.map(school => `${school} High School`);
    console.log(highSchools);
    const highSchoolsObjects = schools.map(school => ({ name: school}));
    console.log(highSchoolsObjects);
    console.log('');

// Data transformation - Map - Object in array
    const schools_two = {
        'Washington': 10,
        'Yale': 8,
        'Oxford': 9,
        'Wakefield': 5,
    }
    const schoolArray = Object.keys(schools_two).map(key => ({
        name: key,
        wins: schools_two[key]
    }));
    console.log(schoolArray);
    console.log('');

// Data transformation - Reduce - Find maximum number in an array
    const numbers = [21, 42, 18, 64, 63, 34, 40];
    const max = numbers.reduce((max, value) => (value > max ? value : max), 0);
    console.log(max);
    console.log('');

// Data Transformation - Reduce - Array into object
    const colors = [
        {
            id: 'xekare',
            title: 'rad red',
            rating: 3
        },
        {
            id: 'jbwsof',
            title: 'big blue',
            rating: 2
        },
        {
            id: 'gfrqgrq',
            title: 'grizzly grey',
            rating: 5
        },
        {
            id: 'kiutk',
            title: 'Banana',
            rating: 1
        },
    ]
    const hashColors = colors.reduce((hash, { id, title, rating}) => {
        hash[id] = {title, rating};
        return hash;}, {}); // Returns hash on an empty object
    console.log(hashColors);
    console.log('');

// Data Transformation - Reduce - Keep unique value in array
    const colors_two = ['red', 'red', 'red', 'blue', 'green', 'yellow', 'blue', 'orange', 'blue', 'green', 'yellow'];
    const uniqueColors = colors_two.reduce((unique, color) =>
        unique.indexOf(color) !== -1 ? unique : [...unique, color], []);
    console.log(uniqueColors);

// Recursion - Countdown
    const countdown = (value, fn) => {
        fn(value);
        return value > 0 ? countdown(value - 1, fn) : value;
    };
    countdown(10, value => console.log(value));
    console.log('');

// Recursion - Countdown clock 
    const countdownClock = (value, fn, delay = 1000) => {
        fn(value);
        return value > 0
            ? setTimeout(() => countdownClock(value - 1, fn, delay), delay)
            : console.log('action: modify DOM');
    };
    const log = value => console.log(value);
    countdownClock(10, log)
    console.log('');

// Composition
    const template = 'hh:mm:ss tt';
    const clockTime = template
        .replace('hh', '03')
        .replace('mm', '33')
        .replace('ss', '33')
        .replace('tt', 'PM');
    console.log(clockTime);

// High-order function example
    // const compose = (...functions) => arg => 
    //     functions.reduce((composed, f) => f(composed), arg);