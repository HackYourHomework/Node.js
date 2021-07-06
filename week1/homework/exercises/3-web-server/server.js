/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');
const path = require("path");

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
	if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
			if(err){
        throw err;
    }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/index.js") {
    fs.readFile(path.join(__dirname, "index.js"), (err, data) => {
			if(err){
        throw err;
    }
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "style.css"), (err, data) => {
			if(err){
        throw err;
    }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }
	// res.write('Hello World!'); // Sends a response back to the client
	// res.end(); // Ends the response
});

server.listen(3000); // The server starts to listen on port 3000
