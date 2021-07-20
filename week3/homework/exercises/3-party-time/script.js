/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

async function makeReservation() {
  const fetch = require("node-fetch");

  const resDetails = {
    name: "Mouawya",
    numberOfPeople: 3,
  };
  try {
    const response = await fetch(
      "https://reservation100-sandbox.mxapps.io/api/reservations",
      {
        method: "POST",
        body: JSON.stringify(resDetails),
        headers: { "Content-Type": "application/json" },
      }
    );
    const message = await response.json();
    console.log(message);
  } catch (err) {
    console.error(err);
  }
}

makeReservation();
