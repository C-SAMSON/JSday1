function createIdentity(fName, lName, pAge) {
    let identity = {
        surname: fName,
        name: lName,
        age: pAge,
    }
    return identity;
}

console.log(createIdentity("Corentin", "SAMSON", "25"))