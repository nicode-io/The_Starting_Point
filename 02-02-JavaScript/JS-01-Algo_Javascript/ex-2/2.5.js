// Import libraries
const readlineSync = require("readline-sync");

// Exercise 2.5 - OK
let favoriteNumber = readlineSync.question('What\'s your favorite number ? ');
while (favoriteNumber !== 42) {
  let favoriteNumber = readlineSync.question('What\'s your favorite number ? ');
  if (favoriteNumber == 42) { 
    console.log("Hurray, you found your favorite number... Or at least the one that was imposed on you :D")
    break;
  }
}