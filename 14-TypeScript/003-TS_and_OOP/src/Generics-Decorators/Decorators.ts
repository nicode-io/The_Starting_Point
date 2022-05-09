/**
 * Decorators
 *
 * ! First activate in tsconfig options:
 * "experimentalDecorators": true,
 *
 * - Decorators runs when JS find class definition, not on instantiation
 * - Check Angular decorators to have more info about decorators (less advanced here)
 * - Tool that other developer can use to, for example, render some things
 * - You can add more than one decorator to a valid target
 *      - Execution order of multiple decorators is from bottom to top
 *      - Call to decorator function, by opposition, is executed from top to bottom
 * - Decorators can be added:
 *      - We always need class to use decorators
 *      - Decorators can be placed inside class:
 *          - Property decorator
 *          - Accessor decorator
 *          - Method decorator
 *          - Parameter decorator
 *  - Decorator is just a function that execute on class definition, not during program execution
 *  - Decorator are use to add extra-logic to change behaviour of data structure for example
 *  - Decorator can change the output of a valid element (powerful, need deep knowledge)
 *
 */

// Class decorator
// 1. Create decorator factory
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log('Logging...');
        console.log(constructor);
    };
}

// 1.1 Another decorator factory
function WithTemplate(template: string, hookId: string) {
    return function <T extends { new(...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor { // Return a new class based on original constructor
            constructor(...args: any[]) {
                super();
                // .. more logic as we want
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

// In HTML code
// <div id='app'> <div>

// 2. Call decorator
// @Logger('Logging - Person') // For decorator factory 1
@WithTemplate('<h1>My Person object</h1>', 'app') // For decorator factory 1.1
export class Person {
    name = 'Nico';

    constructor() {
        console.log('Creating person object...')
    }

}

const person = new Person();
console.log(person);

// Multiple location decorator //

// 1. Property decorator
function Log(
    target: any,
    propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}

// 2. Accessor decorator
function Log2(
    target: any,
    name: string,
    descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target + ' ' + name + ' ' + descriptor);
}

// 3. Method decorator
function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// 4. Parameter decorator
function Log4(
    target: any,
    name: string | Symbol,
    position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}


class Product {
    @Log // Using decorator in specific place
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - No negative value allowed');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
