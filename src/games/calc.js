import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => String(a + b),
  '-': (a, b) => String(a - b),
  '*': (a, b) => String(a * b),
};

const operators = Object.keys(operations);

const generateRound = () => {
  const operatorIndex = getRandomNumber(1, operators.length);
  const operator = operators[operatorIndex - 1];

  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = operations[operator](firstNumber, secondNumber);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(generateRound, description);
};
