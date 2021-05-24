let selectElementsStartingWithA = (array) => {
    let result = [];
    array.forEach(element => {
        if (element.substr(0, 1) === 'a') result.push(element); 
    });
    return result;
}

let selectElementsStartingWithVowel = (array) => {
    let result = [];
    let voyels = ['a', 'e', 'i', 'o', 'u', 'y']
    array.forEach(element => {
        if (voyels.includes(element.substr(0, 1))) result.push(element); 
    });
    return result;
}

let removeNullElements = (array) => {
    let result = []
    array.forEach(element => {
        if (element !== null) {
            result.push(element);
        } else {
            array.splice(element, 1);
        }
    });
    return result;
}

let removeNullAndFalseElements = (array) => {
    let result = []
    array.forEach(element => {
        if (element !== null && element !== false) {
            result.push(element);
        }
    });
    return result;
}

let reverseWordsInArray = (array) => {
    let result = [];
    array.forEach(element => {
        result.push(element.split('').reverse().join(''));
    });
    return result;
}

let everyPossiblePair = (array) => {
    let result = [];
    array.sort();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i != j) {
                result.push([array[i], array[j]]);
            }
        }};
    return result;
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0, 3);
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    array.sort(function(a, b){
        let lastA = a.charAt(a.length - 1);
        let lastB = b.charAt(b.length - 1);
        if (lastA > lastB) {
            return 1;
        } else if (lastA < lastB) {
            return -1;
        } else {
            return 0;
        }
    });
    return array;
}

let getFirstHalf = (string) => {
    return string.substr(0, Math.ceil(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let palindromes = 0;
    array.forEach(e => {
        let firstPart = getFirstHalf(e);
        let secondPart = getFirstHalf(e.split('').reverse().join(''));
        if (firstPart === secondPart) palindromes++;
    });
    return palindromes;
}

let shortestWord = (array) => {
    let word = array[0];
    array.forEach(element => {
        if (element.length < word.length) {
            word = element
        }
    });
    return word;
}

let longestWord = (array) => {
    let word = array[0];
    array.forEach(element => {
        if (element.length > word.length) {
            word = element
        }
    });
    return word;
}

let sumNumbers = (array) => {
    let sum = 0
    array.forEach(element => {
        sum += element;
    });
    return  sum;
}

let repeatElements = (array) => {
    let repeat = array.length;
    for (let i = 0; i < repeat; i++) {
        array.push(array[i]);
    }
    return array;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let sum = 0;
    for( var i = 0; i < array.length; i++ ){
        sum += parseInt( array[i], 10 ); //don't forget to add the base
    }
    let average = sum/array.length;
    return average;
}

let getElementsUntilGreaterThanFive = (array) => {
    let fiveMax = [];
    for (let i = 0; i < 6; i++) {
        fiveMax.push(array[i]);        
    }
    return fiveMax;
}

let convertArrayToObject = (array) => {
    let arrObj = [];
    while (array.length > 0) {
        arrObj.push(array.splice(0,2));
    }
    return Object.fromEntries(arrObj);
}

let getAllLetters = (array) => {
    let getAll = [];
    array.forEach(element => {
        getAll.push(...element);
    });
    return [...new Set(getAll.sort())];
}

let swapKeysAndValues = (object) => {
    let obj = {};
    Object.keys(object).forEach(key => {
        obj[object[key]] = key;
    });
    return obj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    Object.keys(object).forEach(key => {
        sum += Number(object[key]) + Number(key);
    });
    return sum
}

let removeCapitals = (string) => {
    let regex = /[A-Z]/g;
    return string.replace(regex,"");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return [date.getDate(), date.getMonth()+1, date.getFullYear()].map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}

let getDomainName = (string) => {
    let url = string.substring(string.lastIndexOf("@") +1);
    let domain = url.substring(0, url.lastIndexOf('.'));
    return domain;
}

let titleize = (string) => {
    let splitted = string.toLowerCase().split(' ');
    for(let i = 0;i<splitted.length;i++){
        if(splitted[i].length> 3 || i == 0 ||splitted[i - 1].indexOf('.') > 0){
        splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].substring(1).toLowerCase();
        }
    }
    return  splitted.join(' ');
}

let checkForSpecialCharacters = (string) => {
    let regex = /^[A-Za-z0-9 ]+$/;
    let nospecial = regex.test(string);
    return !nospecial;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    if(number == 0 || number == 1){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

let findAnagrams = (string) => {
    return 
}

let convertToCelsius = (number) => {
    let convert = (5/9) * (number - 32)
    return Math.ceil(convert);
}

let letterPosition = (array) => {
    let pos = [];
        array.forEach((element)=>{
            pos.push(element.toLowerCase().charCodeAt(0)-96) ;
        })
    return pos;
}
