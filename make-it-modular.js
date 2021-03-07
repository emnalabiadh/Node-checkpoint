var mymodule = require("./mymodule");
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function (err, list) {
  if (err) return console.error(err);

  list.forEach(function (file) {
    console.log(file);
  });
});
