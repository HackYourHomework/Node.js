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

//  const axios = require('axios');

// async function printChuckNorrisJoke(url) {
//   const result = await axios.get(url);
//   console.log(result.data.value.joke);
// }
const fetch = require("node-fetch");
async function printChuckNorrisJoke(url) {
  try {
    const dataFetch = await fetch(url);
    const result = await dataFetch.json();
    console.log(result.value.joke);
  } catch (err) {
    console.timeLog("It is error", err);
  }
}
printChuckNorrisJoke("http://api.icndb.com/jokes/random");
