function ageFilter(array) {
    return array.filter((item) => {return item >= 18;});
}

module.exports = ageFilter;