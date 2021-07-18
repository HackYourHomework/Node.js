/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

function makeReservation() {
  // YOUR CODE GOES IN HERE
  const express = require('express');
  const app = express();
  app.use(express.json());
  const fetch = require('node-fetch');

  app.get('/', async (req, res) => {
    try {
      const api_Url =
        'https://reservation100-sandbox.mxapps.io/rest-doc/api/swagger.json';
      const apiData = await fetch(api_Url, {
        headers: { 'Content-type': 'application/json' },
      });
      const jsonData = await apiData.json();
      res.status(200);
      res.send(jsonData);
    } catch (err) {
      res.status(404);
      res.send('Invalid Request');
    }
  });

  app.post('/reservations', (req, res) => {
    if (req.body.numberOfPeople < 200) {
      res.status(200);
      console.log(
        `Congrats Mr.${req.body.name} you have successfully reserved the seats for ${req.body.numberOfPeople} People`,
      );
      res.end();
    } else {
      res.status(404);
      console.log('We have no Available Seats');
      res.send();
    }
  });

  app.listen(3000);
}

makeReservation();
