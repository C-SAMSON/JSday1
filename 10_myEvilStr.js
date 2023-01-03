function evilStr(str) {
    if (str === "") {
      return "";
    } else {
      return evilStr(str.substr(1)) + str.charAt(0);
    }
  }

module.exports = evilStr;