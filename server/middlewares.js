const bodyParser = require("body-parser");

let installed = false;

module.exports = function use(app) {
  if (installed) {
    return;
  }

  installed = true;
  app.use(bodyParser.urlencoded({ extended: false }));
};
