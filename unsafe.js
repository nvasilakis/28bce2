x = "thisIsASecret";
function unsafeMain () {
  var v = require('./vuln.js');
  v.f()
}

unsafeMain();
