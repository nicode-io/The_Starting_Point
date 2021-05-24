// Exercice 5.2 - TeamWork Bastien, Simon, Nicolas
const readlineSync = require("readline-sync");

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

function randomizeCast(serie) {
  serie.cast.sort(() => Math.random() - 0.5);
  return serie;
}

let serieTv = test();
console.log(JSON.stringify(serieTv));
serieTv = randomizeCast(serieTv);
console.log(JSON.stringify(serieTv));