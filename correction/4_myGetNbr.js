function main(arg) {
  if (arg === 0) return "0";
  else if (arg > 0) return "+";
  else return "-";
}

//autre possibilité en ternaire
function main2(arg) {
  return arg === 0 ? "0" : arg > 0 ? "+" : "-";
}

module.exports = main;