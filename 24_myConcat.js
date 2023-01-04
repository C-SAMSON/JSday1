function concat(array1, array2) {
    let arrayconcat = [...array1, ...array2];
    return arrayconcat;
}

module.exports = concat;