const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend to frontend!");
});

app.listen(3000);
