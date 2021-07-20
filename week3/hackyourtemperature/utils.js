const axios = require("axios");

async function fetchData(cityName) {
  try {
    const data = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        encodeURIComponent(cityName) +
        "&appid=1b8f4503346444db80cb1dd1a4069378"
    );
    return (data.data.main.temp - 273.5).toFixed(2) + String.fromCharCode(176);
  } catch (err) {
    console.error(err);
  }
}

module.exports = fetchData;
