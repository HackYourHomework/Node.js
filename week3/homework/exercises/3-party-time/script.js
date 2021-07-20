/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
const fetch = require("node-fetch");
 
async function makeReservation(url, name, num) {
  const dataFetch = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, numberOfPeople: num}),
  });
  const response = await dataFetch.json();

  console.log(response);
}

makeReservation('https://reservation100-sandbox.mxapps.io/api/reservations', 'Bassam', 7);
