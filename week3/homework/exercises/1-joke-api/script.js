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

function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  fetch("http://api.icndb.com/jokes/random")
    .then((res) => res.json())
    .then(console.log);
}

printChuckNorrisJoke();
