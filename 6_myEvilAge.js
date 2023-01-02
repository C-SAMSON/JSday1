function myEvilAge(a) {
    age = parseint(a);
    if (age <= 18) {
        return "Mineur";
    } else {
        return "Majeur";
    }
}

module.export = myEvilAge;
