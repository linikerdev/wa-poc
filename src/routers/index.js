const express = require("express");

const StartRoute = require("./start.router");
// const authRoute = require("./auth.routes");
// const cursoRoute = require("./cursos.routes");
// const userRoute = require("./user.routes");

const route = express.Router();

module.exports = (app) => {
  app.use(route);
  // route.get("/portal/cursos", CursoController.index); //***
  // auth

  StartRoute(route)
  
//   authRoute(route);

//   // user
//   userRoute(route);

//   // curso
//   cursoRoute(route);
};
