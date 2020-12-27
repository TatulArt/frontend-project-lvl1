import run from '../index.js';
import getRandomNumber from '../random-number-utilitie.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (randomNumber) => {
  let correctAnswer = 'yes';

  for (let i = 0; i < randomNumber; i += 1) {
    if (randomNumber % i === 0 && i !== randomNumber && i !== 1) {
      correctAnswer = 'no';
    }
  }

  return correctAnswer;
};

const getRound = () => {
  const randomNumber = getRandomNumber(100, 1);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = `Question: ${randomNumber}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(getRound, description);
};
