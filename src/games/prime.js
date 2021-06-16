import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 0; i < number; i += 1) {
    if (number % i === 0 && i !== number && i !== 1) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
