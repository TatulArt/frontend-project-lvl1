import startGame from '../index.js';

const target = 'What is the result of the expression?';

const gameCalc = () => {
  let correctAnswer = '';
  let question = '';

  const makeOperation = () => {
    const firstRandomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
    let secondRandomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
    const operation = Math.floor(Math.random() * (4 - 1)) + 1;

    question = `Question: ${firstRandomNumber} + ${secondRandomNumber}`;

    if (operation === 2) {
      question = `Question: ${firstRandomNumber} - ${secondRandomNumber}`;
      secondRandomNumber = -secondRandomNumber;
    }

    if (operation === 3) {
      question = `Question: ${firstRandomNumber} * ${secondRandomNumber}`;
      secondRandomNumber = (secondRandomNumber - 1) * firstRandomNumber;
    }

    correctAnswer = String(firstRandomNumber + secondRandomNumber);
  };

  makeOperation();

  const gameResult = {
    question,
    correctAnswer,
  };

  return gameResult;
};

startGame(gameCalc, target);

export default gameCalc;
