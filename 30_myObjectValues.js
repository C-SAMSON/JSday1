function objectFilter(user) {
    let array = Object.entries(user)
    return array.filter((array) => {return typeof array[1] !== "function"}).map(function([key, value]) {return `${key}: ${value}`;}).join(", ");
}

// console.log(objectFilter({name: "Ganster", surname: "Guilian", age: 24, presentation: () => {}}));
module.exports = objectFilter;