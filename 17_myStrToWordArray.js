function strToWord(str) {
    if (str.length === 0) return [];
    return str.split(" ");
}

module.exports = strToWord;