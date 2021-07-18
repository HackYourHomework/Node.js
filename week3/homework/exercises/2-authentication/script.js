/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
function printBooks() {
  // YOUR CODE GOES IN HERE
  const express = require('express');
  const app = express();
  const fetch = require('node-fetch');

  try {
    app.get('/', async (req, res) => {
      const api_Url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
      const apiData = await fetch(api_Url, {
        headers: { Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==' },
      });

      const jsonData = await apiData.json();
      res.status(200);
      console.log(jsonData);
    });
  } catch (err) {
    res.status(404);
    res.send(`Invalid Request`);
  }

  app.listen(3000);
}

printBooks();
