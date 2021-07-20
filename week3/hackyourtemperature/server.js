const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const axios = require("axios");
const fetchData = require("./utils");
const path = require("path");
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  const { cityName } = req.body;
  const data = await fetchData(cityName);
  if (
    typeof data === "undefined" ||
    cityName === "" ||
    cityName === "undefined"
  ) {
    res.render("index", {
      weatherText: `City not found`,
    });
  } else {
    res.render("index", {
      weatherText: `The Temperature in ${cityName} is ${data} C!`,
    });
  }
});

app.listen(3000, () => {
  console.log("You are in port 3000");
});
