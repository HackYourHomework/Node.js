const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// YOUR CODE GOES IN HERE
const data = []
app.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  
  if (
    typeof title !== "undefined" &&
    typeof content !== "undefined" &&
    typeof req.body !== "undefined"
  ) {
    fs.writeFileSync(title, content);
    data.push(title);
    res.end("ok");
  } else {
    res.status(404);
    res.send("This post does not exist!");
    return;
  }
});

app.put("/posts/:title", (req, res) => {
  const {content} = req.body;
  const { title } = req.params;
  // What if the request does not have a title and/or content?
  if (fs.existsSync(title) && content) {
    fs.writeFileSync(title, content);
    res.end("ok");
  } else {
    res.status(404);
    res.send("This post does not exist!");
    return;
  }
});

app.delete("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (fs.existsSync(title)) {
    // Add condition here
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    res.status(404);
    res.send("This post does not exist!");
    return;
  }
});

app.get("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    res.status(404);
    res.send("This post does not exist!");
    return;
  }
});

app.get('/blogs', (req, res) => {
  res.send(data)
})

app.listen(3000, () => {
  console.log("Welcome in port 3000");
});
