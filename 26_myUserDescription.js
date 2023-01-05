function showIdentity(identity) {
    return `Je m'apelle ${identity.surname} ${identity.name}, j'ai ${identity.age} ans`;
}

console.log(showIdentity({surname: "a", name: "A", age: 23}));
module.exports = showIdentity;