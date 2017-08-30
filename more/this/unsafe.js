var v = require('./vuln.js');
math = {
  a: "secret"
};
math.add = v.add;
math.add(3, 3)
