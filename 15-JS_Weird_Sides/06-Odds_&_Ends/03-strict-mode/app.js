// "use strict";
var person;

persom = {}; // Mistype variable, don't work with use strict but work without
console.log(persom); // {}

function useStrictScope() {
    "use strict"

    var person2;
    persom2 = {};
    console.log(persom2);
}

useStrictScope();
