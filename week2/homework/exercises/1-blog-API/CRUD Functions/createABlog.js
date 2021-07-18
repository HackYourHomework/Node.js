const fs = require('fs');
const path = require('path');

const createBlog = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(path.join(__dirname, '../Created Files', title), content);
  res.end('Your Blog has been Created');
};

module.exports = createBlog;
