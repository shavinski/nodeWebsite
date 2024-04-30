const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function (req, res, next) {
  const htmlFilePath = path.join(__dirname, "..", "views", "index.html");
  res.sendFile(htmlFilePath);
});

module.exports = router;
