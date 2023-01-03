function evilPow(a, b) {
    let c = a;
    for (let k = 1; k < b; k++) {
        c *= a;
    }
    return c;
}

module.exports = evilPow;