function getIconUrl(description) {
  let url = "";
  switch (description) {
    case "clouds":
      url = "../img/clouds.png";
      break;
    case "clear":
      url = "../img/sunny.png";
      break;
    case "clear sky":
      url = "../img/sunny.png";
      break;
    case "thunderstorm":
      url = "../img/storm.png";
      break;
    case "drizzle":
      url = "../img/cloudy(1).png";
      break;
    case "rain":
      url = "../img/rain.png";
      break;
    case "snow":
      url = "../img/snowy.png";
      break;
    case "extreme":
      url = "../img/extreme.png";
      break;
    case "few clouds":
      url = "../img/clouds.png";
      break;
    case "broken clouds":
      url = "../img/broken-clouds.png";
      break;
    case "overcast clouds":
      url = "../img/overcast-clouds.png";
      break;
    default:
      url = "../img/sunny.png";
      break;
  }
  return url;
}
module.exports = getIconUrl;
