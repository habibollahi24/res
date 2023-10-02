//  Maryam Afshar, Student ID: 301034443, Due Date: October 3, 2023

const express = require("express");
const path = require("path");

const cookieParser = require("cookie-parser");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
// app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))

app.set("view engine", "ejs");
//middlware for routes
app.use(require("./routes"));

module.exports = app;
