const express = require("express");
const fetch = require("node-fetch");
const API_KEY = require("./sources/keys.json").API_KEY;
const app = express();
const exphbs = require("express-handlebars");
const port = process.env.PORT || 3000;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/weather", async (req, res) => {
  const cityName = req.body.cityName;
  if (typeof cityName === "undefined" || cityName === "") {
    res.status(404).render("index", { weatherText: "City is not found!" });
    return;
  }
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    const temp = data.main.temp;
    res.render("index", { weatherText: `${cityName}: ${temp}°C` });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
