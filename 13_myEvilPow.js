function evilPow(a, b, c = a) {
    if (b === 0)
        return;
    c *= a;
    b -= 1
    evilPow(a, b, c);
}

// module.exports = evilPow;