const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/blogs/:title", (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);

    res.status(200);
    res.send(post);
  } else {
    res.status(404);
    res.send("blog dose not exist");
  }
});

app.delete("/blogs/:title", (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    res.status(404);
    res.send("This post does not exist!");
  }
});

app.put("/posts/:title", (req, res) => {
  const title = req.params.title;
  const content = req.body.content;

  if (
    fs.existsSync(title) &&
    typeof title !== "undefined" &&
    typeof content !== "undefined"
  ) {
    fs.writeFileSync(title, content);
    res.end("ok");
  } else {
    res.status(404);
    res.send("This post does not exist!");
  }
});

app.post("/blogs", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end("ok");
});

app.listen(3000);
