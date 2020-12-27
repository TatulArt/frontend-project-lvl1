import run from '../index.js';
import getRandomNumber from '../random-number-utilitie.js';

const description = 'What is the result of the expression?';

const makeOperation = () => {
  const operation = Math.floor(Math.random() * (4 - 1)) + 1;
  const firstRandomNumber = getRandomNumber(30, 1);
  let secondRandomNumber = getRandomNumber(30, 1);
  let question = `Question: ${firstRandomNumber} + ${secondRandomNumber}`;

  if (operation === 2) {
    question = `Question: ${firstRandomNumber} - ${secondRandomNumber}`;
    secondRandomNumber = -secondRandomNumber;
  }

  if (operation === 3) {
    question = `Question: ${firstRandomNumber} * ${secondRandomNumber}`;
    secondRandomNumber = (secondRandomNumber - 1) * firstRandomNumber;
  }

  const correctAnswer = String(firstRandomNumber + secondRandomNumber);

  return {
    correctAnswer,
    question,
  };
};

const getRound = () => {
  const { correctAnswer, question } = makeOperation();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
