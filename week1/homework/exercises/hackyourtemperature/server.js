const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!')
});

const PORT = 3002

app.listen(PORT);