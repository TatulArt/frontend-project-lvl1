import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  let result = true;

  for (let i = 0; i < randomNumber; i += 1) {
    if (randomNumber % i === 0 && i !== randomNumber && i !== 1) {
      result = false;
    }
  }

  return result;
};

const getRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
