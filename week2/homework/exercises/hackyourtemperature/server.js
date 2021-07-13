const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // middleware to handle the content-type application/x-www-form-urlencoded

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

// post city name
app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  console.log(req.body.cityName);

  res.status(200).send(cityName);
  //rendering the weather page
  // res.status(200).render("weather", { cityName });
});
app.listen(3000, () => console.log("server started ..."));
