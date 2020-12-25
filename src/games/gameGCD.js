import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameGCD = () => {
  const getSmallestNumber = (firstNum, secondNum) => {
    if (firstNum > secondNum) {
      return secondNum;
    }

    return firstNum;
  };

  const firstRandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const secondRandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const smallestNumber = getSmallestNumber(firstRandomNumber, secondRandomNumber);

  const question = `Question: ${firstRandomNumber} ${secondRandomNumber}`;
  let correctAnswer = 1;

  for (let i = 1; i <= smallestNumber; i += 1) {
    if (firstRandomNumber % i === 0 && secondRandomNumber % i === 0) {
      correctAnswer = String(i);
    }
  }

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(gameGCD, description);
};
