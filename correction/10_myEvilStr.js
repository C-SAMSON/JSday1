
function main(str) {
  return str.split('').reverse().join('');
}

//autre possibilité avec boucle

function main2(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

//autre possibilité avec recursive
function main3(str) {
  if (str === '') return '';
  return main3(str.substr(1)) + str[0];
}

module.exports = main3;