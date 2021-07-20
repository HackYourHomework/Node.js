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
  // YOUR CODE GOES IN HERE
  const content = { name: "Lama", numberOfPeople: 3 };

  try {
    const data = await fetch(
      "https://reservation100-sandbox.mxapps.io/api/reservations",
      {
        method: "POST",
        body: JSON.stringify(content),
        headers: { "Content-Type": "application/json" },
      }
    );
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}

makeReservation();
