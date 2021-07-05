/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

//create a server
let server = http.createServer((req, res) => {
  // YOUR CODE GOES IN HERE
  const reqUrl =
    req.url === "/" || req.url === "index.html" ? "index.html" : req.url;
  const filePath = path.join(__dirname, reqUrl);
  const ext = path.extname(reqUrl);
  let type = "";
  switch (ext) {
    case ".html":
      type = "text/html";
      break;
    case ".js":
      type = "text/javascript";
      break;
    case ".css":
      type = "text/css";
      break;
    case ".ico":
      type = "image/vnd.microsoft.icon";
      break;
  }
  //  method 1: with if statements
  if (req.url === "/" || req.url === "index.html") {
    const data = fs.readFileSync(filePath);
    res.setHeader("content-type", type);
    res.write(data);
    res.end();
  } else if (req.url === "/index.js") {
    const data = fs.readFileSync(filePath);
    res.setHeader("content-type", type);
    res.write(data);
    res.end();
  } else if (req.url === "/style.css") {
    const data = fs.readFileSync(filePath);
    res.setHeader("content-type", type);
    res.write(data);
    res.end();
  } else if (req.url === "/favicon.ico") {
    const data = fs.readFileSync(filePath);
    res.setHeader("content-type", type);
    res.write(data);
    res.end();
  }
  // method 2: without if statement; we can also comment out the if statements
  // and uncomment the following 4 lines of code;
  /* 
	const data = fs.readFileSync(filePath);
    res.setHeader("content-type", type);
    res.write(data);
    res.end();
		 */
});

server.listen(3000, () => console.log("server started...")); // The server starts to listen on port 3000
