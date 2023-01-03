function myEvilAge(a) {
    age = parseInt(a);
    if (age < 18) {
        return "Mineur";
    } else {
        return "Majeur";
    }
}

module.exports = myEvilAge;
