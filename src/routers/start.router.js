const startControler = require("../controller/startController");

module.exports = (route) => {
  route.get("/", startControler.index);
};
