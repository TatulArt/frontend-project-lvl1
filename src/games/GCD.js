import run from '../index.js';

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

const getRound = (firstRandomNumber, secondRandomNumber) => {
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
