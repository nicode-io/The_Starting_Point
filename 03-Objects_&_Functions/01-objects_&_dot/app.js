var person = new Object(); // For demo, see 03-02 Objects Literals

person["firstname"] = "Nicode"; // Set and access property
person["lastname"] = "Muli"

var firstNameProperty = "firstname";

console.log(person)
console.log(person[firstNameProperty]) // Useful to use dynamic string for params

console.log(person.firstname); // dot operator
person.address = new Object(); // For demo, see 03-02 Objects Literals
person.address.street = "Liberty Street"

console.log(person["address"]["street"]) // For demo, better use the dot operator
