function firTree(a) {
    let arbre = "";
    let space = a-1;
    let star = a-space;
    for (let i = 0; i < a; i++) {
        for (let k = 0; k < space; k++) {
            arbre += " ";          
        }
        for (let j = 0; j < star; j++) {
            arbre += " *";
        }
        console.log (arbre);
        space -= 1;
        star = a-space;
        arbre = "";
    }
    return;
}

module.exports = firTree;