const express = require('express')
const app = express();

app.use(express.json());

// YOUR CODE GOES IN HERE

//Creating new posts

const fs = require("fs");

app.post('/blogs', (req, res) => {
    // How to get the title and content from the request??
    if (isInValid(req)) {
      res.status(400);
      res.send("Invalid request");
      return;
    }
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok')
})


//Updating existing posts

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  if (isInValid(req)) {
    res.status(400);
    res.send("Invalid request");
    return;
  }
  if (fs.existsSync(`${req.body.title}`)) {
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.status(404);
    res.send("This post does not exist!");
  }
})



//Deleting posts

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  if (fs.existsSync(`${req.params.title}`)) {
    fs.unlinkSync(req.params.title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404);
    res.send("Not found!");
  }
})


//Reading posts

app.get('/blogs/:title', (req, res) => {

  //How to get the title from the url parameters?
  //check if post exists
  if (fs.existsSync(`${req.params.title}`)) {
    const post = fs.readFileSync(req.params.title);
    res.end(post);
  } else {
    // Respond with message here
    res.status(404);
    res.send("This post does not exist!");
  }
})


app.<METHOD>('/blogs', (req, res) => {
  // how to get the file names of all files in a folder??
})



function isInValid(req) {
  if (
    typeof req.body === "undefined" ||
    typeof req.body.title === "undefined"
  ) {
    return true;
  } else {
    return false;
  }
};
 
app.listen(3000)