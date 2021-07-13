const express = require("express");
const fs = require("fs");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.json());

// YOUR CODE GOES IN HERE
app.get("/blogs", (req, res) => {
  // how to get the file names of all files in a folder??
  const titles = [];
  fs.readdir(__dirname, function (err, files) {
    if (err) {
      return console.log(`Unable to scan directory: ${err}`);
    }
    files.forEach(function (file) {
      const stats = fs.statSync(file);
      if (path.extname(file) === "" && stats.isFile())
        titles.push({ title: file });
    });
    res.send(titles);
  });
});
app.get("/blogs/:title", (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) {
    // send response
    res.setHeader("Content-Type", "text/txt");
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    // Respond with message here
    res.status(404).end("This post does not exist!");
  }
});

app.delete("/blogs/:title", (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    // Respond with message here
    res.status(400).end("not deleted");
  }
});

app.put("/posts/:title", (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  const title = req.params.title;
  if (fs.existsSync(title) && typeof req.body.content !== "undefined") {
    fs.writeFileSync(title, req.body.content);
    res.end("ok");
  } else {
    // Send response with error message
    res.status(404).end("This post does not exist!");
  }
});

app.post("/blogs", (req, res) => {
  // How to get the title and content from the request??
  if (
    typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.content == "undefined"
  ) {
    res.status(404).end("bad request");
  }
  fs.writeFileSync(req.body.title, req.body.content);
  res.end("ok");
});
app.get("/", function (req, res) {
  res.send("Hello World!!");
});

app.listen(3000);
