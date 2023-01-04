function RemoveN(array, n) {
    n < array.length && array.splice(n, 1);
    return array;
}

module.exports = RemoveN;