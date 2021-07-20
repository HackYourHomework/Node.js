/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

const fetch = require("node-fetch");
async function printBooks(url) {
  try {
    const dataFetch = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: "Basic YWRtaW46aHZnWDhLbFZFYQ==",
      },
    });
    const data = await dataFetch.json();
    console.log(data);
  } catch(err) {
    console.error("There is an error", err);
  }
}

printBooks("https://restapiabasicauthe-sandbox.mxapps.io/api/books");
