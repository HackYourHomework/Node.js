const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const exphbs = require('express-handlebars');
const PORT = 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/weather', urlencodedParser, (req, res) => {
  const cityName = req.body;
  res.render('home', { data: cityName });
});

app.listen(PORT);
