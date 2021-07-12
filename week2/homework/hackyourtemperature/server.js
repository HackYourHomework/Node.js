const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = process.env.PORT || 3000;

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  console.log(cityName);
  if (typeof cityName === "undefined" || cityName === "") {
    res.status(400);
    res.send("Invalid request, please enter a city name!");
    return;
  }
  res.send(cityName);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
