const inInvalid = (req, res) => {
  if (typeof req.body.content == 'undefined') {
    res.send(`You have not provided Content for the Blog`);
    return true;
  }
  if (typeof req.body.title == 'undefined') {
    res.send(`You have not provided title for the Blog`);
    return true;
  } else {
    return false;
  }
};

module.exports = inInvalid;
