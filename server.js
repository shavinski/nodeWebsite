const { createServer } = require("node:http");
const fs = require("fs");
const path = require("path");

const { url } = require("node:inspector");

const hostname = "127.0.0.1";
const port = 8080;

const server = createServer((req, res) => {
  let filePath = "." + req.url;
  console.log("url =>", req.url);

  if (filePath === "./") {
    filePath = "./index.html";
  }

  const urlMapping = {
    "/": "./index.html",
    "/about": "./about.html",
    "/contact-me": "./contact-me.html",
    "/404": "./404.html",
  };

  filePath = urlMapping[req.url] || "./404.html";

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      filePath = "./404.html";
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal Server Error, Oopsies");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "plain-text");
      res.end(data);
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
