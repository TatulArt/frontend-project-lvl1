#!/usr/bin/env node
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log('Hello, ' + username);
console.log('Find the greatest common divisor of given numbers.');

let iterCounter = 0;
let isAnswerRight = true;
const getSmallestNumber = (firstNum, secondNum) => {
  if (firstNum > secondNum) {
    return secondNum;
  }
  return firstNum;
};

const gameGCD = () => {
  const FirstRandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const SecondRandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const smallestNumber = getSmallestNumber(FirstRandomNumber, SecondRandomNumber);
  let GCD = 1;

  console.log('Question: ' + FirstRandomNumber + ' ' + SecondRandomNumber);
  const userAnswer = readlineSync.question('Your answer: ');

  for (let i = 1; i <= smallestNumber; i++) {
    if (FirstRandomNumber % i === 0 && SecondRandomNumber % i === 0) {
      GCD = String(i);
    }
  }

  if (userAnswer === GCD) {
    console.log('Correct!');
  } else {
    isAnswerRight = false;
    console.log('"' + userAnswer + '" is wrong answer ;(.Correct answer was "' + GCD + '".');
    console.log("Let's try again, " + username + '!');
  }
};

while (iterCounter < 3 && isAnswerRight === true) {
  gameGCD();
  iterCounter += 1;
}

if (iterCounter === 3 && isAnswerRight === true) {
  console.log('Congratulations, ' + username + '!');
}
