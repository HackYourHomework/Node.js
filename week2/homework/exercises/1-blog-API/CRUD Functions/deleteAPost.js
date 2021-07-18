const fs = require('fs');
const path = require('path');

const deletePost = (req, res) => {
  if (
    fs.existsSync(path.join(__dirname, '../Created Files', req.params.title))
  ) {
    fs.unlinkSync(path.join(__dirname, '../Created Files', req.params.title));
    res.status(200);
    res.send(`Your Blog file has been deleted`);
    res.end();
  } else {
    res.send('The provided file name is not correct');
  }
};
module.exports = deletePost;
