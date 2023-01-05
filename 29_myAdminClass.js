class User {
    constructor(surname, name, age) {
        this.surname = surname;
        this.name = name;
        this.age = age;       
    }
    presentation() {
        return `Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
    }
}

class Admin extends User {
    constructor(surname, name, age) {
        super(surname, name, age);
        this.role = "administrateur";
    }
}


// let me = new Admin("Guilian", "Ganster", 22);
// console.log(me.presentation()); 
// console.log(me.role); 

module.exports = Admin;
module.exports = Admin;