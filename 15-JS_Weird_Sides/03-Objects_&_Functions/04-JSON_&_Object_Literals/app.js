//  JSON = JavaScript Object Notation
var objectLiteral = {
    firstName: "nicode",
    isValid: true
}

// Convert JS object literal in JSON string
console.log(JSON.stringify(objectLiteral));

// Convert JSON string to object literal
var JSONvalue = JSON.parse('{"firstName": "Nicode", "isValid": true}')
console.log(JSONvalue);

/* XML example
<object>
    <firstname>Nicode</firstname> // double name is huge wasting of data
    <isValid>true</isValid>
</object>
 */
