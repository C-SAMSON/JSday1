function strToWord(str) {
    if (str.length === 0) return [];
    return str.split(" ").sort ();
}

module.exports = strToWord;