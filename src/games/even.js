import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
