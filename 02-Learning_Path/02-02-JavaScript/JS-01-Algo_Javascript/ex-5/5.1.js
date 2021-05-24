
// Import libraries
const readlineSync = require("readline-sync");

// Exercise 5.1 - TeamWork Bastien, Simon, Nicolas
function test() {
  let tvSerie = {
    name : "",
    prodYear: "",
    cast : [],
  };
  tvSerie.name = readlineSync.question('What\'s the name of your favorite serie ? ');
  tvSerie.name = readlineSync.question('What\'s the production\'s year of your favorite serie ? ');
  let actor = readlineSync.question('Name an actor (leave empty to finish) : ');
  while ( actor !== "" ) {
    tvSerie.cast.push({actor});
    actor = readlineSync.question('Name an actor, let empty to finish: ');
  }
  return tvSerie;
}