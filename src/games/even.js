import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (randomNumber) => {
  let correctAnswer = 'yes';
  if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const getRound = (randomNumber) => {
  const question = `Question: ${randomNumber}`;
  const correctAnswer = getCorrectAnswer(randomNumber);

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
