const express = require('express')
const app = express();


// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.use(express.json());

const fs = require("fs");

app.post('/blogs', (req, res) => {
    // How to get the title and content from the request??
    if(req.body.title && req.body.content){
      const title = req.body.title ;
      const content = req.body.content;
      fs.writeFileSync(`./blogs/${title}`, content);
      res.end('ok');
    }else{
      res.status(400).send('Information missing in your request!');
    }
});

app.put('/blogs/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  if (req.body.content) {
    const title = req.params.title;
    const content = req.body.content;
    if(fs.existsSync(`./blogs/${title}`)){
      fs.writeFileSync(`./blogs/${title}`, content);
      res.end('ok');
    }else{
      res.status(400).send('This post does not exist!');
    }
  }else {
    // Send response with error message
    res.status(400).send('Information missing in your request!')
  }
});

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  title = req.params.title;
  if (fs.existsSync(`./blogs/${title}`)) { // Add condition here
    fs.unlinkSync(`./blogs/${title}`);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(400).send('This post does not exist!');
  }
});

app.get('/blogs/:title', (req, res) => {

  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if(fs.existsSync(`./blogs/${title}`)){
    const content = fs.readFileSync(`./blogs/${title}`, 'utf8');
    // send response
    res.json({title, content});
  }else{
    res.status(400).send('This post does not exist!');
  }
})


app.get('/blogs', (req, res) => {
  // how to get the file names of all files in a folder??
  let blogs = [];
  fs.readdirSync('./blogs').forEach(title => {
   blogs = [...blogs, {title}];
  });
  res.json(blogs);
})

app.listen(3000)