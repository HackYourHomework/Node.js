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

function drawCard() {
  const cardData = {
    subject: getRandomElement(subjects),
    punchline: getRandomElement(punchlines),
  };
  const data = "{{subject}} is great to {{punchline}}";
  const template = Handlebars.compile(data);
  const result = template(cardData);
  console.log(result);
}
/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  const randomNum = Math.floor(Math.random() * 7);
  return array[randomNum];
}

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
drawCard();
