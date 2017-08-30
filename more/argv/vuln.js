module.exports = {
  f: function f(a, b) {
    var argv = process.argv;
    console.log("argv length -- " + argv.length + ": " + argv);
    return a + b;
  }
}
