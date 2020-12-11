#!/usr/bin/env node
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log('Hello, ' + username);
console.log('What number is missing in the progression?');

let iterCounter = 0;
let isAnswerRight = true;

const gameProgression = () => {
  // Создание массива с прогрессией
  const firstNumberInProgression = Math.floor(Math.random() * (21 - 1)) + 1;
  const progressionValue = Math.floor(Math.random() * (6 - 1)) + 1;
  const missingNumberIndex = Math.floor(Math.random() * (10 - 1)) + 1;
  const questionArray = [firstNumberInProgression];
  for (let i = 0; i < 9; i++) {
    questionArray.push(questionArray[i] + progressionValue);
  }
  const missingNumber = String(questionArray[missingNumberIndex]);
  questionArray[missingNumberIndex] = '..';
  // Создание массива с прогрессией завершено
  console.log('Question: ' + questionArray.join(' '));
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === missingNumber) {
    console.log('Correct!');
  } else {
    console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + missingNumber + '".');
    isAnswerRight = false;
  }
};

while (iterCounter < 3 && isAnswerRight === true) {
  gameProgression();
  iterCounter += 1;
}

if (iterCounter === 3 && isAnswerRight === true) {
  console.log('Congratulations, ' + username + '!');
}
