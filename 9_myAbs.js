function abs(b) {
    let a = parseInt (b)
    if (a < 0) {
        return -a
    } else {
        return a
    }
}

module.exports = abs;