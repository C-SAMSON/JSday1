function getNumber (a) {
    if (a == 0) {
        return "0"
    } else if (a < 0) {
        return "-"
    } else {
        return "+"
    }
}

module.exports = getNumber;