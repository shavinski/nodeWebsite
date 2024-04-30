// Load HTTP module
const express = require("express");
const app = express();
const createError = require("http-errors");

const hostname = "localhost";
const port = 3000;

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.use("/", indexRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry, the page you are looking for does not exist.");
});

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
