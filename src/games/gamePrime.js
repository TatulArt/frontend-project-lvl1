import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
  let isNumberPrime = true;
  let correctAnswer = '';
  const question = `Question: ${randomNumber}`;

  for (let i = 0; i < randomNumber; i += 1) {
    if (randomNumber % i === 0 && i !== randomNumber && i !== 1) {
      isNumberPrime = false;
    }
  }

  if (isNumberPrime === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  run(gamePrime, description);
};
