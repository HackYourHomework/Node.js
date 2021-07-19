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
const fetch = require("node-fetch");

async function printChuckNorrisJoke() {
  try {
    const url = "http://api.icndb.com/jokes/random";
    const res = await fetch(url);
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

printChuckNorrisJoke();
