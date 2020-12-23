import engine from '../index.js';

const gameEven = () => {
  const randomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
  const question = 'Question: ' + randomNumber;
  let correctAnswer = 'yes';
  const target = 'Answer "yes" if the number is even, otherwise answer "no".';

  if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  const gameResult = {
    question,
    correctAnswer,
    target,
  };

  return gameResult;
};

engine(gameEven);

export default gameEven;
