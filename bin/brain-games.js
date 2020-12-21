#!/usr/bin/env node
import readlineSync from 'readline-sync';

const nameQuestion = () => {
  const answer = readlineSync.question('May I have your name? ');
  return answer;
};

console.log('Welcome to the Brain Games!');
console.log('Hello, ' + nameQuestion() + '!');
