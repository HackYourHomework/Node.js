const express = require('express')
const app = express();
const exphbs  = require('express-handlebars');
const fetch = require('node-fetch');
const API_KEY = require('./sources/keys.json').API_KEY;
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));


const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/weather', async (req, res) => {
    const cityName = req.body.cityName;
    if(!cityName){
        res.render('index', { weatherText: "Please enter city name!"});
        return;
    }
    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`);
        const data = await result.json();
        if(data.cod == 200){
            res.render('index', { weatherText: `The temperature in ${data.name} is ${data.main.temp} °C!`});
        }else{
            res.render('index', { weatherText: "City is not found!"});
        }
        
    } catch (error) {
        res.status(501).render('index', { weatherText: "Something went Wrong Try again later!"});
        console.log(error);
    }
    
});
app.use((req, res) =>res.redirect('/'));
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})