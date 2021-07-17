
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
const fetch = require('node-fetch');

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  const content = {
    name: "John Doe",
    numberOfPeople: 3
  }
  try {
    const res = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
    method: 'post',
    body: JSON.stringify(content),
    headers: {'Content-Type': 'application/json'}
    }
    );
    const msg = await res.json();
    console.log(msg);
  } catch (error) {
    console.error(error);
  }
  
}

makeReservation();