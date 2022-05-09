export interface Greetable {
    name: string;

    greet(phrase: string): void;
}

// Interfaces
// Define a structure of an object type
// Can be implemented in classes
// Classes can inherit multiple interfaces
// Interface set the minimum of class content, class can have more properties

class Human implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let Glob = new Human('Glob');
console.log(Glob);

export interface Person {
    name: string;
    age: number;
    readonly id: number

    greet(phrase: string): void;
}

// Inheritance interface
// Interfaces can inherit from one
// or multiple interfaces
interface childOne extends Person, Greetable {
    address: string;
}

let userOne: Person;
let userTwo: childOne;

userTwo = {
    name: 'Michèle',
    age: 49,
    address: 'Liberty Street',
    id: 711,
    greet(phrase: string) {
        console.log(phrase);
    }
}

userOne = {
    name: 'Nico',
    age: 37,
    id: 7,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    },
}

// Classic function type:
type AddFunction = (a: number, b:number) => number;
// Interface function type:
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

add(1, 2);

// Optional properties
// Interface
interface SetOptional {
    readonly name: string;
    outputName?: string; // ? tell it's optional
}
// Classes
class Optional {
    name?: string;
    age = 30;

    constructor(n?: string) { // We can also use a default parameter: n = 'Default'
        if (n) {
            this.name = n;
        }
    }
}
