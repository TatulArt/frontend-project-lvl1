import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What is the result of the expression?';
const result = {};

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => String(a + b),
  '-': (a, b) => String(a - b),
  '*': (a, b) => String(a * b),
};

const startRound = () => {
  const operatorIndex = getRandomNumber(1, 3);
  const operator = operators[operatorIndex];

  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);

  result.question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
  result.correctAnswer = operations[operator](firstNumber, secondNumber);

  return result;
};

export default () => {
  run(startRound, description);
};
