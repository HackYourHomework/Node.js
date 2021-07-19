function calcTime(city, offset) {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return { city, date: nd.toDateString(), time: nd.toLocaleTimeString() };
}
module.exports = calcTime;

// resource: https://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/
