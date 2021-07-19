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

async function makeReservation() {
  try {
    const response = await fetch(
      "https://reservation100-sandbox.mxapps.io/api/reservations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numbers: 5, Name: "Mohammad al-qusi" }),
      }
    );
    const content = await response.json();

    console.log(content);
  } catch (err) {
    console.log(err.status);
  }
}

makeReservation();
