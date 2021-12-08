// Generic types
// Generic<T>
// Allow to build returns efficiently

export const names: Array<string> = [];
// names[0].split(' ');

// Promises
const promise: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done !');
    }, 2000);
})

// Building own generic type
// Generic function
function mergeTwoObjects<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const merged = mergeTwoObjects({name: 'Nico', hobbies: ['photo', 'drone']}, {age: 37});
console.log(merged.age);

// Constraints
function useConstraints<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedAgain = useConstraints({name: 'Nico'}, {age: 37});
console.log(mergedAgain);

// Other example, adding .length possibility
// but don't care of data type (using T)
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionTExt = 'Got no value';
    if (element.length > 0) {
        descriptionTExt = 'Got 1 element';
    } else if (element.length > 1) {
       descriptionTExt = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionTExt];
}
console.log(countAndDescribe('Hi There !'));

// keyof constraint
// Ensure correct structure
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'Nico'}, 'name')
// extractAndConvert({name: 'Nico'}, 'age') // Error


// Generic classes
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) { // if we don't found any
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('ItemOne');
// textStorage.addItem(42); // Error
textStorage.addItem('Another');
textStorage.removeItem('Another');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(42);
// Beware of object types cause they are non primitive
// Be sure to store exact object if you want to reuse/remove it


// Generics build-in utility types
// Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}
// Readonly
export const namesArray: Readonly<string[]> = ['Nico', 'Michèle'];
// namesArray.push('Max'); // Error cause readonly


// Don't confuse between union types and generics,
// union types allow multiple type for the same array for example
// with generics you allow an array of one type at a time but with choice
