function firTree(a) {
    let arbre = "";
    let space;
    if (a < 3) 
        space = a*3;
    else if (a === 3)
        space = 10;
    else {
        space = 10;
        for (let z = 4; z < a+1; z++) {
            space += z;    
        }
    }
    let star = 1;
    let b = 4;
    for (let l = 0; l < a; l++) {
        for (let i = 0; i < b; i++) {
            for (let k = 0; k < space; k++) {
                arbre += " ";          
            }
            for (let j = 0; j < star; j++) {
                arbre += "*";
            }
            console.log (arbre);
            space -= 1;
            star += 2;
            arbre = "";
        }
        b += 1;
        if (star < 21) {
            space += 2;
            star -= 4;
        } else {
            space += 3;
            star -= 6;
        }
    }
    for (let m = 0; m < a; m++) {
        for (let o = 0; o < ((star-(a/2))/2); o++) {
            arbre += " ";
        }
        for (let n = 0; n < a; n++) {
            arbre += "|";
        }
        console.log (arbre);
        arbre = "";
    }
    return;
}

module.exports = firTree;