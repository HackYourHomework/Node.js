const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const API_KEY = require("./sources/keys.json").API_KEY;
const fetch = require("node-fetch");

const PORT = process.env.PORT || 4000;

const publicStatic = path.join((__dirname, "./public"));
app.use(express.static(publicStatic));

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
  if (cityName === "") {
    res.render("index", { weatherText: "City is not found!" });
  }

  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`;

  try {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        const kel = data.main.temp;
        const celsius = kel - 273;
        res.render("index", {
          weatherText: cityName + " " + celsius,
        });
      });
  } catch (error) {
    res.status(501).send("Something broke!");
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`The Server Is Running On Port ${PORT}`));
