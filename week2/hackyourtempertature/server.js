const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const city = req.body.cityName;
  res.send(city);
});

app.listen(PORT, () => console.log(`The Server Is Running On Port ${PORT}`));
