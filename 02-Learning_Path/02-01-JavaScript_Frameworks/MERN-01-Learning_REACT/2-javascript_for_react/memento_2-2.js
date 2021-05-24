// Chapter 2. Javascript for REACT - Memento 2.2

// INDEX
// @10 Fetch & XMLHttpRequest mandatory
// @13 Simple promise with Fetch
// @20 Async / Await
// @33 Building promises
// @51 Classes

// Fetch & XMLHttpRequest mandatory line
    const fetch = require("node-fetch"); // Allow use of FETCH 
    const XMLHttpRequest = require("xhr2"); // Allow use of XMLHttpRequest in newest Node.js version

//  Simple promise with Fetch
    fetch('https://api.randomuser.me/?nat=BE&results=1')
    .then(res => res.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error);

//  Async / Await (Undefined)
    const getFakePerson = async () => {
        try {
            let res = await fetch('https://api.randomuser.me/?nat=US&results=1');
            let {results} = await res.json();
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    };
    getFakePerson();

//  Building Promises (not working)
    const getFakeMembers = count => new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`
        const request = new XMLHttpRequest()
        request.open('GET', api)
        request.onload = () =>
            (request.status === 200) ?
            resolves(JSON.parse(request.response).results) :
            rejects(Error(request.statusText))
        request.onerror = (err) => rejects(err)
        request.send()
    })
    getFakeMembers(5).then(
        members => console.log(members),
        err => console.error(
            new Error("cannot load members from randomuser.me"))
    ) 

// Classes
    class Vacation {
        constructor(destination, length) {
        this.destination = destination;
        this.length = length;
        }

        print() {
            console.log(`${this.destination} will take ${this.length} days.`);
        }
    }
    const trip = new Vacation('Santiago, Chile', 7);
    trip.print(); // Result appear upside the fetch in console ;)
    console.log('');

    class Expedition extends Vacation {
        constructor(destination, length, gear) {
            super(destination, length);
            this.gear = gear;
        }

        print() {
            super.print();
            console.log(`Bring your ${this.gear.join(" and your ")}`);        
        }
    }
    trip_two = new Expedition('Himalaya, India', 20, [
        'sunglasses',
        'oxygen',
        'prayer flags',
        'drone',
    ])
    trip_two.print();
    console.log('');