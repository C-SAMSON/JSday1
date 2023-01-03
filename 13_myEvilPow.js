function evilPow(a, b) {
    if (b === 0)
        return 1;
    return a * evilPow(a, b-1);
}

module.exports = evilPow;