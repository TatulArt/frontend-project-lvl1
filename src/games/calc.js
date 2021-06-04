import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What is the result of the expression?';
const result = {};

const startRound = () => {
  const operation = getRandomNumber(1, 3);
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);

  const operators = ['+', '-', '*'];

  switch (operators[operation]) {
    case '+':
      result.question = `Question: ${firstNumber} + ${secondNumber}`;
      result.correctAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      result.question = `Question: ${firstNumber} - ${secondNumber}`;
      result.correctAnswer = String(firstNumber - secondNumber);
      break;
    case '*':
      result.question = `Question: ${firstNumber} * ${secondNumber}`;
      result.correctAnswer = String(firstNumber * secondNumber);
      break;
    default:
      break;
  }

  return result;
};

export default () => {
  run(startRound, description);
};
