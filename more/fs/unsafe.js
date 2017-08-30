var m = require("./vuln.js");
var fs = require("fs");
fs.readFile("./vuln.js", "utf-8", (e, d) => {
  console.log(d.length);
});
