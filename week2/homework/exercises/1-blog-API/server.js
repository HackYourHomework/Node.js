const express = require('express');
const app = express();
app.use(express.json());

const createBlog = require('./CRUD Functions/createABlog');
const updateBlog = require('./CRUD Functions/updateABlog');
const deletePost = require('./CRUD Functions/deleteAPost');
const readPost = require('./CRUD Functions/readApost');
const readAllPost = require('./CRUD Functions/readAllPost');
const isInvalid = require('./isInvalid');

// YOUR CODE GOES IN HERE

app.get('/blogs', (req, res) => {
  readAllPost(req, res);
});

app.get('/blogs/:title', (req, res) => {
  readPost(req, res);
});

app.post('/blogs', (req, res) => {
  if (isInvalid(req, res)) {
    return;
  }
  createBlog(req, res);
});

app.put('/blogs/:title', (req, res) => {
  if (isInvalid(req, res)) {
    return;
  }
  updateBlog(req, res);
});

app.delete('/blogs/:title', (req, res) => {
  deletePost(req, res);
});

app.listen(3000);
