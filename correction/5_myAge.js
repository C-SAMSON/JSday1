
function main(arg) {
  if (arg >= 18) return "Majeur";
  else return "Mineur";
}

//autre possibilit√© en ternaire
function main2(arg) {
  return arg >= 18 ? "Majeur" : "Mineur";
}

module.exports = main;