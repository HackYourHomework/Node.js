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
const base64 = require("base-64");

const printBooks = async () => {
  const userName = "admin";
  const passWord = "hvgX8KlVEa";
  try {
    const response = await fetch(
      "https://restapiabasicauthe-sandbox.mxapps.io/api/books",
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + base64.encode(`${userName}:${passWord}`),
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

printBooks();
