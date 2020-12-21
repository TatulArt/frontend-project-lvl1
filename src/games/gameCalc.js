import readlineSync from 'readline-sync';

const gameCalc = () => {
  let iterCounter = 0;
  let isAnswerRight = true;

  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + username);
  console.log('What is the result of the expression?');

  while (iterCounter < 3 && isAnswerRight === true) {
    const firstRandomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
    const secondRandomNumber = Math.floor(Math.random() * (30 - 1)) + 1;
    const operation = Math.floor(Math.random() * (4 - 1)) + 1;

    // Сложение
    if (operation === 1) {
      console.log('Question: ' + firstRandomNumber + ' + ' + secondRandomNumber);
      const correctAnswer = String(firstRandomNumber + secondRandomNumber);
      const userAnswer = readlineSync.question('Your answer: ');
      // Проверка корректности ответа юзера
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        iterCounter += 1;
      } else {
        isAnswerRight = false;
        console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + correctAnswer + '".');
        console.log("Let's try again, " + username + '!');
      }
      // Проверка окончена
    }
    // Сложение закончилось

    // Вычитание
    if (operation === 2) {
      console.log('Question: ' + firstRandomNumber + ' - ' + secondRandomNumber);
      const correctAnswer = String(firstRandomNumber - secondRandomNumber);
      const userAnswer = readlineSync.question('Your answer: ');
      // Проверка корректности ответа юзера
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        iterCounter += 1;
      } else {
        isAnswerRight = false;
        console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + correctAnswer + '".');
        console.log("Let's try again, " + username + '!');
      }
      // Проверка окончена
    }
    // Вычитание закончилось

    // Умножение
    if (operation === 3) {
      console.log('Question: ' + firstRandomNumber + ' * ' + secondRandomNumber);
      const correctAnswer = String(firstRandomNumber * secondRandomNumber);
      const userAnswer = readlineSync.question('Your answer: ');
      // Проверка корректности ответа юзера
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        iterCounter += 1;
      } else {
        isAnswerRight = false;
        console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + correctAnswer + '".');
        console.log("Let's try again, " + username + '!');
      }
      // Проверка окончена
    }
  // Умножение закончилось
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default gameCalc;
