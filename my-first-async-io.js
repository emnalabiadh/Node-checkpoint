var fs = require("fs");
var str = fs.readFile(process.argv[2], "utf8", function (err, data) {
  var lines = data.split("\n").length;
  console.log(lines - 1);
});
