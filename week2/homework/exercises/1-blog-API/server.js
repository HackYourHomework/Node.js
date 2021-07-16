const express = require("express");
const app = express();
const fs = require("fs");

// Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// YOUR CODE GOES IN HERE
app.get("/", function (req, res) {
  res.send("Hello World!!");
});

app.post("/blogs", (req, res) => {
  
  const { title } = req.body.title;
  const { content } = req.body.content
  fs.writeFileSync(title, content);
  res.end("ok");
});

app.put("/posts/:title", (req, res) => {
 const { title } = req.body.title;
  const { content } = req.body.content
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end("ok");
  } else {
    res.status(404).json({ msg: "This post does not exist!" });
  }
});

app.delete("/blogs/:title", (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) {
    // Add condition here
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    // Respond with message here
    res.status(404).json({ msg: `Title not found` });
  }
});

app.get("/blogs/:title", (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    // send response
    res.json(post);
  } else {
    res.status(404).send(`This post does not exist!`);
  }
});

app.get("/blogs", (req, res) => {
  let blogs = [];
  const arrayOfFiles = fs.readdirSync("./blogs");

  arrayOfFiles.forEach((title) => {
    blogs.push(title);
  });
  res.send(blogs);
});
app.listen(3000);
