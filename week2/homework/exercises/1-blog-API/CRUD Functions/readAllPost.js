const fs = require('fs');
const path = require('path');

const readAllPost = (req, res) => {
  const blogs = fs.readdirSync(path.join(__dirname, '../Created Files'));
  const data = [];

  if (blogs.length > 0) {
    blogs.forEach((blog) => {
      const content = fs
        .readFileSync(path.join(__dirname, '../Created Files', blog))
        .toString('utf-8');

      data.push(`{${blog} : ${content}}`);
    });

    res.status(200);
    res.send(data);
  } else {
    res.status(500);
    res.send(`Sorry We do not have any Blogs`);
  }
};

module.exports = readAllPost;
