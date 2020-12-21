import readlineSync from 'readline-sync';

const gameEven = () => {
  let iterCounter = 0;
  let isAnswerRight = true;

  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + username);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (iterCounter < 3 && isAnswerRight === true) {
    const randomNumber = Math.floor(Math.random() * (30 - 1)) + 1;

    console.log('Question: ' + randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    // Проверка корректности ответа юзера

    if (randomNumber % 2 !== 0 && userAnswer !== 'no' && userAnswer !== 'yes') {
      isAnswerRight = false;
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "no".');
      console.log("Let's try again, " + username + '!');
    }

    if (randomNumber % 2 === 0 && userAnswer !== 'no' && userAnswer !== 'yes') {
      isAnswerRight = false;
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "yes".');
      console.log("Let's try again, " + username + '!');
    }

    if (randomNumber % 2 === 0 && userAnswer === 'no') {
      isAnswerRight = false;
      console.log('"no" is wrong answer ;(.Correct answer was "yes".');
      console.log("Let's try again, " + username + '!');
    }

    if (randomNumber % 2 !== 0 && userAnswer === 'yes') {
      isAnswerRight = false;
      console.log('"yes" is wrong answer ;(.Correct answer was "no".');
      console.log("Let's try again, " + username + '!');
    }

    if (randomNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      iterCounter += 1;
    }

    if (randomNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      iterCounter += 1;
    }

    // Проверка кончилась
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default gameEven;
