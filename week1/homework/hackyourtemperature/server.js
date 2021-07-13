const express = require('express');
const app = express();
const exphbs = require("express-handlebars");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  if (typeof cityName == "undefined" || cityName == "") {
    res.status(400);
    res.send("Incorrect name, Type a city name!");
    return;
  }
  res.send(cityName);
});

app.get('/', (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT); 