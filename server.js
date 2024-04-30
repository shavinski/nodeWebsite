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

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
