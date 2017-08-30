var add = function add(a, b) {
  console.log(this.a);
  return a + b;
}

module.exports = {
  add: add
}
