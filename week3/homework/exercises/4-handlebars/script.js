/**
 * 4. Fun with Handlebars
 *
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 *
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */
const Handlebars = require("handlebars");

const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon",
];

const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing",
];

function drawCard(array1, array2) {
  subject = getRandomElement(array1);
  punchline = getRandomElement(array2);
  const cardData = { subject, punchline };
  const card = "<h1>{{subject}} is great to {{punchline}}</h1>";
  const template = Handlebars.compile(card);
  const result = template(cardData);
  console.log(result);
  
}

drawCard(subjects, punchlines);

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
