import run from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What is the result of the expression?';

const makeOperation = () => {
  const operation = getRandomNumber(1, 4);
  const firstNumber = getRandomNumber(1, 30);
  let secondNumber = getRandomNumber(1, 30);

  let correctAnswer = 1;
  let question = '';

  const operators = ['+', '-', '*'];

const getRound = () => {
  switch (operators[operation]) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      question = `Question: ${firstNumber} + ${secondNumber}`;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      question = `Question: ${firstNumber} - ${secondNumber}`;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      question = `Question: ${firstNumber} * ${secondNumber}`;
      break;
    default:
      break;
  }

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
}
