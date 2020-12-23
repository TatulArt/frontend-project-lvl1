import engine from '../index.js';

const gameCalc = () => {
  let correctAnswer = '';
  let question = '';
  const target = 'What is the result of the expression?';

  const makeOperation = (firstRandomNumber, secondRandomNumber, operation) => {
    if (operation === 1) {
      question = `Question:  ${firstRandomNumber} + ${secondRandomNumber}`;
      correctAnswer = String(firstRandomNumber + secondRandomNumber);
    }

    if (operation === 2) {
      question = `Question:  ${firstRandomNumber} - ${secondRandomNumber}`;
      correctAnswer = String(firstRandomNumber - secondRandomNumber);
    }

    if (operation === 3) {
      question = `Question:  ${firstRandomNumber} * ${secondRandomNumber}`;
      correctAnswer = String(firstRandomNumber * secondRandomNumber);
    }
  };

  const firstRandomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
  const secondRandomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
  const operation = Math.floor(Math.random() * (4 - 1)) + 1;

  makeOperation(firstRandomNumber, secondRandomNumber, operation);

  const gameResult = {
    question,
    correctAnswer,
    target,
  };

  return gameResult;
};

engine(gameCalc);

export default gameCalc;
