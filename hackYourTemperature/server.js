const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const exphbs = require('express-handlebars');
const fetch = require('node-fetch');
const PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');

// Render the Home Page
app.get('/', (req, res) => {
  res.render('home');
});

// Search the Weather of City
app.post('/weather', urlencodedParser, async (req, res) => {
  try {
    cityName = req.body;
    const apiData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName.cityName}&appid=aad95079755376d27ed883954e1b0449`,
    );

    const responseData = await apiData.json();

    const temp = (responseData.main.temp - 273.15).toFixed(2);
    const selectedCityName = responseData.name;

    res.render('home', {
      weatherData: `The Temperature in ${selectedCityName} is ${temp} degree C`,
    });
  } catch (err) {
    // res.status(404);
    // res.write(`Invalid Request`);

    res.render('home', { weatherData: `The city is not found` });
  }
});

app.listen(PORT);
