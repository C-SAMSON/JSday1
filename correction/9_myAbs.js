
function main(arg) {
  if (arg < 0) return -arg;
  else return arg;
}

//autre possibilit√© avec la librairie Math
function main2(arg) {
  return Math.abs(arg);
}

module.exports = main;