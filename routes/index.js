const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
//   res.render("index", { title: "Wiki home page" });
  res.send("Wiki home page");
});

module.exports = router;
