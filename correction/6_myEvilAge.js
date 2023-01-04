function main(arg) {
  arg = parseInt(arg);
  if (arg >= 18) return "Majeur";
  else return "Mineur";
}

//autre possibilité en ternaire
function main2(arg) {
  return parseInt(arg) >= 18 ? "Majeur" : "Mineur";
}

module.exports = main;