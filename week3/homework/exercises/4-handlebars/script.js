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
  // YOUR CODE GOES IN HERE
  const cardData = {
    subject: getRandomElement(subjects),
    punchline: getRandomElement(punchlines),
  };
  const card = `${cardData.subject} is great to ${cardData.punchline}`;
  const compiledTemplate = Handlebars.compile(card);
  console.log(compiledTemplate(cardData));
}

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  const random = array[Math.floor(Math.random() * array.length)];
  return random;
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
