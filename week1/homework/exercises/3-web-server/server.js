/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.write(data);
      }

      res.end();
    });
  }
  if (req.url === "/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fs.readFile("index.js", (err, data) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(3000); // The server starts to listen on port 3000
