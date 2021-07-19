const calcTime = require("./getTime");
const secToHours = require("./secToHour");
const moment = require("moment");

function weatherData(response, cityName) {
  const { temp, pressure, humidity } = response.main,
    { lon, lat } = response.coord,
    { country, sunrise, sunset } = response.sys,
    { description } = response.weather[0],
    { timezone } = response,
    { speed } = response.wind,
    cTemp = Math.floor(require("./tempKToC")(temp)),
    fTemp = Math.floor(require("./tempKToF")(temp)),
    offset =
      timezone < 0 ? `-${secToHours(timezone)}` : `+${secToHours(timezone)}`,
    { date, time } = calcTime(cityName, offset),
    sunriseTime = moment
      .unix(sunrise)
      .utcOffset(offset * 60)
      .format("HH:mm"),
    sunsetTime = moment
      .unix(sunset)
      .utcOffset(offset * 60)
      .format("HH:mm"),
    iconUrl = require("./getIconUrl")(description);
  return {
    cityName,
    cTemp,
    fTemp,
    country,
    description,
    time,
    date,
    speed,
    humidity,
    pressure,
    sunriseTime,
    sunsetTime,
    iconUrl,
  };
}

module.exports = weatherData;
