import readlineSync from 'readline-sync';

const gamePrime = () => {
  let iterCounter = 0;
  let isAnswerRight = true;

  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + username);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (iterCounter < 3 && isAnswerRight === true) {
    let isNumberPrime = true;
    let rightAnswer = '';

    if (isNumberPrime === true) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    const randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;

    console.log('Question: ' + randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    for (let i = 0; i < randomNumber; i += 1) {
      if (randomNumber % i === 0 && i !== randomNumber && i !== 1) {
        isNumberPrime = false;
      }
    }
    if (randomNumber === 1) {
      isNumberPrime = true;
    }

    // Проверка корректности ответа юзера
    if (userAnswer !== 'no' && userAnswer !== 'yes') {
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + rightAnswer + '".');
      isAnswerRight = false;
    }

    if (userAnswer === 'yes' && isNumberPrime === false) {
      console.log('"yes" is a wrong answer ;(.Correct answer was "no"');
      isAnswerRight = false;
    }

    if (userAnswer === 'no' && isNumberPrime === true) {
      console.log('"no" is a wrong answer ;(.Correct answer was "yes"');
      isAnswerRight = false;
    }

    if (userAnswer === 'no' && isNumberPrime === false) {
      console.log('Correct!');
      iterCounter += 1;
    }

    if (userAnswer === 'yes' && isNumberPrime === true) {
      console.log('Correct!');
      iterCounter += 1;
    }
    // Проверка окончена
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default gamePrime;
