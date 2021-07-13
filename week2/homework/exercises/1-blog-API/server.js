const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.post("/blogs", (req, res) => {
  if (isInValid(req)) {
    res.status(400).send("Invalid request");
    return;
  }
  fs.writeFileSync(`${req.body.title}.txt`, req.body.content);
  res.end("ok");
});

app.put("/posts/:title", (req, res) => {
  if (isInValid(req)) {
    res.status(400).send("Invalid request");
    return;
  }
  if (fs.existsSync(`${req.body.title}.txt`)) {
    fs.writeFileSync(`${req.body.title}.txt`, req.body.content);
    res.end("ok");
  } else {
    res.status(404).send("Not found");
  }
});

app.delete("/posts/:title", (req, res) => {
  if (fs.existsSync(`${req.params.title}.txt`)) {
    fs.unlinkSync(`${req.params.title}.txt`);
    res.end("ok");
  } else {
    res.status(404).send("Not found");
    return;
  }
});

app.get("/posts/:title", (req, res) => {
  if (fs.existsSync(req.params.title)) {
    const post = fs.readFileSync(req.params.title);
    res.send(post);
  } else {
    res.status(404).send("Not found");
    return;
  }
});

app.get("/blogs", (req, res) => {
  const appFolder = "./";
  const blogs = [];
  fs.readdirSync(appFolder).forEach((fileName) => {
    if (path.extname(fileName) == ".txt") {
      blogs.push({
        title: path.parse(fileName).name,
      });
    }
  });
  res.send(blogs);
});

const isInValid = (req) => {
  if (
    typeof req.body === "undefined" ||
    typeof req.body.title === "undefined"
  ) {
    return true;
  } else {
    return false;
  }
};

app.listen(3000);
