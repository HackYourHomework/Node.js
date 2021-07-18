/**
 * 1. Chuck Norris programs do not accept input
 *
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console.
 * Make use of `async/await` and `try/catch`
 *
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */


// Function to work 
function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE

  const express = require('express');
  const app = express();
  const fetch = require('node-fetch');

  try {
    app.get('/', async (req, res) => {
      const apiData = await fetch('http://api.icndb.com/jokes/random');
      const jsonData = await apiData.json();
      res.status(200);
      res.write(jsonData.value.joke);
      res.end();
    });
  } catch (err) {
    if (err) {
      res.status(400);
      res.send(`Invalid Request`);
    }
  }

  app.listen(3000);
}

printChuckNorrisJoke();
