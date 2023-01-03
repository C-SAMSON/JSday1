function evilStr(a) {
    for (let k = 0; k < a.length; k++) {
        let reverse = [];
        reverse[k] = a[a.lenght-(k+1)];
        return reverse;       
    }
}

module.exports = evilStr;