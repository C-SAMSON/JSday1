function main(arg) {
  arg = parseInt(arg);
  if (arg === 0) return "0";
  else if (arg > 0) return "+";
  else return "-";
}

module.exports = main;