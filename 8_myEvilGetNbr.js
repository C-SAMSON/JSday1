function evilGetNumber(b) {
    let a = parseInt (b)
    if (a == 0) {
        return "0"
    } else if (a < 0) {
        return "-"
    } else {
        return "+"
    }
}

module.exports = evilGetNumber;