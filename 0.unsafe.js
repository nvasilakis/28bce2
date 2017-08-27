x = "thisIsASecret";
function unsafeMain () {
  var v = require('./0.vuln.js');
  v.f()
}

unsafeMain();
