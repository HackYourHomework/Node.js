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

async function printBooks() {
  try {
    const url = "https://restapiabasicauthe-sandbox.mxapps.io/api/books";
    const baseEncode = "YWRtaW46aHZnWDhLbFZFYQ==";
    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${baseEncode}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
}

printBooks();
