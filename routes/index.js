const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res, next) {
  const htmlFilePath = path.join(__dirname, "..", "views", "index.html");
  res.sendFile(htmlFilePath);
});

router.get("/about", function (req, res, next) {
  const htmlFilePath = path.join(__dirname, "..", "views", "about.html");
  res.sendFile(htmlFilePath);
});

router.get("/contactme", function (req, res, next) {
  const htmlFilePath = path.join(__dirname, "..", "views", "contact-me.html");
  res.sendFile(htmlFilePath);
});

module.exports = router;
