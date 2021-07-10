const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("hello from backend to frontend!");
});

app.listen(PORT, () => console.log(`The Server Is Running On Port ${PORT}`));
