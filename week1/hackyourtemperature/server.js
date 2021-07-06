const express = require("express");
const app = express();



app.get('/', (req, res) => {
  res.send('<h1>hello from backend to frontend!</h1>')
})

app.listen(3000, () => {
  console.log('You are in port 3000')
})