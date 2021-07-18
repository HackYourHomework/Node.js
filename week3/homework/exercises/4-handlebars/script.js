/**
 * 4. Fun with Handlebars
 *
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentence using handlebars.
 *
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */

const handlebars = require('handlebars');

function drawCard() {
  // YOUR CODE GOES IN HERE
  const cardData = {
    subject: getRandomElement(subjects),
    punchline: getRandomElement(punchlines),
  };

  const card = handlebars.compile('{{subject}} is great to {{punchline}}');

  const compiledCard = card({
    subject: cardData.subject,
    punchline: cardData.punchline,
  });
  console.log(compiledCard);
}

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

drawCard();
