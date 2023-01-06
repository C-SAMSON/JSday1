function objectFilter(user) {
    let array = Object.entries(user)
    return array.filter((array) => {return (typeof array[1] !== "function" && typeof array[1] !=="object" && typeof array[1] !=="array")}).map(function([key, value]) {return `${key}: ${value}`;}).join(", ");
}

console.log(objectFilter({surname: "fzef", name: "FEZEF", age: 25, arr: [1,2,3]}));

module.exports = objectFilter;