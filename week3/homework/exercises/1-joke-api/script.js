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

const axios = require("axios");

async function printChuckNorrisJoke() {
  try {
    const response = await axios.get("http://api.icndb.com/jokes/random");
    const data = await response.data;
    const joke = data.value.joke;
    console.log(joke);
  } catch (error) {
    console.error(error);
  }
}

printChuckNorrisJoke();
