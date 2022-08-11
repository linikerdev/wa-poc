const startControler = require("../controller/startController");

module.exports = (route) => {
  route.get("/", startControler.index);
  route.post("/send", startControler.send);
};
