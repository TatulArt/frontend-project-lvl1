#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log('Hello, ' + username);

let iterCounter = 0;
let isAnswerRight = true;

while (iterCounter < 3 && isAnswerRight === true) {
  // Запуск игры
  iterCounter += 1;
}

if (iterCounter === 3 && isAnswerRight === true) {
  console.log('Congratulations, ' + username + '!');
}
