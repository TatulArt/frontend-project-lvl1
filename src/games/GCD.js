import run from '../index.js';
import getRandomNumber from '../random-number-utilitie.js';

const description = 'Find the greatest common divisor of given numbers.';

const getSmallestNumber = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    return secondNumber;
  }

  return firstNumber;
};

const getCorrectAnswer = (firstRandomNumber, secondRandomNumber, smallestNumber) => {
  let correctAnswer = 1;

  for (let i = 1; i <= smallestNumber; i += 1) {
    if (firstRandomNumber % i === 0 && secondRandomNumber % i === 0) {
      correctAnswer = String(i);
    }
  }

  return correctAnswer;
};

const getRound = () => {
  const firstRandomNumber = getRandomNumber(30, 1);
  const secondRandomNumber = getRandomNumber(30, 1);
  const smallestNumber = getSmallestNumber(firstRandomNumber, secondRandomNumber);

  const question = `Question: ${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getCorrectAnswer(firstRandomNumber, secondRandomNumber, smallestNumber);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
