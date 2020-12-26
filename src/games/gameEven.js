import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundEven = () => {
  const randomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
  const question = `Question: ${randomNumber}`;
  let correctAnswer = 'yes';

  if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRoundEven, description);
};
