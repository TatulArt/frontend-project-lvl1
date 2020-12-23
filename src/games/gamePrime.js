import engine from '../index.js';

const gamePrime = () => {
  const randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
  let isNumberPrime = true;
  let correctAnswer = '';
  const question = 'Question: ' + randomNumber;
  const target = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

  if (randomNumber === 1) {
    isNumberPrime = true;
  }

  const gameResult = {
    question,
    correctAnswer,
    target,
  };

  return gameResult;
};

engine(gamePrime);

export default gamePrime;
