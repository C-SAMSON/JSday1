function RemoveN(array, n) {
    n < array.length && array.splice(n, 1);
    return array;
}

// function RemoveN(array, n) {
// // Vérifiez si n est un entier valide
// if (Number.isInteger(n) && n >= 0 && n < array.length) {
//     // Utilisez la méthode splice() de l'objet Array pour enlever la case N
//     array.splice(n, 1);
//     return array;
// } else {
//     return array;
// }
// }
module.exports = RemoveN;