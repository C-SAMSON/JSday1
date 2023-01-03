// function strnCpy(str, n) {
//     return str.substring(0, n);
//   }

// module.exports = strnCpy;

function strnCpy(str, n) {
  if (n > str.length)
    return str;
  else {
    let strn = "";
    for (let i = 0; i < n; i++) {
      strn += str[i];
    }
    return strn;
  }
}

module.exports = strnCpy;