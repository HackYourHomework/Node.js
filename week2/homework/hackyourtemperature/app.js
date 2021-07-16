const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 4000;

// Template engine
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.send(cityName);
});

app.listen(PORT, () => console.log(`The Server Is Running On Port ${PORT}`));
