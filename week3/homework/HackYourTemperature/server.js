const express = require("express");
const exphbs = require("express-handlebars");
const fetch = require("node-fetch");

const app = express();
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const cityName1 = req.body.cityName;
  const API_KEY = require("./sources/keys.json").API_KEY;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName1}&APPID=${API_KEY}`
  )
    .then((respond) => respond.json())
    .then((json) => {
      const kelvin = json.main.temp;
      const celsius = Math.round(kelvin - 273.15);
      res.render("index", {
        weatherText: `${cityName1}: ${celsius}`,
      });
    })
    .catch((error) => {
      res.render("index", { weatherText: "City is not found!" });
    });
});

app.listen(5000);
