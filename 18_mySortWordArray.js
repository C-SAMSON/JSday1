function strToWord(str) {
    if (str.length === 0) return [];
    let array = str.split(" ");
    return array.sort ();
}

module.exports = strToWord;