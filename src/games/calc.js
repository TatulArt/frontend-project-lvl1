import run from '../index.js';

const description = 'What is the result of the expression?';

const makeOperation = (firstRandomNumber, secondRandomNumber) => {
  const operation = Math.floor(Math.random() * (4 - 1)) + 1;
  let SRN = secondRandomNumber;
  let question = `Question: ${firstRandomNumber} + ${secondRandomNumber}`;

  if (operation === 2) {
    question = `Question: ${firstRandomNumber} - ${secondRandomNumber}`;
    SRN = -secondRandomNumber;
  }

  if (operation === 3) {
    question = `Question: ${firstRandomNumber} * ${secondRandomNumber}`;
    SRN = (secondRandomNumber - 1) * firstRandomNumber;
  }

  const correctAnswer = String(firstRandomNumber + SRN);

  return {
    correctAnswer,
    question,
  };
};

const getRound = (firstRandomNumber, secondRandomNumber) => {
  const { correctAnswer, question } = makeOperation(firstRandomNumber, secondRandomNumber);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
