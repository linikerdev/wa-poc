const express = require("express");
const app = new express();
const { formatError } = require("./utils/handler");
const Venon = require('./services/Venon')

exports.venon = new Venon()

const port = process.env.PORT || 3333;

// routers
const routers = require("./routers");

app.use(express.json());

// routers
routers(app);

// middlewares handler
app.use((err, req, res, next) => {
  formatError(err, res);
});

app.listen(port, () => console.log(`## servidor rodando na port ${port}`));
