function objectFilter(users) {
    return users.filter((user) => {return user.age >= 18;}).map(function(user) {return `${user.surname} ${user.name}`;});
}

module.exports = objectFilter;