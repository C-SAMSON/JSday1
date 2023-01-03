function firTree(a) {
    let arbre = [];
    arbre.lenght = a;
    for (let k = 1; k < a; k++) {
        arbre.push ("  ");        
    }
    if (a % 2 === 0) {

    } else {
        for (let i = 0; i < (a-1); i++) {
            arbre[(a+1/2)] = " *";

        }
    }
    return arbre;
}

// module.exports = firTree;