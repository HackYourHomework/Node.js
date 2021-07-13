const express = require("express");
const fs = require("fs");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// posting a new blog ===================
app.post("/blogs", (req, res) => createBlog(req, res));

function createBlog(req, res) {
  if (isInValid(req)) {
    res.status(400).send("Invalid Request");
    return;
  }
  const data = req.body;
  // check if blog title already exist
  fs.readdir("./blogs", (err, files) => {
    const found = files.some(
      (file) => file.toLowerCase() === data.title.toLowerCase()
    );
    if (found) {
      res.status(405).send("This blog is already existed");
      return;
    }
    fs.writeFile(`./blogs/${data.title.toLowerCase()}`, data.content, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("something went wrong in the server");
        return;
      }
      console.log("The blog has been saved!");
      res.status(201).send("ok");
    });
  });
}

// Updating existing posts ===================

app.put("/blogs/:title", (req, res) => updateBlog(req, res));

function updateBlog(req, res) {
  console.log(req.params.title.split("-").join(" ").toLowerCase());
  if (isInValid(req)) {
    res.status(400).send("Invalid Request");
    return;
  }
  const data = req.body;
  const paramsTitle = req.params.title.split("-").join(" ").toLowerCase();
  if (fs.existsSync(`./blogs/${paramsTitle}`)) {
    fs.writeFile(`./blogs/${paramsTitle}`, data.content, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("something went wrong in the server");
        return;
      }
      console.log("The blog has been updated!");
      res.status(200).send("ok");
    });
  } else {
    res.status(404).send("Blog not found");
  }
}

// Deleting blogs  ===================

app.delete("/blogs/:title", (req, res) => deleteBlog(req, res));

function deleteBlog(req, res) {
  const paramsTitle = req.params.title.split("-").join(" ").toLowerCase();

  if (fs.existsSync(`./blogs/${paramsTitle}`)) {
    fs.unlink(`./blogs/${paramsTitle}`, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("something went wrong in the server");
        return;
      }
      res.status(200).send("Blog was deleted");
    });
  } else {
    res.status(404).send("Blog not found");
  }
}

// Reading single blog  ===================

app.get("/blogs/:title", (req, res) => getBlogByTitle(req, res));

function getBlogByTitle(req, res) {
  const paramsTitle = req.params.title.split("-").join(" ").toLowerCase();

  if (fs.existsSync(`./blogs/${paramsTitle}`)) {
    fs.readFile(`./blogs/${paramsTitle}`, (err, content) => {
      res.status(200).send(content);
    });
  } else {
    res.status(404).send("This post does not exist!");
  }
}

// Reading all blogs  ===================

app.get("/blogs", (req, res) => getBlogs(req, res));

function getBlogs(req, res) {
  const files = fs.readdirSync("./blogs");
  if (files.length > 0) {
    const filesArray = files.map((file) => {
      return { title: file };
    });
    res.status(200).send(filesArray);
  } else {
    res.status(404).send("No blogs found");
  }
}

function isInValid(req) {
  if (
    typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.content == "undefined"
  ) {
    return true;
  } else {
    return false;
  }
}
app.listen(port, () => {
  console.log(`Server started at port ${port} ...`);
});
