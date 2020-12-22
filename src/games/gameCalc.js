import readlineSync from 'readline-sync';

const gameCalc = () => {
  let iterCounter = 0;
  let isAnswerRight = true;
  let correctAnswer = '';
  
  // Создание функций для выполнения операций
  const additionOperation = (firstRandomNumber, secondRandomNumber) => {
    console.log('Question: ' + firstRandomNumber + ' + ' + secondRandomNumber);
    correctAnswer = String(firstRandomNumber + secondRandomNumber);
    return correctAnswer;
  }

  const subtractionOperation = (firstRandomNumber, secondRandomNumber) => {
    console.log('Question: ' + firstRandomNumber + ' - ' + secondRandomNumber);
    correctAnswer = String(firstRandomNumber - secondRandomNumber);
    return correctAnswer;
  }

  const multiplicationOperation = (firstRandomNumber, secondRandomNumber) => {
    console.log('Question: ' + firstRandomNumber + ' * ' + secondRandomNumber);
    correctAnswer = String(firstRandomNumber * secondRandomNumber);
    return correctAnswer;
  }
  //
  
  const makeTest = () => {
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iterCounter += 1;
    } else {
      isAnswerRight = false;
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + correctAnswer + '".');
      console.log("Let's try again, " + username + '!');
    }
  }

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
      correctAnswer = additionOperation(firstRandomNumber, secondRandomNumber);
      makeTest();
    }
    // Сложение закончилось

    // Вычитание
    if (operation === 2) {
      correctAnswer = subtractionOperation(firstRandomNumber, secondRandomNumber);
      makeTest();
    }
    // Вычитание закончилось

    // Умножение
    if (operation === 3) {
      correctAnswer = multiplicationOperation(firstRandomNumber, secondRandomNumber);
      makeTest();
    }
  // Умножение закончилось
  }

  if (iterCounter === 3 && isAnswerRight === true) {
    console.log('Congratulations, ' + username + '!');
  }
};

export default gameCalc;
