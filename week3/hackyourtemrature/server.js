const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  const { cityName } = req.body;
  //const API_KEY = require("./sources/keys.json").API_KEY;
  // every time i use the key from the file it dose not work, so i did it like this!
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=d570fcd3444a0c56909b1551396a4faa`
    );
    const jsonData = await data.json();

    if (cityName === "") {
      res.status(404);
      res.render("index", { weatherText: "City is not found!" });
    } else {
      res.render("index", {
        weatherText: `The temperature in ${cityName} is ${jsonData.main.temp}F`,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.render("index", { weatherText: "City is not found!" });
  }
});

app.listen("3000");
