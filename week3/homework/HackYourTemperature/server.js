const express = require("express");
const expHbs = require("express-handlebars");
const fetch = require("node-fetch");
const path = require("path");
const API_KEY = Object.values(require("./sources/keys.json"))[0];

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/public", express.static(path.join(__dirname, "/public")));

app.engine("handlebars", expHbs({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/weather", (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  const cityName = req.body.cityName;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    const data = await response.json();
    const temperature = data.main.temp - 273.15;

    if (cityName) {
      res.render("index", {
        weatherText: `The temperature in ${cityName} is ${Math.floor(
          temperature
        )}°C`,
      });
    }
  } catch (err) {
    console.error(err);
    res.render("index", { weatherText: "City is not found!" });
  }
});

app.listen(3000);
