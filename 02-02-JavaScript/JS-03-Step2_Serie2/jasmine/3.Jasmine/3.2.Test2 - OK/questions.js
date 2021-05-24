let CreationTableauLangages =  () => {
  let langages = ['Html', 'CSS', 'Java', 'PHP'];
  return langages;
}

let CreationTableauNombres =  () => {
  let nombres = [];
  for (let i = 0; i < 6; i++) {
    nombres.push(i);
  }
  return nombres;
}

let RemplacementElement =  (langages) => {
  let replace = langages;
  replace.splice(2, 1, 'Javascript');
  return replace; 
}

let AjoutElementLangages =  (langages) => {
  let add = langages;
  add.push('Ruby', 'Python');
  return add;
}

let AjoutElementNombres =  (nombres) => {
  nombres.unshift(-2, -1);
  return nombres;
}

let SuppressionPremierElement =  (langages) => {
  let supress = langages;
  supress.shift();
  return supress;
}

let SuppressionDernierElement =  (langages) => {
  let supress = langages;
  supress.pop();
  return supress;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
  let reseaux_sociaux = reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
  let conversion = langages.join(',');
  return conversion;
}

let TriTableau =  (reseaux_sociaux) => {
  let sort = reseaux_sociaux.sort();
  return sort;
}

let InversionTableau =  (reseaux_sociaux) =>{
  let reverse = reseaux_sociaux.reverse();
  return reverse;
}
