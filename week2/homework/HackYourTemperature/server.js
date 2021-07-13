const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.status(200).send(cityName);
});

app.listen(3000);
