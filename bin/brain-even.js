#!/usr/bin/env node
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log('Hello, ' + username);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let iterCounter = 0;
let isAnswerRight = true;

const gameEven = () => {
  const randomNumber = Math.floor(Math.random() * (20 - 1)) + 1;

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
  }

  if (randomNumber % 2 === 0 && userAnswer === 'yes') {
    console.log('Correct!');
  }

  // Проверка кончилась
};

while (iterCounter < 3 && isAnswerRight === true) {
  gameEven();
  iterCounter += 1;
}

if (iterCounter === 3 && isAnswerRight === true) {
  console.log('Congratulations, ' + username + '!');
}
