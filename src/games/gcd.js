import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (firstNumber, secondNumber) => {
  let correctAnswer;

  for (let i = 1; i <= firstNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = String(i);
    }
  }

  return correctAnswer;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
