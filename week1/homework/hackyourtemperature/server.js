const express = require('express')
const app = express();
const exphbs  = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));


const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    res.send(cityName);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})