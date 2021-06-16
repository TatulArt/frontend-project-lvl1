import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
