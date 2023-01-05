const User = require("./28_myUserClass");

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