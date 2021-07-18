const fs = require('fs');
const path = require('path');

const updateBlog = (req, res) => {
  if (
    fs.existsSync(path.join(__dirname, '../Created Files', req.params.title))
  ) {
    fs.writeFileSync(
      path.join(__dirname, '../Created Files', req.params.title),
      req.body.content,
    );
    res.status(200);
    res.send(`Your Blog has been Updated`);
    res.end();
  } else {
    res.send('This post does not exist!');
  }
};

module.exports = updateBlog;
