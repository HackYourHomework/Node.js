const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const fetch = require('node-fetch');


const API_KEY = require('./sources/keys.json').API_KEY;
fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`);


app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  const cityName = req.body.cityName;
  if (cityName == "") {
    res.status(400);
    res.render('index', { weatherText: "Please type city name!"});
    return;
  }
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`
    const result = await fetch(url);
    const data = await result.json();
    if(data.cod == 200){
        res.render('index', { weatherText: `${data.name}: ${data.main.temp} C.`});
    }else{
        res.render('index', { weatherText: "City is not found!"});
    }

} catch (error) {
    res.status(501),
    res.render('index', { weatherText: "Error, Try again!"});
    console.log(error);
}
});

app.use((req, res) =>res.redirect('/'));



const PORT = process.env.PORT || 3000;

app.listen(PORT);

