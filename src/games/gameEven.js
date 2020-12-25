import startGame from '../index.js';

const target = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const randomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
  const question = `Question: ${randomNumber}`;
  let correctAnswer = 'yes';

  if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  const gameResult = {
    question,
    correctAnswer,
  };

  return gameResult;
};

startGame(gameEven, target);

export default gameEven;
