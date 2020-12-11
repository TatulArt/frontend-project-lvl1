#!/usr/bin/env node
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log('Hello, ' + username);
console.log('What is the result of the expression?');

let iterCounter = 0;
let isAnswerRight = true;

const gameCalc = () => {
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
    } else {
      isAnswerRight = false;
      console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + correctAnswer + '".');
      console.log("Let's try again, " + username + '!');
    }
    // Проверка окончена
  }
  // Умножение закончилось
};

while (iterCounter < 3 && isAnswerRight === true) {
  gameCalc();
  iterCounter += 1;
}

if (iterCounter === 3 && isAnswerRight === true) {
  console.log('Congratulations, ' + username + '!');
}
