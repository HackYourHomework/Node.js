const fs = require('fs');
const path = require('path');

const readPost = (req, res) => {
  if (
    fs.existsSync(path.join(__dirname, '../Created Files', req.params.title))
  ) {
    const post = fs.readFileSync(
      path.join(__dirname, '../Created Files', req.params.title),
    );
    res.send(post);
    res.end();
  } else {
    res.send('This File Does not Exist');
  }
};

module.exports = readPost;
