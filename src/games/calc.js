import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What is the result of the expression?';

const startRound = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(1, 3);
  const operation = operators[operatorIndex];

  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);

  const operations = {
    '+': (a, b) => {
      const correctAnswer = String(a + b);

      return {
        correctAnswer,
        question: `Question: ${a} + ${b}`,
      };
    },
    '-': (a, b) => {
      const correctAnswer = String(a - b);

      return {
        correctAnswer,
        question: `Question: ${a} - ${b}`,
      };
    },
    '*': (a, b) => {
      const correctAnswer = String(a * b);

      return {
        correctAnswer,
        question: `Question: ${a} * ${b}`,
      };
    },
  };

  return operations[operation](firstNumber, secondNumber);
};

export default () => {
  run(startRound, description);
};
