import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(startRound, description);
};
