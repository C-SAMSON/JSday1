function objectFilter(users) {
    return users.filter((user) => {return user.age >= 18;}).map(function(user) {return `${user.firstName} ${user.lastName}`;});
}

// console.log(objectFilter([
//   { firstName: "John", lastName: "Doe", age: 30 },
//   { firstName: "Jane", lastName: "Doe", age: 20 },
//   { firstName: "Bob", lastName: "Smith", age: 15 },
//   { firstName: "Alice", lastName: "Johnson", age: 25 }
// ]));

module.exports = objectFilter;