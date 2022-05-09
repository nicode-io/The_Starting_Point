class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) { // this is not necessary
        console.log('Dpt' + this.name + ' ' + this.id);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Inheritance
class ItDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    // Getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found')
    };

    //Setter
    set mostRecentReport(value: string) {
        if (!value) {
           throw new Error('No value passed');
        }
        this.addReport(value);
    };

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    // Static
    static createEmployee(name: string) {
        return {
            name: name
        }
    }

    addEmployee(name: string) {
        if (name !== 'Nico') {
            this.employees.push(name);
        }
        return;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
        console.log(this.reports);
    }
}

// Abstract classes
// Can't be instantiated
// Must be applied on class and methods which needs to be abstract
// Abstract element must be applied in children classes

// Singleton / Private constructors
// Ensure that you have only one instance of a class
class SingletonDepartment extends Department {
    // Can't create an instance outside
    private constructor(id: string, private data: string[]) {
        super(id, 'Singleton');
        this.data = data;
    }
    // Instantiate inside class
    private static instance: SingletonDepartment;

    //
    static getInstance() {
        if (SingletonDepartment.instance) {
            return this.instance;
        }
        this.instance = new SingletonDepartment('004', []);
        return this.instance;
    }
}

// Example of instantiation
const object = new Department('01', 'Testing');
const objectTwo = new ItDepartment('01', ['Grab', 'Bug']);
const objectThree = new AccountingDepartment('01', ['FinReport', 'Q4Count']);
object.describe();
// object.employees[2] = 'Michèle' // Not working cause of private field
object.addEmployee('Nico');
object.printEmployeeInformation();
objectThree.addReport('Final Budget');
console.log(objectThree.mostRecentReport);
objectThree.mostRecentReport = 'New Report';
console.log(objectThree.mostRecentReport);
console.log(AccountingDepartment.createEmployee('Nico'));

// Singleton instantiate 
const singleton = SingletonDepartment.getInstance();
const singletonTwo = SingletonDepartment.getInstance();
singleton.describe();
singletonTwo.describe();

// Partial instantiation
const partialObject = {describe: object.describe};
// partialObject.describe(); // Undefined, this.name not defined | TS Error


export default Department
