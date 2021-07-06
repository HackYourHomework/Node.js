/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/style.css") {
    res.setHeader("content-type", "text/css");
    fs.readFile("./style.css", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.setHeader("content-type", "text/javascript");
    fs.readFile("./index.js", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000); // The server starts to listen on port 3000
