function removeDuplicate(array) {
  return array.filter((item, index, self) => {return self.indexOf(item) === index;});
}

module.exports = removeDuplicate;